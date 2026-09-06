/**
 * games/data/scenes/bathroom.js
 * Unit 6.5 — Bathroom & Personal Hygiene scene dataset for Scene Match activity.
 */
(function() {
    'use strict';

    if (!window.COSY_SCENE_DATA) {
        window.COSY_SCENE_DATA = {};
    }

    window.COSY_SCENE_DATA.bathroom = {
        id: 'bathroom',
        level: 'A1',
        title: {
            en: 'Bathroom',
            fr: 'Salle de bain',
            it: 'Bagno',
            ru: 'Ванная комната',
            el: 'Μπάνιο'
        },
        viewBox: '0 0 800 500',
        doors: [
            {
                targetSceneId: "routine_calendar",
                x: 198, y: 38, width: 44, height: 44, labelX: 220, labelY: 28,
                labels: { en: "⏰ Clock / Routine →", fr: "⏰ Horloge / Routine →", it: "⏰ Orologio / Routine →", ru: "⏰ Часы / Распорядок →", el: "⏰ Ρολόι / Ρουτίνα →" }
            },
            {
                targetSceneId: 'apartment',
                x: 710,
                y: 120,
                width: 70,
                height: 310,
                labelX: 745,
                labelY: 100,
                labels: {
                    en: 'Living Room',
                    fr: 'Salon',
                    it: 'Soggiorno',
                    ru: 'Гостиная',
                    el: 'Σαλόνι'
                }
            },
            {
                targetSceneId: 'bedroom',
                x: 610,
                y: 120,
                width: 70,
                height: 310,
                labelX: 645,
                labelY: 100,
                labels: {
                    en: 'Bedroom',
                    fr: 'Chambre',
                    it: 'Camera',
                    ru: 'Спальня',
                    el: 'Υπνοδωμάτιο'
                }
            },
            {
                targetSceneId: 'kitchen',
                x: 510,
                y: 120,
                width: 70,
                height: 310,
                labelX: 545,
                labelY: 100,
                labels: {
                    en: 'Kitchen',
                    fr: 'Cuisine',
                    it: 'Cucina',
                    ru: 'Кухня',
                    el: 'Κουζίνα'
                }
            }
        ],
        hotspots: [
            {
                id: 'bathtub',
                x: 40,
                y: 280,
                width: 200,
                height: 120,
                labelX: 140,
                labelY: 260,
                words: {
                    en: 'Bathtub',
                    fr: 'Baignoire',
                    it: 'Vasca da bagno',
                    ru: 'Ванна',
                    el: 'Μπανιέρα'
                }
            },
            {
                id: 'shower',
                x: 260,
                y: 120,
                width: 130,
                height: 280,
                labelX: 325,
                labelY: 100,
                words: {
                    en: 'Shower',
                    fr: 'Douche',
                    it: 'Doccia',
                    ru: 'Душ',
                    el: 'Ντους'
                }
            },
            {
                id: 'sink',
                x: 420,
                y: 240,
                width: 120,
                height: 140,
                labelX: 480,
                labelY: 220,
                words: {
                    en: 'Sink',
                    fr: 'Lavabo',
                    it: 'Lavandino',
                    ru: 'Раковина',
                    el: 'Νιπτήρας'
                }
            },
            {
                id: 'toilet',
                x: 570,
                y: 240,
                width: 110,
                height: 160,
                labelX: 625,
                labelY: 220,
                words: {
                    en: 'Toilet',
                    fr: 'Toilettes',
                    it: 'Gabinetto',
                    ru: 'Туалет',
                    el: 'Τουαλέτα'
                }
            },
            {
                id: 'mirror',
                x: 435,
                y: 110,
                width: 90,
                height: 110,
                labelX: 480,
                labelY: 90,
                words: {
                    en: 'Mirror',
                    fr: 'Miroir',
                    it: 'Specchio',
                    ru: 'Зеркало',
                    el: 'Καθρέφτης'
                }
            },
            {
                id: 'towel',
                x: 15,
                y: 130,
                width: 60,
                height: 120,
                labelX: 45,
                labelY: 110,
                words: {
                    en: 'Towel',
                    fr: 'Serviette',
                    it: 'Asciugamano',
                    ru: 'Полотенце',
                    el: 'Πετσέτα'
                }
            },
            {
                id: 'soap',
                x: 435,
                y: 275,
                width: 35,
                height: 25,
                labelX: 450,
                labelY: 315,
                words: {
                    en: 'Soap',
                    fr: 'Savon',
                    it: 'Sapone',
                    ru: 'Мыло',
                    el: 'Σαπούνι'
                }
            },
            {
                id: 'toothbrush',
                x: 485,
                y: 265,
                width: 30,
                height: 35,
                labelX: 500,
                labelY: 315,
                words: {
                    en: 'Toothbrush',
                    fr: 'Brosse à dents',
                    it: 'Spazzolino da denti',
                    ru: 'Зубная щетка',
                    el: 'Οδοντόβουρτσα'
                }
            },
            {
                id: 'hairdryer',
                x: 520,
                y: 180,
                width: 45,
                height: 45,
                labelX: 540,
                labelY: 160,
                words: {
                    en: 'Hairdryer',
                    fr: 'Sèche-cheveux',
                    it: 'Asciugacapelli',
                    ru: 'Фен',
                    el: 'Πιστολάκι μαλλιών'
                }
            }
        ],
        svgBackground: `
            <defs>
                <!-- Gradients -->
                <linearGradient id="br-wall" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#ccfbf1"/>
                    <stop offset="100%" stop-color="#99f6e4"/>
                </linearGradient>
                <linearGradient id="br-floor" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#e2e8f0"/>
                    <stop offset="100%" stop-color="#cbd5e1"/>
                </linearGradient>
                <linearGradient id="br-tub" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ffffff"/>
                    <stop offset="100%" stop-color="#f1f5f9"/>
                </linearGradient>
                <linearGradient id="br-water" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.6"/>
                    <stop offset="100%" stop-color="#0284c7" stop-opacity="0.8"/>
                </linearGradient>
                <linearGradient id="br-glass" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#bae6fd" stop-opacity="0.4"/>
                    <stop offset="100%" stop-color="#7dd3fc" stop-opacity="0.2"/>
                </linearGradient>
                <linearGradient id="br-mirror" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#e0f2fe"/>
                    <stop offset="100%" stop-color="#7dd3fc"/>
                </linearGradient>

                <!-- Tile Pattern -->
                <pattern id="br-tiles" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#5eead4" stroke-width="1" stroke-opacity="0.4"/>
                </pattern>
                <pattern id="br-floor-tiles" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-opacity="0.5"/>
                </pattern>
            </defs>

            <!-- Wall Clock (Link to Routine & Calendar Hub) -->
            <g id="illustration-clock">
              <circle cx="220" cy="60" r="20" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
              <line x1="220" y1="60" x2="220" y2="48" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
              <line x1="220" y1="60" x2="230" y2="60" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
              <circle cx="220" cy="60" r="3" fill="#ef4444"/>
            </g>

            <!-- Wall with Tiles -->
            <rect x="0" y="0" width="800" height="390" fill="url(#br-wall)"/>
            <rect x="0" y="0" width="800" height="390" fill="url(#br-tiles)"/>

            <!-- Floor -->
            <rect x="0" y="390" width="800" height="110" fill="url(#br-floor)"/>
            <rect x="0" y="390" width="800" height="110" fill="url(#br-floor-tiles)"/>
            <line x1="0" y1="390" x2="800" y2="390" stroke="#0f766e" stroke-width="4"/>

            <!-- Door Frame to Living Room -->
            <rect x="705" y="115" width="80" height="320" fill="#78350f" rx="4"/>
            <rect x="712" y="122" width="66" height="306" fill="#b45309"/>
            <circle cx="722" cy="270" r="5" fill="#fef08a"/>

            <!-- Towel Rail & Towel -->
            <rect x="10" y="125" width="70" height="8" fill="#94a3b8" rx="2"/>
            <path d="M 20 133 Q 35 140 50 133 L 65 245 C 65 250, 20 250, 20 245 Z" fill="#f43f5e"/>
            <!-- Towel stripes -->
            <line x1="20" y1="230" x2="65" y2="230" stroke="#ffffff" stroke-width="3"/>
            <line x1="20" y1="238" x2="65" y2="238" stroke="#ffffff" stroke-width="2"/>

            <!-- Bathtub -->
            <!-- Feet -->
            <rect x="55" y="390" width="15" height="12" fill="#d97706" rx="2"/>
            <rect x="205" y="390" width="15" height="12" fill="#d97706" rx="2"/>
            <!-- Outer Tub Body -->
            <path d="M 40 290 Q 40 400 65 400 L 215 400 Q 240 400 240 290 Z" fill="url(#br-tub)" stroke="#cbd5e1" stroke-width="3"/>
            <ellipse cx="140" cy="290" rx="100" ry="20" fill="#ffffff" stroke="#cbd5e1" stroke-width="3"/>
            <!-- Tub Water inside -->
            <ellipse cx="140" cy="298" rx="88" ry="12" fill="url(#br-water)"/>
            <!-- Faucet & Knobs -->
            <rect x="45" y="260" width="12" height="30" fill="#94a3b8" rx="2"/>
            <path d="M 45 260 Q 65 250 65 270" stroke="#64748b" stroke-width="4" fill="none"/>

            <!-- Shower Enclosure -->
            <rect x="260" y="120" width="130" height="270" fill="url(#br-glass)" stroke="#38bdf8" stroke-width="3" rx="4"/>
            <!-- Shower Tray Base -->
            <rect x="260" y="380" width="130" height="15" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
            <!-- Shower Head & Pipe -->
            <path d="M 325 120 L 325 145 Q 325 155 310 155" stroke="#94a3b8" stroke-width="5" fill="none"/>
            <ellipse cx="305" cy="158" rx="12" ry="4" fill="#64748b"/>
            <!-- Water streams from shower -->
            <line x1="300" y1="162" x2="295" y2="240" stroke="#38bdf8" stroke-dasharray="8 6" stroke-width="1.5" opacity="0.7"/>
            <line x1="305" y1="162" x2="305" y2="250" stroke="#38bdf8" stroke-dasharray="8 6" stroke-width="1.5" opacity="0.7"/>
            <line x1="310" y1="162" x2="315" y2="240" stroke="#38bdf8" stroke-dasharray="8 6" stroke-width="1.5" opacity="0.7"/>

            <!-- Mirror -->
            <ellipse cx="480" cy="165" rx="42" ry="52" fill="#78350f"/>
            <ellipse cx="480" cy="165" rx="38" ry="48" fill="url(#br-mirror)" stroke="#38bdf8" stroke-width="2"/>
            <!-- Mirror shine reflection -->
            <path d="M 460 130 Q 490 140 470 190" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.6"/>

            <!-- Sink / Basin Countertop -->
            <rect x="420" y="270" width="120" height="110" fill="#0284c7" rx="8"/>
            <rect x="415" y="260" width="130" height="15" fill="#f8fafc" rx="4" stroke="#cbd5e1"/>
            <ellipse cx="480" cy="265" rx="35" ry="10" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
            <ellipse cx="480" cy="266" rx="25" ry="6" fill="#cbd5e1"/>
            <!-- Faucet -->
            <path d="M 480 240 Q 480 252 480 256" stroke="#94a3b8" stroke-width="6" fill="none"/>

            <!-- Soap Dish & Soap -->
            <ellipse cx="452" cy="285" rx="14" ry="6" fill="#e2e8f0"/>
            <rect x="442" y="278" width="20" height="10" fill="#f472b6" rx="4"/>

            <!-- Toothbrush Holder & Toothbrush -->
            <rect x="492" y="270" width="16" height="22" fill="#38bdf8" rx="3"/>
            <rect x="498" y="250" width="4" height="24" fill="#a855f7" rx="1"/>
            <rect x="497" y="247" width="6" height="7" fill="#ffffff" rx="1"/>

            <!-- Hairdryer on Hook -->
            <path d="M 530 185 Q 545 180 555 190 L 545 200 Z" fill="#1e293b"/>
            <rect x="525" y="195" width="10" height="22" fill="#334155" rx="2"/>

            <!-- Toilet -->
            <!-- Tank -->
            <rect x="580" y="240" width="80" height="70" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="6"/>
            <!-- Tank flush button -->
            <circle cx="620" cy="250" r="4" fill="#94a3b8"/>
            <!-- Bowl -->
            <path d="M 585 310 L 655 310 Q 655 385 620 385 Q 585 385 585 310 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
            <!-- Seat lid -->
            <ellipse cx="620" cy="310" rx="36" ry="10" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
            <!-- Base stem -->
            <rect x="605" y="380" width="30" height="20" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
        `
    };
})();
