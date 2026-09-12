/**
 * games/cosy-crossword/game.js
 * Standalone logic for Cosy Crossword with "Stamped Ink" reveal identity,
 * phone-safe input layout with TurnBanner sticky clue, and online multi-player context.
 */
(function() {
    'use strict';

    const GAME_ID = 'crossword';
    const GAME_TITLE = 'Cosy Crossword 🧩';
    const GAME_META = 'Vocabulary · Solo & Online';

    // Preset Vocabularies for A1 (small grid) and B2 (large grid) with fallbacks
    const VOCAB_PRESETS = {
        A1: [
            { word: 'CAT', clue: 'A small domesticated feline pet 🐱' },
            { word: 'APPLE', clue: 'A sweet red or green fruit 🍎' },
            { word: 'TEA', clue: 'A hot beverage made from steeped leaves ☕' },
            { word: 'DOG', clue: 'Man\'s best friend 🐶' },
            { word: 'SUN', clue: 'The star at the center of our solar system ☀️' }
        ],
        B2: [
            { word: 'AMBIGUOUS', clue: 'Open to more than one interpretation 🧩' },
            { word: 'BENEVOLENT', clue: 'Well meaning and kindly 🤝' },
            { word: 'COGNITIVE', clue: 'Relating to mental processes of perception 🧠' },
            { word: 'DILIGENT', clue: 'Having or showing care and conscientiousness 💼' },
            { word: 'ELOQUENT', clue: 'Fluent or persuasive in speaking or writing 🗣️' },
            { word: 'FEASIBLE', clue: 'Possible to do easily or conveniently 💡' },
            { word: 'INNOVATIVE', clue: 'Featuring new methods or advanced ideas 🚀' },
            { word: 'METICULOUS', clue: 'Showing great attention to detail 🔍' },
            { word: 'NOSTALGIA', clue: 'A sentimental longing for the past 📻' },
            { word: 'PRAGMATIC', clue: 'Dealing with things sensibly and realistically 📐' },
            { word: 'RESILIENT', clue: 'Able to withstand or recover quickly from difficult conditions 🛡️' },
            { word: 'SUBSTANTIAL', clue: 'Of considerable importance, size, or worth 📊' }
        ]
    };

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');

        const LEVEL_OPTS = [
            { code: 'A1', label: 'CEFR A1 · Small Grid (Starter) 🟢' },
            { code: 'A2', label: 'CEFR A2 · Elementary Grid 🟡' },
            { code: 'B1', label: 'CEFR B1 · Intermediate Grid 🟠' },
            { code: 'B2', label: 'CEFR B2 · Large Grid (Advanced) 🔴' },
            { code: 'C1', label: 'CEFR C1 · Mastery Grid 🟣' }
        ];

        const LANG_OPTS = [
            { code: 'en', label: 'English 🇬🇧' },
            { code: 'fr', label: 'Français 🇫🇷' },
            { code: 'it', label: 'Italiano 🇮🇹' },
            { code: 'ru', label: 'Русский 🇷🇺' },
            { code: 'el', label: 'Ελληνικά 🇬🇷' }
        ];

        body.innerHTML = `
            <div class="setup-screen">
              <h2>${GAME_TITLE}</h2>
              <p>Solve interactive stamped-ink crossword puzzles generated dynamically from CEFR vocabulary sets. Fully responsive across phone, projector, and online modes!</p>
              <div class="setup-field"><label>CEFR Target Level</label>
                <select class="styled-sel" id="cw-s-level">
                    ${LEVEL_OPTS.map(l => `<option value="${l.code}">${l.label}</option>`).join('')}
                </select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="cw-s-lang">
                    ${LANG_OPTS.map(l => `<option value="${l.code}">${l.label}</option>`).join('')}
                </select>
              </div>
              <button class="btn-start-game" type="button" onclick="COSY_GAME.start()">▶ Start puzzle</button>
            </div>`;
    }

    window.COSY_GAME = {
        gridSize: 10,
        grid: [],
        words: [],
        selectedCell: null,
        activeDirection: 'across', // 'across' or 'down'
        activeWordId: null,
        activeLevel: 'A1',
        activeLang: 'en',
        stickyBannerInstance: null,

        async start(levelOverride, langOverride) {
            const levelSel = document.getElementById('cw-s-level');
            const langSel = document.getElementById('cw-s-lang');
            this.activeLevel = levelOverride || (levelSel ? levelSel.value : 'A1');
            this.activeLang = langOverride || (langSel ? langSel.value : 'en');

            COSYGame.init(GAME_ID, this.activeLang, this.activeLevel);

            // Generate Crossword Grid layout
            this.generateGrid(this.activeLevel);

            // Render markup
            this.renderGameView();
        },

        generateGrid(level) {
            const isSmall = level === 'A1' || level === 'A2';
            const vocab = VOCAB_PRESETS[isSmall ? 'A1' : 'B2'];
            this.gridSize = isSmall ? 8 : 12;

            // Initialize empty grid
            this.grid = Array.from({ length: this.gridSize }, () =>
                Array.from({ length: this.gridSize }, () => ({
                    letter: '',
                    userLetter: '',
                    num: null,
                    acrossWord: null,
                    downWord: null,
                    isBlack: true,
                    correct: false,
                    playerTint: null
                }))
            );

            this.words = [];
            let numberCounter = 1;

            // Simple placement algorithm for demo/game grid
            if (isSmall) {
                // Layout for Small A1 Grid (CAT, APPLE, TEA, DOG, SUN)
                // 1 Across: APPLE at row 2, cols 1..5
                // 2 Down: CAT at row 1..3, col 2
                // 3 Down: TEA at row 2..4, col 5
                // 4 Across: DOG at row 4, cols 2..4
                const wordSpecs = [
                    { id: 'w1', dir: 'across', word: 'APPLE', clue: 'A sweet red or green fruit 🍎', r: 2, c: 1 },
                    { id: 'w2', dir: 'down', word: 'CAT', clue: 'A small domesticated feline pet 🐱', r: 1, c: 2 },
                    { id: 'w3', dir: 'down', word: 'TEA', clue: 'A hot beverage made from steeped leaves ☕', r: 2, c: 5 },
                    { id: 'w4', dir: 'across', word: 'DOG', clue: 'Man\'s best friend 🐶', r: 4, c: 2 }
                ];

                wordSpecs.forEach(spec => {
                    this.placeWord(spec, numberCounter++);
                });
            } else {
                // Layout for Large B2 Grid
                const wordSpecs = [
                    { id: 'w1', dir: 'across', word: 'AMBIGUOUS', clue: 'Open to more than one interpretation 🧩', r: 1, c: 1 },
                    { id: 'w2', dir: 'down', word: 'BENEVOLENT', clue: 'Well meaning and kindly 🤝', r: 1, c: 3 },
                    { id: 'w3', dir: 'across', word: 'COGNITIVE', clue: 'Relating to mental processes of perception 🧠', r: 4, c: 1 },
                    { id: 'w4', dir: 'down', word: 'DILIGENT', clue: 'Having or showing care and conscientiousness 💼', r: 3, c: 7 },
                    { id: 'w5', dir: 'across', word: 'FEASIBLE', clue: 'Possible to do easily or conveniently 💡', r: 7, c: 2 },
                    { id: 'w6', dir: 'down', word: 'ELOQUENT', clue: 'Fluent or persuasive in speaking or writing 🗣️', r: 4, c: 9 },
                    { id: 'w7', dir: 'across', word: 'RESILIENT', clue: 'Able to withstand or recover quickly 🛡️', r: 10, c: 1 }
                ];

                wordSpecs.forEach(spec => {
                    this.placeWord(spec, numberCounter++);
                });
            }

            // In 'online' mode, assign simulated multi-player borders/avatar chips to random active cells
            const currentMode = (window.ViewContext && typeof window.ViewContext.getMode === 'function')
                ? window.ViewContext.getMode()
                : (document.documentElement.dataset.context || 'online');

            if (currentMode === 'online') {
                this.assignOnlinePlayerCellTints();
            }
        },

        placeWord(spec, num) {
            const { id, dir, word, clue, r, c } = spec;
            const cellsList = [];

            for (let i = 0; i < word.length; i++) {
                const row = dir === 'across' ? r : r + i;
                const col = dir === 'across' ? c + i : c;

                if (row >= this.gridSize || col >= this.gridSize) continue;

                const cell = this.grid[row][col];
                cell.isBlack = false;
                cell.letter = word[i].toUpperCase();

                if (i === 0 && !cell.num) {
                    cell.num = num;
                }

                if (dir === 'across') cell.acrossWord = id;
                else cell.downWord = id;

                cellsList.push({ r: row, c: col });
            }

            this.words.push({
                id,
                num: spec.num || num,
                dir,
                word: word.toUpperCase(),
                clue,
                cells: cellsList,
                completed: false
            });
        },

        assignOnlinePlayerCellTints() {
            // Assign distinct player borders & avatar chips for multi-player online mode
            const activeCells = [];
            for (let r = 0; r < this.gridSize; r++) {
                for (let c = 0; c < this.gridSize; c++) {
                    if (!this.grid[r][c].isBlack) activeCells.push({ r, c });
                }
            }

            const players = [
                { id: 'p1', initial: 'A', tintClass: 'player-border-p1', chipClass: 'chip-p1' },
                { id: 'p2', initial: 'M', tintClass: 'player-border-p2', chipClass: 'chip-p2' },
                { id: 'p3', initial: 'K', tintClass: 'player-border-p3', chipClass: 'chip-p3' }
            ];

            players.forEach((p, idx) => {
                const target = activeCells[(idx * 3 + 1) % activeCells.length];
                if (target) {
                    this.grid[target.r][target.c].playerTint = p;
                }
            });
        },

        renderGameView() {
            const body = document.getElementById('go-body');
            const currentMode = (window.ViewContext && typeof window.ViewContext.getMode === 'function')
                ? window.ViewContext.getMode()
                : (document.documentElement.dataset.context || 'phone');

            const acrossWords = this.words.filter(w => w.dir === 'across');
            const downWords = this.words.filter(w => w.dir === 'down');

            body.innerHTML = `
              <div class="cw-container">
                <div class="cw-header-card">
                  <div class="cw-title-row">
                    <div class="cw-game-title">Cosy Crossword 🧩</div>
                    <div class="cw-level-badge">Level ${this.activeLevel} (${this.gridSize}×${this.gridSize})</div>
                  </div>
                  <div class="game-prompt" id="cw-active-clue-display" style="padding: 0.6rem 0.8rem; background: #eef2ff; border-radius: 8px; font-weight: 700; color: #3730A3;">
                    Select any numbered cell to view its clue
                  </div>
                </div>

                <div class="cw-grid-card">
                  <div class="cw-grid-wrapper">
                    <div class="cw-grid" style="grid-template-columns: repeat(${this.gridSize}, 1fr);">
                      ${this.renderGridCells()}
                    </div>
                  </div>
                </div>

                <div class="cw-clues-container">
                  <div class="cw-clues-card">
                    <div class="cw-clues-title">Across ➔</div>
                    <div id="cw-clues-across-list">
                      ${acrossWords.map(w => `
                        <div class="cw-clue-item" id="clue-item-${w.id}" onclick="COSY_GAME.selectWord('${w.id}')">
                          <strong>${w.num}.</strong> ${w.clue}
                        </div>`).join('')}
                    </div>
                  </div>
                  <div class="cw-clues-card">
                    <div class="cw-clues-title">Down ⬇</div>
                    <div id="cw-clues-down-list">
                      ${downWords.map(w => `
                        <div class="cw-clue-item" id="clue-item-${w.id}" onclick="COSY_GAME.selectWord('${w.id}')">
                          <strong>${w.num}.</strong> ${w.clue}
                        </div>`).join('')}
                    </div>
                  </div>
                </div>

                <!-- Phone Docking Area (TurnBanner + On-screen Keyboard) -->
                <div class="cw-phone-dock">
                  <div id="cw-sticky-turnbanner" class="cw-sticky-clue-banner"></div>
                  <div class="cw-keyboard-thumbzone">
                    <div class="cw-kb-row">
                      ${['Q','W','E','R','T','Y','U','I','O','P'].map(k => `<button class="cw-kb-key" type="button" onclick="COSY_GAME.typeKey('${k}')">${k}</button>`).join('')}
                    </div>
                    <div class="cw-kb-row">
                      ${['A','S','D','F','G','H','J','K','L'].map(k => `<button class="cw-kb-key" type="button" onclick="COSY_GAME.typeKey('${k}')">${k}</button>`).join('')}
                    </div>
                    <div class="cw-kb-row">
                      ${['Z','X','C','V','B','N','M'].map(k => `<button class="cw-kb-key" type="button" onclick="COSY_GAME.typeKey('${k}')">${k}</button>`).join('')}
                      <button class="cw-kb-key wide" type="button" onclick="COSY_GAME.typeKey('BACKSPACE')">⌫</button>
                    </div>
                  </div>
                </div>
              </div>`;

            // Select first word by default
            if (this.words.length > 0) {
                this.selectWord(this.words[0].id);
            }

            // Keyboard listener for physical typing
            this.bindKeyboardEvents();
        },

        renderGridCells() {
            let html = '';
            for (let r = 0; r < this.gridSize; r++) {
                for (let c = 0; c < this.gridSize; c++) {
                    const cell = this.grid[r][c];
                    if (cell.isBlack) {
                        html += `<div class="cw-cell black"></div>`;
                    } else {
                        const isSelected = this.selectedCell && this.selectedCell.r === r && this.selectedCell.c === c;
                        const isWordActive = this.isCellInActiveWord(r, c);
                        const playerTintClass = cell.playerTint ? cell.playerTint.tintClass : '';
                        const avatarChipHtml = cell.playerTint
                            ? `<div class="cw-avatar-chip ${cell.playerTint.chipClass}">${cell.playerTint.initial}</div>`
                            : '';

                        html += `
                            <div class="cw-cell ${isSelected ? 'selected' : ''} ${isWordActive ? 'active-word' : ''} ${cell.correct ? 'correct' : ''} ${playerTintClass}"
                                 id="cell-${r}-${c}"
                                 tabindex="0"
                                 onclick="COSY_GAME.selectCell(${r}, ${c})">
                              ${cell.num ? `<span class="cw-cell-num">${cell.num}</span>` : ''}
                              <span class="cw-cell-letter">${cell.userLetter || ''}</span>
                              ${avatarChipHtml}
                            </div>`;
                    }
                }
            }
            return html;
        },

        isCellInActiveWord(r, c) {
            if (!this.activeWordId) return false;
            const w = this.words.find(word => word.id === this.activeWordId);
            return w && w.cells.some(cell => cell.r === r && cell.c === c);
        },

        selectCell(r, c) {
            const cell = this.grid[r][c];
            if (cell.isBlack) return;

            if (this.selectedCell && this.selectedCell.r === r && this.selectedCell.c === c) {
                // Toggle direction if clicking same cell
                this.activeDirection = this.activeDirection === 'across' ? 'down' : 'across';
            }

            this.selectedCell = { r, c };

            // Determine active word
            const wordId = (this.activeDirection === 'across' && cell.acrossWord) ? cell.acrossWord : (cell.downWord || cell.acrossWord);
            if (wordId) {
                this.selectWord(wordId, false);
            } else {
                this.updateGridHighlights();
            }
        },

        selectWord(wordId, moveFocus = true) {
            this.activeWordId = wordId;
            const w = this.words.find(word => word.id === wordId);
            if (!w) return;

            this.activeDirection = w.dir;
            if (moveFocus && w.cells.length > 0) {
                this.selectedCell = { r: w.cells[0].r, c: w.cells[0].c };
            }

            // Highlight clue in list
            document.querySelectorAll('.cw-clue-item').forEach(el => el.classList.remove('active'));
            const activeClueEl = document.getElementById(`clue-item-${wordId}`);
            if (activeClueEl) {
                activeClueEl.classList.add('active');
                activeClueEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }

            // Update clue display
            const clueDisplay = document.getElementById('cw-active-clue-display');
            if (clueDisplay) {
                clueDisplay.innerHTML = `<strong>${w.num} ${w.dir.toUpperCase()}:</strong> ${w.clue}`;
            }

            // Update Phone Sticky TurnBanner Clue Header
            this.updateStickyTurnBanner(w);

            this.updateGridHighlights();
        },

        updateStickyTurnBanner(word) {
            const container = document.getElementById('cw-sticky-turnbanner');
            if (!container) return;

            container.innerHTML = '';
            if (window.TurnBanner) {
                new window.TurnBanner(container, {
                    currentTurn: `${word.num}. ${word.clue}`,
                    label: `ACTIVE CLUE (${word.dir.toUpperCase()})`,
                    nextTurn: `Word Length: ${word.word.length} letters`
                });
            } else {
                container.innerHTML = `<div style="padding: 0.75rem; background:#3730A3; color:#ffffff; font-weight:700;">${word.num} ${word.dir.toUpperCase()}: ${word.clue}</div>`;
            }
        },

        updateGridHighlights() {
            for (let r = 0; r < this.gridSize; r++) {
                for (let c = 0; c < this.gridSize; c++) {
                    const el = document.getElementById(`cell-${r}-${c}`);
                    if (!el) continue;

                    const isSelected = this.selectedCell && this.selectedCell.r === r && this.selectedCell.c === c;
                    const isWordActive = this.isCellInActiveWord(r, c);

                    if (isSelected) el.classList.add('selected');
                    else el.classList.remove('selected');

                    if (isWordActive) el.classList.add('active-word');
                    else el.classList.remove('active-word');
                }
            }
        },

        typeKey(key) {
            if (!this.selectedCell) return;
            const { r, c } = this.selectedCell;
            const cell = this.grid[r][c];
            const cellEl = document.getElementById(`cell-${r}-${c}`);

            if (key === 'BACKSPACE') {
                cell.userLetter = '';
                if (cellEl) {
                    const letterSpan = cellEl.querySelector('.cw-cell-letter');
                    if (letterSpan) letterSpan.textContent = '';
                }
                this.moveToPreviousCell();
                return;
            }

            if (/^[A-Z]$/.test(key)) {
                cell.userLetter = key;

                if (cellEl) {
                    const letterSpan = cellEl.querySelector('.cw-cell-letter');
                    if (letterSpan) letterSpan.textContent = key;

                    // Trigger Stamped Ink Reveal Animation (.motion-flip + .ink-stamp-pulse)
                    cellEl.classList.remove('motion-flip', 'ink-stamp-pulse');
                    // Force reflow
                    void cellEl.offsetWidth;
                    cellEl.classList.add('motion-flip', 'ink-stamp-pulse');
                }

                // Check active word completion
                this.checkWordCompletion();

                // Move to next cell in active direction
                this.moveToNextCell();
            }
        },

        moveToNextCell() {
            if (!this.selectedCell || !this.activeWordId) return;
            const w = this.words.find(word => word.id === this.activeWordId);
            if (!w) return;

            const idx = w.cells.findIndex(cell => cell.r === this.selectedCell.r && cell.c === this.selectedCell.c);
            if (idx !== -1 && idx < w.cells.length - 1) {
                const next = w.cells[idx + 1];
                this.selectedCell = { r: next.r, c: next.c };
                this.updateGridHighlights();
            }
        },

        moveToPreviousCell() {
            if (!this.selectedCell || !this.activeWordId) return;
            const w = this.words.find(word => word.id === this.activeWordId);
            if (!w) return;

            const idx = w.cells.findIndex(cell => cell.r === this.selectedCell.r && cell.c === this.selectedCell.c);
            if (idx > 0) {
                const prev = w.cells[idx - 1];
                this.selectedCell = { r: prev.r, c: prev.c };
                this.updateGridHighlights();
            }
        },

        checkWordCompletion() {
            if (!this.activeWordId) return;
            const w = this.words.find(word => word.id === this.activeWordId);
            if (!w || w.completed) return;

            const userWord = w.cells.map(cell => this.grid[cell.r][cell.c].userLetter).join('');
            if (userWord === w.word) {
                w.completed = true;
                COSYGame.addScore(20);

                // Highlight active clue in --game-accent
                const clueEl = document.getElementById(`clue-item-${w.id}`);
                if (clueEl) {
                    clueEl.classList.add('completed', 'cw-clue-highlight');
                    setTimeout(() => clueEl.classList.remove('cw-clue-highlight'), 1200);
                }

                // Trigger Cascading Stamp Effect across word cells staggered by ~40ms each
                w.cells.forEach((pos, i) => {
                    const cEl = document.getElementById(`cell-${pos.r}-${pos.c}`);
                    if (cEl) {
                        setTimeout(() => {
                            cEl.classList.remove('cw-cell', 'word-stamped');
                            void cEl.offsetWidth;
                            cEl.classList.add('cw-cell', 'correct', 'word-stamped');
                        }, i * 40);
                    }
                });
            }
        },

        bindKeyboardEvents() {
            document.removeEventListener('keydown', this.handleKeyDown);
            this.handleKeyDown = (e) => {
                if (e.key === 'Backspace') {
                    this.typeKey('BACKSPACE');
                } else if (/^[a-zA-Z]$/.test(e.key)) {
                    this.typeKey(e.key.toUpperCase());
                }
            };
            document.addEventListener('keydown', this.handleKeyDown);
        },

        reset: renderSetup
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
