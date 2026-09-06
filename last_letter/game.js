/**
 * games/last_letter/game.js
 * Standalone logic for Last Letter.
 */
(function() {
    const GAME_ID = 'lastletter';
    const GAME_TITLE = 'Last Letter 🔤';
    const GAME_META = 'Vocabulary · Solo or group';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Last Letter 🔤</h2>
              <p>Type a word. The next word must start with the last letter of the previous word. Keep the chain going as long as possible without repeating!</p>
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

            let llChain = [];
            const LL_USED = new Set();
            const body = document.getElementById('go-body');

            body.innerHTML = `
              <div class="score-bar">
                <div class="sb-item"><div class="sb-val" id="ll-score">0</div><div class="sb-lbl">Chain length</div></div>
                <div class="sb-item"><div class="sb-val" id="ll-next-letter">-</div><div class="sb-lbl">Must start with</div></div>
              </div>
              <div class="game-card">
                <div class="game-label">🔤 Word chain</div>
                <div class="chain-display" id="ll-chain">Type the first word to start the chain…</div>
                <div class="input-row">
                  <input class="game-input" id="ll-input" placeholder="Type a word…" autocomplete="off" autocorrect="off" spellcheck="false">
                  <button class="btn-g-primary" onclick="COSY_GAME.llSubmit()">Add →</button>
                </div>
                <div class="feedback-bar" id="ll-fb"></div>
                <div class="game-controls">
                  <button class="btn-g-secondary" onclick="COSY_GAME.start()">Restart ↺</button>
                  <button class="btn-g-danger" onclick="COSY_GAME.reset()">⬅ Setup</button>
                </div>
              </div>`;

            const inputEl = document.getElementById('ll-input');
            if (inputEl) {
                inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') window.COSY_GAME.llSubmit(); });
                inputEl.focus();
            }

            window.COSY_GAME.llSubmit = () => {
                if (!COSYGame.nextRound()) {
                    COSY_GAME.renderEnd();
                    return;
                }
                const input = document.getElementById('ll-input');
                const fb = document.getElementById('ll-fb');
                if (!input || !fb) return;
                const word = input.value.trim().toLowerCase().replace(/[^a-zàâäéèêëîïôùûüæœçñáíóúüý\u0400-\u04FF\u0370-\u03FF]/gi,'');
                input.value = '';

                if (!word || word.length < 2) {
                  this.showFB(fb, 'bad', 'Please enter a word with at least 2 letters.');
                  return;
                }
                if (LL_USED.has(word)) {
                  this.showFB(fb, 'bad', `"${word}" was already used! Try another.`);
                  input.classList.add('bad'); setTimeout(() => input.classList.remove('bad'), 600);
                  return;
                }
                if (llChain.length > 0) {
                  const lastChar = llChain[llChain.length - 1].slice(-1).toLowerCase();
                  if (word[0] !== lastChar) {
                    this.showFB(fb, 'bad', `"${word}" doesn't start with <strong>${lastChar.toUpperCase()}</strong>. Try again!`);
                    input.classList.add('bad'); setTimeout(() => input.classList.remove('bad'), 600);
                    return;
                  }
                }

                LL_USED.add(word);
                llChain.push(word);
                COSYGame.addScore(5);

                document.getElementById('ll-score').textContent = COSYGame.score;
                document.getElementById('ll-next-letter').textContent = `${COSYGame.round}/${COSYGame.maxRounds} · ${word.slice(-1).toUpperCase()}`;
                document.getElementById('ll-chain').innerHTML = llChain.map((w,i) =>
                  `<span style="color:${i===llChain.length-1?'var(--teal)':'var(--ink-muted)'};font-weight:${i===llChain.length-1?'600':'400'}">${w}</span>`
                ).join(' → ');

                input.classList.add('ok'); setTimeout(() => input.classList.remove('ok'), 400);
                this.showFB(fb, 'ok', `✓ "${word}" accepted! Next word must start with <strong>${word.slice(-1).toUpperCase()}</strong>.`);
                input.focus();
            };
        },

        showFB(el, type, msg) {
            el.className = `feedback-bar show ${type}`;
            el.innerHTML = msg;
            clearTimeout(el._t);
            el._t = setTimeout(() => { el.className = 'feedback-bar'; }, 2500);
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
                    <div class="re-sub">Chain length: <strong>${COSYGame.score / 5}</strong> words. Score: ${COSYGame.score} pts.</div>
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
