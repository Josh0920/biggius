// data-activities.js
// Sidebar activity registry (matches app.js expectations).

import DATA_CHARTS from "./data-charts-ascii.js";
import VOCAB_DEFAULT from "./data-vocab.js";

const VOCAB = VOCAB_DEFAULT?.VOCAB ?? VOCAB_DEFAULT ?? [];
const asArray = (v) => (Array.isArray(v) ? v : []);
const s = (v) => (v == null ? "" : String(v));

function slugify(str){
  return s(str)
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64) || "item";
}

function verbChartActivities(){
  const verbs = DATA_CHARTS?.verbs ?? {};
  const out = [];

  for (const [lemma, v] of Object.entries(verbs)){
    const charts = v?.charts ?? {};
    const keys = Object.keys(charts);

    // one sidebar item per verb (clicking can show all its charts in your UI)
    out.push({
      id: `verb-${slugify(lemma)}`,
      group: "Charts",
      title: lemma,
      type: "verb",
      chartGroup: "verbs",
      chartId: lemma,
      tag: String(keys.length)
    });
  }

  return out;
}

const BUILT_INS = [
  {
    id: "vocab_fill",
    group: "Practice",
    title: "Vocab (Fill)",
    type: "vocab_fill",
    tag: String(asArray(VOCAB).length)
  },
  {
    id: "flash",
    group: "Practice",
    title: "Flashcards",
    type: "flash",
    tag: "Cards"
  }
];

export const ACTIVITIES = [
  ...BUILT_INS,
  ...verbChartActivities()
];

export default ACTIVITIES;
