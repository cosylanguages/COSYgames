// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Alemania",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Alemania",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_002",
        "transcription": "",
        "emoji": "❓"
    },
    {
        "word": "Canadá",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Canadá",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_003",
        "transcription": "",
        "emoji": "❓"
    },
    {
        "word": "México",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "México",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_004",
        "transcription": "",
        "emoji": "❓"
    },
    {
        "word": "Egipto",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Egipto",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_005",
        "transcription": "",
        "emoji": "❓"
    },
    {
        "word": "Turquía",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Turquía",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_006",
        "transcription": "",
        "emoji": "❓"
    },
    {
        "word": "Portugal",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Portugal",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_007",
        "transcription": "",
        "emoji": "❓"
    },
    {
        "word": "Armenia",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Armenia",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_008",
        "transcription": "",
        "emoji": "❓"
    },
    {
        "word": "Georgia",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Georgia",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_009",
        "transcription": "",
        "emoji": "❓"
    },
    {
        "word": "Berlín",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Berlín",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_010",
        "transcription": "",
        "emoji": "❓"
    },
    {
        "word": "Madrid",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Madrid",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_011",
        "transcription": "",
        "emoji": "❓"
    },
    {
        "word": "Toronto",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Toronto",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_012",
        "transcription": "",
        "emoji": "❓"
    },
    {
        "word": "Estambul",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Estambul",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_013",
        "transcription": "",
        "emoji": "❓"
    },
    {
        "word": "Lisboa",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Lisboa",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_014",
        "transcription": "",
        "emoji": "❓"
    },
    {
        "word": "Ereván",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Ereván",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_015",
        "transcription": "",
        "emoji": "❓"
    },
    {
        "word": "Tiflis",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Tiflis",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_016",
        "transcription": "",
        "emoji": "❓"
    },
    {
        "word": "Kazán",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Kazán",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_017",
        "transcription": "",
        "emoji": "❓"
    }
];
    const lang = "es";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
