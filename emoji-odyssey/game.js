/**
 * games/emoji-odyssey/game.js
 * Standalone logic for Emoji Odyssey.
 */
(function() {
    const GAME_ID = 'emoji';
    const GAME_TITLE = 'Emoji Odyssey 📖';
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
              <h2>Emoji Odyssey 📖</h2>
              <p>Two modes: <strong>Guess</strong> the word behind the emoji, or <strong>Tell a Story</strong> using a set of random emojis.</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level">${LEVEL_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <div class="setup-field"><label>Mode</label>
                <div class="setup-options">
                  <div class="setup-opt sel" onclick="COSY_GAME.selectOpt(this)" data-val="guess">🧩 Guess</div>
                  <div class="setup-opt" onclick="COSY_GAME.selectOpt(this)" data-val="story">📖 Story</div>
                </div>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_GAME.start()">▶ Start game</button>
            </div>`;
    }

    window.COSY_GAME = {
        selectOpt(el) {
            el.closest('.setup-options').querySelectorAll('.setup-opt').forEach(o => o.classList.remove('sel'));
            el.classList.add('sel');
        },

        async start() {
            const mode = document.querySelector('.setup-opt.sel[data-val]')?.dataset.val || 'guess';
            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
            const level = COSYLoader.getLevelCode(document.getElementById('s-level')?.value);
            const body = document.getElementById('go-body');
            body.innerHTML = '<div style="text-align:center;padding:4rem;">Loading...</div>';

            await COSYLoader.loadLevelData(lang, level);
            COSYGame.init(GAME_ID, lang, level);

            const vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];

            if (mode === 'guess') {
                const pool = vocab.filter(v => v.emoji).slice(0, 30);
                if (pool.length < 4) { body.innerHTML = '<div class="game-card">No emoji data found. <button id="eo-back">Back</button></div>'; document.getElementById('eo-back').onclick=()=>COSY_GAME.reset(); return; }

                const drawBag = gameUtils.createDrawBag(pool);
                let current = drawBag.next();

                const renderGuess = () => {
                    if (!COSYGame.nextRound()) {
                        COSY_GAME.renderEnd();
                        return;
                    }
                    const options = shuffle([current.word, ...shuffle(vocab.filter(v => v.word !== current.word)).slice(0, 3).map(v => v.word)]);
                    body.innerHTML = `
                        <div class="score-bar">
                            <div class="sb-item"><div class="sb-val">${COSYGame.score}</div><div class="sb-lbl">Score</div></div>
                            <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Round</div></div>
                        </div>
                        <div class="game-card" style="text-align:center">
                            <div class="game-label">🧩 What is this?</div>
                            <div class="game-prompt" style="font-size:5rem">${current.emoji}</div>
                            <div class="word-options" style="margin-top:1.5rem">
                                ${options.map(o => `<button class="word-opt" data-word="${gameUtils.escapeAttr(o)}" data-correct="${gameUtils.escapeAttr(current.word)}">${o}</button>`).join('')}
                            </div>
                            <div class="game-controls" style="margin-top:2rem">
                                <button class="btn-g-danger" onclick="COSY_GAME.reset()">Stop</button>
                            </div>
                        </div>`;

                    body.querySelectorAll('.word-opt').forEach(btn => {
                      btn.addEventListener('click', () => {
                        COSY_GAME.eoCheck(btn, btn.dataset.word, btn.dataset.correct);
                      });
                    });
                };

                window.COSY_GAME.eoCheck = (btn, val, correct) => {
                    if (val === correct) {
                        btn.classList.add('correct');
                        COSYGame.addScore(10);
                        setTimeout(() => { current = drawBag.next(); renderGuess(); }, 1000);
                    } else {
                        btn.classList.add('wrong');
                    }
                };
                renderGuess();
            } else {
                const emojis = (window.emojiData || ['🍎','🐶','🚗','🏠','⭐','🍕','✈️','⚽']);
                const nextSet = () => {
                    const picked = shuffle(emojis).slice(0, 4);
                    body.innerHTML = `
                        <div class="game-card" style="text-align:center">
                            <div class="game-label">📖 Tell a story using:</div>
                            <div class="game-prompt" style="font-size:3.5rem; letter-spacing:10px;">${picked.join('')}</div>
                            <div class="game-sub" style="margin-top:1rem">Build the next part of the story with these symbols!</div>
                            <div class="game-controls" style="justify-content:center; margin-top:2rem">
                                <button class="btn-g-primary" onclick="COSY_GAME.eoNextSet()">Next player →</button>
                                <button class="btn-g-danger" onclick="COSY_GAME.reset()">End Story</button>
                            </div>
                        </div>`;
                };
                window.COSY_GAME.eoNextSet = nextSet;
                nextSet();
            }
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