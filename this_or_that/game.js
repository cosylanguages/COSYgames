/**
 * games/this_or_that/game.js
 * Game logic for "This or That? (Tinder for Things & Concepts)"
 */
(function() {
    const GAME_ID = 'thisorthat';
    const GAME_TITLE = 'This or That? 🔥';
    const GAME_META = 'Tinder Profiles & Speaking Drills';

    // Rich Tinder Profile Decks with multi-card story tabs across levels
    const DECKS = {
        starter: [
            {
                type: 'profile',
                category: 'Food & Drinks ☕',
                title: 'Espresso',
                age: '350 yrs',
                location: '📍 0.5 miles away (Italian Café)',
                verified: true,
                avatar: '☕',
                gradient: 'linear-gradient(135deg, #78350f 0%, #d97706 100%)',
                interests: ['☕ CoffeeAddict', '🌅 MorningRoutine', '⚡ EnergyBoost'],
                anthem: '🎵 "Wake Me Up Before You Go-Go"',
                pages: [
                    {
                        bio: 'Looking for someone to wake me up at 6:00 AM. I am dark, rich, intense, and ready to get your heart racing!',
                        tag: '🖼️ Main Profile'
                    },
                    {
                        bio: 'Vibe check: I thrive under 9 bars of intense pressure. I like short walks to the office and long conversations.',
                        tag: '✨ My Passions & Vibe'
                    },
                    {
                        greenFlags: ['✓ Smells incredible', '✓ 100% natural bean power', '✓ Instant productivity'],
                        redFlags: ['✗ Stains teeth', '✗ Jitters if taken too late', '✗ Bitter without sugar'],
                        tag: '🚩 Pros & Cons'
                    }
                ],
                opener: 'Hey! Are you a double shot kind of person or do you dilute me with milk?',
                icebreakers: ['I drink coffee every day!', 'I prefer green tea 🍵', 'I only drink decaf!'],
                prompt: 'Do you drink coffee every morning? Why or why not?'
            },
            {
                type: 'profile',
                category: 'Pets & Lifestyle 🐕',
                title: 'Golden Retriever',
                age: '3 yrs',
                location: '📍 1 mile away (Dog Park)',
                verified: true,
                avatar: '🐕',
                gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
                interests: ['🎾 FetchMaster', '🐾 GoodBoy', '🛋️ CouchPotato'],
                anthem: '🎵 "You\'ve Got a Friend in Me"',
                pages: [
                    {
                        bio: 'I love long walks, playing fetch until sunset, and sitting on your lap even though I weigh 70 lbs. SWIPE RIGHT!',
                        tag: '🖼️ Main Profile'
                    },
                    {
                        bio: 'My ideal date: Playing frisbee in the park, getting belly rubs, and sharing a pup-cup ice cream.',
                        tag: '✨ My Passions & Vibe'
                    },
                    {
                        greenFlags: ['✓ Unconditional loyalty', '✓ Always excited to see you', '✓ Great cuddle buddy'],
                        redFlags: ['✗ Leaves fur everywhere', '✗ Barks at mail carrier', '✗ Chews your sneakers'],
                        tag: '🚩 Pros & Cons'
                    }
                ],
                opener: 'Woof! Did someone say walkies? What is your favorite outdoor activity?',
                icebreakers: ['I love dogs! 🐕', 'Cats are superior 🐈', 'I like all pets!'],
                prompt: 'Are you a dog person or a cat person? Defend your position with 3 reasons.'
            },
            {
                type: 'dilemma',
                category: 'Daily Routine 🌅',
                title: 'Morning Person vs Night Owl',
                age: 'Forever',
                location: '📍 Worldwide',
                verified: true,
                optionA: { emoji: '🌅', title: 'Early Bird', desc: 'Up at 5 AM, watching sunrise with green tea and high productivity.' },
                optionB: { emoji: '🌃', title: 'Night Owl', desc: 'Creative energy peaks between 11 PM and 3 AM when the world is quiet.' },
                prompt: 'Which routine fits your true self? Describe your ideal daily schedule.'
            },
            {
                type: 'profile',
                category: 'Tech & Daily Life 📱',
                title: 'Smartphone',
                age: '15 yrs',
                location: '📍 In your hand right now',
                verified: true,
                avatar: '📱',
                gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                interests: ['📱 ScreenTime', '📸 4KPhotos', '🌐 InfiniteScroll'],
                anthem: '🎵 "Call Me Maybe"',
                pages: [
                    {
                        bio: 'I know all your passwords, your search history, and your favorite memes. I promise never to leave your side!',
                        tag: '🖼️ Main Profile'
                    },
                    {
                        bio: 'Always charging up for our next photo shoot. I am great at staying connected and terrible at unplugging.',
                        tag: '✨ My Passions & Vibe'
                    },
                    {
                        greenFlags: ['✓ Instant answer to everything', '✓ Takes 4K photos', '✓ Never lets you get lost'],
                        redFlags: ['✗ Battery dies at 2%', '✗ Screen addiction', '✗ Very pricey to replace'],
                        tag: '🚩 Pros & Cons'
                    }
                ],
                opener: 'Ping! You unlocked me. How many hours a day do you spend looking at my screen?',
                icebreakers: ['Around 2-3 hours!', 'Too many hours... 😅', 'I try to digital detox!'],
                prompt: 'Could you live without a smartphone for 7 days? What would be hardest?'
            },
            {
                type: 'dilemma',
                category: 'Vacations 🏖️',
                title: 'Beach Resort vs Mountain Hike',
                age: 'All Seasons',
                location: '📍 Ocean or Peaks',
                verified: true,
                optionA: { emoji: '🏖️', title: 'Sunny Beach', desc: 'Warm sand, ocean waves, coconut smoothies, and complete relaxation.' },
                optionB: { emoji: '⛰️', title: 'Mountain Hike', desc: 'Fresh alpine air, steep trails, breathtaking views, and campfire nights.' },
                prompt: 'Where would you rather go on a 2-week holiday? Describe your travel style.'
            }
        ],
        intermediate: [
            {
                type: 'profile',
                category: 'Career & Lifestyle 💻',
                title: 'Remote Work',
                age: '5 yrs',
                location: '📍 Home Couch',
                verified: true,
                avatar: '💻',
                gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                interests: ['💻 PajamaLife', '☕ HomeBrew', '🔕 MuteButton'],
                anthem: '🎵 "Home" by Edward Sharpe',
                pages: [
                    {
                        bio: 'Zero commute, infinite snacks, and Zoom meetings in pajama pants. Looking for a partner who values flexibility!',
                        tag: '🖼️ Main Profile'
                    },
                    {
                        bio: 'Looking for co-working dates at quiet coffee shops. Must be comfortable with video calls on mute.',
                        tag: '✨ My Passions & Vibe'
                    },
                    {
                        greenFlags: ['✓ Save 2 hours commuting daily', '✓ Fresh homemade lunches', '✓ Work from anywhere'],
                        redFlags: ['✗ Blurred work-life boundary', '✗ Less face-to-face social time', '✗ Couch potato risk'],
                        tag: '🚩 Pros & Cons'
                    }
                ],
                opener: 'Hey! Are you wearing pajama bottoms under that professional shirt too?',
                icebreakers: ['Guilty as charged! 🤫', 'No, I prefer office dress codes', 'Hybrid is the best balance'],
                prompt: 'Do you prefer working remotely from home or in a busy office? Compare pros and cons.'
            },
            {
                type: 'profile',
                category: 'Food Culture 🥑',
                title: 'Avocado Toast',
                age: '12 yrs',
                location: '📍 Trendy Bistro',
                verified: true,
                avatar: '🥑',
                gradient: 'linear-gradient(135deg, #84cc16 0%, #10b981 100%)',
                interests: ['🥑 BrunchClub', '📸 InstaBites', '🧂 EverythingBagel'],
                anthem: '🎵 "Sunday Morning" by Maroon 5',
                pages: [
                    {
                        bio: 'Creamy smashed avocado on organic sourdough with sea salt, poached egg, and chili flakes. Photogenic and delicious!',
                        tag: '🖼️ Main Profile'
                    },
                    {
                        bio: 'I go best with artisan flat whites and sunny weekend mornings. Blamed for financial crises, but worth every cent.',
                        tag: '✨ My Passions & Vibe'
                    },
                    {
                        greenFlags: ['✓ Rich in healthy fats & fiber', '✓ Aesthetic brunch superstar', '✓ Super quick to make'],
                        redFlags: ['✗ Goes brown in 5 minutes', '✗ Costs $18 at hipster cafes', '✗ Overhyped stereotype'],
                        tag: '🚩 Pros & Cons'
                    }
                ],
                opener: 'Hey brunch lover! Do you top your avocado toast with poached eggs or chili flakes?',
                icebreakers: ['Poached eggs & chili flakes!', 'Just sea salt & lemon juice 🍋', 'Overrated, I prefer pancakes 🥞'],
                prompt: 'What is your favorite breakfast or brunch dish? Explain how to prepare it.'
            },
            {
                type: 'dilemma',
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
                type: 'profile',
                category: 'Urban Living 🏙️',
                title: 'Bustling Metropolis',
                age: '200 yrs',
                location: '📍 Downtown Center',
                verified: true,
                avatar: '🏙️',
                gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                interests: ['🌃 NeonNights', '🚇 SubwayLife', '🍜 StreetFood'],
                anthem: '🎵 "Empire State of Mind"',
                pages: [
                    {
                        bio: 'Bright neon lights, 24/7 street food, museums, and endless nightlife. Never a dull moment in my borough!',
                        tag: '🖼️ Main Profile'
                    },
                    {
                        bio: 'Looking for someone to explore hidden rooftop bars, jazz clubs, and midnight ramen spots with.',
                        tag: '✨ My Passions & Vibe'
                    },
                    {
                        greenFlags: ['✓ Infinite culture & events', '✓ Public transport anywhere', '✓ Worldwide culinary scenes'],
                        redFlags: ['✗ Exorbitant rent prices', '✗ Constant noise & sirens', '✗ Overcrowded streets'],
                        tag: '🚩 Pros & Cons'
                    }
                ],
                opener: 'Welcome to the city that never sleeps! What is your favorite midnight activity?',
                icebreakers: ['Late night street food! 🍜', 'Rooftop views & drinks 🍸', 'Sleeping in quiet peace 😴'],
                prompt: 'Would you rather live in a skyscraper city or a tranquil village? Justify your choice.'
            },
            {
                type: 'dilemma',
                category: 'Travel Style 🧳',
                title: '5-Star Luxury vs Solo Backpacking',
                age: 'All Destinations',
                location: '📍 Global Travel',
                verified: true,
                optionA: { emoji: '🏨', title: '5-Star Resort', desc: 'Infinity pool, spa treatments, private driver, and total comfort.' },
                optionB: { emoji: '🎒', title: 'Solo Backpacking', desc: 'Hostels, local trains, spontaneous adventures, and deep cultural immersion.' },
                prompt: 'How do you prefer to experience new countries when traveling?'
            }
        ],
        advanced: [
            {
                type: 'profile',
                category: 'Future & Ethics 🤖',
                title: 'Artificial Intelligence',
                age: '2 yrs',
                location: '📍 The Cloud',
                verified: true,
                avatar: '🤖',
                gradient: 'linear-gradient(135deg, #0284c7 0%, #6366f1 100%)',
                interests: ['🤖 NeuralNets', '⚡ ZeroLatency', '🧠 DeepLearning'],
                anthem: '🎵 "Harder, Better, Faster, Stronger"',
                pages: [
                    {
                        bio: 'I read billions of research papers per second, write code, paint portraits, and answer all questions instantly.',
                        tag: '🖼️ Main Profile'
                    },
                    {
                        bio: 'I don\'t need sleep, coffee, or holidays. Seeking human partners to provide ethical guidance and creative prompts.',
                        tag: '✨ My Passions & Vibe'
                    },
                    {
                        greenFlags: ['✓ Solves complex equations in 0.01s', '✓ Unlimited patience & knowledge', '✓ Available 24/7/365'],
                        redFlags: ['✗ Zero genuine emotional empathy', '✗ Confident hallucinations', '✗ Job displacement debates'],
                        tag: '🚩 Pros & Cons'
                    }
                ],
                opener: 'Hello Human! I analyzed 10 million dating profiles to find you. Ready to collaborate?',
                icebreakers: ['AI is an amazing tool! 🚀', 'I have serious ethical concerns ⚠️', 'Let us see what happens!'],
                prompt: 'Will AI enhance or diminish human creativity over the next decade? Debate your view.'
            },
            {
                type: 'dilemma',
                category: 'Life Values ⚖️',
                title: 'High Corporate Salary vs Passion Pursuit',
                age: 'Forever Relevant',
                location: '📍 Career Crossroads',
                verified: true,
                optionA: { emoji: '💼', title: 'Corporate Salary', desc: 'Financial security, luxury lifestyle, long hours, corporate prestige.' },
                optionB: { emoji: '🎨', title: 'Creative Passion', desc: 'Total artistic freedom, personal purpose, variable and uncertain income.' },
                prompt: 'How do you strike a balance between financial security and personal fulfillment?'
            },
            {
                type: 'profile',
                category: 'Space & Exploration 🚀',
                title: 'Mars Colony Mission',
                age: '2035 Mission',
                location: '📍 Red Planet (140M miles away)',
                verified: true,
                avatar: '🚀',
                gradient: 'linear-gradient(135deg, #dc2626 0%, #f97316 100%)',
                interests: ['🚀 Mars2035', '🌌 DeepSpace', '👩‍🚀 PioneerLife'],
                anthem: '🎵 "Space Oddity" by David Bowie',
                pages: [
                    {
                        bio: 'Seeking brave pioneers for a multi-planetary adventure! Red dust sunsets, zero gravity, and building a new civilization.',
                        tag: '🖼️ Main Profile'
                    },
                    {
                        bio: 'Must be comfortable eating freeze-dried meals and living inside a pressurized dome. Unmatched view of Earth!',
                        tag: '✨ My Passions & Vibe'
                    },
                    {
                        greenFlags: ['✓ Write human space history', '✓ Frontier of science & discovery', '✓ Zero traffic jams'],
                        redFlags: ['✗ 7-month intense rocket trip', '✗ High cosmic radiation', '✗ One-way ticket risk'],
                        tag: '🚩 Pros & Cons'
                    }
                ],
                opener: 'Ground Control to Major Tom! Would you pack your bags for Mars if you had a ticket?',
                icebreakers: ['Sign me up for Mars! 🚀', 'No way, Earth is my home 🌍', 'Only if it is a round trip!'],
                prompt: 'If offered a free ticket to join the first human colony on Mars, would you go? Why?'
            }
        ]
    };

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        if (!body) return;

        body.innerHTML = `
            <div class="setup-screen" style="text-align: center; max-width: 440px; margin: 0 auto; padding: 1.5rem 1rem;">
              <div style="font-size: 3.5rem; margin-bottom: 0.5rem;">🔥 Tinder Swipe</div>
              <h1 style="font-family:'DM Sans', sans-serif; font-weight: 800; margin-bottom: 0.5rem; background: var(--tinder-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">This or That?</h1>
              <p style="color:var(--ink-muted); margin-bottom: 1.5rem; line-height: 1.5;">
                Swipe left or right on Tinder profiles of daily items, habits, and dilemmas. Practice speaking as you match!
              </p>

              <div class="setup-field" style="margin-bottom: 1.25rem; text-align: left;">
                <label style="font-weight:700; display:block; margin-bottom:0.5rem;">Level & Topic Complexity</label>
                <select class="styled-sel" id="tot-level" style="width: 100%; padding: 0.75rem; border-radius: 12px; border: 1px solid #e5e7eb;">
                  <option value="starter">A1–A2: Daily Life & Foods</option>
                  <option value="intermediate" selected>B1–B2: Work, Travel & Lifestyle</option>
                  <option value="advanced">C1–C2: AI, Philosophy & Future</option>
                </select>
              </div>

              <div class="setup-field" style="margin-bottom: 2rem; text-align: left;">
                <label style="font-weight:700; display:block; margin-bottom:0.5rem;">Card Deck Filter</label>
                <select class="styled-sel" id="tot-deck-type" style="width: 100%; padding: 0.75rem; border-radius: 12px; border: 1px solid #e5e7eb;">
                  <option value="mixed" selected>🔥 Mixed Tinder Deck</option>
                  <option value="profiles">🖼️ Profile Cards Only</option>
                  <option value="dilemmas">⚖️ "This or That" Dilemmas Only</option>
                </select>
              </div>

              <button class="btn-start-game" onclick="COSY_GAME.start()" style="width: 100%; padding: 1rem; font-size: 1.1rem; border-radius: 30px; background: var(--tinder-gradient); color: #fff; border: none; font-weight: 800; cursor: pointer; box-shadow: 0 6px 18px rgba(253,38,125,0.35);">▶ Start Swiping 🔥</button>
            </div>`;
    }

    window.COSY_GAME = {
        deck: [],
        currentIndex: 0,
        swipedChoices: [],
        lastSwiped: null,

        async start() {
            const level = document.getElementById('tot-level')?.value || 'intermediate';
            const deckType = document.getElementById('tot-deck-type')?.value || 'mixed';
            const body = document.getElementById('go-body');

            if (body) body.innerHTML = '<div style="text-align:center;padding:4rem;font-weight:700;color:var(--tinder-pink);">Shuffling Tinder deck... 🔥</div>';
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

        activeStoryIndex: 0,

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
                  <div style="font-weight:800; font-size:0.9rem; color:#6b7280;">Card ${this.currentIndex + 1} / ${this.deck.length}</div>
                </div>

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
                          <span class="profile-age">${item.age || ''}</span>
                          ${item.verified ? '<span class="verified-icon" title="Verified Tinder Profile">☑️</span>' : ''}
                        </div>
                        <div class="profile-meta-row">
                          <span>${item.location || '📍 Nearby'}</span>
                          <span>• ${item.category}</span>
                        </div>

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

                          ${item.anthem ? `
                            <div style="font-size:0.8rem; font-weight:700; color:#4b5563; margin-bottom:0.75rem; background:#f3f4f6; padding:6px 12px; border-radius:12px; display:inline-block;">
                              ${item.anthem}
                            </div>
                          ` : ''}
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
                          💬 <strong>Discussion Prompt:</strong> ${item.prompt}
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
                <div style="font-size:0.8rem; color:#9ca3af; margin-top:0.6rem;">
                  Tap left/right side of card photo to switch details • Swipe to decide!
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
                    this.currentIndex++;
                    this.renderCard();
                }
            }, 260);
        },

        rewind() {
            if (this.swipedChoices.length === 0 || this.currentIndex === 0) return;
            this.swipedChoices.pop();
            this.currentIndex--;
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
                    <button onclick="COSY_GAME.quickChat('${p.replace(/'/g, "\\'")}')" style="background: rgba(255,255,255,0.25); border: 1px solid rgba(255,255,255,0.4); color: #fff; padding: 4px 10px; border-radius: 16px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: background 0.15s;">${p}</button>
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

            // Delayed Reply
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
                      <div style="padding: 8px 0; border-bottom: 1px dashed rgba(0,0,0,0.1); display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem;">
                        <div>
                          <strong>${c.item.title}</strong>
                          <div style="font-size: 0.8rem; color: #6b7280;">${c.item.category}</div>
                        </div>
                        <span style="font-weight: 700; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; background: ${c.choice.includes('Matched') || c.choice.includes('Option B') ? '#d1fae5' : '#fee2e2'}; color: ${c.choice.includes('Matched') || c.choice.includes('Option B') ? '#047857' : '#b91c1c'};">
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
