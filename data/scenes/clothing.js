/**
 * games/data/scenes/clothing.js
 * Unit 4 — Clothing & Wardrobe scene dataset for Scene Match activity.
 */
(function() {
    'use strict';

    if (!window.COSY_SCENE_DATA) {
        window.COSY_SCENE_DATA = {};
    }

    window.COSY_SCENE_DATA.clothing = {
        id: 'clothing',
        level: 'A1',
        title: {
            en: 'Wardrobe & Clothing',
            fr: 'Garde-robe',
            it: 'Guardaroba',
            ru: 'Гардероб и одежда',
            el: 'Ντουλάπα & Ρούχα'
        },
        viewBox: '0 0 800 500',
        doors: [
            {
                targetSceneId: "city",
                x: 15, y: 140, width: 35, height: 230, labelX: 32, labelY: 125,
                labels: { en: "🚪 City →", fr: "🚪 Ville →", it: "🚪 Città →", ru: "🚪 Город →", el: "🚪 Πόλη →" }
            }
        ],
        hotspots: [
            {
                id: 'shirt',
                x: 100,
                y: 120,
                width: 90,
                height: 110,
                labelX: 145,
                labelY: 100,
                words: {
                    en: 'Shirt',
                    fr: 'Chemise',
                    it: 'Camicia',
                    ru: 'Рубашка',
                    el: 'Πουκάμισο'
                }
            },
            {
                id: 'jacket',
                x: 230,
                y: 110,
                width: 100,
                height: 140,
                labelX: 280,
                labelY: 90,
                words: {
                    en: 'Jacket',
                    fr: 'Veste',
                    it: 'Giacca',
                    ru: 'Куртка',
                    el: 'Σακάκι'
                }
            },
            {
                id: 'dress',
                x: 370,
                y: 110,
                width: 100,
                height: 190,
                labelX: 420,
                labelY: 90,
                words: {
                    en: 'Dress',
                    fr: 'Robe',
                    it: 'Vestito',
                    ru: 'Платье',
                    el: 'Φόρεμα'
                }
            },
            {
                id: 'trousers',
                x: 510,
                y: 120,
                width: 90,
                height: 170,
                labelX: 555,
                labelY: 100,
                words: {
                    en: 'Trousers',
                    fr: 'Pantalon',
                    it: 'Pantaloni',
                    ru: 'Брюки',
                    el: 'Παντελόνι'
                }
            },
            {
                id: 'skirt',
                x: 640,
                y: 140,
                width: 90,
                height: 120,
                labelX: 685,
                labelY: 120,
                words: {
                    en: 'Skirt',
                    fr: 'Jupe',
                    it: 'Gonna',
                    ru: 'Юбка',
                    el: 'Φούστα'
                }
            },
            {
                id: 'shoes',
                x: 120,
                y: 350,
                width: 120,
                height: 70,
                labelX: 180,
                labelY: 330,
                words: {
                    en: 'Shoes',
                    fr: 'Chaussures',
                    it: 'Scarpe',
                    ru: 'Обувь',
                    el: 'Παπούτσια'
                }
            },
            {
                id: 'socks',
                x: 320,
                y: 360,
                width: 90,
                height: 60,
                labelX: 365,
                labelY: 340,
                words: {
                    en: 'Socks',
                    fr: 'Chaussettes',
                    it: 'Calze',
                    ru: 'Носки',
                    el: 'Κάλτσες'
                }
            },
            {
                id: 'hat',
                x: 520,
                y: 340,
                width: 110,
                height: 80,
                labelX: 575,
                labelY: 320,
                words: {
                    en: 'Hat',
                    fr: 'Chapeau',
                    it: 'Cappello',
                    ru: 'Шляпа',
                    el: 'Καπέλο'
                }
            }
        ],
        svgBackground: `
            <defs>
                <linearGradient id="cl-bg" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#fdf4ff"/>
                    <stop offset="100%" stop-color="#fae8ff"/>
                </linearGradient>
            </defs>

            <rect x="0" y="0" width="800" height="500" fill="url(#cl-bg)"/>

            <!-- Wardrobe Outer Frame -->
            <rect x="50" y="40" width="700" height="420" fill="#78350f" rx="16"/>
            <rect x="65" y="55" width="670" height="390" fill="#fef3c7" rx="8"/>

            <!-- Rail & Hangers -->
            <line x1="80" y1="90" x2="720" y2="90" stroke="#94a3b8" stroke-width="8"/>

            <!-- Shirt -->
            <path d="M 105 125 L 185 125 L 175 220 L 115 220 Z" fill="#3b82f6" rx="4"/>
            <!-- Jacket -->
            <path d="M 235 115 L 325 115 L 320 245 L 240 245 Z" fill="#991b1b" rx="4"/>
            <!-- Dress -->
            <path d="M 395 115 L 445 115 L 465 295 L 375 295 Z" fill="#ec4899" rx="4"/>
            <!-- Trousers -->
            <rect x="525" y="125" width="28" height="160" fill="#1e3a8a"/>
            <rect x="557" y="125" width="28" height="160" fill="#1e3a8a"/>
            <!-- Skirt -->
            <path d="M 660 145 L 710 145 L 725 255 L 645 255 Z" fill="#a855f7"/>

            <!-- Shoe Shelf -->
            <rect x="80" y="320" width="640" height="12" fill="#78350f" rx="2"/>

            <!-- Shoes -->
            <rect x="130" y="370" width="45" height="25" fill="#1e293b" rx="6"/>
            <rect x="180" y="370" width="45" height="25" fill="#1e293b" rx="6"/>
            <!-- Socks -->
            <rect x="330" y="370" width="20" height="40" fill="#38bdf8" rx="4"/>
            <rect x="360" y="370" width="20" height="40" fill="#38bdf8" rx="4"/>
            <!-- Hat -->
            <ellipse cx="575" cy="380" rx="45" ry="12" fill="#d97706"/>
            <path d="M 545 380 Q 575 320 605 380 Z" fill="#b45309"/>
        `
    };
})();
