// app.js
import { VOCAB } from "./data-vocab.js";
import { VERB_CHARTS, PRONOUN_CHARTS, ENDING_CHARTS } from "./data-charts.js";
import { ACTIVITIES } from "./data-activities.js";

const $ = (s)=>document.querySelector(s);
const $$ = (s)=>Array.from(document.querySelectorAll(s));

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function toast(title, msg){
  $("#toastTitle").textContent = title;
  $("#toastMsg").textContent = msg;
  const el = $("#toast");
  el.classList.add("show");
  clearTimeout(window.__toastT);
  window.__toastT = setTimeout(()=>el.classList.remove("show"), 1400);
}

function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function norm(s){
  return String(s)
    .toLowerCase()
    .replace(/\u00a0/g,' ')
    .replace(/[^a-z0-9\s]/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}

function buildAcceptable(english){
  const raw = String(english);
  const parts = raw.split(/[,;\/]|\bor\b/gi).map(x=>x.trim()).filter(Boolean);
  const set = new Set();
  set.add(norm(raw));
  for(const p of parts) set.add(norm(p));
  raw.split(/—|–/).map(x=>x.trim()).filter(Boolean).forEach(x=>set.add(norm(x)));
  return set;
}

const CHART_MAP = {
  verbs: VERB_CHARTS,
  pronouns: PRONOUN_CHARTS,
  endings: ENDING_CHARTS
};

// -------- Sidebar rendering with search --------
let activeActivityId = "vocab_fill";

function groupActivities(list){
  const map = new Map();
  for(const a of list){
    if(!map.has(a.group)) map.set(a.group, []);
    map.get(a.group).push(a);
  }
  return map;
}

function renderSidebar(){
  const q = $("#activitySearch").value.trim().toLowerCase();
  const filtered = !q
    ? ACTIVITIES
    : ACTIVITIES.filter(a => a.title.toLowerCase().includes(q) || a.group.toLowerCase().includes(q));

  const grouped = groupActivities(filtered);

  const side = $("#sideList");
  side.innerHTML = "";
  for(const [g, items] of grouped.entries()){
    const gt = document.createElement("div");
    gt.className = "groupTitle";
    gt.textContent = g;
    side.appendChild(gt);

    items.sort((a,b)=>a.title.localeCompare(b.title));
    for(const it of items){
      const btn = document.createElement("button");
      btn.className = "itemBtn" + (it.id===activeActivityId ? " active":"");
      btn.dataset.id = it.id;

      const left = document.createElement("div");
      left.style.minWidth = "0";
      left.style.flex = "1 1 auto";
      left.textContent = it.title;

      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = it.type === "chart" ? "Chart" : (it.type==="flash" ? "Cards" : "Type");

      btn.appendChild(left);
      btn.appendChild(tag);

      btn.addEventListener("click", ()=> {
        activeActivityId = it.id;
        resetSessionForActivity();
        renderSidebar();
        renderMain();
      });
      side.appendChild(btn);
    }
  }

  $("#sideMeta").textContent = `${VOCAB.length} vocab • ${VERB_CHARTS.length + PRONOUN_CHARTS.length + ENDING_CHARTS.length} charts`;
}

$("#activitySearch").addEventListener("input", renderSidebar);

// -------- Session State --------
let session = {
  items: [],
  index: 0,
  score: 0,
  streak: 0,
  locked: false,
  chart: null,
  filled: [],
  used: new Set(),
  focus: 0,
  graded: false,
  bank: []
};

function getActiveActivity(){
  return ACTIVITIES.find(a=>a.id===activeActivityId) || ACTIVITIES[0];
}

function setHeader(title, sub){
  $("#mainTitle").textContent = title;
  $("#mainSub").textContent = sub;
}

function updateStats(){
  const total = session.items.length || 0;
  const at = total ? Math.min(session.index+1, total) : 0;
  $("#statProgress").textContent = `${at}/${total}`;
  $("#statScore").textContent = String(session.score);
  $("#statStreak").textContent = String(session.streak);
  const pct = total ? (session.index/total)*100 : 0;
  $("#progressFill").style.width = `${Math.max(0, Math.min(100,pct))}%`;
}

function resetSessionForActivity(){
  const a = getActiveActivity();
  session.index = 0;
  session.score = 0;
  session.streak = 0;
  session.locked = false;

  if(a.type === "vocab_fill" || a.type === "flash"){
    session.items = shuffle(VOCAB); // ALWAYS all vocab
    session.chart = null;
  } else if(a.type === "chart"){
    session.items = [a];
    session.chart = (CHART_MAP[a.chartGroup] || []).find(c=>c.id===a.chartId) || null;
    session.filled = [];
    session.used = new Set();
    session.focus = 0;
    session.graded = false;
    session.bank = session.chart ? shuffle(session.chart.forms) : [];
  }
  updateStats();
}

function nextItem(){
  session.index++;
  session.locked = false;
  updateStats();
  renderMain();
}

function prevItem(){
  if(session.index===0) return;
  session.index--;
  session.locked = false;
  updateStats();
  renderMain();
}

// -------- Renderers --------
function renderMain(){
  const a = getActiveActivity();
  if(a.type === "vocab_fill") return renderVocabFill();
  if(a.type === "flash") return renderFlashcards();
  if(a.type === "chart") return renderChart();
}

function renderVocabFill(){
  setHeader("Vocab Quiz (Fill in the Blank)", "All vocab, one at a time. Type the English gloss and press Enter.");
  const cur = session.items[session.index];
  const root = $("#content");

  if(!cur){
    root.innerHTML = `
      <div class="card">
        <div class="row">
          <div>
            <div style="font-size:18px; font-weight:800;">Done</div>
            <div class="muted">Final score: <b>${session.score}</b> / ${VOCAB.length}</div>
          </div>
          <button class="btn primary" id="restartBtn">Restart</button>
        </div>
      </div>
    `;
    $("#restartBtn").addEventListener("click", ()=>{ resetSessionForActivity(); renderMain(); });
    return;
  }

  const acceptable = Array.from(buildAcceptable(cur.e));

  root.innerHTML = `
    <div class="card">
      <div class="row">
        <div>
          <div class="muted">Greek</div>
          <div class="bigGreek">${escapeHtml(cur.g)}</div>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button class="btn" id="peekBtn">Peek</button>
          <button class="btn" id="skipBtn">Skip</button>
        </div>
      </div>

      <div style="margin-top:14px;">
        <div class="muted">English (type and press Enter)</div>
        <form id="answerForm" autocomplete="off">
          <input id="answerInput" class="input" type="text" placeholder="Type the meaning…" />
        </form>
        <div id="fb" style="display:none;" class="feedback"></div>
      </div>

      <div class="row" style="margin-top:14px;">
        <div class="muted">Shortcuts: <span class="kbd">Enter</span> submit • <span class="kbd">N</span> next • <span class="kbd">P</span> previous</div>
        <button class="btn primary" id="nextBtn" disabled>Next</button>
      </div>
    </div>
  `;

  const input = $("#answerInput");
  const fb = $("#fb");
  const nextBtn = $("#nextBtn");
  const form = $("#answerForm");

  input.focus();

  function grade(){
    if(session.locked) return;
    const guessRaw = input.value;
    const guess = norm(guessRaw);
    const ok = acceptable.includes(guess) || buildAcceptable(cur.e).has(guess);

    session.locked = true;

    if(ok){
      input.classList.add("ok");
      fb.className = "feedback ok";
      fb.innerHTML = `<b>Correct.</b> ${escapeHtml(cur.e)}`;
      session.score++;
      session.streak++;
      toast("Correct", `Streak: ${session.streak}`);
    } else {
      input.classList.add("bad");
      fb.className = "feedback bad";
      fb.innerHTML = `<b>Wrong.</b> Correct answer: ${escapeHtml(cur.e)}`;
      session.streak = 0;
      toast("Not quite", "Streak reset.");
    }
    fb.style.display = "block";
    nextBtn.disabled = false;
    nextBtn.focus();
    updateStats();
  }

  form.addEventListener("submit", (e)=>{ e.preventDefault(); grade(); });
  nextBtn.addEventListener("click", ()=> nextItem());

  $("#peekBtn").addEventListener("click", ()=>{ toast("Answer", cur.e); });
  $("#skipBtn").addEventListener("click", ()=>{
    session.locked = false;
    session.streak = 0;
    toast("Skipped", "Moving on.");
    nextItem();
  });
}

function renderFlashcards(){
  setHeader("Flashcards", "All vocab, flip to reveal. Mark ✓ or ✕.");
  const cur = session.items[session.index];
  const root = $("#content");

  if(!cur){
    root.innerHTML = `
      <div class="card">
        <div class="row">
          <div>
            <div style="font-size:18px; font-weight:800;">Done</div>
            <div class="muted">Score: <b>${session.score}</b> / ${VOCAB.length} (based on ✓ clicks)</div>
          </div>
          <button class="btn primary" id="restartBtn">Restart</button>
        </div>
      </div>
    `;
    $("#restartBtn").addEventListener("click", ()=>{ resetSessionForActivity(); renderMain(); });
    return;
  }

  root.innerHTML = `
    <div class="card" id="flashCard" style="cursor:pointer;">
      <div class="muted">Click to flip</div>
      <div class="bigGreek" id="flashFace">${escapeHtml(cur.g)}</div>
      <div class="muted" id="flashHint">Greek → English</div>

      <div class="row" style="margin-top:14px;">
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button class="btn" id="missBtn">✕ Missed</button>
          <button class="btn primary" id="gotBtn">✓ Got it</button>
        </div>
        <div class="muted">Shortcuts: <span class="kbd">Space</span> flip • <span class="kbd">N</span> next</div>
      </div>
    </div>
  `;

  let flipped = false;
  const face = $("#flashFace");
  const hint = $("#flashHint");

  function flip(){
    flipped = !flipped;
    face.textContent = flipped ? cur.e : cur.g;
    hint.textContent = flipped ? "English revealed" : "Greek → English";
  }

  $("#flashCard").addEventListener("click", (e)=>{
    if(e.target.closest("button")) return;
    flip();
  });

  $("#gotBtn").addEventListener("click", ()=>{
    session.score++;
    session.streak++;
    toast("Nice", `Streak: ${session.streak}`);
    nextItem();
  });
  $("#missBtn").addEventListener("click", ()=>{
    session.streak = 0;
    toast("Logged", "Keep going.");
    nextItem();
  });
}

function renderChart(){
  const a = getActiveActivity();
  const chart = session.chart;
  const root = $("#content");
  if(!chart){
    root.innerHTML = `<div class="card"><b>Chart not found.</b></div>`;
    return;
  }

  setHeader(chart.title, `${a.group} • Click options to fill blanks in order. Click a blank to change focus.`);

  if(!session.bank || session.bank.length !== chart.forms.length){
    session.bank = shuffle(chart.forms);
  }

  const total = chart.forms.length;
  const filledCount = session.filled.filter(Boolean).length;

  function slotHtml(idx){
    const val = session.filled[idx] || "";
    const cls = ["slot", val ? "filled":"", idx===session.focus ? "active":""].join(" ");
    const display = val ? escapeHtml(val) : "_____";
    return `<span class="${cls}" data-slot="${idx}">${display}</span>`;
  }

  let table = "";
  if(total===6 && chart.labels && chart.labels.length===6){
    table = `
      <table class="chartTable">
        <thead><tr><th>Person</th><th>Blank</th></tr></thead>
        <tbody>
          ${chart.labels.map((lab, idx)=>`<tr><td>${escapeHtml(lab)}</td><td>${slotHtml(idx)}</td></tr>`).join("")}
        </tbody>
      </table>
    `;
  } else {
    table = `
      <table class="chartTable">
        <thead><tr><th>Slot</th><th>Blank</th></tr></thead>
        <tbody>
          ${chart.labels.map((lab, idx)=>`<tr><td>${escapeHtml(lab)}</td><td>${slotHtml(idx)}</td></tr>`).join("")}
        </tbody>
      </table>
    `;
  }

  root.innerHTML = `
    <div class="chartWrap">
      <div class="card">
        <div class="row">
          <div class="muted">Filled: <b>${filledCount}</b> / ${total}</div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button class="btn" id="clearBtn">Clear</button>
            <button class="btn" id="reshuffleBtn">Reshuffle</button>
            <button class="btn primary" id="gradeBtn">Grade</button>
          </div>
        </div>

        <div style="margin-top:12px;">
          ${table}
        </div>

        <div class="row" style="margin-top:14px;">
          <div class="muted">Shortcuts: <span class="kbd">U</span> undo • <span class="kbd">R</span> reshuffle</div>
          <button class="btn primary" id="doneNextBtn" ${session.graded ? "" : "disabled"}>Keep practicing</button>
        </div>

        <div id="chartStatus" class="muted" style="margin-top:10px;"></div>
      </div>

      <div class="card">
        <div class="row">
          <div>
            <div style="font-weight:800;">Option bank</div>
            <div class="muted">Click the correct option for the focused blank.</div>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button class="btn" id="undoBtn">Undo</button>
            <button class="btn" id="revealBtn">Reveal next</button>
          </div>
        </div>

        <div id="bank" class="bank"></div>
      </div>
    </div>
  `;

  function pickTargetSlot(){
    if(!session.filled[session.focus]) return session.focus;
    for(let j=session.focus+1; j<total; j++) if(!session.filled[j]) return j;
    for(let j=0; j<total; j++) if(!session.filled[j]) return j;
    return -1;
  }

  function repaintSlots(){
    const slotEls = $$("#content .slot");
    slotEls.forEach((el, idx)=>{
      el.classList.remove("correct","wrong");
      const val = session.filled[idx];
      if(!val || !session.graded) return;
      el.classList.add(val===chart.forms[idx] ? "correct":"wrong");
    });
  }

  function renderBank(){
    const bank = $("#bank");
    bank.innerHTML = "";
    for(const form of session.bank){
      const used = session.used.has(form);
      const pill = document.createElement("button");
      pill.className = "pillOpt" + (used ? " used":"");
      pill.type = "button";
      pill.textContent = form;
      if(used) pill.disabled = true;

      pill.addEventListener("click", ()=>{
        if(session.graded) return;
        const target = pickTargetSlot();
        if(target===-1) return;
        session.filled[target] = form;
        session.used.add(form);
        session.focus = Math.min(target+1, total-1);
        renderMain();
      });
      bank.appendChild(pill);
    }
  }

  $$("#content .slot").forEach(s => {
    s.addEventListener("click", ()=>{
      session.focus = Number(s.dataset.slot);
      renderMain();
    });
  });

  $("#clearBtn").addEventListener("click", ()=>{
    session.filled = [];
    session.used = new Set();
    session.focus = 0;
    session.graded = false;
    session.bank = shuffle(chart.forms);
    toast("Cleared", "Chart cleared.");
    renderMain();
  });
  $("#reshuffleBtn").addEventListener("click", ()=>{
    session.bank = shuffle(chart.forms);
    toast("Reshuffled", "Option bank reshuffled.");
    renderMain();
  });
  $("#undoBtn").addEventListener("click", ()=>{
    let last=-1;
    for(let k=total-1;k>=0;k--) if(session.filled[k]) { last=k; break; }
    if(last===-1) return;
    const removed=session.filled[last];
    session.filled[last]=null;
    session.used = new Set(session.filled.filter(Boolean));
    session.focus = last;
    session.graded = false;
    toast("Undo", `Removed: ${removed}`);
    renderMain();
  });
  $("#revealBtn").addEventListener("click", ()=>{
    const target = pickTargetSlot();
    if(target===-1) return;
    toast("Next answer", chart.forms[target]);
  });

  $("#gradeBtn").addEventListener("click", ()=>{
    session.graded = true;
    const correct = chart.forms.reduce((acc, f, idx)=>acc + ((session.filled[idx]||"")===f ? 1:0), 0);
    $("#chartStatus").innerHTML = `Score: <b>${correct}</b> / ${total}`;
    toast("Graded", `${correct}/${total}`);
    $("#doneNextBtn").disabled = false;
    repaintSlots();
  });

  $("#doneNextBtn").addEventListener("click", ()=>{
    session.filled = [];
    session.used = new Set();
    session.focus = 0;
    session.graded = false;
    session.bank = shuffle(chart.forms);
    toast("Again", "Fresh run.");
    renderMain();
  });

  renderBank();
  repaintSlots();
  $("#chartStatus").textContent = session.graded ? "Graded. Fix mistakes or click “Keep practicing”." : "Fill the blanks, then click Grade.";
}

// -------- Keyboard shortcuts --------
document.addEventListener("keydown", (e)=>{
  const a = getActiveActivity();
  if(e.key.toLowerCase()==="n") {
    if(a.type==="vocab_fill") {
      const nextBtn = $("#nextBtn");
      if(nextBtn && !nextBtn.disabled) nextBtn.click();
      else if(session.locked) nextItem();
    } else if(a.type==="flash") {
      nextItem();
    }
  }
  if(e.key.toLowerCase()==="p") {
    if(a.type==="vocab_fill") prevItem();
  }
  if(a.type==="flash" && e.code==="Space") {
    e.preventDefault();
    const card = $("#flashCard");
    if(card) card.click();
  }
  if(a.type==="chart" && e.key.toLowerCase()==="r") {
    const btn = $("#reshuffleBtn"); if(btn) btn.click();
  }
  if(a.type==="chart" && e.key.toLowerCase()==="u") {
    const btn = $("#undoBtn"); if(btn) btn.click();
  }
});

// -------- Init --------
renderSidebar();
resetSessionForActivity();
renderMain();
