/**
 * games/this_or_that/game.js
 * Game logic for "This or That? (Tinder for Things & Concepts)"
 * Supports CEFR Levels (A0-A1, A2, B1, B2) & Rich Tinder Decks:
 * - Physical Appearance
 * - Professions
 * - Properties (Homes, Flats, Lofts, Chalets)
 * - Character Traits & Personality
 * - Hobbies & Passions
 */
(function() {
    const GAME_ID = 'thisorthat';
    const GAME_TITLE = 'This or That? 🔥';
    const GAME_META = 'Tinder Profiles & Speaking Drills (A0–B2 CEFR)';

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
              <div style="font-size: 3.2rem; margin-bottom: 0.2rem;">🔥 Tinder Swipe</div>
              <h1 style="font-family:'DM Sans', sans-serif; font-weight: 800; margin-bottom: 0.5rem; background: var(--tinder-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">This or That?</h1>
              <p style="color:var(--ink-muted); margin-bottom: 1.25rem; line-height: 1.45; font-size:0.95rem;">
                Swipe left or right on Tinder profiles of people, professions, properties, and dilemmas. Practice speaking with level-tailored prompts!
              </p>

              <div class="setup-field" style="margin-bottom: 1rem; text-align: left;">
                <label style="font-weight:700; display:block; margin-bottom:0.4rem; font-size:0.9rem;">🌐 Target Language</label>
                <select class="styled-sel" id="tot-lang-sel" style="width: 100%; padding: 0.75rem; border-radius: 12px; border: 1px solid #e5e7eb; font-weight:600;">
                  <option value="en" selected>🇬🇧 English</option>
                  <option value="french">🇫🇷 Français (French)</option>
                  <option value="italian">🇮🇹 Italiano (Italian)</option>
                  <option value="russian">🇷🇺 Русский (Russian)</option>
                  <option value="greek">🇬🇷 Ελληνικά (Greek)</option>
                </select>
              </div>

              <div class="setup-field" style="margin-bottom: 1rem; text-align: left;">
                <label style="font-weight:700; display:block; margin-bottom:0.4rem; font-size:0.9rem;">🎯 Target CEFR Level</label>
                <select class="styled-sel" id="tot-level-sel" style="width: 100%; padding: 0.75rem; border-radius: 12px; border: 1px solid #e5e7eb; font-weight:600;">
                  <option value="A0_A1">A0–A1: Starter & Basic Words</option>
                  <option value="A2" selected>A2: Elementary & Daily Life</option>
                  <option value="B1">B1: Intermediate & Work/Travel</option>
                  <option value="B2">B2: Upper-Inter & Abstract Concepts</option>
                  <option value="ALL">All Levels Combined (A0–B2)</option>
                </select>
              </div>

              <div class="setup-field" style="margin-bottom: 1.75rem; text-align: left;">
                <label style="font-weight:700; display:block; margin-bottom:0.4rem; font-size:0.9rem;">🎴 Vocabulary Deck & Topic</label>
                <select class="styled-sel" id="tot-deck-sel" style="width: 100%; padding: 0.75rem; border-radius: 12px; border: 1px solid #e5e7eb; font-weight:600;">
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
                    <option value="mixed">🔥 Mixed Full Deck (All Categories)</option>
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

              <button class="btn-start-game" onclick="COSY_GAME.start()" style="width: 100%; padding: 0.95rem; font-size: 1.1rem; border-radius: 30px; background: var(--tinder-gradient); color: #fff; border: none; font-weight: 800; cursor: pointer; box-shadow: 0 6px 18px rgba(253,38,125,0.35);">▶ Start Swiping 🔥</button>
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

            if (body) body.innerHTML = '<div style="text-align:center;padding:4rem;font-weight:700;color:var(--tinder-pink);">Shuffling Tinder deck... 🔥</div>';
            await new Promise(res => setTimeout(res, 200));

            let activeDecksSource = {};

            function extractCardsFromSource(source, lvl, category) {
                if (!source || !source[lvl]) return [];
                const lvlData = source[lvl];
                if (Array.isArray(lvlData)) return lvlData;
                if (category === 'mixed') {
                    let cards = [];
                    Object.keys(lvlData).forEach(cat => {
                        if (Array.isArray(lvlData[cat])) cards.push(...lvlData[cat]);
                    });
                    return cards;
                }
                if (category === 'grammar') {
                    let cards = [];
                    Object.keys(lvlData).filter(c => c.startsWith('grammar')).forEach(cat => {
                        if (Array.isArray(lvlData[cat])) cards.push(...lvlData[cat]);
                    });
                    return cards;
                }
                if (Array.isArray(lvlData[category])) {
                    return lvlData[category];
                }
                return [];
            }

            if (langSel !== 'en') {
                try {
                    const res = await fetch(`decks/${langSel}.json`);
                    if (res.ok) {
                        activeDecksSource = await res.json();
                    }
                } catch (e) {
                    console.warn(`Failed to fetch deck for language ${langSel}, falling back to English.`, e);
                }
            }

            if (Object.keys(activeDecksSource).length === 0) {
                try {
                    let res = await fetch(`decks/en/${deckSel}.json`);
                    if (res.ok) {
                        activeDecksSource = await res.json();
                    } else {
                        res = await fetch('decks/cefr_all_decks.json');
                        if (res.ok) {
                            activeDecksSource = await res.json();
                        }
                    }
                } catch (e) {
                    console.warn('Failed to fetch English deck file, trying cefr_all_decks.json.', e);
                    try {
                        const res = await fetch('decks/cefr_all_decks.json');
                        if (res.ok) activeDecksSource = await res.json();
                    } catch (err) {
                        console.error('Failed to load fallbacks:', err);
                    }
                }
            }

            let rawCards = [];

            if (deckSel === 'dilemmas') {
                const levelsToSearch = levelSel === 'ALL' ? ['A0_A1', 'A2', 'B1', 'B2'] : [levelSel];
                levelsToSearch.forEach(lvl => {
                    const cards = extractCardsFromSource(activeDecksSource, lvl, 'dilemmas');
                    rawCards.push(...cards);
                });
                if (rawCards.length === 0) {
                    rawCards = [...GENERAL_DILEMMAS];
                    if (levelSel !== 'ALL') {
                        const targetLevelTag = levelSel.replace('_', '-');
                        rawCards = rawCards.filter(c => c.level === targetLevelTag || c.level.includes(targetLevelTag));
                    }
                }
            } else {
                const levelsToSearch = levelSel === 'ALL' ? ['A0_A1', 'A2', 'B1', 'B2'] : [levelSel];
                levelsToSearch.forEach(lvl => {
                    const cards = extractCardsFromSource(activeDecksSource, lvl, deckSel);
                    rawCards.push(...cards);
                });
            }

            if (rawCards.length === 0) {
                const langNames = {
                    french: 'French',
                    italian: 'Italian',
                    russian: 'Russian',
                    greek: 'Greek',
                    en: 'English'
                };
                const catNames = {
                    appearance: 'Physical Appearance',
                    professions: 'Professions',
                    properties: 'Properties',
                    character: 'Character Traits',
                    hobbies: 'Hobbies',
                    nationalities: 'Nationalities',
                    food: 'Food & Cuisine',
                    travel: 'Travel & Destinations',
                    entertainment: 'Books, Films & Music',
                    daily_habits: 'Daily Routines',
                    grammar: 'All Grammar Drills',
                    grammar_present: 'Present Tenses Grammar',
                    grammar_past: 'Past Tenses Grammar',
                    grammar_perfect: 'Present Perfect Grammar',
                    grammar_advanced: 'Conditionals & Advanced Grammar',
                    dilemmas: 'Dilemmas',
                    mixed: 'Mixed Deck'
                };

                const langLabel = langNames[langSel] || (langSel.charAt(0).toUpperCase() + langSel.slice(1));
                const catLabel = catNames[deckSel] || deckSel;
                const lvlLabel = levelSel === 'ALL' ? 'All Levels' : levelSel.replace('_', '–');

                try {
                    const res = await fetch('decks/cefr_all_decks.json');
                    if (res.ok) {
                        const fallbackSource = await res.json();
                        const levelsToSearch = levelSel === 'ALL' ? ['A0_A1', 'A2', 'B1', 'B2'] : [levelSel, 'A0_A1', 'A2', 'B1', 'B2'];
                        for (const lvl of levelsToSearch) {
                            const cards = extractCardsFromSource(fallbackSource, lvl, deckSel);
                            if (cards.length > 0) {
                                rawCards.push(...cards);
                                break;
                            }
                        }
                    }
                } catch (e) {
                    console.warn('Fallback fetch failed:', e);
                }

                if (rawCards.length > 0) {
                    this.fallbackNotice = `No ${langLabel} cards for '${catLabel}' at ${lvlLabel} yet — showing English cards instead.`;
                }
            }

            this.deck = [...rawCards].sort(() => Math.random() - 0.5);
            this.currentIndex = 0;
            this.swipedChoices = [];
            this.activeStoryIndex = 0;

            if (window.COSYGame) {
                COSYGame.init(GAME_ID, langSel, levelSel);
                COSYGame.maxRounds = this.deck.length;
                COSYGame.score = 0;
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
              <div class="tinder-app">
                <div class="tinder-top-bar">
                  <div class="tinder-brand">🔥 Tinder Words</div>
                  <div style="font-weight:800; font-size:0.85rem; color:#6b7280;">Card ${this.currentIndex + 1} / ${this.deck.length}</div>
                </div>

                ${this.fallbackNotice ? `
                  <div style="background:#fff3cd; color:#856404; border:1px solid #ffeeba; padding:8px 12px; border-radius:10px; font-size:0.82rem; margin: 0 0 10px 0; text-align:center; font-weight:600; line-height:1.35; box-shadow:0 2px 6px rgba(0,0,0,0.05);">
                    ⚠️ ${this.fallbackNotice}
                  </div>
                ` : ''}

                <div class="card-stack">
                  <div class="tinder-card" id="active-card">
                    <!-- Dynamic Stamp Overlays -->
                    <div class="badge-indicator badge-like" id="badge-right">${isProfile ? '❤️ LIKE' : '👉 THAT'}</div>
                    <div class="badge-indicator badge-pass" id="badge-left">${isProfile ? '❌ NOPE' : '👈 THIS'}</div>
                    <div class="badge-indicator badge-super" id="badge-super">⭐ SUPER LIKE</div>

                    <!-- Hero Avatar Box with Story Bars & Tap Navigation -->
                    <div class="card-hero-box" style="background: ${item.gradient || 'var(--tinder-gradient)'};">
                      ${isProfile && pages.length > 1 ? `
                        <div class="story-bar-container">
                          ${pages.map((_, idx) => `<div class="story-segment ${idx === this.activeStoryIndex ? 'active' : ''}"></div>`).join('')}
                        </div>
                        <div class="tap-zone left" onclick="COSY_GAME.prevStory(event)"></div>
                        <div class="tap-zone right" onclick="COSY_GAME.nextStory(event)"></div>
                      ` : ''}

                      <!-- Grammar Target Badge Overlay if present -->
                      ${item.grammarTarget ? `
                        <div style="position:absolute; top:12px; left:12px; background:rgba(253,38,125,0.88); color:#fff; font-weight:800; font-size:0.75rem; padding:3px 9px; border-radius:12px; backdrop-filter:blur(6px); border:1px solid rgba(255,255,255,0.3); z-index:26;">
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
                          ${item.verified ? '<span class="verified-icon" title="Verified Tinder Profile">☑️</span>' : ''}
                        </div>
                        <div class="profile-meta-row">
                          <span>${item.location || '📍 Nearby'}</span>
                          <span>• ${item.category}</span>
                        </div>

                        ${item.visualDescription ? `
                          <div style="font-size:0.78rem; font-style:italic; color:#4b5563; background:#f0f9ff; padding:6px 10px; border-radius:8px; margin-bottom:0.6rem; border-left:3px solid #0284c7;">
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
                              <div style="font-size:0.78rem; font-weight:700; color:#4b5563; background:#f3f4f6; padding:5px 10px; border-radius:10px; border:1px solid #e5e7eb;">
                                ${item.anthem}
                              </div>
                            ` : ''}
                            ${item.film ? `
                              <div style="font-size:0.78rem; font-weight:700; color:#4b5563; background:#f0f9ff; padding:5px 10px; border-radius:10px; border:1px solid #bae6fd;">
                                ${item.film}
                              </div>
                            ` : ''}
                          </div>
                        ` : `
                          <div class="dilemma-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:0.8rem;">
                            <div class="dilemma-opt" style="background:#f9fafb; padding:10px; border-radius:12px; border:1px solid #e5e7eb; text-align:center;">
                              <div style="font-size:2.2rem; margin-bottom:4px;">${item.optionA.emoji}</div>
                              <div style="font-weight:800; font-size:0.95rem; color:#111827;">${item.optionA.title}</div>
                              <div style="font-size:0.78rem; color:#6b7280; margin-top:4px; line-height:1.3;">${item.optionA.desc}</div>
                            </div>
                            <div class="dilemma-opt" style="background:#f9fafb; padding:10px; border-radius:12px; border:1px solid #e5e7eb; text-align:center;">
                              <div style="font-size:2.2rem; margin-bottom:4px;">${item.optionB.emoji}</div>
                              <div style="font-weight:800; font-size:0.95rem; color:#111827;">${item.optionB.title}</div>
                              <div style="font-size:0.78rem; color:#6b7280; margin-top:4px; line-height:1.3;">${item.optionB.desc}</div>
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

                <!-- Tinder Action Control Bar -->
                <div class="tinder-actions">
                  <button class="t-btn btn-rewind" id="btn-rewind" title="Rewind / Undo Last Swipe" ${this.swipedChoices.length === 0 ? 'disabled style="opacity:0.4;cursor:default;"' : ''}>🔄</button>
                  <button class="t-btn btn-pass" id="btn-swipe-left" title="Pass / Swipe Left">❌</button>
                  <button class="t-btn btn-super" id="btn-super-like" title="Super Like!">⭐</button>
                  <button class="t-btn btn-like" id="btn-swipe-right" title="Like / Swipe Right">❤️</button>
                </div>
                <div style="font-size:0.78rem; color:#9ca3af; margin-top:0.5rem;">
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

            const badgeLeft = document.getElementById('badge-left');
            const badgeRight = document.getElementById('badge-right');

            if (!card) return;

            let startX = 0, currentX = 0, isDragging = false;

            const removeKeyHandler = () => {
                if (this._onKeyDown) {
                    window.removeEventListener('keydown', this._onKeyDown);
                    this._onKeyDown = null;
                }
            };

            removeKeyHandler();

            const onStart = (e) => {
                isDragging = true;
                startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
                card.classList.add('dragging');
            };

            const onMove = (e) => {
                if (!isDragging) return;
                currentX = (e.type.includes('touch') ? e.touches[0].clientX : e.clientX) - startX;
                const rotate = currentX * 0.08;
                card.style.transform = `translate3d(${currentX}px, 0, 0) rotate(${rotate}deg)`;

                if (currentX > 30) {
                    if (badgeRight) badgeRight.style.opacity = Math.min(1, (currentX - 30) / 70);
                    if (badgeLeft) badgeLeft.style.opacity = '0';
                } else if (currentX < -30) {
                    if (badgeLeft) badgeLeft.style.opacity = Math.min(1, (-currentX - 30) / 70);
                    if (badgeRight) badgeRight.style.opacity = '0';
                } else {
                    if (badgeRight) badgeRight.style.opacity = '0';
                    if (badgeLeft) badgeLeft.style.opacity = '0';
                }
            };

            const onEnd = () => {
                if (!isDragging) return;
                isDragging = false;
                card.classList.remove('dragging');

                window.removeEventListener('mousemove', onMove);
                window.removeEventListener('mouseup', onEnd);
                window.removeEventListener('touchmove', onMove);
                window.removeEventListener('touchend', onEnd);

                if (currentX > 100) {
                    removeKeyHandler();
                    this.executeSwipe('right');
                } else if (currentX < -100) {
                    removeKeyHandler();
                    this.executeSwipe('left');
                } else {
                    card.style.transform = 'translate3d(0,0,0) rotate(0deg)';
                    if (badgeLeft) badgeLeft.style.opacity = '0';
                    if (badgeRight) badgeRight.style.opacity = '0';
                }
            };

            card.addEventListener('mousedown', (e) => {
                onStart(e);
                window.addEventListener('mousemove', onMove);
                window.addEventListener('mouseup', onEnd);
            });

            card.addEventListener('touchstart', (e) => {
                onStart(e);
                window.addEventListener('touchmove', onMove, { passive: true });
                window.addEventListener('touchend', onEnd);
            }, { passive: true });

            btnLeft?.addEventListener('click', () => {
                removeKeyHandler();
                this.executeSwipe('left');
            });

            btnRight?.addEventListener('click', () => {
                removeKeyHandler();
                this.executeSwipe('right');
            });

            btnSuper?.addEventListener('click', () => {
                removeKeyHandler();
                this.executeSwipe('super');
            });

            btnRewind?.addEventListener('click', () => {
                removeKeyHandler();
                this.rewind();
            });

            this._onKeyDown = (e) => {
                if (e.key === 'ArrowLeft') {
                    removeKeyHandler();
                    this.executeSwipe('left');
                } else if (e.key === 'ArrowRight') {
                    removeKeyHandler();
                    this.executeSwipe('right');
                }
            };
            window.addEventListener('keydown', this._onKeyDown);
        },

        executeSwipe(direction) {
            const card = document.getElementById('active-card');
            const item = this.deck[this.currentIndex];
            if (!card || !item) return;

            const isLike = direction === 'right' || direction === 'super';
            const flyX = isLike ? 500 : -500;
            const flyRotate = isLike ? 25 : -25;

            card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
            card.style.transform = `translate3d(${flyX}px, 0, 0) rotate(${flyRotate}deg)`;
            card.style.opacity = '0';

            if (window.gameUtils && window.gameUtils.playGameSound) {
                window.gameUtils.playGameSound('click');
            }

            const choiceObj = {
                item,
                type: direction,
                choice: isLike ? (item.type === 'profile' ? 'Matched ❤️' : 'Option B 👉') : (item.type === 'profile' ? 'Passed ❌' : 'Option A 👈')
            };

            this.swipedChoices.push(choiceObj);
            if (window.COSYGame) COSYGame.score += (direction === 'super' ? 20 : 10);

            setTimeout(() => {
                if (isLike && item.type === 'profile') {
                    this.openMatchModal(item);
                } else {
                    this.activeStoryIndex = 0;
                    this.currentIndex++;
                    this.renderCard();
                }
            }, 260);
        },

        rewind() {
            if (this.swipedChoices.length === 0 || this.currentIndex === 0) return;
            this.swipedChoices.pop();
            this.currentIndex--;
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
            if (emojiEl) emojiEl.textContent = item.avatar || '🔥';
            if (openerEl) openerEl.textContent = item.opener || `Hey! What made you swipe right on ${item.title} today? 🔥`;
            if (inputEl) inputEl.value = '';

            if (messagesContainer) {
                messagesContainer.innerHTML = `
                    <div style="background: rgba(255,255,255,0.95); color: #1f2937; padding: 8px 12px; border-radius: 12px 12px 12px 2px; font-size: 0.85rem; max-width: 85%; align-self: flex-start; box-shadow: 0 2px 6px rgba(0,0,0,0.15);">
                      <span>${item.opener || `Hey! What made you swipe right on ${item.title} today? 🔥`}</span>
                    </div>
                `;
            }

            if (icebreakersEl) {
                const pills = item.icebreakers || ['I love this profile!', 'Defend your choice 💬', 'Tell me more!'];
                icebreakersEl.innerHTML = pills.map(p => `
                    <button onclick="COSY_GAME.quickChat('${p.replace(/'/g, "\'")}')" style="background: rgba(255,255,255,0.25); border: 1px solid rgba(255,255,255,0.4); color: #fff; padding: 4px 10px; border-radius: 16px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: background 0.15s;">${p}</button>
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
            userMsg.style.cssText = 'background: #fd267d; color: #ffffff; padding: 8px 12px; border-radius: 12px 12px 2px 12px; font-size: 0.85rem; max-width: 85%; align-self: flex-end; box-shadow: 0 2px 6px rgba(0,0,0,0.15); margin-top: 4px;';
            userMsg.textContent = userText;
            messagesContainer.appendChild(userMsg);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            if (window.COSYGame) COSYGame.score += 5;

            // Delayed Level-Tailored Reply
            setTimeout(() => {
                const replies = [
                    "Haha I love that answer! Perfect match energy 🔥",
                    "Great point! I knew we would hit it off! 🚀",
                    "Spot on! Definitely agree with you there ☕",
                    "Fascinating perspective! You really know your stuff 🎉"
                ];
                const replyText = replies[Math.floor(Math.random() * replies.length)];
                const replyMsg = document.createElement('div');
                replyMsg.style.cssText = 'background: rgba(255,255,255,0.95); color: #1f2937; padding: 8px 12px; border-radius: 12px 12px 12px 2px; font-size: 0.85rem; max-width: 85%; align-self: flex-start; box-shadow: 0 2px 6px rgba(0,0,0,0.15); margin-top: 4px;';
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
                  <div style="font-size: 2.5rem; font-weight: 800; color: var(--tinder-pink); margin: 0.5rem 0;">${scoreVal} Points</div>
                  <p style="color:var(--ink-muted);">Here are your Tinder matches & passed items. Discuss your reasons with your learning partner!</p>

                  <div style="text-align: left; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px; padding: 1rem; margin: 1.25rem 0; max-height: 280px; overflow-y: auto;">
                    <h4 style="margin-top: 0; font-family:'DM Sans', sans-serif; font-weight:800;">Your Match History:</h4>
                    ${this.swipedChoices.map(c => `
                      <div style="padding: 8px 0; border-bottom: 1px dashed rgba(0,0,0,0.1); display: flex; justify-content: space-between; align-items: center; font-size: 0.88rem;">
                        <div>
                          <strong>${c.item.title}</strong> <span style="font-size:0.75rem; background:#f3f4f6; padding:2px 6px; border-radius:8px; margin-left:4px;">${c.item.level || ''}</span>
                          <div style="font-size: 0.78rem; color: #6b7280;">${c.item.category}</div>
                        </div>
                        <span style="font-weight: 700; padding: 4px 10px; border-radius: 20px; font-size: 0.78rem; background: ${c.choice.includes('Matched') || c.choice.includes('Option B') ? '#d1fae5' : '#fee2e2'}; color: ${c.choice.includes('Matched') || c.choice.includes('Option B') ? '#047857' : '#b91c1c'};">
                          ${c.choice}
                        </span>
                      </div>
                    `).join('')}
                  </div>

                  <div style="display:flex; gap:1rem; justify-content:center;">
                    <button class="btn-start-game" onclick="COSY_GAME.start()" style="padding:0.85rem 1.2rem; border-radius:30px; background:var(--tinder-gradient); color:#fff; font-weight:800; border:none; cursor:pointer;">Swipe Again 🔄</button>
                    <button class="btn-g-danger" onclick="COSY_GAME.reset()">Deck Settings ⚙️</button>
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
