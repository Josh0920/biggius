/* data-charts.js
   Copy-paste replacement file.
   Purpose: verb conjugation “charts” data (Indicative only, as you’ve been doing).
   Person order everywhere: 1sg, 2sg, 3sg, 1pl, 2pl, 3pl
*/

(function (global) {
  const PERSONS = ["1sg", "2sg", "3sg", "1pl", "2pl", "3pl"];

  const DATA_CHARTS = {
    meta: {
      version: "1.0.0",
      persons: PERSONS,
      notes: [
        "All forms are Indicative unless otherwise stated.",
        "Some rare/less-taught forms are included when you listed them; marked in notes where helpful."
      ]
    },

    verbs: {
      "λύω": {
        lemma: "λύω",
        gloss: "I loose / untie / destroy",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["λύω", "λύεις", "λύει", "λύομεν", "λύετε", "λύουσι(ν)"]
          },
          present_middle_passive_indicative: {
            label: "Present Middle/Passive Indicative",
            forms: ["λύομαι", "λύῃ", "λύεται", "λυόμεθα", "λύεσθε", "λύονται"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἔλυον", "ἔλυες", "ἔλυε(ν)", "ἐλύομεν", "ἐλύετε", "ἔλυον"]
          },
          imperfect_middle_passive_indicative: {
            label: "Imperfect Middle/Passive Indicative",
            forms: ["ἐλυόμην", "ἐλύου", "ἐλύετο", "ἐλυόμεθα", "ἐλύεσθε", "ἐλύοντο"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["λύσω", "λύσεις", "λύσει", "λύσομεν", "λύσετε", "λύσουσι(ν)"]
          },
          future_middle_indicative: {
            label: "Future Middle Indicative",
            forms: ["λύσομαι", "λύσῃ", "λύσεται", "λυσόμεθα", "λύσεσθε", "λύσονται"]
          },
          future_passive_indicative: {
            label: "Future Passive Indicative",
            forms: ["λυθήσομαι", "λυθήσῃ", "λυθήσεται", "λυθησόμεθα", "λυθήσεσθε", "λυθήσονται"]
          },
          aorist_active_indicative: {
            label: "First Aorist Active Indicative",
            forms: ["ἔλυσα", "ἔλυσας", "ἔλυσε(ν)", "ἐλύσαμεν", "ἐλύσατε", "ἔλυσαν"]
          },
          aorist_middle_indicative: {
            label: "First Aorist Middle Indicative",
            forms: ["ἐλυσάμην", "ἐλύσω", "ἐλύσατο", "ἐλυσάμεθα", "ἐλύσασθε", "ἐλύσαντο"]
          },
          aorist_passive_indicative: {
            label: "First Aorist Passive Indicative",
            forms: ["ἐλύθην", "ἐλύθης", "ἐλύθη", "ἐλύθημεν", "ἐλύθητε", "ἐλύθησαν"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            forms: ["λέλυκα", "λέλυκας", "λέλυκε(ν)", "λελύκαμεν", "λελύκατε", "λελύκασι(ν)"]
          },
          perfect_middle_passive_indicative: {
            label: "Perfect Middle/Passive Indicative",
            forms: ["λέλυμαι", "λέλυσαι", "λέλυται", "λελύμεθα", "λέλυσθε", "λέλυνται"]
          }
        }
      },

      "ἀκούω": {
        lemma: "ἀκούω",
        gloss: "I hear",
        notes: [
          "Perfect Middle/Passive is rare in NT-style teaching, but included since you listed it."
        ],
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["ἀκούω", "ἀκούεις", "ἀκούει", "ἀκούομεν", "ἀκούετε", "ἀκούουσι(ν)"]
          },
          present_middle_passive_indicative: {
            label: "Present Middle/Passive Indicative",
            forms: ["ἀκούομαι", "ἀκούῃ", "ἀκούεται", "ἀκουόμεθα", "ἀκούεσθε", "ἀκούονται"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἤκουον", "ἤκουες", "ἤκουε(ν)", "ἠκούομεν", "ἠκούετε", "ἤκουον"]
          },
          imperfect_middle_passive_indicative: {
            label: "Imperfect Middle/Passive Indicative",
            forms: ["ἠκουόμην", "ἠκούου", "ἠκούετο", "ἠκουόμεθα", "ἠκούεσθε", "ἠκούοντο"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["ἀκούσω", "ἀκούσεις", "ἀκούσει", "ἀκούσομεν", "ἀκούσετε", "ἀκούσουσι(ν)"]
          },
          future_middle_indicative: {
            label: "Future Middle Indicative",
            forms: ["ἀκούσομαι", "ἀκούσῃ", "ἀκούσεται", "ἀκουσόμεθα", "ἀκούσεσθε", "ἀκούσονται"]
          },
          future_passive_indicative: {
            label: "Future Passive Indicative",
            forms: ["ἀκουσθήσομαι", "ἀκουσθήσῃ", "ἀκουσθήσεται", "ἀκουσθησόμεθα", "ἀκουσθήσεσθε", "ἀκουσθήσονται"]
          },
          aorist_active_indicative: {
            label: "First Aorist Active Indicative",
            forms: ["ἤκουσα", "ἤκουσας", "ἤκουσε(ν)", "ἠκούσαμεν", "ἠκούσατε", "ἤκουσαν"]
          },
          aorist_middle_indicative: {
            label: "First Aorist Middle Indicative",
            forms: ["ἠκουσάμην", "ἠκούσω", "ἠκούσατο", "ἠκουσάμεθα", "ἠκούσασθε", "ἠκούσαντο"]
          },
          aorist_passive_indicative: {
            label: "First Aorist Passive Indicative",
            forms: ["ἠκούσθην", "ἠκούσθης", "ἠκούσθη", "ἠκούσθημεν", "ἠκούσθητε", "ἠκούσθησαν"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            forms: ["ἀκήκοα", "ἀκήκοας", "ἀκήκοε(ν)", "ἀκηκόαμεν", "ἀκηκόατε", "ἀκήκοασι(ν)"]
          },
          perfect_middle_passive_indicative: {
            label: "Perfect Middle/Passive Indicative (rare)",
            // corrected spellings vs what you pasted earlier
            forms: ["ἀκήκοσμαι", "ἀκήκοσαι", "ἀκήκοσται", "ἀκηκόσμεθα", "ἀκήκοσθε", "ἀκήκοσνται"]
          }
        }
      },

      "βλέπω": {
        lemma: "βλέπω",
        gloss: "I see / look at",
        notes: [
          "Important: εἶδον / ἑώρακα belong to ὁράω, not βλέπω.",
          "So the aorist & perfect here use the βλέπ- system."
        ],
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["βλέπω", "βλέπεις", "βλέπει", "βλέπομεν", "βλέπετε", "βλέπουσι(ν)"]
          },
          present_middle_passive_indicative: {
            label: "Present Middle/Passive Indicative",
            forms: ["βλέπομαι", "βλέπῃ", "βλέπεται", "βλεπόμεθα", "βλέπεσθε", "βλέπονται"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἔβλεπον", "ἔβλεπες", "ἔβλεπε(ν)", "ἐβλέπομεν", "ἐβλέπετε", "ἔβλεπον"]
          },
          imperfect_middle_passive_indicative: {
            label: "Imperfect Middle/Passive Indicative",
            forms: ["ἐβλεπόμην", "ἐβλέπου", "ἐβλέπετο", "ἐβλεπόμεθα", "ἐβλέπεσθε", "ἐβλέποντο"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["βλέψω", "βλέψεις", "βλέψει", "βλέψομεν", "βλέψετε", "βλέψουσι(ν)"]
          },
          future_middle_indicative: {
            label: "Future Middle Indicative",
            forms: ["βλέψομαι", "βλέψῃ", "βλέψεται", "βλεψόμεθα", "βλέψεσθε", "βλέψονται"]
          },
          future_passive_indicative: {
            label: "Future Passive Indicative",
            forms: ["βλεφθήσομαι", "βλεφθήσῃ", "βλεφθήσεται", "βλεφθησόμεθα", "βλεφθήσεσθε", "βλεφθήσονται"]
          },
          aorist_active_indicative: {
            label: "First Aorist Active Indicative",
            forms: ["ἔβλεψα", "ἔβλεψας", "ἔβλεψε(ν)", "ἐβλέψαμεν", "ἐβλέψατε", "ἔβλεψαν"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative (rare)",
            // This perfect is much less common than ἑώρακα (ὁράω), but included as a “system” form.
            forms: ["βέβλεφα", "βέβλεφας", "βέβλεφε(ν)", "βεβλέφαμεν", "βεβλέφατε", "βεβλέφασι(ν)"]
          }
        }
      },

      "ἔχω": {
        lemma: "ἔχω",
        gloss: "I have / hold",
        notes: ["Perfect middle/passive is usually not taught; omitted here on purpose."],
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["ἔχω", "ἔχεις", "ἔχει", "ἔχομεν", "ἔχετε", "ἔχουσι(ν)"]
          },
          present_middle_passive_indicative: {
            label: "Present Middle/Passive Indicative",
            forms: ["ἔχομαι", "ἔχῃ", "ἔχεται", "ἐχόμεθα", "ἔχεσθε", "ἔχονται"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["εἶχον", "εἶχες", "εἶχε(ν)", "εἴχομεν", "εἴχετε", "εἶχον"]
          },
          imperfect_middle_passive_indicative: {
            label: "Imperfect Middle/Passive Indicative",
            forms: ["εἰχόμην", "εἴχου", "εἴχετο", "εἰχόμεθα", "εἴχεσθε", "εἴχοντο"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["ἕξω", "ἕξεις", "ἕξει", "ἕξομεν", "ἕξετε", "ἕξουσι(ν)"]
          },
          future_middle_indicative: {
            label: "Future Middle Indicative",
            forms: ["ἕξομαι", "ἕξῃ", "ἕξεται", "ἑξόμεθα", "ἕξεσθε", "ἕξονται"]
          },
          aorist_active_indicative: {
            label: "Aorist Active Indicative (2nd Aorist)",
            forms: ["ἔσχον", "ἔσχες", "ἔσχε(ν)", "ἔσχομεν", "ἔσχετε", "ἔσχον"]
          },
          aorist_middle_indicative: {
            label: "Aorist Middle Indicative",
            forms: ["ἐσχόμην", "ἔσχου", "ἔσχετο", "ἐσχόμεθα", "ἔσχεσθε", "ἔσχοντο"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            forms: ["ἔσχηκα", "ἔσχηκας", "ἔσχηκε(ν)", "ἐσχήκαμεν", "ἐσχήκατε", "ἔσχηκασι(ν)"]
          }
        }
      },

      "λέγω": {
        lemma: "λέγω",
        gloss: "I say / speak",
        notes: ["Aorist Middle is usually omitted; keeping only the standard εἶπον aorist active."],
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["λέγω", "λέγεις", "λέγει", "λέγομεν", "λέγετε", "λέγουσι(ν)"]
          },
          present_middle_passive_indicative: {
            label: "Present Middle/Passive Indicative",
            forms: ["λέγομαι", "λέγῃ", "λέγεται", "λεγόμεθα", "λέγεσθε", "λέγονται"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἔλεγον", "ἔλεγες", "ἔλεγε(ν)", "ἐλέγομεν", "ἐλέγετε", "ἔλεγον"]
          },
          imperfect_middle_passive_indicative: {
            label: "Imperfect Middle/Passive Indicative",
            forms: ["ἐλεγόμην", "ἐλέγου", "ἐλέγετο", "ἐλεγόμεθα", "ἐλέγεσθε", "ἐλέγοντο"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["ἐρῶ", "ἐρεῖς", "ἐρεῖ", "ἐροῦμεν", "ἐρεῖτε", "ἐροῦσι(ν)"]
          },
          future_middle_indicative: {
            label: "Future Middle Indicative",
            forms: ["ἐροῦμαι", "ἐρῇ", "ἐρεῖται", "ἐρούμεθα", "ἐρεῖσθε", "ἐροῦνται"]
          },
          future_passive_indicative: {
            label: "Future Passive Indicative",
            forms: ["ῥηθήσομαι", "ῥηθήσῃ", "ῥηθήσεται", "ῥηθησόμεθα", "ῥηθήσεσθε", "ῥηθήσονται"]
          },
          aorist_active_indicative: {
            label: "Aorist Active Indicative (2nd Aorist)",
            forms: ["εἶπον", "εἶπες", "εἶπε(ν)", "εἴπομεν", "εἴπετε", "εἶπον"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            forms: ["εἴρηκα", "εἴρηκας", "εἴρηκε(ν)", "εἰρήκαμεν", "εἰρήκατε", "εἴρηκασι(ν)"]
          },
          perfect_middle_passive_indicative: {
            label: "Perfect Middle/Passive Indicative",
            forms: ["εἴρημαι", "εἴρησαι", "εἴρηται", "εἰρήμεθα", "εἴρησθε", "εἴρηνται"]
          }
        }
      },

      "πιστεύω": {
        lemma: "πιστεύω",
        gloss: "I believe / trust",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["πιστεύω", "πιστεύεις", "πιστεύει", "πιστεύομεν", "πιστεύετε", "πιστεύουσι(ν)"]
          },
          present_middle_passive_indicative: {
            label: "Present Middle/Passive Indicative",
            forms: ["πιστεύομαι", "πιστεύῃ", "πιστεύεται", "πιστευόμεθα", "πιστεύεσθε", "πιστεύονται"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἐπίστευον", "ἐπίστευες", "ἐπίστευε(ν)", "ἐπιστεύομεν", "ἐπιστεύετε", "ἐπίστευον"]
          },
          imperfect_middle_passive_indicative: {
            label: "Imperfect Middle/Passive Indicative",
            forms: ["ἐπιστευόμην", "ἐπιστεύου", "ἐπιστεύετο", "ἐπιστευόμεθα", "ἐπιστεύεσθε", "ἐπιστεύοντο"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["πιστεύσω", "πιστεύσεις", "πιστεύσει", "πιστεύσομεν", "πιστεύσετε", "πιστεύσουσι(ν)"]
          },
          future_middle_indicative: {
            label: "Future Middle Indicative",
            forms: ["πιστεύσομαι", "πιστεύσῃ", "πιστεύσεται", "πιστευσόμεθα", "πιστεύσεσθε", "πιστεύσονται"]
          },
          future_passive_indicative: {
            label: "Future Passive Indicative",
            forms: ["πιστευθήσομαι", "πιστευθήσῃ", "πιστευθήσεται", "πιστευθησόμεθα", "πιστευθήσεσθε", "πιστευθήσονται"]
          },
          aorist_active_indicative: {
            label: "First Aorist Active Indicative",
            forms: ["ἐπίστευσα", "ἐπίστευσας", "ἐπίστευσε(ν)", "ἐπιστεύσαμεν", "ἐπιστεύσατε", "ἐπίστευσαν"]
          },
          aorist_middle_indicative: {
            label: "First Aorist Middle Indicative",
            // corrected 2sg from your pasted “ἐπίστευσω” → “ἐπιστεύσω”
            forms: ["ἐπιστευσάμην", "ἐπιστεύσω", "ἐπιστεύσατο", "ἐπιστευσάμεθα", "ἐπιστεύσασθε", "ἐπιστεύσαντο"]
          },
          aorist_passive_indicative: {
            label: "First Aorist Passive Indicative",
            forms: ["ἐπιστεύθην", "ἐπιστεύθης", "ἐπιστεύθη", "ἐπιστεύθημεν", "ἐπιστεύθητε", "ἐπιστεύθησαν"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            forms: ["πεπίστευκα", "πεπίστευκας", "πεπίστευκε(ν)", "πεπιστεύκαμεν", "πεπιστεύκατε", "πεπίστευκασι(ν)"]
          },
          perfect_middle_passive_indicative: {
            label: "Perfect Middle/Passive Indicative",
            forms: ["πεπίστευμαι", "πεπίστευσαι", "πεπίστευται", "πεπιστεύμεθα", "πεπίστευσθε", "πεπίστευνται"]
          }
        }
      },

      "ἀγαπάω": {
        lemma: "ἀγαπάω",
        gloss: "I love / cherish (α-contract)",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["ἀγαπῶ", "ἀγαπᾷς", "ἀγαπᾷ", "ἀγαπῶμεν", "ἀγαπᾶτε", "ἀγαπῶσι(ν)"]
          },
          present_middle_passive_indicative: {
            label: "Present Middle/Passive Indicative",
            forms: ["ἀγαπῶμαι", "ἀγαπᾷ", "ἀγαπᾶται", "ἀγαπώμεθα", "ἀγαπᾶσθε", "ἀγαπῶνται"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἠγάπων", "ἠγάπας", "ἠγάπα", "ἠγαπῶμεν", "ἠγαπᾶτε", "ἠγάπων"]
          },
          imperfect_middle_passive_indicative: {
            label: "Imperfect Middle/Passive Indicative",
            forms: ["ἠγαπώμην", "ἠγάπου", "ἠγαπᾶτο", "ἠγαπώμεθα", "ἠγαπᾶσθε", "ἠγαπῶντο"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["ἀγαπήσω", "ἀγαπήσεις", "ἀγαπήσει", "ἀγαπήσομεν", "ἀγαπήσετε", "ἀγαπήσουσι(ν)"]
          },
          future_middle_indicative: {
            label: "Future Middle Indicative",
            forms: ["ἀγαπήσομαι", "ἀγαπήσῃ", "ἀγαπήσεται", "ἀγαπησόμεθα", "ἀγαπήσεσθε", "ἀγαπήσονται"]
          },
          future_passive_indicative: {
            label: "Future Passive Indicative",
            forms: ["ἀγαπηθήσομαι", "ἀγαπηθήσῃ", "ἀγαπηθήσεται", "ἀγαπηθησόμεθα", "ἀγαπηθήσεσθε", "ἀγαπηθήσονται"]
          },
          aorist_active_indicative: {
            label: "First Aorist Active Indicative",
            forms: ["ἠγάπησα", "ἠγάπησας", "ἠγάπησε(ν)", "ἠγαπήσαμεν", "ἠγαπήσατε", "ἠγάπησαν"]
          },
          aorist_middle_indicative: {
            label: "First Aorist Middle Indicative",
            forms: ["ἠγαπησάμην", "ἠγαπήσω", "ἠγαπήσατο", "ἠγαπησάμεθα", "ἠγαπήσασθε", "ἠγαπήσαντο"]
          },
          aorist_passive_indicative: {
            label: "First Aorist Passive Indicative",
            forms: ["ἠγαπήθην", "ἠγαπήθης", "ἠγαπήθη", "ἠγαπήθημεν", "ἠγαπήθητε", "ἠγαπήθησαν"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            // vowel-initial reduplication by lengthening: ἀ- → ἠ-
            forms: ["ἠγάπηκα", "ἠγάπηκας", "ἠγάπηκε(ν)", "ἠγαπήκαμεν", "ἠγαπήκατε", "ἠγάπηκασι(ν)"]
          },
          perfect_middle_passive_indicative: {
            label: "Perfect Middle/Passive Indicative",
            forms: ["ἠγάπημαι", "ἠγάπησαι", "ἠγάπηται", "ἠγαπήμεθα", "ἠγάπησθε", "ἠγάπηνται"]
          }
        }
      },

      "ζητέω": {
        lemma: "ζητέω",
        gloss: "I seek / look for / desire (ε-contract)",
        charts: {
          present_active_indicative: { label: "Present Active Indicative", forms: ["ζητῶ", "ζητεῖς", "ζητεῖ", "ζητοῦμεν", "ζητεῖτε", "ζητοῦσι(ν)"] },
          present_middle_passive_indicative: { label: "Present Middle/Passive Indicative", forms: ["ζητοῦμαι", "ζητεῖ", "ζητεῖται", "ζητούμεθα", "ζητεῖσθε", "ζητοῦνται"] },
          imperfect_active_indicative: { label: "Imperfect Active Indicative", forms: ["ἐζήτουν", "ἐζήτεις", "ἐζήτει", "ἐζητοῦμεν", "ἐζητεῖτε", "ἐζήτουν"] },
          imperfect_middle_passive_indicative: { label: "Imperfect Middle/Passive Indicative", forms: ["ἐζητούμην", "ἐζητοῦ", "ἐζητεῖτο", "ἐζητούμεθα", "ἐζητεῖσθε", "ἐζητοῦντο"] },
          future_active_indicative: { label: "Future Active Indicative", forms: ["ζητήσω", "ζητήσεις", "ζητήσει", "ζητήσομεν", "ζητήσετε", "ζητήσουσι(ν)"] },
          future_middle_indicative: { label: "Future Middle Indicative", forms: ["ζητήσομαι", "ζητήσῃ", "ζητήσεται", "ζητησόμεθα", "ζητήσεσθε", "ζητήσονται"] },
          future_passive_indicative: { label: "Future Passive Indicative", forms: ["ζητηθήσομαι", "ζητηθήσῃ", "ζητηθήσεται", "ζητηθησόμεθα", "ζητηθήσεσθε", "ζητηθήσονται"] },
          aorist_active_indicative: { label: "First Aorist Active Indicative", forms: ["ἐζήτησα", "ἐζήτησας", "ἐζήτησε(ν)", "ἐζητήσαμεν", "ἐζητήσατε", "ἐζήτησαν"] },
          aorist_middle_indicative: { label: "First Aorist Middle Indicative", forms: ["ἐζητησάμην", "ἐζητήσω", "ἐζητήσατο", "ἐζητησάμεθα", "ἐζητήσασθε", "ἐζητήσαντο"] },
          aorist_passive_indicative: { label: "First Aorist Passive Indicative", forms: ["ἐζητήθην", "ἐζητήθης", "ἐζητήθη", "ἐζητήθημεν", "ἐζητήθητε", "ἐζητήθησαν"] },
          perfect_active_indicative: { label: "Perfect Active Indicative", forms: ["ἐζήτηκα", "ἐζήτηκας", "ἐζήτηκε(ν)", "ἐζητήκαμεν", "ἐζητήκατε", "ἐζήτηκασι(ν)"] },
          perfect_middle_passive_indicative: { label: "Perfect Middle/Passive Indicative", forms: ["ἐζήτημαι", "ἐζήτησαι", "ἐζήτηται", "ἐζητήμεθα", "ἐζήτησθε", "ἐζήτηνται"] }
        }
      },

      "καλέω": {
        lemma: "καλέω",
        gloss: "I call / invite / name (ε-contract)",
        charts: {
          present_active_indicative: { label: "Present Active Indicative", forms: ["καλῶ", "καλεῖς", "καλεῖ", "καλοῦμεν", "καλεῖτε", "καλοῦσι(ν)"] },
          present_middle_passive_indicative: { label: "Present Middle/Passive Indicative", forms: ["καλοῦμαι", "καλεῖ", "καλεῖται", "καλούμεθα", "καλεῖσθε", "καλοῦνται"] },
          imperfect_active_indicative: { label: "Imperfect Active Indicative", forms: ["ἐκάλουν", "ἐκάλεις", "ἐκάλει", "ἐκαλοῦμεν", "ἐκαλεῖτε", "ἐκάλουν"] },
          imperfect_middle_passive_indicative: { label: "Imperfect Middle/Passive Indicative", forms: ["ἐκαλούμην", "ἐκαλοῦ", "ἐκαλεῖτο", "ἐκαλούμεθα", "ἐκαλεῖσθε", "ἐκαλοῦντο"] },
          future_active_indicative: { label: "Future Active Indicative", forms: ["καλέσω", "καλέσεις", "καλέσει", "καλέσομεν", "καλέσετε", "καλέσουσι(ν)"] },
          future_middle_indicative: { label: "Future Middle Indicative", forms: ["καλέσομαι", "καλέσῃ", "καλέσεται", "καλεσόμεθα", "καλέσεσθε", "καλέσονται"] },
          future_passive_indicative: { label: "Future Passive Indicative", forms: ["κληθήσομαι", "κληθήσῃ", "κληθήσεται", "κληθησόμεθα", "κληθήσεσθε", "κληθήσονται"] },
          aorist_active_indicative: { label: "First Aorist Active Indicative", forms: ["ἐκάλεσα", "ἐκάλεσας", "ἐκάλεσε(ν)", "ἐκαλέσαμεν", "ἐκαλέσατε", "ἐκάλεσαν"] },
          aorist_middle_indicative: { label: "First Aorist Middle Indicative", forms: ["ἐκαλεσάμην", "ἐκάλεσω", "ἐκαλέσατο", "ἐκαλεσάμεθα", "ἐκαλέσασθε", "ἐκαλέσαντο"] },
          aorist_passive_indicative: { label: "First Aorist Passive Indicative", forms: ["ἐκλήθην", "ἐκλήθης", "ἐκλήθη", "ἐκλήθημεν", "ἐκλήθητε", "ἐκλήθησαν"] },
          perfect_active_indicative: { label: "Perfect Active Indicative", forms: ["κέκληκα", "κέκληκας", "κέκληκε(ν)", "κεκλήκαμεν", "κεκλήκατε", "κέκληκασι(ν)"] },
          perfect_middle_passive_indicative: { label: "Perfect Middle/Passive Indicative", forms: ["κέκλημαι", "κέκλησαι", "κέκληται", "κεκλήμεθα", "κέκλησθε", "κέκληνται"] }
        }
      },

      "λαλέω": {
        lemma: "λαλέω",
        gloss: "I speak / talk / say (ε-contract)",
        charts: {
          present_active_indicative: { label: "Present Active Indicative", forms: ["λαλῶ", "λαλεῖς", "λαλεῖ", "λαλοῦμεν", "λαλεῖτε", "λαλοῦσι(ν)"] },
          present_middle_passive_indicative: { label: "Present Middle/Passive Indicative", forms: ["λαλοῦμαι", "λαλεῖ", "λαλεῖται", "λαλούμεθα", "λαλεῖσθε", "λαλοῦνται"] },
          imperfect_active_indicative: { label: "Imperfect Active Indicative", forms: ["ἐλάλουν", "ἐλάλεις", "ἐλάλει", "ἐλαλοῦμεν", "ἐλαλεῖτε", "ἐλάλουν"] },
          imperfect_middle_passive_indicative: { label: "Imperfect Middle/Passive Indicative", forms: ["ἐλαλούμην", "ἐλαλοῦ", "ἐλαλεῖτο", "ἐλαλούμεθα", "ἐλαλεῖσθε", "ἐλαλοῦντο"] },
          future_active_indicative: { label: "Future Active Indicative", forms: ["λαλήσω", "λαλήσεις", "λαλήσει", "λαλήσομεν", "λαλήσετε", "λαλήσουσι(ν)"] },
          future_middle_indicative: { label: "Future Middle Indicative", forms: ["λαλήσομαι", "λαλήσῃ", "λαλήσεται", "λαλησόμεθα", "λαλήσεσθε", "λαλήσονται"] },
          future_passive_indicative: { label: "Future Passive Indicative", forms: ["λαληθήσομαι", "λαληθήσῃ", "λαληθήσεται", "λαληθησόμεθα", "λαληθήσεσθε", "λαληθήσονται"] },
          aorist_active_indicative: { label: "First Aorist Active Indicative", forms: ["ἐλάλησα", "ἐλάλησας", "ἐλάλησε(ν)", "ἐλαλήσαμεν", "ἐλαλήσατε", "ἐλάλησαν"] },
          aorist_middle_indicative: { label: "First Aorist Middle Indicative", forms: ["ἐλαλησάμην", "ἐλάλησω", "ἐλαλήσατο", "ἐλαλησάμεθα", "ἐλαλήσασθε", "ἐλαλήσαντο"] },
          aorist_passive_indicative: { label: "First Aorist Passive Indicative", forms: ["ἐλαλήθην", "ἐλαλήθης", "ἐλαλήθη", "ἐλαλήθημεν", "ἐλαλήθητε", "ἐλαλήθησαν"] },
          perfect_active_indicative: { label: "Perfect Active Indicative", forms: ["λελάληκα", "λελάληκας", "λελάληκε(ν)", "λελαλήκαμεν", "λελαλήκατε", "λελάληκασι(ν)"] },
          perfect_middle_passive_indicative: { label: "Perfect Middle/Passive Indicative", forms: ["λελάλημαι", "λελάλησαι", "λελάληται", "λελαλήμεθα", "λελάλησθε", "λελάληνται"] }
        }
      },

      "οἶδα": {
        lemma: "οἶδα",
        gloss: "I know / understand (perfect in form, present in meaning)",
        charts: {
          oida_present_meaning: {
            label: "Present Meaning (Perfect Active Indicative)",
            forms: ["οἶδα", "οἶδας", "οἶδε(ν)", "οἴδαμεν", "οἴδατε", "οἴδασι(ν)"]
          },
          oida_past_meaning: {
            label: "Past Meaning (Pluperfect / imperfect sense)",
            forms: ["ᾔδειν", "ᾔδεις", "ᾔδει", "ᾔδειμεν", "ᾔδειτε", "ᾔδεισαν"],
            notes: ["Plural forms vary in some traditions/grammars; keeping your learned set."]
          },
          oida_future_indicative: {
            label: "Future Indicative",
            forms: ["εἴσομαι", "εἴσῃ", "εἴσεται", "εἰσόμεθα", "εἴσεσθε", "εἴσονται"]
          },
          oida_imperative: {
            label: "Imperative",
            forms: ["ἴσθι", "—", "—", "—", "ἴστε", "—"],
            notes: ["Imperative does not map cleanly to all 6 persons; stored in a 6-slot array for UI consistency."]
          },
          oida_infinitive: {
            label: "Infinitive",
            forms: ["εἰδέναι", "", "", "", "", ""],
            notes: ["Infinitive stored in 6-slot array for UI consistency."]
          }
        }
      },

"πληρόω": {
  lemma: "πληρόω",
  gloss: "I fill / complete / fulfill (ο-contract)",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["πληρῶ", "πληροῖς", "πληροῖ", "πληροῦμεν", "πληροῦτε", "πληροῦσι(ν)"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["πληροῦμαι", "πληροῖ", "πληροῦται", "πληρούμεθα", "πληροῦσθε", "πληροῦνται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἐπλήρουν", "ἐπλήρου", "ἐπλήρου", "ἐπληροῦμεν", "ἐπληροῦτε", "ἐπλήρουν"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἐπληρούμην", "ἐπληροῦ", "ἐπληροῦτο", "ἐπληρούμεθα", "ἐπληροῦσθε", "ἐπληροῦντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["πληρώσω", "πληρώσεις", "πληρώσει", "πληρώσομεν", "πληρώσετε", "πληρώσουσι(ν)"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["πληρώσομαι", "πληρώσῃ", "πληρώσεται", "πληρωσόμεθα", "πληρώσεσθε", "πληρώσονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["πληρωθήσομαι", "πληρωθήσῃ", "πληρωθήσεται", "πληρωθησόμεθα", "πληρωθήσεσθε", "πληρωθήσονται"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["ἐπλήρωσα", "ἐπλήρωσας", "ἐπλήρωσε(ν)", "ἐπληρώσαμεν", "ἐπληρώσατε", "ἐπλήρωσαν"]
    },
    aorist_middle_indicative: {
      label: "First Aorist Middle Indicative",
      forms: ["ἐπληρωσάμην", "ἐπλήρωσω", "ἐπληρώσατο", "ἐπληρωσάμεθα", "ἐπληρώσασθε", "ἐπληρώσαντο"]
    },
    aorist_passive_indicative: {
      label: "First Aorist Passive Indicative",
      forms: ["ἐπληρώθην", "ἐπληρώθης", "ἐπληρώθη", "ἐπληρώθημεν", "ἐπληρώθητε", "ἐπληρώθησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["πεπλήρωκα", "πεπλήρωκας", "πεπλήρωκε(ν)", "πεπληρώκαμεν", "πεπληρώκατε", "πεπλήρωκασι(ν)"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["πεπλήρωμαι", "πεπλήρωσαι", "πεπλήρωται", "πεπληρώμεθα", "πεπλήρωσθε", "πεπλήρωνται"]
    }
  }
},

"ποιέω": {
  lemma: "ποιέω",
  gloss: "I do / make (ε-contract)",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["ποιῶ", "ποιεῖς", "ποιεῖ", "ποιοῦμεν", "ποιεῖτε", "ποιοῦσι(ν)"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["ποιοῦμαι", "ποιεῖ", "ποιεῖται", "ποιούμεθα", "ποιεῖσθε", "ποιοῦνται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἐποίουν", "ἐποίεις", "ἐποίει", "ἐποιοῦμεν", "ἐποιεῖτε", "ἐποίουν"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἐποιούμην", "ἐποιοῦ", "ἐποιεῖτο", "ἐποιούμεθα", "ἐποιεῖσθε", "ἐποιοῦντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["ποιήσω", "ποιήσεις", "ποιήσει", "ποιήσομεν", "ποιήσετε", "ποιήσουσι(ν)"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["ποιήσομαι", "ποιήσῃ", "ποιήσεται", "ποιησόμεθα", "ποιήσεσθε", "ποιήσονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["ποιηθήσομαι", "ποιηθήσῃ", "ποιηθήσεται", "ποιηθησόμεθα", "ποιηθήσεσθε", "ποιηθήσονται"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["ἐποίησα", "ἐποίησας", "ἐποίησε(ν)", "ἐποιήσαμεν", "ἐποιήσατε", "ἐποίησαν"]
    },
    aorist_middle_indicative: {
      label: "First Aorist Middle Indicative",
      forms: ["ἐποιησάμην", "ἐποίησω", "ἐποιήσατο", "ἐποιησάμεθα", "ἐποιήσασθε", "ἐποιήσαντο"]
    },
    aorist_passive_indicative: {
      label: "First Aorist Passive Indicative",
      forms: ["ἐποιήθην", "ἐποιήθης", "ἐποιήθη", "ἐποιήθημεν", "ἐποιήθητε", "ἐποιήθησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["πεποίηκα", "πεποίηκας", "πεποίηκε(ν)", "πεποιήκαμεν", "πεποιήκατε", "πεποίηκασι(ν)"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["πεποίημαι", "πεποίησαι", "πεποίηται", "πεποιήμεθα", "πεποίησθε", "πεποίηνται"]
    }
  }
},

"τηρέω": {
  lemma: "τηρέω",
  gloss: "I keep / guard / observe (ε-contract)",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["τηρῶ", "τηρεῖς", "τηρεῖ", "τηροῦμεν", "τηρεῖτε", "τηροῦσι(ν)"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["τηροῦμαι", "τηρεῖ", "τηρεῖται", "τηρούμεθα", "τηρεῖσθε", "τηροῦνται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἐτήρουν", "ἐτήρεις", "ἐτήρει", "ἐτηροῦμεν", "ἐτηρεῖτε", "ἐτήρουν"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἐτηρούμην", "ἐτηροῦ", "ἐτηρεῖτο", "ἐτηρούμεθα", "ἐτηρεῖσθε", "ἐτηροῦντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["τηρήσω", "τηρήσεις", "τηρήσει", "τηρήσομεν", "τηρήσετε", "τηρήσουσι(ν)"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["τηρήσομαι", "τηρήσῃ", "τηρήσεται", "τηρησόμεθα", "τηρήσεσθε", "τηρήσονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["τηρηθήσομαι", "τηρηθήσῃ", "τηρηθήσεται", "τηρηθησόμεθα", "τηρηθήσεσθε", "τηρηθήσονται"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["ἐτήρησα", "ἐτήρησας", "ἐτήρησε(ν)", "ἐτηρήσαμεν", "ἐτηρήσατε", "ἐτήρησαν"]
    },
    aorist_middle_indicative: {
      label: "First Aorist Middle Indicative",
      forms: ["ἐτηρησάμην", "ἐτήρησω", "ἐτηρήσατο", "ἐτηρησάμεθα", "ἐτηρήσασθε", "ἐτηρήσαντο"]
    },
    aorist_passive_indicative: {
      label: "First Aorist Passive Indicative",
      forms: ["ἐτηρήθην", "ἐτηρήθης", "ἐτηρήθη", "ἐτηρήθημεν", "ἐτηρήθητε", "ἐτηρήθησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["τετήρηκα", "τετήρηκας", "τετήρηκε(ν)", "τετηρήκαμεν", "τετηρήκατε", "τετήρηκασι(ν)"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["τετήρημαι", "τετήρησαι", "τετήρηται", "τετηρήμεθα", "τετήρησθε", "τετήρηνται"]
    }
  }
},

"ἀποκρίνομαι": {
  lemma: "ἀποκρίνομαι",
  gloss: "I answer (deponent)",
  charts: {
    present_indicative: {
      label: "Present Indicative",
      forms: ["ἀποκρίνομαι", "ἀποκρίνῃ", "ἀποκρίνεται", "ἀποκρινόμεθα", "ἀποκρίνεσθε", "ἀποκρίνονται"]
    },
    imperfect_indicative: {
      label: "Imperfect Indicative",
      forms: ["ἀπεκρινόμην", "ἀπεκρίνου", "ἀπεκρίνετο", "ἀπεκρινόμεθα", "ἀπεκρίνεσθε", "ἀπεκρίνοντο"]
    },
    future_indicative: {
      label: "Future Indicative",
      forms: ["ἀποκρινοῦμαι", "ἀποκρινῇ", "ἀποκρινεῖται", "ἀποκρινούμεθα", "ἀποκρινεῖσθε", "ἀποκρινοῦνται"]
    },
    aorist_indicative: {
      label: "Aorist Indicative",
      forms: ["ἀπεκρινάμην", "ἀπεκρίνω", "ἀπεκρίνατο", "ἀπεκρινάμεθα", "ἀπεκρίνασθε", "ἀπεκρίναντο"]
    }
  }
},

"δύναμαι": {
  lemma: "δύναμαι",
  gloss: "I am able (deponent)",
  charts: {
    present_indicative: {
      label: "Present Indicative",
      forms: ["δύναμαι", "δύνῃ", "δύναται", "δυνάμεθα", "δύνασθε", "δύνανται"]
    },
    imperfect_indicative: {
      label: "Imperfect Indicative",
      forms: ["ἐδυνάμην", "ἐδύνου", "ἐδύνατο", "ἐδυνάμεθα", "ἐδύνασθε", "ἐδύναντο"]
    },
    future_indicative: {
      label: "Future Indicative",
      forms: ["δυνήσομαι", "δυνήσῃ", "δυνήσεται", "δυνησόμεθα", "δυνήσεσθε", "δυνήσονται"]
    },
    aorist_indicative: {
      label: "Aorist Indicative",
      forms: ["ἐδυνήθην", "ἐδυνήθης", "ἐδυνήθη", "ἐδυνήθημεν", "ἐδυνήθητε", "ἐδυνήθησαν"]
    }
  }
},

"ἔρχομαι": {
  lemma: "ἔρχομαι",
  gloss: "I come / go (deponent, irregular)",
  charts: {
    present_indicative: {
      label: "Present Indicative",
      forms: ["ἔρχομαι", "ἔρχῃ", "ἔρχεται", "ἐρχόμεθα", "ἔρχεσθε", "ἔρχονται"]
    },
    imperfect_indicative: {
      label: "Imperfect Indicative",
      forms: ["ἠρχόμην", "ἤρχου", "ἤρχετο", "ἠρχόμεθα", "ἤρχεσθε", "ἤρχοντο"]
    },
    future_indicative: {
      label: "Future Indicative",
      forms: ["ἐλεύσομαι", "ἐλεύσῃ", "ἐλεύσεται", "ἐλευσόμεθα", "ἐλεύσεσθε", "ἐλεύσονται"]
    },
    aorist_indicative: {
      label: "Aorist Indicative",
      forms: ["ἦλθον", "ἦλθες", "ἦλθε(ν)", "ἤλθομεν", "ἤλθετε", "ἦλθον"]
    },
    perfect_indicative: {
      label: "Perfect Indicative",
      forms: ["ἐλήλυθα", "ἐλήλυθας", "ἐλήλυθε(ν)", "ἐληλύθαμεν", "ἐληλύθατε", "ἐλήλυθασι(ν)"]
    }
  }
},

"πορεύομαι": {
  lemma: "πορεύομαι",
  gloss: "I go / travel / proceed (deponent)",
  charts: {
    present_indicative: {
      label: "Present Indicative",
      forms: ["πορεύομαι", "πορεύῃ", "πορεύεται", "πορευόμεθα", "πορεύεσθε", "πορεύονται"]
    },
    imperfect_indicative: {
      label: "Imperfect Indicative",
      forms: ["ἐπορευόμην", "ἐπορεύου", "ἐπορεύετο", "ἐπορευόμεθα", "ἐπορεύεσθε", "ἐπορεύοντο"]
    },
    future_indicative: {
      label: "Future Indicative",
      forms: ["πορεύσομαι", "πορεύσῃ", "πορεύσεται", "πορευσόμεθα", "πορεύσεσθε", "πορεύσονται"]
    },
    aorist_indicative: {
      label: "Aorist Indicative",
      forms: ["ἐπορευσάμην", "ἐπορεύσω", "ἐπορεύσατο", "ἐπορευσάμεθα", "ἐπορεύσασθε", "ἐπορεύσαντο"]
    }
  }
},
"ἀπέρχομαι": {
  lemma: "ἀπέρχομαι",
  gloss: "I go away / depart (deponent)",
  charts: {
    present_indicative: {
      label: "Present Indicative",
      forms: ["ἀπέρχομαι", "ἀπέρχῃ", "ἀπέρχεται", "ἀπερχόμεθα", "ἀπέρχεσθε", "ἀπέρχονται"]
    },
    imperfect_indicative: {
      label: "Imperfect Indicative",
      forms: ["ἀπηρχόμην", "ἀπήρχου", "ἀπήρχετο", "ἀπηρχόμεθα", "ἀπήρχεσθε", "ἀπήρχοντο"]
    },
    future_indicative: {
      label: "Future Indicative",
      forms: ["ἀπελεύσομαι", "ἀπελεύσῃ", "ἀπελεύσεται", "ἀπελευσόμεθα", "ἀπελεύσεσθε", "ἀπελεύσονται"]
    },
    aorist_indicative: {
      label: "Aorist Indicative",
      forms: ["ἀπῆλθον", "ἀπῆλθες", "ἀπῆλθε(ν)", "ἀπῆλθομεν", "ἀπῆλθετε", "ἀπῆλθον"]
    },
    perfect_indicative: {
      label: "Perfect Indicative",
      forms: ["ἀπελήλυθα", "ἀπελήλυθας", "ἀπελήλυθε(ν)", "ἀπεληλύθαμεν", "ἀπεληλύθατε", "ἀπελήλυθασι(ν)"]
    }
  }
},

"γράφω": {
  lemma: "γράφω",
  gloss: "I write",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["γράφω", "γράφεις", "γράφει", "γράφομεν", "γράφετε", "γράφουσι(ν)"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἔγραφον", "ἔγραφες", "ἔγραφε(ν)", "ἐγράφομεν", "ἐγράφετε", "ἔγραφον"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["γράψω", "γράψεις", "γράψει", "γράψομεν", "γράψετε", "γράψουσι(ν)"]
    },
    aorist_active_indicative: {
      label: "Aorist Active Indicative (1st Aorist)",
      forms: ["ἔγραψα", "ἔγραψας", "ἔγραψε(ν)", "ἐγράψαμεν", "ἐγράψατε", "ἔγραψαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["γέγραφα", "γέγραφας", "γέγραφε(ν)", "γεγράφαμεν", "γεγράφατε", "γέγραφασι(ν)"]
    }
  }
},

"δοξάζω": {
  lemma: "δοξάζω",
  gloss: "I glorify",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["δοξάζω", "δοξάζεις", "δοξάζει", "δοξάζομεν", "δοξάζετε", "δοξάζουσι(ν)"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἐδόξαζον", "ἐδόξαζες", "ἐδόξαζε(ν)", "ἐδοξάζομεν", "ἐδοξάζετε", "ἐδόξαζον"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["δοξάσω", "δοξάσεις", "δοξάσει", "δοξάσομεν", "δοξάσετε", "δοξάσουσι(ν)"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["ἐδόξασα", "ἐδόξασας", "ἐδόξασε(ν)", "ἐδοξάσαμεν", "ἐδοξάσατε", "ἐδόξασαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["δεδόξακα", "δεδόξακας", "δεδόξακε(ν)", "δεδοξάκαμεν", "δεδοξάκατε", "δεδόξακασι(ν)"]
    }
  }
},

"κηρύσσω": {
  lemma: "κηρύσσω",
  gloss: "I proclaim / preach",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["κηρύσσω", "κηρύσσεις", "κηρύσσει", "κηρύσσομεν", "κηρύσσετε", "κηρύσσουσι(ν)"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἐκήρυσσον", "ἐκήρυσσες", "ἐκήρυσσε(ν)", "ἐκηρύσσομεν", "ἐκηρύσσετε", "ἐκήρυσσον"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["κηρύξω", "κηρύξεις", "κηρύξει", "κηρύξομεν", "κηρύξετε", "κηρύξουσι(ν)"]
    },
    aorist_active_indicative: {
      label: "Aorist Active Indicative",
      forms: ["ἐκήρυξα", "ἐκήρυξας", "ἐκήρυξε(ν)", "ἐκηρύξαμεν", "ἐκηρύξατε", "ἐκήρυξαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["κεκήρυχα", "κεκήρυχας", "κεκήρυχε(ν)", "κεκηρύχαμεν", "κεκηρύχατε", "κεκήρυχασι(ν)"]
    }
  }
},

"πίνω": {
  lemma: "πίνω",
  gloss: "I drink",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["πίνω", "πίνεις", "πίνει", "πίνομεν", "πίνετε", "πίνουσι(ν)"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἔπινον", "ἔπινες", "ἔπινε(ν)", "ἐπίνομεν", "ἐπίνετε", "ἔπινον"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["πίομαι", "πίῃ", "πίεται", "πιόμεθα", "πίεσθε", "πίονται"]
    },
    aorist_active_indicative: {
      label: "Aorist Active Indicative (2nd Aorist)",
      forms: ["ἔπιον", "ἔπιες", "ἔπιε(ν)", "ἐπίομεν", "ἐπίετε", "ἔπιον"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["πέπωκα", "πέπωκας", "πέπωκε(ν)", "πεπώκαμεν", "πεπώκατε", "πέπωκασι(ν)"]
    }
  }
},

"ἄγω": {
  lemma: "ἄγω",
  gloss: "I lead / bring",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["ἄγω", "ἄγεις", "ἄγει", "ἄγομεν", "ἄγετε", "ἄγουσι(ν)"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἦγον", "ἦγες", "ἦγε(ν)", "ἤγομεν", "ἤγετε", "ἦγον"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["ἄξω", "ἄξεις", "ἄξει", "ἄξομεν", "ἄξετε", "ἄξουσι(ν)"]
    },
    aorist_active_indicative: {
      label: "Aorist Active Indicative (2nd Aorist)",
      forms: ["ἤγαγον", "ἤγαγες", "ἤγαγε(ν)", "ἠγάγομεν", "ἠγάγετε", "ἤγαγον"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["ἦχα", "ἦχας", "ἦχε(ν)", "ἤχαμεν", "ἤχατε", "ἦχασι(ν)"]
    }
  }
},

"ὑπάγω": {
  lemma: "ὑπάγω",
  gloss: "I go / depart",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["ὑπάγω", "ὑπάγεις", "ὑπάγει", "ὑπάγομεν", "ὑπάγετε", "ὑπάγουσι(ν)"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ὑπῆγον", "ὑπῆγες", "ὑπῆγε(ν)", "ὑπήγομεν", "ὑπήγετε", "ὑπῆγον"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["ὑπάξω", "ὑπάξεις", "ὑπάξει", "ὑπάξομεν", "ὑπάξετε", "ὑπάξουσι(ν)"]
    },
    aorist_active_indicative: {
      label: "Aorist Active Indicative",
      forms: ["ὑπῆξα", "ὑπῆξας", "ὑπῆξε(ν)", "ὑπήξαμεν", "ὑπήξατε", "ὑπῆξαν"]
    }
  }
},

"φοβέομαι": {
  lemma: "φοβέομαι",
  gloss: "I fear (deponent)",
  charts: {
    present_indicative: {
      label: "Present Indicative",
      forms: ["φοβοῦμαι", "φοβῇ", "φοβεῖται", "φοβούμεθα", "φοβεῖσθε", "φοβοῦνται"]
    },
    imperfect_indicative: {
      label: "Imperfect Indicative",
      forms: ["ἐφοβούμην", "ἐφοβοῦ", "ἐφοβεῖτο", "ἐφοβούμεθα", "ἐφοβεῖσθε", "ἐφοβοῦντο"]
    },
    future_indicative: {
      label: "Future Indicative",
      forms: ["φοβηθήσομαι", "φοβηθήσῃ", "φοβηθήσεται", "φοβηθησόμεθα", "φοβηθήσεσθε", "φοβηθήσονται"]
    },
    aorist_indicative: {
      label: "Aorist Indicative",
      forms: ["ἐφοβήθην", "ἐφοβήθης", "ἐφοβήθη", "ἐφοβήθημεν", "ἐφοβήθητε", "ἐφοβήθησαν"]
    }
  }
},

"χαίρω": {
  lemma: "χαίρω",
  gloss: "I rejoice",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["χαίρω", "χαίρεις", "χαίρει", "χαίρομεν", "χαίρετε", "χαίρουσι(ν)"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἔχαιρον", "ἔχαιρες", "ἔχαιρε(ν)", "ἐχαίρομεν", "ἐχαίρετε", "ἔχαιρον"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["χαρήσομαι", "χαρήσῃ", "χαρήσεται", "χαρησόμεθα", "χαρήσεσθε", "χαρήσονται"]
    },
    aorist_active_indicative: {
      label: "Aorist Active Indicative",
      forms: ["ἐχάρην", "ἐχάρης", "ἐχάρη", "ἐχάρημεν", "ἐχάρητε", "ἐχάρησαν"]
    }
  }
},

"αἰτέω": {
  lemma: "αἰτέω",
  gloss: "I ask / request (ε-contract)",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["αἰτῶ", "αἰτεῖς", "αἰτεῖ", "αἰτοῦμεν", "αἰτεῖτε", "αἰτοῦσι(ν)"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ᾔτουν", "ᾔτεις", "ᾔτει", "ᾐτοῦμεν", "ᾐτεῖτε", "ᾔτουν"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["αἰτήσω", "αἰτήσεις", "αἰτήσει", "αἰτήσομεν", "αἰτήσετε", "αἰτήσουσι(ν)"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["ᾔτησα", "ᾔτησας", "ᾔτησε(ν)", "ᾐτήσαμεν", "ᾐτήσατε", "ᾔτησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["ᾔτηκα", "ᾔτηκας", "ᾔτηκε(ν)", "ᾐτήκαμεν", "ᾐτήκατε", "ᾔτηκασι(ν)"]
    }
  }
},

"μαρτυρέω": {
  lemma: "μαρτυρέω",
  gloss: "I bear witness (ε-contract)",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["μαρτυρῶ", "μαρτυρεῖς", "μαρτυρεῖ", "μαρτυροῦμεν", "μαρτυρεῖτε", "μαρτυροῦσι(ν)"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἐμαρτύρουν", "ἐμαρτύρεις", "ἐμαρτύρει", "ἐμαρτυροῦμεν", "ἐμαρτυρεῖτε", "ἐμαρτύρουν"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["μαρτυρήσω", "μαρτυρήσεις", "μαρτυρήσει", "μαρτυρήσομεν", "μαρτυρήσετε", "μαρτυρήσουσι(ν)"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["ἐμαρτύρησα", "ἐμαρτύρησας", "ἐμαρτύρησε(ν)", "ἐμαρτυρήσαμεν", "ἐμαρτυρήσατε", "ἐμαρτύρησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["μεμαρτύρηκα", "μεμαρτύρηκας", "μεμαρτύρηκε(ν)", "μεμαρτυρήκαμεν", "μεμαρτυρήκατε", "μεμαρτύρηκασι(ν)"]
    }
  }
},

"ἀναβαίνω": {
  lemma: "ἀναβαίνω",
  gloss: "I go up / ascend",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["ἀναβαίνω", "ἀναβαίνεις", "ἀναβαίνει", "ἀναβαίνομεν", "ἀναβαίνετε", "ἀναβαίνουσι(ν)"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἀνέβαινον", "ἀνέβαινες", "ἀνέβαινε(ν)", "ἀνεβαίνομεν", "ἀνεβαίνετε", "ἀνέβαινον"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["ἀναβήσομαι", "ἀναβήσῃ", "ἀναβήσεται", "ἀναβησόμεθα", "ἀναβήσεσθε", "ἀναβήσονται"]
    },
    aorist_active_indicative: {
      label: "Aorist Active Indicative (2nd Aorist)",
      forms: ["ἀνέβην", "ἀνέβης", "ἀνέβη", "ἀνέβημεν", "ἀνέβητε", "ἀνέβησαν"]
    }
  }
},

"εὐαγγελίζω": {
  lemma: "εὐαγγελίζω",
  gloss: "I proclaim good news / preach gospel",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["εὐαγγελίζω", "εὐαγγελίζεις", "εὐαγγελίζει", "εὐαγγελίζομεν", "εὐαγγελίζετε", "εὐαγγελίζουσι(ν)"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["εὐηγγέλιζον", "εὐηγγέλιζες", "εὐηγγέλιζε(ν)", "εὐηγγελίζομεν", "εὐηγγελίζετε", "εὐηγγέλιζον"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["εὐαγγελιῶ", "εὐαγγελιεῖς", "εὐαγγελιεῖ", "εὐαγγελιοῦμεν", "εὐαγγελιεῖτε", "εὐαγγελιοῦσι(ν)"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["εὐηγγέλισα", "εὐηγγέλισας", "εὐηγγέλισε(ν)", "εὐηγγελίσαμεν", "εὐηγγελίσατε", "εὐηγγέλισαν"]
    }
  }
},

"θεωρέω": {
  lemma: "θεωρέω",
  gloss: "I see / behold / observe (ε-contract)",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["θεωρῶ", "θεωρεῖς", "θεωρεῖ", "θεωροῦμεν", "θεωρεῖτε", "θεωροῦσι(ν)"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἐθεώρουν", "ἐθεώρεις", "ἐθεώρει", "ἐθεωροῦμεν", "ἐθεωρεῖτε", "ἐθεώρουν"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["θεωρήσω", "θεωρήσεις", "θεωρήσει", "θεωρήσομεν", "θεωρήσετε", "θεωρήσουσι(ν)"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["ἐθεώρησα", "ἐθεώρησας", "ἐθεώρησε(ν)", "ἐθεωρήσαμεν", "ἐθεωρήσατε", "ἐθεώρησαν"]
    }
  }
},

"κάθημαι": {
  lemma: "κάθημαι",
  gloss: "I sit / am seated (deponent)",
  charts: {
    present_indicative: {
      label: "Present Indicative",
      forms: ["κάθημαι", "κάθησαι", "κάθηται", "καθήμεθα", "κάθησθε", "κάθηνται"]
    },
    imperfect_indicative: {
      label: "Imperfect Indicative",
      forms: ["ἐκαθήμην", "ἐκάθησο", "ἐκάθητο", "ἐκαθήμεθα", "ἐκάθησθε", "ἐκάθηντο"]
    },
    future_indicative: {
      label: "Future Indicative",
      forms: ["καθήσομαι", "καθήσῃ", "καθήσεται", "καθησόμεθα", "καθήσεσθε", "καθήσονται"]
    }
  }
},
      "συνάγω": {
        lemma: "συνάγω",
        gloss: "I gather together / bring together",
        notes: [
          "compound verb; irregular aorist",
        ],
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["συνάγω", "συνάγεις", "συνάγει", "συνάγομεν", "συνάγετε", "συνάγουσι(ν)"]
          },
          present_middle_passive_indicative: {
            label: "Present Middle/Passive Indicative",
            forms: ["συνάγομαι", "συνάγῃ", "συνάγεται", "συναγόμεθα", "συνάγεσθε", "συνάγονται"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["συνῆγον", "συνῆγες", "συνῆγε(ν)", "συνήγομεν", "συνήγετε", "συνῆγον"]
          },
          imperfect_middle_passive_indicative: {
            label: "Imperfect Middle/Passive Indicative",
            forms: ["συνηγόμην", "συνῆγου", "συνῆγετο", "συνηγόμεθα", "συνῆγεσθε", "συνῆγοντο"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["συνάξω", "συνάξεις", "συνάξει", "συνάξομεν", "συνάξετε", "συνάξουσι(ν)"]
          },
          aorist_active_indicative: {
            label: "Aorist Active Indicative (2nd Aorist)",
            forms: ["συνήγαγον", "συνήγαγες", "συνήγαγε(ν)", "συνηγάγομεν", "συνηγάγετε", "συνήγαγον"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            forms: ["συνῆχα", "συνῆχας", "συνῆχε(ν)", "συνήχαμεν", "συνήχατε", "συνῆχασι(ν)"]
          }
        }
      },

      "γεννάω": {
        lemma: "γεννάω",
        gloss: "I beget / bear / give birth to (α-contract)",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["γεννῶ", "γεννᾷς", "γεννᾷ", "γεννῶμεν", "γεννᾶτε", "γεννῶσι(ν)"]
          },
          present_middle_passive_indicative: {
            label: "Present Middle/Passive Indicative",
            forms: ["γεννῶμαι", "γεννᾷ", "γεννᾶται", "γεννώμεθα", "γεννᾶσθε", "γεννῶνται"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἐγέννων", "ἐγέννας", "ἐγέννα", "ἐγεννῶμεν", "ἐγεννᾶτε", "ἐγέννων"]
          },
          imperfect_middle_passive_indicative: {
            label: "Imperfect Middle/Passive Indicative",
            forms: ["ἐγεννώμην", "ἐγέννου", "ἐγεννᾶτο", "ἐγεννώμεθα", "ἐγεννᾶσθε", "ἐγεννῶντο"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["γεννήσω", "γεννήσεις", "γεννήσει", "γεννήσομεν", "γεννήσετε", "γεννήσουσι(ν)"]
          },
          future_middle_indicative: {
            label: "Future Middle Indicative",
            forms: ["γεννήσομαι", "γεννήσῃ", "γεννήσεται", "γεννησόμεθα", "γεννήσεσθε", "γεννήσονται"]
          },
          future_passive_indicative: {
            label: "Future Passive Indicative",
            forms: ["γεννηθήσομαι", "γεννηθήσῃ", "γεννηθήσεται", "γεννηθησόμεθα", "γεννηθήσεσθε", "γεννηθήσονται"]
          },
          aorist_active_indicative: {
            label: "First Aorist Active Indicative",
            forms: ["ἐγέννησα", "ἐγέννησας", "ἐγέννησε(ν)", "ἐγεννήσαμεν", "ἐγεννήσατε", "ἐγέννησαν"]
          },
          aorist_middle_indicative: {
            label: "First Aorist Middle Indicative",
            forms: ["ἐγεννησάμην", "ἐγέννησω", "ἐγεννήσατο", "ἐγεννησάμεθα", "ἐγεννήσασθε", "ἐγεννήσαντο"]
          },
          aorist_passive_indicative: {
            label: "First Aorist Passive Indicative",
            forms: ["ἐγεννήθην", "ἐγεννήθης", "ἐγεννήθη", "ἐγεννήθημεν", "ἐγεννήθητε", "ἐγεννήθησαν"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            forms: ["γεγέννηκα", "γεγέννηκας", "γεγέννηκε(ν)", "γεγεννήκαμεν", "γεγεννήκατε", "γεγέννηκασι(ν)"]
          },
          perfect_middle_passive_indicative: {
            label: "Perfect Middle/Passive Indicative",
            forms: ["γεγέννημαι", "γεγέννησαι", "γεγέννηται", "γεγεννήμεθα", "γεγέννησθε", "γεγέννηνται"]
          }
        }
      },

      "ζάω": {
        lemma: "ζάω",
        gloss: "I live (α-contract)",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["ζῶ", "ζῇς", "ζῇ", "ζῶμεν", "ζῆτε", "ζῶσι(ν)"]
          },
          present_middle_passive_indicative: {
            label: "Present Middle/Passive Indicative",
            forms: ["ζῶμαι", "ζῇ", "ζῆται", "ζώμεθα", "ζῆσθε", "ζῶνται"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἔζων", "ἔζας", "ἔζα", "ἐζῶμεν", "ἐζᾶτε", "ἔζων"]
          },
          imperfect_middle_passive_indicative: {
            label: "Imperfect Middle/Passive Indicative",
            forms: ["ἐζώμην", "ἔζου", "ἐζᾶτο", "ἐζώμεθα", "ἐζᾶσθε", "ἐζῶντο"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["ζήσω", "ζήσεις", "ζήσει", "ζήσομεν", "ζήσετε", "ζήσουσι(ν)"]
          },
          future_middle_indicative: {
            label: "Future Middle Indicative",
            forms: ["ζήσομαι", "ζήσῃ", "ζήσεται", "ζησόμεθα", "ζήσεσθε", "ζήσονται"]
          },
          future_passive_indicative: {
            label: "Future Passive Indicative",
            forms: ["ζηθήσομαι", "ζηθήσῃ", "ζηθήσεται", "ζηθησόμεθα", "ζηθήσεσθε", "ζηθήσονται"]
          },
          aorist_active_indicative: {
            label: "First Aorist Active Indicative",
            forms: ["ἔζησα", "ἔζησας", "ἔζησε(ν)", "ἐζήσαμεν", "ἐζήσατε", "ἔζησαν"]
          },
          aorist_middle_indicative: {
            label: "First Aorist Middle Indicative",
            forms: ["ἐζησάμην", "ἔζησω", "ἐζήσατο", "ἐζησάμεθα", "ἐζήσασθε", "ἐζήσαντο"]
          },
          aorist_passive_indicative: {
            label: "First Aorist Passive Indicative",
            forms: ["ἐζήθην", "ἐζήθης", "ἐζήθη", "ἐζήθημεν", "ἐζήθητε", "ἐζήθησαν"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            forms: ["ἔζηκα", "ἔζηκας", "ἔζηκε(ν)", "ἐζήκαμεν", "ἐζήκατε", "ἔζηκασι(ν)"]
          }
        }
      },


      "ἀποκτείνω": {
        lemma: "ἀποκτείνω",
        gloss: "I kill / put to death",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["ἀποκτείνω", "ἀποκτείνεις", "ἀποκτείνει", "ἀποκτείνομεν", "ἀποκτείνετε", "ἀποκτείνουσι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἀπέκτεινον", "ἀπέκτεινες", "ἀπέκτεινε(ν)", "ἀπεκτείνομεν", "ἀπεκτείνετε", "ἀπέκτεινον"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["ἀποκτενῶ", "ἀποκτενεῖς", "ἀποκτενεῖ", "ἀποκτενοῦμεν", "ἀποκτενεῖτε", "ἀποκτενοῦσι(ν)"]
          },
          aorist_active_indicative: {
            label: "Aorist Active Indicative (2nd Aorist)",
            forms: ["ἀπέκτεινα", "ἀπέκτεινας", "ἀπέκτεινε(ν)", "ἀπεκτείναμεν", "ἀπεκτείνατε", "ἀπέκτειναν"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            forms: ["ἀπέκτονα", "ἀπέκτονας", "ἀπέκτονε(ν)", "ἀπεκτόναμεν", "ἀπεκτόνατε", "ἀπέκτονασι(ν)"]
          }
        }
      },

      "γινώσκω": {
        lemma: "γινώσκω",
        gloss: "I know / come to know / learn",
        notes: [
          "liquid future: γνώσομαι etc. (your list had it as a note)",
        ],
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["γινώσκω", "γινώσκεις", "γινώσκει", "γινώσκομεν", "γινώσκετε", "γινώσκουσι(ν)"]
          },
          present_middle_passive_indicative: {
            label: "Present Middle/Passive Indicative",
            forms: ["γινώσκομαι", "γινώσκῃ", "γινώσκεται", "γινωσκόμεθα", "γινώσκεσθε", "γινώσκονται"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἐγίνωσκον", "ἐγίνωσκες", "ἐγίνωσκε(ν)", "ἐγινώσκομεν", "ἐγινώσκετε", "ἐγίνωσκον"]
          },
          imperfect_middle_passive_indicative: {
            label: "Imperfect Middle/Passive Indicative",
            forms: ["ἐγινωσκόμην", "ἐγίνωσκου", "ἐγίνωσκετο", "ἐγινωσκόμεθα", "ἐγίνωσκεσθε", "ἐγίνωσκοντο"]
          },
          future_active_indicative: {
            label: "Future Active Indicative (Liquid Future)",
            forms: ["γνώσομαι", "γνώσῃ", "γνώσεται", "γνωσόμεθα", "γνώσεσθε", "γνώσονται"]
          }
        }
      },
       
      "ἐκβάλλω": {
        lemma: "ἐκβάλλω",
        gloss: "I throw out / cast out / drive out",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["ἐκβάλλω", "ἐκβάλλεις", "ἐκβάλλει", "ἐκβάλλομεν", "ἐκβάλλετε", "ἐκβάλλουσι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἐξέβαλλον", "ἐξέβαλλες", "ἐξέβαλλε(ν)", "ἐξεβάλλομεν", "ἐξεβάλλετε", "ἐξέβαλλον"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["ἐκβαλῶ", "ἐκβαλεῖς", "ἐκβαλεῖ", "ἐκβαλοῦμεν", "ἐκβαλεῖτε", "ἐκβαλοῦσι(ν)"]
          },
          aorist_active_indicative: {
            label: "Aorist Active Indicative (2nd Aorist)",
            forms: ["ἐξέβαλον", "ἐξέβαλες", "ἐξέβαλε(ν)", "ἐξεβάλομεν", "ἐξεβάλετε", "ἐξέβαλον"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            forms: ["ἐκβέβληκα", "ἐκβέβληκας", "ἐκβέβληκε(ν)", "ἐκβεβλήκαμεν", "ἐκβεβλήκατε", "ἐκβέβληκασι(ν)"]
          }
        }
      },
      "κρίνω": {
  lemma: "κρίνω",
  gloss: "I judge / decide / evaluate",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["κρίνω", "κρίνεις", "κρίνει", "κρίνομεν", "κρίνετε", "κρίνουσι"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["κρίνομαι", "κρίνῃ", "κρίνεται", "κρινόμεθα", "κρίνεσθε", "κρίνονται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἔκρινον", "ἔκρινες", "ἔκρινε", "ἐκρίνομεν", "ἐκρίνετε", "ἔκρινον"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἐκρινόμην", "ἐκρίνου", "ἐκρίνετο", "ἐκρινόμεθα", "ἐκρίνεσθε", "ἐκρίνοντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["κρινῶ", "κρινεῖς", "κρινεῖ", "κρινοῦμεν", "κρινεῖτε", "κρινοῦσι"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["κρινοῦμαι", "κρινῇ", "κρινεῖται", "κρινούμεθα", "κρινεῖσθε", "κρινοῦνται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["κριθήσομαι", "κριθήσῃ", "κριθήσεται", "κριθησόμεθα", "κριθήσεσθε", "κριθήσονται"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["κέκρικα", "κέκρικας", "κέκρικε", "κεκρίκαμεν", "κεκρίκατε", "κέκρικασι"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["κέκριμαι", "κέκρισαι", "κέκριται", "κεκρίμεθα", "κέκρισθε", "κέκρινται"]
    },
  }
},

"μένω": {
  lemma: "μένω",
  gloss: "I remain / stay / abide / continue",
  notes: [
    "Future Passive Indicative: incomplete in source; padded blanks.",
  ],
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["μένω", "μένεις", "μένει", "μένομεν", "μένετε", "μένουσι"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["μένομαι", "μένῃ", "μένεται", "μενόμεθα", "μένεσθε", "μένονται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἔμενον", "ἔμενες", "ἔμενε", "ἐμένομεν", "ἐμένετε", "ἔμενον"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἐμενόμην", "ἐμένου", "ἐμένετο", "ἐμενόμεθα", "ἐμένεσθε", "ἐμένοντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["μενῶ", "μενεῖς", "μενεῖ", "μενοῦμεν", "μενεῖτε", "μενοῦσι"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["μενοῦμαι", "μενῇ", "μενεῖται", "μενούμεθα", "μενεῖσθε", "μενοῦνται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["μενηθήσομαι", "μενηθήσῃ", "μενηθήσεται", "", "", ""]
    },
    aorist_active_indicative: {
      label: "Aorist Active Indicative",
      forms: ["ἔμεινα", "ἔμεινας", "ἔμεινε", "ἐμείναμεν", "ἐμείνατε", "ἔμειναν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["μεμένηκα", "μεμένηκας", "μεμένηκε", "μεμενήκαμεν", "μεμενήκατε", "μεμένηκασι"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["μεμένημαι", "μεμένησαι", "μεμένηται", "μεμενήμεθα", "μεμένησθε", "μεμένηνται"]
    },
  }
},

"ὁράω": {
  lemma: "ὁράω",
  gloss: "I see (irregular)",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["ὁρῶ", "ὁρᾷς", "ὁρᾷ", "ὁρῶμεν", "ὁρᾶτε", "ὁρῶσι"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἑώρων", "ἑώρας", "ἑώρα", "ἑωρῶμεν", "ἑωρᾶτε", "ἑώρων"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["ὄψομαι", "ὄψῃ", "ὄψεται", "ὀψόμεθα", "ὄψεσθε", "ὄψονται"]
    },
    aorist_active_indicative: {
      label: "Aorist Active Indicative (2nd Aorist)",
      forms: ["εἶδον", "εἶδες", "εἶδε", "εἴδομεν", "εἴδετε", "εἶδον"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["ἑώρακα", "ἑώρακας", "ἑώρακε", "ἑωράκαμεν", "ἑωράκατε", "ἑώρακασι"]
    },
  }
},

"σῴζω": {
  lemma: "σῴζω",
  gloss: "I save / rescue / heal",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["σῴζω", "σῴζεις", "σῴζει", "σῴζομεν", "σῴζετε", "σῴζουσι"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["σῴζομαι", "σῴζῃ", "σῴζεται", "σῳζόμεθα", "σῴζεσθε", "σῴζονται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἔσῴζον", "ἔσῴζες", "ἔσῴζε", "ἐσῴζομεν", "ἐσῴζετε", "ἔσῴζον"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἐσῳζόμην", "ἐσῴζου", "ἐσῴζετο", "ἐσῳζόμεθα", "ἐσῴζεσθε", "ἐσῴζοντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["σώσω", "σώσεις", "σώσει", "σώσομεν", "σώσετε", "σώσουσι"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["σώσομαι", "σώσῃ", "σώσεται", "σωσόμεθα", "σώσεσθε", "σώσονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["σωθήσομαι", "σωθήσῃ", "σωθήσεται", "σωθησόμεθα", "σωθήσεσθε", "σωθήσονται"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["ἔσωσα", "ἔσωσας", "ἔσωσε", "ἐσώσαμεν", "ἐσώσατε", "ἔσωσαν"]
    },
    aorist_middle_indicative: {
      label: "First Aorist Middle Indicative",
      forms: ["ἐσωσάμην", "ἔσωσω", "ἐσώσατο", "ἐσωσάμεθα", "ἐσώσασθε", "ἐσώσαντο"]
    },
    aorist_passive_indicative: {
      label: "First Aorist Passive Indicative",
      forms: ["ἐσώθην", "ἐσώθης", "ἐσώθη", "ἐσώθημεν", "ἐσώθητε", "ἐσώθησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["σέσωκα", "σέσωκας", "σέσωκε", "σεσώκαμεν", "σεσώκατε", "σέσωκασι"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["σέσωσμαι", "σέσωσαι", "σέσωσται", "σεσώσμεθα", "σέσωσθε", "σέσωσνται"]
    },
  }
},

"ἀκολουθέω": {
  lemma: "ἀκολουθέω",
  gloss: "I follow (ε-contract)",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["ἀκολουθῶ", "ἀκολουθεῖς", "ἀκολουθεῖ", "ἀκολουθοῦμεν", "ἀκολουθεῖτε", "ἀκολουθοῦσι"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["ἀκολουθοῦμαι", "ἀκολουθεῖ", "ἀκολουθεῖται", "ἀκολουθούμεθα", "ἀκολουθεῖσθε", "ἀκολουθοῦνται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἠκολούθουν", "ἠκολούθεις", "ἠκολούθει", "ἠκολουθοῦμεν", "ἠκολουθεῖτε", "ἠκολούθουν"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἠκολουθούμην", "ἠκολουθοῦ", "ἠκολουθεῖτο", "ἠκολουθούμεθα", "ἠκολουθεῖσθε", "ἠκολουθοῦντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["ἀκολουθήσω", "ἀκολουθήσεις", "ἀκολουθήσει", "ἀκολουθήσομεν", "ἀκολουθήσετε", "ἀκολουθήσουσι"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["ἀκολουθήσομαι", "ἀκολουθήσῃ", "ἀκολουθήσεται", "ἀκολουθησόμεθα", "ἀκολουθήσεσθε", "ἀκολουθήσονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["ἀκολουθηθήσομαι", "ἀκολουθηθήσῃ", "ἀκολουθηθήσεται", "ἀκολουθηθησόμεθα", "ἀκολουθηθήσεσθε", "ἀκολουθηθήσονται"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["ἠκολούθησα", "ἠκολούθησας", "ἠκολούθησε", "ἠκολουθήσαμεν", "ἠκολουθήσατε", "ἠκολούθησαν"]
    },
    aorist_middle_indicative: {
      label: "First Aorist Middle Indicative",
      forms: ["ἠκολουθησάμην", "ἠκολούθησω", "ἠκολουθήσατο", "ἠκολουθησάμεθα", "ἠκολουθήσασθε", "ἠκολουθήσαντο"]
    },
    aorist_passive_indicative: {
      label: "First Aorist Passive Indicative",
      forms: ["ἠκολουθήθην", "ἠκολουθήθης", "ἠκολουθήθη", "ἠκολουθήθημεν", "ἠκολουθήθητε", "ἠκολουθήθησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["ἠκολούθηκα", "ἠκολούθηκας", "ἠκολούθηκε", "ἠκολουθήκαμεν", "ἠκολουθήκατε", "ἠκολούθηκασι"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["ἠκολούθημαι", "ἠκολούθησαι", "ἠκολούθηται", "ἠκολουθήμεθα", "ἠκολούθησθε", "ἠκολούθηνται"]
    },
  }
},

"διδάσκω": {
  lemma: "διδάσκω",
  gloss: "I teach",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["διδάσκω", "διδάσκεις", "διδάσκει", "διδάσκομεν", "διδάσκετε", "διδάσκουσι"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["διδάσκομαι", "διδάσκῃ", "διδάσκεται", "διδασκόμεθα", "διδάσκεσθε", "διδάσκονται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἐδίδασκον", "ἐδίδασκες", "ἐδίδασκε", "ἐδιδάσκομεν", "ἐδιδάσκετε", "ἐδίδασκον"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἐδιδασκόμην", "ἐδίδασκου", "ἐδίδασκετο", "ἐδιδασκόμεθα", "ἐδίδασκεσθε", "ἐδίδασκοντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["διδάξω", "διδάξεις", "διδάξει", "διδάξομεν", "διδάξετε", "διδάξουσι"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["διδάξομαι", "διδάξῃ", "διδάξεται", "διδαξόμεθα", "διδάξεσθε", "διδάξονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["διδαχθήσομαι", "διδαχθήσῃ", "διδαχθήσεται", "διδαχθησόμεθα", "διδαχθήσεσθε", "διδαχθήσονται"]
    },
    aorist_active_indicative: {
      label: "Aorist Active Indicative (2nd Aorist)",
      forms: ["ἐδίδαξα", "ἐδίδαξας", "ἐδίδαξε", "ἐδιδάξαμεν", "ἐδιδάξατε", "ἐδίδαξαν"]
    },
    aorist_middle_indicative: {
      label: "Aorist Middle Indicative",
      forms: ["ἐδιδαξάμην", "ἐδίδαξω", "ἐδιδαξάτο", "ἐδιδαξάμεθα", "ἐδιδάξασθε", "ἐδιδαξάvτο"]
    },
    aorist_passive_indicative: {
      label: "Aorist Passive Indicative",
      forms: ["ἐδιδάχθην", "ἐδιδάχθης", "ἐδιδάχθη", "ἐδιδάχθημεν", "ἐδιδάχθητε", "ἐδιδάχθησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["δεδίδαχα", "δεδίδαχας", "δεδίδαχε", "δεδιδαχάμεν", "δεδιδαχάτε", "δεδίδαχασι"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["δεδίδαγμαι", "δεδίδαξαι", "δεδίδακται", "δεδιδαγμέθα", "δεδίδαχθε", "δεδίδαγνται"]
    },
  }
},

"ἐπερωτάω": {
  lemma: "ἐπερωτάω",
  gloss: "I ask / inquire (α-contract)",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["ἐπερωτῶ", "ἐπερωτᾷς", "ἐπερωτᾷ", "ἐπερωτῶμεν", "ἐπερωτᾶτε", "ἐπερωτῶσι"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["ἐπερωτῶμαι", "ἐπερωτᾷ", "ἐπερωτᾶται", "ἐπερωτώμεθα", "ἐπερωτᾶσθε", "ἐπερωτῶνται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἐπηρώτων", "ἐπηρώτας", "ἐπηρώτα", "ἐπηρωτῶμεν", "ἐπηρωτᾶτε", "ἐπηρώτων"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἐπηρωτώμην", "ἐπηρώτου", "ἐπηρωτᾶτο", "ἐπηρωτώμεθα", "ἐπηρωτᾶσθε", "ἐπηρωτῶντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["ἐπερωτήσω", "ἐπερωτήσεις", "ἐπερωτήσει", "ἐπερωτήσομεν", "ἐπερωτήσετε", "ἐπερωτήσουσι"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["ἐπερωτήσομαι", "ἐπερωτήσῃ", "ἐπερωτήσεται", "ἐπερωτησόμεθα", "ἐπερωτήσεσθε", "ἐπερωτήσονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["ἐπερωτηθήσομαι", "ἐπερωτηθήσῃ", "ἐπερωτηθήσεται", "ἐπερωτηθησόμεθα", "ἐπερωτηθήσεσθε", "ἐπερωτηθήσονται"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["ἐπηρώτησα", "ἐπηρώτησας", "ἐπηρώτησε", "ἐπηρωτήσαμεν", "ἐπηρωτήσατε", "ἐπηρώτησαν"]
    },
    aorist_middle_indicative: {
      label: "First Aorist Middle Indicative",
      forms: ["ἐπηρωτησάμην", "ἐπηρώτησω", "ἐπηρωτήσατο", "ἐπηρωτησάμεθα", "ἐπηρωτήσασθε", "ἐπηρωτήσαντο"]
    },
    aorist_passive_indicative: {
      label: "First Aorist Passive Indicative",
      forms: ["ἐπηρωτήθην", "ἐπηρωτήθης", "ἐπηρωτήθη", "ἐπηρωτήθημεν", "ἐπηρωτήθητε", "ἐπηρωτήθησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["ἐπηρώτηκα", "ἐπηρώτηκας", "ἐπηρώτηκε", "ἐπηρωτήκαμεν", "ἐπηρωτήκατε", "ἐπηρώτηκασι"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["ἐπηρώτημαι", "ἐπηρώτησαι", "ἐπηρώτηται", "ἐπηρωτήμεθα", "ἐπηρώτησθε", "ἐπηρώτηνται"]
    },
  }
},

"ἐρωτάω": {
  lemma: "ἐρωτάω",
  gloss: "I ask (α-contract)",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["ἐρωτῶ", "ἐρωτᾷς", "ἐρωτᾷ", "ἐρωτῶμεν", "ἐρωτᾶτε", "ἐρωτῶσι"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["ἐρωτῶμαι", "ἐρωτᾷ", "ἐρωτᾶται", "ἐρωτώμεθα", "ἐρωτᾶσθε", "ἐρωτῶνται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἠρώτων", "ἠρώτας", "ἠρώτα", "ἠρωτῶμεν", "ἠρωτᾶτε", "ἠρώτων"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἠρωτώμην", "ἠρώτου", "ἠρωτᾶτο", "ἠρωτώμεθα", "ἠρωτᾶσθε", "ἠρωτῶντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["ἐρωτήσω", "ἐρωτήσεις", "ἐρωτήσει", "ἐρωτήσομεν", "ἐρωτήσετε", "ἐρωτήσουσι"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["ἐρωτήσομαι", "ἐρωτήσῃ", "ἐρωτήσεται", "ἐρωτησόμεθα", "ἐρωτήσεσθε", "ἐρωτήσονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["ἐρωτηθήσομαι", "ἐρωτηθήσῃ", "ἐρωτηθήσεται", "ἐρωτηθησόμεθα", "ἐρωτηθήσεσθε", "ἐρωτηθήσονται"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["ἠρώτησα", "ἠρώτησας", "ἠρώτησε", "ἠρωτήσαμεν", "ἠρωτήσατε", "ἠρώτησαν"]
    },
    aorist_middle_indicative: {
      label: "First Aorist Middle Indicative",
      forms: ["ἠρωτησάμην", "ἠρώτησω", "ἠρωτήσατο", "ἠρωτησάμεθα", "ἠρωτήσασθε", "ἠρωτήσαντο"]
    },
    aorist_passive_indicative: {
      label: "First Aorist Passive Indicative",
      forms: ["ἠρωτήθην", "ἠρωτήθης", "ἠρωτήθη", "ἠρωτήθημεν", "ἠρωτήθητε", "ἠρωτήθησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["ἠρώτηκα", "ἠρώτηκας", "ἠρώτηκε", "ἠρωτήκαμεν", "ἠρωτήκατε", "ἠρώτηκασι"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["ἠρώτημαι", "ἠρώτησαι", "ἠρώτηται", "ἠρωτήμεθα", "ἠρώτησθε", "ἠρώτηνται"]
    },
  }
},

"θέλω": {
  lemma: "θέλω",
  gloss: "I want / desire / will",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["θέλω", "θέλεις", "θέλει", "θέλομεν", "θέλετε", "θέλουσι"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἤθελον", "ἤθελες", "ἤθελε", "ἠθέλομεν", "ἠθέλετε", "ἤθελον"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["θελήσω", "θελήσεις", "θελήσει", "θελήσομεν", "θελήσετε", "θελήσουσι"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["ἠθέλησα", "ἠθέλησας", "ἠθέλησε", "ἠθελήσαμεν", "ἠθελήσατε", "ἠθέλησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["τεθέληκα", "τεθέληκας", "τεθέληκε", "τεθελήκαμεν", "τεθελήκατε", "τεθέληκασι"]
    },
  }
},

"περιπατέω": {
  lemma: "περιπατέω",
  gloss: "I walk / live / conduct myself (ε-contract)",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["περιπατῶ", "περιπατεῖς", "περιπατεῖ", "περιπατοῦμεν", "περιπατεῖτε", "περιπατοῦσι"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["περιπατοῦμαι", "περιπατεῖ", "περιπατεῖται", "περιπατούμεθα", "περιπατεῖσθε", "περιπατοῦνται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["περιεπάτουν", "περιεπάτεις", "περιεπάτει", "περιεπατοῦμεν", "περιεπατεῖτε", "περιεπάτουν"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["περιεπατούμην", "περιεπατοῦ", "περιεπάτειτο", "περιεπατούμεθα", "περιεπατεῖσθε", "περιεπατοῦντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["περιπατήσω", "περιπατήσεις", "περιπατήσει", "περιπατήσομεν", "περιπατήσετε", "περιπατήσουσι"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["περιπατήσομαι", "περιπατήσῃ", "περιπατήσειται", "περιπατησόμεθα", "περιπατήσεσθε", "περιπατήσονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["περιπατηθήσομαι", "περιπατηθήσῃ", "περιπατηθήσεται", "περιπατηθησόμεθα", "περιπατηθήσεσθε", "περιπατηθήσονται"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["περιεπάτησα", "περιεπάτησας", "περιεπάτησε", "περιεπατήσαμεν", "περιεπατήσατε", "περιεπάτησαν"]
    },
    aorist_middle_indicative: {
      label: "First Aorist Middle Indicative",
      forms: ["περιεπατησάμην", "περιεπάτησω", "περιεπατήσατο", "περιεπατησάμεθα", "περιεπατήσασθε", "περιεπατήσαντο"]
    },
    aorist_passive_indicative: {
      label: "First Aorist Passive Indicative",
      forms: ["περιεπατήθην", "περιεπατήθης", "περιεπατήθη", "περιεπατήθημεν", "περιεπατήθητε", "περιεπατήθησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["περιπεπάτηκα", "περιπεπάτηκας", "περιπεπάτηκε", "περιπεπατήκαμεν", "περιπεπατήκατε", "περιπεπάτηκασι"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["περιπεπάτημαι", "περιπεπάτησαι", "περιπεπάτηται", "περιπεπατήμεθα", "περιπεπάτησθε", "περιπεπάτηνται"]
    },
  }
},
      "αἴρω": {
        lemma: "αἴρω",
        gloss: "I raise / take up / take away",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["αἴρω", "αἴρεις", "αἴρει", "αἴρομεν", "αἴρετε", "αἴρουσι(ν)"]
          },
          present_middle_passive_indicative: {
            label: "Present Middle/Passive Indicative",
            forms: ["αἴρομαι", "αἴρῃ", "αἴρεται", "αἰρόμεθα", "αἴρεσθε", "αἴρονται"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ᾖρον", "ᾖρες", "ᾖρε(ν)", "ᾖρομεν", "ᾖρετε", "ᾖρον"]
          },
          imperfect_middle_passive_indicative: {
            label: "Imperfect Middle/Passive Indicative",
            forms: ["ᾐρόμην", "ᾖρου", "ᾖρετο", "ᾐρόμεθα", "ᾖρεσθε", "ᾖροντο"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["ἀρῶ", "ἀρεῖς", "ἀρεῖ", "ἀροῦμεν", "ἀρεῖτε", "ἀροῦσι(ν)"]
          },
          future_passive_indicative: {
            label: "Future Passive Indicative (rare)",
            forms: ["ἀρθήσομαι", "ἀρθήσῃ", "ἀρθήσεται", "ἀρθησόμεθα", "ἀρθήσεσθε", "ἀρθήσονται"]
          },
          aorist_active_indicative: {
            label: "First Aorist Active Indicative",
            forms: ["ἦρα", "ἦρας", "ἦρε(ν)", "ἤραμεν", "ἤρατε", "ἦραν"]
          },
          aorist_passive_indicative: {
            label: "Aorist Passive Indicative (rare)",
            forms: ["ἤρθην", "ἤρθης", "ἤρθη", "ἤρθημεν", "ἤρθητε", "ἤρθησαν"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            forms: ["ἦρκα", "ἦρκας", "ἦρκε(ν)", "ἤρκαμεν", "ἤρκατε", "ἦρκασι(ν)"]
          }
        }
      },

      "ἀποστέλλω": {
        lemma: "ἀποστέλλω",
        gloss: "I send out",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["ἀποστέλλω", "ἀποστέλλεις", "ἀποστέλλει", "ἀποστέλλομεν", "ἀποστέλλετε", "ἀποστέλλουσι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἀπέστελλον", "ἀπέστελλες", "ἀπέστελλε(ν)", "ἀπεστέλλομεν", "ἀπεστέλλετε", "ἀπέστελλον"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["ἀποστελῶ", "ἀποστελεῖς", "ἀποστελεῖ", "ἀποστελοῦμεν", "ἀποστελεῖτε", "ἀποστελοῦσι(ν)"]
          },
          aorist_active_indicative: {
            label: "Aorist Active Indicative (2nd Aorist)",
            forms: ["ἀπέστειλα", "ἀπέστειλας", "ἀπέστειλε(ν)", "ἀπεστείλαμεν", "ἀπεστείλατε", "ἀπέστειλαν"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            forms: ["ἀπέσταλκα", "ἀπέσταλκας", "ἀπέσταλκε(ν)", "ἀπεστάλκαμεν", "ἀπεστάλκατε", "ἀπέσταλκασι(ν)"]
          }
        }
      },

      "βαπτίζω": {
        lemma: "βαπτίζω",
        gloss: "I baptize",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["βαπτίζω", "βαπτίζεις", "βαπτίζει", "βαπτίζομεν", "βαπτίζετε", "βαπτίζουσι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἐβάπτιζον", "ἐβάπτιζες", "ἐβάπτιζε(ν)", "ἐβαπτίζομεν", "ἐβαπτίζετε", "ἐβάπτιζον"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["βαπτίσω", "βαπτίσεις", "βαπτίσει", "βαπτίσομεν", "βαπτίσετε", "βαπτίσουσι(ν)"]
          },
          aorist_active_indicative: {
            label: "First Aorist Active Indicative",
            forms: ["ἐβάπτισα", "ἐβάπτισας", "ἐβάπτισε(ν)", "ἐβαπτίσαμεν", "ἐβαπτίσατε", "ἐβάπτισαν"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            forms: ["βεβάπτικα", "βεβάπτικας", "βεβάπτικε(ν)", "βεβαπτίκαμεν", "βεβαπτίκατε", "βεβάπτικασι(ν)"]
          }
        }
      },

      "γίνομαι": {
        lemma: "γίνομαι",
        gloss: "I become / happen / be",
        charts: {
          present_indicative: {
            label: "Present Indicative",
            forms: ["γίνομαι", "γίνῃ", "γίνεται", "γινόμεθα", "γίνεσθε", "γίνονται"]
          },
          imperfect_indicative: {
            label: "Imperfect Indicative",
            forms: ["ἐγινόμην", "ἐγίνου", "ἐγίνετο", "ἐγινόμεθα", "ἐγίνεσθε", "ἐγίνοντο"]
          },
          future_indicative: {
            label: "Future Indicative",
            forms: ["γενήσομαι", "γενήσῃ", "γενήσεται", "γενησόμεθα", "γενήσεσθε", "γενήσονται"]
          },
          aorist_indicative: {
            label: "Aorist Indicative",
            forms: ["ἐγενόμην", "ἐγένου", "ἐγένετο", "ἐγενόμεθα", "ἐγένεσθε", "ἐγένοντο"]
          },
          perfect_indicative: {
            label: "Perfect Indicative",
            forms: ["γέγονα", "γέγονας", "γέγονε(ν)", "γεγόναμεν", "γεγόνατε", "γεγόνασι(ν)"]
          }
        }
      },

      "δίδωμι": {
        lemma: "δίδωμι",
        gloss: "I give",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["δίδωμι", "δίδως", "δίδωσι(ν)", "δίδομεν", "δίδοτε", "διδόασι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἐδίδουν", "ἐδίδους", "ἐδίδου", "ἐδίδομεν", "ἐδίδοτε", "ἐδίδουν"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["δώσω", "δώσεις", "δώσει", "δώσομεν", "δώσετε", "δώσουσι(ν)"]
          },
          aorist_active_indicative: {
            label: "Aorist Active Indicative (2nd Aorist)",
            forms: ["ἔδωκα", "ἔδωκας", "ἔδωκε(ν)", "ἔδομεν", "ἔδοτε", "ἔδοσαν"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            forms: ["δέδωκα", "δέδωκας", "δέδωκε(ν)", "δεδώκαμεν", "δεδώκατε", "δεδώκασι(ν)"]
          }
        }
      },

      "εἰμί": {
        lemma: "εἰμί",
        gloss: "I am",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["εἰμί", "εἶ", "ἐστίν", "ἐσμέν", "ἐστέ", "εἰσίν"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἤμην", "ἦς", "ἦν", "ἦμεν", "ἦτε", "ἦσαν"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["ἔσομαι", "ἔσῃ", "ἔσται", "ἐσόμεθα", "ἔσεσθε", "ἔσονται"]
          }
        }
      },

      "ἐγείρω": {
        lemma: "ἐγείρω",
        gloss: "I raise / wake up",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["ἐγείρω", "ἐγείρεις", "ἐγείρει", "ἐγείρομεν", "ἐγείρετε", "ἐγείρουσι(ν)"]
          },
          present_middle_passive_indicative: {
            label: "Present Middle/Passive Indicative",
            forms: ["ἐγείρομαι", "ἐγείρῃ", "ἐγείρεται", "ἐγειρόμεθα", "ἐγείρεσθε", "ἐγείρονται"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἤγειρον", "ἤγειρες", "ἤγειρε(ν)", "ἠγείρομεν", "ἠγείρετε", "ἤγειρον"]
          },
          imperfect_middle_passive_indicative: {
            label: "Imperfect Middle/Passive Indicative",
            forms: ["ἠγειρόμην", "ἠγείρου", "ἠγείρετο", "ἠγειρόμεθα", "ἠγείρεσθε", "ἠγείροντο"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["ἐγερῶ", "ἐγερεῖς", "ἐγερεῖ", "ἐγεροῦμεν", "ἐγερεῖτε", "ἐγεροῦσι(ν)"]
          },
          future_passive_indicative: {
            label: "Future Passive Indicative (rare)",
            forms: ["ἐγερθήσομαι", "ἐγερθήσῃ", "ἐγερθήσεται", "ἐγερθησόμεθα", "ἐγερθήσεσθε", "ἐγερθήσονται"]
          },
          aorist_active_indicative: {
            label: "First Aorist Active Indicative",
            forms: ["ἤγειρα", "ἤγειρας", "ἤγειρε(ν)", "ἠγείραμεν", "ἠγείρατε", "ἤγειραν"]
          },
          aorist_passive_indicative: {
            label: "Aorist Passive Indicative",
            forms: ["ἠγέρθην", "ἠγέρθης", "ἠγέρθη", "ἠγέρθημεν", "ἠγέρθητε", "ἠγέρθησαν"]
          }
        }
      },

      "λαμβάνω": {
        lemma: "λαμβάνω",
        gloss: "I take / receive",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["λαμβάνω", "λαμβάνεις", "λαμβάνει", "λαμβάνομεν", "λαμβάνετε", "λαμβάνουσι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἐλάμβανον", "ἐλάμβανες", "ἐλάμβανε(ν)", "ἐλαμβάνομεν", "ἐλαμβάνετε", "ἐλάμβανον"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["λήμψομαι", "λήμψῃ", "λήμψεται", "λημψόμεθα", "λήμψεσθε", "λήμψονται"]
          },
          aorist_active_indicative: {
            label: "Aorist Active Indicative (2nd Aorist)",
            forms: ["ἔλαβον", "ἔλαβες", "ἔλαβε(ν)", "ἐλάβομεν", "ἐλάβετε", "ἔλαβον"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            forms: ["εἴληφα", "εἴληφας", "εἴληφε(ν)", "εἰλήφαμεν", "εἰλήφατε", "εἰλήφασι(ν)"]
          }
        }
      },

      "προσέρχομαι": {
        lemma: "προσέρχομαι",
        gloss: "I come to / approach (deponent)",
        charts: {
          present_indicative: {
            label: "Present Indicative",
            forms: ["προσέρχομαι", "προσέρχῃ", "προσέρχεται", "προσερχόμεθα", "προσέρχεσθε", "προσέρχονται"]
          },
          imperfect_indicative: {
            label: "Imperfect Indicative",
            forms: ["προσηρχόμην", "προσήρχου", "προσήρχετο", "προσηρχόμεθα", "προσήρχεσθε", "προσήρχοντο"]
          },
          future_indicative: {
            label: "Future Indicative",
            forms: ["προσελεύσομαι", "προσελεύσῃ", "προσελεύσεται", "προσελευσόμεθα", "προσελεύσεσθε", "προσελεύσονται"]
          },
          aorist_indicative: {
            label: "Aorist Indicative (2nd Aorist)",
            forms: ["προσῆλθον", "προσῆλθες", "προσῆλθε(ν)", "προσῆλθομεν", "προσῆλθετε", "προσῆλθον"]
          },
          perfect_indicative: {
            label: "Perfect Indicative",
            forms: ["προσελήλυθα", "προσελήλυθας", "προσελήλυθε(ν)", "προσεληλύθαμεν", "προσεληλύθατε", "προσελήλυθασι(ν)"]
          }
        }
      },

      "συνέρχομαι": {
        lemma: "συνέρχομαι",
        gloss: "I come together / assemble (deponent)",
        charts: {
          present_indicative: {
            label: "Present Indicative",
            forms: ["συνέρχομαι", "συνέρχῃ", "συνέρχεται", "συνερχόμεθα", "συνέρχεσθε", "συνέρχονται"]
          },
          imperfect_indicative: {
            label: "Imperfect Indicative",
            forms: ["συνηρχόμην", "συνήρχου", "συνήρχετο", "συνηρχόμεθα", "συνήρχεσθε", "συνήρχοντο"]
          },
          future_indicative: {
            label: "Future Indicative",
            forms: ["συνελεύσομαι", "συνελεύσῃ", "συνελεύσεται", "συνελευσόμεθα", "συνελεύσεσθε", "συνελεύσονται"]
          },
          aorist_indicative: {
            label: "Aorist Indicative (2nd Aorist)",
            forms: ["συνῆλθον", "συνῆλθες", "συνῆλθε(ν)", "συνῆλθομεν", "συνῆλθετε", "συνῆλθον"]
          },
          perfect_indicative: {
            label: "Perfect Indicative",
            forms: ["συνελήλυθα", "συνελήλυθας", "συνελήλυθε(ν)", "συνεληλύθαμεν", "συνεληλύθατε", "συνελήλυθασι(ν)"]
          }
        }
      },

      "ἵστημι": {
        lemma: "ἵστημι",
        gloss: "I stand / I set / place",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["ἵστημι", "ἵστης", "ἵστησι(ν)", "ἵσταμεν", "ἵστατε", "ἱστᾶσι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἵστην", "ἵστης", "ἵστη", "ἵσταμεν", "ἵστατε", "ἵστασαν"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["στήσω", "στήσεις", "στήσει", "στήσομεν", "στήσετε", "στήσουσι(ν)"]
          },
          aorist_active_indicative: {
            label: "First Aorist Active Indicative",
            forms: ["ἔστησα", "ἔστησας", "ἔστησε(ν)", "ἐστήσαμεν", "ἐστήσατε", "ἔστησαν"]
          },
          aorist_active_indicative_2: {
            label: "Aorist Active Indicative (2nd Aorist)",
            forms: ["ἔστην", "ἔστης", "ἔστη", "ἔστημεν", "ἔστητε", "ἔστησαν"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            forms: ["ἕστηκα", "ἕστηκας", "ἕστηκε(ν)", "ἑστήκαμεν", "ἑστήκατε", "ἑστήκασι(ν)"]
          }
        }
      },

      "ἐσθίω": {
        lemma: "ἐσθίω",
        gloss: "I eat",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["ἐσθίω", "ἐσθίεις", "ἐσθίει", "ἐσθίομεν", "ἐσθίετε", "ἐσθίουσι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἤσθιον", "ἤσθιες", "ἤσθιε(ν)", "ἠσθίομεν", "ἠσθίετε", "ἤσθιον"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["ἔδομαι", "ἔδῃ", "ἔδεται", "ἐδόμεθα", "ἔδεσθε", "ἔδονται"]
          },
          aorist_active_indicative: {
            label: "Aorist Active Indicative (2nd Aorist)",
            forms: ["ἔφαγον", "ἔφαγες", "ἔφαγε(ν)", "ἐφάγομεν", "ἐφάγετε", "ἔφαγον"]
          }
        }
      },

      "ἔρχομαι": {
        lemma: "ἔρχομαι",
        gloss: "I come / go (deponent, irregular)",
        charts: {
          present_indicative: {
            label: "Present Indicative",
            forms: ["ἔρχομαι", "ἔρχῃ", "ἔρχεται", "ἐρχόμεθα", "ἔρχεσθε", "ἔρχονται"]
          },
          imperfect_indicative: {
            label: "Imperfect Indicative",
            forms: ["ἠρχόμην", "ἤρχου", "ἤρχετο", "ἠρχόμεθα", "ἤρχεσθε", "ἤρχοντο"]
          },
          future_indicative: {
            label: "Future Indicative",
            forms: ["ἐλεύσομαι", "ἐλεύσῃ", "ἐλεύσεται", "ἐλευσόμεθα", "ἐλεύσεσθε", "ἐλεύσονται"]
          },
          aorist_indicative: {
            label: "Aorist Indicative",
            forms: ["ἦλθον", "ἦλθες", "ἦλθε(ν)", "ἤλθομεν", "ἤλθετε", "ἦλθον"]
          },
          perfect_indicative: {
            label: "Perfect Indicative",
            forms: ["ἐλήλυθα", "ἐλήλυθας", "ἐλήλυθε(ν)", "ἐληλύθαμεν", "ἐληλύθατε", "ἐλήλυθασι(ν)"]
          }
        }
      },

      "ὀνομάζω": {
        lemma: "ὀνομάζω",
        gloss: "I name / call",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["ὀνομάζω", "ὀνομάζεις", "ὀνομάζει", "ὀνομάζομεν", "ὀνομάζετε", "ὀνομάζουσι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ὠνόμαζον", "ὠνόμαζες", "ὠνόμαζε(ν)", "ὠνομάζομεν", "ὠνομάζετε", "ὠνόμαζον"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["ὀνομάσω", "ὀνομάσεις", "ὀνομάσει", "ὀνομάσομεν", "ὀνομάσετε", "ὀνομάσουσι(ν)"]
          },
          aorist_active_indicative: {
            label: "First Aorist Active Indicative",
            forms: ["ὠνόμασα", "ὠνόμασας", "ὠνόμασε(ν)", "ὠνομάσαμεν", "ὠνομάσατε", "ὠνόμασαν"]
          }
        }
      },

      "ὑποτάσσω": {
        lemma: "ὑποτάσσω",
        gloss: "I submit / subject",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["ὑποτάσσω", "ὑποτάσσεις", "ὑποτάσσει", "ὑποτάσσομεν", "ὑποτάσσετε", "ὑποτάσσουσι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ὑπέτασσον", "ὑπέτασσες", "ὑπέτασσε(ν)", "ὑπετάσσομεν", "ὑπετάσσετε", "ὑπέτασσον"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["ὑποτάξω", "ὑποτάξεις", "ὑποτάξει", "ὑποτάξομεν", "ὑποτάξετε", "ὑποτάξουσι(ν)"]
          },
          aorist_active_indicative: {
            label: "First Aorist Active Indicative",
            forms: ["ὑπέταξα", "ὑπέταξας", "ὑπέταξε(ν)", "ὑπετάξαμεν", "ὑπετάξατε", "ὑπέταξαν"]
          }
        }
      },

      "υἱοθετέω": {
        lemma: "υἱοθετέω",
        gloss: "I adopt (ε-contract)",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["υἱοθετῶ", "υἱοθετεῖς", "υἱοθετεῖ", "υἱοθετοῦμεν", "υἱοθετεῖτε", "υἱοθετοῦσι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["υἱοθέτουν", "υἱοθέτεις", "υἱοθέτει", "υἱοθετοῦμεν", "υἱοθετεῖτε", "υἱοθέτουν"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["υἱοθετήσω", "υἱοθετήσεις", "υἱοθετήσει", "υἱοθετήσομεν", "υἱοθετήσετε", "υἱοθετήσουσι(ν)"]
          },
          aorist_active_indicative: {
            label: "First Aorist Active Indicative",
            forms: ["υἱοθέτησα", "υἱοθέτησας", "υἱοθέτησε(ν)", "υἱοθετήσαμεν", "υἱοθετήσατε", "υἱοθέτησαν"]
          }
        }
      },

      "φίλεω": {
        lemma: "φίλεω",
        gloss: "I love (ε-contract)",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["φιλῶ", "φιλεῖς", "φιλεῖ", "φιλοῦμεν", "φιλεῖτε", "φιλοῦσι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἐφίλουν", "ἐφίλεις", "ἐφίλει", "ἐφιλοῦμεν", "ἐφιλεῖτε", "ἐφίλουν"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["φιλήσω", "φιλήσεις", "φιλήσει", "φιλήσομεν", "φιλήσετε", "φιλήσουσι(ν)"]
          },
          aorist_active_indicative: {
            label: "First Aorist Active Indicative",
            forms: ["ἐφίλησα", "ἐφίλησας", "ἐφίλησε(ν)", "ἐφιλήσαμεν", "ἐφιλήσατε", "ἐφίλησαν"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            forms: ["πεφίληκα", "πεφίληκας", "πεφίληκε(ν)", "πεφιλήκαμεν", "πεφιλήκατε", "πεφίληκασι(ν)"]
          }
        }
      },

      "φαίνω": {
        lemma: "φαίνω",
        gloss: "I show / appear",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["φαίνω", "φαίνεις", "φαίνει", "φαίνομεν", "φαίνετε", "φαίνουσι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἔφαινον", "ἔφαινεις", "ἔφαινε(ν)", "ἐφαίνομεν", "ἐφαίνετε", "ἔφαινον"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["φανῶ", "φανεῖς", "φανεῖ", "φανοῦμεν", "φανεῖτε", "φανοῦσι(ν)"]
          },
          aorist_active_indicative: {
            label: "Aorist Active Indicative (2nd Aorist)",
            forms: ["ἔφηνα", "ἔφηνας", "ἔφηνε(ν)", "ἐφήναμεν", "ἐφήνατε", "ἔφηναν"]
          },
          perfect_active_indicative: {
            label: "Perfect Active Indicative",
            forms: ["πέφαγκα", "πέφαγκας", "πέφαγκε(ν)", "πεφάγκαμεν", "πεφάγκατε", "πέφαγκασι(ν)"]
          }
        }
      },

      "φέρω": {
        lemma: "φέρω",
        gloss: "I bring / carry",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["φέρω", "φέρεις", "φέρει", "φέρομεν", "φέρετε", "φέρουσι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἔφερον", "ἔφερες", "ἔφερε(ν)", "ἐφέρομεν", "ἐφέρετε", "ἔφερον"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["οἴσω", "οἴσεις", "οἴσει", "οἴσομεν", "οἴσετε", "οἴσουσι(ν)"]
          },
          aorist_active_indicative: {
            label: "Aorist Active Indicative (2nd Aorist)",
            forms: ["ἤνεγκα", "ἤνεγκας", "ἤνεγκε(ν)", "ἠνέγκαμεν", "ἠνέγκατε", "ἤνεγκαν"]
          }
        }
      },

      "φέρω": {
        lemma: "φέρω",
        gloss: "I bring / carry",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["φέρω", "φέρεις", "φέρει", "φέρομεν", "φέρετε", "φέρουσι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἔφερον", "ἔφερες", "ἔφερε(ν)", "ἐφέρομεν", "ἐφέρετε", "ἔφερον"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["οἴσω", "οἴσεις", "οἴσει", "οἴσομεν", "οἴσετε", "οἴσουσι(ν)"]
          },
          aorist_active_indicative: {
            label: "Aorist Active Indicative (2nd Aorist)",
            forms: ["ἤνεγκα", "ἤνεγκας", "ἤνεγκε(ν)", "ἠνέγκαμεν", "ἠνέγκατε", "ἤνεγκαν"]
          }
        }
      },

      "φεύγω": {
        lemma: "φεύγω",
        gloss: "I flee",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["φεύγω", "φεύγεις", "φεύγει", "φεύγομεν", "φεύγετε", "φεύγουσι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἔφευγον", "ἔφευγες", "ἔφευγε(ν)", "ἐφεύγομεν", "ἐφεύγετε", "ἔφευγον"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["φεύξομαι", "φεύξῃ", "φεύξεται", "φευξόμεθα", "φεύξεσθε", "φεύξονται"]
          },
          aorist_active_indicative: {
            label: "Aorist Active Indicative (2nd Aorist)",
            forms: ["ἔφυγον", "ἔφυγες", "ἔφυγε(ν)", "ἐφύγομεν", "ἐφύγετε", "ἔφυγον"]
          }
        }
      },

      "φρονέω": {
        lemma: "φρονέω",
        gloss: "I think / have an attitude (ε-contract)",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["φρονῶ", "φρονεῖς", "φρονεῖ", "φρονοῦμεν", "φρονεῖτε", "φρονοῦσι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἐφρόνουν", "ἐφρόνεις", "ἐφρόνει", "ἐφρονοῦμεν", "ἐφρονεῖτε", "ἐφρόνουν"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["φρονήσω", "φρονήσεις", "φρονήσει", "φρονήσομεν", "φρονήσετε", "φρονήσουσι(ν)"]
          },
          aorist_active_indicative: {
            label: "First Aorist Active Indicative",
            forms: ["ἐφρόνησα", "ἐφρόνησας", "ἐφρόνησε(ν)", "ἐφρονήσαμεν", "ἐφρονήσατε", "ἐφρόνησαν"]
          }
        }
      },

      "φωνέω": {
        lemma: "φωνέω",
        gloss: "I call / cry out (ε-contract)",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["φωνῶ", "φωνεῖς", "φωνεῖ", "φωνοῦμεν", "φωνεῖτε", "φωνοῦσι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ἐφώνουν", "ἐφώνεις", "ἐφώνει", "ἐφωνοῦμεν", "ἐφωνεῖτε", "ἐφώνουν"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["φωνήσω", "φωνήσεις", "φωνήσει", "φωνήσομεν", "φωνήσετε", "φωνήσουσι(ν)"]
          },
          aorist_active_indicative: {
            label: "First Aorist Active Indicative",
            forms: ["ἐφώνησα", "ἐφώνησας", "ἐφώνησε(ν)", "ἐφωνήσαμεν", "ἐφωνήσατε", "ἐφώνησαν"]
          }
        }
      },

      "ὠφελέω": {
        lemma: "ὠφελέω",
        gloss: "I benefit / help (ε-contract)",
        charts: {
          present_active_indicative: {
            label: "Present Active Indicative",
            forms: ["ὠφελῶ", "ὠφελεῖς", "ὠφελεῖ", "ὠφελοῦμεν", "ὠφελεῖτε", "ὠφελοῦσι(ν)"]
          },
          imperfect_active_indicative: {
            label: "Imperfect Active Indicative",
            forms: ["ὠφέλουν", "ὠφέλεις", "ὠφέλει", "ὠφελοῦμεν", "ὠφελεῖτε", "ὠφέλουν"]
          },
          future_active_indicative: {
            label: "Future Active Indicative",
            forms: ["ὠφελήσω", "ὠφελήσεις", "ὠφελήσει", "ὠφελήσομεν", "ὠφελήσετε", "ὠφελήσουσι(ν)"]
          },
          aorist_active_indicative: {
            label: "First Aorist Active Indicative",
            forms: ["ὠφέλησα", "ὠφέλησας", "ὠφέλησε(ν)", "ὠφελήσαμεν", "ὠφελήσατε", "ὠφέλησαν"]
          }
        }
      }

    }
  };
"ἀκολουθέω": {
  lemma: "ἀκολουθέω",
  gloss: "I follow / accompany",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["ἀκολουθῶ", "ἀκολουθεῖς", "ἀκολουθεῖ", "ἀκολουθοῦμεν", "ἀκολουθεῖτε", "ἀκολουθοῦσι(ν)"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["ἀκολουθοῦμαι", "ἀκολουθεῖ", "ἀκολουθεῖται", "ἀκολουθούμεθα", "ἀκολουθεῖσθε", "ἀκολουθοῦνται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἠκολούθουν", "ἠκολούθεις", "ἠκολούθει", "ἠκολουθοῦμεν", "ἠκολουθεῖτε", "ἠκολούθουν"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἠκολουθούμην", "ἠκολουθοῦ", "ἠκολουθεῖτο", "ἠκολουθούμεθα", "ἠκολουθεῖσθε", "ἠκολουθοῦντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["ἀκολουθήσω", "ἀκολουθήσεις", "ἀκολουθήσει", "ἀκολουθήσομεν", "ἀκολουθήσετε", "ἀκολουθήσουσι(ν)"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["ἀκολουθήσομαι", "ἀκολουθήσῃ", "ἀκολουθήσεται", "ἀκολουθησόμεθα", "ἀκολουθήσεσθε", "ἀκολουθήσονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative (Rare)",
      forms: ["ἀκολουθηθήσομαι", "ἀκολουθηθήσῃ", "ἀκολουθηθήσεται", "ἀκολουθηθησόμεθα", "ἀκολουθηθήσεσθε", "ἀκολουθηθήσονται"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["ἠκολούθησα", "ἠκολούθησας", "ἠκολούθησε(ν)", "ἠκολουθήσαμεν", "ἠκολουθήσατε", "ἠκολούθησαν"]
    },
    aorist_middle_indicative: {
      label: "First Aorist Middle Indicative",
      forms: ["ἠκολουθησάμην", "ἠκολουθήσω", "ἠκολουθήσατο", "ἠκολουθησάμεθα", "ἠκολουθήσασθε", "ἠκολουθήσαντο"]
    },
    aorist_passive_indicative: {
      label: "First Aorist Passive Indicative (Very Rare)",
      forms: ["ἠκολουθήθην", "ἠκολουθήθης", "ἠκολουθήθη", "ἠκολουθήθημεν", "ἠκολουθήθητε", "ἠκολουθήθησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["ἠκολούθηκα", "ἠκολούθηκας", "ἠκολούθηκε(ν)", "ἠκολουθήκαμεν", "ἠκολουθήκατε", "ἠκολούθηκασι(ν)"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["ἠκολούθημαι", "ἠκολούθησαι", "ἠκολούθηται", "ἠκολουθήμεθα", "ἠκολουθήσθε", "ἠκολούθηνται"]
    }
  }
},
 "βάλλω": {
  lemma: "βάλλω",
  gloss: "I throw / cast / put",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["βάλλω", "βάλλεις", "βάλλει", "βάλλομεν", "βάλλετε", "βάλλουσι(ν)"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["βάλλομαι", "βάλλῃ", "βάλλεται", "βαλλόμεθα", "βάλλεσθε", "βάλλονται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἔβαλλον", "ἔβαλλες", "ἔβαλλε(ν)", "ἐβάλλομεν", "ἐβάλλετε", "ἔβαλλον"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἐβαλλόμην", "ἐβάλλου", "ἐβάλλετο", "ἐβαλλόμεθα", "ἐβάλλεσθε", "ἐβάλλοντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["βαλῶ", "βαλεῖς", "βαλεῖ", "βαλοῦμεν", "βαλεῖτε", "βαλοῦσι(ν)"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["βαλοῦμαι", "βαλῇ", "βαλεῖται", "βαλούμεθα", "βαλεῖσθε", "βαλοῦνται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["βληθήσομαι", "βληθήσῃ", "βληθήσεται", "βληθησόμεθα", "βληθήσεσθε", "βληθήσονται"]
    },
    aorist_active_indicative: {
      label: "Second Aorist Active Indicative",
      forms: ["ἔβαλον", "ἔβαλες", "ἔβαλε(ν)", "ἐβάλομεν", "ἐβάλετε", "ἔβαλον"]
    },
    aorist_middle_indicative: {
      label: "Second Aorist Middle Indicative",
      forms: ["ἐβαλόμην", "ἔβαλου", "ἔβαλετο", "ἐβαλόμεθα", "ἔβαλεσθε", "ἔβαλοντο"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["βέβληκα", "βέβληκας", "βέβληκε(ν)", "βεβλήκαμεν", "βεβλήκατε", "βέβληκασι(ν)"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["βέβλημαι", "βέβλησαι", "βέβληται", "βεβλήμεθα", "βέβλησθε", "βέβληνται"]
    }
  }
},
"βαπτίζω": {
  lemma: "βαπτίζω",
  gloss: "I baptize / immerse / dip",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["βαπτίζω", "βαπτίζεις", "βαπτίζει", "βαπτίζομεν", "βαπτίζετε", "βαπτίζουσι(ν)"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["βαπτίζομαι", "βαπτίζῃ", "βαπτίζεται", "βαπτιζόμεθα", "βαπτίζεσθε", "βαπτίζονται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἐβάπτιζον", "ἐβάπτιζες", "ἐβάπτιζε(ν)", "ἐβαπτίζομεν", "ἐβαπτίζετε", "ἐβάπτιζον"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἐβαπτιζόμην", "ἐβαπτίζου", "ἐβαπτίζετο", "ἐβαπτιζόμεθα", "ἐβαπτίζεσθε", "ἐβαπτίζοντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["βαπτίσω", "βαπτίσεις", "βαπτίσει", "βαπτίσομεν", "βαπτίσετε", "βαπτίσουσι(ν)"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["βαπτίσομαι", "βαπτίσῃ", "βαπτίσεται", "βαπτισόμεθα", "βαπτίσεσθε", "βαπτίσονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["βαπτισθήσομαι", "βαπτισθήσῃ", "βαπτισθήσεται", "βαπτισθησόμεθα", "βαπτισθήσεσθε", "βαπτισθήσονται"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["ἐβάπτισα", "ἐβάπτισας", "ἐβάπτισε(ν)", "ἐβαπτίσαμεν", "ἐβαπτίσατε", "ἐβάπτισαν"]
    },
    aorist_middle_indicative: {
      label: "First Aorist Middle Indicative",
      forms: ["ἐβαπτισάμην", "ἐβαπτίσω", "ἐβαπτίσατο", "ἐβαπτισάμεθα", "ἐβαπτίσασθε", "ἐβαπτίσαντο"]
    },
    aorist_passive_indicative: {
      label: "First Aorist Passive Indicative",
      forms: ["ἐβαπτίσθην", "ἐβαπτίσθης", "ἐβαπτίσθη", "ἐβαπτίσθημεν", "ἐβαπτίσθητε", "ἐβαπτίσθησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["βεβάπτικα", "βεβάπτικας", "βεβάπτικε(ν)", "βεβαπτίκαμεν", "βεβαπτίκατε", "βεβάπτικασι(ν)"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["βεβάπτισμαι", "βεβάπτισαι", "βεβάπτισται", "βεβαπτίσμεθα", "βεβάπτισθε", "βεβάπτισνται"]
    }
  }
},
"διδάσκω": {
  lemma: "διδάσκω",
  gloss: "I teach / instruct",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["διδάσκω", "διδάσκεις", "διδάσκει", "διδάσκομεν", "διδάσκετε", "διδάσκουσι(ν)"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["διδάσκομαι", "διδάσκῃ", "διδάσκεται", "διδασκόμεθα", "διδάσκεσθε", "διδάσκονται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἐδίδασκον", "ἐδίδασκες", "ἐδίδασκε(ν)", "ἐδιδάσκομεν", "ἐδιδάσκετε", "ἐδίδασκον"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἐδιδασκόμην", "ἐδιδάσκου", "ἐδιδάσκετο", "ἐδιδασκόμεθα", "ἐδιδάσκεσθε", "ἐδιδάσκοντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["διδάξω", "διδάξεις", "διδάξει", "διδάξομεν", "διδάξετε", "διδάξουσι(ν)"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["διδάξομαι", "διδάξῃ", "διδάξεται", "διδαξόμεθα", "διδάξεσθε", "διδάξονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["διδαχθήσομαι", "διδαχθήσῃ", "διδαχθήσεται", "διδαχθησόμεθα", "διδαχθήσεσθε", "διδαχθήσονται"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["ἐδίδαξα", "ἐδίδαξας", "ἐδίδαξε(ν)", "ἐδιδάξαμεν", "ἐδιδάξατε", "ἐδίδαξαν"]
    },
    aorist_middle_indicative: {
      label: "First Aorist Middle Indicative",
      forms: ["ἐδιδαξάμην", "ἐδίδαξω", "ἐδιδάξατο", "ἐδιδαξάμεθα", "ἐδιδάξασθε", "ἐδιδάξαντο"]
    },
    aorist_passive_indicative: {
      label: "First Aorist Passive Indicative",
      forms: ["ἐδιδάχθην", "ἐδιδάχθης", "ἐδιδάχθη", "ἐδιδάχθημεν", "ἐδιδάχθητε", "ἐδιδάχθησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["δεδίδαχα", "δεδίδαχας", "δεδίδαχε(ν)", "δεδιδάχαμεν", "δεδιδάχατε", "δεδίδαχασι(ν)"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["δεδίδαγμαι", "δεδίδαξαι", "δεδίδακται", "δεδιδάγμεθα", "δεδίδαχθε", "δεδίδαγνται"]
    }
  }
},
"ἐγείρω": {
  lemma: "ἐγείρω",
  gloss: "I raise / awaken / lift up",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["ἐγείρω", "ἐγείρεις", "ἐγείρει", "ἐγείρομεν", "ἐγείρετε", "ἐγείρουσι(ν)"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["ἐγείρομαι", "ἐγείρῃ", "ἐγείρεται", "ἐγειρόμεθα", "ἐγείρεσθε", "ἐγείρονται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἤγειρον", "ἤγειρες", "ἤγειρε(ν)", "ἠγείρομεν", "ἠγείρετε", "ἤγειρον"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἠγειρόμην", "ἤγειρου", "ἤγειρετο", "ἠγειρόμεθα", "ἤγειρεσθε", "ἤγειροντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative (Liquid Future)",
      forms: ["ἐγερῶ", "ἐγερεῖς", "ἐγερεῖ", "ἐγεροῦμεν", "ἐγερεῖτε", "ἐγεροῦσι(ν)"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["ἐγεροῦμαι", "ἐγερῇ", "ἐγερεῖται", "ἐγερούμεθα", "ἐγερεῖσθε", "ἐγεροῦνται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["ἐγερθήσομαι", "ἐγερθήσῃ", "ἐγερθήσεται", "ἐγερθησόμεθα", "ἐγερθήσεσθε", "ἐγερθήσονται"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["ἤγειρα", "ἤγειρας", "ἤγειρε(ν)", "ἠγείραμεν", "ἠγείρατε", "ἤγειραν"]
    },
    aorist_middle_indicative: {
      label: "First Aorist Middle Indicative",
      forms: ["ἠγειράμην", "ἤγειρω", "ἠγείρατο", "ἠγειράμεθα", "ἠγείρασθε", "ἠγείραντο"]
    },
    aorist_passive_indicative: {
      label: "First Aorist Passive Indicative",
      forms: ["ἠγέρθην", "ἠγέρθης", "ἠγέρθη", "ἠγέρθημεν", "ἠγέρθητε", "ἠγέρθησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["ἐγήγερκα", "ἐγήγερκας", "ἐγήγερκε(ν)", "ἐγηγήρκαμεν", "ἐγηγήρκατε", "ἐγήγερκασι(ν)"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["ἐγήγερμαι", "ἐγήγερσαι", "ἐγήγερται", "ἐγηγήρμεθα", "ἐγήγερσθε", "ἐγήγερνται"]
    }
  }
},
"ἐκβάλλω": {
  lemma: "ἐκβάλλω",
  gloss: "I cast out / throw out / drive out",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["ἐκβάλλω", "ἐκβάλλεις", "ἐκβάλλει", "ἐκβάλλομεν", "ἐκβάλλετε", "ἐκβάλλουσι(ν)"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["ἐκβάλλομαι", "ἐκβάλλῃ", "ἐκβάλλεται", "ἐκβαλλόμεθα", "ἐκβάλλεσθε", "ἐκβάλλονται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἐξέβαλλον", "ἐξέβαλλες", "ἐξέβαλλε(ν)", "ἐξεβάλλομεν", "ἐξεβάλλετε", "ἐξέβαλλον"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἐξεβαλλόμην", "ἐξεβάλλου", "ἐξεβάλλετο", "ἐξεβαλλόμεθα", "ἐξεβάλλεσθε", "ἐξεβάλλοντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative (Liquid Future)",
      forms: ["ἐκβαλῶ", "ἐκβαλεῖς", "ἐκβαλεῖ", "ἐκβαλοῦμεν", "ἐκβαλεῖτε", "ἐκβαλοῦσι(ν)"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["ἐκβαλοῦμαι", "ἐκβαλῇ", "ἐκβαλεῖται", "ἐκβαλούμεθα", "ἐκβαλεῖσθε", "ἐκβαλοῦνται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["ἐκβληθήσομαι", "ἐκβληθήσῃ", "ἐκβληθήσεται", "ἐκβληθησόμεθα", "ἐκβληθήσεσθε", "ἐκβληθήσονται"]
    },
    aorist_active_indicative: {
      label: "Second Aorist Active Indicative",
      forms: ["ἐξέβαλον", "ἐξέβαλες", "ἐξέβαλε(ν)", "ἐξεβάλομεν", "ἐξεβάλετε", "ἐξέβαλον"]
    },
    aorist_middle_indicative: {
      label: "Second Aorist Middle Indicative",
      forms: ["ἐξεβαλόμην", "ἐξέβαλου", "ἐξέβαλετο", "ἐξεβαλόμεθα", "ἐξέβαλεσθε", "ἐξέβαλοντο"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["ἐκβέβληκα", "ἐκβέβληκας", "ἐκβέβληκε(ν)", "ἐκβεβλήκαμεν", "ἐκβεβλήκατε", "ἐκβέβληκασι(ν)"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["ἐκβέβλημαι", "ἐκβέβλησαι", "ἐκβέβληται", "ἐκβεβλήμεθα", "ἐκβέβλησθε", "ἐκβέβληνται"]
    }
  }
},
"γινώσκω": {
  lemma: "γινώσκω",
  gloss: "I know / come to know / learn / realize",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["γινώσκω", "γινώσκεις", "γινώσκει", "γινώσκομεν", "γινώσκετε", "γινώσκουσι(ν)"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["γινώσκομαι", "γινώσκῃ", "γινώσκεται", "γινωσκόμεθα", "γινώσκεσθε", "γινώσκονται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἐγίνωσκον", "ἐγίνωσκες", "ἐγίνωσκε(ν)", "ἐγινώσκομεν", "ἐγινώσκετε", "ἐγίνωσκον"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἐγινωσκόμην", "ἐγινώσκου", "ἐγινώσκετο", "ἐγινωσκόμεθα", "ἐγινώσκεσθε", "ἐγινώσκοντο"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative (Deponent)",
      forms: ["γνώσομαι", "γνώσῃ", "γνώσεται", "γνωσόμεθα", "γνώσεσθε", "γνώσονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["γνωσθήσομαι", "γνωσθήσῃ", "γνωσθήσεται", "γνωσθησόμεθα", "γνωσθήσεσθε", "γνωσθήσονται"]
    },
    aorist_active_indicative: {
      label: "Second Aorist Active Indicative",
      forms: ["ἔγνων", "ἔγνως", "ἔγνω", "ἔγνωμεν", "ἔγνωτε", "ἔγνωσαν"]
    },
    aorist_middle_indicative: {
      label: "Second Aorist Middle Indicative",
      forms: ["ἐγνόμην", "ἔγνου", "ἔγνετο", "ἐγνόμεθα", "ἔγνεσθε", "ἐγνοντο"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["ἔγνωκα", "ἔγνωκας", "ἔγνωκε(ν)", "ἐγνώκαμεν", "ἐγνώκατε", "ἔγνωκασι(ν)"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["ἔγνωσμαι", "ἔγνωσαι", "ἔγνωσται", "ἐγνώσμεθα", "ἔγνωσθε", "ἔγνωσντα"]
    }
  }
},
"καταβαίνω": {
  lemma: "καταβαίνω",
  gloss: "I go down / descend",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["καταβαίνω", "καταβαίνεις", "καταβαίνει", "καταβαίνομεν", "καταβαίνετε", "καταβαίνουσι(ν)"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["καταβαίνομαι", "καταβαίνῃ", "καταβαίνεται", "καταβαινόμεθα", "καταβαίνεσθε", "καταβαίνονται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["κατέβαινον", "κατέβαινες", "κατέβαινε(ν)", "κατεβαίνομεν", "κατεβαίνετε", "κατέβαινον"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["κατεβαινόμην", "κατεβαίνου", "κατεβαίνετο", "κατεβαινόμεθα", "κατεβαίνεσθε", "κατέβαινοντο"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative (Deponent)",
      forms: ["καταβήσομαι", "καταβήσῃ", "καταβήσεται", "καταβησόμεθα", "καταβήσεσθε", "καταβήσονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["καταβηθήσομαι", "καταβηθήσῃ", "καταβηθήσεται", "καταβηθησόμεθα", "καταβηθήσεσθε", "καταβηθήσονται"]
    },
    aorist_active_indicative: {
      label: "Second Aorist Active Indicative",
      forms: ["κατέβην", "κατέβης", "κατέβη", "κατέβημεν", "κατέβητε", "κατέβησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["καταβέβηκα", "καταβέβηκας", "καταβέβηκε(ν)", "καταβεβήκαμεν", "καταβεβήκατε", "καταβέβηκασι(ν)"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["καταβέβημαι", "καταβέβησαι", "καταβέβηται", "καταβεβήμεθα", "καταβέβησθε", "καταβέβηνται"]
    }
  }
},
"μένω": {
  lemma: "μένω",
  gloss: "I remain / stay / abide / continue",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["μένω", "μένεις", "μένει", "μένομεν", "μένετε", "μένουσι(ν)"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["μένομαι", "μένῃ", "μένεται", "μενόμεθα", "μένεσθε", "μένονται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἔμενον", "ἔμενες", "ἔμενε(ν)", "ἐμένομεν", "ἐμένετε", "ἔμενον"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἐμενόμην", "ἐμένου", "ἐμένετο", "ἐμενόμεθα", "ἐμένεσθε", "ἐμένοντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative (Liquid Future)",
      forms: ["μενῶ", "μενεῖς", "μενεῖ", "μενοῦμεν", "μενεῖτε", "μενοῦσι(ν)"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["μενοῦμαι", "μενῇ", "μενεῖται", "μενούμεθα", "μενεῖσθε", "μενοῦνται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative (Rare)",
      forms: ["μενηθήσομαι", "μενηθήσῃ", "μενηθήσεται", "μενηθησόμεθα", "μενηθήσεσθε", "μενηθήσονται"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["ἔμεινα", "ἔμεινας", "ἔμεινε(ν)", "ἐμείναμεν", "ἐμείνατε", "ἔμειναν"]
    },
    aorist_middle_indicative: {
      label: "First Aorist Middle Indicative",
      forms: ["ἐμεινάμην", "ἔμεινω", "ἐμείνατο", "ἐμεινάμεθα", "ἐμείνασθε", "ἐμείναντο"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["μεμένηκα", "μεμένηκας", "μεμένηκε(ν)", "μεμενήκαμεν", "μεμενήκατε", "μεμένηκασι(ν)"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["μεμένημαι", "μεμένησαι", "μεμένηται", "μεμενήμεθα", "μεμένησθε", "μεμένηνται"]
    }
  }
},
"πείθω": {
  lemma: "πείθω",
  gloss: "I persuade / convince (middle: I trust / obey)",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["πείθω", "πείθεις", "πείθει", "πείθομεν", "πείθετε", "πείθουσι(ν)"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["πείθομαι", "πείθῃ", "πείθεται", "πειθόμεθα", "πείθεσθε", "πείθονται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἔπειθον", "ἔπειθες", "ἔπειθε(ν)", "ἐπείθομεν", "ἐπείθετε", "ἔπειθον"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἐπειθόμην", "ἐπείθου", "ἐπείθετο", "ἐπειθόμεθα", "ἐπείθεσθε", "ἐπείθοντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["πείσω", "πείσεις", "πείσει", "πείσομεν", "πείσετε", "πείσουσι(ν)"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["πείσομαι", "πείσῃ", "πείσεται", "πεισόμεθα", "πείσεσθε", "πείσονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["πεισθήσομαι", "πεισθήσῃ", "πεισθήσεται", "πεισθησόμεθα", "πεισθήσεσθε", "πεισθήσονται"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["ἔπεισα", "ἔπεισας", "ἔπεισε(ν)", "ἐπείσαμεν", "ἐπείσατε", "ἔπεισαν"]
    },
    aorist_middle_indicative: {
      label: "First Aorist Middle Indicative",
      forms: ["ἐπεισάμην", "ἔπεισω", "ἐπείσατο", "ἐπεισάμεθα", "ἐπείσασθε", "ἐπείσαντο"]
    },
    aorist_passive_indicative: {
      label: "First Aorist Passive Indicative",
      forms: ["ἐπείσθην", "ἐπείσθης", "ἐπείσθη", "ἐπείσθημεν", "ἐπείσθητε", "ἐπείσθησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["πέπεικα", "πέπεικας", "πέπεικε(ν)", "πεπείκαμεν", "πεπείκατε", "πέπεικασι(ν)"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["πέπεισμαι", "πέπεισαι", "πέπεισται", "πεπείσμεθα", "πέπεισθε", "πέπεισνται"]
    }
  }
},
"παρακαλέω": {
  lemma: "παρακαλέω",
  gloss: "I exhort / urge / encourage / comfort",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative",
      forms: ["παρακαλῶ", "παρακαλεῖς", "παρακαλεῖ", "παρακαλοῦμεν", "παρακαλεῖτε", "παρακαλοῦσι(ν)"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["παρακαλοῦμαι", "παρακαλεῖ", "παρακαλεῖται", "παρακαλούμεθα", "παρακαλεῖσθε", "παρακαλοῦνται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["παρεκάλουν", "παρεκάλεις", "παρεκάλει", "παρεκαλοῦμεν", "παρεκαλεῖτε", "παρεκάλουν"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["παρεκαλούμην", "παρεκαλοῦ", "παρεκαλεῖτο", "παρεκαλούμεθα", "παρεκαλεῖσθε", "παρεκαλοῦντο"]
    },
    future_active_indicative: {
      label: "Future Active Indicative",
      forms: ["παρακαλέσω", "παρακαλέσεις", "παρακαλέσει", "παρακαλέσομεν", "παρακαλέσετε", "παρακαλέσουσι(ν)"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["παρακαλέσομαι", "παρακαλέσῃ", "παρακαλέσεται", "παρακαλεσόμεθα", "παρακαλέσεσθε", "παρακαλέσονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["παρακληθήσομαι", "παρακληθήσῃ", "παρακληθήσεται", "παρακληθησόμεθα", "παρακληθήσεσθε", "παρακληθήσονται"]
    },
    aorist_active_indicative: {
      label: "First Aorist Active Indicative",
      forms: ["παρεκάλεσα", "παρεκάλεσας", "παρεκάλεσε(ν)", "παρεκαλέσαμεν", "παρεκαλέσατε", "παρεκάλεσαν"]
    },
    aorist_middle_indicative: {
      label: "First Aorist Middle Indicative",
      forms: ["παρεκαλεσάμην", "παρεκάλεσω", "παρεκαλέσατο", "παρεκαλεσάμεθα", "παρεκαλέσασθε", "παρεκαλέσαντο"]
    },
    aorist_passive_indicative: {
      label: "First Aorist Passive Indicative",
      forms: ["παρεκλήθην", "παρεκλήθης", "παρεκλήθη", "παρεκλήθημεν", "παρεκλήθητε", "παρεκλήθησαν"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["παρακεκάλεκα", "παρακεκάλεκας", "παρακεκάλεκε(ν)", "παρακεκαλέκαμεν", "παρακεκαλέκατε", "παρακεκάλεκασι(ν)"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["παρακεκάλεσμαι", "παρακεκάλεσαι", "παρακεκάλεσται", "παρακεκαλέσμεθα", "παρακεκάλεσθε", "παρακεκάλεσνται"]
    }
  }
},
"προσεύχομαι": {
  lemma: "προσεύχομαι",
  gloss: "I pray",
  charts: {
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["προσεύχομαι", "προσεύχῃ", "προσεύχεται", "προσευχόμεθα", "προσεύχεσθε", "προσεύχονται"]
    },
    imperfect_middle_indicative: {
      label: "Imperfect Middle Indicative",
      forms: ["προσηυχόμην", "προσηύχου", "προσηύχετο", "προσηυχόμεθα", "προσηύχεσθε", "προσηύχοντο"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["προσεύξομαι", "προσεύξῃ", "προσεύξεται", "προσευξόμεθα", "προσεύξεσθε", "προσεύξονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative (Rare)",
      forms: ["προσευξθήσομαι", "προσευξθήσῃ", "προσευξθήσεται", "προσευξθησόμεθα", "προσευξθήσεσθε", "προσευξθήσονται"]
    },
    aorist_middle_indicative: {
      label: "First Aorist Middle Indicative",
      forms: ["προσηυξάμην", "προσηύξω", "προσηύξατο", "προσηυξάμεθα", "προσηύξασθε", "προσηύξαντο"]
    },
    aorist_passive_indicative: {
      label: "First Aorist Passive Indicative (Rare)",
      forms: ["προσηύχθην", "προσηύχθης", "προσηύχθη", "προσηύχθημεν", "προσηύχθητε", "προσηύχθησαν"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative (Rare)",
      forms: ["προσεύγμαι", "προσεύγσαι", "προσεύγται", "προσεύγμεθα", "προσεύγσθε", "προσεύγνται"]
    }
  }
},
"προσέρχομαι": {
  lemma: "προσέρχομαι",
  gloss: "I come/go to / approach",
  charts: {
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["προσέρχομαι", "προσέρχῃ", "προσέρχεται", "προσερχόμεθα", "προσέρχεσθε", "προσέρχονται"]
    },
    imperfect_middle_indicative: {
      label: "Imperfect Middle Indicative",
      forms: ["προσηρχόμην", "προσήρχου", "προσήρχετο", "προσηρχόμεθα", "προσήρχεσθε", "προσήρχοντο"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["προσελεύσομαι", "προσελεύσῃ", "προσελεύσεται", "προσελευσόμεθα", "προσελεύσεσθε", "προσελεύσονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative (Rare)",
      forms: ["προσελευσθήσομαι", "προσελευσθήσῃ", "προσελευσθήσεται", "προσελευσθησόμεθα", "προσελευσθήσεσθε", "προσελευσθήσονται"]
    },
    aorist_active_indicative: {
      label: "Second Aorist Active Indicative",
      forms: ["προσῆλθον", "προσῆλθες", "προσῆλθε(ν)", "προσήλθομεν", "προσήλθετε", "προσῆλθον"]
    },
    aorist_middle_indicative: {
      label: "Second Aorist Middle Indicative",
      forms: ["προσηλθόμην", "προσῆλθου", "προσῆλθετο", "προσηλθόμεθα", "προσῆλθεσθε", "προσῆλθοντο"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["προσελήλυθα", "προσελήλυθας", "προσελήλυθε(ν)", "προσεληλύθαμεν", "προσεληλύθατε", "προσελήλυθασι(ν)"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative (Rare)",
      forms: ["προσελήλυμαι", "προσελήλυσαι", "προσελήλυται", "προσεληλύμεθα", "προσελήλυσθε", "προσελήλυνται"]
    }
  }
},
"ἐξέρχομαι": {
  lemma: "ἐξέρχομαι",
  gloss: "I go out / depart",
  charts: {
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["ἐξέρχομαι", "ἐξέρχῃ", "ἐξέρχεται", "ἐξερχόμεθα", "ἐξέρχεσθε", "ἐξέρχονται"]
    },
    imperfect_middle_indicative: {
      label: "Imperfect Middle Indicative",
      forms: ["ἐξηρχόμην", "ἐξήρχου", "ἐξήρχετο", "ἐξηρχόμεθα", "ἐξήρχεσθε", "ἐξήρχοντο"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative",
      forms: ["ἐξελεύσομαι", "ἐξελεύσῃ", "ἐξελεύσεται", "ἐξελευσόμεθα", "ἐξελεύσεσθε", "ἐξελεύσονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative (Rare)",
      forms: ["ἐξελευσθήσομαι", "ἐξελευσθήσῃ", "ἐξελευσθήσεται", "ἐξελευσθησόμεθα", "ἐξελευσθήσεσθε", "ἐξελευσθήσονται"]
    },
    aorist_active_indicative: {
      label: "Second Aorist Active Indicative",
      forms: ["ἐξῆλθον", "ἐξῆλθες", "ἐξῆλθε(ν)", "ἐξήλθομεν", "ἐξήλθετε", "ἐξῆλθον"]
    },
    aorist_middle_indicative: {
      label: "Second Aorist Middle Indicative",
      forms: ["ἐξηλθόμην", "ἐξῆλθου", "ἐξῆλθετο", "ἐξηλθόμεθα", "ἐξῆλθεσθε", "ἐξῆλθοντο"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["ἐξελήλυθα", "ἐξελήλυθας", "ἐξελήλυθε(ν)", "ἐξεληλύθαμεν", "ἐξεληλύθατε", "ἐξελήλυθασι(ν)"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative (Rare)",
      forms: ["ἐξελήλυμαι", "ἐξελήλυσαι", "ἐξελήλυται", "ἐξεληλύμεθα", "ἐξελήλυσθε", "ἐξελήλυνται"]
    }
  }
},
"ὁράω": {
  lemma: "ὁράω",
  gloss: "I see / behold / perceive",
  charts: {
    present_active_indicative: {
      label: "Present Active Indicative (Alpha Contract)",
      forms: ["ὁρῶ", "ὁρᾷς", "ὁρᾷ", "ὁρῶμεν", "ὁρᾶτε", "ὁρῶσι(ν)"]
    },
    present_middle_passive_indicative: {
      label: "Present Middle/Passive Indicative",
      forms: ["ὁρῶμαι", "ὁρᾷ", "ὁρᾶται", "ὁρώμεθα", "ὁρᾶσθε", "ὁρῶνται"]
    },
    imperfect_active_indicative: {
      label: "Imperfect Active Indicative",
      forms: ["ἑώρων", "ἑώρας", "ἑώρα", "ἑωρῶμεν", "ἑωρᾶτε", "ἑώρων"]
    },
    imperfect_middle_passive_indicative: {
      label: "Imperfect Middle/Passive Indicative",
      forms: ["ἑωρώμην", "ἑώρω", "ἑωρᾶτο", "ἑωρώμεθα", "ἑωρᾶσθε", "ἑωρῶντο"]
    },
    future_middle_indicative: {
      label: "Future Middle Indicative (Irregular)",
      forms: ["ὄψομαι", "ὄψῃ", "ὄψεται", "ὀψόμεθα", "ὄψεσθε", "ὄψονται"]
    },
    future_passive_indicative: {
      label: "Future Passive Indicative",
      forms: ["ὀφθήσομαι", "ὀφθήσῃ", "ὀφθήσεται", "ὀφθησόμεθα", "ὀφθήσεσθε", "ὀφθήσονται"]
    },
    aorist_active_indicative: {
      label: "Second Aorist Active Indicative",
      forms: ["εἶδον", "εἶδες", "εἶδε(ν)", "εἴδομεν", "εἴδετε", "εἶδον"]
    },
    aorist_middle_indicative: {
      label: "Second Aorist Middle Indicative",
      forms: ["εἰδόμην", "εἶδου", "εἶδετο", "εἰδόμεθα", "εἶδεσθε", "εἶδοντο"]
    },
    perfect_active_indicative: {
      label: "Perfect Active Indicative",
      forms: ["ἑώρακα", "ἑώρακας", "ἑώρακε(ν)", "ἑωράκαμεν", "ἑωράκατε", "ἑώρακασι(ν)"]
    },
    perfect_middle_passive_indicative: {
      label: "Perfect Middle/Passive Indicative",
      forms: ["ἑώραμαι", "ἑώρασαι", "ἑώραται", "ἑωράμεθα", "ἑώρασθε", "ἑώρανται"]
    }
  }
},
  // Expose globally (for your verb-engine.js)
  global.DATA_CHARTS = DATA_CHARTS;

  // Optional: CommonJS export (harmless in browser)
  if (typeof module !== "undefined" && module.exports) {
    module.exports = DATA_CHARTS;
  }
})(typeof window !== "undefined" ? window : globalThis);      
