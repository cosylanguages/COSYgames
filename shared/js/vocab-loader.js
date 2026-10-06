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

    var indexCache = {}; // lang -> Promise<{ ok: boolean, map: Object }>
    var fileCache = {};  // url -> Promise<{ ok: boolean, entries: Array }>

    function fetchFullIndex(lang) {
        if (indexCache[lang]) {
            return indexCache[lang];
        }

        var promise = new Promise(function(resolve) {
            var baseUrl = getBaseUrl();
            var url = baseUrl + '/' + lang + '/index.json';

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
                        resolve({ ok: false, map: null });
                        return;
                    }
                    return res.json();
                })
                .then(function(json) {
                    if (json && typeof json === 'object' && !Array.isArray(json)) {
                        resolve({ ok: true, map: json });
                    } else {
                        resolve({ ok: false, map: null });
                    }
                })
                .catch(function() {
                    if (timeoutId) clearTimeout(timeoutId);
                    resolve({ ok: false, map: null });
                });
        });

        indexCache[lang] = promise;
        return promise;
    }

    function fetchThemeFile(url) {
        if (fileCache[url]) {
            return fileCache[url];
        }

        var promise = new Promise(function(resolve) {
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
                        resolve({ ok: false, entries: [] });
                        return;
                    }
                    return res.json();
                })
                .then(function(json) {
                    var entries = [];
                    if (Array.isArray(json)) {
                        entries = json;
                    } else if (json && typeof json === 'object') {
                        entries = Object.keys(json).map(function(k) { return json[k]; });
                    }
                    resolve({ ok: true, entries: entries });
                })
                .catch(function() {
                    if (timeoutId) clearTimeout(timeoutId);
                    resolve({ ok: false, entries: [] });
                });
        });

        fileCache[url] = promise;
        return promise;
    }

    function shuffleArray(arr) {
        var copy = arr.slice();
        for (var i = copy.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = copy[i];
            copy[i] = copy[j];
            copy[j] = temp;
        }
        return copy;
    }

    var levelOrderMap = { 'A0': 1, 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6 };

    function isLevelQualifying(entryLevel, reqLevelCode) {
        var eLvl = levelCode(entryLevel);
        var eVal = levelOrderMap[eLvl] || 1;
        var rVal = levelOrderMap[reqLevelCode] || 1;
        return eVal <= rVal;
    }

    function adaptEntryFull(entry) {
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
        if (entry.article !== undefined) adapted.article = entry.article;
        if (entry.gender !== undefined) adapted.gender = entry.gender;
        var pluralVal = entry.plural_form !== undefined ? entry.plural_form : entry.plural;
        if (pluralVal !== undefined) adapted.plural = pluralVal;
        if (entry.transcription !== undefined) adapted.transcription = entry.transcription;

        var rawDefs = Array.isArray(entry.definitions) ? entry.definitions : [];
        if (rawDefs.length > 0) {
            adapted.definitions = rawDefs.map(function(d) {
                return typeof d === 'string' ? { text: d } : { text: (d && d.text) || '' };
            });
            if (Array.isArray(entry.examples)) {
                adapted.definitions[0].examples = entry.examples.map(function(ex) {
                    return typeof ex === 'string' ? { text: ex } : { text: (ex && ex.text) || '' };
                });
            }
        }
        return adapted;
    }

    function ensureFull(lang, level, opts) {
        opts = opts || {};
        var needEmoji = opts.needEmoji === true;
        var min = typeof opts.min === 'number' ? opts.min : 24;
        var forms = Array.isArray(opts.forms) ? opts.forms : null;
        var maxFiles = typeof opts.maxFiles === 'number' ? opts.maxFiles : 10;
        var batchSize = typeof opts.batch === 'number' ? opts.batch : 3;

        var reqLevel = levelCode(level);
        if (reqLevel === 'A0') reqLevel = 'A1';

        var folderLevels = [
            { folder: 'c2', cefr: 'C2' },
            { folder: 'c1', cefr: 'C1' },
            { folder: 'b2', cefr: 'B2' },
            { folder: 'b1', cefr: 'B1' },
            { folder: 'a2', cefr: 'A2' },
            { folder: 'a0_a1', cefr: 'A1' }
        ];

        var reqIdx = -1;
        for (var i = 0; i < folderLevels.length; i++) {
            if (folderLevels[i].cefr === reqLevel) {
                reqIdx = i;
                break;
            }
        }
        if (reqIdx === -1) {
            reqIdx = folderLevels.length - 1; // Default to a0_a1
        }

        var foldersToTry = folderLevels.slice(reqIdx);

        return fetchFullIndex(lang).then(function(indexRes) {
            if (!indexRes.ok || !indexRes.map) {
                return { ok: false, source: 'unavailable', count: 0 };
            }

            var map = indexRes.map;
            var distinctPaths = [];
            var pathSeen = {};
            for (var k in map) {
                if (Object.prototype.hasOwnProperty.call(map, k)) {
                    var p = map[k];
                    if (p && typeof p === 'string' && !pathSeen[p]) {
                        pathSeen[p] = true;
                        distinctPaths.push(p);
                    }
                }
            }

            var filesByFolder = {};
            for (var j = 0; j < distinctPaths.length; j++) {
                var pathStr = distinctPaths[j];
                var segs = pathStr.split('/');
                var folderName = segs[0];
                filesByFolder[folderName] = filesByFolder[folderName] || [];
                filesByFolder[folderName].push(pathStr);
            }

            var baseUrl = getBaseUrl();
            var qualifyingEntries = [];
            var entrySeen = {};
            var usedFolderCEFRs = [];
            var totalFilesFetched = 0;
            var successfulFilesCount = 0;

            var processFolders = function(folderIndex) {
                if (folderIndex >= foldersToTry.length) {
                    return Promise.resolve();
                }

                var fObj = foldersToTry[folderIndex];
                var fName = fObj.folder;
                var folderFiles = filesByFolder[fName];

                if (!folderFiles || folderFiles.length === 0) {
                    return processFolders(folderIndex + 1);
                }

                var concreteFiles = [];
                var otherFiles = [];
                for (var sf = 0; sf < folderFiles.length; sf++) {
                    var fPath = folderFiles[sf];
                    var fName = fPath.split('/').pop().replace('.json', '');
                    if (isConcreteObjectTheme(fName)) {
                        concreteFiles.push(fPath);
                    } else {
                        otherFiles.push(fPath);
                    }
                }
                var shuffledFiles = shuffleArray(concreteFiles).concat(shuffleArray(otherFiles));
                var fileIndex = 0;

                var processBatches = function() {
                    if (fileIndex >= shuffledFiles.length || qualifyingEntries.length >= min || totalFilesFetched >= maxFiles) {
                        return Promise.resolve();
                    }

                    var remainingAllowed = maxFiles - totalFilesFetched;
                    if (remainingAllowed <= 0) {
                        return Promise.resolve();
                    }

                    var batchPaths = shuffledFiles.slice(fileIndex, fileIndex + Math.min(batchSize, remainingAllowed));
                    fileIndex += batchPaths.length;
                    totalFilesFetched += batchPaths.length;

                    var fetchPromises = batchPaths.map(function(fp) {
                        var fileUrl = baseUrl + '/' + lang + '/' + fp;
                        return fetchThemeFile(fileUrl);
                    });

                    return Promise.all(fetchPromises).then(function(results) {
                        var addedInThisBatch = 0;
                        for (var r = 0; r < results.length; r++) {
                            var res = results[r];
                            if (res.ok) {
                                successfulFilesCount++;
                                for (var e = 0; e < res.entries.length; e++) {
                                    var item = res.entries[e];
                                    if (!item || !item.id) continue;

                                    var passesEmoji = !needEmoji || (item.emoji && item.emoji !== '❓');
                                    var passesForm = !forms || (forms.indexOf(item.form) !== -1);
                                    var passesLevel = isLevelQualifying(item.level, reqLevel);

                                    if (passesEmoji && passesForm && passesLevel) {
                                        var uniqueKey = item.id || item.word;
                                        if (!entrySeen[uniqueKey]) {
                                            entrySeen[uniqueKey] = true;
                                            qualifyingEntries.push(adaptEntryFull(item));
                                            addedInThisBatch++;
                                        }
                                    }
                                }
                            }
                        }

                        if (addedInThisBatch > 0) {
                            if (usedFolderCEFRs.indexOf(fObj.cefr) === -1) {
                                usedFolderCEFRs.push(fObj.cefr);
                            }
                        }

                        if (qualifyingEntries.length >= min || totalFilesFetched >= maxFiles) {
                            return Promise.resolve();
                        }

                        return processBatches();
                    });
                };

                return processBatches().then(function() {
                    if (qualifyingEntries.length >= min || totalFilesFetched >= maxFiles) {
                        return Promise.resolve();
                    }
                    return processFolders(folderIndex + 1);
                });
            };

            return processFolders(0).then(function() {
                if (totalFilesFetched > 0 && successfulFilesCount === 0) {
                    return { ok: false, source: 'unavailable', count: 0 };
                }

                if (typeof window !== 'undefined') {
                    window.vocabularyData = window.vocabularyData || {};
                    window.vocabularyData[lang] = qualifyingEntries;
                }

                var widened = usedFolderCEFRs.some(function(cefr) {
                    return cefr !== reqLevel;
                });

                return {
                    ok: true,
                    source: 'cosydata',
                    count: qualifyingEntries.length,
                    usedLevels: usedFolderCEFRs,
                    widened: widened,
                    files: totalFilesFetched
                };
            });
        });
    }

    function isConcreteObjectTheme(theme) {
        if (!theme || typeof theme !== 'string') return false;
        var t = theme.toLowerCase();

        var blocklist = [
            'nationalit', 'famil', 'time', 'communicat', 'emotion', 'politic', 'societ',
            'ethic', 'legal', 'financ', 'econom', 'relationship', 'concept', 'psycholog',
            'cultur', 'identit', 'general', 'express', 'number', 'quantity', 'propert',
            'colo', 'measure', 'activit', 'media', 'business', 'work', 'job',
            'profession', 'people', 'person', 'famous'
        ];

        for (var i = 0; i < blocklist.length; i++) {
            if (t.indexOf(blocklist[i]) !== -1) {
                return false;
            }
        }

        var allowlist = [
            'food', 'drink', 'animal', 'nature', 'house', 'furniture', 'housing',
            'cloth', 'body', 'object', 'technology', 'school', 'kitchen', 'garden',
            'tool', 'vehicle'
        ];

        for (var j = 0; j < allowlist.length; j++) {
            if (t.indexOf(allowlist[j]) !== -1) {
                return true;
            }
        }

        return false;
    }

    var COSYVocab = {
        ensure: ensure,
        ensureFull: ensureFull,
        levelCode: levelCode,
        isConcreteObjectTheme: isConcreteObjectTheme
    };

    if (typeof window !== 'undefined') {
        window.COSYVocab = COSYVocab;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = COSYVocab;
    }
})();
