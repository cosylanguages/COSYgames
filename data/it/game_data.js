(function() {
    const data = {
      fluency: [
        { text: "La tua routine del mattino ☕", level: "starter" },
        { text: "Un ricordo d'infanzia 🧸", level: "starter" },
        { text: "La tua stagione preferita e perché 🍂", level: "starter" },
        { text: "Il tuo animale preferito 🐶", level: "starter" },
        { text: "Una giornata di pioggia ideale 🌧️", level: "starter" },
        { text: "Una capacità che vorresti avere 🎸", level: "elementary" },
        { text: "Il miglior pasto che tu abbia mai mangiato 🍜", level: "elementary" },
        { text: "Un luogo che desideri visitare 🗺️", level: "elementary" },
        { text: "Una storia divertente della tua vita 🚴", level: "elementary" },
        { text: "La tua festa o tradizione preferita 🎄", level: "elementary" },
        { text: "La tua destinazione di vacanza ideale 🌴", level: "intermediate" },
        { text: "La persona più interessante che conosci 🙋", level: "intermediate" },
        { text: "Descrivi il tuo fine settimana perfetto ☀️", level: "intermediate" },
        { text: "L'ultima volta che hai provato qualcosa di nuovo 🎯", level: "intermediate" },
        { text: "Un nuovo hobby che vorresti iniziare 🎨", level: "intermediate" },
        { text: "Come la tecnologia cambia la tua vita quotidiana 📱", level: "intermediate" },
        { text: "Cosa faresti con 1 milione di euro? 💰", level: "upper_intermediate" },
        { text: "Un libro o un film che ha cambiato il tuo punto di vista 📚", level: "upper_intermediate" },
        { text: "Se potessi vivere in qualsiasi posto nel mondo… 🌍", level: "upper_intermediate" },
        { text: "Qualcosa di cui sei orgoglioso 🏆", level: "upper_intermediate" },
        { text: "Una lezione di vita inaspettata 💡", level: "upper_intermediate" },
        { text: "Cosa significa la felicità per te? 😊", level: "advanced" },
        { text: "L'influenza della cultura sulle nostre scelte 🏛️", level: "advanced" },
        { text: "L'equilibrio tra ambizione e serenità ⚖️", level: "advanced" }
      ],
      opinions: [
        { text: "I social media fanno più male che bene.", level: "intermediate" },
        { text: "Tutti dovrebbero imparare almeno due lingue.", level: "intermediate" },
        { text: "Il lavoro da casa è migliore del lavoro in ufficio.", level: "intermediate" },
        { text: "I soldi non comprano la felicità.", level: "intermediate" },
        { text: "La tecnologia ci rende meno sociabili.", level: "intermediate" },
        { text: "La settimana lavorativa di 4 giorni aumenta la produttività.", level: "upper_intermediate" },
        { text: "I trasporti pubblici dovrebbero essere gratuiti per tutti.", level: "upper_intermediate" },
        { text: "Il reddito di base universale è necessario per le economie future.", level: "upper_intermediate" },
        { text: "L'IA generativa non potrà mai sostituire la vera creatività artistica umana.", level: "advanced" },
        { text: "La privacy totale è impossibile nell'era digitale attuale.", level: "advanced" }
      ],
      battle: [
        ["Montagna 🏔️", "Spiaggia 🏖️"],
        ["Caffè ☕", "Tè 🍵"],
        ["Mattiniero 🌅", "Nottambulo 🦉"],
        ["Vita in città 🏙️", "Vita in campagna 🌾"],
        ["Lettura 📚", "Guardare film 🎬"],
        ["Estate ☀️", "Inverno ❄️"],
        ["Gatti 🐱", "Cani 🐶"],
        ["Lavoro da casa 🏠", "Lavoro in ufficio 🏢"],
        ["Dolce 🍰", "Salato 🧀"],
        ["Viaggiare da soli ✈️", "Viaggiare con amici 👥"],
        ["Libri cartacei 📖", "E-reader 📱"],
        ["Cucinare a casa 🍳", "Ordinare a domicilio 🍕"]
      ],
      critic: [
        { title: "Squisito ma troppo caro 🍝", type: "Ristorante", review: "Il cibo era eccezionale e gli ingredienti freschissimi, ma le porzioni erano ridotte e il conto è stato un trauma.", question: "Torneresti nonostante il prezzo elevato?" },
        { title: "Trama avvincente, finale deludente 🎬", type: "Film", review: "I primi due terzi del film erano pieni di suspense, ma la conclusione è apparsa affrettata e poco logica.", question: "Quanto influisce il finale sul tuo giudizio complessivo?" },
        { title: "Grafica mozzafiato ma troppi bug 🎮", type: "Videogioco", review: "Visivamente è un capolavoro, ma si blocca spesso e presenta gravi difetti tecnici.", question: "Grafica e atmosfera possono compensare i difetti tecnici?" }
      ],
      action: {
        starter: ["Gatto", "Cane", "Casa", "Auto", "Libro", "Acqua", "Sole", "Luna", "Albero", "Telefono", "Porta", "Sedia", "Letto", "Pane", "Pesce"],
        elementary: ["Cucina", "Giardino", "Treno", "Medico", "Insegnante", "Musica", "Compleanno", "Nuoto", "Vacanze", "Negozio", "Stazione", "Ospedale"],
        intermediate: ["Museo", "Intervista", "Architetto", "Giornalista", "Parlamento", "Orchestra", "Maratona", "Esposizione", "Laboratorio", "Telescopio"],
        upper_intermediate: ["Filantropia", "Ambasciatore", "Ipotesi", "Imprenditore", "Archeologia", "Biodiversità", "Infrastruttura"],
        advanced: ["Paradigma", "Accostamento", "Anacronismo", "Verosimiglianza", "Magnanimo", "Resilienza", "Sfumatura", "Perspicacia"],
        proficiency: ["Ubiquità", "Effimero", "Perspicace", "Equanimità", "Vicissitudine", "Ineffabile"]
      },
      identity: [
        { person: "Un vigile del fuoco", clue: "Indossa un elmetto e spegne gli incendi con l'acqua.", level: "elementary" },
        { person: "Uno chef", clue: "Lavora in cucina e prepara deliziosi piatti.", level: "elementary" },
        { person: "Un bibliotecario", clue: "Gestisce una biblioteca e aiuta le persone a trovare i libri.", level: "elementary" },
        { person: "Un veterinario", clue: "Si prende cura degli animali malati o feriti.", level: "elementary" },
        { person: "Un astronauta", clue: "Viaggia nello spazio oltre la Terra.", level: "intermediate" },
        { person: "Un detective", clue: "Indaga sui misteri e cerca indizi.", level: "intermediate" },
        { person: "Un giornalista", clue: "Informa il pubblico e scrive articoli di giornale.", level: "intermediate" },
        { person: "Un fotografo", clue: "Cattura ricordi e immagini con una fotocamera.", level: "intermediate" },
        { person: "Un architetto", clue: "Progetta case ed edifici prima della loro costruzione.", level: "upper_intermediate" },
        { person: "Un chirurgo", clue: "Esegue operazioni mediche in ospedale.", level: "upper_intermediate" },
        { person: "Un ingegnere software", clue: "Scrive codice per creare applicazioni web e software.", level: "upper_intermediate" },
        { person: "Un diplomatico", clue: "Rappresenta il suo paese nelle relazioni internazionali ufficiali.", level: "advanced" },
        { person: "Un biologo marino", clue: "Studia la flora e la fauna dell'oceano.", level: "advanced" },
        { person: "Un astrofisico", clue: "Studia le proprietà fisiche delle stelle e delle galassie.", level: "advanced" }
      ],
      wordlinker: [
        { words: ["Mela", "Arancia", "Banana", "Carota"], odd: "Carota", link: "Frutta", oddReason: "La carota è una verdura" },
        { words: ["Parigi", "Roma", "Tokyo", "Amazzonia"], odd: "Amazzonia", link: "Capitali", oddReason: "L'Amazzonia è un fiume" },
        { words: ["Pianoforte", "Chitarra", "Violino", "Tromba"], odd: "none", link: "Strumenti musicali", oddReason: "Tutti sono strumenti musicali" },
        { words: ["Medico", "Infermiere", "Chirurgo", "Pilota"], odd: "Pilota", link: "Professioni sanitarie", oddReason: "Il pilota guida aerei, non in ospedale" }
      ],
      etymology: [
        { word: "Ciao", origin: "Veneto (sciavo)", meaning: "Sono tuo schiavo (servitore)", story: "Deriva dal saluto veneziano 'scomputo de sciavo', divenuto un saluto informale universale." },
        { word: "Biscotto", origin: "Latino (bis coctus)", meaning: "Cotto due volte", story: "Si riferisce alla tecnica di cuocere il pane due volte per conservarlo a lungo nei viaggi." },
        { word: "Galassia", origin: "Greco (gala)", meaning: "Via Lattea / Latte", story: "Dalla leggenda greca delle gocce di latte scaturite nel cielo." },
        { word: "Candidato", origin: "Latino (candidus)", meaning: "Bianco brillante", story: "Gli aspiranti alle cariche nell'antica Roma indossavano una toga candida." },
        { word: "Nostalgia", origin: "Greco (nostos + algos)", meaning: "Dolore del ritorno a casa", story: "Coniato nel XVII secolo da un medico svizzero per descrivere il mal di patria dei soldati." }
      ],
      storychain: [
        { prompt: "In un piovoso martedì, Marco trovò una vecchia chiave nella sua tasca…", level: "starter" },
        { prompt: "Il treno si fermò in una stazione che non figurava su nessuna mappa…", level: "elementary" },
        { prompt: "Una lettera misteriosa era appoggiata sul tavolo della cucina senza mittente…", level: "intermediate" },
        { prompt: "Quando la luce si spense in tutta la città, Sofia notò un bagliore insolito…", level: "upper_intermediate" },
        { prompt: "Nella soffitta della vecchia casa, Antonio scoprì un diario risalente al 1888…", level: "advanced" }
      ]
    };

    window.gameData = window.gameData || {};
    window.gameData['it'] = data;
})();
