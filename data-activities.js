// data-activities.js
// Central registry of everything that appears in the left sidebar.
// IMPORTANT FIX: avoid module duplication by importing the SAME URLs that the app loads.
// (Do NOT add ?v=... here unless you add it literally everywhere. Best is no query strings.)

import { CHARTS } from "./data-charts.js";
import { VOCAB } from "./data-vocab.js";

/** Safe string */
const s = (v) => (v == null ? "" : String(v));

/** Safe array */
const asArray = (v) => (Array.isArray(v) ? v : []);

/** Create a stable id from a title if none exists */
function slugify(str){
  return s(str)
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64) || "item";
}

/** Dedupe by id while keeping first occurrence */
function dedupeById(items){
  const seen = new Set();
  const out = [];
  for (const it of items){
    const id = s(it?.id);
    if (!id) continue;
    if (seen.has(id)) continue;
    seen.add(id);
    out.push(it);
  }
  return out;
}

// ===== Built-in practice modes =====
const vocabCount = asArray(VOCAB).length;

const BUILT_INS = [
  {
    id: "vocab",
    group: "Practice",
    title: "Vocabulary",
    subtitle: "Greek ↔ English practice",
    kind: "vocab",
    tag: String(vocabCount)
  },
  {
    id: "verbs",
    group: "Practice",
    title: "Verbs",
    subtitle: "Conjugation charts practice",
    kind: "verbs",
    tag: "Practice"
  }
];

// ===== Chart activities (auto-generated) =====
const chartArr = asArray(CHARTS);

const CHART_ACTIVITIES = chartArr.map((c, idx) => {
  const title = c?.title ?? c?.name ?? `Chart ${idx + 1}`;
  const chartId = c?.id ?? slugify(title);

  return {
    id: c?.id ? s(c.id) : `chart-${chartId}`,      // stable unique sidebar id
    group: s(c?.group) || "Charts",
    title: s(title),
    subtitle: s(c?.subtitle ?? c?.description) || "Practice this chart",
    kind: "chart",
    chartId: s(chartId),                          // id used to look up the chart data
    tag: s(c?.tag) || "Chart"
  };
});

// ===== Export =====
export const ACTIVITIES = dedupeById([
  ...BUILT_INS,
  ...CHART_ACTIVITIES
]);

export default ACTIVITIES;
