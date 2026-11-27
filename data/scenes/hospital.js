(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['hospital'] = {
        id: 'hospital',
        level: 'B1',
        title: {
            en: "Hospital & Pharmacy",
            fr: "Hôpital et Pharmacie",
            it: "Ospedale e Farmacia",
            ru: "Больница и аптека",
            el: "Νοσοκομείο & Φαρμακείο",
            es: "Hospital y Farmacia",
            de: "Krankenhaus & Apotheke",
            hy: "Հիվանդանոց և Դեղատուն",
            ka: "საავადმყოფო და აფთიაქი"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "city",
                x: 15, y: 140, width: 35, height: 230, labelX: 32, labelY: 125,
                labels: { en: "🚪 City →", fr: "🚪 Ville →", it: "🚪 Città →", ru: "🚪 Город →", el: "🚪 Πόλη →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="hospWall" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#f0fdf4" />
                <stop offset="100%" stop-color="#bbf7d0" />
              </linearGradient>
            </defs>

            <!-- Wall & Floor -->
            <rect x="0" y="0" width="800" height="360" fill="url(#hospWall)" />
            <rect x="0" y="360" width="800" height="140" fill="#e2e8f0" />

            <!-- Red Cross Emblem -->
            <circle cx="400" cy="80" r="35" fill="#ffffff" stroke="#ef4444" stroke-width="4" />
            <rect x="390" y="60" width="20" height="40" fill="#ef4444" />
            <rect x="380" y="70" width="40" height="20" fill="#ef4444" />

            <!-- Doors -->
            <rect x="15" y="140" width="35" height="220" fill="#15803d" />

            <!-- Hospital Bed -->
            <rect x="120" y="280" width="220" height="80" fill="#ffffff" stroke="#64748b" stroke-width="4" rx="8" />
            <rect x="120" y="250" width="50" height="40" fill="#93c5fd" rx="4" />
            <rect x="130" y="360" width="12" height="30" fill="#475569" />
            <rect x="310" y="360" width="12" height="30" fill="#475569" />

            <!-- Heart Monitor -->
            <rect x="370" y="220" width="90" height="80" fill="#0f172a" rx="6" />
            <path d="M380 260 L400 260 L410 240 L420 280 L430 250 L450 260" stroke="#22c55e" stroke-width="3" fill="none" />

            <!-- Medicine Shelf & Pills -->
            <rect x="520" y="140" width="220" height="180" fill="#ffffff" stroke="#16a34a" stroke-width="6" rx="4" />
            <line x1="520" y1="200" x2="740" y2="200" stroke="#16a34a" stroke-width="4" />
            <line x1="520" y1="260" x2="740" y2="260" stroke="#16a34a" stroke-width="4" />

            <!-- Pill Bottles -->
            <rect x="540" y="160" width="25" height="35" fill="#f97316" rx="2" />
            <rect x="580" y="155" width="30" height="40" fill="#3b82f6" rx="2" />
            <rect x="630" y="162" width="20" height="33" fill="#ef4444" rx="2" />
            <!-- Thermometer -->
            <rect x="550" y="220" width="10" height="35" fill="#cbd5e1" rx="2" />
            <circle cx="555" cy="250" r="7" fill="#ef4444" />
        `,
        hotspots: [
            {
                id: "hospital_bed",
                x: 120, y: 250, width: 220, height: 120, labelX: 230, labelY: 240,
                words: { en: "Hospital Bed", fr: "Lit d'hôpital", it: "Letto d'ospedale", ru: "Больничная койка", el: "Κρεβάτι νοσοκομείου" }
            },
            {
                id: "heart_monitor",
                x: 370, y: 220, width: 90, height: 80, labelX: 415, labelY: 210,
                words: { en: "Heart Monitor", fr: "Moniteur cardiaque", it: "Monitor cardiaco", ru: "Кардиомонитор", el: "Μόνιτορ καρδιάς" }
            },
            {
                id: "medicine",
                x: 520, y: 140, width: 220, height: 180, labelX: 630, labelY: 130,
                words: { en: "Medicine / Pharmacy", fr: "Médicaments / Pharmacie", it: "Medicine / Farmacia", ru: "Лекарства / Аптека", el: "Φάρμακα / Φαρμακείο" }
            },
            {
                id: "thermometer",
                x: 540, y: 215, width: 30, height: 45, labelX: 555, labelY: 275,
                words: { en: "Thermometer", fr: "Thermomètre", it: "Termometro", ru: "Градусник", el: "Θερμόμετρο" }
            }
        ]
    };
})();
