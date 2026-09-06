(function() {
    const data = {
      fluency: [
        { text: "Votre routine du matin ☕", level: "starter" },
        { text: "Un souvenir d'enfance 🧸", level: "starter" },
        { text: "Votre saison préférée et pourquoi 🍂", level: "starter" },
        { text: "Votre animal préféré 🐶", level: "starter" },
        { text: "Une journée de pluie idéale 🌧️", level: "starter" },
        { text: "Une compétence que vous aimeriez avoir 🎸", level: "elementary" },
        { text: "Le meilleur repas que vous ayez jamais mangé 🍜", level: "elementary" },
        { text: "Un endroit que vous souhaitez visiter 🗺️", level: "elementary" },
        { text: "Une histoire drôle de votre quotidien 🚴", level: "elementary" },
        { text: "Votre fête ou tradition préférée 🎄", level: "elementary" },
        { text: "Votre destination de vacances idéale 🌴", level: "intermediate" },
        { text: "La personne la plus intéressante que vous connaissez 🙋", level: "intermediate" },
        { text: "Décrivez votre week-end parfait ☀️", level: "intermediate" },
        { text: "La dernière fois que vous avez essayé quelque chose de nouveau 🎯", level: "intermediate" },
        { text: "Un nouveau loisir que vous aimeriez commencer 🎨", level: "intermediate" },
        { text: "Comment la technologie change votre quotidien 📱", level: "intermediate" },
        { text: "Que feriez-vous avec 1 million d'euros ? 💰", level: "upper_intermediate" },
        { text: "Un livre ou un film qui a changé votre vision 📚", level: "upper_intermediate" },
        { text: "Si vous pouviez vivre n'importe où dans le monde… 🌍", level: "upper_intermediate" },
        { text: "Quelque chose dont vous êtes fier 🏆", level: "upper_intermediate" },
        { text: "Une leçon de vie inattendue 💡", level: "upper_intermediate" },
        { text: "Que signifie le bonheur pour vous ? 😊", level: "advanced" },
        { text: "L'influence de la culture sur nos choix 🏛️", level: "advanced" },
        { text: "L'équilibre entre ambition et tranquillité ⚖️", level: "advanced" }
      ],
      opinions: [
        { text: "Les réseaux sociaux font plus de mal que de bien.", level: "intermediate" },
        { text: "Tout le monde devrait apprendre au moins deux langues.", level: "intermediate" },
        { text: "Le télétravail est meilleur que le travail au bureau.", level: "intermediate" },
        { text: "L'argent ne fait pas le bonheur.", level: "intermediate" },
        { text: "La technologie nous rend moins sociables.", level: "intermediate" },
        { text: "Il n'est jamais trop tard pour apprendre quelque chose de nouveau.", level: "intermediate" },
        { text: "Les voyages sont la meilleure forme d'éducation.", level: "intermediate" },
        { text: "Les animaux ne devraient pas être gardés dans des zoos.", level: "intermediate" },
        { text: "La restauration rapide est l'une des pires inventions.", level: "intermediate" },
        { text: "Lire des livres a plus de valeur que regarder des films.", level: "intermediate" },
        { text: "La semaine de 4 jours augmente la productivité et le bien-être.", level: "upper_intermediate" },
        { text: "Les transports en commun devraient être gratuits pour tous.", level: "upper_intermediate" },
        { text: "Le revenu de base universel est nécessaire pour l'économie de demain.", level: "upper_intermediate" },
        { text: "L'intelligence artificielle générative ne pourra jamais remplacer la créativité humaine.", level: "advanced" },
        { text: "La vie privée totale est désormais impossible à l'ère numérique.", level: "advanced" }
      ],
      battle: [
        ["Montagnes 🏔️", "Plage 🏖️"],
        ["Café ☕", "Thé 🍵"],
        ["Lève-tôt 🌅", "Couche-tard 🦉"],
        ["Vie en ville 🏙️", "Vie à la campagne 🌾"],
        ["Lecture 📚", "Regarder des films 🎬"],
        ["Été ☀️", "Hiver ❄️"],
        ["Chats 🐱", "Chiens 🐶"],
        ["Télétravail 🏠", "Travail au bureau 🏢"],
        ["Sucré 🍰", "Salé 🧀"],
        ["Voyager seul ✈️", "Voyager entre amis 👥"],
        ["Livres papier 📖", "Liseuses 📱"],
        ["Cuisiner chez soi 🍳", "Commander à livrer 🍕"],
        ["Transports publics 🚌", "Voiture personnelle 🚗"]
      ],
      critic: [
        { title: 'Délicieux, mais trop cher 🍝', type: 'Restaurant', review: 'La nourriture était fantastique et les ingrédients très frais, mais les portions étaient réduites et l\'addition fut une surprise.', question: 'Reveniriez-vous malgré le prix élevé ?' },
        { title: 'Intrigue captivante, fin décevante 🎬', type: 'Film', review: 'Les deux premiers tiers du film étaient pleins de suspense, mais le dénouement s\'est avéré précipité et illogique.', question: 'Quelle est l\'importance de la fin d\'un film dans votre évaluation globale ?' },
        { title: 'Graphismes superbes, mais trop de bugs 🎮', type: 'Jeu vidéo', review: 'Visuellement c\'est un chef-d\'œuvre, mais le jeu plante souvent et présente de nombreux défauts techniques.', question: 'Les graphismes et l\'atmosphère peuvent-ils compenser les défauts techniques ?' }
      ],
      action: {
        starter: ["Chat", "Chien", "Maison", "Voiture", "Livre", "Eau", "Soleil", "Lune", "Arbre", "Téléphone", "Porte", "Chaise", "Lit", "Pain", "Poisson"],
        elementary: ["Cuisine", "Jardin", "Train", "Médecin", "Professeur", "Musique", "Anniversaire", "Natation", "Vacances", "Boutique", "Gare", "Hôpital"],
        intermediate: ["Musée", "Entretien", "Architecte", "Journaliste", "Parlement", "Orchestre", "Marathon", "Exposition", "Laboratoire", "Télescope"],
        upper_intermediate: ["Philanthropie", "Ambassadeur", "Hypothèse", "Entrepreneur", "Archéologie", "Télescope", "Biodiversité", "Infrastructure"],
        advanced: ["Paradigme", "Juxtaposition", "Anachronisme", "Vraisemblance", "Magnanime", "Résilience", "Nuance", "Perspicacité"],
        proficiency: ["Ubiquité", "Éphémère", "Pugnace", "Perspicace", "Sycophante", "Équanamité", "Vicissitude", "Ineffable"]
      },
      identity: [
        { person: "Un pompier", clue: "Il porte un casque et éteint les incendies avec de l'eau.", level: "elementary" },
        { person: "Un chef cuisinier", clue: "Il travaille dans une cuisine et prépare de délicieux repas.", level: "elementary" },
        { person: "Un bibliothécaire", clue: "Il gère une bibliothèque et aide les gens à trouver des livres.", level: "elementary" },
        { person: "Un vétérinaire", clue: "Il soigne les animaux malades ou blessés.", level: "elementary" },
        { person: "Un astronaute", clue: "Il voyage dans l'espace au-delà de la Terre.", level: "intermediate" },
        { person: "Un détective", clue: "Il mène des enquêtes et cherche des indices.", level: "intermediate" },
        { person: "Un journaliste", clue: "Il informe le public et rédige des articles de presse.", level: "intermediate" },
        { person: "Un photographe", clue: "Il immortalise des souvenirs avec un appareil photo.", level: "intermediate" },
        { person: "Un architecte", clue: "Il conçoit des maisons et des bâtiments avant leur construction.", level: "upper_intermediate" },
        { person: "Un chirurgien", clue: "Il réalise des opérations médicales à l'hôpital.", level: "upper_intermediate" },
        { person: "Un ingénieur logiciel", clue: "Il écrit du code pour créer des applications web et mobiles.", level: "upper_intermediate" },
        { person: "Un diplomate", clue: "Il représente son pays lors des relations internationales officielles.", level: "advanced" },
        { person: "Un biologiste marin", clue: "Il étudie la faune et la flore océaniques.", level: "advanced" },
        { person: "Un astrophysicien", clue: "Il étudie la physique des étoiles et des galaxies.", level: "advanced" }
      ],
      wordlinker: [
        { words: ["Pomme", "Orange", "Banane", "Carotte"], odd: "Carotte", link: "Fruits", oddReason: "La carotte est un légume" },
        { words: ["Paris", "Rome", "Tokyo", "Amazone"], odd: "Amazone", link: "Capitales", oddReason: "L'Amazone est un fleuve, pas une ville" },
        { words: ["Piano", "Guitare", "Violon", "Trompette"], odd: "none", link: "Instruments de musique", oddReason: "Tous sont des instruments" },
        { words: ["Heureux", "Joyeux", "Mélancolique", "Chaleureux"], odd: "Mélancolique", link: "Adjectifs positifs", oddReason: "Mélancolique signifie triste" },
        { words: ["Médecin", "Infirmier", "Chirurgien", "Pilote"], odd: "Pilote", link: "Métiers de la santé", oddReason: "Le pilote pilote des avions, pas en hôpital" }
      ],
      etymology: [],
      storychain: []
    };

    window.gameData = window.gameData || {};
    window.gameData['fr'] = data;
})();