/**
 * games/cosy-crossword/game.js
 * Standalone logic for Cosy Crossword.
 */
(function() {
    const GAME_ID = 'crossword';
    const GAME_TITLE = 'Cosy Crossword 🧩';
    const GAME_META = 'Vocabulary · Solo';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Cosy Crossword 🧩</h2>
              <p>A crossword puzzle generated just for you. Use the clues to fill in the grid. Great for testing your vocabulary depth.</p>
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
            const body = document.getElementById('go-body');
            body.innerHTML = '<div class="game-loader-centered">Loading...</div>';

            await COSYLoader.loadLevelData(lang, level);
            COSYGame.init(GAME_ID, lang, level);

            body.innerHTML = `
                <div class="game-card game-card-centered">
                    <div class="game-label">🧩 Dynamic Puzzle</div>
                    <div id="crossword-grid-container" class="crossword-grid-box"></div>
                    <div class="game-prompt crossword-clue-box" id="crossword-clue-display">Click a cell to start</div>
                    <div class="game-controls game-controls-top-spaced">
                        <button class="btn-g-primary" onclick="COSY_GAME.cwCheck()">Check Grid</button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.start()">New Grid ↺</button>
                    </div>
                </div>
                <div class="crossword-two-col-grid">
                    <div class="game-card game-card-padded">
                        <div class="game-label">Across</div>
                        <div id="cw-clues-across" class="clues-list-box"></div>
                    </div>
                    <div class="game-card game-card-padded">
                        <div class="game-label">Down</div>
                        <div id="cw-clues-down" class="clues-list-box"></div>
                    </div>
                </div>`;

            if (window.CrosswordGame) {
                window.CrosswordGame.init(lang, level, 'all');
                window.CrosswordGame.render('crossword-grid-container');
                COSYGame.nextRound();
            }

            window.COSY_GAME.cwCheck = () => {
                if (window.CrosswordGame) {
                    const { allCorrect, percent } = window.CrosswordGame.check();
                    if (allCorrect) COSYGame.addScore(50);
                    const msg = allCorrect ? 'Perfect! Grid complete.' : `Keep going! ${percent}% correct.`;
                    gameUtils.showGameMessage(body, msg, allCorrect ? 'success' : 'info');
                }
            };
        },

        reset: renderSetup,

        renderEnd() {
            const lang = COSYGame.language;
            const level = COSYGame.level;
            COSYScores.save(GAME_ID, lang, level, COSYGame.score);
            const best = COSYScores.best(GAME_ID, lang);
            document.getElementById('go-body').innerHTML = `
                <div class="round-end">
                    <div class="re-icon">🧩</div>
                    <div class="re-title">Puzzle Session Over!</div>
                    <div class="re-sub">Your final score: <strong>${COSYGame.score}</strong></div>
                    ${best ? `<div class="game-sub personal-best-sub">Personal best: ${best.score} pts</div>` : ''}
                    <div class="re-actions">
                        <button class="btn-g-primary" onclick="COSY_GAME.start()">New Puzzle ↺</button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.reset()">Setup</button>
                    </div>
                </div>`;
        }
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();