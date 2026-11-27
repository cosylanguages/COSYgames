(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['cafe'] = {
        id: 'cafe',
        level: 'A2',
        title: {
            en: "Café & Bistro",
            fr: "Café et Bistro",
            it: "Caffè e Bistrot",
            ru: "Кафе и бистро",
            el: "Καφέ & Μπιστρό",
            es: "Café y Bistró",
            de: "Café & Bistro",
            hy: "Սրճարան",
            ka: "კაფე"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "city",
                x: 15, y: 140, width: 35, height: 230, labelX: 32, labelY: 125,
                labels: { en: "🚪 Street →", fr: "🚪 Rue →", it: "🚪 Strada →", ru: "🚪 Улица →", el: "🚪 Δρόμος →" }
            },
            {
                targetSceneId: "restaurant",
                x: 380, y: 140, width: 35, height: 100, labelX: 398, labelY: 125,
                labels: { en: "🚪 Restaurant →", fr: "🚪 Restaurant →", it: "🚪 Ristorante →", ru: "🚪 Ресторан →", el: "🚪 Εστιατόριο →" }
            },
            {
                targetSceneId: "market",
                x: 750, y: 140, width: 35, height: 230, labelX: 768, labelY: 125,
                labels: { en: "🚪 Market →", fr: "🚪 Marché →", it: "🚪 Mercato →", ru: "🚪 Рынок →", el: "🚪 Αγορά →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="cafeWall" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#4a3b32" />
                <stop offset="100%" stop-color="#2c221e" />
              </linearGradient>
              <linearGradient id="cafeFloor" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#a07855" />
                <stop offset="100%" stop-color="#694d34" />
              </linearGradient>
            </defs>

            <!-- Wall & Floor -->
            <rect x="0" y="0" width="800" height="360" fill="url(#cafeWall)" />
            <rect x="0" y="360" width="800" height="140" fill="url(#cafeFloor)" />

            <!-- Doors -->
            <rect x="15" y="140" width="35" height="220" fill="#1c130e" stroke="#8c6d53" stroke-width="2" />
            <rect x="750" y="140" width="35" height="220" fill="#1c130e" stroke="#8c6d53" stroke-width="2" />

            <!-- Counter -->
            <rect x="100" y="240" width="600" height="120" fill="#785338" stroke="#3d281a" stroke-width="4" rx="4" />
            <rect x="90" y="230" width="620" height="15" fill="#d9b38c" rx="3" />

            <!-- Coffee Machine -->
            <rect x="140" y="140" width="110" height="90" fill="#94a3b8" stroke="#475569" stroke-width="3" rx="4" />
            <rect x="155" y="150" width="80" height="35" fill="#334155" />
            <circle cx="175" cy="200" r="8" fill="#e2e8f0" />
            <circle cx="215" cy="200" r="8" fill="#e2e8f0" />

            <!-- Menu Board -->
            <rect x="320" y="40" width="160" height="120" fill="#1e293b" stroke="#854d0e" stroke-width="6" rx="4" />
            <text x="400" y="70" fill="#fef08a" font-size="14" font-weight="bold" text-anchor="middle">MENU</text>
            <line x1="340" y1="85" x2="460" y2="85" stroke="#fef08a" stroke-width="1" />
            <text x="350" y="105" fill="#ffffff" font-size="10">Espresso ...... $2.50</text>
            <text x="350" y="125" fill="#ffffff" font-size="10">Croissant ..... $3.00</text>
            <text x="350" y="145" fill="#ffffff" font-size="10">Tea ............. $2.00</text>

            <!-- Table & Chair -->
            <ellipse cx="600" cy="420" rx="70" ry="25" fill="#a16207" stroke="#451a03" stroke-width="3" />
            <rect x="595" y="420" width="10" height="60" fill="#451a03" />
            <rect x="540" y="380" width="40" height="60" fill="#b91c1c" rx="6" />

            <!-- Bakery Display -->
            <rect x="480" y="180" width="180" height="50" fill="#cbd5e1" opacity="0.6" stroke="#475569" stroke-width="2" rx="4" />
            <!-- Croissant -->
            <path d="M510 210 Q525 195 540 210 Q525 220 510 210 Z" fill="#d97706" />
            <!-- Cake -->
            <rect x="580" y="195" width="30" height="25" fill="#f43f5e" rx="2" />

            <!-- Cup of Coffee -->
            <ellipse cx="600" cy="410" rx="10" ry="5" fill="#ffffff" />
            <rect x="593" y="402" width="14" height="10" fill="#ffffff" rx="2" />
            <path d="M607 404 C612 404 612 410 607 410" stroke="#ffffff" stroke-width="2" fill="none" />
        `,
        hotspots: [
            {
                id: "coffee_machine",
                x: 140, y: 140, width: 110, height: 90, labelX: 195, labelY: 130,
                words: { en: "Coffee Machine", fr: "Machine à café", it: "Macchina del caffè", ru: "Кофемашина", el: "Καφετιέρα" }
            },
            {
                id: "menu_board",
                x: 320, y: 40, width: 160, height: 120, labelX: 400, labelY: 30,
                words: { en: "Menu Board", fr: "Panneau de menu", it: "Lavagna del menu", ru: "Меню", el: "Πίνακας μενού" }
            },
            {
                id: "counter",
                x: 100, y: 230, width: 600, height: 130, labelX: 300, labelY: 220,
                words: { en: "Counter", fr: "Comptoir", it: "Bancone", ru: "Стойка", el: "Πάγκος" }
            },
            {
                id: "croissant",
                x: 500, y: 185, width: 50, height: 40, labelX: 525, labelY: 175,
                words: { en: "Croissant", fr: "Croissant", it: "Cornetto", ru: "Круассан", el: "Κρουασάν" }
            },
            {
                id: "cake",
                x: 570, y: 185, width: 50, height: 40, labelX: 595, labelY: 175,
                words: { en: "Cake", fr: "Gâteau", it: "Torta", ru: "Торт", el: "Κέικ" }
            },
            {
                id: "table",
                x: 530, y: 395, width: 140, height: 85, labelX: 600, labelY: 385,
                words: { en: "Table", fr: "Table", it: "Tavolo", ru: "Стол", el: "Τραπέζι" }
            },
            {
                id: "coffee_cup",
                x: 585, y: 395, width: 30, height: 25, labelX: 600, labelY: 435,
                words: { en: "Coffee Cup", fr: "Tasse de café", it: "Tazzina di caffè", ru: "Чашка кофе", el: "Φλιτζάνι καφέ" }
            }
        ]
    };
})();
