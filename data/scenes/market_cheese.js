(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['market_cheese'] = {
        id: 'market_cheese',
        level: 'A2',
        title: {
            en: "Cheese & Dairy Stall 🧀",
            fr: "Fromagerie & Produits laitiers 🧀",
            it: "Formaggeria 🧀",
            ru: "Сырная лавка 🧀",
            el: "Τυροκομείο 🧀",
            es: "Quesería 🧀",
            de: "Käserei 🧀"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "market",
                x: 15, y: 140, width: 35, height: 220, labelX: 32, labelY: 125,
                labels: { en: "🚪 Main Market →", fr: "🚪 Marché principal →", it: "🚪 Mercato principale →", ru: "🚪 Главный рынок →", el: "🚪 Κεντρική αγορά →" }
            },
            {
                targetSceneId: "market_bakery",
                x: 750, y: 140, width: 35, height: 220, labelX: 768, labelY: 125,
                labels: { en: "🥖 Bakery Stall →", fr: "🥖 Boulangerie →", it: "🥖 Panetteria →", ru: "🥖 Пекарня →", el: "🥖 Αρτοποιείο →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="cheSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#fef08a" />
                <stop offset="100%" stop-color="#fde047" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="800" height="300" fill="url(#cheSky)" />
            <rect x="0" y="300" width="800" height="200" fill="#78350f" />

            <!-- Doors -->
            <rect x="15" y="140" width="35" height="220" fill="#451a03" />
            <rect x="750" y="140" width="35" height="220" fill="#451a03" />

            <!-- Canopy -->
            <polygon points="60,40 740,40 780,120 20,120" fill="#ca8a04" />
            <polygon points="60,40 160,40 140,120 20,120" fill="#ffffff" />
            <polygon points="260,40 360,40 340,120 240,120" fill="#ffffff" />
            <polygon points="460,40 560,40 540,120 440,120" fill="#ffffff" />
            <polygon points="660,40 740,40 740,120 640,120" fill="#ffffff" />

            <!-- Display Counters -->
            <rect x="80" y="220" width="200" height="150" fill="#b45309" stroke="#451a03" stroke-width="4" rx="4" />
            <rect x="300" y="220" width="200" height="150" fill="#b45309" stroke="#451a03" stroke-width="4" rx="4" />
            <rect x="520" y="220" width="200" height="150" fill="#b45309" stroke="#451a03" stroke-width="4" rx="4" />

            <!-- Cheese Displays -->
            <!-- Wedge Cheese -->
            <polygon points="120,210 180,210 180,170" fill="#facc15" stroke="#eab308" stroke-width="2" />
            <circle cx="160" cy="195" r="4" fill="#ca8a04" />

            <!-- Milk Bottle -->
            <rect x="370" y="160" width="30" height="55" fill="#f8fafc" stroke="#94a3b8" stroke-width="2" rx="4" />
            <rect x="375" y="150" width="20" height="10" fill="#38bdf8" rx="2" />

            <!-- Butter -->
            <rect x="570" y="180" width="60" height="30" fill="#fef08a" stroke="#ca8a04" stroke-width="2" rx="3" />

            <!-- Yogurt -->
            <rect x="200" y="300" width="40" height="45" fill="#ffffff" stroke="#ec4899" stroke-width="2" rx="4" />
            <ellipse cx="220" cy="300" rx="20" ry="5" fill="#ec4899" />

            <!-- Eggs Crate -->
            <rect x="400" y="290" width="70" height="40" fill="#d97706" rx="4" />
            <circle cx="415" cy="305" r="8" fill="#fef3c7" />
            <circle cx="435" cy="305" r="8" fill="#fef3c7" />
            <circle cx="455" cy="305" r="8" fill="#fef3c7" />
        `,
        hotspots: [
            {
                id: "cheese",
                x: 110, y: 160, width: 90, height: 60, labelX: 150, labelY: 150,
                words: { en: "Cheese", fr: "Fromage", it: "Formaggio", ru: "Сыр", el: "Τυρί" }
            },
            {
                id: "milk",
                x: 350, y: 150, width: 70, height: 70, labelX: 385, labelY: 140,
                words: { en: "Milk", fr: "Lait", it: "Latte", ru: "Молоко", el: "Γάλα" }
            },
            {
                id: "butter",
                x: 550, y: 170, width: 90, height: 50, labelX: 595, labelY: 160,
                words: { en: "Butter", fr: "Beurre", it: "Burro", ru: "Сливочное масло", el: "Βούτυρο" }
            },
            {
                id: "yogurt",
                x: 180, y: 290, width: 80, height: 60, labelX: 220, labelY: 280,
                words: { en: "Yogurt", fr: "Yaourt", it: "Yogurt", ru: "Йогурт", el: "Γιαούρτι" }
            },
            {
                id: "eggs",
                x: 390, y: 280, width: 90, height: 60, labelX: 435, labelY: 270,
                words: { en: "Eggs", fr: "Œufs", it: "Uova", ru: "Яйца", el: "Αυγά" }
            }
        ]
    };
})();
