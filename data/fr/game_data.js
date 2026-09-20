(function() {
    const data = {
      "fluency": [
            {
                  "text": "Votre routine du matin ☕",
                  "level": "starter"
            },
            {
                  "text": "Un souvenir d'enfance 🧸",
                  "level": "starter",
                  "hints": [
                        "Quel âge aviez-vous ?",
                        "Où étiez-vous ?",
                        "Avec qui étiez-vous ?",
                        "Que s'est-il passé ?",
                        "Pourquoi vous en souvenez-vous ?"
                  ]
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
            },
            {
                  "text": "Des vacances dont vous vous souvenez",
                  "level": "elementary",
                  "hints": [
                        "Où êtes-vous allé ?",
                        "Avec qui êtes-vous allé ?",
                        "Qu'avez-vous fait là-bas ?",
                        "Quel temps faisait-il ?",
                        "Quel a été le meilleur moment ?"
                  ]
            },
            {
                  "text": "Votre restaurant ou café préféré",
                  "level": "elementary",
                  "hints": [
                        "Où est-ce ?",
                        "Quelle nourriture servent-ils ?",
                        "Pourquoi l'aimez-vous ?",
                        "Avec qui y allez-vous ?",
                        "C'était quand la dernière fois que vous y êtes allé ?"
                  ]
            },
            {
                  "text": "Comment vous allez au travail ou à l'école",
                  "level": "elementary",
                  "hints": [
                        "Comment voyagez-vous — bus, voiture, vélo ?",
                        "Combien de temps cela prend-il ?",
                        "Appréciez-vous le trajet ?",
                        "Est-ce cher ?",
                        "Que faites-vous en chemin ?"
                  ]
            },
            {
                  "text": "Ce que vous faites pour vous détendre",
                  "level": "elementary",
                  "hints": [
                        "Qu'est-ce qui vous aide à vous détendre ?",
                        "Préférez-vous être seul ou avec du monde ?",
                        "À quelle fréquence vous détendez-vous vraiment ?",
                        "Avez-vous un endroit préféré pour vous détendre ?",
                        "Est-ce facile de se détendre ou trouvez-vous cela difficile ?"
                  ]
            },
            {
                  "text": "Un film que vous avez regardé récemment",
                  "level": "elementary",
                  "hints": [
                        "Comment s'appelait le film ?",
                        "De quoi s'agissait-il ?",
                        "L'avez-vous aimé ?",
                        "Qui jouait dedans ?",
                        "Le recommanderiez-vous ?"
                  ]
            },
            {
                  "text": "Votre week-end idéal",
                  "level": "elementary",
                  "hints": [
                        "Que feriez-vous le vendredi soir ?",
                        "Sortiriez-vous ou resteriez-vous à la maison ?",
                        "Voyageriez-vous quelque part ?",
                        "Avec qui passeriez-vous du temps ?",
                        "Que mangeriez-vous ?"
                  ]
            },
            {
                  "text": "Une personne que vous admirez",
                  "level": "elementary",
                  "hints": [
                        "Qui est cette personne ?",
                        "Que fait-elle ?",
                        "Pourquoi l'admirez-vous ?",
                        "L'avez-vous déjà rencontrée ?",
                        "Que pouvez-vous apprendre d'elle ?"
                  ]
            },
            {
                  "text": "La destination de vos vacances de rêve",
                  "level": "elementary",
                  "hints": [
                        "Où iriez-vous ?",
                        "Pourquoi cet endroit ?",
                        "Avec qui iriez-vous ?",
                        "Que feriez-vous là-bas ?",
                        "Combien de temps resteriez-vous ?"
                  ]
            },
            {
                  "text": "Votre relation avec votre téléphone",
                  "level": "elementary",
                  "hints": [
                        "Combien d'heures par jour utilisez-vous votre téléphone ?",
                        "Pour quoi l'utilisez-vous le plus ?",
                        "Pourriez-vous vivre sans pendant une semaine ?",
                        "Est-ce qu'il vous aide ou vous distrait ?",
                        "Le consultez-vous dès le matin ?"
                  ]
            },
            {
                  "text": "Quelque chose de drôle qui vous est arrivé",
                  "level": "elementary",
                  "hints": [
                        "Quand cela s'est-il produit ?",
                        "Où étiez-vous ?",
                        "Avec qui étiez-vous ?",
                        "Que s'est-il passé exactement ?",
                        "En riez-vous encore maintenant ?"
                  ]
            },
            {
                  "text": "Vos loisirs",
                  "level": "elementary",
                  "hints": [
                        "Que faites-vous pendant votre temps libre ?",
                        "Quand avez-vous commencé ce loisir ?",
                        "Le faites-vous seul ou avec d'autres ?",
                        "Est-ce cher ?",
                        "Qu'est-ce que vous aimez là-dedans ?"
                  ]
            },
            {
                  "text": "Le temps qu'il fait là où vous vivez",
                  "level": "elementary",
                  "hints": [
                        "Quel temps fait-il habituellement ?",
                        "Quel est votre type de temps préféré ?",
                        "Le temps affecte-t-il votre humeur ?",
                        "Quel est le pire temps dont vous vous souvenez ?",
                        "Que faites-vous les jours de pluie ?"
                  ]
            },
            {
                  "text": "Un anniversaire dont vous vous souvenez",
                  "level": "elementary",
                  "hints": [
                        "C'était l'anniversaire de qui ?",
                        "Où a eu lieu la fête ?",
                        "Qu'avez-vous fait ?",
                        "Y avait-il une surprise ?",
                        "Qu'est-ce qui l'a rendu spécial ?"
                  ]
            },
            {
                  "text": "Les choses que vous aimez là où vous vivez",
                  "level": "elementary",
                  "hints": [
                        "Quelle est votre chose préférée dans votre ville ?",
                        "Est-ce un bon endroit pour les familles ?",
                        "Qu'y a-t-il à faire ?",
                        "Que changeriez-vous ?",
                        "Le recommanderiez-vous à un ami ?"
                  ]
            },
            {
                  "text": "Un dimanche typique",
                  "level": "elementary",
                  "hints": [
                        "À quelle heure vous réveillez-vous le dimanche ?",
                        "Avez-vous une routine ?",
                        "Cuisinez-vous un grand repas ?",
                        "Vous reposez-vous ou restez-vous occupé ?",
                        "Le dimanche est-il votre jour préféré ?"
                  ]
            },
            {
                  "text": "La nourriture de votre pays",
                  "level": "elementary",
                  "hints": [
                        "Quel est un plat traditionnel ?",
                        "Le cuisinez-vous à la maison ?",
                        "Quand est-ce que les gens le mangent ?",
                        "Est-ce difficile à faire ?",
                        "Le recommanderiez-vous à un étranger ?"
                  ]
            },
            {
                  "text": "Quelque chose que vous avez acheté récemment",
                  "level": "elementary",
                  "hints": [
                        "Qu'avez-vous acheté ?",
                        "Où l'avez-vous acheté ?",
                        "Était-ce cher ?",
                        "En aviez-vous besoin ou en aviez-vous juste envie ?",
                        "Êtes-vous content de l'achat ?"
                  ]
            },
            {
                  "text": "Votre application préférée",
                  "level": "elementary",
                  "hints": [
                        "Quelle application utilisez-vous le plus ?",
                        "Pour quoi l'utilisez-vous ?",
                        "Quand avez-vous commencé à l'utiliser ?",
                        "La recommanderiez-vous ?",
                        "Pourriez-vous vivre sans ?"
                  ]
            },
            {
                  "text": "Ce que vous avez mangé hier",
                  "level": "elementary",
                  "hints": [
                        "Qu'avez-vous pris au petit-déjeuner ?",
                        "Qu'avez-vous mangé au déjeuner ?",
                        "Avez-vous cuisiné ou mangé à l'extérieur ?",
                        "Était-ce une journée typique au niveau alimentaire ?",
                        "Quelle a été la meilleure chose que vous avez mangée ?"
                  ]
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
            },
            {
                  "text": "Les week-ends sont trop courts.",
                  "level": "elementary",
                  "hints": [
                        "Que fais-tu le week-end ?",
                        "Comment te sens-tu le dimanche soir ?",
                        "Que ferais-tu avec un week-end de trois jours ?",
                        "Travailles-tu ou étudies-tu le week-end ?",
                        "Quel est le week-end parfait pour toi ?"
                  ]
            },
            {
                  "text": "C'est impoli d'être en retard.",
                  "level": "elementary",
                  "hints": [
                        "Es-tu généralement à l'heure ?",
                        "Combien de temps attends-tu un ami ?",
                        "Est-ce acceptable d'avoir 10 minutes de retard ?",
                        "La ponctualité est-elle importante dans ta culture ?",
                        "Que fais-tu quand quelqu'un est très en retard ?"
                  ]
            },
            {
                  "text": "Les gens sont plus gentils dans les petites villes.",
                  "level": "elementary",
                  "hints": [
                        "Où habites-tu — village ou ville ?",
                        "Tes voisins sont-ils amicaux ?",
                        "Est-ce que les gens parlent aux inconnus là où tu habites ?",
                        "As-tu déjà vécu dans un type de lieu différent ?",
                        "Qu'est-ce qui rend un endroit accueillant ?"
                  ]
            },
            {
                  "text": "Avoir un animal de compagnie rend plus heureux.",
                  "level": "elementary",
                  "hints": [
                        "As-tu un animal de compagnie ?",
                        "Quel est le meilleur animal pour une personne occupée ?",
                        "Les animaux coûtent-ils cher ?",
                        "Un animal peut-il être un ami ?",
                        "Que faut-il faire pour bien s'occuper d'un animal ?"
                  ]
            },
            {
                  "text": "On peut en dire long sur quelqu'un grâce à ses chaussures.",
                  "level": "elementary",
                  "hints": [
                        "Regardes-tu les chaussures des gens ?",
                        "Que disent tes chaussures sur toi ?",
                        "La mode est-elle importante pour toi ?",
                        "Peux-tu juger une personne par son apparence ?",
                        "Qu'est-ce qui en dit plus sur le caractère d'une personne ?"
                  ]
            },
            {
                  "text": "C'est normal de manger seul au restaurant.",
                  "level": "elementary",
                  "hints": [
                        "As-tu déjà mangé seul au restaurant ?",
                        "Trouves-tu cela confortable ?",
                        "La nourriture est-elle meilleure avec d'autres personnes ?",
                        "Vois-tu beaucoup de gens manger seuls ?",
                        "Que fais-tu quand tu manges seul ?"
                  ]
            },
            {
                  "text": "Apprendre une langue est plus facile quand on est jeune.",
                  "level": "elementary",
                  "hints": [
                        "Quel âge avais-tu quand tu as commencé à apprendre cette langue ?",
                        "Penses-tu que l'âge compte pour l'apprentissage des langues ?",
                        "Quelle est la partie la plus difficile de l'apprentissage d'une langue ?",
                        "Connais-tu quelqu'un qui a appris une langue à l'âge adulte ?",
                        "Qu'est-ce qui t'aide le plus quand tu étudies ?"
                  ]
            },
            {
                  "text": "Les transports en commun sont préférables à la voiture.",
                  "level": "elementary",
                  "hints": [
                        "Comment te déplaces-tu dans ta ville ?",
                        "Les transports en commun sont-ils bons là où tu habites ?",
                        "Quels sont les problèmes liés à la possession d'une voiture ?",
                        "Est-ce cher de voyager en transports en commun ?",
                        "Que changerais-tu aux transports dans ta ville ?"
                  ]
            },
            {
                  "text": "Il est difficile de s'ennuyer quand on a un téléphone.",
                  "level": "elementary",
                  "hints": [
                        "Combien d'heures par jour utilises-tu ton téléphone ?",
                        "Pour quoi l'utilises-tu le plus ?",
                        "T'ennuyais-tu avant les smartphones ?",
                        "L'ennui est-il parfois une bonne chose ?",
                        "Pourrais-tu laisser ton téléphone à la maison pendant une journée ?"
                  ]
            },
            {
                  "text": "Cuisiner à la maison est toujours mieux que de manger au restaurant.",
                  "level": "elementary",
                  "hints": [
                        "À quelle fréquence cuisines-tu à la maison ?",
                        "Qu'est-ce qui est plus facile — cuisiner ou aller au restaurant ?",
                        "Manger au restaurant coûte-t-il cher là où tu habites ?",
                        "Quel est ton restaurant préféré ?",
                        "Quel est ton meilleur plat fait maison ?"
                  ]
            },
            {
                  "text": "Tout le monde devrait essayer de vivre à l'étranger pendant un an.",
                  "level": "elementary",
                  "hints": [
                        "As-tu vécu dans un autre pays ?",
                        "Qu'est-ce qui serait difficile dans le fait de vivre à l'étranger ?",
                        "Qu'est-ce qui serait excitant ?",
                        "Quel pays choisirais-tu ?",
                        "Vivre à l'étranger change-t-il une personne ?"
                  ]
            },
            {
                  "text": "Les super-héros sont plus intéressants que les vrais héros.",
                  "level": "elementary",
                  "hints": [
                        "Quel est ton super-héros préféré ?",
                        "Peux-tu penser à un héros de la vie réelle ?",
                        "Qu'est-ce qui fait de quelqu'un un héros ?",
                        "Pourquoi les gens aiment-ils les super-héros ?",
                        "Les vrais héros sont-ils plus importants ?"
                  ]
            },
            {
                  "text": "Il est important de faire son lit tous les matins.",
                  "level": "elementary",
                  "hints": [
                        "Fais-tu ton lit tous les jours ?",
                        "Une chambre bien rangée te fait-elle te sentir mieux ?",
                        "Est-ce important ou non ?",
                        "Quelle est ta routine matinale ?",
                        "Quelles petites habitudes as-tu ?"
                  ]
            },
            {
                  "text": "Le shopping est un passe-temps.",
                  "level": "elementary",
                  "hints": [
                        "Aimes-tu faire du shopping ?",
                        "Fais-tu tes achats en ligne ou dans les magasins ?",
                        "Combien de temps passes-tu à faire du shopping ?",
                        "Le shopping est-il relaxant ?",
                        "Qu'achètes-tu le plus souvent ?"
                  ]
            },
            {
                  "text": "Voyager seul est mieux que de voyager avec des amis.",
                  "level": "elementary",
                  "hints": [
                        "As-tu voyagé seul ?",
                        "Qu'est-ce qui est bien dans le fait de voyager seul ?",
                        "Qu'est-ce qui est bien dans le fait de voyager avec d'autres ?",
                        "Te sens-tu seul quand tu voyages seul ?",
                        "Quel est le meilleur voyage que tu as fait ?"
                  ]
            }
      ],
      "battle": [
            {
                  "topic": "Un salaire élevé vs un court trajet: qu'est-ce qui compte le plus dans un travail ?",
                  "sideA": "Salaire élevé",
                  "sideB": "Court trajet",
                  "level": "elementary",
                  "ideasA": [
                        "Augmenter la sécurité financière",
                        "Acheter des produits de meilleure qualité"
                  ],
                  "ideasB": [
                        "Réduire le stress des trajets quotidiens",
                        "Plus de temps pour la vie personnelle"
                  ]
            },
            {
                  "topic": "Changer souvent d'emploi vs rester dans la même entreprise: qu'est-ce qui est le mieux pour votre carrière ?",
                  "sideA": "Changer d'emploi",
                  "sideB": "Rester",
                  "level": "elementary",
                  "ideasA": [
                        "Acquérir des expériences professionnelles variées",
                        "Négocier un meilleur salaire"
                  ],
                  "ideasB": [
                        "Construire une confiance professionnelle à long terme",
                        "Opportunités de promotion interne"
                  ]
            },
            {
                  "topic": "Faire des heures supplémentaires vs partir à l'heure tous les jours: quelle est la meilleure habitude ?",
                  "sideA": "Heures sup",
                  "sideB": "À l'heure",
                  "level": "elementary",
                  "ideasA": [
                        "Terminer les projets urgents plus rapidement",
                        "Démontrer un engagement fort"
                  ],
                  "ideasB": [
                        "Prévenir le burnout professionnel",
                        "Maintenir un bon équilibre vie-travail"
                  ]
            },
            {
                  "topic": "Un patron strict vs un patron détendu: pour qui est-il préférable de travailler ?",
                  "sideA": "Patron strict",
                  "sideB": "Patron détendu",
                  "level": "elementary",
                  "ideasA": [
                        "Attentes et règles claires",
                        "Normes professionnelles plus élevées"
                  ],
                  "ideasB": [
                        "Encourager la pensée créative",
                        "Moins de pression au travail"
                  ]
            },
            {
                  "topic": "Travailler dans une grande entreprise vs une petite entreprise: qu'est-ce qui est mieux ?",
                  "sideA": "Grande entreprise",
                  "sideB": "Petite entreprise",
                  "level": "elementary",
                  "ideasA": [
                        "Parcours de carrière structurés",
                        "Meilleurs avantages sociaux"
                  ],
                  "ideasB": [
                        "Atmosphère amicale et proche",
                        "Responsabilités plus variées"
                  ]
            },
            {
                  "topic": "Obtenir une promotion vs obtenir plus de temps libre: que choisiriez-vous ?",
                  "sideA": "Promotion",
                  "sideB": "Temps libre",
                  "level": "elementary",
                  "ideasA": [
                        "Croissance professionnelle et statut",
                        "Responsabilité financière accrue"
                  ],
                  "ideasB": [
                        "Se concentrer sur les activités familiales",
                        "Développer des loisirs personnels"
                  ]
            },
            {
                  "topic": "Acheter une maison vs louer toute sa vie: quelle est la décision financière la plus intelligente ?",
                  "sideA": "Acheter",
                  "sideB": "Louer",
                  "level": "elementary",
                  "ideasA": [
                        "Investissement stable à long terme",
                        "Liberté de rénover la propriété"
                  ],
                  "ideasB": [
                        "Plus grande flexibilité pour déménager",
                        "Aucune responsabilité pour les réparations"
                  ]
            },
            {
                  "topic": "Vivre en centre-ville vs vivre en banlieue: qu'est-ce qui est mieux ?",
                  "sideA": "Centre-ville",
                  "sideB": "Banlieue",
                  "level": "elementary",
                  "ideasA": [
                        "Magasins accessibles à pied",
                        "Accès à une vie nocturne animée"
                  ],
                  "ideasB": [
                        "Environnement plus calme et sûr",
                        "Plus d'espace pour les familles"
                  ]
            },
            {
                  "topic": "Dépenser de l'argent pour des expériences vs pour des objets: qu'est-ce qui vous rend plus heureux ?",
                  "sideA": "Expériences",
                  "sideB": "Objets",
                  "level": "elementary",
                  "ideasA": [
                        "Créer des souvenirs durables",
                        "Opportunités de croissance personnelle"
                  ],
                  "ideasB": [
                        "Utilisation pratique quotidienne",
                        "Valeur physique durable"
                  ]
            },
            {
                  "topic": "Cuisiner tous les jours vs préparer les repas une fois par semaine: qu'est-ce qui est le plus pratique ?",
                  "sideA": "Cuisine quotidienne",
                  "sideB": "Meal prepping",
                  "level": "elementary",
                  "ideasA": [
                        "Utiliser des ingrédients frais chaque jour",
                        "Plus de variété dans l'alimentation"
                  ],
                  "ideasB": [
                        "Gagner un temps considérable",
                        "Meilleure organisation de la cuisine"
                  ]
            },
            {
                  "topic": "Avoir une femme de ménage vs faire son propre ménage: quel est le meilleur choix ?",
                  "sideA": "Ménage pro",
                  "sideB": "Soi-même",
                  "level": "elementary",
                  "ideasA": [
                        "Gagner du temps et de l'énergie",
                        "Qualité de nettoyage professionnelle"
                  ],
                  "ideasB": [
                        "Économiser de l'argent",
                        "Garder un contrôle total"
                  ]
            },
            {
                  "topic": "Vivre avec un partenaire vs vivre seul: qu'est-ce qui est mieux pour les adultes ?",
                  "sideA": "Avec partenaire",
                  "sideB": "Seul",
                  "level": "elementary",
                  "ideasA": [
                        "Partager les frais du foyer",
                        "Soutien émotionnel constant"
                  ],
                  "ideasB": [
                        "Indépendance personnelle totale",
                        "Paix et tranquillité"
                  ]
            },
            {
                  "topic": "Avoir des enfants tôt vs avoir des enfants plus tard dans la vie: qu'est-ce qui est mieux ?",
                  "sideA": "Tôt",
                  "sideB": "Plus tard",
                  "level": "elementary",
                  "ideasA": [
                        "Plus d'énergie pour l'éducation",
                        "Grandir avec ses enfants"
                  ],
                  "ideasB": [
                        "Meilleure stabilité financière",
                        "Plus d'expérience de vie à partager"
                  ]
            },
            {
                  "topic": "Relations familiales étroites vs indépendance vis-à-vis de la famille: qu'est-ce qui est le plus important à l'âge adulte ?",
                  "sideA": "Relations étroites",
                  "sideB": "Indépendance",
                  "level": "elementary",
                  "ideasA": [
                        "Soutien émotionnel fort",
                        "Maintenir les traditions familiales"
                  ],
                  "ideasB": [
                        "Liberté personnelle",
                        "Prendre des décisions indépendantes"
                  ]
            },
            {
                  "topic": "Rencontrer de nouvelles personnes vs garder d'anciennes amitiés: qu'est-ce qui a le plus de valeur ?",
                  "sideA": "Nouvelles personnes",
                  "sideB": "Anciens amis",
                  "level": "elementary",
                  "ideasA": [
                        "Apprendre de nouvelles perspectives",
                        "Élargir son réseau professionnel"
                  ],
                  "ideasB": [
                        "Histoire personnelle partagée",
                        "Niveau de confiance plus élevé"
                  ]
            },
            {
                  "topic": "Socialiser après le travail vs rentrer directement à la maison: qu'est-ce qui est mieux pour les relations de travail ?",
                  "sideA": "Socialiser",
                  "sideB": "Rentrer",
                  "level": "elementary",
                  "ideasA": [
                        "Améliorer la collaboration d'équipe",
                        "Communication informelle détendue"
                  ],
                  "ideasB": [
                        "Récupérer de l'énergie mentale",
                        "Temps de qualité avec la famille"
                  ]
            },
            {
                  "topic": "Aller à la salle de sport vs faire de l'exercice à l'extérieur: qu'est-ce qui est mieux pour les adultes ?",
                  "sideA": "Salle de sport",
                  "sideB": "Extérieur",
                  "level": "elementary",
                  "ideasA": [
                        "Accès à des équipements modernes",
                        "Travailler avec des entraîneurs pro"
                  ],
                  "ideasB": [
                        "Profiter de l'air frais",
                        "Pas de frais d'adhésion mensuels"
                  ]
            },
            {
                  "topic": "Régime strict vs manger de tout avec modération: qu'est-ce qui est plus sain ?",
                  "sideA": "Régime strict",
                  "sideB": "Modération",
                  "level": "elementary",
                  "ideasA": [
                        "Obtenir des résultats plus rapides",
                        "Développer une discipline forte"
                  ],
                  "ideasB": [
                        "Équilibre durable à long terme",
                        "Profiter de différents aliments"
                  ]
            },
            {
                  "topic": "Voir un médecin tôt vs attendre de voir si on va mieux: qu'est-ce qui est le plus sage ?",
                  "sideA": "Tôt",
                  "sideB": "Attendre",
                  "level": "elementary",
                  "ideasA": [
                        "Recevoir un traitement rapide",
                        "Prévenir des problèmes graves"
                  ],
                  "ideasB": [
                        "Laisser la récupération naturelle",
                        "Éviter les médicaments inutiles"
                  ]
            },
            {
                  "topic": "Dormir huit heures vs dormir six heures mais faire de l'exercice: qu'est-ce qui est mieux pour l'énergie ?",
                  "sideA": "8 heures",
                  "sideB": "6h + sport",
                  "level": "elementary",
                  "ideasA": [
                        "Récupération physique complète",
                        "Meilleure humeur quotidienne"
                  ],
                  "ideasB": [
                        "Meilleure forme physique",
                        "Maintenir le corps actif"
                  ]
            },
            {
                  "topic": "Réduire le stress par le sport vs par la relaxation: qu'est-ce qui fonctionne le mieux ?",
                  "sideA": "Sport",
                  "sideB": "Relaxation",
                  "level": "elementary",
                  "ideasA": [
                        "Évacuation du stress physique",
                        "Niveaux d'énergie plus élevés"
                  ],
                  "ideasB": [
                        "Paix mentale",
                        "Calmer l'esprit"
                  ]
            },
            {
                  "topic": "Smartphones vs conversation en face à face: qu'utilisons-nous le plus, et est-ce un problème ?",
                  "sideA": "Smartphones",
                  "sideB": "Face à face",
                  "level": "elementary",
                  "ideasA": [
                        "Accès mondial instantané",
                        "Rester connecté en permanence"
                  ],
                  "ideasB": [
                        "Exprimer de réelles émotions",
                        "Meilleure concentration personnelle"
                  ]
            },
            {
                  "topic": "Banque en ligne vs aller à la banque: qu'est-ce qui est mieux ?",
                  "sideA": "En ligne",
                  "sideB": "Aller à la banque",
                  "level": "elementary",
                  "ideasA": [
                        "Très pratique",
                        "Disponible 24h/24 et 7j/7"
                  ],
                  "ideasB": [
                        "Conseils d'experts personnels",
                        "Sécurité physique"
                  ]
            },
            {
                  "topic": "Travailler avec du papier vs travailler numériquement: qu'est-ce qui est le plus efficace ?",
                  "sideA": "Papier",
                  "sideB": "Numérique",
                  "level": "elementary",
                  "ideasA": [
                        "Meilleure concentration mentale",
                        "Réduire la fatigue oculaire"
                  ],
                  "ideasB": [
                        "Stockage numérique efficace",
                        "Recherche rapide d'informations"
                  ]
            },
            {
                  "topic": "Réseaux sociaux pour le réseautage vs rencontrer les gens en personne: qu'est-ce qui est le plus utile professionnellement ?",
                  "sideA": "Réseaux sociaux",
                  "sideB": "En personne",
                  "level": "elementary",
                  "ideasA": [
                        "Atteindre un public mondial",
                        "Contact professionnel rapide"
                  ],
                  "ideasB": [
                        "Construire une confiance plus forte",
                        "Avoir un impact personnel"
                  ]
            },
            {
                  "topic": "Voyage organisé vs voyage indépendant: qu'est-ce qui est mieux pour les adultes ?",
                  "sideA": "Organisé",
                  "sideB": "Indépendant",
                  "level": "elementary",
                  "ideasA": [
                        "Réduire le stress de la planification",
                        "Normes de sécurité garanties"
                  ],
                  "ideasB": [
                        "Aventure authentique",
                        "Expériences locales uniques"
                  ]
            },
            {
                  "topic": "Séjour en ville vs vacances à la plage: quelle est la meilleure façon de se détendre ?",
                  "sideA": "Séjour en ville",
                  "sideB": "Plage",
                  "level": "elementary",
                  "ideasA": [
                        "Visites culturelles intéressantes",
                        "Goûter la cuisine locale"
                  ],
                  "ideasB": [
                        "Brise marine relaxante",
                        "Détente physique complète"
                  ]
            },
            {
                  "topic": "Une seule longue vacance par an vs plusieurs courts séjours: qu'est-ce qui est mieux ?",
                  "sideA": "Une seule longue",
                  "sideB": "Plusieurs courtes",
                  "level": "elementary",
                  "ideasA": [
                        "Repos mental profond",
                        "Voyager dans des endroits lointains"
                  ],
                  "ideasB": [
                        "Pauses régulières du travail",
                        "Visiter plus de destinations"
                  ]
            },
            {
                  "topic": "Voyager en couple vs voyager seul: qu'est-ce qui est le plus agréable ?",
                  "sideA": "En couple",
                  "sideB": "Seul",
                  "level": "elementary",
                  "ideasA": [
                        "Partager des souvenirs spéciaux",
                        "Frais partagés réduits"
                  ],
                  "ideasB": [
                        "Choix personnel complet",
                        "Rencontrer plus de locaux"
                  ]
            },
            {
                  "topic": "Parler à son partenaire de chaque petit problème vs garder les choses pour soi: qu'est-ce qui est le plus sain ?",
                  "sideA": "Tout dire",
                  "sideB": "Garder pour soi",
                  "level": "elementary",
                  "ideasA": [
                        "Pleine honnêteté émotionnelle",
                        "Recevoir un soutien mutuel"
                  ],
                  "ideasB": [
                        "Éviter les drames inutiles",
                        "Paix mentale intérieure"
                  ]
            },
            {
                  "topic": "Consulter son téléphone dès le matin vs attendre après le petit-déjeuner: quelle est la meilleure habitude ?",
                  "sideA": "Dès le matin",
                  "sideB": "Après petit-déj",
                  "level": "elementary",
                  "ideasA": [
                        "Vérifier les nouvelles urgentes",
                        "Planifier sa journée tôt"
                  ],
                  "ideasB": [
                        "Début de journée tranquille",
                        "Pratiquer l'alimentation consciente"
                  ]
            },
            {
                  "topic": "Connaître le nom de ses voisins vs ne pas les connaître: quelle est l'expérience adulte la plus normale aujourd'hui ?",
                  "sideA": "Connaître",
                  "sideB": "Ne pas connaître",
                  "level": "elementary",
                  "ideasA": [
                        "Fort sentiment de communauté",
                        "Entraide et sécurité"
                  ],
                  "ideasB": [
                        "Garder une vie privée totale",
                        "Éviter les commérages"
                  ]
            },
            {
                  "topic": "Faire les courses avec une liste vs sans liste: quel type de personne a une meilleure vie ?",
                  "sideA": "Avec liste",
                  "sideB": "Sans liste",
                  "level": "elementary",
                  "ideasA": [
                        "Mode de vie organisé",
                        "Économiser de l'argent"
                  ],
                  "ideasB": [
                        "Choix spontanés",
                        "Idées de cuisine créatives"
                  ]
            },
            {
                  "topic": "Dire à son patron qu'on est malade vs aller travailler malade: quel est le choix le plus courageux ?",
                  "sideA": "Le dire",
                  "sideB": "Aller travailler",
                  "level": "elementary",
                  "ideasA": [
                        "Protéger ses collègues",
                        "Récupérer plus rapidement"
                  ],
                  "ideasB": [
                        "Montrer son engagement",
                        "Respecter les délais importants"
                  ]
            },
            {
                  "topic": "Travailler à temps plein vs travailler à temps partiel: qu'est-ce qui est mieux ?",
                  "sideA": "Temps plein",
                  "sideB": "Temps partiel",
                  "level": "elementary",
                  "ideasA": [
                        "Croissance de carrière stable",
                        "Meilleure stabilité financière"
                  ],
                  "ideasB": [
                        "Meilleur équilibre de vie",
                        "Plus de temps pour étudier"
                  ]
            },
            {
                  "topic": "Travailler dans un bureau vs travailler à domicile: que préférez-vous ?",
                  "sideA": "Bureau",
                  "sideB": "Domicile",
                  "level": "elementary",
                  "ideasA": [
                        "Contact social important",
                        "Espace de travail pro"
                  ],
                  "ideasB": [
                        "Pas de temps de trajet",
                        "Horaires flexibles"
                  ]
            },
            {
                  "topic": "Un travail qu'on aime vs un travail bien payé: qu'est-ce qui est le plus important ?",
                  "sideA": "Travail aimé",
                  "sideB": "Bien payé",
                  "level": "elementary",
                  "ideasA": [
                        "Passion professionnelle quotidienne",
                        "Moins de stress"
                  ],
                  "ideasB": [
                        "Grande liberté financière",
                        "Qualité de vie supérieure"
                  ]
            },
            {
                  "topic": "Travailler avec d'autres personnes vs travailler seul: qu'est-ce qui est mieux ?",
                  "sideA": "Avec les autres",
                  "sideB": "Seul",
                  "level": "elementary",
                  "ideasA": [
                        "Recevoir le soutien de l'équipe",
                        "Échanger des idées variées"
                  ],
                  "ideasB": [
                        "Concentration mentale calme",
                        "Style de travail indépendant"
                  ]
            },
            {
                  "topic": "Un trajet court vs un trajet long: qu'est-ce qui est le plus acceptable ?",
                  "sideA": "Court",
                  "sideB": "Long",
                  "level": "elementary",
                  "ideasA": [
                        "Plus de temps libre quotidien",
                        "Moins de fatigue de trajet"
                  ],
                  "ideasB": [
                        "Logement moins cher",
                        "Temps pour les podcasts"
                  ]
            },
            {
                  "topic": "Vivre seul vs vivre avec un partenaire: qu'est-ce qui est mieux ?",
                  "sideA": "Seul",
                  "sideB": "Partenaire",
                  "level": "elementary",
                  "ideasA": [
                        "Espace personnel privé",
                        "Indépendance totale"
                  ],
                  "ideasB": [
                        "Vie quotidienne partagée",
                        "Soutien dans les problèmes"
                  ]
            },
            {
                  "topic": "Grande ville vs petite ville: quel est le meilleur endroit pour vivre en tant qu'adulte ?",
                  "sideA": "Grande ville",
                  "sideB": "Petite ville",
                  "level": "elementary",
                  "ideasA": [
                        "Marchés du travail dynamiques",
                        "Divertissements infinis"
                  ],
                  "ideasB": [
                        "Coût de la vie moins élevé",
                        "Air pur et frais"
                  ]
            },
            {
                  "topic": "Cuisiner à la maison vs manger à l'extérieur: qu'est-ce qui est mieux pour la vie quotidienne ?",
                  "sideA": "À la maison",
                  "sideB": "Extérieur",
                  "level": "elementary",
                  "ideasA": [
                        "Repas beaucoup plus sains",
                        "Réduire les coûts du foyer"
                  ],
                  "ideasB": [
                        "Pas de nettoyage de cuisine",
                        "Goûter de la cuisine pro"
                  ]
            },
            {
                  "topic": "Avoir des enfants vs ne pas avoir d'enfants: quelle vie est la meilleure ?",
                  "sideA": "Enfants",
                  "sideB": "Pas d'enfants",
                  "level": "elementary",
                  "ideasA": [
                        "Créer un héritage familial",
                        "Vivre l'amour et la joie"
                  ],
                  "ideasB": [
                        "Liberté totale de voyager",
                        "Forte concentration sur la carrière"
                  ]
            },
            {
                  "topic": "Louer un appartement vs acheter une maison: qu'est-ce qui est mieux pour les jeunes adultes ?",
                  "sideA": "Louer",
                  "sideB": "Acheter",
                  "level": "elementary",
                  "ideasA": [
                        "Plus grande mobilité sociale",
                        "Moins de soucis financiers"
                  ],
                  "ideasB": [
                        "Se constituer un capital",
                        "Espace pour un jardin"
                  ]
            },
            {
                  "topic": "Faire de l'exercice tous les jours vs se reposer: qu'est-ce qui est mieux pour votre santé ?",
                  "sideA": "Exercice",
                  "sideB": "Repos",
                  "level": "elementary",
                  "ideasA": [
                        "Meilleure forme physique",
                        "Augmenter les niveaux d'énergie"
                  ],
                  "ideasB": [
                        "Récupération musculaire essentielle",
                        "Soutenir la santé mentale"
                  ]
            },
            {
                  "topic": "Aller chez le médecin vs attendre: qu'est-ce qui est mieux quand on se sent malade ?",
                  "sideA": "Médecin",
                  "sideB": "Attendre",
                  "level": "elementary",
                  "ideasA": [
                        "Obtenir des conseils pro",
                        "Récupération médicale rapide"
                  ],
                  "ideasB": [
                        "Éviter les cliniques bondées",
                        "Favoriser la guérison naturelle"
                  ]
            },
            {
                  "topic": "Dormir huit heures vs dormir moins: qu'est-ce qui est le plus réaliste pour les adultes ?",
                  "sideA": "8 heures",
                  "sideB": "Moins",
                  "level": "elementary",
                  "ideasA": [
                        "Concentration mentale maximale",
                        "Meilleure humeur"
                  ],
                  "ideasB": [
                        "Faire face à la réalité",
                        "Temps pour les loisirs"
                  ]
            },
            {
                  "topic": "Aller au travail à pied vs prendre la voiture: qu'est-ce qui est mieux pour votre santé ?",
                  "sideA": "À pied",
                  "sideB": "Voiture",
                  "level": "elementary",
                  "ideasA": [
                        "Mouvement physique actif",
                        "Bon départ pour la journée"
                  ],
                  "ideasB": [
                        "Protection contre la météo",
                        "Économiser son énergie"
                  ]
            },
            {
                  "topic": "Achats en ligne vs achats en magasin: que préférez-vous ?",
                  "sideA": "En ligne",
                  "sideB": "Magasin",
                  "level": "elementary",
                  "ideasA": [
                        "Praticité des achats",
                        "Trouver de meilleurs prix"
                  ],
                  "ideasB": [
                        "Essayer les vêtements",
                        "Soutenir les commerces locaux"
                  ]
            },
            {
                  "topic": "Économiser pour l'avenir vs profiter de l'argent maintenant: qu'est-ce qui est le plus sage ?",
                  "sideA": "Économiser",
                  "sideB": "Profiter maintenant",
                  "level": "elementary",
                  "ideasA": [
                        "Sécurité financière future",
                        "Investissement à long terme"
                  ],
                  "ideasB": [
                        "Augmenter le bonheur mental",
                        "Vivre pleinement sa vie"
                  ]
            },
            {
                  "topic": "Choses chères vs choses bon marché: qu'est-ce qui a le meilleur rapport qualité-prix ?",
                  "sideA": "Chères",
                  "sideB": "Bon marché",
                  "level": "elementary",
                  "ideasA": [
                        "Meilleure qualité de produit",
                        "Grande durabilité"
                  ],
                  "ideasB": [
                        "Faible risque financier",
                        "Économiser plus d'argent"
                  ]
            },
            {
                  "topic": "Acheter neuf vs acheter d'occasion: qu'est-ce qui est mieux ?",
                  "sideA": "Neuf",
                  "sideB": "Occasion",
                  "level": "elementary",
                  "ideasA": [
                        "En parfait état",
                        "Garanties sur le produit"
                  ],
                  "ideasB": [
                        "Choix écologique",
                        "Prix très bas"
                  ]
            },
            {
                  "topic": "Regarder la télé à la maison vs sortir: quelle est la meilleure soirée ?",
                  "sideA": "Télé",
                  "sideB": "Sortir",
                  "level": "elementary",
                  "ideasA": [
                        "Détente complète",
                        "Coût financier nul"
                  ],
                  "ideasB": [
                        "Contact social",
                        "Atmosphère vibrante"
                  ]
            },
            {
                  "topic": "Vacances en famille vs vacances entre amis: qu'est-ce qui est mieux ?",
                  "sideA": "Famille",
                  "sideB": "Amis",
                  "level": "elementary",
                  "ideasA": [
                        "Lien émotionnel profond",
                        "Aide financière supplémentaire"
                  ],
                  "ideasB": [
                        "Partager les mêmes loisirs",
                        "Niveaux d'énergie dynamiques"
                  ]
            },
            {
                  "topic": "Rester dans son pays vs voyager à l'étranger: quelles sont les meilleures vacances ?",
                  "sideA": "Son pays",
                  "sideB": "Étranger",
                  "level": "elementary",
                  "ideasA": [
                        "Facilité de voyage",
                        "Soutenir le tourisme local"
                  ],
                  "ideasB": [
                        "Découvrir d'autres cultures",
                        "Pratiquer de nouvelles langues"
                  ]
            },
            {
                  "topic": "Le sport vs la lecture: quel est le meilleur passe-temps pour les adultes ?",
                  "sideA": "Sport",
                  "sideB": "Lecture",
                  "level": "elementary",
                  "ideasA": [
                        "Améliorer la santé physique",
                        "Esprit d'équipe"
                  ],
                  "ideasB": [
                        "Stimuler la croissance mentale",
                        "Détente mentale profonde"
                  ]
            },
            {
                  "topic": "Voir des amis souvent vs avoir du temps seul: qu'est-ce qui est le plus important ?",
                  "sideA": "Amis",
                  "sideB": "Seul",
                  "level": "elementary",
                  "ideasA": [
                        "Soutien social vital",
                        "Rires partagés"
                  ],
                  "ideasB": [
                        "Espace de réflexion",
                        "Paix mentale totale"
                  ]
            },
            {
                  "topic": "Répondre aux e-mails immédiatement vs les laisser pour plus tard: qu'est-ce qui est le plus professionnel ?",
                  "sideA": "Immediatement",
                  "sideB": "Plus tard",
                  "level": "elementary",
                  "ideasA": [
                        "Grande efficacité",
                        "Augmenter la fiabilité"
                  ],
                  "ideasB": [
                        "Préparer des réponses réfléchies",
                        "Garder sa concentration"
                  ]
            },
            {
                  "topic": "Faire la vaisselle immédiatement vs la laisser jusqu'à demain: qu'est-ce qui est mieux ?",
                  "sideA": "Immédiatement",
                  "sideB": "Demain",
                  "level": "elementary",
                  "ideasA": [
                        "Garder une cuisine propre",
                        "Début de journée serein"
                  ],
                  "ideasB": [
                        "Profiter du repos du soir",
                        "Passer du temps en famille"
                  ]
            },
            {
                  "topic": "Être toujours en avance vs toujours cinq minutes en retard: qu'est-ce qui est pire au travail ?",
                  "sideA": "En avance",
                  "sideB": "En retard",
                  "level": "elementary",
                  "ideasA": [
                        "Temps d'attente perdu",
                        "Écart de productivité"
                  ],
                  "ideasB": [
                        "Manque de professionnalisme",
                        "Rater le début des réunions"
                  ]
            },
            {
                  "topic": "Avoir un bureau très organisé vs un bureau en désordre: quelle personne est la plus productive ?",
                  "sideA": "Organisé",
                  "sideB": "Désordre",
                  "level": "elementary",
                  "ideasA": [
                        "Trouver les documents vite",
                        "Esprit clair"
                  ],
                  "ideasB": [
                        "Favorise le chaos créatif",
                        "Accès rapide aux outils"
                  ]
            },
            {
                  "topic": "Parler de travail au dîner vs pas de discussion de travail au dîner: quelle règle est la meilleure ?",
                  "sideA": "Parler travail",
                  "sideB": "Pas de travail",
                  "level": "elementary",
                  "ideasA": [
                        "Partager ses problèmes",
                        "Lien professionnel"
                  ],
                  "ideasB": [
                        "Se déconnecter",
                        "Repos de qualité"
                  ]
            },
            {
                  "topic": "Vivre en famille vs Seul: qu'est-ce qui est mieux ?",
                  "sideA": "En famille",
                  "sideB": "Seul",
                  "level": "elementary",
                  "ideasA": [
                        "Compagnie constante",
                        "Système de soutien"
                  ],
                  "ideasB": [
                        "Indépendance totale",
                        "Vie privée absolue"
                  ]
            },
            {
                  "topic": "Avoir un frère vs une sœur: qu'est-ce qui est mieux ?",
                  "sideA": "Frère",
                  "sideB": "Sœur",
                  "level": "elementary",
                  "ideasA": [
                        "Faire du sport",
                        "Sentiment de protection"
                  ],
                  "ideasB": [
                        "Discussions profondes",
                        "Partager des secrets"
                  ]
            },
            {
                  "topic": "Grande vs Petite famille: laquelle est la plus agréable ?",
                  "sideA": "Grande",
                  "sideB": "Petite",
                  "level": "elementary",
                  "ideasA": [
                        "Maison vivante et animée",
                        "Beaucoup d'amusement"
                  ],
                  "ideasB": [
                        "Vie tranquille",
                        "Liens émotionnels forts"
                  ]
            },
            {
                  "topic": "L'aîné vs Le cadet: qu'est-ce qui est mieux ?",
                  "sideA": "Aîné",
                  "sideB": "Cadet",
                  "level": "elementary",
                  "ideasA": [
                        "Sens du leadership",
                        "Apprendre la responsabilité"
                  ],
                  "ideasB": [
                        "Plus d'attention",
                        "Règles plus souples"
                  ]
            },
            {
                  "topic": "École le matin vs après-midi: qu'est-ce qui est mieux ?",
                  "sideA": "Matin",
                  "sideB": "Après-midi",
                  "level": "elementary",
                  "ideasA": [
                        "Temps libre l'après-midi",
                        "Garder une routine"
                  ],
                  "ideasB": [
                        "Dormir plus tard",
                        "Début de journée calme"
                  ]
            },
            {
                  "topic": "Lecture vs Maths: lequel est le plus amusant ?",
                  "sideA": "Lecture",
                  "sideB": "Maths",
                  "level": "elementary",
                  "ideasA": [
                        "Histoires captivantes",
                        "Enrichir son vocabulaire"
                  ],
                  "ideasB": [
                        "Résolution de problèmes",
                        "Pensée logique"
                  ]
            },
            {
                  "topic": "École vs Maison: qu'est-ce qui est mieux ?",
                  "sideA": "École",
                  "sideB": "Maison",
                  "level": "elementary",
                  "ideasA": [
                        "Contact social direct",
                        "Aide du professeur"
                  ],
                  "ideasB": [
                        "Confort",
                        "Horaires flexibles"
                  ]
            },
            {
                  "topic": "Devoirs vs Pas de devoirs: qu'est-ce qui aide le plus ?",
                  "sideA": "Devoirs",
                  "sideB": "Aucun",
                  "level": "elementary",
                  "ideasA": [
                        "Renforcer les leçons",
                        "Autodiscipline"
                  ],
                  "ideasB": [
                        "Temps libre",
                        "Période de repos mental"
                  ]
            },
            {
                  "topic": "Seul vs Avec un partenaire: que préférez-vous ?",
                  "sideA": "Seul",
                  "sideB": "Partenaire",
                  "level": "elementary",
                  "ideasA": [
                        "Concentration individuelle",
                        "Étude indépendante"
                  ],
                  "ideasB": [
                        "Partager le savoir",
                        "Amusement collaboratif"
                  ]
            },
            {
                  "topic": "Papier vs Ordinateur: lequel est le mieux ?",
                  "sideA": "Papier",
                  "sideB": "Ordinateur",
                  "level": "elementary",
                  "ideasA": [
                        "Sensation de l'écriture",
                        "Améliorer la mémoire"
                  ],
                  "ideasB": [
                        "Vitesse de frappe",
                        "Recherche numérique"
                  ]
            },
            {
                  "topic": "Petit-déjeuner vs Dîner: quel repas est le plus important ?",
                  "sideA": "Petit-déjeuner",
                  "sideB": "Dîner",
                  "level": "elementary",
                  "ideasA": [
                        "Énergie matinale",
                        "Habitudes saines"
                  ],
                  "ideasB": [
                        "Moment familial",
                        "Repas principal"
                  ]
            },
            {
                  "topic": "Chaud vs Froid: lequel est le mieux ?",
                  "sideA": "Chaud",
                  "sideB": "Froid",
                  "level": "elementary",
                  "ideasA": [
                        "Réconfortant en hiver",
                        "Goût traditionnel"
                  ],
                  "ideasB": [
                        "Frais pour l'été",
                        "Variété de salades"
                  ]
            },
            {
                  "topic": "Maison vs Restaurant: lequel est le mieux ?",
                  "sideA": "Maison",
                  "sideB": "Restaurant",
                  "level": "elementary",
                  "ideasA": [
                        "Contrôle des ingrédients",
                        "Coût réduit"
                  ],
                  "ideasB": [
                        "Chefs professionnels",
                        "Pas de ménage"
                  ]
            },
            {
                  "topic": "Sucré vs Salé: que préférez-vous ?",
                  "sideA": "Sucré",
                  "sideB": "Salé",
                  "level": "elementary",
                  "ideasA": [
                        "Énergie instantanée",
                        "Délicieuses douceurs"
                  ],
                  "ideasB": [
                        "Valeur nutritionnelle",
                        "Rassasié plus longtemps"
                  ]
            },
            {
                  "topic": "Cuisiner vs Acheter: qu'est-ce qui est plus agréable ?",
                  "sideA": "Cuisiner",
                  "sideB": "Acheter",
                  "level": "elementary",
                  "ideasA": [
                        "Processus créatif",
                        "Ingrédients sains"
                  ],
                  "ideasB": [
                        "Grande praticité",
                        "Gagner du temps"
                  ]
            },
            {
                  "topic": "Se lever tôt vs tard: qu'est-ce qui est mieux ?",
                  "sideA": "Tôt",
                  "sideB": "Tard",
                  "level": "elementary",
                  "ideasA": [
                        "Heures productives",
                        "Lever de soleil calme"
                  ],
                  "ideasB": [
                        "Repos complet",
                        "Énergie nocturne"
                  ]
            },
            {
                  "topic": "Matin vs Soir: quel moment de la journée est le plus agréable ?",
                  "sideA": "Matin",
                  "sideB": "Soir",
                  "level": "elementary",
                  "ideasA": [
                        "Atmosphère fraîche",
                        "Nouveau départ"
                  ],
                  "ideasB": [
                        "Moment social",
                        "Relaxation totale"
                  ]
            },
            {
                  "topic": "Semaine vs Week-end: que préférez-vous ?",
                  "sideA": "Semaine",
                  "sideB": "Week-end",
                  "level": "elementary",
                  "ideasA": [
                        "Travail productif",
                        "Structure régulière"
                  ],
                  "ideasB": [
                        "Liberté totale",
                        "Temps pour les loisirs"
                  ]
            },
            {
                  "topic": "Été vs Hiver: quelle saison est la meilleure ?",
                  "sideA": "Été",
                  "sideB": "Hiver",
                  "level": "elementary",
                  "ideasA": [
                        "Plages ensoleillées",
                        "Vie en plein air"
                  ],
                  "ideasB": [
                        "Activités de neige",
                        "Ambiance cosy"
                  ]
            },
            {
                  "topic": "Se coucher tôt vs tard: qu'est-ce qui est le plus sain ?",
                  "sideA": "Tôt",
                  "sideB": "Tard",
                  "level": "elementary",
                  "ideasA": [
                        "Rythme naturel",
                        "Meilleure humeur"
                  ],
                  "ideasB": [
                        "Créativité du soir",
                        "Temps pour les films"
                  ]
            },
            {
                  "topic": "Maison vs Appartement: lequel est le mieux ?",
                  "sideA": "Maison",
                  "sideB": "Appartement",
                  "level": "elementary",
                  "ideasA": [
                        "Jardin privé",
                        "Plus d'espace"
                  ],
                  "ideasB": [
                        "Ménage facile",
                        "Position centrale"
                  ]
            },
            {
                  "topic": "Ville vs Campagne: où est-il préférable de vivre ?",
                  "sideA": "Ville",
                  "sideB": "Campagne",
                  "level": "elementary",
                  "ideasA": [
                        "Vie culturelle",
                        "Marché du travail"
                  ],
                  "ideasB": [
                        "Air pur",
                        "Nature calme"
                  ]
            },
            {
                  "topic": "Chambre vs Salon: quelle pièce préférez-vous ?",
                  "sideA": "Chambre",
                  "sideB": "Salon",
                  "level": "elementary",
                  "ideasA": [
                        "Vie privée",
                        "Refuge pour dormir"
                  ],
                  "ideasB": [
                        "Espace familial",
                        "Grand écran TV"
                  ]
            },
            {
                  "topic": "Jeux d'intérieur vs d'extérieur: lesquels sont les plus amusants ?",
                  "sideA": "Intérieur",
                  "sideB": "Extérieur",
                  "level": "elementary",
                  "ideasA": [
                        "Jeux de société",
                        "Pas de météo"
                  ],
                  "ideasB": [
                        "Mouvement",
                        "Bienfaits du soleil"
                  ]
            },
            {
                  "topic": "TV vs Livre: lequel est le mieux ?",
                  "sideA": "TV",
                  "sideB": "Livre",
                  "level": "elementary",
                  "ideasA": [
                        "Histoires visuelles",
                        "Détente facile"
                  ],
                  "ideasB": [
                        "Imagination profonde",
                        "Vocabulaire"
                  ]
            },
            {
                  "topic": "Sport vs Jeu vidéo: lequel est le plus amusant ?",
                  "sideA": "Sport",
                  "sideB": "Jeu vidéo",
                  "level": "elementary",
                  "ideasA": [
                        "Forme physique",
                        "Équipe sociale"
                  ],
                  "ideasB": [
                        "Compétences strat.",
                        "Mondes digitaux"
                  ]
            },
            {
                  "topic": "Dessin vs Chant: quel passe-temps est le meilleur ?",
                  "sideA": "Dessin",
                  "sideB": "Chant",
                  "level": "elementary",
                  "ideasA": [
                        "Créativité visuelle",
                        "Temps pour soi"
                  ],
                  "ideasB": [
                        "Libération émotionnelle",
                        "Expression"
                  ]
            },
            {
                  "topic": "Jouer seul vs avec des amis: lequel est le plus amusant ?",
                  "sideA": "Seul",
                  "sideB": "Amis",
                  "level": "elementary",
                  "ideasA": [
                        "Concentration",
                        "Indépendance"
                  ],
                  "ideasB": [
                        "Rires partagés",
                        "Jeu collaboratif"
                  ]
            },
            {
                  "topic": "Natation vs Course: quel sport préférez-vous ?",
                  "sideA": "Natation",
                  "sideB": "Course",
                  "level": "elementary",
                  "ideasA": [
                        "Eau rafraîchissante",
                        "Articulations"
                  ],
                  "ideasB": [
                        "Facile à commencer",
                        "Vues extérieures"
                  ]
            },
            {
                  "topic": "Musique vs Sport: quel passe-temps est le meilleur ?",
                  "sideA": "Musique",
                  "sideB": "Sport",
                  "level": "elementary",
                  "ideasA": [
                        "Paix émotionnelle",
                        "Culture"
                  ],
                  "ideasB": [
                        "Santé physique",
                        "Succès d'équipe"
                  ]
            },
            {
                  "topic": "Animaux de ferme vs sauvages: lesquels sont les plus intéressants ?",
                  "sideA": "Ferme",
                  "sideB": "Sauvages",
                  "level": "elementary",
                  "ideasA": [
                        "Produits utiles",
                        "Compagnons amicaux"
                  ],
                  "ideasB": [
                        "Biomes exotiques",
                        "Mystère naturel"
                  ]
            },
            {
                  "topic": "Pluie vs Soleil: quel temps préférez-vous ?",
                  "sideA": "Pluie",
                  "sideB": "Soleil",
                  "level": "elementary",
                  "ideasA": [
                        "Essentiel aux plantes",
                        "Ambiance cocooning"
                  ],
                  "ideasB": [
                        "Temps de plage",
                        "Vitamine D"
                  ]
            },
            {
                  "topic": "Mer vs Montagne: lequel est le mieux pour les vacances ?",
                  "sideA": "Mer",
                  "sideB": "Montagne",
                  "level": "elementary",
                  "ideasA": [
                        "Baignade",
                        "Vagues relaxantes"
                  ],
                  "ideasB": [
                        "Air pur",
                        "Vues magnifiques"
                  ]
            },
            {
                  "topic": "Fleurs vs Arbres: lesquels sont les plus beaux ?",
                  "sideA": "Fleurs",
                  "sideB": "Arbres",
                  "level": "elementary",
                  "ideasA": [
                        "Couleurs vives",
                        "Doux parfums"
                  ],
                  "ideasB": [
                        "Hauteur majestueuse",
                        "Fournissent de l'oxygène"
                  ]
            },
            {
                  "topic": "Voiture vs Bus: lequel est le mieux ?",
                  "sideA": "Voiture",
                  "sideB": "Bus",
                  "level": "elementary",
                  "ideasA": [
                        "Trajet privé",
                        "Porte-à-porte"
                  ],
                  "ideasB": [
                        "Coûts réduits",
                        "Écologique"
                  ]
            },
            {
                  "topic": "Marcher vs Vélo: quel est le meilleur moyen de se déplacer ?",
                  "sideA": "Marcher",
                  "sideB": "Vélo",
                  "level": "elementary",
                  "ideasA": [
                        "Simple",
                        "Bienfaits santé"
                  ],
                  "ideasB": [
                        "Vitesse",
                        "Plus longue distance"
                  ]
            },
            {
                  "topic": "Vacances courtes vs longues: qu'est-ce qui est mieux ?",
                  "sideA": "Courtes",
                  "sideB": "Longues",
                  "level": "elementary",
                  "ideasA": [
                        "Pauses régulières",
                        "Petit budget"
                  ],
                  "ideasB": [
                        "Réinitialisation",
                        "Immersion culturelle"
                  ]
            },
            {
                  "topic": "Voyager seul vs en famille: lequel est le plus amusant ?",
                  "sideA": "Seul",
                  "sideB": "Famille",
                  "level": "elementary",
                  "ideasA": [
                        "Croissance",
                        "Liberté totale"
                  ],
                  "ideasB": [
                        "Joie partagée",
                        "Soutien financier"
                  ]
            },
            {
                  "topic": "Achats en ligne vs Achats en personne",
                  "sideA": "En ligne",
                  "sideB": "En personne",
                  "level": "elementary",
                  "ideasA": [
                        "Praticité",
                        "Meilleurs prix"
                  ],
                  "ideasB": [
                        "Essayer",
                        "Gratification instantanée"
                  ]
            },
            {
                  "topic": "Livres papier vs E-books",
                  "sideA": "Papier",
                  "sideB": "E-books",
                  "level": "elementary",
                  "ideasA": [
                        "Toucher traditionnel",
                        "Collection"
                  ],
                  "ideasB": [
                        "Portabilité",
                        "Gain de place"
                  ]
            },
            {
                  "topic": "Étudier le matin ou étudier le soir: quand est-ce mieux ?",
                  "sideA": "Matin",
                  "sideB": "Soir",
                  "level": "elementary",
                  "ideasA": [
                        "Cerveau frais",
                        "Pas de distractions"
                  ],
                  "ideasB": [
                        "Calme nocturne",
                        "Révision du jour"
                  ]
            },
            {
                  "topic": "Professeurs sévères ou professeurs sympas: qui aide le plus les élèves ?",
                  "sideA": "Sévères",
                  "sideB": "Sympas",
                  "level": "elementary",
                  "ideasA": [
                        "Haute discipline",
                        "Normes claires"
                  ],
                  "ideasB": [
                        "Motivation",
                        "Questions ouvertes"
                  ]
            },
            {
                  "topic": "Apprendre avec un manuel ou apprendre avec des vidéos: qu'est-ce qui est plus efficace ?",
                  "sideA": "Manuel",
                  "sideB": "Vidéos",
                  "level": "elementary",
                  "ideasA": [
                        "Leçons structurées",
                        "Expérience tactile"
                  ],
                  "ideasB": [
                        "Bases visuelles",
                        "Contenu dynamique"
                  ]
            },
            {
                  "topic": "Cours courts ou cours longs: lesquels aident à mieux apprendre ?",
                  "sideA": "Courts",
                  "sideB": "Longs",
                  "level": "elementary",
                  "ideasA": [
                        "Meilleure concentration",
                        "Moins de fatigue"
                  ],
                  "ideasB": [
                        "Immersion profonde",
                        "Étude détaillée"
                  ]
            },
            {
                  "topic": "Projets de groupe ou travaux individuels: que préférez-vous ?",
                  "sideA": "Groupe",
                  "sideB": "Individuel",
                  "level": "elementary",
                  "ideasA": [
                        "Améliorer la collab",
                        "Échanger des idées"
                  ],
                  "ideasB": [
                        "Autosuffisance",
                        "Focus personnel"
                  ]
            },
            {
                  "topic": "Uniforme scolaire ou vêtements décontractés à l'école: qu'est-ce qui est mieux ?",
                  "sideA": "Uniforme",
                  "sideB": "Décontracté",
                  "level": "elementary",
                  "ideasA": [
                        "Égalité des élèves",
                        "Simplicité"
                  ],
                  "ideasB": [
                        "Expression de soi",
                        "Confort"
                  ]
            },
            {
                  "topic": "Repas faits maison ou restauration rapide: qu'est-ce qui est mieux ?",
                  "sideA": "Fait maison",
                  "sideB": "Fast-food",
                  "level": "elementary",
                  "ideasA": [
                        "Choix sains",
                        "Recettes spécifiques"
                  ],
                  "ideasB": [
                        "Service instantané",
                        "Pratique"
                  ]
            },
            {
                  "topic": "Trois gros repas ou plusieurs petites collations: qu'est-ce qui est plus sain ?",
                  "sideA": "Gros repas",
                  "sideB": "Collations",
                  "level": "elementary",
                  "ideasA": [
                        "Rythme cohérent",
                        "Satiété"
                  ],
                  "ideasB": [
                        "Énergie stable",
                        "Métabolisme"
                  ]
            },
            {
                  "topic": "Nourriture végétarienne ou viande: quel régime est le meilleur ?",
                  "sideA": "Végétarien",
                  "sideB": "Viande",
                  "level": "elementary",
                  "ideasA": [
                        "Écologique",
                        "Digestion légère"
                  ],
                  "ideasB": [
                        "Protéines",
                        "Gout traditionnel"
                  ]
            },
            {
                  "topic": "Boire du thé ou boire du café: qu'est-ce qui est mieux ?",
                  "sideA": "Thé",
                  "sideB": "Café",
                  "level": "elementary",
                  "ideasA": [
                        "Calmant",
                        "Plantes saines"
                  ],
                  "ideasB": [
                        "Énergie",
                        "Culture sociale"
                  ]
            },
            {
                  "topic": "Manger seul ou manger avec d'autres: que préférez-vous ?",
                  "sideA": "Seul",
                  "sideB": "Avec d'autres",
                  "level": "elementary",
                  "ideasA": [
                        "Calme",
                        "Alimentation consciente"
                  ],
                  "ideasB": [
                        "Lien social",
                        "Partager la joie"
                  ]
            },
            {
                  "topic": "Pratiquer un sport d'équipe ou un sport individuel: qu'est-ce qui est mieux ?",
                  "sideA": "Sport d'équipe",
                  "sideB": "Sport individuel",
                  "level": "elementary",
                  "ideasA": [
                        "Coopération",
                        "Soutien social"
                  ],
                  "ideasB": [
                        "Objectifs persos",
                        "Autonomie"
                  ]
            },
            {
                  "topic": "Passer son temps libre à l'intérieur ou à l'extérieur: qu'est-ce qui est mieux ?",
                  "sideA": "Intérieur",
                  "sideB": "Extérieur",
                  "level": "elementary",
                  "ideasA": [
                        "Confort intérieur",
                        "Loisirs digitaux"
                  ],
                  "ideasB": [
                        "Santé",
                        "Mouvement physique"
                  ]
            },
            {
                  "topic": "Cinéma ou théâtre: quelle est la meilleure sortie ?",
                  "sideA": "Cinéma",
                  "sideB": "Théâtre",
                  "level": "elementary",
                  "ideasA": [
                        "Écran immersif",
                        "Effets sonores"
                  ],
                  "ideasB": [
                        "Jeu en direct",
                        "Tradition culturelle"
                  ]
            },
            {
                  "topic": "Écouter de la musique ou jouer d'un instrument: qu'est-ce qui est plus agréable ?",
                  "sideA": "Écouter",
                  "sideB": "Jouer",
                  "level": "elementary",
                  "ideasA": [
                        "Joie sans effort",
                        "Variété musicale"
                  ],
                  "ideasB": [
                        "Développement",
                        "Expression créative"
                  ]
            },
            {
                  "topic": "Jeux vidéo ou jeux de société: lesquels sont les plus amusants ?",
                  "sideA": "Jeux vidéo",
                  "sideB": "Jeux de société",
                  "level": "elementary",
                  "ideasA": [
                        "Mondes profonds",
                        "Amis en ligne"
                  ],
                  "ideasB": [
                        "Face-à-face",
                        "Pièces tactiles"
                  ]
            },
            {
                  "topic": "Faire du shopping ou rester à la maison: quelle est la meilleure façon de passer le week-end ?",
                  "sideA": "Shopping",
                  "sideB": "Rester chez soi",
                  "level": "elementary",
                  "ideasA": [
                        "Activité sociale",
                        "Découvrir"
                  ],
                  "ideasB": [
                        "Détente mentale",
                        "Récupération physique"
                  ]
            },
            {
                  "topic": "Téléphone portable ou ordinateur: lequel est le plus utile dans la vie quotidienne ?",
                  "sideA": "Portable",
                  "sideB": "Ordinateur",
                  "level": "elementary",
                  "ideasA": [
                        "Portabilité",
                        "Alertes instantanées"
                  ],
                  "ideasB": [
                        "Grand écran",
                        "Outils de travail"
                  ]
            },
            {
                  "topic": "Envoyer un message ou passer un appel téléphonique: qu'est-ce qui est mieux ?",
                  "sideA": "Message",
                  "sideB": "Appel",
                  "level": "elementary",
                  "ideasA": [
                        "Communication asynchrone",
                        "Édition facile"
                  ],
                  "ideasB": [
                        "Émotion vocale",
                        "Résultats directs"
                  ]
            },
            {
                  "topic": "Livre numérique ou livre papier: lequel préférez-vous lire ?",
                  "sideA": "E-book",
                  "sideB": "Livre papier",
                  "level": "elementary",
                  "ideasA": [
                        "Gain de place",
                        "Dictionnaire intégré"
                  ],
                  "ideasB": [
                        "Toucher tactile",
                        "Pas de batterie"
                  ]
            },
            {
                  "topic": "Prendre des photos avec son téléphone ou avec un appareil photo: lequel donne de meilleurs résultats ?",
                  "sideA": "Téléphone",
                  "sideB": "Appareil photo",
                  "level": "elementary",
                  "ideasA": [
                        "Pratique",
                        "Partage direct"
                  ],
                  "ideasB": [
                        "Qualité optique",
                        "Contrôle manuel"
                  ]
            },
            {
                  "topic": "Vacances à la plage ou vacances à la montagne: qu'est-ce qui est mieux ?",
                  "sideA": "Plage",
                  "sideB": "Montagne",
                  "level": "elementary",
                  "ideasA": [
                        "Vibes côtières",
                        "Baignade"
                  ],
                  "ideasB": [
                        "Randonnée",
                        "Vues panoramiques"
                  ]
            },
            {
                  "topic": "Voyager en train ou voyager en avion: qu'est-ce qui est mieux ?",
                  "sideA": "Train",
                  "sideB": "Avion",
                  "level": "elementary",
                  "ideasA": [
                        "Routes panoramiques",
                        "Écologique"
                  ],
                  "ideasB": [
                        "Vitesse",
                        "Longue distance"
                  ]
            },
            {
                  "topic": "Visiter une ville célèbre ou visiter un petit village: qu'est-ce qui est plus intéressant ?",
                  "sideA": "Ville",
                  "sideB": "Village",
                  "level": "elementary",
                  "ideasA": [
                        "Monuments",
                        "Vie culturelle"
                  ],
                  "ideasB": [
                        "Traditions",
                        "Charme tranquille"
                  ]
            },
            {
                  "topic": "Séjourner à l'hôtel ou chez l'habitant: que préférez-vous ?",
                  "sideA": "Hôtel",
                  "sideB": "Chez l'habitant",
                  "level": "elementary",
                  "ideasA": [
                        "Vie privée",
                        "Service pro"
                  ],
                  "ideasB": [
                        "Échange culturel",
                        "Pratique langue"
                  ]
            },
            {
                  "topic": "Voyager à l'étranger ou explorer son propre pays: qu'est-ce qui en vaut le plus la peine ?",
                  "sideA": "Étranger",
                  "sideB": "Propre pays",
                  "level": "elementary",
                  "ideasA": [
                        "Horizons mondiaux",
                        "Langues"
                  ],
                  "ideasB": [
                        "Trésors cachés",
                        "Planification"
                  ]
            },
            {
                  "topic": "Avoir beaucoup d'amis ou avoir quelques amis proches: qu'est-ce qui est mieux ?",
                  "sideA": "Beaucoup",
                  "sideB": "Amis proches",
                  "level": "elementary",
                  "ideasA": [
                        "Réseau social",
                        "Loisirs variés"
                  ],
                  "ideasB": [
                        "Loyauté profonde",
                        "Lien de confiance"
                  ]
            },
            {
                  "topic": "Rencontrer des amis en personne ou discuter en ligne: qu'est-ce qui est plus satisfaisant ?",
                  "sideA": "En personne",
                  "sideB": "En ligne",
                  "level": "elementary",
                  "ideasA": [
                        "Énergie directe",
                        "Partager un repas"
                  ],
                  "ideasB": [
                        "Efficacité",
                        "Rester connecté"
                  ]
            },
            {
                  "topic": "Vivre chez ses parents ou vivre dans un appartement étudiant: qu'est-ce qui est mieux pour les jeunes ?",
                  "sideA": "Parents",
                  "sideB": "Appartement étudiant",
                  "level": "elementary",
                  "ideasA": [
                        "Aide financière",
                        "Repas maison"
                  ],
                  "ideasB": [
                        "Vie sociale",
                        "Autosuffisance"
                  ]
            },
            {
                  "topic": "Fêter son anniversaire à la maison ou sortir: qu'est-ce qui est le plus sympa ?",
                  "sideA": "Maison",
                  "sideB": "Sortir",
                  "level": "elementary",
                  "ideasA": [
                        "Touche personnelle",
                        "Ambiance cosy"
                  ],
                  "ideasB": [
                        "Pas de ménage",
                        "Cuisine pro"
                  ]
            },
            {
                  "topic": "Économiser de l'argent ou dépenser de l'argent: qu'est-ce qui est plus sage ?",
                  "sideA": "Économiser",
                  "sideB": "Dépenser",
                  "level": "elementary",
                  "ideasA": [
                        "Paix mentale future",
                        "Gros achats"
                  ],
                  "ideasB": [
                        "Joie instantanée",
                        "Santé économique"
                  ]
            },
            {
                  "topic": "Travailler à temps partiel pendant ses études ou se concentrer uniquement sur l'école: qu'est-ce qui est mieux ?",
                  "sideA": "Temps partiel",
                  "sideB": "Études seules",
                  "level": "elementary",
                  "ideasA": [
                        "Indépendance",
                        "Expérience pro"
                  ],
                  "ideasB": [
                        "Excellence",
                        "Moins de stress"
                  ]
            },
            {
                  "topic": "Gagner beaucoup d'argent ou avoir du temps libre: qu'est-ce qui compte le plus ?",
                  "sideA": "Argent",
                  "sideB": "Temps libre",
                  "level": "elementary",
                  "ideasA": [
                        "Qualité de vie",
                        "Épargne retraite"
                  ],
                  "ideasB": [
                        "Santé mentale",
                        "Famille et loisirs"
                  ]
            },
            {
                  "topic": "Vivre avec ses grands-parents vs ne pas vivre avec eux: qu'est-ce qui est le plus agréable ?",
                  "sideA": "Avec les grands-parents",
                  "sideB": "Sans les grands-parents",
                  "level": "elementary",
                  "ideasA": [
                        "Sagesse",
                        "Aide avec les enfants"
                  ],
                  "ideasB": [
                        "Plus d'intimité",
                        "Calme"
                  ]
            },
            {
                  "topic": "La cuisine de maman vs la cuisine de papa: laquelle est la meilleure ?",
                  "sideA": "Maman",
                  "sideB": "Papa",
                  "level": "elementary",
                  "ideasA": [
                        "Gout traditionnel",
                        "Réconfortant"
                  ],
                  "ideasB": [
                        "Nouvelles recettes",
                        "Douceurs du week-end"
                  ]
            },
            {
                  "topic": "Maths vs art: quelle matière est la plus amusante ?",
                  "sideA": "Maths",
                  "sideB": "Art",
                  "level": "elementary",
                  "ideasA": [
                        "Résolution",
                        "Logique"
                  ],
                  "ideasB": [
                        "Expression de soi",
                        "Libération"
                  ]
            },
            {
                  "topic": "Écrire sur papier vs taper sur une tablette: qu'est-ce qui est mieux ?",
                  "sideA": "Papier",
                  "sideB": "Tablette",
                  "level": "elementary",
                  "ideasA": [
                        "Mémoire physique",
                        "Santé oculaire"
                  ],
                  "ideasB": [
                        "Rangement",
                        "Correction auto"
                  ]
            },
            {
                  "topic": "Pizza vs pâtes: qu'est-ce qui est le plus bon ?",
                  "sideA": "Pizza",
                  "sideB": "Pâtes",
                  "level": "elementary",
                  "ideasA": [
                        "Partager",
                        "Variété de garnitures"
                  ],
                  "ideasB": [
                        "Formes de pâtes",
                        "Sauces riches"
                  ]
            },
            {
                  "topic": "Glace vs gâteau: quel est le meilleur dessert ?",
                  "sideA": "Glace",
                  "sideB": "Gâteau",
                  "level": "elementary",
                  "ideasA": [
                        "Rafraîchissant",
                        "Goûts intenses"
                  ],
                  "ideasB": [
                        "Réconfort chaud",
                        "Célébration"
                  ]
            },
            {
                  "topic": "Jours courts vs jours longs: qu'est-ce qui est mieux ?",
                  "sideA": "Jours courts",
                  "sideB": "Jours longs",
                  "level": "elementary",
                  "ideasA": [
                        "Nuits cosy",
                        "Vie intérieure"
                  ],
                  "ideasB": [
                        "Vitamine D",
                        "Plus d'extérieur"
                  ]
            },
            {
                  "topic": "Journée au parc vs journée à la plage: qu'est-ce qui est mieux ?",
                  "sideA": "Parc",
                  "sideB": "Plage",
                  "level": "elementary",
                  "ideasA": [
                        "Nature locale",
                        "Picnic"
                  ],
                  "ideasB": [
                        "Brise marine",
                        "Activités nautiques"
                  ]
            },
            {
                  "topic": "Avion vs train: qu'est-ce qui est le plus amusant ?",
                  "sideA": "Avion",
                  "sideB": "Train",
                  "level": "elementary",
                  "ideasA": [
                        "Au-dessus des nuages",
                        "Transit rapide"
                  ],
                  "ideasB": [
                        "Paysages",
                        "Espace pour marcher"
                  ]
            },
            {
                  "topic": "Douche le matin vs douche le soir: qu'est-ce qui est mieux ?",
                  "sideA": "Matin",
                  "sideB": "Soir",
                  "level": "elementary",
                  "ideasA": [
                        "Énergie mentale",
                        "Départ frais"
                  ],
                  "ideasB": [
                        "Détente totale",
                        "Draps propres"
                  ]
            },
            {
                  "topic": "Chats qui renversent des choses vs chiens qui mâchent des chaussures: quel animal est le plus agaçant ?",
                  "sideA": "Chats",
                  "sideB": "Chiens",
                  "level": "elementary",
                  "ideasA": [
                        "Verres brisés",
                        "Bêtises"
                  ],
                  "ideasB": [
                        "Dégâts matériels",
                        "Réparation de chaussures"
                  ]
            },
            {
                  "topic": "Manger de la pizza avec une fourchette vs avec les mains: qu'est-ce qui est correct ?",
                  "sideA": "Fourchette",
                  "sideB": "Mains",
                  "level": "elementary",
                  "ideasA": [
                        "Étiquette formelle",
                        "Doigts propres"
                  ],
                  "ideasB": [
                        "Plaisir direct",
                        "Style authentique"
                  ]
            },
            {
                  "topic": "Dormir avec des chaussettes vs sans chaussettes: qu'est-ce qui est mieux ?",
                  "sideA": "Chaussettes",
                  "sideB": "Sans",
                  "level": "elementary",
                  "ideasA": [
                        "Circulation",
                        "Pieds au chaud"
                  ],
                  "ideasB": [
                        "Refroidissement",
                        "Sensation naturelle"
                  ]
            },
            {
                  "topic": "Château de sable vs bonhomme de neige: qu'est-ce qui est le plus amusant à construire ?",
                  "sideA": "Château de sable",
                  "sideB": "Bonhomme de neige",
                  "level": "elementary",
                  "ideasA": [
                        "Été à la plage",
                        "Travail de détail"
                  ],
                  "ideasB": [
                        "Magie hivernale",
                        "Amusement collectif"
                  ]
            },
            {
                  "topic": "Beaucoup d'examens vs très peu d'examens: qu'est-ce qui est le plus juste ?",
                  "sideA": "Beaucoup d'examens",
                  "sideB": "Très peu d'examens",
                  "level": "elementary",
                  "ideasA": [
                        "Audit des compétences",
                        "Cohérence académique"
                  ],
                  "ideasB": [
                        "Focus projets",
                        "Moins de stress"
                  ]
            },
            {
                  "topic": "Commencer l'école à 7 ans vs commencer à 5 ans: qu'est-ce qui est mieux pour les enfants ?",
                  "sideA": "À 7 ans",
                  "sideB": "À 5 ans",
                  "level": "elementary",
                  "ideasA": [
                        "Focus sur le jeu",
                        "Prendre en compte la maturité"
                  ],
                  "ideasB": [
                        "Alphabétisation précoce",
                        "Début structuré"
                  ]
            },
            {
                  "topic": "Manger lentement vs manger rapidement: qu'est-ce qui est mieux pour vous ?",
                  "sideA": "Lentement",
                  "sideB": "Rapidement",
                  "level": "elementary",
                  "ideasA": [
                        "Meilleure digestion",
                        "Signaux de satiété"
                  ],
                  "ideasB": [
                        "Gain de temps",
                        "Habitudes efficaces"
                  ]
            },
            {
                  "topic": "Cuisiner à la maison vs commander en ligne: qu'est-ce qui est mieux ?",
                  "sideA": "Cuisiner à la maison",
                  "sideB": "Commander en ligne",
                  "level": "elementary",
                  "ideasA": [
                        "Qualité des ingrédients",
                        "Développement de compétences"
                  ],
                  "ideasB": [
                        "Grande facilité",
                        "Zéro effort physique"
                  ]
            },
            {
                  "topic": "Cuisiner vs faire de la pâtisserie: qu'est-ce qui est le plus amusant comme passe-temps ?",
                  "sideA": "Cuisiner",
                  "sideB": "Pâtisser",
                  "level": "elementary",
                  "ideasA": [
                        "Utilité quotidienne",
                        "Flair culinaire"
                  ],
                  "ideasB": [
                        "Précision scientifique",
                        "Récompenses sucrées"
                  ]
            },
            {
                  "topic": "Aller à la salle de sport vs faire de l'exercice dehors: qu'est-ce qui est mieux ?",
                  "sideA": "Salle de sport",
                  "sideB": "Dehors",
                  "level": "elementary",
                  "ideasA": [
                        "Équipement standard",
                        "Climat contrôlé"
                  ],
                  "ideasB": [
                        "Air frais",
                        "Terrain changeant"
                  ]
            },
            {
                  "topic": "Photos sur téléphone vs photos imprimées: qu'est-ce qui est mieux ?",
                  "sideA": "Téléphone",
                  "sideB": "Imprimées",
                  "level": "elementary",
                  "ideasA": [
                        "Stockage infini",
                        "Édition numérique rapide"
                  ],
                  "ideasB": [
                        "Histoire tactile",
                        "Valeur déco"
                  ]
            },
            {
                  "topic": "Smart TV vs écran d'ordinateur: qu'est-ce qui est mieux pour regarder des films ?",
                  "sideA": "Smart TV",
                  "sideB": "Ordinateur",
                  "level": "elementary",
                  "ideasA": [
                        "Grande vue immersive",
                        "Qualité audio"
                  ],
                  "ideasB": [
                        "Intimité",
                        "Vision de près"
                  ]
            },
            {
                  "topic": "Pays chaud vs pays froid: quelle est la meilleure destination de vacances ?",
                  "sideA": "Pays chaud",
                  "sideB": "Pays froid",
                  "level": "elementary",
                  "ideasA": [
                        "Détente plage",
                        "Vibes de glaces"
                  ],
                  "ideasB": [
                        "Bienfaits du ski",
                        "Aurores boréales"
                  ]
            },
            {
                  "topic": "Offrir des cadeaux vs recevoir des cadeaux: que préférez-vous ?",
                  "sideA": "Offrir",
                  "sideB": "Recevoir",
                  "level": "elementary",
                  "ideasA": [
                        "Joie altruiste",
                        "Impact social"
                  ],
                  "ideasB": [
                        "Surprise excitante",
                        "Se sentir apprécié"
                  ]
            },
            {
                  "topic": "Travailler à l'intérieur vs travailler à l'extérieur: qu'est-ce qui est mieux ?",
                  "sideA": "Intérieur",
                  "sideB": "Extérieur",
                  "level": "elementary",
                  "ideasA": [
                        "Climat contrôlé",
                        "Espace ergonomique"
                  ],
                  "ideasB": [
                        "Santé physique",
                        "Vues changeantes"
                  ]
            },
            {
                  "topic": "Ananas sur la pizza vs pas d'ananas: qu'est-ce qui est correct ?",
                  "sideA": "Ananas",
                  "sideB": "Pas d'ananas",
                  "level": "elementary",
                  "ideasA": [
                        "Mix sucré-salé",
                        "Saveurs tropicales"
                  ],
                  "ideasB": [
                        "Règles traditionnelles",
                        "Éviter les chocs"
                  ]
            },
            {
                  "topic": "Mettre le lait en premier vs mettre le thé: qu'est-ce qui est mieux ?",
                  "sideA": "Lait d'abord",
                  "sideB": "Thé d'abord",
                  "level": "elementary",
                  "ideasA": [
                        "Protéines de lait",
                        "Température fraîche"
                  ],
                  "ideasB": [
                        "Processus d'infusion",
                        "Goût intense"
                  ]
            },
            {
                  "topic": "Lundi vs Vendredi: quel jour est réellement le pire ?",
                  "sideA": "Lundi",
                  "sideB": "Vendredi",
                  "level": "elementary",
                  "ideasA": [
                        "Début de semaine",
                        "Énergie basse"
                  ],
                  "ideasB": [
                        "Attente du week-end",
                        "Fatigue du travail"
                  ]
            },
            {
                  "topic": "Se réveiller cinq minutes avant l'alarme vs dormir jusqu'à l'alarme: qu'est-ce qui est le plus agaçant ?",
                  "sideA": "Avant l'alarme",
                  "sideB": "Jusqu'à l'alarme",
                  "level": "elementary",
                  "ideasA": [
                        "Repos interrompu",
                        "Zone grise"
                  ],
                  "ideasB": [
                        "Choc",
                        "Pas de préparation"
                  ]
            },
            {
                  "topic": "Chats vs chiens: quel animal est secrètement le patron de la maison ?",
                  "sideA": "Chats",
                  "sideB": "Chiens",
                  "level": "elementary",
                  "ideasA": [
                        "Stratégie mentale",
                        "Contrôle calme"
                  ],
                  "ideasB": [
                        "Énergie physique",
                        "Loyauté manifeste"
                  ]
            },
            {
                  "topic": "Avoir trop chaud vs avoir trop froid: qu'est-ce qui est le pire ?",
                  "sideA": "Trop chaud",
                  "sideB": "Trop froid",
                  "level": "elementary",
                  "ideasA": [
                        "Sueur et fatigue",
                        "Mal dormir"
                  ],
                  "ideasB": [
                        "Frissons",
                        "Vêtements d'hiver lourds"
                  ]
            }
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
