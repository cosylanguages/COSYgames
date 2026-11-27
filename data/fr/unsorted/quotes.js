(function() {
    const data = [
    {
        "id": "fr_elementary_people_021",
        "word": "La vie, c'est ce qui arrive quand on est occupé à faire d'autres projets.",
        "lang": "fr",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "La vie, c'est ce qui arrive quand on est occupé à faire d'autres projets.",
                "examples": []
            }
        ],
        "author": "John Lennon",
        "transcription": "",
        "emoji": "💬"
    }
];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();