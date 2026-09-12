const fs = require('fs');
const path = require('path');

const brEntries = [
  {
    word: "Avel",
    level: "easy",
    options: ["Keltiek / Celtic", "Galleg", "Latin", "Saozneg"],
    answer: "Keltiek / Celtic",
    detail: "Kevatal d'ar kembraeg awel, o tont eus ar gwrizienn keltiek hag indezeuropeek evit an avel.",
    path: "Keltiek (aglo) → Brezhoneg Avel"
  },
  {
    word: "Kador",
    level: "easy",
    options: ["Latin", "Keltiek / Celtic", "Galleg", "Saozneg"],
    answer: "Latin",
    detail: "Amprestet eus al latin cathedra, deuet eus ar gresianeg kathedra (kador-oskoaz).",
    path: "Latin (cathedra) → Brezhoneg Kador"
  },
  {
    word: "Menez",
    level: "easy",
    options: ["Keltiek / Celtic", "Latin", "Galleg", "Gouezeleg"],
    answer: "Keltiek / Celtic",
    detail: "Kevatal d'ar kembraeg mynydd hag ar kerneveureg mynydh, o tont eus ar predeneg monidos.",
    path: "Keltiek (monidos) → Brezhoneg Menez"
  },
  {
    word: "Ti",
    level: "easy",
    options: ["Keltiek / Celtic", "Latin", "Galleg", "Saozneg"],
    answer: "Keltiek / Celtic",
    detail: "Kevatal d'ar kembraeg ty ha gouezeleg tigh, eus ar c'heltieg teg- o dalvezout ti pe gloz.",
    path: "Keltiek (tegos) → Brezhoneg Ti"
  },
  {
    word: "Mor",
    level: "easy",
    options: ["Keltiek / Celtic", "Latin", "Galleg", "Gouezeleg"],
    answer: "Keltiek / Celtic",
    detail: "Kevatal d'ar kembraeg mor, kerneweureg mor, ha gouezeleg muir, eus ar c'heltieg koshañ mori.",
    path: "Keltiek (mori) → Brezhoneg Mor"
  },
  {
    word: "Eost",
    level: "easy",
    options: ["Latin", "Keltiek / Celtic", "Galleg", "Saozneg"],
    answer: "Latin",
    detail: "Deuet eus anv an impalaer roman Augustus, evit envel miz an eost ha trevadoù an hañv.",
    path: "Latin (Augustus) → Brezhoneg Eost"
  },
  {
    word: "Kastell",
    level: "easy",
    options: ["Latin", "Keltiek / Celtic", "Galleg", "Saozneg"],
    answer: "Latin",
    detail: "Amprestet e-pad mare ar Romaned eus al latin castellum (kreñvlec'h).",
    path: "Latin (castellum) → Brezhoneg Kastell"
  },
  {
    word: "Plou-",
    level: "easy",
    options: ["Latin", "Keltiek / Celtic", "Galleg", "Saozneg"],
    answer: "Latin",
    detail: "Prefiks el lec'hanvadurezh vreizhat o tont eus al latin plebem (pobl pe parrez).",
    path: "Latin (plebem) → Brezhoneg Plou-"
  },
  {
    word: "Korn",
    level: "easy",
    options: ["Keltiek / Celtic", "Latin", "Galleg", "Gouezeleg"],
    answer: "Keltiek / Celtic",
    detail: "Kevatal d'ar kembraeg corn hag al latin cornu, kenwriziennek er kerentiad indezeuropeek.",
    path: "Keltiek (karno) → Brezhoneg Korn"
  },
  {
    word: "Bara",
    level: "easy",
    options: ["Keltiek / Celtic", "Latin", "Galleg", "Saozneg"],
    answer: "Keltiek / Celtic",
    detail: "Kevatal d'ar kembraeg bara hag ar c'herneweureg bara, ger keltiek evit boad ar pemdez.",
    path: "Keltiek (borage) → Brezhoneg Bara"
  },
  {
    word: "Gwin",
    level: "medium",
    options: ["Latin", "Keltiek / Celtic", "Galleg", "Saozneg"],
    answer: "Latin",
    detail: "Amprestet e-pad Mare ar Romaned eus al latin vinum (gwin/evaj).",
    path: "Latin (vinum) → Brezhoneg Gwin"
  },
  {
    word: "Marc'h",
    level: "medium",
    options: ["Keltiek / Celtic", "Latin", "Galleg", "Gouezeleg"],
    answer: "Keltiek / Celtic",
    detail: "Ger keltiek koshañ evit ar marc'h, kavet ivez e gouezeleg marc hag e galloueg marc-.",
    path: "Keltiek (markos) → Brezhoneg Marc'h"
  },
  {
    word: "Nedeleg",
    level: "medium",
    options: ["Latin", "Keltiek / Celtic", "Galleg", "Saozneg"],
    answer: "Latin",
    detail: "Deuet eus al latin Natalicia (deiz ginivelezh), kevatal d'ar c'hembraeg Nadolig.",
    path: "Latin (Natalicia) → Brezhoneg Nedeleg"
  },
  {
    word: "Gouel",
    level: "medium",
    options: ["Latin", "Keltiek / Celtic", "Galleg", "Saozneg"],
    answer: "Latin",
    detail: "Amprestet eus al latin vigilia (deiz beyliat pe gouel relijiel).",
    path: "Latin (vigilia) → Brezhoneg Gouel"
  },
  {
    word: "Penn",
    level: "medium",
    options: ["Keltiek / Celtic", "Latin", "Galleg", "Gouezeleg"],
    answer: "Keltiek / Celtic",
    detail: "Ger keltiek gallaouek-predenek evit ar penn pe ar c'hrec'h, kavet er c'hembraeg pen.",
    path: "Keltiek (penno) → Brezhoneg Penn"
  },
  {
    word: "Lenn",
    level: "medium",
    options: ["Keltiek / Celtic", "Latin", "Galleg", "Gouezeleg"],
    answer: "Keltiek / Celtic",
    detail: "Eus ar ger geltiek lindo (dour/lenn), kevatal d'ar c'hembraeg llyn ha d'ar gouezeleg linn.",
    path: "Keltiek (lindo) → Brezhoneg Lenn"
  },
  {
    word: "Koukoug",
    level: "medium",
    options: ["Onomatopeik / Onomatopoeic", "Latin", "Galleg", "Saozneg"],
    answer: "Onomatopeik / Onomatopoeic",
    detail: "Ger onomatopeek o treveziñ kan an evn koukoug, kavet ivez er c'hembraeg cwcw.",
    path: "Son an evn → Brezhoneg Koukoug"
  },
  {
    word: "Egliz",
    level: "medium",
    options: ["Latin", "Gresianeg", "Keltiek / Celtic", "Galleg"],
    answer: "Latin",
    detail: "Deuet eus al latin ecclesia, e-unan amprestet eus ar gresianeg ekklēsia (bodadenn).",
    path: "Gresianeg (ekklēsia) → Latin (ecclesia) → Brezhoneg Egliz"
  },
  {
    word: "Karr",
    level: "medium",
    options: ["Keltiek / Celtic", "Latin", "Galleg", "Saozneg"],
    answer: "Keltiek / Celtic",
    detail: "Ger keltiek koshañ amprestet goude gant al latin carrus evit ar c'herri-stramm.",
    path: "Keltiek (karros) → Brezhoneg Karr"
  },
  {
    word: "Lestr",
    level: "medium",
    options: ["Keltiek / Celtic", "Latin", "Galleg", "Gouezeleg"],
    answer: "Keltiek / Celtic",
    detail: "Kevatal d'ar c'hembraeg llestr, o tarkozañ ur lestr pe un bagigoù mor.",
    path: "Keltiek (lestr) → Brezhoneg Lestr"
  },
  {
    word: "Kozh",
    level: "hard",
    options: ["Keltiek / Celtic", "Latin", "Galleg", "Gouezeleg"],
    answer: "Keltiek / Celtic",
    detail: "Eus ar galleg-predeneg kotto- (kozh), kavet er c'hembraeg cothead ha gallaoueg.",
    path: "Keltiek (kotto) → Brezhoneg Kozh"
  },
  {
    word: "Glas",
    level: "hard",
    options: ["Keltiek / Celtic", "Latin", "Galleg", "Gouezeleg"],
    answer: "Keltiek / Celtic",
    detail: "Rannliv geltiek evit ar glaz hag ar gwer, kavet er c'hembraeg glas ha gouezeleg glas.",
    path: "Keltiek (glasto) → Brezhoneg Glas"
  },
  {
    word: "Aviel",
    level: "hard",
    options: ["Gresianeg", "Latin", "Keltiek / Celtic", "Galleg"],
    answer: "Gresianeg",
    detail: "Amprestet eus ar gresianeg euangelion (keloù mat), kavet er c'hembraeg efengyl.",
    path: "Gresianeg (euangelion) → Brezhoneg Aviel"
  },
  {
    word: "Yezhadur",
    level: "hard",
    options: ["Keltiek / Celtic", "Latin", "Gresianeg", "Galleg"],
    answer: "Keltiek / Celtic",
    detail: "Neologisme brezhonek : yezh (yezh) + radikal -adur evit ar studi yezhadurel.",
    path: "Brezhoneg (yezh + adur) → Yezhadur"
  },
  {
    word: "Morlaer",
    level: "hard",
    options: ["Keltiek / Celtic", "Latin", "Galleg", "Saozneg"],
    answer: "Keltiek / Celtic",
    detail: "Ger kevrennek brezhonek : mor (mor) + laer (laeront), o dalvezout morlaer.",
    path: "Brezhoneg (mor + laer) → Morlaer"
  },
  {
    word: "Ker",
    level: "hard",
    options: ["Keltiek / Celtic", "Latin", "Galleg", "Gouezeleg"],
    answer: "Keltiek / Celtic",
    detail: "Eus ar predeneg kaer (lec'h kreñvaet/kêr), kement hag ur gêr pe ur vilajenn er stumm a-hed.",
    path: "Keltiek (kaer) → Brezhoneg Ker"
  },
  {
    word: "Tad",
    level: "hard",
    options: ["Keltiek / Celtic", "Latin", "Galleg", "Gouezeleg"],
    answer: "Keltiek / Celtic",
    detail: "Kevatal d'ar c'hembraeg tad ha d'ar c'herneweureg tas, ger kentañ an indezeuropeeg.",
    path: "Keltiek (tatos) → Brezhoneg Tad"
  },
  {
    word: "Mamm",
    level: "hard",
    options: ["Keltiek / Celtic", "Latin", "Galleg", "Gouezeleg"],
    answer: "Keltiek / Celtic",
    detail: "Ger babig indezeuropeek evit ar vamm, kavet e kembraeg mamm hag e gresianeg ma.",
    path: "Keltiek (mamma) → Brezhoneg Mamm"
  },
  {
    word: "Ster",
    level: "hard",
    options: ["Keltiek / Celtic", "Latin", "Galleg", "Gouezeleg"],
    answer: "Keltiek / Celtic",
    detail: "Ger keltiek henvreizhonek evit ur stêr pe un dourredenn.",
    path: "Keltiek (stera) → Brezhoneg Ster"
  },
  {
    word: "Douar",
    level: "hard",
    options: ["Keltiek / Celtic", "Latin", "Galleg", "Gouezeleg"],
    answer: "Keltiek / Celtic",
    detail: "Kevatal d'ar c'hembraeg daear ha c'herneweureg doar, ger keltiek evit an douar.",
    path: "Keltiek (dowro) → Brezhoneg Douar"
  }
];

const filePath = path.join(__dirname, '..', 'data', 'br', 'game_data.js');
let content = fs.readFileSync(filePath, 'utf8');

let window = {};
eval(content);
const data = window.gameData['br'];
data.etymology = brEntries;

const formattedContent = `(function() {
    const data = ${JSON.stringify(data, null, 6)};

    window.gameData = window.gameData || {};
    window.gameData['br'] = data;
})();`;

fs.writeFileSync(filePath, formattedContent, 'utf8');
console.log(`Successfully formatted data/br/game_data.js with ${brEntries.length} etymology entries!`);
