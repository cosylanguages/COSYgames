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
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = window.cosyLanguageLabels(["en","fr","es","de","it","ru","el"]);

    function getT() {
        return (window.COSYGameStrings && typeof window.COSYGameStrings.forGame === 'function')
            ? window.COSYGameStrings.forGame('action-hero')
            : function(key, params, fallback) { return fallback || key; };
    }

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
        const T = getT();
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Action Hero 🎭</h2>
              <p data-gs="setup.description">${T('setup.description', null, 'Act out target action verbs, emotions, and phrases! Mimic, describe without saying the word, or make sound effects for your team to guess.')}</p>

              <!-- Hands-free sensory tip -->
              <div style="background: var(--cream-dark); border: 1.5px dashed var(--border); border-radius: 12px; padding: 1rem; margin-bottom: 1.5rem; text-align: left; font-size: 0.88rem; line-height: 1.5;">
                📱 <strong data-gs="play.acting_rules">${T('play.acting_rules', null, 'Acting Guidelines')}</strong>
                <ul>
                  <li><span data-gs="play.rule_1">${T('play.rule_1', null, 'Act it out silently using gestures and body language.')}</span></li>
                  <li><span data-gs="play.rule_2">${T('play.rule_2', null, 'Describe the scenario without saying the exact words on the card.')}</span></li>
                  <li><span data-gs="play.rule_3">${T('play.rule_3', null, 'Use sound effects if allowed by your group!')}</span></li>
                </ul>
              </div>

              <div class="setup-field"><label data-gs="common.category">${T('common.category', null, 'Category')}</label>
                <select class="styled-sel" id="s-cat">
                  <option value="all" data-gs="cat.all">${T('cat.all', null, 'All Categories 🌟')}</option>
                  <option value="verbs" data-gs="cat.daily">${T('cat.daily', null, 'Daily Routines 🌅')}</option>
                  <option value="group:environment_nature" data-gs="cat.nature">${T('cat.nature', null, 'Nature & Outdoors 🌲')}</option>
                  <option value="group:food_drink" data-gs="cat.sports">${T('cat.sports', null, 'Sports & Hobbies ⚽')}</option>
                  <option value="group:places_geography" data-gs="cat.travel">${T('cat.travel', null, 'Travel & Adventure ✈️')}</option>
                  <option value="group:home_living" data-gs="cat.household">${T('cat.household', null, 'Household Chores 🧹')}</option>
                  <option value="group:clothes_appearance" data-gs="cat.professions">${T('cat.professions', null, 'Professions & Work 💼')}</option>
                  <option value="group:health_body" data-gs="cat.emotions">${T('cat.emotions', null, 'Emotions & States 😊')}</option>
                  <option value="group:sport_leisure" data-gs="cat.arts">${T('cat.arts', null, 'Arts & Entertainment 🎭')}</option>
                </select>
              </div>
              <div class="setup-field"><label data-i18n="ui_level">Level</label>
                <select class="styled-sel" id="s-level">${window.cosyLevelOptions(LEVEL_OPTS)}</select>
              </div>
              <div class="setup-field"><label data-i18n="ui_practice_language">Practice language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_GAME.start()">▶ <span data-i18n="ui_start_game">Start game</span></button>
            </div>`;
    }

    window.COSY_GAME = {
        scoreDialInstance: null,
        touchStartY: 0,

        async start() {
            const T = getT();
            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
            const level = COSYLoader.getLevelCode(document.getElementById('s-level')?.value);
            const category = document.getElementById('s-cat')?.value || 'all';
            document.getElementById('go-body').innerHTML = `<div style="text-align:center;padding:4rem;" data-gs="common.loading">${T('common.loading', null, 'Loading...')}</div>`;

            await COSYLoader.loadLevelData(lang, level, 'action');
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
                const levelKey = COSYLoader.getLevelKey(level);
                const levelOrder = ['starter', 'elementary', 'intermediate', 'upper_intermediate', 'advanced', 'proficiency'];
                let collected = [];
                if (data.action) {
                    const idx = levelOrder.indexOf(levelKey);
                    const startIdx = idx >= 0 ? idx : 0;
                    for (let i = startIdx; i >= 0; i--) {
                        const k = levelOrder[i];
                        if (Array.isArray(data.action[k]) && data.action[k].length > 0) {
                            collected = collected.concat(data.action[k]);
                        }
                        if (collected.length >= 8) break;
                    }
                } else {
                    collected = ['JUMP', 'RUN', 'DANCE', 'SING', 'SWIM'];
                }
                pool = collected;
            }

            if (pool.length === 0) {
                document.getElementById('go-body').innerHTML = `
                    <div class="round-end">
                      <p>No words available for this language and level yet.</p>
                      <div class="re-actions">
                        <button class="btn-g-secondary" onclick="COSY_GAME.reset()">Setup</button>
                      </div>
                    </div>`;
                return;
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

              const T = getT();
              body.innerHTML = `
                <div class="action-container">
                  <div id="action-aria-live" class="sr-only-announcer" aria-live="assertive" aria-atomic="true"></div>
                  <div id="projector-scoredial-container" class="projector-scoredial-pin"></div>

                  <div class="action-game-card" id="action-card-el">
                    <div class="action-card-header">
                      <div class="action-game-label">💥 <span data-gs="play.title">${T('play.title', null, 'Action Hero')}</span></div>
                      <div class="sb-item"><span style="font-weight:800;color:var(--game-accent);"><span data-gs="common.round">${T('common.round', null, 'Round')}</span> ${COSYGame.round}/${COSYGame.maxRounds}</span></div>
                    </div>

                    <div class="action-prompt-text" id="action-prompt-word">${currentWord}</div>

                    <div id="timer-container">${gameUtils.renderTimerRing(DUR, DUR)}</div>

                    <div class="action-controls">
                      <button class="btn-comic-gotit" type="button" onclick="COSY_GAME.ahResult(true)">✓ <span data-gs="btn.guessed">${T('btn.guessed', null, 'Guessed!')}</span></button>
                      <button class="btn-comic-skip" type="button" onclick="COSY_GAME.ahResult(false)"><span data-gs="btn.skip">${T('btn.skip', null, 'Skip Card')}</span> ➔</button>
                    </div>
                  </div>

                  <div style="text-align:center;font-size:0.9rem;font-weight:700;color:#64748b;margin-top:0.5rem">
                    ✓ ${correct} · ↷ ${skipped}
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
              const T = getT();

              if (correct > 0) {
                gameUtils.playGameSound('success');
                gameUtils.createConfetti();
              } else {
                gameUtils.playGameSound('error');
              }

              document.getElementById('go-body').innerHTML = `
                <div class="round-end">
                  <div class="re-icon">🏆</div>
                  <div class="re-title" data-gs="common.game_over">${T('common.game_over', null, 'Game Over!')}</div>
                  <div class="re-sub">${T('common.final_score', { score: `<strong>${COSYGame.score}</strong>` }, `Your final score: <strong>${COSYGame.score}</strong>`)}</div>
                  ${best ? `<div class="game-sub personal-best-sub">${T('common.personal_best', { score: best.score }, `Personal best: ${best.score} pts`)}</div>` : ''}
                  <div class="re-actions">
                    <button class="btn-g-primary" onclick="COSY_GAME.start()"><span data-i18n="ui_play_again">Play again</span> ↺</button>
                    <button class="btn-g-secondary" onclick="COSY_GAME.reset()"><span data-gs="common.btn_setup">${T('common.btn_setup', null, 'Setup')}</span></button>
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
