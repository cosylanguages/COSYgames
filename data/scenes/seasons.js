/**
 * games/data/scenes/seasons.js
 * Unit 10.3 — Four Seasons scene dataset for Scene Match activity.
 */
(function() {
    'use strict';

    if (!window.COSY_SCENE_DATA) {
        window.COSY_SCENE_DATA = {};
    }

    window.COSY_SCENE_DATA.seasons = {
        id: 'seasons',
        level: 'A1',
        title: {
            en: 'Four Seasons',
            fr: 'Quatre saisons',
            it: 'Quattro stagioni',
            ru: 'Четыре сезона',
            el: 'Τέσσερις εποχές'
        },
        viewBox: '0 0 800 500',
        doors: [
            {
                targetSceneId: "bedroom",
                x: 15, y: 140, width: 35, height: 230, labelX: 32, labelY: 125,
                labels: { en: "🚪 Bedroom →", fr: "🚪 Chambre →", it: "🚪 Camera →", ru: "🚪 Спальня →", el: "🚪 Υπνοδωμάτιο →" }
            }
        ],
        hotspots: [
            {
                id: 'spring',
                x: 30,
                y: 30,
                width: 350,
                height: 200,
                labelX: 205,
                labelY: 60,
                words: {
                    en: 'Spring',
                    fr: 'Printemps',
                    it: 'Primavera',
                    ru: 'Весна',
                    el: 'Άνοιξη'
                }
            },
            {
                id: 'summer',
                x: 420,
                y: 30,
                width: 350,
                height: 200,
                labelX: 595,
                labelY: 60,
                words: {
                    en: 'Summer',
                    fr: 'Été',
                    it: 'Estate',
                    ru: 'Лето',
                    el: 'Καλοκαίρι'
                }
            },
            {
                id: 'autumn',
                x: 30,
                y: 260,
                width: 350,
                height: 200,
                labelX: 205,
                labelY: 290,
                words: {
                    en: 'Autumn',
                    fr: 'Automne',
                    it: 'Autunno',
                    ru: 'Осень',
                    el: 'Φθινόπωρο'
                }
            },
            {
                id: 'winter',
                x: 420,
                y: 260,
                width: 350,
                height: 200,
                labelX: 595,
                labelY: 290,
                words: {
                    en: 'Winter',
                    fr: 'Hiver',
                    it: 'Inverno',
                    ru: 'Зима',
                    el: 'Χειμώνας'
                }
            },
            {
                id: 'flower',
                x: 100,
                y: 150,
                width: 100,
                height: 60,
                labelX: 150,
                labelY: 135,
                words: {
                    en: 'Flowers',
                    fr: 'Fleurs',
                    it: 'Fiori',
                    ru: 'Цветы',
                    el: 'Λουλούδια'
                }
            },
            {
                id: 'sun',
                x: 680,
                y: 80,
                width: 70,
                height: 70,
                labelX: 715,
                labelY: 65,
                words: {
                    en: 'Sun',
                    fr: 'Soleil',
                    it: 'Sole',
                    ru: 'Солнце',
                    el: 'Ήλιος'
                }
            },
            {
                id: 'rain',
                x: 100,
                y: 320,
                width: 110,
                height: 100,
                labelX: 155,
                labelY: 300,
                words: {
                    en: 'Rain',
                    fr: 'Pluie',
                    it: 'Pioggia',
                    ru: 'Дождь',
                    el: 'Βροχή'
                }
            },
            {
                id: 'snow',
                x: 520,
                y: 340,
                width: 100,
                height: 110,
                labelX: 570,
                labelY: 320,
                words: {
                    en: 'Snow',
                    fr: 'Neige',
                    it: 'Neve',
                    ru: 'Снег',
                    el: 'Χιόνι'
                }
            }
        ],
        svgBackground: `
            <defs>
                <linearGradient id="ss-spring" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#dcfce7"/>
                    <stop offset="100%" stop-color="#86efac"/>
                </linearGradient>
                <linearGradient id="ss-summer" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#fef08a"/>
                    <stop offset="100%" stop-color="#fde047"/>
                </linearGradient>
                <linearGradient id="ss-autumn" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#ffedd5"/>
                    <stop offset="100%" stop-color="#fdba74"/>
                </linearGradient>
                <linearGradient id="ss-winter" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#f0f9ff"/>
                    <stop offset="100%" stop-color="#bae6fd"/>
                </linearGradient>
            </defs>

            <!-- Spring Panel -->
            <rect x="20" y="20" width="370" height="220" fill="url(#ss-spring)" rx="12" stroke="#22c55e" stroke-width="3"/>
            <text x="205" y="50" font-weight="700" font-size="18" fill="#15803d" text-anchor="middle">🌸 Spring</text>
            <!-- Spring flowers -->
            <circle cx="120" cy="180" r="12" fill="#ec4899"/>
            <circle cx="150" cy="170" r="14" fill="#a855f7"/>
            <circle cx="180" cy="185" r="10" fill="#f43f5e"/>

            <!-- Summer Panel -->
            <rect x="410" y="20" width="370" height="220" fill="url(#ss-summer)" rx="12" stroke="#eab308" stroke-width="3"/>
            <text x="595" y="50" font-weight="700" font-size="18" fill="#a16207" text-anchor="middle">☀️ Summer</text>
            <!-- Bright Sun -->
            <circle cx="715" cy="115" r="30" fill="#f97316"/>

            <!-- Autumn Panel -->
            <rect x="20" y="250" width="370" height="220" fill="url(#ss-autumn)" rx="12" stroke="#ea580c" stroke-width="3"/>
            <text x="205" y="280" font-weight="700" font-size="18" fill="#9a3412" text-anchor="middle">🍂 Autumn</text>
            <!-- Rain cloud -->
            <ellipse cx="155" cy="330" rx="35" ry="20" fill="#64748b"/>
            <line x1="140" y1="355" x2="135" y2="380" stroke="#38bdf8" stroke-width="3"/>
            <line x1="155" y1="355" x2="150" y2="380" stroke="#38bdf8" stroke-width="3"/>
            <line x1="170" y1="355" x2="165" y2="380" stroke="#38bdf8" stroke-width="3"/>

            <!-- Winter Panel -->
            <rect x="410" y="250" width="370" height="220" fill="url(#ss-winter)" rx="12" stroke="#0284c7" stroke-width="3"/>
            <text x="595" y="280" font-weight="700" font-size="18" fill="#0369a1" text-anchor="middle">❄️ Winter</text>
            <!-- Snowman -->
            <circle cx="570" cy="410" r="28" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
            <circle cx="570" cy="365" r="20" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
            <polygon points="570,365 590,368 570,371" fill="#f97316"/>
        `
    };
})();
