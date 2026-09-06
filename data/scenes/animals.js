/**
 * games/data/scenes/animals.js
 * Unit 14.3 — Farm Animals scene dataset for Scene Match activity.
 */
(function() {
    'use strict';

    if (!window.COSY_SCENE_DATA) {
        window.COSY_SCENE_DATA = {};
    }

    window.COSY_SCENE_DATA.animals = {
        id: 'animals',
        level: 'A1',
        title: {
            en: 'Farm Animals',
            fr: 'Animaux de la ferme',
            it: 'Animali della fattoria',
            ru: 'Фермерские животные',
            el: 'Ζώα της φάρμας'
        },
        viewBox: '0 0 800 500',
        doors: [
            {
                targetSceneId: "park_nature",
                x: 15, y: 140, width: 35, height: 230, labelX: 32, labelY: 125,
                labels: { en: "🚪 Park →", fr: "🚪 Parc →", it: "🚪 Parco →", ru: "🚪 Парк →", el: "🚪 Πάρκο →" }
            },
            {
                targetSceneId: "city",
                x: 745, y: 140, width: 35, height: 230, labelX: 762, labelY: 125,
                labels: { en: "🚪 City →", fr: "🚪 Ville →", it: "🚪 Città →", ru: "🚪 Город →", el: "🚪 Πόλη →" }
            }
        ],
        hotspots: [
            {
                id: 'cow',
                x: 40,
                y: 220,
                width: 170,
                height: 140,
                labelX: 125,
                labelY: 200,
                words: {
                    en: 'Cow',
                    fr: 'Vache',
                    it: 'Mucca',
                    ru: 'Корова',
                    el: 'Αγελάδα'
                }
            },
            {
                id: 'horse',
                x: 230,
                y: 200,
                width: 160,
                height: 160,
                labelX: 310,
                labelY: 180,
                words: {
                    en: 'Horse',
                    fr: 'Cheval',
                    it: 'Cavallo',
                    ru: 'Лошадь',
                    el: 'Άλογο'
                }
            },
            {
                id: 'sheep',
                x: 420,
                y: 270,
                width: 120,
                height: 100,
                labelX: 480,
                labelY: 250,
                words: {
                    en: 'Sheep',
                    fr: 'Mouton',
                    it: 'Pecora',
                    ru: 'Овца',
                    el: 'Πρόβατο'
                }
            },
            {
                id: 'pig',
                x: 560,
                y: 290,
                width: 110,
                height: 80,
                labelX: 615,
                labelY: 270,
                words: {
                    en: 'Pig',
                    fr: 'Cochon',
                    it: 'Maiale',
                    ru: 'Свинья',
                    el: 'Γούρουνος'
                }
            },
            {
                id: 'dog',
                x: 680,
                y: 310,
                width: 80,
                height: 80,
                labelX: 720,
                labelY: 290,
                words: {
                    en: 'Dog',
                    fr: 'Chien',
                    it: 'Cane',
                    ru: 'Собака',
                    el: 'Σκύλος'
                }
            },
            {
                id: 'cat',
                x: 620,
                y: 200,
                width: 70,
                height: 70,
                labelX: 655,
                labelY: 180,
                words: {
                    en: 'Cat',
                    fr: 'Chat',
                    it: 'Gatto',
                    ru: 'Кошка',
                    el: 'Γάτα'
                }
            },
            {
                id: 'duck',
                x: 180,
                y: 390,
                width: 80,
                height: 60,
                labelX: 220,
                labelY: 370,
                words: {
                    en: 'Duck',
                    fr: 'Canard',
                    it: 'Anatra',
                    ru: 'Утка',
                    el: 'Πάπια'
                }
            },
            {
                id: 'bird',
                x: 480,
                y: 100,
                width: 60,
                height: 50,
                labelX: 510,
                labelY: 80,
                words: {
                    en: 'Bird',
                    fr: 'Oiseau',
                    it: 'Uccello',
                    ru: 'Птица',
                    el: 'Πουλί'
                }
            }
        ],
        svgBackground: `
            <defs>
                <linearGradient id="an-sky" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#bae6fd"/>
                    <stop offset="100%" stop-color="#e0f2fe"/>
                </linearGradient>
                <linearGradient id="an-grass" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#4ade80"/>
                    <stop offset="100%" stop-color="#15803d"/>
                </linearGradient>
            </defs>

            <!-- Sky & Grass -->
            <rect x="0" y="0" width="800" height="240" fill="url(#an-sky)"/>
            <rect x="0" y="240" width="800" height="260" fill="url(#an-grass)"/>

            <!-- Barn in Background -->
            <polygon points="450,140 550,70 650,140" fill="#dc2626"/>
            <rect x="460" y="140" width="180" height="100" fill="#b91c1c"/>
            <rect x="520" y="170" width="60" height="70" fill="#78350f"/>

            <!-- Pond for Duck -->
            <ellipse cx="220" cy="420" rx="90" ry="35" fill="#38bdf8"/>

            <!-- Animals Artwork -->
            <!-- Cow -->
            <ellipse cx="125" cy="300" rx="65" ry="40" fill="#ffffff" stroke="#000" stroke-width="2"/>
            <circle cx="70" cy="270" r="25" fill="#ffffff" stroke="#000" stroke-width="2"/>
            <circle cx="110" cy="290" r="15" fill="#000000"/>
            <circle cx="150" cy="310" r="18" fill="#000000"/>

            <!-- Horse -->
            <ellipse cx="310" cy="290" rx="60" ry="45" fill="#b45309"/>
            <circle cx="260" cy="240" r="22" fill="#b45309"/>

            <!-- Sheep -->
            <circle cx="480" cy="320" r="35" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>
            <circle cx="445" cy="305" r="15" fill="#334155"/>

            <!-- Pig -->
            <ellipse cx="615" cy="330" rx="45" ry="28" fill="#f472b6"/>
            <circle cx="575" cy="320" r="16" fill="#f472b6"/>
            <circle cx="570" cy="322" r="5" fill="#ec4899"/>

            <!-- Dog -->
            <ellipse cx="720" cy="350" rx="30" ry="20" fill="#f97316"/>
            <circle cx="695" cy="335" r="12" fill="#f97316"/>

            <!-- Cat -->
            <circle cx="655" cy="235" r="18" fill="#64748b"/>
            <polygon points="642,222 650,210 655,225" fill="#64748b"/>
            <polygon points="655,225 660,210 668,222" fill="#64748b"/>

            <!-- Duck -->
            <ellipse cx="220" cy="415" rx="22" ry="14" fill="#fde047"/>
            <circle cx="205" cy="405" r="10" fill="#fde047"/>
            <polygon points="195,405 188,407 195,410" fill="#f97316"/>

            <!-- Bird -->
            <path d="M 490 120 Q 510 100 530 120" stroke="#1e293b" stroke-width="3" fill="none"/>
        `
    };
})();
