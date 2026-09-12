/**
 * games/word-linker/game.js
 * Standalone logic for Word Linker - Magnetic Bridge Identity.
 */
(function() {
    const GAME_ID = 'wordlinker';
    const GAME_TITLE = 'Word Linker 🧲';
    const GAME_META = 'Vocabulary & Puzzles · Magnetic Bridge · A1–C2';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }

    let selectedPlank = null;
    let completedBridges = []; // Array of { wordA, wordB, link }

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen" style="max-width:600px; margin:0 auto;">
              <h2>Word Linker 🧲</h2>
              <p>Construct a magnetic bridge across vocabulary pairs! Select words to magnetically snap them together into connected bridge planks.</p>

              <div class="setup-field"><label>Mode</label>
                <select class="styled-sel" id="s-mode">
                  <option value="link">Common Connection 🔗</option>
                  <option value="odd">Odd One Out ❌</option>
                  <option value="all">Mixed Modes 🌀</option>
                </select>
              </div>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level">${LEVEL_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" style="margin-top:2rem; width:100%;" onclick="COSY_GAME.start()">▶ Construct Bridge</button>
            </div>`;
    }

    window.COSY_GAME = {
        async start() {
            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
            const level = COSYLoader.getLevelCode(document.getElementById('s-level')?.value);
            const mode = document.getElementById('s-mode')?.value || 'all';
            document.getElementById('go-body').innerHTML = '<div style="text-align:center;padding:4rem;">Assembling magnetic field...</div>';

            await COSYLoader.loadLevelData(lang, level);
            COSYGame.init(GAME_ID, lang, level);

            const data = COSYLoader.getGameData(lang);

            let source = data.wordlinker || [{words:['Bridge','Arch','Pillar','Tower'], odd:'none', link:'Architectural structures', oddReason:''}];
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
                    <div class="sb-item"><div class="sb-val" id="wl-score">${COSYGame.score}</div><div class="sb-lbl">Score</div></div>
                    <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Span</div></div>
                    <div class="sb-item"><div class="sb-val">${completedBridges.length}</div><div class="sb-lbl">Bridges</div></div>
                  </div>

                  <div class="bridge-arena">
                    ${isPhone ? '<div class="phone-tap-instruction">📱 Tap word A then tap word B to magnetically bridge them together</div>' : ''}

                    <div class="game-card">
                      <div class="game-label">🧲 ${hasOdd ? 'Spot the unbridgeable odd word out' : 'Tap pairs to forge a magnetic bridge connection'}</div>

                      <div class="word-options-grid" id="plank-grid">
                        ${shuffled.map(w => `<button class="word-plank" data-word="${gameUtils.escapeAttr(w)}" data-odd="${gameUtils.escapeAttr(q.odd)}" data-link="${gameUtils.escapeAttr(q.link)}" data-reason="${gameUtils.escapeAttr(q.oddReason || "")}" data-hasodd="${hasOdd}">${w}</button>`).join('')}
                      </div>

                      <div class="feedback-bar" id="wl-fb"></div>

                      <div class="game-controls" style="margin-top:1rem;">
                        <button class="btn-g-primary" id="wl-next" onclick="COSY_GAME._nextWL()" style="display:none">Next Span →</button>
                        <button class="btn-g-danger" onclick="COSY_GAME.reset()">⬅ Setup</button>
                      </div>
                    </div>

                    <div class="bridge-deck">
                      <div class="bridge-deck-title">🌉 Accumulated Bridge Deck (${completedBridges.length} segments)</div>
                      <div class="bridge-segments-container" id="bridge-segments">
                        ${completedBridges.length ? completedBridges.map(b => `
                          <div class="bridge-segment motion-slide-chain">
                            <span class="bridge-word">${b.wordA}</span>
                            <span class="bridge-connection-label">🧲 ${b.link}</span>
                            <span class="bridge-word">${b.wordB}</span>
                          </div>
                        `).join('') : '<div style="color:var(--ink-faint); text-align:center; padding:12px; font-style:italic;">No bridge spans assembled yet. Connect word pairs!</div>'}
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
                            fb.innerHTML = `✓ Correct! <strong>${odd}</strong> is the odd word out. ${reason}. The connected ones share: <em>${link}</em>`;
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
                            fb.innerHTML = `✗ Not quite. The unbridgeable odd word was <strong>${odd}</strong>. ${reason}.`;
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
                        fb.innerHTML = `🧲 Selected <strong>${word}</strong>. Now tap another word to form a magnetic bridge span!`;
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
                            <span class="bridge-word">${wordA}</span>
                            <span class="bridge-connection-label">🧲 ${link}</span>
                            <span class="bridge-word">${wordB}</span>`;
                        container.appendChild(newSeg);
                    }

                    if (fb) {
                        fb.className = 'feedback-bar show ok';
                        fb.innerHTML = `✓ Magnetic link forged! <strong>${wordA}</strong> 🧲 <strong>${wordB}</strong> (Link: <em>${link}</em>)`;
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
            const lang = COSYGame.language;
            const level = COSYGame.level;
            COSYScores.save(GAME_ID, lang, level, COSYGame.score);
            const best = COSYScores.best(GAME_ID, lang);
            document.getElementById('go-body').innerHTML = `
                <div class="round-end" style="max-width:600px; margin:0 auto;">
                    <div class="re-icon">🌉</div>
                    <div class="re-title">Bridge Complete!</div>
                    <div class="re-sub">Total magnetic spans forged: <strong>${completedBridges.length}</strong> | Final Score: <strong>${COSYGame.score}</strong> pts</div>
                    ${best ? `<div class="game-sub" style="margin-bottom:1rem">Personal best: ${best.score} pts</div>` : ''}

                    <div class="bridge-deck" style="text-align:left; margin-bottom:1.5rem;">
                      <div class="bridge-deck-title">🌉 Master Bridge Gallery (${completedBridges.length} spans)</div>
                      <div class="bridge-segments-container">
                        ${completedBridges.length ? completedBridges.map(b => `
                          <div class="bridge-segment">
                            <span class="bridge-word">${b.wordA}</span>
                            <span class="bridge-connection-label">🧲 ${b.link}</span>
                            <span class="bridge-word">${b.wordB}</span>
                          </div>
                        `).join('') : 'No bridge spans forged.'}
                      </div>
                    </div>

                    <div class="re-actions">
                        <button class="btn-g-primary" onclick="COSY_GAME.start()">Play again ↺</button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.reset()">Setup</button>
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
