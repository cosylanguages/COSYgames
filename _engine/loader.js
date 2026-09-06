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
            let topic = params.get('topic') ? params.get('topic').trim().toLowerCase() : null;

            const levelMap = {
                'starter': 'A1', 'a1': 'A1',
                'elementary': 'A2', 'a2': 'A2',
                'intermediate': 'B1', 'b1': 'B1',
                'upper_intermediate': 'B2', 'upper': 'B2', 'b2': 'B2',
                'advanced': 'C1', 'c1': 'C1',
                'proficiency': 'C2', 'c2': 'C2'
            };
            if (level && levelMap[level.toLowerCase()]) {
                level = levelMap[level.toLowerCase()];
            }

            return { lang, level, topic };
        } catch(e) {
            return { lang: null, level: null, topic: null };
        }
    }

    function applyHandoffParams(container) {
        try {
            const { lang, level, topic } = getHandoffParams();
            const parent = container || document;

            if (lang) {
                const langSelect = parent.querySelector('#s-lang, #sm-s-lang');
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
                const levelSelect = parent.querySelector('#s-level, #sm-s-level');
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
                const topicSelect = parent.querySelector('#s-deck, #s-cat, #s-scene, #s-mode, #s-theme, #s-topic');
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
        loadLevelData: (lang, level) => window.gameUtils ? window.gameUtils.loadLevelData(lang, level) : Promise.resolve(),
        getGameData: (lang) => window.gameUtils ? window.gameUtils.getGameData(lang) : {},
        getLangCode: (val) => window.getLangCode ? window.getLangCode(val) : val,
        getLevelCode: (val) => window.getLevelCode ? window.getLevelCode(val) : val,
        getHandoffParams: getHandoffParams,
        applyHandoffParams: applyHandoffParams
    };
})();
