/* data-activities.js
   Minimal, schema-first activity definitions for Koine Greek Study.
   This file provides ONLY data + small helpers (no DOM work).
   app.js should read `window.GK_ACTIVITIES` and render the UI.

   Activity Types supported (suggested):
   - "mcq"          multiple choice
   - "tf"           true/false
   - "fill"         fill-in-the-blank (short answer)
   - "ordering"     put items in order
   - "matching"     match left items to right items

   Each activity can optionally specify:
   - pool: where to pull prompts from (e.g., vocab, verbs, charts)
   - items: inline questions/items
   - settings: per-activity defaults (count, shuffle, etc.)

   IMPORTANT:
   - Do NOT put your verb charts here; those belong in verb-engine.js (or a verb data file).
   - Do NOT put your vocab list here; that belongs in data-vocab.js.
*/

(function () {
  "use strict";

  // ---------- tiny helpers (data-side only) ----------
  const uid = () => Math.random().toString(16).slice(2) + Date.now().toString(16);

  /** @param {any[]} arr */
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  /** normalize greek-ish input (lightweight; app.js may do more) */
  const norm = (s) =>
    String(s ?? "")
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase();

  // ---------- base schema ----------
  /*
    Activity object:
    {
      id: "vocab-mcq-001",
      title: "Vocab • Multiple Choice (Greek → English)",
      kind: "mcq",
      description: "Practice vocab with 4-choice questions.",
      tags: ["vocab","mcq","gr_to_en"],
      settings: { count: 20, choiceCount: 4, shuffle: true },
      pool: { source: "vocab", direction: "gr_to_en", unit: "all", pos: "all" },
      items: [...] // optional; if omitted, app.js generates from pool
    }

    Item shapes by kind:
    - mcq: { prompt, choices: [..], answerIndex, note? }
    - tf:  { statement, answer: true|false, note? }
    - fill:{ prompt, answers:[..], note? }
    - ordering: { prompt, items:[..], correct:[..] }
    - matching: { prompt, left:[..], right:[..], pairs:[{l,r}] }
  */

  // ---------- activity library ----------
  const ACTIVITIES = [
    // ---------------- VOCAB ----------------
    {
      id: "vocab-mcq-gr-en",
      title: "Vocab • Multiple Choice (Greek → English)",
      kind: "mcq",
      description: "Pick the correct English gloss for the Greek word.",
      tags: ["vocab", "mcq", "gr_to_en"],
      settings: { count: 20, choiceCount: 4, shuffle: true },
      pool: { source: "vocab", direction: "gr_to_en", unit: "all", pos: "all" },
    },
    {
      id: "vocab-mcq-en-gr",
      title: "Vocab • Multiple Choice (English → Greek)",
      kind: "mcq",
      description: "Pick the correct Greek word for the English gloss.",
      tags: ["vocab", "mcq", "en_to_gr"],
      settings: { count: 20, choiceCount: 4, shuffle: true },
      pool: { source: "vocab", direction: "en_to_gr", unit: "all", pos: "all" },
    },
    {
      id: "vocab-fill-gr-en",
      title: "Vocab • Fill-in (Greek → English)",
      kind: "fill",
      description: "Type the English gloss for the Greek word.",
      tags: ["vocab", "fill", "gr_to_en"],
      settings: { count: 20, shuffle: true, acceptAnyOf: true },
      pool: { source: "vocab", direction: "gr_to_en", unit: "all", pos: "all" },
    },
    {
      id: "vocab-fill-en-gr",
      title: "Vocab • Fill-in (English → Greek)",
      kind: "fill",
      description: "Type the Greek word for the English gloss.",
      tags: ["vocab", "fill", "en_to_gr"],
      settings: { count: 20, shuffle: true, acceptAnyOf: true },
      pool: { source: "vocab", direction: "en_to_gr", unit: "all", pos: "all" },
    },
    {
      id: "vocab-tf-gr-en",
      title: "Vocab • True/False (Greek → English)",
      kind: "tf",
      description: "Decide whether the gloss matches the Greek word.",
      tags: ["vocab", "tf", "gr_to_en"],
      settings: {
        count: 25,
        shuffle: true,
        // app.js can generate wrong pairings at this rate:
        falseRate: 0.45,
      },
      pool: { source: "vocab", direction: "gr_to_en", unit: "all", pos: "all" },
    },

    // ---------------- VERBS ----------------
    {
      id: "verbs-random-form-typing",
      title: "Verbs • Random Form (Typing)",
      kind: "fill",
      description:
        "Given a parsing prompt, type the correct form (generated from your learned endings).",
      tags: ["verbs", "fill", "morphology"],
      settings: {
        count: 20,
        shuffle: true,
        // app.js/verb-engine can decide what to generate:
        include: {
          tense: "all",
          voice: "all",
          mood: "indicative",
          personNumber: "all",
        },
      },
      pool: { source: "verbs", mode: "random_cell" },
    },
    {
      id: "verbs-mcq-parsing",
      title: "Verbs • Parsing (Multiple Choice)",
      kind: "mcq",
      description:
        "Choose the correct parsing for a displayed verb form (generated by verb-engine.js).",
      tags: ["verbs", "mcq", "parsing"],
      settings: { count: 20, choiceCount: 4, shuffle: true },
      pool: { source: "verbs", mode: "random_cell", ask: "parse" },
    },

    // ---------------- CHARTS (DECLENSIONS / PARADIGMS) ----------------
    {
      id: "charts-ordering-paradigm",
      title: "Charts • Put a Paradigm in Order",
      kind: "ordering",
      description:
        "Reorder a shuffled paradigm (e.g., a set of forms) back into the correct sequence.",
      tags: ["charts", "ordering"],
      settings: { count: 10, shuffle: true },
      pool: { source: "charts", mode: "ordering" },
    },
    {
      id: "charts-matching-cases",
      title: "Charts • Matching (Case/Function)",
      kind: "matching",
      description:
        "Match grammatical labels (e.g., case names) to functions/examples. (App can populate.)",
      tags: ["charts", "matching"],
      settings: { count: 10, shuffle: true },
      pool: { source: "charts", mode: "matching" },
    },

    // ---------------- CUSTOM / MANUAL (YOU CAN EDIT THESE FREELY) ----------------
    {
      id: "core-definitions-tf",
      title: "Core Concepts • True/False",
      kind: "tf",
      description: "Quick checks on definitions (perfect tense, reduplication, etc.).",
      tags: ["concepts", "tf"],
      settings: { count: 12, shuffle: true },
      items: [
        {
          id: uid(),
          statement: "In Greek, the perfect tense often conveys a completed action with an ongoing result.",
          answer: true,
          note: "This is the basic idea you’ve been using in practice.",
        },
        {
          id: uid(),
          statement: "Consonant reduplication typically repeats the first consonant with an epsilon.",
          answer: true,
        },
        {
          id: uid(),
          statement: "Vocalic reduplication always adds a sigma.",
          answer: false,
        },
        {
          id: uid(),
          statement: "Primary endings are normally associated with present/future (and perfect active).",
          answer: true,
        },
      ],
    },
  ];

  // ---------- exposed API for app.js ----------
  const API = {
    /** returns deep-ish copy (safe enough for this app) */
    all() {
      return ACTIVITIES.map((a) => ({ ...a, settings: { ...(a.settings || {}) } }));
    },
    /** @param {string} id */
    get(id) {
      const a = ACTIVITIES.find((x) => x.id === id);
      return a ? { ...a, settings: { ...(a.settings || {}) } } : null;
    },
    /** list unique tags */
    tags() {
      const set = new Set();
      for (const a of ACTIVITIES) (a.tags || []).forEach((t) => set.add(t));
      return Array.from(set).sort();
    },
    /** very small validator for debugging */
    validate() {
      const errors = [];
      const seen = new Set();
      for (const a of ACTIVITIES) {
        if (!a.id) errors.push("Activity missing id.");
        if (seen.has(a.id)) errors.push(`Duplicate activity id: ${a.id}`);
        seen.add(a.id);

        if (!a.title) errors.push(`Activity ${a.id} missing title.`);
        if (!a.kind) errors.push(`Activity ${a.id} missing kind.`);
        const hasPool = !!a.pool;
        const hasItems = Array.isArray(a.items) && a.items.length > 0;
        if (!hasPool && !hasItems) errors.push(`Activity ${a.id} needs pool or items.`);
      }
      return { ok: errors.length === 0, errors };
    },

    // exported helpers if you want them in app.js
    _util: { shuffle, norm },
  };

  // Put it on window for plain <script> usage
  window.GK_ACTIVITIES = API;

  // Optional: quick console validation
  try {
    const v = API.validate();
    if (!v.ok) console.warn("[data-activities] validation issues:", v.errors);
  } catch (e) {
    // ignore
  }
})();
