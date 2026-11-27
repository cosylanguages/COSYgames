(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['market'] = {
        id: 'market',
        type: 'hub',
        level: 'A2',
        title: {
            en: "Fresh Market Hub 🛒",
            fr: "Marché frais (Hub) 🛒",
            it: "Mercato fresco (Hub) 🛒",
            ru: "Рынок свежих продуктов 🛒",
            el: "Φρέσκια Αγορά (Hub) 🛒",
            es: "Mercado fresco (Hub) 🛒",
            de: "Frischer Markt (Hub) 🛒",
            hy: "Թարմ Մթերքի Շուկա 🛒",
            ka: "ახალი პროდუქტების ბაზარი 🛒"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "market_fruit",
                x: 30, y: 220, width: 130, height: 160, labelX: 95, labelY: 200,
                labels: { en: "🍎 Fruit Stall →", fr: "🍎 Étal de fruits →", it: "🍎 Banco della frutta →", ru: "🍎 Фруктовая лавка →", el: "🍎 Πάγκος φρούτων →" }
            },
            {
                targetSceneId: "market_veg",
                x: 180, y: 220, width: 130, height: 160, labelX: 245, labelY: 200,
                labels: { en: "🥕 Veg Stall →", fr: "🥕 Étal de légumes →", it: "🥕 Banco della verdura →", ru: "🥕 Овощная лавка →", el: "🥕 Πάγκος λαχανικών →" }
            },
            {
                targetSceneId: "market_fish",
                x: 330, y: 220, width: 130, height: 160, labelX: 395, labelY: 200,
                labels: { en: "🐟 Fish Stall →", fr: "🐟 Étal de poissons →", it: "🐟 Banco del pesce →", ru: "🐟 Рыбная лавка →", el: "🐟 Πάγκος ψαριών →" }
            },
            {
                targetSceneId: "market_bakery",
                x: 480, y: 220, width: 130, height: 160, labelX: 545, labelY: 200,
                labels: { en: "🥖 Bakery Stall →", fr: "🥖 Boulangerie →", it: "🥖 Panetteria →", ru: "🥖 Пекарня →", el: "🥖 Αρτοποιείο →" }
            },
            {
                targetSceneId: "market_cheese",
                x: 630, y: 220, width: 130, height: 160, labelX: 695, labelY: 200,
                labels: { en: "🧀 Cheese Stall →", fr: "🧀 Fromagerie →", it: "🧀 Formaggeria →", ru: "🧀 Сырная лавка →", el: "🧀 Τυροκομείο →" }
            },
            {
                targetSceneId: "city",
                x: 15, y: 120, width: 35, height: 260, labelX: 32, labelY: 105,
                labels: { en: "🚪 City →", fr: "🚪 Ville →", it: "🚪 Città →", ru: "🚪 Город →", el: "🚪 Πόλη →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="mktSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#38bdf8" />
                <stop offset="100%" stop-color="#bae6fd" />
              </linearGradient>
            </defs>

            <!-- Sky & Cobblestone Ground -->
            <rect x="0" y="0" width="800" height="280" fill="url(#mktSky)" />
            <rect x="0" y="280" width="800" height="220" fill="#cbd5e1" />
            <line x1="0" y1="360" x2="800" y2="360" stroke="#94a3b8" stroke-width="2" stroke-dasharray="10 10" />

            <!-- City Portal Door -->
            <rect x="15" y="120" width="35" height="260" fill="#475569" rx="3" />

            <!-- Canopy Banner -->
            <polygon points="20,60 780,60 790,130 10,130" fill="#dc2626" />
            <polygon points="20,60 100,60 90,130 10,130" fill="#ffffff" />
            <polygon points="180,60 260,60 250,130 170,130" fill="#ffffff" />
            <polygon points="340,60 420,60 410,130 330,130" fill="#ffffff" />
            <polygon points="500,60 580,60 570,130 490,130" fill="#ffffff" />
            <polygon points="660,60 740,60 730,130 650,130" fill="#ffffff" />

            <text x="400" y="100" fill="#ffffff" font-weight="900" font-size="20" text-anchor="middle" letter-spacing="2">COSY TOWN GRAND MARKET 🏪</text>

            <!-- 5 Stalls -->
            <!-- Stall 1: Fruit -->
            <rect x="30" y="220" width="130" height="160" fill="#854d0e" stroke="#451a03" stroke-width="3" rx="4" />
            <rect x="30" y="200" width="130" height="20" fill="#ef4444" rx="2" />
            <text x="95" y="215" fill="#ffffff" font-weight="700" font-size="11" text-anchor="middle">🍎 FRUIT</text>
            <circle cx="70" cy="250" r="12" fill="#dc2626" />
            <circle cx="110" cy="250" r="12" fill="#f97316" />

            <!-- Stall 2: Vegetables -->
            <rect x="180" y="220" width="130" height="160" fill="#854d0e" stroke="#451a03" stroke-width="3" rx="4" />
            <rect x="180" y="200" width="130" height="20" fill="#16a34a" rx="2" />
            <text x="245" y="215" fill="#ffffff" font-weight="700" font-size="11" text-anchor="middle">🥕 VEGGIES</text>
            <path d="M215 240 L230 265 L210 265 Z" fill="#ea580c" />
            <path d="M260 240 L275 265 L255 265 Z" fill="#16a34a" />

            <!-- Stall 3: Fish -->
            <rect x="330" y="220" width="130" height="160" fill="#854d0e" stroke="#451a03" stroke-width="3" rx="4" />
            <rect x="330" y="200" width="130" height="20" fill="#0284c7" rx="2" />
            <text x="395" y="215" fill="#ffffff" font-weight="700" font-size="11" text-anchor="middle">🐟 FISH</text>
            <ellipse cx="380" cy="250" rx="18" ry="8" fill="#94a3b8" />
            <ellipse cx="415" cy="250" rx="18" ry="8" fill="#94a3b8" />

            <!-- Stall 4: Bakery -->
            <rect x="480" y="220" width="130" height="160" fill="#854d0e" stroke="#451a03" stroke-width="3" rx="4" />
            <rect x="480" y="200" width="130" height="20" fill="#d97706" rx="2" />
            <text x="545" y="215" fill="#ffffff" font-weight="700" font-size="11" text-anchor="middle">🥖 BAKERY</text>
            <ellipse cx="530" cy="250" rx="20" ry="8" fill="#f59e0b" />
            <ellipse cx="560" cy="250" rx="15" ry="8" fill="#d97706" />

            <!-- Stall 5: Cheese -->
            <rect x="630" y="220" width="130" height="160" fill="#854d0e" stroke="#451a03" stroke-width="3" rx="4" />
            <rect x="630" y="200" width="130" height="20" fill="#ca8a04" rx="2" />
            <text x="695" y="215" fill="#ffffff" font-weight="700" font-size="11" text-anchor="middle">🧀 CHEESE</text>
            <polygon points="675,260 715,260 715,240" fill="#facc15" />

            <!-- Central Pathway Marker -->
            <rect x="250" y="420" width="300" height="40" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2" rx="20" />
            <text x="400" y="445" fill="#334155" font-weight="800" font-size="14" text-anchor="middle">SELECT A STALL TO SHOP 🛒</text>
        `,
        hotspots: []
    };
})();
