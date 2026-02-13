// data-activities.js
// Central registry of everything that appears in the left sidebar.
//
// Imports charts so we can auto-generate one activity per chart.
// Also defines the "Vocab" and "Verbs" practice modes.
//
// Usage (in app.js):
//   import { ACTIVITIES } from "./data-activities.js";

import { VERB_CHARTS, PRONOUN_CHARTS, ENDING_CHARTS } from "./data-charts.js";

function sortByTitle(a, b) {
  return String(a.title).localeCompare(String(b.title), undefined, { sensitivity: "base" });
}

// -----------------------------
// Core activities (non-chart)
// -----------------------------
const CORE = [
  // Vocab
  { id: "vocab_fill", title: "Vocab Quiz (Fill in the Blank)", type: "vocab_fill", group: "Vocab" },
  { id: "vocab_mc", title: "Vocab Quiz (Multiple Choice)", type: "vocab_mc", group: "Vocab" },
  { id: "vocab_tf", title: "Vocab Quiz (True / False)", type: "vocab_tf", group: "Vocab" },
  { id: "flashcards", title: "Flashcards", type: "flash", group: "Vocab" },

  // Verbs (practice modes that pull from verb list + chart logic in app.js)
  // Note: chart rendering still uses the regular chart system; these are "verb practice" modes.
  { id: "verbs_fill", title: "Verbs (Fill in the Blank)", type: "verbs_fill", group: "Verbs" },
  { id: "verbs_mc", title: "Verbs (Multiple Choice)", type: "verbs_mc", group: "Verbs" },
  { id: "verbs_tf", title: "Verbs (True / False)", type: "verbs_tf", group: "Verbs" },

  // Conjugation practice (random verb + selected tense/person chart)
  // Your app.js should allow: pick tense chart + pick verb (or random verb),
  // then render it like a normal chart with forms populated from generated paradigms.
  { id: "verb_conj_practice", title: "Verb Conjugation Practice", type: "verb_conj_practice", group: "Verbs" },
];

// -----------------------------
// Chart activities (auto-made)
// -----------------------------
function toChartActivities(charts, groupName, chartGroupKey, prefix) {
  return (charts || []).map((c) => ({
    id: `${prefix}${c.id}`,
    title: c.title,
    type: "chart",
    group: groupName,
    chartGroup: chartGroupKey, // "verbs" | "pronouns" | "endings"
    chartId: c.id,
  }));
}

const VERB_CHART_ACTIVITIES = toChartActivities(VERB_CHARTS, "Verb Conjugations", "verbs", "act_");
const PRONOUN_CHART_ACTIVITIES = toChartActivities(PRONOUN_CHARTS, "Pronouns / Adjectives", "pronouns", "act_");
const ENDING_CHART_ACTIVITIES = toChartActivities(ENDING_CHARTS, "Nonverb Endings", "endings", "act_");

// -----------------------------
// Final ACTIVITIES export
// -----------------------------
export const ACTIVITIES = [
  ...CORE,
  ...VERB_CHART_ACTIVITIES,
  ...PRONOUN_CHART_ACTIVITIES,
  ...ENDING_CHART_ACTIVITIES,
]
  // Keep grouping stable; within group alphabetize by title.
  .sort((a, b) => {
    const ga = String(a.group || "");
    const gb = String(b.group || "");
    if (ga !== gb) return ga.localeCompare(gb, undefined, { sensitivity: "base" });
    return sortByTitle(a, b);
  });

// Useful meta for sidebar
export const ACTIVITY_META = {
  coreCount: CORE.length,
  verbChartsCount: VERB_CHARTS.length,
  pronounChartsCount: PRONOUN_CHARTS.length,
  endingChartsCount: ENDING_CHARTS.length,
  chartsTotal: VERB_CHARTS.length + PRONOUN_CHARTS.length + ENDING_CHARTS.length,
  total: CORE.length + VERB_CHARTS.length + PRONOUN_CHARTS.length + ENDING_CHARTS.length,
};
