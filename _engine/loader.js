/**
 * games/_engine/loader.js
 * Logic for dynamic data loading in standalone game pages.
 * Now standardized to use shared utilities.
 */
(function () {
    'use strict';

    window.COSYLoader = {
        loadLevelData: (lang, level) => window.gameUtils.loadLevelData(lang, level),
        getGameData: (lang) => window.gameUtils.getGameData(lang),
        getLangCode: (val) => window.getLangCode(val),
        getLevelCode: (val) => window.getLevelCode(val)
    };
})();