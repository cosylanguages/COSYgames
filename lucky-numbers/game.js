/**
 * games/lucky-numbers/game.js
 * Standalone logic for Lucky Numbers (Bingo).
 */
(function() {
    const GAME_ID = 'bingo';
    const GAME_TITLE = 'Lucky Numbers 🔢';
    const LANG_OPTS = window.cosyLanguageLabels ? window.cosyLanguageLabels(["en","fr","es","de","it","ru","el"]) : ["en","fr","es","de","it","ru","el"];
    const BINGO_LVLS = ['Bingo 1 (0-9)', 'Bingo 2 (10-19)', 'Bingo 3 (20-99)', 'Bingo 5 (Random)', 'Alphabet (A-Z)', 'Listening Practice 👂'];

    function getT() {
        return (window.COSYGameStrings && typeof window.COSYGameStrings.forGame === 'function')
            ? window.COSYGameStrings.forGame('lucky-numbers')
            : function(key, params, fallback) { return fallback || key; };
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        const T = getT();
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Lucky Numbers 🔢</h2>
              <p data-gs="setup.description">${T('setup.description', null, 'Play Bingo! You can be the Caller for a group, or play as a Player (solo or with a host).')}</p>
              <div class="gold-info-banner">
                📍 <span data-gs="setup.level">${T('setup.level', null, 'Level: Starter (A1)')}</span>
              </div>
              <div class="setup-field"><label data-gs="common.role">${T('common.role', null, 'Role')}</label>
                <div class="setup-options">
                  <div class="setup-opt sel" onclick="COSY_GAME.selectOpt(this)" data-val="player">🃏 <span data-gs="common.player">${T('common.player', null, 'Player')}</span></div>
                  <div class="setup-opt" onclick="COSY_GAME.selectOpt(this)" data-val="caller">📣 <span data-gs="role.caller">${T('role.caller', null, 'Caller')}</span></div>
                </div>
              </div>
              <div class="setup-field"><label data-gs="setup.type">${T('setup.type', null, 'Type')}</label>
                <select class="styled-sel" id="s-type">${BINGO_LVLS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <div class="setup-field"><label data-i18n="ui_practice_language">Practice language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_GAME.start()">▶ <span data-i18n="ui_start_game">Start game</span></button>
            </div>`;
    }

    window.COSY_GAME = {
        selectOpt(el) {
            el.closest('.setup-options').querySelectorAll('.setup-opt').forEach(o => o.classList.remove('sel'));
            el.classList.add('sel');
        },

        async start() {
            const T = getT();
            const role = document.querySelector('.setup-opt.sel[data-val]')?.dataset.val || 'player';
            const body = document.getElementById('go-body');
            const type = document.getElementById('s-type')?.value || 'Bingo 1 (0-9)';
            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
            const level = 'starter';
            body.innerHTML = `<div class="game-loader-centered" data-gs="common.loading">${T('common.loading', null, 'Loading...')}</div>`;

            await COSYLoader.loadLevelData(lang, level);
            COSYGame.init(GAME_ID, lang, level);

            const isListening = type.includes('Listening');

            if (role === 'caller') {
                body.innerHTML = `
                    <div class="game-card game-card-centered">
                        <div class="game-label">📣 <span data-gs="caller.label">${T('caller.label', null, 'Lucky Caller')}</span></div>
                        <div class="game-prompt game-prompt-large" id="bingo-call">${isListening ? '👂' : '---'}</div>
                        <div class="game-sub" id="bingo-call-word" data-gs="caller.ready">${T('caller.ready', null, 'Get ready to call!')}</div>
                        <div class="game-controls game-controls-centered-spaced">
                            <button class="btn-g-primary" id="btn-bingo-next"><span data-gs="btn.next_item">${T('btn.next_item', null, 'Next Item')}</span> 🎲</button>
                            <button class="btn-g-danger" id="btn-bingo-stop" data-gs="common.stop">${T('common.stop', null, 'Stop')}</button>
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
                        const wordEl = document.getElementById('bingo-call-word');
                        if (wordEl) wordEl.textContent = T('caller.pool_empty', null, 'Pool empty!');
                        return;
                    }
                    const item = drawBag.next();
                    drawnCount++;
                    const callEl = document.getElementById('bingo-call');

                    const spoken = window.gameUtils && gameUtils.speak ? gameUtils.speak(String(item), lang) : false;

                    if (isListening) {
                        if (!spoken) {
                            callEl.textContent = item;
                            const wordEl = document.getElementById('bingo-call-word');
                            if (wordEl) {
                                wordEl.textContent = "🔇 " + T('caller.speech_unavailable', null, 'Your browser cannot read numbers aloud.');
                            }
                        } else {
                            callEl.textContent = '👂';
                            callEl.onclick = () => { callEl.textContent = item; };
                            callEl.style.cursor = 'pointer';
                        }
                    } else {
                        callEl.textContent = item;
                    }
                    const hist = document.getElementById('bingo-history');
                    hist.textContent = (hist.textContent ? hist.textContent + ', ' : '') + item;
                };
            } else {
                if (!COSYGame.nextRound()) {
                    COSY_GAME.renderEnd();
                    return;
                }
                body.innerHTML = `
                  <div class="score-bar">
                    <div class="sb-item"><div class="sb-val">${COSYGame.score}</div><div class="sb-lbl" data-gs="common.score">${T('common.score', null, 'Score')}</div></div>
                    <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl" data-gs="player.card_num">${T('player.card_num', null, 'Card')}</div></div>
                  </div>
                    <div class="game-card game-card-centered">
                        <div class="game-label">🃏 <span data-gs="player.card_label">${T('player.card_label', null, 'Your Bingo Card')}</span></div>
                        <div id="bingo-grid" class="bingo-grid bingo-grid-layout"></div>
                        <div class="game-controls game-controls-centered">
                            <button class="btn-g-secondary" onclick="COSY_GAME.start()"><span data-gs="btn.new_card">${T('btn.new_card', null, 'New Card')}</span> ↺</button>
                            <button class="btn-g-danger" onclick="COSY_GAME.reset()"><span data-gs="common.btn_setup">${T('common.btn_setup', null, 'Setup')}</span></button>
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
                            const bingoMsg = T('feedback.bingo', null, 'BINGO!') + ' 🎉';
                            gameUtils.showGameMessage(body, bingoMsg, "success");
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
            const T = getT();
            const lang = COSYGame.language;
            const level = COSYGame.level;
            COSYScores.save(GAME_ID, lang, level, COSYGame.score);
            const best = COSYScores.best(GAME_ID, lang);
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
        }
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
