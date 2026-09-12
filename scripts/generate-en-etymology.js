const fs = require('fs');
const path = require('path');

const enEntries = [
  // Easy (~13)
  {
    word: "Pizza",
    level: "easy",
    options: ["Italian", "Greek", "Latin", "Arabic"],
    answer: "Italian",
    detail: "Derived from Italian pizza, which may trace back to Byzantine Greek pitta or Vulgar Latin pitch for bread dough.",
    path: "Greek pitta (?) → Italian pizza → English Pizza"
  },
  {
    word: "Kindergarten",
    level: "easy",
    options: ["German", "Dutch", "Danish", "French"],
    answer: "German",
    detail: "Coined in 1837 by German educator Friedrich Fröbel, literally translating to children's garden.",
    path: "German (Kinder + Garten) → English Kindergarten"
  },
  {
    word: "Safari",
    level: "easy",
    options: ["Arabic", "Swahili", "Hindi", "Persian"],
    answer: "Arabic",
    detail: "Entered Swahili from the Arabic word safar meaning journey or travel before reaching English.",
    path: "Arabic (safar) → Swahili (safari) → English Safari"
  },
  {
    word: "Ballet",
    level: "easy",
    options: ["French", "Italian", "Russian", "Spanish"],
    answer: "French",
    detail: "Borrowed from French ballet, which inherited it from Italian balletto, a diminutive of ballo meaning dance.",
    path: "Italian (ballare) → French (ballet) → English Ballet"
  },
  {
    word: "Gymnasium",
    level: "easy",
    options: ["Greek", "Latin", "German", "French"],
    answer: "Greek",
    detail: "From ancient Greek gymnos meaning naked, because athletes in classical Greece trained without clothes.",
    path: "Greek (gymnos) → Latin (gymnasium) → English Gymnasium"
  },
  {
    word: "Library",
    level: "easy",
    options: ["Latin", "French", "Greek", "Germanic"],
    answer: "Latin",
    detail: "Traces back to Latin liber, meaning book or inner bark of a tree used for writing.",
    path: "Latin (liber) → Old French (librarie) → English Library"
  },
  {
    word: "Window",
    level: "easy",
    options: ["Old Norse", "Old English", "Dutch", "German"],
    answer: "Old Norse",
    detail: "Combines the Old Norse words vindr (wind) and auga (eye), poetically describing an eye for the wind.",
    path: "Old Norse (vindauga) → Middle English (windowe) → English Window"
  },
  {
    word: "Dollar",
    level: "easy",
    options: ["Dutch", "German", "Spanish", "French"],
    answer: "Dutch",
    detail: "Evolved from the Dutch daler and German Thaler, named after the Joachimsthal silver mine in Bohemia.",
    path: "German (Thaler) → Dutch (daler) → English Dollar"
  },
  {
    word: "Avocado",
    level: "easy",
    options: ["Nahuatl", "Spanish", "Maya", "Quechua"],
    answer: "Nahuatl",
    detail: "Derived from the Aztec language Nahuatl word āhuacatl, adapted by Spanish explorers into aguacate.",
    path: "Nahuatl (āhuacatl) → Spanish (aguacate) → English Avocado"
  },
  {
    word: "Chocolate",
    level: "easy",
    options: ["Nahuatl", "Spanish", "Maya", "French"],
    answer: "Nahuatl",
    detail: "Borrowed from Nahuatl xocolātl, combining terms for bitter water used for ceremonial cacao drinks.",
    path: "Nahuatl (xocolātl) → Spanish (chocolate) → English Chocolate"
  },
  {
    word: "Piano",
    level: "easy",
    options: ["Italian", "French", "German", "Latin"],
    answer: "Italian",
    detail: "Short for pianoforte, from Italian piano (soft) and forte (loud), describing its dynamic range.",
    path: "Italian (pianoforte) → English Piano"
  },
  {
    word: "Mammoth",
    level: "easy",
    options: ["Russian", "German", "Polish", "Sami"],
    answer: "Russian",
    detail: "Adopted from Russian mamont, originating from Siberian indigenous languages referring to earth-burrowing giants.",
    path: "Siberian/Mansi → Russian (mamont) → English Mammoth"
  },
  {
    word: "Astronomy",
    level: "easy",
    options: ["Greek", "Latin", "Arabic", "Sanskrit"],
    answer: "Greek",
    detail: "Combines Greek astron (star) and nomos (law or arrangement) into the law of the stars.",
    path: "Greek (astron + nomos) → Latin (astronomia) → English Astronomy"
  },

  // Medium (~13)
  {
    word: "Alcohol",
    level: "medium",
    options: ["Arabic", "Latin", "Persian", "Greek"],
    answer: "Arabic",
    detail: "Originally described fine kohl powder produced by sublimation before shifting to distilled chemical essences.",
    path: "Arabic (al-kuḥl) → Medieval Latin → English Alcohol"
  },
  {
    word: "Tycoon",
    level: "medium",
    options: ["Japanese", "Chinese", "Korean", "Hindi"],
    answer: "Japanese",
    detail: "Adopted from Japanese taikun (great prince), used by Western diplomats to address Tokugawa shoguns.",
    path: "Chinese (dàjūn) → Japanese (taikun) → English Tycoon"
  },
  {
    word: "Robot",
    level: "medium",
    options: ["Czech", "Russian", "German", "Polish"],
    answer: "Czech",
    detail: "Introduced by Czech playwright Karel Čapek in 1920, based on robota meaning forced labour or servitude.",
    path: "Czech (robota) → English Robot"
  },
  {
    word: "Lemon",
    level: "medium",
    options: ["Persian", "Arabic", "Old French", "Hindi"],
    answer: "Persian",
    detail: "Traveled from Persian līmūn into Arabic laymūn before spreading across medieval Mediterranean trade routes.",
    path: "Persian (līmūn) → Arabic (laymūn) → Old French → English Lemon"
  },
  {
    word: "Tea",
    level: "medium",
    options: ["Chinese", "Dutch", "Hindi", "Japanese"],
    answer: "Chinese",
    detail: "Entered English via the Hokkien Chinese pronunciation tê from Amoy port traders, contrasting with Cantonese chá.",
    path: "Hokkien Chinese (tê) → Dutch (thee) → English Tea"
  },
  {
    word: "Zombie",
    level: "medium",
    options: ["West African languages", "Haitian Creole", "Spanish", "Taino"],
    answer: "West African languages",
    detail: "Origins trace to Central West African languages such as Kikongo nzambi (deity/spirit) carried through Caribbean folklore.",
    path: "Kikongo (nzambi) → Haitian Creole → English Zombie"
  },
  {
    word: "Bamboo",
    level: "medium",
    options: ["Malay/Indonesian", "Dutch", "Hindi", "Portuguese"],
    answer: "Malay/Indonesian",
    detail: "Borrowed from Malay bambu through 16th-century Dutch and Portuguese spice trade reports.",
    path: "Malay (bambu) → Dutch (bamboes) → English Bamboo"
  },
  {
    word: "Saree",
    level: "medium",
    options: ["Hindi/Sanskrit", "Persian", "Tamil", "Arabic"],
    answer: "Hindi/Sanskrit",
    detail: "Rooted in Sanskrit śāṭikā meaning strip of cloth, evolving through Prakrit into modern South Asian attire.",
    path: "Sanskrit (śāṭikā) → Prakrit (sāḍī) → Hindi (sāṛī) → English Saree"
  },
  {
    word: "Coffee",
    level: "medium",
    options: ["Turkish", "Arabic", "Dutch", "Italian"],
    answer: "Turkish",
    detail: "Passed from Arabic qahwah into Ottoman Turkish kahve and Dutch traders before reaching English coffeehouses.",
    path: "Arabic (qahwah) → Ottoman Turkish (kahve) → Dutch (koffie) → English Coffee"
  },
  {
    word: "Bagel",
    level: "medium",
    options: ["Yiddish", "German", "Polish", "Russian"],
    answer: "Yiddish",
    detail: "Brought by Eastern European Jewish immigrants from Yiddish beygl, related to German word boug for ring or bracelet.",
    path: "Yiddish (beygl) → Middle High German (boug) → English Bagel"
  },
  {
    word: "Orange",
    level: "medium",
    options: ["Sanskrit", "Persian", "Arabic", "Spanish"],
    answer: "Sanskrit",
    detail: "Traveled from Sanskrit nāraṅga through Persian and Arabic, losing its initial 'n' sound in Old French.",
    path: "Sanskrit (nāraṅga) → Persian → Arabic → Old French → English Orange"
  },
  {
    word: "Yacht",
    level: "medium",
    options: ["Dutch", "German", "Old Norse", "English"],
    answer: "Dutch",
    detail: "Shortened from Dutch jachtschip (chase ship), originally fast light vessels used by the Dutch navy to pursue pirates.",
    path: "Dutch (jachtschip) → English Yacht"
  },
  {
    word: "Hurricane",
    level: "medium",
    options: ["Native American languages", "Spanish", "Carib", "Maya"],
    answer: "Native American languages",
    detail: "Absorbed from the Indigenous Taíno and Carib name for the storm deity of the West Indies.",
    path: "Taino/Carib (furacán) → Spanish (huracán) → English Hurricane"
  },
  {
    word: "Ketchup",
    level: "medium",
    options: ["Chinese", "Malay", "English", "Dutch"],
    answer: "Chinese",
    detail: "Derived from Hokkien Chinese kôe-chiap for fermented fish brine, adapted by British sailors with tomatoes.",
    path: "Hokkien Chinese (kôe-chiap) → English Ketchup"
  },

  // Hard (~14)
  {
    word: "Candy",
    level: "hard",
    options: ["Sanskrit", "Arabic", "French", "Persian"],
    answer: "Sanskrit",
    detail: "Traced back to Sanskrit khaṇḍa for piece of sugar, which journeyed through Arabic qand and French sugar production.",
    path: "Sanskrit (khaṇḍa) → Arabic (qand) → Old French (candi) → English Candy"
  },
  {
    word: "Admiral",
    level: "hard",
    options: ["Arabic", "Latin", "French", "Greek"],
    answer: "Arabic",
    detail: "Evolved from Arabic amīr al-bahr (commander of the sea), truncated in European translations.",
    path: "Arabic (amīr al-bahr) → Medieval Latin → Anglo-Norman → English Admiral"
  },
  {
    word: "Checkmate",
    level: "hard",
    options: ["Persian", "Arabic", "Turkish", "French"],
    answer: "Persian",
    detail: "Directly inherited from Persian shāh māt, literally meaning the king is helpless or dead.",
    path: "Persian (shāh māt) → Old French (eschec mat) → English Checkmate"
  },
  {
    word: "Clue",
    level: "hard",
    options: ["Greek", "Old English", "Latin", "French"],
    answer: "Greek",
    detail: "Originally spelled clew meaning ball of thread, inspired by Ariadne giving Theseus thread to navigate the Labyrinth.",
    path: "Greek myth → Old English (cleowen) → Middle English → English Clue"
  },
  {
    word: "Serendipity",
    level: "hard",
    options: ["Persian", "Arabic", "Sanskrit", "Greek"],
    answer: "Persian",
    detail: "Coined in 1754 by Horace Walpole from the Persian fairy tale The Three Princes of Serendip (Sri Lanka).",
    path: "Persian (Sarandīb) → English Serendipity"
  },
  {
    word: "Juggernaut",
    level: "hard",
    options: ["Sanskrit", "Hindi", "Tamil", "Persian"],
    answer: "Sanskrit",
    detail: "Named after Jagannātha (Lord of the World), referring to massive temple chariots in Puri, India.",
    path: "Sanskrit (Jagannātha) → English Juggernaut"
  },
  {
    word: "Assassin",
    level: "hard",
    options: ["Arabic", "Persian", "Turkish", "French"],
    answer: "Arabic",
    detail: "Derived from the Arabic title for the Nizari Ismaili order of the Crusades era.",
    path: "Arabic (ḥashshāshīn) → Crusader French → English Assassin"
  },
  {
    word: "Silhouette",
    level: "hard",
    options: ["French", "Italian", "German", "Spanish"],
    answer: "French",
    detail: "Named mockingly after 18th-century French finance minister Étienne de Silhouette known for cheap cut-out portraits.",
    path: "French (Étienne de Silhouette) → English Silhouette"
  },
  {
    word: "Quarantine",
    level: "hard",
    options: ["Italian", "French", "Latin", "Spanish"],
    answer: "Italian",
    detail: "From Venetian Italian quarentena (forty days), the isolation period imposed on ships during the Black Death.",
    path: "Italian (quarentena / quaranta) → English Quarantine"
  },
  {
    word: "Sarcasm",
    level: "hard",
    options: ["Greek", "Latin", "French", "Italian"],
    answer: "Greek",
    detail: "From Greek sarkazein, literally meaning to tear flesh or bite the lips in rage.",
    path: "Greek (sarkazein) → Late Latin → French → English Sarcasm"
  },
  {
    word: "Hazard",
    level: "hard",
    options: ["Arabic", "Old French", "Spanish", "Persian"],
    answer: "Arabic",
    detail: "Derived from Arabic az-zahr (the die), referring to a medieval dice game played in Palestine.",
    path: "Arabic (az-zahr) → Old French (hasard) → English Hazard"
  },
  {
    word: "Tulip",
    level: "hard",
    options: ["Turkish", "Persian", "Dutch", "Arabic"],
    answer: "Turkish",
    detail: "Named because the flower shape resembles a Turkish turban (tülbent), entering Europe during Ottoman diplomacy.",
    path: "Persian (tulipan) → Turkish (tülbent) → French → English Tulip"
  },
  {
    word: "Nostalgia",
    level: "hard",
    options: ["Greek", "Latin", "German", "French"],
    answer: "Greek",
    detail: "Coined in the 17th century by a Swiss physician combining Greek nostos (return home) and algos (pain).",
    path: "Greek (nostos + algos) → Modern Latin → English Nostalgia"
  }
];

const filePath = path.join(__dirname, '..', 'data', 'en', 'game_data.js');
let content = fs.readFileSync(filePath, 'utf8');

// Parse data using eval
const window = {};
eval(content);
const data = window.gameData['en'];
data.etymology = enEntries;

const formattedContent = `(function() {
    const data = ${JSON.stringify(data, null, 6)};

    window.gameData = window.gameData || {};
    window.gameData['en'] = data;
})();`;

fs.writeFileSync(filePath, formattedContent, 'utf8');
console.log(`Successfully formatted data/en/game_data.js with ${enEntries.length} etymology entries!`);
