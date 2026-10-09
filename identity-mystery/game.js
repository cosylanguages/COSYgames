/**
 * games/identity-mystery/game.js
 * Standalone logic for Identity Mystery with Detective Corkboard & Silhouette Unmasking.
 */
(function() {
    const GAME_ID = 'identity';
    const GAME_TITLE = 'Identity Mystery 🕵️';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = window.cosyLanguageLabels(["en","fr","es","de","it","ru","el"]);

    function getT() {
        return (window.COSYGameStrings && typeof window.COSYGameStrings.forGame === 'function')
            ? window.COSYGameStrings.forGame('identity-mystery')
            : function(key, params, fallback) { return fallback || key; };
    }

    function renderSetup() {
        if (typeof COSYLoader !== 'undefined' && COSYLoader.clearLevelNote) {
            COSYLoader.clearLevelNote();
        }
        document.getElementById('go-title').textContent = GAME_TITLE;
        const T = getT();
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Identity Mystery 🕵️</h2>
              <p data-gs="setup.description">${T('setup.description', null, 'A profession or person is hidden in shadow on the detective corkboard. Record descriptive clues or questions to gradually unmask the mystery silhouette!')}</p>
              <div class="setup-field"><label data-gs="common.category">${T('common.category', null, 'Category')}</label>
                <select class="styled-sel" id="s-cat">
                  <option value="all" data-gs="cat.all">${T('cat.all', null, 'All categories')}</option>
                  <option value="people" data-gs="cat.people">${T('cat.people', null, 'Famous People 🌟')}</option>
                  <option value="jobs" data-gs="cat.jobs">${T('cat.jobs', null, 'Jobs & Professions 💼')}</option>
                  <option value="nationalities" data-gs="cat.nationalities">${T('cat.nationalities', null, 'Nationalities 🌍')}</option>
                </select>
              </div>
              <div class="setup-field"><label data-i18n="ui_level">Level</label>
                <select class="styled-sel" id="s-level">${window.cosyLevelOptions(LEVEL_OPTS)}</select>
              </div>
              <div class="setup-field"><label data-i18n="ui_practice_language">Practice language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" id="btn-start-game">▶ <span data-i18n="ui_start_game">Start game</span></button>
            </div>`;
        document.getElementById('btn-start-game')?.addEventListener('click', () => COSY_GAME.start());
    }

    window.COSY_GAME = {
        async start() {
            const T = getT();
            const lang = (window.COSYLoader && typeof window.COSYLoader.getLangCode === 'function')
                ? window.COSYLoader.getLangCode(document.getElementById('s-lang')?.value)
                : 'en';
            const level = (window.COSYLoader && typeof window.COSYLoader.getLevelCode === 'function')
                ? window.COSYLoader.getLevelCode(document.getElementById('s-level')?.value)
                : 'a1';
            const category = document.getElementById('s-cat')?.value || 'all';

            try {
                if (window.COSYLoader && typeof window.COSYLoader.loadLevelData === 'function') {
                    await window.COSYLoader.loadLevelData(lang, level, 'identity');
                }
            } catch (err) {
                console.warn('Level data fetch fallback', err);
            }

            COSYGame.init(GAME_ID, lang, level);
            COSYGame.maxRounds = 5;

            const data = (window.COSYLoader && typeof window.COSYLoader.getGameData === 'function') ? (window.COSYLoader.getGameData(lang) || {}) : {};
            const rawIdentity = data.identity;
            const lv = COSYLoader.pickByLevel(rawIdentity, level, {min: COSYGame.maxRounds});
            const filteredIdentity = (lv.items && lv.items.length > 0) ? lv.items : (rawIdentity || []);

            const fileMatchMap = {
                jobs: ['jobs'],
                nationalities: ['nationalit'],
                people: ['people'],
                all: ['jobs', 'nationalit', 'people']
            };
            const fileMatch = fileMatchMap[category] || fileMatchMap.all;

            const rawLevelSelect = document.getElementById('s-level')?.value;
            const reqLevelCode = window.COSYVocab ? COSYVocab.levelCode(rawLevelSelect) : level;
            const vres = window.COSYVocab ? await COSYVocab.ensureFull(lang, reqLevelCode, { fileMatch, min: 8, forms: ['noun', 'adjective'], maxFiles: 6 }) : { ok: false };

            if (typeof COSYLoader !== 'undefined') {
                if (lv.limited || vres.widened) {
                    COSYLoader.showLevelNote(COSYLoader.levelNoteText());
                } else {
                    COSYLoader.clearLevelNote();
                }
            }

            const vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];
            let pool = [...filteredIdentity];

            if (vocab.length > 0) {
                const themeIncludes = (theme, sub) => {
                    if (!theme) return false;
                    if (typeof theme === 'string') return theme.toLowerCase().includes(sub.toLowerCase());
                    if (Array.isArray(theme)) return theme.some(t => typeof t === 'string' && t.toLowerCase().includes(sub.toLowerCase()));
                    return false;
                };

                const isClueValid = (clueText, answerWord) => {
                    if (!clueText || !clueText.trim()) return false;
                    const word = (answerWord || '').trim().toLowerCase();
                    if (word && clueText.toLowerCase().includes(word)) return false;
                    return true;
                };

                if (category === 'jobs' || category === 'all') {
                    const jobs = vocab.filter(v => themeIncludes(v.theme, 'job') || themeIncludes(v.theme, 'profession'))
                        .map(v => {
                            const person = window.COSYVocab ? COSYVocab.joinArticle(v.article, v.word) : ((v.article ? v.article + ' ' : '') + v.word);
                            const clue = v.definitions?.[0]?.text || '';
                            return { person, clue, word: v.word };
                        })
                        .filter(item => isClueValid(item.clue, item.word))
                        .map(item => ({ person: item.person, clue: item.clue }));
                    pool = [...pool, ...jobs];
                }
                if (category === 'people' || category === 'all') {
                    const people = vocab.filter(v => themeIncludes(v.theme, 'people') || themeIncludes(v.theme, 'person'))
                        .map(v => {
                            const person = v.word;
                            const clue = v.subtext || v.definitions?.[0]?.text || '';
                            return { person, clue, word: v.word };
                        })
                        .filter(item => isClueValid(item.clue, item.word))
                        .map(item => ({ person: item.person, clue: item.clue }));
                    pool = [...pool, ...people];
                }
                if (category === 'nationalities' || category === 'all') {
                    const nationals = vocab.filter(v => themeIncludes(v.theme, 'nationalit'))
                        .map(v => {
                            const person = v.word;
                            const clue = v.definitions?.[0]?.text || '';
                            return { person, clue, word: v.word };
                        })
                        .filter(item => isClueValid(item.clue, item.word))
                        .map(item => ({ person: item.person, clue: item.clue }));
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

                    const calcPercent = Math.min(100, Math.round((1 - blurPx / 18) * 100));

                    body.innerHTML = `
                      <div class="im-corkboard-wrapper">
                        <div class="im-header-bar">
                          <div class="score-display">
                            <strong data-gs="common.score">${T('common.score', null, 'Score')}</strong>: <span class="score-value" id="im-score">${COSYGame.score}</span> |
                            <strong data-gs="common.round">${T('common.round', null, 'Round')}</strong>: ${COSYGame.round}/${COSYGame.maxRounds}
                          </div>
                          <div style="font-size:0.9rem; color:var(--im-teal-string); font-weight:600;">
                            🕵️ <span data-gs="play.pinboard_title">${T('play.pinboard_title', { count: cluesList.length }, `Clues Pinboard (${cluesList.length} pinned)`)}</span>
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
                              <div class="im-portrait-title">${isRevealed ? gameUtils.escapeHtml(identity.person) : T('play.mystery_person', null, '??? Mystery Person')}</div>
                              <div class="im-portrait-status">${isRevealed ? T('play.unmasked_status', null, '🎉 Identity Unmasked!') : T('play.clarity_status', { percent: calcPercent }, `Clarity: ${calcPercent}%`)}</div>
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
                                  <div class="im-clue-num">${T('play.clue_num', { n: idx + 1 }, `Clue #${idx + 1}`)}</div>
                                  <div class="im-clue-text">${gameUtils.escapeHtml(clueText)}</div>
                                </div>
                              `;
                            }).join('')}
                          </div>
                        </div>

                        <!-- Action Controls -->
                        <div class="im-action-panel">
                          ${!isRevealed ? `
                            <div class="im-input-group">
                              <input type="text" id="im-clue-input" class="im-clue-input" placeholder="${gameUtils.escapeAttr(T('placeholder.clue_input', null, 'Enter a descriptive clue or question answer...'))}" />
                              <button class="btn-g-primary" id="im-btn-add-clue">+ <span data-gs="btn.pin_clue">${T('btn.pin_clue', null, 'Pin Clue')}</span></button>
                            </div>
                            <div class="im-controls-row">
                              <button class="btn-g-secondary" id="im-btn-question">+ <span data-gs="btn.record_question">${T('btn.record_question', { questions, max: maxQ }, `Record Question (${questions}/${maxQ})`)}</span></button>
                              <button class="btn-g-primary" id="im-btn-reveal" style="background:#0f766e; border-color:#14b8a6;">🎉 <span data-gs="btn.unmask_identity">${T('btn.unmask_identity', null, 'Unmask Identity')}</span></button>
                              <button class="btn-g-danger" id="im-btn-skip"><span data-gs="btn.skip_round">${T('btn.skip_round', null, 'Skip Round')}</span> →</button>
                            </div>
                          ` : `
                            <div class="im-controls-row" style="justify-content: center;">
                              <button class="btn-g-primary" id="im-btn-next-round"><span data-gs="btn.next_mystery">${T('btn.next_mystery', null, 'Next Mystery')}</span> →</button>
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
            const T = getT();
            const lang = COSYGame.language;
            const level = COSYGame.level;
            if (window.COSYScores && typeof window.COSYScores.save === 'function') {
                COSYScores.save(GAME_ID, lang, level, COSYGame.score);
            }
            const best = (window.COSYScores && typeof window.COSYScores.best === 'function') ? COSYScores.best(GAME_ID, lang) : null;
            document.getElementById('go-body').innerHTML = `
                <div class="round-end" style="background:var(--im-corkboard-bg); border:2px solid var(--im-corkboard-border); border-radius:16px; padding:2rem; text-align:center; color:#f8fafc;">
                    <div class="re-icon">🏆</div>
                    <div class="re-title" style="font-family:var(--cg-font-heading); font-size:1.8rem; margin:0.5rem 0;" data-gs="end.title">${T('end.title', null, 'Case Files Closed!')}</div>
                    <div class="re-sub" style="font-size:1.1rem; margin-bottom:1rem;">${T('common.final_score', { score: `<strong>${COSYGame.score}</strong>` }, `Final Score: <strong>${COSYGame.score}</strong>`)}</div>
                    ${best ? `<div class="game-sub" style="color:var(--im-teal-string); margin-bottom:1.5rem">${T('common.personal_best', { score: best.score }, `Personal best: ${best.score} pts`)}</div>` : ''}
                    <div class="re-actions" style="display:flex; justify-content:center; gap:1rem;">
                        <button class="btn-g-primary" onclick="COSY_GAME.start()"><span data-gs="btn.solve_more">${T('btn.solve_more', null, 'Solve More Mysteries')}</span> ↺</button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.reset()"><span data-gs="common.btn_setup">${T('common.btn_setup', null, 'Setup')}</span></button>
                    </div>
                </div>`;
        }
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
