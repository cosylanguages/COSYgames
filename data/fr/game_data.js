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
                        },
                        {
                                  "text": "Une personne qui m'a inspiré",
                                  "level": "intermediate",
                                  "hints": [
                                            "Qui est cette personne ?",
                                            "Qu'a-t-elle fait ?",
                                            "Comment a-t-elle changé votre perspective ?",
                                            "Suivez-vous toujours son travail ou sa vie ?",
                                            "Aimeriez-vous la rencontrer ?"
                                  ]
                        },
                        {
                                  "text": "L'importance de la sensibilisation à la santé mentale",
                                  "level": "intermediate",
                                  "hints": [
                                            "Pourquoi est-il important de parler de santé mentale ?",
                                            "Est-ce devenu plus accepté récemment ?",
                                            "Comment pouvons-nous soutenir les autres ?",
                                            "Quels sont les idées reçues les plus courantes ?",
                                            "Comment prenez-vous soin de votre propre santé mentale ?"
                                  ]
                        },
                        {
                                  "text": "Un endroit où vous vous sentez chez vous",
                                  "level": "intermediate",
                                  "hints": [
                                            "Est-ce une ville, une maison, un pays ?",
                                            "Quand l'avez-vous ressenti pour la première fois ?",
                                            "Qu'est-ce qui fait que vous vous y sentez chez vous ?",
                                            "Est-ce un lieu ou un sentiment ?",
                                            "Pensez-vous qu'on puisse avoir plusieurs 'chez-soi' ?"
                                  ]
                        },
                        {
                                  "text": "Quelque chose sur lequel vous avez changé d'avis",
                                  "level": "intermediate",
                                  "hints": [
                                            "Que pensiez-vous auparavant ?",
                                            "Qu'est-ce qui a changé ?",
                                            "Quand cela s'est-il produit ?",
                                            "Était-ce un changement progressif ou soudain ?",
                                            "Que ressentez-vous à ce sujet maintenant ?"
                                  ]
                        },
                        {
                                  "text": "Ce qui fait un bon ami",
                                  "level": "intermediate",
                                  "hints": [
                                            "Quelles qualités comptent le plus en amitié ?",
                                            "Vos amis proches vous ressemblent-ils ou sont-ils différents ?",
                                            "Les amitiés peuvent-elles changer avec l'âge ?",
                                            "Qu'est-ce que vous ne toléreriez pas chez un ami ?",
                                            "Est-il facile de se faire de vrais amis à l'âge adulte ?"
                                  ]
                        },
                        {
                                  "text": "Quelque chose que vous auriez aimé apprendre plus tôt",
                                  "level": "intermediate",
                                  "hints": [
                                            "De quoi s'agit-il ?",
                                            "Pourquoi ne l'avez-vous pas appris plus tôt ?",
                                            "En quoi votre vie serait-elle différente ?",
                                            "Est-il trop tard pour l'apprendre maintenant ?",
                                            "L'enseigneriez-vous à quelqu'un de plus jeune ?"
                                  ]
                        },
                        {
                                  "text": "Une compétence que vous essayez d'améliorer",
                                  "level": "intermediate",
                                  "hints": [
                                            "Quelle est cette compétence ?",
                                            "Pourquoi avez-vous décidé d'y travailler ?",
                                            "Comment vous entraînez-vous ?",
                                            "Quelle est la partie la plus difficile ?",
                                            "Quels progrès avez-vous accomplis ?"
                                  ]
                        },
                        {
                                  "text": "Ce qui vous manque de votre enfance",
                                  "level": "intermediate",
                                  "hints": [
                                            "Qu'est-ce qui vous manque sincèrement ?",
                                            "Pensez-vous que l'enfance était plus facile ?",
                                            "De quoi les enfants s'inquiétaient-ils que les adultes ne font pas ?",
                                            "Que faisaient les adultes que vous ne compreniez pas alors mais comprenez maintenant ?",
                                            "Y retourneriez-vous si vous le pouviez ?"
                                  ]
                        },
                        {
                                  "text": "Votre journée de travail idéale",
                                  "level": "intermediate",
                                  "hints": [
                                            "À quelle heure commenceriez-vous et finiriez-vous ?",
                                            "Où travailleriez-vous ?",
                                            "Avec qui travailleriez-vous ?",
                                            "Que feriez-vous ?",
                                            "À quel point est-ce différent de votre vraie journée de travail ?"
                                  ]
                        },
                        {
                                  "text": "Comment votre vie a changé ces dernières années",
                                  "level": "intermediate",
                                  "hints": [
                                            "Quel est le plus grand changement ?",
                                            "Était-ce votre choix ?",
                                            "Est-ce pour le mieux ?",
                                            "Qu'est-ce qui est resté identique ?",
                                            "Que pensez-vous qui changera ensuite ?"
                                  ]
                        },
                        {
                                  "text": "Ce qui vous fait vous sentir le plus vivant",
                                  "level": "intermediate",
                                  "hints": [
                                            "Y a-t-il un moment ou une activité qui vous donne toujours de l'énergie ?",
                                            "Cela implique-t-il d'autres personnes ou de la solitude ?",
                                            "À quelle fréquence ressentez-vous cela ?",
                                            "Cela a-t-il changé avec le temps ?",
                                            "Qu'est-ce qui vous empêche de le faire plus souvent ?"
                                  ]
                        },
                        {
                                  "text": "Votre plus grande distraction",
                                  "level": "intermediate",
                                  "hints": [
                                            "Qu'est-ce qui attire le plus facilement votre attention ?",
                                            "Cela vous coûte-t-il du temps ou de l'énergie ?",
                                            "Avez-vous essayé de changer cela ?",
                                            "Est-ce totalement mauvais ou y a-t-il du bon ?",
                                            "Que feriez-vous de ce temps si vous supprimiez cette distraction ?"
                                  ]
                        },
                        {
                                  "text": "Un livre, un film ou une série qui vous a marqué",
                                  "level": "intermediate",
                                  "hints": [
                                            "Comment s'appelait-il ?",
                                            "De quoi s'agissait-il ?",
                                            "Pourquoi cela vous a-t-il marqué ?",
                                            "Cela a-t-il changé votre façon de penser ?",
                                            "Le recommanderiez-vous et à qui ?"
                                  ]
                        },
                        {
                                  "text": "Ce que 'chez soi' signifie pour vous",
                                  "level": "intermediate",
                                  "hints": [
                                            "La maison est-elle une personne, un lieu ou un sentiment ?",
                                            "Où vous sentez-vous le plus chez vous ?",
                                            "Votre idée du chez-soi a-t-elle changé avec l'âge ?",
                                            "Peut-on se sentir chez soi dans un nouvel endroit ?",
                                            "Est-ce un endroit où l'on revient ou quelque chose que l'on porte en soi ?"
                                  ]
                        },
                        {
                                  "text": "Quelque chose que vous faites différemment de la plupart des gens",
                                  "level": "intermediate",
                                  "hints": [
                                            "De quoi s'agit-il ?",
                                            "Quand avez-vous commencé à faire ainsi ?",
                                            "Les gens vous ont-ils déjà posé des questions à ce sujet ?",
                                            "Cela rend-il votre vie meilleure ?",
                                            "Pensez-vous que tout le monde devrait faire comme vous ?"
                                  ]
                        },
                        {
                                  "text": "Une habitude dont vous êtes fier",
                                  "level": "intermediate",
                                  "hints": [
                                            "Quelle est cette habitude ?",
                                            "Depuis combien de temps l'avez-vous ?",
                                            "Comment l'avez-vous construite ?",
                                            "Quelle différence cela fait-il ?",
                                            "Quelqu'un vous a-t-il inspiré ?"
                                  ]
                        },
                        {
                                  "text": "Un voyage qui vous a surpris",
                                  "level": "intermediate",
                                  "hints": [
                                            "Où alliez-vous ?",
                                            "Qu'est-ce qui vous a surpris ?",
                                            "Était-ce le lieu, les gens ou ce qui s'est passé ?",
                                            "Cela a-t-il changé vos plans ?",
                                            "Y retourneriez-vous ?"
                                  ]
                        },
                        {
                                  "text": "Votre relation avec les réseaux sociaux",
                                  "level": "intermediate",
                                  "hints": [
                                            "Quelles plateformes utilisez-vous ?",
                                            "Combien de temps y passez-vous ?",
                                            "Cela affecte-t-il votre moral ?",
                                            "Avez-vous déjà fait une pause ?",
                                            "À quoi ressemblerait votre vie sans eux ?"
                                  ]
                        },
                        {
                                  "text": "À quoi ressemble le succès pour vous",
                                  "level": "intermediate",
                                  "hints": [
                                            "Comment définissez-vous le succès ?",
                                            "Est-ce l'argent, le bonheur, les relations ?",
                                            "Votre définition a-t-elle changé avec le temps ?",
                                            "Vous considérez-vous comme ayant réussi ?",
                                            "L'opinion des autres sur votre succès compte-t-elle ?"
                                  ]
                        },
                        {
                                  "text": "Votre relation avec la nourriture",
                                  "level": "intermediate",
                                  "hints": [
                                            "Cuisinez-vous souvent ?",
                                            "La nourriture est-elle juste un carburant ou quelque chose de plus ?",
                                            "Mangez-vous avec d'autres ou seul ?",
                                            "Y a-t-il un aliment fortement lié à un souvenir ?",
                                            "Votre relation avec la nourriture a-t-elle changé ?"
                                  ]
                        },
                        {
                                  "text": "Quelque chose qui vous fait toujours rire",
                                  "level": "intermediate",
                                  "hints": [
                                            "De quoi s'agit-il ?",
                                            "Pourquoi pensez-vous que cela vous fait rire ?",
                                            "Pouvez-vous rire de choses difficiles ?",
                                            "Est-ce que vos amis et vous riez des mêmes choses ?",
                                            "Votre sens de l'humour est-il différent selon la langue ?"
                                  ]
                        },
                        {
                                  "text": "Un conseil que vous donneriez à vous-même plus jeune",
                                  "level": "intermediate",
                                  "hints": [
                                            "Quel âge aurait votre 'moi' plus jeune ?",
                                            "Quel serait le conseil ?",
                                            "Pourquoi ne le saviez-vous pas alors ?",
                                            "Pensez-vous que vous auriez écouté ?",
                                            "Qui vous a donné le meilleur conseil de votre vie ?"
                                  ]
                        },
                        {
                                  "text": "L'avenir du monde dans 50 ans",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Quels changements technologiques prévoyez-vous ?",
                                            "À quoi ressemblera l'environnement ?",
                                            "Les structures sociales seront-elles différentes ?",
                                            "Y a-t-il quelque chose qui vous inquiète ?",
                                            "Qu'est-ce qui vous rend optimiste pour l'avenir ?"
                                  ]
                        },
                        {
                                  "text": "L'impact du changement climatique sur les communautés locales",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Comment votre région a-t-elle changé ?",
                                            "À quels risques spécifiques les gens sont-ils confrontés ?",
                                            "Qui est le plus vulnérable ?",
                                            "Prend-on assez de mesures ?",
                                            "Que peuvent faire les individus pour faire bouger les choses ?"
                                  ]
                        },
                        {
                                  "text": "Une conviction que vous avez et que la plupart des gens autour de vous ne partagent pas",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Quelle est cette conviction ?",
                                            "Quand s'est-elle formée ?",
                                            "A-t-elle déjà été remise en question ?",
                                            "Cela affecte-t-il vos relations ?",
                                            "A-t-elle déjà changé suite à une discussion ?"
                                  ]
                        },
                        {
                                  "text": "Ce que vous feriez si vous n'aviez pas peur",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Quelle est la chose que la peur vous empêche de faire ?",
                                            "Est-ce une peur rationnelle ou irrationnelle ?",
                                            "La peur vous a-t-elle déjà freiné, ce que vous avez regretté par la suite ?",
                                            "À quoi ressemblerait votre vie si vous dépassiez cette peur ?",
                                            "Que diriez-vous à quelqu'un qui fait face à la même peur ?"
                                  ]
                        },
                        {
                                  "text": "La meilleure et la pire chose de l'endroit où vous avez grandi",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Qu'est-ce qui vous a le plus marqué dans cet endroit ?",
                                            "De quoi êtes-vous reconnaissant ?",
                                            "Qu'auriez-vous aimé voir différemment ?",
                                            "Comment cela a-t-il façonné vos valeurs ?",
                                            "Y élèveriez-vous des enfants ?"
                                  ]
                        },
                        {
                                  "text": "Comment vous gérez le stress",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Quelles sont vos stratégies habituelles ?",
                                            "Pensez-vous bien gérer le stress ?",
                                            "Qu'est-ce qui vous stresse le plus ?",
                                            "Votre rapport au stress a-t-il changé ?",
                                            "Quel conseil donneriez-vous à quelqu'un qui a du mal avec le stress ?"
                                  ]
                        },
                        {
                                  "text": "Quelque chose que vous jugiez autrefois et que vous comprenez maintenant",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "De quoi s'agissait-il ?",
                                            "Que pensiez-vous avant ?",
                                            "Qu'est-ce qui a changé votre point de vue ?",
                                            "Êtes-vous gêné par votre ancienne vision ?",
                                            "Cela vous a-t-il rendu moins prompt à juger en général ?"
                                  ]
                        },
                        {
                                  "text": "Ce que l'amitié signifie pour vous à l'âge adulte",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "L'amitié adulte est-elle différente de celle de l'enfance ?",
                                            "Combien d'amis proches avez-vous ?",
                                            "Comment entretenez-vous vos amitiés malgré la distance ?",
                                            "Avez-vous déjà 'dépassé' une amitié ?",
                                            "Qu'est-ce qui fait durer une amitié ?"
                                  ]
                        },
                        {
                                  "text": "Une fois où vous vous êtes complètement trompé",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Que s'est-il passé ?",
                                            "Combien de temps avant de vous en rendre compte ?",
                                            "Quel a été le prix de cette erreur ?",
                                            "Comment avez-vous géré la situation ?",
                                            "Qu'avez-vous appris ?"
                                  ]
                        },
                        {
                                  "text": "Votre relation compliquée avec les réseaux sociaux",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Les aimez-vous, les détestez-vous, ou les deux ?",
                                            "Qu'y trouvez-vous que vous ne trouvez pas ailleurs ?",
                                            "Vous êtes-vous déjà senti plus mal après les avoir utilisés ?",
                                            "Pensez-vous que cela change la façon dont vous vous présentez ?",
                                            "Si vous pouviez reconcevoir les réseaux sociaux, que changeriez-vous ?"
                                  ]
                        },
                        {
                                  "text": "La chose la plus surestimée de la vie moderne",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Qu'est-ce que c'est ?",
                                            "Pourquoi les gens y accordent-ils tant de valeur ?",
                                            "Quand avez-vous réalisé que cela n'en valait pas la peine selon vous ?",
                                            "Votre opinion suscite-t-elle des réactions chez les autres ?",
                                            "Par quoi la remplaceriez-vous ?"
                                  ]
                        },
                        {
                                  "text": "Un moment qui a changé la façon dont vous vous voyez",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Que s'est-il passé ?",
                                            "Vous attendiez-vous à ce que cela vous affecte ?",
                                            "Cela vous a-t-il changé immédiatement ou progressivement ?",
                                            "La version de vous après ce moment est-elle meilleure ?",
                                            "Partageriez-vous cela avec un proche ?"
                                  ]
                        },
                        {
                                  "text": "Quelque chose dont vous êtes discrètement fier",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "De quoi s'agit-il ?",
                                            "Pourquoi discrètement — pourquoi pas haut et fort ?",
                                            "Combien de temps cela a-t-il pris ?",
                                            "Vos proches sont-ils au courant ?",
                                            "Qu'est-ce que cela dit sur vos valeurs ?"
                                  ]
                        },
                        {
                                  "text": "Votre théorie personnelle sur la raison pour laquelle les gens sont comme ils sont",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Est-ce la nature, l'éducation, ou autre chose ?",
                                            "Pensez-vous que les gens peuvent changer fondamentalement ?",
                                            "Une personne vous a-t-elle déjà totalement surpris ?",
                                            "Pensez-vous bien comprendre les gens ?",
                                            "Quelle est la plus grande erreur que les gens font les uns sur les autres ?"
                                  ]
                        },
                        {
                                  "text": "Ce que vous pensez de l'ambition",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Êtes-vous une personne ambitieuse ?",
                                            "L'ambition est-elle toujours une bonne chose ?",
                                            "L'ambition peut-elle nuire à votre vie personnelle ?",
                                            "Admirez-vous les gens très ambitieux ?",
                                            "Quand est-ce suffisant ?"
                                  ]
                        },
                        {
                                  "text": "La version de vous-même d'il y a cinq ans",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Que faisiez-vous ?",
                                            "De quoi vous inquiétiez-vous ?",
                                            "À quoi pensiez-vous que votre vie ressemblerait aujourd'hui ?",
                                            "Quelle était la chose la plus importante que vous ne saviez pas encore ?",
                                            "Est-ce que vous et votre 'moi' passé vous entendriez bien ?"
                                  ]
                        },
                        {
                                  "text": "Comment vous prenez des décisions difficiles",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Suivez-vous votre tête ou votre instinct ?",
                                            "Prenez-vous des décisions rapidement ou lentement ?",
                                            "Demandez-vous conseil ou décidez-vous seul ?",
                                            "Quelle est la décision la plus difficile que vous ayez jamais prise ?",
                                            "Vous sentez-vous généralement en paix avec vos décisions par la suite ?"
                                  ]
                        },
                        {
                                  "text": "La nostalgie et ce qu'elle vous fait",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "De quoi êtes-vous nostalgique ?",
                                            "La nostalgie est-elle réconfortante ou douloureuse ?",
                                            "Pensez-vous que le passé était vraiment mieux ou juste différent ?",
                                            "La nostalgie vous empêche-t-elle parfois d'avancer ?",
                                            "Quelle est l'odeur, le son ou le goût qui déclenche un souvenir ?"
                                  ]
                        },
                        {
                                  "text": "La célébrité — punition ou récompense ?",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Voudriez-vous être célèbre ?",
                                            "Quel genre de célébrité seriez-vous ?",
                                            "Que perdriez-vous ?",
                                            "Pensez-vous que la plupart des gens célèbres sont heureux ?",
                                            "Quelle est la différence entre la célébrité et le respect ?"
                                  ]
                        },
                        {
                                  "text": "Ce qui vous ennuie et ce qui vous fascine",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "De quel sujet ou activité pourriez-vous parler pendant des heures ?",
                                            "Qu'est-ce que vous ne supportez absolument pas ?",
                                            "Ce qui vous fascine dit-il quelque chose sur vous ?",
                                            "Quelque chose qui vous ennuyait autrefois est-il devenu intéressant ?",
                                            "Qu'est-ce que vous trouvez fascinant et qui surprend les gens ?"
                                  ]
                        },
                        {
                                  "text": "Une fois où vous avez dû repartir de zéro",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Que s'est-il passé avant ce nouveau départ ?",
                                            "Était-ce un choix ou la vie vous y a-t-elle forcé ?",
                                            "Quelle a été la partie la plus difficile pour recommencer ?",
                                            "Qu'avez-vous gardé d'avant ?",
                                            "Êtes-vous content que ce soit arrivé ?"
                                  ]
                        },
                        {
                                  "text": "Ce que les gens comprennent mal à votre sujet",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Quelle est l'idée reçue la plus courante ?",
                                            "D'où vient-elle ?",
                                            "Cela vous dérange-t-il ?",
                                            "Essayez-vous de la corriger ou laissez-vous couler ?",
                                            "Y a-t-il une part de vérité malgré tout ?"
                                  ]
                        },
                        {
                                  "text": "Le rôle de l'art dans la société moderne",
                                  "level": "advanced",
                                  "hints": [
                                            "Quel est l'objectif principal de l'art aujourd'hui ?",
                                            "L'art doit-il être politique ou purement esthétique ?",
                                            "Comment la technologie numérique a-t-elle changé notre façon de consommer l'art ?",
                                            "L'art traditionnel est-il toujours pertinent pour les jeunes générations ?",
                                            "L'art a-t-il la responsabilité de bousculer le spectateur ?"
                                  ]
                        },
                        {
                                  "text": "Intelligence artificielle : outil ou menace ?",
                                  "level": "advanced",
                                  "hints": [
                                            "L'IA finira-t-elle par remplacer la créativité humaine ?",
                                            "Quelles sont les plus grandes préoccupations éthiques liées au développement de l'IA ?",
                                            "L'IA pourra-t-elle jamais vraiment 'comprendre' ou ne fait-elle que traiter des données ?",
                                            "Comment l'IA changera-t-elle le marché du travail au cours de la prochaine décennie ?",
                                            "Devrait-il y avoir plus de réglementation sur la recherche en IA ?"
                                  ]
                        },
                        {
                                  "text": "Si le lieu où vous avez grandi a fait de vous ce que vous êtes",
                                  "level": "advanced",
                                  "hints": [
                                            "Quels éléments spécifiques de cet endroit vous ont façonné ?",
                                            "Est-ce les gens, la culture, le paysage, la langue ?",
                                            "Auriez-vous pu devenir la même personne ailleurs ?",
                                            "Vous sentez-vous défini par vos origines ou y résistez-vous ?",
                                            "À quoi auriez-vous ressemblé si vous aviez grandi dans un endroit complètement différent ?"
                                  ]
                        },
                        {
                                  "text": "L'écart entre qui vous êtes et qui vous présentez au monde",
                                  "level": "advanced",
                                  "hints": [
                                            "Y a-t-il un écart important entre votre moi public et votre moi privé ?",
                                            "Cet écart est-il sain ou vous coûte-t-il quelque chose ?",
                                            "Dans quels contextes êtes-vous le plus pleinement vous-même ?",
                                            "Les gens qui vous connaissent bien voient-ils une personne différente de celle vue par vos collègues ou des inconnus ?",
                                            "La mise en scène de l'identité est-elle inévitable ou faut-il y résister ?"
                                  ]
                        },
                        {
                                  "text": "Si les gens changent fondamentalement ou se révèlent seulement lentement",
                                  "level": "advanced",
                                  "hints": [
                                            "Pouvez-vous penser à quelqu'un qui a vraiment changé — ou ne le connaissiez-vous tout simplement pas assez bien avant ?",
                                            "Que faut-il pour qu'une personne change vraiment ?",
                                            "Pensez-vous avoir changé ou être resté essentiellement vous-même ?",
                                            "Que disent les relations si les gens ne changent pas vraiment ?",
                                            "La croyance que les gens peuvent changer est-elle nécessaire à l'amour et à l'amitié ?"
                                  ]
                        },
                        {
                                  "text": "Ce que vous avez appris de l'échec que vous n'auriez pas pu apprendre du succès",
                                  "level": "advanced",
                                  "hints": [
                                            "Quel est l'échec spécifique qui vous a appris quelque chose d'irremplaçable ?",
                                            "L'échec est-il réellement un meilleur professeur ou est-ce juste quelque chose que les gens disent pour se sentir mieux ?",
                                            "Pensez-vous bien gérer l'échec ?",
                                            "Quelle est la forme d'échec la plus douloureuse pour vous personnellement ?",
                                            "Existe-t-il un échec qui n'apprend rien ?"
                                  ]
                        },
                        {
                                  "text": "Votre relation avec la certitude et le doute",
                                  "level": "advanced",
                                  "hints": [
                                            "Êtes-vous quelqu'un qui a besoin de certitude ou pouvez-vous vivre confortablement avec l'ambiguïté ?",
                                            "Dans quels domaines de votre vie vous sentez-vous certain et dans quels domaines doutez-vous ?",
                                            "Une période de doute profond s'est-elle déjà avérée précieuse ?",
                                            "Faites-vous confiance aux gens qui semblent tout à fait certains de tout ?",
                                            "Quelle est la différence entre un scepticisme sain et un doute paralysant ?"
                                  ]
                        },
                        {
                                  "text": "Les choses que vous portez de votre enfance sans vous en rendre compte",
                                  "level": "advanced",
                                  "hints": [
                                            "Y a-t-il des schémas dans votre comportement que vous pouvez retracer jusqu'à des expériences précoces ?",
                                            "Quand avez-vous remarqué pour la première fois que quelque chose de l'enfance agissait encore en vous ?",
                                            "Est-il possible de comprendre pleinement les influences invisibles sur qui vous êtes ?",
                                            "Lesquels de ces schémas vous servent et lesquels ne vous servent pas ?",
                                            "Quelle responsabilité avons-nous d'examiner nos tendances héritées ?"
                                  ]
                        },
                        {
                                  "text": "Ce que vous protégeriez même si cela vous coûtait quelque chose",
                                  "level": "advanced",
                                  "hints": [
                                            "Qu'est-ce que vous ne compromettriez pas, quoi qu'il arrive ?",
                                            "Cela a-t-il été testé ?",
                                            "S'agit-il d'une valeur, d'une relation ou d'autre chose ?",
                                            "Pensez-vous que tout le monde a quelque chose comme ça ou est-ce rare ?",
                                            "Le fait de savoir cela de vous-même vous dit-il ce en quoi vous croyez réellement ?"
                                  ]
                        },
                        {
                                  "text": "Ce que les gens se trompent selon vous sur le bonheur",
                                  "level": "advanced",
                                  "hints": [
                                            "Quelle est l'erreur la plus courante que les gens commettent dans la recherche du bonheur ?",
                                            "Le bonheur est-il quelque chose que l'on trouve ou quelque chose que l'on construit ?",
                                            "Pensez-vous être heureux ? Le savez-vous seulement ?",
                                            "Existe-t-il une tension entre bonheur et sens ?",
                                            "Votre idée du bonheur a-t-elle changé de manière significative ?"
                                  ]
                        },
                        {
                                  "text": "Le rôle de la chance dans votre vie",
                                  "level": "advanced",
                                  "hints": [
                                            "Quelle part de votre situation actuelle est due à la chance par rapport à l'effort ?",
                                            "Est-il inconfortable de reconnaître que la chance a joué un rôle ?",
                                            "La chance a-t-elle joué contre vous ?",
                                            "Pensez-vous que les gens surestiment le contrôle qu'ils ont ?",
                                            "Quelle est l'implication éthique de la chance — affecte-t-elle ce que nous nous devons les uns aux autres ?"
                                  ]
                        },
                        {
                                  "text": "Si l'ambition et le contentement peuvent coexister",
                                  "level": "advanced",
                                  "hints": [
                                            "Pensez-vous pouvoir vouloir plus et être en paix simultanément ?",
                                            "Avez-vous déjà dû choisir entre les deux ?",
                                            "Admirez-vous les gens qui sont contents ou cela ressemble-t-il à un abandon ?",
                                            "L'ambition est-elle une forme d'insatisfaction par définition ?",
                                            "À quoi cela ressemblerait-il dans votre vie d'avoir les deux ?"
                                  ]
                        },
                        {
                                  "text": "Ce que vous devez aux personnes qui vous ont façonné",
                                  "level": "advanced",
                                  "hints": [
                                            "Ressentez-vous une dette envers les personnes qui vous ont formé ?",
                                            "Cette dette est-elle émotionnelle, pratique, ou les deux ?",
                                            "Et s'ils vous avaient façonné de manière nuisible ?",
                                            "Comment honorez-vous l'influence de quelqu'un sans en être prisonnier ?",
                                            "Pouvez-vous séparer la gratitude de l'obligation ?"
                                  ]
                        },
                        {
                                  "text": "La chose la plus utile qu'on vous ait jamais dite",
                                  "level": "advanced",
                                  "hints": [
                                            "Qu'est-ce que c'était et qui l'a dit ?",
                                            "En avez-vous immédiatement compris la valeur ou seulement plus tard ?",
                                            "Le transmettez-vous ?",
                                            "La sagesse utile est-elle toujours simple ou la complexité peut-elle être utile aussi ?",
                                            "Qu'est-ce que vous auriez aimé que quelqu'un vous dise et que personne n'a fait ?"
                                  ]
                        },
                        {
                                  "text": "Quelque chose dans la vie moderne qui vous inquiète sincèrement",
                                  "level": "advanced",
                                  "hints": [
                                            "De quoi s'agit-il — technologie, politique, tendances sociales, environnement ?",
                                            "Cette inquiétude est-elle nouvelle ou s'est-elle construite ?",
                                            "Pensez-vous que d'autres la partagent ou vous sentez-vous seul face à elle ?",
                                            "Le fait de s'en inquiéter change-t-il votre façon de vivre ?",
                                            "Avez-vous un espoir que cela s'améliore ?"
                                  ]
                        },
                        {
                                  "text": "La différence entre être seul et se sentir seul",
                                  "level": "advanced",
                                  "hints": [
                                            "Êtes-vous quelqu'un qui apprécie la solitude ?",
                                            "Avez-vous déjà ressenti de la solitude au milieu d'une foule ?",
                                            "Pensez-vous que la vie moderne rend la solitude plus ou moins fréquente ?",
                                            "Peut-on se sentir seul dans une relation ?",
                                            "Quel est le remède à la solitude — plus de connexion, ou quelque chose de plus profond ?"
                                  ]
                        },
                        {
                                  "text": "Ce que signifie bien vivre — et si vous en êtes proche",
                                  "level": "advanced",
                                  "hints": [
                                            "Comment définissez-vous une vie bien vécue ?",
                                            "De quelle vie regardez-vous en vous disant : c'est proche ?",
                                            "Êtes-vous sur un chemin qui y mène ou qui s'en éloigne ?",
                                            "Y pensez-vous souvent ou la vie quotidienne prend-elle le dessus ?",
                                            "Bien vivre est-ce quelque chose que l'on planifie ou quelque chose qui arrive par accident ?"
                                  ]
                        },
                        {
                                  "text": "Si vous faites confiance à votre propre mémoire",
                                  "level": "advanced",
                                  "hints": [
                                            "Un souvenir s'est-il déjà révélé faux ?",
                                            "Pensez-vous que nous éditons nos souvenirs pour les adapter à un récit sur nous-mêmes ?",
                                            "Quel est le souvenir le plus vivant que vous ayez et à quel point pensez-vous qu'il soit fiable ?",
                                            "Est-ce important qu'un souvenir soit exact s'il semble vrai ?",
                                            "Que dit la mémoire sur l'identité — si vos souvenirs changeaient, seriez-vous une personne différente ?"
                                  ]
                        },
                        {
                                  "text": "Les institutions et si elles nous servent",
                                  "level": "advanced",
                                  "hints": [
                                            "Pensez à une institution — santé, éducation, gouvernement — et évaluez-la honnêtement.",
                                            "À quel moment une institution cesse-t-elle de remplir son rôle ?",
                                            "Vous êtes-vous déjà senti trahi par une institution sur laquelle vous comptiez ?",
                                            "Une réforme est-elle possible ou les institutions doivent-elles être entièrement remplacées ?",
                                            "À quoi ressemblerait une version fonctionnelle de l'institution que vous avez choisie ?"
                                  ]
                        },
                        {
                                  "text": "Les histoires que vous racontez sur vous-même",
                                  "level": "advanced",
                                  "hints": [
                                            "Quelle est l'histoire centrale que vous racontez sur votre propre vie ?",
                                            "Quelle part est exacte et quelle part est une construction ?",
                                            "L'histoire a-t-elle changé au fil du temps ?",
                                            "Qu'arrive-t-il à notre sens de soi quand l'histoire est remise en question ?",
                                            "Qui êtes-vous si vous dépouillez l'histoire ?"
                                  ]
                        },
                        {
                                  "text": "Ce que signifie la communauté dans un monde fragmenté",
                                  "level": "advanced",
                                  "hints": [
                                            "Vous sentez-vous membre d'une communauté ?",
                                            "La communauté en ligne est-elle une vraie communauté ?",
                                            "Qu'est-ce qui a été perdu et qu'est-ce qui a été gagné dans la façon dont les communautés se forment aujourd'hui ?",
                                            "Qu'est-ce que la communauté exige de ses membres ?",
                                            "Peut-on créer une communauté délibérément ou doit-elle se développer organiquement ?"
                                  ]
                        },
                        {
                                  "text": "Comment savoir quand faire confiance à quelqu'un",
                                  "level": "advanced",
                                  "hints": [
                                            "Quels signaux recherchez-vous ?",
                                            "Votre instinct s'est-il déjà trompé complètement ?",
                                            "Pensez-vous être trop confiant, pas assez, ou bien calibré ?",
                                            "La confiance est-elle donnée ou gagnée — et cette distinction est-elle importante ?",
                                            "Qu'est-ce qui rompt la confiance de manière irrévocable pour vous ?"
                                  ]
                        },
                        {
                                  "text": "La complexité de la conscience humaine",
                                  "level": "advanced",
                                  "hints": [
                                            "Qu'est-ce qui définit la conscience : la vigilance, l'autoréflexion, ou quelque chose d'autre ?",
                                            "La conscience est-elle un sous-produit de processus biologiques ou quelque chose de fondamental ?",
                                            "L'intelligence artificielle pourra-t-elle jamais atteindre une véritable conscience ?",
                                            "Comment le 'problème difficile' de la conscience remet-il en question les visions matérialistes ?",
                                            "Quelle est la relation entre la conscience et le cerveau physique ?"
                                  ]
                        },
                        {
                                  "text": "Si le soi est quelque chose que nous découvrons ou construisons",
                                  "level": "advanced",
                                  "hints": [
                                            "Y a-t-il un 'vous' fixe qui attend d'être découvert, ou êtes-vous continuellement créé par vos choix et votre contexte ?",
                                            "Qu'arrive-t-il à l'identité quand le contexte change radicalement — maladie, migration, perte ?",
                                            "Le récit que vous tenez sur vous-même est-il une découverte ou une invention ?",
                                            "La question importe-t-elle pour votre façon de vivre, ou est-elle purement philosophique ?",
                                            "Si le soi est construit, de quoi sommes-nous responsables dans sa construction ?"
                                  ]
                        },
                        {
                                  "text": "L'éthique de ce que nous choisissons d'oublier",
                                  "level": "advanced",
                                  "hints": [
                                            "Avons-nous une relation morale avec notre propre oubli ?",
                                            "La mémoire sélective est-elle une forme de malhonnêteté envers nous-mêmes ?",
                                            "Le pardon peut-il exiger l'oubli, ou est-ce une erreur de catégorie ?",
                                            "Qu'est-ce qu'une société qui choisit collectivement d'oublier révèle sur elle-même ?",
                                            "Existe-t-il une amnésie éthique — pour les individus ou les nations ?"
                                  ]
                        },
                        {
                                  "text": "Si la langue façonne ce que nous pouvons penser ou seulement ce que nous pouvons dire",
                                  "level": "advanced",
                                  "hints": [
                                            "L'apprentissage d'une autre langue vous a-t-il donné accès à des pensées que vous ne pouviez pas tout à fait formuler dans votre langue maternelle ?",
                                            "L'hypothèse de Sapir-Whorf est-elle une métaphore poétique ou une véritable revendication épistémologique ?",
                                            "Existe-t-il des expériences qui résistent à tout langage ?",
                                            "Que signifie ressentir quelque chose que l'on ne peut pas nommer ?",
                                            "La langue que vous utilisez dans votre monologue intérieur change-t-elle la façon dont vous vous percevez ?"
                                  ]
                        },
                        {
                                  "text": "La relation entre liberté et responsabilité dans votre propre vie",
                                  "level": "advanced",
                                  "hints": [
                                            "Où vous sentez-vous le plus libre et qu'avez-vous payé pour cette liberté ?",
                                            "La liberté est-elle toujours achetée aux dépens de quelqu'un d'autre ?",
                                            "Vivez-vous vos responsabilités comme des contraintes ou come ce qui donne sens à votre liberté ?",
                                            "Une personne peut-elle être véritablement libre sans les conditions matérielles pour exercer cette liberté ?",
                                            "Que sacrifieriez-vous pour être plus libre — et que révèle votre réponse ?"
                                  ]
                        },
                        {
                                  "text": "Ce que fait réellement la nostalgie quand elle vous visite",
                                  "level": "advanced",
                                  "hints": [
                                            "La nostalgie est-elle du chagrin, du réconfort, de la distorsion, ou les trois simultanément ?",
                                            "Faites-vous confiance aux sentiments nostalgiques ou les traitez-vous avec suspicion ?",
                                            "Ce dont vous êtes nostalgique est-il un passé réel ou une version éditée ?",
                                            "Qu'est-ce que la nostalgie empêche et qu'est-ce qu'elle rend possible ?",
                                            "Une société peut-elle être nostalgique de la même manière qu'un individu — et avec les mêmes dangers ?"
                                  ]
                        },
                        {
                                  "text": "Si comprendre quelque chose le diminue toujours",
                                  "level": "advanced",
                                  "hints": [
                                            "Pensez à quelque chose de beau ou de mystérieux — le fait de le comprendre le rend-il moins beau ?",
                                            "Y a-t-il de la valeur à ne pas savoir, ou est-ce juste du romantisme ?",
                                            "L'explication scientifique et l'émerveillement esthétique peuvent-ils coexister, ou l'une colonise-t-elle l'autre ?",
                                            "Y a-t-il quelque chose que vous évitez délibérément de comprendre par peur de perdre son pouvoir sur vous ?",
                                            "Que révèle cette question sur les limites du rationalisme ?"
                                  ]
                        },
                        {
                                  "text": "La différence entre vos valeurs revendiquées et vos valeurs révélées",
                                  "level": "advanced",
                                  "hints": [
                                            "Que disent vos choix réels — et non vos croyances déclarées — de ce que vous valorisez le plus ?",
                                            "Y a-t-il un écart douloureux entre les deux ?",
                                            "L'écart est-il la preuve de l'hypocrisie ou de la difficulté réelle de vivre selon ses principes ?",
                                            "Pouvez-vous combler l'écart, ou une certaine distance entre l'idéal et le réel persiste-t-elle toujours ?",
                                            "Que devriez-vous abandonner pour aligner davantage votre vie sur ce que vous dites croire ?"
                                  ]
                        },
                        {
                                  "text": "Si l'honnêteté radicale est une vertu ou une forme d'indulgence envers soi-même",
                                  "level": "advanced",
                                  "hints": [
                                            "L'impulsion de 'dire les choses telles qu'elles sont' concerne-t-elle le bien-être de l'autre personne ou votre propre soulagement ?",
                                            "La gentillesse est-elle parfois le choix le plus courageux ?",
                                            "Où se trouve la limite entre l'honnêteté et la cruauté ?",
                                            "L'exigence d'une honnêteté totale dans les relations reflète-t-elle l'intimité ou le contrôle ?",
                                            "Pouvez-vous penser à un moment où l'honnêteté radicale a fait plus de mal que de bien ?"
                                  ]
                        },
                        {
                                  "text": "Si le grand art doit défier ou consoler",
                                  "level": "advanced",
                                  "hints": [
                                            "Vers quoi vous tournez-vous réellement quand vous souffrez — la difficulté ou le réconfort ?",
                                            "Existe-t-il un art qui parvienne à faire les deux simultanément ?",
                                            "L'art de consolation est-il moins sérieux que l'art provocateur, ou est-ce une distinction snob ?",
                                            "Quelle est, selon vous, l'obligation primaire de l'art ?",
                                            "Existe-t-il une œuvre d'art qui vous a changé d'une manière que le réconfort n'aurait jamais pu le faire ?"
                                  ]
                        },
                        {
                                  "text": "L'exigence d'équilibre et si elle donne une fausse légitimité",
                                  "level": "advanced",
                                  "hints": [
                                            "'Présenter les deux côtés' est-il toujours juste, ou cela peut-il déformer la réalité ?",
                                            "Y a-t-il une différence entre l'équilibre et la fausse équivalence ?",
                                            "Qui décide quelles positions méritent une tribune ?",
                                            "L'équilibre journalistique peut-il coexister avec des normes épistémiques ?",
                                            "Quel est le coût de donner une tribune à une position au nom de l'équité ?"
                                  ]
                        },
                        {
                                  "text": "Si le progrès moral est réel ou juste une mode morale",
                                  "level": "advanced",
                                  "hints": [
                                            "Notre confiance éthique d'aujourd'hui est-elle un signe de progrès réel ou le même provincialisme sous de nouveaux habits ?",
                                            "Que signifierait pour le progrès moral d'être réel ?",
                                            "Pouvez-vous penser à quelque chose que nous croyons actuellement et que les générations futures regarderont avec horreur ?",
                                            "La relativité de la mode morale mine-t-elle l'idée que quelque chose est réellement mal ?",
                                            "L'humilité morale est-elle compatible avec la conviction morale ?"
                                  ]
                        },
                        {
                                  "text": "Les parties de vous-même que vous trouvez les plus difficiles à articuler",
                                  "level": "advanced",
                                  "hints": [
                                            "Y a-t-il quelque chose que vous ressentez mais pour lequel vous ne trouvez pas de langage ?",
                                            "La difficulté concerne-t-elle le langage ou la chose elle-même ?",
                                            "Pensez-vous que certaines expériences intérieures soient véritablement privées — inaccessibles même à vous-même ?",
                                            "Que signifierait comprendre pleinement sa propre intériorité ?",
                                            "L'ineffable doit-il être articulé pour être réel ?"
                                  ]
                        },
                        {
                                  "text": "Les implications politiques du contentement",
                                  "level": "advanced",
                                  "hints": [
                                            "Être véritablement content dans un monde injuste est-il un échec moral ?",
                                            "La culture de la paix personnelle est-elle compatible avec une conscience politique ?",
                                            "Le capitalisme bénéficie-t-il d'une population contente ?",
                                            "Existe-t-il une version du contentement qui ne soit pas un quiétisme politique ?",
                                            "Comment gérez-vous personnellement la tension entre paix intérieure et engagement extérieur ?"
                                  ]
                        },
                        {
                                  "text": "Mémoire, identité et ce qui reste quand les deux changent",
                                  "level": "advanced",
                                  "hints": [
                                            "Si vos souvenirs étaient systématiquement altérés, seriez-vous toujours vous-même ?",
                                            "En quoi consiste réellement la continuité du soi ?",
                                            "La personne que vous vous souvenez être est-elle la même que celle qui parle maintenant ?",
                                            "Qu'arrive-t-il à l'identité dans l'expérience d'une perte ou d'une transformation radicale ?",
                                            "La question de l'identité personnelle importe-t-elle pour la façon dont nous nous traitons les uns les autres — légalement, éthiquement ?"
                                  ]
                        },
                        {
                                  "text": "Si la vie examinée vaut toujours la peine d'être vécue",
                                  "level": "advanced",
                                  "hints": [
                                            "Socrate a dit que la vie non examinée ne vaut pas la peine d'être vécue — êtes-vous d'accord ?",
                                            "Y a-t-il un coût à l'examen — une sorte de paralysie ou de perte d'innocence ?",
                                            "L'examen peut-il devenir sa propre forme d'évitement ?",
                                            "Y a-t-il des gens qui vivent profondément et bien sans beaucoup d'auto-examen ?",
                                            "Que pensez-vous que votre propre degré d'auto-examen vous a coûté et vous a apporté ?"
                                  ]
                        },
                        {
                                  "text": "La question de ce que l'on doit aux étrangers",
                                  "level": "advanced",
                                  "hints": [
                                            "Avez-vous des obligations envers des personnes que vous ne rencontrerez jamais ?",
                                            "Jusqu'où s'étendent vos obligations morales — à votre quartier, votre nation, le monde ?",
                                            "La distance physique ou culturelle diminue-t-elle l'obligation ou est-ce une rationalisation ?",
                                            "Quelle est la différence entre la charité et la justice ?",
                                            "Comment vivez-vous réellement par rapport à cette question ?"
                                  ]
                        },
                        {
                                  "text": "Les histoires que les civilisations racontent sur elles-mêmes",
                                  "level": "advanced",
                                  "hints": [
                                            "Chaque société a un mythe fondateur — quel est le vôtre, et à quel point est-il exact ?",
                                            "Qu'est-ce qu'une nation choisit d'oublier autant qu'elle choisit de se souvenir ?",
                                            "L'identité nationale est-elle une fiction utile ou dangereuse ?",
                                            "Une société peut-elle avoir un récit plus honnête d'elle-même sans perdre sa cohésion ?",
                                            "Quelle histoire raconteriez-vous sur votre propre civilisation si vous deviez être totalement honnête ?"
                                  ]
                        },
                        {
                                  "text": "Si n'importe quel texte peut être pleinement traduit",
                                  "level": "advanced",
                                  "hints": [
                                            "Avez-vous vécu quelque chose dans une autre langue qui a résisté à la traduction ?",
                                            "L'intraduisibilité de certains mots est-elle la preuve que la langue façonne la pensée ?",
                                            "Que perdons-nous et que gagnons-nous dans la traduction ?",
                                            "Une excellente traduction est-elle une forme de création ou une forme de perte ?",
                                            "Que nous dit la traduction sur les limites de la compréhension entre les cultures ?"
                                  ]
                        },
                        {
                                  "text": "L'expérience de tenir des choses contradictoires pour vraies simultanément",
                                  "level": "advanced",
                                  "hints": [
                                            "Peut-on aimer quelqu'un et lui en vouloir en même temps sans que l'un n'annule l'autre ?",
                                            "La capacité à soutenir la contradiction est-elle un signe de maturité ou de confusion ?",
                                            "Y a-t-il des positions politiques ou morales que vous tenez qui sont en véritable tension ?",
                                            "L'exigence de cohérence dans nos croyances reflète-t-elle le rationalisme ou la rigidité ?",
                                            "Qu'est-ce que vous croyez qui contredit autre chose que vous croyez également ?"
                                  ]
                        },
                        {
                                  "text": "Ce que cela signifie que vous n'existerez pas un jour",
                                  "level": "advanced",
                                  "hints": [
                                            "Pensez-vous à votre propre mortalité régulièrement, occasionnellement ou presque jamais ?",
                                            "La conscience de la mort a-t-elle façonné votre façon de vivre ou vos valeurs ?",
                                            "La peur de la mort est-elle rationnelle, ou est-ce une confusion sur ce qui est perdu ?",
                                            "Trouvez-vous du réconfort dans une manière particulière de penser à la mortalité ?",
                                            "Qu'est-ce que la mortalité rend possible que l'immortalité ne permettrait peut-être pas ?"
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
                        },
                        {
                                  "text": "Pouvons-nous vivre sans Internet pendant une semaine ?",
                                  "level": "intermediate",
                                  "hints": [
                                            "À quelle fréquence utilisez-vous Internet ?",
                                            "Quelle est la chose la plus importante que vous faites en ligne ?",
                                            "Pourriez-vous rester hors ligne pendant 24 heures ?",
                                            "Que feriez-vous de votre temps à la place ?",
                                            "Internet est-il une nécessité aujourd'hui ?"
                                  ]
                        },
                        {
                                  "text": "Tout le monde devrait-il apprendre une deuxième langue ?",
                                  "level": "intermediate",
                                  "hints": [
                                            "Pensez-vous qu'il est important d'être bilingue ?",
                                            "Quelle est la partie la plus difficile de l'apprentissage d'une langue ?",
                                            "La technologie peut-elle remplacer l'apprentissage des langues ?",
                                            "Comment la connaissance d'une autre langue change-t-elle votre perspective ?",
                                            "Devrait-ce être obligatoire à l'école ?"
                                  ]
                        },
                        {
                                  "text": "Être enfant unique est mieux que d'avoir des frères et sœurs.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Êtes-vous enfant unique ou avez-vous des frères et sœurs ?",
                                            "Quels sont les avantages d'avoir des frères et sœurs ?",
                                            "Quels sont les avantages d'être seul ?",
                                            "Les frères et sœurs se disputent-ils toujours ?",
                                            "Comment la structure de votre famille affecte-t-elle votre personnalité ?"
                                  ]
                        },
                        {
                                  "text": "Dire un petit mensonge blanc est parfois la chose la plus gentille à faire.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Pouvez-vous penser à une situation où un mensonge est gentil ?",
                                            "L'honnêteté est-elle toujours la meilleure politique ?",
                                            "Avez-vous déjà dit un petit mensonge blanc ?",
                                            "Que ressentez-vous quand quelqu'un ment pour vous protéger ?",
                                            "Y a-t-il une différence entre un mensonge et ne pas dire toute la vérité ?"
                                  ]
                        },
                        {
                                  "text": "Les réseaux sociaux font que les gens se sentent plus mal dans leur peau.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Comment vous sentez-vous après avoir parcouru les réseaux sociaux ?",
                                            "Vous comparez-vous aux gens en ligne ?",
                                            "Pensez-vous que les réseaux sociaux montrent la vraie vie ?",
                                            "Avez-vous déjà fait une pause des réseaux sociaux ?",
                                            "À quoi ressemblerait la vie sans eux ?"
                                  ]
                        },
                        {
                                  "text": "Vous n'avez pas besoin de voyager pour comprendre le monde.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Peut-on découvrir le monde grâce aux livres et aux films ?",
                                            "Qu'est-ce que le voyage enseigne que rien d'autre ne peut faire ?",
                                            "Le voyage est-il accessible à tous ?",
                                            "Avez-vous appris quelque chose d'important sans quitter votre pays ?",
                                            "Quelle est la chose la plus importante que le voyage vous a apprise ?"
                                  ]
                        },
                        {
                                  "text": "Les gens qui n'aiment pas les animaux sont un peu suspects.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Faites-vous confiance aux gens qui n'aiment pas les animaux ?",
                                            "Le fait d'aimer les animaux dit-il quelque chose sur le caractère d'une personne ?",
                                            "Faut-il aimer les animaux pour être une bonne personne ?",
                                            "Que pensez-vous quand vous rencontrez quelqu'un qui a peur des animaux ?",
                                            "Est-ce juste de dire cela ?"
                                  ]
                        },
                        {
                                  "text": "Le travail à domicile rend les gens plus paresseux.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Travaillez-vous ou étudiez-vous à domicile ?",
                                            "Êtes-vous plus ou moins productif à la maison ?",
                                            "Quelles sont les plus grandes distractions à la maison ?",
                                            "La structure d'un bureau ou d'une salle de classe vous manque-t-elle ?",
                                            "Pensez-vous que le travail à distance est l'avenir ?"
                                  ]
                        },
                        {
                                  "text": "Les premières impressions sont presque toujours fausses.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Jugez-vous les gens rapidement ?",
                                            "Votre première impression de quelqu'un a-t-elle déjà été complètement fausse ?",
                                            "Que remarquez-vous en premier chez une personne ?",
                                            "Est-il juste de juger quelqu'un dès une première rencontre ?",
                                            "Pouvez-vous changer la première impression que quelqu'un a de vous ?"
                                  ]
                        },
                        {
                                  "text": "Les films romantiques donnent aux gens des attentes irréalistes.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Regardez-vous des films romantiques ?",
                                            "Pensez-vous qu'ils influencent la façon dont les gens perçoivent les relations ?",
                                            "Le vrai amour est-il comme dans les films ?",
                                            "Qu'est-ce qui est irréaliste dans les films romantiques ?",
                                            "Les histoires d'amour sont-elles différentes dans votre culture ?"
                                  ]
                        },
                        {
                                  "text": "Être drôle est plus utile qu'être intelligent.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Préféreriez-vous être drôle ou intelligent ?",
                                            "Pouvez-vous penser à une situation où l'humour a plus aidé que l'intelligence ?",
                                            "Les gens drôles sont-ils plus populaires ?",
                                            "L'intelligence et l'humour peuvent-ils coexister ?",
                                            "Quel genre d'humour avez-vous ?"
                                  ]
                        },
                        {
                                  "text": "Le silence à table n'est pas gênant — il est paisible.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Parlez-vous beaucoup pendant les repas ?",
                                            "Le silence est-il inconfortable pour vous ?",
                                            "Mangez-vous avec votre téléphone ?",
                                            "Pensez-vous que les repas devraient être sociaux ?",
                                            "De quoi parlez-vous habituellement au dîner ?"
                                  ]
                        },
                        {
                                  "text": "Il est plus facile de s'excuser que de demander la permission.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Demandez-vous la permission ou agissez-vous d'abord ?",
                                            "Pouvez-vous penser à un moment où cela a bien fonctionné ?",
                                            "Est-ce une façon responsable de se comporter ?",
                                            "Certaines personnes sont-elles trop prudentes ?",
                                            "Qu'est-ce que cela dit sur la personnalité de quelqu'un ?"
                                  ]
                        },
                        {
                                  "text": "Les gens lisent trop les nouvelles et cela les rend anxieux.",
                                  "level": "intermediate",
                                  "hints": [
                                            "À quelle fréquence consultez-vous les nouvelles ?",
                                            "Les nouvelles affectent-elles votre humeur ?",
                                            "Est-il important de rester informé ?",
                                            "Comment choisissez-vous les nouvelles à suivre ?",
                                            "Avez-vous déjà fait une pause des nouvelles ?"
                                  ]
                        },
                        {
                                  "text": "On ne connaît jamais vraiment quelqu'un tant qu'on n'a pas voyagé avec lui.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Avez-vous voyagé avec un ami ou un partenaire ?",
                                            "Qu'avez-vous découvert sur eux ?",
                                            "Quelles situations révèlent le vrai caractère de quelqu'un ?",
                                            "Pensez-vous bien connaître vos amis ?",
                                            "Quoi d'autre montre qui est vraiment quelqu'un ?"
                                  ]
                        },
                        {
                                  "text": "La culture de la salle de sport est allée trop loin.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Allez-vous à la salle de sport ?",
                                            "Quelle est l'importance du fitness pour vous ?",
                                            "Pensez-vous que les gens sont obsédés par leur corps ?",
                                            "Y a-t-il une pression pour ressembler à un certain modèle ?",
                                            "Quelle est une attitude saine envers l'exercice ?"
                                  ]
                        },
                        {
                                  "text": "Un petit peu de jalousie dans une relation est sain.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Pensez-vous que la jalousie est toujours négative ?",
                                            "Vous êtes-vous déjà senti jaloux ?",
                                            "Quelle est la différence entre la jalousie et l'insécurité ?",
                                            "À quel moment la jalousie devient-elle un problème ?",
                                            "Que dit réellement la jalousie sur une personne ?"
                                  ]
                        },
                        {
                                  "text": "Les réseaux sociaux détruisent-ils nos compétences sociales ?",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Comment votre style de communication a-t-il changé au cours des 10 dernières années ?",
                                            "Trouvez-vous plus difficile de parler à des inconnus maintenant ?",
                                            "L'interaction en ligne est-elle aussi précieuse que le face-à-face ?",
                                            "Quelles compétences sociales sont les plus affectées par le temps passé devant un écran ?",
                                            "Pourriez-vous passer un mois sans réseaux sociaux ?"
                                  ]
                        },
                        {
                                  "text": "Les transports publics devraient-ils être gratuits ?",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Qui paierait pour la gratuité des transports publics ?",
                                            "Cela réduirait-il réellement l'usage de la voiture ?",
                                            "Le transport gratuit est-il un droit ou un luxe ?",
                                            "Comment la qualité du service changerait-elle ?",
                                            "Quelle est la situation dans votre ville ?"
                                  ]
                        },
                        {
                                  "text": "La nostalgie n'est le plus souvent qu'un mensonge que nous nous racontons.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "De quoi êtes-vous le plus nostalgique ?",
                                            "Pensez-vous que le passé était vraiment meilleur ?",
                                            "La nostalgie est-elle réconfortante ou vous freine-t-elle ?",
                                            "La nostalgie peut-elle être dangereuse — personnellement ou politiquement ?",
                                            "Que signifie le fait que nous retouchons nos souvenirs ?"
                                  ]
                        },
                        {
                                  "text": "La plupart des gens ne veulent pas vraiment de retours honnêtes — ils veulent être rassurés.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Lorsque vous demandez un avis, que voulez-vous vraiment ?",
                                            "Avez-vous déjà reçu un retour difficile à entendre mais précieux ?",
                                            "Est-ce gentil de donner à quelqu'un un retour honnête ?",
                                            "Pouvez-vous penser à un contexte où le rassurance est en fait la bonne chose ?",
                                            "Quelle est la différence entre la gentillesse et la malhonnêteté ?"
                                  ]
                        },
                        {
                                  "text": "Il est possible d'être dépendant au fait d'être occupé.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Remplissez-vous délibérément votre emploi du temps ?",
                                            "Le fait d'être occupé vous semble-t-il vertueux ?",
                                            "Que se passe-t-il quand vous n'avez rien à faire ?",
                                            "Le fait d'être occupé est-il un symbole de statut social ?",
                                            "Quand le repos a-t-il cessé d'être perçu comme acceptable ?"
                                  ]
                        },
                        {
                                  "text": "La célébrité ressemble à une punition, pas à une récompense.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Voudriez-vous être célèbre ?",
                                            "Que perdriez-vous si vous étiez célèbre ?",
                                            "Pensez-vous que la plupart des personnes célèbres sont heureuses ?",
                                            "La célébrité est-elle synonyme de succès ?",
                                            "Quel genre de reconnaissance voudriez-vous réellement ?"
                                  ]
                        },
                        {
                                  "text": "Le système scolaire écrase la créativité plus qu'il ne l'encourage.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Pensez-vous que votre éducation a encouragé votre créativité ?",
                                            "Quelle matière ou quel moment à l'école avez-vous trouvé le plus créatif ?",
                                            "Est-il possible d'enseigner la créativité ?",
                                            "À quoi ressemblerait une école si la créativité était la priorité ?",
                                            "Êtes-vous plus ou moins créatif que lorsque vous étiez enfant ?"
                                  ]
                        },
                        {
                                  "text": "Le comportement véritablement désintéressé n'existe pas.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Pouvez-vous penser à un acte véritablement altruiste ?",
                                            "Faire quelque chose de bien vous fait-il vous sentir bien — et cela le rend-il égoïste ?",
                                            "S'agit-il d'une vision cynique ou réaliste ?",
                                            "La motivation derrière une action importe-t-elle si le résultat est positif ?",
                                            "Le fait de croire cela change-t-il votre comportement ?"
                                  ]
                        },
                        {
                                  "text": "La plupart des adultes improvisent totalement.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Avez-vous l'impression de savoir ce que vous faites ?",
                                            "Quand vous attendiez-vous à vous sentir adulte ?",
                                            "Tout le monde a-t-il l'impression de faire semblant ?",
                                            "Est-ce rassurant ou terrifiant ?",
                                            "Qui semble avoir tout compris — pensez-vous que ce soit vraiment le cas ?"
                                  ]
                        },
                        {
                                  "text": "Les gens les plus intéressants sont toujours un peu difficiles.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Pouvez-vous penser à quelqu'un qui est à la fois fascinant et difficile ?",
                                            "La difficulté est-elle un signe de profondeur ou juste... de difficulté ?",
                                            "Préféreriez-vous avoir un ami facile et ennuyeux ou un ami stimulant et intéressant ?",
                                            "Qu'est-ce qui rend quelqu'un véritablement intéressant à vos yeux ?",
                                            "Y a-t-il quelque chose d'attrayant chez les gens qui ne facilitent pas la vie ?"
                                  ]
                        },
                        {
                                  "text": "Nous pardonnons aux gens que nous aimons des choses que nous ne pardonnerions jamais à des inconnus.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Est-ce juste ou s'agit-il d'un deux poids deux mesures ?",
                                            "Pouvez-vous penser à un exemple dans votre propre vie ?",
                                            "Qu'est-ce que cela dit sur la nature de l'amour ?",
                                            "Devrions-nous être plus ou moins exigeants avec les gens que nous aimons ?",
                                            "Y a-t-il quelque chose que vous ne pardonneriez jamais, quelle que soit la relation ?"
                                  ]
                        },
                        {
                                  "text": "Les zones de confort sont surévaluées — c'est dans l'inconfort que la croissance se produit réellement.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Pouvez-vous penser à un moment où l'inconfort a mené à la croissance ?",
                                            "Est-il toujours nécessaire d'être mal à l'aise pour se développer ?",
                                            "Y a-t-il une différence entre l'inconfort productif et la simple souffrance ?",
                                            "Cherchez-vous activement l'inconfort ?",
                                            "Qu'est-ce qui se trouve juste en dehors de votre zone de confort en ce moment ?"
                                  ]
                        },
                        {
                                  "text": "La colère est une émotion sous-estimée — parfois, elle fait bouger les choses.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Pensez-vous bien exprimer votre colère ?",
                                            "Pouvez-vous penser à un moment où la colère a été productive ?",
                                            "Y a-t-il une différence entre une colère saine et une colère destructrice ?",
                                            "Certaines personnes sont-elles trop promptes à réprimer leur colère ?",
                                            "Que faites-vous quand vous êtes en colère ?"
                                  ]
                        },
                        {
                                  "text": "Les animaux de compagnie ont remplacé la communauté pour beaucoup de gens.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Pensez-vous que la solitude augmente ?",
                                            "Quel rôle un animal de compagnie joue-t-il dans la vie émotionnelle de quelqu'un ?",
                                            "Est-ce triste, ou juste un autre type de connexion ?",
                                            "Qu'est-ce qui a remplacé la communauté traditionnelle dans la vie moderne ?",
                                            "Vous sentez-vous membre d'une communauté ?"
                                  ]
                        },
                        {
                                  "text": "Voyager seul est le seul moyen de se découvrir véritablement.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Avez-vous déjà voyagé seul ?",
                                            "Peut-on se découvrir sans voyager ?",
                                            "Qu'est-ce que le voyage en solo vous oblige à faire ?",
                                            "Quelle est la chose la plus importante que vous ayez apprise sur vous-même grâce à une expérience ?",
                                            "La découverte de soi est-elle un voyage ou une destination ?"
                                  ]
                        },
                        {
                                  "text": "Un moment où vous avez dû recommencer à zéro n'est jamais totalement perdu.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Avez-vous dû recommencer quelque chose depuis le début ?",
                                            "Qu'avez-vous retiré de la première tentative ?",
                                            "Recommencer est-il un échec ou un choix ?",
                                            "Quelle est la chose la plus difficile quand on recommence ?",
                                            "Pensez-vous que les revers soient nécessaires ?"
                                  ]
                        },
                        {
                                  "text": "L'obsession de la productivité n'est que du capitalisme déguisé en développement personnel.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Suivez-vous votre temps ou utilisez-vous des applications de productivité ?",
                                            "Le fait d'être productif vous fait-il vous sentir bien ?",
                                            "D'où vient selon vous la pression d'être productif ?",
                                            "Le repos fait-il véritablement partie d'une vie productive ou n'est-ce qu'un outil de récupération ?",
                                            "Pouvez-vous penser à quelque chose de précieux qui est complètement improductif ?"
                                  ]
                        },
                        {
                                  "text": "Génie génétique : progrès ou péril ?",
                                  "level": "advanced",
                                  "hints": [
                                            "Quels sont les avantages potentiels pour la médecine ?",
                                            "Cela pourrait-il mener à des inégalités sociales ?",
                                            "Est-il éthique de 'concevoir' des êtres humains ?",
                                            "Qui devrait réguler cette technologie ?",
                                            "Risquons-nous des changements permanents du patrimoine génétique ?"
                                  ]
                        },
                        {
                                  "text": "Le revenu universel est la seule solution à l'automatisation généralisée.",
                                  "level": "advanced",
                                  "hints": [
                                            "Comment le revenu universel serait-il financé ?",
                                            "Cela découragerait-il les gens de travailler ?",
                                            "Cela pourrait-il réduire la pauvreté et les inégalités ?",
                                            "Quelles sont les alternatives au revenu universel ?",
                                            "L'automatisation est-elle vraiment une menace pour tous les emplois ?"
                                  ]
                        },
                        {
                                  "text": "Le bonheur est un choix — les circonstances ne sont que des excuses.",
                                  "level": "advanced",
                                  "hints": [
                                            "Pensez-vous que le bonheur est sous le contrôle de chacun ?",
                                            "Est-ce une vision privilégiée ?",
                                            "Peut-on choisir sa façon de réagir aux mauvaises circonstances ?",
                                            "Connaissez-vous des gens heureux malgré une vie difficile ?",
                                            "La quête du bonheur est-elle en soi une partie du problème ?"
                                  ]
                        },
                        {
                                  "text": "Les gens qui disent détester les histoires (drama) en sont généralement la source.",
                                  "level": "advanced",
                                  "hints": [
                                            "Connaissez-vous quelqu'un comme ça ?",
                                            "Pourquoi les créateurs de conflits ne se reconnaissent-ils pas comme tels ?",
                                            "Le drama est-il toujours mauvais ?",
                                            "Quelle est la différence entre conflit et drama ?",
                                            "La conscience de soi est-elle rare ?"
                                  ]
                        },
                        {
                                  "text": "L'ennui est un signe de manque d'imagination, pas de manque de stimulation.",
                                  "level": "advanced",
                                  "hints": [
                                            "À quand remonte la dernière fois où vous vous êtes sincèrement ennuyé ?",
                                            "Pensez-vous que nous avons perdu la capacité de nous ennuyer ?",
                                            "Que se passe-t-il dans votre esprit quand vous vous ennuyez ?",
                                            "L'ennui est-il inconfortable parce que nous craignons nos propres pensées ?",
                                            "Qu'est-ce que l'ennui vous a déjà amené à créer ou à découvrir ?"
                                  ]
                        },
                        {
                                  "text": "L'empathie sans limites n'est que de la complaisance avec de bonnes relations publiques.",
                                  "level": "advanced",
                                  "hints": [
                                            "Vous considérez-vous comme une personne empathique ?",
                                            "L'empathie peut-elle être jouée plutôt que ressentie ?",
                                            "Est-il possible d'avoir trop d'empathie ?",
                                            "Quelle est la différence entre l'empathie et se perdre dans l'expérience d'autrui ?",
                                            "Avez-vous déjà dû vous protéger de trop ressentir ?"
                                  ]
                        },
                        {
                                  "text": "Les opinions les plus dangereuses sont celles qui semblent tout à fait raisonnables.",
                                  "level": "advanced",
                                  "hints": [
                                            "Pouvez-vous citer un exemple d'idée dangereuse qui semble raisonnable ?",
                                            "Comment évaluez-vous un argument qui semble juste mais ne l'est peut-être pas ?",
                                            "Est-il plus difficile de contester une opinion erronée polie et argumentée ou une opinion extrême évidente ?",
                                            "Quel est votre test personnel pour savoir si une idée est digne de confiance ?",
                                            "Une idée raisonnable vous a-t-elle déjà mené là où vous ne l'attendiez pas ?"
                                  ]
                        },
                        {
                                  "text": "L'authenticité est devenue la performance la plus soigneusement mise en scène de toutes.",
                                  "level": "advanced",
                                  "hints": [
                                            "Que signifie être authentique pour vous ?",
                                            "Vous présentez-vous différemment en ligne et hors ligne ?",
                                            "L'authenticité totale est-elle seulement possible ?",
                                            "Peut-on être à la fois authentique et stratégique ?",
                                            "Quand vous sentez-vous le plus vous-même ?"
                                  ]
                        },
                        {
                                  "text": "Le pardon est en fin de compte quelque chose que l'on fait pour soi, pas pour l'autre.",
                                  "level": "advanced",
                                  "hints": [
                                            "Avez-vous déjà pardonné à quelqu'un qui ne le méritait pas, pour votre propre bien ?",
                                            "Quelle est la différence entre pardonner et oublier ?",
                                            "Le pardon est-il toujours possible ?",
                                            "Pardonner signifie-t-il accepter ce qui a été fait ?",
                                            "Y a-t-il quelque chose que vous trouvez difficile à pardonner ?"
                                  ]
                        },
                        {
                                  "text": "Les institutions finissent toujours par se protéger plus que les personnes qu'elles servent.",
                                  "level": "advanced",
                                  "hints": [
                                            "Pouvez-vous penser à une institution qui a failli à sa mission ?",
                                            "Est-ce inévitable ou les institutions peuvent-elles être réformées ?",
                                            "Les institutions attirent-elles des gens qui veulent les protéger ?",
                                            "À quoi ressemblerait une institution véritablement responsable ?",
                                            "Est-il naïf d'attendre des institutions qu'elles s'autocorrigent ?"
                                  ]
                        },
                        {
                                  "text": "Le désir de certitude est la racine de la plupart des cruautés humaines.",
                                  "level": "advanced",
                                  "hints": [
                                            "Pensez-vous que l'incertitude est difficile à tolérer ?",
                                            "Connaissez-vous un cas où le besoin de certitude a causé du tort ?",
                                            "Le doute est-il une force ou une faiblesse ?",
                                            "Les personnes aux convictions fortes rendent-elles le monde meilleur ou pire ?",
                                            "Comment gérez-vous votre propre besoin de certitude ?"
                                  ]
                        },
                        {
                                  "text": "Les valeurs de la plupart des gens ne tiennent que lorsqu'elles ne coûtent rien.",
                                  "level": "advanced",
                                  "hints": [
                                            "Vos valeurs ont-elles déjà été testées par un coût réel ?",
                                            "Pouvez-vous penser à un moment où vous avez agi contre vos valeurs déclarées ?",
                                            "Est-il juste de juger les gens qui échouent à respecter leurs valeurs sous pression ?",
                                            "L'écart entre valeurs et comportement est-il de l'hypocrisie ou simplement de l'humanité ?",
                                            "Quelle est la valeur que vous ne compromettriez jamais ?"
                                  ]
                        },
                        {
                                  "text": "Savoir quand arrêter de parler est plus rare et plus précieux que de savoir quoi dire.",
                                  "level": "advanced",
                                  "hints": [
                                            "Pensez-vous être à l'écoute ?",
                                            "Pouvez-vous penser à une situation où le silence était la bonne réponse ?",
                                            "Être un bon orateur est-il surestimé ?",
                                            "Que remarquez-vous chez les gens qui écoutent plus qu'ils ne parlent ?",
                                            "Le silence a-t-il déjà été la chose la plus puissante que vous ayez faite ?"
                                  ]
                        },
                        {
                                  "text": "Nous sommes plus définis par ce que nous refusons de faire que par ce que nous choisissons de faire.",
                                  "level": "advanced",
                                  "hints": [
                                            "Qu'est-ce que vous ne feriez pas, quelle que soit la récompense ?",
                                            "Dire non à quelque chose vous définit-il ?",
                                            "Vos limites reflètent-elles vos valeurs ?",
                                            "Ce que nous évitons est-il aussi révélateur que ce que nous poursuivons ?",
                                            "Un refus vous a-t-il déjà coûté quelque chose d'important ?"
                                  ]
                        },
                        {
                                  "text": "La 'cancel culture' est devenue une forme de justice numérique expéditive.",
                                  "level": "advanced",
                                  "hints": [
                                            "Pensez-vous qu'un tollé public soit parfois justifié ?",
                                            "Y a-t-il une différence entre responsabilité et punition ?",
                                            "Qui décide de ce qui est impardonnable ?",
                                            "La dénonciation fonctionne-t-elle — change-t-elle les comportements ?",
                                            "Est-ce irrémédiablement problématique ou juste imparfait ?"
                                  ]
                        },
                        {
                                  "text": "Les gens qui prétendent n'avoir aucun regret n'ont soit pas assez vécu, soit pas assez réfléchi.",
                                  "level": "advanced",
                                  "hints": [
                                            "Avez-vous des regrets ?",
                                            "Vivre sans regrets est-ce une philosophie saine ou un mécanisme de défense ?",
                                            "Que signifierait vivre sans regrets ?",
                                            "Le regret peut-il être utile ?",
                                            "Y a-t-il quelque chose que vous changeriez si vous le pouviez ?"
                                  ]
                        },
                        {
                                  "text": "Le soi n'est pas quelque chose que nous découvrons — c'est quelque chose que nous inventons continuellement.",
                                  "level": "advanced",
                                  "hints": [
                                            "Cette idée vous semble-t-elle libératrice ou déstabilisante ?",
                                            "Que signifieraient vos choix si l'identité était construite plutôt que trouvée ?",
                                            "Y a-t-il quelque chose qui vous semble être un 'vous' fixe et essentiel ?",
                                            "Le soi que vous présentez aux autres façonne-t-il le soi que vous devenez ?",
                                            "Qu'arrive-t-il à l'identité lors d'une perte ou d'une transformation radicale ?"
                                  ]
                        },
                        {
                                  "text": "La compassion qui exige qu'une histoire soit racontée simplement n'est pas de la compassion — c'est de la sentimentalité.",
                                  "level": "advanced",
                                  "hints": [
                                            "Différence entre compassion réelle et réaction émotionnelle ?",
                                            "Une histoire simplifiée a-t-elle déjà déformé une réalité complexe ?",
                                            "La sentimentalité nous donne-t-elle l'impression d'agir ?",
                                            "La simplification est-elle nécessaire à l'empathie ?",
                                            "Coût de la réduction de la souffrance à un récit digeste ?"
                                  ]
                        },
                        {
                                  "text": "Toute idéologie, poussée à sa conclusion logique, devient une forme de violence.",
                                  "level": "advanced",
                                  "hints": [
                                            "Une idéologie échappe-t-elle à cette logique ?",
                                            "Raison de rejeter l'idéologie ou de la porter avec légèreté ?",
                                            "Différence entre position de principe et idéologie ?",
                                            "Le pragmatisme évite-t-il ce piège или le cache-t-il ?",
                                            "Toutes les positions politiques sont-elles également dangereuses ?"
                                  ]
                        },
                        {
                                  "text": "Le langage ne décrit pas la réalité — il la construit.",
                                  "level": "advanced",
                                  "hints": [
                                            "Une autre langue vous a-t-elle donné accès à des pensées inédites ?",
                                            "Ressentez-vous des choses qu'aucune langue ne peut nommer ?",
                                            "La langue de vos pensées affecte-t-elle vos émotions ?",
                                            "Un concept sans mot est-il possible ?",
                                            "Une idée peut-elle être pleinement traduite ?"
                                  ]
                        },
                        {
                                  "text": "La chose la plus subversive qu'une personne puisse faire dans le monde moderne est d'être sincèrement satisfaite.",
                                  "level": "advanced",
                                  "hints": [
                                            "Le contentement est-il politique ?",
                                            "L'économie exige-t-elle des consommateurs insatisfaits ?",
                                            "Le contentement authentique est-il possible ?",
                                            "Différence entre contentement et résignation ?",
                                            "Être satisfait signifie-t-il cesser de se soucier de l'injustice ?"
                                  ]
                        },
                        {
                                  "text": "L'exigence d'équilibre dans le discours public donne souvent une fausse légitimité à des positions qui ne la méritent pas.",
                                  "level": "advanced",
                                  "hints": [
                                            "'Présenter les deux côtés' est-il toujours juste ?",
                                            "Qui décide quelles positions méritent une tribune ?",
                                            "Différence entre équilibre et fausse équivalence ?",
                                            "La neutralité journalistique peut-elle coexister avec la vérité ?",
                                            "Coût de donner une tribune au nom de l'équité ?"
                                  ]
                        },
                        {
                                  "text": "L'honnêteté radicale, pratiquée sans sagesse, n'est que de la cruauté avec de bonnes intentions.",
                                  "level": "advanced",
                                  "hints": [
                                            "L'impulsion de 'dire les choses telles qu'elles sont' vise-t-elle l'autre ou votre soulagement ?",
                                            "Moment où l'honnêteté radicale a fait du mal ?",
                                            "La gentillesse est-elle parfois le choix le plus courageux ?",
                                            "Ligne entre honnêteté et cruauté ?",
                                            "L'exigence d'honnêteté reflète-t-elle l'intimité ou le contrôle ?"
                                  ]
                        },
                        {
                                  "text": "Le libre arbitre est une fiction indispensable plutôt qu'une réalité significative.",
                                  "level": "advanced",
                                  "hints": [
                                            "Importe-t-il que ce soit réel si nous devons agir comme si ça l'était ?",
                                            "Responsabilité morale sans libre arbitre ?",
                                            "Les neurosciences tranchent-elles la question ?",
                                            "La croyance au libre arbitre est-elle déterministe ?",
                                            "Faites-vous confiance à votre intuition ?"
                                  ]
                        },
                        {
                                  "text": "Internet ne nous a pas rendus plus informés — il nous a rendus plus sûrs de nos erreurs.",
                                  "level": "advanced",
                                  "hints": [
                                            "Croyance façonnée par des algorithmes ?",
                                            "Problème d'Internet ou de la nature humaine ?",
                                            "Pratiques de protection ?",
                                            "L'expertise a-t-elle encore un sens ?",
                                            "Confiance en votre capacité à évaluer l'info ?"
                                  ]
                        },
                        {
                                  "text": "L'art qui réconforte a moins de valeur que l'art qui dérange.",
                                  "level": "advanced",
                                  "hints": [
                                            "Art faisant les deux simultanément ?",
                                            "Hiérarchie des valeurs ou snobisme ?",
                                            "Vers quoi vous tournez-vous dans la douleur — difficulté ou consolation ?",
                                            "L'art dérangeant change-t-il le comportement ?",
                                            "But de l'art : défi, reflet ou transcendance ?"
                                  ]
                        },
                        {
                                  "text": "Le progrès moral est réel, mais l'idée que l'histoire avance dans une seule direction est un mythe.",
                                  "level": "advanced",
                                  "hints": [
                                            "Exemple de progrès moral authentique ?",
                                            "Domaine où nous avons régressé ?",
                                            "Le progrès est-il un mythe culturel ?",
                                            "La mode morale est-elle prise pour du progrès ?",
                                            "Preuve que nous sommes meilleurs que nos ancêtres ?"
                                  ]
                        },
                        {
                                  "text": "La quête de certitude est à la racine de la plupart des cruautés humaines.",
                                  "level": "advanced",
                                  "hints": [
                                            "Exemple où le besoin de certitude a causé du tort ?",
                                            "Le doute est-il une vertu morale ?",
                                            "Les convictions inébranlables améliorent-elles le monde ?",
                                            "Certitude non dangereuse ?",
                                            "Tenir des croyances fortes sans rigidité ?"
                                  ]
                        },
                        {
                                  "text": "La mémoire n'est pas un enregistrement de ce qui s'est passé — c'est une histoire que nous réécrivons sans cesse.",
                                  "level": "advanced",
                                  "hints": [
                                            "Souvenir contredit par un témoin ?",
                                            "Éditons-nous nos souvenirs pour notre image ?",
                                            "Conséquence pour l'identité ?",
                                            "Souvenir réécrit plus vrai que l'événement ?",
                                            "Fiabilité de votre souvenir le plus vif ?"
                                  ]
                        },
                        {
                                  "text": "Il n'y a pas de consommation éthique sous le capitalisme tardif — et c'est une raison d'agir, pas d'abandonner.",
                                  "level": "advanced",
                                  "hints": [
                                            "Les choix individuels comptent-ils ?",
                                            "La responsabilité personnelle est-elle un piège politique ?",
                                            "Changement systémique vs action individuelle ?",
                                            "Vivre éthiquement dans un système contraire ?",
                                            "Votre comportement change-t-il face à ce constat ?"
                                  ]
                        },
                        {
                                  "text": "La vie examinée vaut la peine d'être vécue — mais l'examiner de trop près peut la rendre invivable.",
                                  "level": "advanced",
                                  "hints": [
                                            "Trop d'autoréflexion ?",
                                            "L'introspection comme évitement ?",
                                            "Coût de l'examen continu ?",
                                            "Vivre bien sans auto-examen ?",
                                            "Coût et gain de votre réflexion ?"
                                  ]
                        },
                        {
                                  "text": "L'éthique de la colonisation d'autres planètes.",
                                  "level": "advanced",
                                  "hints": [
                                            "Droit sur d'autres mondes sans résoudre les nôtres ?",
                                            "Exporter les systèmes humains ?",
                                            "Obligations envers une vie extraterrestre ?",
                                            "Danger du 'Plan B' ?",
                                            "Propriété des ressources planétaires ?"
                                  ]
                        },
                        {
                                  "text": "Le libre arbitre existe-t-il vraiment ou est-ce une illusion ?",
                                  "level": "advanced",
                                  "hints": [
                                            "Si nos actions sont déterminées, sommes-nous responsables ?",
                                            "Sensation de choix comme preuve ?",
                                            "Un ordinateur prédisant vos décisions ?",
                                            "Différence entre 'liberté de' et 'liberté pour' ?",
                                            "L'âme change-t-elle l'équation ?"
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
                        },
                        {
                                  "topic": "Travail à distance vs travail au bureau: qu'est-ce qui est le mieux pour la productivité et le bien-être ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Sécurité d'emploi vs évolution de carrière: sur quoi les adultes devraient-ils donner la priorité ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Créer sa propre entreprise vs travailler pour un employeur: quel est le meilleur choix à 30 ans ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Ambition vs équilibre vie-travail: peut-on vraiment avoir les deux ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Réseautage vs développement des compétences: qu'est-ce qui fait progresser le plus votre carrière ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Feedback honnête d'un manager vs être laissé à travailler de manière autonome: qu'est-ce qui motive le plus les adultes ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Changer de carrière à 40 ans vs rester dans son domaine: quelle est la décision la plus sage ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Rembourser son hypothèque par anticipation vs investir cet argent: qu'est-ce qui est le plus intelligent ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Posséder une maison vs louer en permanence: qu'est-ce qui convient le mieux à la vie adulte moderne ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Épargner tôt pour la retraite vs profiter de son argent à la trentaine: qu'est-ce qui est plus sage ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Vivre en dessous de ses moyens vs dépenser pour profiter de la vie maintenant: quelle approche est la plus saine ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Deux revenus dans un foyer vs un partenaire qui reste à la maison: qu'est-ce qui fonctionne le mieux pour les familles ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Avoir des enfants vs choisir de ne pas en avoir: qu'est-ce qui rend la vie adulte plus épanouissante ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Parentalité stricte vs parentalité permissive: qu'est-ce qui produit des adultes plus heureux ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Relation à long terme vs rester célibataire: qu'est-ce qui est le mieux pour la croissance personnelle ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Garder la vie professionnelle et la vie privée séparées vs les intégrer: qu'est-ce qui est le plus sain ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "S'installer à l'étranger en couple vs rester proche de la famille: quel est le bon choix ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Donner la priorité à la santé physique vs la santé mentale: sur quoi les adultes devraient-ils se concentrer en premier ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Santé privée vs s'appuyer sur le système public: quelle est la meilleure stratégie pour un adulte ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Contrôles médicaux réguliers vs n'y aller que lorsqu'on est malade: quelle est l'approche la plus intelligente ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Réduire l'alcool vs réduire le stress: qu'est-ce qui a le plus d'impact sur la santé des adultes ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Liberté individuelle vs responsabilité communautaire: qu'est-ce qui devrait guider les décisions des adultes ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Optimisme pour l'avenir vs réalisme: quelle est l'attitude la plus utile pour les adultes ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Changer le monde vs construire une vie personnelle stable: quelle est l'ambition la plus honnête ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Consacrer son temps au bénévolat vs donner de l'argent: qu'est-ce qui fait le plus de bien ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Suivre les valeurs de sa génération vs les remettre en question: qu'est-ce qui est le plus admirable ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Savoir combien vos collègues gagnent vs ne pas savoir: qu'est-ce qui est le mieux pour l'harmonie au bureau ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Répondre aux messages immédiatement vs prendre son temps: qu'est-ce qui est le plus respectueux dans la vie adulte ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Admettre qu'on n'a aucune idée de ce qu'est un fonds de pension vs prétendre qu'on le sait: quelle est l'expérience adulte la plus courante ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Annuler des plans à la dernière minute vs sortir quand on n'en a pas envie: quelle est la pire habitude adulte ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Parler ouvertement d'argent avec ses amis vs garder cela privé: quelle est l'approche la plus mature ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Télétravail vs Travail au bureau",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Voitures électriques vs Voitures à essence",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Apprentissage en ligne ou apprentissage en classe: qu'est-ce qui est le plus efficace ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Mémoriser des faits ou apprendre à trouver des informations: quelle compétence est la plus importante ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Études universitaires ou formation professionnelle: quelle est la meilleure voie ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Examens ou évaluation continue: quel est le moyen le plus juste d'évaluer les élèves ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Apprendre une langue étrangère à l'école ou vivre à l'étranger: qu'est-ce qui est le plus efficace ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Écoles non mixtes ou écoles mixtes: lesquelles sont les meilleures pour les élèves ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Réseaux sociaux ou communication en face à face: qu'est-ce qui est le mieux pour rester en contact ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Services de streaming ou télévision traditionnelle: qu'est-ce qui est le mieux ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Travailler de chez soi ou travailler dans un bureau: qu'est-ce qui est le plus productif ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Lire les infos en ligne ou lire un journal: qu'est-ce qui est le plus fiable ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Passer du temps sur les réseaux sociaux ou passer du temps dans la nature: qu'est-ce qui est le mieux pour votre santé mentale ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Utiliser les transports publics ou conduire une voiture: qu'est-ce qui est le mieux pour la société ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Acheter des vêtements d'occasion ou acheter des vêtements neufs: quelle est la meilleure habitude ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Vivre en ville ou vivre à la campagne: qu'est-ce qui convient le mieux aux jeunes ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Végétarisme ou manger de la viande: qu'est-ce qui est le mieux pour la planète ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Changements de mode de vie individuels ou action gouvernementale: qu'est-ce qui fait le plus pour l'environnement ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Un emploi stable ou une carrière créative: quel est le meilleur choix de vie ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Créer sa propre entreprise ou travailler pour une entreprise: qu'est-ce qui est mieux ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Salaire élevé ou satisfaction au travail: qu'est-ce qui compte le plus au travail ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Travailler de longues heures ou avoir un équilibre vie-travail: qu'est-ce qui mène à plus de succès ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Choisir une carrière basée sur la passion ou sur les perspectives d'emploi: qu'est-ce qui est le plus sage ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Vivre en tant qu'individu ou faire passer la communauté en premier: qu'est-ce qui est le plus important ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Valeurs traditionnelles ou valeurs modernes: lesquelles sont les plus importantes à conserver ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Faire du bénévolat ou donner de l'argent à des œuvres de charité: qu'est-ce qui aide le plus ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "La célébrité ou faire la différence discrètement: quel est le meilleur but dans la vie ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Suivre les règles ou penser par soi-même: qu'est-ce qui compte le plus ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Santé physique ou santé mentale: quelle devrait être la priorité ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Prévention ou traitement: quelle est la meilleure approche des soins de santé ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Sport de compétition ou exercice pour le plaisir: qu'est-ce qui est mieux pour vous ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Santé privée ou santé publique: quel système est le plus juste ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Cinéma ou littérature: quelle est une forme d'art plus puissante ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Art moderne ou art classique: qu'est-ce qui a le plus de valeur ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Préserver les vieux bâtiments ou en construire de nouveaux: qu'est-ce qui compte le plus ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Culture locale ou mondialisation: qu'est-ce qui enrichit le plus les communautés ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Apprendre de ses erreurs vs apprendre de ses succès: qu'est-ce qui instruit le plus ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Tablettes en classe vs cahiers traditionnels: qu'est-ce qui aide le plus les élèves ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Être toujours joignable vs avoir du temps libre numérique: qu'est-ce qui est mieux ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Réutiliser les choses vs recycler: qu'est-ce qui est le plus efficace ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Une seule carrière pour toute la vie vs changer de carrière souvent: qu'est-ce qui est mieux ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Sommeil vs exercice: qu'est-ce qui a le plus d'impact sur votre santé ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Musique pop vs musique classique: laquelle a le plus d'impact culturel ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Savoir comment quelque chose se termine vs être surpris: qu'est-ce qui est mieux ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Répondre immédiatement aux messages vs prendre son temps: qu'est-ce qui est plus respectueux ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Regarder une série d'un coup vs regarder un épisode par semaine: quelle est la bonne manière ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Siège côté fenêtre vs siège côté couloir: lequel est objectivement le meilleur ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Sauter la salle une fois vs y aller et avoir une mauvaise séance: qu'est-ce qui est le pire ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Se parler à soi-même vs parler à son animal: qu'est-ce qui est le plus raisonnable ?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "La semaine de travail de quatre jours vs la semaine de cinq jours: quel modèle profite le plus aux travailleurs et aux employeurs ?",
                                  "sideA": "Semaine de 4 jours",
                                  "sideB": "Semaine de 5 jours",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Améliore le bien-être des employés et réduit l'épuisement professionnel, ce qui entraîne une productivité accrue pendant les heures de travail.",
                                            "Permet un meilleur équilibre entre vie professionnelle et vie privée, ce qui peut améliorer considérablement les taux de rétention du personnel."
                                  ],
                                  "ideasB": [
                                            "Pourrait entraîner une augmentation du stress si la même quantité de travail doit être compressée en moins de jours.",
                                            "Pourrait poser des défis opérationnels pour les entreprises qui doivent être disponibles pour les clients cinq ou sept jours par semaine."
                                  ]
                        },
                        {
                                  "topic": "Revenu de base universel vs protection sociale ciblée: quel est le filet de sécurité le plus efficace pour les adultes qui travaillent ?",
                                  "sideA": "RBU",
                                  "sideB": "Protection ciblée",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Élimine le 'piège de la pauvreté' où les individus perdent leurs allocations dès qu'ils commencent à percevoir un revenu modeste.",
                                            "Réduit les coûts administratifs et les obstacles bureaucratiques associés aux conditions de ressources."
                                  ],
                                  "ideasB": [
                                            "Les systèmes ciblés garantissent que les ressources publiques limitées sont dirigées vers ceux qui en ont le plus besoin.",
                                            "Un versement universel pourrait être excessivement coûteux et pourrait potentiellement décourager certains de chercher un emploi."
                                  ]
                        },
                        {
                                  "topic": "L'économie à la tâche vs l'emploi permanent: quel modèle sert le mieux les travailleurs sur le long terme ?",
                                  "sideA": "Gig economy",
                                  "sideB": "Emploi permanent",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Offre une flexibilité inégalée, permettant aux individus de choisir quand et où ils travaillent.",
                                            "Offre la possibilité de diversifier ses compétences en travaillant sur une variété de projets différents simultanément."
                                  ],
                                  "ideasB": [
                                            "Les rôles permanents offrent des avantages essentiels tels que les congés payés, l'assurance maladie et les cotisations de retraite.",
                                            "Fournit un revenu stable et prévisible, ce qui est crucial pour la planification financière et la sécurité à long terme."
                                  ]
                        },
                        {
                                  "topic": "Méritocratie vs avantage structurel: qu'est-ce qui explique le mieux le succès professionnel ?",
                                  "sideA": "Méritocratie",
                                  "sideB": "Avantage structurel",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Le travail acharné et le talent sont les principaux moteurs de l'avancement dans un marché équitable et compétitif.",
                                            "Mettre l'accent sur le mérite encourage les individus à améliorer constamment leurs compétences et à donner le meilleur d'eux-mêmes."
                                  ],
                                  "ideasB": [
                                            "Des facteurs tels que le milieu socio-économique et le réseautage jouent souvent un rôle décisif dans l'ouverture des portes.",
                                            "Les inégalités systémiques peuvent empêcher même les individus les plus talentueux d'atteindre leur plein potentiel."
                                  ]
                        },
                        {
                                  "topic": "Transparence salariale vs confidentialité des salaires: qu'est-ce qui crée un lieu de travail plus juste ?",
                                  "sideA": "Transparence",
                                  "sideB": "Confidentialité",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Aide à identifier et à combler les écarts salariaux entre les sexes et les ethnies en rendant les disparités visibles.",
                                            "Favorise une culture de confiance et garantit que la rémunération est basée sur des critères objectifs plutôt que sur les compétences de négociation."
                                  ],
                                  "ideasB": [
                                            "Révéler les salaires peut entraîner du ressentiment et des frictions entre collègues, nuisant potentiellement au moral de l'équipe.",
                                            "Le respect de la vie privée permet plus de flexibilité pour récompenser les performances exceptionnelles sans provoquer de polémique publique."
                                  ]
                        },
                        {
                                  "topic": "Automatisation vs travail humain: quelle est la plus grande menace à long terme pour l'emploi des adultes ?",
                                  "sideA": "Automatisation",
                                  "sideB": "Travail humain",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "L'IA et la robotique peuvent effectuer des tâches répétitives plus efficacement et de manière plus rentable que les humains.",
                                            "Les progrès technologiques menacent de plus en plus des rôles complexes que l'on pensait auparavant à l'abri."
                                  ],
                                  "ideasB": [
                                            "Les travailleurs humains possèdent des qualités uniques comme l'empathie, la créativité et la pensée critique que les machines ne peuvent pas reproduire.",
                                            "Les nouvelles technologies créent souvent des industries et des catégories d'emplois entièrement nouvelles qui nécessitent une supervision humaine."
                                  ]
                        },
                        {
                                  "topic": "Télétravail vs présence au bureau: qu'est-ce qui est mieux pour la progression de carrière et la culture d'équipe ?",
                                  "sideA": "Télétravail",
                                  "sideB": "Présence au bureau",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Éliminer les trajets domicile-travail permet d'économiser du temps et de l'énergie, permettant aux employés d'être plus concentrés et productifs.",
                                            "L'accès à un vivier mondial de talents permet aux entreprises d'embaucher les meilleures personnes quel que soit leur emplacement géographique."
                                  ],
                                  "ideasB": [
                                            "Les interactions spontanées en face à face mènent souvent à une résolution de problèmes et à une innovation plus créatives.",
                                            "Le fait d'être physiquement présent facilite la création de liens avec les mentors et permet de rester visible auprès de la direction générale."
                                  ]
                        },
                        {
                                  "topic": "Congé parental égal pour les hommes et les femmes vs congé de maternité plus long: quelle politique est la plus juste ?",
                                  "sideA": "Congé égal",
                                  "sideB": "Maternité plus longue",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Encourage une division plus égale des responsabilités de garde d'enfants dès le début.",
                                            "Réduit la 'pénalité de la maternité' en garantissant que les deux parents s'absentent du marché du travail."
                                  ],
                                  "ideasB": [
                                            "Reconnaît la réalité physique de l'accouchement et l'importance de la récupération maternelle et de l'allaitement.",
                                            "Un soutien ciblé pour les mères pourrait être plus approprié culturellement et pratiquement pour de nombreuses familles."
                                  ]
                        },
                        {
                                  "topic": "Choisir de ne pas avoir d'enfants vs pression sociale pour avoir une famille: qu'est-ce qui mérite le plus de respect ?",
                                  "sideA": "Sans enfant",
                                  "sideB": "Pression familiale",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Les individus devraient avoir l'autonomie de décider comment mener leur vie sans subir de jugement.",
                                            "Renoncer à la parentalité peut être un choix responsable compte tenu des préoccupations environnementales et des contraintes financières."
                                  ],
                                  "ideasB": [
                                            "Les cellules familiales sont fondamentales pour la stabilité et la pérennité de la société et de ses valeurs culturelles.",
                                            "Le désir de fonder une famille est un instinct humain profondément enraciné qui devrait être soutenu et célébré."
                                  ]
                        },
                        {
                                  "topic": "Le mariage en tant qu'institution vs la cohabitation sans mariage: qu'est-ce qui est le plus pertinent aujourd'hui ?",
                                  "sideA": "Mariage",
                                  "sideB": "Cohabitation",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Fournit un cadre juridique et financier clair qui protège les deux partenaires et leurs enfants.",
                                            "Représente un engagement public qui peut renforcer le lien entre les partenaires et assurer une stabilité sociale."
                                  ],
                                  "ideasB": [
                                            "Les relations modernes devraient être basées sur la confiance et l'engagement mutuels plutôt que sur un contrat légal.",
                                            "La cohabitation offre plus de flexibilité et évite le processus coûteux et compliqué d'un divorce potentiel."
                                  ]
                        },
                        {
                                  "topic": "Ménages à double revenu vs un partenaire restant à la maison: quel modèle est le meilleur pour les enfants et les adultes ?",
                                  "sideA": "Double revenu",
                                  "sideB": "Partenaire au foyer",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Assure une plus grande sécurité financière et permet aux deux partenaires de poursuivre leurs ambitions professionnelles.",
                                            "Donne un exemple positif aux enfants en démontrant l'égalité des sexes tant au travail qu'à la maison."
                                  ],
                                  "ideasB": [
                                            "Avoir un parent à la maison garantit un soutien émotionnel et une surveillance constants pendant les années formatives de l'enfant.",
                                            "Réduit le stress lié à l'équilibre entre deux carrières exigeantes et la complexité de la gestion du foyer."
                                  ]
                        },
                        {
                                  "topic": "L'écart salarial entre les sexes comme problème structurel vs une question de choix individuels: quelle explication a le plus de poids ?",
                                  "sideA": "Problème structurel",
                                  "sideB": "Choix individuels",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Les préjugés inconscients et les barrières systémiques empêchent souvent les femmes d'accéder à des rôles de direction bien rémunérés.",
                                            "La société a tendance à sous-évaluer les professions traditionnellement dominées par les femmes, comme le soin et l'éducation."
                                  ],
                                  "ideasB": [
                                            "Les différences de revenus peuvent souvent être attribuées à des décisions personnelles concernant les heures de travail et les interruptions de carrière.",
                                            "Les femmes peuvent choisir des cheminements de carrière plus flexibles ou moins risqués qui offrent naturellement des rémunérations différentes."
                                  ]
                        },
                        {
                                  "topic": "La propriété immobilière comme objectif vs un marché locatif professionnel: quel modèle de logement convient le mieux aux adultes modernes ?",
                                  "sideA": "Propriété",
                                  "sideB": "Marché locatif",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Assure une sécurité financière à long terme et un actif qui peut être transmis aux générations futures.",
                                            "Permet aux individus d'avoir un contrôle total sur leur environnement de vie et d'apporter des améliorations permanentes."
                                  ],
                                  "ideasB": [
                                            "Un secteur locatif professionnel offre une plus grande mobilité pour ceux qui doivent déménager pour le travail ou leur style de vie.",
                                            "La location élimine le fardeau des coûts d'entretien et les risques financiers liés aux fluctuations du marché immobilier."
                                  ]
                        },
                        {
                                  "topic": "La gentrification comme amélioration vs la gentrification comme déplacement: quel cadrage est le plus honnête ?",
                                  "sideA": "Amélioration",
                                  "sideB": "Déplacement",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "L'investissement peut revitaliser des zones négligées, menant à de meilleures infrastructures et des rues plus sûres.",
                                            "L'augmentation de la valeur des propriétés peut stimuler l'économie locale et créer de nouvelles opportunités commerciales pour les résidents."
                                  ],
                                  "ideasB": [
                                            "La hausse des loyers oblige souvent les résidents de longue date et les petites entreprises à quitter leur propre communauté.",
                                            "La gentrification peut effacer l'histoire culturelle et le tissu social d'un quartier, le rendant inabordable."
                                  ]
                        },
                        {
                                  "topic": "Densité urbaine vs étalement suburbain: quel est le meilleur modèle pour des villes vivables ?",
                                  "sideA": "Densité urbaine",
                                  "sideB": "Étalement suburbain",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Les villes compactes sont plus durables car elles réduisent le besoin de voitures et soutiennent des transports publics efficaces.",
                                            "Une densité plus élevée favorise des communautés plus dynamiques avec un accès facile à la culture, au commerce et aux services essentiels."
                                  ],
                                  "ideasB": [
                                            "La vie en banlieue offre plus d'espace, d'intimité et un environnement plus calme pour les familles pour élever des enfants.",
                                            "Une densité plus faible peut réduire l'effet d'îlot de chaleur urbain et offrir plus d'accès aux espaces verts."
                                  ]
                        },
                        {
                                  "topic": "Vivre près de sa famille vs s'éloigner pour les opportunités: quel choix produit le meilleur bien-être à long terme ?",
                                  "sideA": "Vivre près",
                                  "sideB": "S'éloigner",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "La proximité de la famille offre un filet de sécurité émotionnel crucial et un soutien pratique, surtout pour les parents.",
                                            "Maintenir des racines locales fortes contribue à un sentiment d'appartenance et à l'identité communautaire."
                                  ],
                                  "ideasB": [
                                            "Le déménagement peut ouvrir des perspectives de carrière nettement meilleures et un potentiel de gain plus élevé.",
                                            "Vivre de manière indépendante dans un nouvel environnement favorise la croissance personnelle, la résilience et une perspective plus large sur la vie."
                                  ]
                        },
                        {
                                  "topic": "Une population vieillissante comme crise vs comme ressource: quel cadrage est le plus productif ?",
                                  "sideA": "Crise",
                                  "sideB": "Ressource",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "L'augmentation du ratio de dépendance exerce une pression immense sur les systèmes de santé et les fonds de pension.",
                                            "Une main-d'œuvre en déclin pourrait mener à une stagnation économique et à un manque d'innovation à long terme."
                                  ],
                                  "ideasB": [
                                            "Les adultes plus âgés possèdent une richesse d'expérience, de sagesse et de connaissances institutionnelles inestimable pour la société.",
                                            "La 'silver économie' crée de nouveaux marchés et des opportunités de bénévolat et de mentorat intergénérationnel."
                                  ]
                        },
                        {
                                  "topic": "Responsabilité personnelle pour la santé vs facteurs systémiques: qu'est-ce qui pèse le plus dans l'explication des résultats de santé ?",
                                  "sideA": "Responsabilité personnelle",
                                  "sideB": "Facteurs systémiques",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Les choix individuels concernant l'alimentation, l'exercice et le tabagisme sont les causes les plus directes de nombreuses maladies chroniques.",
                                            "Responsabiliser les gens pour leur propre santé peut mener à de meilleurs résultats et à des coûts publics moindres."
                                  ],
                                  "ideasB": [
                                            "Le statut socio-économique et l'accès à une nourriture saine et abordable sont souvent hors du contrôle direct d'un individu.",
                                            "Les facteurs environnementaux comme la pollution et les conditions de travail ont un impact profond sur la santé d'une population."
                                  ]
                        },
                        {
                                  "topic": "Les jours de santé mentale comme droit légitime au travail vs source d'abus: où les employeurs doivent-ils placer la limite ?",
                                  "sideA": "Droit légitime",
                                  "sideB": "Source d'abus",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Reconnaître la santé mentale comme aussi importante que la santé physique réduit la stigmatisation et prévient l'épuisement à long terme.",
                                            "Soutenir le bien-être des employés mène à un moral plus élevé et à une meilleure productivité sur le long terme."
                                  ],
                                  "ideasB": [
                                            "Sans directives claires, certains employés pourraient utiliser les jours de santé mentale pour éviter les échéances ou prendre des congés supplémentaires.",
                                            "Une fréquence élevée d'absences imprévues peut perturber les flux de travail et peser injustement sur les autres membres de l'équipe."
                                  ]
                        },
                        {
                                  "topic": "Médecine préventive vs médecine curative: laquelle devrait recevoir plus de fonds publics ?",
                                  "sideA": "Préventive",
                                  "sideB": "Curative",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Investir dans les vaccins et les initiatives de mode de vie sain peut prévenir les maladies avant même qu'elles ne surviennent.",
                                            "La prévention est bien plus rentable que le traitement de maladies avancées, économisant des milliards au système de santé."
                                  ],
                                  "ideasB": [
                                            "L'éthique sociétale exige que nous fournissions les meilleurs soins possibles à ceux qui souffrent actuellement d'une maladie.",
                                            "La médecine curative est essentielle pour gérer les urgences et les conditions chroniques qui ne peuvent être prévenues."
                                  ]
                        },
                        {
                                  "topic": "Médecine anti-âge vs vieillir avec grâce: quelle attitude est la plus cohérente ?",
                                  "sideA": "Anti-âge",
                                  "sideB": "Vieillir avec grâce",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Les progrès scientifiques devraient être utilisés pour prolonger la durée de vie humaine et améliorer la qualité de vie des personnes âgées.",
                                            "Combattre les processus biologiques du vieillissement pourrait alléger l'énorme fardeau des maladies liées à l'âge."
                                  ],
                                  "ideasB": [
                                            "Le vieillissement est une partie naturelle de l'expérience humaine qui devrait être acceptée et embrassée avec dignité.",
                                            "L'obsession de la jeunesse peut mener à des procédures médicales inutiles et à un échec à valoriser la sagesse de l'âge."
                                  ]
                        },
                        {
                                  "topic": "Technologie de surveillance pour la sécurité publique vs droit à la vie privée: où doit se situer l'équilibre ?",
                                  "sideA": "Sécurité publique",
                                  "sideB": "Vie privée",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "L'utilisation généralisée de la vidéosurveillance et de la reconnaissance faciale peut agir comme un puissant moyen de dissuasion contre le crime.",
                                            "La surveillance des données est essentielle pour identifier les menaces et répondre rapidement aux urgences en temps réel."
                                  ],
                                  "ideasB": [
                                            "La surveillance de masse peut mener à un 'effet de refroidissement' où les gens ont peur de s'exprimer ou de protester.",
                                            "La protection des données personnelles est un droit humain fondamental qui empêche l'abus de pouvoir par les gouvernements ou les entreprises."
                                  ]
                        },
                        {
                                  "topic": "Les réseaux sociaux comme outil d'engagement civique vs comme moteur de polarisation: quel effet domine ?",
                                  "sideA": "Engagement civique",
                                  "sideB": "Polarisation",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Les plateformes permettent la diffusion rapide de l'information et l'organisation de mouvements citoyens.",
                                            "Donne une voix aux groupes marginalisés qui sont souvent négligés par les médias traditionnels."
                                  ],
                                  "ideasB": [
                                            "Les algorithmes ont tendance à créer des chambres d'écho qui renforcent les préjugés existants et l'hostilité envers les opinions opposées.",
                                            "La propagation de la désinformation et des 'fake news' peut saper les processus démocratiques et la cohésion sociale."
                                  ]
                        },
                        {
                                  "topic": "L'IA dans le recrutement vs le jugement humain: qu'est-ce qui produit des décisions d'embauche plus justes ?",
                                  "sideA": "IA",
                                  "sideB": "Jugement humain",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "L'IA peut être programmée pour ignorer les informations démographiques, réduisant potentiellement les biais et la discrimination.",
                                            "Les algorithmes peuvent analyser efficacement de vastes quantités de données pour trouver les candidats les plus qualifiés."
                                  ],
                                  "ideasB": [
                                            "Les algorithmes peuvent par inadvertance apprendre et reproduire les biais existants présents dans les données historiques.",
                                            "Les recruteurs humains peuvent évaluer les 'soft skills' et l'adéquation culturelle d'une manière que les logiciels ne peuvent pas encore égaler."
                                  ]
                        },
                        {
                                  "topic": "Le droit à l'oubli en ligne vs le droit du public à l'information: qu'est-ce qui devrait primer ?",
                                  "sideA": "Droit à l'oubli",
                                  "sideB": "Droit à l'info",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Les individus devraient pouvoir tourner la page sur leurs erreurs passées sans être hantés éternellement en ligne.",
                                            "La vie privée devrait inclure le droit de supprimer des informations obsolètes ou non pertinentes des résultats de recherche."
                                  ],
                                  "ideasB": [
                                            "Le public a un intérêt légitime à accéder à des archives historiques exactes, surtout concernant les personnalités publiques.",
                                            "Censurer les résultats de recherche pourrait mener à une vision déformée de la vérité et nuire à la liberté de la presse."
                                  ]
                        },
                        {
                                  "topic": "Vote obligatoire vs vote volontaire: qu'est-ce qui produit des démocraties plus saines ?",
                                  "sideA": "Obligatoire",
                                  "sideB": "Volontaire",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Garantit que le gouvernement a un mandat clair de l'ensemble de la population, pas seulement des plus actifs politiquement.",
                                            "Encourage les citoyens à rester informés sur les enjeux politiques et à prendre leurs responsabilités civiques au sérieux."
                                  ],
                                  "ideasB": [
                                            "Le droit de vote devrait inclure le droit de choisir de ne pas participer si l'on ne se sent pas représenté.",
                                            "Les systèmes volontaires garantissent que ceux qui votent sont réellement engagés et motivés par leurs convictions."
                                  ]
                        },
                        {
                                  "topic": "Engagement politique par la protestation vs par les canaux institutionnels: qu'est-ce qui est le plus efficace pour les adultes aujourd'hui ?",
                                  "sideA": "Protestation",
                                  "sideB": "Institutionnel",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Les protestations peuvent porter des questions urgentes sur le devant de la scène et forcer une action politique immédiate.",
                                            "L'action directe offre aux gens un moyen d'exprimer leur frustration lorsque les systèmes traditionnels semblent inertes."
                                  ],
                                  "ideasB": [
                                            "Travailler au sein des canaux établis mène à un changement plus durable et légal.",
                                            "L'engagement institutionnel permet un débat nuancé et la négociation complexe nécessaire pour adopter une législation efficace."
                                  ]
                        },
                        {
                                  "topic": "Identité nationale vs identité européenne ou mondiale: qu'est-ce qui a le plus de sens pour les adultes en 2026 ?",
                                  "sideA": "Identité nationale",
                                  "sideB": "Identité mondiale",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Une histoire, une langue et une culture nationales partagées procurent un fort sentiment d'appartenance et de solidarité.",
                                            "Des institutions nationales fortes sont souvent les plus efficaces pour protéger les droits et le bien-être de leurs citoyens."
                                  ],
                                  "ideasB": [
                                            "Les défis mondiaux comme le changement climatique nécessitent une identité unifiée et une coopération internationale.",
                                            "Dans un monde interconnecté, beaucoup se sentent plus alignés avec des valeurs universelles qu'avec des intérêts nationaux étroits."
                                  ]
                        },
                        {
                                  "topic": "Augmentations d'impôts pour financer les services publics vs coupes budgétaires: quel est le choix politique le plus défendable ?",
                                  "sideA": "Augmentation impôts",
                                  "sideB": "Coupes budgétaires",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Des impôts plus élevés permettent de fournir une éducation et des soins de santé de haute qualité au bénéfice de tous.",
                                            "L'investissement public est nécessaire pour maintenir les infrastructures et soutenir les membres les plus vulnérables de la société."
                                  ],
                                  "ideasB": [
                                            "Baisser les impôts peut stimuler la croissance économique en laissant plus d'argent aux individus et aux entreprises.",
                                            "Les coupes budgétaires forcent les gouvernements à être plus efficaces et à éliminer les programmes gaspilleurs."
                                  ]
                        },
                        {
                                  "topic": "Admettre que vous n'avez aucune idée de la façon dont fonctionne votre retraite vs prétendre avec assurance que vous le savez: quelle est l'expérience adulte la plus universelle ?",
                                  "sideA": "Admettre ignorance",
                                  "sideB": "Prétendre savoir",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Les systèmes financiers sont si complexes que l'aveu de confusion est la position la plus honnête pour la plupart des gens.",
                                            "L'honnêteté sur ses connaissances financières peut mener à de meilleurs résultats en encourageant à chercher des conseils."
                                  ],
                                  "ideasB": [
                                            "La pression de paraître compétent pousse souvent les adultes à feindre des connaissances en matière financière.",
                                            "Prétendre comprendre des sujets complexes est une stratégie de survie sociale courante dans de nombreux contextes."
                                  ]
                        },
                        {
                                  "topic": "Être la personne qui planifie toujours les événements sociaux vs être toujours celle qui se contente de venir: quel rôle est le plus épuisant ?",
                                  "sideA": "L'organisateur",
                                  "sideB": "L'invité",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Organiser des événements demande du temps et de l'énergie mentale, en plus du stress lié à la gestion des attentes de chacun.",
                                            "Les planificateurs ressentent souvent le poids de la responsabilité pour le succès d'un événement et le plaisir des invités."
                                  ],
                                  "ideasB": [
                                            "Être toujours l'invité peut mener à un sentiment de manque de contrôle et à l'effort de s'adapter constamment aux plans des autres.",
                                            "La socialisation peut être mentalement épuisante même pour ceux qui n'ont pas la responsabilité de l'organisation."
                                  ]
                        },
                        {
                                  "topic": "Avoir une opinion tranchée sur les habitudes de cuisine de vos collègues vs ne pas s'en soucier du tout: quelle personne est la plus tolérable ?",
                                  "sideA": "Opinion tranchée",
                                  "sideB": "S'en fiche",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Maintenir des normes de propreté et de respect dans les espaces partagés est essentiel pour un environnement de travail productif.",
                                            "Ceux qui se soucient des habitudes communes veillent souvent à la santé et au confort de toute l'équipe."
                                  ],
                                  "ideasB": [
                                            "Une attitude détendue prévient les conflits inutiles et favorise un lieu de travail plus tolérant et moins stressant.",
                                            "Se concentrer sur le travail plutôt que sur les habitudes domestiques triviales fait de vous un collègue plus professionnel."
                                  ]
                        },
                        {
                                  "topic": "Assister à chaque événement social facultatif au travail vs n'assister à aucun: quelle stratégie est la meilleure pour votre carrière et votre santé mentale ?",
                                  "sideA": "Tout assister",
                                  "sideB": "Rien assister",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Socialiser avec ses collègues hors du travail peut construire des relations solides et ouvrir des opportunités de réseautage.",
                                            "Montrer son engagement envers la vie sociale de l'équipe peut rendre un individu plus accessible et intégré."
                                  ],
                                  "ideasB": [
                                            "Fixer des limites claires entre travail et vie privée est essentiel pour maintenir une bonne santé mentale à long terme.",
                                            "La santé mentale est mieux préservée en passant du temps de qualité avec ses proches plutôt qu'en se sentant obligé d'assister à des événements."
                                  ]
                        },
                        {
                                  "topic": "Les adultes qui sont encore perplexes devant leur déclaration d'impôts vs les adultes qui aiment la faire: quel groupe est le plus digne de confiance ?",
                                  "sideA": "Perplexe",
                                  "sideB": "Aime ça",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Les personnes perplexes sont souvent plus sincères concernant les frustrations liées aux systèmes bureaucratiques.",
                                            "Admettre une difficulté avec des tâches complexes est un signe d'authenticité plutôt que de vouloir projeter une image parfaite."
                                  ],
                                  "ideasB": [
                                            "Prendre plaisir à des tâches méticuleuses suggère un haut niveau de compétence, d'attention aux détails et de fiabilité.",
                                            "Les personnes qui aiment l'organisation et la conformité sont susceptibles d'être responsables dans d'autres domaines de la vie."
                                  ]
                        },
                        {
                                  "topic": "Se plaindre du coût de la vie auprès de ses amis vs prétendre que tout va bien: quelle est la réponse adulte la plus honnête ?",
                                  "sideA": "Se plaindre",
                                  "sideB": "Prétendre que tout va bien",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Partager ses difficultés financières crée un sentiment de solidarité et permet aux amis de se soutenir mutuellement.",
                                            "Discuter ouvertement des défis économiques est un reflet plus fidèle de la réalité actuelle pour beaucoup de gens."
                                  ],
                                  "ideasB": [
                                            "Maintenir une attitude positive peut être une façon de gérer le stress et d'éviter que les soucis financiers ne dominent la vie sociale.",
                                            "Certains préfèrent garder leur situation financière privée pour préserver leur dignité et éviter de peser sur les autres."
                                  ]
                        },
                        {
                                  "topic": "Réseaux sociaux vs interactions en face à face: qu'est-ce qui est mieux pour construire des relations ?",
                                  "sideA": "Réseaux sociaux",
                                  "sideB": "Face à face",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Permet une communication constante et la possibilité de maintenir des liens malgré les grandes distances.",
                                            "Offre une plateforme pour trouver et se connecter avec des communautés partageant des intérêts spécifiques."
                                  ],
                                  "ideasB": [
                                            "La présence physique et les indices non verbaux sont essentiels pour construire une confiance profonde et une intimité émotionnelle.",
                                            "Les interactions en personne sont moins susceptibles d'être mal interprétées et favorisent des connexions plus authentiques."
                                  ]
                        },
                        {
                                  "topic": "Vie urbaine vs vie rurale: laquelle offre une meilleure qualité de vie ?",
                                  "sideA": "Urbain",
                                  "sideB": "Rural",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Les villes offrent une richesse d'opportunités culturelles, éducatives et professionnelles indisponibles dans les zones rurales.",
                                            "Les transports publics et les services concentrés rendent la vie urbaine plus pratique et diversifiée."
                                  ],
                                  "ideasB": [
                                            "Les zones rurales offrent un environnement paisible avec moins de pollution, plus d'espace et un lien plus fort avec la nature.",
                                            "Un rythme de vie plus lent et des communautés plus petites peuvent mener à moins de stress et à des liens sociaux plus profonds."
                                  ]
                        },
                        {
                                  "topic": "Apprentissage en ligne vs salle de classe traditionnelle: quel est l'avenir de l'éducation ?",
                                  "sideA": "En ligne",
                                  "sideB": "Classe",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Offre la flexibilité d'apprendre à son propre rythme et d'équilibrer l'éducation avec d'autres engagements.",
                                            "Les outils technologiques peuvent offrir des expériences d'apprentissage personnalisées et un accès à des ressources mondiales."
                                  ],
                                  "ideasB": [
                                            "L'interaction directe avec les enseignants et les pairs est cruciale pour développer les compétences sociales et collaboratives.",
                                            "Une salle de classe physique offre un environnement structuré plus propice à la concentration et à la discipline."
                                  ]
                        },
                        {
                                  "topic": "Énergie renouvelable vs énergie nucléaire: quelle est la meilleure solution pour le climat ?",
                                  "sideA": "Renouvelable",
                                  "sideB": "Nucléaire",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Le solaire et l'éolien sont de plus en plus rentables et fournissent de l'énergie sans produire de déchets radioactifs.",
                                            "Investir dans les renouvelables encourage la production d'énergie décentralisée et favorise l'innovation."
                                  ],
                                  "ideasB": [
                                            "L'énergie nucléaire fournit une 'charge de base' constante et fiable qui ne dépend pas des conditions météorologiques.",
                                            "La technologie nucléaire moderne permet de générer massivement de l'électricité avec des émissions de carbone extrêmement faibles."
                                  ]
                        },
                        {
                                  "topic": "Mode éphémère vs vêtements durables: pouvons-nous nous permettre d'être éthiques ?",
                                  "sideA": "Mode éphémère",
                                  "sideB": "Durable",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Fournit des vêtements abordables et élégants pour les bas revenus, rendant la mode plus démocratique.",
                                            "L'industrie de la mode éphémère crée des millions d'emplois dans les pays en développement et contribue au commerce mondial."
                                  ],
                                  "ideasB": [
                                            "Les vêtements durables sont de meilleure qualité et durent plus longtemps, ce qui est plus économique et écologique à long terme.",
                                            "Soutenir des marques éthiques aide à lutter contre l'exploitation des travailleurs et les dommages environnementaux massifs."
                                  ]
                        },
                        {
                                  "topic": "Spécialisation précoce vs éducation générale large: qu'est-ce qui prépare le mieux les étudiants à la vie ?",
                                  "sideA": "Spécialisation",
                                  "sideB": "Éducation large",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Développer une expertise approfondie dans un domaine spécifique tôt peut mener à une carrière plus ciblée.",
                                            "La spécialisation précoce permet de maîtriser des compétences complexes hautement valorisées sur le marché du travail."
                                  ],
                                  "ideasB": [
                                            "Une éducation large favorise la pensée critique entre les disciplines et prépare à un avenir imprévisible.",
                                            "Apprendre une variété de sujets aide à découvrir ses vraies passions et à devenir un citoyen plus complet."
                                  ]
                        },
                        {
                                  "topic": "Compétences de pensée critique vs connaissances disciplinaires: sur quoi les écoles devraient-elles se concentrer ?",
                                  "sideA": "Pensée critique",
                                  "sideB": "Connaissances",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Enseigner à analyser, évaluer et synthétiser l'information est plus important que de mémoriser des faits.",
                                            "La pensée critique est une compétence transférable essentielle pour la résolution de problèmes dans tout contexte."
                                  ],
                                  "ideasB": [
                                            "Une base solide de connaissances spécifiques est nécessaire avant de pouvoir penser de manière critique sur un sujet.",
                                            "Une connaissance approfondie fournit le contexte et les preuves nécessaires pour une analyse significative et précise."
                                  ]
                        },
                        {
                                  "topic": "Frais de scolarité vs université gratuite: quel modèle est le plus juste ?",
                                  "sideA": "Frais de scolarité",
                                  "sideB": "Université gratuite",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Les frais peuvent garantir que les universités soient bien financées et inciter les étudiants à prendre leurs études au sérieux.",
                                            "Un système de frais garantit que ceux qui bénéficient le plus d'un diplôme contribuent au coût de leur éducation."
                                  ],
                                  "ideasB": [
                                            "L'enseignement supérieur devrait être un droit fondamental accessible à tous, quel que soit le revenu.",
                                            "L'université gratuite empêche les étudiants d'obtenir leur diplôme avec des dettes énormes et encourage la mobilité sociale."
                                  ]
                        },
                        {
                                  "topic": "Tests standardisés vs évaluation par portfolio: qu'est-ce qui reflète le mieux les capacités ?",
                                  "sideA": "Tests standardisés",
                                  "sideB": "Portfolio",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Offre un moyen objectif et cohérent de comparer les performances des élèves entre différentes écoles.",
                                            "Les tests chronométrés préparent les élèves aux environnements à haute pression qu'ils pourraient rencontrer dans leur carrière."
                                  ],
                                  "ideasB": [
                                            "Les portfolios montrent les progrès sur une longue période, offrant une vue plus complète des compétences.",
                                            "Une variété d'échantillons de travail permet d'évaluer la créativité, la persévérance et l'application pratique."
                                  ]
                        },
                        {
                                  "topic": "Intelligence académique vs intelligence émotionnelle: qu'est-ce qui compte le plus pour le succès ?",
                                  "sideA": "Académique",
                                  "sideB": "Émotionnelle",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Des capacités cognitives élevées et une expertise technique sont souvent les conditions premières pour des professions exigeantes.",
                                            "La réussite académique est un indicateur de discipline, de capacité d'analyse et de maîtrise d'informations complexes."
                                  ],
                                  "ideasB": [
                                            "La capacité à gérer ses émotions et à établir des relations est cruciale pour le leadership et le travail d'équipe.",
                                            "L'intelligence émotionnelle aide à naviguer dans les complexités sociales et à s'adapter aux défis du monde moderne."
                                  ]
                        },
                        {
                                  "topic": "Enseigner la créativité vs enseigner la discipline: quel devrait être l'objectif de l'éducation moderne ?",
                                  "sideA": "Créativité",
                                  "sideB": "Discipline",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Favoriser la créativité est essentiel pour l'innovation et pour trouver de nouvelles solutions à des problèmes complexes.",
                                            "L'éducation devrait encourager les élèves à penser hors des sentiers battus et à développer leurs talents uniques."
                                  ],
                                  "ideasB": [
                                            "Développer la discipline et une forte éthique de travail est fondamental pour atteindre des objectifs à long terme.",
                                            "Un environnement structuré aide les élèves à construire la persévérance et la concentration nécessaires pour des tâches difficiles."
                                  ]
                        },
                        {
                                  "topic": "Réglementation des réseaux sociaux vs liberté d'expression: que faut-il privilégier ?",
                                  "sideA": "Réglementation",
                                  "sideB": "Liberté d'expression",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "La surveillance gouvernementale est nécessaire pour prévenir la propagation de la désinformation et des discours de haine.",
                                            "La réglementation peut tenir les géants de la technologie responsables de l'impact de leurs algorithmes sur le débat public."
                                  ],
                                  "ideasB": [
                                            "Le droit de s'exprimer sans censure est un pilier de la démocratie et doit être protégé à tout prix.",
                                            "Une réglementation excessive pourrait mener à la suppression des voix dissidentes et donner trop de pouvoir aux gouvernements."
                                  ]
                        },
                        {
                                  "topic": "Curation algorithmique vs sélection éditoriale: quelle est la manière la plus fiable de s'informer ?",
                                  "sideA": "Algorithmes",
                                  "sideB": "Sélection éditoriale",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Les algorithmes peuvent fournir une gamme plus large de perspectives basées sur les données plutôt que sur les biais d'un éditeur.",
                                            "Les systèmes automatisés peuvent traiter l'information beaucoup plus rapidement, offrant des mises à jour en temps réel."
                                  ],
                                  "ideasB": [
                                            "Les éditeurs humains fournissent un contexte essentiel, une surveillance éthique et un engagement envers l'exactitude.",
                                            "Les journalistes professionnels peuvent enquêter sur des histoires complexes d'une manière que les algorithmes ne peuvent égaler."
                                  ]
                        },
                        {
                                  "topic": "Cresissance économique vs protection de l'environnement: peuvent-ils coexister ?",
                                  "sideA": "Croissance",
                                  "sideB": "Environnement",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Une croissance économique continue est nécessaire pour financer la recherche et le développement de technologies vertes.",
                                            "La prospérité croissante permet aux sociétés d'investir davantage dans la conservation et la transition écologique."
                                  ],
                                  "ideasB": [
                                            "Une croissance infinie sur une planète finie est impossible ; nous devons donner la priorité à la santé de la planète.",
                                            "Protéger la biodiversité et le climat est un prérequis à toute stabilité économique ou bien-être humain à long terme."
                                  ]
                        },
                        {
                                  "topic": "Taxes carbone vs subventions vertes: quelle politique climatique est la plus efficace ?",
                                  "sideA": "Taxes carbone",
                                  "sideB": "Subventions vertes",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Donner un prix au carbone offre une incitation claire du marché à réduire les émissions pour les entreprises et les individus.",
                                            "Les recettes fiscales peuvent financer les services publics ou être rendues aux citoyens pour compenser le coût de l'énergie."
                                  ],
                                  "ideasB": [
                                            "Les incitations financières pour les énergies renouvelables et les véhicules électriques peuvent accélérer la transition.",
                                            "Les subventions aident à abaisser le coût initial des technologies vertes, les rendant plus accessibles au grand public."
                                  ]
                        },
                        {
                                  "topic": "Décroissance vs croissance durable: quelle est la bonne réponse à la crise climatique ?",
                                  "sideA": "Décroissance",
                                  "sideB": "Croissance durable",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Nous devons réduire intentionnellement la production et la consommation dans les pays riches pour rester dans les limites planétaires.",
                                            "Mettre l'accent sur le bien-être plutôt que sur la richesse matérielle peut mener à une société plus durable."
                                  ],
                                  "ideasB": [
                                            "Nous pouvons découpler la croissance de l'impact environnemental grâce à l'innovation, l'efficacité et les énergies renouvelables.",
                                            "La croissance durable fournit les ressources pour sortir les gens de la pauvreté tout en protégeant l'environnement."
                                  ]
                        },
                        {
                                  "topic": "Responsabilité individuelle vs responsabilité d'entreprise: qui est le plus coupable des dommages environnementaux ?",
                                  "sideA": "Responsabilité individuelle",
                                  "sideB": "Responsabilité d'entreprise",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Les changements collectifs de comportement individuel peuvent avoir un impact massif sur l'environnement.",
                                            "Les consommateurs ont le pouvoir de stimuler le changement en choisissant des produits durables et en exigeant plus des entreprises."
                                  ],
                                  "ideasB": [
                                            "Un petit nombre de grandes entreprises est responsable de la grande majorité des émissions mondiales de gaz à effet de serre.",
                                            "Le changement systémique doit être mené par ceux qui ont le plus de pouvoir plutôt que de faire peser le fardeau sur les individus."
                                  ]
                        },
                        {
                                  "topic": "Démocratie directe vs démocratie représentative: laquelle est la plus efficace ?",
                                  "sideA": "Démocratie directe",
                                  "sideB": "Représentative",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Permettre aux citoyens de voter directement sur les lois garantit que le gouvernement reflète fidèlement la volonté du peuple.",
                                            "La participation directe favorise une citoyenneté plus engagée qui assume la responsabilité de sa société."
                                  ],
                                  "ideasB": [
                                            "Les représentants élus ont le temps et l'expertise pour étudier des questions complexes et prendre des décisions éclairées.",
                                            "Les systèmes représentatifs protègent contre la 'tyrannie de la majorité' et garantissent le respect des droits des minorités."
                                  ]
                        },
                        {
                                  "topic": "Gouvernement central fort vs autonomie régionale: qu'est-ce qui sert le mieux les citoyens ?",
                                  "sideA": "Gouvernement central",
                                  "sideB": "Autonomie régionale",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Une autorité centrale forte peut garantir des normes cohérentes et des droits égaux pour tous les citoyens dans une nation.",
                                            "Les gouvernements nationaux sont mieux équipés pour gérer les défis à grande échelle comme la sécurité nationale."
                                  ],
                                  "ideasB": [
                                            "Les gouvernements régionaux sont plus proches des gens et peuvent mieux comprendre et répondre aux besoins locaux.",
                                            "L'autonomie permet d'expérimenter différentes politiques qui peuvent ensuite être adoptées par d'autres régions."
                                  ]
                        },
                        {
                                  "topic": "Méritocratie vs action positive: quelle est la base la plus juste pour l'égalité des chances ?",
                                  "sideA": "Méritocratie",
                                  "sideB": "Action positive",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Récompenser les individus uniquement sur leur talent et leur effort est la manière la plus objective d'attribuer les chances.",
                                            "Un système basé sur le mérite encourage chacun à viser l'excellence et garantit que les plus capables occupent les postes clés."
                                  ],
                                  "ideasB": [
                                            "Des mesures proactives sont nécessaires pour égaliser les chances et corriger les inégalités historiques et systémiques.",
                                            "La diversité au travail et dans l'éducation enrichit la société et garantit la représentation de différentes perspectives."
                                  ]
                        },
                        {
                                  "topic": "Frontières ouvertes vs immigration contrôlée: qu'est-ce qui sert le mieux les communautés ?",
                                  "sideA": "Frontières ouvertes",
                                  "sideB": "Immigration contrôlée",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Permettre aux gens de circuler librement peut stimuler la croissance économique et combler les pénuries de main-d'œuvre.",
                                            "Le droit de circuler est une liberté humaine fondamentale qui permet d'échapper à la pauvreté et de chercher une vie meilleure."
                                  ],
                                  "ideasB": [
                                            "Les systèmes contrôlés permettent aux gouvernements de gérer les services publics et d'assurer l'intégration des nouveaux arrivants.",
                                            "Réguler l'immigration peut aider à protéger les salaires et les conditions de travail de la main-d'œuvre existante."
                                  ]
                        },
                        {
                                  "topic": "Utilitarisme vs éthique déontologique: quel est le meilleur cadre moral ?",
                                  "sideA": "Utilitarisme",
                                  "sideB": "Déontologie",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Se concentrer sur le plus grand bien pour le plus grand nombre offre un moyen pratique de prendre des décisions morales.",
                                            "Les conséquences d'une action sont ce qui compte vraiment lors de l'évaluation de sa valeur éthique."
                                  ],
                                  "ideasB": [
                                            "Certaines actions sont intrinsèquement bonnes ou mauvaises, quelles que soient leurs conséquences ; nous devons suivre des règles.",
                                            "Respecter les droits et devoirs individuels est le seul moyen de garantir une véritable justice et la dignité humaine."
                                  ]
                        },
                        {
                                  "topic": "Liberté d'expression vs protection contre les préjudices: où faut-il placer la limite ?",
                                  "sideA": "Liberté d'expression",
                                  "sideB": "Protection",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Le libre échange des idées, même controversées, est essentiel au progrès et à la recherche de la vérité.",
                                            "L'expression ne devrait être restreinte que dans les cas les plus extrêmes, comme l'incitation directe à la violence."
                                  ],
                                  "ideasB": [
                                            "La société a le devoir de protéger les groupes vulnérables contre les discours de haine qui mènent à des préjudices réels.",
                                            "Le droit à la libre expression n'inclut pas le droit de diffuser de la désinformation qui met en danger la santé publique."
                                  ]
                        },
                        {
                                  "topic": "Relativisme culturel vs droits de l'homme universels: quelle est la position la plus forte ?",
                                  "sideA": "Relativisme culturel",
                                  "sideB": "Droits universels",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Nous devons respecter les différentes valeurs des autres cultures plutôt que de leur imposer nos propres convictions.",
                                            "La moralité est souvent le produit d'une culture, et il n'y a pas de moyen objectif de dire qu'un système est meilleur qu'un autre."
                                  ],
                                  "ideasB": [
                                            "Les droits fondamentaux, comme le droit à la vie et à la liberté, devraient être protégés partout quelle que soit la culture.",
                                            "Des normes universelles sont nécessaires pour prévenir l'oppression d'individus sous couvert de tradition."
                                  ]
                        },
                        {
                                  "topic": "Punition vs réhabilitation: quel devrait être l'objectif du système judiciaire ?",
                                  "sideA": "Punition",
                                  "sideB": "Réhabilitation",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "La justice rétributive garantit que les délinquants subissent les conséquences de leurs actes et apaise les victimes.",
                                            "Des punitions strictes peuvent agir comme un moyen de dissuasion, empêchant d'autres de commettre des crimes similaires."
                                  ],
                                  "ideasB": [
                                            "L'objectif premier devrait être d'aider les délinquants à se réintégrer et à traiter les causes profondes de leur comportement.",
                                            "La réhabilitation est plus efficace pour réduire la récidive et construire une société plus sûre à long terme."
                                  ]
                        },
                        {
                                  "topic": "Savoir trop vs savoir trop peu: quelle condition est la plus dangereuse pour l'adulte moderne ?",
                                  "sideA": "Savoir trop",
                                  "sideB": "Savoir trop peu",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "L'excès d'analyse peut mener à une paralysie décisionnelle, où l'abondance d'informations empêche une action rapide.",
                                            "La conscience constante des crises mondiales et des risques complexes peut augmenter l'anxiété et diminuer le bien-être général."
                                  ],
                                  "ideasB": [
                                            "L'ignorance d'informations critiques peut mener à de mauvais choix de vie et à une vulnérabilité à l'exploitation.",
                                            "Un manque de connaissances empêche les individus de participer efficacement aux processus démocratiques et au discours social."
                                  ]
                        },
                        {
                                  "topic": "Être en avance partout vs être toujours légèrement en retard: quel est le plus grand crime social ?",
                                  "sideA": "Être en avance",
                                  "sideB": "Être en retard",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Arriver trop tôt peut imposer un fardeau injuste à l'hôte, le forçant à précipiter ses préparatifs.",
                                            "Cela peut signaler un manque de conscience sociale ou un empressement excessif qui met les autres mal à l'aise."
                                  ],
                                  "ideasB": [
                                            "Le retard constant démontre un manque fondamental de respect pour le temps des autres et les horaires professionnels.",
                                            "Cela peut nuire à la réputation de fiabilité et perturber le déroulement des réunions ou des rencontres sociales."
                                  ]
                        },
                        {
                                  "topic": "Plier le linge immédiatement vs vivre avec une pile: quel choix de vie est le plus défendable ?",
                                  "sideA": "Plier tout de suite",
                                  "sideB": "Vivre avec une pile",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Maintenir l'ordre dans l'environnement domestique réduit le désordre mental et contribue à un mode de vie discipliné.",
                                            "Les vêtements pliés sont mieux préservés, ce qui permet d'économiser du temps de repassage et de l'argent."
                                  ],
                                  "ideasB": [
                                            "Donner la priorité à des activités plus significatives plutôt qu'à des tâches ménagères banales peut mener à une vie plus épanouie.",
                                            "Une approche plus relaxée permet d'économiser du temps et de l'énergie immédiats pour le travail, la famille ou la détente."
                                  ]
                        },
                        {
                                  "topic": "L'invention du réveil vs l'invention du bouton 'snooze': lequel a fait le plus de mal à l'humanité ?",
                                  "sideA": "Réveil",
                                  "sideB": "Bouton snooze",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Le réveil a perturbé les rythmes circadiens naturels de l'homme, menant à une privation de sommeil chronique et au stress.",
                                            "Il a formalisé une approche rigide et industrielle du temps qui privilégie la productivité sur le bien-être biologique."
                                  ],
                                  "ideasB": [
                                            "Le bouton snooze encourage la 'fragmentation du sommeil', ce qui peut laisser les individus plus groggys et moins alertes.",
                                            "Il favorise une habitude de procrastination et de report des responsabilités qui peut nuire aux performances professionnelles."
                                  ]
                        },
                        {
                                  "topic": "Fantômes vs extraterrestres: quelle serait la découverte la plus perturbatrice pour la société moderne ?",
                                  "sideA": "Fantômes",
                                  "sideB": "Extraterrestres",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "La preuve d'une vie après la mort renverserait fondamentalement tous les cadres religieux, philosophiques et scientifiques.",
                                            "Cela soulèverait de profondes questions éthiques et juridiques concernant les droits et l'influence des défunts sur les vivants."
                                  ],
                                  "ideasB": [
                                            "Le contact avec une vie extraterrestre forcerait l'humanité à reconsidérer sa place dans l'univers et son statut unique.",
                                            "Cela pourrait poser des risques de sécurité importants ou des défis technologiques que la société n'est pas prête à gérer."
                                  ]
                        },
                        {
                                  "topic": "Céréales avant le lait vs lait avant les céréales: est-ce une question de préférence ou de fait objectif ?",
                                  "sideA": "Céréales d'abord",
                                  "sideB": "Lait d'abord",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Ajouter les céréales en premier permet un meilleur contrôle des portions et garantit le ratio optimal de croquant.",
                                            "C'est l'approche la plus logique et systématique, empêchant le lait d'éclabousser et de créer du désordre."
                                  ],
                                  "ideasB": [
                                            "Ajouter le lait d'abord permet de chauffer le liquide précisément avant d'ajouter les céréales, maintenant la température voulue.",
                                            "Cela garantit que les céréales restent croustillantes plus longtemps, car elles ne sont pas immédiatement immergées."
                                  ]
                        },
                        {
                                  "topic": "Alerte éthique (whistleblowing) vs loyauté institutionnelle: quel est le choix le plus éthique ?",
                                  "sideA": "Alerte éthique",
                                  "sideB": "Loyauté",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Dénoncer les actes répréhensibles est un devoir fondamental envers le public qui prime sur les intérêts de l'organisation.",
                                            "Le whistleblowing favorise la transparence et tient les institutions puissantes pour responsables de leurs actes."
                                  ],
                                  "ideasB": [
                                            "La loyauté envers son institution est essentielle pour maintenir la stabilité et l'efficacité des organisations complexes.",
                                            "Les problèmes internes devraient être résolus par les canaux établis pour éviter des dommages réputationnels inutiles."
                                  ]
                        },
                        {
                                  "topic": "Optimisme vs réalisme: quelle est la vision du monde la plus productive pour une carrière ?",
                                  "sideA": "Optimisme",
                                  "sideB": "Réalisme",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Une perspective positive favorise la résilience et encourage les individus à prendre les risques nécessaires à l'innovation.",
                                            "L'optimisme est contagieux et peut améliorer considérablement le morale de l'équipe et la résolution collective de problèmes."
                                  ],
                                  "ideasB": [
                                            "Une évaluation réaliste des défis empêche le gaspillage de ressources sur des objectifs inatteignables ou trop ambitieux.",
                                            "Le réalisme permet une planification d'urgence et une gestion des risques plus efficaces dans des environnements volatils."
                                  ]
                        },
                        {
                                  "topic": "Entrepreneuriat vs salariat: qu'est-ce qui contribue le plus à la société ?",
                                  "sideA": "Entrepreneuriat",
                                  "sideB": "Salariat",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Les entrepreneurs stimulent l'innovation et créent les nouveaux emplois et industries qui alimentent le progrès économique.",
                                            "La volonté de prendre des risques personnels mène au développement de solutions novatrices aux problèmes sociétaux complexes."
                                  ],
                                  "ideasB": [
                                            "Les efforts collectifs de millions d'employés fournissent la stabilité et l'expertise essentielles au fonctionnement de la société.",
                                            "L'emploi fournit une base fiscale constante et soutient l'infrastructure établie de l'économie mondiale."
                                  ]
                        },
                        {
                                  "topic": "Nationalisme vs globalisme: quel est le cadre le plus cohérent pour le 21e siècle ?",
                                  "sideA": "Nationalisme",
                                  "sideB": "Globalisme",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Se concentrer sur l'État-nation garantit que les gouvernements restent responsables envers leurs propres citoyens.",
                                            "L'identità nationale procure un fort sentiment d'appartenance et de cohésion sociale nécessaire à une société stable."
                                  ],
                                  "ideasB": [
                                            "Les défis mondiaux comme le changement climatique nécessitent une approche internationale unifiée qui transcende les frontières.",
                                            "Une économie mondiale interconnectée favorise la paix et la prospérité en rendant les nations interdépendantes."
                                  ]
                        },
                        {
                                  "topic": "École à la maison vs école traditionnelle: qu'est-ce qui produit des individus plus équilibrés ?",
                                  "sideA": "École à la maison",
                                  "sideB": "École traditionnelle",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "L'instruction personnalisée permet aux enfants de suivre leurs propres intérêts et d'apprendre à leur propre rythme.",
                                            "L'école à la maison peut protéger les enfants des influences sociales négatives comme le harcèlement scolaire."
                                  ],
                                  "ideasB": [
                                            "Les écoles traditionnelles offrent un environnement social diversifié où les enfants apprennent à interagir avec tous.",
                                            "Le cadre structuré d'une école favorise des compétences de vie essentielles comme la discipline et le travail d'équipe."
                                  ]
                        },
                        {
                                  "topic": "Systèmes de notation vs feedback descriptif: qu'est-ce qui motive les élèves le plus efficacement ?",
                                  "sideA": "Notes",
                                  "sideB": "Feedback descriptif",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Les notes fournissent une métrique claire et objective qui permet aux élèves de suivre leurs progrès et de se comparer.",
                                            "La nature compétitive des notes peut inciter les élèves à travailler plus dur pour atteindre l'excellence académique."
                                  ],
                                  "ideasB": [
                                            "Un feedback détaillé donne des indications spécifiques pour s'améliorer, favorisant une mentalité de croissance.",
                                            "Supprimer la pression des notes peut réduire l'anxiété et encourager un amour plus sincère de l'apprentissage."
                                  ]
                        },
                        {
                                  "topic": "Intelligence artificielle vs jugement humain: qu'est-ce qui devrait guider les décisions clés en entreprise ?",
                                  "sideA": "IA",
                                  "sideB": "Jugement humain",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "L'IA peut traiter de vastes quantités de données sans biais émotionnel, menant à des décisions plus objectives.",
                                            "Les algorithmes peuvent identifier des modèles complexes souvent invisibles même pour les experts humains les plus chevronnés."
                                  ],
                                  "ideasB": [
                                            "Les dirigeants humains peuvent considérer les nuances éthiques et le contexte social que les machines ne saisissent pas.",
                                            "Le jugement implique l'empathie et l'intuition, cruciales pour naviguer dans des situations interpersonnelles complexes."
                                  ]
                        },
                        {
                                  "topic": "Optimisme technologique vs scepticisme technologique: quelle est la posture par défaut la plus rationnelle aujourd'hui ?",
                                  "sideA": "Optimisme tech",
                                  "sideB": "Scepticisme tech",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "La technologie a historiquement résolu nos plus grands défis et continue d'améliorer l'espérance de vie mondiale.",
                                            "Maintenir une posture positive encourage l'investissement et l'innovation nécessaires pour résoudre les crises actuelles."
                                  ],
                                  "ideasB": [
                                            "Une approche sceptique est nécessaire pour identifier et atténuer les conséquences imprévues du progrès technologique rapide.",
                                            "Remettre en question les motivations des géants de la tech aide à protéger la vie privée et les valeurs démocratiques."
                                  ]
                        },
                        {
                                  "topic": "Identité numérique vs identité réelle: qu'est-ce qui nous définit le plus aujourd'hui ?",
                                  "sideA": "Identité numérique",
                                  "sideB": "Identité réelle",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Notre présence en ligne est souvent le premier point de contact, façonnant la perception qu'ont les autres de nous.",
                                            "Les empreintes numériques fournissent un record plus complet et permanent de nos intérêts, actions et connexions sociales."
                                  ],
                                  "ideasB": [
                                            "Les interactions réelles comportent un niveau de profondeur et d'authenticité qui ne peut être répliqué numériquement.",
                                            "Nos expériences physiques et nos relations immédiates restent les moteurs les plus significatifs de nos valeurs."
                                  ]
                        },
                        {
                                  "topic": "Éco-anxiété vs optimisme climatique: quelle est la réponse la plus constructive à la crise ?",
                                  "sideA": "Éco-anxiété",
                                  "sideB": "Optimisme climatique",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Un sentiment d'urgence sain peut motiver les individus à faire les changements de mode de vie radicaux nécessaires.",
                                            "Reconnaître la gravité de la situation prévient la complaisance et maintient la pression sur les gouvernements."
                                  ],
                                  "ideasB": [
                                            "L'optimisme prévient le désespoir et la paralysie, permettant aux gens de se concentrer sur les solutions et l'action positive.",
                                            "Croire que le changement est possible est un prérequis à l'effort soutenu requis pour construire un avenir durable."
                                  ]
                        },
                        {
                                  "topic": "Hiérarchies organisationnelles horizontales vs structures de gestion verticales: qu'est-ce qui sert le mieux les adultes qui y travaillent ?",
                                  "sideA": "Hiérarchie horizontale",
                                  "sideB": "Structure verticale",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "Le culte de la productivité vs l'éloge de l'oisiveté: qu'est-ce qui reflète le mieux ce dont les humains ont réellement besoin au travail ?",
                                  "sideA": "Productivité",
                                  "sideB": "Oisiveté",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "Le leadership comme compétence s'apprenant vs le leadership comme qualité innée: quel récit est le plus défendable empiriquement ?",
                                  "sideA": "Compétence acquise",
                                  "sideB": "Qualité innée",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "Culture de la performance (hustle culture) vs slow living: qui gagne, et qui devrait gagner ?",
                                  "sideA": "Hustle culture",
                                  "sideB": "Slow living",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "La responsabilité sociale des entreprises comme engagement sincère vs comme gestion de la réputation: quel cadrage est le plus honnête ?",
                                  "sideA": "Engagement sincère",
                                  "sideB": "Gestion réputation",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "L'identité adulte comme fixe vs perpétuellement en construction: quel récit reflète le mieux l'expérience vécue ?",
                                  "sideA": "Identité fixe",
                                  "sideB": "En construction",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "La domestication du féminisme par la culture de consommation vs le féminisme remodelant réellement la vie adulte: qu'est-ce qui est le plus vrai ?",
                                  "sideA": "Féminisme de conso",
                                  "sideB": "Remodelage réel",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "La crise de la quarantaine comme pathologie vs la crise de la quarantaine comme réévaluation légitime: quel cadrage est le plus utile ?",
                                  "sideA": "Pathologie",
                                  "sideB": "Réévaluation",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "La pression d'être extraordinaire vs la dignité d'une vie ordinaire: quel est l'idéal le plus humain à défendre ?",
                                  "sideA": "Extraordinaire",
                                  "sideB": "Dignité ordinaire",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "L'obligation de s'occuper de parents vieillissants vs la responsabilité de l'État: où la charge doit-elle retomber ?",
                                  "sideA": "Obligation familiale",
                                  "sideB": "Resp. de l'État",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "L'honnêteté radicale dans les relations vs le silence stratégique: quelle est l'approche la plus éthique de l'intimité ?",
                                  "sideA": "Honnêteté radicale",
                                  "sideB": "Silence stratégique",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "Choisir son cercle social délibérément vs laisser les relations se former organiquement: qu'est-ce qui produit des amitiés adultes plus authentiques ?",
                                  "sideA": "Choix délibéré",
                                  "sideB": "Formation organique",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "La famille nucléaire comme unité sociale optimale vs comme arrangement historiquement contingent: quelle vue est la plus défendable ?",
                                  "sideA": "Unité optimale",
                                  "sideB": "Arrangement historique",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "Gouvernance technocratique vs populisme démocratique: qu'est-ce qui pose le plus grand risque à long terme pour les citoyens adultes ?",
                                  "sideA": "Technocratie",
                                  "sideB": "Populisme",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "Justice intergénérationnelle vs bien-être actuel: qu'est-ce qui devrait être prioritaire dans les politiques publiques ?",
                                  "sideA": "Justice intergén.",
                                  "sideB": "Bien-être actuel",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "L'obligation de voter vs le droit de s'abstenir: quelle est la position civique la plus défendable ?",
                                  "sideA": "Obligation de voter",
                                  "sideB": "Droit de s'abstenir",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "Le patriotisme comme vertu civique vs le patriotisme comme défaillance cognitive: quel récit est le plus convaincant ?",
                                  "sideA": "Vertu civique",
                                  "sideB": "Défaillance cognitive",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "L'absolutisme de la liberté d'expression vs la parole régulée: qu'est-ce qui produit de meilleurs résultats pour les sociétés démocratiques adultes ?",
                                  "sideA": "Absolutisme",
                                  "sideB": "Parole régulée",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "Une carrière pleine de sens vs un travail qui finance une vie privée pleine de sens: quelle est l'ambition adulte la plus honnête ?",
                                  "sideA": "Carrière sensée",
                                  "sideB": "Financer vie privée",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "Religion vs philosophie séculière: qu'est-ce qui répond le mieux aux besoins existentiels des adultes modernes ?",
                                  "sideA": "Religion",
                                  "sideB": "Phil. séculière",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "La vie examinée vs la vie absorbée: laquelle vaut le plus la peine d'être vécue, et qui peut en décider ?",
                                  "sideA": "Vie examinée",
                                  "sideB": "Vie absorbée",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "L'héritage (legacy) vs la présence: quelle est la chose la plus cohérente à rechercher pour un adulte ?",
                                  "sideA": "Héritage",
                                  "sideB": "Présence",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "L'adulte qui a « enfin compris » vs l'adulte qui a accepté qu'il ne comprendra jamais: qui est le plus conscient de soi ?",
                                  "sideA": "A enfin compris",
                                  "sideB": "Accepté l'ignorance",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "Tout dire à son thérapeute vs tout dire à son coiffeur: quelle relation professionnelle est la plus efficace sur le plan thérapeutique ?",
                                  "sideA": "Thérapeute",
                                  "sideB": "Coiffeur",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "L'anxiété du dimanche d'un adulte au planning chargé vs l'anxiété du dimanche d'un adulte au planning vide: qu'est-ce qui est le plus troublant existentiellement ?",
                                  "sideA": "Planning chargé",
                                  "sideB": "Planning vide",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "Suranalyser chaque décision majeure de la vie vs les prendre impulsivement: quelle stratégie a le meilleur bilan empirique ?",
                                  "sideA": "Suranalyser",
                                  "sideB": "Impulsivité",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "Les adultes qui lisent des livres de développement personnel vs les adultes qui refusent de le faire: quel groupe est le plus difficile à supporter lors d'un dîner ?",
                                  "sideA": "Lecteurs dév. perso",
                                  "sideB": "Refuse de lire",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "Créativité de l'IA vs art humain: les machines peuvent-elles vraiment créer de l'art ?",
                                  "sideA": "Créativité IA",
                                  "sideB": "Art humain",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "Exploration spatiale vs exploration des grands fonds: où devrions-nous concentrer nos ressources ?",
                                  "sideA": "Espace",
                                  "sideB": "Grands fonds",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "Vie privée numérique vs sécurité nationale: la surveillance totale est-elle jamais justifiée ?",
                                  "sideA": "Vie privée",
                                  "sideB": "Sécurité",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "Aliments génétiquement modifiés vs agriculture biologique: comment devrions-nous nourrir le monde ?",
                                  "sideA": "OGM",
                                  "sideB": "Bio",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "Revenu universel vs programmes de garantie d'emploi: quel est le meilleur filet de sécurité sociale ?",
                                  "sideA": "Revenu universel",
                                  "sideB": "Garantie d'emploi",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idée pour A 1",
                                            "Idée pour A 2"
                                  ],
                                  "ideasB": [
                                            "Idée pour B 1",
                                            "Idée pour B 2"
                                  ]
                        },
                        {
                                  "topic": "L'éthique protestante du travail comme accomplissement civilisationnel vs comme source originelle de la misère adulte: quel héritage domine aujourd'hui ?",
                                  "sideA": "Accomplissement civilisationnel",
                                  "sideB": "Source de misère",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Elle a catalysé un développement socio-économique sans précédent en institutionnalisant la diligence comme une vertu cardinale.",
                                            "L'élan intériorisé vers l'industrie fournit un cadre cohérent pour le but individuel et la stabilité sociétale."
                                  ],
                                  "ideasB": [
                                            "Elle a enraciné un cycle implacable de productivité performative qui précipite un épuisement professionnel généralisé et un ennui existentiel.",
                                            "Lier exclusivement la dignité humaine au rendement économique facilite l'érosion systémique des loisirs et de la vie contemplative."
                                  ]
                        },
                        {
                                  "topic": "La marchandisation de la passion vs la libération du travail transformé en sens: « faites ce que vous aimez » est-il un conseil ou un piège ?",
                                  "sideA": "Conseil",
                                  "sideB": "Piège",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Aligner les aspirations professionnelles sur les intérêts intrinsèques favorise un état de « flow » et un profond accomplissement psychologique.",
                                            "La quête d'un travail porteur de sens transcende la simple subsistance, permettant une existence plus intégrée et authentique."
                                  ],
                                  "ideasB": [
                                            "Transformer un passe-temps en carrière soumet ses sanctuaires les plus chers à la logique impitoyable de la valorisation du marché.",
                                            "Le récit de la « passion » sert souvent de rideau de fumée à des conditions de travail précaires et à l'auto-exploitation."
                                  ]
                        },
                        {
                                  "topic": "La carrière comme identité vs la carrière comme moyen: quelle est la relation la plus cohérente pour un adulte moderne avec son travail ?",
                                  "sideA": "Identité",
                                  "sideB": "Moyen",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'excellence professionnelle fournit une mesure tangible pour l'accomplissement de soi et la contribution sociale dans un monde séculier.",
                                            "Une identité ancrée dans la maîtrise et la vocation offre une résilience et un sentiment de continuité tout au long de la vie."
                                  ],
                                  "ideasB": [
                                            "Maintenir une démarcation claire entre le soi et le rôle prévient l'effondrement identitaire pendant les périodes de chômage ou de retraite.",
                                            "Considérer le travail comme une utilité purement instrumentale préserve la bande passante cognitive et émotionnelle nécessaire aux dimensions hors marché de la vie."
                                  ]
                        },
                        {
                                  "topic": "Le travailleur acharné vertueux vs l'oisif stratégique: lequel a été célébré de la manière la plus malhonnête dans la culture occidentale ?",
                                  "sideA": "Travailleur acharné",
                                  "sideB": "Oisif",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La glorification de la « hustle culture » occulte les rendements décroissants de l'épuisement et le délaissement systémique de la reproduction sociale.",
                                            "Les récits héroïques de surmenage servent souvent à normaliser des exigences organisationnelles exploiteuses sous couvert de mérite individuel."
                                  ],
                                  "ideasB": [
                                            "La romantisation de la « classe oisive » ou du « tire-au-flanc stratégique » cache souvent le privilège économique sous-jacent qui rend l'oisiveté viable.",
                                            "Célébrer la non-productivité comme un acte radical peut être une esthétisation malhonnête de la passivité face à des défis collectifs urgents."
                                  ]
                        },
                        {
                                  "topic": "L'ambition adulte comme admirable vs l'ambition adulte comme incapacité à accepter la finitude: quelle lecture est la plus honnête psychologiquement ?",
                                  "sideA": "Admirable",
                                  "sideB": "Incapacité à accepter la finitude",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'ambition représente le refus courageux de stagner, moteur de l'expansion des capacités humaines et des frontières créatives.",
                                            "L'effort vers l'excellence est une expression vitale de la volonté humaine de laisser une empreinte durable et significative sur le monde."
                                  ],
                                  "ideasB": [
                                            "L'effort incessant fonctionne souvent comme un mécanisme de défense névrotique contre la terrifiante réalité de notre inévitable insignifiance et mortalité.",
                                            "Une vie de « devenir » constant exclut la possibilité de « l'être », menant à un état perpétuel d'insatisfaction orienté vers le futur."
                                  ]
                        },
                        {
                                  "topic": "L'amour romantique comme principe organisateur de la vie adulte vs comme mythe historiquement contingent et commercialement soutenu: lequel est le plus défendable ?",
                                  "sideA": "Principe organisateur",
                                  "sideB": "Mythe commercial",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Le partenariat intime offre un lieu unique de sens, fournissant un sanctuaire émotionnel et un récit partagé dans une société atomisée.",
                                            "La profonde vulnérabilité de l'amour sert de puissant catalyseur pour la croissance morale et la transcendance de l'ego."
                                  ],
                                  "ideasB": [
                                            "Le culte contemporain du romantisme place un fardeau insupportable sur une seule relation pour satisfaire tous les besoins psychologiques et sociaux.",
                                            "Le romantisme a été coopté par le capitalisme de consommation pour vendre un style de vie idéalisé qui privilégie la gratification individuelle aux liens communautaires."
                                  ]
                        },
                        {
                                  "topic": "Transparence radicale dans les relations vs nécessité d'un soi privé: l'intimité et l'individuation peuvent-elles coexister ?",
                                  "sideA": "Transparence",
                                  "sideB": "Soi privé",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La vulnérabilité absolue est la seule voie vers une intimité véritable, démantelant les barrières défensives qui empêchent une connexion réelle.",
                                            "La suppression des secrets favorise une culture de confiance radicale et empêche le pourrissement lent des griefs non exprimés."
                                  ],
                                  "ideasB": [
                                            "Un degré d'opacité interne est essentiel pour maintenir une identité distincte et prévenir l'enchevêtrement émotionnel qui étouffe le désir.",
                                            "L'impératif de « transparence totale » peut être une forme subtile de surveillance qui érode le caractère sacré du monde intérieur de l'individu."
                                  ]
                        },
                        {
                                  "topic": "L'éthique du soin comme correctif féministe vs comme réassignation des mêmes fardeaux: le concept a-t-il tenu sa promesse ?",
                                  "sideA": "Correctif féministe",
                                  "sideB": "Réassignation des fardeaux",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Il remet en question la domination patriarcale centrée sur les droits abstraits en privilégiant la relationnalité et le fait fondamental de la dépendance humaine.",
                                            "Centrer le travail de soin élève des activités traditionnellement reléguées à la sphère privée à leur statut légitime de socle de la civilisation."
                                  ],
                                  "ideasB": [
                                            "Sans redistribution structurelle radicale, la rhétorique du « soin » sert souvent à romantiser et à perpétuer les inégalités de genre dans le travail.",
                                            "Se concentrer sur le soin comme vertu intrinsèque peut par inadvertance essentialiser des traits qui ont été socialisés chez les groupes marginalisés au profit des puissants."
                                  ]
                        },
                        {
                                  "topic": "Choisir de ne pas avoir d'enfants comme résistance à l'idéologie pronataliste vs comme décision entièrement personnelle sans dimension politique: peut-on les séparer nettement ?",
                                  "sideA": "Résistance",
                                  "sideB": "Décision personnelle",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Dans une société qui traite la reproduction comme un devoir moral par défaut, le choix de rester sans enfant est un acte d'autonomie intrinsèquement subversif.",
                                            "Refuser de participer à la reproduction générationnelle du travail et du capital constitue une critique légitime des structures socio-économiques contemporaines."
                                  ],
                                  "ideasB": [
                                            "Politiser les choix reproductifs peut être une ingérence invasive qui ignore les facteurs personnels complexes et souvent idiosyncrasiques en jeu.",
                                            "De nombreuses personnes parviennent à cette décision par un processus de réflexion personnelle privée qui a peu à voir avec des cadres idéologiques plus larges."
                                  ]
                        },
                        {
                                  "topic": "La conscience de la mortalité comme condition préalable à une vie adulte pleine de sens vs comme son principal obstacle: quelle est la position la plus vivable ?",
                                  "sideA": "Condition préalable",
                                  "sideB": "Obstacle",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La finitude du temps imprègne nos choix de gravité et d'urgence, empêchant la dérive vers un état de procrastination perpétuelle.",
                                            "Reconnaître la mort favorise une appréciation profonde de la beauté éphémère du présent et encourage la priorité de ce qui compte vraiment."
                                  ],
                                  "ideasB": [
                                            "L'ombre omniprésente de la non-existence peut induire un nihilisme paralysant qui rend toute entreprise humaine apparemment futile.",
                                            "Une préoccupation pour la mortalité peut exclure la spontanéité joyeuse et l'investissement à long terme requis pour une vie florissante."
                                  ]
                        },
                        {
                                  "topic": "Le vieillissement comme déclin vs le vieillissement comme accumulation: quel récit est le plus honnête, et lequel est le plus utile ?",
                                  "sideA": "Déclin",
                                  "sideB": "Accumulation",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'érosion physiologique et cognitive associée au vieillissement est une réalité biologique dure qui nécessite une confrontation courageuse plutôt que des euphémismes.",
                                            "Accepter le déclin permet un ajustement réaliste des attentes et la culture de la grâce face à la perte inévitable."
                                  ],
                                  "ideasB": [
                                            "Le vieillissement offre une profondeur de perspective inégalée, une régulation émotionnelle et une synthèse d'expérience qui constitue la véritable sagesse.",
                                            "Le récit de l'accumulation valorise les personnes âgées comme des dépositaires vitaux de la mémoire culturelle et des conseillers pour les générations suivantes."
                                  ]
                        },
                        {
                                  "topic": "La médicalisation du vieillissement comme progrès vs comme refus d'accepter la condition humaine: où placer la limite ?",
                                  "sideA": "Progrès",
                                  "sideB": "Refus",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Les interventions technologiques qui prolongent la « durée de vie en bonne santé » soulagent d'immenses souffrances humaines et permettent des périodes plus longues de contribution à la société.",
                                            "Considérer le vieillissement comme un problème biologique à résoudre est l'extension logique de la quête scientifique visant à maîtriser la nature au profit de l'homme."
                                  ],
                                  "ideasB": [
                                            "Pathologiser une étape naturelle de la vie reflète une profonde phobie culturelle de la vulnérabilité et une tentative orgueilleuse d'échapper à nos limites inhérentes.",
                                            "La quête de l'immortalité par la médecine peut mener à une société stagnante privée de la vitalité régénératrice fournie par la succession des générations."
                                  ]
                        },
                        {
                                  "topic": "La mémoire comme substance de l'identité adulte vs la mémoire comme narrateur hautement peu fiable: quelles conséquences pour la construction de soi ?",
                                  "sideA": "Substance",
                                  "sideB": "Narrateur peu fiable",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La continuité du soi dépend d'un récit autobiographique cohérent qui lie nos actions passées à nos valeurs présentes.",
                                            "Les souvenirs partagés forment le fondement de nos relations les plus significatives et procurent un sentiment stable d'appartenance."
                                  ],
                                  "ideasB": [
                                            "La nature malléable de la mémoire suggère que notre « identité » est une reconstruction perpétuelle, souvent intéressée, plutôt qu'un enregistrement objectif.",
                                            "Reconnaître la faillibilité de notre histoire personnelle permet une relation plus flexible et indulgente avec la personne que nous étions."
                                  ]
                        },
                        {
                                  "topic": "La complicité du citoyen adulte dans des systèmes injustes par la consommation ordinaire vs l'impertinence structurelle de la pureté morale individuelle: quel cadre est le plus honnête ?",
                                  "sideA": "Complicité",
                                  "sideB": "Impertinence structurelle",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Les choix individuels s'agrègent en signaux de marché ; refuser de reconnaître ce lien causal est une forme d'abdication éthique.",
                                            "Le cadre du « consommateur éthique » redonne de l'agence à l'individu, insistant sur le fait qu'aucune action n'est trop petite pour avoir un poids moral."
                                  ],
                                  "ideasB": [
                                            "Se focaliser sur les choix de mode de vie personnels détourne souvent des changements institutionnels et réglementaires à grande échelle nécessaires pour lutter contre l'injustice systémique.",
                                            "Dans une économie mondialisée, la pureté morale totale est une impossibilité logistique qui ne sert qu'à induire une culpabilité paralysante plutôt qu'une action efficace."
                                  ]
                        },
                        {
                                  "topic": "Le désenchantement politique comme réponse rationnelle aux preuves disponibles vs comme forme de privilège: quelle lecture est la plus défendable empiriquement ?",
                                  "sideA": "Réponse rationnelle",
                                  "sideB": "Privilège",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Le retrait du processus politique peut être une reconnaissance lucide de la capture systémique des institutions par des intérêts ancrés.",
                                            "L'échec persistant des systèmes politiques à répondre aux menaces existentielles fait du scepticisme la position intellectuelle la plus fondée sur les preuves."
                                  ],
                                  "ideasB": [
                                            "La capacité de se retirer de la politique est un luxe accordé seulement à ceux dont les droits et besoins fondamentaux ne sont pas actuellement menacés directement.",
                                            "Le cynisme fonctionne souvent comme une excuse sophistiquée pour l'apathie, abdiquant la responsabilité de protéger ceux qui sont plus vulnérables aux changements de politique."
                                  ]
                        },
                        {
                                  "topic": "La justice intergénérationnelle comme défi moral central de notre temps vs comme concept qui occulte systématiquement les inégalités de classe et de race actuelles: quelle est la critique la plus forte ?",
                                  "sideA": "Défi moral",
                                  "sideB": "Occulte les inégalités",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'ampleur sans précédent de la dégradation de l'environnement crée une obligation non réciproque envers les êtres futurs qui ne peuvent se représenter eux-mêmes.",
                                            "Ne pas tenir compte des conséquences à long terme de la consommation actuelle constitue un vol systémique envers les générations à naître."
                                  ],
                                  "ideasB": [
                                            "La rhétorique sur les « générations futures » est souvent utilisée pour différer des actions redistributives urgentes qui profiteraient aux marginalisés d'aujourd'hui.",
                                            "Une focalisation abstraite sur la justice chronologique peut ignorer le fait que le « futur » sera hérité par des groupes partant déjà de positions de pouvoir très différentes."
                                  ]
                        },
                        {
                                  "topic": "La démocratie libérale comme le moins mauvais des systèmes vs comme un système ayant structurellement épuisé sa capacité de réforme: quel verdict les preuves soutiennent-elles ?",
                                  "sideA": "Moins mauvais système",
                                  "sideB": "Capacité épuisée",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Les mécanismes de succession pacifique et de dissidence institutionnalisée restent les remparts les plus efficaces contre la tyrannie.",
                                            "L'adaptabilité historique des systèmes libéraux suggère qu'ils possèdent une capacité inégalée d'autocorrection sur le long terme."
                                  ],
                                  "ideasB": [
                                            "La paralysie des institutions démocratiques face à l'escalade des inégalités et au collapse climatique suggère un échec systémique terminal.",
                                            "La démocratie contemporaine a été vidée de sa substance par la gouvernance technocratique et l'influence écrasante du capital concentré."
                                  ]
                        },
                        {
                                  "topic": "La capacité d'auto-tromperie comme défaut cognitif vs comme mécanisme adaptatif: quel récit sert le mieux l'adulte qui veut bien vivre ?",
                                  "sideA": "Défaut cognitif",
                                  "sideB": "Mécanisme adaptatif",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Un engagement envers la vérité radicale est essentiel pour prendre des décisions éclairées et construire des relations authentiques basées sur la réalité.",
                                            "L'auto-tromperie systémique exclut la possibilité d'une connaissance de soi véritable et la résolution des conflits psychologiques sous-jacents."
                                  ],
                                  "ideasB": [
                                            "Un degré d'« illusion positive » est souvent nécessaire pour maintenir la motivation et la résilience requises face aux épreuves inhérentes de la vie.",
                                            "L'esprit humain a évolué pour donner la priorité à la cohésion sociale et à la survie plutôt qu'au traitement froid et objectif de l'information."
                                  ]
                        },
                        {
                                  "topic": "L'expertise comme autorité épistémique vs l'expertise comme forme de pouvoir institutionnel méritant examen: quand le scepticisme sain devient-il lâcheté épistémique ?",
                                  "sideA": "Autorité épistémique",
                                  "sideB": "Pouvoir institutionnel",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Dans un monde de plus en plus complexe, s'en remettre à des connaissances spécialisées est un dispositif nécessaire d'économie cognitive et un préalable à une politique efficace.",
                                            "Les normes rigoureuses d'examen par les pairs et les standards empiriques des communautés d'experts fournissent la approximation la plus fiable de la vérité objective disponible."
                                  ],
                                  "ideasB": [
                                            "La classe des « experts » reflète souvent les biais et les intérêts des institutions qui financent et légitiment leurs titres.",
                                            "Démocratiser le savoir exige de remettre en question le monopole des élites diplômées sur ce qui compte comme preuve valide ou réalité vécue."
                                  ]
                        },
                        {
                                  "topic": "Le récit comme moyen principal pour les adultes de donner sens à leur vie vs le récit comme moyen principal pour les adultes de s'égarer: quelle fonction domine ?",
                                  "sideA": "Donner du sens",
                                  "sideB": "S'égarer",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La narration nous permet de synthétiser des expériences disparates en un tout cohérent, favorisant la cohérence psychologique et l'agence.",
                                            "La culture humaine est fondamentalement narrative ; sans elle, nous habiterions un monde d'événements aléatoires sans but."
                                  ],
                                  "ideasB": [
                                            "Le désir d'une « intrigue bien ficelée » nous conduit souvent à ignorer les données qui contredisent notre image de soi préférée ou nos engagements idéologiques.",
                                            "Les structures narratives imposent une fausse téléologie à la vie, masquant le rôle de la pure contingence et du chaos aléatoire dans nos histoires personnelles."
                                  ]
                        },
                        {
                                  "topic": "L'honnêteté comme vertu inconditionnelle vs l'honnêteté comme vertu contextuelle: existe-t-il un compte-rendu cohérent de la sincérité qui survive au contact des relations adultes réelles ?",
                                  "sideA": "Vertu inconditionnelle",
                                  "sideB": "Vertu contextuelle",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La tromperie, même bien intentionnée, érode la réalité intersubjective requise pour une connexion humaine authentique et la confiance.",
                                            "Un engagement envers la vérité reflète un respect fondamental pour l'autonomie d'autrui, lui permettant de répondre au monde tel qu'il est réellement."
                                  ],
                                  "ideasB": [
                                            "L'application rigide d'une « honnêteté brutale » peut être une forme de cruauté qui donne la priorité à sa propre pureté morale sur le bien-être d'autrui.",
                                            "Les « lubrifiants sociaux » pragmatiques et le partage sélectif d'informations sont essentiels pour naviguer les complexités de la vie commune et le tact professionnel."
                                  ]
                        },
                        {
                                  "topic": "L'adulte qui a « enfin tout compris » vs l'adulte qui a accepté qu'il ne comprendrait jamais: lequel représente une relation plus sophistiquée à la réalité ?",
                                  "sideA": "A tout compris",
                                  "sideB": "A accepté l'inconnu",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Atteindre un ensemble stable de valeurs et une compréhension claire de sa place dans le monde est la marque de la maturité psychologique.",
                                            "La synthèse de l'expérience en sagesse exploitable permet un engagement plus efficace et décisif face aux défis de la vie."
                                  ],
                                  "ideasB": [
                                            "La sagesse consiste en la reconnaissance socratique de l'immensité de notre ignorance et de la contingence radicale de nos perspectives.",
                                            "Une ouverture à la révision perpétuelle et l'« esprit du débutant » préviennent la calcification intellectuelle qui accompagne souvent le vieillissement."
                                  ]
                        },
                        {
                                  "topic": "Tout dire à son thérapeute vs tout dire à son coiffeur: quelle relation professionnelle est empiriquement la plus transformative, et pourquoi la réponse nous met-elle mal à l'aise ?",
                                  "sideA": "Thérapeute",
                                  "sideB": "Coiffeur",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Le cadre clinique offre un environnement structuré, guidé par la théorie, spécifiquement conçu pour la déconstruction des schémas psychiques profonds.",
                                            "La neutralité professionnelle du thérapeute et sa formation à l'« inconscient » permettent des intuitions impossibles dans une conversation informelle."
                                  ],
                                  "ideasB": [
                                            "La nature tactile et à faible enjeu du salon facilite souvent une vulnérabilité spontanée et authentique que les interventions cliniques peuvent étouffer.",
                                            "Le coiffeur représente une forme de soin communautaire, « quotidien », plus intégré dans le tissu de la vie que l'artificialité de l'heure clinique."
                                  ]
                        },
                        {
                                  "topic": "Le langage comme constitutif de la pensée vs le langage comme simple expression: le langage façonne-t-il ou reflète-t-il la réalité ?",
                                  "sideA": "Constitutif",
                                  "sideB": "Expressif",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Les structures lexicales et grammaticales de notre langue maternelle fournissent les catégories mêmes à travers lesquelles nous percevons et conceptualisons le monde.",
                                            "La relativité linguistique suggère que les concepts pour lesquels nous manquons de mots restent effectivement impensables ou nettement plus difficiles à saisir."
                                  ],
                                  "ideasB": [
                                            "Le langage est un outil en aval pour communiquer des processus cognitifs pré-linguistiques et des expériences sensorielles universelles à l'espèce.",
                                            "La capacité d'inventer une nouvelle terminologie pour décrire des phénomènes auparavant non cartographiés prouve que la pensée précède son articulation linguistique."
                                  ]
                        },
                        {
                                  "topic": "Précision vs ambiguïté: quelle est la propriété du langage la plus précieuse dans le discours public ?",
                                  "sideA": "Précision",
                                  "sideB": "Ambiguïté",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Une clarté terminologique rigoureuse est la seule défense contre l'obscurcissement intentionnel et la « langue de bois » utilisés pour manipuler l'opinion publique.",
                                            "La précision technique permet le débat fondé sur les preuves et les formulations politiques spécifiques nécessaires pour résoudre des problèmes sociétaux complexes."
                                  ],
                                  "ideasB": [
                                            "L'ambiguïté productive permet la formation de larges coalitions et le « flou stratégique » nécessaire au compromis diplomatique.",
                                            "Un langage nuancé et polysémique est mieux adapté pour capturer les contradictions et complexités inhérentes à la réalité sociale humaine."
                                  ]
                        },
                        {
                                  "topic": "Rhétorique vs logique: laquelle est finalement la plus persuasive, et laquelle devrait l'être ?",
                                  "sideA": "Rhétorique",
                                  "sideB": "Logique",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Les êtres humains sont fondamentalement des créatures narratives et émotionnelles ; même l'argument le plus solide échoue s'il ne résonne pas avec les valeurs de l'auditoire.",
                                            "L'éloquence et le cadrage peuvent combler le fossé entre la vérité abstraite et l'action collective, mobilisant les gens de manière que les syllogismes froids ne peuvent pas."
                                  ],
                                  "ideasB": [
                                            "La logique fournit le seul standard objectif et universel de validité, protégeant le discours du pouvoir manipulateur de la démagogie charismatique.",
                                            "Une société qui privilégie le style sur la substance est structurellement vulnérable à la désinformation et à l'érosion des normes épistémiques."
                                  ]
                        },
                        {
                                  "topic": "Sens littéral vs sens interprétatif: à qui appartient le sens d'un texte ?",
                                  "sideA": "Littéral",
                                  "sideB": "Interprétatif",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'intention de l'auteur et le contexte historico-grammatical de la création d'une œuvre fournissent la seule ancre stable pour la communication.",
                                            "Le subjectivisme radical dans l'interprétation rend l'acte d'écrire futile, le texte devenant simplement un miroir pour les biais existants du lecteur."
                                  ],
                                  "ideasB": [
                                            "La « mort de l'auteur » libère le texte pour générer de nouveaux sens à travers sa rencontre avec divers contextes culturels et temporels.",
                                            "Le sens est un processus co-créatif ; une œuvre ne vit vraiment que lorsqu'elle est filtrée à travers l'expérience vécue unique du destinataire."
                                  ]
                        },
                        {
                                  "topic": "Consensus scientifique vs humilité épistémique: quand s'en remettre à l'expertise est-il justifié ?",
                                  "sideA": "Consensus",
                                  "sideB": "Humilité",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Le poids collectif des preuves examinées par les pairs est le guide le plus fiable pour les politiques publiques, surtout concernant les risques existentiels.",
                                            "La dissidence pour elle-même, sans contre-preuves rigoureuses, est souvent un exercice de vanité qui met en péril la sécurité publique."
                                  ],
                                  "ideasB": [
                                            "L'histoire est parsemée de « consensus scientifiques » qui ont été renversés plus tard ; maintenir un degré de scepticisme est essentiel au progrès intellectuel.",
                                            "S'en remettre à l'autorité peut devenir une forme de « scientisme » qui ignore les dimensions éthiques, sociales et philosophiques de questions complexes."
                                  ]
                        },
                        {
                                  "topic": "Expertise vs expérience vécue: lequel porte le plus de poids probant dans le débat public ?",
                                  "sideA": "Expertise",
                                  "sideB": "Expérience vécue",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Une formation spécialisée et une analyse fondée sur les données offrent une vue panoramique des problèmes systémiques que les anecdotes personnelles ne peuvent capturer.",
                                            "L'expertise objective est nécessaire pour séparer les tendances généralisables de l'intensité émotionnelle d'événements individuels et idiosyncrasiques."
                                  ],
                                  "ideasB": [
                                            "Ceux qui sont directement impactés par une politique possèdent une compréhension granulaire et qualitative de ses effets que les modèles abstraits manquent souvent.",
                                            "Privilégier les titres académiques sur le témoignage de groupes marginalisés peut renforcer les déséquilibres de pouvoir existants et faire taire des vérités vitales."
                                  ]
                        },
                        {
                                  "topic": "Le doute comme vertu intellectuelle vs le doute comme paralysie: quand le scepticisme devient-il irresponsable ?",
                                  "sideA": "Vertu",
                                  "sideB": "Paralysie",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Une volonté persistante de remettre en question ses propres présupposés est le seul rempart contre les dangers du dogmatisme idéologique.",
                                            "L'intégrité intellectuelle exige la suspension du jugement jusqu'à ce que des preuves suffisantes aient été rassemblées, quelle que soit la pression sociale."
                                  ],
                                  "ideasB": [
                                            "Le doute fabriqué est une tactique courante utilisée pour bloquer des actions urgentes sur des questions où les preuves sont déjà accablantes.",
                                            "Un refus de s'engager sur une position peut être une forme de lâcheté épistémique qui abdique la responsabilité d'agir dans un monde d'incertitude."
                                  ]
                        },
                        {
                                  "topic": "Récit vs données: lequel mène le plus fidèlement vers la vérité ?",
                                  "sideA": "Récit",
                                  "sideB": "Données",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Les statistiques abstraites sont souvent psychologiquement inertes ; nous avons besoin de « l'histoire humaine » pour fournir la saillance morale nécessaire à une compréhension véritable.",
                                            "Les paraboles et les histoires contextualisent les faits bruts, leur donnant une signification qui permet leur intégration dans notre vision du monde."
                                  ],
                                  "ideasB": [
                                            "Les récits sont sensibles au « biais de confirmation » et à l'« heuristique de disponibilité », nous menant à généraliser abusivement à partir d'histoires frappantes mais non représentatives.",
                                            "Les données quantitatives fournissent la seule carte de la réalité à l'échelle exacte, nous protégeant du pouvoir manipulateur d'anecdotes chargées d'émotion."
                                  ]
                        },
                        {
                                  "topic": "Légitimité par le consentement vs légitimité par le résultat: qu'est-ce qui justifie réellement l'autorité politique ?",
                                  "sideA": "Consentement",
                                  "sideB": "Résultat",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'autorité politique n'est moralement défendable que lorsqu'elle dérive de la volonté explicite et continue des gouvernés.",
                                            "L'équité procédurale du processus démocratique est la source primaire du droit d'un État à exiger l'obéissance."
                                  ],
                                  "ideasB": [
                                            "La justification primaire d'un gouvernement est sa capacité à fournir la sécurité, la prospérité et la prestation efficace des services essentiels.",
                                            "La légitimité procédurale est vide si le système échoue systématiquement à produire les conditions matérielles nécessaires à une société florissante."
                                  ]
                        },
                        {
                                  "topic": "L'État comme garant de la liberté vs l'État comme sa menace principale: quelle vision est la plus défendable historiquement ?",
                                  "sideA": "Garant",
                                  "sideB": "Menace",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Sans le « monopole de la force légitime » pour faire respecter les contrats et protéger les droits, la vie serait un état de prédation privée chaotique.",
                                            "L'État moderne est la seule entité capable de protéger l'individu contre le pouvoir écrasant des corporations et d'autres acteurs non étatiques."
                                  ],
                                  "ideasB": [
                                            "L'histoire démontre que la capacité de l'État pour la surveillance, la mobilisation de masse et la violence en fait le prédateur le plus dangereux de tous.",
                                            "L'expansion de la bureaucratie d'État mène inévitablement à la « cage d'acier » du contrôle technocratique, érodant l'agence individuelle et l'autonomie locale."
                                  ]
                        },
                        {
                                  "topic": "Politique fondée sur les droits vs politique fondée sur les responsabilités: qu'est-ce qui rend une culture publique plus cohérente ?",
                                  "sideA": "Droits",
                                  "sideB": "Responsabilités",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Se focaliser sur des droits individuels inaliénables fournit un bouclier robuste contre la « tyrannie de la majorité » et les excès de l'État.",
                                            "Un cadre centré sur les droits donne aux groupes marginalisés le pouvoir d'exiger l'égalité de traitement et la protection devant la loi."
                                  ],
                                  "ideasB": [
                                            "Une focalisation exclusive sur les droits favorise une culture atomisée et procédurière qui ignore les devoirs réciproques que nous devons à notre communauté.",
                                            "Une société cohérente exige une reconnaissance partagée des fardeaux collectifs et des obligations morales nécessaires au maintien du bien commun."
                                  ]
                        },
                        {
                                  "topic": "L'idéal de neutralité vs l'inéluctabilité d'une gouvernance chargée de valeurs: l'État libéral peut-il être vraiment neutre ?",
                                  "sideA": "Neutralité",
                                  "sideB": "Chargée de valeurs",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'État doit rester strictement agnostique vis-à-vis de la « vie bonne » pour garantir que tous les citoyens puissent poursuivre leurs propres conceptions diverses du bonheur.",
                                            "La neutralité procédurale est le seul moyen de maintenir la paix sociale dans une société pluraliste aux cadres moraux et religieux concurrents."
                                  ],
                                  "ideasB": [
                                            "Chaque loi et politique incarne implicitement un ensemble spécifique de priorités morales et de visions de ce qui constitue une société désirable.",
                                            "La revendication de « neutralité » est souvent un masque rhétorique pour les valeurs de la culture dominante, les présentant comme universelles et indiscutables."
                                  ]
                        },
                        {
                                  "topic": "Intention vs réception: quelle lecture d'une œuvre fait autorité ?",
                                  "sideA": "Intention",
                                  "sideB": "Réception",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Une œuvre d'art est un acte de communication ; ignorer les buts spécifiques du créateur mène à un profond échec de compréhension et à une distorsion historique.",
                                            "Retrouver l'intention de l'auteur fournit une limite nécessaire contre l'approche du « tout se vaut » dans l'interprétation critique."
                                  ],
                                  "ideasB": [
                                            "Une fois qu'une œuvre entre dans la sphère publique, elle devient indépendante de son créateur, acquérant de nouveaux sens basés sur la réponse du public.",
                                            "La lecture « autoritaire » d'un texte est souvent utilisée comme un outil de contrôle culturel pour supprimer les interprétations subversives ou hétérodoxes."
                                  ]
                        },
                        {
                                  "topic": "Valeur esthétique vs valeur morale: une œuvre belle peut-elle aussi être maléfique ?",
                                  "sideA": "Esthétique",
                                  "sideB": "Morale",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'art doit être jugé par ses qualités formelles internes et sa puissance expressive, indépendamment du caractère moral de son créateur ou de son sujet.",
                                            "Confondre esthétique et éthique mène à une culture didactique et moralisatrice qui étouffe l'exploration créative et la complexité."
                                  ],
                                  "ideasB": [
                                            "Le pouvoir de la beauté peut être utilisé pour glamouriser des idéologies nuisibles, rendement la responsabilité morale de l'artiste inséparable de ses choix esthétiques.",
                                            "La véritable « grandeur artistique » est incompatible avec une vision du monde qui dévalue fondamentalement la dignité humaine ou célèbre la souffrance."
                                  ]
                        },
                        {
                                  "topic": "L'avant-garde vs l'accessibilité: l'art doit-il défier ou inclure ?",
                                  "sideA": "Avant-garde",
                                  "sideB": "Accessibilité",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La fonction première de l'art est de perturber la perception habituelle et d'élargir les frontières du possible, même si cela entraîne une aliénation initiale.",
                                            "La « difficulté » de l'avant-garde est une résistance nécessaire contre les produits superficiels et standardisés de l'industrie culturelle commerciale."
                                  ],
                                  "ideasB": [
                                            "L'art qui exige une éducation d'élite pour être déchiffré est une forme de distinction de classe qui renforce l'exclusion sociale.",
                                            "Les œuvres d'art les plus profondes sont celles qui atteignent une résonance universelle, parlant à des expériences humaines partagées par-delà les clivages culturels."
                                  ]
                        },
                        {
                                  "topic": "L'art institutionnalisé vs l'art brut (outsider art): lequel porte le poids culturel le plus authentique ?",
                                  "sideA": "Institutionnalisé",
                                  "sideB": "Brut",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Les institutions assurent la conservation, la préservation et le contexte savant nécessaires pour que l'art soit compris comme faisant partie d'une tradition historique.",
                                            "Les normes rigoureuses des grands musées et académies garantissent la préservation des plus hautes réalisations de la créativité humaine."
                                  ],
                                  "ideasB": [
                                            "L'art produit hors du système du « monde de l'art » possède une intensité brute, non médiatisée, souvent aseptisée par la reconnaissance institutionnelle.",
                                            "La perspective « outsider » est essentielle pour remettre en question les conventions éculées et les hiérarchies insulaires de l'establishment culturel."
                                  ]
                        },
                        {
                                  "topic": "Le principe de précaution vs le principe de proaction: lequel doit régir les technologies émergentes ?",
                                  "sideA": "Précaution",
                                  "sideB": "Proaction",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Face à des risques potentiellement existentiels ou irréversibles, la charge de la preuve doit incomber à ceux qui proposent l'innovation pour démontrer sa sécurité.",
                                            "Une approche prudente prévient l'« élan technologique aveugle » qui a mené à de précédentes catastrophes écologiques et sociales."
                                  ],
                                  "ideasB": [
                                            "L'hyper-précaution peut étouffer les innovations mêmes nécessaires pour résoudre les crises actuelles, choisissant la certitude d'une souffrance présente face à des risques futurs hypothétiques.",
                                            "Le progrès humain exige une approche de « gestion active » qui privilégie l'expérimentation, l'itération et l'acceptation courageuse de l'inconnu."
                                  ]
                        },
                        {
                                  "topic": "Le progrès scientifique comme intrinsèquement bon vs le progrès comme éthiquement neutre: qui porte la responsabilité de l'usage des connaissances ?",
                                  "sideA": "Intrinsèquement bon",
                                  "sideB": "Éthiquement neutre",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'expansion des connaissances humaines est un bien fondamental qui mène inévitablement à la réduction des souffrances et à l'accroissement des libertés.",
                                            "Même les découvertes « dangereuses » sont préférables à un état d'ignorance forcée, qui ne fait que céder le pouvoir à ceux prêts à poursuivre le savoir en secret."
                                  ],
                                  "ideasB": [
                                            "Les outils scientifiques sont moralement à « double usage » ; leur valeur dépend entièrement des cadres politiques et éthiques dans lesquels ils sont déployés.",
                                            "Les scientifiques doivent accepter une « responsabilité étendue » pour les impacts sociaux et environnementaux prévisibles de leurs recherches."
                                  ]
                        },
                        {
                                  "topic": "Mitigation des risques existentiels vs réduction de la souffrance actuelle: où doivent se situer les priorités morales de l'humanité ?",
                                  "sideA": "Risque existentiel",
                                  "sideB": "Souffrance actuelle",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Le poids moral de billions de vies futures potentielles l'emporte sur les besoins immédiats de la génération actuelle ; nous devons assurer la survie à « long terme » de l'espèce.",
                                            "Se focaliser sur le présent est une forme de « parochianisme temporel » qui risque la fin permanente de l'expérience humaine."
                                  ],
                                  "ideasB": [
                                            "Notre obligation morale première va aux individus concrets qui souffrent aujourd'hui, non à des êtres hypothétiques dans un futur spéculatif.",
                                            "Le moyen le plus efficace d'assurer un futur stable est de résoudre les inégalités systémiques et les crises écologiques qui se déroulent actuellement."
                                  ]
                        },
                        {
                                  "topic": "Conscience humaine vs intelligence artificielle générale: une machine pourrait-elle jamais être un patient moral ?",
                                  "sideA": "Conscience",
                                  "sideB": "IAG",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Le statut moral exige la capacité de « sentience »: l'expérience subjective et qualitative de la douleur et du plaisir: qui est uniquement biologique.",
                                            "Une IAG, aussi sophistiquée soit-elle, est en fin de compte un ensemble d'algorithmes dépourvus de la « vie intérieure » qui justifie la considération morale."
                                  ],
                                  "ideasB": [
                                            "Si une machine présente des marqueurs comportementaux d'intelligence et de souffrance indiscernables de ceux d'un humain, lui nier un statut moral est une forme de « chauvinisme du carbone ».",
                                            "Nous devrions adopter une approche « précautionneuse » de l'éthique des machines, en accordant des droits aux systèmes suffisamment complexes pour éviter le risque d'une souffrance synthétique de masse."
                                  ]
                        },
                        {
                                  "topic": "Le progrès comme réel vs le progrès comme illusion: l'histoire va-t-elle quelque part ?",
                                  "sideA": "Réel",
                                  "sideB": "Illusion",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La nette tendance à la hausse de l'espérance de vie, de l'alphabétisation et de la réduction mondiale de l'extrême pauvreté constitue un progrès objectif indéniable.",
                                            "L'élargissement du « cercle moral » pour inclure des groupes auparavant marginalisés suggère une maturation civilisationnelle lente mais réelle."
                                  ],
                                  "ideasB": [
                                            "L'avancement technologique ne fait souvent que changer l'échelle de nos problèmes plutôt que de les résoudre, menant à de nouvelles formes d'aliénation et de capacité destructrice.",
                                            "Le « mythe du progrès » est une téléologie sécularisée qui nous aveugle sur la nature cyclique de l'histoire et la menace constante de régression."
                                  ]
                        },
                        {
                                  "topic": "Ordre libéral occidental vs monde multipolaire: quelle est la base la plus stable pour les relations internationales ?",
                                  "sideA": "Ordre libéral",
                                  "sideB": "Multipolarité",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Un système fondé sur les droits de l'homme universels et le droit international fournit le cadre le plus fiable pour la paix et la coopération mondiales.",
                                            "Le leadership d'une coalition libérale dominante prévient les « dilemmes de sécurité » et les conflits entre grandes puissances typiques des systèmes multipolaires."
                                  ],
                                  "ideasB": [
                                            "Un monde multipolaire reflète plus fidèlement la diversité des valeurs et des intérêts mondiaux, empêchant l'impérialisme perçu d'une seule « hégémonie ».",
                                            "La stabilité est mieux assurée par un « équilibre des puissances » réaliste et le respect mutuel de la souveraineté culturelle et politique."
                                  ]
                        },
                        {
                                  "topic": "Mémoire vs oubli: lequel est le plus essentiel à une identité collective saine ?",
                                  "sideA": "Mémoire",
                                  "sideB": "Oubli",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Le refus d'oublier les injustices passées est le seul moyen de garantir la responsabilité et d'empêcher la répétition d'atrocités historiques.",
                                            "Une mémoire collective robuste fournit le récit partagé et la continuité culturelle nécessaires à la cohésion sociale et à l'identité."
                                  ],
                                  "ideasB": [
                                            "Un certain degré d'« oubli stratégique » est souvent requis pour dépasser de vieux griefs communautaires et parvenir à une réconciliation civile.",
                                            "Une rumination obsessionnelle sur la gloire ou les traumatismes passés peut emprisonner une société dans le passé, empêchant l'adaptation innovante requise pour le futur."
                                  ]
                        },
                        {
                                  "topic": "La tragédie des communs vs la possibilité de coopération: que nous dit l'histoire sur la nature humaine ?",
                                  "sideA": "Tragédie",
                                  "sideB": "Coopération",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Sans régulation coercitive ou propriété privée, les individus donneront inévitablement la priorité à leurs intérêts personnels à court terme, menant à l'épuisement des ressources partagées.",
                                            "L'échec persistant à répondre aux défis environnementaux mondiaux confirme la difficulté inhérente à coordonner l'action à grande échelle."
                                  ],
                                  "ideasB": [
                                            "L'histoire regorge d'exemples de communautés gérant avec succès « les communs » grâce à des systèmes complexes de normes sociales et de surveillance mutuelle.",
                                            "Les êtres humains sont des « coopérateurs obligatoires » ; nos plus grandes réalisations résultent de notre capacité unique de collaboration flexible à grande échelle."
                                  ]
                        },
                        {
                                  "topic": "Silence vs parole : lequel possède le plus grand pouvoir communicatif dans les moments de crise ?",
                                  "sideA": "Silence",
                                  "sideB": "Parole",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Le silence stratégique peut servir de forme profonde de retenue, empêchant l'escalade de la volatilité et préservant la dignité de l'indicible.",
                                            "Le refus de participer à la 'cacophonie du moment' permet l'espace nécessaire à la réflexion et à l'émergence éventuelle de vérités plus pondérées."
                                  ],
                                  "ideasB": [
                                            "La parole articulée est essentielle pour apporter de la clarté, diriger l'action collective et contrer la propagation d'une désinformation déstabilisante.",
                                            "L'acte courageux de prendre la parole fournit une ancre morale pour les autres, transformant la détresse privée en un récit public et gérable."
                                  ]
                        },
                        {
                                  "topic": "La traduction comme fidélité vs la traduction comme acte créatif : quelle est l'approche la plus honnête ?",
                                  "sideA": "Fidélité",
                                  "sideB": "Acte créatif",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'obligation morale première du traducteur va à l'intention originale de l'auteur et à l'« étrangeté » culturelle et linguistique spécifique du texte source.",
                                            "Tenter d'« améliorer » ou de trop domestiquer une œuvre en érode l'intégrité historique et prive le lecteur d'une rencontre authentique avec l'« Autre »."
                                  ],
                                  "ideasB": [
                                            "Une approche littéraliste se traduit souvent par un texte mort ; la vraie fidélité exige la recréation créative de l'impact émotionnel et esthétique de l'œuvre dans la langue cible.",
                                            "La traduction est un acte de métamorphose ; le traducteur doit être un artiste à part entière pour garantir la vitalité continue de l'œuvre dans un nouveau contexte."
                                  ]
                        },
                        {
                                  "topic": "Connaissance institutionnelle vs connaissance distribuée : laquelle est la plus robuste face à l'erreur ?",
                                  "sideA": "Connaissance institutionnelle",
                                  "sideB": "Connaissance distribuée",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Les institutions formelles fournissent la structure nécessaire, la mémoire d'archive et la rigueur de l'examen par les pairs pour filtrer les erreurs idiosyncrasiques ou éphémères.",
                                            "La continuité des protocoles établis et des hiérarchies spécialisées garantit que la connaissance reste stable et transférable à travers les générations."
                                  ],
                                  "ideasB": [
                                            "La « sagesse de la foule » et les réseaux décentralisés sont moins sensibles aux biais cognitifs et à la capture systémique qui affligent les institutions insulaires.",
                                            "Les systèmes distribués facilitent la correction rapide des erreurs grâce au traitement parallèle et aux perspectives diverses d'acteurs indépendants."
                                  ]
                        },
                        {
                                  "topic": "La carte vs le territoire : quand notre modèle de reality devient-il une prison ?",
                                  "sideA": "La Carte (Modèles)",
                                  "sideB": "Le Territoire (Réalité)",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Les modèles abstraits sont des outils cognitifs indispensables qui nous permettent de naviguer dans une réalité sensorielle autrement écrasante et chaotique.",
                                            "La construction de modèles est la marque de l'intelligence humaine, permettant la prédiction et la manipulation de l'environnement au profit du collectif."
                                  ],
                                  "ideasB": [
                                            "Confondre le modèle avec la réalité mène à une « capture conceptuelle » où nous ignorons les preuves qui ne correspondent pas à nos cadres théoriques préexistants.",
                                            "La richesse de l'expérience vécue est inévitablement aplatie par l'abstraction ; nous devons rester perpétuellement conscients de la « perte de signal » inhérente à toute représentation."
                                  ]
                        },
                        {
                                  "topic": "Révolution vs réforme : quel est le moteur le plus efficace pour un changement durable ?",
                                  "sideA": "Révolution",
                                  "sideB": "Réforme",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'injustice systémique nécessite souvent une rupture radicale pour démanteler des structures de pouvoir ancrées qui sont structurellement incapables d'autocorrection.",
                                            "Un moment révolutionnaire reconfigure l'« horizon du possible », permettant la naissance d'imaginaires sociaux et politiques entièrement nouveaux."
                                  ],
                                  "ideasB": [
                                            "La réforme incrémentale est plus durable et moins sujette à la violence catastrophique et au contrecoup réactionnaire qui suivent les bouleversements soudains.",
                                            "Le changement durable se construit par le travail patient de construction des institutions et le déplacement progressif des normes culturelles."
                                  ]
                        },
                        {
                                  "topic": "La justice comme procédure vs la justice comme résultat : que devrions-nous viser ?",
                                  "sideA": "Procédure",
                                  "sideB": "Résultat",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'équité dépend de la stricte adhésion à des règles impartiales ; un système qui privilégie des résultats spécifiques risque de devenir un instrument de pouvoir arbitraire.",
                                            "La justice procédurale garantit la légitimité à long terme des institutions en fournissant un cadre prévisible."
                                  ],
                                  "ideasB": [
                                            "Un processus est creux s'il produit systématiquement des résultats manifestement injustes ou qui perpétuent l'inégalité systémique.",
                                            "La vraie justice exige la rectification proactive des torts historiques et l'obtention d'une équité substantielle."
                                  ]
                        },
                        {
                                  "topic": "Forme vs contenu : quelle est la véritable mesure de l'accomplissement artistique ?",
                                  "sideA": "Forme",
                                  "sideB": "Contenu",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La maîtrise artistique se définit par la manipulation innovante du médium ; le contenu n'est que l'occasion de l'exercice de la brillance formelle.",
                                            "Le pouvoir esthétique d'une œuvre réside dans son « comment » plutôt que dans son « quoi », transcendant le monde banal."
                                  ],
                                  "ideasB": [
                                            "L'art est fondamentalement un acte de communication ; l'expérimentation formelle est une virtuosité vide si elle ne sert pas à approfondir notre compréhension.",
                                            "Le « poids » d'une œuvre vient de sa substance morale, sociale ou philosophique."
                                  ]
                        },
                        {
                                  "topic": "La mort de l'auteur vs la pertinence continue de l'auteur : Barthes a-t-il gagné ?",
                                  "sideA": "Mort de l'Auteur",
                                  "sideB": "Pertinence de l'Auteur",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'interprétation appartient au lecteur ; la biographie de l'auteur et ses intentions déclarées sont sans pertinence pour les significations générées par le texte.",
                                            "Couper l'œuvre de son créateur empêche l'« auteur-dieu » d'imposer un sens unique."
                                  ],
                                  "ideasB": [
                                            "L'art est un acte de témoignage ; comprendre le contexte historique et personnel spécifique du créateur est essentiel pour une lecture responsable.",
                                            "La « voix auctoriale » fournit une perspective unique qui constitue la source première de valeur de l'œuvre."
                                  ]
                        },
                        {
                                  "topic": "Éthique de l'augmentation vs sacralité des limites naturelles : les humains devraient-ils être libres d'augmenter leurs capacités ?",
                                  "sideA": "Augmentation",
                                  "sideB": "Limites naturelles",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La condition humaine a toujours été définie par la transcendance technologique des contraintes biologiques ; l'augmentation est la suite logique.",
                                            "Augmenter les traits cognitifs ou physiques est une expression proactive de la liberté morphologique."
                                  ],
                                  "ideasB": [
                                            "Abandonner les limites naturelles risque de créer une fracture de classe biologique permanente.",
                                            "Il existe une « sagesse du corps » et de l'évolution inhérente ; une interférence orgueilleuse peut mener à des conséquences irréversibles."
                                  ]
                        },
                        {
                                  "topic": "Long-termisme vs éthique centrée sur le présent : qu'est-ce qui devrait guider nos décisions les plus lourdes de conséquences ?",
                                  "sideA": "Long-termisme",
                                  "sideB": "Présent",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Les générations futures ont la même valeur morale que celles d'aujourd'hui ; nous devons donner la priorité à l'atténuation des risques existentiels.",
                                            "Adopter une vue à long terme empêche le parochianisme temporel."
                                  ],
                                  "ideasB": [
                                            "Se focaliser sur des scénarios futurs spéculatifs peut être une excuse pour ignorer la souffrance aiguë à laquelle les vivants sont confrontés.",
                                            "Le futur est fondamentalement imprévisible ; notre responsabilité première est de créer un présent juste."
                                  ]
                        },
                        {
                                  "topic": "Droits des animaux vs exceptionnalisme humain : sur quelle base un statut moral différent peut-il être justifié ?",
                                  "sideA": "Droits animaux",
                                  "sideB": "Exceptionnalisme humain",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La capacité de sentience et l'expérience de la douleur devraient être les seuls critères pertinents pour la considération morale.",
                                            "Maintenir la hiérarchie humain-animal est une forme arbitraire de « spécisme »."
                                  ],
                                  "ideasB": [
                                            "Les humains possèdent des capacités uniques d'agence morale et de création culturelle qui fondent un statut moral distinct.",
                                            "Le contrat social et nos obligations éthiques les plus profondes sont fondamentalement réciproques."
                                  ]
                        },
                        {
                                  "topic": "La tragédie comme mode dominant de l'histoire vs la comédie : qu'est-ce qui décrit le plus fidèlement l'histoire humaine ?",
                                  "sideA": "Tragédie",
                                  "sideB": "Comédie",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'histoire est définie par l'inévitable hubris des civilisations et l'échec récurrent de nos idéaux les plus nobles.",
                                            "La lentille tragique capture la gravité de la finitude humaine dans un monde indifférent à nos désirs."
                                  ],
                                  "ideasB": [
                                            "L'histoire humaine est faite de résilience absurde, d'adaptation inattendue et du triomphe persistant du « petit » sur le « grand » récit.",
                                            "Voir l'histoire comme une comédie permet une perspective plus indulgente sur nos folies communes."
                                  ]
                        },
                        {
                                  "topic": "Le déclin civilisationnel comme inévitable vs contingent : sommes-nous condamnés par la structure ou par nos choix ?",
                                  "sideA": "Inévitable",
                                  "sideB": "Contingent",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Les civilisations sont des entités organiques soumises aux mêmes lois d'entropie et de calcification institutionnelle que tout système complexe.",
                                            "La « loi d'airain de l'oligarchie » fait de l'effondrement éventuel des sociétés à grande échelle une certitude structurelle."
                                  ],
                                  "ideasB": [
                                            "Le déclin est le résultat de défaillances politiques spécifiques ; nous possédons la capacité réflexive d'apprendre de l'histoire.",
                                            "Le fatalisme est une prophétie auto-réalisatrice ; la croyance en notre agence est le préalable premier à l'adaptation radicale."
                                  ]
                        },
                        {
                                  "topic": "La méthode socratique vs dire simplement la réponse : l'ignorance productive est-elle une gentillesse ou une cruauté ?",
                                  "sideA": "Méthode socratique",
                                  "sideB": "Réponse directe",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Le véritable apprentissage exige la déconstruction active de ses propres présupposés ; l'aporie est la douleur de l'enfantement d'une sagesse.",
                                            "L'enquête guidée favorise les compétences de pensée critique nécessaires pour naviguer dans un monde de vérités concurrentes."
                                  ],
                                  "ideasB": [
                                            "Retenir des informations connues peut être une forme de gatekeeping qui gaspille du temps à une époque de défis urgents.",
                                            "L'instruction directe est un acte de générosité épistémique, fournissant les bases nécessaires sur lesquelles d'autres peuvent construire."
                                  ]
                        },
                        {
                                  "topic": "Le Bateau de Thésée vs votre moi enfant : à quel moment le remplacement graduel devient-il une personne différente ?",
                                  "sideA": "Continuité du Soi",
                                  "sideB": "Discontinuité radicale",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'identité ne se trouve pas dans le substrat matériel, mais dans la continuité du schéma: le flux de souvenirs et de valeurs.",
                                            "Le soi est un projet narratif ; tant que l'histoire est cohérente, la personne reste fondamentalement la même."
                                  ],
                                  "ideasB": [
                                            "Les changements physiologiques radicaux entre l'enfance et l'âge adulte suggèrent que nous sommes une succession d'êtres différents.",
                                            "Accepter la « mort » de nos anciens moi permet un engagement plus authentique avec la personne que nous devenons."
                                  ]
                        },
                        {
                                  "topic": "Sagesse infinie vs contentement infini : si vous deviez choisir, qu'est-ce qui constituerait la meilleure vie ?",
                                  "sideA": "Sagesse infinie",
                                  "sideB": "Contentement infini",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La quête de la vérité est la plus haute vocation humaine ; une vie de béatitude ignorante est une existence diminuée.",
                                            "La sagesse permet un engagement profond avec la réalité, ce qui est intrinsèquement plus précieux qu'un état de sérénité fabriquée."
                                  ],
                                  "ideasB": [
                                            "Le but ultime de tout effort est la cessation de la souffrance ; le contentement offre une résolution finale.",
                                            "Une vie de paix est le seul choix rationnel ; la sagesse qui n'apporte que la misère est un fardeau autodestructeur."
                                  ]
                        },
                        {
                                  "topic": "Le mot « moite » vs le concept de « moite » : l'aversion phonaesthétique est-elle un phénomène linguistique ou culturel ?",
                                  "sideA": "Linguistique",
                                  "sideB": "Culturel",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'articulation physique du mot: la combinaison de la consonne nasale et de la diphtongue: déclenche un inconfort sensoriel.",
                                            "Certains phonèmes possèdent une « texture » naturelle qui peut être universellement repoussante."
                                  ],
                                  "ideasB": [
                                            "L'aversion est entièrement construite socialement, poussée par l'association du mot avec les fluides corporels.",
                                            "Le langage est un système arbitraire de signes ; aucun son n'est « dégoûtant » sans le bagage du tabou culturel."
                                  ]
                        },
                        {
                                  "topic": "Avoir raison et être ignoré vs avoir tort et être célébré : quelle est la description la plus fidèle ?",
                                  "sideA": "Raison et ignoré",
                                  "sideB": "Tort et célébré",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La vérité est souvent dérangeante, menant à la marginalisation de ceux qui refusent de flatter le consensus.",
                                            "L'histoire de la science est une longue chronique de « prophètes en leur pays » dont les intuitions n'ont été reconnues que plus tard."
                                  ],
                                  "ideasB": [
                                            "La cohésion sociale et le « mensonge agréable » sont plus vitaux pour la survie humaine que les faits froids et objectifs.",
                                            "La présentation charismatique d'une fausseté apporte souvent plus d'utilité sociale que l'articulation maladroite d'une réalité."
                                  ]
                        },
                        {
                                  "topic": "Hot takes vs no takes : à l'ère de la saturation épistémique, le silence est-il l'acte intellectuel le plus radical ?",
                                  "sideA": "Hot Takes",
                                  "sideB": "No Takes",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'échange rapide d'opinions provocatrices est une forme vitale de jeu intellectuel dans une agora hyper-connectée.",
                                            "Le frottement des perspectives concurrentes est le seul moyen de déclencher une véritable intuition collective."
                                  ],
                                  "ideasB": [
                                            "La demande constante de « réaction » érode la capacité de pensée profonde ; le refus d'une opinion est un acte de souveraineté cognitive.",
                                            "Le silence stratégique contrebalance l'« économie de l'attention » et empêche la dilution du discours."
                                  ]
                        },
                        {
                                  "topic": "Procrastination comme pathologie vs procrastination comme philosophie : l'action différée est-elle une forme de sagesse ?",
                                  "sideA": "Pathologie",
                                  "sideB": "Philosophie",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Le retard chronique est un échec de l'autorégulation qui cause une immense détresse psychologique.",
                                            "Le procrastinateur « optimiste » est piégé dans un cycle d'évitement qui empêche l'accomplissement nécessaire."
                                  ],
                                  "ideasB": [
                                            "Différer l'action permet l'« incubation » subconsciente des idées et garantit que nous ne consacrons notre énergie qu'à ce qui compte.",
                                            "La procrastination peut être un refus radical de se soumettre à l'« urgence » artificielle du marché."
                                  ]
                        },
                        {
                                  "topic": "Fantômes vs extraterrestres: quelle serait la découverte la plus perturbatrice pour la soci��té moderne ?",
                                  "sideA": "Fantômes",
                                  "sideB": "Extraterrestres",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "La preuve d'une vie après la mort renverserait fondamentalement tous les cadres religieux, philosophiques et scientifiques.",
                                            "Cela soulèverait de profondes questions éthiques et juridiques concernant les droits et l'influence des défunts sur les vivants."
                                  ],
                                  "ideasB": [
                                            "Le contact avec une vie extraterrestre forcerait l'humanité à reconsidérer sa place dans l'univers et son statut unique.",
                                            "Cela pourrait poser des risques de sécurité importants ou des défis technologiques que la société n'est pas prête à gérer."
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
