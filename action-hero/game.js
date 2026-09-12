/**
 * games/action-hero/game.js
 * Standalone logic for Action Hero with Comic-Book Identity, legible-from-a-distance
 * feedback, starburst POP animation, screen reader aria-live accessibility,
 * phone-safe swipe/tap layout, and projector ScoreDial pinning.
 */
(function() {
    'use strict';

    const GAME_ID = 'action';
    const GAME_TITLE = 'Action Hero 🎭';
    const GAME_META = 'Mystery · Comic Charades';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    // Comic burst pop words per language
    const POP_WORDS = {
        en: ['POW!', 'BAM!', 'BOOM!', 'ZAP!', 'KA-POW!'],
        fr: ['BAM!', 'PAN!', 'BOUM!', 'PAF!'],
        it: ['BAM!', 'SABAM!', 'BOOM!', 'PATATRAC!'],
        ru: ['БАМ!', 'БУМ!', 'БАБАХ!'],
        el: ['ΜΠΑΜ!', 'ΜΠΟΥΜ!', 'ΠΑΦ!']
    };

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Action Hero 🎭</h2>
              <p>Comic-book charades challenge! Hold your phone to your forehead. Others describe the verb: you guess. 60 seconds round duration. Swipe up or tap "Got it!" to score!</p>

              <!-- Hands-free sensory tip -->
              <div style="background: var(--cream-dark); border: 1.5px dashed var(--border); border-radius: 12px; padding: 1rem; margin-bottom: 1.5rem; text-align: left; font-size: 0.88rem; line-height: 1.5;">
                📱 <strong>Hands-Free Tilt & Touch Controls:</strong>
                <ul>
                  <li>• <strong>Swipe Up / Got it:</strong> ✓ POW! Got it!</li>
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
        scoreDialInstance: null,
        touchStartY: 0,

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
                pool = (data.action && data.action[shortLvl]) ? data.action[shortLvl] : (data.action ? (data.action['B2'] || data.action['A2']) : ['JUMP', 'RUN', 'DANCE', 'SING', 'SWIM']);
            }

            const drawBag = gameUtils.createDrawBag(pool);
            let correct = 0, skipped = 0;
            const DUR = 60;

            // Physical tilt gesture handler
            let lastTiltTime = 0;
            const handleTilt = (event) => {
                const now = Date.now();
                if (now - lastTiltTime < 1500) return;

                const beta = event.beta;
                if (beta === null) return;

                if (beta < 55) {
                    lastTiltTime = now;
                    COSY_GAME.ahResult(true);
                } else if (beta > 125) {
                    lastTiltTime = now;
                    COSY_GAME.ahResult(false);
                }
            };

            const requestOrientation = () => {
                if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
                    DeviceOrientationEvent.requestPermission()
                        .then(state => {
                            if (state === 'granted') window.addEventListener('deviceorientation', handleTilt);
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

              const currentMode = (window.ViewContext && typeof window.ViewContext.getMode === 'function')
                  ? window.ViewContext.getMode()
                  : (document.documentElement.dataset.context || 'phone');

              body.innerHTML = `
                <div class="action-container">
                  <!-- Accessible ARIA-Live Announcer -->
                  <div id="action-aria-live" class="sr-only-announcer" aria-live="assertive" aria-atomic="true"></div>

                  <!-- Projector ScoreDial Pin -->
                  <div id="projector-scoredial-container" class="projector-scoredial-pin"></div>

                  <div class="action-game-card" id="action-card-el">
                    <div class="action-card-header">
                      <div class="action-game-label">💥 Action Hero · ${DUR}s</div>
                      <div class="sb-item"><span style="font-weight:800;color:var(--game-accent);">Round ${COSYGame.round}/${COSYGame.maxRounds}</span></div>
                    </div>

                    <div class="action-prompt-text" id="action-prompt-word">${currentWord}</div>
                    <div class="action-sub-text">Others describe this word: you guess!</div>

                    <div id="timer-container">${gameUtils.renderTimerRing(DUR, DUR)}</div>

                    <div class="action-controls">
                      <button class="btn-comic-gotit" type="button" onclick="COSY_GAME.ahResult(true)">✓ POW! Got it!</button>
                      <button class="btn-comic-skip" type="button" onclick="COSY_GAME.ahResult(false)">Skip →</button>
                    </div>

                    <div class="action-swipe-hint">☝️ Swipe up anywhere on card to submit!</div>
                  </div>

                  <div style="text-align:center;font-size:0.9rem;font-weight:700;color:#64748b;margin-top:0.5rem">
                    ✓ ${correct} correct · ↷ ${skipped} skipped
                  </div>
                </div>`;

              // Instantiate ScoreDial under data-context="projector"
              if (currentMode === 'projector' && window.ScoreDial) {
                  const dialBox = document.getElementById('projector-scoredial-container');
                  if (dialBox) {
                      COSY_GAME.scoreDialInstance = new window.ScoreDial(dialBox, {
                          score: correct * 5,
                          label: 'PTS'
                      });
                  }
              }

              // Bind touch swipe-up listener on phone context
              const cardEl = document.getElementById('action-card-el');
              if (cardEl) {
                  cardEl.addEventListener('touchstart', (e) => {
                      if (e.touches && e.touches.length > 0) {
                          COSY_GAME.touchStartY = e.touches[0].clientY;
                      }
                  }, { passive: true });

                  cardEl.addEventListener('touchend', (e) => {
                      if (e.changedTouches && e.changedTouches.length > 0) {
                          const touchEndY = e.changedTouches[0].clientY;
                          const deltaY = COSY_GAME.touchStartY - touchEndY;
                          if (deltaY > 60) { // Swipe Up gesture!
                              COSY_GAME.ahResult(true);
                          }
                      }
                  }, { passive: true });
              }
            };

            const showActionEnd = () => {
              gameUtils.stopTimer();
              window.removeEventListener('deviceorientation', handleTilt);

              COSYGame.score = correct * 5;
              COSYScores.save(GAME_ID, lang, level, COSYGame.score);
              const best = COSYScores.best(GAME_ID, lang);

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
                    <button class="btn-g-secondary" onclick="COSY_GAME.reset()">Setup</button>
                  </div>
                </div>`;
            };

            window.COSY_GAME.ahResult = (got) => {
              gameUtils.playGameSound(got ? 'success' : 'click');

              if (got) {
                correct++;
                if (COSY_GAME.scoreDialInstance) {
                    COSY_GAME.scoreDialInstance.setScore(correct * 5);
                }

                // Announce accessibility text
                const announcer = document.getElementById('action-aria-live');
                if (announcer) announcer.textContent = 'Correct!';

                // Trigger Comic Starburst POP overlay (.motion-burst fading within 600ms)
                COSY_GAME.triggerComicBurst(lang);
              } else {
                skipped++;
              }

              setTimeout(() => showWord(), got ? 550 : 0);
            };

            showWord();
            gameUtils.startTimer('timer-val', DUR, showActionEnd);
        },

        triggerComicBurst(lang) {
            const cardEl = document.getElementById('action-card-el');
            if (!cardEl) return;

            const popList = POP_WORDS[lang] || POP_WORDS.en;
            const popText = popList[Math.floor(Math.random() * popList.length)];

            const burstOverlay = document.createElement('div');
            burstOverlay.className = 'comic-burst-overlay';
            burstOverlay.innerHTML = `
                <div class="comic-burst-shape motion-burst">
                    <div class="comic-burst-text">${popText}</div>
                </div>`;

            cardEl.appendChild(burstOverlay);
            setTimeout(() => {
                if (burstOverlay.parentNode) burstOverlay.parentNode.removeChild(burstOverlay);
            }, 580);
        },

        reset: renderSetup
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderSetup);
    } else {
        renderSetup();
    }
})();
