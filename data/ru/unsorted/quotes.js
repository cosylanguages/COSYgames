(function() {
    const data = [
    {
        "id": "ru_elementary_people_022",
        "word": "Жизнь — это то, что происходит с тобой, пока ты оживленно строишь другие планы.",
        "lang": "ru",
        "level": "elementary",
        "theme": "people",
        "form": "phrase",
        "definitions": [
            {
                "text": "Жизнь — это то, что происходит с тобой, пока ты оживленно строишь другие планы.",
                "examples": []
            }
        ],
        "text": "Жизнь — это то, что происходит с тобой, пока ты оживленно строишь другие планы.",
        "author": "John Lennon",
        "transcription": "",
        "emoji": "💬"
    }
];
    const lang = "ru";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();