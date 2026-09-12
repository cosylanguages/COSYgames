/**
 * games/lucky-numbers/game.js
 * Standalone logic for Lucky Numbers (Bingo).
 */
(function() {
    const GAME_ID = 'bingo';
    const GAME_TITLE = 'Lucky Numbers 🔢';
    const GAME_META = 'Puzzles · Solo or group';
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];
    const BINGO_LVLS = ['Bingo 1 (0-9)', 'Bingo 2 (10-19)', 'Bingo 3 (20-99)', 'Bingo 5 (Random)', 'Alphabet (A-Z)', 'Listening Practice 👂'];

    function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Lucky Numbers 🔢</h2>
              <p>Play Bingo! You can be the <strong>Caller</strong> for a group, or play as a <strong>Player</strong> (solo or with a host).</p>
              <div class="gold-info-banner">
                📍 Level: Starter (A1)
              </div>
              <div class="setup-field"><label>Role</label>
                <div class="setup-options">
                  <div class="setup-opt sel" onclick="COSY_GAME.selectOpt(this)" data-val="player">🃏 Player</div>
                  <div class="setup-opt" onclick="COSY_GAME.selectOpt(this)" data-val="caller">📣 Caller</div>
                </div>
              </div>
              <div class="setup-field"><label>Type</label>
                <select class="styled-sel" id="s-type">${BINGO_LVLS.map(l=>`<option>${l}</option>`).join('')}</select>
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
            const role = document.querySelector('.setup-opt.sel[data-val]')?.dataset.val || 'player';
            const body = document.getElementById('go-body');
            const type = document.getElementById('s-type')?.value || 'Bingo 1 (0-9)';
            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
            const level = 'starter';
            body.innerHTML = '<div class="game-loader-centered">Loading...</div>';

            await COSYLoader.loadLevelData(lang, level);
            COSYGame.init(GAME_ID, lang, level);

            const isListening = type.includes('Listening');

            if (role === 'caller') {
                body.innerHTML = `
                    <div class="game-card game-card-centered">
                        <div class="game-label">📣 Lucky Caller</div>
                        <div class="game-prompt game-prompt-large" id="bingo-call">${isListening ? '👂' : '---'}</div>
                        <div class="game-sub" id="bingo-call-word">Get ready to call!</div>
                        <div class="game-controls game-controls-centered-spaced">
                            <button class="btn-g-primary" id="btn-bingo-next">Next Item 🎲</button>
                            <button class="btn-g-danger" id="btn-bingo-stop">Stop</button>
                        </div>
                        <div id="bingo-history" class="game-history-box"></div>
                    </div>`;

                let pool = [];
                if (type.includes('Alphabet')) {
                    const alpha = (window.alphabetsData && window.alphabetsData[lang]) ? window.alphabetsData[lang].split('') : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
                    pool = alpha;
                } else if (type.includes('Bingo 1')) {
                    pool = Array.from({length: 10}, (_, i) => i);
                } else if (type.includes('Bingo 2')) {
                    pool = Array.from({length: 10}, (_, i) => i + 10);
                } else if (type.includes('Bingo 3')) {
                    pool = Array.from({length: 80}, (_, i) => i + 20);
                } else {
                    pool = Array.from({length: 100}, (_, i) => i);
                }

                const drawBag = gameUtils.createDrawBag(pool);
                const maxItems = pool.length;
                let drawnCount = 0;

                document.getElementById('btn-bingo-next').addEventListener('click', () => COSY_GAME.bingoNext());
                document.getElementById('btn-bingo-stop').addEventListener('click', () => COSY_GAME.reset());

                window.COSY_GAME.bingoNext = () => {
                    if (drawnCount >= maxItems) {
                        document.getElementById('bingo-call-word').textContent = 'Pool empty!';
                        return;
                    }
                    const item = drawBag.next();
                    drawnCount++;
                    const callEl = document.getElementById('bingo-call');
                    if (isListening) {
                        callEl.textContent = '👂';
                        callEl.onclick = () => { callEl.textContent = item; };
                        callEl.style.cursor = 'pointer';
                    } else {
                        callEl.textContent = item;
                    }
                    const hist = document.getElementById('bingo-history');
                    hist.textContent = (hist.textContent ? hist.textContent + ', ' : '') + item;
                    if (gameUtils?.speak) gameUtils.speak(item.toString(), lang);
                };
            } else {
                if (!COSYGame.nextRound()) {
                    COSY_GAME.renderEnd();
                    return;
                }
                body.innerHTML = `
                  <div class="score-bar">
                    <div class="sb-item"><div class="sb-val">${COSYGame.score}</div><div class="sb-lbl">Score</div></div>
                    <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Card</div></div>
                  </div>
                    <div class="game-card game-card-centered">
                        <div class="game-label">🃏 Your Bingo Card</div>
                        <div id="bingo-grid" class="bingo-grid bingo-grid-layout"></div>
                        <div class="game-controls game-controls-centered">
                            <button class="btn-g-secondary" onclick="COSY_GAME.start()">New Card ↺</button>
                            <button class="btn-g-danger" onclick="COSY_GAME.reset()">Setup</button>
                        </div>
                    </div>`;

                const grid = document.getElementById('bingo-grid');
                let pool = [];
                if (type.includes('Alphabet')) {
                    pool = (window.alphabetsData && window.alphabetsData[lang]) ? window.alphabetsData[lang].split('') : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
                } else if (type.includes('Bingo 1')) {
                    pool = Array.from({length: 10}, (_, i) => i);
                } else if (type.includes('Bingo 2')) {
                    pool = Array.from({length: 10}, (_, i) => i + 10);
                } else if (type.includes('Bingo 3')) {
                    pool = Array.from({length: 80}, (_, i) => i + 20);
                } else {
                    pool = Array.from({length: 100}, (_, i) => i);
                }

                let nums = shuffle(pool).slice(0, 9);
                if (!type.includes('Alphabet')) nums.sort((a, b) => a - b);

                nums.forEach(n => {
                    const cell = document.createElement('div');
                    cell.className = 'word-opt';
                    cell.style.textAlign = 'center';
                    cell.style.fontSize = '1.2rem';
                    cell.textContent = n;
                    cell.onclick = () => {
                        cell.classList.toggle('correct');
                        if (cell.classList.contains('correct')) {
                            COSYGame.addScore(5);
                            checkWin();
                        }
                    };
                    grid.appendChild(cell);
                });

                function checkWin() {
                    const cells = Array.from(grid.children);
                    const isCorrect = (idx) => cells[idx].classList.contains('correct');

                    const lines = [
                        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
                        [0, 4, 8], [2, 4, 6]             // Diagonals
                    ];

                    for (const line of lines) {
                        if (line.every(isCorrect)) {
                            gameUtils.showGameMessage(body, "BINGO! 🎉", "success");
                            gameUtils.createConfetti();
                            COSYGame.addScore(50);
                            break;
                        }
                    }
                }
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
                    ${best ? `<div class="game-sub personal-best-sub">Personal best: ${best.score} pts</div>` : ''}
                    <div class="re-actions">
                        <button class="btn-g-primary" onclick="COSY_GAME.start()">Play again ↺</button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.reset()">Setup</button>
                    </div>
                </div>`;
        }
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();