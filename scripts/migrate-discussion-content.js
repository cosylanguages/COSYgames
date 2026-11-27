#!/usr/bin/env node

/**
 * scripts/migrate-discussion-content.js
 *
 * Backfills genuinely missing discussion content from COSYlanguages into COSYgames data/<lang>/game_data.js files.
 * Preserves clean formatting, avoids cross-language contamination, and deduplicates existing local entries.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const vm = require('vm');

const ROOT_DIR = path.resolve(__dirname, '..');
const RAW_BASE = 'https://raw.githubusercontent.com/cosylanguages/COSYlanguages/main/';

const TARGET_LANGS = ['ba', 'br', 'cv', 'de', 'el', 'es', 'fr', 'hy', 'it', 'ka', 'pt', 'ru', 'tt'];

function fetchRaw(urlPath) {
    return new Promise((resolve) => {
        https.get(RAW_BASE + urlPath, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', () => resolve(''));
    });
}

function parseJSContent(code) {
    if (!code || !code.trim()) return [];

    try {
        let clean = code.trim();
        clean = clean.replace(/\}\s*\)\s*\(\s*\)\s*;?$/, '');
        clean = clean.replace(/^\s*\(\s*function\s*\(\s*\)\s*\{/, '');
        clean = clean.replace(/const\s+data\s*=/g, 'var data =');
        clean = clean.replace(/let\s+data\s*=/g, 'var data =');

        const sandbox = { window: {} };
        vm.createContext(sandbox);
        vm.runInContext(clean, sandbox);
        if (sandbox.data && Array.isArray(sandbox.data) && sandbox.data.length > 0) {
            return sandbox.data;
        }
    } catch (e) {}

    try {
        const m = code.match(/const\s+data\s*=\s*(\[[\s\S]*?\])\s*;/);
        if (m) {
            return JSON.parse(m[1]);
        }
    } catch (e2) {}

    return [];
}

function normalize(text) {
    if (!text) return '';
    if (Array.isArray(text)) text = text.join(' ');
    else if (typeof text === 'object') {
        text = text.topic || text.text || text.word || text.t || '';
    }
    text = String(text).normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    text = text.replace(/[^\w\s\u0400-\u04FF\u0370-\u03FF]/g, '').toLowerCase();
    return text.split(/\s+/).filter(Boolean).join(' ');
}

function mapLevel(lvl) {
    if (!lvl) return 'elementary';
    lvl = String(lvl).toLowerCase().trim();
    if (lvl === 'starter' || lvl === 'a1') return 'starter';
    if (lvl === 'elementary' || lvl === 'a2') return 'elementary';
    if (lvl === 'intermediate' || lvl === 'b1') return 'intermediate';
    if (lvl === 'upper_intermediate' || lvl === 'upper-intermediate' || lvl === 'b2') return 'upper_intermediate';
    if (lvl === 'advanced' || lvl === 'c1' || lvl === 'c2' || lvl === 'proficiency') return 'advanced';
    return 'elementary';
}

function extractHints(item) {
    if (item.hints && Array.isArray(item.hints) && item.hints.length > 0) return item.hints;
    if (item.h && Array.isArray(item.h) && item.h.length > 0) return item.h;
    if (item._legacy && item._legacy.h && Array.isArray(item._legacy.h) && item._legacy.h.length > 0) return item._legacy.h;
    return null;
}

function extractText(item) {
    if (item.t) return item.t;
    if (item.text) return item.text;
    if (item.word) return item.word;
    if (item.definitions && item.definitions[0] && item.definitions[0].text) return item.definitions[0].text;
    return '';
}

async function main() {
    console.log('Fetching COSYlanguages repository file tree...');
    const treeUrl = 'https://api.github.com/repos/cosylanguages/COSYlanguages/git/trees/main?recursive=1';
    const body = await new Promise((resolve) => {
        https.get(treeUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
            let b = '';
            res.on('data', c => b += c);
            res.on('end', () => resolve(b));
        });
    });

    const tree = JSON.parse(body).tree || [];
    const discFiles = tree.filter(f => f.path.startsWith('vocabulary/') && ['debates.js', 'fluency.js', 'opinions.js', 'speaking.js'].some(x => f.path.endsWith(x)));

    const langFiles = {};
    for (const f of discFiles) {
        const parts = f.path.split('/');
        const lang = parts[1];
        if (TARGET_LANGS.includes(lang)) {
            if (!langFiles[lang]) langFiles[lang] = [];
            langFiles[lang].push(f);
        }
    }

    const report = {};

    for (const lang of TARGET_LANGS) {
        const files = langFiles[lang] || [];
        const localFilePath = path.join(ROOT_DIR, 'data', lang, 'game_data.js');

        let localData = { fluency: [], opinions: [], battle: [] };
        let fileExisted = fs.existsSync(localFilePath);

        if (fileExisted) {
            const content = fs.readFileSync(localFilePath, 'utf8');
            const sandbox = { window: {} };
            try {
                const fn = new Function('window', content);
                fn(sandbox.window);
                if (sandbox.window && sandbox.window.gameData && sandbox.window.gameData[lang]) {
                    localData = sandbox.window.gameData[lang];
                }
            } catch (e) {
                console.error(`Error parsing existing game_data.js for ${lang}:`, e.message);
            }
        }

        if (!localData.fluency) localData.fluency = [];
        if (!localData.opinions) localData.opinions = [];
        if (!localData.battle) localData.battle = [];

        let dupesRemoved = 0;

        const dedupeArray = (arr, getKey) => {
            const seen = new Set();
            const clean = [];
            for (const item of arr) {
                const key = getKey(item);
                if (key && seen.has(key)) {
                    dupesRemoved++;
                } else {
                    if (key) seen.add(key);
                    clean.push(item);
                }
            }
            return { clean, seen };
        };

        const { clean: cleanFluency, seen: seenFluency } = dedupeArray(localData.fluency, item => normalize(extractText(item)));
        const { clean: cleanOpinions, seen: seenOpinions } = dedupeArray(localData.opinions, item => normalize(extractText(item)));
        const { clean: cleanBattle, seen: seenBattle } = dedupeArray(localData.battle, item => {
            if (Array.isArray(item)) return normalize(item.join(' '));
            if (typeof item === 'object') return normalize(item.topic || [item.sideA, item.sideB].join(' '));
            return normalize(item);
        });

        localData.fluency = cleanFluency;
        localData.opinions = cleanOpinions;
        localData.battle = cleanBattle;

        let addedBattle = 0;
        let addedFluency = 0;
        let addedOpinions = 0;

        for (const f of files) {
            const parts = f.path.split('/');
            const levelFolder = parts[2];
            const fileName = parts[3];

            const raw = await fetchRaw(f.path);
            const items = parseJSContent(raw);

            for (const item of items) {
                const level = mapLevel(item.level || levelFolder);

                if (fileName === 'debates.js') {
                    let normKey = '';
                    let debateObj = null;

                    if (item.sideA && item.sideB) {
                        const topic = item.topic || item.word || (item.definitions && item.definitions[0] && item.definitions[0].text);
                        normKey = topic ? normalize(topic) : normalize([item.sideA, item.sideB].join(' '));
                        if (item.ideasA && item.ideasB && topic) {
                            debateObj = {
                                topic: topic,
                                sideA: item.sideA,
                                sideB: item.sideB,
                                level: level,
                                ideasA: item.ideasA,
                                ideasB: item.ideasB
                            };
                        } else {
                            debateObj = [item.sideA, item.sideB];
                        }
                    } else {
                        const topicText = extractText(item);
                        normKey = normalize(topicText);
                        debateObj = [topicText, ''];
                    }

                    if (normKey && !seenBattle.has(normKey)) {
                        seenBattle.add(normKey);
                        localData.battle.push(debateObj);
                        addedBattle++;
                    }
                } else if (fileName === 'fluency.js') {
                    const text = extractText(item);
                    const normKey = normalize(text);
                    if (text && !seenFluency.has(normKey)) {
                        seenFluency.add(normKey);
                        const entry = { text, level };
                        const hints = extractHints(item);
                        if (hints) entry.hints = hints;
                        localData.fluency.push(entry);
                        addedFluency++;
                    }
                } else if (fileName === 'opinions.js' || fileName === 'speaking.js') {
                    const text = extractText(item);
                    const normKey = normalize(text);
                    if (text && !seenOpinions.has(normKey)) {
                        seenOpinions.add(normKey);
                        const entry = { text, level };
                        const hints = extractHints(item);
                        if (hints) entry.hints = hints;
                        localData.opinions.push(entry);
                        addedOpinions++;
                    }
                }
            }
        }

        const dirPath = path.dirname(localFilePath);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        const formattedJS = `(function() {
    const data = ${JSON.stringify(localData, null, 10).replace(/^/gm, '    ').trim()};

    window.gameData = window.gameData || {};
    window.gameData['${lang}'] = data;
})();
`;

        fs.writeFileSync(localFilePath, formattedJS, 'utf8');

        report[lang] = {
            addedBattle,
            addedFluency,
            addedOpinions,
            dupesRemoved,
            totalAdded: addedBattle + addedFluency + addedOpinions
        };
    }

    console.log('\n================ MIGRATION REPORT ================');
    console.table(report);
    console.log('==================================================\n');
}

main().catch(err => {
    console.error('Migration failed:', err);
    process.exit(1);
});
