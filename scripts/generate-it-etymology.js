const fs = require('fs');
const path = require('path');

const itEntries = [
  // Existing 5 entries
  {
    word: "Ciao",
    level: "easy",
    options: ["Veneto", "Latino", "Greco", "Arabo"],
    answer: "Veneto",
    detail: "Deriva dal saluto veneziano scomputo de sciavo (sono tuo schiavo), divenuto un saluto informale universale.",
    path: "Veneto (sciavo) → Ciao"
  },
  {
    word: "Biscotto",
    level: "easy",
    options: ["Latino", "Greco", "Arabo", "Francese"],
    answer: "Latino",
    detail: "Si riferisce alla tecnica di cuocere il pane due volte per conservarlo a lungo durante i viaggi di navigazione.",
    path: "Latino (bis coctus) → Biscotto"
  },
  {
    word: "Galassia",
    level: "easy",
    options: ["Greco", "Latino", "Arabo", "Francese"],
    answer: "Greco",
    detail: "Dalla leggenda greca delle gocce di latte scaturite dal seno della dea Era nel cielo.",
    path: "Greco (gala) → Galassia"
  },
  {
    word: "Candidato",
    level: "easy",
    options: ["Latino", "Greco", "Arabo", "Francese"],
    answer: "Latino",
    detail: "Gli aspiranti alle cariche nell'antica Roma indossavano una toga candida perfettamente bianca.",
    path: "Latino (candidus) → Candidato"
  },
  {
    word: "Nostalgia",
    level: "easy",
    options: ["Greco", "Latino", "Arabo", "Francese"],
    answer: "Greco",
    detail: "Coniato nel XVII secolo da un medico svizzero unendo le radici greche nostos (ritorno) e algos (dolore).",
    path: "Greco (nostos + algos) → Nostalgia"
  },

  // 25 New entries
  // Easy (10 total: 5 existing + 5 new)
  {
    word: "Arancia",
    level: "easy",
    options: ["Arabo", "Persiano", "Sancrito", "Latino"],
    answer: "Arabo",
    detail: "Giunta in Sicilia dall'arabo nāranj, a sua volta derivato dal persiano e dal sanscrito nāraṅga.",
    path: "Sancrito (nāraṅga) → Persiano → Arabo (nāranj) → Italiano Arancia"
  },
  {
    word: "Zucchero",
    level: "easy",
    options: ["Arabo", "Sancrito", "Latino", "Greco"],
    answer: "Arabo",
    detail: "Introdotto attraverso il commercio arabo siciliano e veneto dal vocabile sukkar.",
    path: "Sancrito (śarkarā) → Arabo (as-sukkar) → Italiano Zucchero"
  },
  {
    word: "Banca",
    level: "easy",
    options: ["Germanico", "Latino", "Francese", "Greco"],
    answer: "Germanico",
    detail: "Parola italiana diffusa nel mondo: i banchieri fiorentini e veneziani operavano su banchi di legno nei mercati.",
    path: "Germanico (bank) → Italiano Banca → Diffusa in tutto il mondo"
  },
  {
    word: "Opera",
    level: "easy",
    options: ["Latino", "Greco", "Francese", "Spagnolo"],
    answer: "Latino",
    detail: "Dal latino opera (lavoro/creazione); nata a Firenze nel Rinascimento e adottata universalmente per il teatro musicale.",
    path: "Latino (opera) → Italiano Opera → Termine musicale mondiale"
  },
  {
    word: "Piano",
    level: "easy",
    options: ["Italiano", "Latino", "Francese", "Tedesco"],
    answer: "Italiano",
    detail: "Abbreviazione di pianoforte, strumento inventato a Padova da Bartolomeo Cristofori per suonare forte e piano.",
    path: "Italiano (pianoforte) → Diffuso in tutte le lingue"
  },

  // Medium (10 total: 10 new)
  {
    word: "Magazzino",
    level: "medium",
    options: ["Arabo", "Latino", "Francese", "Spagnolo"],
    answer: "Arabo",
    detail: "Deriva dall'arabo makhāzin (depositi di merci), introdotto dai mercanti marittimi italiani.",
    path: "Arabo (makhāzin) → Italiano Magazzino"
  },
  {
    word: "Carciofo",
    level: "medium",
    options: ["Arabo", "Latino", "Spagnolo", "Greco"],
    answer: "Arabo",
    detail: "Dall'arabo al-kharshūf, ortaggio coltivato nell'Andalusia e nella Sicilia araba medioevale.",
    path: "Arabo (al-kharshūf) → Italiano Carciofo"
  },
  {
    word: "Tariffa",
    level: "medium",
    options: ["Arabo", "Latino", "Spagnolo", "Francese"],
    answer: "Arabo",
    detail: "Dall'arabo taʿrīf (notificazione o prezzo fissato), diffuso nei porti commerciali della penisola.",
    path: "Arabo (taʿrīf) → Italiano Tariffa"
  },
  {
    word: "Guerra",
    level: "medium",
    options: ["Germanico", "Latino", "Greco", "Arabo"],
    answer: "Germanico",
    detail: "Sostituì il latino bellum durante le invasioni dei Longobardi e dei Goti con il termine werra (rissa/discordia).",
    path: "Germanico/Lombardo (werra) → Italiano Guerra"
  },
  {
    word: "Giardino",
    level: "medium",
    options: ["Francese", "Germanico", "Latino", "Arabo"],
    answer: "Francese",
    detail: "Dall'antico francese jardin, a sua volta derivato dalla radice germanica gardo (recinto verde).",
    path: "Germanico (gardo) → Francese (jardin) → Italiano Giardino"
  },
  {
    word: "Fiasco",
    level: "medium",
    options: ["Germanico", "Latino", "Greco", "Arabo"],
    answer: "Germanico",
    detail: "Deriva dal germanico flaska (fiasca di vetro); l'espressione far fiasco nacque nel teatro comico fiorentino.",
    path: "Germanico (flaska) → Italiano Fiasco"
  },
  {
    word: "Guardia",
    level: "medium",
    options: ["Germanico", "Latino", "Francese", "Greco"],
    answer: "Germanico",
    detail: "Introdotto dai Longobardi con il verbo wardan (sorvegliare o prestare attenzione).",
    path: "Lombardo (wardan) → Italiano Guardia"
  },
  {
    word: "Ricco",
    level: "medium",
    options: ["Germanico", "Latino", "Greco", "Arabo"],
    answer: "Germanico",
    detail: "Dalla radice germanica reiks (potente o sovrano), entrata nell'uso durante il regno ostrogoto.",
    path: "Gotico (reiks) → Italiano Ricco"
  },
  {
    word: "Fascismo",
    level: "medium",
    options: ["Latino", "Greco", "Francese", "Tedesco"],
    answer: "Latino",
    detail: "Parola italiana del XX secolo derivata dal latino fasces (fascio di verghe portato dai littori romani).",
    path: "Latino (fasces) → Italiano Fascismo"
  },
  {
    word: "Ghetto",
    level: "medium",
    options: ["Veneziano", "Ebraico", "Tedesco", "Latino"],
    answer: "Veneziano",
    detail: "Origine dal campo del getto (fonderia) a Venezia dove nel 1516 fu stabilita la residenza coatta ebraica.",
    path: "Veneziano (geto/fonderia) → Ghetto → Diffuso nel mondo"
  },

  // Hard (10 total: 10 new)
  {
    word: "Tarantella",
    level: "hard",
    options: ["Italiano", "Greco", "Arabo", "Spagnolo"],
    answer: "Italiano",
    detail: "Dalla città pugliese di Taranto; danza frenetica popolare legata al mito del morso della tarantola.",
    path: "Italiano (Taranto) → Tarantella"
  },
  {
    word: "Facchino",
    level: "hard",
    options: ["Arabo", "Latino", "Germanico", "Spagnolo"],
    answer: "Arabo",
    detail: "Dall'arabo faqīh (giurisperito); in epoca medievale designava i doganieri e successivamente i portatori di pesi.",
    path: "Arabo (faqīh) → Italiano Facchino"
  },
  {
    word: "Algebrica",
    level: "hard",
    options: ["Arabo", "Greco", "Latino", "Persiano"],
    answer: "Arabo",
    detail: "Dall'arabo al-jabr (ricomposizione delle parti), diffuso in Europa dal matematico toscano Leonardo Fibonacci.",
    path: "Arabo (al-jabr) → Latino medievale → Italiano Algebra"
  },
  {
    word: "Taffetà",
    level: "hard",
    options: ["Persiano", "Arabo", "Cinese", "Turco"],
    answer: "Persiano",
    detail: "Giunto a Venezia dal persiano tāftah (tessuto lucido e intessuto) lungo la via della seta.",
    path: "Persiano (tāftah) → Italiano Taffetà"
  },
  {
    word: "Carnevale",
    level: "hard",
    options: ["Latino", "Greco", "Arabo", "Francese"],
    answer: "Latino",
    detail: "Dal latino medievale carne levare (togliere la carne), riferendosi all'ultimo banchetto prima del martedì grasso.",
    path: "Latino (carne + levare) → Italiano Carnevale"
  },
  {
    word: "Sassofono",
    level: "hard",
    options: ["Belga/Francese", "Italiano", "Tedesco", "Inglese"],
    answer: "Belga/Francese",
    detail: "Inventato nel 1840 dall'artigiano belga Adolphe Sax e adottato nella lingua italiana musicale.",
    path: "Nome proprio (Adolphe Sax) → Sassofono"
  },
  {
    word: "Fresco",
    level: "hard",
    options: ["Germanico", "Latino", "Greco", "Arabo"],
    answer: "Germanico",
    detail: "Entrato dal germanico frisk (fresco/nuovo), poi applicato alla tecnica pittorica dell'affresco su intonaco fresco.",
    path: "Germanico (frisk) → Italiano Affresco"
  },
  {
    word: "Bistrot",
    level: "hard",
    options: ["Russico", "Francese", "Latino", "Tedesco"],
    answer: "Russico",
    detail: "Parola russa bystro (rapidamente) gridata dai soldati russi a Parigi nel 1814, poi rientrata nell'uso europeo.",
    path: "Russico (bystro) → Francese (bistro) → Italiano Bistrot"
  },
  {
    word: "Lancia",
    level: "hard",
    options: ["Celtico", "Latino", "Germanico", "Greco"],
    answer: "Celtico",
    detail: "L'arma da urto fu denominata nel latino repubblicano lancia a partire da un prestito gallico o celtiberico.",
    path: "Celtico (lancea) → Latino → Italiano Lancia"
  },
  {
    word: "Cravatta",
    level: "hard",
    options: ["Croato", "Francese", "Tedesco", "Latino"],
    answer: "Croato",
    detail: "Dalla sciarpina usata dai soldati croati (à la croate) al servizio della Francia nel XVII secolo.",
    path: "Croato (Hrvat) → Francese (cravate) → Italiano Cravatta"
  }
];

const filePath = path.join(__dirname, '..', 'data', 'it', 'game_data.js');
let content = fs.readFileSync(filePath, 'utf8');

const window = {};
eval(content);
const data = window.gameData['it'];
data.etymology = itEntries;

const formattedContent = `(function() {
    const data = ${JSON.stringify(data, null, 6)};

    window.gameData = window.gameData || {};
    window.gameData['it'] = data;
})();`;

fs.writeFileSync(filePath, formattedContent, 'utf8');
console.log(`Successfully formatted data/it/game_data.js with ${itEntries.length} etymology entries!`);
