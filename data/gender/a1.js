(function() {
    const level = "starter";
    const data = [
        {
                "concept": "Cat",
                "translations": {
                        "fr": {
                                "word": "chat",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "gato",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "gatto",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Katze",
                                "article": "die",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "кот",
                                "article": "",
                                "gender": "masculine"
                        },
                        "br": {
                                "word": "kazh",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Late Latin 'catus' was masculine, and French, Spanish, Italian, and Breton default to masculine for the general species. However, German 'Katze', Greek 'γάτα', and Russian 'кошка' default to the feminine form for the general species, highlighting how different languages choose different biological defaults!"
        },
        {
                "concept": "Question",
                "translations": {
                        "fr": {
                                "word": "demande",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "qué",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "domanda",
                                "article": "la",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: masculine or IT: feminine)."
        },
        {
                "concept": "Box",
                "translations": {
                        "fr": {
                                "word": "boîte",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "caja",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "scatola",
                                "article": "la",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: masculine or IT: feminine)."
        },
        {
                "concept": "Mum",
                "translations": {
                        "fr": {
                                "word": "tante",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "mujer",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "zia",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Frau",
                                "article": "die",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "мама",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "μαμά",
                                "article": "",
                                "gender": "masculine"
                        },
                        "br": {
                                "word": "maouez",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: feminine or IT: feminine). In Germanic roots, the word shifted or was established as German: feminine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Dad",
                "translations": {
                        "fr": {
                                "word": "oncle",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "marido",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "zio",
                                "article": "lo",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Mann",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "папа",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "μπαμπάς",
                                "article": "",
                                "gender": "masculine"
                        },
                        "br": {
                                "word": "gwaz",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Parent",
                "translations": {
                        "fr": {
                                "word": "parent",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "familia",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "genitore",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Familie",
                                "article": "die",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "семья",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "οικογένεια",
                                "article": "",
                                "gender": "masculine"
                        },
                        "br": {
                                "word": "familh",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: feminine or IT: masculine). In Germanic roots, the word shifted or was established as German: feminine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Friend",
                "translations": {
                        "fr": {
                                "word": "ami",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "amigo",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "amico",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Freund",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "друг",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "μαζί",
                                "article": "",
                                "gender": "masculine"
                        },
                        "br": {
                                "word": "mignon",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Baby",
                "translations": {
                        "fr": {
                                "word": "bébé",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "niño",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "neonato",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Kind",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "ребёнок",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "παιδί",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "bugel",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Niece",
                "translations": {
                        "fr": {
                                "word": "soeur",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "figlia",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "сестра",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "αδελφή",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or IT: feminine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Nephew",
                "translations": {
                        "fr": {
                                "word": "fils",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "figlio",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "брат",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "αδελφός",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Toe",
                "translations": {
                        "fr": {
                                "word": "orteil",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "pie",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "dito del piede",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Fuß",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "нога",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "πόδι",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "troad",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Body",
                "translations": {
                        "fr": {
                                "word": "voyageur",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "viaggiatore",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Mensch",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "голова",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "αφεντικό",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "den",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Tooth",
                "translations": {
                        "fr": {
                                "word": "dentiste",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "pasta de dientes",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "dentifricio",
                                "article": "il",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine)."
        },
        {
                "concept": "Hand",
                "translations": {
                        "fr": {
                                "word": "main",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "mano",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "mano",
                                "article": "la",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Hand",
                                "article": "die",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "χέρι",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "dorn",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: feminine or IT: masculine). In Germanic roots, the word shifted or was established as German: feminine. Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Knee",
                "translations": {
                        "fr": {
                                "word": "genou",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "pierna",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "ginocchio",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Bein",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "el": {
                                "word": "πόδι",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "gar",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: feminine or IT: masculine). In Germanic roots, the word shifted or was established as German: neuter. Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Eye",
                "translations": {
                        "fr": {
                                "word": "oeil",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "ojo",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "occhio",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Auge",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "глаз",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "μάτι",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "lagad",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Nose",
                "translations": {
                        "fr": {
                                "word": "nez",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "nariz",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "naso",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Nase",
                                "article": "die",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "нос",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "μύτη",
                                "article": "η",
                                "gender": "feminine"
                        },
                        "br": {
                                "word": "fri",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: feminine or IT: masculine). In Germanic roots, the word shifted or was established as German: feminine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "Mouth",
                "translations": {
                        "fr": {
                                "word": "bouche",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "boca",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "bocca",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Mund",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "рот",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "στόμα",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "genou",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: feminine or IT: feminine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Ear",
                "translations": {
                        "fr": {
                                "word": "oreille",
                                "article": "l'",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "oreja",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "orecchio",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Ohr",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "ухо",
                                "article": "",
                                "gender": "neuter"
                        },
                        "el": {
                                "word": "αυτί",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "skouarn",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: feminine or IT: masculine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: neuter). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Back",
                "translations": {
                        "fr": {
                                "word": "dos",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "schiena",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "спина",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "πλάτη",
                                "article": "η",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: feminine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "Arm",
                "translations": {
                        "fr": {
                                "word": "bras",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "braccio",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "рука",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "μπράτσο",
                                "article": "το",
                                "gender": "neuter"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Heart",
                "translations": {
                        "fr": {
                                "word": "relation",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "cuore",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "отношения",
                                "article": "",
                                "gender": "plural"
                        },
                        "el": {
                                "word": "σχέση",
                                "article": "η",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: plural). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "Map",
                "translations": {
                        "fr": {
                                "word": "carte",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "país",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "mappa",
                                "article": "la",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: masculine or IT: feminine)."
        },
        {
                "concept": "Glue",
                "translations": {
                        "fr": {
                                "word": "science",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "Marie Curie",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "scienza",
                                "article": "la",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: masculine or IT: feminine)."
        },
        {
                "concept": "Number",
                "translations": {
                        "fr": {
                                "word": "mathématiques",
                                "article": "les",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "cuántos",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "matematica",
                                "article": "la",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: masculine or IT: feminine)."
        },
        {
                "concept": "Library",
                "translations": {
                        "fr": {
                                "word": "bibliothèque",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "biblioteca",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Buch",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "levr",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or IT: feminine). In Germanic roots, the word shifted or was established as German: neuter."
        },
        {
                "concept": "Story",
                "translations": {
                        "fr": {
                                "word": "réservation",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "libro",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "prenotazione",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "книга",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "βιβλίο",
                                "article": "το",
                                "gender": "neuter"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: masculine or IT: feminine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Pencil",
                "translations": {
                        "fr": {
                                "word": "crayon",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "lápiz",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "matita",
                                "article": "la",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: feminine)."
        },
        {
                "concept": "Paper",
                "translations": {
                        "fr": {
                                "word": "papier",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "papel",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "carta",
                                "article": "la",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: feminine)."
        },
        {
                "concept": "Lamp",
                "translations": {
                        "fr": {
                                "word": "lampe",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "lámpara",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "lampada",
                                "article": "la",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: masculine or IT: feminine)."
        },
        {
                "concept": "School",
                "translations": {
                        "fr": {
                                "word": "école",
                                "article": "l'",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "escuela",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "scuola",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Schule",
                                "article": "die",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "школа",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "σχολείο",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "skol",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: feminine or IT: feminine). In Germanic roots, the word shifted or was established as German: feminine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Park",
                "translations": {
                        "fr": {
                                "word": "parc",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "parque",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "parco",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Garten",
                                "article": "",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "парк",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "κήπος",
                                "article": "",
                                "gender": "masculine"
                        },
                        "br": {
                                "word": "liorzh",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Supermarket",
                "translations": {
                        "fr": {
                                "word": "achat",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "tienda",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "acquisto",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Geschäft",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "супермаркет",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "σούπερ μάρκετ",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "stal",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: feminine or IT: masculine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Town",
                "translations": {
                        "fr": {
                                "word": "village",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "villaggio",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "γείτονας",
                                "article": "ο",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Hospital",
                "translations": {
                        "fr": {
                                "word": "hôpital",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "ospedale",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "больница",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "νοσοκομείο",
                                "article": "το",
                                "gender": "neuter"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Fork",
                "translations": {
                        "fr": {
                                "word": "fourchette",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "tenedor",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "forchetta",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "ресторан",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "εστιατόριο",
                                "article": "το",
                                "gender": "neuter"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: masculine or IT: feminine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Bank",
                "translations": {
                        "fr": {
                                "word": "compte",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "conto",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "банк",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "τράπεζα",
                                "article": "η",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "Station",
                "translations": {
                        "fr": {
                                "word": "gare",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "stazione",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "станция",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "σταθμός",
                                "article": "ο",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or IT: feminine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Way",
                "translations": {
                        "fr": {
                                "word": "route",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "calle",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "via",
                                "article": "la",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: masculine or IT: feminine)."
        },
        {
                "concept": "Apartment",
                "translations": {
                        "fr": {
                                "word": "appartement",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "ufficio",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "офис",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "εργασία",
                                "article": "η",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "Cup",
                "translations": {
                        "fr": {
                                "word": "tasse",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "taza",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "tazza",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Kaffee",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "чай",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "τσάι",
                                "article": "",
                                "gender": "masculine"
                        },
                        "br": {
                                "word": "kafe",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: masculine or IT: feminine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "City",
                "translations": {
                        "fr": {
                                "word": "place",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "ciudad",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "piazza",
                                "article": "la",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: feminine or IT: feminine)."
        },
        {
                "concept": "Garden",
                "translations": {
                        "fr": {
                                "word": "jardin",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "jardín",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "giardino",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "дом",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "σπίτι",
                                "article": "το",
                                "gender": "neuter"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Roof",
                "translations": {
                        "fr": {
                                "word": "toit",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "techo",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "soffitto",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Zuhause",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "сосед",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "ενοίκιο",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "gêr",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Card",
                "translations": {
                        "fr": {
                                "word": "paiement",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "tarjeta",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "pagamento",
                                "article": "il",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine)."
        },
        {
                "concept": "Money",
                "translations": {
                        "fr": {
                                "word": "coût",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "dinero",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "stipendio",
                                "article": "lo",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Geld",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "стоимость",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "μισθός",
                                "article": "ο",
                                "gender": "masculine"
                        },
                        "br": {
                                "word": "arc'hant",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Price",
                "translations": {
                        "fr": {
                                "word": "vente",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "precio",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "offerta",
                                "article": "l'",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "цена",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "τιμή",
                                "article": "η",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: masculine or IT: feminine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "Present",
                "translations": {
                        "fr": {
                                "word": "cadeau",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "regalo",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "regalo",
                                "article": "il",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine)."
        },
        {
                "concept": "Dog",
                "translations": {
                        "fr": {
                                "word": "chien",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "perro",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "cane",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Hund",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "собака",
                                "article": "",
                                "gender": "feminine"
                        },
                        "br": {
                                "word": "ki",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine)."
        },
        {
                "concept": "Bird",
                "translations": {
                        "fr": {
                                "word": "oiseau",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "uccello",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "птица",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "πουλί",
                                "article": "το",
                                "gender": "neuter"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Fish",
                "translations": {
                        "fr": {
                                "word": "poisson",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "pesce",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "рыба",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "ψάρι",
                                "article": "το",
                                "gender": "neuter"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Clothes",
                "translations": {
                        "fr": {
                                "word": "t-shirt",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "camiseta",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "maglietta",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "T-Shirt",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "футболка",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "μπλουζάκι",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "t-shirt",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: feminine or IT: feminine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Pocket",
                "translations": {
                        "fr": {
                                "word": "jean",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "pantalones",
                                "article": "los",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "jeans",
                                "article": "i",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Hose",
                                "article": "die",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "брюки",
                                "article": "",
                                "gender": "plural"
                        },
                        "el": {
                                "word": "παντελόνι",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "bragoù",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: feminine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: plural). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Shoes",
                "translations": {
                        "fr": {
                                "word": "chaussures",
                                "article": "les",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "scarpe",
                                "article": "le",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "обувь",
                                "article": "",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or IT: feminine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine)."
        },
        {
                "concept": "Hat",
                "translations": {
                        "es": {
                                "word": "sombrero",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Hut",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "шапка",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "καπέλο",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "tog",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. ES: masculine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Wardrobe",
                "translations": {
                        "fr": {
                                "word": "robe",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "armario",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "gonna",
                                "article": "la",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: masculine or IT: feminine)."
        },
        {
                "concept": "Hobby",
                "translations": {
                        "fr": {
                                "word": "art",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "Leonardo da Vinci",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "arte",
                                "article": "l'",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: feminine)."
        },
        {
                "concept": "Bowl",
                "translations": {
                        "fr": {
                                "word": "souper",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "gazpacho",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "cereali",
                                "article": "i",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine)."
        },
        {
                "concept": "Pizza",
                "translations": {
                        "es": {
                                "word": "pizza",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "pizza",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Pizza",
                                "article": "die",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "пицца",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "πίτσα",
                                "article": "η",
                                "gender": "feminine"
                        },
                        "br": {
                                "word": "pizza",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. ES: feminine or IT: feminine). In Germanic roots, the word shifted or was established as German: feminine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "Pasta",
                "translations": {
                        "es": {
                                "word": "pasta",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "pasta",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Pasta",
                                "article": "die",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "ζυμαρικά",
                                "article": "τα",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "pasta",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. ES: feminine or IT: feminine). In Germanic roots, the word shifted or was established as German: feminine. Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Fruit",
                "translations": {
                        "fr": {
                                "word": "pomme",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "manzana",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "frutta",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Apfel",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "яблоко",
                                "article": "",
                                "gender": "neuter"
                        },
                        "el": {
                                "word": "μήλο",
                                "article": "",
                                "gender": "masculine"
                        },
                        "br": {
                                "word": "aval",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: feminine or IT: feminine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: neuter). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Toaster",
                "translations": {
                        "fr": {
                                "word": "grille-pain",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "pan",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "tostapane",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Brot",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "хлеб",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "ψωμί",
                                "article": "",
                                "gender": "masculine"
                        },
                        "br": {
                                "word": "bara",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Egg",
                "translations": {
                        "fr": {
                                "word": "oeuf",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "huevo",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "uovo",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Ei",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "яйцо",
                                "article": "",
                                "gender": "neuter"
                        },
                        "el": {
                                "word": "αυγό",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "vi",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: neuter). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Glass",
                "translations": {
                        "fr": {
                                "word": "verre",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "leche",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "bicchiere",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Milch",
                                "article": "die",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "молоко",
                                "article": "",
                                "gender": "neuter"
                        },
                        "el": {
                                "word": "γάλα",
                                "article": "",
                                "gender": "masculine"
                        },
                        "br": {
                                "word": "laezh",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: feminine or IT: masculine). In Germanic roots, the word shifted or was established as German: feminine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: neuter). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Banana",
                "translations": {
                        "es": {
                                "word": "plátano",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "banana",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Banane",
                                "article": "die",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "μπανάνα",
                                "article": "η",
                                "gender": "feminine"
                        },
                        "br": {
                                "word": "banana",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. ES: masculine or IT: feminine). In Germanic roots, the word shifted or was established as German: feminine. Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "Tea",
                "translations": {
                        "fr": {
                                "word": "thé",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "té",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "tè",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Tee",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "чай",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "τσάι",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "te",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Juice",
                "translations": {
                        "fr": {
                                "word": "jus",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "succo",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "сок",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "χυμός",
                                "article": "ο",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Sink",
                "translations": {
                        "fr": {
                                "word": "robinet",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "agua",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "rubinetto",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Wasser",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "вода",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "νερό",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "dour",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Pot",
                "translations": {
                        "fr": {
                                "word": "nourriture",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "comida",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "pentola",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Essen",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "еда",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "φαγητό",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "boued",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: feminine or IT: feminine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Sugar",
                "translations": {
                        "fr": {
                                "word": "sucre",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "zucchero",
                                "article": "lo",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "рис",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "ρύζι",
                                "article": "το",
                                "gender": "neuter"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Pork",
                "translations": {
                        "fr": {
                                "word": "porc",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "maiale",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Schnitzel",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "мясо",
                                "article": "",
                                "gender": "neuter"
                        },
                        "el": {
                                "word": "κρέας",
                                "article": "το",
                                "gender": "neuter"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: neuter). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Pan",
                "translations": {
                        "fr": {
                                "word": "food_drink",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "tortilla",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "padella",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Frühstück",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "кухня",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "πρωινό",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "galetez",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: feminine or IT: feminine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Dining room",
                "translations": {
                        "fr": {
                                "word": "salle à manger",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "plato",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "lavastoviglie",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Abendessen",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "ужин",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "βραδινό",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "koan",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: masculine or IT: feminine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Tray",
                "translations": {
                        "es": {
                                "word": "almuerzo",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Mittagessen",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "обед",
                                "article": "",
                                "gender": "masculine"
                        },
                        "br": {
                                "word": "merenn",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. ES: masculine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine)."
        },
        {
                "concept": "Broccoli",
                "translations": {
                        "fr": {
                                "word": "légume",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "verdura",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "овощ",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "λαχανικό",
                                "article": "το",
                                "gender": "neuter"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: feminine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Beer",
                "translations": {
                        "fr": {
                                "word": "bière",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "birra",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "пиво",
                                "article": "",
                                "gender": "neuter"
                        },
                        "el": {
                                "word": "μπύρα",
                                "article": "η",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or IT: feminine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: neuter). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "Mobile",
                "translations": {
                        "es": {
                                "word": "teléfono",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "app",
                                "article": "l'",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Telefon",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "телефон",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "έξυπνο τηλέφωνο",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "pellgomz",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. ES: masculine or IT: feminine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Desk",
                "translations": {
                        "fr": {
                                "word": "bureau",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "escritorio",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "scrivania",
                                "article": "la",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: feminine)."
        },
        {
                "concept": "Knife",
                "translations": {
                        "fr": {
                                "word": "couteau",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "cuchillo",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "coltello",
                                "article": "il",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine)."
        },
        {
                "concept": "Spoon",
                "translations": {
                        "fr": {
                                "word": "cuillère",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "cuchara",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "cucchiaio",
                                "article": "il",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: masculine or IT: masculine)."
        },
        {
                "concept": "Nurse",
                "translations": {
                        "fr": {
                                "word": "infirmier",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "médico",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "infermiere",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Arzt",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "медсестра",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "νοσοκόμα",
                                "article": "η",
                                "gender": "feminine"
                        },
                        "br": {
                                "word": "medisin",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "Teacher",
                "translations": {
                        "fr": {
                                "word": "professeur",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "profesor",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "insegnante",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Lehrer",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "учитель",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "δάσκαλος",
                                "article": "ο",
                                "gender": "masculine"
                        },
                        "br": {
                                "word": "kelenner",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Occupation",
                "translations": {
                        "fr": {
                                "word": "travail",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "trabajo",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "lavoro",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Arbeit",
                                "article": "die",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "δουλειά",
                                "article": "η",
                                "gender": "feminine"
                        },
                        "br": {
                                "word": "labour",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: feminine. Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "Manager",
                "translations": {
                        "fr": {
                                "word": "directeur",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "direttore",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "менеджер",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "διευθυντής",
                                "article": "ο",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Meeting",
                "translations": {
                        "fr": {
                                "word": "service",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "bienvenido",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "servizio",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "собрание",
                                "article": "",
                                "gender": "neuter"
                        },
                        "el": {
                                "word": "συνάδελφος",
                                "article": "ο",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: neuter). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Sleep",
                "translations": {
                        "fr": {
                                "word": "sommeil",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "sonno",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "сон",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "ύπνος",
                                "article": "ο",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Traffic",
                "translations": {
                        "fr": {
                                "word": "voiture",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "coche",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "macchina",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Auto",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "водитель",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "οδηγός",
                                "article": "ο",
                                "gender": "masculine"
                        },
                        "br": {
                                "word": "karr",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: masculine or IT: feminine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Writer",
                "translations": {
                        "fr": {
                                "word": "écrivain",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "William Shakespeare",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "scrittore",
                                "article": "lo",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine)."
        },
        {
                "concept": "Chef",
                "translations": {
                        "fr": {
                                "word": "chef",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "chef",
                                "article": "lo",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "повар",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "μάγειρας",
                                "article": "ο",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Furniture",
                "translations": {
                        "fr": {
                                "word": "chaise",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "silla",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "tavolo",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Tisch",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "стол",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "τραπέζι",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "taol",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: feminine or IT: masculine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Bedroom",
                "translations": {
                        "fr": {
                                "word": "chambre",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "cama",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "camera da letto",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Bett",
                                "article": "das",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "кровать",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "κρεβάτι",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "gwele",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: feminine or IT: feminine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Key",
                "translations": {
                        "fr": {
                                "word": "clé",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "llave",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "chiave",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Schlüssel",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "ключ",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "κλειδί",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "alc'hwez",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: feminine or IT: feminine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Bag",
                "translations": {
                        "fr": {
                                "word": "sac",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "bolsa",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "borsa",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Tasche",
                                "article": "die",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "сумка",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "τσάντα",
                                "article": "η",
                                "gender": "feminine"
                        },
                        "br": {
                                "word": "sac'h",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: feminine or IT: feminine). In Germanic roots, the word shifted or was established as German: feminine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "Pen",
                "translations": {
                        "fr": {
                                "word": "stylo",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "bolígrafo",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "penna",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Stift",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "ручка",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "στυλό",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "stilo",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: feminine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Gate",
                "translations": {
                        "fr": {
                                "word": "armoire",
                                "article": "l'",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "puerta",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "uscita",
                                "article": "l'",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "дверь",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "πόρτα",
                                "article": "η",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: masculine or IT: feminine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "Window",
                "translations": {
                        "fr": {
                                "word": "fenêtre",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "ventana",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "finestra",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "окно",
                                "article": "",
                                "gender": "neuter"
                        },
                        "el": {
                                "word": "παράθυρο",
                                "article": "το",
                                "gender": "neuter"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: masculine or IT: feminine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: neuter). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Hour",
                "translations": {
                        "fr": {
                                "word": "réveil",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "reloj",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "sveglia",
                                "article": "la",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: feminine)."
        },
        {
                "concept": "Mirror",
                "translations": {
                        "fr": {
                                "word": "miroir",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "espejo",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "specchio",
                                "article": "lo",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine)."
        },
        {
                "concept": "Soap",
                "translations": {
                        "fr": {
                                "word": "savon",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "jabón",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "sapone",
                                "article": "il",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine)."
        },
        {
                "concept": "Wall",
                "translations": {
                        "fr": {
                                "word": "murs",
                                "article": "les",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "pared",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "pavimento",
                                "article": "il",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine)."
        },
        {
                "concept": "Shelf",
                "translations": {
                        "fr": {
                                "word": "escalier",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "estante",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "scale",
                                "article": "le",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: feminine)."
        },
        {
                "concept": "Living room",
                "translations": {
                        "fr": {
                                "word": "canapé",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "sofá",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "poltrona",
                                "article": "la",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: feminine)."
        },
        {
                "concept": "Washing machine",
                "translations": {
                        "fr": {
                                "word": "serviette",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "mercado",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "lavatrice",
                                "article": "la",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: masculine or IT: feminine)."
        },
        {
                "concept": "Game",
                "translations": {
                        "fr": {
                                "word": "temps libre",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "tempo libero",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "свободное время",
                                "article": "",
                                "gender": "neuter"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: neuter)."
        },
        {
                "concept": "August",
                "translations": {
                        "fr": {
                                "word": "août",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "playa",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "agosto",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "отпуск",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "διακοπές",
                                "article": "οι",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "Football",
                "translations": {
                        "fr": {
                                "word": "football",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "Lionel Messi",
                                "article": "",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "calcio",
                                "article": "il",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine)."
        },
        {
                "concept": "Hotel",
                "translations": {
                        "fr": {
                                "word": "chambre d'hôtel",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "camera d'albergo",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "отель",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "ξενοδοχείο",
                                "article": "το",
                                "gender": "neuter"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or IT: feminine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Gym",
                "translations": {
                        "fr": {
                                "word": "exercice",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "esercizio",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "упражнение",
                                "article": "",
                                "gender": "neuter"
                        },
                        "el": {
                                "word": "άσκηση",
                                "article": "η",
                                "gender": "feminine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: neuter). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "July",
                "translations": {
                        "fr": {
                                "word": "après-midi",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "sol",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "luglio",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Sonne",
                                "article": "die",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "солнце",
                                "article": "",
                                "gender": "neuter"
                        },
                        "el": {
                                "word": "ημέρα",
                                "article": "η",
                                "gender": "feminine"
                        },
                        "br": {
                                "word": "heol",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: feminine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: neuter). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "April",
                "translations": {
                        "fr": {
                                "word": "avril",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "lluvia",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "aprile",
                                "article": "l'",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Regen",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "дождь",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "βροχή",
                                "article": "η",
                                "gender": "feminine"
                        },
                        "br": {
                                "word": "glav",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: feminine or IT: masculine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "Wind",
                "translations": {
                        "fr": {
                                "word": "vent",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "vento",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "ветер",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "αέρας",
                                "article": "ο",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: masculine)."
        },
        {
                "concept": "Calendar",
                "translations": {
                        "fr": {
                                "word": "dimanche",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "hoy",
                                "article": "hoy",
                                "gender": "adverb"
                        },
                        "it": {
                                "word": "mese",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Heute",
                                "article": "heute",
                                "gender": "neuter"
                        },
                        "ru": {
                                "word": "неделя",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "συνάντηση",
                                "article": "η",
                                "gender": "feminine"
                        },
                        "br": {
                                "word": "hiziv",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: adverb or IT: masculine). In Germanic roots, the word shifted or was established as German: neuter. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "Bus",
                "translations": {
                        "fr": {
                                "word": "bus",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "autobús",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "fermata dell'autobus",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Bus",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "автобус",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "λεωφορείο",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "karr-boutin",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: feminine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Commute",
                "translations": {
                        "fr": {
                                "word": "train",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "es": {
                                "word": "tren",
                                "article": "el",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "tragitto",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "de": {
                                "word": "Zug",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "поездка на работу",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "μετακίνηση",
                                "article": "η",
                                "gender": "feminine"
                        },
                        "br": {
                                "word": "tren",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or ES: masculine or IT: masculine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        },
        {
                "concept": "Airport",
                "translations": {
                        "fr": {
                                "word": "vol",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "volo",
                                "article": "il",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "самолёт",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "ταξίδι",
                                "article": "το",
                                "gender": "neuter"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: masculine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Bicycle",
                "translations": {
                        "fr": {
                                "word": "vélo",
                                "article": "le",
                                "gender": "masculine"
                        },
                        "it": {
                                "word": "bicicletta",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "велосипед",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "ποδήλατο",
                                "article": "το",
                                "gender": "neuter"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: masculine or IT: feminine). In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Morning",
                "translations": {
                        "fr": {
                                "word": "matinée",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "mañana",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "mattina",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Morgen",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "утро",
                                "article": "",
                                "gender": "neuter"
                        },
                        "el": {
                                "word": "πρωί",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "mintin",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: feminine or IT: feminine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: neuter). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Evening",
                "translations": {
                        "fr": {
                                "word": "soirée",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "tarde",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "sera",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Abend",
                                "article": "der",
                                "gender": "masculine"
                        },
                        "ru": {
                                "word": "вечер",
                                "article": "",
                                "gender": "masculine"
                        },
                        "el": {
                                "word": "απόγευμα",
                                "article": "το",
                                "gender": "neuter"
                        },
                        "br": {
                                "word": "noz",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: feminine or IT: feminine). In Germanic roots, the word shifted or was established as German: masculine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: masculine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: neuter)."
        },
        {
                "concept": "Night",
                "translations": {
                        "fr": {
                                "word": "nuit",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "es": {
                                "word": "noche",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "it": {
                                "word": "notte",
                                "article": "la",
                                "gender": "feminine"
                        },
                        "de": {
                                "word": "Nacht",
                                "article": "die",
                                "gender": "feminine"
                        },
                        "ru": {
                                "word": "ночь",
                                "article": "",
                                "gender": "feminine"
                        },
                        "el": {
                                "word": "νύχτα",
                                "article": "η",
                                "gender": "feminine"
                        },
                        "br": {
                                "word": "teñvalijenn",
                                "article": "",
                                "gender": "masculine"
                        }
                },
                "explanation": "Romance languages (French, Spanish, Italian) inherit their genders from Latin (e.g. FR: feminine or ES: feminine or IT: feminine). In Germanic roots, the word shifted or was established as German: feminine. In Slavic languages, gender is determined phonetically based on the word ending (e.g. Russian: feminine). Greek inherits its grammatical gender from Ancient Hellenic roots (Greek: feminine)."
        }
];
    window.genderGameData = window.genderGameData || {};
    window.genderGameData[level] = data;
})();
