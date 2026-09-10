/**
 * games/fluency_flow/game.js
 * Standalone logic for Fluency Flow.
 */
(function() {
    const GAME_ID = 'fluency';
    const GAME_TITLE = 'Fluency Flow 🗣️';
    const GAME_META = 'Speaking · Solo or group';
    const DUR_OPTS = ['1 minute','2 minutes','3 minutes','5 minutes'];
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    let TIMER_INTERVAL = null;

    function esc(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }


    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Fluency Flow 🗣️</h2>
              <p>A topic will appear. Speak about it for the chosen duration without stopping. The goal is fluency: keep the words coming, don't worry about mistakes.</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level">${LEVEL_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <div class="setup-field"><label>Duration</label>
                <div class="setup-options">${DUR_OPTS.map((d,i)=>`<div class="setup-opt ${i===1?'sel':''}" data-val="${d}"><span class="setup-opt-icon">⏱</span>${d}</div>`).join('')}</div>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" id="ff-start">▶ Start game</button>
            </div>`;
        body.querySelectorAll('.setup-opt').forEach(opt => {
            opt.addEventListener('click', () => COSY_GAME.selectOpt(opt));
        });
        document.getElementById('ff-start').addEventListener('click', () => COSY_GAME.start());
    }

    window.COSY_GAME = {
        selectOpt(el) {
            el.closest('.setup-options').querySelectorAll('.setup-opt').forEach(o => o.classList.remove('sel'));
            el.classList.add('sel');
        },

        async start() {
            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
            const level = COSYLoader.getLevelCode(document.getElementById('s-level')?.value);
            document.getElementById('go-body').innerHTML = '<div class="game-loader-centered">Loading data...</div>';

            await COSYLoader.loadLevelData(lang, level);
            COSYGame.init(GAME_ID, lang, level);
            COSYGame.maxRounds = 10;

            const data = COSYLoader.getGameData(lang);
            const durBag = gameUtils.createDrawBag(data.fluency || ['...']);
            const durStr = document.querySelector('.setup-opt.sel[data-val]')?.dataset.val || '2 minutes';
            const dur = parseInt(durStr) * 60;
            const body = document.getElementById('go-body');
            let running = false;

            const showTopic = () => {
              if (!COSYGame.nextRound()) {
                  COSY_GAME.renderEnd();
                  return;
              }
              const rawItem = durBag.next();
              const topic = typeof rawItem === 'string' ? rawItem : (rawItem.topic || rawItem.text || rawItem.t || '...');
              const hints = (rawItem.hints || rawItem.h || []);

              body.innerHTML = `
                <div class="score-bar">
                  <div class="sb-item"><div class="sb-val" id="ff-score">${COSYGame.score}</div><div class="sb-lbl">Score</div></div>
                  <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Round</div></div>
                </div>
                <div class="game-card">
                  <div class="game-label">🗣️ Your topic</div>
                  <div class="game-prompt" id="ff-topic">${esc(topic)}</div>
                  ${hints.length > 0 ? `
                    <div class="ideas-title-sage">💡 Ideas for you:</div>
                    <ul class="ideas-list-styled">
                        ${hints.map(h => `<li>${esc(h)}</li>`).join('')}
                    </ul>` : ''}
                  <div class="game-sub">Speak about this topic for <strong>${durStr}</strong> without stopping. Don't worry about mistakes: keep talking!</div>
                  <div id="timer-container">${gameUtils.renderTimerRing(dur, dur)}</div>
                  <div class="game-controls">
                    <button class="btn-g-primary" id="ff-btn">▶ Start speaking</button>
                    <button class="btn-g-secondary" id="ff-dict">+ Vocabulary</button>
                    <button class="btn-g-secondary" id="ff-new">New topic ↺</button>
                    <button class="btn-g-danger" id="ff-reset">⬅ Setup</button>
                  </div>
                </div>`;
            }

            window.COSY_GAME.toggleTimer = (total) => {
                if (!running) {
                  running = true;
                  document.getElementById('ff-btn').textContent = '⏸ Pause';
                  gameUtils.startTimer('timer-val', total, () => {
                    running = false;
                    COSYGame.addScore(1);
                    COSYScores.save(GAME_ID, lang, level, COSYGame.score);
                    const best = COSYScores.best(GAME_ID, lang);

                    const scoreEl = document.getElementById('ff-score');
                    if (scoreEl) scoreEl.textContent = COSYGame.score;
                    const btn = document.getElementById('ff-btn');
                    if (btn) {
                        btn.textContent = '✓ Done! Next topic →';
                        btn.addEventListener('click', () => { showTopic(); }, {once: true});
                        if (best) {
                            gameUtils.showGameMessage(body, `Topics: ${COSYGame.score} (Best: ${best.score})`);
                        }
                    }
                  });
                } else {
                  gameUtils.stopTimer(); running = false;
                  document.getElementById('ff-btn').textContent = '▶ Resume';
                }
            };

            showTopic();

            document.getElementById('ff-btn').addEventListener('click', () => COSY_GAME.toggleTimer(dur));
            document.getElementById('ff-dict').addEventListener('click', (e) => {
                if (window.COSY && COSY.addToDict) {
                    COSY.addToDict({ word: topic, definition: 'Fluency Flow Topic' }, e.target);
                }
            });
            document.getElementById('ff-new').addEventListener('click', () => COSY_GAME.start());
            document.getElementById('ff-reset').addEventListener('click', () => COSY_GAME.reset());
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
                    <div class="re-title">Flow Complete!</div>
                    <div class="re-sub">Topics covered: <strong>${COSYGame.score}</strong></div>
                    ${best ? `<div class="game-sub personal-best-sub">Personal best: ${best.score}</div>` : ''}
                    <div class="re-actions">
                        <button class="btn-g-primary" onclick="COSY_GAME.start()">Play again ↺</button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.reset()">Setup</button>
                    </div>
                </div>`;
        }
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();