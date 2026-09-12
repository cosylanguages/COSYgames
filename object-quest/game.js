/**
 * games/object-quest/game.js
 * Standalone logic for Object Quest with Fog of War & Magnifying Glass Identity.
 */
(function() {
    const GAME_ID = 'objectquest';
    const GAME_TITLE = 'Object Quest 🔍';
    const GAME_META = 'Fog of War & Magnifying Glass · Solo or group';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Object Quest 🔍</h2>
              <p>Explore hidden scene objects through the fog of war using your magnifying glass lens! Tap, drag, or hold to reveal concealed nouns and uncover the quest target.</p>
              <div class="setup-field"><label>Category</label>
                <select class="styled-sel" id="s-cat">
                  <option value="all">All objects</option>
                  <option value="group:environment_nature">Animals & Nature 🐾</option>
                  <option value="group:food_drink">Food & Drink 🍕</option>
                  <option value="group:places_geography">Places & Geography 🌍</option>
                  <option value="group:home_living">Home & Gadgets 🏠</option>
                  <option value="group:clothes_appearance">Clothes & Accessories 👕</option>
                  <option value="group:health_body">Body Parts & Health 🏥</option>
                </select>
              </div>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level">${LEVEL_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" id="btn-start-game">▶ Start Fog of War Quest</button>
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
            const category = document.getElementById('s-cat')?.value || 'all';

            document.getElementById('go-body').innerHTML = '<div style="text-align:center;padding:4rem;color:#f0fdf4;">Loading fog of war map...</div>';

            try {
                if (window.COSYLoader && typeof window.COSYLoader.loadLevelData === 'function') {
                    await window.COSYLoader.loadLevelData(lang, level);
                }
            } catch (err) {
                console.warn('Level data fetch fallback', err);
            }

            COSYGame.init(GAME_ID, lang, level);

            const body = document.getElementById('go-body');
            const vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];

            const personKeywords = ['profession', 'job', 'people', 'person', 'nationality', 'famous'];
            const isThemeMatch = (window.gameUtils && typeof window.gameUtils.isThemeMatch === 'function')
                ? window.gameUtils.isThemeMatch
                : (t, cat) => t.includes(cat.replace('group:', ''));

            let objects = vocab.filter(v => v.theme && !personKeywords.some(k => v.theme.toLowerCase().includes(k)));
            if (category !== 'all') {
                objects = objects.filter(v => v.theme && isThemeMatch(v.theme, category));
            }

            if (objects.length < 4) {
                // Fallback objects if category is sparse
                objects = [
                    { word: 'Apple', emoji: '🍎', definitions: [{ text: 'A round fruit with red or green skin.' }] },
                    { word: 'Camera', emoji: '📷', definitions: [{ text: 'A device used to take photographs.' }] },
                    { word: 'Book', emoji: '📖', definitions: [{ text: 'A written or printed work consisting of pages.' }] },
                    { word: 'Key', emoji: '🔑', definitions: [{ text: 'A small metal instrument used to open locks.' }] },
                    { word: 'Clock', emoji: '⏰', definitions: [{ text: 'An instrument for measuring and showing time.' }] },
                    { word: 'Guitar', emoji: '🎸', definitions: [{ text: 'A stringed musical instrument.' }] }
                ];
            }

            const createDrawBag = (window.gameUtils && typeof window.gameUtils.createDrawBag === 'function')
                ? window.gameUtils.createDrawBag
                : (arr) => {
                    let items = [...arr];
                    return {
                        next: () => {
                            if (!items.length) items = [...arr];
                            return items.shift();
                        }
                    };
                };

            this.drawBag = createDrawBag(objects);

            const nextQuest = () => {
                if (!COSYGame.nextRound()) {
                    COSY_GAME.renderEnd();
                    return;
                }

                const currentTarget = this.drawBag.next();
                // Pick 5 decoy items + target item = 6 total scene objects
                const sceneItems = [currentTarget];
                const pool = objects.filter(o => o.word !== currentTarget.word);
                for (let i = 0; i < 5 && pool.length > 0; i++) {
                    const idx = Math.floor(Math.random() * pool.length);
                    sceneItems.push(pool.splice(idx, 1)[0]);
                }
                // Shuffle scene items grid positions
                sceneItems.sort(() => Math.random() - 0.5);

                let hints = 0;
                let trailPoints = [];
                let discoveredObjects = new Set();

                body.innerHTML = `
                  <div class="oq-game-wrapper">
                    <div class="oq-score-bar">
                      <div class="oq-sb-item">Score: <span class="oq-sb-val">${COSYGame.score}</span></div>
                      <div class="oq-sb-item">Target Object: <strong style="color:var(--oq-pin-color); font-size:1.15rem;">${currentTarget.word} ${currentTarget.emoji || ''}</strong></div>
                      <div class="oq-sb-item">Round: <span class="oq-sb-val">${COSYGame.round}/${COSYGame.maxRounds}</span></div>
                    </div>

                    <div style="font-size:0.9rem; color:#a7f3d0; font-weight:600;">
                      🔍 Drag magnifying glass lens to explore the fog & locate hidden targets!
                    </div>

                    <div class="oq-scene-board" id="oq-scene-board">
                      <!-- Scene Items Grid -->
                      <div class="oq-scene-grid" id="oq-scene-grid">
                        ${sceneItems.map((item, idx) => `
                          <div class="oq-target-item" id="oq-item-${idx}" data-word="${item.word}">
                            <div class="oq-item-emoji">${item.emoji || '📦'}</div>
                            <div class="oq-item-label">${item.word}</div>
                          </div>
                        `).join('')}
                      </div>

                      <!-- Canvas Fog Layer -->
                      <canvas class="oq-fog-canvas" id="oq-fog-canvas"></canvas>

                      <!-- SVG Trail Overlay -->
                      <svg class="oq-trail-svg" id="oq-trail-svg">
                        <polyline class="oq-trail-line" id="oq-trail-line" points=""></polyline>
                      </svg>

                      <!-- Permanent Pin Drop Markers Layer -->
                      <div id="oq-markers-layer"></div>

                      <!-- Magnifying Lens Ring -->
                      <div class="oq-lens-ring" id="oq-lens-ring"></div>
                    </div>

                    <div class="game-card" id="oq-hint-card" style="display:none; background:#14281d; border:1px solid #1e3a29; margin:0;">
                      <div class="game-label" style="color:#a7f3d0">💡 Help Clues</div>
                      <div id="oq-hint-list" style="font-size:0.9rem; line-height:1.6; color:#f0fdf4;"></div>
                    </div>

                    <div class="game-controls" style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:0.5rem;">
                      <button class="btn-g-primary" id="oq-btn-hint" style="background:var(--game-accent); color:var(--game-accent-contrast);">💡 Hint</button>
                      <button class="btn-g-secondary" id="oq-btn-next">Next Object →</button>
                      <button class="btn-g-danger" id="oq-btn-setup">⬅ Setup</button>
                    </div>
                  </div>`;

                initFogAndInteractions();

                function initFogAndInteractions() {
                    const board = document.getElementById('oq-scene-board');
                    const canvas = document.getElementById('oq-fog-canvas');
                    const lensRing = document.getElementById('oq-lens-ring');
                    const trailLine = document.getElementById('oq-trail-line');
                    const markersLayer = document.getElementById('oq-markers-layer');

                    if (!board || !canvas || !lensRing || !trailLine) return;

                    const width = board.clientWidth || 800;
                    const height = board.clientHeight || 380;
                    canvas.width = width;
                    canvas.height = height;

                    const ctx = canvas.getContext('2d');
                    // Draw initial dark fog layer
                    ctx.fillStyle = 'rgba(15, 28, 20, 0.94)';
                    ctx.fillRect(0, 0, width, height);

                    // Determine lens radius based on context (projector = enlarged)
                    const isProjector = document.documentElement.dataset.context === 'projector';
                    const lensRadius = isProjector ? 110 : 70;

                    lensRing.style.width = `${lensRadius * 2}px`;
                    lensRing.style.height = `${lensRadius * 2}px`;

                    let isExploring = false;

                    const liftFogAtPoint = (x, y) => {
                        ctx.save();
                        ctx.globalCompositeOperation = 'destination-out';
                        ctx.beginPath();
                        ctx.arc(x, y, lensRadius, 0, Math.PI * 2, false);
                        ctx.fill();
                        ctx.restore();

                        // Add point to explored trail
                        if (trailPoints.length === 0 || Math.hypot(trailPoints[trailPoints.length - 1].x - x, trailPoints[trailPoints.length - 1].y - y) > 15) {
                            trailPoints.push({ x, y });
                            if (trailPoints.length > 40) trailPoints.shift();
                            trailLine.setAttribute('points', trailPoints.map(p => `${p.x},${p.y}`).join(' '));
                        }

                        // Check if any object item is uncovered under lens
                        sceneItems.forEach((item, idx) => {
                            if (discoveredObjects.has(item.word)) return;
                            const el = document.getElementById(`oq-item-${idx}`);
                            if (!el) return;
                            const rect = el.getBoundingClientRect();
                            const bRect = board.getBoundingClientRect();
                            const cx = (rect.left + rect.width / 2) - bRect.left;
                            const cy = (rect.top + rect.height / 2) - bRect.top;

                            if (Math.hypot(cx - x, cy - y) < lensRadius) {
                                discoveredObjects.add(item.word);
                                el.classList.add('found');

                                // Permanently clear fog around discovered target
                                ctx.save();
                                ctx.globalCompositeOperation = 'destination-out';
                                ctx.beginPath();
                                ctx.arc(cx, cy, 65, 0, Math.PI * 2, false);
                                ctx.fill();
                                ctx.restore();

                                // Place permanent pin drop marker with .motion-pin-drop animation
                                const marker = document.createElement('div');
                                marker.className = 'oq-marker-pin motion-pin-drop';
                                marker.style.left = `${cx}px`;
                                marker.style.top = `${cy}px`;
                                marker.innerHTML = item.word === currentTarget.word ? '⭐' : '📍';
                                markersLayer.appendChild(marker);

                                if (item.word === currentTarget.word) {
                                    COSYGame.addScore(20);
                                    const scoreVal = document.querySelector('.oq-sb-val');
                                    if (scoreVal) scoreVal.textContent = COSYGame.score;
                                    setTimeout(() => nextQuest(), 1200);
                                }
                            }
                        });
                    };

                    const handleMove = (e) => {
                        const rect = board.getBoundingClientRect();
                        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                        const x = clientX - rect.left;
                        const y = clientY - rect.top;

                        if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
                            lensRing.classList.remove('active');
                            return;
                        }

                        lensRing.style.left = `${x}px`;
                        lensRing.style.top = `${y}px`;
                        lensRing.classList.add('active');

                        if (isExploring || e.type === 'touchmove' || document.documentElement.dataset.context === 'phone') {
                            liftFogAtPoint(x, y);
                        }
                    };

                    board.addEventListener('mousedown', (e) => { isExploring = true; handleMove(e); });
                    window.addEventListener('mouseup', () => { isExploring = false; });
                    board.addEventListener('mousemove', handleMove);

                    board.addEventListener('touchstart', (e) => { isExploring = true; handleMove(e); }, { passive: true });
                    board.addEventListener('touchmove', handleMove, { passive: true });
                    board.addEventListener('touchend', () => { isExploring = false; lensRing.classList.remove('active'); });

                    document.getElementById('oq-btn-hint')?.addEventListener('click', () => {
                        hints++;
                        const hintCard = document.getElementById('oq-hint-card');
                        const hintList = document.getElementById('oq-hint-list');
                        if (hintCard && hintList) {
                            hintCard.style.display = 'block';
                            hintList.innerHTML = `
                              ${hints >= 1 ? `<div>• Target starts with letter <strong>${currentTarget.word[0].toUpperCase()}</strong></div>` : ''}
                              ${hints >= 2 ? `<div>• Target length: <strong>${currentTarget.word.length}</strong> characters</div>` : ''}
                              ${hints >= 3 ? `<div>• Definition clue: <em>${currentTarget.definitions?.[0]?.text || 'No definition available.'}</em></div>` : ''}
                            `;
                        }
                    });

                    document.getElementById('oq-btn-next')?.addEventListener('click', () => nextQuest());
                    document.getElementById('oq-btn-setup')?.addEventListener('click', () => COSY_GAME.reset());
                }
            };

            nextQuest();
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
                <div class="round-end" style="background:var(--oq-card-bg); border:2px solid var(--game-accent); border-radius:16px; padding:2rem; text-align:center; color:#f0fdf4;">
                    <div class="re-icon">🏆</div>
                    <div class="re-title" style="font-family:var(--cg-font-heading); font-size:1.8rem; margin:0.5rem 0;">Quest Completed!</div>
                    <div class="re-sub" style="font-size:1.1rem; margin-bottom:1rem;">Final Score: <strong>${COSYGame.score}</strong> pts</div>
                    ${best ? `<div class="game-sub" style="color:#4ade80; margin-bottom:1.5rem">Personal best: ${best.score} pts</div>` : ''}
                    <div class="re-actions" style="display:flex; justify-content:center; gap:1rem;">
                        <button class="btn-g-primary" onclick="COSY_GAME.start()" style="background:var(--game-accent); color:var(--game-accent-contrast);">Start New Quest ↺</button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.reset()">Setup</button>
                    </div>
                </div>`;
        }
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
