const fs = require('fs');
const path = require('path');

const deEntries = [
  // Existing 5 entries preserved
  {
    word: "Kindergarten",
    level: "easy",
    options: ["Deutsch", "Griechisch", "Latein", "Tschechisch"],
    answer: "Deutsch",
    detail: "1837 von Friedrich Fröbel geprägt für frühkindliche Bildung im Einklang mit der Natur.",
    path: "Deutsch (Kinder + Garten) → Kindergarten"
  },
  {
    word: "Roboter",
    level: "medium",
    options: ["Tschechisch", "Deutsch", "Russisch", "Polnisch"],
    answer: "Tschechisch",
    detail: "Eingeführt von Karel Čapek in seinem Theaterstück R.U.R. im Jahr 1920 aus dem slawischen robota für Fronarbeit.",
    path: "Tschechisch (robota) → Roboter"
  },
  {
    word: "Zeitgeist",
    level: "medium",
    options: ["Deutsch", "Latein", "Griechisch", "Französisch"],
    answer: "Deutsch",
    detail: "Von Herder und Goethe populär gemacht zur Beschreibung der intellektuellen Strömung einer Epoche.",
    path: "Deutsch (Zeit + Geist) → Zeitgeist"
  },
  {
    word: "Ketchup",
    level: "medium",
    options: ["Chinesisch", "Englisch", "Niederländisch", "Deutsch"],
    answer: "Chinesisch",
    detail: "Von britischen Händlern aus Asien mitgebracht (kôe-chiap für Fischsoße) und später mit Tomaten abgewandelt.",
    path: "Chinesisch (kôe-chiap) → Englisch → Deutsch Ketchup"
  },
  {
    word: "Panik",
    level: "easy",
    options: ["Griechisch", "Latein", "Deutsch", "Französisch"],
    answer: "Griechisch",
    detail: "Bezieht sich auf den altgriechischen Gott Pan, der plötzliche Furcht in Herden und Wäldern auslöste.",
    path: "Griechisch (Pan) → Latein → Deutsch Panik"
  },

  // 25 New entries
  // Easy (10 total: 2 existing + 8 new)
  {
    word: "Fenster",
    level: "easy",
    options: ["Latein", "Deutsch", "Griechisch", "Französisch"],
    answer: "Latein",
    detail: "Aus dem lateinischen fenestra ins Althochdeutsche übernommen, wo es das germanische Windauge ersetzte.",
    path: "Latein (fenestra) → Althochdeutsch (fenstra) → Fenster"
  },
  {
    word: "Schule",
    level: "easy",
    options: ["Griechisch", "Latein", "Deutsch", "Französisch"],
    answer: "Griechisch",
    detail: "Über das lateinische schola vom griechischen scholē abgeleitet, was ursprünglich freie Zeit oder Muße bedeutete.",
    path: "Griechisch (scholē) → Latein (schola) → Schule"
  },
  {
    word: "Mauer",
    level: "easy",
    options: ["Latein", "Deutsch", "Keltisch", "Französisch"],
    answer: "Latein",
    detail: "Entlehnt aus dem lateinischen murus beim Bau romanischer Steinbauten in den germanischen Provinzen.",
    path: "Latein (murus) → Althochdeutsch (mūra) → Mauer"
  },
  {
    word: "Balkon",
    level: "easy",
    options: ["Französisch", "Italienisch", "Latein", "Deutsch"],
    answer: "Französisch",
    detail: "Im 18. Jahrhundert aus dem französischen balcon übernommen, das seinerseits vom italienischen balcone stammt.",
    path: "Lombardisch → Italienisch (balcone) → Französisch (balcon) → Balkon"
  },
  {
    word: "Restaurant",
    level: "easy",
    options: ["Französisch", "Latein", "Italienisch", "Englisch"],
    answer: "Französisch",
    detail: "Partizip des französischen Verbs restaurer (stärken), das ursprünglich eine stärkende Kraftbrühe bezeichnete.",
    path: "Französisch (restaurant) → Restaurant"
  },
  {
    word: "Handy",
    level: "easy",
    options: ["Englisch", "Deutsch", "Französisch", "Latein"],
    answer: "Englisch",
    detail: "Ein bekannter Scheinanglizismus im Deutschen; im englischen Sprachraum bedeutet handy handlich oder nützlich.",
    path: "Englisch (handy) → Pseudo-Anglizismus Deutsch Handy",
    tags: ["false-friend-candidate"]
  },
  {
    word: "Computer",
    level: "easy",
    options: ["Englisch", "Latein", "Französisch", "Deutsch"],
    answer: "Englisch",
    detail: "Aus dem englischen computer übernommen, das wiederum auf das lateinische computare (berechnen) zurückgeht.",
    path: "Latein (computare) → Englisch (computer) → Computer"
  },
  {
    word: "Bibliothek",
    level: "easy",
    options: ["Griechisch", "Latein", "Französisch", "Deutsch"],
    answer: "Griechisch",
    detail: "Aus dem altgriechischen bibliothēkē, zusammengesetzt aus biblion (Buch) und thēkē (Behältnis).",
    path: "Griechisch (biblion + thēkē) → Latein → Bibliothek"
  },

  // Medium (10 total: 3 existing + 7 new)
  {
    word: "Grenze",
    level: "medium",
    options: ["Slawisch", "Deutsch", "Latein", "Französisch"],
    answer: "Slawisch",
    detail: "Im Mittelalter aus dem Altpolnischen granica entlehnt, wo es das ältere germanische Mark ersetzte.",
    path: "Altpolnisch (granica) → Mittelhochdeutsch (grenize) → Grenze"
  },
  {
    word: "Gurke",
    level: "medium",
    options: ["Slawisch", "Griechisch", "Latein", "Deutsch"],
    answer: "Slawisch",
    detail: "Aus dem Altpolnischen ogórek entlehnt, das letztlich auf das mittelgriechische angouria zurückgeht.",
    path: "Griechisch (angouria) → Altpolnisch (ogórek) → Gurke"
  },
  {
    word: "Tschüs",
    level: "medium",
    options: ["Latein", "Deutsch", "Niederländisch", "Französisch"],
    answer: "Latein",
    detail: "Über das niederdeutsche atschess aus dem romanischen adieu (Gott befohlen) im norddeutschen Raum entstanden.",
    path: "Latein (ad Deum) → Französisch (adieu) → Niederdeutsch (atjes) → Tschüs"
  },
  {
    word: "Kiez",
    level: "medium",
    options: ["Slawisch", "Deutsch", "Jiddisch", "Niederländisch"],
    answer: "Slawisch",
    detail: "Ursprünglich eine slawische Fischer- oder Handwerkersiedlung nahe einer Burg im nordostdeutschen Raum.",
    path: "Slawisch (kyc) → Mittelniederdeutsch → Kiez"
  },
  {
    word: "Trottoir",
    level: "medium",
    options: ["Französisch", "Latein", "Deutsch", "Niederländisch"],
    answer: "Französisch",
    detail: "Im 18. und 19. Jahrhundert als höfisches Modewort aus dem Französischen für den Gehweg übernommen.",
    path: "Französisch (trottoir) → Trottoir"
  },
  {
    word: "Schlamassel",
    level: "medium",
    options: ["Jiddisch", "Deutsch", "Hebräisch", "Slawisch"],
    answer: "Jiddisch",
    detail: "Aus dem Jiddischen zusammengesetzt aus deutsch schlimm und hebräisch masal (Glück oder Sternzeichen).",
    path: "Hebräisch/Jiddisch (schlimm + masal) → Schlamassel"
  },
  {
    word: "Portemonnaie",
    level: "medium",
    options: ["Französisch", "Latein", "Italienisch", "Deutsch"],
    answer: "Französisch",
    detail: "Aus dem Französischen porter (tragen) und monnaie (Münze/Geld) ins Deutsche entlehnt.",
    path: "Französisch (porter + monnaie) → Portemonnaie"
  },

  // Hard (10 total: 10 new)
  {
    word: "Quark",
    level: "hard",
    options: ["Slawisch", "Deutsch", "Latein", "Ungarisch"],
    answer: "Slawisch",
    detail: "Im Spätmittelalter aus dem Altslawischen tvarog (Käse/Molkeprodukt) ins Mittelhochdeutsche gelangt.",
    path: "Altslawisch (tvarog) → Mittelhochdeutsch (twarc) → Quark"
  },
  {
    word: "Droschke",
    level: "hard",
    options: ["Russisch", "Deutsch", "Polnisch", "Französisch"],
    answer: "Russisch",
    detail: "Aus dem russischen droschki für leichte Kutschen zur Zarenzeit im 19. Jahrhundert übernommen.",
    path: "Russisch (drožki) → Droschke"
  },
  {
    word: "Meschugge",
    level: "hard",
    options: ["Jiddisch", "Hebräisch", "Deutsch", "Arabisch"],
    answer: "Jiddisch",
    detail: "Über das Jiddische aus dem hebräischen m'shuga (verrückt oder verwirrt) in die deutsche Umgangssprache eingegangen.",
    path: "Hebräisch (m'shuga) → Jiddisch (meschugge) → Meschugge"
  },
  {
    word: "Zoff",
    level: "hard",
    options: ["Jiddisch", "Deutsch", "Slawisch", "Romani"],
    answer: "Jiddisch",
    detail: "Entstammt der rotwelschen und jiddischen Gaunersprache, abgeleitet vom hebräischen sof für Ende oder Streitpunkt.",
    path: "Hebräisch (sof) → Jiddisch → Rotwelsch → Zoff"
  },
  {
    word: "Etage",
    level: "hard",
    options: ["Französisch", "Latein", "Italienisch", "Deutsch"],
    answer: "Französisch",
    detail: "Aus dem französischen étage (Geschoss/Stockwerk), abgeleitet vom altfranzösischen estage (Standort).",
    path: "Latein (stare) → Altfranzösisch (estage) → Etage"
  },
  {
    word: "Filosofie",
    level: "hard",
    options: ["Griechisch", "Latein", "Deutsch", "Französisch"],
    answer: "Griechisch",
    detail: "Aus dem Altgriechischen philosophia, zusammengesetzt aus philos (Freund/Liebhaber) und sophia (Weisheit).",
    path: "Griechisch (philos + sophia) → Latein → Philosophie"
  },
  {
    word: "Apotheke",
    level: "hard",
    options: ["Griechisch", "Latein", "Arabisch", "Deutsch"],
    answer: "Griechisch",
    detail: "Geht auf das griechische apothēkē (Lagerraum oder Vorratskammer) zurück, das im Mittelalter Medizinlager bezeichnete.",
    path: "Griechisch (apothēkē) → Latein (apotheca) → Apotheke"
  },
  {
    word: "Gulasch",
    level: "hard",
    options: ["Ungarisch", "Tschechisch", "Deutsch", "Türkisch"],
    answer: "Ungarisch",
    detail: "Im 19. Jahrhundert aus dem ungarischen gulyásleves (Rinderhirtenfleisch) in die österreichische und deutsche Küche eingewandert.",
    path: "Ungarisch (gulyás) → Deutsch Gulasch"
  },
  {
    word: "Dolmetscher",
    level: "hard",
    options: ["Türkisch", "Slawisch", "Deutsch", "Ungarisch"],
    answer: "Türkisch",
    detail: "Über das Altpolnische tlumacz aus dem Türkischen tilmaci (Sprachmittler/Übersetzer) im Mittelalter entlehnt.",
    path: "Türkisch (tilmaci) → Altpolnisch → Mittelhochdeutsch (tulmetsche) → Dolmetscher"
  },
  {
    word: "Krawatte",
    level: "hard",
    options: ["Kroatisch", "Französisch", "Italienisch", "Deutsch"],
    answer: "Kroatisch",
    detail: "Nach den kroatischen Söldnern (à la croate) benannt, die im 17. Jahrhundert charakteristische Halstücher in Frankreich trugen.",
    path: "Kroatisch (Hrvat) → Französisch (cravate) → Krawatte"
  }
];

const filePath = path.join(__dirname, '..', 'data', 'de', 'game_data.js');
let content = fs.readFileSync(filePath, 'utf8');

const window = {};
eval(content);
const data = window.gameData['de'];
data.etymology = deEntries;

const formattedContent = `(function() {
    const data = ${JSON.stringify(data, null, 6)};

    window.gameData = window.gameData || {};
    window.gameData['de'] = data;
})();`;

fs.writeFileSync(filePath, formattedContent, 'utf8');
console.log(`Successfully formatted data/de/game_data.js with ${deEntries.length} etymology entries!`);
