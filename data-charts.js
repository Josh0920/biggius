// data-charts.js
// All chart data used by the app (verbs + pronouns + endings)
// NOTE: This is "data only" (no UI). Your app can import these arrays.

export const VERB_CHARTS = [
  {
    id: "verb_01",
    title: "Present Active Indicative",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["ω", "εις", "ει", "ομεν", "ετε", "ουσι(ν)"]
  },
  {
    id: "verb_02",
    title: "Present Middle/Passive Indicative",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["ομαι", "ῃ", "εται", "ομεθα", "εσθε", "ονται"]
  },
  {
    id: "verb_03",
    title: "Present εἰμί",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["εἰμι", "εἶ", "ἐστι(ν)", "ἐσμεν", "ἐστε", "εἰσι(ν)"]
  },
  {
    id: "verb_04",
    title: "Future Liquid Active Indicative",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["ῶ", "εῖς", "εῖ", "οῦμεν", "εῖτε", "οῦσι(ν)"]
  },
  {
    id: "verb_05",
    title: "Future Active Indicative",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["σω", "σεις", "σει", "σομεν", "σετε", "σουσι(ν)"]
  },
  {
    id: "verb_06",
    title: "Future Middle Indicative",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["σομαι", "σῃ", "σεται", "σομεθα", "σεσθε", "σονται"]
  },
  {
    id: "verb_07",
    title: "Future Liquid Middle Indicative",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["οῦμαι", "ῇ", "εῖται", "οῦμεθα", "εῖσθε", "οῦνται"]
  },
  {
    id: "verb_08",
    title: "Future of εἰμί",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["ἔσομαι", "ἔσῃ", "ἔσται", "ἐσόμεθα", "ἔσεσθε", "ἔσονται"]
  },
  {
    id: "verb_09",
    title: "Future Liquid Middle for κρίνω",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["κρινοῦμαι", "κρινῇ", "κρινεῖται", "κρινοῦμεθα", "κρινεῖσθε", "κρινοῦνται"]
  },
  {
    id: "verb_10",
    title: "First Future Passive Indicative",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["θήσομαι", "θήσῃ", "θήσεται", "θησόμεθα", "θήσεσθε", "θήσονται"]
  },
  {
    id: "verb_11",
    title: "Second Future Passive Indicative",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["ήσομαι", "ήσῃ", "ήσεται", "ησόμεθα", "ήσεσθε", "ήσονται"]
  },
  {
    id: "verb_12",
    title: "Primary Active Indicative",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["ω", "εις", "ει", "ομεν", "ετε", "ουσι(ν)"]
  },
  {
    id: "verb_13",
    title: "Secondary Active Indicative",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["ε[stem]ον", "ε[stem]ες", "ε[stem]ε(ν)", "ε[stem]ομεν", "ε[stem]ετε", "ε[stem]ον"]
  },
  {
    id: "verb_14",
    title: "Primary Middle Indicative",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["ομαι", "ῃ", "εται", "ομεθα", "εσθε", "ονται"]
  },
  {
    id: "verb_15",
    title: "Secondary Middle Indicative",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["ε[stem]ομην", "ε[stem]ου", "ε[stem]ετο", "ε[stem]ομεθα", "ε[stem]εσθε", "ε[stem]οντο"]
  },
  {
    id: "verb_16",
    title: "Imperfect εἰμί",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["ἤμην", "ἦς", "ἦν", "ἦμεν / ἦμεθα", "ἦτε", "ἦσαν"]
  },
  {
    id: "verb_17",
    title: "First Aorist (Active)",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["ε[stem]σα", "ε[stem]σας", "ε[stem]σε(ν)", "ε[stem]σαμεν", "ε[stem]σατε", "ε[stem]σαν"]
  },
  {
    id: "verb_18",
    title: "First Aorist (Middle)",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["ε[stem]σαμην", "ε[stem]σω", "ε[stem]σατο", "ε[stem]σαμεθα", "ε[stem]σασθε", "ε[stem]σαντο"]
  },
  {
    id: "verb_19",
    title: "First Aorist Passive Indicative",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["ε[stem]θην", "ε[stem]θης", "ε[stem]θη", "ε[stem]θημεν", "ε[stem]θητε", "ε[stem]θησαν"]
  },
  {
    id: "verb_20",
    title: "Second Aorist Passive Indicative",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: ["ε[stem]ην", "ε[stem]ης", "ε[stem]η", "ε[stem]ημεν", "ε[stem]ητε", "ε[stem]ησαν"]
  },
  {
    id: "verb_21",
    title: "Perfect Active Indicative",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: [
      "[reduplication][stem]κα",
      "[reduplication][stem]κας",
      "[reduplication][stem]κε(ν)",
      "[reduplication][stem]καμεν",
      "[reduplication][stem]κατε",
      "[reduplication][stem]κασι(ν)"
    ]
  },
  {
    id: "verb_22",
    title: "Perfect Middle/Passive Indicative",
    labels: ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"],
    forms: [
      "[reduplication][stem]μαι",
      "[reduplication][stem]σαι",
      "[reduplication][stem]ται",
      "[reduplication][stem]μεθα",
      "[reduplication][stem]σθε",
      "[reduplication][stem]νται"
    ]
  }
];

