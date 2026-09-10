/**
 * games/etymology_explorer/game.js
 * Game logic for Etymology Explorer.
 */
(function() {
    const GAME_ID = 'etymology';
    const GAME_TITLE = 'Etymology Explorer 📜';
    const GAME_META = 'Vocabulary · Solo or group';
    const LEVEL_OPTS = ['Easy (Greek, Latin, French...)', 'Medium (Arabic, Chinese, Czech...)', 'Hard (Obscure origins)'];
    const LANG_OPTS = ['English 🇬🇧'];

    function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Etymology Explorer 📜</h2>
              <p>Do you know where our words come from? Test your knowledge of linguistic history and discover the fascinating roots of everyday vocabulary.</p>
              <div class="setup-field"><label>Difficulty</label>
                <select class="styled-sel" id="s-level">
                  <option value="easy">Easy (Common roots)</option>
                  <option value="medium">Medium (Loanwords)</option>
                  <option value="hard">Hard (Deep history)</option>
                </select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_GAME.start()">▶ Start journey</button>
            </div>`;
    }

    window.COSY_GAME = {
        async start() {
            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
            const levelVal = document.getElementById('s-level')?.value || 'easy';
            document.getElementById('go-body').innerHTML = '<div style="text-align:center;padding:4rem;">Loading history...</div>';

            await COSYLoader.loadLevelData(lang, 'starter'); // We use starter vocab as base if needed
            COSYGame.init(GAME_ID, lang, levelVal);
            COSYGame.maxRounds = 10;

            const data = COSYLoader.getGameData(lang);
            let levelMap = {
                'easy': ['easy', 'starter', 'a1', 'a2', 'elementary'],
                'medium': ['medium', 'intermediate', 'b1', 'b2'],
                'hard': ['hard', 'advanced', 'c1', 'c2', 'proficiency']
            };
            let allowedLevels = levelMap[levelVal] || [levelVal];
            let questions = (data.etymology || []).filter(q => !q.level || allowedLevels.includes(q.level.toLowerCase()));

            if (questions.length === 0) {
              questions = [{ word: 'Error', options: ['None'], answer: 'None', detail: 'No data found for this level.' }];
            }

            const drawBag = gameUtils.createDrawBag(questions);

            const nextQuestion = () => {
                if (!COSYGame.nextRound()) {
                    this.renderEnd();
                    return;
                }

                const q = drawBag.next();
                const body = document.getElementById('go-body');
                const shuffledOptions = shuffle(q.options);

                body.innerHTML = `
                  <div class="score-bar">
                    <div class="sb-item"><div class="sb-val" id="et-score">${COSYGame.score}</div><div class="sb-lbl">Score</div></div>
                    <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Question</div></div>
                  </div>
                  <div class="game-card">
                    <div class="game-label">Where does this word come from?</div>
                    <div class="etymology-word" style="font-size: 2.5rem; font-weight: 800; color: var(--ink); margin: 1.5rem 0; font-family: 'Fraunces', serif;">${q.word}</div>
                    <div class="word-options">
                      ${shuffledOptions.map(opt => `<button class="word-opt" data-opt="${gameUtils.escapeAttr(opt)}" data-answer="${gameUtils.escapeAttr(q.answer)}" data-detail="${gameUtils.escapeAttr(q.detail)}" data-path="${gameUtils.escapeAttr(q.path || "")}">${opt}</button>`).join('')}
                    </div>
                    <div class="feedback-bar" id="et-fb"></div>
                    <div class="game-controls">
                      <button class="btn-g-primary" id="et-next" style="display:none">Next Word →</button>
                      <button class="btn-g-danger" id="et-reset">⬅ Exit</button>
                    </div>
                  </div>`;

                body.querySelectorAll('.word-opt').forEach(btn => {
                    btn.addEventListener('click', () => {
                        COSY_GAME.guess(btn, btn.dataset.opt, btn.dataset.answer, btn.dataset.detail, btn.dataset.path);
                    });
                });
                document.getElementById('et-next').addEventListener('click', () => COSY_GAME._nextQ());
                document.getElementById('et-reset').addEventListener('click', () => COSY_GAME.reset());
            };
            window.COSY_GAME._nextQ = nextQuestion;

            window.COSY_GAME.guess = (el, selected, correct, detail, path) => {
                document.querySelectorAll('.word-opt').forEach(b => b.disabled = true);
                const fb = document.getElementById('et-fb');
                const next = document.getElementById('et-next');
                if (next) next.style.display = 'inline-block';

                const pathHtml = path ? `<div class="et-path" style="margin-top:0.5rem; font-family: monospace; font-size: 0.85rem; opacity: 0.8;">${path}</div>` : '';

                if (selected === correct) {
                    el.classList.add('correct');
                    fb.className = 'feedback-bar show ok';
                    fb.innerHTML = `<div>✓ <strong>Correct!</strong> ${detail}</div>${pathHtml}`;
                    COSYGame.addScore(10);
                    document.getElementById('et-score').textContent = COSYGame.score;
                } else {
                    el.classList.add('wrong');
                    document.querySelectorAll('.word-opt').forEach(b => {
                        if (b.textContent === correct) b.classList.add('correct');
                    });
                    fb.className = 'feedback-bar show bad';
                    fb.innerHTML = `<div>✗ <strong>Actually, it's ${correct}.</strong> ${detail}</div>${pathHtml}`;
                }
            };

            nextQuestion();
        },

        renderEnd() {
            const lang = COSYGame.language;
            const level = COSYGame.level;
            COSYScores.save(GAME_ID, lang, level, COSYGame.score);
            const best = COSYScores.best(GAME_ID, lang);
            const body = document.getElementById('go-body');
            body.innerHTML = `
                <div class="setup-screen">
                  <h2>Journey Complete! 📜</h2>
                  <div class="final-score" style="font-size: 3rem; font-weight: 800; color: var(--teal); margin: 1rem 0;">${COSYGame.score}</div>
                  ${best ? `<div class="game-sub" style="margin-bottom:1rem">Personal best: ${best.score} pts</div>` : ''}
                  <p>You've explored the roots of many words. Keep practicing to become a master etymologist!</p>
                  <div style="display:flex; gap:1rem; justify-content:center; margin-top:2rem;">
                    <button class="btn-start-game" onclick="COSY_GAME.start()">Play Again</button>
                    <button class="btn-g-danger" onclick="COSY_GAME.reset()">Back to Setup</button>
                  </div>
                </div>`;
        },

        reset: renderSetup
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderSetup);
    } else {
        renderSetup();
    }
})();
