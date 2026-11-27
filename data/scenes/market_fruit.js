(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['market_fruit'] = {
        id: 'market_fruit',
        level: 'A2',
        title: {
            en: "Fruit Stall 🍎",
            fr: "Étal de fruits 🍎",
            it: "Banco della frutta 🍎",
            ru: "Фруктовая лавка 🍎",
            el: "Πάγκος φρούτων 🍎",
            es: "Puesto de frutas 🍎",
            de: "Obststand 🍎"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "market",
                x: 15, y: 140, width: 35, height: 220, labelX: 32, labelY: 125,
                labels: { en: "🚪 Main Market →", fr: "🚪 Marché principal →", it: "🚪 Mercato principale →", ru: "🚪 Главный рынок →", el: "🚪 Κεντρική αγορά →" }
            },
            {
                targetSceneId: "market_veg",
                x: 750, y: 140, width: 35, height: 220, labelX: 768, labelY: 125,
                labels: { en: "🥕 Veg Stall →", fr: "🥕 Légumes →", it: "🥕 Verdura →", ru: "🥕 Овощная лавка →", el: "🥕 Λαχανικά →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="fruitSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#fef08a" />
                <stop offset="100%" stop-color="#fde047" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="800" height="300" fill="url(#fruitSky)" />
            <rect x="0" y="300" width="800" height="200" fill="#78350f" />

            <!-- Doors -->
            <rect x="15" y="140" width="35" height="220" fill="#451a03" />
            <rect x="750" y="140" width="35" height="220" fill="#451a03" />

            <!-- Canopy -->
            <polygon points="60,40 740,40 780,120 20,120" fill="#ea580c" />
            <polygon points="60,40 160,40 140,120 20,120" fill="#fef08a" />
            <polygon points="260,40 360,40 340,120 240,120" fill="#fef08a" />
            <polygon points="460,40 560,40 540,120 440,120" fill="#fef08a" />
            <polygon points="660,40 740,40 740,120 640,120" fill="#fef08a" />

            <!-- Wooden Fruit Crates -->
            <rect x="80" y="220" width="200" height="150" fill="#b45309" stroke="#451a03" stroke-width="4" rx="4" />
            <rect x="300" y="220" width="200" height="150" fill="#b45309" stroke="#451a03" stroke-width="4" rx="4" />
            <rect x="520" y="220" width="200" height="150" fill="#b45309" stroke="#451a03" stroke-width="4" rx="4" />

            <!-- Fruit Displays -->
            <!-- Apples -->
            <circle cx="130" cy="200" r="16" fill="#dc2626" />
            <circle cx="160" cy="200" r="16" fill="#dc2626" />
            <circle cx="190" cy="200" r="16" fill="#dc2626" />

            <!-- Bananas -->
            <path d="M330 190 Q350 180 370 200" stroke="#facc15" stroke-width="14" fill="none" stroke-linecap="round" />
            <path d="M380 190 Q400 180 420 200" stroke="#facc15" stroke-width="14" fill="none" stroke-linecap="round" />

            <!-- Oranges -->
            <circle cx="560" cy="200" r="16" fill="#f97316" />
            <circle cx="590" cy="200" r="16" fill="#f97316" />
            <circle cx="620" cy="200" r="16" fill="#f97316" />

            <!-- Watermelon -->
            <ellipse cx="200" cy="320" rx="45" ry="30" fill="#15803d" />
            <path d="M 160 320 Q 200 350 240 320" fill="#ef4444" stroke="#15803d" stroke-width="3" />

            <!-- Strawberries & Grapes -->
            <circle cx="400" cy="320" r="12" fill="#ec4899" />
            <circle cx="420" cy="315" r="12" fill="#a855f7" />
            <circle cx="440" cy="325" r="12" fill="#a855f7" />
        `,
        hotspots: [
            {
                id: "apple",
                x: 110, y: 170, width: 100, height: 60, labelX: 160, labelY: 160,
                words: { en: "Apples", fr: "Pommes", it: "Mele", ru: "Яблоки", el: "Μήλα" }
            },
            {
                id: "banana",
                x: 320, y: 170, width: 120, height: 60, labelX: 380, labelY: 160,
                words: { en: "Bananas", fr: "Bananes", it: "Banane", ru: "Бананы", el: "Μπανάνες" }
            },
            {
                id: "orange",
                x: 540, y: 170, width: 100, height: 60, labelX: 590, labelY: 160,
                words: { en: "Oranges", fr: "Oranges", it: "Arance", ru: "Апельсины", el: "Πορτοκάλια" }
            },
            {
                id: "watermelon",
                x: 150, y: 280, width: 100, height: 70, labelX: 200, labelY: 270,
                words: { en: "Watermelon", fr: "Pastèque", it: "Anguria", ru: "Арбуз", el: "Καρπούζι" }
            },
            {
                id: "strawberry",
                x: 380, y: 280, width: 80, height: 60, labelX: 420, labelY: 270,
                words: { en: "Strawberries & Grapes", fr: "Fraises et Raisins", it: "Fragole e Uva", ru: "Клубника и Виноград", el: "Φράουλες & Σταφύλια" }
            }
        ]
    };
})();
