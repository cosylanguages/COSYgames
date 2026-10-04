/**
 * shared/js/vocab-loader.js
 * Opt-in COSYdata runtime vocabulary loader.
 */
(function() {
    var rawCache = {}; // lang -> Promise<{ ok: boolean, data: Array }>

    function getBaseUrl() {
        if (typeof window !== 'undefined' && window.COSY_DATA_BASE) {
            return window.COSY_DATA_BASE;
        }
        if (typeof window !== 'undefined' && window.location && window.location.search) {
            var match = window.location.search.match(/[?&]cosydata_base=([^&]+)/);
            if (match) {
                return decodeURIComponent(match[1]);
            }
        }
        return 'https://cosylanguages.github.io/COSYdata/vocabulary';
    }

    function levelCode(label) {
        if (!label || typeof label !== 'string') return 'A1';
        var match = label.match(/\b([A-C][0-2])\b/i);
        return match ? match[1].toUpperCase() : label;
    }

    function fetchIndex(lang) {
        if (rawCache[lang]) {
            return rawCache[lang];
        }

        var promise = new Promise(function(resolve) {
            var baseUrl = getBaseUrl();
            var url = baseUrl + '/' + lang + '/search-index.json';

            var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
            var timeoutId = null;

            if (controller) {
                timeoutId = setTimeout(function() {
                    controller.abort();
                }, 10000);
            }

            var fetchOptions = controller ? { signal: controller.signal } : {};

            fetch(url, fetchOptions)
                .then(function(res) {
                    if (timeoutId) clearTimeout(timeoutId);
                    if (!res.ok) {
                        resolve({ ok: false, data: [] });
                        return;
                    }
                    return res.json();
                })
                .then(function(json) {
                    if (Array.isArray(json)) {
                        resolve({ ok: true, data: json });
                    } else {
                        resolve({ ok: false, data: [] });
                    }
                })
                .catch(function() {
                    if (timeoutId) clearTimeout(timeoutId);
                    resolve({ ok: false, data: [] });
                });
        });

        rawCache[lang] = promise;
        return promise;
    }

    function adaptEntry(entry) {
        var adapted = {
            id: entry.id,
            word: entry.word,
            level: entry.level,
            form: entry.form,
            theme: entry.theme,
            definitions: []
        };
        if (entry.emoji && entry.emoji !== '❓') {
            adapted.emoji = entry.emoji;
        }
        return adapted;
    }

    function ensure(lang, level, opts) {
        opts = opts || {};
        var needEmoji = opts.needEmoji === true;
        var min = typeof opts.min === 'number' ? opts.min : 24;
        var forms = Array.isArray(opts.forms) ? opts.forms : null;

        var reqLevel = levelCode(level);
        if (reqLevel === 'A0') reqLevel = 'A1';

        var levelsOrder = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        var startIndex = levelsOrder.indexOf(reqLevel);
        if (startIndex === -1) startIndex = 1; // Default to A1

        return fetchIndex(lang).then(function(result) {
            if (!result.ok) {
                return { ok: false, source: 'unavailable', count: 0 };
            }

            var rawEntries = result.data;
            var qualifiedPool = [];
            var usedLevels = [];
            var widened = false;

            for (var i = startIndex; i >= 1; i--) {
                var currentLvl = levelsOrder[i];
                var addedFromThisLevel = 0;

                for (var j = 0; j < rawEntries.length; j++) {
                    var item = rawEntries[j];
                    var itemLvl = item.level ? item.level.toUpperCase() : 'A1';
                    if (itemLvl === 'A0') itemLvl = 'A1';

                    if (itemLvl === currentLvl) {
                        var passesEmoji = !needEmoji || (item.emoji && item.emoji !== '❓');
                        var passesForm = !forms || (forms.indexOf(item.form) !== -1);

                        if (passesEmoji && passesForm) {
                            qualifiedPool.push(adaptEntry(item));
                            addedFromThisLevel++;
                        }
                    }
                }

                if (addedFromThisLevel > 0) {
                    usedLevels.push(currentLvl);
                    if (currentLvl !== reqLevel) {
                        widened = true;
                    }
                }

                if (qualifiedPool.length >= min) {
                    break;
                }
            }

            if (qualifiedPool.length < 4) {
                return {
                    ok: true,
                    count: qualifiedPool.length,
                    usedLevels: usedLevels,
                    widened: widened,
                    source: 'cosydata'
                };
            }

            if (typeof window !== 'undefined') {
                window.vocabularyData = window.vocabularyData || {};
                window.vocabularyData[lang] = qualifiedPool;
            }

            return {
                ok: true,
                source: 'cosydata',
                count: qualifiedPool.length,
                usedLevels: usedLevels,
                widened: widened
            };
        });
    }

    var COSYVocab = {
        ensure: ensure,
        levelCode: levelCode
    };

    if (typeof window !== 'undefined') {
        window.COSYVocab = COSYVocab;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = COSYVocab;
    }
})();
