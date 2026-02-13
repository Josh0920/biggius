// data-activities.js
// Must match app.js expectations:
// - activity.type is "vocab_fill" | "flash" | "chart"
// - chart activities include chartGroup ("verbs"|"pronouns"|"endings") and chartId
// - ids must match activeActivityId default "vocab_fill"

import { VOCAB } from "./data-vocab.js";
import { VERB_CHARTS, PRONOUN_CHARTS, ENDING_CHARTS } from "./data-charts.js";

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

function chartActivities(chartGroup, charts, groupLabel){
  return asArray(charts).map((c, idx) => {
    const title = c?.title ?? c?.name ?? `Chart ${idx + 1}`;
    const chartId = c?.id ?? slugify(title);
    return {
      id: `${chartGroup}-${chartId}`,     // unique sidebar id
      group: groupLabel,                  // sidebar group heading
      title: s(title),
      type: "chart",
      chartGroup,                         // app.js uses this to pick CHART_MAP
      chartId: s(chartId)                 // app.js uses this to find the chart
    };
  });
}

// Built-in practice modes (these ids must exist)
const BUILT_INS = [
  {
    id: "vocab_fill",
    group: "Practice",
    title: "Vocab (Fill)",
    type: "vocab_fill"
  },
  {
    id: "flash",
    group: "Practice",
    title: "Flashcards",
    type: "flash"
  }
];

// Chart activities
const chartsVerbs    = chartActivities("verbs",    VERB_CHARTS,    "Charts");
const chartsPronouns = chartActivities("pronouns", PRONOUN_CHARTS, "Charts");
const chartsEndings  = chartActivities("endings",  ENDING_CHARTS,  "Charts");

export const ACTIVITIES = [
  ...BUILT_INS,
  ...chartsVerbs,
  ...chartsPronouns,
  ...chartsEndings
];

export default ACTIVITIES;
