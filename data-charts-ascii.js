// data-charts.js
// ES-module wrapper that converts the global DATA_CHARTS (from data-charts-ascii.js)
// into the chart arrays that app.js expects.

import "./data-charts-ascii.js"; // side-effect: defines globalThis.DATA_CHARTS

const RAW = globalThis.DATA_CHARTS || {};
const PERSONS = Array.isArray(RAW?.meta?.persons)
  ? RAW.meta.persons
  : ["1sg", "2sg", "3sg", "1pl", "2pl", "3pl"];

function safeArr(v) {
  return Array.isArray(v) ? v : [];
}

function buildVerbChart(lemma, vObj) {
  const gloss = vObj?.gloss ? String(vObj.gloss) : "";
  const charts = vObj?.charts && typeof vObj.charts === "object" ? vObj.charts : {};

  // Flatten all tense-charts into one long “fill the blanks” chart for that lemma.
  const forms = [];
  const labels = [];

  for (const key of Object.keys(charts)) {
    const c = charts[key];
    const label = c?.label ? String(c.label) : String(key);
    const f = safeArr(c?.forms);

    for (let i = 0; i < f.length; i++) {
      forms.push(String(f[i] ?? ""));
      labels.push(`${label} • ${PERSONS[i] ?? `slot ${i + 1}`}`);
    }
  }

  // fallback (shouldn’t happen, but prevents crashes)
  if (!forms.length) {
    forms.push("");
    labels.push("—");
  }

  return {
    id: lemma, // IMPORTANT: this must match activity.chartId
    lemma,
    title: gloss ? `${lemma} — ${gloss}` : lemma,
    forms,
    labels,
  };
}

export const VERB_CHARTS = Object.entries(RAW?.verbs || {}).map(([lemma, vObj]) =>
  buildVerbChart(lemma, vObj)
);

// You don’t currently have pronoun/ending charts in data-charts-ascii.js
export const PRONOUN_CHARTS = [];
export const ENDING_CHARTS = [];

export default {
  VERB_CHARTS,
  PRONOUN_CHARTS,
  ENDING_CHARTS,
};
