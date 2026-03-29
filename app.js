// ============================================================
// Koine Greek Study Tool — Main Application
// ============================================================

(function () {
    "use strict";

    let data = {};
    let currentCategory = null;
    let currentMode = null;
    let studyCards = [];
    let studyIndex = 0;
    let score = { correct: 0, total: 0 };
    let missed = [];

    // Matching
    let matchSelected = null;
    let matchPairs = [];
    let matchedCount = 0;
    let matchRound = 0;

    // Paradigm quiz
    let paraTableList = [];
    let paraTableIndex = 0;
    let paraBlanks = [];
    let paraBlankIndex = 0;
    let paraMode = null; // "multiple-choice" or "fill-blank"

    const STORAGE_KEY = "koine-greek-data";
    const PARADIGM_CATS = ["verbs", "nouns", "pronouns", "participles"];

    // --- Init ---
    function init() {
        loadData();
        renderCategories();
        bindNav();
        bindManage();
        bindModes();
        bindFlashcards();
        bindMultipleChoice();
        bindFillBlank();
        bindMatching();
        bindTrueFalse();
        bindResults();
        bindParadigm();
    }

    // --- Data ---
    function loadData() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                data = JSON.parse(saved);
                for (const key in CATEGORIES) {
                    if (!data[key]) data[key] = JSON.parse(JSON.stringify(CATEGORIES[key]));
                }
            } catch { data = JSON.parse(JSON.stringify(CATEGORIES)); }
        } else {
            data = JSON.parse(JSON.stringify(CATEGORIES));
        }
        saveData();
    }
    function saveData() { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }

    // --- Nav ---
    function showView(id) {
        document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
        document.getElementById(id + "-view").classList.add("active");
        document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
        const nb = document.querySelector(`.nav-btn[data-view="${id}"]`);
        if (nb) nb.classList.add("active");
    }
    function bindNav() {
        document.querySelectorAll(".nav-btn").forEach(b =>
            b.addEventListener("click", () => {
                showView(b.dataset.view);
                if (b.dataset.view === "manage") refreshCardList();
            })
        );
        document.querySelectorAll(".back-link").forEach(b =>
            b.addEventListener("click", () => {
                if (b.dataset.back === "home") showView("home");
                else if (b.dataset.back === "mode") openCategory(currentCategory);
                else if (b.dataset.back === "para-select") showParadigmSelect();
            })
        );
    }

    // --- Categories ---
    function renderCategories() {
        const grid = document.getElementById("category-grid");
        grid.innerHTML = "";
        for (const key in data) {
            const cat = data[key];
            const card = document.createElement("button");
            card.className = "category-card";
            const hasParadigms = PARADIGM_CATS.includes(key) && PARADIGM_TABLES[key];
            const paraCount = hasParadigms ? PARADIGM_TABLES[key].length : 0;
            let countText = cat.cards.length + " cards";
            if (paraCount > 0) countText += ` · ${paraCount} tables`;
            card.innerHTML = `
                <span class="cat-icon">${cat.icon}</span>
                <div class="cat-name">${cat.name}</div>
                <div class="cat-count">${countText}</div>
            `;
            card.addEventListener("click", () => openCategory(key));
            grid.appendChild(card);
        }
    }
    function openCategory(key) {
        currentCategory = key;
        const cat = data[key];
        document.getElementById("mode-category-title").textContent = cat.name;
        const hasP = PARADIGM_CATS.includes(key) && PARADIGM_TABLES[key];
        let sub = cat.cards.length + " cards";
        if (hasP) sub += ` · ${PARADIGM_TABLES[key].length} paradigm tables`;
        document.getElementById("mode-card-count").textContent = sub;
        showView("mode");
    }

    // --- Modes ---
    function bindModes() {
        document.querySelectorAll(".mode-card").forEach(b =>
            b.addEventListener("click", () => startStudy(b.dataset.mode))
        );
    }
    function startStudy(mode) {
        currentMode = mode;
        const cat = data[currentCategory];
        studyCards = [...cat.cards];
        if (document.getElementById("opt-shuffle").checked) shuffle(studyCards);
        studyIndex = 0;
        score = { correct: 0, total: 0 };
        missed = [];

        // Paradigm table quiz for MC/FIB on paradigm categories
        const hasP = PARADIGM_CATS.includes(currentCategory) && PARADIGM_TABLES[currentCategory];
        if (hasP && (mode === "multiple-choice" || mode === "fill-blank")) {
            paraMode = mode;
            showParadigmSelect();
            return;
        }

        switch (mode) {
            case "flashcards": startFlashcards(); break;
            case "multiple-choice": startMultipleChoice(); break;
            case "fill-blank": startFillBlank(); break;
            case "matching": startMatching(); break;
            case "true-false": startTrueFalse(); break;
        }
    }
    function getReverse() { return document.getElementById("opt-reverse").checked; }
    function getTerm(c) { return getReverse() ? c.definition : c.term; }
    function getDef(c) { return getReverse() ? c.term : c.definition; }

    // ============================================================
    // PARADIGM TABLE QUIZ
    // ============================================================
    let selectedVerbs = [];

    function bindParadigm() {
        document.getElementById("para-next-cell").addEventListener("click", nextParaBlank);
        document.getElementById("para-next-table").addEventListener("click", () => {
            paraTableIndex++;
            if (paraTableIndex >= paraTableList.length) showResults();
            else setupParaTable();
        });
        document.getElementById("para-start-btn").addEventListener("click", () => {
            const checked = document.querySelectorAll("#para-select-list input[type='checkbox']:checked");
            const indices = [...checked].map(cb => parseInt(cb.dataset.index));
            if (indices.length === 0) return;
            startParadigmQuiz(indices);
        });
        document.getElementById("para-select-all").addEventListener("click", () => {
            document.querySelectorAll("#para-select-list input[type='checkbox']").forEach(cb => cb.checked = true);
        });
        document.getElementById("para-deselect-all").addEventListener("click", () => {
            document.querySelectorAll("#para-select-list input[type='checkbox']").forEach(cb => cb.checked = false);
        });
        // Verb picker
        document.getElementById("verb-add-all").addEventListener("click", () => {
            if (typeof VERB_LEXICON === "undefined") return;
            selectedVerbs = Object.keys(VERB_LEXICON);
            renderVerbTags();
            renderVerbPickerList();
            rebuildVerbTables();
        });
        document.getElementById("verb-clear").addEventListener("click", () => {
            selectedVerbs = [];
            renderVerbTags();
            renderVerbPickerList();
            rebuildVerbTables();
        });
        document.getElementById("verb-search").addEventListener("input", () => {
            renderVerbPickerList();
        });
    }

    function renderVerbPickerList() {
        if (typeof VERB_LEXICON === "undefined") return;
        const list = document.getElementById("verb-picker-list");
        const query = (document.getElementById("verb-search").value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        list.innerHTML = "";
        const sortedKeys = Object.keys(VERB_LEXICON).sort((a, b) =>
            a.normalize("NFD").replace(/[\u0300-\u036f]/g, "").localeCompare(
                b.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), "el"
            )
        );
        for (const key of sortedKeys) {
            const v = VERB_LEXICON[key];
            const searchable = (key + " " + v.meaning).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (query && !searchable.includes(query)) continue;
            const isSelected = selectedVerbs.includes(key);
            const div = document.createElement("div");
            div.className = "verb-picker-item" + (isSelected ? " selected" : "");
            div.innerHTML = `<span class="vp-lexical">${escapeHTML(key)}</span><span class="vp-meaning">${escapeHTML(v.meaning)}</span>`;
            div.addEventListener("click", () => {
                if (selectedVerbs.includes(key)) {
                    selectedVerbs = selectedVerbs.filter(v => v !== key);
                } else {
                    selectedVerbs.push(key);
                }
                renderVerbTags();
                renderVerbPickerList();
                rebuildVerbTables();
            });
            list.appendChild(div);
        }
    }

    function renderVerbTags() {
        const wrap = document.getElementById("verb-selected-tags");
        if (!wrap) return;
        wrap.innerHTML = selectedVerbs.map(v => {
            return `<span class="verb-tag">${v} <button data-verb="${escapeAttr(v)}">&times;</button></span>`;
        }).join("");
        wrap.querySelectorAll("button").forEach(btn => {
            btn.addEventListener("click", () => {
                selectedVerbs = selectedVerbs.filter(v => v !== btn.dataset.verb);
                renderVerbTags();
                renderVerbPickerList();
                rebuildVerbTables();
            });
        });
    }

    function buildVerbTables(verbKey) {
        if (typeof VERB_LEXICON === "undefined") return [];
        const verb = VERB_LEXICON[verbKey];
        if (!verb) return [];
        const tables = [];
        const rows = ["1st Person", "2nd Person", "3rd Person"];
        const cols = ["Singular", "Plural"];
        // Indicative tables
        if (verb.indicative) {
            for (const tense in verb.indicative) {
                const forms = verb.indicative[tense];
                if (forms.every(f => f === "--")) continue;
                tables.push({
                    title: `${verbKey} — ${tense}`,
                    cols: cols,
                    rows: rows,
                    cells: [
                        [forms[0], forms[3]],
                        [forms[1], forms[4]],
                        [forms[2], forms[5]]
                    ]
                });
            }
        }
        // Subjunctive tables
        if (verb.subjunctive) {
            for (const tense in verb.subjunctive) {
                const forms = verb.subjunctive[tense];
                if (forms.every(f => f === "--")) continue;
                tables.push({
                    title: `${verbKey} — ${tense}`,
                    cols: cols,
                    rows: rows,
                    cells: [
                        [forms[0], forms[3]],
                        [forms[1], forms[4]],
                        [forms[2], forms[5]]
                    ]
                });
            }
        }
        // Infinitives as a single table
        if (verb.infinitives) {
            const infKeys = Object.keys(verb.infinitives);
            if (infKeys.length > 0) {
                tables.push({
                    title: `${verbKey} — Infinitives`,
                    cols: ["Form"],
                    rows: infKeys,
                    cells: infKeys.map(k => [verb.infinitives[k]])
                });
            }
        }
        return tables;
    }

    function rebuildVerbTables() {
        // Rebuild the table checklist with verb-specific tables added
        const baseTables = PARADIGM_TABLES[currentCategory] || [];
        let verbTables = [];
        selectedVerbs.forEach(v => {
            verbTables = verbTables.concat(buildVerbTables(v));
        });
        const allTables = [...baseTables, ...verbTables];
        // Store combined list for startParadigmQuiz
        window._paraSelectTables = allTables;
        // Re-render the checklist
        const list = document.getElementById("para-select-list");
        list.innerHTML = "";
        allTables.forEach((tbl, i) => {
            const dims = `${tbl.rows.length} × ${tbl.cols.length}`;
            const isVerb = i >= baseTables.length;
            const label = document.createElement("label");
            label.className = "para-select-item";
            label.innerHTML = `
                <input type="checkbox" checked data-index="${i}">
                <span class="para-item-title">${tbl.title}</span>
                <span class="para-item-info">${dims}</span>
            `;
            list.appendChild(label);
        });
    }

    function showParadigmSelect() {
        const tables = PARADIGM_TABLES[currentCategory];
        const catName = data[currentCategory].name;
        document.getElementById("para-select-title").textContent = `Select ${catName} Tables`;

        // Show verb selector only for verbs category
        const verbSection = document.getElementById("verb-select-section");
        if (currentCategory === "verbs" && typeof VERB_LEXICON !== "undefined") {
            verbSection.classList.remove("hidden");
            document.getElementById("verb-search").value = "";
        } else {
            verbSection.classList.add("hidden");
        }

        // Store base tables
        window._paraSelectTables = [...tables];
        selectedVerbs = [];
        renderVerbTags();
        renderVerbPickerList();

        const list = document.getElementById("para-select-list");
        list.innerHTML = "";
        tables.forEach((tbl, i) => {
            const dims = `${tbl.rows.length} × ${tbl.cols.length}`;
            const label = document.createElement("label");
            label.className = "para-select-item";
            label.innerHTML = `
                <input type="checkbox" checked data-index="${i}">
                <span class="para-item-title">${tbl.title}</span>
                <span class="para-item-info">${dims}</span>
            `;
            list.appendChild(label);
        });
        showView("para-select");
    }

    function startParadigmQuiz(indices) {
        const allTables = window._paraSelectTables || PARADIGM_TABLES[currentCategory];
        paraTableList = indices.map(i => allTables[i]);
        if (document.getElementById("opt-shuffle").checked) shuffle(paraTableList);
        paraTableIndex = 0;
        score = { correct: 0, total: 0 };
        missed = [];
        showView("paradigm");
        setupParaTable();
    }

    function setupParaTable() {
        const tbl = paraTableList[paraTableIndex];
        document.getElementById("para-title").textContent = tbl.title;
        document.getElementById("para-next-table").classList.add("hidden");
        document.getElementById("para-next-cell").classList.add("hidden");
        document.getElementById("para-feedback").classList.add("hidden");

        // Determine blanks: ~50% of cells, randomly chosen
        paraBlanks = [];
        const totalCells = tbl.rows.length * tbl.cols.length;
        const blankAll = document.getElementById("opt-blank-all").checked;
        const blankCount = blankAll ? totalCells : Math.max(2, Math.ceil(totalCells * 0.5));
        const allPositions = [];
        for (let r = 0; r < tbl.rows.length; r++)
            for (let c = 0; c < tbl.cols.length; c++)
                allPositions.push([r, c]);
        shuffle(allPositions);
        for (let i = 0; i < blankCount && i < allPositions.length; i++)
            paraBlanks.push(allPositions[i]);
        // Sort blanks top-to-bottom, left-to-right for sequential fill
        paraBlanks.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
        paraBlankIndex = 0;

        renderParaTable();
        updateParaProgress();
        highlightCurrentBlank();
        renderParaInput();
    }

    function renderParaTable() {
        const tbl = paraTableList[paraTableIndex];
        const wrap = document.getElementById("para-table-wrap");
        let html = '<table class="para-table"><thead><tr><th></th>';
        tbl.cols.forEach(c => { html += `<th>${c}</th>`; });
        html += "</tr></thead><tbody>";
        for (let r = 0; r < tbl.rows.length; r++) {
            html += `<tr><td class="row-label">${tbl.rows[r]}</td>`;
            for (let c = 0; c < tbl.cols.length; c++) {
                const isBlank = paraBlanks.some(b => b[0] === r && b[1] === c);
                const id = `para-cell-${r}-${c}`;
                if (isBlank) {
                    html += `<td id="${id}" class="blank-cell">?</td>`;
                } else {
                    html += `<td id="${id}">${tbl.cells[r][c]}</td>`;
                }
            }
            html += "</tr>";
        }
        html += "</tbody></table>";
        wrap.innerHTML = html;
        // Make blank cells clickable to jump to them
        paraBlanks.forEach(([br, bc], idx) => {
            const cell = document.getElementById(`para-cell-${br}-${bc}`);
            if (cell) {
                cell.style.cursor = "pointer";
                cell.addEventListener("click", () => jumpToBlank(idx));
            }
        });
    }

    function jumpToBlank(idx) {
        // Only jump to unanswered blanks
        const [r, c] = paraBlanks[idx];
        const cell = document.getElementById(`para-cell-${r}-${c}`);
        if (!cell || cell.classList.contains("correct-cell") || cell.classList.contains("wrong-cell")) return;
        paraBlankIndex = idx;
        highlightCurrentBlank();
        renderParaInput();
        updateParaProgress();
    }

    function highlightCurrentBlank() {
        // Remove previous highlight
        document.querySelectorAll(".para-table td.active-cell").forEach(el =>
            el.classList.remove("active-cell")
        );
        if (paraBlankIndex < paraBlanks.length) {
            const [r, c] = paraBlanks[paraBlankIndex];
            const cell = document.getElementById(`para-cell-${r}-${c}`);
            if (cell) {
                cell.classList.add("active-cell");
                cell.textContent = "?";
            }
        }
    }

    function updateParaProgress() {
        const totalBlanks = paraBlanks.length;
        const done = paraBlankIndex;
        document.getElementById("para-progress").textContent =
            `Table ${paraTableIndex + 1}/${paraTableList.length} · Cell ${Math.min(done + 1, totalBlanks)}/${totalBlanks}`;
        document.getElementById("para-score").textContent =
            `Score: ${score.correct}/${score.total}`;
    }

    function renderParaInput() {
        const area = document.getElementById("para-input-area");
        document.getElementById("para-feedback").classList.add("hidden");
        document.getElementById("para-next-cell").classList.add("hidden");

        if (paraBlankIndex >= paraBlanks.length) {
            area.innerHTML = "";
            document.getElementById("para-next-table").classList.remove("hidden");
            if (paraTableIndex + 1 >= paraTableList.length) {
                document.getElementById("para-next-table").textContent = "See Results";
            } else {
                document.getElementById("para-next-table").textContent = "Next Table →";
            }
            return;
        }

        const tbl = paraTableList[paraTableIndex];
        const [r, c] = paraBlanks[paraBlankIndex];
        const correct = tbl.cells[r][c];

        if (paraMode === "fill-blank") {
            area.innerHTML = `
                <div class="fib-row">
                    <input type="text" id="para-fib-input" class="fib-input" placeholder="Type the form..." autocomplete="off">
                    <button id="para-fib-submit" class="btn btn-primary">Check</button>
                </div>
            `;
            const inp = document.getElementById("para-fib-input");
            const btn = document.getElementById("para-fib-submit");
            const check = () => handleParaFIB(inp.value.trim(), correct);
            btn.addEventListener("click", check);
            inp.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
            inp.focus();
        } else {
            // Multiple choice
            const allCells = [];
            for (let rr = 0; rr < tbl.rows.length; rr++)
                for (let cc = 0; cc < tbl.cols.length; cc++)
                    if (tbl.cells[rr][cc] !== correct) allCells.push(tbl.cells[rr][cc]);
            // Deduplicate
            const unique = [...new Set(allCells)];
            shuffle(unique);
            let options = [correct];
            for (let i = 0; options.length < 4 && i < unique.length; i++)
                options.push(unique[i]);
            shuffle(options);

            let html = '<div class="mc-options">';
            options.forEach(opt => {
                html += `<button class="mc-option" data-val="${escapeAttr(opt)}">${escapeHTML(opt)}</button>`;
            });
            html += "</div>";
            area.innerHTML = html;
            area.querySelectorAll(".mc-option").forEach(btn => {
                btn.addEventListener("click", () => handleParaMC(btn, btn.dataset.val, correct));
            });
        }
    }

    function handleParaFIB(answer, correct) {
        const normalize = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        const [r, c] = paraBlanks[paraBlankIndex];
        const cell = document.getElementById(`para-cell-${r}-${c}`);
        const fb = document.getElementById("para-feedback");
        score.total++;

        cell.classList.remove("active-cell", "blank-cell");
        if (normalize(answer) === normalize(correct)) {
            score.correct++;
            cell.textContent = correct;
            cell.classList.add("correct-cell");
            fb.textContent = "Correct!";
            fb.className = "feedback correct";
        } else {
            cell.textContent = correct;
            cell.classList.add("wrong-cell");
            fb.innerHTML = `Incorrect — it was: <strong>${correct}</strong>`;
            fb.className = "feedback wrong";
            missed.push({ term: `${paraTableList[paraTableIndex].rows[r]} / ${paraTableList[paraTableIndex].cols[c]}`, definition: correct });
        }
        fb.classList.remove("hidden");
        document.getElementById("para-fib-input").disabled = true;
        document.getElementById("para-fib-submit").classList.add("hidden");
        document.getElementById("para-next-cell").classList.remove("hidden");
        updateParaProgress();
    }

    function handleParaMC(btn, chosen, correct) {
        if (btn.classList.contains("answered")) return;
        document.querySelectorAll("#para-input-area .mc-option").forEach(b => b.classList.add("answered"));
        const [r, c] = paraBlanks[paraBlankIndex];
        const cell = document.getElementById(`para-cell-${r}-${c}`);
        const fb = document.getElementById("para-feedback");
        score.total++;

        cell.classList.remove("active-cell", "blank-cell");
        if (chosen === correct) {
            score.correct++;
            btn.classList.add("correct");
            cell.textContent = correct;
            cell.classList.add("correct-cell");
            fb.textContent = "Correct!";
            fb.className = "feedback correct";
        } else {
            btn.classList.add("wrong");
            document.querySelectorAll("#para-input-area .mc-option").forEach(b => {
                if (b.dataset.val === correct) b.classList.add("correct");
            });
            cell.textContent = correct;
            cell.classList.add("wrong-cell");
            fb.innerHTML = `Incorrect — it was: <strong>${correct}</strong>`;
            fb.className = "feedback wrong";
            missed.push({ term: `${paraTableList[paraTableIndex].rows[r]} / ${paraTableList[paraTableIndex].cols[c]}`, definition: correct });
        }
        fb.classList.remove("hidden");
        document.getElementById("para-next-cell").classList.remove("hidden");
        updateParaProgress();
    }

    function nextParaBlank() {
        paraBlankIndex++;
        if (paraBlankIndex < paraBlanks.length) {
            highlightCurrentBlank();
            renderParaInput();
            updateParaProgress();
        } else {
            // Reveal remaining and show next table button
            highlightCurrentBlank();
            renderParaInput();
            updateParaProgress();
        }
    }

    // ============================================================
    // FLASHCARDS
    // ============================================================
    function bindFlashcards() {
        const fc = document.getElementById("flashcard");
        fc.addEventListener("click", () => fc.classList.toggle("flipped"));
        fc.addEventListener("keydown", e => {
            if (e.key === " " || e.key === "Enter") { e.preventDefault(); fc.classList.toggle("flipped"); }
            if (e.key === "ArrowRight") document.getElementById("fc-next").click();
            if (e.key === "ArrowLeft") document.getElementById("fc-prev").click();
        });
        document.getElementById("fc-next").addEventListener("click", () => {
            if (studyIndex < studyCards.length - 1) { studyIndex++; renderFlashcard(); }
        });
        document.getElementById("fc-prev").addEventListener("click", () => {
            if (studyIndex > 0) { studyIndex--; renderFlashcard(); }
        });
    }
    function startFlashcards() { showView("flashcard"); renderFlashcard(); document.getElementById("flashcard").focus(); }
    function renderFlashcard() {
        const card = studyCards[studyIndex];
        const fc = document.getElementById("flashcard");
        fc.classList.remove("flipped");
        document.getElementById("fc-front-text").textContent = getTerm(card);
        document.getElementById("fc-back-text").textContent = getDef(card);
        document.getElementById("fc-notes").textContent = card.notes || "";
        document.getElementById("fc-progress").textContent = `${studyIndex + 1} / ${studyCards.length}`;
        document.getElementById("fc-bar").style.width = ((studyIndex + 1) / studyCards.length * 100) + "%";
        document.getElementById("fc-prev").disabled = studyIndex === 0;
        document.getElementById("fc-next").disabled = studyIndex === studyCards.length - 1;
    }

    // ============================================================
    // MULTIPLE CHOICE (flat cards)
    // ============================================================
    function bindMultipleChoice() {
        document.getElementById("mc-next").addEventListener("click", () => {
            studyIndex++;
            if (studyIndex >= studyCards.length) showResults();
            else renderMC();
        });
    }
    function startMultipleChoice() { showView("mc"); renderMC(); }
    function renderMC() {
        const card = studyCards[studyIndex];
        document.getElementById("mc-prompt").textContent = getTerm(card);
        document.getElementById("mc-progress").textContent = `${studyIndex + 1} / ${studyCards.length}`;
        document.getElementById("mc-score").textContent = `${score.correct}/${score.total}`;
        document.getElementById("mc-bar").style.width = ((studyIndex + 1) / studyCards.length * 100) + "%";
        document.getElementById("mc-next").classList.add("hidden");
        const correctDef = getDef(card);
        const allDefs = data[currentCategory].cards.map(c => getDef(c));
        let options = [correctDef];
        const pool = allDefs.filter(d => d !== correctDef);
        shuffle(pool);
        while (options.length < 4 && pool.length > 0) options.push(pool.pop());
        shuffle(options);
        const container = document.getElementById("mc-options");
        container.innerHTML = "";
        options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "mc-option";
            btn.textContent = opt;
            btn.addEventListener("click", () => handleMCAnswer(btn, opt, correctDef));
            container.appendChild(btn);
        });
    }
    function handleMCAnswer(btn, chosen, correct) {
        if (btn.classList.contains("answered")) return;
        document.querySelectorAll("#mc-options .mc-option").forEach(b => b.classList.add("answered"));
        score.total++;
        if (chosen === correct) { btn.classList.add("correct"); score.correct++; }
        else {
            btn.classList.add("wrong");
            document.querySelectorAll("#mc-options .mc-option").forEach(b => { if (b.textContent === correct) b.classList.add("correct"); });
            missed.push(studyCards[studyIndex]);
        }
        document.getElementById("mc-score").textContent = `${score.correct}/${score.total}`;
        document.getElementById("mc-next").classList.remove("hidden");
    }

    // ============================================================
    // FILL IN BLANK (flat cards)
    // ============================================================
    function bindFillBlank() {
        document.getElementById("fib-submit").addEventListener("click", checkFIB);
        document.getElementById("fib-input").addEventListener("keydown", e => { if (e.key === "Enter") checkFIB(); });
        document.getElementById("fib-next").addEventListener("click", () => {
            studyIndex++;
            if (studyIndex >= studyCards.length) showResults();
            else renderFIB();
        });
    }
    function startFillBlank() { showView("fib"); renderFIB(); }
    function renderFIB() {
        const card = studyCards[studyIndex];
        document.getElementById("fib-prompt").textContent = getDef(card);
        document.getElementById("fib-progress").textContent = `${studyIndex + 1} / ${studyCards.length}`;
        document.getElementById("fib-score").textContent = `${score.correct}/${score.total}`;
        document.getElementById("fib-bar").style.width = ((studyIndex + 1) / studyCards.length * 100) + "%";
        document.getElementById("fib-input").value = "";
        document.getElementById("fib-input").disabled = false;
        document.getElementById("fib-submit").classList.remove("hidden");
        document.getElementById("fib-feedback").classList.add("hidden");
        document.getElementById("fib-next").classList.add("hidden");
        document.getElementById("fib-input").focus();
    }
    function checkFIB() {
        const card = studyCards[studyIndex];
        const answer = document.getElementById("fib-input").value.trim();
        const correct = getTerm(card);
        const fb = document.getElementById("fib-feedback");
        score.total++;
        const normalize = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        if (normalize(answer) === normalize(correct)) {
            score.correct++;
            fb.textContent = "Correct!";
            fb.className = "feedback correct";
        } else {
            fb.innerHTML = `Incorrect. Answer: <strong>${correct}</strong>`;
            fb.className = "feedback wrong";
            missed.push(card);
        }
        fb.classList.remove("hidden");
        document.getElementById("fib-input").disabled = true;
        document.getElementById("fib-submit").classList.add("hidden");
        document.getElementById("fib-next").classList.remove("hidden");
        document.getElementById("fib-score").textContent = `${score.correct}/${score.total}`;
    }

    // ============================================================
    // MATCHING
    // ============================================================
    function bindMatching() {
        document.getElementById("match-next").addEventListener("click", () => { matchRound++; setupMatchRound(); });
    }
    function startMatching() { matchRound = 0; matchedCount = 0; showView("match"); setupMatchRound(); }
    function setupMatchRound() {
        const perRound = 5;
        const start = matchRound * perRound;
        const roundCards = studyCards.slice(start, start + perRound);
        if (roundCards.length === 0) { showResults(); return; }
        matchPairs = roundCards; matchedCount = 0; matchSelected = null;
        document.getElementById("match-next").classList.add("hidden");
        document.getElementById("match-progress").textContent = `Round ${matchRound + 1} — ${Math.min(start + perRound, studyCards.length)}/${studyCards.length}`;
        const left = roundCards.map((c, i) => ({ text: getTerm(c), idx: i, side: "left" }));
        const right = roundCards.map((c, i) => ({ text: getDef(c), idx: i, side: "right" }));
        shuffle(left); shuffle(right);
        renderMatchCol("match-left", left);
        renderMatchCol("match-right", right);
    }
    function renderMatchCol(id, items) {
        const col = document.getElementById(id);
        col.innerHTML = "";
        items.forEach(item => {
            const el = document.createElement("button");
            el.className = "match-item";
            el.textContent = item.text;
            el.dataset.idx = item.idx;
            el.dataset.side = item.side;
            el.addEventListener("click", () => handleMatchClick(el, item));
            col.appendChild(el);
        });
    }
    function handleMatchClick(el, item) {
        if (el.classList.contains("matched")) return;
        if (!matchSelected) { matchSelected = { el, item }; el.classList.add("selected"); }
        else {
            if (matchSelected.item.side === item.side) {
                matchSelected.el.classList.remove("selected");
                matchSelected = { el, item }; el.classList.add("selected"); return;
            }
            score.total++;
            if (matchSelected.item.idx === item.idx) {
                score.correct++;
                matchSelected.el.classList.remove("selected");
                matchSelected.el.classList.add("matched");
                el.classList.add("matched");
                matchedCount++;
                if (matchedCount === matchPairs.length) {
                    const totalRounds = Math.ceil(studyCards.length / 5);
                    if (matchRound + 1 >= totalRounds) setTimeout(() => showResults(), 400);
                    else document.getElementById("match-next").classList.remove("hidden");
                }
            } else {
                matchSelected.el.classList.remove("selected");
                matchSelected.el.classList.add("wrong-flash");
                el.classList.add("wrong-flash");
                missed.push(matchPairs[matchSelected.item.idx]);
                setTimeout(() => {
                    matchSelected.el.classList.remove("wrong-flash");
                    el.classList.remove("wrong-flash");
                }, 500);
            }
            matchSelected = null;
        }
    }

    // ============================================================
    // TRUE / FALSE
    // ============================================================
    function bindTrueFalse() {
        document.querySelectorAll(".btn-tf").forEach(b =>
            b.addEventListener("click", () => handleTF(b.dataset.answer === "true"))
        );
        document.getElementById("tf-next").addEventListener("click", () => {
            studyIndex++;
            if (studyIndex >= studyCards.length) showResults();
            else renderTF();
        });
    }
    function startTrueFalse() {
        showView("tf");
        studyCards.forEach(card => {
            card._tfCorrect = Math.random() > 0.5;
            if (!card._tfCorrect) {
                const others = data[currentCategory].cards.filter(c => getDef(c) !== getDef(card));
                if (others.length > 0) card._tfFake = getDef(others[Math.floor(Math.random() * others.length)]);
                else card._tfCorrect = true;
            }
        });
        renderTF();
    }
    function renderTF() {
        const card = studyCards[studyIndex];
        document.getElementById("tf-term").textContent = getTerm(card);
        document.getElementById("tf-def").textContent = card._tfCorrect ? getDef(card) : card._tfFake;
        document.getElementById("tf-progress").textContent = `${studyIndex + 1} / ${studyCards.length}`;
        document.getElementById("tf-score").textContent = `${score.correct}/${score.total}`;
        document.getElementById("tf-bar").style.width = ((studyIndex + 1) / studyCards.length * 100) + "%";
        document.getElementById("tf-feedback").classList.add("hidden");
        document.getElementById("tf-next").classList.add("hidden");
        document.querySelectorAll(".btn-tf").forEach(b => { b.disabled = false; b.classList.remove("correct", "wrong"); });
    }
    function handleTF(answeredTrue) {
        const card = studyCards[studyIndex];
        const isCorrect = answeredTrue === card._tfCorrect;
        score.total++;
        const fb = document.getElementById("tf-feedback");
        document.querySelectorAll(".btn-tf").forEach(b => b.disabled = true);
        if (isCorrect) {
            score.correct++;
            fb.textContent = "Correct!";
            fb.className = "feedback correct";
            document.querySelector(`.btn-tf[data-answer="${answeredTrue}"]`).classList.add("correct");
        } else {
            fb.innerHTML = `Incorrect. Answer: <strong>${getDef(card)}</strong>`;
            fb.className = "feedback wrong";
            document.querySelector(`.btn-tf[data-answer="${answeredTrue}"]`).classList.add("wrong");
            document.querySelector(`.btn-tf[data-answer="${!answeredTrue}"]`).classList.add("correct");
            missed.push(card);
        }
        fb.classList.remove("hidden");
        document.getElementById("tf-next").classList.remove("hidden");
        document.getElementById("tf-score").textContent = `${score.correct}/${score.total}`;
    }

    // ============================================================
    // RESULTS
    // ============================================================
    function bindResults() {
        document.getElementById("results-retry").addEventListener("click", () => startStudy(currentMode));
        document.getElementById("results-back").addEventListener("click", () => openCategory(currentCategory));
    }
    function showResults() {
        showView("results");
        const pct = score.total > 0 ? Math.round(score.correct / score.total * 100) : 0;
        document.getElementById("results-score").textContent = pct + "%";
        document.getElementById("results-score").style.color =
            pct >= 80 ? "var(--success)" : pct >= 50 ? "var(--gold)" : "var(--error)";
        document.getElementById("results-detail").textContent = `${score.correct} correct out of ${score.total}`;
        const missedDiv = document.getElementById("results-missed");
        missedDiv.innerHTML = "";
        if (missed.length > 0) {
            missedDiv.innerHTML = "<h4>Review These:</h4>";
            const seen = new Set();
            missed.forEach(card => {
                const key = card.term + card.definition;
                if (seen.has(key)) return;
                seen.add(key);
                const div = document.createElement("div");
                div.className = "missed-item";
                div.innerHTML = `<strong>${escapeHTML(card.term)}</strong> <span>— ${escapeHTML(card.definition)}</span>`;
                missedDiv.appendChild(div);
            });
        }
    }

    // ============================================================
    // MANAGE CARDS
    // ============================================================
    function bindManage() {
        document.getElementById("add-card-btn").addEventListener("click", addCard);
        document.getElementById("import-btn").addEventListener("click", bulkImport);
        document.getElementById("export-btn").addEventListener("click", bulkExport);
        document.getElementById("file-upload").addEventListener("change", handleFileUpload);
        document.getElementById("manage-category").addEventListener("change", refreshCardList);
        ["card-term", "card-definition", "card-notes"].forEach(id =>
            document.getElementById(id).addEventListener("keydown", e => { if (e.key === "Enter") addCard(); })
        );
    }
    function getManageCategory() { return document.getElementById("manage-category").value; }
    function addCard() {
        const term = document.getElementById("card-term").value.trim();
        const def = document.getElementById("card-definition").value.trim();
        const notes = document.getElementById("card-notes").value.trim();
        if (!term || !def) return;
        data[getManageCategory()].cards.push({ term, definition: def, notes });
        saveData(); renderCategories(); refreshCardList();
        document.getElementById("card-term").value = "";
        document.getElementById("card-definition").value = "";
        document.getElementById("card-notes").value = "";
        document.getElementById("card-term").focus();
    }
    function refreshCardList() {
        const cat = getManageCategory();
        const cards = data[cat].cards;
        document.getElementById("card-count").textContent = cards.length;
        const list = document.getElementById("card-list");
        list.innerHTML = "";
        cards.forEach((card, i) => {
            const item = document.createElement("div");
            item.className = "card-list-item";
            item.innerHTML = `
                <div class="card-text">
                    <span class="card-term">${escapeHTML(card.term)}</span>
                    <span class="card-def">${escapeHTML(card.definition)}</span>
                </div>
                <button class="delete-btn" title="Delete">&times;</button>
            `;
            item.querySelector(".delete-btn").addEventListener("click", () => {
                data[cat].cards.splice(i, 1);
                saveData(); renderCategories(); refreshCardList();
            });
            list.appendChild(item);
        });
    }
    function bulkImport() {
        const text = document.getElementById("bulk-import").value.trim();
        if (!text) return;
        const cat = getManageCategory();
        text.split("\n").forEach(line => {
            const parts = line.split("\t");
            if (parts.length >= 2)
                data[cat].cards.push({ term: parts[0].trim(), definition: parts[1].trim(), notes: (parts[2] || "").trim() });
        });
        saveData(); renderCategories(); refreshCardList();
        document.getElementById("bulk-import").value = "";
    }
    function bulkExport() {
        const cat = getManageCategory();
        const text = data[cat].cards.map(c => `${c.term}\t${c.definition}\t${c.notes || ""}`).join("\n");
        document.getElementById("bulk-import").value = text;
        navigator.clipboard.writeText(text).catch(() => {});
    }
    function handleFileUpload(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => { document.getElementById("bulk-import").value = ev.target.result; };
        reader.readAsText(file);
        e.target.value = "";
    }

    // ============================================================
    // UTILITIES
    // ============================================================
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    function escapeHTML(str) {
        const d = document.createElement("div");
        d.textContent = str;
        return d.innerHTML;
    }
    function escapeAttr(str) {
        return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    init();
})();
