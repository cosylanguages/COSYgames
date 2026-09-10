/**
 * games/identity_mystery/game.js
 * Standalone logic for Identity Mystery.
 */
(function() {
    const GAME_ID = 'identity';
    const GAME_TITLE = 'Identity Mystery 👤';
    const GAME_META = 'Mystery · Solo or group';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];


    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Identity Mystery 👤</h2>
              <p>A profession or person is shown (only to the host). Other players ask yes/no questions to figure out who it is. Great for practising question structures.</p>
              <div class="setup-field"><label>Category</label>
                <select class="styled-sel" id="s-cat">
                  <option value="all">All categories</option>
                  <option value="people">Famous People 🌟</option>
                  <option value="jobs">Jobs & Professions 💼</option>
                  <option value="nationalities">Nationalities 🌍</option>
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
            const category = document.getElementById('s-cat')?.value || 'all';
            document.getElementById('go-body').innerHTML = '<div style="text-align:center;padding:4rem;">Loading...</div>';

            await COSYLoader.loadLevelData(lang, level);
            COSYGame.init(GAME_ID, lang, level);
            COSYGame.maxRounds = 5;

            const data = COSYLoader.getGameData(lang);
            const vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];
            let pool = data.identity || [];

            if (vocab.length > 0) {
                if (category === 'jobs' || category === 'all') {
                    const jobs = vocab.filter(v => v.theme && (v.theme.includes('professions') || v.theme.includes('job')))
                        .map(v => ({ person: (v.article ? v.article + ' ' : '') + v.word, clue: v.definitions?.[0]?.text || '' }));
                    pool = [...pool, ...jobs];
                }
                if (category === 'people' || category === 'all') {
                    const people = vocab.filter(v => v.theme && (v.theme.includes('people') || v.theme.includes('person')))
                        .map(v => ({ person: v.word, clue: v.subtext || v.definitions?.[0]?.text || '' }));
                    pool = [...pool, ...people];
                }
                if (category === 'nationalities' || category === 'all') {
                    const nationals = vocab.filter(v => v.theme && v.theme.includes('nationality'))
                        .map(v => ({ person: v.word, clue: v.definitions?.[0]?.text || '' }));
                    pool = [...pool, ...nationals];
                }
            }

            const uniquePool = [];
            const seen = new Set();
            pool.forEach(item => {
                if (!seen.has(item.person) && item.person !== '...') {
                    uniquePool.push(item);
                    seen.add(item.person);
                }
            });

            const drawBag = gameUtils.createDrawBag(uniquePool.length ? uniquePool : [{person:'Teacher', clue:'They help you learn.'}]);

            const nextIM = () => {
                if (!COSYGame.nextRound()) {
                    COSY_GAME.renderEnd();
                    return;
                }
                const identity = drawBag.next();
                const body = document.getElementById('go-body');
                let questions = 0, maxQ = 20;

                body.innerHTML = `
                  <div class="score-bar">
                    <div class="sb-item"><div class="sb-val" id="im-score">${COSYGame.score}</div><div class="sb-lbl">Score</div></div>
                    <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Round</div></div>
                  </div>
                  <div class="game-card">
                    <div class="game-label">👤 Host only: keep this secret!</div>
                    <div class="game-prompt">${identity.person}</div>
                    <div class="game-sub">Clue for you: "${identity.clue}"<br><br>Others ask yes/no questions. You can only answer: <strong>Yes / No / Maybe / Partly</strong>.</div>
                  </div>
                  <div class="game-card">
                    <div class="game-label">💬 Questions asked</div>
                    <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:600;color:var(--teal);margin-bottom:.3rem" id="im-qcount">0 / ${maxQ}</div>
                    <div style="font-size:.82rem;color:var(--ink-muted);margin-bottom:1rem">Each click records a question.</div>
                    <div class="game-controls">
                      <button class="btn-g-primary" id="im-btn-question">+1 Question asked</button>
                      <button class="btn-g-secondary" id="im-btn-reveal">🎉 They guessed it!</button>
                      <button class="btn-g-danger" id="im-btn-new">Skip topic →</button>
                    </div>
                  </div>`;

                document.getElementById('im-btn-question').addEventListener('click', () => {
                  questions++;
                  document.getElementById('im-qcount').textContent = `${questions} / ${maxQ}`;
                  if (questions >= maxQ) COSY_GAME.imReveal(identity.person, questions, maxQ);
                });
                document.getElementById('im-btn-reveal').addEventListener('click', () => COSY_GAME.imReveal(identity.person, questions, maxQ));
                document.getElementById('im-btn-new').addEventListener('click', () => nextIM());
            };

            window.COSY_GAME.imReveal = (person, questions, maxQ) => {
              COSYGame.addScore(Math.max(0, (maxQ - questions) * 5));
              body.innerHTML = `
                <div class="game-card" style="text-align:center">
                  <div class="re-icon">🎉</div>
                  <div class="game-prompt">${person}</div>
                  <div class="game-sub">Guessed in ${questions} questions!</div>
                  <button class="btn-g-primary" id="im-btn-next-round" style="margin-top:1rem">Next identity →</button>
                </div>`;
              document.getElementById('im-btn-next-round').addEventListener('click', () => nextIM());
            };
            nextIM();
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