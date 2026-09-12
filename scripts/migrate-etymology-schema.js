const fs = require('fs');
const path = require('path');

const distractorPools = {
    ba: ['Башҡорт теле', 'Төрки теле', 'Ғәрәп теле', 'Фарсы теле', 'Рус теле'],
    br: ['Latim', 'Grego', 'Árabe', 'Francês', 'Alemão', 'Inglês', 'Espanhol'],
    de: ['Deutsch', 'Griechisch', 'Latein', 'Tschechisch', 'Chinesisch', 'Französisch', 'Arabisch', 'Englisch'],
    el: ['Ελληνική', 'Λατινική', 'Γαλλική', 'Αραβική', 'Τουρκική', 'Αγγλική', 'Γερμανική'],
    en: ['Greek', 'Latin', 'French', 'Arabic', 'Germanic', 'Old Norse', 'Sanskrit', 'Persian', 'Italian'],
    es: ['Latín', 'Griego', 'Árabe', 'Francés', 'Alemán', 'Italiano', 'Náhuatl', 'Inglés'],
    fr: ['Latin', 'Grec', 'Arabe', 'Allemand', 'Italien', 'Espagnol', 'Anglais'],
    hy: ['Հայերեն', 'Պարսկերեն', 'Հունարեն', 'Լատիներեն', 'Արաբերեն', 'Ռուսերեն'],
    it: ['Latino', 'Greco', 'Arabo', 'Francese', 'Tedesco', 'Veneto', 'Cinese', 'Inglese'],
    ka: ['ქართული', 'ბერძნული', 'ლათინური', 'არაბული', 'სპარსული', 'თურქული'],
    pt: ['Latim', 'Grego', 'Árabe', 'Francês', 'Alemão', 'Inglês', 'Espanhol', 'Italiano'],
    ru: ['Английский', 'Итальянский', 'Русский', 'Латынь', 'Греческий', 'Немецкий', 'Французский', 'Арабский'],
    tt: ['Татар теле', 'Төрки теле', 'Ғәрәп теле', 'Фарсы теле', 'Рус теле']
};

const seeds = {
    en: [
        { word: 'Astronomy', options: ['Greek', 'Latin', 'Arabic', 'Sanskrit'], answer: 'Greek', level: 'starter', path: 'Greek (astron + nomos) → Latin (astronomia) → Modern Astronomy', detail: 'From Greek "astron" (star) + "nomos" (law).' },
        { word: 'Library', options: ['Latin', 'French', 'Greek', 'Germanic'], answer: 'Latin', level: 'starter', path: 'Latin (liber) → Old French (librarie) → Modern Library', detail: 'From Latin "liber" meaning book.' },
        { word: 'Salary', options: ['Latin', 'Greek', 'Arabic', 'French'], answer: 'Latin', level: 'elementary', path: 'Latin (salarium) → Old French (salaire) → Modern Salary', detail: 'From Latin "sal" (salt), referring to salt allowances given to Roman soldiers.' },
        { word: 'Algebra', options: ['Arabic', 'Greek', 'Latin', 'Persian'], answer: 'Arabic', level: 'intermediate', path: 'Arabic (al-jabr) → Medieval Latin → Modern Algebra', detail: 'From Arabic "al-jabr" meaning reunion of broken parts.' },
        { word: 'Robot', options: ['Czech', 'Russian', 'German', 'Polish'], answer: 'Czech', level: 'intermediate', path: 'Czech (robota) → Modern Robot', detail: 'Coined in Karel Čapek\'s play R.U.R. from "robota" (forced labour).' }
    ],
    es: [
        { word: 'Candidato', options: ['Latín', 'Griego', 'Francés', 'Alemán'], answer: 'Latín', level: 'starter', path: 'Latín (candidus) → Candidato', detail: 'En la antigua Roma, los aspirantes vestían una toga blanca brillante (candida).' },
        { word: 'Nostalgia', options: ['Griego', 'Latín', 'Alemán', 'Francés'], answer: 'Griego', level: 'elementary', path: 'Griego (nostos + algos) → Nostalgia', detail: 'Del griego "nostos" (regreso) y "algos" (dolor/anhelo).' },
        { word: 'Álgebra', options: ['Árabe', 'Griego', 'Latín', 'Persa'], answer: 'Árabe', level: 'intermediate', path: 'Árabe (al-jabr) → Álgebra', detail: 'Del árabe "al-jabr" que significa reintegración o restauración.' },
        { word: 'Aguacate', options: ['Náhuatl', 'Español', 'Maya', 'Quechua'], answer: 'Náhuatl', level: 'intermediate', path: 'Náhuatl (āhuacatl) → Aguacate', detail: 'Proviene del término náhuatl para la fruta por su forma característica.' },
        { word: 'Galaxia', options: ['Griego', 'Latín', 'Árabe', 'Hebreo'], answer: 'Griego', level: 'starter', path: 'Griego (gala) → Galaxia', detail: 'Del mito griego sobre las gotas de leche derramadas en el cielo.' }
    ],
    fr: [
        { word: 'Candidat', options: ['Latin', 'Grec', 'Allemand', 'Italien'], answer: 'Latin', level: 'starter', path: 'Latin (candidus) → Candidat', detail: 'Dans la Rome antique, les candidats portaient une toge d\'une blancheur éclatante.' },
        { word: 'Nostalgie', options: ['Grec', 'Latin', 'Allemand', 'Italien'], answer: 'Grec', level: 'elementary', path: 'Grec (nostos + algos) → Nostalgie', detail: 'Du grec "nostos" (retour) et "algos" (douleur/chagrin).' },
        { word: 'Algèbre', options: ['Arabe', 'Grec', 'Latin', 'Persan'], answer: 'Arabe', level: 'intermediate', path: 'Arabe (al-jabr) → Algèbre', detail: 'De l\'arabe "al-jabr" signifiant la réunion des parties transposées.' },
        { word: 'Silo', options: ['Espagnol', 'Arabe', 'Grec', 'Latin'], answer: 'Espagnol', level: 'advanced', path: 'Espagnol (silo) → Silo', detail: 'Terme issu du grec ou du mozarabe pour le stockage des grains.' },
        { word: 'Galaxie', options: ['Grec', 'Latin', 'Arabe', 'Allemand'], answer: 'Grec', level: 'starter', path: 'Grec (gala) → Galaxie', detail: 'De la légende grecque des gouttes de lait versées dans le ciel.' }
    ]
};

