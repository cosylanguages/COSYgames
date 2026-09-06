(function() {
    const level = "intermediate";
    const data = [
        {
            concept: "City",
            emoji: "🏙️",
            translations: {
                fr: { word: "ville", article: "la", gender: "feminine" },
                es: { word: "ciudad", article: "la", gender: "feminine" },
                it: { word: "città", article: "la", gender: "feminine" },
                de: { word: "Stadt", article: "die", gender: "feminine" },
                ru: { word: "город", article: "", gender: "masculine" },
                el: { word: "πόλη", article: "η", gender: "feminine" },
                br: { word: "kêr", article: "ar", gender: "feminine" }
            },
            explanation: "Latin 'civitas' (citizenship, city) was feminine, leading to feminine words in Romance languages. German 'Stadt' is feminine from Proto-Germanic '*stads' (place, town). Greek 'πόλη' is feminine (from Ancient 'polis'). Russian 'город' is masculine because it phonetically ends in a consonant."
        },
        {
            concept: "Language / Tongue",
            emoji: "🗣️",
            translations: {
                fr: { word: "langue", article: "la", gender: "feminine" },
                es: { word: "lengua", article: "la", gender: "feminine" },
                it: { word: "lingua", article: "la", gender: "feminine" },
                de: { word: "Sprache", article: "die", gender: "feminine" },
                ru: { word: "язык", article: "", gender: "masculine" },
                el: { word: "γλώσσα", article: "η", gender: "feminine" },
                br: { word: "yezh", article: "ar", gender: "feminine" }
            },
            explanation: "Latin 'lingua' (tongue, language) was feminine, so Romance languages kept it feminine. German 'Sprache' is feminine, derived from 'sprechen' (to speak). Greek 'γλώσσα' is feminine. Russian 'язык' (tongue/language) is masculine because of its ending in a consonant."
        },
        {
            concept: "Bridge",
            emoji: "🌉",
            translations: {
                fr: { word: "pont", article: "le", gender: "masculine" },
                es: { word: "puente", article: "el", gender: "masculine" },
                it: { word: "ponte", article: "il", gender: "masculine" },
                de: { word: "Brücke", article: "die", gender: "feminine" },
                ru: { word: "мост", article: "", gender: "masculine" },
                el: { word: "γέφυρα", article: "η", gender: "feminine" },
                br: { word: "pont", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'pons' (bridge) was masculine, preserving masculine gender in French, Italian, Spanish, and Breton. German 'Brücke' is feminine from Old High German 'brucca'. Russian 'мост' is masculine. Greek 'γέφυρα' has been feminine since antiquity."
        },
        {
            concept: "Heart",
            emoji: "❤️",
            translations: {
                fr: { word: "cœur", article: "le", gender: "masculine" },
                es: { word: "corazón", article: "el", gender: "masculine" },
                it: { word: "cuore", article: "il", gender: "masculine" },
                de: { word: "Herz", article: "das", gender: "neuter" },
                ru: { word: "сердце", article: "", gender: "neuter" },
                el: { word: "καρδιά", article: "η", gender: "feminine" },
                br: { word: "kalon", article: "ar", gender: "feminine" }
            },
            explanation: "Proto-Indo-European '*kērd' was neuter. Latin 'cor' (neuter) shifted to masculine in Romance languages ('cœur', 'cuore', 'corazón'). German 'Herz' and Russian 'сердце' preserved the original neuter gender. Greek 'καρδιά' evolved into a feminine noun, as did Breton 'kalon'."
        },
        {
            concept: "Truth",
            emoji: "⚖️",
            translations: {
                fr: { word: "vérité", article: "la", gender: "feminine" },
                es: { word: "verdad", article: "la", gender: "feminine" },
                it: { word: "verità", article: "la", gender: "feminine" },
                de: { word: "Wahrheit", article: "die", gender: "feminine" },
                ru: { word: "правда", article: "", gender: "feminine" },
                el: { word: "αλήθεια", article: "η", gender: "feminine" },
                br: { word: "gwirionez", article: "ar", gender: "feminine" }
            },
            explanation: "Abstract virtues are overwhelmingly feminine across Indo-European languages! Latin 'veritas' (f) gave feminine words in Romance. German suffix '-heit' forms feminine nouns. Russian 'правда' ends in '-а' (f). Greek 'αλήθεια' and Breton 'gwirionez' are also feminine, reinforcing this cross-linguistic pattern."
        },
        {
            concept: "Problem",
            emoji: "🧩",
            translations: {
                fr: { word: "problème", article: "le", gender: "masculine" },
                es: { word: "problema", article: "el", gender: "masculine" },
                it: { word: "problema", article: "il", gender: "masculine" },
                de: { word: "Problem", article: "das", gender: "neuter" },
                ru: { word: "проблема", article: "", gender: "feminine" },
                el: { word: "πρόβλημα", article: "το", gender: "neuter" },
                br: { word: "kudenn", article: "ar", gender: "feminine" }
            },
            explanation: "Originally Greek 'próblēma' (neuter), meaning 'something thrown forward'. German and Greek keep the neuter. Because French, Italian, and Spanish lack neuter genders, they treated it as masculine (giving 'el problema' in Spanish, an exception to the '-a' feminine rule!). Russian, however, transformed it into a feminine noun ('проблема') due to the '-а' ending."
        },
        {
            concept: "Sky",
            emoji: "🌌",
            translations: {
                fr: { word: "ciel", article: "le", gender: "masculine" },
                es: { word: "cielo", article: "el", gender: "masculine" },
                it: { word: "cielo", article: "il", gender: "masculine" },
                de: { word: "Himmel", article: "der", gender: "masculine" },
                ru: { word: "небо", article: "", gender: "neuter" },
                el: { word: "ουρανός", article: "ο", gender: "masculine" },
                br: { word: "neñv", article: "an", gender: "masculine" }
            },
            explanation: "Latin 'caelum' was neuter, but shifted to masculine in Romance languages. German 'Himmel' is masculine, from Proto-Germanic '*himinaz'. Russian 'небо' is neuter due to the '-о' ending. Greek 'ουρανός' is masculine (historically personified as Ouranos, god of the sky)."
        },
        {
            concept: "Earth",
            emoji: "🌍",
            translations: {
                fr: { word: "terre", article: "la", gender: "feminine" },
                es: { word: "tierra", article: "la", gender: "feminine" },
                it: { word: "terra", article: "la", gender: "feminine" },
                de: { word: "Erde", article: "die", gender: "feminine" },
                ru: { word: "земля", article: "", gender: "feminine" },
                el: { word: "γη", article: "η", gender: "feminine" },
                br: { word: "douar", article: "an", gender: "masculine" }
            },
            explanation: "Linguistic personification of Earth as a mother deity makes this concept overwhelmingly feminine across many families! Latin 'terra', German 'Erde', Russian 'земля', and Greek 'γη' are all feminine. Breton 'douar' is an exception, being masculine."
        },
        {
            concept: "Book",
            emoji: "📖",
            translations: {
                fr: { word: "livre", article: "le", gender: "masculine" },
                es: { word: "libro", article: "el", gender: "masculine" },
                it: { word: "libro", article: "il", gender: "masculine" },
                de: { word: "Buch", article: "das", gender: "neuter" },
                ru: { word: "книга", article: "", gender: "feminine" },
                el: { word: "βιβλίο", article: "το", gender: "neuter" },
                br: { word: "levr", article: "al", gender: "masculine" }
            },
            explanation: "Latin 'liber' was masculine, so the Romance languages have masculine words. German 'Buch' is neuter, coming from the wood of the beech tree on which runes were carved. Russian 'книга' is feminine, borrowed from ancient Turkic/Bulgar roots. Greek 'βιβλίο' is neuter (originally a diminutive of 'byblos', papyrus)."
        },
        {
            concept: "House",
            emoji: "🏠",
            translations: {
                fr: { word: "maison", article: "la", gender: "feminine" },
                es: { word: "casa", article: "la", gender: "feminine" },
                it: { word: "casa", article: "la", gender: "feminine" },
                de: { word: "Haus", article: "das", gender: "neuter" },
                ru: { word: "дом", article: "le", gender: "masculine" },
                el: { word: "σπίτι", article: "το", gender: "neuter" },
                br: { word: "ti", article: "an", gender: "masculine" }
            },
            explanation: "Latin 'mansio' (stay, dwelling) and 'casa' (hut) were feminine, hence feminine Romance words. German 'Haus' is neuter. Russian 'дом' is masculine due to its consonant ending. Greek 'σπίτι' is neuter, derived from Latin 'hospitium' (hospitality/guest quarters)."
        },
        {
            concept: "River",
            emoji: "🏞️",
            translations: {
                fr: { word: "rivière", article: "la", gender: "feminine" },
                es: { word: "río", article: "el", gender: "masculine" },
                it: { word: "fiume", article: "il", gender: "masculine" },
                de: { word: "Fluss", article: "der", gender: "masculine" },
                ru: { word: "река", article: "", gender: "feminine" },
                el: { word: "ποτάμι", article: "το", gender: "neuter" },
                br: { word: "stêr", article: "ar", gender: "feminine" }
            },
            explanation: "Latin 'flumen' was neuter, shifting to masculine 'fiume' in Italian and 'río' in Spanish. French 'rivière' (bank/riparian) became feminine. German 'Fluss' is masculine. Russian 'река' is feminine. Greek 'ποτάμι' is neuter, from ancient 'potamos' (masculine)."
        },
        {
            concept: "Star",
            emoji: "⭐",
            translations: {
                fr: { word: "étoile", article: "l'", gender: "feminine" },
                es: { word: "estrella", article: "la", gender: "feminine" },
                it: { word: "stella", article: "l'", gender: "feminine" },
                de: { word: "Stern", article: "der", gender: "masculine" },
                ru: { word: "звезда", article: "", gender: "feminine" },
                el: { word: "αστέρι", article: "το", gender: "neuter" },
                br: { word: "steredenn", article: "ar", gender: "feminine" }
            },
            explanation: "Latin 'stella' was feminine, preserving feminine gender in Romance languages. German 'Stern' is masculine from Proto-Germanic '*sternō'. Russian 'звезда' is feminine. Greek 'αστέρι' is neuter. Breton 'steredenn' is feminine."
        },
        {
            concept: "Silver",
            emoji: "🥈",
            translations: {
                fr: { word: "argent", article: "l'", gender: "masculine" },
                es: { word: "plata", article: "la", gender: "feminine" },
                it: { word: "argento", article: "l'", gender: "masculine" },
                de: { word: "Silber", article: "das", gender: "neuter" },
                ru: { word: "серебро", article: "", gender: "neuter" },
                el: { word: "ασήμι", article: "το", gender: "neuter" },
                br: { word: "arc'hant", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'argentum' (silver) was neuter. Romance languages like French ('argent') and Italian ('argento') shifted it to masculine. Spanish 'plata' (derived from Vulgar Latin platea, 'sheet of metal') became feminine. German 'Silber' (n), Russian 'серебро' (n), and Greek 'ασήμι' (n) are neuter."
        },
        {
            concept: "Gold",
            emoji: "🪙",
            translations: {
                fr: { word: "or", article: "l'", gender: "masculine" },
                es: { word: "oro", article: "el", gender: "masculine" },
                it: { word: "oro", article: "l'", gender: "masculine" },
                de: { word: "Gold", article: "das", gender: "neuter" },
                ru: { word: "золото", article: "", gender: "neuter" },
                el: { word: "χρυσός", article: "ο", gender: "masculine" },
                br: { word: "aour", article: "an", gender: "masculine" }
            },
            explanation: "Latin 'aurum' was neuter, shifting to masculine 'or/oro' in Romance. German 'Gold' and Russian 'золото' are neuter. Greek 'χρυσός' is masculine."
        },
        {
            concept: "Iron",
            emoji: "⚙️",
            translations: {
                fr: { word: "fer", article: "le", gender: "masculine" },
                es: { word: "hierro", article: "el", gender: "masculine" },
                it: { word: "ferro", article: "il", gender: "masculine" },
                de: { word: "Eisen", article: "das", gender: "neuter" },
                ru: { word: "железо", article: "", gender: "neuter" },
                el: { word: "σίδερο", article: "το", gender: "neuter" },
                br: { word: "houarn", article: "an", gender: "masculine" }
            },
            explanation: "Latin 'ferrum' (iron) was neuter, becoming masculine 'fer/hierro/ferro' in Romance. German 'Eisen', Russian 'железо', and Greek 'σίδερο' are neuter."
        },
        {
            concept: "Window",
            emoji: "🪟",
            translations: {
                fr: { word: "fenêtre", article: "la", gender: "feminine" },
                es: { word: "ventana", article: "la", gender: "feminine" },
                it: { word: "finestra", article: "la", gender: "feminine" },
                de: { word: "Fenster", article: "das", gender: "neuter" },
                ru: { word: "окно", article: "", gender: "neuter" },
                el: { word: "παράθυρο", article: "το", gender: "neuter" },
                br: { word: "prenestr", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'fenestra' was feminine, preserving feminine gender in Romance. German 'Fenster' is neuter (borrowed from Latin). Russian 'окно' and Greek 'παράθυρο' are neuter."
        },
        {
            concept: "Door",
            emoji: "🚪",
            translations: {
                fr: { word: "porte", article: "la", gender: "feminine" },
                es: { word: "puerta", article: "la", gender: "feminine" },
                it: { word: "porta", article: "la", gender: "feminine" },
                de: { word: "Tür", article: "die", gender: "feminine" },
                ru: { word: "дверь", article: "", gender: "feminine" },
                el: { word: "πόρτα", article: "η", gender: "feminine" },
                br: { word: "dor", article: "an", gender: "feminine" }
            },
            explanation: "Consistently feminine! Latin 'porta', German 'Tür', Russian 'дверь', Greek 'πόρτα', and Breton 'dor' are all feminine, showing incredibly high stability for this household threshold concept."
        },
        {
            concept: "Key",
            emoji: "🔑",
            translations: {
                fr: { word: "clé", article: "la", gender: "feminine" },
                es: { word: "llave", article: "la", gender: "feminine" },
                it: { word: "chiave", article: "la", gender: "feminine" },
                de: { word: "Schlüssel", article: "der", gender: "masculine" },
                ru: { word: "ключ", article: "", gender: "masculine" },
                el: { word: "κλειδί", article: "το", gender: "neuter" },
                br: { word: "alc'hwez", article: "an", gender: "masculine" }
            },
            explanation: "Latin 'clavis' was feminine, so Romance kept it feminine (French, Spanish, Italian). German 'Schlüssel' (m) and Russian 'ключ' (m) are masculine. Greek 'κλειδί' is neuter."
        }
    ];
    window.genderGameData = window.genderGameData || {};
    window.genderGameData[level] = data;
})();
