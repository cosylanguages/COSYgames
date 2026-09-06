(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['market_fish'] = {
        id: 'market_fish',
        level: 'A2',
        title: {
            en: "Seafood & Fish Stall 🐟",
            fr: "Étal de poissons 🐟",
            it: "Banco del pesce 🐟",
            ru: "Рыбная лавка 🐟",
            el: "Πάγκος ψαριών 🐟",
            es: "Puesto de pescado 🐟",
            de: "Fischstand 🐟"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "market_veg",
                x: 15, y: 140, width: 35, height: 220, labelX: 32, labelY: 125,
                labels: { en: "🥕 Veg Stall →", fr: "🥕 Légumes →", it: "🥕 Verdura →", ru: "🥕 Овощная лавка →", el: "🥕 Λαχανικά →" }
            },
            {
                targetSceneId: "market",
                x: 750, y: 140, width: 35, height: 220, labelX: 768, labelY: 125,
                labels: { en: "🚪 Main Market →", fr: "🚪 Marché principal →", it: "🚪 Mercato principale →", ru: "🚪 Главный рынок →", el: "🚪 Κεντρική αγορά →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="fishSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#bae6fd" />
                <stop offset="100%" stop-color="#38bdf8" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="800" height="300" fill="url(#fishSky)" />
            <rect x="0" y="300" width="800" height="200" fill="#0284c7" />

            <!-- Doors -->
            <rect x="15" y="140" width="35" height="220" fill="#0369a1" />
            <rect x="750" y="140" width="35" height="220" fill="#0369a1" />

            <!-- Ice Counter -->
            <rect x="80" y="220" width="640" height="150" fill="#e0f2fe" stroke="#0284c7" stroke-width="4" rx="6" />

            <!-- Fish Displays on Ice -->
            <!-- Salmon -->
            <ellipse cx="200" cy="260" rx="45" ry="18" fill="#fb923c" />
            <polygon points="245,260 265,245 265,275" fill="#f97316" />

            <!-- Tuna / Trout -->
            <ellipse cx="400" cy="260" rx="55" ry="20" fill="#94a3b8" />
            <polygon points="455,260 480,240 480,280" fill="#64748b" />

            <!-- Shrimp & Crab -->
            <circle cx="580" cy="260" r="14" fill="#ef4444" />
            <circle cx="610" cy="260" r="14" fill="#ef4444" />
            <circle cx="640" cy="260" r="14" fill="#ef4444" />
        `,
        hotspots: [
            {
                id: "salmon",
                x: 140, y: 230, width: 120, height: 60, labelX: 200, labelY: 220,
                words: { en: "Salmon", fr: "Saumon", it: "Salmone", ru: "Лосось", el: "Σολομός" }
            },
            {
                id: "tuna",
                x: 340, y: 230, width: 130, height: 60, labelX: 400, labelY: 220,
                words: { en: "Tuna / Fish", fr: "Thon / Poisson", it: "Tonno / Pesce", ru: "Тунец / Рыба", el: "Τόνος / Ψάρι" }
            },
            {
                id: "shrimp",
                x: 560, y: 230, width: 100, height: 60, labelX: 610, labelY: 220,
                words: { en: "Shrimp & Shellfish", fr: "Crevettes et Crustacés", it: "Gamberi e Crostacei", ru: "Креветки и Морепродукты", el: "Γαρίδες & Θαλασσινά" }
            }
        ]
    };
})();
