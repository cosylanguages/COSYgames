(function() {
    const level = "upper_intermediate";
    const data = [
        {
            concept: "Death",
            emoji: "💀",
            translations: {
                fr: { word: "mort", article: "la", gender: "feminine" },
                es: { word: "muerte", article: "la", gender: "feminine" },
                it: { word: "morte", article: "la", gender: "feminine" },
                de: { word: "Tod", article: "der", gender: "masculine" },
                ru: { word: "смерть", article: "", gender: "feminine" },
                el: { word: "θάνατος", article: "ο", gender: "masculine" },
                br: { word: "marv", article: "ar", gender: "masculine" }
            },
            explanation: "In Latin, 'mors' (f) gave feminine words to Romance languages, and Slavic 'смерть' (f) is also feminine. However, in Greek mythology, Death is personified as the male deity Thanatos, hence Greek 'θάνατος' is masculine! German 'Tod' is masculine from Proto-Germanic '*dauþuz'. Breton 'marv' is also masculine."
        },
        {
            concept: "Freedom",
            emoji: "🗽",
            translations: {
                fr: { word: "liberté", article: "la", gender: "feminine" },
                es: { word: "libertad", article: "la", gender: "feminine" },
                it: { word: "libertà", article: "la", gender: "feminine" },
                de: { word: "Freiheit", article: "die", gender: "feminine" },
                ru: { word: "свобода", article: "", gender: "feminine" },
                el: { word: "ελευθερία", article: "η", gender: "feminine" },
                br: { word: "frankiz", article: "ar", gender: "feminine" }
            },
            explanation: "Much like 'truth', the abstract concept of 'freedom' is personified as a female virtue and is universally feminine! French, Italian, Spanish, German, Russian, Greek, and Breton are all feminine, showing incredible conceptual consistency across these languages."
        },
        {
            concept: "Love",
            emoji: "💖",
            translations: {
                fr: { word: "amour", article: "l'", gender: "masculine" },
                es: { word: "amor", article: "el", gender: "masculine" },
                it: { word: "amore", article: "l'", gender: "masculine" },
                de: { word: "Liebe", article: "die", gender: "feminine" },
                ru: { word: "любовь", article: "", gender: "feminine" },
                el: { word: "αγάπη", article: "η", gender: "feminine" },
                br: { word: "karantez", article: "ar", gender: "feminine" }
            },
            explanation: "Latin 'amor' was masculine, giving masculine 'amore/amor' in Italian and Spanish. French 'amour' is masculine in the singular, but in classical literary French, it could be feminine in the plural! German 'Liebe', Russian 'любовь' (third declension), Greek 'αγάπη', and Breton 'karantez' are all feminine."
        },
        {
            concept: "Peace",
            emoji: "🕊️",
            translations: {
                fr: { word: "paix", article: "la", gender: "feminine" },
                es: { word: "paz", article: "la", gender: "feminine" },
                it: { word: "pace", article: "la", gender: "feminine" },
                de: { word: "Frieden", article: "der", gender: "masculine" },
                ru: { word: "мир", article: "", gender: "masculine" },
                el: { word: "ειρήνη", article: "η", gender: "feminine" },
                br: { word: "peoc'h", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'pax' (f) gave feminine words to Romance languages. Greek 'ειρήνη' is feminine (personified as the goddess Eirene). However, German 'Frieden' is masculine (related to safety/protection), Russian 'мир' is masculine (consonant ending), and Breton 'peoc'h' is masculine."
        },
        {
            concept: "Law",
            emoji: "⚖️",
            translations: {
                fr: { word: "loi", article: "la", gender: "feminine" },
                es: { word: "ley", article: "la", gender: "feminine" },
                it: { word: "legge", article: "la", gender: "feminine" },
                de: { word: "Gesetz", article: "das", gender: "neuter" },
                ru: { word: "закон", article: "", gender: "masculine" },
                el: { word: "νόμος", article: "ο", gender: "masculine" },
                br: { word: "lezenn", article: "al", gender: "feminine" }
            },
            explanation: "Latin 'lex' (law) was feminine, hence feminine 'loi/legge/ley' in Romance languages and 'lezenn' in Breton. German 'Gesetz' is neuter, derived from 'setzen' (to set/place). Russian 'закон' is masculine. Greek 'νόμος' is masculine, from 'nemein' (to distribute)."
        },
        {
            concept: "Shadow",
            emoji: "👤",
            translations: {
                fr: { word: "ombre", article: "l'", gender: "feminine" },
                es: { word: "sombra", article: "la", gender: "feminine" },
                it: { word: "ombra", article: "l'", gender: "feminine" },
                de: { word: "Schatten", article: "der", gender: "masculine" },
                ru: { word: "тень", article: "", gender: "feminine" },
                el: { word: "σκιά", article: "η", gender: "feminine" },
                br: { word: "disheol", article: "an", gender: "masculine" }
            },
            explanation: "Latin 'umbra' (f) gave feminine words to Romance languages. Russian 'тень' and Greek 'σκιά' are also feminine. But German 'Schatten' is masculine from Proto-Germanic '*skadwaz'. Breton 'disheol' (literally 'un-sun') is masculine."
        },
        {
            concept: "World",
            emoji: "🌍",
            translations: {
                fr: { word: "monde", article: "le", gender: "masculine" },
                es: { word: "mundo", article: "el", gender: "masculine" },
                it: { word: "mondo", article: "il", gender: "masculine" },
                de: { word: "Welt", article: "die", gender: "feminine" },
                ru: { word: "мир", article: "", gender: "masculine" },
                el: { word: "κόσμος", article: "ο", gender: "masculine" },
                br: { word: "bed", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'mundus' (clean, orderly, universe) was masculine, preserving masculine gender in French, Spanish, and Italian. Greek 'κόσμος' has the same meaning (order/ornament) and is masculine. Russian 'мир' is masculine. German 'Welt' is feminine, from Old High German 'weralt' (literally 'age of man' or 'man-era')."
        },
        {
            concept: "Dream",
            emoji: "💭",
            translations: {
                fr: { word: "rêve", article: "le", gender: "masculine" },
                es: { word: "sueño", article: "el", gender: "masculine" },
                it: { word: "sogno", article: "il", gender: "masculine" },
                de: { word: "Traum", article: "der", gender: "masculine" },
                ru: { word: "мечта", article: "", gender: "feminine" },
                el: { word: "όνειρο", article: "το", gender: "neuter" },
                br: { word: "huñvre", article: "an", gender: "masculine" }
            },
            explanation: "Latin 'somnium' (dream) was neuter, shifting to masculine 'sueño' and 'sogno' in Spanish and Italian. French 'rêve' (from 'rêver', to wander/rave) is masculine. German 'Traum' is masculine, from Proto-Germanic '*draumaz'. Greek 'όνειρο' is neuter. Russian 'мечта' (hopeful dream) is feminine, though 'сон' (sleep/sleep-dream) is masculine."
        },
        {
            concept: "Memory",
            emoji: "🧠",
            translations: {
                fr: { word: "mémoire", article: "la", gender: "feminine" },
                es: { word: "memoria", article: "la", gender: "feminine" },
                it: { word: "memoria", article: "la", gender: "feminine" },
                de: { word: "Gedächtnis", article: "das", gender: "neuter" },
                ru: { word: "память", article: "", gender: "feminine" },
                el: { word: "μνήμη", article: "η", gender: "feminine" },
                br: { word: "eñvor", article: "an", gender: "masculine" }
            },
            explanation: "Abstract capacity for recollection is widely feminine! Latin 'memoria' (f), Russian 'память' (f, 3rd declension), and Greek 'μνήμη' (f) are feminine. German 'Gedächtnis' is neuter due to the prefix 'Ge-' and suffix '-nis'."
        },
        {
            concept: "Journey",
            emoji: "🧳",
            translations: {
                fr: { word: "voyage", article: "le", gender: "masculine" },
                es: { word: "viaje", article: "el", gender: "masculine" },
                it: { word: "viaggio", article: "il", gender: "masculine" },
                de: { word: "Reise", article: "die", gender: "feminine" },
                ru: { word: "путешествие", article: "", gender: "neuter" },
                el: { word: "ταξίδι", article: "το", gender: "neuter" },
                br: { word: "veaj", article: "ar", gender: "feminine" }
            },
            explanation: "Romance words like 'voyage' come from Latin 'viaticum' (travel provisions), which was neuter and shifted to masculine. German 'Reise' is feminine. Russian 'путешествие' is neuter ending in '-ие'. Greek 'ταξίδι' is neuter, coming from Byzantine Greek 'taxidion' (military campaign/order)."
        },
        {
            concept: "Light",
            emoji: "💡",
            translations: {
                fr: { word: "lumière", article: "la", gender: "feminine" },
                es: { word: "luz", article: "la", gender: "feminine" },
                it: { word: "luce", article: "la", gender: "feminine" },
                de: { word: "Licht", article: "das", gender: "neuter" },
                ru: { word: "свет", article: "", gender: "masculine" },
                el: { word: "φως", article: "το", gender: "neuter" },
                br: { word: "gouloù", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'lux' was feminine, preserving feminine gender in French, Spanish, and Italian. German 'Licht' and Greek 'φως' are neuter. Russian 'свет' is masculine by phonetic ending."
        },
        {
            concept: "Mind / Spirit",
            emoji: "👻",
            translations: {
                fr: { word: "esprit", article: "l'", gender: "masculine" },
                es: { word: "espíritu", article: "el", gender: "masculine" },
                it: { word: "spirito", article: "lo", gender: "masculine" },
                de: { word: "Geist", article: "der", gender: "masculine" },
                ru: { word: "дух", article: "", gender: "masculine" },
                el: { word: "πνεύμα", article: "το", gender: "neuter" },
                br: { word: "spered", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'spiritus' was masculine, preserving masculine gender in Romance. German 'Geist' and Russian 'дух' are masculine. Greek 'πνεύμα' is neuter due to the '-μα' suffix."
        },
        {
            concept: "Mirror",
            emoji: "🪞",
            translations: {
                fr: { word: "miroir", article: "le", gender: "masculine" },
                es: { word: "espejo", article: "el", gender: "masculine" },
                it: { word: "specchio", article: "lo", gender: "masculine" },
                de: { word: "Spiegel", article: "der", gender: "masculine" },
                ru: { word: "зеркало", article: "", gender: "neuter" },
                el: { word: "καθρέφτης", article: "ο", gender: "masculine" },
                br: { word: "melezour", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'speculum' was neuter, shifting to masculine in Romance ('miroir', 'espejo', 'specchio'). German 'Spiegel' is masculine. Russian 'зеркало' is neuter. Greek 'καθρέφτης' is masculine."
        },
        {
            concept: "Secret",
            emoji: "🤫",
            translations: {
                fr: { word: "secret", article: "le", gender: "masculine" },
                es: { word: "secreto", article: "el", gender: "masculine" },
                it: { word: "segreto", article: "il", gender: "masculine" },
                de: { word: "Geheimnis", article: "das", gender: "neuter" },
                ru: { word: "секрет", article: "", gender: "masculine" },
                el: { word: "μυστικό", article: "το", gender: "neuter" },
                br: { word: "sekred", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'secretum' was neuter, shifting to masculine in French, Spanish, Italian, Russian, and Breton. German 'Geheimnis' is neuter due to the '-nis' suffix. Greek 'μυστικό' is neuter."
        },
        {
            concept: "Ocean",
            emoji: "🌊",
            translations: {
                fr: { word: "océan", article: "l'", gender: "masculine" },
                es: { word: "océano", article: "el", gender: "masculine" },
                it: { word: "oceano", article: "l'", gender: "masculine" },
                de: { word: "Ozean", article: "der", gender: "masculine" },
                ru: { word: "океан", article: "", gender: "masculine" },
                el: { word: "ωκεανός", article: "ο", gender: "masculine" },
                br: { word: "meurvor", article: "ar", gender: "masculine" }
            },
            explanation: "Historically personified as the titan Oceanus in Greek mythology, the word 'ωκεανός' has always been masculine, which is perfectly preserved across French, Spanish, Italian, German, Russian, Greek, and Breton!"
        },
        {
            concept: "Forest",
            emoji: "🌲",
            translations: {
                fr: { word: "forêt", article: "la", gender: "feminine" },
                es: { word: "bosque", article: "el", gender: "masculine" },
                it: { word: "foresta", article: "la", gender: "feminine" },
                de: { word: "Wald", article: "der", gender: "masculine" },
                ru: { word: "лес", article: "", gender: "masculine" },
                el: { word: "δάσος", article: "το", gender: "neuter" },
                br: { word: "koad", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'forestis' (silva) shifted to feminine in French ('forêt') and Italian ('foresta'). Spanish 'bosque' (m), German 'Wald' (m), Russian 'лес' (m), and Breton 'koad' (m) are masculine. Greek 'δάσος' is neuter."
        },
        {
            concept: "Ice",
            emoji: "❄️",
            translations: {
                fr: { word: "glace", article: "la", gender: "feminine" },
                es: { word: "hielo", article: "el", gender: "masculine" },
                it: { word: "ghiaccio", article: "il", gender: "masculine" },
                de: { word: "Eis", article: "das", gender: "neuter" },
                ru: { word: "лёд", article: "", gender: "masculine" },
                el: { word: "πάγος", article: "ο", gender: "masculine" },
                br: { word: "skorn", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'glacies' (f) gave feminine 'glace' to French. Spanish 'hielo' and Italian 'ghiaccio' shifted to masculine. German 'Eis' is neuter. Russian 'лёд', Greek 'πάγος', and Breton 'skorn' are masculine."
        },
        {
            concept: "Winter",
            emoji: "☃️",
            translations: {
                fr: { word: "hiver", article: "l'", gender: "masculine" },
                es: { word: "invierno", article: "el", gender: "masculine" },
                it: { word: "inverno", article: "l'", gender: "masculine" },
                de: { word: "Winter", article: "der", gender: "masculine" },
                ru: { word: "зима", article: "", gender: "feminine" },
                el: { word: "χειμώνας", article: "ο", gender: "masculine" },
                br: { word: "goañv", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'hibernum' was neuter, shifting to masculine 'hiver/invierno/inverno' in Romance. German 'Winter', Greek 'χειμώνας', and Breton 'goañv' are masculine. Russian 'зима' is feminine."
        }
    ];
    window.genderGameData = window.genderGameData || {};
    window.genderGameData[level] = data;
})();
