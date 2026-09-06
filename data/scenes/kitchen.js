(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['kitchen'] = {
        id: 'kitchen',
        level: 'A1',
        title: {
            en: "Kitchen",
            fr: "Cuisine",
            it: "Cucina",
            ru: "Кухня",
            el: "Κουζίνα",
            es: "Cocina",
            de: "Küche",
            pt: "Cozinha",
            hy: "Խոհանոց",
            ka: "სამზარეულო",
            tt: "Ашбүлмә",
            ba: "Ашбүлмә",
            br: "Kegin"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "routine_calendar",
                x: 398, y: 18, width: 44, height: 44, labelX: 420, labelY: 8,
                labels: { en: "⏰ Clock / Routine →", fr: "⏰ Horloge / Routine →", it: "⏰ Orologio / Routine →", ru: "⏰ Часы / Распорядок →", el: "⏰ Ρολόι / Ρουτίνα →" }
            },
            {
                targetSceneId: "apartment",
                x: 15, y: 140, width: 35, height: 230, labelX: 32, labelY: 125,
                labels: { en: "🚪 Living Room →", fr: "🚪 Salon →", it: "🚪 Soggiorno →", ru: "🚪 Гостиная →", el: "🚪 Σαλόνι →" }
            },
            {
                targetSceneId: "bedroom",
                x: 750, y: 140, width: 35, height: 230, labelX: 768, labelY: 125,
                labels: { en: "🚪 Bedroom →", fr: "🚪 Chambre →", it: "🚪 Camera →", ru: "🚪 Спальня →", el: "🚪 Υπνοδωμάτιο →" }
            },
            {
                targetSceneId: "bathroom",
                x: 620, y: 140, width: 35, height: 120, labelX: 638, labelY: 125,
                labels: { en: "🚪 Bathroom →", fr: "🚪 S. de bain →", it: "🚪 Bagno →", ru: "🚪 Ванная →", el: "🚪 Μπάνιο →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="kitchWallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#fef3c7" />
                <stop offset="100%" stop-color="#fde68a" />
              </linearGradient>
              <linearGradient id="kitchFloorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#0f766e" />
                <stop offset="100%" stop-color="#115e59" />
              </linearGradient>
            </defs>

            <!-- Wall & Floor -->
            <rect x="0" y="0" width="800" height="380" fill="url(#kitchWallGrad)" />
            <rect x="0" y="370" width="800" height="10" fill="#d97706" opacity="0.4" />
            <rect x="0" y="380" width="800" height="120" fill="url(#kitchFloorGrad)" />

            <!-- Floor Tiles -->
            <line x1="0" y1="420" x2="800" y2="420" stroke="#042f2e" stroke-width="2" opacity="0.3" />
            <line x1="0" y1="460" x2="800" y2="460" stroke="#042f2e" stroke-width="2" opacity="0.3" />
            <line x1="200" y1="380" x2="200" y2="500" stroke="#042f2e" stroke-width="2" opacity="0.3" />
            <line x1="400" y1="380" x2="400" y2="500" stroke="#042f2e" stroke-width="2" opacity="0.3" />
            <line x1="600" y1="380" x2="600" y2="500" stroke="#042f2e" stroke-width="2" opacity="0.3" />

            <!-- Left Doorway (Back to Living Room) -->
            <rect x="10" y="130" width="45" height="245" fill="#451a03" rx="2" />
            <rect x="15" y="140" width="35" height="230" fill="#78350f" />
            <circle cx="42" cy="255" r="4" fill="#fbbf24" />

            <!-- Right Doorway (to Bedroom) -->
            <rect x="745" y="130" width="45" height="245" fill="#451a03" rx="2" />
            <rect x="750" y="140" width="35" height="230" fill="#78350f" />
            <circle cx="758" cy="255" r="4" fill="#fbbf24" />

            <!-- Wall Clock (Link to Routine & Calendar Hub) -->
            <g id="illustration-clock">
              <circle cx="420" cy="40" r="20" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
              <line x1="420" y1="40" x2="420" y2="28" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
              <line x1="420" y1="40" x2="430" y2="40" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
              <circle cx="420" cy="40" r="3" fill="#ef4444"/>
            </g>

            <!-- Countertop Base -->
            <rect x="80" y="260" width="380" height="120" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2" />
            <rect x="75" y="250" width="390" height="12" fill="#334155" rx="2" />

            <!-- 1. Cupboard -->
            <g id="illustration-cupboard">
              <rect x="80" y="60" width="280" height="120" fill="#1e293b" rx="4" />
              <rect x="85" y="65" width="132" height="110" fill="#334155" rx="2" />
              <rect x="223" y="65" width="132" height="110" fill="#334155" rx="2" />
              <circle cx="205" cy="120" r="4" fill="#f8fafc" />
              <circle cx="235" cy="120" r="4" fill="#f8fafc" />
            </g>

            <!-- 2. Sink -->
            <g id="illustration-sink">
              <rect x="100" y="250" width="110" height="12" fill="#94a3b8" />
              <rect x="110" y="262" width="90" height="40" fill="#cbd5e1" rx="4" />
              <!-- Faucet -->
              <path d="M150 250 L150 220 C150 205 165 205 165 220" fill="none" stroke="#64748b" stroke-width="6" stroke-linecap="round" />
            </g>

            <!-- 3. Oven -->
            <g id="illustration-oven">
              <rect x="280" y="262" width="100" height="118" fill="#0f172a" />
              <rect x="290" y="280" width="80" height="60" fill="#38bdf8" opacity="0.3" stroke="#475569" stroke-width="3" />
              <rect x="300" y="270" width="60" height="6" fill="#94a3b8" rx="2" />
            </g>

            <!-- 4. Kettle & Pot -->
            <g id="illustration-kettle_pot">
              <!-- Kettle -->
              <path d="M230 250 L250 250 L255 220 L225 220 Z" fill="#ef4444" />
              <path d="M250 230 Q265 225 255 240" fill="none" stroke="#dc2626" stroke-width="3" />
              <!-- Pot -->
              <rect x="390" y="225" width="55" height="25" fill="#64748b" rx="3" />
              <rect x="385" y="220" width="65" height="5" fill="#475569" rx="2" />
            </g>

            <!-- 5. Fridge -->
            <g id="illustration-fridge">
              <rect x="490" y="100" width="110" height="280" fill="#e2e8f0" stroke="#94a3b8" stroke-width="3" rx="8" />
              <line x1="490" y1="200" x2="600" y2="200" stroke="#94a3b8" stroke-width="3" />
              <rect x="505" y="140" width="8" height="40" fill="#64748b" rx="2" />
              <rect x="505" y="220" width="8" height="40" fill="#64748b" rx="2" />
            </g>

            <!-- 6. Dining Table & Chairs -->
            <g id="illustration-table_chairs">
              <!-- Chair Left -->
              <rect x="625" y="320" width="30" height="70" fill="#b45309" rx="3" />
              <rect x="620" y="300" width="40" height="25" fill="#d97706" rx="2" />
              <!-- Table -->
              <rect x="640" y="330" width="130" height="12" fill="#78350f" rx="3" />
              <rect x="655" y="342" width="12" height="60" fill="#451a03" />
              <rect x="743" y="342" width="12" height="60" fill="#451a03" />
              <!-- Chair Right -->
              <rect x="755" y="320" width="30" height="70" fill="#b45309" rx="3" />
              <rect x="750" y="300" width="40" height="25" fill="#d97706" rx="2" />
            </g>
        `,
        hotspots: [
            {
                id: "fridge",
                x: 490, y: 100, width: 110, height: 280, labelX: 545, labelY: 90,
                words: { en: "Fridge", fr: "Réfrigérateur", it: "Frigorifero", ru: "Холодильник", el: "Ψυγείο" }
            },
            {
                id: "oven",
                x: 280, y: 260, width: 100, height: 120, labelX: 330, labelY: 395,
                words: { en: "Oven", fr: "Four", it: "Forno", ru: "Духовка", el: "Φούρνος" }
            },
            {
                id: "sink",
                x: 100, y: 210, width: 110, height: 80, labelX: 155, labelY: 200,
                words: { en: "Sink", fr: "Évier", it: "Lavello", ru: "Раковина", el: "Νεροχύτης" }
            },
            {
                id: "cupboard",
                x: 80, y: 60, width: 280, height: 120, labelX: 220, labelY: 50,
                words: { en: "Cupboard", fr: "Placard", it: "Credenza", ru: "Кухонный шкаф", el: "Ντουλάπι" }
            },
            {
                id: "kettle",
                x: 220, y: 215, width: 45, height: 35, labelX: 242, labelY: 205,
                words: { en: "Kettle", fr: "Bouilloire", it: "Bollitore", ru: "Чайник", el: "Βραστήρας" }
            },
            {
                id: "table",
                x: 640, y: 330, width: 130, height: 70, labelX: 705, labelY: 410,
                words: { en: "Dining table", fr: "Table à manger", it: "Tavolo da pranzo", ru: "Обеденный стол", el: "Τραπέζι φαγητού" }
            },
            {
                id: "chair",
                x: 615, y: 300, width: 45, height: 90, labelX: 635, labelY: 290,
                words: { en: "Chair", fr: "Chaise", it: "Sedia", ru: "Стул", el: "Καρέκλα" }
            },
            {
                id: "pot",
                x: 380, y: 215, width: 75, height: 35, labelX: 417, labelY: 205,
                words: { en: "Cooking pot", fr: "Faitout", it: "Pentola", ru: "Кастрюля", el: "Κατσαρόλα" }
            }
        ]
    };
})();
