/**
 * games/action_hero/game.js
 * Standalone logic for Action Hero.
 * Enhanced with Phase 3 (Sensory FX & Confetti) and Phase 4 (Mobile Tilt Gestures).
 */
(function() {
    const GAME_ID = 'action';
    const GAME_TITLE = 'Action Hero 🎭';
    const GAME_META = 'Mystery · Group';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Action Hero 🎭</h2>
              <p>Hold your phone to your forehead (screen facing others). They describe the word: you guess. Each round is 60 seconds. Pass or guess as many words as you can.</p>

              <!-- Hands-free sensory tip -->
              <div style="background: var(--cream-dark); border: 1.5px dashed var(--border); border-radius: 12px; padding: 1rem; margin-bottom: 1.5rem; text-align: left; font-size: 0.88rem; line-height: 1.5;">
                📱 <strong>Hands-Free Tilt Mode (Phase 4):</strong><br>
                Once active, you can control the game simply by tilting your phone!
                <ul>
                  <li>• <strong>Tilt Down (towards floor):</strong> ✓ Got it!</li>
                  <li>• <strong>Tilt Up (towards ceiling):</strong> Skip →</li>
                </ul>
              </div>

              <div class="setup-field"><label>Category</label>
                <select class="styled-sel" id="s-cat">
                  <option value="all">All vocabulary</option>
                  <option value="verbs">Verbs 🏃‍♂️</option>
                  <option value="group:environment_nature">Animals & Nature 🐾</option>
                  <option value="group:food_drink">Food & Drink 🍕</option>
                  <option value="group:places_geography">Places & Geography 🌍</option>
                  <option value="group:home_living">Home & Objects 🏠</option>
                  <option value="group:clothes_appearance">Clothes & Appearance 👕</option>
                  <option value="group:health_body">Health & Body 🏥</option>
                  <option value="group:sport_leisure">Sport & Leisure ⚽</option>
                </select>
              </div>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level">${LEVEL_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_GAME.start()">▶ Start game</button>
            </div>`;
    }

    window.COSY_GAME = {
        async start() {
            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
            const level = COSYLoader.getLevelCode(document.getElementById('s-level')?.value);
            const category = document.getElementById('s-cat')?.value || 'all';
            document.getElementById('go-body').innerHTML = '<div style="text-align:center;padding:4rem;">Loading...</div>';

            await COSYLoader.loadLevelData(lang, level);
            COSYGame.init(GAME_ID, lang, level);

            const data = COSYLoader.getGameData(lang);
            const vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];
            let pool = [];

            if (category === 'verbs') {
                pool = (window.verbsData && window.verbsData[lang]) ? window.verbsData[lang].map(v => v.word) : [];
            } else if (category !== 'all') {
                pool = vocab.filter(v => v.theme && gameUtils.isThemeMatch(v.theme, category)).map(v => v.word);
            }

            if (pool.length < 5) {
                const shortLvl = level === 'starter' ? 'A1' : (level === 'elementary' ? 'A2' : (level === 'intermediate' ? 'B1' : 'B2'));
                pool = (data.action && data.action[shortLvl]) ? data.action[shortLvl] : (data.action ? (data.action['B2'] || data.action['A2']) : ['...']);
            }

            const drawBag = gameUtils.createDrawBag(pool);
            let correct = 0, skipped = 0;
            const DUR = 60;

            // Define physical tilt gesture handler (Phase 4)
            let lastTiltTime = 0;
            const handleTilt = (event) => {
                const now = Date.now();
                if (now - lastTiltTime < 1500) return; // 1.5s debounce to allow returning upright

                const beta = event.beta; // Tilt angle [-180, 180]
                if (beta === null) return;

                if (beta < 55) {
                    lastTiltTime = now;
                    COSY_GAME.ahResult(true); // Correct!
                } else if (beta > 125) {
                    lastTiltTime = now;
                    COSY_GAME.ahResult(false); // Skip!
                }
            };

            // Request mobile browser permission and bind sensor listener
            const requestOrientation = () => {
                if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
                    DeviceOrientationEvent.requestPermission()
                        .then(state => {
                            if (state === 'granted') {
                                window.addEventListener('deviceorientation', handleTilt);
                            }
                        })
                        .catch(err => console.warn("Orientation permission denied:", err));
                } else {
                    window.addEventListener('deviceorientation', handleTilt);
                }
            };
            requestOrientation();

            const showWord = () => {
              if (!COSYGame.nextRound()) {
                showActionEnd();
                return;
              }
              const currentWord = drawBag.next();
              if (!currentWord) { showActionEnd(); return; }
              const body = document.getElementById('go-body');
              body.innerHTML = `
                <div class="score-bar">
                  <div class="sb-item"><div class="sb-val">${correct}</div><div class="sb-lbl">Correct</div></div>
                  <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Round</div></div>
                </div>
                <div class="game-card" style="text-align:center">
                  <div class="game-label">🎭 Hold to forehead · ${DUR}s</div>
                  <div class="game-prompt" style="font-size:2.5rem;letter-spacing:.05em">${currentWord}</div>
                  <div class="game-sub">Others describe this word: you guess!</div>
                  <div id="timer-container">${gameUtils.renderTimerRing(DUR, DUR)}</div>
                  <div class="game-controls" style="justify-content:center;gap:1rem">
                    <button class="btn-g-primary" style="background:var(--green)" onclick="COSY_GAME.ahResult(true)">✓ Got it!</button>
                    <button class="btn-g-secondary" onclick="COSY_GAME.ahResult(false)">Skip →</button>
                  </div>
                </div>
                <div style="text-align:center;font-size:.8rem;color:var(--ink-faint);margin-top:.5rem">✓ ${correct} correct · ↷ ${skipped} skipped</div>`;
            }

            const showActionEnd = () => {
              gameUtils.stopTimer();
              window.removeEventListener('deviceorientation', handleTilt); // Clean up listener!

              COSYGame.score = correct * 5;
              COSYScores.save(GAME_ID, lang, level, COSYGame.score);
              const best = COSYScores.best(GAME_ID, lang);

              // Play ending fanfares/sound triggers (Phase 3)
              if (correct > 0) {
                gameUtils.playGameSound('success');
                gameUtils.createConfetti();
              } else {
                gameUtils.playGameSound('error');
              }

              document.getElementById('go-body').innerHTML = `
                <div class="round-end">
                  <div class="re-icon">🏆</div>
                  <div class="re-title">Round over!</div>
                  <div class="re-sub">Time's up: here's how you did:</div>
                  <div class="re-stats">
                    <div class="sb-item"><div class="re-stat-val" style="color:var(--green)">${correct}</div><div class="re-stat-lbl">✓ Correct</div></div>
                    <div class="sb-item"><div class="re-stat-val" style="color:var(--ink-muted)">${skipped}</div><div class="re-stat-lbl">↷ Skipped</div></div>
                  </div>
                  ${best ? `<div class="game-sub" style="margin-bottom:1rem">Personal best: ${best.score} pts</div>` : ''}
                  <div class="re-actions">
                    <button class="btn-g-primary" onclick="COSY_GAME.start()">Play again ↺</button>
                    <button class="btn-g-secondary" onclick="location.href='../index.html'">Back to Hub</button>
                  </div>
                </div>`;
            }

            window.COSY_GAME.ahResult = (got) => {
              // Play click feedback sound on results (Phase 3)
              gameUtils.playGameSound(got ? 'success' : 'click');
              if (got) correct++; else skipped++;
              showWord();
            };

            showWord();
            gameUtils.startTimer('timer-val', DUR, showActionEnd);
        },

        reset: renderSetup
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();