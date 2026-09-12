/**
 * games/identity-mystery/game.js
 * Standalone logic for Identity Mystery with Detective Corkboard & Silhouette Unmasking.
 */
(function() {
    const GAME_ID = 'identity';
    const GAME_TITLE = 'Identity Mystery 🕵️';
    const GAME_META = 'Detective Corkboard · Solo or group';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Identity Mystery 🕵️</h2>
              <p>A profession or person is hidden in shadow on the detective corkboard. Record descriptive clues or questions to gradually unmask the mystery silhouette!</p>
              <div class="setup-field"><label>Category</label>
                <select class="styled-sel" id="s-cat">
                  <option value="all">All categories</option>
                  <option value="people">Famous People 🌟</option>
                  <option value="jobs">Jobs & Professions 💼</option>
                  <option value="nationalities">Nationalities 🌍</option>
                </select>
              </div>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level">${LEVEL_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" id="btn-start-game">▶ Start Game</button>
            </div>`;
        document.getElementById('btn-start-game')?.addEventListener('click', () => COSY_GAME.start());
    }

    window.COSY_GAME = {
        async start() {
            const lang = (window.COSYLoader && typeof window.COSYLoader.getLangCode === 'function')
                ? window.COSYLoader.getLangCode(document.getElementById('s-lang')?.value)
                : 'en';
            const level = (window.COSYLoader && typeof window.COSYLoader.getLevelCode === 'function')
                ? window.COSYLoader.getLevelCode(document.getElementById('s-level')?.value)
                : 'a1';
            const category = document.getElementById('s-cat')?.value || 'all';

            try {
                if (window.COSYLoader && typeof window.COSYLoader.loadLevelData === 'function') {
                    await window.COSYLoader.loadLevelData(lang, level);
                }
            } catch (err) {
                console.warn('Level data fetch fallback', err);
            }

            COSYGame.init(GAME_ID, lang, level);
            COSYGame.maxRounds = 5;

            const data = (window.COSYLoader && typeof window.COSYLoader.getGameData === 'function') ? (window.COSYLoader.getGameData(lang) || {}) : {};
            const vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];
            let pool = (data && data.identity) ? [...data.identity] : [];

            if (vocab.length > 0) {
                if (category === 'jobs' || category === 'all') {
                    const jobs = vocab.filter(v => v.theme && (v.theme.includes('professions') || v.theme.includes('job')))
                        .map(v => ({ person: (v.article ? v.article + ' ' : '') + v.word, clue: v.definitions?.[0]?.text || '' }));
                    pool = [...pool, ...jobs];
                }
                if (category === 'people' || category === 'all') {
                    const people = vocab.filter(v => v.theme && (v.theme.includes('people') || v.theme.includes('person')))
                        .map(v => ({ person: v.word, clue: v.subtext || v.definitions?.[0]?.text || '' }));
                    pool = [...pool, ...people];
                }
                if (category === 'nationalities' || category === 'all') {
                    const nationals = vocab.filter(v => v.theme && v.theme.includes('nationality'))
                        .map(v => ({ person: v.word, clue: v.definitions?.[0]?.text || '' }));
                    pool = [...pool, ...nationals];
                }
            }

            const uniquePool = [];
            const seen = new Set();
            pool.forEach(item => {
                if (item && item.person && !seen.has(item.person) && item.person !== '...') {
                    uniquePool.push(item);
                    seen.add(item.person);
                }
            });

            const createDrawBag = (window.gameUtils && typeof window.gameUtils.createDrawBag === 'function')
                ? window.gameUtils.createDrawBag
                : (window.COSYUtils && typeof window.COSYUtils.createDrawBag === 'function')
                    ? window.COSYUtils.createDrawBag
                    : (arr) => {
                        let items = [...arr];
                        return {
                            next: () => {
                                if (!items.length) items = [...arr];
                                return items.shift() || { person: 'Detective', clue: 'Investigates mysteries and solves cases.' };
                            }
                        };
                    };

            const drawBag = createDrawBag(uniquePool.length ? uniquePool : [{person:'Detective', clue:'Investigates mysteries and solves cases.'}]);

            const nextIM = () => {
                if (!COSYGame.nextRound()) {
                    COSY_GAME.renderEnd();
                    return;
                }
                const identity = drawBag.next();
                const body = document.getElementById('go-body');
                let questions = 0, maxQ = 10;
                let cluesList = identity.clue ? [identity.clue] : [];
                let isRevealed = false;
                let newestCardIndex = -1;

                function renderRoundUI() {
                    const blurPx = isRevealed ? 0 : Math.max(0, 18 - (cluesList.length * 3));
                    const isPhone = document.documentElement.dataset.context === 'phone';

                    body.innerHTML = `
                      <div class="im-corkboard-wrapper">
                        <div class="im-header-bar">
                          <div class="score-display">
                            <strong>Score:</strong> <span class="score-value" id="im-score">${COSYGame.score}</span> |
                            <strong>Round:</strong> ${COSYGame.round}/${COSYGame.maxRounds}
                          </div>
                          <div style="font-size:0.9rem; color:var(--im-teal-string); font-weight:600;">
                            🕵️ Clues Pinboard (${cluesList.length} pinned)
                          </div>
                        </div>

                        <div class="im-corkboard" id="im-corkboard">
                          <svg class="im-svg-overlay" id="im-svg-overlay"></svg>

                          <!-- Central Portrait Card -->
                          <div class="im-portrait-card ${isRevealed ? 'im-portrait-revealed' : ''}" id="im-portrait-card">
                            <div class="im-portrait-pin" id="im-portrait-pin"></div>
                            <div class="im-portrait-frame">
                              <div class="im-portrait-silhouette" style="filter: blur(${blurPx}px) ${isRevealed ? 'contrast(100%)' : 'contrast(180%) brightness(40%)'};">
                                <svg class="im-silhouette-svg" viewBox="0 0 24 24">
                                  <path d="M12 2a5 5 0 0 0-5 5c0 2.76 2.24 5 5 5s5-2.24 5-5a5 5 0 0 0-5-5zm0 12c-4.42 0-8 2.24-8 5v3h16v-3c0-2.76-3.58-5-8-5z"/>
                                </svg>
                              </div>
                            </div>
                            <div class="im-portrait-info">
                              <div class="im-portrait-title">${isRevealed ? identity.person : '??? Mystery Person'}</div>
                              <div class="im-portrait-status">${isRevealed ? '🎉 Identity Unmasked!' : `Clarity: ${Math.min(100, Math.round((1 - blurPx / 18) * 100))}%`}</div>
                            </div>
                          </div>

                          <!-- Clues Pinned List / Grid -->
                          <div class="im-clues-container" id="im-clues-container">
                            ${cluesList.map((clueText, idx) => {
                              const rot = ((idx * 7) % 11) - 5;
                              const isNew = idx === newestCardIndex;
                              return `
                                <div class="im-clue-card" style="--rotation: ${rot};" id="im-clue-card-${idx}">
                                  <div class="im-card-pin ${isNew ? 'motion-pin-drop' : ''}" id="im-card-pin-${idx}"></div>
                                  <div class="im-clue-num">Clue #${idx + 1}</div>
                                  <div class="im-clue-text">${clueText}</div>
                                </div>
                              `;
                            }).join('')}
                          </div>
                        </div>

                        <!-- Action Controls -->
                        <div class="im-action-panel">
                          ${!isRevealed ? `
                            <div class="im-input-group">
                              <input type="text" id="im-clue-input" class="im-clue-input" placeholder="Enter a descriptive clue or question answer..." />
                              <button class="btn-g-primary" id="im-btn-add-clue">+ Pin Clue</button>
                            </div>
                            <div class="im-controls-row">
                              <button class="btn-g-secondary" id="im-btn-question">+ Record Question (${questions}/${maxQ})</button>
                              <button class="btn-g-primary" id="im-btn-reveal" style="background:#0f766e; border-color:#14b8a6;">🎉 Unmask Identity</button>
                              <button class="btn-g-danger" id="im-btn-skip">Skip Round →</button>
                            </div>
                          ` : `
                            <div class="im-controls-row" style="justify-content: center;">
                              <button class="btn-g-primary" id="im-btn-next-round">Next Mystery →</button>
                            </div>
                          `}
                        </div>
                      </div>
                    `;

                    attachEvents();
                    setTimeout(updateStringLines, 50);
                }

                function drawStrings() {
                    const svg = document.getElementById('im-svg-overlay');
                    const portraitPin = document.getElementById('im-portrait-pin');
                    const corkboard = document.getElementById('im-corkboard');
                    if (!svg || !portraitPin || !corkboard) return;

                    const boardRect = corkboard.getBoundingClientRect();
                    const pPinRect = portraitPin.getBoundingClientRect();
                    const px = (pPinRect.left + pPinRect.width / 2) - boardRect.left;
                    const py = (pPinRect.top + pPinRect.height / 2) - boardRect.top;

                    svg.innerHTML = '';

                    const totalClues = cluesList.length;
                    const maxActiveStrings = 5;

                    cluesList.forEach((_, idx) => {
                        const cardPin = document.getElementById(`im-card-pin-${idx}`);
                        if (!cardPin) return;
                        const cPinRect = cardPin.getBoundingClientRect();
                        const cx = (cPinRect.left + cPinRect.width / 2) - boardRect.left;
                        const cy = (cPinRect.top + cPinRect.height / 2) - boardRect.top;

                        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                        line.setAttribute('x1', px);
                        line.setAttribute('y1', py);
                        line.setAttribute('x2', cx);
                        line.setAttribute('y2', cy);

                        // Cap concurrently visible active strings at ~5, fade older ones
                        const isRecent = idx >= (totalClues - maxActiveStrings);
                        line.setAttribute('class', `im-string-line ${isRecent ? 'active-recent' : 'faded-old'}`);
                        svg.appendChild(line);
                    });
                }

                function updateStringLines() {
                    if (document.documentElement.dataset.context === 'phone') {
                        const svg = document.getElementById('im-svg-overlay');
                        if (svg) svg.innerHTML = '';
                        return;
                    }
                    drawStrings();
                }

                function addClue(text) {
                    if (!text || !text.trim()) return;
                    cluesList.push(text.trim());
                    questions++;
                    newestCardIndex = cluesList.length - 1;
                    renderRoundUI();
                }

                function attachEvents() {
                    const addBtn = document.getElementById('im-btn-add-clue');
                    const inputEl = document.getElementById('im-clue-input');
                    if (addBtn && inputEl) {
                        const handleAdd = () => {
                            if (inputEl.value) {
                                addClue(inputEl.value);
                            }
                        };
                        addBtn.addEventListener('click', handleAdd);
                        inputEl.addEventListener('keypress', (e) => {
                            if (e.key === 'Enter') handleAdd();
                        });
                    }

                    const qBtn = document.getElementById('im-btn-question');
                    if (qBtn) {
                        qBtn.addEventListener('click', () => {
                            questions++;
                            newestCardIndex = -1;
                            if (questions >= maxQ) {
                                unmask();
                            } else {
                                renderRoundUI();
                            }
                        });
                    }

                    const revBtn = document.getElementById('im-btn-reveal');
                    if (revBtn) {
                        revBtn.addEventListener('click', () => unmask());
                    }

                    const skipBtn = document.getElementById('im-btn-skip');
                    if (skipBtn) {
                        skipBtn.addEventListener('click', () => nextIM());
                    }

                    const nextBtn = document.getElementById('im-btn-next-round');
                    if (nextBtn) {
                        nextBtn.addEventListener('click', () => nextIM());
                    }

                    window.removeEventListener('resize', updateStringLines);
                    window.addEventListener('resize', updateStringLines);
                }

                function unmask() {
                    if (isRevealed) return;
                    isRevealed = true;
                    COSYGame.addScore(Math.max(10, (maxQ - questions) * 5 + 10));
                    renderRoundUI();
                }

                renderRoundUI();
            };

            nextIM();
        },

        reset: renderSetup,

        renderEnd() {
            const lang = COSYGame.language;
            const level = COSYGame.level;
            COSYScores.save(GAME_ID, lang, level, COSYGame.score);
            const best = COSYScores.best(GAME_ID, lang);
            document.getElementById('go-body').innerHTML = `
                <div class="round-end" style="background:var(--im-corkboard-bg); border:2px solid var(--im-corkboard-border); border-radius:16px; padding:2rem; text-align:center; color:#f8fafc;">
                    <div class="re-icon">🏆</div>
                    <div class="re-title" style="font-family:var(--cg-font-heading); font-size:1.8rem; margin:0.5rem 0;">Case Files Closed!</div>
                    <div class="re-sub" style="font-size:1.1rem; margin-bottom:1rem;">Final Score: <strong>${COSYGame.score}</strong></div>
                    ${best ? `<div class="game-sub" style="color:var(--im-teal-string); margin-bottom:1.5rem">Personal best: ${best.score} pts</div>` : ''}
                    <div class="re-actions" style="display:flex; justify-content:center; gap:1rem;">
                        <button class="btn-g-primary" onclick="COSY_GAME.start()">Solve More Mysteries ↺</button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.reset()">Setup</button>
                    </div>
                </div>`;
        }
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
