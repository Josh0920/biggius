// data-activities.js
// Central registry of everything that appears in the left sidebar.
// Imports charts so we can auto-generate one activity per chart.
// Also defines the "Vocab" and "Verbs" practice modes.

import { CHARTS } from "./data-charts.js";
import { VOCAB } from "./data-vocab.js";

/**
 * Activity shape:
 * {
 *   id: "unique-id",
 *   group: "Charts" | "Vocab" | "Verbs" | "Other",
 *   title: "Sidebar title",
 *   subtitle: "Short description",
 *   kind: "chart" | "vocab" | "verbs" | "custom",
 *   chartId?: "some-chart-id",
 *   tag?: "pill text" (e.g., "Chart", "Vocab", "Verbs"),
 * }
 */

// 1) Built-in practice modes
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

// 2) Auto-generate one activity per chart in data-charts.js
const CHART_ACTIVITIES = (Array.isArray(CHARTS) ? CHARTS : []).map((c, idx) => ({
  id: c.id || `chart-${idx + 1}`,
  group: "Charts",
  title: c.title || c.name || `Chart ${idx + 1}`,
  subtitle: c.subtitle || c.description || "Practice this chart",
  kind: "chart",
  chartId: c.id || `chart-${idx + 1}`,
  tag: "Chart"
}));

// 3) Final export used by app.js
export const ACTIVITIES = [
  ...BUILT_INS,
  ...CHART_ACTIVITIES
];

// Optional default export (helps prevent import mismatches)
export default ACTIVITIES;
