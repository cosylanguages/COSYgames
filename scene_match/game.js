/**
 * games/scene_match/game.js
 * Reusable engine logic for Scene Match activity across multiple rooms/scenes & CEFR levels.
 */
(function() {
    'use strict';

    const GAME_ID = 'scenematch';

    function renderSetup() {
        const body = document.getElementById('go-body');
        const lang = (window.COSY_I18N && window.COSY_I18N.currentLang) || 'en';

        const titleText = window.t('scene_match_title') || 'Scene Match 🖼️';
        const metaText = window.t('scene_match_meta') || 'Vocab & Puzzles · Solo';

        document.getElementById('go-title').textContent = titleText;
        document.getElementById('go-meta').textContent = metaText;

        const LANG_OPTS = [
            { code: 'en', label: 'English 🇬🇧' },
            { code: 'fr', label: 'Français 🇫🇷' },
            { code: 'it', label: 'Italiano 🇮🇹' },
            { code: 'ru', label: 'Русский 🇷🇺' },
            { code: 'el', label: 'Ελληνικά 🇬🇷' }
        ];

        const LEVEL_OPTS = [
            { code: 'ALL', label: 'All Levels (Full Cozy Town Map) 🌍' },
            { code: 'A1', label: 'Level A1 · Starter Scenes 🏠' },
            { code: 'A2', label: 'Level A2 · Elementary Scenes 🏙️' },
            { code: 'B1', label: 'Level B1 · Intermediate Task Scenes ✈️' },
            { code: 'B2-C2', label: 'Level B2-C2 · Advanced Systems & Concepts 🧠' }
        ];

        body.innerHTML = `
            <div class="setup-screen">
              <h2>${titleText}</h2>
              <p data-i18n="scene_match_instruction">Select a word from the bank, then click or press Enter on the matching object in the room!</p>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="sm-s-lang">
                    ${LANG_OPTS.map(l => `<option value="${l.code}" ${l.code === lang ? 'selected' : ''}>${l.label}</option>`).join('')}
                </select>
              </div>
              <div class="setup-field"><label>CEFR Target Level</label>
                <select class="styled-sel" id="sm-s-level">
                    ${LEVEL_OPTS.map(lvl => `<option value="${lvl.code}">${lvl.label}</option>`).join('')}
                </select>
              </div>
              <button class="btn-start-game" type="button" onclick="COSY_GAME.start()">▶ Start game</button>
            </div>`;
    }

    function shuffle(arr) {
        return [...arr].sort(() => Math.random() - 0.5);
    }

    window.COSY_GAME = {
        activeSceneId: 'apartment',
        activeLevel: 'ALL',
        selectedWordId: null,
        sceneMatches: {},

        async start(sceneId, level) {
            const langSelect = document.getElementById('sm-s-lang');
            if (langSelect && langSelect.value) {
                this.activeLang = langSelect.value;
                if (window.setLanguage) {
                    await window.setLanguage(langSelect.value);
                }
            } else {
                this.activeLang = (window.COSY_I18N && window.COSY_I18N.currentLang) || 'en';
            }

            const levelSelect = document.getElementById('sm-s-level');
            this.activeLevel = level || (levelSelect && levelSelect.value) || 'ALL';

            const allSceneKeys = Object.keys(window.COSY_SCENE_DATA);
            this.sceneMatches = {};
            allSceneKeys.forEach(key => {
                this.sceneMatches[key] = new Set();
            });

            // Set initial default scene based on level
            if (sceneId && window.COSY_SCENE_DATA[sceneId]) {
                this.activeSceneId = sceneId;
            } else if (this.activeLevel === 'A2') {
                this.activeSceneId = 'city';
            } else if (this.activeLevel === 'B1' || this.activeLevel === 'B2-C2') {
                this.activeSceneId = 'hospital';
            } else {
                this.activeSceneId = 'apartment';
            }

            this.selectedWordId = null;

            COSYGame.init(GAME_ID, this.activeLang, this.activeLevel);
            this.renderGame();
        },

        getFilteredSceneKeys() {
            const allSceneKeys = Object.keys(window.COSY_SCENE_DATA);
            if (this.activeLevel === 'ALL') {
                return allSceneKeys;
            }

            let filtered = allSceneKeys.filter(key => {
                const s = window.COSY_SCENE_DATA[key];
                if (this.activeLevel === 'B2-C2') {
                    return s.level === 'B1' || s.level === 'B2' || s.level === 'C1' || s.level === 'C2';
                }
                return s.level === this.activeLevel;
            });

            // Ensure activeSceneId is always included if navigated via door
            if (!filtered.includes(this.activeSceneId)) {
                filtered.push(this.activeSceneId);
            }

            return filtered;
        },

        switchScene(sceneId) {
            if (!window.COSY_SCENE_DATA[sceneId]) return;
            this.activeSceneId = sceneId;
            this.selectedWordId = null;
            this.renderGame();
        },

        renderGame() {
            const body = document.getElementById('go-body');
            const data = window.COSY_SCENE_DATA[this.activeSceneId];
            const lang = this.activeLang;

            if (!data) {
                body.innerHTML = '<div class="game-card">Scene data not found! <button onclick="COSY_GAME.reset()">Back</button></div>';
                return;
            }

            const isHub = data.type === 'hub';
            const hotspots = data.hotspots || [];
            const currentMatched = this.sceneMatches[this.activeSceneId] || new Set();

            // Word bank words (shuffled)
            const wordsList = shuffle(hotspots.map(hs => ({
                id: hs.id,
                word: hs.words[lang] || hs.words['en'] || hs.id
            })));

            const instructionText = isHub
                ? (window.t('scene_match_hub_instruction') || '🧭 Hub Navigation Map: Click any region or doorway on the map to explore rooms or stalls!')
                : (window.t('scene_match_instruction') || 'Select a word from the bank, then click or press Enter on the matching object in the room!');
            const selectWordText = window.t('scene_match_select_word') || 'Select a word:';
            const progressLabel = window.t('scene_match_progress') || 'Matched';

            const activeSceneKeys = this.getFilteredSceneKeys();

            body.innerHTML = `
              <div class="sm-container">
                <div class="sm-header-card">
                  <!-- Room Switcher Tabs -->
                  <div class="sm-room-tabs">
                    ${activeSceneKeys.map(key => {
                        const sData = window.COSY_SCENE_DATA[key];
                        const sTitle = (sData.title && sData.title[lang]) || (sData.title && sData.title['en']) || key;
                        const sIsHub = sData.type === 'hub';
                        const sMatched = (this.sceneMatches[key] || new Set()).size;
                        const sTotal = sData.hotspots.length;
                        const sLvl = sIsHub ? 'HUB' : (sData.level || 'A1');
                        const sMetaStr = sIsHub ? `${sData.doors ? sData.doors.length : 0} portals` : `${sMatched}/${sTotal}`;
                        return `
                          <button class="sm-tab-btn ${key === this.activeSceneId ? 'active' : ''}"
                                  type="button"
                                  aria-label="View scene ${sTitle}"
                                  onclick="COSY_GAME.switchScene('${key}')">
                             <span class="sm-tab-lvl ${sIsHub ? 'hub' : ''}">[${sLvl}]</span> ${sTitle} (${sMetaStr})
                          </button>`;
                    }).join('')}
                  </div>

                  <div class="sm-instruction">${instructionText}</div>
                  <div class="sm-progress-bar-wrap">
                    <div class="sm-progress-track">
                      <div class="sm-progress-fill" id="sm-p-fill" style="width: ${isHub ? '100%' : '0%'}"></div>
                    </div>
                    <div class="sm-progress-text" id="sm-p-text">${isHub ? 'Navigation Hub Map 🧭' : `${progressLabel}: 0 / ${hotspots.length}`}</div>
                  </div>
                </div>

                <div class="sm-stage">
                  <svg class="sm-svg-scene" viewBox="${data.viewBox}" xmlns="http://www.w3.org/2000/svg">
                    ${data.imageUrl ? `<image href="${data.imageUrl}" x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"/>` : ''}
                    ${data.svgBackground || ''}
                    <g id="sm-cultural-overlay">${this.renderCulturalOverlay()}</g>

                    <!-- Hotspots overlay & labels container -->
                    <g id="sm-doors-group"></g>
                    <g id="sm-hotspots-group"></g>
                    <g id="sm-labels-group"></g>
                  </svg>
                </div>

                ${isHub ? `
                <div class="sm-word-bank-card sm-hub-card">
                  <div class="sm-bank-title">🧭 Hub Map Navigation</div>
                  <div class="sm-hub-hint">Select any of the ${data.doors ? data.doors.length : 0} interactive destinations above on the map or use the tabs to enter a scene.</div>
                </div>` : `
                <div class="sm-word-bank-card">
                  <div class="sm-bank-title">${selectWordText}</div>
                  <div class="sm-words-grid" id="sm-words-grid">
                    ${wordsList.map(w => {
                        const matched = currentMatched.has(w.id);
                        return `
                          <button class="sm-word-btn"
                                  id="word-btn-${w.id}"
                                  type="button"
                                  ${matched ? 'disabled' : ''}
                                  onclick="COSY_GAME.selectWord('${w.id}')">
                            ${w.word}
                          </button>`;
                    }).join('')}
                  </div>
                </div>`}
              </div>`;

            this.renderDoors();
            this.renderHotspots();
            this.renderExistingPinnedLabels();
            this.updateProgress();
        },

        renderCulturalOverlay() {
            const lang = this.activeLang;
            if (lang === 'fr') {
                return `<g id="cult-fr" opacity="0.85">
                    <path d="M720 100 L780 100 L750 20 Z" fill="#475569" opacity="0.3"/>
                    <text x="740" y="140" fill="#3b82f6" font-size="10" font-family="sans-serif">🗼 Paris</text>
                </g>`;
            } else if (lang === 'it') {
                return `<g id="cult-it" opacity="0.85">
                    <path d="M710 120 Q740 90 770 120 Z" fill="#92400e" opacity="0.3"/>
                    <text x="730" y="140" fill="#10b981" font-size="10" font-family="sans-serif">🏛️ Roma</text>
                </g>`;
            } else if (lang === 'ru') {
                return `<g id="cult-ru" opacity="0.85">
                    <path d="M720 110 Q740 70 760 110 Z" fill="#b91c1c" opacity="0.3"/>
                    <text x="725" y="140" fill="#ef4444" font-size="10" font-family="sans-serif">🕌 Москва</text>
                </g>`;
            } else if (lang === 'el') {
                return `<g id="cult-el" opacity="0.85">
                    <rect x="720" y="100" width="50" height="30" fill="#0284c7" opacity="0.3"/>
                    <text x="725" y="140" fill="#0369a1" font-size="10" font-family="sans-serif">🏛️ Αθήνα</text>
                </g>`;
            } else if (lang === 'es') {
                return `<g id="cult-es" opacity="0.85">
                    <path d="M720 120 C720 90, 760 90, 760 120 Z" fill="#ea580c" opacity="0.3"/>
                    <text x="725" y="140" fill="#c2410c" font-size="10" font-family="sans-serif">🐻 Madrid</text>
                </g>`;
            } else if (lang === 'de') {
                return `<g id="cult-de" opacity="0.85">
                    <rect x="715" y="100" width="60" height="25" fill="#f59e0b" opacity="0.3"/>
                    <text x="720" y="140" fill="#d97706" font-size="10" font-family="sans-serif">🏛️ Berlin</text>
                </g>`;
            } else if (lang === 'hy') {
                return `<g id="cult-hy" opacity="0.85">
                    <path d="M710 130 L740 90 L770 130 Z" fill="#0284c7" opacity="0.3"/>
                    <text x="720" y="140" fill="#0369a1" font-size="10" font-family="sans-serif">🏔️ Երևան</text>
                </g>`;
            } else if (lang === 'ka') {
                return `<g id="cult-ka" opacity="0.85">
                    <rect x="720" y="105" width="50" height="20" fill="#16a34a" opacity="0.3"/>
                    <text x="720" y="140" fill="#15803d" font-size="10" font-family="sans-serif">🏰 თბილისი</text>
                </g>`;
            }
            return `<g id="cult-en" opacity="0.85">
                <text x="725" y="140" fill="#64748b" font-size="10" font-family="sans-serif">🇬🇧 London</text>
            </g>`;
        },

        renderDoors() {
            const doorsGroup = document.getElementById('sm-doors-group');
            const data = window.COSY_SCENE_DATA[this.activeSceneId];
            if (!doorsGroup || !data || !data.doors) return;

            const lang = this.activeLang;

            doorsGroup.innerHTML = data.doors.map(door => {
                const labelText = door.labels[lang] || door.labels['en'] || 'Door';
                const approxWidth = labelText.length * 7 + 16;
                const targetTitle = (window.COSY_SCENE_DATA[door.targetSceneId] && window.COSY_SCENE_DATA[door.targetSceneId].title && window.COSY_SCENE_DATA[door.targetSceneId].title[lang]) || door.targetSceneId;
                let bgX = door.labelX - approxWidth / 2;
                let textX = door.labelX;
                if (bgX < 4) { bgX = 4; textX = bgX + approxWidth / 2; }
                if (bgX + approxWidth > 796) { bgX = 796 - approxWidth; textX = bgX + approxWidth / 2; }
                return `
                  <g class="sm-door-hotspot"
                     tabindex="0"
                     role="button"
                     aria-label="Walkway to ${targetTitle}"
                     onclick="COSY_GAME.switchScene('${door.targetSceneId}')"
                     onkeydown="COSY_GAME.handleDoorKey(event, '${door.targetSceneId}')">
                    <rect x="${door.x}" y="${door.y}" width="${door.width}" height="${door.height}" rx="4" />
                    <g>
                      <rect class="sm-door-bg" x="${bgX}" y="${door.labelY - 12}" width="${approxWidth}" height="20" />
                      <text class="sm-door-label" x="${textX}" y="${door.labelY + 2}" text-anchor="middle">${labelText}</text>
                    </g>
                  </g>`;
            }).join('');
        },

        handleDoorKey(e, targetSceneId) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.switchScene(targetSceneId);
            }
        },

        renderHotspots() {
            const hsGroup = document.getElementById('sm-hotspots-group');
            if (!hsGroup) return;

            const data = window.COSY_SCENE_DATA[this.activeSceneId];
            if (!data.hotspots || data.type === 'hub') {
                hsGroup.innerHTML = '';
                return;
            }
            const currentMatched = this.sceneMatches[this.activeSceneId] || new Set();
            const lang = this.activeLang;

            hsGroup.innerHTML = data.hotspots.map(hs => {
                const isMatched = currentMatched.has(hs.id);
                const ariaName = hs.words[lang] || hs.words['en'] || hs.id;
                return `
                  <g class="sm-hotspot ${isMatched ? 'matched' : ''}"
                     id="hs-${hs.id}"
                     tabindex="${isMatched ? '-1' : '0'}"
                     role="button"
                     aria-label="${ariaName} hotspot"
                     onclick="COSY_GAME.handleHotspotClick('${hs.id}')"
                     onkeydown="COSY_GAME.handleHotspotKey(event, '${hs.id}')">
                    <rect class="hs-hit" x="${hs.x}" y="${hs.y}" width="${hs.width}" height="${hs.height}" rx="8" />
                  </g>`;
            }).join('');
        },

        renderExistingPinnedLabels() {
            const currentMatched = this.sceneMatches[this.activeSceneId] || new Set();
            currentMatched.forEach(hsId => {
                this.pinLabel(hsId);
            });
        },

        selectWord(id) {
            const currentMatched = this.sceneMatches[this.activeSceneId] || new Set();
            if (currentMatched.has(id)) return;

            this.selectedWordId = id;
            document.querySelectorAll('.sm-word-btn').forEach(btn => {
                btn.classList.remove('selected');
            });

            const activeBtn = document.getElementById(`word-btn-${id}`);
            if (activeBtn) {
                activeBtn.classList.add('selected');
            }
        },

        handleHotspotKey(e, hsId) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.handleHotspotClick(hsId);
            }
        },

        handleHotspotClick(hsId) {
            const currentMatched = this.sceneMatches[this.activeSceneId] || new Set();
            if (currentMatched.has(hsId)) return;

            if (!this.selectedWordId) {
                this.shakeHotspot(hsId);
                return;
            }

            if (this.selectedWordId === hsId) {
                // Correct Match
                currentMatched.add(hsId);
                COSYGame.addScore(10);

                // Disable word button
                const btn = document.getElementById(`word-btn-${hsId}`);
                if (btn) {
                    btn.classList.remove('selected');
                    btn.disabled = true;
                }

                // Pin label on scene
                this.pinLabel(hsId);

                // Re-render hotspots
                this.renderHotspots();

                this.selectedWordId = null;
                this.updateProgress();

                // Check Completion across active scenes
                this.checkOverallCompletion();
            } else {
                // Wrong Match
                this.shakeHotspot(hsId);
            }
        },

        shakeHotspot(hsId) {
            const hsEl = document.getElementById(`hs-${hsId}`);
            if (hsEl) {
                hsEl.classList.add('shake');
                setTimeout(() => hsEl.classList.remove('shake'), 450);
            }
        },

        pinLabel(hsId) {
            const labelsGroup = document.getElementById('sm-labels-group');
            const data = window.COSY_SCENE_DATA[this.activeSceneId];
            const hs = data && data.hotspots.find(h => h.id === hsId);
            if (!labelsGroup || !hs) return;

            if (document.getElementById(`pinned-label-${hsId}`)) return;

            const textStr = hs.words[this.activeLang] || hs.words['en'] || hs.id;
            const approxWidth = textStr.length * 8.5 + 24;

            const labelG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            labelG.setAttribute('id', `pinned-label-${hsId}`);

            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('class', 'sm-pinned-bg');
            rect.setAttribute('x', hs.labelX - approxWidth / 2);
            rect.setAttribute('y', hs.labelY - 14);
            rect.setAttribute('width', approxWidth);
            rect.setAttribute('height', 26);

            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('class', 'sm-pinned-label');
            text.setAttribute('x', hs.labelX);
            text.setAttribute('y', hs.labelY + 4);
            text.setAttribute('text-anchor', 'middle');
            text.textContent = textStr;

            labelG.appendChild(rect);
            labelG.appendChild(text);
            labelsGroup.appendChild(labelG);
        },

        updateProgress() {
            const data = window.COSY_SCENE_DATA[this.activeSceneId];
            if (!data) return;

            const isHub = data.type === 'hub';
            const hotspots = data.hotspots || [];
            const currentMatched = this.sceneMatches[this.activeSceneId] || new Set();
            const total = hotspots.length;
            const current = currentMatched.size;
            const percent = total > 0 ? Math.round((current / total) * 100) : 100;

            const fill = document.getElementById('sm-p-fill');
            const text = document.getElementById('sm-p-text');
            const progressLabel = window.t('scene_match_progress') || 'Matched';

            if (fill && fill.style) fill.style.width = isHub ? '100%' : `${percent}%`;
            if (text) text.textContent = isHub ? 'Navigation Hub Map 🧭' : `${progressLabel}: ${current} / ${total}`;

            // Update tab badge texts if present
            const activeSceneKeys = this.getFilteredSceneKeys();
            const tabBtns = document.querySelectorAll('.sm-tab-btn');
            tabBtns.forEach((btn, idx) => {
                const sKey = activeSceneKeys[idx];
                if (sKey) {
                    const sData = window.COSY_SCENE_DATA[sKey];
                    const sTitle = (sData.title && sData.title[this.activeLang]) || (sData.title && sData.title['en']) || sKey;
                    const sIsHub = sData.type === 'hub';
                    const sMatched = (this.sceneMatches[sKey] || new Set()).size;
                    const sTotal = sData.hotspots ? sData.hotspots.length : 0;
                    const sLvl = sIsHub ? 'HUB' : (sData.level || 'A1');
                    const sMetaStr = sIsHub ? `${sData.doors ? sData.doors.length : 0} portals` : `${sMatched}/${sTotal}`;
                    btn.innerHTML = `<span class="sm-tab-lvl ${sIsHub ? 'hub' : ''}">[${sLvl}]</span> ${sTitle} (${sMetaStr})`;
                }
            });
        },

        checkOverallCompletion() {
            const activeSceneKeys = this.getFilteredSceneKeys();
            const playableScenes = activeSceneKeys.filter(k => {
                const sData = window.COSY_SCENE_DATA[k];
                return sData && sData.type !== 'hub' && sData.hotspots && sData.hotspots.length > 0;
            });

            const allComplete = playableScenes.length > 0 && playableScenes.every(k => {
                const sData = window.COSY_SCENE_DATA[k];
                const sMatched = this.sceneMatches[k] || new Set();
                return sMatched.size === sData.hotspots.length;
            });

            if (allComplete) {
                setTimeout(() => this.renderEnd(), 600);
            }
        },

        reset: renderSetup,

        renderEnd() {
            const lang = this.activeLang;
            const level = this.activeLevel;
            COSYScores.save(GAME_ID, lang, level, COSYGame.score);
            const best = COSYScores.best(GAME_ID, lang);

            const compTitle = window.t('scene_match_complete_title') || 'Scene Match Complete! 🎉';
            const compMsg = window.t('scene_match_complete_msg') || `Outstanding work! You've successfully identified all objects across all scenes in ${level === 'ALL' ? 'Cozy Town' : 'Level ' + level}.`;
            const playAgainText = window.t('scene_match_play_again') || 'Play Again ↺';

            document.getElementById('go-body').innerHTML = `
                <div class="sm-completion-card">
                    <div class="sm-completion-icon">🏆</div>
                    <div class="sm-completion-title">${compTitle}</div>
                    <div class="sm-completion-msg">${compMsg}</div>
                    ${best ? `<div class="game-sub" style="margin-bottom:1.5rem">Personal best: ${best.score} pts</div>` : ''}
                    <div class="re-actions">
                        <button class="btn-g-primary" type="button" onclick="COSY_GAME.start('${this.activeSceneId}', '${level}')">${playAgainText}</button>
                        <button class="btn-g-secondary" type="button" onclick="COSY_GAME.reset()">Setup</button>
                    </div>
                </div>`;
        }
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
