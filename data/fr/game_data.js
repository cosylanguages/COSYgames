(function() {
    const data = {
      "fluency": [
            {
                  "text": "Votre routine du matin ☕",
                  "level": "starter"
            },
            {
                  "text": "Un souvenir d'enfance 🧸",
                  "level": "starter"
            },
            {
                  "text": "Votre saison préférée et pourquoi 🍂",
                  "level": "starter"
            },
            {
                  "text": "Votre animal préféré 🐶",
                  "level": "starter"
            },
            {
                  "text": "Une journée de pluie idéale 🌧️",
                  "level": "starter"
            },
            {
                  "text": "Une compétence que vous aimeriez avoir 🎸",
                  "level": "elementary"
            },
            {
                  "text": "Le meilleur repas que vous ayez jamais mangé 🍜",
                  "level": "elementary"
            },
            {
                  "text": "Un endroit que vous souhaitez visiter 🗺️",
                  "level": "elementary"
            },
            {
                  "text": "Une histoire drôle de votre quotidien 🚴",
                  "level": "elementary"
            },
            {
                  "text": "Votre fête ou tradition préférée 🎄",
                  "level": "elementary"
            },
            {
                  "text": "Votre destination de vacances idéale 🌴",
                  "level": "intermediate"
            },
            {
                  "text": "La personne la plus intéressante que vous connaissez 🙋",
                  "level": "intermediate"
            },
            {
                  "text": "Décrivez votre week-end parfait ☀️",
                  "level": "intermediate"
            },
            {
                  "text": "La dernière fois que vous avez essayé quelque chose de nouveau 🎯",
                  "level": "intermediate"
            },
            {
                  "text": "Un nouveau loisir que vous aimeriez commencer 🎨",
                  "level": "intermediate"
            },
            {
                  "text": "Comment la technologie change votre quotidien 📱",
                  "level": "intermediate"
            },
            {
                  "text": "Que feriez-vous avec 1 million d'euros ? 💰",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Un livre ou un film qui a changé votre vision 📚",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Si vous pouviez vivre n'importe où dans le monde… 🌍",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Quelque chose dont vous êtes fier 🏆",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Une leçon de vie inattendue 💡",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Que signifie le bonheur pour vous ? 😊",
                  "level": "advanced"
            },
            {
                  "text": "L'influence de la culture sur nos choix 🏛️",
                  "level": "advanced"
            },
            {
                  "text": "L'équilibre entre ambition et tranquillité ⚖️",
                  "level": "advanced"
            }
      ],
      "opinions": [
            {
                  "text": "Les réseaux sociaux font plus de mal que de bien.",
                  "level": "intermediate"
            },
            {
                  "text": "Tout le monde devrait apprendre au moins deux langues.",
                  "level": "intermediate"
            },
            {
                  "text": "Le télétravail est meilleur que le travail au bureau.",
                  "level": "intermediate"
            },
            {
                  "text": "L'argent ne fait pas le bonheur.",
                  "level": "intermediate"
            },
            {
                  "text": "La technologie nous rend moins sociables.",
                  "level": "intermediate"
            },
            {
                  "text": "Il n'est jamais trop tard pour apprendre quelque chose de nouveau.",
                  "level": "intermediate"
            },
            {
                  "text": "Les voyages sont la meilleure forme d'éducation.",
                  "level": "intermediate"
            },
            {
                  "text": "Les animaux ne devraient pas être gardés dans des zoos.",
                  "level": "intermediate"
            },
            {
                  "text": "La restauration rapide est l'une des pires inventions.",
                  "level": "intermediate"
            },
            {
                  "text": "Lire des livres a plus de valeur que regarder des films.",
                  "level": "intermediate"
            },
            {
                  "text": "La semaine de 4 jours augmente la productivité et le bien-être.",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Les transports en commun devraient être gratuits pour tous.",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Le revenu de base universel est nécessaire pour l'économie de demain.",
                  "level": "upper_intermediate"
            },
            {
                  "text": "L'intelligence artificielle générative ne pourra jamais remplacer la créativité humaine.",
                  "level": "advanced"
            },
            {
                  "text": "La vie privée totale est désormais impossible à l'ère numérique.",
                  "level": "advanced"
            }
      ],
      "battle": [
            [
                  "Montagnes 🏔️",
                  "Plage 🏖️"
            ],
            [
                  "Café ☕",
                  "Thé 🍵"
            ],
            [
                  "Lève-tôt 🌅",
                  "Couche-tard 🦉"
            ],
            [
                  "Vie en ville 🏙️",
                  "Vie à la campagne 🌾"
            ],
            [
                  "Lecture 📚",
                  "Regarder des films 🎬"
            ],
            [
                  "Été ☀️",
                  "Hiver ❄️"
            ],
            [
                  "Chats 🐱",
                  "Chiens 🐶"
            ],
            [
                  "Télétravail 🏠",
                  "Travail au bureau 🏢"
            ],
            [
                  "Sucré 🍰",
                  "Salé 🧀"
            ],
            [
                  "Voyager seul ✈️",
                  "Voyager entre amis 👥"
            ],
            [
                  "Livres papier 📖",
                  "Liseuses 📱"
            ],
            [
                  "Cuisiner chez soi 🍳",
                  "Commander à livrer 🍕"
            ],
            [
                  "Transports publics 🚌",
                  "Voiture personnelle 🚗"
            ]
      ],
      "critic": [
            {
                  "title": "Délicieux, mais trop cher 🍝",
                  "type": "Restaurant",
                  "review": "La nourriture était fantastique et les ingrédients très frais, mais les portions étaient réduites et l'addition fut une surprise.",
                  "question": "Reveniriez-vous malgré le prix élevé ?"
            },
            {
                  "title": "Intrigue captivante, fin décevante 🎬",
                  "type": "Film",
                  "review": "Les deux premiers tiers du film étaient pleins de suspense, mais le dénouement s'est avéré précipité et illogique.",
                  "question": "Quelle est l'importance de la fin d'un film dans votre évaluation globale ?"
            },
            {
                  "title": "Graphismes superbes, mais trop de bugs 🎮",
                  "type": "Jeu vidéo",
                  "review": "Visuellement c'est un chef-d'œuvre, mais le jeu plante souvent et présente de nombreux défauts techniques.",
                  "question": "Les graphismes et l'atmosphère peuvent-ils compenser les défauts techniques ?"
            }
      ],
      "action": {
            "starter": [
                  "Chat",
                  "Chien",
                  "Maison",
                  "Voiture",
                  "Livre",
                  "Eau",
                  "Soleil",
                  "Lune",
                  "Arbre",
                  "Téléphone",
                  "Porte",
                  "Chaise",
                  "Lit",
                  "Pain",
                  "Poisson"
            ],
            "elementary": [
                  "Cuisine",
                  "Jardin",
                  "Train",
                  "Médecin",
                  "Professeur",
                  "Musique",
                  "Anniversaire",
                  "Natation",
                  "Vacances",
                  "Boutique",
                  "Gare",
                  "Hôpital"
            ],
            "intermediate": [
                  "Musée",
                  "Entretien",
                  "Architecte",
                  "Journaliste",
                  "Parlement",
                  "Orchestre",
                  "Marathon",
                  "Exposition",
                  "Laboratoire",
                  "Télescope"
            ],
            "upper_intermediate": [
                  "Philanthropie",
                  "Ambassadeur",
                  "Hypothèse",
                  "Entrepreneur",
                  "Archéologie",
                  "Télescope",
                  "Biodiversité",
                  "Infrastructure"
            ],
            "advanced": [
                  "Paradigme",
                  "Juxtaposition",
                  "Anachronisme",
                  "Vraisemblance",
                  "Magnanime",
                  "Résilience",
                  "Nuance",
                  "Perspicacité"
            ],
            "proficiency": [
                  "Ubiquité",
                  "Éphémère",
                  "Pugnace",
                  "Perspicace",
                  "Sycophante",
                  "Équanamité",
                  "Vicissitude",
                  "Ineffable"
            ]
      },
      "identity": [
            {
                  "person": "Un pompier",
                  "clue": "Il porte un casque et éteint les incendies avec de l'eau.",
                  "level": "elementary"
            },
            {
                  "person": "Un chef cuisinier",
                  "clue": "Il travaille dans une cuisine et prépare de délicieux repas.",
                  "level": "elementary"
            },
            {
                  "person": "Un bibliothécaire",
                  "clue": "Il gère une bibliothèque et aide les gens à trouver des livres.",
                  "level": "elementary"
            },
            {
                  "person": "Un vétérinaire",
                  "clue": "Il soigne les animaux malades ou blessés.",
                  "level": "elementary"
            },
            {
                  "person": "Un astronaute",
                  "clue": "Il voyage dans l'espace au-delà de la Terre.",
                  "level": "intermediate"
            },
            {
                  "person": "Un détective",
                  "clue": "Il mène des enquêtes et cherche des indices.",
                  "level": "intermediate"
            },
            {
                  "person": "Un journaliste",
                  "clue": "Il informe le public et rédige des articles de presse.",
                  "level": "intermediate"
            },
            {
                  "person": "Un photographe",
                  "clue": "Il immortalise des souvenirs avec un appareil photo.",
                  "level": "intermediate"
            },
            {
                  "person": "Un architecte",
                  "clue": "Il conçoit des maisons et des bâtiments avant leur construction.",
                  "level": "upper_intermediate"
            },
            {
                  "person": "Un chirurgien",
                  "clue": "Il réalise des opérations médicales à l'hôpital.",
                  "level": "upper_intermediate"
            },
            {
                  "person": "Un ingénieur logiciel",
                  "clue": "Il écrit du code pour créer des applications web et mobiles.",
                  "level": "upper_intermediate"
            },
            {
                  "person": "Un diplomate",
                  "clue": "Il représente son pays lors des relations internationales officielles.",
                  "level": "advanced"
            },
            {
                  "person": "Un biologiste marin",
                  "clue": "Il étudie la faune et la flore océaniques.",
                  "level": "advanced"
            },
            {
                  "person": "Un astrophysicien",
                  "clue": "Il étudie la physique des étoiles et des galaxies.",
                  "level": "advanced"
            }
      ],
      "wordlinker": [
            {
                  "words": [
                        "Pomme",
                        "Orange",
                        "Banane",
                        "Carotte"
                  ],
                  "odd": "Carotte",
                  "link": "Fruits",
                  "oddReason": "La carotte est un légume"
            },
            {
                  "words": [
                        "Paris",
                        "Rome",
                        "Tokyo",
                        "Amazone"
                  ],
                  "odd": "Amazone",
                  "link": "Capitales",
                  "oddReason": "L'Amazone est un fleuve, pas une ville"
            },
            {
                  "words": [
                        "Piano",
                        "Guitare",
                        "Violon",
                        "Trompette"
                  ],
                  "odd": "none",
                  "link": "Instruments de musique",
                  "oddReason": "Tous sont des instruments"
            },
            {
                  "words": [
                        "Heureux",
                        "Joyeux",
                        "Mélancolique",
                        "Chaleureux"
                  ],
                  "odd": "Mélancolique",
                  "link": "Adjectifs positifs",
                  "oddReason": "Mélancolique signifie triste"
            },
            {
                  "words": [
                        "Médecin",
                        "Infirmier",
                        "Chirurgien",
                        "Pilote"
                  ],
                  "odd": "Pilote",
                  "link": "Métiers de la santé",
                  "oddReason": "Le pilote pilote des avions, pas en hôpital"
            }
      ],
      "etymology": [
            {
                  "word": "Chêne",
                  "level": "easy",
                  "options": [
                        "Gaulois",
                        "Latin",
                        "Francique",
                        "Grec"
                  ],
                  "answer": "Gaulois",
                  "detail": "Issu du terme gaulois cassanos désignant l'arbre sacré du paysage celte de la Gaule antique.",
                  "path": "Gaulois (cassanos) → Ancien français → Français Chêne"
            },
            {
                  "word": "Charrue",
                  "level": "medium",
                  "options": [
                        "Gaulois",
                        "Latin",
                        "Germanique",
                        "Grec"
                  ],
                  "answer": "Gaulois",
                  "detail": "Emprunté au gaulois carruca (véhicule à roues), qui a désigné le grand instrument agricole à roues.",
                  "path": "Gaulois (carruca) → Bas latin → Français Charrue"
            },
            {
                  "word": "Chemin",
                  "level": "easy",
                  "options": [
                        "Gaulois",
                        "Latin",
                        "Francique",
                        "Grec"
                  ],
                  "answer": "Gaulois",
                  "detail": "Provient du gaulois camminos (voie ou passage), remplaçant le latin via dans le langage populaire.",
                  "path": "Gaulois (camminos) → Bas latin → Français Chemin"
            },
            {
                  "word": "Mouton",
                  "level": "medium",
                  "options": [
                        "Gaulois",
                        "Latin",
                        "Francique",
                        "Grec"
                  ],
                  "answer": "Gaulois",
                  "detail": "Issu du gaulois multon pour désigner le bélier châtré, devenu le terme usuel en français.",
                  "path": "Gaulois (multon) → Bas latin (multo) → Français Mouton"
            },
            {
                  "word": "Bec",
                  "level": "easy",
                  "options": [
                        "Gaulois",
                        "Latin",
                        "Francique",
                        "Grec"
                  ],
                  "answer": "Gaulois",
                  "detail": "Emprunté par le latin au gaulois beccus pour désigner la bouche des oiseaux.",
                  "path": "Gaulois (beccus) → Bas latin → Français Bec"
            },
            {
                  "word": "Alouette",
                  "level": "hard",
                  "options": [
                        "Gaulois",
                        "Latin",
                        "Francique",
                        "Grec"
                  ],
                  "answer": "Gaulois",
                  "detail": "Issu du gaulois alauda, oiseau emblématique célébré pour son chant matinal.",
                  "path": "Gaulois (alauda) → Latin (alauda) → Français Alouette"
            },
            {
                  "word": "Guerre",
                  "level": "easy",
                  "options": [
                        "Francique",
                        "Latin",
                        "Grec",
                        "Arabe"
                  ],
                  "answer": "Francique",
                  "detail": "Issu de la racine francique werra (trouble ou querelle), ayant supplanté le latin classique bellum.",
                  "path": "Francique (werra) → Ancien français → Français Guerre"
            },
            {
                  "word": "Jardin",
                  "level": "easy",
                  "options": [
                        "Francique",
                        "Latin",
                        "Grec",
                        "Arabe"
                  ],
                  "answer": "Francique",
                  "detail": "Dérive du francique gardo signifiant enclos ou espace fermé de verdure.",
                  "path": "Francique (gardo) → Ancien français → Français Jardin"
            },
            {
                  "word": "Bleu",
                  "level": "easy",
                  "options": [
                        "Francique",
                        "Latin",
                        "Grec",
                        "Gaulois"
                  ],
                  "answer": "Francique",
                  "detail": "Importé par les Francs avec le vocable blāo, suppléant le latin caeruleus.",
                  "path": "Francique (blāo) → Ancien français → Français Bleu"
            },
            {
                  "word": "Blanc",
                  "level": "easy",
                  "options": [
                        "Francique",
                        "Latin",
                        "Grec",
                        "Arabe"
                  ],
                  "answer": "Francique",
                  "detail": "Issu du francique blank signifiant brillant ou éclatant.",
                  "path": "Francique (blank) → Ancien français → Français Blanc"
            },
            {
                  "word": "Hache",
                  "level": "medium",
                  "options": [
                        "Francique",
                        "Latin",
                        "Gaulois",
                        "Grec"
                  ],
                  "answer": "Francique",
                  "detail": "Issu du germanique francique happja pour désigner l'outil tranchant des guerriers.",
                  "path": "Francique (happja) → Français Hache"
            },
            {
                  "word": "Canton",
                  "level": "hard",
                  "options": [
                        "Francique",
                        "Latin",
                        "Italien",
                        "Grec"
                  ],
                  "answer": "Francique",
                  "detail": "Dérive de la racine germanique kanto signifiant coin ou coin de terre.",
                  "path": "Francique (kanto) → Ancien français → Français Canton"
            },
            {
                  "word": "Café",
                  "level": "easy",
                  "options": [
                        "Turc/Arabe",
                        "Italien",
                        "Espagnol",
                        "Persan"
                  ],
                  "answer": "Turc/Arabe",
                  "detail": "Emprunté au turc ottoman kahve, d'origine arabe qahwah, diffusé par les marchands vénitiens.",
                  "path": "Arabe (qahwah) → Turc (kahve) → Italien (caffè) → Français Café"
            },
            {
                  "word": "Sucre",
                  "level": "easy",
                  "options": [
                        "Arabe",
                        "Sanskrit",
                        "Latin",
                        "Italien"
                  ],
                  "answer": "Arabe",
                  "detail": "Transmis de l'arabe as-sukkar via l'Italie médiévale lors du commerce des épices.",
                  "path": "Sanskrit (śarkarā) → Arabe (as-sukkar) → Italien → Français Sucre"
            },
            {
                  "word": "Alcool",
                  "level": "medium",
                  "options": [
                        "Arabe",
                        "Latin",
                        "Grec",
                        "Espagnol"
                  ],
                  "answer": "Arabe",
                  "detail": "À l'origine la fine poudre de khôl obtenue par sublimation, désignant ensuite les essences distillées.",
                  "path": "Arabe (al-kuḥl) → Latin médiéval → Français Alcool"
            },
            {
                  "word": "Magasin",
                  "level": "medium",
                  "options": [
                        "Arabe",
                        "Italien",
                        "Espagnol",
                        "Latin"
                  ],
                  "answer": "Arabe",
                  "detail": "Provient de l'arabe makhāzin (entrepôts), apporté par les navires marchands méditerranéens.",
                  "path": "Arabe (makhāzin) → Italien (magazzino) → Français Magasin"
            },
            {
                  "word": "Zéro",
                  "level": "medium",
                  "options": [
                        "Arabe",
                        "Sanskrit",
                        "Italien",
                        "Grec"
                  ],
                  "answer": "Arabe",
                  "detail": "Du mot arabe ṣifr (vide), adapté en italien médiéval zero par le mathématicien Fibonacci.",
                  "path": "Sanskrit (śūnyā) → Arabe (ṣifr) → Italien (zero) → Français Zéro"
            },
            {
                  "word": "Amiral",
                  "level": "hard",
                  "options": [
                        "Arabe",
                        "Latin",
                        "Grec",
                        "Espagnol"
                  ],
                  "answer": "Arabe",
                  "detail": "Raccourci de l'arabe amīr al-baḥr signifiant commandant de la mer lors des Croisades.",
                  "path": "Arabe (amīr al-baḥr) → Latin médiéval → Français Amiral"
            },
            {
                  "word": "Balcon",
                  "level": "easy",
                  "options": [
                        "Italien",
                        "Francique",
                        "Espagnol",
                        "Latin"
                  ],
                  "answer": "Italien",
                  "detail": "Emprunté lors de la Renaissance à l'italien balcone, d'origine germanique lombarde.",
                  "path": "Lombard (balcho) → Italien (balcone) → Français Balcon"
            },
            {
                  "word": "Cavalier",
                  "level": "medium",
                  "options": [
                        "Italien",
                        "Latin",
                        "Espagnol",
                        "Grec"
                  ],
                  "answer": "Italien",
                  "detail": "Adopté de l'italien cavaliere lors des guerres d'Italie du XVIe siècle.",
                  "path": "Italien (cavaliere) → Français Cavalier"
            },
            {
                  "word": "Carnaval",
                  "level": "easy",
                  "options": [
                        "Italien",
                        "Latin",
                        "Espagnol",
                        "Grec"
                  ],
                  "answer": "Italien",
                  "detail": "Issu de l'italien carnevale, dérivé du latin carne levare signifiant retirer la viande avant le Carême.",
                  "path": "Italien (carnevale) → Français Carnaval"
            },
            {
                  "word": "Façade",
                  "level": "medium",
                  "options": [
                        "Italien",
                        "Latin",
                        "Espagnol",
                        "Grec"
                  ],
                  "answer": "Italien",
                  "detail": "Emprunt architectural de la Renaissance italienne à partir du mot facciata (face).",
                  "path": "Italien (facciata) → Français Façade"
            },
            {
                  "word": "Fresque",
                  "level": "medium",
                  "options": [
                        "Italien",
                        "Latin",
                        "Espagnol",
                        "Grec"
                  ],
                  "answer": "Italien",
                  "detail": "De l'expression italienne pittura a fresco, peinture exécutée sur un enduit encore frais.",
                  "path": "Italien (fresco) → Français Fresque"
            },
            {
                  "word": "Alarme",
                  "level": "hard",
                  "options": [
                        "Italien",
                        "Latin",
                        "Espagnol",
                        "Francique"
                  ],
                  "answer": "Italien",
                  "detail": "Provient du cri de ralliement militaire italien all'arme ! signifiant aux armes !",
                  "path": "Italien (all'arme) → Français Alarme"
            },
            {
                  "word": "Week-end",
                  "level": "easy",
                  "options": [
                        "Anglais",
                        "Allemand",
                        "Hollandais",
                        "Latin"
                  ],
                  "answer": "Anglais",
                  "detail": "Emprunté directement à l'anglais à la fin du XIXe siècle pour désigner le repos de fin de semaine.",
                  "path": "Anglais (week-end) → Français Week-end"
            },
            {
                  "word": "Parking",
                  "level": "easy",
                  "options": [
                        "Anglais",
                        "Allemand",
                        "Hollandais",
                        "Latin"
                  ],
                  "answer": "Anglais",
                  "detail": "Dérivé du verbe anglais to park, formé avec le suffixe -ing pour désigner l'aire de stationnement.",
                  "path": "Anglais (parking) → Français Parking"
            },
            {
                  "word": "Budget",
                  "level": "medium",
                  "options": [
                        "Anglais",
                        "Ancien français",
                        "Italien",
                        "Latin"
                  ],
                  "answer": "Anglais",
                  "detail": "Aller-retour linguistique : du français ancien bougette (petite bourse) réemprunté à l'anglais financier au XVIIIe siècle.",
                  "path": "Ancien français (bougette) → Anglais (budget) → Français Budget"
            },
            {
                  "word": "Tennis",
                  "level": "medium",
                  "options": [
                        "Anglais",
                        "Ancien français",
                        "Italien",
                        "Latin"
                  ],
                  "answer": "Anglais",
                  "detail": "Originaire de l'interjection française tenez ! lancée au jeu de paume, conservée en anglais puis réimportée.",
                  "path": "Ancien français (tenez !) → Anglais (tennis) → Français Tennis"
            },
            {
                  "word": "Shampooing",
                  "level": "medium",
                  "options": [
                        "Anglais",
                        "Hindi",
                        "Arabe",
                        "Latin"
                  ],
                  "answer": "Anglais",
                  "detail": "Passe de l'hindi chāmpo (masser) à l'anglais britannique aux Indes avant de désigner le produit capillaire.",
                  "path": "Hindi (chāmpo) → Anglais (shampoo) → Français Shampooing"
            },
            {
                  "word": "Wagon",
                  "level": "medium",
                  "options": [
                        "Anglais",
                        "Hollandais",
                        "Allemand",
                        "Latin"
                  ],
                  "answer": "Anglais",
                  "detail": "Introduit au XIXe siècle lors du développement des premiers chemins de fer britanniques.",
                  "path": "Hollandais (wagen) → Anglais (wagon) → Français Wagon"
            },
            {
                  "word": "Candidat",
                  "level": "easy",
                  "options": [
                        "Latin",
                        "Grec",
                        "Allemand",
                        "Italien"
                  ],
                  "answer": "Latin",
                  "detail": "Dans la Rome antique, les candidats portaient une toge d'une blancheur éclatante (candida).",
                  "path": "Latin (candidus) → Français Candidat"
            },
            {
                  "word": "Nostalgie",
                  "level": "easy",
                  "options": [
                        "Grec",
                        "Latin",
                        "Allemand",
                        "Italien"
                  ],
                  "answer": "Grec",
                  "detail": "Forgé au XVIIe siècle par un médecin suisse associant nostos (retour) et algos (douleur).",
                  "path": "Grec (nostos + algos) → Français Nostalgie"
            },
            {
                  "word": "Galaxie",
                  "level": "easy",
                  "options": [
                        "Grec",
                        "Latin",
                        "Arabe",
                        "Allemand"
                  ],
                  "answer": "Grec",
                  "detail": "Issu du mythe grec sur les gouttes de lait céleste répandues par la déesse Héra.",
                  "path": "Grec (gala) → Français Galaxie"
            },
            {
                  "word": "Philosophie",
                  "level": "easy",
                  "options": [
                        "Grec",
                        "Latin",
                        "Arabe",
                        "Allemand"
                  ],
                  "answer": "Grec",
                  "detail": "Formé des racines grecques philos (amour) et sophia (sagesse).",
                  "path": "Grec (philos + sophia) → Français Philosophie"
            },
            {
                  "word": "Bibliothèque",
                  "level": "easy",
                  "options": [
                        "Grec",
                        "Latin",
                        "Allemand",
                        "Italien"
                  ],
                  "answer": "Grec",
                  "detail": "Du grec biblion (livre) et theke (armoire ou coffre de rangement).",
                  "path": "Grec (biblion + theke) → Français Bibliothèque"
            },
            {
                  "word": "Téléphone",
                  "level": "easy",
                  "options": [
                        "Grec",
                        "Latin",
                        "Anglais",
                        "Allemand"
                  ],
                  "answer": "Grec",
                  "detail": "Néologisme savant XIXe siècle combinant tele (à distance) et phone (voix/son).",
                  "path": "Grec (tele + phone) → Français Téléphone"
            },
            {
                  "word": "Algèbre",
                  "level": "medium",
                  "options": [
                        "Arabe",
                        "Grec",
                        "Latin",
                        "Persan"
                  ],
                  "answer": "Arabe",
                  "detail": "De l'arabe al-jabr signifiant la remise en place des parties transposées dans l'équation.",
                  "path": "Arabe (al-jabr) → Latin médiéval → Français Algèbre"
            },
            {
                  "word": "Silo",
                  "level": "hard",
                  "options": [
                        "Espagnol",
                        "Arabe",
                        "Grec",
                        "Latin"
                  ],
                  "answer": "Espagnol",
                  "detail": "Terme issu du mozarabe ou du grec désignant la fosse de conservation des grains.",
                  "path": "Espagnol (silo) → Français Silo"
            },
            {
                  "word": "Bazar",
                  "level": "hard",
                  "options": [
                        "Persan",
                        "Arabe",
                        "Turc",
                        "Italien"
                  ],
                  "answer": "Persan",
                  "detail": "Introduit en français par les récits de voyages en Orient d'après le mot persan bāzār (marché).",
                  "path": "Persan (bāzār) → Italien → Français Bazar"
            },
            {
                  "word": "Bordel",
                  "level": "hard",
                  "options": [
                        "Ancien français",
                        "Latin",
                        "Francique",
                        "Italien"
                  ],
                  "answer": "Ancien français",
                  "detail": "Diminutif de borde (petite cabane en bois), ayant progressivement désigné un lieu de désordre.",
                  "path": "Ancien français (borde) → Français Bordel"
            }
      ],
      "storychain": []
};

    window.gameData = window.gameData || {};
    window.gameData['fr'] = data;
})();