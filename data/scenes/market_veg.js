(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['market_veg'] = {
        id: 'market_veg',
        level: 'A2',
        title: {
            en: "Vegetable Stall 🥕",
            fr: "Étal de légumes 🥕",
            it: "Banco della verdura 🥕",
            ru: "Овощная лавка 🥕",
            el: "Πάγκος λαχανικών 🥕",
            es: "Puesto de verduras 🥕",
            de: "Gemüsestand 🥕"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "market_fruit",
                x: 15, y: 140, width: 35, height: 220, labelX: 32, labelY: 125,
                labels: { en: "🍎 Fruit Stall →", fr: "🍎 Fruits →", it: "🍎 Frutta →", ru: "🍎 Фрукты →", el: "🍎 Φρούτα →" }
            },
            {
                targetSceneId: "market_fish",
                x: 750, y: 140, width: 35, height: 220, labelX: 768, labelY: 125,
                labels: { en: "🐟 Fish Stall →", fr: "🐟 Poissons →", it: "🐟 Pesce →", ru: "🐟 Рыба →", el: "🐟 Ψάρια →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="vegSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#bbf7d0" />
                <stop offset="100%" stop-color="#86efac" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="800" height="300" fill="url(#vegSky)" />
            <rect x="0" y="300" width="800" height="200" fill="#15803d" />

            <!-- Doors -->
            <rect x="15" y="140" width="35" height="220" fill="#14532d" />
            <rect x="750" y="140" width="35" height="220" fill="#14532d" />

            <!-- Canopy -->
            <polygon points="60,40 740,40 780,120 20,120" fill="#16a34a" />
            <polygon points="60,40 160,40 140,120 20,120" fill="#ffffff" />
            <polygon points="260,40 360,40 340,120 240,120" fill="#ffffff" />
            <polygon points="460,40 560,40 540,120 440,120" fill="#ffffff" />

            <!-- Wooden Crates -->
            <rect x="80" y="220" width="200" height="150" fill="#b45309" stroke="#451a03" stroke-width="4" rx="4" />
            <rect x="300" y="220" width="200" height="150" fill="#b45309" stroke="#451a03" stroke-width="4" rx="4" />
            <rect x="520" y="220" width="200" height="150" fill="#b45309" stroke="#451a03" stroke-width="4" rx="4" />

            <!-- Tomatoes -->
            <circle cx="130" cy="200" r="16" fill="#ef4444" />
            <circle cx="160" cy="200" r="16" fill="#ef4444" />
            <circle cx="190" cy="200" r="16" fill="#ef4444" />

            <!-- Carrots -->
            <polygon points="340,180 350,220 330,220" fill="#f97316" />
            <polygon points="370,180 380,220 360,220" fill="#f97316" />
            <polygon points="400,180 410,220 390,220" fill="#f97316" />

            <!-- Broccoli & Cucumbers -->
            <circle cx="560" cy="200" r="18" fill="#15803d" />
            <circle cx="590" cy="200" r="18" fill="#15803d" />
            <rect x="620" y="190" width="40" height="15" fill="#22c55e" rx="6" />
        `,
        hotspots: [
            {
                id: "tomato",
                x: 110, y: 170, width: 100, height: 60, labelX: 160, labelY: 160,
                words: { en: "Tomatoes", fr: "Tomates", it: "Pomodori", ru: "Помидоры", el: "Ντομάτες" }
            },
            {
                id: "carrot",
                x: 320, y: 170, width: 100, height: 60, labelX: 370, labelY: 160,
                words: { en: "Carrots", fr: "Carottes", it: "Carote", ru: "Морковь", el: "Καρότα" }
            },
            {
                id: "broccoli",
                x: 540, y: 170, width: 120, height: 60, labelX: 600, labelY: 160,
                words: { en: "Broccoli & Cucumbers", fr: "Brocoli et Concombres", it: "Broccoli e Cetrioli", ru: "Брокколи и Огурцы", el: "Μπρόκολο & Αγγούρια" }
            }
        ]
    };
})();
