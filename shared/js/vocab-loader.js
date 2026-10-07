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

    function hasMarkupChars(entry) {
        if (!entry) return true;
        var checkStr = function(s) {
            return typeof s === 'string' && (s.indexOf('<') !== -1 || s.indexOf('>') !== -1);
        };
        if (checkStr(entry.word) || checkStr(entry.theme)) return true;
        if (Array.isArray(entry.definitions)) {
            for (var i = 0; i < entry.definitions.length; i++) {
                var d = entry.definitions[i];
                var dText = typeof d === 'string' ? d : (d && d.text);
                if (checkStr(dText)) return true;
            }
        }
        if (Array.isArray(entry.examples)) {
            for (var j = 0; j < entry.examples.length; j++) {
                var ex = entry.examples[j];
                var exText = typeof ex === 'string' ? ex : (ex && ex.text);
                if (checkStr(exText)) return true;
            }
        }
        return false;
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
                    if (hasMarkupChars(item)) continue;
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

    function shuffleArray(arr, rngFn) {
        var copy = arr.slice();
        var r = typeof rngFn === 'function' ? rngFn : Math.random;
        for (var i = copy.length - 1; i > 0; i--) {
            var j = Math.floor(r() * (i + 1));
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

    function joinArticle(article, word) {
        if (!word) word = '';
        if (!article || typeof article !== 'string' || article.trim() === '') {
            return word;
        }
        var lastChar = article.charAt(article.length - 1);
        if (lastChar === "'" || lastChar === '’') {
            return article + word;
        }
        return article + ' ' + word;
    }

    function ensureFull(lang, level, opts) {
        opts = opts || {};
        var needEmoji = opts.needEmoji === true;
        var min = typeof opts.min === 'number' ? opts.min : 24;
        var forms = Array.isArray(opts.forms) ? opts.forms : null;
        var maxFiles = typeof opts.maxFiles === 'number' ? opts.maxFiles : 10;
        var batchSize = typeof opts.batch === 'number' ? opts.batch : 3;
        var fileMatch = Array.isArray(opts.fileMatch) ? opts.fileMatch.map(function(s) { return String(s).toLowerCase(); }) : null;

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
                    var baseName = fPath.split('/').pop().replace('.json', '');
                    if (fileMatch) {
                        var lowerBase = baseName.toLowerCase();
                        var matches = false;
                        for (var fm = 0; fm < fileMatch.length; fm++) {
                            if (lowerBase.indexOf(fileMatch[fm]) !== -1) {
                                matches = true;
                                break;
                            }
                        }
                        if (!matches) continue;
                    }
                    if (isConcreteObjectTheme(baseName)) {
                        concreteFiles.push(fPath);
                    } else {
                        otherFiles.push(fPath);
                    }
                }
                var shuffledFiles = shuffleArray(concreteFiles, opts.rng).concat(shuffleArray(otherFiles, opts.rng));
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
                                    if (!item || !item.id || hasMarkupChars(item)) continue;

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

    function wordSet(lang) {
        return fetchIndex(lang).then(function(result) {
            if (!result.ok || !Array.isArray(result.data)) {
                return null;
            }
            var set = new Set();
            for (var i = 0; i < result.data.length; i++) {
                var entry = result.data[i];
                if (entry && entry.word && typeof entry.word === 'string' && !hasMarkupChars(entry)) {
                    set.add(entry.word.toLowerCase());
                }
            }
            return set;
        }).catch(function() {
            return null;
        });
    }

    function buildLinkPuzzles(lang, level, opts) {
        opts = opts || {};
        var count = typeof opts.count === 'number' ? opts.count : 30;
        var rng = typeof opts.rng === 'function' ? opts.rng : Math.random;
        var maxFiles = typeof opts.maxFiles === 'number' ? opts.maxFiles : 8;

        return new Promise(function(resolve) {
            ensureFull(lang, level, { needEmoji: false, min: 60, forms: ['noun'], maxFiles: maxFiles, rng: rng })
                .then(function(res) {
                    if (!res || !res.ok) {
                        resolve({ ok: false, puzzles: [], widened: false });
                        return;
                    }

                    var rawPool = (typeof window !== 'undefined' && window.vocabularyData && window.vocabularyData[lang]) || [];
                    var widened = Boolean(res.widened);

                    var vagueThemes = ['general','common','express','phrase','misc','other','adverb','connector','descriptor','action','verb','number'];

                    var cleanPool = [];
                    for (var i = 0; i < rawPool.length; i++) {
                        var entry = rawPool[i];
                        if (!entry || typeof entry.word !== 'string') continue;
                        var w = entry.word;
                        if (w.length < 3 || w.length > 14) continue;
                        if (/\s/.test(w)) continue;
                        if (/^-+$/.test(w)) continue;
                        if (/[<>&"`]/.test(w)) continue;

                        if (!entry.theme || typeof entry.theme !== 'string') continue;
                        var tLower = entry.theme.toLowerCase();
                        var isVague = vagueThemes.some(function(v) { return tLower.indexOf(v) !== -1; });
                        if (isVague) continue;

                        cleanPool.push(entry);
                    }

                    var themeMap = {};
                    for (var j = 0; j < cleanPool.length; j++) {
                        var item = cleanPool[j];
                        var tKey = item.theme.toLowerCase();
                        if (!themeMap[tKey]) {
                            themeMap[tKey] = {
                                id: item.theme,
                                words: [],
                                seenWords: {}
                            };
                        }
                        var wLower = item.word.toLowerCase();
                        if (!themeMap[tKey].seenWords[wLower]) {
                            themeMap[tKey].seenWords[wLower] = true;
                            themeMap[tKey].words.push({ word: item.word, form: item.form });
                        }
                    }

                    var puzzles = [];
                    var seenPuzzleKeys = {};

                    function shuffleRng(arr) {
                        var copy = arr.slice();
                        for (var k = copy.length - 1; k > 0; k--) {
                            var idx = Math.floor(rng() * (k + 1));
                            var temp = copy[k];
                            copy[k] = copy[idx];
                            copy[idx] = temp;
                        }
                        return copy;
                    }

                    function getPuzzleKey(words) {
                        var sorted = words.map(function(w) { return w.toLowerCase(); }).sort();
                        return sorted.join('|');
                    }

                    var themeKeys = Object.keys(themeMap);
                    var attempts = 0;
                    var maxAttempts = 1000;

                    function tryGeneratePuzzle(isOdd) {
                        var shuffledThemes = shuffleRng(themeKeys);

                        for (var tIdx = 0; tIdx < shuffledThemes.length; tIdx++) {
                            var tKey = shuffledThemes[tIdx];
                            var themeObj = themeMap[tKey];
                            if (!themeObj) continue;

                            if (!isOdd) {
                                if (themeObj.words.length >= 4) {
                                    var chosenWords = shuffleRng(themeObj.words).slice(0, 4).map(function(obj) { return obj.word; });
                                    var key = getPuzzleKey(chosenWords);
                                    if (!seenPuzzleKeys[key]) {
                                        seenPuzzleKeys[key] = true;
                                        return {
                                            words: shuffleRng(chosenWords),
                                            odd: 'none',
                                            theme: themeObj.id,
                                            oddTheme: null,
                                            generated: true
                                        };
                                    }
                                }
                            } else {
                                if (themeObj.words.length >= 3) {
                                    var otherThemes = shuffledThemes.filter(function(otherKey) { return otherKey !== tKey; });
                                    for (var oIdx = 0; oIdx < otherThemes.length; oIdx++) {
                                        var t2Key = otherThemes[oIdx];
                                        var t2Obj = themeMap[t2Key];
                                        if (!t2Obj || t2Obj.words.length === 0) continue;

                                        var candidateOddWords = t2Obj.words.filter(function(wObj) {
                                            return !themeObj.seenWords[wObj.word.toLowerCase()];
                                        });
                                        if (candidateOddWords.length === 0) continue;

                                        var chosen3 = shuffleRng(themeObj.words).slice(0, 3);
                                        var chosen3Words = chosen3.map(function(obj) { return obj.word; });

                                        var targetForm = chosen3[0] ? chosen3[0].form : null;
                                        var matchingFormOdd = candidateOddWords.filter(function(wObj) {
                                            return targetForm && wObj.form === targetForm;
                                        });
                                        var selectedOddObj = matchingFormOdd.length > 0 ?
                                            shuffleRng(matchingFormOdd)[0] : shuffleRng(candidateOddWords)[0];

                                        var fourWords = chosen3Words.concat([selectedOddObj.word]);
                                        var pKey = getPuzzleKey(fourWords);
                                        if (!seenPuzzleKeys[pKey]) {
                                            seenPuzzleKeys[pKey] = true;
                                            return {
                                                words: shuffleRng(fourWords),
                                                odd: selectedOddObj.word,
                                                theme: themeObj.id,
                                                oddTheme: t2Obj.id,
                                                generated: true
                                            };
                                        }
                                    }
                                }
                            }
                        }
                        return null;
                    }

                    while (puzzles.length < count && attempts < maxAttempts) {
                        attempts++;
                        var wantOdd = (puzzles.length % 2 === 1);

                        var puzzle = tryGeneratePuzzle(wantOdd) || tryGeneratePuzzle(!wantOdd);
                        if (puzzle) {
                            puzzles.push(puzzle);
                        } else {
                            break;
                        }
                    }

                    resolve({
                        ok: true,
                        puzzles: puzzles,
                        widened: widened
                    });
                })
                .catch(function() {
                    resolve({ ok: false, puzzles: [], widened: false });
                });
        });
    }

    var COSYVocab = {
        ensure: ensure,
        ensureFull: ensureFull,
        wordSet: wordSet,
        levelCode: levelCode,
        joinArticle: joinArticle,
        isConcreteObjectTheme: isConcreteObjectTheme,
        buildLinkPuzzles: buildLinkPuzzles
    };

    if (typeof window !== 'undefined') {
        window.COSYVocab = COSYVocab;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = COSYVocab;
    }
})();
