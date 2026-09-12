(function() {
    const data = {
      "fluency": [
            {
                  "text": "La tua routine del mattino ☕",
                  "level": "starter"
            },
            {
                  "text": "Un ricordo d'infanzia 🧸",
                  "level": "starter"
            },
            {
                  "text": "La tua stagione preferita e perché 🍂",
                  "level": "starter"
            },
            {
                  "text": "Il tuo animale preferito 🐶",
                  "level": "starter"
            },
            {
                  "text": "Una giornata di pioggia ideale 🌧️",
                  "level": "starter"
            },
            {
                  "text": "Una capacità che vorresti avere 🎸",
                  "level": "elementary"
            },
            {
                  "text": "Il miglior pasto che tu abbia mai mangiato 🍜",
                  "level": "elementary"
            },
            {
                  "text": "Un luogo che desideri visitare 🗺️",
                  "level": "elementary"
            },
            {
                  "text": "Una storia divertente della tua vita 🚴",
                  "level": "elementary"
            },
            {
                  "text": "La tua festa o tradizione preferita 🎄",
                  "level": "elementary"
            },
            {
                  "text": "La tua destinazione di vacanza ideale 🌴",
                  "level": "intermediate"
            },
            {
                  "text": "La persona più interessante che conosci 🙋",
                  "level": "intermediate"
            },
            {
                  "text": "Descrivi il tuo fine settimana perfetto ☀️",
                  "level": "intermediate"
            },
            {
                  "text": "L'ultima volta che hai provato qualcosa di nuovo 🎯",
                  "level": "intermediate"
            },
            {
                  "text": "Un nuovo hobby che vorresti iniziare 🎨",
                  "level": "intermediate"
            },
            {
                  "text": "Come la tecnologia cambia la tua vita quotidiana 📱",
                  "level": "intermediate"
            },
            {
                  "text": "Cosa faresti con 1 milione di euro? 💰",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Un libro o un film che ha cambiato il tuo punto di vista 📚",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Se potessi vivere in qualsiasi posto nel mondo… 🌍",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Qualcosa di cui sei orgoglioso 🏆",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Una lezione di vita inaspettata 💡",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Cosa significa la felicità per te? 😊",
                  "level": "advanced"
            },
            {
                  "text": "L'influenza della cultura sulle nostre scelte 🏛️",
                  "level": "advanced"
            },
            {
                  "text": "L'equilibrio tra ambizione e serenità ⚖️",
                  "level": "advanced"
            }
      ],
      "opinions": [
            {
                  "text": "I social media fanno più male che bene.",
                  "level": "intermediate"
            },
            {
                  "text": "Tutti dovrebbero imparare almeno due lingue.",
                  "level": "intermediate"
            },
            {
                  "text": "Il lavoro da casa è migliore del lavoro in ufficio.",
                  "level": "intermediate"
            },
            {
                  "text": "I soldi non comprano la felicità.",
                  "level": "intermediate"
            },
            {
                  "text": "La tecnologia ci rende meno sociabili.",
                  "level": "intermediate"
            },
            {
                  "text": "La settimana lavorativa di 4 giorni aumenta la produttività.",
                  "level": "upper_intermediate"
            },
            {
                  "text": "I trasporti pubblici dovrebbero essere gratuiti per tutti.",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Il reddito di base universale è necessario per le economie future.",
                  "level": "upper_intermediate"
            },
            {
                  "text": "L'IA generativa non potrà mai sostituire la vera creatività artistica umana.",
                  "level": "advanced"
            },
            {
                  "text": "La privacy totale è impossibile nell'era digitale attuale.",
                  "level": "advanced"
            }
      ],
      "battle": [
            [
                  "Montagna 🏔️",
                  "Spiaggia 🏖️"
            ],
            [
                  "Caffè ☕",
                  "Tè 🍵"
            ],
            [
                  "Mattiniero 🌅",
                  "Nottambulo 🦉"
            ],
            [
                  "Vita in città 🏙️",
                  "Vita in campagna 🌾"
            ],
            [
                  "Lettura 📚",
                  "Guardare film 🎬"
            ],
            [
                  "Estate ☀️",
                  "Inverno ❄️"
            ],
            [
                  "Gatti 🐱",
                  "Cani 🐶"
            ],
            [
                  "Lavoro da casa 🏠",
                  "Lavoro in ufficio 🏢"
            ],
            [
                  "Dolce 🍰",
                  "Salato 🧀"
            ],
            [
                  "Viaggiare da soli ✈️",
                  "Viaggiare con amici 👥"
            ],
            [
                  "Libri cartacei 📖",
                  "E-reader 📱"
            ],
            [
                  "Cucinare a casa 🍳",
                  "Ordinare a domicilio 🍕"
            ]
      ],
      "critic": [
            {
                  "title": "Squisito ma troppo caro 🍝",
                  "type": "Ristorante",
                  "review": "Il cibo era eccezionale e gli ingredienti freschissimi, ma le porzioni erano ridotte e il conto è stato un trauma.",
                  "question": "Torneresti nonostante il prezzo elevato?"
            },
            {
                  "title": "Trama avvincente, finale deludente 🎬",
                  "type": "Film",
                  "review": "I primi due terzi del film erano pieni di suspense, ma la conclusione è apparsa affrettata e poco logica.",
                  "question": "Quanto influisce il finale sul tuo giudizio complessivo?"
            },
            {
                  "title": "Grafica mozzafiato ma troppi bug 🎮",
                  "type": "Videogioco",
                  "review": "Visivamente è un capolavoro, ma si blocca spesso e presenta gravi difetti tecnici.",
                  "question": "Grafica e atmosfera possono compensare i difetti tecnici?"
            }
      ],
      "action": {
            "starter": [
                  "Gatto",
                  "Cane",
                  "Casa",
                  "Auto",
                  "Libro",
                  "Acqua",
                  "Sole",
                  "Luna",
                  "Albero",
                  "Telefono",
                  "Porta",
                  "Sedia",
                  "Letto",
                  "Pane",
                  "Pesce"
            ],
            "elementary": [
                  "Cucina",
                  "Giardino",
                  "Treno",
                  "Medico",
                  "Insegnante",
                  "Musica",
                  "Compleanno",
                  "Nuoto",
                  "Vacanze",
                  "Negozio",
                  "Stazione",
                  "Ospedale"
            ],
            "intermediate": [
                  "Museo",
                  "Intervista",
                  "Architetto",
                  "Giornalista",
                  "Parlamento",
                  "Orchestra",
                  "Maratona",
                  "Esposizione",
                  "Laboratorio",
                  "Telescopio"
            ],
            "upper_intermediate": [
                  "Filantropia",
                  "Ambasciatore",
                  "Ipotesi",
                  "Imprenditore",
                  "Archeologia",
                  "Biodiversità",
                  "Infrastruttura"
            ],
            "advanced": [
                  "Paradigma",
                  "Accostamento",
                  "Anacronismo",
                  "Verosimiglianza",
                  "Magnanimo",
                  "Resilienza",
                  "Sfumatura",
                  "Perspicacia"
            ],
            "proficiency": [
                  "Ubiquità",
                  "Effimero",
                  "Perspicace",
                  "Equanimità",
                  "Vicissitudine",
                  "Ineffabile"
            ]
      },
      "identity": [
            {
                  "person": "Un vigile del fuoco",
                  "clue": "Indossa un elmetto e spegne gli incendi con l'acqua.",
                  "level": "elementary"
            },
            {
                  "person": "Uno chef",
                  "clue": "Lavora in cucina e prepara deliziosi piatti.",
                  "level": "elementary"
            },
            {
                  "person": "Un bibliotecario",
                  "clue": "Gestisce una biblioteca e aiuta le persone a trovare i libri.",
                  "level": "elementary"
            },
            {
                  "person": "Un veterinario",
                  "clue": "Si prende cura degli animali malati o feriti.",
                  "level": "elementary"
            },
            {
                  "person": "Un astronauta",
                  "clue": "Viaggia nello spazio oltre la Terra.",
                  "level": "intermediate"
            },
            {
                  "person": "Un detective",
                  "clue": "Indaga sui misteri e cerca indizi.",
                  "level": "intermediate"
            },
            {
                  "person": "Un giornalista",
                  "clue": "Informa il pubblico e scrive articoli di giornale.",
                  "level": "intermediate"
            },
            {
                  "person": "Un fotografo",
                  "clue": "Cattura ricordi e immagini con una fotocamera.",
                  "level": "intermediate"
            },
            {
                  "person": "Un architetto",
                  "clue": "Progetta case ed edifici prima della loro costruzione.",
                  "level": "upper_intermediate"
            },
            {
                  "person": "Un chirurgo",
                  "clue": "Esegue operazioni mediche in ospedale.",
                  "level": "upper_intermediate"
            },
            {
                  "person": "Un ingegnere software",
                  "clue": "Scrive codice per creare applicazioni web e software.",
                  "level": "upper_intermediate"
            },
            {
                  "person": "Un diplomatico",
                  "clue": "Rappresenta il suo paese nelle relazioni internazionali ufficiali.",
                  "level": "advanced"
            },
            {
                  "person": "Un biologo marino",
                  "clue": "Studia la flora e la fauna dell'oceano.",
                  "level": "advanced"
            },
            {
                  "person": "Un astrofisico",
                  "clue": "Studia le proprietà fisiche delle stelle e delle galassie.",
                  "level": "advanced"
            }
      ],
      "wordlinker": [
            {
                  "words": [
                        "Mela",
                        "Arancia",
                        "Banana",
                        "Carota"
                  ],
                  "odd": "Carota",
                  "link": "Frutta",
                  "oddReason": "La carota è una verdura"
            },
            {
                  "words": [
                        "Parigi",
                        "Roma",
                        "Tokyo",
                        "Amazzonia"
                  ],
                  "odd": "Amazzonia",
                  "link": "Capitali",
                  "oddReason": "L'Amazzonia è un fiume"
            },
            {
                  "words": [
                        "Pianoforte",
                        "Chitarra",
                        "Violino",
                        "Tromba"
                  ],
                  "odd": "none",
                  "link": "Strumenti musicali",
                  "oddReason": "Tutti sono strumenti musicali"
            },
            {
                  "words": [
                        "Medico",
                        "Infermiere",
                        "Chirurgo",
                        "Pilota"
                  ],
                  "odd": "Pilota",
                  "link": "Professioni sanitarie",
                  "oddReason": "Il pilota guida aerei, non in ospedale"
            }
      ],
      "etymology": [
            {
                  "word": "Ciao",
                  "level": "easy",
                  "options": [
                        "Veneto",
                        "Latino",
                        "Greco",
                        "Arabo"
                  ],
                  "answer": "Veneto",
                  "detail": "Deriva dal saluto veneziano scomputo de sciavo (sono tuo schiavo), divenuto un saluto informale universale.",
                  "path": "Veneto (sciavo) → Ciao"
            },
            {
                  "word": "Biscotto",
                  "level": "easy",
                  "options": [
                        "Latino",
                        "Greco",
                        "Arabo",
                        "Francese"
                  ],
                  "answer": "Latino",
                  "detail": "Si riferisce alla tecnica di cuocere il pane due volte per conservarlo a lungo durante i viaggi di navigazione.",
                  "path": "Latino (bis coctus) → Biscotto"
            },
            {
                  "word": "Galassia",
                  "level": "easy",
                  "options": [
                        "Greco",
                        "Latino",
                        "Arabo",
                        "Francese"
                  ],
                  "answer": "Greco",
                  "detail": "Dalla leggenda greca delle gocce di latte scaturite dal seno della dea Era nel cielo.",
                  "path": "Greco (gala) → Galassia"
            },
            {
                  "word": "Candidato",
                  "level": "easy",
                  "options": [
                        "Latino",
                        "Greco",
                        "Arabo",
                        "Francese"
                  ],
                  "answer": "Latino",
                  "detail": "Gli aspiranti alle cariche nell'antica Roma indossavano una toga candida perfettamente bianca.",
                  "path": "Latino (candidus) → Candidato"
            },
            {
                  "word": "Nostalgia",
                  "level": "easy",
                  "options": [
                        "Greco",
                        "Latino",
                        "Arabo",
                        "Francese"
                  ],
                  "answer": "Greco",
                  "detail": "Coniato nel XVII secolo da un medico svizzero unendo le radici greche nostos (ritorno) e algos (dolore).",
                  "path": "Greco (nostos + algos) → Nostalgia"
            },
            {
                  "word": "Arancia",
                  "level": "easy",
                  "options": [
                        "Arabo",
                        "Persiano",
                        "Sancrito",
                        "Latino"
                  ],
                  "answer": "Arabo",
                  "detail": "Giunta in Sicilia dall'arabo nāranj, a sua volta derivato dal persiano e dal sanscrito nāraṅga.",
                  "path": "Sancrito (nāraṅga) → Persiano → Arabo (nāranj) → Italiano Arancia"
            },
            {
                  "word": "Zucchero",
                  "level": "easy",
                  "options": [
                        "Arabo",
                        "Sancrito",
                        "Latino",
                        "Greco"
                  ],
                  "answer": "Arabo",
                  "detail": "Introdotto attraverso il commercio arabo siciliano e veneto dal vocabile sukkar.",
                  "path": "Sancrito (śarkarā) → Arabo (as-sukkar) → Italiano Zucchero"
            },
            {
                  "word": "Banca",
                  "level": "easy",
                  "options": [
                        "Germanico",
                        "Latino",
                        "Francese",
                        "Greco"
                  ],
                  "answer": "Germanico",
                  "detail": "Parola italiana diffusa nel mondo: i banchieri fiorentini e veneziani operavano su banchi di legno nei mercati.",
                  "path": "Germanico (bank) → Italiano Banca → Diffusa in tutto il mondo"
            },
            {
                  "word": "Opera",
                  "level": "easy",
                  "options": [
                        "Latino",
                        "Greco",
                        "Francese",
                        "Spagnolo"
                  ],
                  "answer": "Latino",
                  "detail": "Dal latino opera (lavoro/creazione); nata a Firenze nel Rinascimento e adottata universalmente per il teatro musicale.",
                  "path": "Latino (opera) → Italiano Opera → Termine musicale mondiale"
            },
            {
                  "word": "Piano",
                  "level": "easy",
                  "options": [
                        "Italiano",
                        "Latino",
                        "Francese",
                        "Tedesco"
                  ],
                  "answer": "Italiano",
                  "detail": "Abbreviazione di pianoforte, strumento inventato a Padova da Bartolomeo Cristofori per suonare forte e piano.",
                  "path": "Italiano (pianoforte) → Diffuso in tutte le lingue"
            },
            {
                  "word": "Magazzino",
                  "level": "medium",
                  "options": [
                        "Arabo",
                        "Latino",
                        "Francese",
                        "Spagnolo"
                  ],
                  "answer": "Arabo",
                  "detail": "Deriva dall'arabo makhāzin (depositi di merci), introdotto dai mercanti marittimi italiani.",
                  "path": "Arabo (makhāzin) → Italiano Magazzino"
            },
            {
                  "word": "Carciofo",
                  "level": "medium",
                  "options": [
                        "Arabo",
                        "Latino",
                        "Spagnolo",
                        "Greco"
                  ],
                  "answer": "Arabo",
                  "detail": "Dall'arabo al-kharshūf, ortaggio coltivato nell'Andalusia e nella Sicilia araba medioevale.",
                  "path": "Arabo (al-kharshūf) → Italiano Carciofo"
            },
            {
                  "word": "Tariffa",
                  "level": "medium",
                  "options": [
                        "Arabo",
                        "Latino",
                        "Spagnolo",
                        "Francese"
                  ],
                  "answer": "Arabo",
                  "detail": "Dall'arabo taʿrīf (notificazione o prezzo fissato), diffuso nei porti commerciali della penisola.",
                  "path": "Arabo (taʿrīf) → Italiano Tariffa"
            },
            {
                  "word": "Guerra",
                  "level": "medium",
                  "options": [
                        "Germanico",
                        "Latino",
                        "Greco",
                        "Arabo"
                  ],
                  "answer": "Germanico",
                  "detail": "Sostituì il latino bellum durante le invasioni dei Longobardi e dei Goti con il termine werra (rissa/discordia).",
                  "path": "Germanico/Lombardo (werra) → Italiano Guerra"
            },
            {
                  "word": "Giardino",
                  "level": "medium",
                  "options": [
                        "Francese",
                        "Germanico",
                        "Latino",
                        "Arabo"
                  ],
                  "answer": "Francese",
                  "detail": "Dall'antico francese jardin, a sua volta derivato dalla radice germanica gardo (recinto verde).",
                  "path": "Germanico (gardo) → Francese (jardin) → Italiano Giardino"
            },
            {
                  "word": "Fiasco",
                  "level": "medium",
                  "options": [
                        "Germanico",
                        "Latino",
                        "Greco",
                        "Arabo"
                  ],
                  "answer": "Germanico",
                  "detail": "Deriva dal germanico flaska (fiasca di vetro); l'espressione far fiasco nacque nel teatro comico fiorentino.",
                  "path": "Germanico (flaska) → Italiano Fiasco"
            },
            {
                  "word": "Guardia",
                  "level": "medium",
                  "options": [
                        "Germanico",
                        "Latino",
                        "Francese",
                        "Greco"
                  ],
                  "answer": "Germanico",
                  "detail": "Introdotto dai Longobardi con il verbo wardan (sorvegliare o prestare attenzione).",
                  "path": "Lombardo (wardan) → Italiano Guardia"
            },
            {
                  "word": "Ricco",
                  "level": "medium",
                  "options": [
                        "Germanico",
                        "Latino",
                        "Greco",
                        "Arabo"
                  ],
                  "answer": "Germanico",
                  "detail": "Dalla radice germanica reiks (potente o sovrano), entrata nell'uso durante il regno ostrogoto.",
                  "path": "Gotico (reiks) → Italiano Ricco"
            },
            {
                  "word": "Fascismo",
                  "level": "medium",
                  "options": [
                        "Latino",
                        "Greco",
                        "Francese",
                        "Tedesco"
                  ],
                  "answer": "Latino",
                  "detail": "Parola italiana del XX secolo derivata dal latino fasces (fascio di verghe portato dai littori romani).",
                  "path": "Latino (fasces) → Italiano Fascismo"
            },
            {
                  "word": "Ghetto",
                  "level": "medium",
                  "options": [
                        "Veneziano",
                        "Ebraico",
                        "Tedesco",
                        "Latino"
                  ],
                  "answer": "Veneziano",
                  "detail": "Origine dal campo del getto (fonderia) a Venezia dove nel 1516 fu stabilita la residenza coatta ebraica.",
                  "path": "Veneziano (geto/fonderia) → Ghetto → Diffuso nel mondo"
            },
            {
                  "word": "Tarantella",
                  "level": "hard",
                  "options": [
                        "Italiano",
                        "Greco",
                        "Arabo",
                        "Spagnolo"
                  ],
                  "answer": "Italiano",
                  "detail": "Dalla città pugliese di Taranto; danza frenetica popolare legata al mito del morso della tarantola.",
                  "path": "Italiano (Taranto) → Tarantella"
            },
            {
                  "word": "Facchino",
                  "level": "hard",
                  "options": [
                        "Arabo",
                        "Latino",
                        "Germanico",
                        "Spagnolo"
                  ],
                  "answer": "Arabo",
                  "detail": "Dall'arabo faqīh (giurisperito); in epoca medievale designava i doganieri e successivamente i portatori di pesi.",
                  "path": "Arabo (faqīh) → Italiano Facchino"
            },
            {
                  "word": "Algebrica",
                  "level": "hard",
                  "options": [
                        "Arabo",
                        "Greco",
                        "Latino",
                        "Persiano"
                  ],
                  "answer": "Arabo",
                  "detail": "Dall'arabo al-jabr (ricomposizione delle parti), diffuso in Europa dal matematico toscano Leonardo Fibonacci.",
                  "path": "Arabo (al-jabr) → Latino medievale → Italiano Algebra"
            },
            {
                  "word": "Taffetà",
                  "level": "hard",
                  "options": [
                        "Persiano",
                        "Arabo",
                        "Cinese",
                        "Turco"
                  ],
                  "answer": "Persiano",
                  "detail": "Giunto a Venezia dal persiano tāftah (tessuto lucido e intessuto) lungo la via della seta.",
                  "path": "Persiano (tāftah) → Italiano Taffetà"
            },
            {
                  "word": "Carnevale",
                  "level": "hard",
                  "options": [
                        "Latino",
                        "Greco",
                        "Arabo",
                        "Francese"
                  ],
                  "answer": "Latino",
                  "detail": "Dal latino medievale carne levare (togliere la carne), riferendosi all'ultimo banchetto prima del martedì grasso.",
                  "path": "Latino (carne + levare) → Italiano Carnevale"
            },
            {
                  "word": "Sassofono",
                  "level": "hard",
                  "options": [
                        "Belga/Francese",
                        "Italiano",
                        "Tedesco",
                        "Inglese"
                  ],
                  "answer": "Belga/Francese",
                  "detail": "Inventato nel 1840 dall'artigiano belga Adolphe Sax e adottato nella lingua italiana musicale.",
                  "path": "Nome proprio (Adolphe Sax) → Sassofono"
            },
            {
                  "word": "Fresco",
                  "level": "hard",
                  "options": [
                        "Germanico",
                        "Latino",
                        "Greco",
                        "Arabo"
                  ],
                  "answer": "Germanico",
                  "detail": "Entrato dal germanico frisk (fresco/nuovo), poi applicato alla tecnica pittorica dell'affresco su intonaco fresco.",
                  "path": "Germanico (frisk) → Italiano Affresco"
            },
            {
                  "word": "Bistrot",
                  "level": "hard",
                  "options": [
                        "Russico",
                        "Francese",
                        "Latino",
                        "Tedesco"
                  ],
                  "answer": "Russico",
                  "detail": "Parola russa bystro (rapidamente) gridata dai soldati russi a Parigi nel 1814, poi rientrata nell'uso europeo.",
                  "path": "Russico (bystro) → Francese (bistro) → Italiano Bistrot"
            },
            {
                  "word": "Lancia",
                  "level": "hard",
                  "options": [
                        "Celtico",
                        "Latino",
                        "Germanico",
                        "Greco"
                  ],
                  "answer": "Celtico",
                  "detail": "L'arma da urto fu denominata nel latino repubblicano lancia a partire da un prestito gallico o celtiberico.",
                  "path": "Celtico (lancea) → Latino → Italiano Lancia"
            },
            {
                  "word": "Cravatta",
                  "level": "hard",
                  "options": [
                        "Croato",
                        "Francese",
                        "Tedesco",
                        "Latino"
                  ],
                  "answer": "Croato",
                  "detail": "Dalla sciarpina usata dai soldati croati (à la croate) al servizio della Francia nel XVII secolo.",
                  "path": "Croato (Hrvat) → Francese (cravate) → Italiano Cravatta"
            }
      ],
      "storychain": [
            {
                  "prompt": "In un piovoso martedì, Marco trovò una vecchia chiave nella sua tasca…",
                  "level": "starter"
            },
            {
                  "prompt": "Il treno si fermò in una stazione che non figurava su nessuna mappa…",
                  "level": "elementary"
            },
            {
                  "prompt": "Una lettera misteriosa era appoggiata sul tavolo della cucina senza mittente…",
                  "level": "intermediate"
            },
            {
                  "prompt": "Quando la luce si spense in tutta la città, Sofia notò un bagliore insolito…",
                  "level": "upper_intermediate"
            },
            {
                  "prompt": "Nella soffitta della vecchia casa, Antonio scoprì un diario risalente al 1888…",
                  "level": "advanced"
            }
      ]
};

    window.gameData = window.gameData || {};
    window.gameData['it'] = data;
})();