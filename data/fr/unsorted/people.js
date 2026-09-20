// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Marie Curie",
        "level": "elementary",
        "theme": "describing",
        "lang": "fr",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Marie Curie",
                "examples": []
            }
        ],
        "id": "fr_elementary_describing_008"
    }
];
    const lang = "fr";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