function cleanOrigin(origin) {
    if (!origin) return 'Unknown';
    const match = origin.match(/^([^(]+)/);
    return match ? match[1].trim() : origin.trim();
}

function buildOptions(answer, lang) {
    const pool = distractorPools[lang] || ['Latin', 'Greek', 'Arabic', 'French', 'German'];
    const filtered = pool.filter(o => o.toLowerCase() !== answer.toLowerCase());
    const distractors = filtered.slice(0, 3);
    const result = [answer, ...distractors];
    return Array.from(new Set(result));
}

function convertEntry(item, lang) {
    if (item.options && item.answer) {
        return item;
    }
    const answer = cleanOrigin(item.origin);
    const options = buildOptions(answer, lang);
    const detail = item.story || item.meaning || '';
    const pathStr = item.origin ? `${item.origin} → ${item.word}` : `${answer} → ${item.word}`;
    const level = item.level || 'medium';

    return {
        word: item.word,
        level: level,
        options: options,
        answer: answer,
        detail: detail,
        path: pathStr
    };
}

const langDirs = Object.keys(distractorPools);

langDirs.forEach(lang => {
    const filePath = path.join(__dirname, '..', 'data', lang, 'game_data.js');
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    const window = {};
    eval(content);
    const data = window.gameData ? window.gameData[lang] : null;

    if (!data) {
        console.error(`Could not parse data for ${lang}`);
        return;
    }

    let etymologyArr = data.etymology || [];
    if (etymologyArr.length === 0 && seeds[lang]) {
        etymologyArr = seeds[lang];
    } else {
        etymologyArr = etymologyArr.map(e => convertEntry(e, lang));
    }

    const formattedEtymology = etymologyArr.map(e => {
        return `        {\n` +
            `          word: ${JSON.stringify(e.word)},\n` +
            `          level: ${JSON.stringify(e.level)},\n` +
            `          options: ${JSON.stringify(e.options)},\n` +
            `          answer: ${JSON.stringify(e.answer)},\n` +
            `          detail: ${JSON.stringify(e.detail)},\n` +
            `          path: ${JSON.stringify(e.path)}\n` +
            `        }`;
    }).join(',\n');

    const replaceRegex = /etymology:\s*\[[\s\S]*?\]\s*,?/;
    const newEtymologyBlock = `etymology: [\n${formattedEtymology}\n      ],`;

    const updatedContent = content.replace(replaceRegex, newEtymologyBlock);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Successfully migrated etymology data for ${lang}`);
});
