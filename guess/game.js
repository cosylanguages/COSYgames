/**
 * games/guess/game.js
 * Unified "Guess!" Mega-Game Engine
 * Supports 6 editions, CEFR level adaptations, and multiplayer host modes (Online, In-Person/Projector, Hybrid)
 */
(function() {
    'use strict';

    const GAME_ID = 'guess';
    const GAME_TITLE = 'Guess! 🔮';
    const LEVEL_OPTS = ['Starter (A1)', 'Primary (A2)', 'Intermediate (B1)', 'Upper (B2)', 'Advanced (C1)', 'Proficiency (C2)'];
    const LANG_OPTS = (window.cosyLanguageLabels && typeof window.cosyLanguageLabels === 'function')
        ? window.cosyLanguageLabels(['en', 'fr', 'es', 'de', 'it', 'ru', 'el'])
        : ['🇬🇧 English', '🇫🇷 Français', '🇪🇸 Español', '🇩🇪 Deutsch', '🇮🇹 Italiano', '🇷🇺 Русский', '🇬🇷 Ελληνικά'];

    function getT() {
        return (window.COSYGameStrings && typeof window.COSYGameStrings.forGame === 'function')
            ? window.COSYGameStrings.forGame('guess')
            : function(key, params, fallback) { return fallback || key; };
    }

    // Audio Chimes with Web Audio API
    let audioCtx = null;
    function playChime(type) {
        try {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);

            const now = audioCtx.currentTime;
            if (type === 'tick') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, now);
                gain.gain.setValueAtTime(0.05, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                osc.start(now);
                osc.stop(now + 0.05);
            } else if (type === 'success') {
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(523.25, now); // C5
                osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
                osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
                osc.start(now);
                osc.stop(now + 0.35);
            } else if (type === 'buzzer') {
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(150, now);
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
                osc.start(now);
                osc.stop(now + 0.3);
            }
        } catch (e) {
            // Audio not allowed or unavailable
        }
    }

    // Core Dataset across 6 Editions and CEFR levels
    const DECKS = {
        who: [
            { word: 'Julius Caesar', level: 'a2', cat: 'historical', clues: ['Ancient Roman statesman and military general.', 'Famously associated with the Ides of March.'], taboo: ['emperor', 'rome', 'brutus', 'senate'] },
            { word: 'Marie Curie', level: 'b1', cat: 'historical', clues: ['Pioneering physicist and chemist.', 'First person to win two Nobel Prizes in distinct sciences.'], taboo: ['radiation', 'science', 'nobel', 'radium'] },
            { word: 'Sherlock Holmes', level: 'a2', cat: 'fictional', clues: ['Legendary consulting detective residing at 221B Baker Street.', 'Possesses unmatched powers of deductive reasoning.'], taboo: ['watson', 'pipe', 'detective', 'london'] },
            { word: 'Zeus', level: 'a1', cat: 'fictional', clues: ['Supreme ruler of Mount Olympus and king of the Greek gods.', 'Wields the thunderbolt as his weapon.'], taboo: ['god', 'olympus', 'lightning', 'greece'] },
            { word: 'Cryptographer', level: 'c1', cat: 'occupations', clues: ['Specialist who crafts and analyzes ciphers and encryption systems.', 'Operates at the intersection of discrete mathematics and information security.'], taboo: ['code', 'cipher', 'secret', 'security'] },
            { word: 'Firefighter', level: 'a1', cat: 'occupations', clues: ['Emergency responder equipped to extinguish blazes.', 'Rescues people and pets from perilous structural hazards.'], taboo: ['fire', 'water', 'hose', 'truck'] },
            { word: 'Ludwig van Beethoven', level: 'b1', cat: 'pop', clues: ['Influential classical and romantic German composer.', 'Created monumental symphonies even after losing his hearing.'], taboo: ['music', 'piano', 'symphony', 'deaf'] }
        ],
        what: [
            { word: 'Whisper', level: 'a2', cat: 'actions', clues: ['To speak very softly using breath rather than vocal cords.', 'Often used when sharing secrets in quiet libraries.'], taboo: ['quiet', 'speak', 'talk', 'voice'] },
            { word: 'Procrastinate', level: 'b2', cat: 'actions', clues: ['To unnecessarily postpone decisions or actions until the eleventh hour.', 'Often fueled by perfectionism or executive fatigue.'], taboo: ['delay', 'later', 'lazy', 'wait'] },
            { word: 'Chameleon', level: 'b1', cat: 'nature', clues: ['Specialized clade of Old World lizards with zygodactylous feet.', 'Famous for shifting dermal pigments to camouflage.'], taboo: ['lizard', 'color', 'camouflage', 'reptile'] },
            { word: 'Volcano', level: 'a2', cat: 'nature', clues: ['Geological rupture through which molten lava, tephra, and steam erupt.', 'Forms towering mountains along tectonic plate boundaries.'], taboo: ['lava', 'eruption', 'mountain', 'magma'] },
            { word: 'Rotary Phone', level: 'b1', cat: 'tech', clues: ['Vintage communication hardware with a circular finger dial.', 'Predecessor to touch-tone keypads and cellular smartphones.'], taboo: ['call', 'dial', 'telephone', 'wire'] },
            { word: 'Bureaucracy', level: 'c1', cat: 'abstract', clues: ['An administrative system governed by official routine, hierarchies, and rigid red tape.', 'Often critiqued for institutional inertia.'], taboo: ['paperwork', 'rules', 'government', 'office'] },
            { word: 'Nostalgia', level: 'b2', cat: 'abstract', clues: ['A bittersweet emotional longing for a bygone era or familiar past memories.', 'Triggered by retro aesthetics, songs, or scent.'], taboo: ['past', 'memories', 'yearning', 'homesick'] }
        ],
        where: [
            { word: 'Colosseum', level: 'a2', cat: 'landmarks', clues: ['Flavian amphitheater located in the heart of Rome.', 'Historically hosted gladiatorial contests and public spectacles.'], taboo: ['rome', 'gladiator', 'italy', 'arena'] },
            { word: 'Mariana Trench', level: 'b2', cat: 'extreme', clues: ['The deepest oceanic trench on planet Earth.', 'Located in the western Pacific with pressures exceeding 1,000 atmospheres.'], taboo: ['ocean', 'deep', 'sea', 'pacific'] },
            { word: 'Bakery', level: 'a1', cat: 'places', clues: ['Establishment that bakes and retails bread, pastries, and croissants.', 'Fills the neighborhood street with aromas of fresh yeast and flour.'], taboo: ['bread', 'cake', 'flour', 'bake'] },
            { word: 'Gotham City', level: 'b1', cat: 'fictional', clues: ['Dark, brooding fictional metropolis teeming with architectural noir.', 'Guarded under darkness by the Caped Crusader.'], taboo: ['batman', 'joker', 'city', 'dc'] }
        ],
        when: [
            { word: 'The Renaissance', level: 'b1', cat: 'eras', clues: ['A fervent period of European cultural, artistic, and scientific rebirth.', 'Bridged the gap between the Middle Ages and modern history.'], taboo: ['art', 'italy', 'davinci', 'rebirth'] },
            { word: 'Winter Solstice', level: 'b2', cat: 'routines', clues: ['Astronomical phenomenon marking the day with the shortest period of daylight.', 'Occurs when one of the Earth’s poles has its maximum tilt away from the Sun.'], taboo: ['winter', 'short', 'sun', 'cold'] },
            { word: 'Diwali', level: 'a2', cat: 'festivals', clues: ['Five-day Hindu festival celebrating the victory of light over darkness.', 'Celebrated with oil lamps, clay diyas, and fireworks.'], taboo: ['lights', 'india', 'festival', 'hindu'] }
        ],
        why: [
            { word: 'Why leaves change color', level: 'b1', cat: 'science', clues: ['Deciduous trees cease chlorophyll production as sunlight wanes.', 'Carotenoids and anthocyanins unmask vibrant yellow and red hues.'], taboo: ['autumn', 'chlorophyll', 'fall', 'green'] },
            { word: 'Why people dream', level: 'b2', cat: 'psychology', clues: ['Neurobiological memory consolidation and threat simulation occurring during REM sleep.', 'Synthesizes subconscious associations and emotions.'], taboo: ['sleep', 'night', 'brain', 'rem'] },
            { word: 'Fall of the Western Roman Empire', level: 'c1', cat: 'history', clues: ['Catalyzed by military overextension, economic instability, and successive migration waves.', 'Culminated in 476 CE when Romulus Augustulus was deposed.'], taboo: ['rome', 'barbarians', 'collapse', 'empire'] }
        ],
        how: [
            { word: 'How Wi-Fi works', level: 'b1', cat: 'inventions', clues: ['High-frequency radio waves transmitting encoded packets between routers and antennas.', 'Operates on standard 2.4 GHz and 5 GHz frequency bands.'], taboo: ['internet', 'wireless', 'router', 'network'] },
            { word: 'How to start a fire without matches', level: 'b2', cat: 'skills', clues: ['Generating sufficient friction or focused sunlight to ignite fine combustible tinder.', 'Utilizes bow drills, flint-and-steel strikers, or optical lenses.'], taboo: ['match', 'spark', 'flame', 'friction'] },
            { word: 'How to bake sourdough bread', level: 'b1', cat: 'crafts', clues: ['Fermenting dough via wild yeast and lactic acid bacteria rather than baker’s yeast.', 'Requires a cultured starter, stretching, proofing, and steam.'], taboo: ['flour', 'starter', 'yeast', 'oven'] }
        ]
    };

    let state = {
        edition: 'who',
        subcat: 'all',
        mode: 'coop', // 'coop', 'taboo', 'riddle'
        playEnv: 'online', // 'online', 'offline', 'hybrid'
        teamA: 0,
        teamB: 0,
        currentCard: null,
        cluesRevealed: 0,
        timerVal: 60,
        timerMax: 60,
        timerInterval: null,
        isShielded: true,
        isRoundOver: false
    };

    function initHostCurtain() {
        const toggleBtn = document.getElementById('btn-host-toggle');
        const toggleText = document.getElementById('host-toggle-text');
        const toggleIcon = document.getElementById('host-toggle-icon');

        function updateBtn() {
            if (state.isShielded) {
                toggleBtn?.classList.remove('revealed');
                if (toggleText) toggleText.textContent = 'Host View: Shielded';
                if (toggleIcon) toggleIcon.textContent = '👁️';
            } else {
                toggleBtn?.classList.add('revealed');
                if (toggleText) toggleText.textContent = 'Host View: Revealed';
                if (toggleIcon) toggleIcon.textContent = '🔓';
            }
            const secretBox = document.getElementById('guess-secret-container');
            if (secretBox) {
                if (state.isShielded) {
                    secretBox.classList.add('guess-secret-shielded');
                } else {
                    secretBox.classList.remove('guess-secret-shielded');
                }
            }
        }

        window.toggleHostCurtain = function() {
            state.isShielded = !state.isShielded;
            updateBtn();
        };

        toggleBtn?.addEventListener('click', window.toggleHostCurtain);

        window.addEventListener('keydown', (e) => {
            // Space or H to toggle privacy curtain when not typing in an input
            if ((e.code === 'KeyH' || (e.code === 'Space' && e.target.tagName !== 'INPUT')) && !e.repeat) {
                if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT') {
                    e.preventDefault();
                    window.toggleHostCurtain();
                }
            }
        });
    }

    function renderSetup() {
        if (typeof COSYLoader !== 'undefined' && COSYLoader.clearLevelNote) {
            COSYLoader.clearLevelNote();
        }
        document.getElementById('go-title').textContent = GAME_TITLE;
        const T = getT();
        const body = document.getElementById('go-body');

        // Check query params for deep linking
        const urlParams = new URLSearchParams(window.location.search);
        const presetEdition = urlParams.get('edition') || 'who';
        const presetSub = urlParams.get('sub') || 'all';
        const presetMode = urlParams.get('playmode') || 'coop';

        body.innerHTML = `
            <div class="guess-setup-container">
                <h2 class="guess-setup-title">Guess! 🔮</h2>
                <p class="guess-setup-subtitle" data-gs="setup.subtitle">${T('setup.subtitle', null, 'The ultimate franchise of mystery, deduction, and vocabulary circumlocution.')}</p>

                <div class="guess-setup-grid">
                    <div class="guess-field">
                        <label data-gs="setup.edition_label">${T('setup.edition_label', null, 'Select Edition')}</label>
                        <select class="guess-select" id="g-edition">
                            <option value="who" ${presetEdition === 'who' ? 'selected' : ''}>Edition 1: Guess Who? (People & Roles)</option>
                            <option value="what" ${presetEdition === 'what' ? 'selected' : ''}>Edition 2: Guess What? (Objects, Concepts & Actions)</option>
                            <option value="where" ${presetEdition === 'where' ? 'selected' : ''}>Edition 3: Guess Where? (Locations & Settings)</option>
                            <option value="when" ${presetEdition === 'when' ? 'selected' : ''}>Edition 4: Guess When? (Time, History & Culture)</option>
                            <option value="why" ${presetEdition === 'why' ? 'selected' : ''}>Edition 5: Guess Why? (Science, Philosophy & Motivations)</option>
                            <option value="how" ${presetEdition === 'how' ? 'selected' : ''}>Edition 6: Guess How? (Processes & Inventions)</option>
                        </select>
                    </div>

                    <div class="guess-field">
                        <label data-gs="setup.mode_label">${T('setup.mode_label', null, 'CEFR Gameplay Mode')}</label>
                        <select class="guess-select" id="g-mode">
                            <option value="coop" ${presetMode === 'coop' ? 'selected' : ''}>Cooperative Clues (A0–A2)</option>
                            <option value="taboo" ${presetMode === 'taboo' ? 'selected' : ''}>Speed Run / Taboo (B1–B2)</option>
                            <option value="riddle" ${presetMode === 'riddle' ? 'selected' : ''}>The Masterclass Riddle (C1–C2)</option>
                        </select>
                    </div>

                    <div class="guess-field">
                        <label data-gs="setup.env_label">${T('setup.env_label', null, 'Play Environment')}</label>
                        <select class="guess-select" id="g-env">
                            <option value="online">💻 Online (Host Screen Share)</option>
                            <option value="offline">📽️ Offline (Classroom Projector / TV)</option>
                            <option value="hybrid">🌐 Hybrid (Combined In-Room & Remote)</option>
                        </select>
                    </div>

                    <div class="guess-field">
                        <label data-i18n="ui_level">Level</label>
                        <select class="guess-select" id="g-level">${window.cosyLevelOptions(LEVEL_OPTS)}</select>
                    </div>

                    <div class="guess-field">
                        <label data-i18n="ui_practice_language">Practice language</label>
                        <select class="guess-select" id="g-lang">${LANG_OPTS.map(l => `<option>${l}</option>`).join('')}</select>
                    </div>
                </div>

                <button class="guess-start-btn" id="btn-start-guess">▶ <span data-i18n="ui_start_game">Start game</span></button>
            </div>
        `;

        document.getElementById('btn-start-guess')?.addEventListener('click', () => {
            state.edition = document.getElementById('g-edition')?.value || 'who';
            state.mode = document.getElementById('g-mode')?.value || 'coop';
            state.playEnv = document.getElementById('g-env')?.value || 'online';
            if (presetSub !== 'all') state.subcat = presetSub;

            // Apply environment context
            if (state.playEnv === 'offline' && window.ViewContext) {
                window.ViewContext.setContext('projector');
            } else if (state.playEnv === 'online' && window.ViewContext) {
                window.ViewContext.setContext('online');
            }

            COSY_GAME.start();
        });
    }

    window.COSY_GAME = {
        start() {
            const T = getT();
            const lang = (window.COSYLoader && typeof window.COSYLoader.getLangCode === 'function')
                ? window.COSYLoader.getLangCode(document.getElementById('g-lang')?.value)
                : 'en';
            const level = (window.COSYLoader && typeof window.COSYLoader.getLevelCode === 'function')
                ? window.COSYLoader.getLevelCode(document.getElementById('g-level')?.value)
                : 'a1';

            COSYGame.init(GAME_ID, lang, level);
            COSYGame.maxRounds = 5;
            state.teamA = 0;
            state.teamB = 0;

            const pool = DECKS[state.edition] || DECKS.who;
            let currentDeck = [...pool];
            if (state.subcat && state.subcat !== 'all') {
                const subFiltered = currentDeck.filter(item => item.cat === state.subcat);
                if (subFiltered.length > 0) currentDeck = subFiltered;
            }

            const nextRound = () => {
                if (state.timerInterval) clearInterval(state.timerInterval);
                if (!COSYGame.nextRound()) {
                    COSY_GAME.renderEnd();
                    return;
                }

                state.currentCard = currentDeck[(COSYGame.round - 1) % currentDeck.length];
                state.cluesRevealed = 1;
                state.isRoundOver = false;
                state.isShielded = true;
                state.timerVal = state.mode === 'taboo' ? 60 : 90;
                state.timerMax = state.timerVal;

                renderRoundUI();
                startTimer();
            };

            function startTimer() {
                if (state.timerInterval) clearInterval(state.timerInterval);
                state.timerInterval = setInterval(() => {
                    if (state.timerVal > 0 && !state.isRoundOver) {
                        state.timerVal--;
                        updateTimerUI();
                        if (state.timerVal <= 5 && state.timerVal > 0) {
                            playChime('tick');
                        }
                    } else if (state.timerVal <= 0 && !state.isRoundOver) {
                        clearInterval(state.timerInterval);
                        playChime('buzzer');
                        handleTimeUp();
                    }
                }, 1000);
            }

            function updateTimerUI() {
                const bar = document.getElementById('guess-timer-bar');
                const text = document.getElementById('guess-timer-text');
                if (bar && text) {
                    const pct = Math.max(0, (state.timerVal / state.timerMax) * 100);
                    bar.style.width = `${pct}%`;
                    text.textContent = `${state.timerVal}s`;
                    if (pct < 25) {
                        bar.className = 'guess-timer-bar danger';
                    } else if (pct < 50) {
                        bar.className = 'guess-timer-bar warning';
                    } else {
                        bar.className = 'guess-timer-bar';
                    }
                }
            }

            function handleTimeUp() {
                state.isRoundOver = true;
                state.isShielded = false;
                renderRoundUI();
            }

            function renderRoundUI() {
                const card = state.currentCard;
                const body = document.getElementById('go-body');

                const editionLabels = {
                    who: 'Edition 1: Guess Who? 👤',
                    what: 'Edition 2: Guess What? 📦',
                    where: 'Edition 3: Guess Where? 📍',
                    when: 'Edition 4: Guess When? ⏳',
                    why: 'Edition 5: Guess Why? 💡',
                    how: 'Edition 6: Guess How? ⚙️'
                };

                const modeLabels = {
                    coop: 'Cooperative (A0–A2) 🤝',
                    taboo: 'Speed Run / Taboo (B1–B2) ⚡',
                    riddle: 'Masterclass Riddle (C1–C2) 🧠'
                };

                body.innerHTML = `
                    <div class="guess-game-wrapper">
                        <div class="guess-status-bar">
                            <span class="guess-edition-pill">${editionLabels[state.edition] || 'Guess!'}</span>
                            <span class="guess-mode-pill">${modeLabels[state.mode] || 'Standard'}</span>
                            <div style="font-weight:600; color:#fbbf24;">
                                Round ${COSYGame.round} / ${COSYGame.maxRounds}
                            </div>
                        </div>

                        <!-- Timer Bar -->
                        <div style="display:flex; align-items:center; gap:0.75rem;">
                            <span style="font-weight:700; min-width:35px; color:#e2e8f0;" id="guess-timer-text">${state.timerVal}s</span>
                            <div class="guess-timer-wrapper">
                                <div class="guess-timer-bar" id="guess-timer-bar" style="width:${(state.timerVal / state.timerMax) * 100}%;"></div>
                            </div>
                        </div>

                        <!-- Mystery Secret Card -->
                        <div class="guess-mystery-card">
                            <div class="guess-secret-container ${state.isShielded ? 'guess-secret-shielded' : ''}" id="guess-secret-container">
                                <div class="guess-secret-shield-msg">🛡️ Host Screen Safe — Press 'H' or Click Host View to Reveal</div>
                                <div class="guess-secret-word">${gameUtils.escapeHtml(card.word)}</div>

                                ${state.mode === 'taboo' ? `
                                    <div class="guess-taboo-box">
                                        <div class="guess-taboo-title">🚫 Taboo Forbidden Words (Do not say!):</div>
                                        <div class="guess-taboo-tags">
                                            ${(card.taboo || []).map(w => `<span class="guess-taboo-tag">${gameUtils.escapeHtml(w)}</span>`).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                            </div>

                            <!-- Clues & Riddles Box -->
                            <div class="guess-clues-section">
                                ${card.clues.slice(0, state.cluesRevealed).map((clue, idx) => `
                                    <div class="guess-clue-card">
                                        <span class="guess-clue-index">Clue #${idx + 1}:</span>
                                        <span>${gameUtils.escapeHtml(clue)}</span>
                                    </div>
                                `).join('')}
                            </div>

                            <!-- Action Controls -->
                            <div class="guess-actions-panel">
                                ${!state.isRoundOver ? `
                                    ${state.cluesRevealed < card.clues.length ? `
                                        <button class="guess-btn guess-btn-warning" id="btn-next-clue">+ <span>Reveal Next Clue</span></button>
                                    ` : ''}
                                    <button class="guess-btn guess-btn-success" id="btn-solved-a">🎉 Team A Got It (+10)</button>
                                    <button class="guess-btn guess-btn-success" id="btn-solved-b" style="background:#0284c7;">🎉 Team B Got It (+10)</button>
                                    <button class="guess-btn guess-btn-danger" id="btn-pass">Pass / Skip →</button>
                                ` : `
                                    <button class="guess-btn guess-btn-success" id="btn-next-round">Next Round →</button>
                                `}
                            </div>
                        </div>

                        <!-- Scoreboard -->
                        <div class="guess-teams-tracker">
                            <div class="guess-team-box">
                                <div class="guess-team-label">Team A</div>
                                <div class="guess-team-score" id="score-team-a">${state.teamA}</div>
                            </div>
                            <div class="guess-team-box">
                                <div class="guess-team-label">Team B</div>
                                <div class="guess-team-score" id="score-team-b">${state.teamB}</div>
                            </div>
                            <div class="guess-team-box">
                                <div class="guess-team-label">Overall Score</div>
                                <div class="guess-team-score">${COSYGame.score}</div>
                            </div>
                        </div>
                    </div>
                `;

                attachRoundEvents(nextRound);
            }

            function attachRoundEvents(nextRoundCallback) {
                document.getElementById('btn-next-clue')?.addEventListener('click', () => {
                    if (state.cluesRevealed < state.currentCard.clues.length) {
                        state.cluesRevealed++;
                        playChime('tick');
                        renderRoundUI();
                    }
                });

                document.getElementById('btn-solved-a')?.addEventListener('click', () => {
                    state.teamA += 10;
                    COSYGame.addScore(10);
                    state.isRoundOver = true;
                    state.isShielded = false;
                    playChime('success');
                    renderRoundUI();
                });

                document.getElementById('btn-solved-b')?.addEventListener('click', () => {
                    state.teamB += 10;
                    COSYGame.addScore(10);
                    state.isRoundOver = true;
                    state.isShielded = false;
                    playChime('success');
                    renderRoundUI();
                });

                document.getElementById('btn-pass')?.addEventListener('click', () => {
                    state.isRoundOver = true;
                    state.isShielded = false;
                    playChime('buzzer');
                    renderRoundUI();
                });

                document.getElementById('btn-next-round')?.addEventListener('click', () => {
                    nextRoundCallback();
                });
            }

            nextRound();
        },

        reset: renderSetup,

        renderEnd() {
            const T = getT();
            const lang = COSYGame.language;
            const level = COSYGame.level;
            if (window.COSYScores && typeof window.COSYScores.save === 'function') {
                COSYScores.save(GAME_ID, lang, level, COSYGame.score);
            }
            const body = document.getElementById('go-body');
            body.innerHTML = `
                <div class="guess-setup-container" style="text-align:center;">
                    <div style="font-size:3rem; margin-bottom:0.5rem;">🏆</div>
                    <h2 class="guess-setup-title">Game Finished!</h2>
                    <p class="guess-setup-subtitle">Great teamwork and deduction across the rounds.</p>
                    <div style="font-size:1.5rem; margin-bottom:1.5rem; color:#fbbf24;">
                        Final Score: <strong>${COSYGame.score}</strong>
                    </div>
                    <div class="guess-teams-tracker" style="margin-bottom:1.5rem;">
                        <div class="guess-team-box">
                            <div class="guess-team-label">Team A</div>
                            <div class="guess-team-score">${state.teamA}</div>
                        </div>
                        <div class="guess-team-box">
                            <div class="guess-team-label">Team B</div>
                            <div class="guess-team-score">${state.teamB}</div>
                        </div>
                    </div>
                    <button class="guess-start-btn" onclick="COSY_GAME.reset()">Play Another Edition ↺</button>
                </div>
            `;
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        initHostCurtain();
        renderSetup();
    });
})();
