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

  const chartCount = (VERB_CHARTS?.length || 0) + (PRONOUN_CHARTS?.length || 0) + (ENDING_CHARTS?.length || 0);
  $("#sideMeta").textContent = `${VOCAB.length} vocab • ${chartCount} charts`;
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

function updateStats(){
  $("#score").textContent = String(session.score);
  $("#streak").textContent = String(session.streak);
}

function setHeader(title, subtitle){
  $("#mainTitle").textContent = title || "Koine Greek";
  $("#mainSub").textContent = subtitle || "";
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

function renderVocabFill(){
  const root = $("#content");
  const item = session.items[session.index % session.items.length];
  setHeader("Vocab (Fill)", `Answer in English • ${session.index+1}/${session.items.length}`);

  const acceptable = buildAcceptable(item.e);

  root.innerHTML = `
    <div class="card">
      <div class="row">
        <div>
          <div class="muted">Greek</div>
          <div style="font-size:26px;font-weight:800;margin-top:2px;">${escapeHtml(item.g)}</div>
        </div>
        <div class="muted">Score: <b>${session.score}</b></div>
      </div>

      <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap;">
        <input id="ans" class="input" placeholder="Type English…" autocomplete="off" />
        <button class="btn primary" id="check">Check</button>
        <button class="btn" id="skip">Skip</button>
      </div>

      <div id="feedback" style="margin-top:10px;"></div>
    </div>
  `;

  const ans = $("#ans");
  ans.focus();

  function check(){
    if(session.locked) return;
    const val = norm(ans.value);
    const ok = acceptable.has(val);

    session.locked = true;
    const fb = $("#feedback");
    fb.innerHTML = ok
      ? `<div class="ok">✅ Correct</div>`
      : `<div class="bad">❌ Incorrect. Acceptable: <b>${escapeHtml(item.e)}</b></div>`;

    if(ok){
      session.score += 1;
      session.streak += 1;
    }else{
      session.streak = 0;
    }
    updateStats();

    setTimeout(()=>{
      session.locked = false;
      session.index += 1;
      renderMain();
    }, 650);
  }

  $("#check").addEventListener("click", check);
  $("#skip").addEventListener("click", ()=>{
    if(session.locked) return;
    session.locked = true;
    session.streak = 0;
    updateStats();
    setTimeout(()=>{
      session.locked = false;
      session.index += 1;
      renderMain();
    }, 200);
  });
  ans.addEventListener("keydown",(e)=>{ if(e.key==="Enter") check(); });
}

function renderFlash(){
  const root = $("#content");
  const item = session.items[session.index % session.items.length];
  setHeader("Flashcards", `Click to reveal • ${session.index+1}/${session.items.length}`);

  root.innerHTML = `
    <div class="card flashCard" id="flashCard">
      <div class="muted">Greek</div>
      <div class="big">${escapeHtml(item.g)}</div>
      <div class="reveal muted" id="reveal">Click to reveal</div>
      <div class="eng" id="eng" style="display:none;"><b>${escapeHtml(item.e)}</b></div>
      <div style="margin-top:14px;display:flex;gap:10px;">
        <button class="btn primary" id="knew">I knew it</button>
        <button class="btn" id="next">Next</button>
      </div>
    </div>
  `;

  const card = $("#flashCard");
  const reveal = $("#reveal");
  const eng = $("#eng");
  function show(){
    reveal.style.display = "none";
    eng.style.display = "block";
  }
  card.addEventListener("click", show);

  $("#knew").addEventListener("click", (e)=>{
    e.stopPropagation();
    session.score += 1;
    session.streak += 1;
    updateStats();
    session.index += 1;
    renderMain();
  });

  $("#next").addEventListener("click", (e)=>{
    e.stopPropagation();
    session.streak = 0;
    updateStats();
    session.index += 1;
    renderMain();
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

  let table = `
    <table class="chartTable">
      <thead><tr><th>Label</th><th>Blank</th></tr></thead>
      <tbody>
        ${(chart.labels || []).map((lab, idx)=>`<tr><td>${escapeHtml(lab)}</td><td>${slotHtml(idx)}</td></tr>`).join("")}
      </tbody>
    </table>
  `;

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

        <div style="margin-top:14px;">
          <div class="muted" style="margin-bottom:8px;">Options</div>
          <div class="bank" id="bank"></div>
        </div>

        <div id="chartFeedback" style="margin-top:12px;"></div>
      </div>
    </div>
  `;

  const bank = $("#bank");
  bank.innerHTML = session.bank
    .map((f, i)=>`<button class="pill" data-i="${i}">${escapeHtml(f)}</button>`)
    .join("");

  $$("#bank .pill").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const i = Number(btn.dataset.i);
      const val = session.bank[i];
      if(val == null) return;
      session.filled[session.focus] = val;
      session.focus = Math.min(session.focus + 1, total - 1);
      renderChart();
    });
  });

  $$("#content .slot").forEach(el=>{
    el.addEventListener("click", ()=>{
      session.focus = Number(el.dataset.slot);
      renderChart();
    });
  });

  $("#clearBtn").addEventListener("click", ()=>{
    session.filled = [];
    session.focus = 0;
    session.graded = false;
    renderChart();
  });

  $("#reshuffleBtn").addEventListener("click", ()=>{
    session.bank = shuffle(chart.forms);
    renderChart();
  });

  $("#gradeBtn").addEventListener("click", ()=>{
    const fb = $("#chartFeedback");
    const filled = session.filled.map(x=>String(x||""));
    const key = chart.forms.map(x=>String(x||""));
    let correct = 0;
    for(let i=0;i<key.length;i++){
      if(filled[i] === key[i]) correct++;
    }
    const ok = correct === key.length;
    fb.innerHTML = ok
      ? `<div class="ok">✅ Perfect — ${correct}/${key.length}</div>`
      : `<div class="bad">❌ ${correct}/${key.length} correct</div>`;
  });
}

function renderMain(){
  const a = getActiveActivity();
  if(a.type === "vocab_fill") return renderVocabFill();
  if(a.type === "flash") return renderFlash();
  if(a.type === "chart") return renderChart();
  $("#content").innerHTML = `<div class="card"><b>Unknown activity type:</b> ${escapeHtml(a.type)}</div>`;
}

function init(){
  renderSidebar();
  resetSessionForActivity();
  renderMain();
}

init();
