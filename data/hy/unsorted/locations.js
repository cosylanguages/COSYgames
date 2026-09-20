// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Գերմանիա",
        "level": "elementary",
        "theme": "places",
        "lang": "hy",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Գերմանիա",
                "examples": []
            }
        ],
        "id": "hy_elementary_places_002"
    },
    {
        "word": "Կանադա",
        "level": "elementary",
        "theme": "places",
        "lang": "hy",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Կանադա",
                "examples": []
            }
        ],
        "id": "hy_elementary_places_003"
    },
    {
        "word": "Մեքսիկա",
        "level": "elementary",
        "theme": "places",
        "lang": "hy",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Մեքսիկա",
                "examples": []
            }
        ],
        "id": "hy_elementary_places_004"
    },
    {
        "word": "Եգիպտոս",
        "level": "elementary",
        "theme": "places",
        "lang": "hy",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Եգիպտոս",
                "examples": []
            }
        ],
        "id": "hy_elementary_places_005"
    },
    {
        "word": "Թուրքիա",
        "level": "elementary",
        "theme": "places",
        "lang": "hy",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Թուրքիա",
                "examples": []
            }
        ],
        "id": "hy_elementary_places_006"
    },
    {
        "word": "Պորտուգալիա",
        "level": "elementary",
        "theme": "places",
        "lang": "hy",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Պորտուգալիա",
                "examples": []
            }
        ],
        "id": "hy_elementary_places_007"
    },
    {
        "word": "Հայաստան",
        "level": "elementary",
        "theme": "places",
        "lang": "hy",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Հայաստան",
                "examples": []
            }
        ],
        "id": "hy_elementary_places_008"
    },
    {
        "word": "Վրաստան",
        "level": "elementary",
        "theme": "places",
        "lang": "hy",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Վրաստան",
                "examples": []
            }
        ],
        "id": "hy_elementary_places_009"
    },
    {
        "word": "Բերլին",
        "level": "elementary",
        "theme": "places",
        "lang": "hy",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Բերլին",
                "examples": []
            }
        ],
        "id": "hy_elementary_places_010"
    },
    {
        "word": "Մադրիդ",
        "level": "elementary",
        "theme": "places",
        "lang": "hy",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Մադրիդ",
                "examples": []
            }
        ],
        "id": "hy_elementary_places_011"
    },
    {
        "word": "Տորոնտո",
        "level": "elementary",
        "theme": "places",
        "lang": "hy",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Տորոնտո",
                "examples": []
            }
        ],
        "id": "hy_elementary_places_012"
    },
    {
        "word": "Ստամբուլ",
        "level": "elementary",
        "theme": "places",
        "lang": "hy",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Ստամբուլ",
                "examples": []
            }
        ],
        "id": "hy_elementary_places_013"
    },
    {
        "word": "Լիսաբոն",
        "level": "elementary",
        "theme": "places",
        "lang": "hy",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Լիսաբոն",
                "examples": []
            }
        ],
        "id": "hy_elementary_places_014"
    },
    {
        "word": "Երևան",
        "level": "elementary",
        "theme": "places",
        "lang": "hy",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Երևան",
                "examples": []
            }
        ],
        "id": "hy_elementary_places_015"
    },
    {
        "word": "Թբիլիսի",
        "level": "elementary",
        "theme": "places",
        "lang": "hy",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Թբիլիսի",
                "examples": []
            }
        ],
        "id": "hy_elementary_places_016"
    },
    {
        "word": "Կազան",
        "level": "elementary",
        "theme": "places",
        "lang": "hy",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Կազան",
                "examples": []
            }
        ],
        "id": "hy_elementary_places_017"
    }
];
    const lang = "hy";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
