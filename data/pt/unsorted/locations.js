// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Alemanha",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Alemanha",
                "examples": []
            }
        ],
        "id": "pt_elementary_places_002"
    },
    {
        "word": "Canadá",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Canadá",
                "examples": []
            }
        ],
        "id": "pt_elementary_places_003"
    },
    {
        "word": "México",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "México",
                "examples": []
            }
        ],
        "id": "pt_elementary_places_004"
    },
    {
        "word": "Egito",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Egito",
                "examples": []
            }
        ],
        "id": "pt_elementary_places_005"
    },
    {
        "word": "Turquia",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Turquia",
                "examples": []
            }
        ],
        "id": "pt_elementary_places_006"
    },
    {
        "word": "Portugal",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Portugal",
                "examples": []
            }
        ],
        "id": "pt_elementary_places_007"
    },
    {
        "word": "Armênia",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Armênia",
                "examples": []
            }
        ],
        "id": "pt_elementary_places_008"
    },
    {
        "word": "Geórgia",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Geórgia",
                "examples": []
            }
        ],
        "id": "pt_elementary_places_009"
    },
    {
        "word": "Berlim",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Berlim",
                "examples": []
            }
        ],
        "id": "pt_elementary_places_010"
    },
    {
        "word": "Madrid",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Madrid",
                "examples": []
            }
        ],
        "id": "pt_elementary_places_011"
    },
    {
        "word": "Toronto",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Toronto",
                "examples": []
            }
        ],
        "id": "pt_elementary_places_012"
    },
    {
        "word": "Istambul",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Istambul",
                "examples": []
            }
        ],
        "id": "pt_elementary_places_013"
    },
    {
        "word": "Lisboa",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Lisboa",
                "examples": []
            }
        ],
        "id": "pt_elementary_places_014"
    },
    {
        "word": "Erevan",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Erevan",
                "examples": []
            }
        ],
        "id": "pt_elementary_places_015"
    },
    {
        "word": "Tbilisi",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Tbilisi",
                "examples": []
            }
        ],
        "id": "pt_elementary_places_016"
    },
    {
        "word": "Kazan",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Kazan",
                "examples": []
            }
        ],
        "id": "pt_elementary_places_017"
    }
];
    const lang = "pt";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
