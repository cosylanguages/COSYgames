(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['market_bakery'] = {
        id: 'market_bakery',
        level: 'A2',
        title: {
            en: "Bakery Stall 🥖",
            fr: "Boulangerie 🥖",
            it: "Panetteria 🥖",
            ru: "Пекарня 🥖",
            el: "Αρτοποιείο 🥖",
            es: "Panadería 🥖",
            de: "Bäckereistand 🥖"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "market",
                x: 15, y: 140, width: 35, height: 220, labelX: 32, labelY: 125,
                labels: { en: "🚪 Main Market →", fr: "🚪 Marché principal →", it: "🚪 Mercato principale →", ru: "🚪 Главный рынок →", el: "🚪 Κεντρική αγορά →" }
            },
            {
                targetSceneId: "market_cheese",
                x: 750, y: 140, width: 35, height: 220, labelX: 768, labelY: 125,
                labels: { en: "🧀 Cheese Stall →", fr: "🧀 Fromagerie →", it: "🧀 Formaggeria →", ru: "🧀 Сырная лавка →", el: "🧀 Τυροκομείο →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="bakeSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#fef3c7" />
                <stop offset="100%" stop-color="#fde68a" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="800" height="300" fill="url(#bakeSky)" />
            <rect x="0" y="300" width="800" height="200" fill="#78350f" />

            <!-- Doors -->
            <rect x="15" y="140" width="35" height="220" fill="#451a03" />
            <rect x="750" y="140" width="35" height="220" fill="#451a03" />

            <!-- Canopy -->
            <polygon points="60,40 740,40 780,120 20,120" fill="#d97706" />
            <polygon points="60,40 160,40 140,120 20,120" fill="#fef08a" />
            <polygon points="260,40 360,40 340,120 240,120" fill="#fef08a" />
            <polygon points="460,40 560,40 540,120 440,120" fill="#fef08a" />
            <polygon points="660,40 740,40 740,120 640,120" fill="#fef08a" />

            <!-- Wooden Shelves & Bakery Display Counters -->
            <rect x="80" y="220" width="200" height="150" fill="#b45309" stroke="#451a03" stroke-width="4" rx="4" />
            <rect x="300" y="220" width="200" height="150" fill="#b45309" stroke="#451a03" stroke-width="4" rx="4" />
            <rect x="520" y="220" width="200" height="150" fill="#b45309" stroke="#451a03" stroke-width="4" rx="4" />

            <!-- Bakery Items Displays -->
            <!-- Baguettes -->
            <ellipse cx="140" cy="195" rx="35" ry="10" fill="#f59e0b" transform="rotate(-20 140 195)" />
            <ellipse cx="180" cy="195" rx="35" ry="10" fill="#f59e0b" transform="rotate(-20 180 195)" />

            <!-- Croissant -->
            <path d="M360 190 Q390 170 420 190 Q390 205 360 190 Z" fill="#d97706" />

            <!-- Cake & Tart -->
            <rect x="560" y="180" width="80" height="35" fill="#f43f5e" rx="4" />
            <rect x="560" y="170" width="80" height="10" fill="#ffffff" rx="2" />

            <!-- Pie -->
            <ellipse cx="200" cy="320" rx="40" ry="18" fill="#ca8a04" />

            <!-- Flour Bag -->
            <rect x="390" y="290" width="60" height="70" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3" rx="8" />
            <text x="420" y="330" font-weight="800" font-size="12" fill="#64748b" text-anchor="middle">FLOUR</text>
        `,
        hotspots: [
            {
                id: "baguette",
                x: 110, y: 160, width: 110, height: 60, labelX: 160, labelY: 150,
                words: { en: "Baguette / Bread", fr: "Baguette / Pain", it: "Baguette / Pane", ru: "Багет / Хлеб", el: "Ψωμί / Μπαγκέτα" }
            },
            {
                id: "croissant",
                x: 350, y: 160, width: 90, height: 60, labelX: 395, labelY: 150,
                words: { en: "Croissant", fr: "Croissant", it: "Cornetto", ru: "Круассан", el: "Κρουασάν" }
            },
            {
                id: "cake",
                x: 550, y: 160, width: 100, height: 60, labelX: 600, labelY: 150,
                words: { en: "Cake / Pastry", fr: "Gâteau / Pâtisserie", it: "Torta / Pasticceria", ru: "Торт / Пирожное", el: "Γλυκό / Κέικ" }
            },
            {
                id: "pie",
                x: 150, y: 290, width: 100, height: 60, labelX: 200, labelY: 280,
                words: { en: "Pie / Tart", fr: "Tarte", it: "Crostata", ru: "Пирог / Тарт", el: "Πίτα" }
            },
            {
                id: "flour",
                x: 380, y: 280, width: 80, height: 80, labelX: 420, labelY: 270,
                words: { en: "Flour", fr: "Farine", it: "Farina", ru: "Мука", el: "Αλεύρι" }
            }
        ]
    };
})();
