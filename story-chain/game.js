/**
 * games/story-chain/game.js
 * Standalone logic for Story Chain.
 */
(function() {
    const GAME_ID = 'storychain';
    const GAME_TITLE = 'Story Chain 🃏';
    const GAME_META = 'Speaking · Solo or group';
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
              <h2>Story Chain 🃏</h2>
              <p>Build a story together. One person sees a secret word and writes a sentence using it (without saying the word). Others try to guess!</p>
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

            const data = COSYLoader.getGameData(lang);
            let story = [], pool = data.storychain || [];
            const vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];
            if (pool.length === 0 && vocab.length > 10) pool = vocab.map(v => v.word);
            if (pool.length === 0) pool = (data.action ? Object.values(data.action).flat() : ['Adventure', 'Friendship', 'Travel']);

            const drawBag = gameUtils.createDrawBag(pool);
            const body = document.getElementById('go-body');
            let currentWord = null;

            const renderStory = (reveal = false) => {
                if (!currentWord) currentWord = drawBag.next();
                body.innerHTML = `
                  <div class="score-bar">
                    <div class="sb-item"><div class="sb-val" id="sc-score">${COSYGame.score}</div><div class="sb-lbl">Score</div></div>
                    <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Round</div></div>
                  </div>
                    <div class="game-card">
                        <div class="game-label">🤫 Host only: keep secret!</div>
                        <div class="game-prompt" id="sc-word">${currentWord}</div>
                        <div class="game-sub">Use this word in a sentence. Don't say it! Others must guess.</div>
                    </div>
                    <div class="game-card">
                        <div class="game-label">📖 The Story So Far</div>
                        <div class="chain-display" style="font-size:.9rem; line-height:1.5; min-height:100px;">
                            ${story.length ? story.map(s => `<div style="margin-bottom:8px; border-bottom:1px solid var(--border); padding-bottom:4px;">${esc(s.sentence)} ${reveal ? `(<strong style="color:var(--gold)">${esc(s.word)}</strong>)` : ''}</div>`).join('') : 'No sentences yet…'}
                        </div>
                        <div class="input-row">
                            <input class="game-input" id="sc-input" placeholder="Type your sentence…" autocomplete="off" onkeydown="if(event.key==='Enter') COSY_GAME.scAdd()">
                            <button class="btn-g-primary" onclick="COSY_GAME.scAdd()">Add sentence</button>
                        </div>
                        <div class="game-controls" style="margin-top:1rem">
                            <button class="btn-g-secondary" onclick="COSY_GAME.scReveal()">Reveal words</button>
                            <button class="btn-g-danger" onclick="COSY_GAME.start()">New story ↺</button>
                        </div>
                    </div>`;
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

                // Complexity Analyzer (Stage 5.1)
                const langConnectors = CONNECTORS[lang] || CONNECTORS['en'];
                const foundConnector = langConnectors.find(c => sentence.toLowerCase().includes(c));

                if (foundConnector) {
                    points += 5;
                    bonusMsg = `✨ Complexity Bonus! +5 XP (used: "${foundConnector}")`;
                }

                story.push({ sentence: sentence, word: currentWord });
                currentWord = drawBag.next();
                COSYGame.addScore(points);

                renderStory();

                if (bonusMsg) {
                    gameUtils.showGameMessage(body, bonusMsg, 'success');
                    gameUtils.playGameSound('success');
                } else {
                    gameUtils.playGameSound('click');
                }
            };

            window.COSY_GAME.scReveal = () => renderStory(true);

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
                    <div class="re-title">Story Complete!</div>
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