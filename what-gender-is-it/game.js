/**
 * games/what_gender_is_it/game.js
 * Game logic for "What Gender Is It?".
 */
(function() {
    const GAME_ID = 'gender';
    const GAME_TITLE = 'What Gender Is It? ♀️♂️';
    const GAME_META = 'Grammar & Etymology · Solo';

    const GENDER_LANGUAGES = [
        { code: 'all', native: 'All Genders Mode 🌀' },
        { code: 'fr', native: 'French 🇫🇷' },
        { code: 'es', native: 'Spanish 🇪🇸' },
        { code: 'it', native: 'Italian 🇮🇹' },
        { code: 'de', native: 'German 🇩🇪' },
        { code: 'ru', native: 'Russian 🇷🇺' },
        { code: 'el', native: 'Greek 🇬🇷' },
        { code: 'br', native: 'Breton ⛵' }
    ];

    const NEUTER_LANGUAGES = ['de', 'ru', 'el'];

    function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        if (!body) return;

        body.innerHTML = `
            <div class="setup-screen">
              <div style="font-size: 4rem; margin-bottom: 1rem;">♀️♂️</div>
              <h1>What Gender Is It?</h1>
              <p>Practice grammatical genders in our gendered languages (French, Spanish, Italian, German, Russian, Greek, Breton) and learn the fascinating historical/linguistic reasons why they have them!</p>

              <div class="setup-field">
                <label>CEFR Level</label>
                <select class="styled-sel" id="s-level">
                  <option value="starter">A1 (Starter)</option>
                  <option value="elementary">A2 (Elementary)</option>
                  <option value="intermediate">B1 (Intermediate)</option>
                  <option value="upper_intermediate">B2 (Upper-Intermediate)</option>
                  <option value="advanced">C1 (Advanced)</option>
                  <option value="proficiency">C2 (Proficiency)</option>
                </select>
              </div>

              <div class="setup-field">
                <label>Target Language</label>
                <select class="styled-sel" id="s-lang">
                  ${GENDER_LANGUAGES.map(l => `<option value="${l.code}">${l.native}</option>`).join('')}
                </select>
              </div>

              <button class="btn-start-game" onclick="COSY_GAME.start()">▶ Start Practicing</button>
            </div>`;
    }

    window.COSY_GAME = {
        async start() {
            const levelVal = document.getElementById('s-level')?.value || 'starter';
            const langVal = document.getElementById('s-lang')?.value || 'all';
            const body = document.getElementById('go-body');
            if (body) body.innerHTML = '<div style="text-align:center;padding:4rem;">Loading words & histories...</div>';

            // Wait a tiny moment to simulate asset loading
            await new Promise(resolve => setTimeout(resolve, 300));

            // Retrieve data for selected level
            const allLevelQuestions = (window.genderGameData && window.genderGameData[levelVal]) || [];

            if (allLevelQuestions.length === 0) {
                body.innerHTML = `
                    <div class="setup-screen" style="text-align:center; padding: 2rem;">
                      <div style="font-size:4rem;margin-bottom:1.5rem">📭</div>
                      <h2 style="font-family:'Fraunces', serif;">No content yet</h2>
                      <p style="color:var(--ink-muted); margin-bottom:2rem;">We could not find dataset for the chosen level.</p>
                      <button class="btn-g-primary" onclick="COSY_GAME.reset()">⬅ Return</button>
                    </div>`;
                return;
            }

            COSYGame.init(GAME_ID, langVal, levelVal);
            COSYGame.maxRounds = Math.min(10, allLevelQuestions.length);
            COSYGame.score = 0;

            const drawBag = gameUtils.createDrawBag(allLevelQuestions);
            let questionCount = 0;

            const nextQuestion = () => {
                if (questionCount >= COSYGame.maxRounds) {
                    this.renderEnd();
                    return;
                }

                questionCount++;
                const conceptObj = drawBag.next();

                // Determine target language for this round
                let targetLangCode = langVal;
                if (langVal === 'all') {
                    // Pick a random language that has a translation for this concept
                    const availableLangs = Object.keys(conceptObj.translations);
                    targetLangCode = availableLangs[Math.floor(Math.random() * availableLangs.length)];
                }

                const trans = conceptObj.translations[targetLangCode];
                const hasNeuter = NEUTER_LANGUAGES.includes(targetLangCode);
                const targetLangObj = GENDER_LANGUAGES.find(l => l.code === targetLangCode);
                const targetLangName = targetLangObj ? targetLangObj.native : targetLangCode.toUpperCase();

                body.innerHTML = `
                  <div class="score-bar">
                    <div class="sb-item"><div class="sb-val" id="gender-score">${COSYGame.score}</div><div class="sb-lbl">⭐</div></div>
                    <div class="sb-item"><div class="sb-val">${questionCount}/${COSYGame.maxRounds}</div><div class="sb-lbl">🧩</div></div>
                  </div>
                  <div class="game-card" style="text-align: center;">
                    <div class="game-label" style="font-size: 1.25rem; font-weight: 700; color: var(--teal); margin-bottom: 0.5rem;">
                        <strong>${targetLangName}</strong> 🌐 ➔ ♂️ / ♀️ / ⚧️ ?
                    </div>
                    <div class="concept-emoji" style="font-size: 4rem; margin: 1.5rem 0 0.5rem 0;">
                        ${conceptObj.emoji || '🧩'}
                    </div>
                    <div class="gender-word" style="font-size: 3rem; font-weight: 800; color: var(--ink); margin: 0.5rem 0 1.5rem 0; font-family: 'Fraunces', serif;">
                        ${trans.article ? `<span style="font-size: 1.5rem; color: var(--ink-faint); font-weight: 400; font-family: 'DM Sans', sans-serif; margin-right: 8px;">(${trans.article})</span>` : ''}${trans.word}
                    </div>

                    <div class="gender-options">
                        <button class="btn-gender masculine-btn" data-gender="masculine">Masculine ♂️</button>
                        <button class="btn-gender feminine-btn" data-gender="feminine">Feminine ♀️</button>
                        ${hasNeuter ? `<button class="btn-gender neuter-btn" data-gender="neuter">Neuter ⚧️</button>` : ''}
                    </div>

                    <div class="feedback-bar" id="gender-fb"></div>

                    <!-- Explanations & Reveals (initially hidden) -->
                    <div id="reveal-area" style="display:none; text-align: left;">
                        <div style="font-size: 1.1rem; font-weight: 700; color: var(--ink-muted); margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.05em;">Concept: ${conceptObj.concept}</div>
                        <div class="why-container">
                            <div class="why-title">💡 Why? (Historical & Linguistic Context)</div>
                            <div class="why-text">${conceptObj.explanation}</div>
                        </div>

                        <div style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: var(--ink-muted); margin-top: 20px; text-align: left; letter-spacing: 0.05em;">Genders in other languages:</div>
                        <div class="gender-grid-reveal">
                            ${Object.entries(conceptObj.translations).map(([lang, info]) => {
                                const lObj = GENDER_LANGUAGES.find(l => l.code === lang);
                                const lName = lObj ? lObj.native.split(' ')[0] : lang.toUpperCase();
                                const lEmoji = lObj ? lObj.native.split(' ').slice(-1)[0] : '🌐';
                                return `
                                    <div class="reveal-lang-card">
                                        <div class="reveal-lang-name">${lEmoji} ${lName}</div>
                                        <div class="reveal-lang-word">${info.article ? info.article + ' ' : ''}${info.word}</div>
                                        <div class="reveal-lang-gender gender-tag-${info.gender}">${info.gender === 'masculine' ? '♂️' : info.gender === 'feminine' ? '♀️' : info.gender === 'neuter' ? '⚧️' : '⚖️ both'} ${info.gender}</div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>

                    <div class="game-controls" style="margin-top: 20px;">
                      <button class="btn-g-primary" id="gender-next" style="display:none">Next Concept →</button>
                      <button class="btn-g-danger" id="gender-reset">⬅ Exit</button>
                    </div>
                  </div>`;

                const optButtons = body.querySelectorAll('.btn-gender');
                optButtons.forEach(btn => {
                    btn.addEventListener('click', () => {
                        COSY_GAME.guess(btn, btn.dataset.gender, trans.gender, optButtons);
                    });
                });

                document.getElementById('gender-next').addEventListener('click', () => COSY_GAME._nextQ());
                document.getElementById('gender-reset').addEventListener('click', () => COSY_GAME.reset());
            };

            window.COSY_GAME._nextQ = nextQuestion;

            window.COSY_GAME.guess = (clickedBtn, selectedGender, correctGender, allButtons) => {
                // Disable all option buttons
                allButtons.forEach(b => b.disabled = true);

                const fb = document.getElementById('gender-fb');
                const nextBtn = document.getElementById('gender-next');
                const revealArea = document.getElementById('reveal-area');

                if (nextBtn) nextBtn.style.display = 'inline-block';
                if (revealArea) revealArea.style.display = 'block';

                // Normalize 'both' for languages like Spanish 'mar'
                const isCorrect = (selectedGender === correctGender) || (correctGender === 'both');

                // Play haptic feedback sound (Phase 3)
                gameUtils.playGameSound(isCorrect ? 'success' : 'error');

                if (isCorrect) {
                    clickedBtn.classList.add('correct-choice');
                    if (fb) {
                        fb.className = 'feedback-bar show ok';
                        fb.innerHTML = `✓ <strong>${trans.word}</strong> ➔ <strong>${correctGender === 'masculine' ? '♂️' : correctGender === 'feminine' ? '♀️' : '⚧️'}</strong>`;
                    }
                    COSYGame.score += 10;
                    document.getElementById('gender-score').textContent = COSYGame.score;
                } else {
                    clickedBtn.classList.add('wrong-choice');
                    allButtons.forEach(b => {
                        if (b.dataset.gender === correctGender) {
                            b.classList.add('correct-choice');
                        }
                    });
                    if (fb) {
                        fb.className = 'feedback-bar show bad';
                        fb.innerHTML = `✗ <strong>${trans.word}</strong> ➔ <strong>${correctGender === 'masculine' ? '♂️' : correctGender === 'feminine' ? '♀️' : '⚧️'}</strong>`;
                    }
                }
            };

            nextQuestion();
        },

        renderEnd() {
            const lang = COSYGame.language;
            const level = COSYGame.level;
            COSYScores.save(GAME_ID, lang, level, COSYGame.score);
            const best = COSYScores.best(GAME_ID, lang);
            const body = document.getElementById('go-body');
            if (!body) return;

            // Trigger sensory feedback / confetti triggers (Phase 3)
            if (COSYGame.score >= 50) {
                gameUtils.playGameSound('success');
                gameUtils.createConfetti();
            } else {
                gameUtils.playGameSound('error');
            }

            // Compute Rank Title based on score
            let rankTitle = "Gender Novice 🌱";
            if (COSYGame.score >= 90) {
                rankTitle = "Linguistic Scholar 🧠🎓";
            } else if (COSYGame.score >= 70) {
                rankTitle = "Grammar Champion 🏆";
            } else if (COSYGame.score >= 40) {
                rankTitle = "Gender Adept ⚖️";
            }

            body.innerHTML = `
                <div class="setup-screen">
                  <h2>Gender Study Complete! 🎓</h2>
                  <div class="final-score" style="font-size: 3rem; font-weight: 800; color: var(--teal); margin: 0.5rem 0;">${COSYGame.score} / ${COSYGame.maxRounds * 10}</div>
                  <div style="font-size: 1.2rem; font-weight: 700; color: var(--coral); margin-bottom: 1.5rem;">Rank: ${rankTitle}</div>
                  ${best ? `<div class="game-sub" style="margin-bottom:1rem">Personal best: ${best.score} pts</div>` : ''}
                  <p>Fascinating, isn't it? Knowing grammatical gender helps with adjectives, agreements, and reveals deep connections to the history of Europe's languages.</p>
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
