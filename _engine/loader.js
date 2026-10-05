/**
 * games/_engine/loader.js
 * Logic for dynamic data loading and URL handoff query parameter handling in standalone game pages.
 * Complies with COSY Inter-App URL Handoff Specification (lang, level, topic).
 */
(function () {
    'use strict';

    function getHandoffParams() {
        try {
            const params = new URLSearchParams(window.location.search);
            let lang = params.get('lang') ? params.get('lang').trim().toLowerCase() : null;
            let level = params.get('level') ? params.get('level').trim() : null;
            let topic = params.get('topic') || params.get('theme') || params.get('deck') || params.get('cat');
            if (topic) topic = topic.trim().toLowerCase();

            const levelMap = {
                'starter': 'A1', 'a1': 'A1', 'a0': 'A0', 'a0_a1': 'A1',
                'elementary': 'A2', 'a2': 'A2',
                'intermediate': 'B1', 'b1': 'B1',
                'upper_intermediate': 'B2', 'upper': 'B2', 'b2': 'B2',
                'advanced': 'C1', 'c1': 'C1',
                'proficiency': 'C2', 'c2': 'C2'
            };
            if (level && levelMap[level.toLowerCase()]) {
                level = levelMap[level.toLowerCase()];
            }

            return { lang, level, topic, theme: topic };
        } catch(e) {
            return { lang: null, level: null, topic: null, theme: null };
        }
    }

    function applyHandoffParams(container) {
        try {
            const { lang, level, topic } = getHandoffParams();
            const parent = container || document;

            if (lang) {
                const langSelect = parent.querySelector('#s-lang, #sm-s-lang, #lang-select, select[name="lang"]');
                if (langSelect && langSelect.options) {
                    for (let opt of langSelect.options) {
                        const optVal = opt.value.toLowerCase();
                        const optText = opt.text.toLowerCase();
                        if (optVal === lang || optVal.includes(lang) || optText.includes(lang)) {
                            langSelect.value = opt.value;
                            langSelect.dispatchEvent(new Event('change', { bubbles: true }));
                            break;
                        }
                    }
                }
            }

            if (level) {
                const levelSelect = parent.querySelector('#s-level, #sm-s-level, #level-select, select[name="level"]');
                if (levelSelect && levelSelect.options) {
                    for (let opt of levelSelect.options) {
                        const optVal = opt.value.toUpperCase();
                        const optText = opt.text.toUpperCase();
                        if (optVal === level || optVal.includes(level) || optText.includes(level)) {
                            levelSelect.value = opt.value;
                            levelSelect.dispatchEvent(new Event('change', { bubbles: true }));
                            break;
                        }
                    }
                }
            }

            if (topic) {
                const topicSelect = parent.querySelector('#s-deck, #s-cat, #s-scene, #s-mode, #s-theme, #s-topic, #deck-select, #topic-select, select[name="topic"], select[name="theme"]');
                if (topicSelect && topicSelect.options) {
                    for (let opt of topicSelect.options) {
                        const optVal = opt.value.toLowerCase();
                        const optText = opt.text.toLowerCase();
                        if (optVal === topic || optVal.includes(topic) || optText.includes(topic)) {
                            topicSelect.value = opt.value;
                            topicSelect.dispatchEvent(new Event('change', { bubbles: true }));
                            break;
                        }
                    }
                }
            }
        } catch(e) {
            // Graceful degradation per URL handoff spec
        }
    }

    // Auto-apply handoff parameters when DOM is ready or after render
    if (typeof document !== 'undefined') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => applyHandoffParams());
        } else {
            setTimeout(() => applyHandoffParams(), 0);
        }
    }

    window.COSYLoader = {
        loadLevelData: (lang, level, gameKey) => {
            if (window.gameUtils && typeof window.gameUtils.loadLevelData === 'function') {
                return window.gameUtils.loadLevelData(lang, level, gameKey);
            }
            const promises = [];
            if (typeof document !== 'undefined') {
                const loadScript = (paths) => new Promise((resolve) => {
                    const tryLoad = (pathsLeft) => {
                        if (pathsLeft.length === 0) { resolve(); return; }
                        const src = pathsLeft.shift();
                        const script = document.createElement('script');
                        script.src = src;
                        script.onload = () => resolve();
                        script.onerror = () => tryLoad(pathsLeft);
                        document.head.appendChild(script);
                    };
                    tryLoad([...paths]);
                });

                if (lang) {
                    // Load game-specific data file if specified and key missing
                    if (gameKey && (!window.gameData || !window.gameData[lang] || !window.gameData[lang][gameKey])) {
                        promises.push(loadScript([
                            `../data/${lang}/${gameKey}.js`,
                            `../../data/${lang}/${gameKey}.js`,
                            `./data/${lang}/${gameKey}.js`
                        ]));
                    }
                    // Fallback load of monolithic game_data.js if window.gameData[lang] missing
                    if (!window.gameData || !window.gameData[lang]) {
                        promises.push(loadScript([
                            `../data/${lang}/game_data.js`,
                            `../../data/${lang}/game_data.js`,
                            `./data/${lang}/game_data.js`
                        ]));
                    }
                }
                if (!window.gameData || !window.gameData['universal']) {
                    promises.push(loadScript([
                        '../data/universal.js',
                        '../../data/universal.js',
                        './data/universal.js'
                    ]));
                }
            }
            return Promise.all(promises);
        },
        getGameData: (lang) => {
            if (window.gameUtils && typeof window.gameUtils.getGameData === 'function') {
                return window.gameUtils.getGameData(lang);
            }
            return (window.gameData && window.gameData[lang]) || (window.gameData && window.gameData['universal']) || {};
        },
        getLangCode: (val) => {
            if (window.getLangCode && typeof window.getLangCode === 'function') {
                const res = window.getLangCode(val);
                if (res && res !== val) return res;
            }
            if (!val) return 'en';
            const str = String(val).toLowerCase().trim();
            const langMap = {
                'english': 'en', 'en': 'en',
                'français': 'fr', 'francais': 'fr', 'fr': 'fr',
                'italiano': 'it', 'it': 'it',
                'deutsch': 'de', 'de': 'de',
                'español': 'es', 'espanol': 'es', 'es': 'es',
                'русский': 'ru', 'ru': 'ru',
                'ελληνικά': 'el', 'el': 'el',
                'português': 'pt', 'portugues': 'pt', 'pt': 'pt',
                'հայերեն': 'hy', 'hy': 'hy',
                'ქართული': 'ka', 'ka': 'ka',
                'башҡорт': 'ba', 'ba': 'ba',
                'татар': 'tt', 'tt': 'tt',
                'brezhoneg': 'br', 'br': 'br'
            };
            for (const [key, code] of Object.entries(langMap)) {
                if (str.includes(key)) return code;
            }
            return str.slice(0, 2) || 'en';
        },
        getLevelCode: (val) => window.getLevelCode ? window.getLevelCode(val) : val,
        getLevelKey: (val) => {
            if (!val) return 'starter';
            const str = String(val).toLowerCase().trim();
            if (str.includes('c2') || str.includes('proficiency')) return 'proficiency';
            if (str.includes('c1') || str.includes('advanced')) return 'advanced';
            if (str.includes('b2') || str.includes('upper')) return 'upper_intermediate';
            if (str.includes('b1') || str.includes('intermediate')) return 'intermediate';
            if (str.includes('a2') || str.includes('primary') || str.includes('elementary')) return 'elementary';
            if (str.includes('a0') || str.includes('a1') || str.includes('starter')) return 'starter';
            return 'starter';
        },
        pickByLevel: function(items, level, opts) {
            const min = (opts && typeof opts.min === 'number') ? opts.min : 5;
            if (!Array.isArray(items)) {
                return { items: [], usedLevels: [], exactCount: 0, widened: false, limited: false, filtered: false };
            }

            const leveledItems = items.filter(item => item && typeof item === 'object' && typeof item.level === 'string');
            if (leveledItems.length === 0) {
                return { items: [...items], usedLevels: [], exactCount: 0, widened: false, limited: false, filtered: false };
            }

            const LEVELS = ['starter', 'elementary', 'intermediate', 'upper_intermediate', 'advanced', 'proficiency'];
            const targetKey = this.getLevelKey ? this.getLevelKey(level) : 'starter';
            let targetIdx = LEVELS.indexOf(targetKey);
            if (targetIdx === -1) targetIdx = 0;

            const itemsByLevel = {
                starter: [],
                elementary: [],
                intermediate: [],
                upper_intermediate: [],
                advanced: [],
                proficiency: []
            };

            leveledItems.forEach(item => {
                const k = this.getLevelKey ? this.getLevelKey(item.level) : 'starter';
                if (itemsByLevel[k]) {
                    itemsByLevel[k].push(item);
                }
            });

            const exactCount = itemsByLevel[targetKey].length;
            const limited = exactCount < 3;
            const filtered = leveledItems.length < items.length;

            const usedLevels = [targetKey];
            const resultItems = [...itemsByLevel[targetKey]];

            if (resultItems.length < min) {
                for (let d = 1; d < LEVELS.length; d++) {
                    const lowerIdx = targetIdx - d;
                    if (lowerIdx >= 0) {
                        const lKey = LEVELS[lowerIdx];
                        usedLevels.push(lKey);
                        resultItems.push(...itemsByLevel[lKey]);
                        if (resultItems.length >= min) break;
                    }
                    const upperIdx = targetIdx + d;
                    if (upperIdx < LEVELS.length) {
                        const uKey = LEVELS[upperIdx];
                        usedLevels.push(uKey);
                        resultItems.push(...itemsByLevel[uKey]);
                        if (resultItems.length >= min) break;
                    }
                }
            }

            const widened = usedLevels.length > 1;

            return {
                items: resultItems,
                usedLevels: usedLevels,
                exactCount: exactCount,
                widened: widened,
                limited: limited,
                filtered: filtered
            };
        },
        clearLevelNote: function() {
            if (typeof document === 'undefined') return;
            const existing = document.getElementById('level-note');
            if (existing) {
                existing.remove();
            }
        },
        showLevelNote: function(text) {
            if (typeof document === 'undefined') return;
            this.clearLevelNote();
            const goBody = document.getElementById('go-body');
            if (!goBody) return;
            const p = document.createElement('p');
            p.id = 'level-note';
            p.className = 'level-note';
            p.setAttribute('role', 'status');
            p.textContent = text || this.levelNoteText();
            goBody.insertAdjacentElement('beforebegin', p);
        },
        levelNoteText: function() {
            const fallback = 'Limited content at this level in this language: nearby levels are shown too.';
            if (typeof window !== 'undefined' && typeof window.tOr === 'function') {
                return window.tOr('ui_limited_level', fallback);
            }
            return fallback;
        },
        getHandoffParams: getHandoffParams,
        applyHandoffParams: applyHandoffParams
    };
})();
