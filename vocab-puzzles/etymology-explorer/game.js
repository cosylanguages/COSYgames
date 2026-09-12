/**
 * games/etymology-explorer/game.js
 * Game logic for Etymology Explorer with Archaeological Dig Site Identity,
 * Cross-Language Network Mode, and Word Pairs (False Friends / Doublets) Mode.
 */
(function() {
    const GAME_ID = 'etymology';
    const GAME_TITLE = 'Etymology Explorer 📜';
    const GAME_META = 'Vocabulary & Dig Site · Solo or group';
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

    const ALL_LANG_NAMES = {
        'en': 'English',
        'fr': 'Français',
        'it': 'Italiano',
        'de': 'Deutsch',
        'es': 'Español',
        'ru': 'Русский',
        'el': 'Ελληνικά',
        'pt': 'Português',
        'hy': 'Հայերեն',
        'ka': 'ქართული',
        'ba': 'Башҡортса',
        'tt': 'Татарча',
        'br': 'Brezhoneg'
    };

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

    function renderPathVisualization(pathStr) {
        if (!pathStr) return '';
        const steps = pathStr.split(/\s*→\s*/).filter(Boolean);
        if (steps.length < 3) {
            return `<div style="font-family: monospace; margin-top: 0.5rem; font-size: 0.85rem; opacity: 0.9;">${gameUtils.escapeAttr(pathStr)}</div>`;
        }

        const htmlSteps = steps.map(step => {
            const escaped = gameUtils.escapeAttr(step);
            return `<span style="display: inline-flex; align-items: center; background: rgba(13, 148, 136, 0.12); color: var(--teal); border: 1px solid rgba(13, 148, 136, 0.3); padding: 0.3rem 0.65rem; border-radius: 20px; font-size: 0.85rem; font-weight: 700; white-space: nowrap;">${escaped}</span>`;
        }).join('<span style="color: var(--teal); font-weight: bold; margin: 0 0.35rem; font-size: 1.1rem;">➔</span>');

        return `<div class="path-chips-container" style="display: flex; align-items: center; gap: 0.2rem; flex-wrap: wrap; margin-top: 0.75rem; padding: 0.5rem; background: rgba(255, 255, 255, 0.6); border-radius: 10px; border: 1px solid rgba(0,0,0,0.05);">${htmlSteps}</div>`;
    }

    function loadScript(url, globalKey) {
        return new Promise((resolve) => {
            if (window[globalKey]) {
                resolve(window[globalKey]);
                return;
            }
            const script = document.createElement('script');
            script.src = url;
            script.onload = () => resolve(window[globalKey] || []);
            script.onerror = () => {
                const altUrl = url.startsWith('../') ? url.replace('../', '') : '../' + url;
                const fallbackScript = document.createElement('script');
                fallbackScript.src = altUrl;
                fallbackScript.onload = () => resolve(window[globalKey] || []);
                fallbackScript.onerror = () => resolve([]);
                document.head.appendChild(fallbackScript);
            };
            document.head.appendChild(script);
        });
    }

    function loadNetworkData() {
        return loadScript('../data/shared/etymology_network.js', 'etymologyNetworkData');
    }

    function loadFalseFriendsData() {
        return loadScript('../data/shared/false_friends.js', 'falseFriendsData');
    }

    function loadDoubletsData() {
        return loadScript('../data/shared/doublets.js', 'doubletsData');
    }

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Etymology Explorer 📜</h2>
              <p>Unearth the archaeological root tree of vocabulary! Dig through historical strata layers from modern words back to ancient roots or explore cross-language word networks.</p>
              <div class="setup-field"><label>Game Mode / Difficulty</label>
                <select class="styled-sel" id="s-level">
                  <option value="easy">Easy (Common roots)</option>
                  <option value="medium">Medium (Loanwords)</option>
                  <option value="hard">Hard (Deep history)</option>
                  <option value="network">Language Network 🌐 (Cross-language Cognates)</option>
                  <option value="wordpairs">Word Pairs 👯 (False Friends & Doublets)</option>
                </select>
              </div>
              <div class="setup-field" id="lang-field"><label>Focus Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_GAME.start()">▶ Start journey</button>
            </div>`;

        const levelSel = document.getElementById('s-level');
        const langField = document.getElementById('lang-field');
        if (levelSel && langField) {
            levelSel.addEventListener('change', () => {
                if (levelSel.value === 'network' || levelSel.value === 'wordpairs') {
                    langField.style.display = 'none';
                } else {
                    langField.style.display = 'block';
                }
            });
        }
    }

    window.COSY_GAME = {
        async start() {
            const levelVal = document.getElementById('s-level')?.value || 'easy';
            const body = document.getElementById('go-body');
            body.innerHTML = '<div style="text-align:center;padding:4rem;">Loading history...</div>';

            if (levelVal === 'network') {
                const networkData = await loadNetworkData();
                COSYGame.init(GAME_ID, 'universal', 'network');
                COSYGame.maxRounds = 10;
                revealedHistoryLayers = [];
                this.startNetworkMode(networkData);
                return;
            }

            if (levelVal === 'wordpairs') {
                const ffData = await loadFalseFriendsData();
                const dData = await loadDoubletsData();
                COSYGame.init(GAME_ID, 'universal', 'wordpairs');
                COSYGame.maxRounds = 10;
                revealedHistoryLayers = [];
                this.startWordPairsMode(ffData, dData);
                return;
            }

            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
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
                const shuffledOptions = shuffle(q.options || ['Greek', 'Latin', 'Germanic']);
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

                    <div class="dig-strata-container" id="dig-strata-container">
                      <div class="dig-strata-layer revealed">
                        <div class="dig-layer-title">Layer I · Modern</div>
                        <div class="dig-layer-content">${gameUtils.escapeAttr(q.word)}</div>
                      </div>
                      <div class="dig-strata-layer unrevealed" id="strata-layer-2">
                        <div class="dig-layer-title">Layer II · Root</div>
                        <div class="dig-layer-content">🔒 Hidden</div>
                      </div>
                      <div class="dig-strata-layer unrevealed" id="strata-layer-3">
                        <div class="dig-layer-title">Layer III · Origin</div>
                        <div class="dig-layer-content">🔒 Hidden</div>
                      </div>
                    </div>

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
                const pathViz = renderPathVisualization(path);

                if (selected === correct) {
                    el.classList.add('correct');
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
                    fb.innerHTML = `<div>✓ <strong>Unearthed!</strong> ${detail}</div>${pathViz}`;
                    COSYGame.addScore(10);
                    document.getElementById('et-score').textContent = COSYGame.score;
                } else {
                    el.classList.add('wrong');
                    document.querySelectorAll('.word-opt').forEach(b => {
                        if (b.textContent === correct) b.classList.add('correct');
                    });
                    fb.className = 'feedback-bar show bad';
                    fb.innerHTML = `<div>✗ <strong>Actually, it's ${correct}.</strong> ${detail}</div>${pathViz}`;
                }
            };

            nextQuestion();
        },

        startNetworkMode(networkData) {
            const drawBag = gameUtils.createDrawBag(networkData);
            const body = document.getElementById('go-body');

            const nextNetworkQuestion = () => {
                if (!COSYGame.nextRound()) {
                    this.renderEnd();
                    return;
                }

                const item = drawBag.next();
                const validLangs = item.reflexes.map(r => r.lang);

                const targetReflex = item.reflexes[Math.floor(Math.random() * item.reflexes.length)];
                const targetLangCode = targetReflex.lang;
                const targetLangName = ALL_LANG_NAMES[targetLangCode] || targetLangCode.toUpperCase();
                const targetWord = targetReflex.word;

                const allCodes = Object.keys(ALL_LANG_NAMES);
                const distractorCodes = shuffle(allCodes.filter(c => !validLangs.includes(c))).slice(0, 3);

                const options = shuffle([
                    { code: targetLangCode, name: targetLangName, isCorrect: true },
                    ...distractorCodes.map(c => ({ code: c, name: ALL_LANG_NAMES[c], isCorrect: false }))
                ]);

                body.innerHTML = `
                  <div class="score-bar">
                    <div class="sb-item"><div class="sb-val" id="et-score">${COSYGame.score}</div><div class="sb-lbl">Score</div></div>
                    <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Question</div></div>
                  </div>
                  <div class="game-card">
                    <div class="game-label">🌐 Cross-Language Network</div>
                    <div style="font-size: 0.9rem; font-weight: 700; color: var(--teal); text-transform: uppercase; margin-top: 0.5rem;">Origin: ${gameUtils.escapeAttr(item.rootLanguage)}</div>
                    <div class="etymology-word" style="font-size: 2.2rem; font-weight: 800; color: var(--ink); margin: 0.5rem 0; font-family: 'Fraunces', serif;">${gameUtils.escapeAttr(item.root)}</div>
                    <div style="font-size: 1.1rem; font-style: italic; color: #4B5563; margin-bottom: 1rem;">Meaning: "${gameUtils.escapeAttr(item.meaning)}"</div>

                    <div style="background: rgba(13, 148, 136, 0.08); border: 1px dashed var(--teal); border-radius: 8px; padding: 1rem; margin-bottom: 1.25rem;">
                      <div style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: var(--teal); margin-bottom: 0.25rem;">Cognate Reflex</div>
                      <div style="font-size: 1.5rem; font-weight: 800; color: #111827;">"${gameUtils.escapeAttr(targetWord)}"</div>
                      <div style="font-size: 0.95rem; color: #4B5563; margin-top: 0.25rem;">Which COSY language borrowed this word into its vocabulary?</div>
                    </div>

                    ${revealedHistoryLayers.length > 0 ? `
                      <div style="margin: 0.75rem 0; text-align: left;">
                        <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--ink-faint);">Discovered Connections:</div>
                        <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding: 0.5rem 0;">
                          ${revealedHistoryLayers.map(h => `<span style="background: rgba(13, 148, 136, 0.1); border: 1px solid rgba(13, 148, 136, 0.2); border-radius: 8px; padding: 0.25rem 0.6rem; font-size: 0.8rem; font-weight: 700; color: #0D9488;">${gameUtils.escapeAttr(h)}</span>`).join('')}
                        </div>
                      </div>
                    ` : ''}

                    <div class="word-options" style="margin-top: 1rem;">
                      ${options.map(opt => `<button class="word-opt" data-correct="${opt.isCorrect}">${gameUtils.escapeAttr(opt.name)}</button>`).join('')}
                    </div>
                    <div class="feedback-bar" id="et-fb"></div>
                    <div class="game-controls">
                      <button class="btn-g-primary" id="et-next" style="display:none">Next Connection →</button>
                      <button class="btn-g-danger" id="et-reset">⬅ Exit</button>
                    </div>
                  </div>`;

                body.querySelectorAll('.word-opt').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const isCorrect = btn.dataset.correct === 'true';
                        document.querySelectorAll('.word-opt').forEach(b => b.disabled = true);
                        const fb = document.getElementById('et-fb');
                        const next = document.getElementById('et-next');
                        if (next) next.style.display = 'inline-block';

                        if (isCorrect) {
                            btn.classList.add('correct');
                            revealedHistoryLayers.push(`${targetWord} ➔ ${targetLangName}`);
                            fb.className = 'feedback-bar show ok';
                            fb.innerHTML = `<div>✓ <strong>Connected!</strong> ${gameUtils.escapeAttr(targetWord)} is the ${targetLangName} reflex of ${gameUtils.escapeAttr(item.root)}. ${gameUtils.escapeAttr(item.detail)}</div>`;
                            COSYGame.addScore(10);
                            document.getElementById('et-score').textContent = COSYGame.score;
                        } else {
                            btn.classList.add('wrong');
                            document.querySelectorAll('.word-opt').forEach(b => {
                                if (b.dataset.correct === 'true') b.classList.add('correct');
                            });
                            fb.className = 'feedback-bar show bad';
                            fb.innerHTML = `<div>✗ <strong>Not quite!</strong> "${gameUtils.escapeAttr(targetWord)}" appears in <strong>${targetLangName}</strong> (${gameUtils.escapeAttr(targetReflex.note)}). ${gameUtils.escapeAttr(item.detail)}</div>`;
                        }
                    });
                });

                document.getElementById('et-next').addEventListener('click', () => nextNetworkQuestion());
                document.getElementById('et-reset').addEventListener('click', () => COSY_GAME.reset());
            };

            nextNetworkQuestion();
        },

        startWordPairsMode(falseFriendsData, doubletsData) {
            // Mix false friends and doublets into round pools
            const pool = [];
            (falseFriendsData || []).forEach(item => {
                pool.push({ type: 'false_friend', data: item });
            });
            (doubletsData || []).forEach(item => {
                pool.push({ type: 'doublet', data: item });
            });

            const drawBag = gameUtils.createDrawBag(pool);
            const body = document.getElementById('go-body');

            const nextWordPairQuestion = () => {
                if (!COSYGame.nextRound()) {
                    this.renderEnd();
                    return;
                }

                const current = drawBag.next();
                if (!current) {
                    this.renderEnd();
                    return;
                }

                if (current.type === 'false_friend') {
                    const item = current.data;
                    const langA = ALL_LANG_NAMES[item.wordA.lang] || item.wordA.lang.toUpperCase();
                    const langB = ALL_LANG_NAMES[item.wordB.lang] || item.wordB.lang.toUpperCase();
                    const isCognate = item.relation === 'cognate-but-diverged';

                    const options = shuffle([
                        { text: 'Yes, they share an etymological root', isCorrect: isCognate },
                        { text: 'No, they are false friends with different roots', isCorrect: !isCognate }
                    ]);

                    body.innerHTML = `
                      <div class="score-bar">
                        <div class="sb-item"><div class="sb-val" id="et-score">${COSYGame.score}</div><div class="sb-lbl">Score</div></div>
                        <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Question</div></div>
                      </div>
                      <div class="game-card">
                        <div class="game-label">👯 Word Pairs · False Friends Challenge</div>
                        <div style="font-size: 1.1rem; margin-top: 0.5rem; color: #4B5563;">Are these two words etymologically related?</div>

                        <div style="display: flex; gap: 1rem; margin: 1rem 0; justify-content: center; align-items: stretch;">
                          <div style="flex: 1; background: rgba(13, 148, 136, 0.08); border: 1px solid var(--teal); border-radius: 8px; padding: 1rem;">
                            <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--teal);">${gameUtils.escapeAttr(langA)}</div>
                            <div style="font-size: 1.5rem; font-weight: 800; color: #111827;">${gameUtils.escapeAttr(item.wordA.word)}</div>
                            <div style="font-size: 0.85rem; color: #6B7280; font-style: italic;">"${gameUtils.escapeAttr(item.wordA.meaning)}"</div>
                          </div>
                          <div style="flex: 1; background: rgba(180, 83, 9, 0.08); border: 1px solid #D97706; border-radius: 8px; padding: 1rem;">
                            <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: #B45309;">${gameUtils.escapeAttr(langB)}</div>
                            <div style="font-size: 1.5rem; font-weight: 800; color: #111827;">${gameUtils.escapeAttr(item.wordB.word)}</div>
                            <div style="font-size: 0.85rem; color: #6B7280; font-style: italic;">"${gameUtils.escapeAttr(item.wordB.meaning)}"</div>
                          </div>
                        </div>

                        <div class="word-options" style="margin-top: 1rem;">
                          ${options.map(opt => `<button class="word-opt" data-correct="${opt.isCorrect}">${gameUtils.escapeAttr(opt.text)}</button>`).join('')}
                        </div>
                        <div class="feedback-bar" id="et-fb"></div>
                        <div class="game-controls">
                          <button class="btn-g-primary" id="et-next" style="display:none">Next Pair →</button>
                          <button class="btn-g-danger" id="et-reset">⬅ Exit</button>
                        </div>
                      </div>`;

                    body.querySelectorAll('.word-opt').forEach(btn => {
                        btn.addEventListener('click', () => {
                            const isCorrect = btn.dataset.correct === 'true';
                            document.querySelectorAll('.word-opt').forEach(b => b.disabled = true);
                            const fb = document.getElementById('et-fb');
                            const next = document.getElementById('et-next');
                            if (next) next.style.display = 'inline-block';

                            if (isCorrect) {
                                btn.classList.add('correct');
                                fb.className = 'feedback-bar show ok';
                                fb.innerHTML = `<div>✓ <strong>Correct!</strong> ${gameUtils.escapeAttr(item.detail)}</div>`;
                                COSYGame.addScore(10);
                                document.getElementById('et-score').textContent = COSYGame.score;
                            } else {
                                btn.classList.add('wrong');
                                document.querySelectorAll('.word-opt').forEach(b => {
                                    if (b.dataset.correct === 'true') b.classList.add('correct');
                                });
                                fb.className = 'feedback-bar show bad';
                                fb.innerHTML = `<div>✗ <strong>Not quite!</strong> ${gameUtils.escapeAttr(item.detail)}</div>`;
                            }
                        });
                    });
                } else {
                    const item = current.data;
                    const langName = ALL_LANG_NAMES[item.language] || item.language.toUpperCase();
                    const shuffledOpts = shuffle(item.options);

                    body.innerHTML = `
                      <div class="score-bar">
                        <div class="sb-item"><div class="sb-val" id="et-score">${COSYGame.score}</div><div class="sb-lbl">Score</div></div>
                        <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Question</div></div>
                      </div>
                      <div class="game-card">
                        <div class="game-label">👯 Word Pairs · Etymological Doublets (${gameUtils.escapeAttr(langName)})</div>
                        <div style="font-size: 1.1rem; margin-top: 0.5rem; color: #4B5563;">What is the shared ancestral root of these two doublets?</div>

                        <div style="display: flex; gap: 1rem; margin: 1rem 0; justify-content: center; align-items: center; background: rgba(99, 102, 241, 0.08); border: 1px dashed #6366F1; border-radius: 8px; padding: 1rem;">
                          <div style="font-size: 1.8rem; font-weight: 800; color: #4338CA;">"${gameUtils.escapeAttr(item.wordA)}"</div>
                          <div style="font-size: 1.5rem; font-weight: 800; color: #6366F1;">&amp;</div>
                          <div style="font-size: 1.8rem; font-weight: 800; color: #4338CA;">"${gameUtils.escapeAttr(item.wordB)}"</div>
                        </div>

                        <div class="word-options" style="margin-top: 1rem;">
                          ${shuffledOpts.map(opt => `<button class="word-opt" data-opt="${gameUtils.escapeAttr(opt)}" data-correct="${opt === item.commonRoot}">${gameUtils.escapeAttr(opt)}</button>`).join('')}
                        </div>
                        <div class="feedback-bar" id="et-fb"></div>
                        <div class="game-controls">
                          <button class="btn-g-primary" id="et-next" style="display:none">Next Pair →</button>
                          <button class="btn-g-danger" id="et-reset">⬅ Exit</button>
                        </div>
                      </div>`;

                    body.querySelectorAll('.word-opt').forEach(btn => {
                        btn.addEventListener('click', () => {
                            const isCorrect = btn.dataset.correct === 'true';
                            document.querySelectorAll('.word-opt').forEach(b => b.disabled = true);
                            const fb = document.getElementById('et-fb');
                            const next = document.getElementById('et-next');
                            if (next) next.style.display = 'inline-block';

                            if (isCorrect) {
                                btn.classList.add('correct');
                                fb.className = 'feedback-bar show ok';
                                fb.innerHTML = `<div>✓ <strong>Correct Root!</strong> ${gameUtils.escapeAttr(item.detail)}</div>`;
                                COSYGame.addScore(10);
                                document.getElementById('et-score').textContent = COSYGame.score;
                            } else {
                                btn.classList.add('wrong');
                                document.querySelectorAll('.word-opt').forEach(b => {
                                    if (b.dataset.correct === 'true') b.classList.add('correct');
                                });
                                fb.className = 'feedback-bar show bad';
                                fb.innerHTML = `<div>✗ <strong>Shared Root: ${gameUtils.escapeAttr(item.commonRoot)}.</strong> ${gameUtils.escapeAttr(item.detail)}</div>`;
                            }
                        });
                    });
                }

                document.getElementById('et-next').addEventListener('click', () => nextWordPairQuestion());
                document.getElementById('et-reset').addEventListener('click', () => COSY_GAME.reset());
            };

            nextWordPairQuestion();
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
                  <p>You've explored the roots and connections of many words across languages!</p>
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
