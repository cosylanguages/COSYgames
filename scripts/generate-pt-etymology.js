const fs = require('fs');
const path = require('path');

const ptEntries = [
  // Existing 5 entries
  {
    word: "Saudade",
    level: "easy",
    options: ["Latim", "Grego", "Árabe", "Francês"],
    answer: "Latim",
    detail: "Evoluiu no português a partir do latim solitudo para expressar o sentimento profundo de nostalgia e presença da ausência.",
    path: "Latim (solitudo) → Português Saudade"
  },
  {
    word: "Obrigado",
    level: "easy",
    options: ["Latim", "Grego", "Árabe", "Espanhol"],
    answer: "Latim",
    detail: "Do latim obligatus (atado por dever), expressando a ideia moral de ficar ligado em gratidão a quem ajudou.",
    path: "Latim (obligatus) → Português Obrigado"
  },
  {
    word: "Galáxia",
    level: "easy",
    options: ["Grego", "Latim", "Árabe", "Francês"],
    answer: "Grego",
    detail: "Deriva do mito grego sobre as gotas de leite derramadas pela deusa Hera no céu.",
    path: "Grego (gala) → Português Galáxia"
  },
  {
    word: "Candidato",
    level: "easy",
    options: ["Latim", "Grego", "Árabe", "Francês"],
    answer: "Latim",
    detail: "Na Roma Antiga, os postulantes a cargos vestiam uma toga perfeitamente branca (candidus).",
    path: "Latim (candidus) → Português Candidato"
  },
  {
    word: "Nostalgia",
    level: "easy",
    options: ["Grego", "Latim", "Árabe", "Francês"],
    answer: "Grego",
    detail: "Criado no século XVII unindo as raízes gregas nostos (regresso a casa) e algos (dor).",
    path: "Grego (nostos + algos) → Português Nostalgia"
  },

  // 25 New entries
  // African-language loans (Kimbundu / Yoruba)
  {
    word: "Cafuné",
    level: "easy",
    options: ["Quimbundo", "Tupi", "Latim", "Árabe"],
    answer: "Quimbundo",
    detail: "Do quimbundo kifune (esfregar a cabeça), gesto de carinho de passar os dedos pelos cabelos.",
    path: "Quimbundo (kifune) → Português Cafuné"
  },
  {
    word: "Samba",
    level: "easy",
    options: ["Quimbundo", "Tupi", "Espanhol", "Árabe"],
    answer: "Quimbundo",
    detail: "Origem nas línguas bantu da África Central, ligado a semba (umbigada na dança ritual).",
    path: "Quimbundo (semba) → Português Samba"
  },
  {
    word: "Moleque",
    level: "easy",
    options: ["Quimbundo", "Tupi", "Latim", "Árabe"],
    answer: "Quimbundo",
    detail: "Do quimbundo mu'leke (garoto ou menino jovem), integrado ao vocabulário coloquial.",
    path: "Quimbundo (mu'leke) → Português Moleque"
  },
  {
    word: "Caçula",
    level: "medium",
    options: ["Quimbundo", "Tupi", "Latim", "Francês"],
    answer: "Quimbundo",
    detail: "Do quimbundo kazule (o filho mais novo ou último nascido na família).",
    path: "Quimbundo (kazule) → Português Caçula"
  },
  {
    word: "Dengo",
    level: "medium",
    options: ["Quimbundo", "Tupi", "Latim", "Espanhol"],
    answer: "Quimbundo",
    detail: "Do quimbundo ndengu (doçura ou pedido de mimo no convívio familiar).",
    path: "Quimbundo (ndengu) → Português Dengo"
  },

  // Tupi-Guarani terms (Brazilian contact)
  {
    word: "Abacaxi",
    level: "easy",
    options: ["Tupi-Guarani", "Quimbundo", "Latim", "Árabe"],
    answer: "Tupi-Guarani",
    detail: "Do tupi ibaguati (fruta cheirosa e saborosa), nome nativo dado ao ananás nas terras tropicais.",
    path: "Tupi-Guarani (ibaguati) → Português Abacaxi"
  },
  {
    word: "Pipoca",
    level: "easy",
    options: ["Tupi-Guarani", "Quimbundo", "Latim", "Espanhol"],
    answer: "Tupi-Guarani",
    detail: "Do tupi pira-poka (pele arrebentada), descrevendo o grão de milho ao estourar no calor.",
    path: "Tupi-Guarani (pira-poka) → Português Pipoca"
  },
  {
    word: "Tatu",
    level: "easy",
    options: ["Tupi-Guarani", "Quimbundo", "Latim", "Holandês"],
    answer: "Tupi-Guarani",
    detail: "Do tupi ta-tu (casca cascuda), mamífero blindado nativo da fauna sul-americana.",
    path: "Tupi-Guarani (ta-tu) → Português Tatu"
  },
  {
    word: "Mandioca",
    level: "medium",
    options: ["Tupi-Guarani", "Quimbundo", "Latim", "Espanhol"],
    answer: "Tupi-Guarani",
    detail: "Da lenda tupi de Mani-oka (casa de Mani), raiz tuberosa fundamental na alimentação indígena.",
    path: "Tupi-Guarani (Mani-oka) → Português Mandioca"
  },
  {
    word: "Piranha",
    level: "medium",
    options: ["Tupi-Guarani", "Quimbundo", "Latim", "Espanhol"],
    answer: "Tupi-Guarani",
    detail: "Do tupi pira-anha (peixe dente ou tesoura), peixe carnívoro das bacias hidrográficas amazónicas.",
    path: "Tupi-Guarani (pira-anha) → Português Piranha"
  },

  // Arabic Substrate
  {
    word: "Azeite",
    level: "easy",
    options: ["Árabe", "Latim", "Grego", "Hebreu"],
    answer: "Árabe",
    detail: "Do árabe hispânico az-zayt (óleo de azeitona), herdado do período de Al-Andalus na Península Ibérica.",
    path: "Árabe (az-zayt) → Português Azeite"
  },
  {
    word: "Açúcar",
    level: "easy",
    options: ["Árabe", "Sânscrito", "Latim", "Persa"],
    answer: "Árabe",
    detail: "Transmitido do árabe as-sukkar via comércio ibérico, originário da palavra sândcrita śarkarā.",
    path: "Sânscrito (śarkarā) → Árabe (as-sukkar) → Português Açúcar"
  },
  {
    word: "Oxalá",
    level: "easy",
    options: ["Árabe", "Latim", "Quimbundo", "Espanhol"],
    answer: "Árabe",
    detail: "Da expressão árabe law shā' Allāh (se Deus quiser), expressando desejo fervoroso.",
    path: "Árabe (law shā' Allāh) → Português Oxalá"
  },
  {
    word: "Algarismo",
    level: "medium",
    options: ["Árabe", "Latim", "Grego", "Sânscrito"],
    answer: "Árabe",
    detail: "Homenagem ao matemático persa-árabe Al-Khwarizmi, introdutor dos numerais arábicos na Europa.",
    path: "Árabe (Al-Khwarizmi) → Português Algarismo"
  },
  {
    word: "Almoxarife",
    level: "hard",
    options: ["Árabe", "Latim", "Holandês", "Francês"],
    answer: "Árabe",
    detail: "Do árabe al-mushrif (o inspetor ou tesoureiro), antigo funcionário encarregado dos suprimentos.",
    path: "Árabe (al-mushrif) → Português Almoxarife"
  },

  // Dutch / English Maritime & Modern Terms
  {
    word: "Iate",
    level: "medium",
    options: ["Holandês", "Inglês", "Alemão", "Latim"],
    answer: "Holandês",
    detail: "Do holandês jacht (caça/perseguição), embarcação rápida introduzida nos mares europeus.",
    path: "Holandês (jacht) → Inglês → Português Iate"
  },
  {
    word: "Futebol",
    level: "easy",
    options: ["Inglês", "Francês", "Alemão", "Espanhol"],
    answer: "Inglês",
    detail: "Adaptação fonética direta do inglês football (pés e bola) introduzido no século XIX.",
    path: "Inglês (football) → Português Futebol"
  },
  {
    word: "Cheque",
    level: "medium",
    options: ["Inglês", "Árabe", "Francês", "Latim"],
    answer: "Inglês",
    detail: "Do inglês check (verificar ou conferir), derivado da ordem de pagamento bancária.",
    path: "Inglês (check) → Português Cheque"
  },
  {
    word: "Líder",
    level: "medium",
    options: ["Inglês", "Alemão", "Francês", "Latim"],
    answer: "Inglês",
    detail: "Do inglês leader (aquele que guia), incorporado na linguagem política e de gestão.",
    path: "Inglês (leader) → Português Líder"
  },

  // Classical & European Layers
  {
    word: "Filosofia",
    level: "easy",
    options: ["Grego", "Latim", "Árabe", "Francês"],
    answer: "Grego",
    detail: "Formado pelas raízes gregas philos (amor) e sophia (sabedoria).",
    path: "Grego (philos + sophia) → Português Filosofia"
  },
  {
    word: "Biblioteca",
    level: "easy",
    options: ["Grego", "Latim", "Francês", "Alemão"],
    answer: "Grego",
    detail: "Do grego biblion (livro) e theke (caixa ou repositório).",
    path: "Grego (biblion + theke) → Português Biblioteca"
  },
  {
    word: "Restaurante",
    level: "medium",
    options: ["Francês", "Latim", "Espanhol", "Inglês"],
    answer: "Francês",
    detail: "Do francês restaurant, alusivo ao caldo nutritivo servido nos estabelecimentos de Paris no século XVIII.",
    path: "Francês (restaurant) → Português Restaurante"
  },
  {
    word: "Balcão",
    level: "hard",
    options: ["Lombardo/Germanico", "Latim", "Francês", "Árabe"],
    answer: "Lombardo/Germanico",
    detail: "Da raiz germanica balcho (viga de madeira) através do italiano medieval balcone.",
    path: "Germanico (balcho) → Italiano → Português Balcão"
  },
  {
    word: "Guerra",
    level: "hard",
    options: ["Germanico", "Latim", "Árabe", "Celta"],
    answer: "Germanico",
    detail: "Substituiu o latim bellum durante as invasões visigóticas a partir da raiz werra (conflito).",
    path: "Germanico (werra) → Português Guerra"
  },
  {
    word: "Jardim",
    level: "hard",
    options: ["Francês", "Germanico", "Latim", "Árabe"],
    answer: "Francês",
    detail: "Do francês antigo jardin, derivado da raiz franca gardo (terreno cercado).",
    path: "Franco (gardo) → Francês (jardin) → Português Jardim"
  }
];

// Process data/pt/game_data.js
const ptPath = path.join(__dirname, '..', 'data', 'pt', 'game_data.js');
let ptContent = fs.readFileSync(ptPath, 'utf8');
let window = {};
eval(ptContent);
const ptData = window.gameData['pt'];
ptData.etymology = ptEntries;

const formattedPt = `(function() {
    const data = ${JSON.stringify(ptData, null, 6)};

    window.gameData = window.gameData || {};
    window.gameData['pt'] = data;
    window.gameData['br'] = data;
})();`;
fs.writeFileSync(ptPath, formattedPt, 'utf8');

// Process data/br/game_data.js
const brPath = path.join(__dirname, '..', 'data', 'br', 'game_data.js');
let brContent = fs.readFileSync(brPath, 'utf8');
window = {};
eval(brContent);
const brData = window.gameData['br'];
brData.etymology = ptEntries;

const formattedBr = `(function() {
    const data = ${JSON.stringify(brData, null, 6)};

    window.gameData = window.gameData || {};
    window.gameData['br'] = data;
})();`;
fs.writeFileSync(brPath, formattedBr, 'utf8');

console.log(`Successfully formatted data/pt/game_data.js and data/br/game_data.js with ${ptEntries.length} etymology entries!`);
