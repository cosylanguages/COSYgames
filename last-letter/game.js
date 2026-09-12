/**
 * games/last-letter/game.js
 * Standalone logic for Last Letter with Interlocking Chain identity.
 */
(function() {
    const GAME_ID = 'lastletter';
    const GAME_TITLE = 'Last Letter 🔗';
    const GAME_META = 'Interlocking Chain · Vocab & Spelling';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Last Letter 🔗</h2>
              <p>Type a word to start the interlocking chain. Each new word must start with the last letter of the previous word. Watch your chain grow!</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level">${LEVEL_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" id="btn-start-game">▶ Start Interlocking Chain</button>
            </div>`;
        document.getElementById('btn-start-game')?.addEventListener('click', () => COSY_GAME.start());
    }

    window.COSY_GAME = {
        async start() {
            const lang = (window.COSYLoader && typeof window.COSYLoader.getLangCode === 'function')
                ? window.COSYLoader.getLangCode(document.getElementById('s-lang')?.value)
                : 'en';
            const level = (window.COSYLoader && typeof window.COSYLoader.getLevelCode === 'function')
                ? window.COSYLoader.getLevelCode(document.getElementById('s-level')?.value)
                : 'a1';

            document.getElementById('go-body').innerHTML = '<div style="text-align:center;padding:4rem;color:#f8fafc;">Loading chain link data...</div>';

            try {
                if (window.COSYLoader && typeof window.COSYLoader.loadLevelData === 'function') {
                    await window.COSYLoader.loadLevelData(lang, level);
                }
            } catch (err) {
                console.warn('Level data load fallback', err);
            }

            COSYGame.init(GAME_ID, lang, level);

            let llChain = [];
            const LL_USED = new Set();
            const body = document.getElementById('go-body');

            body.innerHTML = `
              <div class="ll-game-wrapper">
                <div class="ll-score-bar">
                  <div class="ll-sb-item">
                    <div class="ll-sb-val" id="ll-score">0</div>
                    <div class="ll-sb-lbl">Chain Links</div>
                  </div>
                  <div class="ll-sb-item">
                    <div class="ll-sb-val" id="ll-next-letter">ANY</div>
                    <div class="ll-sb-lbl">Required Start</div>
                  </div>
                </div>

                <div class="game-label" style="font-weight:700; color:#94a3b8; letter-spacing:0.05em; text-transform:uppercase; font-size:0.85rem;">
                  🔗 Interlocking Chain
                </div>

                <div class="ll-chain-container" id="ll-chain">
                  <div class="ll-chain-empty" id="ll-chain-empty">Type the first word below to forge the first chain link…</div>
                </div>

                <div class="ll-input-group">
                  <input class="ll-input" id="ll-input" placeholder="Type a word to link…" autocomplete="off" autocorrect="off" spellcheck="false" />
                  <button class="btn-g-primary" id="ll-btn-add" style="background:var(--game-accent); color:var(--game-accent-contrast); font-weight:700;">Link Word 🔗</button>
                </div>

                <div class="ll-feedback" id="ll-fb"></div>

                <div class="game-controls" style="display:flex; justify-content:space-between; margin-top:0.5rem;">
                  <button class="btn-g-secondary" id="ll-btn-restart">Restart Chain ↺</button>
                  <button class="btn-g-danger" id="ll-btn-setup">⬅ Setup</button>
                </div>
              </div>`;

            const inputEl = document.getElementById('ll-input');
            const addBtn = document.getElementById('ll-btn-add');
            const restartBtn = document.getElementById('ll-btn-restart');
            const setupBtn = document.getElementById('ll-btn-setup');

            if (inputEl) {
                inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') window.COSY_GAME.llSubmit(); });
                inputEl.focus();
            }
            if (addBtn) addBtn.addEventListener('click', () => window.COSY_GAME.llSubmit());
            if (restartBtn) restartBtn.addEventListener('click', () => COSY_GAME.start());
            if (setupBtn) setupBtn.addEventListener('click', () => COSY_GAME.reset());

            window.COSY_GAME.llSubmit = () => {
                const input = document.getElementById('ll-input');
                const fb = document.getElementById('ll-fb');
                const chainContainer = document.getElementById('ll-chain');
                if (!input || !fb || !chainContainer) return;

                const rawWord = input.value.trim().toLowerCase();
                const word = rawWord.replace(/[^a-zàâäéèêëîïôùûüæœçñáíóúüý\u0400-\u04FF\u0370-\u03FF]/gi, '');

                const triggerInvalidAnimation = (msg) => {
                    this.showFB(fb, 'bad', msg);
                    if (word && word.length > 0) {
                        const tempLink = document.createElement('div');
                        tempLink.className = 'll-chain-link link-invalid-bounce';
                        tempLink.textContent = word;
                        chainContainer.appendChild(tempLink);
                        setTimeout(() => {
                            if (tempLink.parentNode) tempLink.parentNode.removeChild(tempLink);
                        }, 750);
                    }
                };

                if (!word || word.length < 2) {
                    triggerInvalidAnimation('Please enter a word with at least 2 letters.');
                    input.value = '';
                    return;
                }
                if (LL_USED.has(word)) {
                    triggerInvalidAnimation(`"${word}" was already used in the chain! Try another.`);
                    input.value = '';
                    return;
                }
                if (llChain.length > 0) {
                    const lastChar = llChain[llChain.length - 1].slice(-1).toLowerCase();
                    if (word[0] !== lastChar) {
                        triggerInvalidAnimation(`"${word}" doesn't start with <strong>${lastChar.toUpperCase()}</strong>. Attempted link bounced off!`);
                        input.value = '';
                        return;
                    }
                }

                if (!COSYGame.nextRound()) {
                    COSY_GAME.renderEnd();
                    return;
                }

                LL_USED.add(word);
                llChain.push(word);
                COSYGame.addScore(5);
                input.value = '';

                // Remove empty state placeholder
                const emptyEl = document.getElementById('ll-chain-empty');
                if (emptyEl) emptyEl.style.display = 'none';

                // Remove previous latest-link glow marker in online context
                const prevLatest = chainContainer.querySelector('.ll-latest-link');
                if (prevLatest) prevLatest.classList.remove('ll-latest-link');

                // Create new chain link element
                const linkEl = document.createElement('div');
                const isOnline = document.documentElement.dataset.context === 'online';
                linkEl.className = `ll-chain-link motion-slide-chain ${isOnline ? 'll-latest-link' : ''}`;

                const stem = word.slice(0, -1);
                const lastL = word.slice(-1).toUpperCase();
                linkEl.innerHTML = `${stem}<span class="ll-last-letter">${lastL}</span>`;

                chainContainer.appendChild(linkEl);

                // Phone Context auto-scroll to latest link
                if (document.documentElement.dataset.context === 'phone') {
                    linkEl.scrollIntoView({ behavior: 'smooth', block: 'end' });
                } else {
                    chainContainer.scrollLeft = chainContainer.scrollWidth;
                }

                document.getElementById('ll-score').textContent = COSYGame.score;
                document.getElementById('ll-next-letter').textContent = `${word.slice(-1).toUpperCase()}`;

                this.showFB(fb, 'ok', `✓ Link snapped into place! Next word must start with <strong>${word.slice(-1).toUpperCase()}</strong>.`);
                input.focus();
            };
        },

        showFB(el, type, msg) {
            el.className = `ll-feedback show ${type}`;
            el.innerHTML = msg;
            clearTimeout(el._t);
            el._t = setTimeout(() => { el.className = 'll-feedback'; }, 2800);
        },

        reset: renderSetup,

        renderEnd() {
            const lang = COSYGame.language;
            const level = COSYGame.level;
            if (window.COSYScores && typeof window.COSYScores.save === 'function') {
                COSYScores.save(GAME_ID, lang, level, COSYGame.score);
            }
            const best = (window.COSYScores && typeof window.COSYScores.best === 'function') ? COSYScores.best(GAME_ID, lang) : null;
            document.getElementById('go-body').innerHTML = `
                <div class="round-end" style="background:var(--ll-card-bg); border:2px solid var(--game-accent); border-radius:16px; padding:2rem; text-align:center; color:#f8fafc;">
                    <div class="re-icon">🏆</div>
                    <div class="re-title" style="font-family:var(--cg-font-heading); font-size:1.8rem; margin:0.5rem 0;">Chain Mastered!</div>
                    <div class="re-sub" style="font-size:1.1rem; margin-bottom:1rem;">Total Interlocked Words: <strong>${COSYGame.score / 5}</strong> (Score: ${COSYGame.score} pts)</div>
                    ${best ? `<div class="game-sub" style="color:var(--game-accent); margin-bottom:1.5rem">Personal best: ${best.score} pts</div>` : ''}
                    <div class="re-actions" style="display:flex; justify-content:center; gap:1rem;">
                        <button class="btn-g-primary" onclick="COSY_GAME.start()" style="background:var(--game-accent); color:var(--game-accent-contrast);">Forge New Chain ↺</button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.reset()">Setup</button>
                    </div>
                </div>`;
        }
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
