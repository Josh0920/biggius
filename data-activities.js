// data-activities.js
// Sidebar activity registry (matches app.js expectations).

import { VOCAB } from "./data-vocab.js";
import { VERB_CHARTS } from "./data-charts.js";

const asArray = (v) => (Array.isArray(v) ? v : []);

function verbChartActivities() {
  // One sidebar item per verb chart (id = lemma)
  return asArray(VERB_CHARTS).map((c) => ({
    id: `verb-${c.id}`,
    group: "Charts",
    title: c.lemma || c.id,
    type: "chart",
    chartGroup: "verbs",
    chartId: c.id,
    tag: "Chart",
  }));
}

const BUILT_INS = [
  {
    id: "vocab_fill",
    group: "Practice",
    title: "Vocab (Fill)",
    type: "vocab_fill",
    tag: String(asArray(VOCAB).length),
  },
  {
    id: "flash",
    group: "Practice",
    title: "Flashcards",
    type: "flash",
    tag: "Cards",
  },
];

export const ACTIVITIES = [...BUILT_INS, ...verbChartActivities()];
export default ACTIVITIES;
