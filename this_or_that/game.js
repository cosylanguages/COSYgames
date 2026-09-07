/**
 * games/this_or_that/game.js
 * Game logic for "This or That? (Tinder for Things & Preferences)"
 */
(function() {
    const GAME_ID = 'thisorthat';
    const GAME_TITLE = 'This or That? 👈👉';
    const GAME_META = 'Tinder-style Swipe & Speaking Drills';

    // Multilingual & Level Deck Data
    const DECKS = {
        starter: [
            {
                type: 'profile',
                category: 'Food & Drinks ☕🍕',
                title: 'Morning Espresso',
                subtitle: 'The Energy Fuel',
                avatar: '☕',
                bio: 'I wake up at 6 AM and demand immediate hot water and roasted beans. Highly addictive personality!',
                greenFlags: ['✓ Instant energy', '✓ Smells amazing'],
                redFlags: ['✗ Heart palpitations', '✗ Stains teeth'],
                prompt: 'Do you drink coffee in the morning? Why or why not?'
            },
            {
                type: 'dilemma',
                category: 'Daily Routine 🌅🌃',
                title: 'Morning Person vs Night Owl',
                optionA: { emoji: '🌅', title: 'Early Bird', desc: 'Up with the sun, productive by 8 AM.' },
                optionB: { emoji: '🌃', title: 'Night Owl', desc: 'Creative energy surges after midnight.' },
                prompt: 'Are you an early bird or a night owl? Explain your typical sleeping habits.'
            },
            {
                type: 'profile',
                category: 'Lifestyle & Pets 🐕🐈',
                title: 'Golden Retriever',
                subtitle: 'The Loyal Companion',
                avatar: '🐕',
                bio: 'Loves fetching tennis balls, running in park grass, and endless belly rubs. Always happy to see you!',
                greenFlags: ['✓ Unconditional love', '✓ Great walking partner'],
                redFlags: ['✗ Sheds fur everywhere', '✗ Eats your shoes'],
                prompt: 'Are you a dog person or a cat person? Give three reasons.'
            },
            {
                type: 'dilemma',
                category: 'Travel & Vacations 🏖️⛰️',
                title: 'Beach Resort vs Mountain Hike',
                optionA: { emoji: '🏖️', title: 'Sunny Beach', desc: 'Relax with ocean waves and cold drinks.' },
                optionB: { emoji: '⛰️', title: 'Mountain Hike', desc: 'Crisp air, steep trails, and panoramic views.' },
                prompt: 'Where would you rather spend a 2-week vacation? Describe your dream itinerary.'
            },
            {
                type: 'profile',
                category: 'Tech & Gadgets 📱',
                title: 'Smartphone',
                subtitle: 'The Pocket Companion',
                avatar: '📱',
                bio: 'I store all your photos, chats, and secrets. I require charging daily and constant attention.',
                greenFlags: ['✓ Instant answers', '✓ GPS navigation'],
                redFlags: ['✗ Screen addiction', '✗ Battery dies at 5%'],
                prompt: 'Could you live without a smartphone for a week? What would be the hardest part?'
            }
        ],
        intermediate: [
            {
                type: 'profile',
                category: 'Career & Work 💼',
                title: 'Remote Work from Home',
                subtitle: 'The Pajama Lifestyle',
                avatar: '💻',
                bio: 'No commuting, unlimited coffee, and Zoom calls in sweatpants. Flexible hours but blurred boundaries!',
                greenFlags: ['✓ Zero travel time', '✓ Cook lunch at home'],
                redFlags: ['✗ Isolation', '✗ Working late hours'],
                prompt: 'Do you prefer working remotely or in a bustling office? Discuss pros and cons.'
            },
            {
                type: 'dilemma',
                category: 'Travel Style 🧳🎒',
                title: 'Luxury Hotel vs Backpacking Solo',
                optionA: { emoji: '🏨', title: '5-Star Luxury', desc: 'Room service, plush beds, and spa pools.' },
                optionB: { emoji: '🎒', title: 'Backpacking Solo', desc: 'Hostels, spontaneous adventures, low budget.' },
                prompt: 'How do you prefer to travel when discovering a new continent?'
            },
            {
                type: 'profile',
                category: 'Urban Living 🏙️',
                title: 'Bustling Metropolis',
                subtitle: 'The Non-Stop City',
                avatar: '🏙️',
                bio: '24/7 street food, museums, diverse multicultural vibes, and underground metro networks.',
                greenFlags: ['✓ Infinite activities', '✓ Public transit'],
                redFlags: ['✗ High rent', '✗ Noise & pollution'],
                prompt: 'Would you rather live in a skyscraper city or a quiet seaside village?'
            },
            {
                type: 'dilemma',
                category: 'Superpowers 🦸‍♀️⚡',
                title: 'Invisibility vs Time Travel',
                optionA: { emoji: '🫥', title: 'Invisibility', desc: 'Sneak anywhere completely undetected.' },
                optionB: { emoji: '⏳', title: 'Time Travel', desc: 'Visit ancient empires or glimpse the future.' },
                prompt: 'Which superpower would you choose and how would you use it responsibly?'
            },
            {
                type: 'profile',
                category: 'Food Culture 🥑',
                title: 'Avocado Toast',
                subtitle: 'The Millennial Icon',
                avatar: '🥑',
                bio: 'Creamy avocado sprinkled with chili flakes on sourdough. Stylish, healthy, but slightly overpriced.',
                greenFlags: ['✓ Healthy fats', '✓ Instagram worthy'],
                redFlags: ['✗ Goes bad in 5 mins', '✗ Pricey'],
                prompt: 'What is your go-to breakfast dish when you want to treat yourself?'
            }
        ],
        advanced: [
            {
                type: 'profile',
                category: 'Philosophy & Society 🏛️',
                title: 'Artificial Intelligence',
                subtitle: 'The Digital Mind',
                avatar: '🤖',
                bio: 'Processes billions of parameters per second. Writes code, composes poetry, but lacks human emotion.',
                greenFlags: ['✓ High efficiency', '✓ Endless knowledge'],
                redFlags: ['✗ Ethics concerns', '✗ Lack of empathy'],
                prompt: 'Will AI enhance or diminish human creativity over the next decade? Debate your view.'
            },
            {
                type: 'dilemma',
                category: 'Life Philosophy ⚖️',
                title: 'Absolute Honesty vs Compassionate Lies',
                optionA: { emoji: '🎯', title: 'Brutal Honesty', desc: 'Always tell the truth, no matter how painful.' },
                optionB: { emoji: '🤍', title: 'White Lies', desc: 'Protect emotions even if it distorts reality.' },
                prompt: 'Is it ever justified to lie to protect someone you love? Give an example scenario.'
            },
            {
                type: 'profile',
                category: 'Future & Tech 🚀',
                title: 'Mars Colonization',
                subtitle: 'The Red Planet Dream',
                avatar: '🚀',
                bio: 'A multi-planetary future! Extreme cold, radiation, red dust, and pioneering rocket travel.',
                greenFlags: ['✓ Human survival', '✓ Ultimate exploration'],
                redFlags: ['✗ One-way ticket', '✗ No atmosphere'],
                prompt: 'If offered a free ticket to join the first colony on Mars, would you accept? Why?'
            }
        ]
    };

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        if (!body) return;

        body.innerHTML = `
            <div class="setup-screen" style="text-align: center; max-width: 500px; margin: 0 auto; padding: 2rem 1rem;">
              <div style="font-size: 3.5rem; margin-bottom: 0.75rem;">👈 Profile Swipe 👉</div>
              <h1 style="font-family:'Fraunces', serif; margin-bottom: 0.5rem;">This or That?</h1>
              <p style="color:var(--ink-muted); margin-bottom: 1.5rem; line-height: 1.5;">
                Swipe Tinder-style profiles of things, concepts, and lifestyle choices.
                Express your preferences and explain your choices out loud!
              </p>

              <div class="setup-field" style="margin-bottom: 1.25rem; text-align: left;">
                <label style="font-weight:700; display:block; margin-bottom:0.5rem;">Difficulty & Vocabulary Level</label>
                <select class="styled-sel" id="tot-level" style="width: 100%; padding: 0.75rem; border-radius: 10px; border: 1px solid var(--sage-pale);">
                  <option value="starter">A1–A2: Starter & Everyday Topics</option>
                  <option value="intermediate" selected>B1–B2: Intermediate Lifestyle & Debates</option>
                  <option value="advanced">C1–C2: Advanced Philosophy & Future Tech</option>
                </select>
              </div>

              <div class="setup-field" style="margin-bottom: 2rem; text-align: left;">
                <label style="font-weight:700; display:block; margin-bottom:0.5rem;">Deck Type</label>
                <select class="styled-sel" id="tot-deck-type" style="width: 100%; padding: 0.75rem; border-radius: 10px; border: 1px solid var(--sage-pale);">
                  <option value="mixed" selected>🔀 Mixed (Profiles + Dilemmas)</option>
                  <option value="profiles">🖼️ Profiles Only ("Tinder for Things")</option>
                  <option value="dilemmas">⚖️ Dilemmas Only ("This vs That")</option>
                </select>
              </div>

              <button class="btn-start-game" onclick="COSY_GAME.start()" style="width: 100%; padding: 1rem; font-size: 1.1rem; border-radius: 12px;">▶ Start Swiping</button>
            </div>`;
    }

    window.COSY_GAME = {
        deck: [],
        currentIndex: 0,
        swipedChoices: [],

        async start() {
            const level = document.getElementById('tot-level')?.value || 'intermediate';
            const deckType = document.getElementById('tot-deck-type')?.value || 'mixed';
            const body = document.getElementById('go-body');

            if (body) body.innerHTML = '<div style="text-align:center;padding:4rem;">Preparing Tinder card deck...</div>';
            await new Promise(res => setTimeout(res, 200));

            let rawCards = DECKS[level] || DECKS.intermediate;
            if (deckType === 'profiles') {
                rawCards = rawCards.filter(c => c.type === 'profile');
            } else if (deckType === 'dilemmas') {
                rawCards = rawCards.filter(c => c.type === 'dilemma');
            }

            this.deck = [...rawCards].sort(() => Math.random() - 0.5);
            this.currentIndex = 0;
            this.swipedChoices = [];

            if (window.COSYGame) {
                COSYGame.init(GAME_ID, 'en', level);
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

            body.innerHTML = `
              <div class="score-bar" style="max-width: 520px; margin: 1.5rem auto 0.75rem auto; display: flex; justify-content: space-between; align-items: center;">
                <div class="sb-item"><span style="font-weight:700;">Cards:</span> ${this.currentIndex + 1} / ${this.deck.length}</div>
                <div class="sb-item"><span style="font-size:1.1rem;">🔥 ${this.swipedChoices.length * 10} pts</span></div>
              </div>

              <div class="swipe-container">
                <div class="card-stack">
                  <div class="swipe-card" id="active-card">
                    <!-- Badges -->
                    <div class="badge-indicator ${isProfile ? 'badge-like' : 'badge-that'}" id="badge-right">${isProfile ? '❤️ MATCH' : '👉 THAT'}</div>
                    <div class="badge-indicator ${isProfile ? 'badge-pass' : 'badge-this'}" id="badge-left">${isProfile ? '❌ PASS' : '👈 THIS'}</div>

                    <div>
                      <div class="card-header-tag">${item.category}</div>
                      ${isProfile ? `
                        <div class="card-avatar">${item.avatar}</div>
                        <div class="card-title">${item.title}</div>
                        <div class="card-subtitle">${item.subtitle}</div>
                        <div class="card-bio">${item.bio}</div>
                        <div class="card-details-grid">
                            ${(item.greenFlags || []).map(g => `<div class="detail-pill green">${g}</div>`).join('')}
                            ${(item.redFlags || []).map(r => `<div class="detail-pill red">${r}</div>`).join('')}
                        </div>
                      ` : `
                        <div style="font-family:'Fraunces', serif; text-align:center; font-size:1.4rem; font-weight:700; margin: 0.5rem 0;">${item.title}</div>
                        <div class="dilemma-grid">
                          <div class="dilemma-opt">
                            <div class="dilemma-opt-emoji">${item.optionA.emoji}</div>
                            <div class="dilemma-opt-title">${item.optionA.title}</div>
                            <div class="dilemma-opt-desc">${item.optionA.desc}</div>
                          </div>
                          <div class="dilemma-opt">
                            <div class="dilemma-opt-emoji">${item.optionB.emoji}</div>
                            <div class="dilemma-opt-title">${item.optionB.title}</div>
                            <div class="dilemma-opt-desc">${item.optionB.desc}</div>
                          </div>
                        </div>
                      `}

                      <div class="prompt-box">
                        💬 <strong>Prompt:</strong> ${item.prompt}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swipe-actions">
                  ${isProfile ? `
                    <button class="action-btn btn-no" id="btn-swipe-left" title="Pass (Swipe Left)">❌</button>
                    <button class="action-btn btn-yes" id="btn-swipe-right" title="Like (Swipe Right)">❤️</button>
                  ` : `
                    <button class="action-btn btn-this" id="btn-swipe-left" title="Option A (Swipe Left)">👈</button>
                    <button class="action-btn btn-that" id="btn-swipe-right" title="Option B (Swipe Right)">👉</button>
                  `}
                </div>
                <div style="font-size:0.8rem; color:var(--ink-muted); margin-top:0.75rem;">
                  Drag card left/right, use 👈/👉 arrow keys, or tap buttons!
                </div>
              </div>
            `;

            this.attachDragEvents();
        },

        attachDragEvents() {
            const card = document.getElementById('active-card');
            const btnLeft = document.getElementById('btn-swipe-left');
            const btnRight = document.getElementById('btn-swipe-right');
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

            // Remove any leftover key listener from previous card
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

            const isRight = direction === 'right';
            const flyX = isRight ? 500 : -500;
            const flyRotate = isRight ? 25 : -25;

            card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
            card.style.transform = `translate3d(${flyX}px, 0, 0) rotate(${flyRotate}deg)`;
            card.style.opacity = '0';

            if (window.gameUtils && window.gameUtils.playGameSound) {
                window.gameUtils.playGameSound('click');
            }

            this.swipedChoices.push({
                item,
                choice: isRight ? (item.type === 'profile' ? 'Like' : 'Option B') : (item.type === 'profile' ? 'Pass' : 'Option A')
            });

            if (window.COSYGame) COSYGame.score += 10;

            setTimeout(() => {
                this.currentIndex++;
                this.renderCard();
            }, 280);
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
                <div class="setup-screen" style="max-width: 520px; margin: 0 auto; text-align: center; padding: 2rem 1rem;">
                  <h2>Swipe Deck Complete! 🎉</h2>
                  <div style="font-size: 2.5rem; font-weight: 800; color: var(--sage); margin: 0.5rem 0;">${scoreVal} Points</div>
                  <p style="color:var(--ink-muted);">Here is a summary of your choices and preferences. Share your reasoning with your study group or teacher!</p>

                  <div style="text-align: left; background: var(--cream-dark); border-radius: 12px; padding: 1rem; margin: 1.5rem 0; max-height: 280px; overflow-y: auto;">
                    <h4 style="margin-top: 0; font-family:'Fraunces', serif;">Your Choice Recap:</h4>
                    ${this.swipedChoices.map(c => `
                      <div style="padding: 8px 0; border-bottom: 1px dashed rgba(0,0,0,0.1); display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem;">
                        <div>
                          <strong>${c.item.title}</strong>
                          <div style="font-size: 0.8rem; color: var(--ink-muted);">${c.item.category}</div>
                        </div>
                        <span style="font-weight: 700; padding: 4px 10px; border-radius: 20px; font-size: 0.82rem; background: ${c.choice.includes('Like') || c.choice.includes('Option B') ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)'}; color: ${c.choice.includes('Like') || c.choice.includes('Option B') ? '#047857' : '#b91c1c'};">
                          ${c.choice}
                        </span>
                      </div>
                    `).join('')}
                  </div>

                  <div style="display:flex; gap:1rem; justify-content:center;">
                    <button class="btn-start-game" onclick="COSY_GAME.start()">Swipe Again 🔄</button>
                    <button class="btn-g-danger" onclick="COSY_GAME.reset()">Setup Deck ⚙️</button>
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
