(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['school_office'] = {
        id: 'school_office',
        level: 'A2',
        title: {
            en: "School & Office",
            fr: "École et Bureau",
            it: "Scuola e Ufficio",
            ru: "Школа и офис",
            el: "Σχολείο & Γραφείο",
            es: "Escuela y Oficina",
            de: "Schule & Büro",
            hy: "Դպրոց և Գրասենյակ",
            ka: "სკოლა და ოფისი"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "city",
                x: 15, y: 140, width: 35, height: 230, labelX: 32, labelY: 125,
                labels: { en: "🚪 City →", fr: "🚪 Ville →", it: "🚪 Città →", ru: "🚪 Город →", el: "🚪 Πόλη →" }
            },
            {
                targetSceneId: "market",
                x: 380, y: 140, width: 35, height: 100, labelX: 398, labelY: 125,
                labels: { en: "🚪 Market →", fr: "🚪 Marché →", it: "🚪 Mercato →", ru: "🚪 Рынок →", el: "🚪 Αγορά →" }
            },
            {
                targetSceneId: "apartment",
                x: 750, y: 140, width: 35, height: 230, labelX: 768, labelY: 125,
                labels: { en: "🚪 Apartment →", fr: "🚪 Appartement →", it: "🚪 Appartamento →", ru: "🚪 Квартира →", el: "🚪 Διαμέρισμα →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="officeWall" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#f1f5f9" />
                <stop offset="100%" stop-color="#cbd5e1" />
              </linearGradient>
            </defs>

            <!-- Wall & Floor -->
            <rect x="0" y="0" width="800" height="360" fill="url(#officeWall)" />
            <rect x="0" y="360" width="800" height="140" fill="#94a3b8" />

            <!-- Doors -->
            <rect x="15" y="140" width="35" height="220" fill="#334155" />
            <rect x="750" y="140" width="35" height="220" fill="#334155" />

            <!-- Blackboard / Whiteboard -->
            <rect x="220" y="50" width="360" height="180" fill="#1e293b" stroke="#64748b" stroke-width="8" rx="4" />
            <text x="400" y="120" fill="#f8fafc" font-size="20" font-family="monospace" text-anchor="middle">A B C 1 2 3</text>
            <text x="400" y="160" fill="#38bdf8" font-size="16" font-family="monospace" text-anchor="middle">Welcome Students!</text>

            <!-- Desk -->
            <rect x="240" y="290" width="320" height="110" fill="#b45309" stroke="#78350f" stroke-width="4" rx="4" />
            <rect x="260" y="400" width="20" height="70" fill="#78350f" />
            <rect x="520" y="400" width="20" height="70" fill="#78350f" />

            <!-- Laptop Computer -->
            <rect x="340" y="240" width="120" height="70" fill="#0f172a" rx="4" />
            <rect x="348" y="248" width="104" height="54" fill="#38bdf8" />
            <polygon points="320,310 480,310 490,320 310,320" fill="#64748b" />

            <!-- Chair -->
            <rect x="370" y="330" width="60" height="110" fill="#2563eb" rx="6" />

            <!-- Books & Notebooks -->
            <rect x="260" y="280" width="40" height="15" fill="#ef4444" rx="2" />
            <rect x="260" y="265" width="40" height="15" fill="#10b981" rx="2" />

            <!-- Backpack -->
            <rect x="120" y="360" width="80" height="90" fill="#8b5cf6" rx="16" />
            <rect x="140" y="345" width="40" height="20" fill="#6d28d9" rx="4" />
        `,
        hotspots: [
            {
                id: "blackboard",
                x: 220, y: 50, width: 360, height: 180, labelX: 400, labelY: 40,
                words: { en: "Blackboard", fr: "Tableau noir", it: "Lavagna", ru: "Школьная доска", el: "Μαυροπίνακας" }
            },
            {
                id: "laptop",
                x: 320, y: 240, width: 160, height: 80, labelX: 400, labelY: 230,
                words: { en: "Laptop", fr: "Ordinateur portable", it: "Computer portatile", ru: "Ноутбук", el: "Φορητός υπολογιστής" }
            },
            {
                id: "desk",
                x: 240, y: 290, width: 320, height: 110, labelX: 400, labelY: 340,
                words: { en: "Desk", fr: "Bureau", it: "Scrivania", ru: "Письменный стол", el: "Γραφείο" }
            },
            {
                id: "books",
                x: 255, y: 260, width: 50, height: 35, labelX: 280, labelY: 245,
                words: { en: "Books", fr: "Livres", it: "Libri", ru: "Книги", el: "Βιβλία" }
            },
            {
                id: "backpack",
                x: 120, y: 345, width: 80, height: 105, labelX: 160, labelY: 335,
                words: { en: "Backpack", fr: "Sac à dos", it: "Zaino", ru: "Рюкзак", el: "Σχολική τσάντα" }
            }
        ]
    };
})();
