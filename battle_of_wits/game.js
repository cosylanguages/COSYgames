/**
 * games/battle_of_wits/game.js
 * Standalone logic for Battle of Wits.
 */
(function() {
    const GAME_ID = 'battle';
    const GAME_TITLE = 'Battle of Wits ⚖️';
    const GAME_META = 'Speaking · Group · B1+';
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
              <h2>Battle of Wits ⚖️</h2>
              <p>Two things are shown. Each player (or team) picks a side and argues for it. After 2 minutes each, the group votes on who was most convincingly.</p>
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
            COSYGame.maxRounds = 3;

            const data = COSYLoader.getGameData(lang);
            const drawBag = gameUtils.createDrawBag(data.battle || [{sideA:'A', sideB:'B', topic:'Which is better?'}]);

            const nextBattle = () => {
                if (!COSYGame.nextRound()) {
                    COSY_GAME.renderEnd();
                    return;
                }
                const debate = drawBag.next();
                const body = document.getElementById('go-body');
                const DUR = 120;

                const sideA = debate.sideA || (Array.isArray(debate) ? debate[0] : 'A');
                const sideB = debate.sideB || (Array.isArray(debate) ? debate[1] : 'B');
                const topic = debate.topic || 'Which is better?';

                body.innerHTML = `
                  <div class="score-bar">
                    <div class="sb-item"><div class="sb-val" id="bt-score">${COSYGame.score}</div><div class="sb-lbl">Score</div></div>
                    <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Round</div></div>
                  </div>
                  <div class="game-card">
                    <div class="game-label">⚖️ Choose your side</div>
                    <div class="game-prompt">${topic}</div>
                    <div class="setup-options" style="margin:1rem 0">
                      <div class="setup-opt sel" data-val="0"><span class="setup-opt-icon">🅰️</span>${sideA}</div>
                      <div class="setup-opt" data-val="1"><span class="setup-opt-icon">🅱️</span>${sideB}</div>
                    </div>
                    <div class="game-sub">Each side gets 2 minutes to argue their case. Then the group votes!</div>
                    <div class="game-controls" style="margin-top:.5rem">
                      <button class="btn-g-primary" id="btn-start-battle">▶ Start debate</button>
                      <button class="btn-g-secondary" id="btn-new-topic">Skip topic →</button>
                    </div>
                  </div>`;

                body.querySelectorAll('.setup-opt').forEach(opt => {
                    opt.addEventListener('click', () => COSY_GAME.selectOpt(opt));
                });
                document.getElementById('btn-start-battle').addEventListener('click', () => COSY_GAME.doBattle(debate, DUR));
                document.getElementById('btn-new-topic').addEventListener('click', () => nextBattle());
            };
            COSY_GAME._next = nextBattle;
            nextBattle();
        },

        selectOpt(el) {
            el.closest('.setup-options').querySelectorAll('.setup-opt').forEach(o => o.classList.remove('sel'));
            el.classList.add('sel');
        },

        doBattle(debate, dur) {
            let battleRound = 0;
            const sides = [
                { name: debate.sideA || (Array.isArray(debate)?debate[0]:'A'), ideas: debate.ideasA || [] },
                { name: debate.sideB || (Array.isArray(debate)?debate[1]:'B'), ideas: debate.ideasB || [] }
            ];

            const runRound = () => {
              const currentSide = sides[battleRound];
              const body = document.getElementById('go-body');
              body.innerHTML = `
                <div class="game-card">
                  <div class="game-label">⚖️ Round ${battleRound+1} of 2</div>
                  <div class="game-prompt">Arguing for: <em>${esc(currentSide.name)}</em></div>

                  ${currentSide.ideas.length > 0 ? `
                    <div style="background:var(--sage-light); padding:1rem; border-radius:var(--r-md); margin:1rem 0; border: 1px solid var(--border);">
                        <div style="font-size:.7rem; font-weight:700; text-transform:uppercase; color:var(--sage-dark); margin-bottom:.5rem;">💡 Ideas for you:</div>
                        <ul style="font-size:.85rem; padding-left:1.2rem; color:var(--ink-muted); line-height:1.4;">
                            ${currentSide.ideas.map(i => `<li>${esc(i)}</li>`).join('')}
                        </ul>
                    </div>
                  ` : ''}

                  <div class="game-sub">Speak for 2 minutes. Be convincing!</div>
                  <div id="timer-container">${gameUtils.renderTimerRing(dur, dur)}</div>
                  <div class="game-controls">
                    <button class="btn-g-danger" onclick="COSY_GAME.reset()">⬅ Setup</button>
                  </div>
                </div>`;
              gameUtils.startTimer('timer-val', dur, () => {
                battleRound++;
                if (battleRound < 2) {
                  body.innerHTML = `
                    <div class="game-card" style="text-align:center">
                      <div style="font-size:1.8rem;margin-bottom:.5rem">👏</div>
                      <div class="game-prompt">Round ${battleRound} done!</div>
                  <div class="game-sub">Now it's <strong>${esc(sides[battleRound].name)}</strong>'s turn.</div>
                  <button class="btn-g-primary" style="margin:1rem auto 0;display:block" id="btn-run-round">▶ Start round ${battleRound+1}</button>
                    </div>`;
               document.getElementById('btn-run-round').addEventListener('click', runRound);
                } else {
                    COSYGame.addScore(10);
                    body.innerHTML = `
                    <div class="game-card" style="text-align:center">
                      <div class="re-icon">🗳️</div>
                      <div class="re-title">Both sides heard!</div>
                      <div class="re-sub">Vote now: who was most convincing?</div>
                      <div class="setup-options" style="margin-bottom:1.2rem">
                        <div class="setup-opt"><span>🅰️</span>${esc(sides[0].name)}</div>
                        <div class="setup-opt"><span>🅱️</span>${esc(sides[1].name)}</div>
                      </div>
                      <button class="btn-g-primary" id="btn-next-battle">Next topic →</button>
                    </div>`;
                    body.querySelectorAll('.setup-opt').forEach(opt => {
                        opt.addEventListener('click', () => COSY_GAME.selectOpt(opt));
                    });
                    document.getElementById('btn-next-battle').addEventListener('click', () => COSY_GAME._next());
                }
              });
            }
            runRound();
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
                    <div class="re-title">Battle Complete!</div>
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