export const PRONOUN_CHARTS = [
  {
    id: "relative_pronoun",
    title: "Relative Pronoun (ὅς, ἥ, ὅ)",
    labels: [
      "Sg Nominative (M)", "Sg Nominative (F)", "Sg Nominative (N)",
      "Sg Genitive (M)", "Sg Genitive (F)", "Sg Genitive (N)",
      "Sg Dative (M)", "Sg Dative (F)", "Sg Dative (N)",
      "Sg Accusative (M)", "Sg Accusative (F)", "Sg Accusative (N)",
      "Pl Nominative (M)", "Pl Nominative (F)", "Pl Nominative (N)",
      "Pl Genitive (M)", "Pl Genitive (F)", "Pl Genitive (N)",
      "Pl Dative (M)", "Pl Dative (F)", "Pl Dative (N)",
      "Pl Accusative (M)", "Pl Accusative (F)", "Pl Accusative (N)"
    ],
    forms: [
      "ὅς", "ἥ", "ὅ",
      "οὗ", "ἧς", "οὗ",
      "ᾧ", "ᾗ", "ᾧ",
      "ὅν", "ἥν", "ὅ",
      "οἵ", "αἵ", "ἅ",
      "ὧν", "ὧν", "ὧν",
      "οἷς", "αἷς", "οἷς",
      "οὕς", "ἅς", "ἅ"
    ]
  },
  {
    id: "αὐτός",
    title: "αὐτός",
    labels: [
      "Sg Nominative (M)", "Sg Nominative (F)", "Sg Nominative (N)",
      "Sg Genitive (M)", "Sg Genitive (F)", "Sg Genitive (N)",
      "Sg Dative (M)", "Sg Dative (F)", "Sg Dative (N)",
      "Sg Accusative (M)", "Sg Accusative (F)", "Sg Accusative (N)",
      "Pl Nominative (M)", "Pl Nominative (F)", "Pl Nominative (N)",
      "Pl Genitive (M)", "Pl Genitive (F)", "Pl Genitive (N)",
      "Pl Dative (M)", "Pl Dative (F)", "Pl Dative (N)",
      "Pl Accusative (M)", "Pl Accusative (F)", "Pl Accusative (N)"
    ],
    forms: [
      "αὐτός", "αὐτή", "αὐτό",
      "αὐτοῦ", "αὐτῆς", "αὐτοῦ",
      "αὐτῷ", "αὐτῇ", "αὐτῷ",
      "αὐτόν", "αὐτήν", "αὐτό",
      "αὐτοί", "αὐταί", "αὐτά",
      "αὐτῶν", "αὐτῶν", "αὐτῶν",
      "αὐτοῖς", "αὐταῖς", "αὐτοῖς",
      "αὐτούς", "αὐτάς", "αὐτά"
    ]
  },
  {
    id: "οὗτος",
    title: "οὗτος",
    labels: [
      "Sg Nominative (M)", "Sg Nominative (F)", "Sg Nominative (N)",
      "Sg Genitive (M)", "Sg Genitive (F)", "Sg Genitive (N)",
      "Sg Dative (M)", "Sg Dative (F)", "Sg Dative (N)",
      "Sg Accusative (M)", "Sg Accusative (F)", "Sg Accusative (N)",
      "Pl Nominative (M)", "Pl Nominative (F)", "Pl Nominative (N)",
      "Pl Genitive (M)", "Pl Genitive (F)", "Pl Genitive (N)",
      "Pl Dative (M)", "Pl Dative (F)", "Pl Dative (N)",
      "Pl Accusative (M)", "Pl Accusative (F)", "Pl Accusative (N)"
    ],
    forms: [
      "οὗτος", "αὕτη", "τοῦτο",
      "τούτου", "ταύτης", "τούτου",
      "τούτῳ", "ταύτῃ", "τούτῳ",
      "τοῦτον", "ταύτην", "τοῦτο",
      "οὗτοι", "αὗται", "ταῦτα",
      "τούτων", "τούτων", "τούτων",
      "τούτοις", "ταύταις", "τούτοις",
      "τούτους", "ταύτας", "ταῦτα"
    ]
  },
  {
    id: "ἐκεῖνος",
    title: "ἐκεῖνος",
    labels: [
      "Sg Nominative (M)", "Sg Nominative (F)", "Sg Nominative (N)",
      "Sg Genitive (M)", "Sg Genitive (F)", "Sg Genitive (N)",
      "Sg Dative (M)", "Sg Dative (F)", "Sg Dative (N)",
      "Sg Accusative (M)", "Sg Accusative (F)", "Sg Accusative (N)",
      "Pl Nominative (M)", "Pl Nominative (F)", "Pl Nominative (N)",
      "Pl Genitive (M)", "Pl Genitive (F)", "Pl Genitive (N)",
      "Pl Dative (M)", "Pl Dative (F)", "Pl Dative (N)",
      "Pl Accusative (M)", "Pl Accusative (F)", "Pl Accusative (N)"
    ],
    forms: [
      "ἐκεῖνος", "ἐκείνη", "ἐκεῖνο",
      "ἐκείνου", "ἐκείνης", "ἐκείνου",
      "ἐκείνῳ", "ἐκείνῃ", "ἐκείνῳ",
      "ἐκεῖνον", "ἐκείνην", "ἐκεῖνο",
      "ἐκεῖνοι", "ἐκεῖναι", "ἐκεῖνα",
      "ἐκείνων", "ἐκείνων", "ἐκείνων",
      "ἐκείνοις", "ἐκείναις", "ἐκείνοις",
      "ἐκείνους", "ἐκείνας", "ἐκεῖνα"
    ]
  }
];

