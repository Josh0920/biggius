/* app.js
   Works with the index.html I gave you (tabs + vocab/verbs/charts/activities).
   NO imports. This expects your data files to attach to window, e.g.:

   - data-vocab.js     -> window.GK_VOCAB = { items:[{g:"λύω", e:"I loose", unit:"", pos:"verb"}...] }
                        (or window.VOCAB = [...] also supported)

   - data-charts.js    -> window.GK_CHARTS = { items:[{id,title,type,labels,forms}...] }
                        (or window.VERB_CHARTS / PRONOUN_CHARTS / ENDING_CHARTS also supported)

   - data-activities.js -> window.GK_ACTIVITIES (the API object I gave you)

   - verb-engine.js    -> either window.GK_VERBS = { items:[...] } OR window.VerbEngine = {...}

   If anything is missing, the UI will show a clear message instead of silently showing 0.
*/

(() => {
  "use strict";

  // ---------- DOM helpers ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // ---------- tiny utils ----------
  const escapeHtml = (str) =>
    String(str ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const norm = (s) =>
    String(s ?? "")
      .toLowerCase()
      .replace(/\u00a0/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const buildAcceptableEnglish = (english) => {
    const raw = String(english ?? "");
    const parts = raw
      .split(/[,;\/]|\bor\b/gi)
      .map((x) => x.trim())
      .filter(Boolean);

    const set = new Set();
    set.add(norm(raw));
    for (const p of parts) set.add(norm(p));
    raw
      .split(/—|–/)
      .map((x) => x.trim())
      .filter(Boolean)
      .forEach((x) => set.add(norm(x)));
    return set;
  };

  // ---------- normalize data sources (support multiple formats) ----------
  function getVocabItems() {
    // Preferred: {items:[...]}
    if (window.GK_VOCAB && Array.isArray(window.GK_VOCAB.items)) return window.GK_VOCAB.items;

    // Common alternates
    if (Array.isArray(window.GK_VOCAB)) return window.GK_VOCAB;
    if (Array.isArray(window.VOCAB)) return window.VOCAB;

    // If a module-style export accidentally got bundled, you might have window.default, etc.
    return [];
  }

  function getChartItems() {
    // Preferred: {items:[...]}
    if (window.GK_CHARTS && Array.isArray(window.GK_CHARTS.items)) return window.GK_CHARTS.items;

    // Alternate: separate arrays
    const a = [];
    if (Array.isArray(window.VERB_CHARTS)) a.push(...window.VERB_CHARTS);
    if (Array.isArray(window.PRONOUN_CHARTS)) a.push(...window.PRONOUN_CHARTS);
    if (Array.isArray(window.ENDING_CHARTS)) a.push(...window.ENDING_CHARTS);

    // Or a single array
    if (Array.isArray(window.GK_CHARTS)) return window.GK_CHARTS;

    return a;
  }

  function getVerbList() {
    if (window.GK_VERBS && Array.isArray(window.GK_VERBS.items)) return window.GK_VERBS.items;
    if (Array.isArray(window.GK_VERBS)) return window.GK_VERBS;
    if (Array.isArray(window.VERBS)) return window.VERBS;
    return [];
  }

  function getActivities() {
    // Preferred: GK_ACTIVITIES API from my data-activities.js
    if (window.GK_ACTIVITIES && typeof window.GK_ACTIVITIES.all === "function") {
      return window.GK_ACTIVITIES.all();
    }
    // Alternate: plain array
    if (Array.isArray(window.ACTIVITIES)) return window.ACTIVITIES;
    return [];
  }

  // ---------- global UI state ----------
  const state = {
    view: "vocab",
    search: "",
    // vocab
    vocabPool: [],
    vocabIndex: 0,
    vocabStreak: 0,
    vocabRecent: [],
    // verbs
    activeVerbId: "",
    // charts
    activeChartId: "",
    // activities
    activeActivityId: "",
  };

  // ---------- tab switching ----------
  function setView(view) {
    state.view = view;

    // tabs
    $$(".tab").forEach((b) => b.setAttribute("aria-selected", b.dataset.tab === view ? "true" : "false"));

    // panels
    $$("section.panel[data-view]").forEach((sec) => {
      sec.classList.toggle("hidden", sec.dataset.view !== view);
    });

    // optional: render per view
    if (view === "vocab") renderVocabPrompt();
    if (view === "verbs") renderVerbs();
    if (view === "charts") renderCharts();
    if (view === "activities") renderActivities();
  }

  // ---------- global search (optional; you can wire deeper later) ----------
  function applyGlobalSearch(q) {
    state.search = String(q ?? "").trim().toLowerCase();

    // For now: just repopulate dropdowns/pools using search
    buildVocabPool();
    renderVocabPrompt();
    fillVerbSelect();
    fillChartSelect();
    fillActivitySelect();
  }

  // ---------- VOCAB ----------
  function buildVocabPool() {
    const vocab = getVocabItems();
    const unit = $("#vocabUnit")?.value || "all";
    const pos = $("#vocabPartOfSpeech")?.value || "all";
    const poolSize = Number($("#vocabPoolSize")?.value || 50);

    let items = vocab.slice();

    // normalize expected shape: {g,e,unit,pos}
    items = items
      .map((it) => {
        // allow {greek, english}
        const g = it.g ?? it.greek ?? it.gr ?? it.word ?? it.form ?? "";
        const e = it.e ?? it.english ?? it.gloss ?? it.meaning ?? "";
        return { ...it, g, e };
      })
      .filter((it) => it.g && it.e);

    if (unit !== "all") items = items.filter((it) => String(it.unit ?? it.lesson ?? "") === unit);
    if (pos !== "all") items = items.filter((it) => String(it.pos ?? it.partOfSpeech ?? "other").toLowerCase() === pos);

    if (state.search) {
      items = items.filter((it) => {
        const hay = `${it.g} ${it.e}`.toLowerCase();
        return hay.includes(state.search);
      });
    }

    // shuffle and slice pool
    items = shuffle(items).slice(0, Math.max(5, poolSize));

    state.vocabPool = items;
    state.vocabIndex = 0;

    // counts
    $("#vocabCount").textContent = `${items.length} items`;
  }

  function renderVocabAnswerArea(item) {
    const mode = $("#vocabMode")?.value || "multiple_choice";
    const dir = $("#vocabDirection")?.value || "gr_to_en";
    const area = $("#vocabAnswerArea");
    const feedback = $("#vocabFeedback");

    if (!area) return;

    feedback.textContent = "";

    const promptText = dir === "gr_to_en" ? item.g : item.e;

    $("#vocabPrompt").textContent = promptText || "—";
    $("#vocabMeta").textContent = `#${state.vocabIndex + 1}/${state.vocabPool.length}`;

    // Helper to grade
    const mark = (ok, revealText = "") => {
      if (ok) {
        state.vocabStreak += 1;
        $("#vocabStreak").textContent = `Streak: ${state.vocabStreak}`;
        feedback.textContent = "✅ Correct";
      } else {
        state.vocabStreak = 0;
        $("#vocabStreak").textContent = `Streak: ${state.vocabStreak}`;
        feedback.textContent = revealText ? `❌ ${revealText}` : "❌ Incorrect";
      }

      // recent log
      const line = ok
        ? `✅ ${promptText}`
        : `❌ ${promptText} → ${dir === "gr_to_en" ? item.e : item.g}`;
      state.vocabRecent.unshift(line);
      state.vocabRecent = state.vocabRecent.slice(0, 8);
      const recentBox = $("#vocabRecent");
      if (recentBox) recentBox.textContent = state.vocabRecent.join("\n");
    };

    // Render per mode
    if (mode === "true_false") {
      // create a statement; sometimes wrong
      const falseRate = 0.45;
      const isFalse = Math.random() < falseRate;
      let shownAnswer = dir === "gr_to_en" ? item.e : item.g;

      if (isFalse) {
        const other = state.vocabPool[Math.floor(Math.random() * state.vocabPool.length)];
        if (other) shownAnswer = dir === "gr_to_en" ? other.e : other.g;
      }

      area.innerHTML = `
        <div class="notice">
          <div class="muted" style="margin-bottom:6px;">Does this match?</div>
          <div class="mono" style="font-size:16px;"><b>${escapeHtml(promptText)}</b> = ${escapeHtml(shownAnswer)}</div>
          <div style="height:10px"></div>
          <div class="row">
            <button class="btn" id="tfTrue">True</button>
            <button class="btn" id="tfFalse">False</button>
          </div>
        </div>
      `;

      $("#tfTrue").onclick = () => mark(!isFalse, `Correct: ${dir === "gr_to_en" ? item.e : item.g}`);
      $("#tfFalse").onclick = () => mark(isFalse, `Correct: ${dir === "gr_to_en" ? item.e : item.g}`);
      return;
    }

    if (mode === "multiple_choice") {
      // Build choices (correct + random)
      const correct = dir === "gr_to_en" ? item.e : item.g;
      const choices = new Set([correct]);

      while (choices.size < 4 && state.vocabPool.length) {
        const r = state.vocabPool[Math.floor(Math.random() * state.vocabPool.length)];
        const cand = dir === "gr_to_en" ? r.e : r.g;
        if (cand) choices.add(cand);
      }

      const opts = shuffle(Array.from(choices));
      area.innerHTML = `
        <div class="row" style="flex-direction:column; align-items:stretch;">
          ${opts
            .map(
              (c) =>
                `<button class="btn vocabChoice" data-val="${escapeHtml(c)}" style="text-align:left;">${escapeHtml(
                  c
                )}</button>`
            )
            .join("")}
        </div>
      `;

      $$(".vocabChoice", area).forEach((b) => {
        b.onclick = () => {
          const val = b.dataset.val || "";
          mark(val === correct, `Correct: ${correct}`);
          nextVocab();
        };
      });
      return;
    }

    // typing/fill_blank
    area.innerHTML = `
      <div class="row" style="flex-wrap:wrap;">
        <input id="vocabTyping" type="text" placeholder="Type answer…" style="min-width:260px;" autocomplete="off" />
        <button class="btn" id="vocabCheck">Check</button>
      </div>
    `;

    const input = $("#vocabTyping");
    input.focus();

    $("#vocabCheck").onclick = () => {
      const guess = norm(input.value);
      if (!guess) return;

      if (dir === "gr_to_en") {
        const acceptable = buildAcceptableEnglish(item.e);
        const ok = acceptable.has(guess);
        mark(ok, `Correct: ${item.e}`);
      } else {
        // English → Greek: accept exact normalized match (you can expand later)
        const ok = guess === norm(item.g);
        mark(ok, `Correct: ${item.g}`);
      }
      nextVocab();
    };

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") $("#vocabCheck").click();
    });
  }

  function renderVocabPrompt() {
    const vocab = getVocabItems();

    // If vocab never loaded, show a clear message
    if (!vocab.length) {
      $("#vocabCount").textContent = "0 items";
      $("#vocabPrompt").textContent = "—";
      const area = $("#vocabAnswerArea");
      if (area) {
        area.innerHTML = `<div class="notice"><b>No vocab data found.</b><br/>
          Make sure <span class="mono">data-vocab.js</span> defines <span class="mono">window.GK_VOCAB = { items:[...] }</span>
          (or <span class="mono">window.VOCAB = [...]</span>).</div>`;
      }
      return;
    }

    // Build pool if empty or changed
    if (!state.vocabPool.length) buildVocabPool();
    if (!state.vocabPool.length) {
      const area = $("#vocabAnswerArea");
      if (area) area.innerHTML = `<div class="notice">No vocab matches your filters/search.</div>`;
      return;
    }

    const item = state.vocabPool[state.vocabIndex % state.vocabPool.length];
    renderVocabAnswerArea(item);
  }

  function nextVocab() {
    state.vocabIndex = (state.vocabIndex + 1) % Math.max(1, state.vocabPool.length);
    renderVocabPrompt();
  }

  // ---------- VERBS ----------
  function fillVerbSelect() {
    const sel = $("#verbSelect");
    if (!sel) return;

    const list = getVerbList();
    const engine = window.VerbEngine || null;

    // Prefer explicit list if present; else try engine list
    let verbs = list.slice();

    if (!verbs.length && engine && typeof engine.listVerbs === "function") {
      try {
        verbs = engine.listVerbs();
      } catch (_) {}
    }

    // search filter
    if (state.search) {
      verbs = verbs.filter((v) => String(v?.id ?? v?.lemma ?? v?.lexical ?? v).toLowerCase().includes(state.search));
    }

    // Build options
    const prev = sel.value;
    sel.innerHTML = `<option value="">Select a verb…</option>`;

    // Normalize to objects {id,label}
    const normalized = verbs
      .map((v) => {
        if (typeof v === "string") return { id: v, label: v };
        const id = v.id ?? v.lemma ?? v.lexical ?? v.name ?? "";
        const label = v.label ?? v.display ?? v.lemma ?? v.lexical ?? v.name ?? id;
        return { id, label };
      })
      .filter((v) => v.id);

    normalized.sort((a, b) => a.label.localeCompare(b.label));

    for (const v of normalized) {
      const opt = document.createElement("option");
      opt.value = v.id;
      opt.textContent = v.label;
      sel.appendChild(opt);
    }

    if (prev) sel.value = prev;
    $("#verbCount").textContent = `${normalized.length} verbs`;
  }

  function renderVerbs() {
    fillVerbSelect();

    const workspace = $("#verbWorkspace");
    if (!workspace) return;

    const list = getVerbList();
    const engine = window.VerbEngine || null;

    if (!list.length && !(engine && (typeof engine.generateChart === "function" || typeof engine.getChart === "function"))) {
      workspace.innerHTML = `<div class="notice"><b>No verb data/engine found.</b><br/>
        Either define <span class="mono">window.GK_VERBS = { items:[...] }</span> in a data file
        OR expose <span class="mono">window.VerbEngine</span> from <span class="mono">verb-engine.js</span>.</div>`;
      return;
    }

    const verbId = $("#verbSelect")?.value || "";
    const mode = $("#verbMode")?.value || "chart";

    $("#verbHeading").textContent = verbId ? verbId : "—";
    $("#verbMeta").textContent = mode;

    if (!verbId) {
      workspace.innerHTML = `<div class="notice">Pick a verb, then click <b>Go</b> (or hit <b>Random Verb</b>).</div>`;
      return;
    }

    // Try to render a chart from engine if available
    let chart = null;

    if (engine && typeof engine.getChart === "function") {
      try {
        chart = engine.getChart(verbId);
      } catch (_) {}
    } else if (engine && typeof engine.generateChart === "function") {
      try {
        const tense = $("#verbTense")?.value || "all";
        const voice = $("#verbVoice")?.value || "all";
        const mood = $("#verbMood")?.value || "all";
        chart = engine.generateChart(verbId, { tense, voice, mood });
      } catch (_) {}
    }

    if (mode === "chart") {
      if (!chart) {
        workspace.innerHTML = `<div class="notice">I couldn’t generate a chart for <b>${escapeHtml(
          verbId
        )}</b> (engine missing or returned null).<br/>
          If your verbs are purely data-based, you can store a prebuilt chart and render it here.</div>`;
        return;
      }

      // Expect chart: {title?, rows:[{label,forms:[...]}]} OR {labels:[...], forms:[...]}
      const title = chart.title || `Chart • ${verbId}`;
      $("#verbHeading").textContent = title;

      if (Array.isArray(chart.rows)) {
        workspace.innerHTML = `
          <table class="table">
            <thead><tr><th>Label</th><th>Forms</th></tr></thead>
            <tbody>
              ${chart.rows
                .map(
                  (r) =>
                    `<tr><td class="muted">${escapeHtml(r.label ?? "")}</td><td class="mono">${escapeHtml(
                      (r.forms || []).join(" • ")
                    )}</td></tr>`
                )
                .join("")}
            </tbody>
          </table>
        `;
        return;
      }

      if (Array.isArray(chart.labels) && Array.isArray(chart.forms)) {
        workspace.innerHTML = `
          <table class="table">
            <thead><tr><th>Label</th><th>Form</th></tr></thead>
            <tbody>
              ${chart.labels
                .map(
                  (lab, i) =>
                    `<tr><td class="muted">${escapeHtml(lab)}</td><td class="mono">${escapeHtml(chart.forms[i] ?? "")}</td></tr>`
                )
                .join("")}
            </tbody>
          </table>
        `;
        return;
      }

      workspace.innerHTML = `<div class="notice">Chart generated, but format wasn’t recognized. (Check verb-engine output shape.)</div>`;
      return;
    }

    // Other modes are placeholders unless your engine provides a random cell API.
    workspace.innerHTML = `<div class="notice">Mode <b>${escapeHtml(
      mode
    )}</b> is ready for engine hookup. If you want, paste your <span class="mono">verb-engine.js</span> and I’ll wire it cleanly.</div>`;
  }

  function pickRandomVerbId() {
    const sel = $("#verbSelect");
    if (!sel) return;
    const opts = Array.from(sel.options).filter((o) => o.value);
    if (!opts.length) return;
    const o = opts[Math.floor(Math.random() * opts.length)];
    sel.value = o.value;
  }

  // ---------- CHARTS ----------
  function fillChartSelect() {
    const sel = $("#chartSelect");
    if (!sel) return;

    const charts = getChartItems();
    let items = charts.slice();

    if (state.search) {
      items = items.filter((c) => `${c.title ?? ""} ${c.id ?? ""}`.toLowerCase().includes(state.search));
    }

    const prev = sel.value;
    sel.innerHTML = `<option value="">Select a chart…</option>`;

    items
      .slice()
      .sort((a, b) => String(a.title ?? "").localeCompare(String(b.title ?? "")))
      .forEach((c) => {
        const opt = document.createElement("option");
        opt.value = c.id ?? c.title ?? "";
        opt.textContent = c.title ?? c.id ?? "(chart)";
        sel.appendChild(opt);
      });

    if (prev) sel.value = prev;

    $("#chartCount").textContent = `${charts.length} charts`;
  }

  function renderCharts() {
    const viewer = $("#chartViewer");
    if (!viewer) return;

    const charts = getChartItems();
    fillChartSelect();

    if (!charts.length) {
      viewer.innerHTML = `<div class="notice"><b>No charts found.</b><br/>
        Define <span class="mono">window.GK_CHARTS = { items:[...] }</span> or the arrays
        <span class="mono">VERB_CHARTS</span>, <span class="mono">PRONOUN_CHARTS</span>, <span class="mono">ENDING_CHARTS</span>.
      </div>`;
      return;
    }

    const id = $("#chartSelect")?.value || "";
    if (!id) {
      viewer.innerHTML = `<div class="notice">Select a chart and click <b>Load</b>.</div>`;
      return;
    }

    const chart = charts.find((c) => (c.id ?? c.title) === id) || null;
    if (!chart) {
      viewer.innerHTML = `<div class="notice">Chart not found.</div>`;
      return;
    }

    const labels = chart.labels || [];
    const forms = chart.forms || [];

    if (labels.length && forms.length && labels.length === forms.length) {
      viewer.innerHTML = `
        <div class="card">
          <h3 style="margin:0 0 10px;">${escapeHtml(chart.title ?? chart.id ?? "Chart")}</h3>
          <table class="table">
            <thead><tr><th>Label</th><th>Form</th></tr></thead>
            <tbody>
              ${labels
                .map(
                  (lab, i) =>
                    `<tr><td class="muted">${escapeHtml(lab)}</td><td class="mono">${escapeHtml(forms[i] ?? "")}</td></tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>
      `;
      return;
    }

    viewer.innerHTML = `<div class="notice">Chart format not recognized. Expected {labels:[...], forms:[...]}.</div>`;
  }

  // ---------- ACTIVITIES ----------
  function fillActivitySelect() {
    const sel = $("#activitySelect");
    if (!sel) return;

    const acts = getActivities();
    let items = acts.slice();

    if (state.search) {
      items = items.filter((a) => `${a.title ?? ""} ${(a.tags || []).join(" ")}`.toLowerCase().includes(state.search));
    }

    const prev = sel.value;
    sel.innerHTML = `<option value="">Select an activity…</option>`;

    items
      .slice()
      .sort((a, b) => String(a.title ?? "").localeCompare(String(b.title ?? "")))
      .forEach((a) => {
        const opt = document.createElement("option");
        opt.value = a.id;
        opt.textContent = a.title ?? a.id;
        sel.appendChild(opt);
      });

    if (prev) sel.value = prev;

    $("#activityCount").textContent = `${acts.length} activities`;
  }

  function renderActivities() {
    fillActivitySelect();
    const stage = $("#activityStage");
    if (!stage) return;

    const acts = getActivities();
    if (!acts.length) {
      stage.innerHTML = `<div class="notice"><b>No activities found.</b><br/>
        Make sure <span class="mono">data-activities.js</span> sets <span class="mono">window.GK_ACTIVITIES</span>.
      </div>`;
      return;
    }

    const id = $("#activitySelect")?.value || "";
    if (!id) {
      stage.innerHTML = `<div class="notice">Select an activity and click <b>Start</b>.</div>`;
      return;
    }

    const a = acts.find((x) => x.id === id) || null;
    if (!a) {
      stage.innerHTML = `<div class="notice">Activity not found.</div>`;
      return;
    }

    // Minimal runner: if activity has inline items, render the first item
    if (Array.isArray(a.items) && a.items.length) {
      stage.innerHTML = renderActivityItem(a, 0);
      wireActivityItem(a, 0);
      return;
    }

    // If pool-based (generated in app.js later), show a friendly note
    stage.innerHTML = `<div class="notice">
      <b>${escapeHtml(a.title ?? a.id)}</b><br/>
      This activity is pool-based (${escapeHtml(a.pool?.source ?? "unknown")}).<br/>
      If you want, paste your <span class="mono">data-vocab.js</span>/<span class="mono">data-charts.js</span>/<span class="mono">verb-engine.js</span> and I’ll wire generation so it actually runs questions.
    </div>`;
  }

  function renderActivityItem(activity, idx) {
    const item = activity.items[idx];
    if (!item) return `<div class="notice">No item.</div>`;

    if (activity.kind === "tf") {
      return `
        <div class="card">
          <h3>${escapeHtml(activity.title)}</h3>
          <div class="mono" style="font-size:16px;margin-top:8px;">${escapeHtml(item.statement)}</div>
          <div style="height:10px"></div>
          <div class="row">
            <button class="btn" id="actTrue">True</button>
            <button class="btn" id="actFalse">False</button>
          </div>
          <div id="actFb" class="muted" style="margin-top:10px;"></div>
        </div>
      `;
    }

    if (activity.kind === "fill") {
      return `
        <div class="card">
          <h3>${escapeHtml(activity.title)}</h3>
          <div class="muted" style="margin-top:6px;">${escapeHtml(item.prompt ?? "Prompt")}</div>
          <div style="height:10px"></div>
          <div class="row">
            <input id="actInput" type="text" placeholder="Type answer…" style="min-width:260px;" />
            <button class="btn" id="actCheck">Check</button>
          </div>
          <div id="actFb" class="muted" style="margin-top:10px;"></div>
        </div>
      `;
    }

    return `<div class="notice">Activity kind <b>${escapeHtml(activity.kind)}</b> not wired yet.</div>`;
  }

  function wireActivityItem(activity, idx) {
    const item = activity.items[idx];
    const fb = $("#actFb");

    if (activity.kind === "tf") {
      $("#actTrue").onclick = () => {
        const ok = item.answer === true;
        fb.textContent = ok ? "✅ Correct" : `❌ Incorrect${item.note ? " — " + item.note : ""}`;
      };
      $("#actFalse").onclick = () => {
        const ok = item.answer === false;
        fb.textContent = ok ? "✅ Correct" : `❌ Incorrect${item.note ? " — " + item.note : ""}`;
      };
      return;
    }

    if (activity.kind === "fill") {
      const acceptable = new Set((item.answers || []).map(norm));
      $("#actCheck").onclick = () => {
        const guess = norm($("#actInput").value);
        if (!guess) return;
        const ok = acceptable.size ? acceptable.has(guess) : false;
        fb.textContent = ok ? "✅ Correct" : `❌ Incorrect${item.note ? " — " + item.note : ""}`;
      };
      $("#actInput").addEventListener("keydown", (e) => {
        if (e.key === "Enter") $("#actCheck").click();
      });
    }
  }

  // ---------- SETTINGS (minimal persistence hooks) ----------
  function loadSettings() {
    try {
      const raw = localStorage.getItem("gk_settings");
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  function saveSettings(obj) {
    try {
      localStorage.setItem("gk_settings", JSON.stringify(obj));
      return true;
    } catch {
      return false;
    }
  }

  // ---------- init + wiring ----------
  function wireUI() {
    // Tabs
    $$(".tab").forEach((b) => b.addEventListener("click", () => setView(b.dataset.tab)));

    // Global search
    $("#globalSearch")?.addEventListener("input", (e) => applyGlobalSearch(e.target.value));

    // Vocab controls
    $("#vocabMode")?.addEventListener("change", renderVocabPrompt);
    $("#vocabDirection")?.addEventListener("change", renderVocabPrompt);
    $("#vocabUnit")?.addEventListener("change", () => {
      buildVocabPool();
      renderVocabPrompt();
    });
    $("#vocabPartOfSpeech")?.addEventListener("change", () => {
      buildVocabPool();
      renderVocabPrompt();
    });
    $("#vocabPoolSize")?.addEventListener("change", () => {
      buildVocabPool();
      renderVocabPrompt();
    });

    $("#vocabNext")?.addEventListener("click", nextVocab);
    $("#vocabReveal")?.addEventListener("click", () => {
      const item = state.vocabPool[state.vocabIndex % Math.max(1, state.vocabPool.length)];
      const dir = $("#vocabDirection")?.value || "gr_to_en";
      $("#vocabFeedback").textContent = dir === "gr_to_en" ? `Answer: ${item?.e ?? ""}` : `Answer: ${item?.g ?? ""}`;
    });
    $("#vocabMarkRight")?.addEventListener("click", () => {
      state.vocabStreak += 1;
      $("#vocabStreak").textContent = `Streak: ${state.vocabStreak}`;
      $("#vocabFeedback").textContent = "✅ Marked right";
      nextVocab();
    });
    $("#vocabMarkWrong")?.addEventListener("click", () => {
      state.vocabStreak = 0;
      $("#vocabStreak").textContent = `Streak: ${state.vocabStreak}`;
      $("#vocabFeedback").textContent = "❌ Marked wrong";
      nextVocab();
    });

    // Verbs controls
    $("#verbGo")?.addEventListener("click", renderVerbs);
    $("#verbRandom")?.addEventListener("click", () => {
      pickRandomVerbId();
      renderVerbs();
    });
    $("#verbSelect")?.addEventListener("change", renderVerbs);
    $("#verbMode")?.addEventListener("change", renderVerbs);
    $("#verbTense")?.addEventListener("change", renderVerbs);
    $("#verbVoice")?.addEventListener("change", renderVerbs);
    $("#verbMood")?.addEventListener("change", renderVerbs);

    // Charts controls
    $("#chartLoad")?.addEventListener("click", renderCharts);
    $("#chartSelect")?.addEventListener("change", () => {
      // don't auto-load; keep it explicit
      $("#chartViewer").innerHTML = `<div class="notice">Click <b>Load</b> to view this chart.</div>`;
    });

    // Activities controls
    $("#activityStart")?.addEventListener("click", renderActivities);

    // Top buttons
    $("#btnReset")?.addEventListener("click", () => {
      state.search = "";
      $("#globalSearch").value = "";
      state.vocabRecent = [];
      $("#vocabRecent").textContent = "No recent answers yet.";
      state.vocabStreak = 0;
      $("#vocabStreak").textContent = `Streak: 0`;
      buildVocabPool();
      renderVocabPrompt();
      fillVerbSelect();
      fillChartSelect();
      fillActivitySelect();
      $("#vocabFeedback").textContent = "";
    });

    $("#btnExport")?.addEventListener("click", () => {
      // minimal export: counts + settings snapshot
      const payload = {
        exportedAt: new Date().toISOString(),
        counts: {
          vocab: getVocabItems().length,
          charts: getChartItems().length,
          verbs: getVerbList().length,
          activities: getActivities().length,
        },
        settings: loadSettings(),
      };
      try {
        navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
        alert("Export copied to clipboard.");
      } catch {
        alert("Could not copy export to clipboard.");
      }
    });

    // Settings panel
    const s = loadSettings();
    if ($("#settingTheme")) $("#settingTheme").value = s.theme || "light";
    if ($("#settingSpeed")) $("#settingSpeed").value = s.speed || "normal";

    $("#settingSave")?.addEventListener("click", () => {
      const obj = {
        theme: $("#settingTheme")?.value || "light",
        speed: $("#settingSpeed")?.value || "normal",
      };
      const ok = saveSettings(obj);
      $("#settingStatus").textContent = ok ? "Saved." : "Could not save.";
    });

    $("#settingClear")?.addEventListener("click", () => {
      try {
        localStorage.removeItem("gk_settings");
        $("#settingStatus").textContent = "Cleared.";
      } catch {
        $("#settingStatus").textContent = "Could not clear.";
      }
    });

    $("#btnRebuildIndexes")?.addEventListener("click", () => {
      buildVocabPool();
      fillVerbSelect();
      fillChartSelect();
      fillActivitySelect();
      $("#debugOut").textContent = "Rebuilt indexes.";
    });

    $("#btnSelfTest")?.addEventListener("click", () => {
      const report = {
        GK_VOCAB: !!window.GK_VOCAB || Array.isArray(window.VOCAB),
        vocabCount: getVocabItems().length,
        GK_CHARTS: !!window.GK_CHARTS || !!(window.VERB_CHARTS || window.PRONOUN_CHARTS || window.ENDING_CHARTS),
        chartCount: getChartItems().length,
        GK_ACTIVITIES: !!window.GK_ACTIVITIES,
        activitiesCount: getActivities().length,
        GK_VERBS: !!window.GK_VERBS || Array.isArray(window.VERBS),
        verbCount: getVerbList().length,
        VerbEngine: !!window.VerbEngine,
      };
      $("#debugOut").textContent = JSON.stringify(report, null, 2);
    });
  }

  function populateUnitFilters() {
    const vocab = getVocabItems();
    const unitSel = $("#vocabUnit");
    if (!unitSel) return;

    const units = new Set();
    for (const it of vocab) {
      const u = it.unit ?? it.lesson ?? "";
      if (u !== "" && u != null) units.add(String(u));
    }

    const current = unitSel.value || "all";
    unitSel.innerHTML = `<option value="all">All units</option>`;
    Array.from(units)
      .sort((a, b) => a.localeCompare(b))
      .forEach((u) => {
        const opt = document.createElement("option");
        opt.value = u;
        opt.textContent = u;
        unitSel.appendChild(opt);
      });
    unitSel.value = current;
  }

  function boot() {
    // Update counts immediately
    const vocabCount = getVocabItems().length;
    const chartCount = getChartItems().length;
    const actCount = getActivities().length;

    $("#vocabCount").textContent = `${vocabCount} items`;
    $("#chartCount").textContent = `${chartCount} charts`;
    $("#activityCount").textContent = `${actCount} activities`;

    // Fill filters/selects
    populateUnitFilters();
    buildVocabPool();
    fillVerbSelect();
    fillChartSelect();
    fillActivitySelect();

    // Wire
    wireUI();

    // Default view
    setView("vocab");
  }

  // Wait until DOM + deferred scripts are ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
