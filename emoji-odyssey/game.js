/**
 * games/emoji-odyssey/game.js
 * Standalone logic for Emoji Odyssey with Floating Constellation Identity.
 */
(function() {
    const GAME_ID = 'emoji';
    const GAME_TITLE = 'Emoji Odyssey 📖';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = window.cosyLanguageLabels(["en","fr","es","de","it","ru","el"]);

    let collectedPairs = [];

    function getT() {
        return (window.COSYGameStrings && typeof window.COSYGameStrings.forGame === 'function')
            ? window.COSYGameStrings.forGame('emoji-odyssey')
            : function(key, params, fallback) { return fallback || key; };
    }

    function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }

    function renderSetup() {
        if (typeof COSYLoader !== 'undefined' && COSYLoader.clearLevelNote) {
            COSYLoader.clearLevelNote();
        }
        document.getElementById('go-title').textContent = GAME_TITLE;
        const T = getT();
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Emoji Odyssey 📖</h2>
              <p data-gs="setup.description">${T('setup.description', null, 'Two modes: Guess the word behind the emoji, or Tell a Story using a set of random emojis.')}</p>
              <div class="setup-field"><label data-i18n="ui_level">Level</label>
                <select class="styled-sel" id="s-level">${window.cosyLevelOptions(LEVEL_OPTS)}</select>
              </div>
              <div class="setup-field"><label data-gs="common.mode">${T('common.mode', null, 'Mode')}</label>
                <div class="setup-options">
                  <div class="setup-opt sel" onclick="COSY_GAME.selectOpt(this)" data-val="guess">🧩 <span data-gs="mode.guess">${T('mode.guess', null, 'Guess')}</span></div>
                  <div class="setup-opt" onclick="COSY_GAME.selectOpt(this)" data-val="story">📖 <span data-gs="mode.story">${T('mode.story', null, 'Story')}</span></div>
                </div>
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
            const mode = document.querySelector('.setup-opt.sel[data-val]')?.dataset.val || 'guess';
            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
            const level = COSYLoader.getLevelCode(document.getElementById('s-level')?.value);
            const body = document.getElementById('go-body');
            body.innerHTML = `<div style="text-align:center;padding:4rem;" data-gs="common.loading">${T('common.loading', null, 'Loading...')}</div>`;

            await COSYLoader.loadLevelData(lang, level);
            const vres = await COSYVocab.ensure(lang, COSYVocab.levelCode(level), {needEmoji:true, min:24, forms:['noun','verb','adjective']});
            COSYGame.init(GAME_ID, lang, level);
            collectedPairs = [];

            const vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];

            COSYLoader.clearLevelNote();

            if (mode === 'guess') {
                const pool = shuffle(vocab.filter(v => v.emoji)).slice(0, 30);
                if (pool.length < 4) {
                    const failMsg = vres.source === 'unavailable'
                        ? T('err.no_data', null, "Couldn't load vocabulary from COSYdata. Check your connection, or try Story mode.")
                        : T('err.not_enough', null, "Not enough emoji vocabulary for this language yet.");
                    body.innerHTML = `<div class="game-card">${failMsg} <button id="eo-back"><span data-gs="common.back">${T('common.back', null, 'Back')}</span></button></div>`;
                    document.getElementById('eo-back').onclick=()=>COSY_GAME.reset();
                    return;
                }

                if (vres.widened && pool.length > 0) {
                    COSYLoader.showLevelNote(COSYLoader.levelNoteText());
                }

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
                            <div class="sb-item"><div class="sb-val">${COSYGame.score}</div><div class="sb-lbl" data-gs="common.score">${T('common.score', null, 'Score')}</div></div>
                            <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl" data-gs="common.round">${T('common.round', null, 'Round')}</div></div>
                        </div>
                        <div class="game-card" style="text-align:center">
                            <div class="game-label">🧩 <span data-gs="play.floating_title">${T('play.floating_title', null, 'Floating Constellation Match')}</span></div>

                            <!-- Constellation Area -->
                            <div class="eo-constellation-container">
                                <div class="eo-emoji-floating" id="current-floating-emoji">${current.emoji}</div>
                            </div>

                            <div id="speech-bubble-mount"></div>

                            <div class="word-options" style="margin-top:1.5rem">
                                ${options.map(o => `<button class="word-opt" data-word="${gameUtils.escapeAttr(o)}" data-correct="${gameUtils.escapeAttr(current.word)}">${gameUtils.escapeHtml(o)}</button>`).join('')}
                            </div>

                            <!-- Collected Tray in Corner -->
                            <div class="collected-tray" id="collected-tray">
                                <span data-gs="play.collected">${T('play.collected', null, 'Collected:')}</span>
                                <div id="collected-chips" style="display:flex; gap:0.4rem; flex-wrap:wrap;">
                                    ${collectedPairs.length === 0 ? `<span style="opacity:0.6; font-weight:400;" data-gs="play.empty">${T('play.empty', null, '(empty)')}</span>` : collectedPairs.map(p => `<span class="collected-pair-chip">${p.emoji} ${gameUtils.escapeHtml(p.word)}</span>`).join('')}
                                </div>
                            </div>

                            <div class="game-controls" style="margin-top:1.5rem">
                                <button class="btn-g-danger" onclick="COSY_GAME.reset()" data-gs="common.stop">${T('common.stop', null, 'Stop')}</button>
                            </div>
                        </div>`;

                    body.querySelectorAll('.word-opt').forEach(btn => {
                      btn.addEventListener('click', () => {
                        COSY_GAME.eoCheck(btn, btn.dataset.word, btn.dataset.correct, current);
                      });
                    });
                };

                window.COSY_GAME.eoCheck = (btn, val, correct, item) => {
                    if (val === correct) {
                        btn.classList.add('correct');
                        COSYGame.addScore(10);

                        // Speech Bubble Unfurl Animation around paired phrase
                        const bubbleMount = document.getElementById('speech-bubble-mount');
                        if (bubbleMount) {
                            const bubble = document.createElement('div');
                            bubble.className = 'speech-bubble-unfurl motion-unfurl';
                            bubble.textContent = `✨ "${correct}"`;
                            bubbleMount.appendChild(bubble);
                        }

                        // Collect pair into tray with motion-slide-chain
                        collectedPairs.push({ emoji: item.emoji, word: correct });
                        const chipsContainer = document.getElementById('collected-chips');
                        if (chipsContainer) {
                            const chip = document.createElement('span');
                            chip.className = 'collected-pair-chip motion-slide-chain';
                            chip.innerHTML = `${item.emoji} ${gameUtils.escapeHtml(correct)}`;
                            chipsContainer.appendChild(chip);
                        }

                        setTimeout(() => { current = drawBag.next(); renderGuess(); }, 1200);
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
                            <div class="game-label">📖 <span data-gs="play.story_title">${T('play.story_title', null, 'Tell a story using:')}</span></div>

                            <div class="eo-constellation-container">
                                ${picked.map(e => `<div class="eo-emoji-floating">${e}</div>`).join('')}
                            </div>

                            <div class="game-sub" style="margin-top:1rem" data-gs="play.story_sub">${T('play.story_sub', null, 'Build the next part of the story with these symbols!')}</div>
                            <div class="game-controls" style="justify-content:center; margin-top:2rem">
                                <button class="btn-g-primary" onclick="COSY_GAME.eoNextSet()"><span data-gs="btn.next_player">${T('btn.next_player', null, 'Next player')}</span> →</button>
                                <button class="btn-g-danger" onclick="COSY_GAME.reset()" data-gs="btn.end_story">${T('btn.end_story', null, 'End Story')}</button>
                            </div>
                        </div>`;
                };
                window.COSY_GAME.eoNextSet = nextSet;
                nextSet();
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
                    ${best ? `<div class="game-sub" style="margin-bottom:1rem">${T('common.personal_best', { score: best.score }, `Personal best: ${best.score} pts`)}</div>` : ''}
                    <div class="re-actions">
                        <button class="btn-g-primary" onclick="COSY_GAME.start()"><span data-i18n="ui_play_again">Play again</span> ↺</button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.reset()"><span data-gs="common.btn_setup">${T('common.btn_setup', null, 'Setup')}</span></button>
                    </div>
                </div>`;
        }
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
