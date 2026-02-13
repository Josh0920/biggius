// data-activities.js
// Sidebar activity registry (matches app.js expectations).
// Must start with // or import — NO "label:" prefixes.

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
      id: `${chartGroup}-${chartId}`,
      group: groupLabel,
      title: s(title),
      type: "chart",
      chartGroup,
      chartId: s(chartId)
    };
  });
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
  ...chartActivities("verbs", VERB_CHARTS, "Charts"),
  ...chartActivities("pronouns", PRONOUN_CHARTS, "Charts"),
  ...chartActivities("endings", ENDING_CHARTS, "Charts"),
];

export default ACTIVITIES;
