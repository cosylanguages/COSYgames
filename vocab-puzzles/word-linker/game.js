/**
 * games/word_linker/game.js
 * Standalone logic for Word Linker.
 */
(function() {
    const GAME_ID = 'wordlinker';
    const GAME_TITLE = 'Word Linker 🔗';
    const GAME_META = 'Vocabulary · Solo or group';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Word Linker 🔗</h2>
              <p>Four words appear. Find the connection between three of them, and spot the odd one out. Tests vocabulary depth and lateral thinking.</p>
              <div class="setup-field"><label>Mode</label>
                <select class="styled-sel" id="s-mode">
                  <option value="odd">Odd One Out ❌</option>
                  <option value="link">Common Connection 🔗</option>
                  <option value="all">Mixed Modes 🌀</option>
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
            const mode = document.getElementById('s-mode')?.value || 'all';
            document.getElementById('go-body').innerHTML = '<div style="text-align:center;padding:4rem;">Loading...</div>';

            await COSYLoader.loadLevelData(lang, level);
            COSYGame.init(GAME_ID, lang, level);

            const data = COSYLoader.getGameData(lang);
            let wlQ = 0;

            let source = data.wordlinker || [{words:['A','B','C','D'], odd:'D', link:'Letters', oddReason:'D is later'}];
            if (mode === 'odd') source = source.filter(q => q.odd !== 'none');
            if (mode === 'link') source = source.filter(q => q.odd === 'none');

            const drawBag = gameUtils.createDrawBag(source.length ? source : [{words:['A','B','C','D'], odd:'D', link:'Letters', oddReason:'D is later'}]);

            const nextWordLinker = () => {
                if (!COSYGame.nextRound()) {
                    COSY_GAME.renderEnd();
                    return;
                }
                const q = drawBag.next();
                const body = document.getElementById('go-body');
                const shuffled = shuffle(q.words);
                const hasOdd = q.odd !== 'none';

                body.innerHTML = `
                  <div class="score-bar">
                    <div class="sb-item"><div class="sb-val" id="wl-score">${COSYGame.score}</div><div class="sb-lbl">Score</div></div>
                    <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Question</div></div>
                  </div>
                  <div class="game-card">
                    <div class="game-label">🔗 ${hasOdd ? 'Find the odd one out' : 'What connects these words?'}</div>
                    <div class="word-options">
                      ${shuffled.map(w => `<button class="word-opt" data-word="${gameUtils.escapeAttr(w)}" data-odd="${gameUtils.escapeAttr(q.odd)}" data-link="${gameUtils.escapeAttr(q.link)}" data-reason="${gameUtils.escapeAttr(q.oddReason || "")}" data-hasodd="${hasOdd}">${w}</button>`).join('')}
                    </div>
                    <div class="feedback-bar" id="wl-fb"></div>
                    <div class="game-controls">
                      <button class="btn-g-primary" id="wl-next" onclick="COSY_GAME._nextWL()" style="display:none">Next →</button>
                      <button class="btn-g-danger" onclick="COSY_GAME.reset()">⬅ Setup</button>
                    </div>
                  </div>`;
                body.querySelectorAll('.word-opt').forEach(btn => {
                  btn.addEventListener('click', () => {
                    COSY_GAME.wlGuess(btn, btn.dataset.word, btn.dataset.odd, btn.dataset.link, btn.dataset.reason, btn.dataset.hasodd === 'true');
                  });
                });

                window.COSY_GAME._nextWL = nextWordLinker;
            }

            window.COSY_GAME.wlGuess = (el, word, odd, link, reason, hasOdd) => {
                document.querySelectorAll('.word-opt').forEach(b => b.disabled = true);
                const fb = document.getElementById('wl-fb');
                const next = document.getElementById('wl-next');
                if (next) next.style.display = 'inline-block';

                if (!hasOdd) {
                  el.classList.add('correct');
                  if (fb) {
                      fb.className = 'feedback-bar show ok';
                      fb.innerHTML = `✓ The link is: <strong>${link}</strong>`;
                  }
                  COSYGame.addScore(10);
                  const scoreEl = document.getElementById('wl-score');
                  if (scoreEl) scoreEl.textContent = COSYGame.score;
                  return;
                }

                if (word === odd) {
                  el.classList.add('correct');
                  if (fb) {
                      fb.className = 'feedback-bar show ok';
                      fb.innerHTML = `✓ Correct! <strong>${odd}</strong> is the odd one out. ${reason}. The others are: ${link}.`;
                  }
                  COSYGame.addScore(10);
                  const scoreEl = document.getElementById('wl-score');
                  if (scoreEl) scoreEl.textContent = COSYGame.score;
                } else {
                  el.classList.add('wrong');
                  document.querySelectorAll('.word-opt').forEach(b => { if (b.textContent === odd) b.classList.add('correct'); });
                  if (fb) {
                      fb.className = 'feedback-bar show bad';
                      fb.innerHTML = `✗ Not quite. The odd one out was <strong>${odd}</strong>. ${reason}.`;
                  }
                }
            };

            nextWordLinker();
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
                    <div class="re-title">Game Over!</div>
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