/**
 * games/story-chain/game.js
 * Standalone logic for Story Chain - Paper Garland Chain Identity.
 */
(function() {
    const GAME_ID = 'storychain';
    const GAME_TITLE = 'Story Chain 🃏';
    const GAME_META = 'Speaking · Paper Garland Chain · A1–C2';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    function esc(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function createDrawBag(arr) {
        if (window.gameUtils && typeof window.gameUtils.createDrawBag === 'function') {
            return window.gameUtils.createDrawBag(arr);
        }
        if (window.COSYUtils && typeof window.COSYUtils.createDrawBag === 'function') {
            return window.COSYUtils.createDrawBag(arr);
        }
        const pool = Array.isArray(arr) && arr.length > 0 ? [...arr] : ['...'];
        let items = [...pool];
        return {
            next: function() {
                if (items.length === 0) items = [...pool];
                const idx = Math.floor(Math.random() * items.length);
                return items.splice(idx, 1)[0];
            }
        };
    }

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Story Chain 🃏</h2>
              <p>Build a paper garland story chain together. One person sees a secret word and writes a sentence using it (without saying the word). Watch the garland unfurl as each card connects edge-to-edge!</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level">${LEVEL_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_GAME.start()">▶ Start Chain</button>
            </div>`;
    }

    window.COSY_GAME = {
        async start() {
            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
            const level = COSYLoader.getLevelCode(document.getElementById('s-level')?.value);
            document.getElementById('go-body').innerHTML = '<div style="text-align:center;padding:4rem;">Loading Story Chain...</div>';

            await COSYLoader.loadLevelData(lang, level);
            COSYGame.init(GAME_ID, lang, level);

            const data = COSYLoader.getGameData(lang);
            let story = [], pool = data.storychain || [];
            const vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];
            if (pool.length === 0 && vocab.length > 10) pool = vocab.map(v => v.word);
            if (pool.length === 0) pool = (data.action ? Object.values(data.action).flat() : ['Adventure', 'Friendship', 'Travel']);

            const drawBag = createDrawBag(pool);
            const body = document.getElementById('go-body');
            let currentWord = null;

            const renderStory = (reveal = false, isNewCard = false) => {
                if (!currentWord) currentWord = drawBag.next();

                const cardsHtml = story.length ? story.map((s, idx) => {
                    const isLatest = idx === story.length - 1;
                    const animClasses = (isLatest && isNewCard) ? 'motion-unfurl motion-slide-chain newest-card-pulse' : '';
                    return `
                        <div class="sc-card ${animClasses}">
                            <div class="sc-card-index">Link #${idx + 1}</div>
                            <div class="sc-card-sentence">${esc(s.sentence)}</div>
                            ${reveal ? `<div class="sc-card-word">🔑 ${esc(s.word)}</div>` : ''}
                        </div>
                    `;
                }).join('') : '<div style="color:var(--muted); font-style:italic; padding: 1rem;">No links in the garland yet. Add the first sentence below!</div>';

                body.innerHTML = `
                  <div class="score-bar">
                    <div class="sb-item"><div class="sb-val" id="sc-score">${COSYGame.score}</div><div class="sb-lbl">Total Score</div></div>
                    <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Round</div></div>
                  </div>

                  <div class="game-card">
                      <div class="game-label">🤫 Host secret word: keep hidden!</div>
                      <div class="game-prompt" id="sc-word">${esc(currentWord)}</div>
                      <div class="game-sub">Incorporate this secret word in your sentence without saying it out loud.</div>
                  </div>

                  <div class="game-card" style="padding: 1rem 1.25rem;">
                      <div class="game-label">📜 Paper Garland Chain (${story.length} link${story.length === 1 ? '' : 's'})</div>
                      <div class="sc-chain-container" id="sc-chain-container">
                          ${cardsHtml}
                      </div>

                      <div class="sc-input-sticky-zone">
                          <div class="input-row">
                              <input class="game-input" id="sc-input" placeholder="Type sentence to extend chain…" autocomplete="off" onkeydown="if(event.key==='Enter') COSY_GAME.scAdd()">
                              <button class="btn-g-primary" onclick="COSY_GAME.scAdd()">➕ Add Link</button>
                          </div>
                      </div>

                      <div class="game-controls" style="margin-top:1rem">
                          <button class="btn-g-secondary" onclick="COSY_GAME.scReveal()">${reveal ? 'Hide words' : '👁️ Reveal words'}</button>
                          <button class="btn-g-danger" onclick="COSY_GAME.start()">New Garland ↺</button>
                      </div>
                  </div>`;

                // Scroll newest link into view
                const container = document.getElementById('sc-chain-container');
                if (container && isNewCard) {
                    container.scrollTop = container.scrollHeight;
                }
            };

            const CONNECTORS = {
              en: ["because", "although", "while", "however", "therefore", "since", "which", "who", "whom", "whose", "where", "when", "that", "if", "unless"],
              fr: ["parce que", "bien que", "tandis que", "mais", "cependant", "donc", "puisque", "qui", "que", "où", "dont", "comme", "si"],
              ru: ["что", "потому что", "хотя", "когда", "который", "поэтому", "так как", "если", "но", "однако"],
              it: ["perché", "sebbene", "mentre", "tuttavia", "quindi", "poiché", "che", "chi", "dove", "quando", "se", "ma"],
              es: ["porque", "aunque", "mientras", "sin embargo", "por lo tanto", "ya que", "que", "quien", "donde", "cuando", "si", "pero"]
            };

            window.COSY_GAME.scAdd = () => {
                const input = document.getElementById('sc-input');
                if (!input || !input.value.trim()) return;

                if (!COSYGame.nextRound()) {
                    COSY_GAME.renderEnd();
                    return;
                }

                const sentence = input.value.trim();
                let points = 10;
                let bonusMsg = "";

                const langConnectors = CONNECTORS[lang] || CONNECTORS['en'];
                const foundConnector = langConnectors.find(c => sentence.toLowerCase().includes(c));

                if (foundConnector) {
                    points += 5;
                    bonusMsg = `✨ Complexity Bonus! +5 XP (used connector: "${foundConnector}")`;
                }

                story.push({ sentence: sentence, word: currentWord });
                currentWord = drawBag.next();
                COSYGame.addScore(points);

                renderStory(false, true);

                if (window.gameUtils) {
                    if (bonusMsg && typeof window.gameUtils.showGameMessage === 'function') {
                        window.gameUtils.showGameMessage(body, bonusMsg, 'success');
                    }
                    if (typeof window.gameUtils.playGameSound === 'function') {
                        window.gameUtils.playGameSound(bonusMsg ? 'success' : 'click');
                    }
                }
            };

            window.COSY_GAME.scReveal = () => renderStory(true, false);

            renderStory();
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
                    <div class="re-title">Story Garland Complete!</div>
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
