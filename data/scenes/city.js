/**
 * games/data/scenes/city.js
 * Unit 11 — City Infrastructure & Places scene dataset for Scene Match activity.
 */
(function() {
    'use strict';

    if (!window.COSY_SCENE_DATA) {
        window.COSY_SCENE_DATA = {};
    }

    window.COSY_SCENE_DATA.city = {
        id: 'city',
        level: 'A2',
        title: {
            en: 'City Street',
            fr: 'Rue de la ville',
            it: 'Strada cittadina',
            ru: 'Городская улица',
            el: 'Δρόμος της πόλης'
        },
        viewBox: '0 0 800 500',
        doors: [
            {
                targetSceneId: "apartment",
                x: 15, y: 140, width: 35, height: 220, labelX: 32, labelY: 125,
                labels: { en: "🚪 Apartment →", fr: "🚪 Appartement →", it: "🚪 Appartamento →", ru: "🚪 Квартира →", el: "🚪 Διαμέρισμα →" }
            },
            {
                targetSceneId: "school_office",
                x: 135, y: 140, width: 35, height: 160, labelX: 152, labelY: 125,
                labels: { en: "🚪 School →", fr: "🚪 École →", it: "🚪 Scuola →", ru: "🚪 Школа →", el: "🚪 Σχολείο →" }
            },
            {
                targetSceneId: "hospital",
                x: 305, y: 100, width: 35, height: 200, labelX: 322, labelY: 85,
                labels: { en: "🚪 Hospital →", fr: "🚪 Hôpital →", it: "🚪 Ospedale →", ru: "🚪 Больница →", el: "🚪 Νοσοκομείο →" }
            },
            {
                targetSceneId: "market",
                x: 465, y: 140, width: 35, height: 160, labelX: 482, labelY: 125,
                labels: { en: "🚪 Market →", fr: "🚪 Marché →", it: "🚪 Mercato →", ru: "🚪 Рынок →", el: "🚪 Αγορά →" }
            },
            {
                targetSceneId: "cafe",
                x: 660, y: 160, width: 35, height: 140, labelX: 678, labelY: 145,
                labels: { en: "🚪 Cafe →", fr: "🚪 Café →", it: "🚪 Caffè →", ru: "🚪 Кафе →", el: "🚪 Καφέ →" }
            },
            {
                targetSceneId: "clothing",
                x: 745, y: 160, width: 35, height: 140, labelX: 762, labelY: 145,
                labels: { en: "🚪 Boutique →", fr: "🚪 Boutique →", it: "🚪 Boutique →", ru: "🚪 Магазин →", el: "🚪 Μπουτίκ →" }
            },
            {
                targetSceneId: "airport",
                x: 80, y: 320, width: 80, height: 40, labelX: 120, labelY: 310,
                labels: { en: "🚌 Airport →", fr: "🚌 Aéroport →", it: "🚌 Aeroporto →", ru: "🚌 Аэропорт →", el: "🚌 Αεροδρόμιο →" }
            },
            {
                targetSceneId: "park_nature",
                x: 445, y: 370, width: 35, height: 80, labelX: 462, labelY: 355,
                labels: { en: "🚪 Park →", fr: "🚪 Parc →", it: "🚪 Parco →", ru: "🚪 Парк →", el: "🚪 Πάρκο →" }
            }
        ],
        hotspots: [
            {
                id: 'school',
                x: 30,
                y: 120,
                width: 140,
                height: 180,
                labelX: 100,
                labelY: 100,
                words: {
                    en: 'School',
                    fr: 'École',
                    it: 'Scuola',
                    ru: 'Школа',
                    el: 'Σχολείο'
                }
            },
            {
                id: 'hospital',
                x: 190,
                y: 90,
                width: 150,
                height: 210,
                labelX: 265,
                labelY: 70,
                words: {
                    en: 'Hospital',
                    fr: 'Hôpital',
                    it: 'Ospedale',
                    ru: 'Больница',
                    el: 'Νοσοκομείο'
                }
            },
            {
                id: 'supermarket',
                x: 360,
                y: 140,
                width: 140,
                height: 160,
                labelX: 430,
                labelY: 120,
                words: {
                    en: 'Supermarket',
                    fr: 'Supermarché',
                    it: 'Supermercato',
                    ru: 'Супермаркет',
                    el: 'Σούπερ μάρκετ'
                }
            },
            {
                id: 'bank',
                x: 520,
                y: 130,
                width: 120,
                height: 170,
                labelX: 580,
                labelY: 110,
                words: {
                    en: 'Bank',
                    fr: 'Banque',
                    it: 'Banca',
                    ru: 'Банк',
                    el: 'Τράπεζα'
                }
            },
            {
                id: 'restaurant',
                x: 660,
                y: 150,
                width: 120,
                height: 150,
                labelX: 720,
                labelY: 130,
                words: {
                    en: 'Restaurant',
                    fr: 'Restaurant',
                    it: 'Ristorante',
                    ru: 'Ресторан',
                    el: 'Εστιατόριο'
                }
            },
            {
                id: 'bus_stop',
                x: 80,
                y: 320,
                width: 80,
                height: 120,
                labelX: 120,
                labelY: 300,
                words: {
                    en: 'Bus stop',
                    fr: 'Arrêt de bus',
                    it: 'Fermata dell\'autobus',
                    ru: 'Автобусная остановка',
                    el: 'Stasi leoforeiou'
                }
            },
            {
                id: 'park',
                x: 280,
                y: 330,
                width: 200,
                height: 120,
                labelX: 380,
                labelY: 310,
                words: {
                    en: 'Park',
                    fr: 'Parc',
                    it: 'Parco',
                    ru: 'Парк',
                    el: 'Πάρκο'
                }
            },
            {
                id: 'library',
                x: 580,
                y: 320,
                width: 140,
                height: 120,
                labelX: 650,
                labelY: 300,
                words: {
                    en: 'Library',
                    fr: 'Bibliothèque',
                    it: 'Biblioteca',
                    ru: 'Библиотека',
                    el: 'Βιβλιοθήκη'
                }
            }
        ],
        svgBackground: `
            <defs>
                <linearGradient id="ct-sky" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#bae6fd"/>
                    <stop offset="100%" stop-color="#f1f5f9"/>
                </linearGradient>
            </defs>

            <!-- Sky & Road -->
            <rect x="0" y="0" width="800" height="300" fill="url(#ct-sky)"/>
            <rect x="0" y="300" width="800" height="60" fill="#94a3b8"/>
            <line x1="0" y1="330" x2="800" y2="330" stroke="#fef08a" stroke-width="4" stroke-dasharray="20 15"/>
            <rect x="0" y="360" width="800" height="140" fill="#475569"/>

            <!-- Buildings -->
            <!-- School -->
            <rect x="30" y="140" width="140" height="160" fill="#f97316" rx="4"/>
            <polygon points="30,140 100,90 170,140" fill="#ea580c"/>
            <text x="100" y="170" font-weight="700" font-size="14" fill="#ffffff" text-anchor="middle">SCHOOL</text>

            <!-- Hospital -->
            <rect x="190" y="100" width="150" height="200" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2" rx="4"/>
            <rect x="252" y="115" width="26" height="8" fill="#ef4444"/>
            <rect x="261" y="106" width="8" height="26" fill="#ef4444"/>

            <!-- Supermarket -->
            <rect x="360" y="150" width="140" height="150" fill="#22c55e" rx="4"/>
            <text x="430" y="180" font-weight="700" font-size="13" fill="#ffffff" text-anchor="middle">MARKET</text>

            <!-- Bank -->
            <rect x="520" y="140" width="120" height="160" fill="#0284c7" rx="4"/>
            <text x="580" y="170" font-weight="700" font-size="14" fill="#ffffff" text-anchor="middle">BANK</text>

            <!-- Restaurant -->
            <rect x="660" y="160" width="120" height="140" fill="#e11d48" rx="4"/>
            <text x="720" y="190" font-weight="700" font-size="12" fill="#ffffff" text-anchor="middle">CAFE</text>

            <!-- Park Area -->
            <rect x="280" y="370" width="200" height="80" fill="#15803d" rx="10"/>
            <circle cx="320" cy="380" r="20" fill="#22c55e"/>
            <circle cx="440" cy="380" r="20" fill="#22c55e"/>

            <!-- Library -->
            <rect x="580" y="370" width="140" height="80" fill="#78350f" rx="4"/>
            <text x="650" y="410" font-weight="700" font-size="14" fill="#fef08a" text-anchor="middle">LIBRARY</text>
        `
    };
})();
