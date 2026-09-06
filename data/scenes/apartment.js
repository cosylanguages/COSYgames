(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['apartment'] = {
        id: 'apartment',
        level: 'A1',
        imageUrl: 'images/scenes/apartment.png',
        title: {
            en: "Living Room",
            fr: "Le salon",
            it: "Il soggiorno",
            ru: "Гостиная",
            el: "Το σαλόνι",
            es: "La sala de estar",
            de: "Das Wohnzimmer",
            pt: "A sala de estar",
            hy: "Հյուրասենյակ",
            ka: "მისაღები ოთախი",
            tt: "Кунак бүлмәсе",
            ba: "Ҡунаҡ бүлмәһе",
            br: "An sal-degemer"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "routine_calendar",
                x: 178, y: 28, width: 44, height: 44, labelX: 200, labelY: 18,
                labels: { en: "⏰ Clock / Routine →", fr: "⏰ Horloge / Routine →", it: "⏰ Orologio / Routine →", ru: "⏰ Часы / Распорядок →", el: "⏰ Ρολόι / Ρουτίνα →" }
            },
            {
                targetSceneId: "bedroom",
                x: 15, y: 140, width: 35, height: 230, labelX: 32, labelY: 125,
                labels: { en: "🚪 Bedroom →", fr: "🚪 Chambre →", it: "🚪 Camera →", ru: "🚪 Спальня →", el: "🚪 Υπνοδωμάτιο →" }
            },
            {
                targetSceneId: "bathroom",
                x: 210, y: 140, width: 35, height: 120, labelX: 228, labelY: 125,
                labels: { en: "🚪 Bathroom →", fr: "🚪 S. de bain →", it: "🚪 Bagno →", ru: "🚪 Ванная →", el: "🚪 Μπάνιο →" }
            },
            {
                targetSceneId: "kitchen",
                x: 750, y: 140, width: 35, height: 230, labelX: 768, labelY: 125,
                labels: { en: "🚪 Kitchen →", fr: "🚪 Cuisine →", it: "🚪 Cucina →", ru: "🚪 Кухня →", el: "🚪 Κουζίνα →" }
            },
            {
                targetSceneId: "city",
                x: 420, y: 140, width: 35, height: 120, labelX: 438, labelY: 125,
                labels: { en: "🚪 City →", fr: "🚪 Ville →", it: "🚪 Città →", ru: "🚪 Город →", el: "🚪 Πόλη →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#f5efe6" />
                <stop offset="100%" stop-color="#e8dec8" />
              </linearGradient>
              <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#c89666" />
                <stop offset="100%" stop-color="#a06e3b" />
              </linearGradient>
            </defs>

            <!-- Wall & Floor -->
            <rect x="0" y="0" width="800" height="380" fill="url(#wallGrad)" />
            <rect x="0" y="370" width="800" height="10" fill="#d0bba2" />
            <rect x="0" y="380" width="800" height="120" fill="url(#floorGrad)" />
            <line x1="0" y1="410" x2="800" y2="410" stroke="#8d592b" stroke-width="1" opacity="0.4" />
            <line x1="0" y1="450" x2="800" y2="450" stroke="#8d592b" stroke-width="1" opacity="0.4" />

            <!-- Left Doorway (to Bedroom) -->
            <rect x="10" y="130" width="45" height="245" fill="#451a03" rx="2" />
            <rect x="15" y="140" width="35" height="230" fill="#78350f" />
            <circle cx="42" cy="255" r="4" fill="#fbbf24" />

            <!-- Right Doorway (to Kitchen) -->
            <rect x="745" y="130" width="45" height="245" fill="#451a03" rx="2" />
            <rect x="750" y="140" width="35" height="230" fill="#78350f" />
            <circle cx="758" cy="255" r="4" fill="#fbbf24" />

            <!-- Sunbeam Ray Overlay -->
            <polygon points="260,210 460,210 580,500 180,500" fill="#fef08a" opacity="0.12" />

            <!-- Wall Clock (Link to Routine & Calendar Hub) -->
            <g id="illustration-clock">
              <circle cx="200" cy="50" r="20" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
              <line x1="200" y1="50" x2="200" y2="38" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
              <line x1="200" y1="50" x2="210" y2="50" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
              <circle cx="200" cy="50" r="3" fill="#ef4444"/>
            </g>

            <!-- 1. Window -->
            <g id="illustration-window">
              <rect x="260" y="60" width="200" height="150" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="6" rx="4" />
              <line x1="360" y1="60" x2="360" y2="210" stroke="#1e3a8a" stroke-width="4" />
              <line x1="260" y1="135" x2="460" y2="135" stroke="#1e3a8a" stroke-width="4" />
              <rect x="250" y="210" width="220" height="12" fill="#e2e8f0" stroke="#475569" stroke-width="2" rx="2" />
            </g>

            <!-- 2. Painting -->
            <g id="illustration-painting">
              <rect x="520" y="80" width="140" height="100" fill="#fef08a" stroke="#78350f" stroke-width="6" rx="2" />
              <path d="M530 160 L570 120 L610 150 L650 110 L650 170 L530 170 Z" fill="#22c55e" />
              <circle cx="610" cy="110" r="14" fill="#f97316" />
            </g>

            <!-- 3. Bookshelf -->
            <g id="illustration-bookshelf">
              <rect x="60" y="80" width="120" height="200" fill="#78350f" rx="4" />
              <rect x="68" y="90" width="104" height="180" fill="#451a03" />
              <rect x="68" y="135" width="104" height="6" fill="#78350f" />
              <rect x="68" y="185" width="104" height="6" fill="#78350f" />
              <rect x="68" y="235" width="104" height="6" fill="#78350f" />
              <rect x="75" y="105" width="12" height="30" fill="#ef4444" />
              <rect x="89" y="100" width="10" height="35" fill="#3b82f6" />
              <rect x="101" y="108" width="14" height="27" fill="#10b981" />
              <rect x="117" y="102" width="11" height="33" fill="#f59e0b" />
              <rect x="75" y="150" width="14" height="35" fill="#8b5cf6" />
              <rect x="91" y="155" width="12" height="30" fill="#ec4899" />
              <rect x="105" y="148" width="15" height="37" fill="#06b6d4" />
              <rect x="80" y="205" width="16" height="30" fill="#f97316" />
              <rect x="98" y="200" width="12" height="35" fill="#84cc16" />
            </g>

            <!-- 4. Rug -->
            <g id="illustration-rug">
              <ellipse cx="400" cy="455" rx="160" ry="35" fill="#e0e7ff" stroke="#6366f1" stroke-width="4" />
              <ellipse cx="400" cy="455" rx="130" ry="25" fill="none" stroke="#818cf8" stroke-width="2" stroke-dasharray="8 4" />
            </g>

            <!-- 5. Sofa -->
            <g id="illustration-sofa">
              <rect x="280" y="300" width="240" height="90" fill="#2563eb" rx="16" />
              <rect x="280" y="280" width="240" height="45" fill="#1d4ed8" rx="12" />
              <rect x="295" y="320" width="100" height="50" fill="#3b82f6" rx="8" />
              <rect x="405" y="320" width="100" height="50" fill="#3b82f6" rx="8" />
              <rect x="265" y="305" width="30" height="75" fill="#1e40af" rx="10" />
              <rect x="505" y="305" width="30" height="75" fill="#1e40af" rx="10" />
              <rect x="285" y="385" width="12" height="15" fill="#451a03" />
              <rect x="503" y="385" width="12" height="15" fill="#451a03" />
            </g>

            <!-- 6. Armchair -->
            <g id="illustration-armchair">
              <rect x="80" y="320" width="140" height="80" fill="#dc2626" rx="14" />
              <rect x="80" y="300" width="140" height="40" fill="#b91c1c" rx="10" />
              <rect x="95" y="335" width="110" height="45" fill="#ef4444" rx="8" />
              <rect x="68" y="320" width="25" height="70" fill="#991b1b" rx="8" />
              <rect x="207" y="320" width="25" height="70" fill="#991b1b" rx="8" />
              <rect x="85" y="395" width="10" height="15" fill="#451a03" />
              <rect x="205" y="395" width="10" height="15" fill="#451a03" />
            </g>

            <!-- 7. Houseplant -->
            <g id="illustration-plant">
              <path d="M220 330 L260 330 L255 370 L225 370 Z" fill="#d97706" />
              <circle cx="240" cy="300" r="25" fill="#16a34a" />
              <circle cx="225" cy="285" r="20" fill="#22c55e" />
              <circle cx="255" cy="285" r="20" fill="#15803d" />
              <circle cx="240" cy="270" r="18" fill="#4ade80" />
            </g>

            <!-- 8. Television -->
            <g id="illustration-tv">
              <rect x="580" y="290" width="150" height="50" fill="#525252" rx="4" />
              <rect x="590" y="210" width="130" height="85" fill="#171717" rx="6" stroke="#404040" stroke-width="3" />
              <rect x="596" y="216" width="118" height="73" fill="#38bdf8" opacity="0.8" rx="2" />
              <rect x="640" y="285" width="30" height="8" fill="#262626" />
            </g>

            <!-- 9. Floor Lamp -->
            <g id="illustration-lamp">
              <rect x="548" y="380" width="20" height="8" fill="#737373" rx="2" />
              <line x1="558" y1="280" x2="558" y2="380" stroke="#737373" stroke-width="6" />
              <path d="M535 280 L581 280 L571 250 L545 250 Z" fill="#fde047" stroke="#ca8a04" stroke-width="2" />
              <polygon points="535,280 581,280 620,380 496,380" fill="#fef08a" opacity="0.25" />
            </g>

            <!-- 10. Coffee Table -->
            <g id="illustration-coffee_table">
              <ellipse cx="400" cy="425" rx="100" ry="20" fill="#a16207" />
              <rect x="330" y="430" width="10" height="35" fill="#78350f" />
              <rect x="460" y="430" width="10" height="35" fill="#78350f" />
              <ellipse cx="380" cy="420" rx="8" ry="4" fill="#ffffff" />
              <rect x="375" y="415" width="10" height="7" fill="#f8fafc" rx="1" />
            </g>
        `,
        hotspots: [
            {
                id: "sofa",
                x: 280, y: 280, width: 240, height: 130, labelX: 400, labelY: 270,
                words: { en: "Sofa", fr: "Canapé", it: "Divano", ru: "Диван", el: "Καναπές" }
            },
            {
                id: "armchair",
                x: 80, y: 300, width: 140, height: 130, labelX: 150, labelY: 290,
                words: { en: "Armchair", fr: "Fauteuil", it: "Poltrona", ru: "Кресло", el: "Πολυθρόνα" }
            },
            {
                id: "coffee_table",
                x: 290, y: 400, width: 220, height: 70, labelX: 400, labelY: 420,
                words: { en: "Coffee table", fr: "Table basse", it: "Tavolino", ru: "Журнальный столик", el: "Τραπεζάκι σαλονιού" }
            },
            {
                id: "tv",
                x: 580, y: 220, width: 150, height: 110, labelX: 655, labelY: 210,
                words: { en: "Television", fr: "Télévision", it: "Televisore", ru: "Телевизор", el: "Τηλεόραση" }
            },
            {
                id: "bookshelf",
                x: 60, y: 80, width: 120, height: 200, labelX: 120, labelY: 70,
                words: { en: "Bookshelf", fr: "Bibliothèque", it: "Libreria", ru: "Книжный шкаф", el: "Βιβλιοθήκη" }
            },
            {
                id: "lamp",
                x: 530, y: 260, width: 45, height: 130, labelX: 550, labelY: 250,
                words: { en: "Floor lamp", fr: "Lampadaire", it: "Lampada da terra", ru: "Торшер", el: "Επιδαπέδιο φωτιστικό" }
            },
            {
                id: "plant",
                x: 210, y: 260, width: 60, height: 110, labelX: 240, labelY: 250,
                words: { en: "Houseplant", fr: "Plante d'intérieur", it: "Pianta da appartamento", ru: "Комнатное растение", el: "Φυτό εσωτερικού χώρου" }
            },
            {
                id: "window",
                x: 260, y: 60, width: 200, height: 150, labelX: 360, labelY: 50,
                words: { en: "Window", fr: "Fenêtre", it: "Finestra", ru: "Окно", el: "Παράθυρο" }
            },
            {
                id: "rug",
                x: 240, y: 420, width: 320, height: 70, labelX: 400, labelY: 475,
                words: { en: "Rug", fr: "Tapis", it: "Tappeto", ru: "Ковер", el: "Χαλί" }
            },
            {
                id: "painting",
                x: 520, y: 80, width: 140, height: 100, labelX: 590, labelY: 70,
                words: { en: "Painting", fr: "Tableau", it: "Quadro", ru: "Картина", el: "Πίνακας" }
            }
        ]
    };
})();
