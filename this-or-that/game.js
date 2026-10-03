/**
 * games/this-or-that/game.js
 * Game logic for "This or That? (Speaking & Fluency Drills)"
 * Supports CEFR Levels (A0-A1, A2, B1, B2) & Vocabulary Decks
 */
(function() {
    const GAME_ID = 'thisorthat';
    const GAME_TITLE = 'This or That? 🔀';
    const GAME_META = 'Speaking & Fluency · CEFR A0–B2';

    const GENERAL_DILEMMAS = [
        {
            type: 'dilemma',
            level: 'A0-A1',
            category: 'Daily Routine 🌅',
            title: 'Morning Person vs Night Owl',
            age: 'Forever',
            location: '📍 Worldwide',
            verified: true,
            optionA: { emoji: '🌅', title: 'Early Bird', desc: 'Up at 6 AM, watching sunrise with green tea and high productivity.' },
            optionB: { emoji: '🌃', title: 'Night Owl', desc: 'Creative energy peaks between 11 PM and 3 AM when the world is quiet.' },
            prompt: 'Which routine fits your true self? Describe your ideal daily schedule.'
        },
        {
            type: 'dilemma',
            level: 'A2',
            category: 'Vacations 🏖️',
            title: 'Beach Resort vs Mountain Hike',
            age: 'All Seasons',
            location: '📍 Ocean or Peaks',
            verified: true,
            optionA: { emoji: '🏖️', title: 'Sunny Beach', desc: 'Warm sand, ocean waves, coconut smoothies, and complete relaxation.' },
            optionB: { emoji: '⛰️', title: 'Mountain Hike', desc: 'Fresh alpine air, steep trails, breathtaking views, and campfire nights.' },
            prompt: 'Where would you rather go on a 2-week holiday? Describe your travel style.'
        },
        {
            type: 'dilemma',
            level: 'B1',
            category: 'Superpowers 🦸‍♂️',
            title: 'Invisibility vs Time Travel',
            age: 'Hypothetical',
            location: '📍 Sci-Fi Universe',
            verified: true,
            optionA: { emoji: '🫥', title: 'Invisibility', desc: 'Sneak anywhere unseen, listen in on secret chats, escape awkward moments.' },
            optionB: { emoji: '⏳', title: 'Time Travel', desc: 'Visit ancient civilizations or leap 100 years into the future.' },
            prompt: 'Which power would you choose and why? How would you use it?'
        },
        {
            type: 'dilemma',
            level: 'B2',
            category: 'Life Values ⚖️',
            title: 'Corporate Career vs Creative Passion',
            age: 'Forever Relevant',
            location: '📍 Career Crossroads',
            verified: true,
            optionA: { emoji: '💼', title: 'Corporate Career', desc: 'Financial security, executive prestige, long hours, corporate structure.' },
            optionB: { emoji: '🎨', title: 'Creative Passion', desc: 'Total artistic freedom, personal purpose, variable and uncertain income.' },
            prompt: 'How do you strike a balance between financial security and personal fulfillment?'
        }
    ];

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        if (!body) return;

        body.innerHTML = `
            <div class="setup-screen" style="text-align: center; max-width: 440px; margin: 0 auto; padding: 1.5rem 1rem;">
              <h1 style="font-weight: 800; margin-bottom: 0.5rem; color: var(--ink);">This or That?</h1>
              <p style="color:var(--ink-muted); margin-bottom: 1.25rem; line-height: 1.45; font-size:0.95rem;">
                Swipe left or right on cards showing people, professions, properties and dilemmas. Pick a side, then explain why in the language you are learning.
              </p>

              <div class="setup-field" style="margin-bottom: 1rem; text-align: left;">
                <label style="font-weight:700; display:block; margin-bottom:0.4rem; font-size:0.9rem; color: var(--ink);">🌐 Target Language</label>
                <select class="styled-sel" id="tot-lang-sel" style="width: 100%; padding: 0.75rem; border-radius: 12px; border: 1px solid var(--border); background: var(--surface-color); color: var(--ink); font-weight:600;">
                  <option value="en" selected>🇬🇧 English</option>
                  <option value="french">🇫🇷 Français (French)</option>
                  <option value="italian">🇮🇹 Italiano (Italian)</option>
                  <option value="russian">🇷🇺 Русский (Russian)</option>
                  <option value="greek">🇬🇷 Ελληνικά (Greek)</option>
                </select>
              </div>

              <div class="setup-field" style="margin-bottom: 1rem; text-align: left;">
                <label style="font-weight:700; display:block; margin-bottom:0.4rem; font-size:0.9rem; color: var(--ink);">🎯 Target CEFR Level</label>
                <select class="styled-sel" id="tot-level-sel" style="width: 100%; padding: 0.75rem; border-radius: 12px; border: 1px solid var(--border); background: var(--surface-color); color: var(--ink); font-weight:600;">
                  <option value="A0_A1">A0–A1: Starter & Basic Words</option>
                  <option value="A2" selected>A2: Elementary & Daily Life</option>
                  <option value="B1">B1: Intermediate & Work/Travel</option>
                  <option value="B2">B2: Upper-Inter & Abstract Concepts</option>
                  <option value="ALL">All Levels Combined (A0–B2)</option>
                </select>
              </div>

              <div class="setup-field" style="margin-bottom: 1.75rem; text-align: left;">
                <label style="font-weight:700; display:block; margin-bottom:0.4rem; font-size:0.9rem; color: var(--ink);">🎴 Vocabulary Deck & Topic</label>
                <select class="styled-sel" id="tot-deck-sel" style="width: 100%; padding: 0.75rem; border-radius: 12px; border: 1px solid var(--border); background: var(--surface-color); color: var(--ink); font-weight:600;">
                  <optgroup label="💬 Vocabulary & Speaking Topics">
                    <option value="appearance" selected>👁️ Physical Appearance (People)</option>
                    <option value="professions">💼 Professions & Careers</option>
                    <option value="properties">🏠 Properties & Real Estate (Flats/Houses)</option>
                    <option value="character">🧠 Character Traits & Personality</option>
                    <option value="hobbies">🎨 Hobbies, Passions & Lifestyle</option>
                    <option value="nationalities">🌍 Nationalities & Cultural Heritage</option>
                    <option value="food">🍜 Food & Cuisine</option>
                    <option value="travel">✈️ Travel & Destinations</option>
                    <option value="entertainment">🎬 Books, Films & Music</option>
                    <option value="daily_habits">🌅 Daily Routines & Habits</option>
                    <option value="mixed">🔀 Mixed Full Deck (All Categories)</option>
                  </optgroup>
                  <optgroup label="🎯 Grammar Practice Drills">
                    <option value="grammar">🎯 All Grammar Drills (Combined)</option>
                    <option value="grammar_present">🎯 Present Tenses (Simple & Continuous)</option>
                    <option value="grammar_past">🎯 Past Tenses & Stories (Simple & Continuous)</option>
                    <option value="grammar_perfect">🎯 Present Perfect & Life Experiences</option>
                    <option value="grammar_advanced">🎯 Conditionals, Passive & Subjunctive</option>
                  </optgroup>
                  <optgroup label="⚖️ Dilemmas">
                    <option value="dilemmas">⚖️ "This or That" Dilemmas</option>
                  </optgroup>
                </select>
              </div>

              <button class="btn-start-game" onclick="COSY_GAME.start()" style="width: 100%; border-radius: 30px;">▶ Start Swiping 🔀</button>
            </div>`;
    }

    window.COSY_GAME = {
        deck: [],
        currentIndex: 0,
        swipedChoices: [],
        activeStoryIndex: 0,
        fallbackNotice: null,

        async start() {
            this.fallbackNotice = null;
            const langSel = document.getElementById('tot-lang-sel')?.value || 'en';
            const levelSel = document.getElementById('tot-level-sel')?.value || 'A2';
            const deckSel = document.getElementById('tot-deck-sel')?.value || 'appearance';
            const body = document.getElementById('go-body');

            if (body) body.innerHTML = '<div id="game-loader" class="game-loader">Loading cards...</div>';
            await new Promise(res => setTimeout(res, 200));

            let activeDecksSource = {};

            function extractCardsFromSource(source, lvl, category) {
                if (!source || !source[lvl]) return [];
                const lvlData = source[lvl];
                if (Array.isArray(lvlData)) return lvlData;
                if (category === 'mixed') {
                    let cards = [];
                    Object.values(lvlData).forEach(catCards => {
                        if (Array.isArray(catCards)) cards.push(...catCards);
                    });
                    return cards;
                }
                return lvlData[category] || [];
            }

            try {
                if (window.TOT_DECKS && window.TOT_DECKS[langSel]) {
                    activeDecksSource = window.TOT_DECKS[langSel];
                } else if (window.TOT_DECKS && window.TOT_DECKS.en) {
                    activeDecksSource = window.TOT_DECKS.en;
                    if (langSel !== 'en') {
                        this.fallbackNotice = `Language deck for "${langSel}" not found. Falling back to English 🇬🇧 deck.`;
                    }
                }
            } catch (e) {
                console.warn('Error fetching language decks:', e);
            }

            let loadedCards = [];

            if (deckSel === 'dilemmas') {
                if (levelSel === 'ALL') {
                    loadedCards = [...GENERAL_DILEMMAS];
                } else {
                    loadedCards = GENERAL_DILEMMAS.filter(d => d.level === levelSel || d.level === 'A0-A1' && levelSel.startsWith('A'));
                }
                if (loadedCards.length === 0) loadedCards = [...GENERAL_DILEMMAS];
            } else {
                if (levelSel === 'ALL') {
                    ['A0_A1', 'A2', 'B1', 'B2'].forEach(lvl => {
                        const batch = extractCardsFromSource(activeDecksSource, lvl, deckSel);
                        loadedCards.push(...batch);
                    });
                } else {
                    loadedCards = extractCardsFromSource(activeDecksSource, levelSel, deckSel);
                }
            }

            if (!loadedCards || loadedCards.length === 0) {
                if (window.TOT_DECKS && window.TOT_DECKS.en) {
                    activeDecksSource = window.TOT_DECKS.en;
                    ['A0_A1', 'A2', 'B1', 'B2'].forEach(lvl => {
                        const batch = extractCardsFromSource(activeDecksSource, lvl, deckSel);
                        loadedCards.push(...batch);
                    });
                }
            }

            if (!loadedCards || loadedCards.length === 0) {
                loadedCards = [...GENERAL_DILEMMAS];
            }

            for (let i = loadedCards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [loadedCards[i], loadedCards[j]] = [loadedCards[j], loadedCards[i]];
            }

            this.deck = loadedCards;
            this.currentIndex = 0;
            this.swipedChoices = [];
            this.activeStoryIndex = 0;

            if (window.COSYGame) {
                COSYGame.init(GAME_ID, langSel, levelSel);
                COSYGame.maxRounds = this.deck.length;
            }

            this.renderCard();
        },

        renderCard() {
            const body = document.getElementById('go-body');
            if (!body) return;

            if (this.currentIndex >= this.deck.length) {
                this.renderEnd();
                return;
            }

            const item = this.deck[this.currentIndex];
            const isProfile = item.type === 'profile';
            const pages = isProfile && item.pages ? item.pages : [];
            const currentPage = pages[this.activeStoryIndex] || {};

            body.innerHTML = `
              <div class="swipe-app">
                <div class="swipe-top-bar">
                  <div class="swipe-brand">🔀 This or That</div>
                  <div style="font-weight:800; font-size:0.85rem; color:var(--ink-muted);">Card ${this.currentIndex + 1} / ${this.deck.length}</div>
                </div>

                ${this.fallbackNotice ? `
                  <div style="background:var(--sage-mist); color:var(--ink); border:1px solid var(--border); padding:8px 12px; border-radius:10px; font-size:0.82rem; margin: 0 0 10px 0; text-align:center; font-weight:600; line-height:1.35;">
                    ⚠️ ${this.fallbackNotice}
                  </div>
                ` : ''}

                <div class="card-stack">
                  <div class="swipe-card" id="active-card">
                    <!-- Dynamic Stamp Overlays -->
                    <div class="badge-indicator badge-like" id="badge-right">${isProfile ? '❤️ LIKE' : '👉 THAT'}</div>
                    <div class="badge-indicator badge-pass" id="badge-left">${isProfile ? '❌ PASS' : '👈 THIS'}</div>
                    <div class="badge-indicator badge-super" id="badge-super">⭐ SUPER LIKE</div>

                    <!-- Hero Avatar Box with Story Bars & Tap Navigation -->
                    <div class="card-hero-box">
                      ${isProfile && pages.length > 1 ? `
                        <div class="story-bar-container">
                          ${pages.map((_, idx) => `<div class="story-segment ${idx === this.activeStoryIndex ? 'active' : ''}"></div>`).join('')}
                        </div>
                        <div class="tap-zone left" onclick="COSY_GAME.prevStory(event)"></div>
                        <div class="tap-zone right" onclick="COSY_GAME.nextStory(event)"></div>
                      ` : ''}

                      <!-- Grammar Target Badge Overlay if present -->
                      ${item.grammarTarget ? `
                        <div style="position:absolute; top:12px; left:12px; background:var(--swipe-accent); color:#fff; font-weight:800; font-size:0.75rem; padding:3px 9px; border-radius:12px; backdrop-filter:blur(6px); border:1px solid rgba(255,255,255,0.3); z-index:26;">
                          🎯 ${item.grammarTarget}
                        </div>
                      ` : ''}

                      <!-- CEFR Level Badge Overlay -->
                      <div style="position:absolute; top:12px; right:12px; background:rgba(0,0,0,0.6); color:#fff; font-weight:800; font-size:0.75rem; padding:3px 9px; border-radius:12px; backdrop-filter:blur(6px); border:1px solid rgba(255,255,255,0.3); z-index:26;">
                        ${item.level || 'CEFR'}
                      </div>

                      <div class="card-avatar-emoji">${isProfile ? item.avatar : '⚖️'}</div>

                      ${isProfile ? `
                        <div class="card-sub-badge">
                          <span>${currentPage.tag || '🖼️ Profile'}</span>
                          ${pages.length > 1 ? `<span style="opacity:0.75;">(${this.activeStoryIndex + 1}/${pages.length})</span>` : ''}
                        </div>
                      ` : ''}
                    </div>

                    <!-- Card Body Content -->
                    <div class="card-body">
                      <div>
                        <div class="profile-title-row">
                          <span class="profile-name">${item.title}</span>
                          <span class="profile-age">${item.age ? ', ' + item.age : ''}</span>
                          ${item.verified ? '<span class="verified-icon" title="Verified card">☑️</span>' : ''}
                        </div>
                        <div class="profile-meta-row">
                          <span>${item.location || '📍 Worldwide'}</span>
                          <span>• ${item.category}</span>
                        </div>

                        ${item.visualDescription ? `
                          <div style="font-size:0.78rem; font-style:italic; color:var(--ink-muted); background:var(--sage-mist); padding:6px 10px; border-radius:8px; margin-bottom:0.6rem; border-left:3px solid var(--teal);">
                            🎨 <strong>Visual Details:</strong> ${item.visualDescription}
                          </div>
                        ` : ''}

                        ${isProfile ? `
                          <div class="interest-tags">
                            ${(item.interests || []).map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
                          </div>

                          ${currentPage.bio ? `
                            <div class="profile-bio-box">
                              "${currentPage.bio}"
                            </div>
                          ` : ''}

                          ${currentPage.greenFlags || currentPage.redFlags ? `
                            <div class="flag-grid">
                              ${(currentPage.greenFlags || []).map(g => `<div class="flag-card green">${g}</div>`).join('')}
                              ${(currentPage.redFlags || []).map(r => `<div class="flag-card red">${r}</div>`).join('')}
                            </div>
                          ` : ''}

                          <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:0.65rem;">
                            ${item.anthem ? `
                              <div style="font-size:0.78rem; font-weight:700; color:var(--ink-muted); background:var(--sage-mist); padding:5px 10px; border-radius:10px; border:1px solid var(--border);">
                                ${item.anthem}
                              </div>
                            ` : ''}
                            ${item.film ? `
                              <div style="font-size:0.78rem; font-weight:700; color:var(--ink-muted); background:var(--sage-mist); padding:5px 10px; border-radius:10px; border:1px solid var(--border);">
                                ${item.film}
                              </div>
                            ` : ''}
                          </div>
                        ` : `
                          <div class="dilemma-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:0.8rem;">
                            <div class="dilemma-opt" style="background:var(--sage-mist); padding:10px; border-radius:12px; border:1px solid var(--border); text-align:center;">
                              <div style="font-size:2.2rem; margin-bottom:4px;">${item.optionA.emoji}</div>
                              <div style="font-weight:800; font-size:0.95rem; color:var(--ink);">${item.optionA.title}</div>
                              <div style="font-size:0.78rem; color:var(--ink-muted); margin-top:4px; line-height:1.3;">${item.optionA.desc}</div>
                            </div>
                            <div class="dilemma-opt" style="background:var(--sage-mist); padding:10px; border-radius:12px; border:1px solid var(--border); text-align:center;">
                              <div style="font-size:2.2rem; margin-bottom:4px;">${item.optionB.emoji}</div>
                              <div style="font-weight:800; font-size:0.95rem; color:var(--ink);">${item.optionB.title}</div>
                              <div style="font-size:0.78rem; color:var(--ink-muted); margin-top:4px; line-height:1.3;">${item.optionB.desc}</div>
                            </div>
                          </div>
                        `}

                        <div class="prompt-box">
                          💬 <strong>Discussion Prompt (${item.level || 'CEFR'}):</strong> ${item.prompt}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Swipe Action Control Bar -->
                <div class="swipe-actions">
                  <button class="t-btn btn-rewind" id="btn-rewind" title="Rewind / Undo Last Swipe" ${this.swipedChoices.length === 0 ? 'disabled style="opacity:0.4;cursor:default;"' : ''}>🔄</button>
                  <button class="t-btn btn-pass" id="btn-swipe-left" title="Pass / Swipe Left">❌</button>
                  <button class="t-btn btn-super" id="btn-super-like" title="Super Like!">⭐</button>
                  <button class="t-btn btn-like" id="btn-swipe-right" title="Like / Swipe Right">❤️</button>
                </div>
                <div style="font-size:0.78rem; color:var(--ink-faint); margin-top:0.5rem;">
                  Tap photo sides to flip details • Keyboard Arrow Keys supported!
                </div>
              </div>
            `;

            this.attachDragEvents();
        },

        nextStory(e) {
            if (e) e.stopPropagation();
            const item = this.deck[this.currentIndex];
            if (item && item.pages && this.activeStoryIndex < item.pages.length - 1) {
                this.activeStoryIndex++;
                this.renderCard();
            }
        },

        prevStory(e) {
            if (e) e.stopPropagation();
            if (this.activeStoryIndex > 0) {
                this.activeStoryIndex--;
                this.renderCard();
            }
        },

        attachDragEvents() {
            const card = document.getElementById('active-card');
            const btnLeft = document.getElementById('btn-swipe-left');
            const btnRight = document.getElementById('btn-swipe-right');
            const btnSuper = document.getElementById('btn-super-like');
            const btnRewind = document.getElementById('btn-rewind');

            if (btnLeft) btnLeft.onclick = () => this.handleSwipe('left');
            if (btnRight) btnRight.onclick = () => this.handleSwipe('right');
            if (btnSuper) btnSuper.onclick = () => this.handleSwipe('up');
            if (btnRewind) btnRewind.onclick = () => this.handleRewind();

            const onKey = (e) => {
                if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'Backspace'].includes(e.key)) {
                    const modal = document.getElementById('match-modal');
                    if (modal && modal.classList.contains('open')) return;
                }
                if (e.key === 'ArrowLeft') this.handleSwipe('left');
                if (e.key === 'ArrowRight') this.handleSwipe('right');
                if (e.key === 'ArrowUp') this.handleSwipe('up');
                if (e.key === 'Backspace') this.handleRewind();
            };

            document.removeEventListener('keydown', this._keyHandler);
            this._keyHandler = onKey;
            document.addEventListener('keydown', onKey);

            if (!card) return;

            let startX = 0, startY = 0, currentX = 0, currentY = 0, isDragging = false;

            const badgeRight = document.getElementById('badge-right');
            const badgeLeft = document.getElementById('badge-left');
            const badgeSuper = document.getElementById('badge-super');

            const startDrag = (x, y) => {
                isDragging = true;
                startX = x;
                startY = y;
                card.classList.add('dragging');
            };

            const moveDrag = (x, y) => {
                if (!isDragging) return;
                currentX = x - startX;
                currentY = y - startY;

                const rot = currentX * 0.08;
                card.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${rot}deg)`;

                if (currentX > 30) {
                    if (badgeRight) badgeRight.style.opacity = Math.min(1, (currentX - 30) / 70);
                    if (badgeLeft) badgeLeft.style.opacity = 0;
                } else if (currentX < -30) {
                    if (badgeLeft) badgeLeft.style.opacity = Math.min(1, (-currentX - 30) / 70);
                    if (badgeRight) badgeRight.style.opacity = 0;
                } else if (currentY < -50) {
                    if (badgeSuper) badgeSuper.style.opacity = Math.min(1, (-currentY - 50) / 70);
                } else {
                    if (badgeRight) badgeRight.style.opacity = 0;
                    if (badgeLeft) badgeLeft.style.opacity = 0;
                    if (badgeSuper) badgeSuper.style.opacity = 0;
                }
            };

            const endDrag = () => {
                if (!isDragging) return;
                isDragging = false;
                card.classList.remove('dragging');

                if (currentX > 100) {
                    this.handleSwipe('right');
                } else if (currentX < -100) {
                    this.handleSwipe('left');
                } else if (currentY < -120) {
                    this.handleSwipe('up');
                } else {
                    card.style.transform = '';
                    if (badgeRight) badgeRight.style.opacity = 0;
                    if (badgeLeft) badgeLeft.style.opacity = 0;
                    if (badgeSuper) badgeSuper.style.opacity = 0;
                }
            };

            card.onmousedown = (e) => {
                if (e.target.closest('.tap-zone')) return;
                startDrag(e.clientX, e.clientY);
            };
            window.onmousemove = (e) => moveDrag(e.clientX, e.clientY);
            window.onmouseup = () => endDrag();

            card.ontouchstart = (e) => {
                if (e.target.closest('.tap-zone')) return;
                const touch = e.touches[0];
                startDrag(touch.clientX, touch.clientY);
            };
            card.ontouchmove = (e) => {
                if (!isDragging) return;
                const touch = e.touches[0];
                moveDrag(touch.clientX, touch.clientY);
            };
            card.ontouchend = () => endDrag();
        },

        handleSwipe(dir) {
            const card = document.getElementById('active-card');
            const item = this.deck[this.currentIndex];
            if (!item) return;

            let choiceName = '';
            let points = 10;

            if (dir === 'right') {
                choiceName = item.type === 'profile' ? 'Liked ❤️' : `Option B (${item.optionB ? item.optionB.title : 'Choice'})`;
                if (card) card.style.transform = 'translate3d(1000px, 0, 0) rotate(30deg)';
            } else if (dir === 'left') {
                choiceName = item.type === 'profile' ? 'Passed ❌' : `Option A (${item.optionA ? item.optionA.title : 'Choice'})`;
                points = 5;
                if (card) card.style.transform = 'translate3d(-1000px, 0, 0) rotate(-30deg)';
            } else if (dir === 'up') {
                choiceName = 'Super Like! ⭐';
                points = 20;
                if (card) card.style.transform = 'translate3d(0, -1000px, 0)';
            }

            this.swipedChoices.push({ item, choice: choiceName });

            if (window.COSYGame) COSYGame.addScore(points);

            if (window.gameUtils && window.gameUtils.playGameSound) {
                window.gameUtils.playGameSound(dir === 'right' || dir === 'up' ? 'success' : 'click');
            }

            if (dir === 'right' || dir === 'up') {
                setTimeout(() => {
                    this.openMatchModal(item);
                }, 200);
            } else {
                setTimeout(() => {
                    this.activeStoryIndex = 0;
                    this.currentIndex++;
                    this.renderCard();
                }, 200);
            }
        },

        handleRewind() {
            if (this.swipedChoices.length === 0) return;
            this.swipedChoices.pop();
            if (this.currentIndex > 0) this.currentIndex--;
            this.activeStoryIndex = 0;
            if (window.COSYGame) COSYGame.score = Math.max(0, COSYGame.score - 10);
            this.renderCard();
        },

        openMatchModal(item) {
            const modal = document.getElementById('match-modal');
            const nameEl = document.getElementById('match-item-name');
            const emojiEl = document.getElementById('match-item-emoji');
            const openerEl = document.getElementById('match-opener-text');
            const icebreakersEl = document.getElementById('chat-icebreakers');
            const messagesContainer = document.getElementById('chat-messages-container');
            const inputEl = document.getElementById('chat-input');

            if (nameEl) nameEl.textContent = item.title;
            if (emojiEl) emojiEl.textContent = item.avatar || '🔀';
            const openerText = item.opener || `Great choice! What made you pick ${item.title} today?`;
            if (openerEl) openerEl.textContent = openerText;
            if (inputEl) inputEl.value = '';

            if (messagesContainer) {
                messagesContainer.innerHTML = `
                    <div class="chat-bubble-reply">
                      <span>${openerText}</span>
                    </div>
                `;
            }

            if (icebreakersEl) {
                const pills = item.icebreakers || ['Great choice! What made you pick this one?', 'Tell your partner why you chose this.', 'Can you give two reasons?', 'How would you describe this in detail?'];
                icebreakersEl.innerHTML = pills.map(p => `
                    <button class="chat-icebreaker-btn" onclick="COSY_GAME.quickChat('${p.replace(/'/g, "\\'")}')">${p}</button>
                `).join('');
            }

            if (modal) modal.classList.add('open');

            if (window.gameUtils && window.gameUtils.createConfetti) {
                window.gameUtils.createConfetti();
            }
        },

        quickChat(text) {
            const inputEl = document.getElementById('chat-input');
            if (inputEl) {
                inputEl.value = text;
                this.sendChatMessage();
            }
        },

        sendChatMessage() {
            const inputEl = document.getElementById('chat-input');
            const messagesContainer = document.getElementById('chat-messages-container');
            if (!inputEl || !inputEl.value.trim() || !messagesContainer) return;

            const userText = inputEl.value.trim();
            inputEl.value = '';

            // Render User Bubble
            const userMsg = document.createElement('div');
            userMsg.className = 'chat-bubble-user';
            userMsg.textContent = userText;
            messagesContainer.appendChild(userMsg);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            if (window.COSYGame) COSYGame.score += 5;

            // Delayed Reply
            setTimeout(() => {
                const replies = [
                    "Great explanation! Tell your partner more.",
                    "Excellent point! Can you give another reason?",
                    "Spot on! How would you describe it further?",
                    "Fascinating perspective! Well expressed."
                ];
                const replyText = replies[Math.floor(Math.random() * replies.length)];
                const replyMsg = document.createElement('div');
                replyMsg.className = 'chat-bubble-reply';
                replyMsg.textContent = replyText;
                messagesContainer.appendChild(replyMsg);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 600);
        },

        closeMatchModal() {
            const modal = document.getElementById('match-modal');
            if (modal) modal.classList.remove('open');
            this.activeStoryIndex = 0;
            this.currentIndex++;
            this.renderCard();
        },

        renderEnd() {
            if (window.COSYScores && window.COSYGame) {
                COSYScores.save(GAME_ID, COSYGame.language || 'en', COSYGame.level || 'intermediate', COSYGame.score || 0);
            }

            if (window.gameUtils) {
                if (window.gameUtils.playGameSound) window.gameUtils.playGameSound('success');
                if (window.gameUtils.createConfetti) window.gameUtils.createConfetti();
            }

            const body = document.getElementById('go-body');
            if (!body) return;

            const scoreVal = window.COSYGame ? COSYGame.score : this.swipedChoices.length * 10;

            body.innerHTML = `
                <div class="setup-screen" style="max-width: 440px; margin: 0 auto; text-align: center; padding: 1.5rem 1rem;">
                  <h2>Swipe Deck Complete! 🎉</h2>
                  <div class="score-highlight">${scoreVal} Points</div>
                  <p style="color:var(--ink-muted);">Here are the cards you liked and the ones you passed. Discuss your reasons with your learning partner!</p>

                  <div style="text-align: left; background: var(--surface-color); border: 1px solid var(--border); color: var(--ink); border-radius: 16px; padding: 1rem; margin: 1.25rem 0; max-height: 280px; overflow-y: auto;">
                    <h4 style="margin-top: 0; font-weight:800; color: var(--ink);">Your Choices:</h4>
                    ${this.swipedChoices.map(c => `
                      <div style="padding: 8px 0; border-bottom: 1px dashed var(--border); display: flex; justify-content: space-between; align-items: center; font-size: 0.88rem;">
                        <div>
                          <strong style="color:var(--ink);">${c.item.title}</strong> <span style="font-size:0.75rem; background:var(--sage-mist); color:var(--ink); padding:2px 6px; border-radius:8px; margin-left:4px;">${c.item.level || ''}</span>
                          <div style="font-size: 0.78rem; color: var(--ink-muted);">${c.item.category}</div>
                        </div>
                        <span style="font-weight: 700; padding: 4px 10px; border-radius: 20px; font-size: 0.78rem; background: ${c.choice.includes('Liked') || c.choice.includes('Option B') || c.choice.includes('Super') ? 'var(--sage-mist)' : 'var(--sage-mist)'}; color: ${c.choice.includes('Liked') || c.choice.includes('Option B') || c.choice.includes('Super') ? 'var(--swipe-like)' : 'var(--swipe-pass)'};">
                          ${c.choice}
                        </span>
                      </div>
                    `).join('')}
                  </div>

                  <div style="display:flex; gap:1rem; justify-content:center;">
                    <button class="btn-start-game" onclick="COSY_GAME.start()" style="padding:0.85rem 1.2rem; border-radius:30px;">Swipe Again 🔄</button>
                    <button class="btn-g-secondary" onclick="COSY_GAME.reset()" style="padding:0.85rem 1.2rem; border-radius:30px;">Deck Settings ⚙️</button>
                  </div>
                </div>`;

            if (typeof window.refreshThisOrThatScores === 'function') {
                window.refreshThisOrThatScores();
            }
        },

        reset: renderSetup
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
