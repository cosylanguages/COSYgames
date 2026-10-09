/**
 * games/word-linker/game.js
 * Standalone logic for Word Linker - Magnetic Bridge Identity.
 */
(function() {
    const GAME_ID = 'wordlinker';
    const GAME_TITLE = 'Word Linker 🧲';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = window.cosyLanguageLabels(["en","fr","es","de","it","ru","el"]);

    function getT() {
        return (window.COSYGameStrings && typeof window.COSYGameStrings.forGame === 'function')
            ? window.COSYGameStrings.forGame('word-linker')
            : function(key, params, fallback) { return fallback || key; };
    }

    function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }

    let selectedPlank = null;
    let completedBridges = []; // Array of { wordA, wordB, link }

    function renderSetup() {
        if (typeof COSYLoader !== 'undefined' && typeof COSYLoader.clearLevelNote === 'function') {
            COSYLoader.clearLevelNote();
        }
        document.getElementById('go-title').textContent = GAME_TITLE;
        const T = getT();
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen" style="max-width:600px; margin:0 auto;">
              <h2>Word Linker 🧲</h2>
              <p data-gs="setup.description">${T('setup.description', null, 'Construct a magnetic bridge across vocabulary pairs! Select words to magnetically snap them together into connected bridge planks.')}</p>

              <div class="setup-field"><label data-gs="common.mode">${T('common.mode', null, 'Mode')}</label>
                <select class="styled-sel" id="s-mode">
                  <option value="link" data-gs="mode.link">${T('mode.link', null, 'Common Connection 🔗')}</option>
                  <option value="odd" data-gs="mode.odd">${T('mode.odd', null, 'Odd One Out ❌')}</option>
                  <option value="all" data-gs="mode.all">${T('mode.all', null, 'Mixed Modes 🌀')}</option>
                </select>
              </div>
              <div class="setup-field"><label data-i18n="ui_level">Level</label>
                <select class="styled-sel" id="s-level">${window.cosyLevelOptions(LEVEL_OPTS)}</select>
              </div>
              <div class="setup-field"><label data-i18n="ui_practice_language">Practice language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" style="margin-top:2rem; width:100%;" onclick="COSY_GAME.start()">▶ <span data-gs="btn.construct">${T('btn.construct', null, 'Construct Bridge')}</span></button>
            </div>`;
    }

    function humanize(id) {
        if (!id) return '';
        var s = String(id).replace(/[-_]/g, ' ');
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    window.COSY_GAME = {
        async start() {
            if (typeof COSYLoader !== 'undefined' && typeof COSYLoader.clearLevelNote === 'function') {
                COSYLoader.clearLevelNote();
            }
            const T = getT();
            const rawLevelSel = document.getElementById('s-level')?.value;
            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
            const level = COSYLoader.getLevelCode(rawLevelSel);
            const mode = document.getElementById('s-mode')?.value || 'all';
            document.getElementById('go-body').innerHTML = `<div style="text-align:center;padding:4rem;" data-gs="play.loading">${T('play.loading', null, 'Assembling magnetic field...')}</div>`;

            await COSYLoader.loadLevelData(lang, level, 'wordlinker');
            COSYGame.init(GAME_ID, lang, level);

            const gen = window.COSYVocab ? await COSYVocab.buildLinkPuzzles(lang, COSYVocab.levelCode(rawLevelSel), {count: 30}) : {ok: false, puzzles: []};
            COSYLoader.clearLevelNote();
            if (gen.widened) {
                COSYLoader.showLevelNote(COSYLoader.levelNoteText());
            }

            const convertedPuzzles = (gen.puzzles || []).map(p => {
                const isOdd = p.odd !== 'none';
                const link = humanize(p.theme);
                let oddReason = '';
                if (isOdd) {
                    const template = window.tOr ? window.tOr('hl_reason_belongs', 'It belongs to: {theme}') : 'It belongs to: {theme}';
                    oddReason = template.replace('{theme}', humanize(p.oddTheme));
                }
                return {
                    words: p.words,
                    odd: p.odd,
                    link: link,
                    oddReason: oddReason
                };
            });

            const data = COSYLoader.getGameData(lang);
            let builtIn = data.wordlinker || [{words:['Bridge','Arch','Pillar','Tower'], odd:'none', link:'Architectural structures', oddReason:''}];
            let source = [...builtIn, ...convertedPuzzles];
            if (mode === 'odd') source = source.filter(q => q.odd !== 'none');
            if (mode === 'link') source = source.filter(q => q.odd === 'none');

            const drawBag = gameUtils.createDrawBag(source.length ? source : [{words:['Bridge','Arch','Pillar','Tower'], odd:'none', link:'Architectural structures', oddReason:''}]);
            completedBridges = [];

            const nextWordLinker = () => {
                if (!COSYGame.nextRound()) {
                    COSY_GAME.renderEnd();
                    return;
                }
                const q = drawBag.next();
                const body = document.getElementById('go-body');
                const shuffled = shuffle(q.words);
                const hasOdd = q.odd !== 'none';
                selectedPlank = null;

                const isPhone = document.documentElement.dataset.context === 'phone';

                body.innerHTML = `
                  <div class="score-bar">
                    <div class="sb-item"><div class="sb-val" id="wl-score">${COSYGame.score}</div><div class="sb-lbl" data-gs="common.score">${T('common.score', null, 'Score')}</div></div>
                    <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl" data-gs="play.span">${T('play.span', null, 'Span')}</div></div>
                    <div class="sb-item"><div class="sb-val">${completedBridges.length}</div><div class="sb-lbl" data-gs="play.bridges">${T('play.bridges', null, 'Bridges')}</div></div>
                  </div>

                  <div class="bridge-arena">
                    ${isPhone ? `<div class="phone-tap-instruction">📱 <span data-gs="play.instruction">${T('play.instruction', null, 'Tap word A then tap word B to magnetically bridge them together')}</span></div>` : ''}

                    <div class="game-card">
                      <div class="game-label">🧲 ${hasOdd ? `<span data-gs="play.label_odd">${T('play.label_odd', null, 'Spot the unbridgeable odd word out')}</span>` : `<span data-gs="play.label_link">${T('play.label_link', null, 'Tap pairs to forge a magnetic bridge connection')}</span>`}</div>

                      <div class="word-options-grid" id="plank-grid">
                        ${shuffled.map(w => `<button class="word-plank" data-word="${gameUtils.escapeAttr(w)}" data-odd="${gameUtils.escapeAttr(q.odd)}" data-link="${gameUtils.escapeAttr(q.link)}" data-reason="${gameUtils.escapeAttr(q.oddReason || "")}" data-hasodd="${hasOdd}">${gameUtils.escapeHtml(w)}</button>`).join('')}
                      </div>

                      <div class="feedback-bar" id="wl-fb"></div>

                      <div class="game-controls" style="margin-top:1rem;">
                        <button class="btn-g-primary" id="wl-next" onclick="COSY_GAME._nextWL()" style="display:none"><span data-gs="btn.next_span">${T('btn.next_span', null, 'Next Span')}</span> →</button>
                        <button class="btn-g-danger" onclick="COSY_GAME.reset()">⬅ <span data-gs="common.btn_setup">${T('common.btn_setup', null, 'Setup')}</span></button>
                      </div>
                    </div>

                    <div class="bridge-deck">
                      <div class="bridge-deck-title">🌉 <span data-gs="play.deck_title">${T('play.deck_title', { count: completedBridges.length }, `Accumulated Bridge Deck (${completedBridges.length} segments)`)}</span></div>
                      <div class="bridge-segments-container" id="bridge-segments">
                        ${completedBridges.length ? completedBridges.map(b => `
                          <div class="bridge-segment motion-slide-chain">
                            <span class="bridge-word">${gameUtils.escapeHtml(b.wordA)}</span>
                            <span class="bridge-connection-label">🧲 ${gameUtils.escapeHtml(b.link)}</span>
                            <span class="bridge-word">${gameUtils.escapeHtml(b.wordB)}</span>
                          </div>
                        `).join('') : `<div style="color:var(--ink-faint); text-align:center; padding:12px; font-style:italic;" data-gs="play.deck_empty">${T('play.deck_empty', null, 'No bridge spans assembled yet. Connect word pairs!')}</div>`}
                      </div>
                    </div>
                  </div>`;

                body.querySelectorAll('.word-plank').forEach(btn => {
                  btn.addEventListener('click', () => {
                    COSY_GAME.handlePlankTap(btn, btn.dataset.word, btn.dataset.odd, btn.dataset.link, btn.dataset.reason, btn.dataset.hasodd === 'true');
                  });
                });

                window.COSY_GAME._nextWL = nextWordLinker;
            }

            window.COSY_GAME.handlePlankTap = (el, word, odd, link, reason, hasOdd) => {
                if (el.disabled || el.classList.contains('linked')) return;

                const fb = document.getElementById('wl-fb');
                const next = document.getElementById('wl-next');

                if (hasOdd) {
                    // Odd one out mode
                    document.querySelectorAll('.word-plank').forEach(b => b.disabled = true);
                    if (next) next.style.display = 'inline-block';

                    if (word === odd) {
                        el.classList.add('odd-out', 'motion-slide-chain', 'magnetic-snap');
                        if (fb) {
                            fb.className = 'feedback-bar show ok';
                            const wordEsc = `<strong>${gameUtils.escapeHtml(odd)}</strong>`;
                            const reasonEsc = gameUtils.escapeHtml(reason);
                            const linkEsc = `<em>${gameUtils.escapeHtml(link)}</em>`;
                            fb.innerHTML = `✓ ` + T('fb.odd_correct', { word: wordEsc, reason: reasonEsc, link: linkEsc }, `Correct! ${wordEsc} is the odd word out. ${reasonEsc}. The connected ones share: ${linkEsc}`);
                        }
                        COSYGame.addScore(10);
                        const scoreEl = document.getElementById('wl-score');
                        if (scoreEl) scoreEl.textContent = COSYGame.score;
                        if (window.gameUtils && typeof window.gameUtils.playGameSound === 'function') window.gameUtils.playGameSound('success');
                    } else {
                        el.classList.add('wrong');
                        document.querySelectorAll('.word-plank').forEach(b => { if (b.dataset.word === odd) b.classList.add('odd-out'); });
                        if (fb) {
                            fb.className = 'feedback-bar show bad';
                            const wordEsc = `<strong>${gameUtils.escapeHtml(odd)}</strong>`;
                            const reasonEsc = gameUtils.escapeHtml(reason);
                            fb.innerHTML = `✗ ` + T('fb.odd_wrong', { word: wordEsc, reason: reasonEsc }, `Not quite. The unbridgeable odd word was ${wordEsc}. ${reasonEsc}.`);
                        }
                        if (window.gameUtils && typeof window.gameUtils.playGameSound === 'function') window.gameUtils.playGameSound('error');
                    }
                    return;
                }

                // Pairing mode: Tap word A, then tap word B
                if (!selectedPlank) {
                    selectedPlank = { el, word };
                    el.classList.add('selected');
                    if (window.gameUtils && typeof window.gameUtils.playGameSound === 'function') window.gameUtils.playGameSound('click');
                    if (fb) {
                        fb.className = 'feedback-bar show ok';
                        const wordEsc = `<strong>${gameUtils.escapeHtml(word)}</strong>`;
                        fb.innerHTML = `🧲 ` + T('fb.pair_selected', { word: wordEsc }, `Selected ${wordEsc}. Now tap another word to form a magnetic bridge span!`);
                    }
                } else {
                    if (selectedPlank.el === el) {
                        // Deselect
                        el.classList.remove('selected');
                        selectedPlank = null;
                        if (fb) fb.className = 'feedback-bar';
                        return;
                    }

                    // Complete magnetic pair
                    const wordA = selectedPlank.word;
                    const wordB = word;

                    selectedPlank.el.classList.remove('selected');
                    selectedPlank.el.classList.add('linked', 'motion-slide-chain', 'magnetic-snap');
                    el.classList.add('linked', 'motion-slide-chain', 'magnetic-snap');

                    // Add to accumulated bridge deck
                    completedBridges.push({ wordA, wordB, link });

                    // Add visual segment
                    const container = document.getElementById('bridge-segments');
                    if (container) {
                        const emptyNotice = container.querySelector('div[style*="font-style:italic"]');
                        if (emptyNotice) emptyNotice.remove();

                        const newSeg = document.createElement('div');
                        newSeg.className = 'bridge-segment motion-slide-chain magnetic-snap';
                        newSeg.innerHTML = `
                            <span class="bridge-word">${gameUtils.escapeHtml(wordA)}</span>
                            <span class="bridge-connection-label">🧲 ${gameUtils.escapeHtml(link)}</span>
                            <span class="bridge-word">${gameUtils.escapeHtml(wordB)}</span>`;
                        container.appendChild(newSeg);
                    }

                    if (fb) {
                        fb.className = 'feedback-bar show ok';
                        const wordAEsc = `<strong>${gameUtils.escapeHtml(wordA)}</strong>`;
                        const wordBEsc = `<strong>${gameUtils.escapeHtml(wordB)}</strong>`;
                        const linkEsc = `<em>${gameUtils.escapeHtml(link)}</em>`;
                        fb.innerHTML = `✓ ` + T('fb.pair_linked', { wordA: wordAEsc, wordB: wordBEsc, link: linkEsc }, `Magnetic link forged! ${wordAEsc} 🧲 ${wordBEsc} (Link: ${linkEsc})`);
                    }

                    COSYGame.addScore(10);
                    const scoreEl = document.getElementById('wl-score');
                    if (scoreEl) scoreEl.textContent = COSYGame.score;

                    if (window.gameUtils && typeof window.gameUtils.playGameSound === 'function') window.gameUtils.playGameSound('success');

                    selectedPlank = null;
                    if (next) next.style.display = 'inline-block';
                }
            };

            nextWordLinker();
        },

        reset: renderSetup,

        renderEnd() {
            const T = getT();
            const lang = COSYGame.language;
            const level = COSYGame.level;
            COSYScores.save(GAME_ID, lang, level, COSYGame.score);
            const best = COSYScores.best(GAME_ID, lang);
            const countStr = `<strong>${completedBridges.length}</strong>`;
            const scoreStr = `<strong>${COSYGame.score}</strong>`;
            document.getElementById('go-body').innerHTML = `
                <div class="round-end" style="max-width:600px; margin:0 auto;">
                    <div class="re-icon">🌉</div>
                    <div class="re-title" data-gs="end.title">${T('end.title', null, 'Bridge Complete!')}</div>
                    <div class="re-sub">${T('end.sub', { count: countStr, score: scoreStr }, `Total magnetic spans forged: <strong>${completedBridges.length}</strong> | Final Score: <strong>${COSYGame.score}</strong> pts`)}</div>
                    ${best ? `<div class="game-sub" style="margin-bottom:1rem">${T('common.personal_best', { score: best.score }, `Personal best: ${best.score} pts`)}</div>` : ''}

                    <div class="bridge-deck" style="text-align:left; margin-bottom:1.5rem;">
                      <div class="bridge-deck-title">🌉 ${T('end.deck_title', { count: completedBridges.length }, `Master Bridge Gallery (${completedBridges.length} spans)`)}</div>
                      <div class="bridge-segments-container">
                        ${completedBridges.length ? completedBridges.map(b => `
                          <div class="bridge-segment">
                            <span class="bridge-word">${gameUtils.escapeHtml(b.wordA)}</span>
                            <span class="bridge-connection-label">🧲 ${gameUtils.escapeHtml(b.link)}</span>
                            <span class="bridge-word">${gameUtils.escapeHtml(b.wordB)}</span>
                          </div>
                        `).join('') : T('end.no_spans', null, 'No bridge spans forged.')}
                      </div>
                    </div>

                    <div class="re-actions">
                        <button class="btn-g-primary" onclick="COSY_GAME.start()"><span data-i18n="ui_play_again">Play again</span> ↺</button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.reset()"><span data-gs="common.btn_setup">${T('common.btn_setup', null, 'Setup')}</span></button>
                    </div>
                </div>`;

            if (window.gameUtils) {
                if (typeof window.gameUtils.playGameSound === 'function') window.gameUtils.playGameSound('success');
                if (typeof window.gameUtils.createConfetti === 'function') window.gameUtils.createConfetti();
            }
        }
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
