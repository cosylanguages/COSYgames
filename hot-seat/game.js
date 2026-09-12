/**
 * hot-seat/game.js
 * Standalone logic for Hot Seat with spotlighted seat + ticking ring identity and TurnBanner role clarification.
 */
(function() {
    const GAME_ID = 'hotseat';
    const GAME_TITLE = 'Hot Seat 🎯';
    const GAME_META = 'Vocabulary & Fluency · CEFR A1–C2';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    let activeRole = 'guessing'; // 'guessing' | 'clue_giver' | 'watching'
    let currentTimerInterval = null;
    let turnBannerInstance = null;
    let totalTimeSec = 60;
    let remainingTimeSec = 60;

    function getUtils() {
        return window.COSYUtils || window.gameUtils || {};
    }

    function esc(str) {
        const div = document.createElement('div');
        div.textContent = str || '';
        return div.innerHTML;
    }

    function parseLangCode(val) {
        if (!val) return 'en';
        const clean = val.toLowerCase();
        if (clean.includes('fr') || clean.includes('french')) return 'fr';
        if (clean.includes('it') || clean.includes('italian')) return 'it';
        if (clean.includes('ru') || clean.includes('russian')) return 'ru';
        if (clean.includes('el') || clean.includes('greek')) return 'el';
        return 'en';
    }

    function parseLevelCode(val) {
        if (!val) return 'starter';
        const clean = val.toLowerCase();
        if (clean.includes('primary') || clean.includes('a2')) return 'elementary';
        if (clean.includes('intermediate') && !clean.includes('upper')) return 'intermediate';
        if (clean.includes('upper') || clean.includes('b2')) return 'upper_intermediate';
        if (clean.includes('advanced') || clean.includes('c1')) return 'advanced';
        if (clean.includes('proficiency') || clean.includes('c2')) return 'advanced';
        return 'starter';
    }

    function isPhoneContext() {
        if (typeof ViewContext !== 'undefined' && ViewContext.getContext) {
            return ViewContext.getContext() === 'phone';
        }
        return document.documentElement.dataset.context === 'phone' || window.innerWidth < 480;
    }

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Hot Seat 🎯</h2>
              <p>Quick-fire vocabulary round against the ticking ring! One player is in the spotlighted Hot Seat guessing, while others give clues.</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level">${LEVEL_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" id="hs-start">▶ Start game</button>
            </div>`;

        document.getElementById('hs-start').addEventListener('click', () => COSY_GAME.start());
    }

    window.COSY_GAME = {
        async start() {
            const rawLang = document.getElementById('s-lang')?.value;
            const rawLevel = document.getElementById('s-level')?.value;
            const lang = parseLangCode(rawLang);
            const level = parseLevelCode(rawLevel);
            const utils = getUtils();

            document.getElementById('go-body').innerHTML = '<div style="text-align:center;padding:4rem;">Loading vocabulary...</div>';

            if (typeof COSYLoader !== 'undefined' && COSYLoader.loadLevelData) {
                try {
                    await COSYLoader.loadLevelData(lang, level);
                } catch (e) {
                    console.log('Level data fallback', e);
                }
            }

            COSYGame.init(GAME_ID, lang, level);
            COSYGame.maxRounds = 15;

            const body = document.getElementById('go-body');
            let active = true;

            const vocab = (window.vocabularyData && window.vocabularyData[lang]) || [
                { word: 'Apple', plural: 'Apples', definitions: [{ text: 'A round fruit with red or green skin', examples: ['I ate an apple.'] }] },
                { word: 'Book', plural: 'Books', definitions: [{ text: 'Written pages bound together', examples: ['She reads a book.'] }] },
                { word: 'Guitar', plural: 'Guitars', definitions: [{ text: 'A stringed musical instrument', examples: ['He plays guitar.'] }] },
                { word: 'Coffee', plural: 'Coffees', definitions: [{ text: 'A hot roasted bean drink', examples: ['I drink morning coffee.'] }] },
                { word: 'Sun', plural: 'Suns', definitions: [{ text: 'The star at the center of our solar system', examples: ['The sun is bright.'] }] },
                { word: 'Tree', plural: 'Trees', definitions: [{ text: 'A woody perennial plant', examples: ['Birds sit in the tree.'] }] }
            ];

            const drawBag = utils.createDrawBag ? utils.createDrawBag(vocab) : { next: () => vocab[Math.floor(Math.random() * vocab.length)] };

            const updateRoleUI = () => {
                const roleCard = document.getElementById('hs-main-card');
                if (roleCard) {
                    roleCard.className = `hotseat-spotlight-card role-${activeRole}`;
                }

                // Update TurnBanner role text
                if (turnBannerInstance) {
                    if (activeRole === 'guessing') {
                        turnBannerInstance.setTurn("You're guessing", "Guesser in the Hot Seat 🔥");
                    } else if (activeRole === 'clue_giver') {
                        turnBannerInstance.setTurn("You're giving clues", "Give clues without saying the word!");
                    } else {
                        turnBannerInstance.setTurn("You're watching", "Audience Spectator View");
                    }
                }

                // Toggle role buttons
                document.querySelectorAll('.role-btn').forEach(btn => {
                    if (btn.dataset.role === activeRole) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
            };

            const nextQ = () => {
                if (!active) return;
                if (!COSYGame.nextRound()) {
                    active = false;
                    COSY_GAME.renderEnd();
                    return;
                }

                const item = drawBag.next();
                const types = ['plural', 'definition', 'sentence'];
                const type = types[Math.floor(Math.random() * types.length)];

                let promptText = '', answerText = '';
                if (type === 'plural') {
                    promptText = `What is the plural of <strong>${esc(item.word)}</strong>?`;
                    answerText = item.plural || (item.word + 's');
                } else if (type === 'definition') {
                    promptText = `Define the word <strong>${esc(item.word)}</strong>.`;
                    answerText = item.definitions?.[0]?.text || '...';
                } else {
                    promptText = `Use <strong>${esc(item.word)}</strong> in a sentence.`;
                    answerText = item.definitions?.[0]?.examples?.[0]?.text || item.definitions?.[0]?.examples?.[0] || '...';
                }

                const radius = 70;
                const circumference = 2 * Math.PI * radius; // ~439.8

                body.innerHTML = `
                    <div class="score-bar">
                        <div class="sb-item"><div class="sb-val" id="hs-score">${COSYGame.score}</div><div class="sb-lbl">Score</div></div>
                        <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Round</div></div>
                    </div>

                    <div id="turn-banner-mount" style="margin-bottom: 1rem;"></div>

                    <div class="role-toggle-bar">
                        <button class="role-btn ${activeRole === 'guessing' ? 'active' : ''}" data-role="guessing">🎯 Guessing</button>
                        <button class="role-btn ${activeRole === 'clue_giver' ? 'active' : ''}" data-role="clue_giver">🗣️ Giving Clues</button>
                        <button class="role-btn ${activeRole === 'watching' ? 'active' : ''}" data-role="watching">👁️ Watching</button>
                    </div>

                    <div class="hotseat-spotlight-card role-${activeRole}" id="hs-main-card">
                        <div class="game-label">🎯 Spotlighted Hot Seat</div>

                        <!-- Radial SVG Countdown Ring -->
                        <div class="hotseat-ring-wrapper">
                            <svg class="hotseat-ring-svg" viewBox="0 0 160 160">
                                <circle class="hotseat-ring-bg" cx="80" cy="80" r="${radius}" />
                                <circle class="hotseat-ring-circle" id="hs-ring-circle" cx="80" cy="80" r="${radius}"
                                        stroke-dasharray="${circumference}" stroke-dashoffset="0" />
                            </svg>
                            <div class="hotseat-avatar-content">
                                <div class="hotseat-guesser-name">🔥 Hot Seat</div>
                                <div class="hotseat-timer-sec" id="hs-timer-val">60</div>
                            </div>
                        </div>

                        <!-- Prompt & Answer (hidden on phone for guesser) -->
                        <div class="hotseat-prompt-area">
                            <div class="game-prompt" style="font-size:1.4rem">${promptText}</div>
                            <div class="hotseat-answer-hint" style="font-size:0.9rem; color:var(--ink-faint); margin: 0.75rem 0;">
                                Suggested Answer: "<strong>${esc(answerText)}</strong>"
                            </div>
                        </div>

                        <!-- Controls -->
                        <div class="game-controls" style="justify-content:center; gap:1rem; margin-top: 1rem;">
                            <button class="btn-g-primary" style="background:#16a34a;" id="hs-got-it">✓ Got it!</button>
                            <button class="btn-pass-large" id="hs-pass">➔ Pass</button>
                        </div>
                    </div>`;

                // Initialize TurnBanner
                const bannerContainer = document.getElementById('turn-banner-mount');
                if (bannerContainer && typeof TurnBanner !== 'undefined') {
                    turnBannerInstance = new TurnBanner(bannerContainer, {
                        label: "You're guessing",
                        currentTurn: "Guesser in the Hot Seat 🔥"
                    });
                }

                updateRoleUI();

                document.querySelectorAll('.role-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        activeRole = e.currentTarget.dataset.role;
                        updateRoleUI();
                    });
                });

                document.getElementById('hs-got-it').addEventListener('click', () => COSY_GAME.hsResult(true));
                document.getElementById('hs-pass').addEventListener('click', () => COSY_GAME.hsResult(false));
            };

            window.COSY_GAME.hsResult = (ok) => {
                if (ok) {
                    COSYGame.addScore(10);
                    const scoreEl = document.getElementById('hs-score');
                    if (scoreEl) scoreEl.textContent = COSYGame.score;
                }
                nextQ();
            };

            // Start 60s Ticking Ring Timer
            totalTimeSec = 60;
            remainingTimeSec = 60;

            if (currentTimerInterval) clearInterval(currentTimerInterval);

            const circumference = 2 * Math.PI * 70; // ~439.8

            currentTimerInterval = setInterval(() => {
                if (!active) {
                    clearInterval(currentTimerInterval);
                    return;
                }

                remainingTimeSec -= 0.2; // Update every 200ms for smooth ring depletion
                if (remainingTimeSec < 0) remainingTimeSec = 0;

                const timerValEl = document.getElementById('hs-timer-val');
                const ringCircle = document.getElementById('hs-ring-circle');
                const card = document.getElementById('hs-main-card');

                if (timerValEl) {
                    timerValEl.textContent = Math.ceil(remainingTimeSec);
                }

                if (ringCircle) {
                    const progress = remainingTimeSec / totalTimeSec;
                    const offset = circumference * (1 - progress);
                    ringCircle.style.strokeDashoffset = offset;
                }

                // Final 5 seconds warning pulse
                if (remainingTimeSec <= 5 && remainingTimeSec > 0) {
                    if (card) card.classList.add('pulse-warning');
                    if (ringCircle) ringCircle.classList.add('pulse-warning');
                    if (timerValEl) timerValEl.classList.add('pulse-warning');
                } else {
                    if (card) card.classList.remove('pulse-warning');
                    if (ringCircle) ringCircle.classList.remove('pulse-warning');
                    if (timerValEl) timerValEl.classList.remove('pulse-warning');
                }

                if (remainingTimeSec <= 0) {
                    clearInterval(currentTimerInterval);
                    active = false;
                    COSY_GAME.renderEnd();
                }
            }, 200);

            nextQ();
        },

        reset: renderSetup,

        renderEnd() {
            if (currentTimerInterval) clearInterval(currentTimerInterval);
            const lang = COSYGame.language;
            const level = COSYGame.level;
            COSYScores.save(GAME_ID, lang, level, COSYGame.score);
            const best = COSYScores.best(GAME_ID, lang);
            const body = document.getElementById('go-body');
            body.innerHTML = `
                <div class="round-end">
                    <div class="re-icon">🏆</div>
                    <div class="re-title">Round Over!</div>
                    <div class="re-sub">You answered <strong>${COSYGame.score / 10}</strong> questions correctly. Total: ${COSYGame.score} pts.</div>
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
