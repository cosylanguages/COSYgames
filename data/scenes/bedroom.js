(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['bedroom'] = {
        id: 'bedroom',
        level: 'A1',
        title: {
            en: "Bedroom",
            fr: "Chambre",
            it: "Camera da letto",
            ru: "Спальня",
            el: "Υπνοδωμάτιο",
            es: "Dormitorio",
            de: "Schlafzimmer",
            pt: "Quarto",
            hy: "Ննջասենյակ",
            ka: "σαძინებელი",
            tt: "Йокы бүлмәсе",
            ba: "Йоҡо бүлмәһе",
            br: "Kambr"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "routine_calendar",
                x: 598, y: 38, width: 44, height: 44, labelX: 620, labelY: 28,
                labels: { en: "⏰ Clock / Routine →", fr: "⏰ Horloge / Routine →", it: "⏰ Orologio / Routine →", ru: "⏰ Часы / Распорядок →", el: "⏰ Ρολόι / Ρουτίνα →" }
            },
            {
                targetSceneId: "apartment",
                x: 750, y: 140, width: 35, height: 230, labelX: 768, labelY: 125,
                labels: { en: "🚪 Living Room →", fr: "🚪 Salon →", it: "🚪 Soggiorno →", ru: "🚪 Гостиная →", el: "🚪 Σαλόνι →" }
            },
            {
                targetSceneId: "kitchen",
                x: 15, y: 140, width: 35, height: 230, labelX: 32, labelY: 125,
                labels: { en: "🚪 Kitchen →", fr: "🚪 Cuisine →", it: "🚪 Cucina →", ru: "🚪 Кухня →", el: "🚪 Κουζίνα →" }
            },
            {
                targetSceneId: "bathroom",
                x: 210, y: 140, width: 35, height: 120, labelX: 228, labelY: 125,
                labels: { en: "🚪 Bathroom →", fr: "🚪 S. de bain →", it: "🚪 Bagno →", ru: "🚪 Ванная →", el: "🚪 Μπάνιο →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="bedWallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#fbcfe8" />
                <stop offset="100%" stop-color="#f472b6" />
              </linearGradient>
              <linearGradient id="bedFloorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#e2e8f0" />
                <stop offset="100%" stop-color="#cbd5e1" />
              </linearGradient>
            </defs>

            <!-- Wall & Floor -->
            <rect x="0" y="0" width="800" height="380" fill="url(#bedWallGrad)" opacity="0.85" />
            <rect x="0" y="370" width="800" height="10" fill="#f43f5e" opacity="0.3" />
            <rect x="0" y="380" width="800" height="120" fill="url(#bedFloorGrad)" />
            <line x1="0" y1="410" x2="800" y2="410" stroke="#94a3b8" stroke-width="1" opacity="0.5" />
            <line x1="0" y1="450" x2="800" y2="450" stroke="#94a3b8" stroke-width="1" opacity="0.5" />

            <!-- Left Doorway (to Kitchen) -->
            <rect x="10" y="130" width="45" height="245" fill="#451a03" rx="2" />
            <rect x="15" y="140" width="35" height="230" fill="#78350f" />
            <circle cx="42" cy="255" r="4" fill="#fbbf24" />

            <!-- Right Doorway (Back to Living Room) -->
            <rect x="745" y="130" width="45" height="245" fill="#451a03" rx="2" />
            <rect x="750" y="140" width="35" height="230" fill="#78350f" />
            <circle cx="758" cy="255" r="4" fill="#fbbf24" />

            <!-- Wall Clock (Link to Routine & Calendar Hub) -->
            <g id="illustration-clock">
              <circle cx="620" cy="60" r="20" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
              <line x1="620" y1="60" x2="620" y2="48" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
              <line x1="620" y1="60" x2="630" y2="60" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
              <circle cx="620" cy="60" r="3" fill="#ef4444"/>
            </g>

            <!-- 1. Wardrobe -->
            <g id="illustration-wardrobe">
              <rect x="50" y="90" width="140" height="280" fill="#78350f" rx="4" />
              <rect x="58" y="100" width="60" height="260" fill="#a16207" />
              <rect x="122" y="100" width="60" height="260" fill="#a16207" />
              <circle cx="110" cy="230" r="4" fill="#fef08a" />
              <circle cx="130" cy="230" r="4" fill="#fef08a" />
            </g>

            <!-- 2. Mirror -->
            <g id="illustration-mirror">
              <ellipse cx="250" cy="160" rx="35" ry="60" fill="#93c5fd" stroke="#78350f" stroke-width="6" />
              <path d="M230 130 L260 110" stroke="white" stroke-width="3" opacity="0.7" stroke-linecap="round" />
            </g>

            <!-- 3. Curtains -->
            <g id="illustration-curtains">
              <rect x="350" y="60" width="160" height="120" fill="#60a5fa" rx="2" />
              <line x1="430" y1="60" x2="430" y2="180" stroke="#1d4ed8" stroke-width="2" />
              <!-- Left curtain fold -->
              <path d="M330 50 L380 50 L370 220 L330 220 Z" fill="#f43f5e" />
              <!-- Right curtain fold -->
              <path d="M480 50 L530 50 L530 220 L490 220 Z" fill="#f43f5e" />
              <rect x="320" y="45" width="220" height="10" fill="#881337" rx="3" />
            </g>

            <!-- 4. Bed & Pillow & Blanket -->
            <g id="illustration-bed">
              <!-- Headboard -->
              <rect x="220" y="220" width="240" height="90" fill="#78350f" rx="8" />
              <!-- Mattress -->
              <rect x="220" y="280" width="240" height="100" fill="#f8fafc" rx="10" stroke="#cbd5e1" stroke-width="2" />
              <!-- Blanket -->
              <rect x="220" y="320" width="240" height="60" fill="#ec4899" rx="6" />
              <!-- Pillows -->
              <rect x="240" y="260" width="80" height="40" fill="#ffffff" rx="8" stroke="#e2e8f0" stroke-width="2" />
              <rect x="350" y="260" width="80" height="40" fill="#ffffff" rx="8" stroke="#e2e8f0" stroke-width="2" />
              <!-- Bed legs -->
              <rect x="225" y="380" width="15" height="20" fill="#451a03" />
              <rect x="440" y="380" width="15" height="20" fill="#451a03" />
            </g>

            <!-- 5. Nightstand & Desk Lamp -->
            <g id="illustration-nightstand">
              <rect x="500" y="290" width="80" height="90" fill="#a16207" rx="4" />
              <rect x="510" y="300" width="60" height="32" fill="#78350f" rx="2" />
              <rect x="510" y="338" width="60" height="32" fill="#78350f" rx="2" />
              <circle cx="540" cy="316" r="3" fill="#fef08a" />
              <circle cx="540" cy="354" r="3" fill="#fef08a" />

              <!-- Lamp on nightstand -->
              <path d="M525 290 L555 290 L550 260 L530 260 Z" fill="#38bdf8" />
              <line x1="540" y1="260" x2="540" y2="240" stroke="#0284c7" stroke-width="4" />
              <path d="M525 240 L555 240 L560 215 L520 215 Z" fill="#facc15" />
            </g>
        `,
        hotspots: [
            {
                id: "bed",
                x: 220, y: 210, width: 240, height: 45, labelX: 340, labelY: 200,
                words: { en: "Bed", fr: "Lit", it: "Letto", ru: "Кровать", el: "Κρεβάτι" }
            },
            {
                id: "wardrobe",
                x: 50, y: 90, width: 140, height: 280, labelX: 120, labelY: 80,
                words: { en: "Wardrobe", fr: "Armoire", it: "Armadio", ru: "Шкаф", el: "Ντουλάπα" }
            },
            {
                id: "pillow",
                x: 240, y: 260, width: 190, height: 45, labelX: 335, labelY: 250,
                words: { en: "Pillow", fr: "Oreiller", it: "Cuscino", ru: "Подушка", el: "Μαξιλάρι" }
            },
            {
                id: "blanket",
                x: 220, y: 320, width: 240, height: 60, labelX: 340, labelY: 395,
                words: { en: "Blanket", fr: "Couverture", it: "Coperta", ru: "Одеяло", el: "Κουβέρτα" }
            },
            {
                id: "mirror",
                x: 215, y: 100, width: 70, height: 120, labelX: 250, labelY: 90,
                words: { en: "Mirror", fr: "Miroir", it: "Specchio", ru: "Зеркало", el: "Καθρέφτης" }
            },
            {
                id: "nightstand",
                x: 500, y: 290, width: 80, height: 90, labelX: 540, labelY: 395,
                words: { en: "Nightstand", fr: "Table de chevet", it: "Comodino", ru: "Прикроватная тумбочка", el: "Κομοδίνο" }
            },
            {
                id: "lamp",
                x: 520, y: 210, width: 45, height: 80, labelX: 542, labelY: 200,
                words: { en: "Desk lamp", fr: "Lampe de chevet", it: "Lampada da tavolo", ru: "Настольная лампа", el: "Επιτραπέζιο φωτιστικό" }
            },
            {
                id: "curtains",
                x: 320, y: 40, width: 220, height: 180, labelX: 430, labelY: 30,
                words: { en: "Curtains", fr: "Rideaux", it: "Tende", ru: "Шторы", el: "Κουρτίνες" }
            }
        ]
    };
})();
