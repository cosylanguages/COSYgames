/**
 * games/opinion_arena/game.js
 * Standalone logic for Opinion Arena.
 */
(function() {
    const GAME_ID = 'opinion';
    const GAME_TITLE = 'Opinion Arena 🏟️';
    const GAME_META = 'Speaking · Solo or group · A2+';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

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
              <h2>Opinion Arena 🏟️</h2>
              <p>A statement appears. Agree or disagree, then speak for 1–2 minutes defending your view. Great for building confident, opinionated language.</p>
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
            document.getElementById('go-body').innerHTML = '<div style="text-align:center;padding:4rem;">Loading...</div>';

            await COSYLoader.loadLevelData(lang, level);
            COSYGame.init(GAME_ID, lang, level);
            COSYGame.maxRounds = 5;

            const data = COSYLoader.getGameData(lang);
            const drawBag = gameUtils.createDrawBag(data.opinions || ['...']);

            const nextOP = () => {
                if (!COSYGame.nextRound()) {
                    COSY_GAME.renderEnd();
                    return;
                }
                const rawItem = drawBag.next();
                const stmt = typeof rawItem === 'string' ? rawItem : (rawItem.topic || rawItem.text || rawItem.t || '...');
                const hints = (rawItem.hints || rawItem.h || []);
                const body = document.getElementById('go-body');
                const DUR = 90;

                body.innerHTML = `
                  <div class="score-bar">
                    <div class="sb-item"><div class="sb-val" id="op-score">${COSYGame.score}</div><div class="sb-lbl">Score</div></div>
                    <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Round</div></div>
                  </div>
                  <div class="game-card">
                    <div class="game-label">🏟️ Statement</div>
                    <div class="game-prompt">"${esc(stmt)}"</div>
                    ${hints.length > 0 ? `
                        <div style="font-size:.7rem; font-weight:700; text-transform:uppercase; color:var(--sage-dark); margin: .5rem 0 .5rem;">💡 Ideas for you:</div>
                        <ul style="font-size:.85rem; text-align:left; margin:0 0 1rem 1rem; padding:0; line-height:1.4">
                            ${hints.map(h => `<li>${esc(h)}</li>`).join('')}
                        </ul>` : ''}
                    <div class="game-sub" style="margin-top:.6rem">Do you agree or disagree? Choose a side, then speak for 90 seconds defending your view.</div>
                  </div>
                  <div class="setup-options" style="margin-bottom:1rem">
                    <div class="setup-opt" data-val="agree">I Agree</div>
                    <div class="setup-opt" data-val="disagree">I Disagree</div>
                  </div>
                  <div class="game-controls">
                    <button class="btn-g-primary" id="op-start" disabled>▶ Start speaking</button>
                    <button class="btn-g-secondary" id="op-new">Skip topic →</button>
                    <button class="btn-g-danger" id="op-reset">⬅ Setup</button>
                  </div>`;

                body.querySelectorAll('.setup-opt').forEach(opt => {
                    opt.addEventListener('click', () => {
                        COSY_GAME.selectOpt(opt);
                        document.getElementById('op-start').disabled = false;
                    });
                });
                document.getElementById('op-start').addEventListener('click', () => COSY_GAME.speak(stmt, DUR));
                document.getElementById('op-new').addEventListener('click', () => nextOP());
                document.getElementById('op-reset').addEventListener('click', () => COSY_GAME.reset());
            };
            COSY_GAME._next = nextOP;
            nextOP();
        },

        selectOpt(el) {
            el.closest('.setup-options').querySelectorAll('.setup-opt').forEach(o => o.classList.remove('sel'));
            el.classList.add('sel');
        },

        speak(stmt, dur) {
            const body = document.getElementById('go-body');
            body.innerHTML = `
              <div class="game-card">
                <div class="game-label">🏟️ Speak now</div>
                <div class="game-prompt" style="font-size:1rem;margin-bottom:.4rem">"${stmt}"</div>
                <div class="game-sub">Keep speaking until the timer runs out. Stay in your target language!</div>
                <div id="timer-container">${gameUtils.renderTimerRing(dur, dur)}</div>
                <div class="game-controls">
                  <button class="btn-g-secondary" id="op-new-active">Skip topic →</button>
                  <button class="btn-g-danger" id="op-reset-active">⬅ Setup</button>
                </div>
              </div>`;
            document.getElementById('op-new-active').addEventListener('click', () => COSY_GAME._next());
            document.getElementById('op-reset-active').addEventListener('click', () => COSY_GAME.reset());

            gameUtils.startTimer('timer-val', dur, () => {
              COSYGame.addScore(10);
              document.getElementById('go-body').insertAdjacentHTML('beforeend', `
                <div class="game-card" style="text-align:center; margin-top:1rem;">
                  <div style="font-size:1.8rem;margin-bottom:.5rem">👏</div>
                  <div class="game-prompt" style="font-size:1.1rem">Round complete!</div>
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
                    <div class="re-title">Session Complete!</div>
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