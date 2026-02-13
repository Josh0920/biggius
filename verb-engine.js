/* verb-engine.js
   Minimal “verb engine” for the verbs you know right now, based on your endings chart list.

   What it does:
   - Extracts verbs from VOCAB (heuristic).
   - Generates 6-person indicative forms (best-effort) for the main sets you listed:
     Present Act / Pres MidPass / Future Act / Future Mid / Liquid Future Act / Liquid Future Mid
     Aorist1 Act / Aorist1 Mid / Aorist1 Pass / Aorist2 Pass
     Perfect Act / Perfect MidPass
     plus εἰμί (Present, Future, Imperfect)

   Note:
   - Koine morphology has lots of irregularities. This is practice-first, not lexicon-perfect.
*/

(function () {
  // ---------- Utilities ----------
  const isGreekChar = (ch) => /[\u0370-\u03FF\u1F00-\u1FFF]/.test(ch);

  function stripPunct(s) {
    return String(s || "").replace(/[()［\]{}.,;:!?"'“”‘’]/g, "").trim();
  }

  function normGreek(s) {
    // Light normalization; keep diacritics (you want to see them).
    return stripPunct(String(s || "")).replace(/\s+/g, " ").trim();
  }

  function looksLikeVerbGloss(eng) {
    const e = String(eng || "").trim();
    // your list uses “I …” (and sometimes “– I …”)
    return /^I\s+/i.test(e) || /–\s*I\s+/i.test(e) || /\(\s*I\s+/i.test(e);
  }

  function looksLikeVerbLemma(grk) {
    const g = normGreek(grk);
    return /(ω|άω|έω|όω|εύω)$/.test(g) || /(ομαι|μαι)$/.test(g);
  }

  function firstGreekLetter(s) {
    const t = normGreek(s);
    for (const ch of t) if (isGreekChar(ch)) return ch;
    return "";
  }

  function reduplicate(lemmaStem) {
    const first = firstGreekLetter(lemmaStem);
    if (!first) return "ε";
    const vowels = "αεηιουωΑΕΗΙΟΥΩ";
    if (vowels.includes(first)) return "ε";
    return first + "ε";
  }

  // ---------- Endings ----------
  const ENDINGS = {
    present_act: ["ω", "εις", "ει", "ομεν", "ετε", "ουσι(ν)"],
    present_midpass: ["ομαι", "ῃ", "εται", "ομεθα", "εσθε", "ονται"],
    future_act: ["σω", "σεις", "σει", "σομεν", "σετε", "σουσι(ν)"],
    future_mid: ["σομαι", "σῃ", "σεται", "σομεθα", "σεσθε", "σονται"],
    future_liquid_act: ["ῶ", "εῖς", "εῖ", "οῦμεν", "εῖτε", "οῦσι(ν)"],
    future_liquid_mid: ["οῦμαι", "ῇ", "εῖται", "οῦμεθα", "εῖσθε", "οῦνται"],

    aor1_act: ["ε[stem]σα", "ε[stem]σας", "ε[stem]σε(ν)", "ε[stem]σαμεν", "ε[stem]σατε", "ε[stem]σαν"],
    aor1_mid: ["ε[stem]σαμην", "ε[stem]σω", "ε[stem]σατο", "ε[stem]σαμεθα", "ε[stem]σασθε", "ε[stem]σαντο"],
    aor1_pass: ["ε[stem]θην", "ε[stem]θης", "ε[stem]θη", "ε[stem]θημεν", "ε[stem]θητε", "ε[stem]θησαν"],
    aor2_pass: ["ε[stem]ην", "ε[stem]ης", "ε[stem]η", "ε[stem]ημεν", "ε[stem]ητε", "ε[stem]ησαν"],

    perf_act: [
      "[reduplication][stem]κα",
      "[reduplication][stem]κας",
      "[reduplication][stem]κε(ν)",
      "[reduplication][stem]καμεν",
      "[reduplication][stem]κατε",
      "[reduplication][stem]κασι(ν)"
    ],
    perf_midpass: [
      "[reduplication][stem]μαι",
      "[reduplication][stem]σαι",
      "[reduplication][stem]ται",
      "[reduplication][stem]μεθα",
      "[reduplication][stem]σθε",
      "[reduplication][stem]νται"
    ],

    // εἰμί (irregular)
    eimi_present: ["εἰμι", "εἶ", "ἐστιν", "ἐσμεν", "ἐστε", "εἰσιν"],
    eimi_future: ["ἒσομαι", "ἒσῃ", "ἒσται", "ἐσόμεθα", "ἒσεσθε", "ἒσονται"],
    eimi_imperf: ["ἢμην", "ἦς", "ἦν", "ἦμεν / ἢμεθα", "ἦτε", "ἦσαν"],
  };

  // ---------- Verb class + stems ----------
  function classifyVerb(lemma) {
    const g = normGreek(lemma);

    if (g === "εἰμί") return { class: "eimi" };

    if (g.endsWith("άω")) return { class: "contract_a" };
    if (g.endsWith("έω")) return { class: "contract_e" };
    if (g.endsWith("όω")) return { class: "contract_o" };
    if (g.endsWith("εύω")) return { class: "eu" };

    if (g.endsWith("ομαι") || g.endsWith("μαι")) return { class: "deponent" };

    if (g.endsWith("ω")) {
      const stem = g.slice(0, -1);
      const last = stem.slice(-1);
      if (["λ", "μ", "ν", "ρ"].includes(last)) return { class: "liquid" };
      return { class: "omega" };
    }

    return { class: "unknown" };
  }

  function presentStem(lemma) {
    const g = normGreek(lemma);
    if (g.endsWith("άω")) return g.slice(0, -2);
    if (g.endsWith("έω")) return g.slice(0, -2);
    if (g.endsWith("όω")) return g.slice(0, -2);
    if (g.endsWith("εύω")) return g.slice(0, -1);
    if (g.endsWith("ομαι")) return g.slice(0, -4);
    if (g.endsWith("μαι")) return g.slice(0, -3);
    if (g.endsWith("ω")) return g.slice(0, -1);
    return g;
  }

  const VERB_OVERRIDES = {
    // "ἀγαπάω": { aor1_stem: "ἀγαπησ", perfect_stem: "ἀγαπηκ" }
  };

  function getStemFor(lemma, key) {
    const g = normGreek(lemma);
    const o = VERB_OVERRIDES[g] || {};
    if (o[key]) return o[key];
    return presentStem(g);
  }

  // ---------- Conjugators ----------
  function joinStemEnding(stem, ending) {
    return normGreek(stem + ending);
  }

  function applyAoristTemplate(stem, templ) {
    return templ.replace("[stem]", stem);
  }

  function applyPerfectTemplate(stem, templ) {
    const red = reduplicate(stem);
    return templ.replace("[reduplication]", red).replace("[stem]", stem);
  }

  function conjugate6(lemma, tenseKey) {
    const g = normGreek(lemma);
    const cls = classifyVerb(g).class;

    if (cls === "eimi") {
      if (tenseKey === "present") return ENDINGS.eimi_present.slice();
      if (tenseKey === "future") return ENDINGS.eimi_future.slice();
      if (tenseKey === "imperfect") return ENDINGS.eimi_imperf.slice();
      return ENDINGS.eimi_present.slice();
    }

    const pst = getStemFor(g, "present_stem");

    if (tenseKey === "present_active") return ENDINGS.present_act.map((e) => joinStemEnding(pst, e));
    if (tenseKey === "present_midpass") return ENDINGS.present_midpass.map((e) => joinStemEnding(pst, e));

    if (tenseKey === "future_active") {
      if (cls === "liquid") return ENDINGS.future_liquid_act.map((e) => joinStemEnding(pst, e));
      return ENDINGS.future_act.map((e) => joinStemEnding(pst, e));
    }
    if (tenseKey === "future_mid") {
      if (cls === "liquid") return ENDINGS.future_liquid_mid.map((e) => joinStemEnding(pst, e));
      return ENDINGS.future_mid.map((e) => joinStemEnding(pst, e));
    }

    if (tenseKey === "aor1_active") {
      const st = getStemFor(g, "aor1_stem") || pst;
      return ENDINGS.aor1_act.map((t) => applyAoristTemplate(st, t));
    }
    if (tenseKey === "aor1_mid") {
      const st = getStemFor(g, "aor1_stem") || pst;
      return ENDINGS.aor1_mid.map((t) => applyAoristTemplate(st, t));
    }
    if (tenseKey === "aor1_pass") {
      const st = getStemFor(g, "aor1_pass_stem") || pst;
      return ENDINGS.aor1_pass.map((t) => applyAoristTemplate(st, t));
    }
    if (tenseKey === "aor2_pass") {
      const st = getStemFor(g, "aor2_pass_stem") || pst;
      return ENDINGS.aor2_pass.map((t) => applyAoristTemplate(st, t));
    }

    if (tenseKey === "perf_active") {
      const st = getStemFor(g, "perfect_stem") || pst;
      return ENDINGS.perf_act.map((t) => applyPerfectTemplate(st, t));
    }
    if (tenseKey === "perf_midpass") {
      const st = getStemFor(g, "perfect_stem") || pst;
      return ENDINGS.perf_midpass.map((t) => applyPerfectTemplate(st, t));
    }

    return ENDINGS.present_act.map((e) => joinStemEnding(pst, e));
  }

  // ---------- Verb list extraction ----------
  function extractVerbsFromVocab(vocab) {
    const out = [];
    for (const it of (vocab || [])) {
      const g = normGreek(it.g || it.Greek || "");
      const e = String(it.e || it.English || "").trim();
      if (!g) continue;
      if (looksLikeVerbGloss(e) || looksLikeVerbLemma(g)) {
        out.push({ g, e });
      }
    }
    const seen = new Set();
    return out.filter(v => (seen.has(v.g) ? false : (seen.add(v.g), true)));
  }

  // ---------- Quiz item builders ----------
  const PERSON_LABELS = ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"];

  function buildVerbChartQuestion(lemma, tenseKey) {
    const forms = conjugate6(lemma, tenseKey);
    return {
      lemma: normGreek(lemma),
      tenseKey,
      labels: PERSON_LABELS.slice(),
      forms,
    };
  }

  // Public API for app.js or other modules
  window.VERB_ENGINE = {
    ENDINGS,
    classifyVerb,
    presentStem,
    extractVerbsFromVocab,
    conjugate6,
    buildVerbChartQuestion,
    PERSON_LABELS
  };
})();
