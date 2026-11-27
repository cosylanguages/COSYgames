(function() {
    const doubletsData = [
      {
        language: "en",
        wordA: "Hospital",
        wordB: "Hotel",
        commonRoot: "Latin hospes (host/guest)",
        options: ["Latin hospes (host/guest)", "Greek xenos (stranger)", "Germanic gast (guest)", "Arabic ffunduq (inn)"],
        detail: "Both words derive from Latin hospes. 'Hospital' entered English via Old French, while 'hotel' was re-borrowed later from French hôtel."
      },
      {
        language: "en",
        wordA: "Chef",
        wordB: "Chief",
        commonRoot: "Latin caput (head)",
        options: ["Latin caput (head)", "Old Norse höfuð (head)", "Greek kephale (head)", "Germanic kopf (head)"],
        detail: "Both come from French chef (head/leader), which comes from Latin caput. 'Chief' entered English in Middle English; 'chef' was borrowed later in the culinary sense."
      },
      {
        language: "fr",
        wordA: "Hôpital",
        wordB: "Hôtel",
        commonRoot: "Latin hospitale (guest house)",
        options: ["Latin hospitale (guest house)", "Grec xenia (hospitalité)", "Francique heriberga (auberge)", "Arabe founsdouq (hôtellerie)"],
        detail: "'Hôpital' stayed close to ecclesiastical Latin, whereas 'hôtel' underwent sound changes (hospitale -> hostel -> hôtel)."
      },
      {
        language: "fr",
        wordA: "Chaire",
        wordB: "Chaise",
        commonRoot: "Grec kathedra (siège/chaire)",
        options: ["Grec kathedra (siège/chaire)", "Latin catena (chaîne)", "Gaulois casso (siège)", "Francique kisa (boîte)"],
        detail: "Both originate from Greek kathedra. 'Chaire' was the learned form (professorial chair/pulpit), while 'chaise' was the popular Parisian pronunciation for a chair."
      },
      {
        language: "es",
        wordA: "Cátedra",
        wordB: "Cadera",
        commonRoot: "Griego kathedra (asiento/silla)",
        options: ["Griego kathedra (asiento/silla)", "Latín catena (cadena)", "Árabe kursi (silla)", "Latín caput (cabeza)"],
        detail: "Cátedra is the learned Latin borrowing (academic chair), while cadera (hip/seat) is the popular Spanish phonetic evolution."
      },
      {
        language: "es",
        wordA: "Llave",
        wordB: "Clave",
        commonRoot: "Latín clavis (llave/código)",
        options: ["Latín clavis (llave/código)", "Griego kleis (cierre)", "Árabe qufl (candado)", "Gótico klei (gancho)"],
        detail: "'Llave' is the sound-evolved vernacular word for key, whereas 'clave' is the cultismo (learned borrowing) meaning code or key point."
      },
      {
        language: "it",
        wordA: "Pieve",
        wordB: "Plebe",
        commonRoot: "Latino plebs (popolo/gente)",
        options: ["Latino plebs (popolo/gente)", "Greco polis (città)", "Longobardo folk (gente)", "Latino publica (pubblico)"],
        detail: "'Pieve' (parish church of the people) is the popular Italian development, while 'plebe' (common people) is the learned restoration."
      },
      {
        language: "it",
        wordA: "Fabbrica",
        wordB: "Forge (Fregia)",
        commonRoot: "Latino fabrica (officina)",
        options: ["Latino fabrica (officina)", "Greco technē (arte)", "Germanico werk (lavoro)", "Arabe makhzan (deposito)"],
        detail: "'Fabbrica' is the direct/learned Latin term for factory/building, while 'forgia' came back via French forge."
      },
      {
        language: "de",
        wordA: "Kavalier",
        wordB: "Chevalier",
        commonRoot: "Spätlatein caballarius (Reiter)",
        options: ["Spätlatein caballarius (Reiter)", "Altgriechisch hippos (Pferd)", "Germanisch ridan (reiten)", "Arabisch faris (Ritter)"],
        detail: "Kavalier was borrowed from Italian cavaliere, whereas Chevalier was borrowed directly from French."
      },
      {
        language: "de",
        wordA: "Pfalz",
        wordB: "Palast",
        commonRoot: "Latein palatium (Kaiserpalast)",
        options: ["Latein palatium (Kaiserpalast)", "Griechisch polis (Stadt)", "Althochdeutsch pfalzen (bauen)", "Französisch palais"],
        detail: "'Pfalz' is an early Germanic loan from Latin palatium, while 'Palast' was borrowed later in the Middle Ages via French."
      },
      {
        language: "ru",
        wordA: "Город (Gorod)",
        wordB: "Град (Grad)",
        commonRoot: "Праславянское *gordъ (огороженное место)",
        options: ["Праславянское *gordъ (огороженное место)", "Греческое polis", "Латинское hortus", "Тюркское qala"],
        detail: "'Город' — полногласная русская народная форма, а 'град' — старославянское книжное заимствование (как в Волгоград)."
      },
      {
        language: "ru",
        wordA: "Голова (Golova)",
        wordB: "Глава (Glava)",
        commonRoot: "Праславянское *golva",
        options: ["Праславянское *golva", "Латинское caput", "Греческое kephale", "Тюркское bas"],
        detail: "'Голова' — исконно русское слово (часть тела), 'глава' — церковнославянское слово (глава книги, глава государства)."
      },
      {
        language: "pt",
        wordA: "Chave",
        wordB: "Clave",
        commonRoot: "Latim clavis (chave)",
        options: ["Latim clavis (chave)", "Grego kleis (fecho)", "Árabe qufl (cadeado)", "Gótico klei"],
        detail: "'Chave' é a evolução popular vernácula do latim clavis, enquanto 'clave' é a forma erudita mantida na música (clave de sol)."
      },
      {
        language: "en",
        wordA: "Guarantee",
        wordB: "Warranty",
        commonRoot: "Frankish *werento (authorization/pledge)",
        options: ["Frankish *werento (authorization/pledge)", "Latin garantia", "Greek engye", "Old Norse varða"],
        detail: "'Warranty' entered English from Northern Norman French (w-), while 'guarantee' entered later from Central Parisian French (g-)."
      },
      {
        language: "en",
        wordA: "Shadow",
        wordB: "Shade",
        commonRoot: "Old English sceadu (darkness/cover)",
        options: ["Old English sceadu (darkness/cover)", "Latin umbra", "Greek skia", "Old Norse skuggi"],
        detail: "'Shade' comes from the Old English nominative 'sceadu', while 'shadow' comes from the inflected dative form 'sceadwe'."
      }
    ];

    if (typeof window !== 'undefined') {
        window.doubletsData = doubletsData;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = doubletsData;
    }
})();
