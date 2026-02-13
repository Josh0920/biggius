// data-activities.js
// Central registry of everything that appears in the left sidebar.
// Imports charts so we can auto-generate one activity per chart.
// Also defines the "Vocab" and "Verbs" practice modes.

import { CHARTS } from "./data-charts.js";
import { VOCAB } from "./data-vocab.js";

// Build two built-in practice modes
const BUILT_INS = [
  {
    id: "vocab",
    group: "Practice",
    title: "Vocabulary",
    subtitle: "Greek ↔ English practice",
    kind: "vocab",
    tag: `${Array.isArray(VOCAB) ? VOCAB.length : 0}`
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

// Auto-generate one sidebar activity per chart
const CHART_ACTIVITIES = (Array.isArray(CHARTS) ? CHARTS : []).map((c, idx) => ({
  id: c.id || `chart-${idx + 1}`,
  group: "Charts",
  title: c.title || c.name || `Chart ${idx + 1}`,
  subtitle: c.subtitle || c.description || "Practice this chart",
  kind: "chart",
  chartId: c.id || `chart-${idx + 1}`,
  tag: "Chart"
}));

export const ACTIVITIES = [
  ...BUILT_INS,
  ...CHART_ACTIVITIES
];

export default ACTIVITIES;
