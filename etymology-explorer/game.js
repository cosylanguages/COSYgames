/**
 * games/etymology-explorer/game.js
 * Game logic for Etymology Explorer with Archaeological Dig Site Identity.
 */
(function() {
    const GAME_ID = 'etymology';
    const GAME_TITLE = 'Etymology Explorer 📜';
    const GAME_META = 'Vocabulary & Dig Site · Solo or group';
    const LEVEL_OPTS = ['Easy (Greek, Latin, French...)', 'Medium (Arabic, Chinese, Czech...)', 'Hard (Obscure origins)'];
    const LANG_OPTS = [
        'English 🇬🇧',
        'Français 🇫🇷',
        'Italiano 🇮🇹',
        'Deutsch 🇩🇪',
        'Español 🇪🇸',
        'Русский 🇷🇺',
        'Ελληνικά 🇬🇷',
        'Português 🇵🇹',
        'Հայերեն 🇦🇲',
        'ქართული 🇬🇪',
        'Башҡортса 🇷🇺',
        'Татарча 🇷🇺',
        'Brezhoneg 🏴'
    ];

    // Local self-contained gameUtils shim
    const gameUtils = {
        createDrawBag(array) {
            let pool = [];
            let lastDrawn = null;
            return {
                next() {
                    if (!array || array.length === 0) return null;
                    if (pool.length === 0) {
                        pool = [...array].sort(() => Math.random() - 0.5);
                        if (array.length > 1 && pool[pool.length - 1] === lastDrawn) {
                            const temp = pool[pool.length - 1];
                            pool[pool.length - 1] = pool[0];
                            pool[0] = temp;
                        }
                    }
                    lastDrawn = pool.pop();
                    return lastDrawn;
                }
            };
        },
        escapeAttr(str) {
            if (str === null || str === undefined) return '';
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }
    };

    let revealedHistoryLayers = [];

    function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Etymology Explorer 📜</h2>
              <p>Unearth the archaeological root tree of vocabulary! Dig through historical strata layers from modern words back to ancient roots.</p>
              <div class="setup-field"><label>Difficulty</label>
                <select class="styled-sel" id="s-level">
                  <option value="easy">Easy (Common roots)</option>
                  <option value="medium">Medium (Loanwords)</option>
                  <option value="hard">Hard (Deep history)</option>
                </select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_GAME.start()">▶ Start journey</button>
            </div>`;
    }

    window.COSY_GAME = {
        async start() {
            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
            const levelVal = document.getElementById('s-level')?.value || 'easy';
            document.getElementById('go-body').innerHTML = '<div style="text-align:center;padding:4rem;">Loading history...</div>';

            await COSYLoader.loadLevelData(lang, 'starter');
            COSYGame.init(GAME_ID, lang, levelVal);
            COSYGame.maxRounds = 10;
            revealedHistoryLayers = [];

            let data = COSYLoader.getGameData(lang);
            if (!data || !data.etymology || data.etymology.length === 0) {
                if (window.gameData && window.gameData[lang]) {
                    data = window.gameData[lang];
                } else if (window.gameData && window.gameData['universal']) {
                    data = window.gameData['universal'];
                }
            }

            let levelMap = {
                'easy': ['easy', 'starter', 'a1', 'a2', 'elementary'],
                'medium': ['medium', 'intermediate', 'b1', 'b2'],
                'hard': ['hard', 'advanced', 'c1', 'c2', 'proficiency']
            };
            let allowedLevels = levelMap[levelVal] || [levelVal];
            let questions = (data.etymology || []).filter(q => !q.level || allowedLevels.includes(q.level.toLowerCase()));

            if (questions.length === 0 && window.gameData && window.gameData['universal'] && window.gameData['universal'].etymology) {
                questions = window.gameData['universal'].etymology.filter(q => !q.level || allowedLevels.includes(q.level.toLowerCase()));
            }

            if (questions.length === 0) {
              questions = [{ word: 'Paper', options: ['Greek', 'Latin', 'Egyptian', 'Chinese'], answer: 'Greek', detail: 'From Greek papyros, referring to the reed used for writing material.', path: 'Modern Paper → French papier → Latin papyrus → Greek papyros', level: 'easy' }];
            }

            const drawBag = gameUtils.createDrawBag(questions);

            const nextQuestion = () => {
                if (!COSYGame.nextRound()) {
                    this.renderEnd();
                    return;
                }

                const q = drawBag.next();
                const body = document.getElementById('go-body');
                const shuffledOptions = shuffle(q.options || ['Greek', 'Latin', 'Germanic']);

                // Parse derivation path steps or fallback to standard 3 layers
                const rawPath = q.path || `Modern ${q.word} → Medieval Form → Ancient Root (${q.answer})`;
                const strataSteps = rawPath.split(/\s*→\s*/).filter(Boolean);

                body.innerHTML = `
                  <div class="score-bar">
                    <div class="sb-item"><div class="sb-val" id="et-score">${COSYGame.score}</div><div class="sb-lbl">Score</div></div>
                    <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Question</div></div>
                  </div>
                  <div class="game-card">
                    <div class="game-label">🏺 Archaeological Dig Site</div>
                    <div class="etymology-word" style="font-size: 2.2rem; font-weight: 800; color: var(--ink); margin: 1rem 0; font-family: 'Fraunces', serif;">${q.word}</div>

                    <!-- Scrollable Strata Dig Layers Container -->
                    <div class="dig-strata-container" id="dig-strata-container">
                      <!-- Layer 1: Modern Word -->
                      <div class="dig-strata-layer revealed">
                        <div class="dig-layer-title">Layer I · Modern</div>
                        <div class="dig-layer-content">${gameUtils.escapeAttr(q.word)}</div>
                      </div>
                      <!-- Layer 2: Intermediate/Hidden Root -->
                      <div class="dig-strata-layer unrevealed" id="strata-layer-2">
                        <div class="dig-layer-title">Layer II · Root</div>
                        <div class="dig-layer-content">🔒 Hidden</div>
                      </div>
                      <!-- Layer 3: Ancient Origin -->
                      <div class="dig-strata-layer unrevealed" id="strata-layer-3">
                        <div class="dig-layer-title">Layer III · Origin</div>
                        <div class="dig-layer-content">🔒 Hidden</div>
                      </div>
                    </div>

                    <!-- Previously Revealed History Log -->
                    ${revealedHistoryLayers.length > 0 ? `
                      <div style="margin: 0.75rem 0; text-align: left;">
                        <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--ink-faint);">Previous Discoveries:</div>
                        <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding: 0.5rem 0;">
                          ${revealedHistoryLayers.map(h => `<span style="background: rgba(180, 83, 9, 0.1); border: 1px solid rgba(180, 83, 9, 0.2); border-radius: 8px; padding: 0.25rem 0.6rem; font-size: 0.8rem; font-weight: 700; color: #78350F;">${gameUtils.escapeAttr(h)}</span>`).join('')}
                        </div>
                      </div>
                    ` : ''}

                    <div class="word-options" style="margin-top: 1rem;">
                      ${shuffledOptions.map(opt => `<button class="word-opt" data-opt="${gameUtils.escapeAttr(opt)}" data-answer="${gameUtils.escapeAttr(q.answer)}" data-detail="${gameUtils.escapeAttr(q.detail)}" data-path="${gameUtils.escapeAttr(q.path || "")}">${opt}</button>`).join('')}
                    </div>
                    <div class="feedback-bar" id="et-fb"></div>
                    <div class="game-controls">
                      <button class="btn-g-primary" id="et-next" style="display:none">Next Word →</button>
                      <button class="btn-g-danger" id="et-reset">⬅ Exit</button>
                    </div>
                  </div>`;

                body.querySelectorAll('.word-opt').forEach(btn => {
                    btn.addEventListener('click', () => {
                        COSY_GAME.guess(btn, btn.dataset.opt, btn.dataset.answer, btn.dataset.detail, btn.dataset.path, q.word, strataSteps);
                    });
                });
                document.getElementById('et-next').addEventListener('click', () => COSY_GAME._nextQ());
                document.getElementById('et-reset').addEventListener('click', () => COSY_GAME.reset());
            };
            window.COSY_GAME._nextQ = nextQuestion;

            window.COSY_GAME.guess = (el, selected, correct, detail, path, word, strataSteps) => {
                document.querySelectorAll('.word-opt').forEach(b => b.disabled = true);
                const fb = document.getElementById('et-fb');
                const next = document.getElementById('et-next');
                if (next) next.style.display = 'inline-block';

                const layer2 = document.getElementById('strata-layer-2');
                const layer3 = document.getElementById('strata-layer-3');

                if (selected === correct) {
                    el.classList.add('correct');

                    // Peel open layers with motion-unfurl and warm sepia gradient
                    if (layer2) {
                      layer2.className = 'dig-strata-layer revealed motion-unfurl';
                      layer2.innerHTML = `<div class="dig-layer-title">Layer II · Root</div><div class="dig-layer-content">${gameUtils.escapeAttr(strataSteps[1] || selected)}</div>`;
                    }
                    if (layer3) {
                      setTimeout(() => {
                        layer3.className = 'dig-strata-layer revealed motion-unfurl';
                        layer3.innerHTML = `<div class="dig-layer-title">Layer III · Origin</div><div class="dig-layer-content">${gameUtils.escapeAttr(strataSteps[strataSteps.length - 1] || correct)}</div>`;
                      }, 250);
                    }

                    revealedHistoryLayers.push(`${word} ➔ ${correct}`);

                    fb.className = 'feedback-bar show ok';
                    fb.innerHTML = `<div>✓ <strong>Unearthed!</strong> ${detail}</div>`;
                    COSYGame.addScore(10);
                    document.getElementById('et-score').textContent = COSYGame.score;
                } else {
                    el.classList.add('wrong');
                    document.querySelectorAll('.word-opt').forEach(b => {
                        if (b.textContent === correct) b.classList.add('correct');
                    });
                    fb.className = 'feedback-bar show bad';
                    fb.innerHTML = `<div>✗ <strong>Actually, it's ${correct}.</strong> ${detail}</div>`;
                }
            };

            nextQuestion();
        },

        renderEnd() {
            const lang = COSYGame.language;
            const level = COSYGame.level;
            if (typeof COSYScores !== 'undefined' && COSYScores.save) {
                COSYScores.save(GAME_ID, lang, level, COSYGame.score);
            }
            const best = (typeof COSYScores !== 'undefined' && COSYScores.best) ? COSYScores.best(GAME_ID, lang) : null;
            const body = document.getElementById('go-body');
            body.innerHTML = `
                <div class="setup-screen">
                  <h2>Journey Complete! 📜</h2>
                  <div class="final-score" style="font-size: 3rem; font-weight: 800; color: var(--teal); margin: 1rem 0;">${COSYGame.score}</div>
                  ${best ? `<div class="game-sub" style="margin-bottom:1rem">Personal best: ${best.score} pts</div>` : ''}
                  <p>You've explored the roots of many words. Keep practicing to become a master etymologist!</p>
                  <div style="display:flex; gap:1rem; justify-content:center; margin-top:2rem;">
                    <button class="btn-start-game" onclick="COSY_GAME.start()">Play Again</button>
                    <button class="btn-g-danger" onclick="COSY_GAME.reset()">Back to Setup</button>
                  </div>
                </div>`;
        },

        reset: renderSetup
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderSetup);
    } else {
        renderSetup();
    }
})();
