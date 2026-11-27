(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['apartment_plan'] = {
        id: 'apartment_plan',
        level: 'A1',
        title: {
            en: "Apartment Floor Plan 📐",
            fr: "Plan de l'appartement 📐",
            it: "Pianta dell'appartamento 📐",
            ru: "План квартиры 📐",
            el: "Κάτοψη διαμερίσματος 📐",
            es: "Plano del apartamento 📐",
            de: "Wohnungsgrundriss 📐"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "apartment",
                x: 15, y: 220, width: 35, height: 80, labelX: 32, labelY: 205,
                labels: { en: "🛋️ Living Room →", fr: "🛋️ Salon →", it: "🛋️ Soggiorno →", ru: "🛋️ Гостиная →", el: "🛋️ Σαλόνι →" }
            },
            {
                targetSceneId: "bedroom",
                x: 750, y: 70, width: 35, height: 80, labelX: 768, labelY: 55,
                labels: { en: "🛏️ Bedroom →", fr: "🛏️ Chambre →", it: "🛏️ Camera →", ru: "🛏️ Спальня →", el: "🛏️ Υπνοδωμάτιο →" }
            },
            {
                targetSceneId: "kitchen",
                x: 15, y: 70, width: 35, height: 80, labelX: 32, labelY: 55,
                labels: { en: "🍳 Kitchen →", fr: "🍳 Cuisine →", it: "🍳 Cucina →", ru: "🍳 Кухня →", el: "🍳 Κουζίνα →" }
            },
            {
                targetSceneId: "bathroom",
                x: 750, y: 220, width: 35, height: 80, labelX: 768, labelY: 205,
                labels: { en: "🚿 Bathroom →", fr: "🚿 S. de bain →", it: "🚿 Bagno →", ru: "🚿 Ванная →", el: "🚿 Μπάνιο →" }
            },
            {
                targetSceneId: "city",
                x: 360, y: 440, width: 80, height: 35, labelX: 400, labelY: 425,
                labels: { en: "🚪 Exit to Street →", fr: "🚪 Sortir dans la rue →", it: "🚪 Esci in strada →", ru: "🚪 Выход на улицу →", el: "🚪 Έξοδος στον δρόμο →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="planBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#0f172a" />
                <stop offset="100%" stop-color="#1e293b" />
              </linearGradient>
              <pattern id="blueprintGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" stroke-width="1" />
              </pattern>
            </defs>

            <!-- Blueprint Background -->
            <rect x="0" y="0" width="800" height="500" fill="url(#planBg)" />
            <rect x="0" y="0" width="800" height="500" fill="url(#blueprintGrid)" />

            <!-- Title Header Banner -->
            <rect x="250" y="10" width="300" height="35" fill="#1e3a8a" stroke="#38bdf8" stroke-width="2" rx="6" />
            <text x="400" y="33" fill="#f0f9ff" font-weight="700" font-size="14" text-anchor="middle">APARTMENT BLUEPRINT / ARCHITECTURE</text>

            <!-- Outer Blueprint Wall -->
            <rect x="60" y="50" width="680" height="420" fill="none" stroke="#38bdf8" stroke-width="6" rx="4" />

            <!-- Room Dividers -->
            <!-- Horizontal main wall -->
            <line x1="60" y1="170" x2="740" y2="170" stroke="#38bdf8" stroke-width="5" />
            <!-- Vertical main wall -->
            <line x1="380" y1="50" x2="380" y2="350" stroke="#38bdf8" stroke-width="5" />
            <line x1="580" y1="170" x2="580" y2="350" stroke="#38bdf8" stroke-width="5" />
            <!-- Hallway bottom wall -->
            <line x1="60" y1="350" x2="740" y2="350" stroke="#38bdf8" stroke-width="5" />

            <!-- Room Fills & Color Badges -->
            <!-- Kitchen Fill -->
            <rect x="65" y="55" width="310" height="110" fill="#fef3c7" opacity="0.15" />
            <!-- Bedroom Fill -->
            <rect x="385" y="55" width="350" height="110" fill="#fce7f3" opacity="0.15" />
            <!-- Living Room Fill -->
            <rect x="65" y="175" width="310" height="170" fill="#dbeafe" opacity="0.15" />
            <!-- Bathroom Fill -->
            <rect x="385" y="175" width="190" height="170" fill="#ccfbf1" opacity="0.15" />
            <!-- Balcony Fill -->
            <rect x="585" y="175" width="150" height="170" fill="#dcfce7" opacity="0.15" />
            <!-- Hallway Fill -->
            <rect x="65" y="355" width="670" height="110" fill="#f1f5f9" opacity="0.1" />

            <!-- Room Icons & Labels in Blueprint -->
            <text x="220" y="115" fill="#fef08a" font-size="16" font-weight="700" text-anchor="middle">🍳 Kitchen</text>
            <text x="560" y="115" fill="#f472b6" font-size="16" font-weight="700" text-anchor="middle">🛏️ Bedroom</text>
            <text x="220" y="260" fill="#60a5fa" font-size="18" font-weight="700" text-anchor="middle">🛋️ Living Room</text>
            <text x="480" y="260" fill="#2dd4bf" font-size="16" font-weight="700" text-anchor="middle">🚿 Bathroom</text>
            <text x="660" y="260" fill="#4ade80" font-size="16" font-weight="700" text-anchor="middle">🪴 Balcony</text>
            <text x="220" y="410" fill="#cbd5e1" font-size="16" font-weight="700" text-anchor="middle">🚪 Hallway / Entrance</text>

            <!-- Front Entrance Door Arch -->
            <path d="M 360 470 A 40 40 0 0 1 400 430" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4 4" />
        `,
        hotspots: [
            {
                id: "living_room",
                x: 80, y: 180, width: 280, height: 160, labelX: 220, labelY: 220,
                words: { en: "Living Room", fr: "Salon", it: "Soggiorno", ru: "Гостиная", el: "Σαλόνι" }
            },
            {
                id: "bedroom",
                x: 440, y: 60, width: 280, height: 100, labelX: 560, labelY: 80,
                words: { en: "Bedroom", fr: "Chambre", it: "Camera da letto", ru: "Спальня", el: "Υπνοδωμάτιο" }
            },
            {
                id: "kitchen",
                x: 80, y: 60, width: 280, height: 100, labelX: 220, labelY: 80,
                words: { en: "Kitchen", fr: "Cuisine", it: "Cucina", ru: "Кухня", el: "Κουζίνα" }
            },
            {
                id: "bathroom",
                x: 400, y: 180, width: 160, height: 160, labelX: 480, labelY: 220,
                words: { en: "Bathroom", fr: "Salle de bain", it: "Bagno", ru: "Ванная комната", el: "Μπάνιο" }
            },
            {
                id: "balcony",
                x: 590, y: 180, width: 130, height: 160, labelX: 660, labelY: 220,
                words: { en: "Balcony", fr: "Balcon", it: "Balcone", ru: "Балкон", el: "Μπαλκόνι" }
            },
            {
                id: "hallway",
                x: 80, y: 360, width: 580, height: 100, labelX: 220, labelY: 380,
                words: { en: "Hallway / Entrance", fr: "Couloir / Entrée", it: "Corridoio / Ingresso", ru: "Коридор / Прихожая", el: "Διάδρομος / Είσοδος" }
            }
        ]
    };
})();
