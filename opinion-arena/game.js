/**
 * games/opinion-arena/game.js
 * Standalone logic for Opinion Arena - Two-Podium Debate Arena with Shared Tug-of-War Meter.
 */
(function() {
    const GAME_ID = 'opinion';
    const GAME_TITLE = 'Opinion Arena 🏟️';
    const GAME_META = 'Speaking · Two-Podium Debate Arena · A1–C2';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    const PHRASE_BANKS = {
        en: {
            a: [
                "I strongly agree because...",
                "In my experience...",
                "The evidence shows...",
                "Furthermore...",
                "It is undeniable that...",
                "I contend that..."
            ],
            b: [
                "I respectfully disagree because...",
                "On the contrary...",
                "However, one must consider...",
                "That overlooks the fact that...",
                "On the other hand...",
                "I would argue that..."
            ]
        },
        fr: {
            a: [
                "Je suis tout à fait d'accord...",
                "D'après mon expérience...",
                "Il est clair que...",
                "De plus...",
                "On ne peut nier que..."
            ],
            b: [
                "Je ne suis pas d'accord...",
                "Au contraire...",
                "Cependant, il faut considérer...",
                "D'un autre côté...",
                "En revanche..."
            ]
        },
        it: {
            a: [
                "Sono pienamente d'accordo...",
                "Nella mia esperienza...",
                "È evidente che...",
                "Inoltre...",
                "È innegabile che..."
            ],
            b: [
                "Non sono d'accordo...",
                "Al contrario...",
                "Tuttavia, bisogna considerare...",
                "D'altra parte...",
                "Al contrario..."
            ]
        },
        ru: {
            a: [
                "Я полностью согласен...",
                "По моему опыту...",
                "Очевидно, что...",
                "Кроме того...",
                "Несомненно, что..."
            ],
            b: [
                "Я не согласен...",
                "Напротив...",
                "Однако следует учесть...",
                "С другой стороны...",
                "Тем не менее..."
            ]
        },
        el: {
            a: [
                "Συμφωνώ απόλυτα...",
                "Κατά τη γνώμη μου...",
                "Είναι σαφές ότι...",
                "Επιπλέον...",
                "Είναι αναμφισβήτητο..."
            ],
            b: [
                "Διαφωνώ...",
                "Αντίθετα...",
                "Ωστόσο, πρέπει να λάβουμε υπόψη...",
                "Από την άλλη πλευρά...",
                "Παρόλα αυτά..."
            ]
        }
    };

    function esc(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function getPhrases(lang, side) {
        const bank = PHRASE_BANKS[lang] || PHRASE_BANKS.en;
        return bank[side] || PHRASE_BANKS.en[side];
    }

    function createDrawBag(arr) {
        if (window.gameUtils && typeof window.gameUtils.createDrawBag === 'function') {
            return window.gameUtils.createDrawBag(arr);
        }
        if (window.COSYUtils && typeof window.COSYUtils.createDrawBag === 'function') {
            return window.COSYUtils.createDrawBag(arr);
        }
        const pool = Array.isArray(arr) && arr.length > 0 ? [...arr] : ['...'];
        let items = [...pool];
        return {
            next: function() {
                if (items.length === 0) items = [...pool];
                const idx = Math.floor(Math.random() * items.length);
                return items.splice(idx, 1)[0];
            }
        };
    }

    function renderTimerRing(dur, maxDur) {
        if (window.gameUtils && typeof window.gameUtils.renderTimerRing === 'function') {
            return window.gameUtils.renderTimerRing(dur, maxDur);
        }
        return `<div class="timer-display" style="font-size: 2rem; font-weight: 800; color: var(--sage);"><span id="timer-val">${dur}</span>s</div>`;
    }

    function startTimer(elementId, duration, onComplete) {
        if (window.gameUtils && typeof window.gameUtils.startTimer === 'function') {
            return window.gameUtils.startTimer(elementId, duration, onComplete);
        }
        if (window.COSYUtils && typeof window.COSYUtils.startTimer === 'function') {
            return window.COSYUtils.startTimer(duration, (sec) => {
                const el = document.getElementById(elementId);
                if (el) el.textContent = sec;
            }, onComplete);
        }
        let remaining = duration;
        const interval = setInterval(() => {
            remaining--;
            const el = document.getElementById(elementId);
            if (el) el.textContent = remaining;
            if (remaining <= 0) {
                clearInterval(interval);
                if (typeof onComplete === 'function') onComplete();
            }
        }, 1000);
        return interval;
    }

    let state = {
        stmt: '',
        hints: [],
        sideAScore: 0,
        sideBScore: 0,
        usedPhrasesA: new Set(),
        usedPhrasesB: new Set(),
        activePhoneSide: 'a',
        timerSeconds: 90
    };

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Opinion Arena 🏟️</h2>
              <p>Step into the two-podium debate arena. Defend your stance, utilize argument phrases, and shift the shared tug-of-war meter in your favor!</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level">${LEVEL_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_GAME.start()">▶ Enter Arena</button>
            </div>`;
    }

    function calculateMeterPct() {
        const diff = state.sideAScore - state.sideBScore;
        // Base is 50%, each point shifts by 5%, clamped between 5% and 95%
        let pctA = 50 + (diff * 5);
        if (pctA < 5) pctA = 5;
        if (pctA > 95) pctA = 95;
        return pctA;
    }

    function updateMeterUI() {
        const pctA = calculateMeterPct();
        const pctB = 100 - pctA;
        const fillA = document.getElementById('oa-fill-a');
        const fillB = document.getElementById('oa-fill-b');
        const indicator = document.getElementById('oa-indicator');
        const scoreA = document.getElementById('oa-score-a');
        const scoreB = document.getElementById('oa-score-b');
        const centerStatus = document.getElementById('oa-center-status');

        if (fillA) fillA.style.width = pctA + '%';
        if (fillB) fillB.style.width = pctB + '%';
        if (indicator) indicator.style.left = pctA + '%';
        if (scoreA) scoreA.textContent = state.sideAScore + ' pts';
        if (scoreB) scoreB.textContent = state.sideBScore + ' pts';

        if (centerStatus) {
            if (pctA > 50) {
                centerStatus.textContent = `Pro Side Ahead (+${state.sideAScore - state.sideBScore})`;
                centerStatus.style.color = 'var(--game-accent-a)';
            } else if (pctA < 50) {
                centerStatus.textContent = `Con Side Ahead (+${state.sideBScore - state.sideAScore})`;
                centerStatus.style.color = 'var(--game-accent-b)';
            } else {
                centerStatus.textContent = 'Balanced Debate';
                centerStatus.style.color = 'var(--arena-center-neutral)';
            }
        }
    }

    window.COSY_GAME = {
        async start() {
            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
            const level = COSYLoader.getLevelCode(document.getElementById('s-level')?.value);
            document.getElementById('go-body').innerHTML = '<div style="text-align:center;padding:4rem;">Loading Arena...</div>';

            await COSYLoader.loadLevelData(lang, level);
            COSYGame.init(GAME_ID, lang, level);
            COSYGame.maxRounds = 5;

            const data = COSYLoader.getGameData(lang);
            const drawBag = createDrawBag(data.opinions || ['...']);

            const nextRound = () => {
                if (!COSYGame.nextRound()) {
                    COSY_GAME.renderEnd();
                    return;
                }
                const rawItem = drawBag.next();
                state.stmt = typeof rawItem === 'string' ? rawItem : (rawItem.topic || rawItem.text || rawItem.t || '...');
                state.hints = (rawItem.hints || rawItem.h || []);
                state.sideAScore = 0;
                state.sideBScore = 0;
                state.usedPhrasesA.clear();
                state.usedPhrasesB.clear();
                state.activePhoneSide = 'a';

                COSY_GAME.renderArena(lang);
            };

            COSY_GAME._next = nextRound;
            nextRound();
        },

        renderArena(lang) {
            const body = document.getElementById('go-body');
            const phrasesA = getPhrases(lang, 'a');
            const phrasesB = getPhrases(lang, 'b');

            const pctA = calculateMeterPct();
            const pctB = 100 - pctA;

            body.innerHTML = `
              <div class="oa-arena-container">
                <!-- Shared Score & Round Header -->
                <div class="score-bar" style="margin-bottom: 0;">
                  <div class="sb-item"><div class="sb-val" id="op-score">${COSYGame.score}</div><div class="sb-lbl">Total Score</div></div>
                  <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Round</div></div>
                </div>

                <!-- Debate Topic Card -->
                <div class="game-card" style="margin-bottom:0;">
                  <div class="game-label">🏟️ Arena Topic</div>
                  <div class="game-prompt" style="font-size: 1.25rem;">"${esc(state.stmt)}"</div>
                  ${state.hints.length > 0 ? `
                      <div style="font-size:.75rem; font-weight:700; text-transform:uppercase; color:var(--sage-dark); margin: .5rem 0 .25rem;">💡 Key Angles:</div>
                      <ul style="font-size:.85rem; text-align:left; margin:0 0 .5rem 1rem; padding:0; line-height:1.4">
                          ${state.hints.map(h => `<li>${esc(h)}</li>`).join('')}
                      </ul>` : ''}
                </div>

                <!-- Tug-of-War Shared Meter -->
                <div class="oa-meter-wrapper" id="oa-meter-anchor">
                  <div class="oa-meter-header">
                    <span class="oa-side-label-a">🔴 Agree / Pro</span>
                    <span class="oa-center-status" id="oa-center-status">Balanced Debate</span>
                    <span class="oa-side-label-b">🔵 Disagree / Con</span>
                  </div>
                  <div class="oa-meter-track">
                    <div class="oa-meter-fill-a" id="oa-fill-a" style="width: ${pctA}%"></div>
                    <div class="oa-meter-fill-b" id="oa-fill-b" style="width: ${pctB}%"></div>
                    <div class="oa-meter-center-pin"></div>
                    <div class="oa-meter-indicator" id="oa-indicator" style="left: ${pctA}%"></div>
                  </div>
                </div>

                <!-- Mobile Phone Context Side Switcher -->
                <div class="oa-phone-side-switcher">
                  <button class="oa-phone-tab tab-a ${state.activePhoneSide === 'a' ? 'active' : ''}" onclick="COSY_GAME.switchPhoneSide('a')">
                    🔴 Agree Podium (<span id="oa-phone-score-a">${state.sideAScore}</span>)
                  </button>
                  <button class="oa-phone-tab tab-b ${state.activePhoneSide === 'b' ? 'active' : ''}" onclick="COSY_GAME.switchPhoneSide('b')">
                    🔵 Disagree Podium (<span id="oa-phone-score-b">${state.sideBScore}</span>)
                  </button>
                </div>

                <!-- Two Podiums -->
                <div class="oa-podiums-grid">
                  <!-- Podium A: Agree / Pro -->
                  <div class="oa-podium oa-podium-side-a ${state.activePhoneSide === 'a' ? 'phone-visible' : ''}" id="podium-a">
                    <div class="oa-podium-header">
                      <div class="oa-podium-title">🔴 Agree Podium</div>
                      <div class="oa-podium-score" id="oa-score-a">${state.sideAScore} pts</div>
                    </div>
                    <div class="oa-podium-body">
                      <div class="oa-phrase-section-title">Available Expressions</div>
                      <div class="oa-phrases-list">
                        ${phrasesA.map((phrase, i) => `
                          <div class="oa-phrase-chip ${state.usedPhrasesA.has(i) ? 'used' : ''}"
                               onclick="COSY_GAME.usePhrase('a', ${i})">
                            ${esc(phrase)}
                          </div>`).join('')}
                      </div>
                      <div class="oa-podium-actions">
                        <button class="oa-btn-argue" onclick="COSY_GAME.addArgument('a')">
                          ➕ Defend Stance (+5 pts)
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Podium B: Disagree / Con -->
                  <div class="oa-podium oa-podium-side-b ${state.activePhoneSide === 'b' ? 'phone-visible' : ''}" id="podium-b">
                    <div class="oa-podium-header">
                      <div class="oa-podium-title">🔵 Disagree Podium</div>
                      <div class="oa-podium-score" id="oa-score-b">${state.sideBScore} pts</div>
                    </div>
                    <div class="oa-podium-body">
                      <div class="oa-phrase-section-title">Available Expressions</div>
                      <div class="oa-phrases-list">
                        ${phrasesB.map((phrase, i) => `
                          <div class="oa-phrase-chip ${state.usedPhrasesB.has(i) ? 'used' : ''}"
                               onclick="COSY_GAME.usePhrase('b', ${i})">
                            ${esc(phrase)}
                          </div>`).join('')}
                      </div>
                      <div class="oa-podium-actions">
                        <button class="oa-btn-argue" onclick="COSY_GAME.addArgument('b')">
                          ➕ Defend Stance (+5 pts)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Controls & Timer Trigger -->
                <div class="game-controls" style="margin-top: 0.5rem;">
                  <button class="btn-g-primary" id="op-start">▶ Start 90s Defense Speech</button>
                  <button class="btn-g-secondary" id="op-new">Skip topic →</button>
                  <button class="btn-g-danger" id="op-reset">⬅ Setup</button>
                </div>
              </div>`;

            document.getElementById('op-start').addEventListener('click', () => COSY_GAME.speak(state.stmt, 90));
            document.getElementById('op-new').addEventListener('click', () => COSY_GAME._next());
            document.getElementById('op-reset').addEventListener('click', () => COSY_GAME.reset());
        },

        switchPhoneSide(side) {
            state.activePhoneSide = side;
            const podA = document.getElementById('podium-a');
            const podB = document.getElementById('podium-b');
            const tabs = document.querySelectorAll('.oa-phone-tab');

            tabs.forEach(t => t.classList.remove('active'));
            if (side === 'a') {
                podA?.classList.add('phone-visible');
                podB?.classList.remove('phone-visible');
                document.querySelector('.oa-phone-tab.tab-a')?.classList.add('active');
            } else {
                podB?.classList.add('phone-visible');
                podA?.classList.remove('phone-visible');
                document.querySelector('.oa-phone-tab.tab-b')?.classList.add('active');
            }
        },

        usePhrase(side, index) {
            if (side === 'a') {
                if (state.usedPhrasesA.has(index)) return;
                state.usedPhrasesA.add(index);
                state.sideAScore += 3;
                COSYGame.addScore(3);
            } else {
                if (state.usedPhrasesB.has(index)) return;
                state.usedPhrasesB.add(index);
                state.sideBScore += 3;
                COSYGame.addScore(3);
            }
            const opScore = document.getElementById('op-score');
            if (opScore) opScore.textContent = COSYGame.score;

            COSY_GAME.updateMeterState(state.sideAScore, state.sideBScore);

            // Re-render phrase lists
            COSY_GAME.renderArena(COSYGame.language);
        },

        addArgument(side) {
            if (side === 'a') {
                state.sideAScore += 5;
                COSYGame.addScore(5);
            } else {
                state.sideBScore += 5;
                COSYGame.addScore(5);
            }
            const opScore = document.getElementById('op-score');
            if (opScore) opScore.textContent = COSYGame.score;

            COSY_GAME.updateMeterState(state.sideAScore, state.sideBScore);
            COSY_GAME.renderArena(COSYGame.language);
        },

        updateMeterState(sideAPoints, sideBPoints) {
            state.sideAScore = sideAPoints;
            state.sideBScore = sideBPoints;
            updateMeterUI();

            // Support broadcasting state for live session / online sync anchors
            if (window.COSYGameSession && typeof window.COSYGameSession.broadcast === 'function') {
                window.COSYGameSession.broadcast({
                    type: 'OPINION_METER_UPDATE',
                    sideAScore: state.sideAScore,
                    sideBScore: state.sideBScore
                });
            }
        },

        speak(stmt, dur) {
            const body = document.getElementById('go-body');
            body.innerHTML = `
              <div class="game-card" style="text-align:center;">
                <div class="game-label">🏟️ Arena Defense Speech</div>
                <div class="game-prompt" style="font-size:1.1rem;margin-bottom:.4rem">"${esc(stmt)}"</div>
                <div class="game-sub">Defend your side on the podium! Keep speaking until the timer runs out.</div>
                <div id="timer-container" style="margin: 1rem 0;">${renderTimerRing(dur, dur)}</div>
                <div class="game-controls" style="justify-content:center;">
                  <button class="btn-g-secondary" id="op-new-active">Skip topic →</button>
                  <button class="btn-g-danger" id="op-reset-active">⬅ Setup</button>
                </div>
              </div>`;
            document.getElementById('op-new-active').addEventListener('click', () => COSY_GAME._next());
            document.getElementById('op-reset-active').addEventListener('click', () => COSY_GAME.reset());

            startTimer('timer-val', dur, () => {
              COSYGame.addScore(10);
              document.getElementById('go-body').insertAdjacentHTML('beforeend', `
                <div class="game-card" style="text-align:center; margin-top:1rem;">
                  <div style="font-size:1.8rem;margin-bottom:.5rem">👏</div>
                  <div class="game-prompt" style="font-size:1.1rem">Debate Round Complete!</div>
                  <div class="game-controls" style="justify-content:center;margin-top:.75rem">
                    <button class="btn-g-primary" id="op-next-final">Next statement →</button>
                  </div>
                </div>`);
              document.getElementById('op-next-final').addEventListener('click', () => COSY_GAME._next());
            });
        },

        reset: renderSetup,

        renderEnd() {
            const lang = COSYGame.language;
            const level = COSYGame.level;
            COSYScores.save(GAME_ID, lang, level, COSYGame.score);
            const best = COSYScores.best(GAME_ID, lang);
            document.getElementById('go-body').innerHTML = `
                <div class="round-end">
                    <div class="re-icon">🏆</div>
                    <div class="re-title">Arena Session Complete!</div>
                    <div class="re-sub">Your final score: <strong>${COSYGame.score}</strong></div>
                    ${best ? `<div class="game-sub" style="margin-bottom:1rem">Personal best: ${best.score} pts</div>` : ''}
                    <div class="re-actions">
                        <button class="btn-g-primary" onclick="COSY_GAME.start()">Play again ↺</button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.reset()">Setup</button>
                    </div>
                </div>`;
        }
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
