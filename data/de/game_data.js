(function() {
    const data = {
              "fluency": [
                        {
                                  "text": "Deine Morgenroutine ☕",
                                  "level": "starter"
                        },
                        {
                                  "text": "Eine Kindheitserinnerung 🧸",
                                  "level": "starter",
                                  "hints": [
                                            "Wie alt warst du?",
                                            "Wo warst du?",
                                            "Mit wem warst du zusammen?",
                                            "Was ist passiert?",
                                            "Warum erinnerst du dich daran?"
                                  ]
                        },
                        {
                                  "text": "Deine Lieblingsjahreszeit und warum 🍂",
                                  "level": "starter"
                        },
                        {
                                  "text": "Dein Lieblingstier 🐶",
                                  "level": "starter"
                        },
                        {
                                  "text": "Ein idealer Regentag 🌧️",
                                  "level": "starter"
                        },
                        {
                                  "text": "Eine Fähigkeit, die du gerne hättest 🎸",
                                  "level": "elementary"
                        },
                        {
                                  "text": "Das beste Essen, das du je gegessen hast 🍜",
                                  "level": "elementary"
                        },
                        {
                                  "text": "Ein Ort, den du besuchen möchtest 🗺️",
                                  "level": "elementary"
                        },
                        {
                                  "text": "Eine lustige Geschichte aus deinem Leben 🚴",
                                  "level": "elementary"
                        },
                        {
                                  "text": "Dein Lieblingsfest oder deine Lieblings-Tradition 🎄",
                                  "level": "elementary"
                        },
                        {
                                  "text": "Dein perfektes Urlaubsziel 🌴",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Die interessanteste Person, die du kennst 🙋",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Beschreibe dein perfektes Wochenende ☀️",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Das letzte Mal, als du etwas Neues ausprobiert hast 🎯",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Ein neues Hobby, das du gerne anfangen würdest 🎨",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Wie Technologie deinen Alltag verändert 📱",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Was würdest du mit 1 Million Euro tun? 💰",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "Ein Buch oder Film, der deine Sicht verändert hat 📚",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "Wenn du überall auf der Welt leben könntest… 🌍",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "Etwas, worauf du stolz bist 🏆",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "Eine unerwartete Lektion des Lebens 💡",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "Was bedeutet Glück für dich? 😊",
                                  "level": "advanced"
                        },
                        {
                                  "text": "Der Einfluss der Kultur auf unsere Entscheidungen 🏛️",
                                  "level": "advanced"
                        },
                        {
                                  "text": "Die Balance zwischen Ehrgeiz und Zufriedenheit ⚖️",
                                  "level": "advanced"
                        },
                        {
                                  "text": "Ein Urlaub, an den du dich erinnerst",
                                  "level": "elementary",
                                  "hints": [
                                            "Wohin bist du gefahren?",
                                            "Mit wem bist du gefahren?",
                                            "Was hast du dort gemacht?",
                                            "Wie war das Wetter?",
                                            "Was war der beste Moment?"
                                  ]
                        },
                        {
                                  "text": "Dein Lieblingsrestaurant oder -café",
                                  "level": "elementary",
                                  "hints": [
                                            "Wo ist es?",
                                            "Welches Essen servieren sie?",
                                            "Warum magst du es?",
                                            "Mit wem gehst du dorthin?",
                                            "Wann warst du das letzte Mal dort?"
                                  ]
                        },
                        {
                                  "text": "Wie du zur Arbeit oder Schule kommst",
                                  "level": "elementary",
                                  "hints": [
                                            "Wie reist du — Bus, Auto, Fahrrad?",
                                            "Wie lange dauert es?",
                                            "Genießt du die Fahrt?",
                                            "Ist es teuer?",
                                            "Was machst du unterwegs?"
                                  ]
                        },
                        {
                                  "text": "Was du tust, um dich zu entspannen",
                                  "level": "elementary",
                                  "hints": [
                                            "Was hilft dir beim Entspannen?",
                                            "Bist du lieber allein oder mit Leuten zusammen?",
                                            "Wie oft entspannst du dich richtig?",
                                            "Hast du einen Lieblingsort zum Entspannen?",
                                            "Ist es einfach zu entspannen oder findest du es schwierig?"
                                  ]
                        },
                        {
                                  "text": "Ein Film, den du vor Kurzem gesehen hast",
                                  "level": "elementary",
                                  "hints": [
                                            "Wie hieß der Film?",
                                            "Wovon handelte er?",
                                            "Hat er dir gefallen?",
                                            "Wer hat mitgespielt?",
                                            "Würdest du ihn empfehlen?"
                                  ]
                        },
                        {
                                  "text": "Dein ideales Wochenende",
                                  "level": "elementary",
                                  "hints": [
                                            "Was würdest du am Freitagabend machen?",
                                            "Würdest du ausgehen oder zu Hause bleiben?",
                                            "Würdest du irgendwohin reisen?",
                                            "Mit wem würdest du Zeit verbringen?",
                                            "Was würdest du essen?"
                                  ]
                        },
                        {
                                  "text": "Eine Person, die du bewunderst",
                                  "level": "elementary",
                                  "hints": [
                                            "Wer ist diese Person?",
                                            "Was macht sie?",
                                            "Warum bewunderst du sie?",
                                            "Hast du sie schon mal getroffen?",
                                            "Was kannst du von ihr lernen?"
                                  ]
                        },
                        {
                                  "text": "Dein Traum-Urlaubsziel",
                                  "level": "elementary",
                                  "hints": [
                                            "Wohin würdest du reisen?",
                                            "Warum dieser Ort?",
                                            "Mit wem würdest du reisen?",
                                            "Was würdest du dort machen?",
                                            "Wie lange würdest du bleiben?"
                                  ]
                        },
                        {
                                  "text": "Deine Beziehung zu deinem Handy",
                                  "level": "elementary",
                                  "hints": [
                                            "Wie viele Stunden am Tag benutzt du dein Handy?",
                                            "Wofür benutzt du es am meisten?",
                                            "Könntest du eine Woche ohne es auskommen?",
                                            "Hilft es dir oder lenkt es dich ab?",
                                            "Checkst du es als Erstes am Morgen?"
                                  ]
                        },
                        {
                                  "text": "Etwas Lustiges, das dir passiert ist",
                                  "level": "elementary",
                                  "hints": [
                                            "Wann ist das passiert?",
                                            "Wo warst du?",
                                            "Mit wem warst du zusammen?",
                                            "Was genau ist passiert?",
                                            "Lachst du heute noch darüber?"
                                  ]
                        },
                        {
                                  "text": "Deine Hobbys",
                                  "level": "elementary",
                                  "hints": [
                                            "Was machst du in deiner Freizeit?",
                                            "Wann hast du mit diesem Hobby angefangen?",
                                            "Machst du es allein oder mit anderen?",
                                            "Ist es teuer?",
                                            "Was liebst du daran?"
                                  ]
                        },
                        {
                                  "text": "Das Wetter, wo du wohnst",
                                  "level": "elementary",
                                  "hints": [
                                            "Wie ist das Wetter normalerweise?",
                                            "Was ist deine Lieblingswetterart?",
                                            "Beeinflusst das Wetter deine Stimmung?",
                                            "Was ist das schlimmste Wetter, an das du dich erinnerst?",
                                            "Was machst du an Regentagen?"
                                  ]
                        },
                        {
                                  "text": "Ein Geburtstag, an den du dich erinnerst",
                                  "level": "elementary",
                                  "hints": [
                                            "Wessen Geburtstag war es?",
                                            "Wo war die Feier?",
                                            "Was habt ihr gemacht?",
                                            "Gab es eine Überraschung?",
                                            "Was hat ihn besonders gemacht?"
                                  ]
                        },
                        {
                                  "text": "Dinge, die du an deinem Wohnort liebst",
                                  "level": "elementary",
                                  "hints": [
                                            "Was ist deine Lieblingssache an deiner Stadt?",
                                            "Ist es ein guter Ort für Familien?",
                                            "Was kann man dort machen?",
                                            "Was würdest du ändern?",
                                            "Würdest du es einem Freund empfehlen?"
                                  ]
                        },
                        {
                                  "text": "Ein typischer Sonntag",
                                  "level": "elementary",
                                  "hints": [
                                            "Wann wachst du am Sonntag auf?",
                                            "Hast du eine Routine?",
                                            "Kochst du eine große Mahlzeit?",
                                            "Ruhst du dich aus oder bleibst du beschäftigt?",
                                            "Ist Sonntag dein Lieblingstag?"
                                  ]
                        },
                        {
                                  "text": "Essen aus deinem Land",
                                  "level": "elementary",
                                  "hints": [
                                            "Was ist ein traditionelles Gericht?",
                                            "Kochst du es zu Hause?",
                                            "Wann essen die Leute es?",
                                            "Ist es schwierig zuzubereiten?",
                                            "Würdest du es einem Ausländer empfehlen?"
                                  ]
                        },
                        {
                                  "text": "Etwas, das du vor Kurzem gekauft hast",
                                  "level": "elementary",
                                  "hints": [
                                            "Was hast du gekauft?",
                                            "Wo hast du es gekauft?",
                                            "War es teuer?",
                                            "Hast du es gebraucht oder nur gewollt?",
                                            "Bist du zufrieden mit dem Kauf?"
                                  ]
                        },
                        {
                                  "text": "Deine Lieblings-App",
                                  "level": "elementary",
                                  "hints": [
                                            "Welche App benutzt du am meisten?",
                                            "Wofür benutzt du sie?",
                                            "Wann hast du angefangen, sie zu benutzen?",
                                            "Würdest du sie empfehlen?",
                                            "Könntest du ohne sie leben?"
                                  ]
                        },
                        {
                                  "text": "Was du gestern gegessen hast",
                                  "level": "elementary",
                                  "hints": [
                                            "Was hattest du zum Frühstück?",
                                            "Was hast du zu Mittag gegessen?",
                                            "Hast du gekocht oder bist du essen gegangen?",
                                            "War es ein typischer Essenstag?",
                                            "Was war das Beste, das du gegessen hast?"
                                  ]
                        },
                        {
                                  "text": "Ein Ort, der sich für dich wie Zuhause anfühlt",
                                  "level": "intermediate",
                                  "hints": [
                                            "Ist es eine Stadt, ein Haus, ein Land?",
                                            "Wann hast du das zum ersten Mal gespürt?",
                                            "Was macht es zu einem Zuhause für dich?",
                                            "Ist Zuhause ein Ort oder ein Gefühl?",
                                            "Glaubst du, man kann mehr als ein Zuhause haben?"
                                  ]
                        },
                        {
                                  "text": "Etwas, worüber du deine Meinung geändert hast",
                                  "level": "intermediate",
                                  "hints": [
                                            "Was hast du früher gedacht?",
                                            "Was hat sich geändert?",
                                            "Wann ist das passiert?",
                                            "War es eine schrittweise oder eine plötzliche Änderung?",
                                            "Wie denkst du heute darüber?"
                                  ]
                        },
                        {
                                  "text": "Was einen guten Freund ausmacht",
                                  "level": "intermediate",
                                  "hints": [
                                            "Welche Qualitäten zählen in einer Freundschaft am meisten?",
                                            "Sind deine engsten Freunde dir ähnlich oder eher verschieden?",
                                            "Können sich Freundschaften ändern, wenn man älter wird?",
                                            "Was würdest du bei einem Freund nicht tolerieren?",
                                            "Ist es einfach, als Erwachsener echte Freunde zu finden?"
                                  ]
                        },
                        {
                                  "text": "Etwas, das du gerne früher gelernt hättest",
                                  "level": "intermediate",
                                  "hints": [
                                            "Was ist es?",
                                            "Warum hast du es nicht früher gelernt?",
                                            "Wie wäre dein Leben anders verlaufen?",
                                            "Ist es jetzt zu spät, es zu lernen?",
                                            "Würdest du es jemand Jüngeres lehren?"
                                  ]
                        },
                        {
                                  "text": "Eine Fähigkeit, die du zu verbessern versuchst",
                                  "level": "intermediate",
                                  "hints": [
                                            "Was ist die Fähigkeit?",
                                            "Warum hast du dich entschieden, daran zu arbeiten?",
                                            "Wie übst du?",
                                            "Was ist der schwierigste Teil?",
                                            "Wie viel Fortschritt hast du gemacht?"
                                  ]
                        },
                        {
                                  "text": "Was du am Kindsein vermisst",
                                  "level": "intermediate",
                                  "hints": [
                                            "Was vermisst du wirklich?",
                                            "Glaubst du, die Kindheit war einfacher?",
                                            "Worüber haben sich Kinder Sorgen gemacht, was Erwachsene nicht tun?",
                                            "Was haben Erwachsene getan, was du damals nicht verstanden hast, aber heute tust?",
                                            "Würdest du zurückgehen, wenn du könntest?"
                                  ]
                        },
                        {
                                  "text": "Dein idealer Arbeitstag",
                                  "level": "intermediate",
                                  "hints": [
                                            "Wann würdest du anfangen und aufhören?",
                                            "Wo würdest du arbeiten?",
                                            "Mit wem würdest du arbeiten?",
                                            "Was würdest du tun?",
                                            "Wie sehr unterscheidet er sich von deinem echten Arbeitstag?"
                                  ]
                        },
                        {
                                  "text": "Wie sich dein Leben in den letzten Jahren verändert hat",
                                  "level": "intermediate",
                                  "hints": [
                                            "Was ist die größte Veränderung?",
                                            "War es deine Entscheidung?",
                                            "War es zum Besseren?",
                                            "Was ist gleich geblieben?",
                                            "Was wird sich deiner Meinung nach als Nächstes ändern?"
                                  ]
                        },
                        {
                                  "text": "Was dich am lebendigsten fühlen lässt",
                                  "level": "intermediate",
                                  "hints": [
                                            "Gibt es einen Moment oder eine Aktivität, die dich immer mit Energie erfüllt?",
                                            "Sind andere Menschen beteiligt oder bist du allein?",
                                            "Wie oft fühlst du dich so?",
                                            "Hat sich das im Laufe der Zeit geändert?",
                                            "Was hält dich davon ab, es öfter zu tun?"
                                  ]
                        },
                        {
                                  "text": "Deine größte Ablenkung",
                                  "level": "intermediate",
                                  "hints": [
                                            "Was zieht deine Aufmerksamkeit am leichtesten auf sich?",
                                            "Kostet es dich Zeit oder Energie?",
                                            "Hast du versucht, das zu ändern?",
                                            "Ist es völlig schlecht oder gibt es auch etwas Gutes daran?",
                                            "Was würdest du mit der Zeit anfangen, wenn du diese Ablenkung eliminieren würdest?"
                                  ]
                        },
                        {
                                  "text": "Ein Buch, ein Film oder eine Serie, die dir in Erinnerung geblieben ist",
                                  "level": "intermediate",
                                  "hints": [
                                            "Wie hieß es?",
                                            "Worum ging es?",
                                            "Warum ist es dir in Erinnerung geblieben?",
                                            "Hat es deine Denkweise über etwas verändert?",
                                            "Würdest du es empfehlen und wem?"
                                  ]
                        },
                        {
                                  "text": "Was Zuhause für dich bedeutet",
                                  "level": "intermediate",
                                  "hints": [
                                            "Ist Zuhause eine Person, ein Ort oder ein Gefühl?",
                                            "Wo fühlst du dich am meisten zu Hause?",
                                            "Hat sich deine Vorstellung von Zuhause verändert, als du älter wurdest?",
                                            "Kannst du dich an einem neuen Ort zu Hause fühlen?",
                                            "Ist Zuhause ein Ort, zu dem du zurückkehrst, oder etwas, das du in dir trägst?"
                                  ]
                        },
                        {
                                  "text": "Etwas, das du anders machst als die meisten Menschen",
                                  "level": "intermediate",
                                  "hints": [
                                            "Was ist es?",
                                            "Wann hast du angefangen, es so zu machen?",
                                            "Haben dich Leute jemals darauf angesprochen?",
                                            "Macht es dein Leben besser?",
                                            "Glaubst du, jeder sollte es so machen wie du?"
                                  ]
                        },
                        {
                                  "text": "Eine Gewohnheit, auf die du stolz bist",
                                  "level": "intermediate",
                                  "hints": [
                                            "Was ist die Gewohnheit?",
                                            "Wie lange hast du sie schon?",
                                            "Wie hast du sie aufgebaut?",
                                            "Welchen Unterschied macht sie?",
                                            "Hat dich jemand dazu inspiriert?"
                                  ]
                        },
                        {
                                  "text": "Eine Reise, die dich überrascht hat",
                                  "level": "intermediate",
                                  "hints": [
                                            "Wohin bist du gereist?",
                                            "Was hat dich überrascht?",
                                            "War es der Ort, die Menschen oder das, was passiert ist?",
                                            "Hat es deine Pläne geändert?",
                                            "Würdest du zurückkehren?"
                                  ]
                        },
                        {
                                  "text": "Deine Beziehung zu sozialen Medien",
                                  "level": "intermediate",
                                  "hints": [
                                            "Welche Plattformen nutzt du?",
                                            "Wie viel Zeit verbringst du darauf?",
                                            "Beeinflusst es deine Stimmung?",
                                            "Hast du jemals eine Pause davon gemacht?",
                                            "Wie sähe dein Leben ohne sie aus?"
                                  ]
                        },
                        {
                                  "text": "Wie Erfolg für dich aussieht",
                                  "level": "intermediate",
                                  "hints": [
                                            "Wie definierst du Erfolg?",
                                            "Ist es Geld, Glück, Beziehungen?",
                                            "Hat sich deine Definition im Laufe der Zeit geändert?",
                                            "Hältst du dich für erfolgreich?",
                                            "Ist dir die Meinung anderer über deinen Erfolg wichtig?"
                                  ]
                        },
                        {
                                  "text": "Deine Beziehung zum Essen",
                                  "level": "intermediate",
                                  "hints": [
                                            "Kochst du oft?",
                                            "Ist Essen nur Treibstoff oder etwas mehr?",
                                            "Isst du mit anderen oder allein?",
                                            "Gibt es ein Essen, das stark mit einer Erinnerung verbunden ist?",
                                            "Hat sich deine Beziehung zum Essen verändert?"
                                  ]
                        },
                        {
                                  "text": "Etwas, das dich immer zum Lachen bringt",
                                  "level": "intermediate",
                                  "hints": [
                                            "Was ist es?",
                                            "Warum bringt es dich zum Lachen?",
                                            "Kannst du über schwierige Dinge lachen?",
                                            "Lachen du und deine Freunde über die gleichen Dinge?",
                                            "Ist dein Sinn für Humor in verschiedenen Sprachen unterschiedlich?"
                                  ]
                        },
                        {
                                  "text": "Ein Ratschlag, den du deinem jüngeren Ich geben würdest",
                                  "level": "intermediate",
                                  "hints": [
                                            "Wie alt wäre dein jüngeres Ich?",
                                            "Was wäre der Rat?",
                                            "Warum wusstest du das damals noch nicht?",
                                            "Glaubst du, du hättest zugehört?",
                                            "Wer hat dir den besten Rat deines Lebens gegeben?"
                                  ]
                        },
                        {
                                  "text": "Die Zukunft der Welt in 50 Jahren",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Welche technologischen Veränderungen erwartest du?",
                                            "Wie wird die Umwelt aussehen?",
                                            "Werden soziale Strukturen anders sein?",
                                            "Gibt es etwas, worüber du dir Sorgen machst?",
                                            "Was macht dich optimistisch für die Zukunft?"
                                  ]
                        },
                        {
                                  "text": "Die Auswirkungen des Klimawandels auf lokale Gemeinschaften",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Wie hat sich deine Region verändert?",
                                            "Welchen spezifischen Risiken sind die Menschen ausgesetzt?",
                                            "Wer ist am verletzlichsten?",
                                            "Werden genug Maßnahmen ergriffen?",
                                            "Was können Einzelne tun, um etwas zu bewirken?"
                                  ]
                        },
                        {
                                  "text": "Eine Überzeugung, die du hast, die die meisten Menschen um dich herum nicht teilen",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Was ist diese Überzeugung?",
                                            "Wann hast du sie entwickelt?",
                                            "Wurdest du jemals deshalb herausgefordert?",
                                            "Beeinflusst sie deine Beziehungen?",
                                            "Hat sie sich jemals durch ein Gespräch geändert?"
                                  ]
                        },
                        {
                                  "text": "Was du tun würdest, wenn du keine Angst hättest",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Was ist eine Sache, die dich die Angst daran hindert zu tun?",
                                            "Ist es eine rationale oder irrationale Angst?",
                                            "Hat dich die Angst jemals zurückgehalten und du hast es später bereut?",
                                            "Wie sähe dein Leben auf der anderen Seite dieser Angst aus?",
                                            "Was würdest du jemandem sagen, der vor der gleichen Angst steht?"
                                  ]
                        },
                        {
                                  "text": "Das Beste und das Schlimmste an dem Ort, an dem du aufgewachsen bist",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Was hat dich an diesem Ort am meisten geprägt?",
                                            "Wofür bist du dankbar?",
                                            "Was hättest du dir anders gewünscht?",
                                            "Wie hat er deine Werte geformt?",
                                            "Würdest du dort Kinder aufziehen?"
                                  ]
                        },
                        {
                                  "text": "Wie du mit Stress umgehst",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Was sind deine bevorzugten Strategien?",
                                            "Glaubst du, dass du gut mit Stress umgehen kannst?",
                                            "Was stresst dich am meisten?",
                                            "Hat sich dein Verhältnis zu Stress verändert?",
                                            "Welchen Rat würdest du jemandem geben, der mit Stress zu kämpfen hat?"
                                  ]
                        },
                        {
                                  "text": "Etwas, das du früher verurteilt hast und jetzt verstehst",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Was war das?",
                                            "Was hast du früher gedacht?",
                                            "Was hat deine Perspektive verändert?",
                                            "Ist dir deine alte Ansicht peinlich?",
                                            "Hat dich das allgemein weniger voreingenommen gemacht?"
                                  ]
                        },
                        {
                                  "text": "Was Freundschaft für dich als Erwachsener bedeutet",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Unterscheidet sich Freundschaft unter Erwachsenen von Kindheitsfreundschaften?",
                                            "Wie viele enge Freunde hast du?",
                                            "Wie pflegst du Freundschaften über Distanzen hinweg?",
                                            "Hast du dich jemals aus einer Freundschaft 'herausentwickelt'?",
                                            "Was lässt eine Freundschaft Bestand haben?"
                                  ]
                        },
                        {
                                  "text": "Ein Mal, als du etwas völlig falsch eingeschätzt hast",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Was ist passiert?",
                                            "Wie lange hat es gedauert, bis du es bemerkt hast?",
                                            "Was war der Preis für den Irrtum?",
                                            "Wie bist du damit umgegangen?",
                                            "Was hast du gelernt?"
                                  ]
                        },
                        {
                                  "text": "Deine komplizierte Beziehung zu sozialen Medien",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Liebst du sie, hasst du sie oder beides?",
                                            "Was bekommst du dort, was du nirgendwo anders bekommst?",
                                            "Hast du dich nach der Nutzung jemals schlechter gefühlt?",
                                            "Glaubst du, dass sie verändern, wie du dich präsentierst?",
                                            "Wenn du soziale Medien neu gestalten könntest, was würdest du ändern?"
                                  ]
                        },
                        {
                                  "text": "Das am meisten überbewertete Ding im modernen Leben",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Was ist es?",
                                            "Warum legen die Leute so viel Wert darauf?",
                                            "Wann hast du gemerkt, dass es den Hype deiner Meinung nach nicht wert ist?",
                                            "Löst deine Meinung Reaktionen bei anderen aus?",
                                            "Womit würdest du es ersetzen?"
                                  ]
                        },
                        {
                                  "text": "Ein Moment, der deine Sicht auf dich selbst verändert hat",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Was ist passiert?",
                                            "Hast du erwartet, dass es dich beeinflussen würde?",
                                            "Hat es dich sofort oder schrittweise verändert?",
                                            "Ist die Version von dir nach diesem Moment besser?",
                                            "Würdest du das mit jemandem teilen, der dir nahesteht?"
                                  ]
                        },
                        {
                                  "text": "Etwas, worauf du im Stillen stolz bist",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Was ist es?",
                                            "Warum im Stillen — warum nicht lautstark?",
                                            "Wie lange hat es gedauert?",
                                            "Wissen die Menschen, die dir nahestehen, davon?",
                                            "Was sagt das über deine Werte aus?"
                                  ]
                        },
                        {
                                  "text": "Deine persönliche Theorie darüber, warum Menschen so sind, wie sie sind",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Ist es die Natur, die Erziehung oder etwas anderes?",
                                            "Glaubst du, dass Menschen sich grundlegend ändern können?",
                                            "Hat dich ein Mensch jemals völlig überrascht?",
                                            "Glaubst du, dass du Menschen gut verstehst?",
                                            "Was ist der größte Fehler, den Menschen übereinander machen?"
                                  ]
                        },
                        {
                                  "text": "Was du über Ehrgeiz denkst",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Bist du ein ehrgeiziger Mensch?",
                                            "Ist Ehrgeiz immer eine gute Sache?",
                                            "Kann Ehrgeiz dein Privatleben schädigen?",
                                            "Bewunderst du sehr ehrgeizige Menschen?",
                                            "Wie viel ist genug?"
                                  ]
                        },
                        {
                                  "text": "Die Version deiner selbst vor fünf Jahren",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Was hast du gemacht?",
                                            "Worüber hast du dir Sorgen gemacht?",
                                            "Wie dachtest du, dass dein Leben heute aussehen würde?",
                                            "Was war das Wichtigste, das du damals noch nicht wusstest?",
                                            "Würdest du dich mit deinem früheren Ich gut verstehen?"
                                  ]
                        },
                        {
                                  "text": "Wie du schwierige Entscheidungen triffst",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Folgst du deinem Kopf oder deinem Bauchgefühl?",
                                            "Triffst du Entscheidungen schnell oder langsam?",
                                            "Fragst du um Rat oder entscheidest du allein?",
                                            "Was ist die schwierigste Entscheidung, die du je getroffen hast?",
                                            "Fühlst du dich danach normalerweise im Reinen mit deinen Entscheidungen?"
                                  ]
                        },
                        {
                                  "text": "Nostalgie und was sie mit dir macht",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Wobei fühlst du Nostalgie?",
                                            "Ist Nostalgie tröstlich oder schmerzhaft?",
                                            "Glaubst du, die Vergangenheit war wirklich besser oder nur anders?",
                                            "Hält dich Nostalgie jemals davon ab, vorwärts zu kommen?",
                                            "Welcher Geruch, Klang oder Geschmack löst eine Erinnerung aus?"
                                  ]
                        },
                        {
                                  "text": "Ruhm — Strafe oder Belohnung?",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Möchtest du berühmt sein?",
                                            "Welche Art von Berühmtheit wärst du?",
                                            "Was würdest du verlieren?",
                                            "Glaubst du, die meisten berühmten Leute sind glücklich?",
                                            "Was ist der Unterschied zwischen Ruhm und Respekt?"
                                  ]
                        },
                        {
                                  "text": "Was dich langweilt und was dich fasziniert",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Über welches Thema oder welche Aktivität könntest du stundenlang reden?",
                                            "Was kannst du absolut nicht ertragen?",
                                            "Sagt das, was dich fasziniert, etwas über dich als Person aus?",
                                            "Ist etwas, das dich einst langweilte, interessant geworden?",
                                            "Was ist etwas, das du faszinierend findest und das andere überrascht?"
                                  ]
                        },
                        {
                                  "text": "Ein Mal, als du von vorne anfangen musstest",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Was ist vor dem Neustart passiert?",
                                            "War es eine Entscheidung oder hat das Leben dich dazu gezwungen?",
                                            "Was war der schwierigste Teil am Neuanfang?",
                                            "Was hast du von früher bewahrt?",
                                            "Bist du froh, dass es passiert ist?"
                                  ]
                        },
                        {
                                  "text": "Was die Leute an dir falsch verstehen",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Was ist das häufigste Missverständnis?",
                                            "Woher kommt es?",
                                            "Stört es dich?",
                                            "Versuchst du es zu korrigieren oder lässt du es gut sein?",
                                            "Steckt darin überhaupt ein Funken Wahrheit?"
                                  ]
                        },
                        {
                                  "text": "Ob der Ort, an dem man aufgewachsen ist, einen zu dem gemacht hat, der man ist",
                                  "level": "advanced",
                                  "hints": [
                                            "Welche spezifischen Dinge an diesem Ort haben Sie geprägt?",
                                            "Waren es die Menschen, die Kultur, die Landschaft oder die Sprache?",
                                            "Hätten Sie an einem anderen Ort derselbe Mensch werden können?",
                                            "Fühlen Sie sich durch Ihre Herkunft definiert oder wehren Sie sich dagegen?",
                                            "Wie wären Sie wohl, wenn Sie an einem völlig anderen Ort aufgewachsen wären?"
                                  ]
                        },
                        {
                                  "text": "Die Kluft zwischen dem, wer man ist, und dem, wie man sich der Welt präsentiert",
                                  "level": "advanced",
                                  "hints": [
                                            "Gibt es eine nennenswerte Kluft zwischen Ihrem öffentlichen und Ihrem privaten Ich?",
                                            "Ist diese Kluft gesund oder kostet sie Sie etwas?",
                                            "In welchen Kontexten sind Sie am ehesten ganz Sie selbst?",
                                            "Sehen Menschen, die Sie gut kennen, eine andere Person als Kollegen oder Fremde?",
                                            "Ist die Inszenierung von Identität unvermeidlich oder etwas, dem man widerstehen sollte?"
                                  ]
                        },
                        {
                                  "text": "Ob Menschen sich grundlegend ändern oder sich nur langsam offenbaren",
                                  "level": "advanced",
                                  "hints": [
                                            "Fällt Ihnen jemand ein, der sich wirklich verändert hat – oder kannten Sie ihn vorher nur nicht gut genug?",
                                            "Was braucht es, damit ein Mensch sich wirklich ändert?",
                                            "Glauben Sie, dass Sie sich verändert haben oder im Wesentlichen Sie selbst geblieben sind?",
                                            "Was sagt es über Beziehungen aus, wenn Menschen sich nicht wirklich ändern?",
                                            "Ist der Glaube, dass Menschen sich ändern können, notwendig für Liebe und Freundschaft?"
                                  ]
                        },
                        {
                                  "text": "Was man aus Scheitern gelernt hat, was man aus Erfolg nicht hätte lernen können",
                                  "level": "advanced",
                                  "hints": [
                                            "Welches spezifische Scheitern hat Ihnen etwas Unersetzliches beigebracht?",
                                            "Ist Scheitern tatsächlich ein besserer Lehrer oder sagen die Leute das nur, um sich besser zu fühlen?",
                                            "Glauben Sie, dass Sie gut mit Scheitern umgehen?",
                                            "Was ist für Sie persönlich die schmerzhafteste Form des Scheiterns?",
                                            "Gibt es so etwas wie ein Scheitern, das einen gar nichts lehrt?"
                                  ]
                        },
                        {
                                  "text": "Das eigene Verhältnis zu Gewissheit und Zweifel",
                                  "level": "advanced",
                                  "hints": [
                                            "Sind Sie jemand, der Gewissheit braucht, oder können Sie gut mit Mehrdeutigkeit leben?",
                                            "In welchen Bereichen Ihres Lebens fühlen Sie sich sicher und in welchen zweifeln Sie?",
                                            "Hat sich eine Phase tiefen Zweifels jemals als wertvoll erwiesen?",
                                            "Vertrauen Sie Menschen, die sich in allem völlig sicher zu sein scheinen?",
                                            "Was ist der Unterschied zwischen gesundem Skeptizismus und lähmendem Zweifel?"
                                  ]
                        },
                        {
                                  "text": "Die Dinge, die man aus der Kindheit mitnimmt, ohne es zu merken",
                                  "level": "advanced",
                                  "hints": [
                                            "Gibt es Verhaltensmuster, die Sie auf frühe Erfahrungen zurückführen können?",
                                            "Wann haben Sie zum ersten Mal bemerkt, dass etwas aus der Kindheit immer noch in Ihnen wirkt?",
                                            "Ist es möglich, die unsichtbaren Einflüsse auf die eigene Persönlichkeit vollständig zu verstehen?",
                                            "Welche dieser Muster sind nützlich und welche nicht?",
                                            "Wie viel Verantwortung tragen wir, unsere ererbten Tendenzen zu hinterfragen?"
                                  ]
                        },
                        {
                                  "text": "Was man schützen würde, selbst wenn es einen etwas kosten würde",
                                  "level": "advanced",
                                  "hints": [
                                            "Was würden Sie unter keinen Umständen aufs Spiel setzen?",
                                            "Wurde das schon einmal auf die Probe gestellt?",
                                            "Ist es ein Wert, eine Beziehung oder etwas anderes?",
                                            "Glauben Sie, dass jeder so etwas hat, oder ist es selten?",
                                            "Verrät Ihnen das Wissen darüber, was Sie eigentlich glauben?"
                                  ]
                        },
                        {
                                  "text": "Was die Leute Ihrer Meinung nach beim Thema Glück falsch verstehen",
                                  "level": "advanced",
                                  "hints": [
                                            "Was ist der häufigste Fehler, den Menschen auf der Suche nach Glück machen?",
                                            "Ist Glück etwas, das man findet, oder etwas, das man aufbaut?",
                                            "Glauben Sie, dass Sie glücklich sind? Wissen Sie das überhaupt?",
                                            "Gibt es ein Spannungsverhältnis zwischen Glück und Sinnhaftigkeit?",
                                            "Hat sich Ihre Vorstellung von Glück maßgeblich verändert?"
                                  ]
                        },
                        {
                                  "text": "Die Rolle des Glücks im eigenen Leben",
                                  "level": "advanced",
                                  "hints": [
                                            "Wie viel von dem, wo Sie heute stehen, ist Glück im Vergleich zu Anstrengung?",
                                            "Ist es unangenehm zuzugeben, dass Glück eine Rolle gespielt hat?",
                                            "Hat das Glück schon einmal gegen Sie gearbeitet?",
                                            "Glauben Sie, dass Menschen überschätzen, wie viel Kontrolle sie haben?",
                                            "Was ist die ethische Implikation von Glück – beeinflusst es, was wir einander schulden?"
                                  ]
                        },
                        {
                                  "text": "Ob Ehrgeiz und Zufriedenheit nebeneinander existieren können",
                                  "level": "advanced",
                                  "hints": [
                                            "Glauben Sie, dass man gleichzeitig mehr wollen und in Frieden sein kann?",
                                            "Mussten Sie sich schon einmal zwischen beidem entscheiden?",
                                            "Bewundern Sie Menschen, die zufrieden sind, oder sieht das für Sie nach Aufgeben aus?",
                                            "Ist Ehrgeiz per Definition eine Form von Unzufriedenheit?",
                                            "Wie sähe es in Ihrem Leben aus, wenn Sie beides hätten?"
                                  ]
                        },
                        {
                                  "text": "Was man den Menschen schuldet, die einen geprägt haben",
                                  "level": "advanced",
                                  "hints": [
                                            "Fühlen Sie sich den Menschen gegenüber verpflichtet, die Sie geformt haben?",
                                            "Ist diese Schuld emotional, praktisch oder beides?",
                                            "Was, wenn sie Sie auf eine Weise geprägt haben, die schädlich war?",
                                            "Wie ehren Sie den Einfluss von jemandem, ohne darin gefangen zu sein?",
                                            "Können Sie Dankbarkeit von Verpflichtung trennen?"
                                  ]
                        },
                        {
                                  "text": "Das Nützlichste, was Ihnen je gesagt wurde",
                                  "level": "advanced",
                                  "hints": [
                                            "Was war es und wer hat es gesagt?",
                                            "Haben Sie den Wert sofort erkannt oder erst später?",
                                            "Geben Sie es weiter?",
                                            "Ist nützliche Weisheit immer einfach oder kann auch Komplexität nützlich sein?",
                                            "Was hätte Ihnen rückblickend jemand sagen sollen, was aber niemand tat?"
                                  ]
                        },
                        {
                                  "text": "Etwas am modernen Leben, das Sie ernsthaft beunruhigt",
                                  "level": "advanced",
                                  "hints": [
                                            "Was ist es – Technologie, Politik, soziale Trends, die Umwelt?",
                                            "Ist diese Sorge neu oder hat sie sich über die Zeit aufgebaut?",
                                            "Glauben Sie, dass andere diese Sorge teilen, oder fühlen Sie sich damit allein?",
                                            "Verändert die Sorge darüber, wie Sie leben?",
                                            "Haben Sie Hoffnung, dass es besser wird?"
                                  ]
                        },
                        {
                                  "text": "Der Unterschied zwischen Alleinsein und Einsamkeit",
                                  "level": "advanced",
                                  "hints": [
                                            "Sind Sie jemand, der die Einsamkeit genießt?",
                                            "Haben Sie schon einmal Einsamkeit inmitten einer Menschenmenge erlebt?",
                                            "Glauben Sie, dass das moderne Leben Einsamkeit häufiger oder seltener macht?",
                                            "Kann man in einer Beziehung einsam sein?",
                                            "Was ist das Heilmittel gegen Einsamkeit – mehr Verbindung oder etwas Tieferes?"
                                  ]
                        },
                        {
                                  "text": "Was es bedeutet, gut zu leben – und ob man nah dran ist",
                                  "level": "advanced",
                                  "hints": [
                                            "Wie definieren Sie ein gut gelebtes Leben?",
                                            "Wessen Leben betrachten Sie und denken: Das kommt dem nahe?",
                                            "Sind Sie auf einem Weg dorthin oder davon weg?",
                                            "Denken Sie oft darüber nach oder verdrängt der Alltag das?",
                                            "Ist ein gutes Leben etwas, das man plant, oder etwas, das zufällig passiert?"
                                  ]
                        },
                        {
                                  "text": "Ob man dem eigenen Gedächtnis traut",
                                  "level": "advanced",
                                  "hints": [
                                            "Hat sich eine Erinnerung jemals als falsch herausgestellt?",
                                            "Glauben Sie, dass wir unsere Erinnerungen anpassen, um sie an eine Erzählung über uns selbst anzupassen?",
                                            "Was ist die lebhafteste Erinnerung, die Sie haben, und für wie zuverlässig halten Sie sie?",
                                            "Spielt es eine Rolle, ob eine Erinnerung akkurat ist, solange sie sich wahr anfühlt?",
                                            "Was sagt das Gedächtnis über Identität aus – wenn sich Ihre Erinnerungen änderten, wären Sie dann ein anderer Mensch?"
                                  ]
                        },
                        {
                                  "text": "Institutionen und ob sie uns dienen",
                                  "level": "advanced",
                                  "hints": [
                                            "Denken Sie an eine Institution – Gesundheitswesen, Bildung, Regierung – und bewerten Sie diese ehrlich.",
                                            "Ab wann erfüllt eine Institution ihren Zweck nicht mehr?",
                                            "Haben Sie sich jemals von einer Institution, auf die Sie angewiesen waren, im Stich gelassen gefühlt?",
                                            "Ist eine Reform möglich oder müssen Institutionen komplett ersetzt werden?",
                                            "Wie sähe eine funktionierende Version der von Ihnen gewählten Institution aus?"
                                  ]
                        },
                        {
                                  "text": "Die Geschichten, die man sich über sich selbst erzählt",
                                  "level": "advanced",
                                  "hints": [
                                            "Was ist die zentrale Geschichte, die Sie über Ihr eigenes Leben erzählen?",
                                            "Wie viel davon ist akkurat und wie viel ist Konstruktion?",
                                            "Hat sich die Geschichte im Laufe der Zeit verändert?",
                                            "Was passiert mit unserem Selbstbild, wenn die Geschichte infrage gestellt wird?",
                                            "Wer sind Sie, wenn man die Geschichte weglässt?"
                                  ]
                        },
                        {
                                  "text": "Was Gemeinschaft in einer fragmentierten Welt bedeutet",
                                  "level": "advanced",
                                  "hints": [
                                            "Fühlen Sie sich Teil einer Gemeinschaft?",
                                            "Ist eine Online-Gemeinschaft eine echte Gemeinschaft?",
                                            "Was ist verloren gegangen und was wurde gewonnen durch die Art und Weise, wie sich Gemeinschaften heute bilden?",
                                            "Was verlangt eine Gemeinschaft von ihren Mitgliedern?",
                                            "Kann man Gemeinschaft bewusst schaffen oder muss sie organisch wachsen?"
                                  ]
                        },
                        {
                                  "text": "Woran man erkennt, wann man jemandem vertrauen kann",
                                  "level": "advanced",
                                  "hints": [
                                            "Nach welchen Signalen suchen Sie?",
                                            "Hat Sie Ihr Instinkt jemals völlig getäuscht?",
                                            "Glauben Sie, dass Sie zu vertrauensselig, nicht vertrauensselig genug oder gut kalibriert sind?",
                                            "Wird Vertrauen geschenkt oder verdient – und spielt diese Unterscheidung eine Rolle?",
                                            "Was zerstört Vertrauen für Sie unwiderruflich?"
                                  ]
                        },
                        {
                                  "text": "Komplexität des menschlichen Bewusstseins",
                                  "level": "advanced",
                                  "hints": [
                                            "Was definiert Bewusstsein: Aufmerksamkeit, Selbstreflexion oder etwas mehr?",
                                            "Ist das Bewusstsein ein Nebenprodukt biologischer Prozesse oder etwas Grundlegendes?",
                                            "Kann künstliche Intelligenz jemals echtes Bewusstsein erlangen?",
                                            "Wie fordert das 'schwierige Problem' des Bewusstseins materialistische Ansichten heraus?",
                                            "Wie ist die Beziehung zwischen dem Bewusstsein und dem physischen Gehirn?"
                                  ]
                        },
                        {
                                  "text": "Ob das Selbst etwas ist, das wir entdecken oder konstruieren",
                                  "level": "advanced",
                                  "hints": [
                                            "Gibt es ein festes 'Ich', das darauf wartet, entdeckt zu werden, oder wirst du ständig durch Entscheidungen und Kontext erschaffen?",
                                            "Was passiert mit der Identität, wenn sich der Kontext radikal ändert – Krankheit, Migration, Verlust?",
                                            "Ist die Erzählung, die du über dich selbst hast, eine Entdeckung oder eine Erfindung?",
                                            "Spielt die Frage eine Rolle für dein Leben, oder ist sie rein philosophisch?",
                                            "Wenn das Selbst konstruiert ist, wofür sind wir bei der Konstruktion verantwortlich?"
                                  ]
                        },
                        {
                                  "text": "Die Ethik dessen, was wir zu vergessen wählen",
                                  "level": "advanced",
                                  "hints": [
                                            "Haben wir eine moralische Beziehung zu unserem eigenen Vergessen?",
                                            "Ist selektives Gedächtnis eine Form von Unehrlichkeit gegenüber uns selbst?",
                                            "Kann Vergebung das Vergessen erfordern, oder ist das ein Kategorienfehler?",
                                            "Was verrät eine Gesellschaft, die kollektiv das Vergessen wählt, über sich selbst?",
                                            "Gibt es so etwas wie ethische Amnesie – für Einzelpersonen oder Nationen?"
                                  ]
                        },
                        {
                                  "text": "Ob Sprache prägt, was wir denken können, oder nur, was wir sagen können",
                                  "level": "advanced",
                                  "hints": [
                                            "Hat dir das Erlernen einer anderen Sprache Zugang zu Gedanken verschafft, die du in deiner Muttersprache nicht ganz formulieren konntest?",
                                            "Ist die Sapir-Whorf-Hypothese eine poetische Metapher oder ein echter erkenntnistheoretischer Anspruch?",
                                            "Gibt es Erfahrungen, die sich jeder Sprache widersetzen?",
                                            "Was bedeutet es, etwas zu fühlen, das man nicht benennen kann?",
                                            "Verändert die Sprache, die du in deinem inneren Monolog verwendest, wie du dich selbst erlebst?"
                                  ]
                        },
                        {
                                  "text": "Die Beziehung zwischen Freiheit und Verantwortung im eigenen Leben",
                                  "level": "advanced",
                                  "hints": [
                                            "Wo fühlst du dich am freiesten und was hast du für diese Freiheit bezahlt?",
                                            "Wird Freiheit immer auf Kosten anderer erkauft?",
                                            "Erlebst du deine Verantwortung als Einschränkung oder als das, was deiner Freiheit Sinn verleiht?",
                                            "Kann ein Mensch ohne die materiellen Bedingungen zur Ausübung dieser Freiheit wirklich frei sein?",
                                            "Was würdest du aufgeben, um freier zu sein – und was verrät deine Antwort?"
                                  ]
                        },
                        {
                                  "text": "Was Nostalgie wirklich tut, wenn sie dich besucht",
                                  "level": "advanced",
                                  "hints": [
                                            "Ist Nostalgie Trauer, Trost, Verzerrung oder alles drei gleichzeitig?",
                                            "Vertraust du nostalgischen Gefühlen oder behandelst du sie mit Argwohn?",
                                            "Ist das, wonach du dich sehnst, eine reale Vergangenheit oder eine bearbeitete Version?",
                                            "Was verhindert Nostalgie und was macht sie möglich?",
                                            "Kann eine Gesellschaft auf die gleiche Weise nostalgisch sein wie ein Individuum – und mit den gleichen Gefahren?"
                                  ]
                        },
                        {
                                  "text": "Ob das Verstehen von etwas es immer schmälert",
                                  "level": "advanced",
                                  "hints": [
                                            "Denk an etwas Schönes oder Geheimnisvolles – macht das Verstehen es weniger schön?",
                                            "Gibt es einen Wert im Nichtwissen, oder ist das nur Romantik?",
                                            "Können wissenschaftliche Erklärung und ästhetisches Staunen koexistieren, oder kolonisiert das eine das andere?",
                                            "Gibt es etwas, das du bewusst nicht verstehen willst, aus Angst, seine Macht über dich zu verlieren?",
                                            "Was verrät diese Frage über die Grenzen des Rationalismus?"
                                  ]
                        },
                        {
                                  "text": "Der Unterschied zwischen behaupteten und offenbarten Werten",
                                  "level": "advanced",
                                  "hints": [
                                            "Was sagen deine tatsächlichen Entscheidungen – nicht deine erklärten Überzeugungen – darüber aus, was du am meisten schätzt?",
                                            "Gibt es eine schmerzhafte Lücke zwischen beiden?",
                                            "Ist die Lücke ein Beweis für Heuchelei oder für die echte Schwierigkeit, nach seinen Prinzipien zu leben?",
                                            "Kannst du die Lücke schließen, oder bleibt immer eine gewisse Distanz zwischen Ideal und Wirklichkeit?",
                                            "Was müsstest du aufgeben, um dein Leben näher mit dem in Einklang zu bringen, was du zu glauben vorgibst?"
                                  ]
                        },
                        {
                                  "text": "Ob radikale Ehrlichkeit eine Tugend oder eine Form der Selbstgefälligkeit ist",
                                  "level": "advanced",
                                  "hints": [
                                            "Geht es beim Impuls, 'es so zu sagen, wie es ist', um das Wohlbefinden der anderen Person oder um deine eigene Erleichterung?",
                                            "Ist Freundlichkeit manchmal die mutigere Wahl?",
                                            "Wo verläuft die Linie zwischen Ehrlichkeit und Grausamkeit?",
                                            "Spiegelt die Forderung nach totaler Ehrlichkeit in Beziehungen Intimität oder Kontrolle wider?",
                                            "Fällt dir ein Moment ein, in dem radikale Ehrlichkeit mehr geschadet als genützt hat?"
                                  ]
                        },
                        {
                                  "text": "Ob große Kunst herausfordern oder trösten sollte",
                                  "level": "advanced",
                                  "hints": [
                                            "Wornach greifst du wirklich, wenn du Schmerz empfindest – nach Herausforderung oder nach Trost?",
                                            "Gibt es Kunst, die beides gleichzeitig schafft?",
                                            "Ist tröstende Kunst weniger seriös als herausfordernde Kunst, oder ist das eine snobistische Unterscheidung?",
                                            "Was ist deiner Meinung nach die primäre Verpflichtung der Kunst?",
                                            "Gibt es Kunst, die dich in einer Weise verändert hat, wie Trost es nie könnte?"
                                  ]
                        },
                        {
                                  "text": "Die Forderung nach Ausgewogenheit und ob sie falsche Legitimität verleiht",
                                  "level": "advanced",
                                  "hints": [
                                            "Ist es immer fair, 'beide Seiten darzustellen', oder kann es die Realität verzerren?",
                                            "Gibt es einen Unterschied zwischen Ausgewogenheit und falscher Gleichwertigkeit?",
                                            "Wer entscheidet, welche Positionen eine Plattform verdienen?",
                                            "Kann journalistische Ausgewogenheit mit erkenntnistheoretischen Standards koexistieren?",
                                            "Was kostet es, einer Position im Namen der Fairness eine Plattform zu geben?"
                                  ]
                        },
                        {
                                  "text": "Ob moralischer Fortschritt real oder nur moralische Mode ist",
                                  "level": "advanced",
                                  "hints": [
                                            "Ist unsere heutige ethische Zuversicht ein Zeichen für echten Fortschritt oder der gleiche Provinzialismus in neuem Gewand?",
                                            "Was würde es bedeuten, wenn moralischer Fortschritt real wäre?",
                                            "Fällt dir etwas ein, das wir derzeit glauben und auf das künftige Generationen mit Abscheu zurückblicken werden?",
                                            "Untergräbt die Relativität der moralischen Mode die Idee, dass etwas wirklich falsch ist?",
                                            "Ist moralische Demut mit moralischer Überzeugung vereinbar?"
                                  ]
                        },
                        {
                                  "text": "Die Teile von dir selbst, die dir am schwersten fallen auszudrücken",
                                  "level": "advanced",
                                  "hints": [
                                            "Gibt es etwas, das du fühlst, aber für das du keine Sprache finden kannst?",
                                            "Liegt die Schwierigkeit an der Sprache oder an der Sache selbst?",
                                            "Glaubst du, dass manche innere Erfahrung wirklich privat ist – unzugänglich selbst für dich selbst?",
                                            "Was würde es bedeuten, die eigene Innerlichkeit vollständig zu verstehen?",
                                            "Muss das Unaussprechliche artikuliert werden, um real zu sein?"
                                  ]
                        },
                        {
                                  "text": "Die politischen Auswirkungen von Zufriedenheit",
                                  "level": "advanced",
                                  "hints": [
                                            "Ist es ein moralisches Versagen, in einer ungerechten Welt wirklich zufrieden zu sein?",
                                            "Ist die Kultivierung des persönlichen Friedens mit einem politischen Gewissen vereinbar?",
                                            "Profitiert der Kapitalismus von einer zufriedenen Bevölkerung?",
                                            "Gibt es eine Version von Zufriedenheit, die kein politischer Quietismus ist?",
                                            "Wie navigierst du persönlich durch das Spannungsfeld zwischen innerem Frieden und äußerem Engagement?"
                                  ]
                        },
                        {
                                  "text": "Gedächtnis, Identität und was bleibt, wenn sich beides verschiebt",
                                  "level": "advanced",
                                  "hints": [
                                            "Wenn deine Erinnerungen systematisch verändert würden, wärst du dann immer noch du?",
                                            "Worin besteht eigentlich die Kontinuität des Selbst?",
                                            "Ist die Person, an die du dich erinnerst, dieselbe wie die, die jetzt spricht?",
                                            "Was passiert mit der Identität bei radikalem Verlust oder Transformation?",
                                            "Spielt die Frage der persönlichen Identität eine Rolle dafür, wie wir einander behandeln – rechtlich, ethisch?"
                                  ]
                        },
                        {
                                  "text": "Ob das geprüfte Leben immer lebenswert ist",
                                  "level": "advanced",
                                  "hints": [
                                            "Sokrates sagte, das ungeprüfte Leben sei nicht lebenswert – stimmst du zu?",
                                            "Gibt es Kosten der Prüfung – eine Art Lähmung oder Verlust der Unschuld?",
                                            "Kann Prüfung zu einer eigenen Form der Vermeidung werden?",
                                            "Gibt es Menschen, die tief und gut leben, ohne viel Selbstprüfung?",
                                            "Was hat dich dein eigener Grad an Selbstprüfung deiner Meinung nach gekostet und was hat er dir gegeben?"
                                  ]
                        },
                        {
                                  "text": "Die Frage, was man Fremden schuldet",
                                  "level": "advanced",
                                  "hints": [
                                            "Hast du Verpflichtungen gegenüber Menschen, die du nie treffen wirst?",
                                            "Wie weit reichen deine moralischen Verpflichtungen – bis in deine Nachbarschaft, deine Nation, die Welt?",
                                            "Verringert physische oder kulturelle Distanz die Verpflichtung oder ist das eine Rationalisierung?",
                                            "Was ist der Unterschied zwischen Wohltätigkeit und Gerechtigkeit?",
                                            "Wie lebst du tatsächlich in Bezug auf diese Frage?"
                                  ]
                        },
                        {
                                  "text": "Die Geschichten, die Zivilisationen über sich selbst erzählen",
                                  "level": "advanced",
                                  "hints": [
                                            "Jede Gesellschaft hat einen Gründungmythos – was ist deiner, und wie genau ist er?",
                                            "Was wählt eine Nation ebenso zu vergessen wie zu erinnern?",
                                            "Ist nationale Identität eine nützliche Fiktion oder eine gefährliche?",
                                            "Kann eine Gesellschaft eine ehrlichere Darstellung ihrer selbst haben, ohne den Zusammenhalt zu verlieren?",
                                            "Welche Geschichte würdest du über deine eigene Zivilisation erzählen, wenn du völlig ehrlich sein müsstest?"
                                  ]
                        },
                        {
                                  "text": "Ob jeder Text vollständig übersetzt werden kann",
                                  "level": "advanced",
                                  "hints": [
                                            "Hast du etwas in einer anderen Sprache erlebt, das sich der Übersetzung widersetzt hat?",
                                            "Ist die Unübersetzbarkeit bestimmter Wörter ein Beweis dafür, dass Sprache das Denken prägt?",
                                            "Was verlieren wir und was gewinnen wir bei der Übersetzung?",
                                            "Ist eine exzellente Übersetzung eine Form der Schöpfung oder eine Form des Verlusts?",
                                            "Was sagt uns die Übersetzung über die Grenzen des Verstehens zwischen Kulturen?"
                                  ]
                        },
                        {
                                  "text": "Die Erfahrung, widersprüchliche Dinge gleichzeitig als wahr zu halten",
                                  "level": "advanced",
                                  "hints": [
                                            "Kann man jemanden lieben und ihn gleichzeitig grollen, ohne dass das eine das andere aufhebt?",
                                            "Ist die Fähigkeit, Widersprüche auszuhalten, ein Zeichen von Reife oder von Verwirrung?",
                                            "Gibt es politische oder moralische Positionen, die du vertrittst und die in echtem Spannungsverhältnis stehen?",
                                            "Spiegelt die Forderung nach Konsistenz in unseren Überzeugungen Rationalismus oder Starrheit wider?",
                                            "Was ist etwas, das du glaubst, das im Widerspruch zu etwas anderem steht, das du ebenfalls glaubst?"
                                  ]
                        },
                        {
                                  "text": "Was es bedeutet, dass du eines Tages nicht mehr existieren wirst",
                                  "level": "advanced",
                                  "hints": [
                                            "Denkst du regelmäßig, gelegentlich oder fast nie über deine eigene Sterblichkeit nach?",
                                            "Hat das Bewusstsein des Todes geprägt, wie du lebst oder was du schätzt?",
                                            "Ist die Angst vor dem Tod rational, oder ist sie eine Verwirrung darüber, was verloren geht?",
                                            "Findest du Trost in einer bestimmten Art, über Sterblichkeit nachzudenken?",
                                            "Was macht Sterblichkeit möglich, was Unsterblichkeit vielleicht nicht zulassen würde?"
                                  ]
                        }
              ],
              "opinions": [
                        {
                                  "text": "Soziale Medien schaden mehr als sie nützen.",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Jeder sollte mindestens zwei Sprachen lernen.",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Homeoffice ist besser als Arbeit im Büro.",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Geld kann kein Glück kaufen.",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Technologie macht uns weniger sozial.",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Die 4-Tage-Woche steigert Produktivität und Wohlbefinden.",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "Der öffentliche Nahverkehr sollte für alle kostenlos sein.",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "Ein bedingungsloses Grundeinkommen ist für zukünftige Wirtschaftssysteme notwendig.",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "Generative KI kann menschliche künstlerische Kreativität niemals ersetzen.",
                                  "level": "advanced"
                        },
                        {
                                  "text": "Vollständige Privatsphäre ist im digitalen Zeitalter unmöglich.",
                                  "level": "advanced"
                        },
                        {
                                  "text": "Wochenenden sind zu kurz.",
                                  "level": "elementary",
                                  "hints": [
                                            "Was machst du am Wochenende?",
                                            "Wie fühlst du dich am Sonntagabend?",
                                            "Was würdest du mit einem dreitägigen Wochenende machen?",
                                            "Arbeitest oder lernst du am Wochenende?",
                                            "Was ist das perfekte Wochenende für dich?"
                                  ]
                        },
                        {
                                  "text": "Es ist unhöflich, zu spät zu kommen.",
                                  "level": "elementary",
                                  "hints": [
                                            "Bist du normalerweise pünktlich?",
                                            "Wie lange wartest du auf einen Freund?",
                                            "Ist es okay, 10 Minuten zu spät zu kommen?",
                                            "Ist Pünktlichkeit in deiner Kultur wichtig?",
                                            "Was machst du, wenn jemand sehr spät kommt?"
                                  ]
                        },
                        {
                                  "text": "Menschen sind in Kleinstädten netter.",
                                  "level": "elementary",
                                  "hints": [
                                            "Wo lebst du — in einer Kleinstadt oder einer Großstadt?",
                                            "Sind deine Nachbarn freundlich?",
                                            "Sprechen Menschen dort, wo du lebst, mit Fremden?",
                                            "Hast du jemals an einem anderen Ortstyp gelebt?",
                                            "Was macht einen Ort freundlich?"
                                  ]
                        },
                        {
                                  "text": "Ein Haustier zu haben, macht glücklicher.",
                                  "level": "elementary",
                                  "hints": [
                                            "Hast du ein Haustier?",
                                            "Was ist das beste Haustier für eine vielbeschäftigte Person?",
                                            "Sind Haustiere teuer?",
                                            "Kann ein Haustier ein Freund sein?",
                                            "Was musst du tun, um dich gut um ein Haustier zu kümmern?"
                                  ]
                        },
                        {
                                  "text": "Man kann viel über jemanden an seinen Schuhen erkennen.",
                                  "level": "elementary",
                                  "hints": [
                                            "Schaust du dir die Schuhe der Leute an?",
                                            "Was sagen deine Schuhe über dich aus?",
                                            "Ist Mode für dich wichtig?",
                                            "Kannst du eine Person nach ihrem Aussehen beurteilen?",
                                            "Was sagt dir sonst noch etwas über den Charakter einer Person?"
                                  ]
                        },
                        {
                                  "text": "Es ist okay, allein in einem Restaurant zu essen.",
                                  "level": "elementary",
                                  "hints": [
                                            "Hast du schon einmal allein in einem Restaurant gegessen?",
                                            "Findest du es angenehm?",
                                            "Ist Essen mit anderen Leuten besser?",
                                            "Siehst du viele Leute, die allein essen?",
                                            "Was machst du, wenn du allein isst?"
                                  ]
                        },
                        {
                                  "text": "Eine Sprache zu lernen ist einfacher, wenn man jung ist.",
                                  "level": "elementary",
                                  "hints": [
                                            "Wie alt warst du, als du angefangen hast, diese Sprache zu lernen?",
                                            "Glaubst du, dass das Alter beim Sprachenlernen eine Rolle spielt?",
                                            "Was ist der schwierigste Teil beim Lernen einer Sprache?",
                                            "Kennst du jemanden, der eine Sprache als Erwachsener gelernt hat?",
                                            "Was hilft dir am meisten beim Lernen?"
                                  ]
                        },
                        {
                                  "text": "Öffentliche Verkehrsmittel sind besser als ein Auto.",
                                  "level": "elementary",
                                  "hints": [
                                            "Wie reist du in deiner Stadt umher?",
                                            "Sind die öffentlichen Verkehrsmittel dort, wo du lebst, gut?",
                                            "Was sind die Probleme, wenn man ein Auto hat?",
                                            "Ist es teuer, mit öffentlichen Verkehrsmitteln zu reisen?",
                                            "Was würdest du am Verkehr in deiner Stadt ändern?"
                                  ]
                        },
                        {
                                  "text": "Es ist schwer, sich zu langweilen, wenn man ein Handy hat.",
                                  "level": "elementary",
                                  "hints": [
                                            "Wie viele Stunden am Tag nutzt du dein Handy?",
                                            "Wofür nutzt du es am meisten?",
                                            "War dir vor den Smartphones langweilig?",
                                            "Ist Langeweile manchmal gut?",
                                            "Könntest du dein Handy für einen Tag zu Hause lassen?"
                                  ]
                        },
                        {
                                  "text": "Zu Hause zu kochen ist immer besser als auswärts zu essen.",
                                  "level": "elementary",
                                  "hints": [
                                            "Wie oft kochst du zu Hause?",
                                            "Was ist einfacher — kochen oder in ein Restaurant gehen?",
                                            "Ist auswärts essen dort, wo du lebst, teuer?",
                                            "Was ist dein Lieblingsrestaurant?",
                                            "Was ist dein bestes selbstgekochtes Essen?"
                                  ]
                        },
                        {
                                  "text": "Jeder sollte versuchen, ein Jahr lang im Ausland zu leben.",
                                  "level": "elementary",
                                  "hints": [
                                            "Hast du schon einmal in einem anderen Land gelebt?",
                                            "Was wäre schwierig am Leben im Ausland?",
                                            "Was wäre aufregend?",
                                            "Welches Land würdest du wählen?",
                                            "Verändert das Leben im Ausland eine Person?"
                                  ]
                        },
                        {
                                  "text": "Superhelden sind interessanter als echte Helden.",
                                  "level": "elementary",
                                  "hints": [
                                            "Wer ist dein Lieblingssuperheld?",
                                            "Fällt dir ein Held aus dem echten Leben ein?",
                                            "Was macht jemanden zu einem Helden?",
                                            "Warum lieben Menschen Superhelden?",
                                            "Sind echte Helden wichtiger?"
                                  ]
                        },
                        {
                                  "text": "Es ist wichtig, jeden Morgen das Bett zu machen.",
                                  "level": "elementary",
                                  "hints": [
                                            "Machst du jeden Tag dein Bett?",
                                            "Fühlst du dich in einem aufgeräumten Zimmer besser?",
                                            "Ist das wichtig oder nicht wichtig?",
                                            "Was ist deine Morgenroutine?",
                                            "Welche kleinen Gewohnheiten hast du?"
                                  ]
                        },
                        {
                                  "text": "Einkaufen ist ein Hobby.",
                                  "level": "elementary",
                                  "hints": [
                                            "Gehst du gerne einkaufen?",
                                            "Kaufst du online oder in Geschäften ein?",
                                            "Wie viel Zeit verbringst du mit Einkaufen?",
                                            "Ist Einkaufen entspannend?",
                                            "Was kaufst du am häufigsten?"
                                  ]
                        },
                        {
                                  "text": "Allein zu reisen ist besser, als mit Freunden zu reisen.",
                                  "level": "elementary",
                                  "hints": [
                                            "Bist du schon einmal allein gereist?",
                                            "Was ist gut am Alleinreisen?",
                                            "Was ist gut am Reisen mit anderen?",
                                            "Wirst du einsam, wenn du allein reist?",
                                            "Was ist die beste Reise, die du gemacht hast?"
                                  ]
                        },
                        {
                                  "text": "Als Einzelkind aufzuwachsen ist besser, als Geschwister zu haben.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Bist du ein Einzelkind oder hast du Brüder oder Schwestern?",
                                            "Was sind die Vorteile von Geschwistern?",
                                            "Was sind die Vorteile des Alleinseins?",
                                            "Streiten Geschwister immer?",
                                            "Wie beeinflusst deine Familienstruktur deine Persönlichkeit?"
                                  ]
                        },
                        {
                                  "text": "Eine Notlüge ist manchmal die freundlichere Wahl.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Fällt dir eine Situation ein, in der eine Lüge freundlich ist?",
                                            "Ist Ehrlichkeit immer der beste Weg?",
                                            "Hast du jemals eine Notlüge erzählt?",
                                            "Wie fühlst du dich, wenn jemand lügt, um dich zu schützen?",
                                            "Gibt es einen Unterschied zwischen einer Lüge und dem Verschweigen der ganzen Wahrheit?"
                                  ]
                        },
                        {
                                  "text": "Soziale Medien führen dazu, dass sich Menschen schlechter fühlen.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Wie fühlst du dich nach dem Scrollen in sozialen Medien?",
                                            "Vergleichst du dich mit Menschen online?",
                                            "Glaubst du, dass soziale Medien das wahre Leben zeigen?",
                                            "Hast du jemals eine Pause von sozialen Medien gemacht?",
                                            "Wie wäre das Leben ohne sie?"
                                  ]
                        },
                        {
                                  "text": "Man muss nicht reisen, um die Welt zu verstehen.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Kann man durch Bücher und Filme etwas über die Welt lernen?",
                                            "Was lehrt das Reisen, was nichts anderes kann?",
                                            "Ist Reisen für jeden zugänglich?",
                                            "Hast du etwas Wichtiges gelernt, ohne dein Land zu verlassen?",
                                            "Was ist das Wichtigste, das dich das Reisen gelehrt hat?"
                                  ]
                        },
                        {
                                  "text": "Menschen, die keine Tiere mögen, sind ein wenig verdächtig.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Vertraust du Menschen, die keine Tiere mögen?",
                                            "Sagt die Vorliebe für Tiere etwas über den Charakter aus?",
                                            "Muss man Tiere lieben, um ein guter Mensch zu sein?",
                                            "Was denkst du, wenn du jemanden triffst, der Angst vor Tieren hat?",
                                            "Ist diese Aussage fair?"
                                  ]
                        },
                        {
                                  "text": "Arbeit von zu Hause aus macht die Menschen fauler.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Arbeitest oder studierst du von zu Hause aus?",
                                            "Bist du zu Hause mehr oder weniger produktiv?",
                                            "Was sind die größten Ablenkungen zu Hause?",
                                            "Vermisst du die Struktur eines Büros oder Klassenzimmers?",
                                            "Glaubst du, dass Fernarbeit die Zukunft ist?"
                                  ]
                        },
                        {
                                  "text": "Erste Eindrücke sind fast immer falsch.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Urteilst du schnell über Menschen?",
                                            "War dein erster Eindruck von jemandem schon einmal völlig falsch?",
                                            "Was bemerkst du zuerst an einer Person?",
                                            "Ist es fair, jemanden nach dem ersten Treffen zu beurteilen?",
                                            "Kannst du den ersten Eindruck ändern, den jemand von dir hat?"
                                  ]
                        },
                        {
                                  "text": "Romanze-Filme wecken unrealistische Erwartungen.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Schaust du Liebesfilme?",
                                            "Glaubst du, dass sie beeinflussen, wie Menschen über Beziehungen denken?",
                                            "Ist wahre Liebe wie im Film?",
                                            "Was ist an Liebesfilmen unrealistisch?",
                                            "Sind Liebesgeschichten in deiner Kultur anders?"
                                  ]
                        },
                        {
                                  "text": "Lustig zu sein ist nützlicher als intelligent zu sein.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Wärst du lieber lustig oder intelligent?",
                                            "Fällt dir eine Situation ein, in der Humor mehr geholfen hat als Intelligenz?",
                                            "Sind lustige Leute beliebter?",
                                            "Können Intelligenz und Humor zusammen existieren?",
                                            "Welche Art von Humor hast du?"
                                  ]
                        },
                        {
                                  "text": "Schweigen am Esstisch ist nicht unangenehm — es ist friedlich.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Sprichst du viel bei den Mahlzeiten?",
                                            "Ist Schweigen für dich unangenehm?",
                                            "Isst du mit deinem Handy?",
                                            "Glaubst du, dass Mahlzeiten gesellig sein sollten?",
                                            "Worüber sprichst du normalerweise beim Abendessen?"
                                  ]
                        },
                        {
                                  "text": "Es ist einfacher, sich zu entschuldigen, als um Erlaubnis zu bitten.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Fragst du um Erlaubnis oder handelst du zuerst?",
                                            "Fällt dir ein Zeitpunkt ein, an dem das gut funktioniert hat?",
                                            "Ist das eine verantwortungsbewusste Verhaltensweise?",
                                            "Sind manche Menschen zu vorsichtig?",
                                            "Was sagt das über die Persönlichkeit von jemandem aus?"
                                  ]
                        },
                        {
                                  "text": "Die Leute lesen zu viel Nachrichten, und das macht sie ängstlich.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Wie oft checkst du die Nachrichten?",
                                            "Beeinflussen Nachrichten deine Stimmung?",
                                            "Ist es wichtig, informiert zu bleiben?",
                                            "Wie entscheidest du, welchen Nachrichten du folgst?",
                                            "Hast du jemals eine Pause von den Nachrichten gemacht?"
                                  ]
                        },
                        {
                                  "text": "Man kann jemanden nie wirklich kennen, bis man mit ihm reist.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Bist du schon einmal mit einem Freund oder Partner gereist?",
                                            "Was hast du über sie entdeckt?",
                                            "Welche Situationen offenbaren den wahren Charakter von jemandem?",
                                            "Glaubst du, dass du deine Freunde gut kennst?",
                                            "Was zeigt dir sonst noch, wer jemand wirklich ist?"
                                  ]
                        },
                        {
                                  "text": "Die Fitnessstudio-Kultur ist zu weit gegangen.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Gehst du ins Fitnessstudio?",
                                            "Wie wichtig ist Fitness für dich?",
                                            "Glaubst du, dass die Leute von ihrem Körper besessen sind?",
                                            "Gibt es Druck, auf eine bestimmte Weise auszusehen?",
                                            "Was ist eine gesunde Einstellung zu Sport?"
                                  ]
                        },
                        {
                                  "text": "Ein wenig Eifersucht in einer Beziehung ist gesund.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Glaubst du, dass Eifersucht immer negativ ist?",
                                            "Hast du dich jemals eifersüchtig gefühlt?",
                                            "Was ist der Unterschied zwischen Eifersucht und Unsicherheit?",
                                            "Ab wann wird Eifersucht zum Problem?",
                                            "Was sagt Eifersucht wirklich über eine Person aus?"
                                  ]
                        },
                        {
                                  "text": "Zerstören soziale Medien unsere sozialen Kompetenzen?",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Wie hat sich Ihr Kommunikationsstil in den letzten 10 Jahren verändert?",
                                            "Fällt es Ihnen jetzt schwerer, mit Fremden zu sprechen?",
                                            "Ist Online-Interaktion so wertvoll wie ein persönliches Gespräch?",
                                            "Welche sozialen Fähigkeiten werden am meisten durch die Zeit vor dem Bildschirm beeinträchtigt?",
                                            "Könnten Sie einen Monat ohne soziale Medien auskommen?"
                                  ]
                        },
                        {
                                  "text": "Sollte der öffentliche Nahverkehr kostenlos sein?",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Wer würde für den kostenlosen öffentlichen Nahverkehr bezahlen?",
                                            "Würde es die Autonutzung tatsächlich reduzieren?",
                                            "Ist kostenloser Transport ein Recht oder ein Luxus?",
                                            "Wie würde sich die Qualität der Dienstleistung verändern?",
                                            "Wie ist die Situation in Ihrer Stadt?"
                                  ]
                        },
                        {
                                  "text": "Nostalgie ist meist nur eine Lüge, die wir uns selbst erzählen.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Worauf sind Sie am meisten nostalgisch?",
                                            "Glauben Sie, dass die Vergangenheit wirklich besser war?",
                                            "Ist Nostalgie tröstlich oder hält sie einen zurück?",
                                            "Kann Nostalgie gefährlich sein — persönlich oder politisch?",
                                            "Was bedeutet es, dass wir unsere Erinnerungen bearbeiten?"
                                  ]
                        },
                        {
                                  "text": "Die meisten Menschen wollen kein ehrliches Feedback — sie wollen Bestätigung.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Wenn Sie um Feedback bitten, was wollen Sie wirklich?",
                                            "Haben Sie jemals Feedback erhalten, das schwer zu hören, aber wertvoll war?",
                                            "Ist es freundlich, jemandem ein ehrliches Feedback zu geben?",
                                            "Fällt Ihnen ein Kontext ein, in dem Bestätigung tatsächlich das Richtige ist?",
                                            "Was ist der Unterschied zwischen Freundlichkeit und Unaufrichtigkeit?"
                                  ]
                        },
                        {
                                  "text": "Es ist möglich, süchtig danach zu sein, beschäftigt zu sein.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Füllen Sie Ihren Zeitplan absichtlich?",
                                            "Fühlt es sich für Sie tugendhaft an, beschäftigt zu sein?",
                                            "Was passiert, wenn Sie nichts zu tun haben?",
                                            "Ist Geschäftigkeit ein Statussymbol?",
                                            "Wann hat das Ausruhen aufgehört, sich akzeptabel anzufühlen?"
                                  ]
                        },
                        {
                                  "text": "Ruhm sieht wie eine Strafe aus, nicht wie eine Belohnung.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Würden Sie berühmt sein wollen?",
                                            "Was würden Sie verlieren, wenn Sie berühmt wären?",
                                            "Glauben Sie, dass die meisten berühmten Menschen glücklich sind?",
                                            "Ist Ruhm dasselbe wie Erfolg?",
                                            "Welche Art von Anerkennung würden Sie sich eigentlich wünschen?"
                                  ]
                        },
                        {
                                  "text": "Das Schulsystem erstickt die Kreativität mehr, als es sie fördert.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Glauben Sie, dass Ihre Ausbildung Ihre Kreativität gefördert hat?",
                                            "Welches Fach oder welchen Moment in der Schule fanden Sie am kreativsten?",
                                            "Ist es möglich, Kreativität zu lehren?",
                                            "Wie würde eine Schule aussehen, wenn Kreativität die Priorität wäre?",
                                            "Sind Sie mehr oder weniger kreativ als als Kind?"
                                  ]
                        },
                        {
                                  "text": "Es gibt kein wirklich uneigennütziges Verhalten.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Fällt Ihnen eine wirklich selbstlose Tat ein?",
                                            "Fühlt es sich gut an, etwas Gutes zu tun — und macht es das egoistisch?",
                                            "Ist das eine zynische oder eine realistische Sichtweise?",
                                            "Spielt die Motivation hinter einer Handlung eine Rolle, wenn das Ergebnis positiv ist?",
                                            "Ändert der Glaube daran Ihr Verhalten?"
                                  ]
                        },
                        {
                                  "text": "Die meisten Erwachsenen improvisieren nur.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Haben Sie das Gefühl, zu wissen, was Sie tun?",
                                            "Wann haben Sie erwartet, sich wie ein Erwachsener zu fühlen?",
                                            "Haben alle das Gefühl, nur so zu tun?",
                                            "Ist das beruhigend oder erschreckend?",
                                            "Wer ist jemand, der es im Griff zu haben scheint — glauben Sie, dass er das wirklich tut?"
                                  ]
                        },
                        {
                                  "text": "Die interessantesten Menschen sind immer ein wenig schwierig.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Fällt Ihnen jemand ein, der sowohl faszinierend als auch schwierig ist?",
                                            "Ist Schwierigkeit ein Zeichen von Tiefe oder nur... Schwierigkeit?",
                                            "Hätten Sie lieber einen unkomplizierten, langweiligen Freund oder einen herausfordernden, interessanten?",
                                            "Was macht jemanden für Sie wirklich interessant?",
                                            "Haben Menschen, die das Leben nicht einfach machen, etwas Attraktives an sich?"
                                  ]
                        },
                        {
                                  "text": "Wir verzeihen Menschen, die wir lieben, Dinge, die wir Fremden nie verzeihen würden.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Ist das fair oder ist das ein Doppelmoral?",
                                            "Fällt Ihnen ein Beispiel aus Ihrem eigenen Leben ein?",
                                            "Was sagt das über die Natur der Liebe aus?",
                                            "Sollten wir an die Menschen, die wir lieben, höhere oder niedrigere Maßstäbe anlegen?",
                                            "Gibt es etwas, das Sie nie verzeihen würden, unabhängig von der Beziehung?"
                                  ]
                        },
                        {
                                  "text": "Komfortzonen werden überbewertet — Wachstum findet eigentlich in der Unbequemlichkeit statt.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Fällt Ihnen eine Zeit ein, in der Unbehagen zu Wachstum führte?",
                                            "Ist es immer notwendig, sich unbehaglich zu fühlen, um sich zu entwickeln?",
                                            "Gibt es einen Unterschied zwischen produktivem Unbehagen und bloßem Leiden?",
                                            "Suchen Sie aktiv nach Unbehagen?",
                                            "Was liegt gerade außerhalb Ihrer Komfortzone?"
                                  ]
                        },
                        {
                                  "text": "Wut ist eine unterschätzte Emotion — manchmal bewirkt sie etwas.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Glauben Sie, dass Sie Wut gut ausdrücken können?",
                                            "Fällt Ihnen eine Zeit ein, in der Wut produktiv war?",
                                            "Gibt es einen Unterschied zwischen gesunder Wut und destruktiver Wut?",
                                            "Unterdrücken manche Menschen ihre Wut zu schnell?",
                                            "Was tun Sie, wenn Sie wütend sind?"
                                  ]
                        },
                        {
                                  "text": "Haustiere haben für viele Menschen die Gemeinschaft ersetzt.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Glauben Sie, dass die Einsamkeit zunimmt?",
                                            "Welche Rolle spielt ein Haustier im Gefühlsleben eines Menschen?",
                                            "Ist das traurig oder nur eine andere Art von Verbindung?",
                                            "Was hat die traditionelle Gemeinschaft im modernen Leben ersetzt?",
                                            "Fühlen Sie sich als Teil einer Gemeinschaft?"
                                  ]
                        },
                        {
                                  "text": "Alleine zu reisen ist der einzige Weg, sich selbst wirklich zu entdecken.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Sind Sie jemals alleine gereist?",
                                            "Kann man sich selbst entdecken, ohne zu reisen?",
                                            "Wozu zwingt einen das Alleinreisen?",
                                            "Was ist das Meiste, das Sie jemals durch eine Erfahrung über sich selbst gelernt haben?",
                                            "Ist Selbsterkenntnis eine Reise oder ein Ziel?"
                                  ]
                        },
                        {
                                  "text": "Eine Zeit, in der man von vorne anfangen musste, ist nie ganz verschwendet.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Mussten Sie schon einmal etwas ganz von vorne anfangen?",
                                            "Was haben Sie aus dem ersten Versuch mitgenommen?",
                                            "Ist ein Neuanfang ein Scheitern oder eine Entscheidung?",
                                            "Was ist das Schwierigste am Neuanfang?",
                                            "Glauben Sie, dass Rückschläge notwendig sind?"
                                  ]
                        },
                        {
                                  "text": "Die Besessenheit von Produktivität ist nur Kapitalismus im Gewand der Selbstverbesserung.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Verfolgen Sie Ihre Zeit oder nutzen Sie Produktivitäts-Apps?",
                                            "Fühlt es sich gut an, produktiv zu sein?",
                                            "Woher kommt Ihrer Meinung nach der Druck, produktiv zu sein?",
                                            "Ist Ruhe tatsächlich Teil eines produktiven Lebens oder nur ein Erholungswerkzeug?",
                                            "Fällt Ihnen etwas Wertvolles ein, das völlig unproduktiv ist?"
                                  ]
                        },
                        {
                                  "text": "Gentechnik: Fortschritt oder Gefahr?",
                                  "level": "advanced",
                                  "hints": [
                                            "Was sind die potenziellen Vorteile für die Medizin?",
                                            "Könnte sie zu sozialer Ungleichheit führen?",
                                            "Ist es ethisch vertretbar, Menschen zu 'entwerfen'?",
                                            "Wer sollte diese Technologie regulieren?",
                                            "Riskieren wir dauerhafte Veränderungen am Genpool?"
                                  ]
                        },
                        {
                                  "text": "Das bedingungslose Grundeinkommen ist die einzige Lösung für die flächendeckende Automatisierung.",
                                  "level": "advanced",
                                  "hints": [
                                            "Wie würde das BGE finanziert werden?",
                                            "Würde es die Menschen davon abhalten zu arbeiten?",
                                            "Könnte es Armut und Ungleichheit verringern?",
                                            "Was sind die Alternativen zum BGE?",
                                            "Ist die Automatisierung wirklich eine Bedrohung für alle Arbeitsplätze?"
                                  ]
                        },
                        {
                                  "text": "Glück ist eine Entscheidung – Umstände sind nur Ausreden.",
                                  "level": "advanced",
                                  "hints": [
                                            "Glauben Sie, dass jeder sein Glück selbst in der Hand hat?",
                                            "Ist dies eine privilegierte Sichtweise?",
                                            "Kann man wählen, wie man auf schlechte Umstände reagiert?",
                                            "Kennen Sie Menschen, die trotz eines schwierigen Lebens glücklich sind?",
                                            "Ist das Streben nach Glück selbst Teil des Problems?"
                                  ]
                        },
                        {
                                  "text": "Leute, die behaupten, Drama zu hassen, sind meistens dessen Ursprung.",
                                  "level": "advanced",
                                  "hints": [
                                            "Kennen Sie jemanden, auf den das zutrifft?",
                                            "Warum erkennen sich Menschen, die Konflikte schüren, nicht selbst darin?",
                                            "Ist Drama immer schlecht?",
                                            "Was ist der Unterschied zwischen Konflikt und Drama?",
                                            "Ist Selbsterkenntnis selten?"
                                  ]
                        },
                        {
                                  "text": "Langeweile ist ein Zeichen von mangelnder Fantasie, nicht von mangelnder Stimulation.",
                                  "level": "advanced",
                                  "hints": [
                                            "Wann haben Sie sich das letzte Mal wirklich gelangweilt?",
                                            "Glauben Sie, dass wir die Fähigkeit verloren haben, uns zu langweilen?",
                                            "Was passiert in Ihrem Kopf, wenn Sie sich langweilen?",
                                            "Ist Langeweile unangenehm, weil wir Angst davor haben, was wir denken könnten?",
                                            "Wozu hat Langeweile bei Ihnen schon einmal geführt (Ideen/Entdeckungen)?"
                                  ]
                        },
                        {
                                  "text": "Empathie ohne Grenzen ist nur People-Pleasing mit gutem Marketing.",
                                  "level": "advanced",
                                  "hints": [
                                            "Betrachten Sie sich selbst als empathischen Menschen?",
                                            "Kann Empathie vorgespielt statt gefühlt werden?",
                                            "Ist es möglich, zu viel Empathie zu empfinden?",
                                            "Was ist der Unterschied zwischen Empathie und dem Sich-Verlieren in der Erfahrung eines anderen?",
                                            "Mussten Sie sich jemals davor schützen, zu viel zu fühlen?"
                                  ]
                        },
                        {
                                  "text": "Die gefährlichsten Meinungen sind diejenigen, die vollkommen vernünftig klingen.",
                                  "level": "advanced",
                                  "hints": [
                                            "Fällt Ihnen ein Beispiel für eine gefährliche Idee ein, die vernünftig klingt?",
                                            "Wie bewerten Sie ein Argument, das sich richtig anfühlt, es aber vielleicht nicht ist?",
                                            "Ist es schwieriger, eine höfliche, gut begründete falsche Meinung oder eine offensichtlich extreme herauszufordern?",
                                            "Was ist Ihr persönlicher Test dafür, ob eine Idee vertrauenswürdig ist?",
                                            "Hat Sie eine vernünftig klingende Idee jemals irgendwohin geführt, wo Sie es nicht erwartet haben?"
                                  ]
                        },
                        {
                                  "text": "Authentizität ist zur am sorgfältigsten inszenierten Performance von allen geworden.",
                                  "level": "advanced",
                                  "hints": [
                                            "Was bedeutet es für Sie, authentisch zu sein?",
                                            "Präsentieren Sie sich online anders als offline?",
                                            "Ist totale Authentizität überhaupt möglich?",
                                            "Kann man gleichzeitig authentisch und strategisch sein?",
                                            "Wann fühlen Sie sich am meisten wie Sie selbst?"
                                  ]
                        },
                        {
                                  "text": "Vergebung ist letztendlich etwas, das man für sich selbst tut, nicht für die andere Person.",
                                  "level": "advanced",
                                  "hints": [
                                            "Haben Sie schon einmal jemandem vergeben, der es nicht verdient hat, nur um Ihres eigenen Friedens willen?",
                                            "Was ist der Unterschied zwischen Vergeben und Vergessen?",
                                            "Ist Vergebung immer möglich?",
                                            "Bedeutet jemandem zu vergeben, dass man akzeptiert, was er getan hat?",
                                            "Gibt es etwas, das Ihnen schwerfällt zu vergeben?"
                                  ]
                        },
                        {
                                  "text": "Institutionen enden immer damit, sich selbst mehr zu schützen als die Menschen, denen sie dienen.",
                                  "level": "advanced",
                                  "hints": [
                                            "Fällt Ihnen eine Institution ein, die die Menschen, denen sie dienen sollte, im Stich gelassen hat?",
                                            "Ist das unvermeidlich, oder können Institutionen reformiert werden?",
                                            "Ziehen Institutionen Menschen an, die sie schützen wollen?",
                                            "Wie sähe eine wirklich rechenschaftspflichtige Institution aus?",
                                            "Ist es naiv zu erwarten, dass Institutionen sich selbst korrigieren?"
                                  ]
                        },
                        {
                                  "text": "Der Wunsch nach Gewissheit ist die Wurzel der meisten menschlichen Grausamkeiten.",
                                  "level": "advanced",
                                  "hints": [
                                            "Glauben Sie, dass Ungewissheit schwer zu ertragen ist?",
                                            "Fällt Ihnen ein Fall ein, in dem das Bedürfnis nach Gewissheit zu Schaden geführt hat?",
                                            "Ist Zweifel eine Stärke oder eine Schwäche?",
                                            "Machen Menschen mit starken Überzeugungen die Welt besser oder schlechter?",
                                            "Wie gehen Sie mit Ihrem eigenen Bedürfnis nach Gewissheit um?"
                                  ]
                        },
                        {
                                  "text": "Die Werte der meisten Menschen halten nur stand, wenn es nichts kostet, sie zu haben.",
                                  "level": "advanced",
                                  "hints": [
                                            "Wurden Ihre Werte jemals durch echte Kosten auf die Probe gestellt?",
                                            "Können Sie sich an einen Moment erinnern, in dem Sie gegen Ihre erklärten Werte gehandelt haben?",
                                            "Ist es fair, Menschen dafür zu verurteilen, dass sie ihre Werte unter Druck nicht einhalten?",
                                            "Ist die Kluft zwischen Werten und Verhalten ein Zeichen von Heuchelei oder einfach nur von Menschlichkeit?",
                                            "Welchen Wert würden Sie unter keinen Umständen opfern?"
                                  ]
                        },
                        {
                                  "text": "Zu wissen, wann man aufhören sollte zu reden, ist seltener und wertvoller als zu wissen, was man sagen soll.",
                                  "level": "advanced",
                                  "hints": [
                                            "Glauben Sie, dass Sie gut zuhören können?",
                                            "Fällt Ihnen eine Situation ein, in der Schweigen die richtige Reaktion war?",
                                            "Wird es überbewertet, ein guter Redner zu sein?",
                                            "Was bemerken Sie an Menschen, die mehr zuhören als reden?",
                                            "War Schweigen schon einmal das Mächtigste, was Sie tun konnten?"
                                  ]
                        },
                        {
                                  "text": "Wir werden mehr durch das definiert, was wir ablehnen, als durch das, was wir wählen.",
                                  "level": "advanced",
                                  "hints": [
                                            "Was würden Sie niemals tun, ungeachtet der Belohnung?",
                                            "Definiert es Sie, wenn Sie zu etwas Nein sagen?",
                                            "Spiegeln Ihre Grenzen Ihre Werte wider?",
                                            "Ist das, was wir vermeiden, ebenso aufschlussreich wie das, was wir verfolgen?",
                                            "Hat Sie eine Ablehnung jemals etwas Bedeutendes gekostet?"
                                  ]
                        },
                        {
                                  "text": "Die Besessenheit von Produktivität ist nur Kapitalismus, der als Selbstoptimierung getarnt ist.",
                                  "level": "advanced",
                                  "hints": [
                                            "Woher kommt Ihrer Meinung nach der Druck, seine Zeit zu optimieren?",
                                            "Ist Ruhe wirklich Teil eines produktiven Lebens oder nur ein Erholungswerkzeug?",
                                            "Beurteilen Sie sich selbst danach, wie viel Sie schaffen?",
                                            "Fällt Ihnen etwas zutiefst Wertvolles ein, das völlig unproduktiv ist?",
                                            "Gibt es eine Version von Ehrgeiz, bei der es nicht um Output geht?"
                                  ]
                        },
                        {
                                  "text": "Die Cancel Culture ist zu einer Form digitaler Lynchjustiz geworden.",
                                  "level": "advanced",
                                  "hints": [
                                            "Fällt Ihnen ein Fall ein, in dem öffentlicher Aufschrei gerechtfertigt war?",
                                            "Gibt es einen Unterschied zwischen Rechenschaftspflicht und Bestrafung?",
                                            "Wer entscheidet, was unverzeihlich ist?",
                                            "Funktioniert 'Cancellation' – ändert sie tatsächlich das Verhalten?",
                                            "Ist daran etwas unheilbar problematisch, oder ist sie nur unvollkommen?"
                                  ]
                        },
                        {
                                  "text": "Menschen, die behaupten, keine Reue zu empfinden, haben entweder nicht genug gelebt oder nicht genug reflektiert.",
                                  "level": "advanced",
                                  "hints": [
                                            "Haben Sie Dinge, die Sie bereuen?",
                                            "Ist 'keine Reue' eine gesunde Philosophie oder ein Abwehrmechanismus?",
                                            "Was würde es bedeuten, ohne Reue zu leben?",
                                            "Kann Reue nützlich sein?",
                                            "Gibt es etwas, das Sie rückgängig machen würden, wenn Sie könnten?"
                                  ]
                        },
                        {
                                  "text": "Das Selbst ist nichts, was wir entdecken – es ist etwas, das wir ständig erfinden.",
                                  "level": "advanced",
                                  "hints": [
                                            "Fühlt sich diese Idee befreiend oder destabilisierend an?",
                                            "Was bedeutete es für deine Entscheidungen, wenn Identität konstruiert wäre?",
                                            "Gibt es etwas, das sich wie ein festes, essentielles Ich anfühlt?",
                                            "Formt das Selbst, das du anderen präsentierst, das Selbst, das du wirst?",
                                            "Was passiert mit der Identität bei radikalem Verlust?"
                                  ]
                        },
                        {
                                  "text": "Mitgefühl, das eine einfache Geschichte erfordert, ist kein echtes Mitgefühl – es ist Sentimentalität.",
                                  "level": "advanced",
                                  "hints": [
                                            "Unterschied zwischen Mitgefühl und emotionaler Reaktion auf ein Narrativ?",
                                            "Fall, in dem eine vereinfachte Geschichte die Realität verzerrte?",
                                            "Gibt Sentimentalität das Gefühl, etwas zu tun?",
                                            "Ist Vereinfachung für Empathie notwendig?",
                                            "Kosten der Reduzierung von Leiden auf ein verdauliches Narrativ?"
                                  ]
                        },
                        {
                                  "text": "Jede Ideologie wird, konsequent zu Ende gedacht, zu einer Form von Gewalt.",
                                  "level": "advanced",
                                  "hints": [
                                            "Gibt es eine Ideologie, die dieser Logik entkommt?",
                                            "Grund, Ideologie abzulehnen oder sie locker zu nehmen?",
                                            "Unterschied zwischen Prinzip und Ideologie?",
                                            "Vermeidet Pragmatismus diese Falle oder verbirgt er sie?",
                                            "Sind alle politischen Positionen gleich gefährlich?"
                                  ]
                        },
                        {
                                  "text": "Sprache beschreibt die Realität nicht – sie konstruiert sie.",
                                  "level": "advanced",
                                  "hints": [
                                            "Zugang zu neuen Gedanken durch eine andere Sprache?",
                                            "Gefühle, für die keine Sprache Worte hat?",
                                            "Beeinflusst deine Denksprache deine Emotionen?",
                                            "Konzept ohne Wort möglich?",
                                            "Kann eine Idee vollständig übersetzt werden?"
                                  ]
                        },
                        {
                                  "text": "Das Subversivste, was man in der modernen Welt tun kann, ist, aufrichtig zufrieden zu sein.",
                                  "level": "advanced",
                                  "hints": [
                                            "Ist Zufriedenheit politisch?",
                                            "Braucht die Wirtschaft unzufriedene Konsumenten?",
                                            "Ist echte Zufriedenheit möglich?",
                                            "Unterschied zwischen Zufriedenheit und Resignation?",
                                            "Bedeutet Zufriedenheit, dass einem Ungerechtigkeit egal ist?"
                                  ]
                        },
                        {
                                  "text": "Die Forderung nach Ausgewogenheit verleiht oft Positionen falsche Legitimität, die sie nicht verdienen.",
                                  "level": "advanced",
                                  "hints": [
                                            "Ist 'beide Seiten zeigen' immer fair?",
                                            "Wer entscheidet, welche Positionen eine Plattform verdienen?",
                                            "Unterschied zwischen Balance und falscher Äquivalenz?",
                                            "Journalistische Neutralität mit Wahrheit vereinbar?",
                                            "Kosten des Plattform-Gebens im Namen der Fairness?"
                                  ]
                        },
                        {
                                  "text": "Radikale Ehrlichkeit ohne Weisheit ist nur Grausamkeit mit guten Absichten.",
                                  "level": "advanced",
                                  "hints": [
                                            "Geht es beim Impuls um den anderen oder um eigene Erleichterung?",
                                            "Moment, in dem radikale Ehrlichkeit schadete?",
                                            "Ist Freundlichkeit die mutigere Wahl?",
                                            "Grenze zwischen Ehrlichkeit und Grausamkeit?",
                                            "Spiegelt Ehrlichkeit Intimität oder Kontrolle wider?"
                                  ]
                        },
                        {
                                  "text": "Der freie Wille ist eher eine unverzichtbare Fiktion als eine bedeutungsvolle Realität.",
                                  "level": "advanced",
                                  "hints": [
                                            "Spielt es eine Rolle, wenn wir so handeln müssen, als gäbe es ihn?",
                                            "Moralische Verantwortung ohne freien Willen?",
                                            "Löst die Neurowissenschaft die Frage?",
                                            "Ist der Glaube an freien Willen determiniert?",
                                            "Was sagt deine Intuition?"
                                  ]
                        },
                        {
                                  "text": "Das Internet hat uns nicht informierter gemacht – es hat uns sicherer in unseren Irrtümern gemacht.",
                                  "level": "advanced",
                                  "hints": [
                                            "Glaube, durch Algorithmen geformt?",
                                            "Problem Internet oder menschliche Natur?",
                                            "Schutzpraktiken?",
                                            "Expertise noch sinnvoll?",
                                            "Vertrauen in eigene Bewertung von Infos?"
                                  ]
                        },
                        {
                                  "text": "Kunst, die tröstet, ist weniger wertvoll als Kunst, die verstört.",
                                  "level": "advanced",
                                  "hints": [
                                            "Kunst, die beides gleichzeitig tat?",
                                            "Hierarchie der Werte oder Snobismus?",
                                            "Wonach greifst du im Schmerz – Schwierigkeit oder Trost?",
                                            "Verändert verstörende Kunst das Verhalten?",
                                            "Zweck der Kunst: Herausforderung, Reflexion oder Transzendenz?"
                                  ]
                        },
                        {
                                  "text": "Moralischer Fortschritt ist real, aber die Idee, dass Geschichte in eine Richtung verläuft, ist ein Mythos.",
                                  "level": "advanced",
                                  "hints": [
                                            "Beispiel für echten moralischen Fortschritt?",
                                            "Bereich, in dem wir uns zurückentwickelt haben?",
                                            "Ist Fortschritt ein kultureller Mythos?",
                                            "Moralische Mode mit Fortschritt verwechselt?",
                                            "Beweis, dass wir besser als Vorfahren sind?"
                                  ]
                        },
                        {
                                  "text": "Das Streben nach Gewissheit ist die Wurzel der meisten menschlichen Grausamkeiten.",
                                  "level": "advanced",
                                  "hints": [
                                            "Beispiel, wo das Bedürfnis nach Gewissheit schadete?",
                                            "Ist Zweifel eine Tugend?",
                                            "Machen Menschen mit unerschütterlichen Überzeugungen die Welt besser?",
                                            "Ungefährliche Gewissheit?",
                                            "Starke Überzeugungen ohne Starrheit?"
                                  ]
                        },
                        {
                                  "text": "Das Gedächtnis ist keine Aufzeichnung dessen, was geschah – es ist eine Geschichte, die wir ständig umschreiben.",
                                  "level": "advanced",
                                  "hints": [
                                            "Erinnerung von Zeugen widersprochen?",
                                            "Bearbeiten wir Erinnerungen für unser Image?",
                                            "Bedeutung für Identität?",
                                            "Umgeschriebene Erinnerung wahrer als Ereignis?",
                                            "Zuverlässigkeit deiner lebhaftesten Erinnerung?"
                                  ]
                        },
                        {
                                  "text": "Es gibt keinen ethischen Konsum im Spätkapitalismus – das ist ein Grund zu handeln, nicht aufzugeben.",
                                  "level": "advanced",
                                  "hints": [
                                            "Zählen individuelle Konsumentscheidungen?",
                                            "Persönliche Verantwortung als politischer Schachzug?",
                                            "Systemischer Wandel vs. individuelles Handeln?",
                                            "Ethisch leben in unethischem System?",
                                            "Ändert das Wissen dein Verhalten?"
                                  ]
                        },
                        {
                                  "text": "Das geprüfte Leben ist lebenswert – aber es zu genau zu prüfen, kann es unlebbar machen.",
                                  "level": "advanced",
                                  "hints": [
                                            "Wie viel Selbstreflexion ist zu viel?",
                                            "Introspektion als Vermeidung?",
                                            "Kosten ständiger Prüfung?",
                                            "Gut leben ohne Selbstprüfung?",
                                            "Kosten und Gewinn deiner Reflexion?"
                                  ]
                        },
                        {
                                  "text": "Die Ethik der Kolonisierung anderer Planeten.",
                                  "level": "advanced",
                                  "hints": [
                                            "Recht auf andere Welten ohne Lösung eigener Probleme?",
                                            "Menschliche Systeme exportieren?",
                                            "Verpflichtungen gegenüber extraterrestrischem Leben?",
                                            "Plan B als Ablenkung?",
                                            "Eigentum an planetaren Ressourcen?"
                                  ]
                        },
                        {
                                  "text": "Existiert der freie Wille wirklich oder ist er eine Illusion?",
                                  "level": "advanced",
                                  "hints": [
                                            "Verantwortung bei determinierten Handlungen?",
                                            "Gefühl der Wahl als Beweis?",
                                            "Computer, der Entscheidungen voraussagt?",
                                            "Freiheit 'von' vs. Freiheit 'zu'?",
                                            "Ändert die Seele die Gleichung?"
                                  ]
                        }
              ],
              "battle": [
                        [
                                  "Berge 🏔️",
                                  "Strand 🏖️"
                        ],
                        [
                                  "Kaffee ☕",
                                  "Tee 🍵"
                        ],
                        [
                                  "Frühaufsteher 🌅",
                                  "Nachteule 🦉"
                        ],
                        [
                                  "Stadtleben 🏙️",
                                  "Landleben 🌾"
                        ],
                        [
                                  "Lesen 📚",
                                  "Filme schauen 🎬"
                        ],
                        [
                                  "Sommer ☀️",
                                  "Winter ❄️"
                        ],
                        [
                                  "Katzen 🐱",
                                  "Hunde 🐶"
                        ],
                        [
                                  "Homeoffice 🏠",
                                  "Büroarbeit 🏢"
                        ],
                        [
                                  "Süß 🍰",
                                  "Herzhaft 🧀"
                        ],
                        [
                                  "Alleine reisen ✈️",
                                  "Mit Freunden reisen 👥"
                        ],
                        [
                                  "Gedruckte Bücher 📖",
                                  "E-Reader 📱"
                        ],
                        [
                                  "Zuhause kochen 🍳",
                                  "Essen bestellen 🍕"
                        ]
              ],
              "critic": [
                        {
                                  "title": "Sehr lecker, aber zu teuer 🍝",
                                  "type": "Restaurant",
                                  "review": "Das Essen war fantastisch und die Zutaten frisch, aber die Portionen waren klein und die Rechnung war eine Überraschung.",
                                  "question": "Würdest du trotz des hohen Preises wiederkommen?"
                        },
                        {
                                  "title": "Spannender Plot, schwaches Ende 🎬",
                                  "type": "Film",
                                  "review": "Die ersten zwei Drittel des Films waren fesselnd, aber die Auflösung war überstürzt und unlogisch.",
                                  "question": "Wie wichtig ist das Ende eines Films für deine Gesamtwertung?"
                        },
                        {
                                  "title": "Tolle Grafik, aber viele Bugs 🎮",
                                  "type": "Videospiel",
                                  "review": "Das Spiel sieht wunderschön aus, stürzt jedoch häufig ab und hat viele technische Fehler.",
                                  "question": "Können Grafik und Atmosphäre technische Mängel ausgleichen?"
                        }
              ],
              "action": {
                        "starter": [
                                  "Katze",
                                  "Hund",
                                  "Haus",
                                  "Auto",
                                  "Buch",
                                  "Wasser",
                                  "Sonne",
                                  "Mond",
                                  "Baum",
                                  "Telefon",
                                  "Tür",
                                  "Stuhl",
                                  "Bett",
                                  "Brot",
                                  "Fisch"
                        ],
                        "elementary": [
                                  "Küche",
                                  "Garten",
                                  "Zug",
                                  "Arzt",
                                  "Lehrer",
                                  "Musik",
                                  "Geburtstag",
                                  "Schwimmen",
                                  "Urlaub",
                                  "Geschäft",
                                  "Bahnhof",
                                  "Krankenhaus"
                        ],
                        "intermediate": [
                                  "Museum",
                                  "Interview",
                                  "Architekt",
                                  "Journalist",
                                  "Parlament",
                                  "Orchester",
                                  "Marathon",
                                  "Ausstellung",
                                  "Labor",
                                  "Teleskop"
                        ],
                        "upper_intermediate": [
                                  "Philanthropie",
                                  "Botschafter",
                                  "Hypothese",
                                  "Unternehmer",
                                  "Archäologie",
                                  "Biodiversität",
                                  "Infrastruktur"
                        ],
                        "advanced": [
                                  "Paradigma",
                                  "Gegenüberstellung",
                                  "Anachronismus",
                                  "Glaubwürdigkeit",
                                  "Resilienz",
                                  "Nuance",
                                  "Scharfsinn"
                        ],
                        "proficiency": [
                                  "Allgegenwart",
                                  "Flüchtigkeit",
                                  "Scharfsinn",
                                  "Gleichmut",
                                  "Mithilfe",
                                  "Unbeschreiblichkeit"
                        ]
              },
              "identity": [
                        {
                                  "person": "Ein Feuerwehrmann",
                                  "clue": "Er trägt einen Helm und löscht Feuer mit Wasser.",
                                  "level": "elementary"
                        },
                        {
                                  "person": "Ein Koch",
                                  "clue": "Er arbeitet in einer Küche und bereitet leckere Speisen zu.",
                                  "level": "elementary"
                        },
                        {
                                  "person": "Ein Bibliothekar",
                                  "clue": "Er leitet eine Bibliothek und hilft Menschen, Bücher zu finden.",
                                  "level": "elementary"
                        },
                        {
                                  "person": "Ein Tierarzt",
                                  "clue": "Er kümmert sich um kranke oder verletzte Tiere.",
                                  "level": "elementary"
                        },
                        {
                                  "person": "Ein Astronaut",
                                  "clue": "Er reist in den Weltraum jenseits der Erde.",
                                  "level": "intermediate"
                        },
                        {
                                  "person": "Ein Detektiv",
                                  "clue": "Er ermittelt in Rätseln und sucht nach Hinweisen.",
                                  "level": "intermediate"
                        },
                        {
                                  "person": "Ein Journalist",
                                  "clue": "Er informiert die Öffentlichkeit und schreibt Zeitungsartikel.",
                                  "level": "intermediate"
                        },
                        {
                                  "person": "Ein Fotograf",
                                  "clue": "Er hält Erinnerungen mit einer Kamera fest.",
                                  "level": "intermediate"
                        },
                        {
                                  "person": "Ein Architekt",
                                  "clue": "Er entwirft Häuser und Gebäude vor deren Bau.",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "person": "Ein Chirurg",
                                  "clue": "Er führt medizinische Operationen im Krankenhaus durch.",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "person": "Ein Softwareentwickler",
                                  "clue": "Er schreibt Code für Web- und Softwareanwendungen.",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "person": "Ein Diplomat",
                                  "clue": "Er vertritt sein Land in offiziellen internationalen Beziehungen.",
                                  "level": "advanced"
                        },
                        {
                                  "person": "Ein Meeresbiologe",
                                  "clue": "Er erforscht die Pflanzen- und Tierwelt der Ozeane.",
                                  "level": "advanced"
                        },
                        {
                                  "person": "Ein Astrophysiker",
                                  "clue": "Er erforscht die physikalischen Eigenschaften von Sternen.",
                                  "level": "advanced"
                        }
              ],
              "wordlinker": [
                        {
                                  "words": [
                                            "Apfel",
                                            "Orange",
                                            "Banane",
                                            "Karotte"
                                  ],
                                  "odd": "Karotte",
                                  "link": "Früchte",
                                  "oddReason": "Karotte ist ein Gemüse"
                        },
                        {
                                  "words": [
                                            "Paris",
                                            "Rom",
                                            "Tokio",
                                            "Amazonas"
                                  ],
                                  "odd": "Amazonas",
                                  "link": "Hauptstädte",
                                  "oddReason": "Amazonas ist ein Fluss"
                        },
                        {
                                  "words": [
                                            "Klavier",
                                            "Gitarre",
                                            "Geige",
                                            "Trompete"
                                  ],
                                  "odd": "none",
                                  "link": "Musikinstrumente",
                                  "oddReason": "Alle sind Musikinstrumente"
                        },
                        {
                                  "words": [
                                            "Arzt",
                                            "Pfleger",
                                            "Chirurg",
                                            "Pilot"
                                  ],
                                  "odd": "Pilot",
                                  "link": "Gesundheitsberufe",
                                  "oddReason": "Der Pilot fliegt Flugzeuge, nicht im Krankenhaus"
                        }
              ],
              "etymology": [
                        {
                                  "word": "Kindergarten",
                                  "level": "easy",
                                  "options": [
                                            "Deutsch",
                                            "Griechisch",
                                            "Latein",
                                            "Tschechisch"
                                  ],
                                  "answer": "Deutsch",
                                  "detail": "1837 von Friedrich Fröbel geprägt für frühkindliche Bildung im Einklang mit der Natur.",
                                  "path": "Deutsch (Kinder + Garten) → Kindergarten"
                        },
                        {
                                  "word": "Roboter",
                                  "level": "medium",
                                  "options": [
                                            "Tschechisch",
                                            "Deutsch",
                                            "Russisch",
                                            "Polnisch"
                                  ],
                                  "answer": "Tschechisch",
                                  "detail": "Eingeführt von Karel Čapek in seinem Theaterstück R.U.R. im Jahr 1920 aus dem slawischen robota für Fronarbeit.",
                                  "path": "Tschechisch (robota) → Roboter"
                        },
                        {
                                  "word": "Zeitgeist",
                                  "level": "medium",
                                  "options": [
                                            "Deutsch",
                                            "Latein",
                                            "Griechisch",
                                            "Französisch"
                                  ],
                                  "answer": "Deutsch",
                                  "detail": "Von Herder und Goethe populär gemacht zur Beschreibung der intellektuellen Strömung einer Epoche.",
                                  "path": "Deutsch (Zeit + Geist) → Zeitgeist"
                        },
                        {
                                  "word": "Ketchup",
                                  "level": "medium",
                                  "options": [
                                            "Chinesisch",
                                            "Englisch",
                                            "Niederländisch",
                                            "Deutsch"
                                  ],
                                  "answer": "Chinesisch",
                                  "detail": "Von britischen Händlern aus Asien mitgebracht (kôe-chiap für Fischsoße) und später mit Tomaten abgewandelt.",
                                  "path": "Chinesisch (kôe-chiap) → Englisch → Deutsch Ketchup"
                        },
                        {
                                  "word": "Panik",
                                  "level": "easy",
                                  "options": [
                                            "Griechisch",
                                            "Latein",
                                            "Deutsch",
                                            "Französisch"
                                  ],
                                  "answer": "Griechisch",
                                  "detail": "Bezieht sich auf den altgriechischen Gott Pan, der plötzliche Furcht in Herden und Wäldern auslöste.",
                                  "path": "Griechisch (Pan) → Latein → Deutsch Panik"
                        },
                        {
                                  "word": "Fenster",
                                  "level": "easy",
                                  "options": [
                                            "Latein",
                                            "Deutsch",
                                            "Griechisch",
                                            "Französisch"
                                  ],
                                  "answer": "Latein",
                                  "detail": "Aus dem lateinischen fenestra ins Althochdeutsche übernommen, wo es das germanische Windauge ersetzte.",
                                  "path": "Latein (fenestra) → Althochdeutsch (fenstra) → Fenster"
                        },
                        {
                                  "word": "Schule",
                                  "level": "easy",
                                  "options": [
                                            "Griechisch",
                                            "Latein",
                                            "Deutsch",
                                            "Französisch"
                                  ],
                                  "answer": "Griechisch",
                                  "detail": "Über das lateinische schola vom griechischen scholē abgeleitet, was ursprünglich freie Zeit oder Muße bedeutete.",
                                  "path": "Griechisch (scholē) → Latein (schola) → Schule"
                        },
                        {
                                  "word": "Mauer",
                                  "level": "easy",
                                  "options": [
                                            "Latein",
                                            "Deutsch",
                                            "Keltisch",
                                            "Französisch"
                                  ],
                                  "answer": "Latein",
                                  "detail": "Entlehnt aus dem lateinischen murus beim Bau romanischer Steinbauten in den germanischen Provinzen.",
                                  "path": "Latein (murus) → Althochdeutsch (mūra) → Mauer"
                        },
                        {
                                  "word": "Balkon",
                                  "level": "easy",
                                  "options": [
                                            "Französisch",
                                            "Italienisch",
                                            "Latein",
                                            "Deutsch"
                                  ],
                                  "answer": "Französisch",
                                  "detail": "Im 18. Jahrhundert aus dem französischen balcon übernommen, das seinerseits vom italienischen balcone stammt.",
                                  "path": "Lombardisch → Italienisch (balcone) → Französisch (balcon) → Balkon"
                        },
                        {
                                  "word": "Restaurant",
                                  "level": "easy",
                                  "options": [
                                            "Französisch",
                                            "Latein",
                                            "Italienisch",
                                            "Englisch"
                                  ],
                                  "answer": "Französisch",
                                  "detail": "Partizip des französischen Verbs restaurer (stärken), das ursprünglich eine stärkende Kraftbrühe bezeichnete.",
                                  "path": "Französisch (restaurant) → Restaurant"
                        },
                        {
                                  "word": "Handy",
                                  "level": "easy",
                                  "options": [
                                            "Englisch",
                                            "Deutsch",
                                            "Französisch",
                                            "Latein"
                                  ],
                                  "answer": "Englisch",
                                  "detail": "Ein bekannter Scheinanglizismus im Deutschen; im englischen Sprachraum bedeutet handy handlich oder nützlich.",
                                  "path": "Englisch (handy) → Pseudo-Anglizismus Deutsch Handy",
                                  "tags": [
                                            "false-friend-candidate"
                                  ]
                        },
                        {
                                  "word": "Computer",
                                  "level": "easy",
                                  "options": [
                                            "Englisch",
                                            "Latein",
                                            "Französisch",
                                            "Deutsch"
                                  ],
                                  "answer": "Englisch",
                                  "detail": "Aus dem englischen computer übernommen, das wiederum auf das lateinische computare (berechnen) zurückgeht.",
                                  "path": "Latein (computare) → Englisch (computer) → Computer"
                        },
                        {
                                  "word": "Bibliothek",
                                  "level": "easy",
                                  "options": [
                                            "Griechisch",
                                            "Latein",
                                            "Französisch",
                                            "Deutsch"
                                  ],
                                  "answer": "Griechisch",
                                  "detail": "Aus dem altgriechischen bibliothēkē, zusammengesetzt aus biblion (Buch) und thēkē (Behältnis).",
                                  "path": "Griechisch (biblion + thēkē) → Latein → Bibliothek"
                        },
                        {
                                  "word": "Grenze",
                                  "level": "medium",
                                  "options": [
                                            "Slawisch",
                                            "Deutsch",
                                            "Latein",
                                            "Französisch"
                                  ],
                                  "answer": "Slawisch",
                                  "detail": "Im Mittelalter aus dem Altpolnischen granica entlehnt, wo es das ältere germanische Mark ersetzte.",
                                  "path": "Altpolnisch (granica) → Mittelhochdeutsch (grenize) → Grenze"
                        },
                        {
                                  "word": "Gurke",
                                  "level": "medium",
                                  "options": [
                                            "Slawisch",
                                            "Griechisch",
                                            "Latein",
                                            "Deutsch"
                                  ],
                                  "answer": "Slawisch",
                                  "detail": "Aus dem Altpolnischen ogórek entlehnt, das letztlich auf das mittelgriechische angouria zurückgeht.",
                                  "path": "Griechisch (angouria) → Altpolnisch (ogórek) → Gurke"
                        },
                        {
                                  "word": "Tschüs",
                                  "level": "medium",
                                  "options": [
                                            "Latein",
                                            "Deutsch",
                                            "Niederländisch",
                                            "Französisch"
                                  ],
                                  "answer": "Latein",
                                  "detail": "Über das niederdeutsche atschess aus dem romanischen adieu (Gott befohlen) im norddeutschen Raum entstanden.",
                                  "path": "Latein (ad Deum) → Französisch (adieu) → Niederdeutsch (atjes) → Tschüs"
                        },
                        {
                                  "word": "Kiez",
                                  "level": "medium",
                                  "options": [
                                            "Slawisch",
                                            "Deutsch",
                                            "Jiddisch",
                                            "Niederländisch"
                                  ],
                                  "answer": "Slawisch",
                                  "detail": "Ursprünglich eine slawische Fischer- oder Handwerkersiedlung nahe einer Burg im nordostdeutschen Raum.",
                                  "path": "Slawisch (kyc) → Mittelniederdeutsch → Kiez"
                        },
                        {
                                  "word": "Trottoir",
                                  "level": "medium",
                                  "options": [
                                            "Französisch",
                                            "Latein",
                                            "Deutsch",
                                            "Niederländisch"
                                  ],
                                  "answer": "Französisch",
                                  "detail": "Im 18. und 19. Jahrhundert als höfisches Modewort aus dem Französischen für den Gehweg übernommen.",
                                  "path": "Französisch (trottoir) → Trottoir"
                        },
                        {
                                  "word": "Schlamassel",
                                  "level": "medium",
                                  "options": [
                                            "Jiddisch",
                                            "Deutsch",
                                            "Hebräisch",
                                            "Slawisch"
                                  ],
                                  "answer": "Jiddisch",
                                  "detail": "Aus dem Jiddischen zusammengesetzt aus deutsch schlimm und hebräisch masal (Glück oder Sternzeichen).",
                                  "path": "Hebräisch/Jiddisch (schlimm + masal) → Schlamassel"
                        },
                        {
                                  "word": "Portemonnaie",
                                  "level": "medium",
                                  "options": [
                                            "Französisch",
                                            "Latein",
                                            "Italienisch",
                                            "Deutsch"
                                  ],
                                  "answer": "Französisch",
                                  "detail": "Aus dem Französischen porter (tragen) und monnaie (Münze/Geld) ins Deutsche entlehnt.",
                                  "path": "Französisch (porter + monnaie) → Portemonnaie"
                        },
                        {
                                  "word": "Quark",
                                  "level": "hard",
                                  "options": [
                                            "Slawisch",
                                            "Deutsch",
                                            "Latein",
                                            "Ungarisch"
                                  ],
                                  "answer": "Slawisch",
                                  "detail": "Im Spätmittelalter aus dem Altslawischen tvarog (Käse/Molkeprodukt) ins Mittelhochdeutsche gelangt.",
                                  "path": "Altslawisch (tvarog) → Mittelhochdeutsch (twarc) → Quark"
                        },
                        {
                                  "word": "Droschke",
                                  "level": "hard",
                                  "options": [
                                            "Russisch",
                                            "Deutsch",
                                            "Polnisch",
                                            "Französisch"
                                  ],
                                  "answer": "Russisch",
                                  "detail": "Aus dem russischen droschki für leichte Kutschen zur Zarenzeit im 19. Jahrhundert übernommen.",
                                  "path": "Russisch (drožki) → Droschke"
                        },
                        {
                                  "word": "Meschugge",
                                  "level": "hard",
                                  "options": [
                                            "Jiddisch",
                                            "Hebräisch",
                                            "Deutsch",
                                            "Arabisch"
                                  ],
                                  "answer": "Jiddisch",
                                  "detail": "Über das Jiddische aus dem hebräischen m'shuga (verrückt oder verwirrt) in die deutsche Umgangssprache eingegangen.",
                                  "path": "Hebräisch (m'shuga) → Jiddisch (meschugge) → Meschugge"
                        },
                        {
                                  "word": "Zoff",
                                  "level": "hard",
                                  "options": [
                                            "Jiddisch",
                                            "Deutsch",
                                            "Slawisch",
                                            "Romani"
                                  ],
                                  "answer": "Jiddisch",
                                  "detail": "Entstammt der rotwelschen und jiddischen Gaunersprache, abgeleitet vom hebräischen sof für Ende oder Streitpunkt.",
                                  "path": "Hebräisch (sof) → Jiddisch → Rotwelsch → Zoff"
                        },
                        {
                                  "word": "Etage",
                                  "level": "hard",
                                  "options": [
                                            "Französisch",
                                            "Latein",
                                            "Italienisch",
                                            "Deutsch"
                                  ],
                                  "answer": "Französisch",
                                  "detail": "Aus dem französischen étage (Geschoss/Stockwerk), abgeleitet vom altfranzösischen estage (Standort).",
                                  "path": "Latein (stare) → Altfranzösisch (estage) → Etage"
                        },
                        {
                                  "word": "Filosofie",
                                  "level": "hard",
                                  "options": [
                                            "Griechisch",
                                            "Latein",
                                            "Deutsch",
                                            "Französisch"
                                  ],
                                  "answer": "Griechisch",
                                  "detail": "Aus dem Altgriechischen philosophia, zusammengesetzt aus philos (Freund/Liebhaber) und sophia (Weisheit).",
                                  "path": "Griechisch (philos + sophia) → Latein → Philosophie"
                        },
                        {
                                  "word": "Apotheke",
                                  "level": "hard",
                                  "options": [
                                            "Griechisch",
                                            "Latein",
                                            "Arabisch",
                                            "Deutsch"
                                  ],
                                  "answer": "Griechisch",
                                  "detail": "Geht auf das griechische apothēkē (Lagerraum oder Vorratskammer) zurück, das im Mittelalter Medizinlager bezeichnete.",
                                  "path": "Griechisch (apothēkē) → Latein (apotheca) → Apotheke"
                        },
                        {
                                  "word": "Gulasch",
                                  "level": "hard",
                                  "options": [
                                            "Ungarisch",
                                            "Tschechisch",
                                            "Deutsch",
                                            "Türkisch"
                                  ],
                                  "answer": "Ungarisch",
                                  "detail": "Im 19. Jahrhundert aus dem ungarischen gulyásleves (Rinderhirtenfleisch) in die österreichische und deutsche Küche eingewandert.",
                                  "path": "Ungarisch (gulyás) → Deutsch Gulasch"
                        },
                        {
                                  "word": "Dolmetscher",
                                  "level": "hard",
                                  "options": [
                                            "Türkisch",
                                            "Slawisch",
                                            "Deutsch",
                                            "Ungarisch"
                                  ],
                                  "answer": "Türkisch",
                                  "detail": "Über das Altpolnische tlumacz aus dem Türkischen tilmaci (Sprachmittler/Übersetzer) im Mittelalter entlehnt.",
                                  "path": "Türkisch (tilmaci) → Altpolnisch → Mittelhochdeutsch (tulmetsche) → Dolmetscher"
                        },
                        {
                                  "word": "Krawatte",
                                  "level": "hard",
                                  "options": [
                                            "Kroatisch",
                                            "Französisch",
                                            "Italienisch",
                                            "Deutsch"
                                  ],
                                  "answer": "Kroatisch",
                                  "detail": "Nach den kroatischen Söldnern (à la croate) benannt, die im 17. Jahrhundert charakteristische Halstücher in Frankreich trugen.",
                                  "path": "Kroatisch (Hrvat) → Französisch (cravate) → Krawatte"
                        }
              ],
              "storychain": [
                        {
                                  "prompt": "An einem regnerischen Dienstag fand Max einen alten Schlüssel in seiner Tasche…",
                                  "level": "starter"
                        },
                        {
                                  "prompt": "Der Zug hielt an einer Station, die auf keiner Karte verzeichnet war…",
                                  "level": "elementary"
                        },
                        {
                                  "prompt": "Ein mysteriöser Brief lag morgens auf dem Küchentisch ohne Absender…",
                                  "level": "intermediate"
                        },
                        {
                                  "prompt": "Als der Strom in der gesamten Stadt ausfiel, bemerkte Sophie ein seltsames Leuchten…",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "prompt": "Auf dem Dachboden des alten Hauses entdeckte Anton ein Tagebuch aus dem Jahr 1888…",
                                  "level": "advanced"
                        }
              ]
    };

    window.gameData = window.gameData || {};
    window.gameData['de'] = data;
})();