export const ENDING_CHARTS = [
  {
    id: "article_endings",
    title: "Article Endings (ὁ / ἡ / τό)",
    labels: [
      "Sg Nominative (M)", "Sg Nominative (F)", "Sg Nominative (N)",
      "Sg Genitive (M)", "Sg Genitive (F)", "Sg Genitive (N)",
      "Sg Dative (M)", "Sg Dative (F)", "Sg Dative (N)",
      "Sg Accusative (M)", "Sg Accusative (F)", "Sg Accusative (N)",
      "Pl Nominative (M)", "Pl Nominative (F)", "Pl Nominative (N)",
      "Pl Genitive (M)", "Pl Genitive (F)", "Pl Genitive (N)",
      "Pl Dative (M)", "Pl Dative (F)", "Pl Dative (N)",
      "Pl Accusative (M)", "Pl Accusative (F)", "Pl Accusative (N)"
    ],
    forms: [
      "ὁ", "ἡ", "τό",
      "τοῦ", "τῆς", "τοῦ",
      "τῷ", "τῇ", "τῷ",
      "τόν", "τήν", "τό",
      "οἱ", "αἱ", "τά",
      "τῶν", "τῶν", "τῶν",
      "τοῖς", "ταῖς", "τοῖς",
      "τούς", "τάς", "τά"
    ]
  },
  {
    id: "case_endings",
    title: "Case Endings (Declensions)",
    labels: [
      "Sg Nominative — 2nd Declension Masculine",
      "Sg Nominative — 2nd Declension Neuter",
      "Sg Nominative — 3rd Declension Masculine/Feminine",
      "Sg Genitive — 2nd Declension Masculine",
      "Sg Genitive — 1st Declension Feminine",
      "Sg Genitive — 2nd Declension Neuter",
      "Sg Genitive — 3rd Declension Masculine/Feminine",
      "Sg Genitive — 3rd Declension Neuter",
      "Sg Dative — 2nd Declension Masculine",
      "Sg Dative — 1st Declension Feminine",
      "Sg Dative — 2nd Declension Neuter",
      "Sg Dative — 3rd Declension Masculine/Feminine",
      "Sg Dative — 3rd Declension Neuter",
      "Sg Accusative — 2nd Declension Masculine",
      "Sg Accusative — 1st Declension Feminine",
      "Sg Accusative — 2nd Declension Neuter",
      "Sg Accusative — 3rd Declension Masculine/Feminine",
      "Pl Nominative — 2nd Declension Masculine",
      "Pl Nominative — 1st Declension Feminine",
      "Pl Nominative — 2nd Declension Neuter",
      "Pl Nominative — 3rd Declension Masculine/Feminine",
      "Pl Nominative — 3rd Declension Neuter",
      "Pl Genitive — 2nd Declension Masculine",
      "Pl Genitive — 1st Declension Feminine",
      "Pl Genitive — 2nd Declension Neuter",
      "Pl Genitive — 3rd Declension Masculine/Feminine",
      "Pl Genitive — 3rd Declension Neuter",
      "Pl Dative — 2nd Declension Masculine",
      "Pl Dative — 1st Declension Feminine",
      "Pl Dative — 2nd Declension Neuter",
      "Pl Dative — 3rd Declension Masculine/Feminine",
      "Pl Dative — 3rd Declension Neuter",
      "Pl Accusative — 2nd Declension Masculine",
      "Pl Accusative — 1st Declension Feminine",
      "Pl Accusative — 2nd Declension Neuter",
      "Pl Accusative — 3rd Declension Masculine/Feminine",
      "Pl Accusative — 3rd Declension Neuter"
    ],
    forms: [
      "ος", "ον", "ς",
      "ου", "ς", "ου", "ος", "ος",
      "ῳ", "ῃ", "ῳ", "ι", "ι",
      "ον", "ην", "ον", "α",
      "οι", "αι", "α", "ες", "α",
      "ων", "ων", "ων", "ων", "ων",
      "οις", "αις", "οις", "σι(ν)", "σι(ν)",
      "ους", "ας", "α", "ας", "α"
    ]
  },
  {
    id: "present_imperfective_participle",
    title: "Present (Imperfective) Participle",
    labels: [
      "Sg Nominative — M", "Sg Nominative — F", "Sg Nominative — N",
      "Sg Genitive — M", "Sg Genitive — F", "Sg Genitive — N",
      "Sg Dative — M", "Sg Dative — F", "Sg Dative — N",
      "Sg Accusative — M", "Sg Accusative — F", "Sg Accusative — N",
      "Pl Nominative — M", "Pl Nominative — F", "Pl Nominative — N",
      "Pl Genitive — M", "Pl Genitive — F", "Pl Genitive — N",
      "Pl Dative — M", "Pl Dative — F", "Pl Dative — N",
      "Pl Accusative — M", "Pl Accusative — F", "Pl Accusative — N"
    ],
    forms: [
      "ων", "ουσα", "ον",
      "οντος", "ουσης", "οντος",
      "οντι", "ουσῃ", "οντι",
      "οντα", "ουσαν", "ον",
      "οντες", "ουσαι", "οντα",
      "οντων", "ουσῶν", "οντων",
      "ουσι(ν)", "ουσαις", "ουσι(ν)",
      "οντας", "ουσας", "οντα"
    ]
  },
  {
    id: "εἰμί_present_imperfect_participle",
    title: "εἰμί (Present Participle)",
    labels: [
      "Sg Nominative — M", "Sg Nominative — F", "Sg Nominative — N",
      "Sg Genitive — M", "Sg Genitive — F", "Sg Genitive — N",
      "Sg Dative — M", "Sg Dative — F", "Sg Dative — N",
      "Sg Accusative — M", "Sg Accusative — F", "Sg Accusative — N",
      "Pl Nominative — M", "Pl Nominative — F", "Pl Nominative — N",
      "Pl Genitive — M", "Pl Genitive — F", "Pl Genitive — N",
      "Pl Dative — M", "Pl Dative — F", "Pl Dative — N",
      "Pl Accusative — M", "Pl Accusative — F", "Pl Accusative — N"
    ],
    forms: [
      "ὤν", "οὖσα", "ὄν",
      "ὄντος", "οὔσης", "ὄντος",
      "ὄντι", "οὔσῃ", "ὄντι",
      "ὄντα", "οὖσαν", "ὄν",
      "ὄντες", "οὖσαι", "ὄντα",
      "ὄντων", "οὐσῶν", "ὄντων",
      "οὖσι(ν)", "οὔσαις", "οὖσι(ν)",
      "ὄντας", "οὔσας", "ὄντα"
    ]
  },
  {
    id: "present_imperfect_middle_passive_participle",
    title: "Present Middle/Passive Participle",
    labels: [
      "Sg Nominative — M", "Sg Nominative — F", "Sg Nominative — N",
      "Sg Genitive — M", "Sg Genitive — F", "Sg Genitive — N",
      "Sg Dative — M", "Sg Dative — F", "Sg Dative — N",
      "Sg Accusative — M", "Sg Accusative — F", "Sg Accusative — N",
      "Pl Nominative — M", "Pl Nominative — F", "Pl Nominative — N",
      "Pl Genitive — M", "Pl Genitive — F", "Pl Genitive — N",
      "Pl Dative — M", "Pl Dative — F", "Pl Dative — N",
      "Pl Accusative — M", "Pl Accusative — F", "Pl Accusative — N"
    ],
    forms: [
      "όμενος", "ομένη", "όμενον",
      "ομένου", "ομένης", "ομένου",
      "ομένῳ", "ομένῃ", "ομένῳ",
      "όμενον", "ομένην", "όμενον",
      "όμενοι", "όμεναι", "όμενα",
      "ομένων", "ομένων", "ομένων",
      "ομένοις", "ομέναις", "ομένοις",
      "ομένους", "ομένας", "όμενα"
    ]
  }
];
