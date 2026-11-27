(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['restaurant'] = {
        id: 'restaurant',
        level: 'A2',
        title: {
            en: "Restaurant & Dining",
            fr: "Restaurant et Repas",
            it: "Ristorante e Cena",
            ru: "Ресторан и обед",
            el: "Εστιατόριο & Φαγητό",
            es: "Restaurante y Cena",
            de: "Restaurant & Essen",
            hy: "Ռեստորան",
            ka: "რესტორანი"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "cafe",
                x: 15, y: 140, width: 35, height: 230, labelX: 32, labelY: 125,
                labels: { en: "🚪 Café →", fr: "🚪 Café →", it: "🚪 Caffè →", ru: "🚪 Кафе →", el: "🚪 Καφέ →" }
            },
            {
                targetSceneId: "city",
                x: 750, y: 140, width: 35, height: 230, labelX: 768, labelY: 125,
                labels: { en: "🚪 City →", fr: "🚪 Ville →", it: "🚪 Città →", ru: "🚪 Город →", el: "🚪 Πόλη →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="restWall" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#311204" />
                <stop offset="100%" stop-color="#1a0802" />
              </linearGradient>
            </defs>

            <!-- Wall & Floor -->
            <rect x="0" y="0" width="800" height="360" fill="url(#restWall)" />
            <rect x="0" y="360" width="800" height="140" fill="#78350f" />

            <!-- Doors -->
            <rect x="15" y="140" width="35" height="220" fill="#451a03" />

            <!-- Dining Table -->
            <ellipse cx="400" cy="420" rx="200" ry="50" fill="#dc2626" />
            <ellipse cx="400" cy="420" rx="180" ry="40" fill="#ffffff" />

            <!-- Chairs -->
            <rect x="160" y="330" width="40" height="90" fill="#451a03" rx="6" />
            <rect x="600" y="330" width="40" height="90" fill="#451a03" rx="6" />

            <!-- Plates & Cutlery -->
            <circle cx="300" cy="420" r="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2" />
            <circle cx="500" cy="420" r="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2" />

            <!-- Wine Glasses -->
            <path d="M340 400 L350 415 L350 425 M342 425 L358 425 M340 400 C340 390 350 390 350 400 Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="1" />
            <path d="M460 400 L470 415 L470 425 M462 425 L478 425 M460 400 C460 390 470 390 470 400 Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="1" />

            <!-- Candleholder -->
            <rect x="395" y="380" width="10" height="25" fill="#f59e0b" />
            <polygon points="400,365 405,378 395,378" fill="#f97316" />

            <!-- Bill / Receipt -->
            <rect x="385" y="425" width="30" height="20" fill="#fef08a" stroke="#ca8a04" stroke-width="1" rx="1" />
        `,
        hotspots: [
            {
                id: "dining_table",
                x: 200, y: 370, width: 400, height: 100, labelX: 400, labelY: 460,
                words: { en: "Dining Table", fr: "Table à manger", it: "Tavolo da pranzo", ru: "Обеденный стол", el: "Τραπέζι φαγητού" }
            },
            {
                id: "plate",
                x: 275, y: 395, width: 50, height: 50, labelX: 300, labelY: 385,
                words: { en: "Plate", fr: "Assiette", it: "Piatto", ru: "Тарелка", el: "Πιάτο" }
            },
            {
                id: "wine_glass",
                x: 335, y: 385, width: 30, height: 45, labelX: 350, labelY: 375,
                words: { en: "Glass / Wine", fr: "Verre à vin", it: "Bicchiere da vino", ru: "Бокал вина", el: "Ποτήρι κρασί" }
            },
            {
                id: "receipt",
                x: 380, y: 420, width: 40, height: 30, labelX: 400, labelY: 410,
                words: { en: "Bill / Receipt", fr: "L'addition / Reçu", it: "Il conto / Scontrino", ru: "Счет / Чек", el: "Λογαριασμός / Απόδειξη" }
            }
        ]
    };
})();
