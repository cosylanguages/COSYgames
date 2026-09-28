(function() {
    const data = {
              "fluency": [
                        {
                                  "text": "La tua routine del mattino ☕",
                                  "level": "starter"
                        },
                        {
                                  "text": "Un ricordo d'infanzia 🧸",
                                  "level": "starter",
                                  "hints": [
                                            "Quanti anni avevi?",
                                            "Dove eri?",
                                            "Con chi eri?",
                                            "Cosa è successo?",
                                            "Perché lo ricordi?"
                                  ]
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
                        },
                        {
                                  "text": "Una vacanza che ricordi",
                                  "level": "elementary",
                                  "hints": [
                                            "Dove sei andato?",
                                            "Con chi sei andato?",
                                            "Cosa hai fatto lì?",
                                            "Com'era il tempo?",
                                            "Qual è stato il momento migliore?"
                                  ]
                        },
                        {
                                  "text": "Il tuo ristorante o bar preferito",
                                  "level": "elementary",
                                  "hints": [
                                            "Dove si trova?",
                                            "Che cibo servono?",
                                            "Perché ti piace?",
                                            "Con chi ci vai?",
                                            "Quando è stata l'ultima volta che ci sei andato?"
                                  ]
                        },
                        {
                                  "text": "Come vai al lavoro o a scuola",
                                  "level": "elementary",
                                  "hints": [
                                            "Come viaggi — autobus, macchina, bici?",
                                            "Quanto tempo ci vuole?",
                                            "Ti piace il viaggio?",
                                            "È costoso?",
                                            "Cosa fai durante il tragitto?"
                                  ]
                        },
                        {
                                  "text": "Cosa fai per rilassarti",
                                  "level": "elementary",
                                  "hints": [
                                            "Cosa ti aiuta a rilassarti?",
                                            "Preferisci stare da solo o con altre persone?",
                                            "Quanto spesso ti rilassi davvero?",
                                            "Hai un posto preferito per rilassarti?",
                                            "È facile rilassarsi o lo trovi difficile?"
                                  ]
                        },
                        {
                                  "text": "Un film che hai guardato di recente",
                                  "level": "elementary",
                                  "hints": [
                                            "Come si chiamava il film?",
                                            "Di cosa parlava?",
                                            "Ti è piaciuto?",
                                            "Chi c'era nel cast?",
                                            "Lo consiglieresti?"
                                  ]
                        },
                        {
                                  "text": "Il tuo fine settimana ideale",
                                  "level": "elementary",
                                  "hints": [
                                            "Cosa faresti il venerdì sera?",
                                            "Usciresti o resteresti a casa?",
                                            "Viaggeresti da qualche parte?",
                                            "Con chi passeresti il tempo?",
                                            "Cosa mangeresti?"
                                  ]
                        },
                        {
                                  "text": "Una persona che ammiri",
                                  "level": "elementary",
                                  "hints": [
                                            "Chi è questa persona?",
                                            "Cosa fa?",
                                            "Perché la ammiri?",
                                            "L'hai mai incontrata?",
                                            "Cosa puoi imparare da lei?"
                                  ]
                        },
                        {
                                  "text": "La meta delle tue vacanze da sogno",
                                  "level": "elementary",
                                  "hints": [
                                            "Dove andresti?",
                                            "Perché questo posto?",
                                            "Con chi andresti?",
                                            "Cosa faresti lì?",
                                            "Quanto tempo rimarresti?"
                                  ]
                        },
                        {
                                  "text": "Il tuo rapporto con il telefono",
                                  "level": "elementary",
                                  "hints": [
                                            "Quante ore al giorno usi il telefono?",
                                            "Per cosa lo usi di più?",
                                            "Potresti vivere senza per una settimana?",
                                            "Ti aiuta o ti distrae?",
                                            "Lo controlli come prima cosa al mattino?"
                                  ]
                        },
                        {
                                  "text": "Qualcosa di divertente che ti è successo",
                                  "level": "elementary",
                                  "hints": [
                                            "Quando è successo?",
                                            "Dove eri?",
                                            "Con chi eri?",
                                            "Cosa è successo esattamente?",
                                            "Ci ridi ancora adesso?"
                                  ]
                        },
                        {
                                  "text": "I tuoi hobby",
                                  "level": "elementary",
                                  "hints": [
                                            "Cosa fai nel tuo tempo libero?",
                                            "Quando hai iniziato questo hobby?",
                                            "Lo fai da solo o con altri?",
                                            "È costoso?",
                                            "Cosa ami di questo hobby?"
                                  ]
                        },
                        {
                                  "text": "Il tempo dove vivi",
                                  "level": "elementary",
                                  "hints": [
                                            "Com'è di solito il tempo?",
                                            "Qual è il tuo tipo di tempo preferito?",
                                            "Il tempo influenza il tuo umore?",
                                            "Qual è il tempo peggiore che ricordi?",
                                            "Cosa fai nei giorni di pioggia?"
                                  ]
                        },
                        {
                                  "text": "Un compleanno che ricordi",
                                  "level": "elementary",
                                  "hints": [
                                            "Di chi era il compleanno?",
                                            "Dove si è svolta la festa?",
                                            "Cosa avete fatto?",
                                            "C'è stata una sorpresa?",
                                            "Cosa l'ha reso speciale?"
                                  ]
                        },
                        {
                                  "text": "Cose che ami di dove vivi",
                                  "level": "elementary",
                                  "hints": [
                                            "Qual è la cosa che preferisci della tua città?",
                                            "È un buon posto per le famiglie?",
                                            "Cosa c'è da fare?",
                                            "Cosa cambieresti?",
                                            "La consiglieresti a un amico?"
                                  ]
                        },
                        {
                                  "text": "Una domenica tipica",
                                  "level": "elementary",
                                  "hints": [
                                            "A che ora ti svegli la domenica?",
                                            "Hai una routine?",
                                            "Cucini un pasto abbondante?",
                                            "Ti riposi o resti impegnato?",
                                            "La domenica è il tuo giorno preferito?"
                                  ]
                        },
                        {
                                  "text": "Cibo del tuo paese",
                                  "level": "elementary",
                                  "hints": [
                                            "Qual è un piatto tradizionale?",
                                            "Lo cucini a casa?",
                                            "Quando lo mangia la gente?",
                                            "È difficile da preparare?",
                                            "Lo consiglieresti a uno straniero?"
                                  ]
                        },
                        {
                                  "text": "Qualcosa che hai comprato di recente",
                                  "level": "elementary",
                                  "hints": [
                                            "Cosa hai comprato?",
                                            "Dove l'hai comprato?",
                                            "Era costoso?",
                                            "Ne avevi bisogno o lo volevi e basta?",
                                            "Sei felice dell'acquisto?"
                                  ]
                        },
                        {
                                  "text": "La tua app preferita",
                                  "level": "elementary",
                                  "hints": [
                                            "Quale app usi di più?",
                                            "Per cosa la usi?",
                                            "Quando hai iniziato a usarla?",
                                            "La consiglieresti?",
                                            "Potresti vivere senza?"
                                  ]
                        },
                        {
                                  "text": "Cosa hai mangiato ieri",
                                  "level": "elementary",
                                  "hints": [
                                            "Cosa hai mangiato a colazione?",
                                            "Cosa hai mangiato a pranzo?",
                                            "Hai cucinato o mangiato fuori?",
                                            "È stata una giornata tipica dal punto di vista alimentare?",
                                            "Qual è stata la cosa migliore che hai mangiato?"
                                  ]
                        },
                        {
                                  "text": "Una persona che mi ha ispirato",
                                  "level": "intermediate",
                                  "hints": [
                                            "Chi è questa persona?",
                                            "Cosa ha fatto?",
                                            "Come ha cambiato la tua prospettiva?",
                                            "Segui ancora il suo lavoro o la sua vita?",
                                            "Ti piacerebbe incontrarla?"
                                  ]
                        },
                        {
                                  "text": "L'importanza della consapevolezza sulla salute mentale",
                                  "level": "intermediate",
                                  "hints": [
                                            "Perché è importante parlare di salute mentale?",
                                            "È diventata più accettata recentemente?",
                                            "Come possiamo sostenere gli altri?",
                                            "Quali sono alcuni malintesi comuni?",
                                            "Come ti prendi cura della tua salute mentale?"
                                  ]
                        },
                        {
                                  "text": "Un luogo che ti fa sentire a casa",
                                  "level": "intermediate",
                                  "hints": [
                                            "È una città, una casa, un paese?",
                                            "Quando l'hai provato per la prima volta?",
                                            "Cosa lo fa sentire come casa?",
                                            "La casa è un luogo o una sensazione?",
                                            "Pensi di poter avere più di una casa?"
                                  ]
                        },
                        {
                                  "text": "Qualcosa su cui hai cambiato idea",
                                  "level": "intermediate",
                                  "hints": [
                                            "Cosa pensavi prima?",
                                            "Cosa è cambiato?",
                                            "Quando è successo?",
                                            "È stato un cambiamento graduale o improvviso?",
                                            "Come ti senti al riguardo ora?"
                                  ]
                        },
                        {
                                  "text": "Cosa rende un amico un buon amico",
                                  "level": "intermediate",
                                  "hints": [
                                            "Quali qualità contano di più in un'amicizia?",
                                            "I tuoi amici più cari sono simili a te o diversi?",
                                            "Le amicizie possono cambiare invecchiando?",
                                            "Cosa non tollereresti in un amico?",
                                            "È facile farsi veri amici da adulti?"
                                  ]
                        },
                        {
                                  "text": "Qualcosa che avresti voluto imparare prima",
                                  "level": "intermediate",
                                  "hints": [
                                            "Di cosa si tratta?",
                                            "Perché non l'hai imparato prima?",
                                            "Come sarebbe diversa la tua vita?",
                                            "È troppo tardi per impararlo ora?",
                                            "Lo insegneresti a qualcuno più giovane?"
                                  ]
                        },
                        {
                                  "text": "Una abilità che stai cercando di migliorare",
                                  "level": "intermediate",
                                  "hints": [
                                            "Qual è l'abilità?",
                                            "Perché hai deciso di lavorarci su?",
                                            "Come ti eserciti?",
                                            "Qual è la parte più difficile?",
                                            "Quanti progressi hai fatto?"
                                  ]
                        },
                        {
                                  "text": "Cosa ti manca dell'essere bambino",
                                  "level": "intermediate",
                                  "hints": [
                                            "Cosa ti manca sinceramente?",
                                            "Pensi che l'infanzia fosse più facile?",
                                            "Cosa preoccupava i bambini che gli adulti non considerano?",
                                            "Cosa facevano gli adulti che allora non capivi ma ora sì?",
                                            "Torneresti indietro se potessi?"
                                  ]
                        },
                        {
                                  "text": "La tua giornata lavorativa ideale",
                                  "level": "intermediate",
                                  "hints": [
                                            "A che ora inizieresti e finiresti?",
                                            "Dove lavoreresti?",
                                            "Con chi lavoreresti?",
                                            "Cosa faresti?",
                                            "Quanto è diversa dalla tua reale giornata lavorativa?"
                                  ]
                        },
                        {
                                  "text": "Come è cambiata la tua vita negli ultimi anni",
                                  "level": "intermediate",
                                  "hints": [
                                            "Qual è il cambiamento più grande?",
                                            "È stata una tua scelta?",
                                            "È stato in meglio?",
                                            "Cosa è rimasto uguale?",
                                            "Cosa pensi cambierà in seguito?"
                                  ]
                        },
                        {
                                  "text": "Cosa ti fa sentire più vivo",
                                  "level": "intermediate",
                                  "hints": [
                                            "C'è un momento o un'attività che ti dà sempre energia?",
                                            "Coinvolge altre persone o la solitudine?",
                                            "Quanto spesso ti senti così?",
                                            "Questo è cambiato nel tempo?",
                                            "Cosa ti impedisce di farlo più spesso?"
                                  ]
                        },
                        {
                                  "text": "La tua più grande distrazione",
                                  "level": "intermediate",
                                  "hints": [
                                            "Cosa attira più facilmente la tua attenzione?",
                                            "Ti costa tempo o energia?",
                                            "Hai provato a cambiare questo aspetto?",
                                            "È del tutto negativo o c'è qualcosa di buono?",
                                            "Cosa faresti con il tempo risparmiato se eliminassi questa distrazione?"
                                  ]
                        },
                        {
                                  "text": "Un libro, un film o una serie che ti è rimasta impressa",
                                  "level": "intermediate",
                                  "hints": [
                                            "Come si chiamava?",
                                            "Di cosa parlava?",
                                            "Perché ti è rimasta impressa?",
                                            "Ha cambiato il tuo modo di pensare a qualcosa?",
                                            "Lo consiglieresti e a chi?"
                                  ]
                        },
                        {
                                  "text": "Cosa significa \"casa\" per te",
                                  "level": "intermediate",
                                  "hints": [
                                            "La casa è una persona, un luogo o una sensazione?",
                                            "Dove ti senti più a casa?",
                                            "La tua idea di casa è cambiata crescendo?",
                                            "Puoi sentirti a casa in un posto nuovo?",
                                            "La casa è un posto dove torni o un posto che porti con te?"
                                  ]
                        },
                        {
                                  "text": "Qualcosa che fai diversamente dalla maggior parte delle persone",
                                  "level": "intermediate",
                                  "hints": [
                                            "Di cosa si tratta?",
                                            "Quando hai iniziato a farlo in questo modo?",
                                            "Qualcuno ti ha mai fatto domande al riguardo?",
                                            "Rende la tua vita migliore?",
                                            "Pensi che tutti dovrebbero farlo a modo tuo?"
                                  ]
                        },
                        {
                                  "text": "Un'abitudine di cui sei orgoglioso",
                                  "level": "intermediate",
                                  "hints": [
                                            "Qual è l'abitudine?",
                                            "Da quanto tempo ce l'hai?",
                                            "Come l'hai costruita?",
                                            "Che differenza fa?",
                                            "Qualcuno ti ha ispirato?"
                                  ]
                        },
                        {
                                  "text": "Un viaggio che ti ha sorpreso",
                                  "level": "intermediate",
                                  "hints": [
                                            "Dove stavi andando?",
                                            "Cosa ti ha sorpreso?",
                                            "È stato il posto, le persone o quello che è successo?",
                                            "Ha cambiato i tuoi piani?",
                                            "Ci torneresti?"
                                  ]
                        },
                        {
                                  "text": "Il tuo rapporto con i social media",
                                  "level": "intermediate",
                                  "hints": [
                                            "Quali piattaforme usi?",
                                            "Quanto tempo ci passi sopra?",
                                            "Infuenzano il tuo umore?",
                                            "Ti sei mai preso una pausa?",
                                            "Come sarebbe la tua vita senza di essi?"
                                  ]
                        },
                        {
                                  "text": "Cos'è per te il successo",
                                  "level": "intermediate",
                                  "hints": [
                                            "Come definisci il successo?",
                                            "Si tratta di soldi, felicità, relazioni?",
                                            "La tua definizione è cambiata nel tempo?",
                                            "Ti consideri una persona di successo?",
                                            "L'opinione degli altri sul tuo successo conta per te?"
                                  ]
                        },
                        {
                                  "text": "Il tuo rapporto con il cibo",
                                  "level": "intermediate",
                                  "hints": [
                                            "Cucini spesso?",
                                            "Il cibo è solo carburante o qualcosa di più?",
                                            "Mangi con gli altri o da solo?",
                                            "C'è un cibo fortemente legato a un ricordo?",
                                            "Il tuo rapporto con il cibo è cambiato?"
                                  ]
                        },
                        {
                                  "text": "Qualcosa che ti fa sempre ridere",
                                  "level": "intermediate",
                                  "hints": [
                                            "Di cosa si tratta?",
                                            "Perché pensi che ti faccia ridere?",
                                            "Riesci a ridere delle cose difficili?",
                                            "Tu e i tuoi amici ridete per le stesse cose?",
                                            "Il tuo senso dell'umorismo è diverso in lingue diverse?"
                                  ]
                        },
                        {
                                  "text": "Un consiglio che daresti a te stesso da giovane",
                                  "level": "intermediate",
                                  "hints": [
                                            "Quanti anni avrebbe il tuo io più giovane?",
                                            "Quale sarebbe il consiglio?",
                                            "Perché non lo sapevi allora?",
                                            "Pensi che avresti ascoltato?",
                                            "Chi ti ha dato il miglior consiglio della tua vita?"
                                  ]
                        },
                        {
                                  "text": "Il futuro del mondo tra 50 anni",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Quali cambiamenti tecnologici ti aspetti?",
                                            "Come sarà l'ambiente?",
                                            "Le strutture sociali saranno diverse?",
                                            "C'è qualcosa che ti preoccupa?",
                                            "Cosa ti rende ottimista riguardo al futuro?"
                                  ]
                        },
                        {
                                  "text": "L'impatto del cambiamento climatico sulle comunità locali",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Come è cambiata la tua zona?",
                                            "Quali rischi specifici affrontano le persone?",
                                            "Chi è più vulnerabile?",
                                            "Si stanno prendendo abbastanza misure?",
                                            "Cosa possono fare i singoli individui per fare la differenza?"
                                  ]
                        },
                        {
                                  "text": "Una convinzione che hai e che la maggior parte delle persone intorno a te non condivide",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Qual è questa convinzione?",
                                            "Quando l'hai formata?",
                                            "Sei mai stato messo in discussione al riguardo?",
                                            "Influisce sui tuoi rapporti?",
                                            "È mai cambiata a seguito di una conversazione?"
                                  ]
                        },
                        {
                                  "text": "Cosa faresti se non avessi paura",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Qual è una cosa che la paura ti impedisce di fare?",
                                            "È una paura razionale o irrazionale?",
                                            "La paura ti ha mai frenato e poi te ne sei pentito?",
                                            "Come sarebbe la tua vita dall'altra parte di quella paura?",
                                            "Cosa diresti a qualcuno che affronta la stessa paura?"
                                  ]
                        },
                        {
                                  "text": "La cosa migliore e peggiore del luogo in cui sei cresciuto",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Cosa ti ha plasmato di più di quel posto?",
                                            "Per cosa ti senti grato?",
                                            "Cosa avresti voluto che fosse diverso?",
                                            "In che modo ha formato i tuoi valori?",
                                            "Ci cresceresti dei figli?"
                                  ]
                        },
                        {
                                  "text": "Come gestisci lo stress",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Quali sono le tue strategie principali?",
                                            "Pensi di gestire bene lo stress?",
                                            "Cosa ti rende più stressato?",
                                            "Il tuo rapporto con lo stress è cambiato?",
                                            "Che consiglio daresti a chi lotta con lo stress?"
                                  ]
                        },
                        {
                                  "text": "Qualcosa che un tempo giudicavi e che ora capisci",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Di cosa si trattava?",
                                            "Cosa pensavi prima?",
                                            "Cosa ha cambiato la tua prospettiva?",
                                            "Ti senti imbarazzato per la tua vecchia opinione?",
                                            "Questo ti ha reso meno propenso a giudicare in generale?"
                                  ]
                        },
                        {
                                  "text": "Cosa significa per te l'amicizia da adulto",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "L'amicizia tra adulti è diversa da quella infantile?",
                                            "Quanti amici stretti hai?",
                                            "Come mantieni le amicizie a distanza?",
                                            "Sei mai 'cresciuto oltre' un'amicizia?",
                                            "Cosa fa durare un'amicizia?"
                                  ]
                        },
                        {
                                  "text": "Una volta in cui hai sbagliato completamente qualcosa",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Cosa è successo?",
                                            "Quanto tempo ci è voluto prima che te ne rendessi conto?",
                                            "Qual è stato il costo dell'errore?",
                                            "Come l'hai gestita?",
                                            "Cosa hai imparato?"
                                  ]
                        },
                        {
                                  "text": "Il tuo rapporto complicato con i social media",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Li ami, li odi o entrambi?",
                                            "Cosa ottieni da essi che non puoi ottenere altrove?",
                                            "Ti sei mai sentito peggio dopo averli usati?",
                                            "Pensi che cambino il modo in cui ti presenti?",
                                            "Se potessi riprogettare i social media, cosa cambieresti?"
                                  ]
                        },
                        {
                                  "text": "La cosa più sopravvalutata della vita moderna",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Cos'è?",
                                            "Perché le persone le danno così tanto valore?",
                                            "Quando hai capito che secondo te non valeva tutto quell'interesse?",
                                            "La tua opinione suscita reazioni negli altri?",
                                            "Con cosa la sostituiresti?"
                                  ]
                        },
                        {
                                  "text": "Un momento che ha cambiato il modo in cui vedi te stesso",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Cosa è successo?",
                                            "Ti aspettavi che ti avrebbe influenzato?",
                                            "Ti ha cambiato immediatamente o gradualmente?",
                                            "La versione di te dopo questo momento è migliore?",
                                            "Lo condivideresti con qualcuno a te vicino?"
                                  ]
                        },
                        {
                                  "text": "Qualcosa di cui sei silenziosamente orgoglioso",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Cos'è?",
                                            "Perché silenziosamente — perché non ad alta voce?",
                                            "Quanto tempo ci è voluto?",
                                            "Le persone a te vicine lo sanno?",
                                            "Cosa dice questo su ciò a cui dai valore?"
                                  ]
                        },
                        {
                                  "text": "La tua teoria personale sul perché le persone sono come sono",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "È natura, educazione o qualcos'altro?",
                                            "Pensi che le persone possano cambiare fondamentalmente?",
                                            "Una persona ti ha mai sorpreso completamente?",
                                            "Pensi di capire bene le persone?",
                                            "Qual è il più grande errore che le persone fanno le une verso le altre?"
                                  ]
                        },
                        {
                                  "text": "Cosa pensi dell'ambizione",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Sei una persona ambiziosa?",
                                            "L'ambizione è sempre una cosa buona?",
                                            "L'ambizione può danneggiare la tua vita personale?",
                                            "Ammiri le persone molto ambiziose?",
                                            "Quanto è abbastanza?"
                                  ]
                        },
                        {
                                  "text": "La versione di te stesso di cinque anni fa",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Cosa stavi facendo?",
                                            "Di cosa ti preoccupavi?",
                                            "Come pensavi che sarebbe stata la tua vita oggi?",
                                            "Qual era la cosa più importante che non sapevi ancora?",
                                            "Andresti d'accordo con il tuo io passato?"
                                  ]
                        },
                        {
                                  "text": "Come prendi decisioni difficili",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Segui la testa o l'istinto?",
                                            "Prendi decisioni velocemente o lentamente?",
                                            "Chiedi consiglio o decidi da solo?",
                                            "Qual è la decisione più difficile che tu abbia mai preso?",
                                            "Di solito ti senti in pace con le tue decisioni dopo?"
                                  ]
                        },
                        {
                                  "text": "La nostalgia e cosa ti provoca",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Di cosa provi nostalgia?",
                                            "La nostalgia è confortante o dolorosa?",
                                            "Pensi che il passato fosse davvero migliore o solo diverso?",
                                            "La nostalgia ti impedisce mai di andare avanti?",
                                            "Qual è un odore, un suono o un sapore che scatena un ricordo?"
                                  ]
                        },
                        {
                                  "text": "Fama — punizione o ricompensa?",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Vorresti essere famoso?",
                                            "Che tipo di fama vorresti avere?",
                                            "Cosa perderesti?",
                                            "Pensi che la maggior parte delle persone famose sia felice?",
                                            "Qual è la differenza tra fama e rispetto?"
                                  ]
                        },
                        {
                                  "text": "Cosa ti annoia e cosa ti affascina",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Di quale argomento o attività potresti parlare per ore?",
                                            "Cosa non riesci assolutamente a sopportare?",
                                            "Ciò che ti affascina dice qualcosa su di te come persona?",
                                            "Qualcosa che un tempo ti annoiava è diventato interessante?",
                                            "Cos'è qualcosa che trovi affascinante e che sorprende le persone?"
                                  ]
                        },
                        {
                                  "text": "Una volta in cui hai dovuto ricominciare da capo",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Cosa è successo prima del nuovo inizio?",
                                            "È stata una scelta o la vita ti ha costretto?",
                                            "Qual è stata la parte più difficile del ricominciare?",
                                            "Cosa hai conservato di prima?",
                                            "Sei felice che sia successo?"
                                  ]
                        },
                        {
                                  "text": "Cosa le persone capiscono male di te",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Qual è l'idea errata più comune?",
                                            "Da dove deriva?",
                                            "Ti dà fastidio?",
                                            "Cerchi di correggerla o lasci perdere?",
                                            "C'è del vero in essa, dopotutto?"
                                  ]
                        },
                        {
                                  "text": "Il ruolo dell'arte nella società moderna",
                                  "level": "advanced",
                                  "hints": [
                                            "Qual è lo scopo primario dell'arte oggi?",
                                            "L'arte dovrebbe essere politica o puramente estetica?",
                                            "In che modo la tecnologia digitale ha cambiato il modo in cui consumiamo l'arte?",
                                            "L'arte tradizionale è ancora rilevante per le giovani generazioni?",
                                            "L'arte ha la responsabilità di sfidare lo spettatore?"
                                  ]
                        },
                        {
                                  "text": "Intelligenza Artificiale: Strumento o minaccia?",
                                  "level": "advanced",
                                  "hints": [
                                            "L'IA finirà per sostituire la creatività umana?",
                                            "Quali sono le maggiori preoccupazioni etiche nello sviluppo dell'IA?",
                                            "L'IA potrà mai 'capire' veramente o sta solo elaborando dati?",
                                            "In che modo l'IA cambierà il mercato del lavoro nel prossimo decennio?",
                                            "Dovrebbe esserci una maggiore regolamentazione nella ricerca sull'IA?"
                                  ]
                        },
                        {
                                  "text": "Se il luogo in cui sei cresciuto ti ha reso ciò che sei",
                                  "level": "advanced",
                                  "hints": [
                                            "Quali cose specifiche di quel luogo ti hanno formato?",
                                            "Sono le persone, la cultura, il paesaggio, la lingua?",
                                            "Saresti potuto diventare la stessa persona altrove?",
                                            "Ti senti definito dalle tue origini o vi opponi resistenza?",
                                            "Come saresti stato se fossi cresciuto in un posto completamente diverso?"
                                  ]
                        },
                        {
                                  "text": "Il divario tra chi sei e chi presenti al mondo",
                                  "level": "advanced",
                                  "hints": [
                                            "C'è un divario significativo tra il tuo io pubblico e quello privato?",
                                            "Questo divario è sano o ti costa qualcosa?",
                                            "In quali contesti sei pienamente te stesso?",
                                            "Le persone che ti conoscono bene vedono una persona diversa dai colleghi o dagli estranei?",
                                            "La recitazione dell'identità è inevitabile o è qualcosa da resistere?"
                                  ]
                        },
                        {
                                  "text": "Se le persone cambiano fondamentalmente o si rivelano solo lentamente",
                                  "level": "advanced",
                                  "hints": [
                                            "Riesci a pensare a qualcuno che sia cambiato veramente — o semplicemente non lo conoscevi abbastanza bene prima?",
                                            "Cosa serve perché una persona cambi davvero?",
                                            "Pensi di essere cambiato o di essere rimasto essenzialmente te stesso?",
                                            "Cosa dice delle relazioni se le persone non cambiano davvero?",
                                            "La convinzione che le persone possano cambiare è necessaria per l'amore e l'amicizia?"
                                  ]
                        },
                        {
                                  "text": "Cosa hai imparato dal fallimento che non avresti potuto imparare dal successo",
                                  "level": "advanced",
                                  "hints": [
                                            "Qual è un fallimento specifico che ti ha insegnato qualcosa di insostituibile?",
                                            "Il fallimento è davvero un maestro migliore o è solo qualcosa che si dice per sentirsi meglio?",
                                            "Pensi di gestire bene il fallimento?",
                                            "Qual è la forma di fallimento più dolorosa per te personalmente?",
                                            "Esiste un fallimento che non insegna nulla?"
                                  ]
                        },
                        {
                                  "text": "Il tuo rapporto con la certezza e il dubbio",
                                  "level": "advanced",
                                  "hints": [
                                            "Sei qualcuno che ha bisogno di certezze o puoi vivere serenamente con l'ambiguità?",
                                            "In quali aree della tua vita ti senti sicuro e in quali dubiti?",
                                            "Un periodo di profondo dubbio si è mai rivelato prezioso?",
                                            "Ti fidi delle persone che sembrano completamente certe di tutto?",
                                            "Qual è la differenza tra uno scetticismo sano e un dubbio paralizzante?"
                                  ]
                        },
                        {
                                  "text": "Le cose che ti porti dietro dall'infanzia senza rendertene conto",
                                  "level": "advanced",
                                  "hints": [
                                            "Ci sono modelli nel tuo comportamento che puoi rintracciare in esperienze precoci?",
                                            "Quando hai notato per la prima volta che qualcosa dell'infanzia operava ancora in te?",
                                            "È possibile comprendere appieno le influenze invisibili su chi sei?",
                                            "Quali di questi schemi ti servono e quali no?",
                                            "Quanta responsabilità abbiamo di esaminare le nostre tendenze ereditarie?"
                                  ]
                        },
                        {
                                  "text": "Cosa proteggeresti anche se ti costasse qualcosa",
                                  "level": "advanced",
                                  "hints": [
                                            "Cos'è qualcosa a cui non rinunceresti, qualunque cosa accada?",
                                            "È stato testato?",
                                            "È un valore, una relazione o qualcos'altro?",
                                            "Pensi che tutti abbiano qualcosa del genere o è raro?",
                                            "Sapere questo di te stesso ti dice in cosa credi veramente?"
                                  ]
                        },
                        {
                                  "text": "Cosa pensi che la gente sbagli riguardo alla felicità",
                                  "level": "advanced",
                                  "hints": [
                                            "Qual è l'errore più comune che le persone commettono nella ricerca della felicità?",
                                            "La felicità è qualcosa che si trova o qualcosa che si costruisce?",
                                            "Pensi di essere felice? Lo sai almeno?",
                                            "C'è tensione tra felicità e significato?",
                                            "La tua idea di felicità è cambiata significativamente?"
                                  ]
                        },
                        {
                                  "text": "Il ruolo della fortuna nella tua vita",
                                  "level": "advanced",
                                  "hints": [
                                            "Quanto di dove sei ora è fortuna rispetto allo sforzo?",
                                            "È scomodo ammettere che la fortuna ha giocato un ruolo?",
                                            "La fortuna ha lavorato contro di te?",
                                            "Pensi che le persone sopravvalutino quanto controllo hanno?",
                                            "Qual è l'implicazione etica della fortuna: influisce su ciò che ci dobbiamo l'un l'altro?"
                                  ]
                        },
                        {
                                  "text": "Se ambizione e appagamento possono coesistere",
                                  "level": "advanced",
                                  "hints": [
                                            "Pensi di poter desiderare di più ed essere in pace allo stesso tempo?",
                                            "Hai mai dovuto scegliere tra i due?",
                                            "Ammiri le persone che sono soddisfatte o sembra di arrendersi?",
                                            "L'ambizione è una forma di insoddisfazione per definizione?",
                                            "Come sarebbe nella tua vita avere entrambi?"
                                  ]
                        },
                        {
                                  "text": "Cosa devi alle persone che ti hanno formato",
                                  "level": "advanced",
                                  "hints": [
                                            "Senti un senso di debito verso le persone che ti hanno formato?",
                                            "Questo debito è emotivo, pratico o entrambi?",
                                            "E se ti avessero formato in modi dannosi?",
                                            "Come onori l'influenza di qualcuno senza lasciarti intrappolare da essa?",
                                            "Puoi separare la gratitudine dall'obbligo?"
                                  ]
                        },
                        {
                                  "text": "La cosa più utile che ti sia mai stata detta",
                                  "level": "advanced",
                                  "hints": [
                                            "Cos'era e chi l'ha detto?",
                                            "Ne hai capito subito il valore o solo dopo?",
                                            "Lo trasmetti?",
                                            "La saggezza utile è sempre semplice o anche la complessità può essere utile?",
                                            "Cos'è qualcosa che avresti voluto che qualcuno ti dicesse e che nessuno ha fatto?"
                                  ]
                        },
                        {
                                  "text": "Qualcosa della vita moderna che ti preoccupa sinceramente",
                                  "level": "advanced",
                                  "hints": [
                                            "Di cosa si tratta: tecnologia, politica, tendenze sociali, ambiente?",
                                            "Questa preoccupazione è nuova o è andata crescendo?",
                                            "Pensi che gli altri la condividano o ti senti solo in essa?",
                                            "Preoccupartene cambia il modo in cui vivi?",
                                            "Hai qualche speranza che le cose migliorino?"
                                  ]
                        },
                        {
                                  "text": "La differenza tra essere soli ed essere soli (solitudine)",
                                  "level": "advanced",
                                  "hints": [
                                            "Sei uno che ama la solitudine?",
                                            "Hai mai provato solitudine in mezzo alla folla?",
                                            "Pensi che la vita moderna renda la solitudine più o meno comune?",
                                            "Puoi sentirti solo in una relazione?",
                                            "Qual è la cura per la solitudine: più connessione o qualcosa di più profondo?"
                                  ]
                        },
                        {
                                  "text": "Cosa significa vivere bene — e se ci sei vicino",
                                  "level": "advanced",
                                  "hints": [
                                            "Come definisci una vita vissuta bene?",
                                            "La vita di chi guardi e pensi: ci siamo quasi?",
                                            "Sei su un percorso verso di essa o lontano da essa?",
                                            "Ci pensi spesso o la vita quotidiana ti distoglie?",
                                            "Vivere bene è qualcosa che pianifichi o qualcosa che accade per caso?"
                                  ]
                        },
                        {
                                  "text": "Se ti fidi della tua memoria",
                                  "level": "advanced",
                                  "hints": [
                                            "Un ricordo si è mai rivelato sbagliato?",
                                            "Pensi che modifichiamo i nostri ricordi per adattarli a una narrazione su noi stessi?",
                                            "Qual è il ricordo più vivido che hai e quanto pensi sia affidabile?",
                                            "Importa se un ricordo è accurato se sembra vero?",
                                            "Cosa dice la memoria sull'identità: se i tuoi ricordi cambiassero, saresti una persona diversa?"
                                  ]
                        },
                        {
                                  "text": "Le istituzioni e se ci servono",
                                  "level": "advanced",
                                  "hints": [
                                            "Pensa a un'istituzione — sanità, istruzione, governo — e valutala onestamente.",
                                            "A che punto un'istituzione smette di servire il suo scopo?",
                                            "Ti sei mai sentito tradito da un'istituzione su cui facevi affidamento?",
                                            "La riforma è possibile o le istituzioni devono essere completamente sostituite?",
                                            "Come sarebbe una versione funzionante dell'istituzione scelta?"
                                  ]
                        },
                        {
                                  "text": "Le storie che racconti su te stesso",
                                  "level": "advanced",
                                  "hints": [
                                            "Qual è la storia centrale che racconti sulla tua vita?",
                                            "Quanto di essa è accurato e quanto è una costruzione?",
                                            "La storia è cambiata nel tempo?",
                                            "Cosa succede al nostro senso di sé quando la storia viene messa in discussione?",
                                            "Chi sei se togli la storia?"
                                  ]
                        },
                        {
                                  "text": "Cosa significa comunità in un mondo frammentato",
                                  "level": "advanced",
                                  "hints": [
                                            "Ti senti parte di una comunità?",
                                            "La comunità online è una vera comunità?",
                                            "Cosa è andato perduto e cosa è stato guadagnato nel modo in cui si formano le comunità oggi?",
                                            "Cosa richiede la comunità ai suoi membri?",
                                            "Si può creare una comunità deliberatamente o deve crescere organicamente?"
                                  ]
                        },
                        {
                                  "text": "Come capisci quando fidarti di qualcuno",
                                  "level": "advanced",
                                  "hints": [
                                            "Quali segnali cerchi?",
                                            "Il tuo istinto si è mai sbagliato del tutto?",
                                            "Pensi di essere troppo fiducioso, non abbastanza fiducioso o ben calibrato?",
                                            "La fiducia viene data o guadagnata — e questa distinzione ha importanza?",
                                            "Cosa rompe la fiducia irrevocabilmente per te?"
                                  ]
                        },
                        {
                                  "text": "Complessità della coscienza umana",
                                  "level": "advanced",
                                  "hints": [
                                            "Cosa definisce la coscienza: consapevolezza, autoriflessione o qualcos'altro?",
                                            "La coscienza è un sottoprodotto di processi biologici o qualcosa di fondamentale?",
                                            "L'intelligenza artificiale potrà mai raggiungere una vera coscienza?",
                                            "In che modo il 'problema difficile' della coscienza mette in discussione le visioni materialiste?",
                                            "Qual è la relazione tra la coscienza e il cervello fisico?"
                                  ]
                        },
                        {
                                  "text": "Se il sé sia qualcosa che scopriamo o costruiamo",
                                  "level": "advanced",
                                  "hints": [
                                            "Esiste un 'tu' fisso che aspetta di essere scoperto, o sei continuamente creato dalle scelte e dal contesto?",
                                            "Cosa succede all'identità quando il contesto cambia radicalmente: malattia, migrazione, perdita?",
                                            "La narrazione che hai di te stesso è una scoperta o un'invenzione?",
                                            "La questione ha importanza per come vivi, o è puramente filosofica?",
                                            "Se il sé è costruito, di cosa siamo responsabili nel costruirlo?"
                                  ]
                        },
                        {
                                  "text": "L'etica di ciò che scegliamo di dimenticare",
                                  "level": "advanced",
                                  "hints": [
                                            "Abbiamo un rapporto morale con il nostro dimenticare?",
                                            "La memoria selettiva è una forma di disonestà verso noi stessi?",
                                            "Il perdono può richiedere l'oblio, o è un errore categoriale?",
                                            "Cosa rivela di sé una società che sceglie collettivamente di dimenticare?",
                                            "Esiste un'amnesia etica — per gli individui o per le nazioni?"
                                  ]
                        },
                        {
                                  "text": "Se il linguaggio plasmi ciò che possiamo pensare o solo ciò che possiamo dire",
                                  "level": "advanced",
                                  "hints": [
                                            "Imparare un'altra lingua ti ha dato accesso a pensieri che non riuscivi a formulare nella tua prima lingua?",
                                            "L'ipotesi di Sapir-Whorf è una metafora poetica o una genuina pretesa epistemologica?",
                                            "Esistono esperienze che resistono a ogni linguaggio?",
                                            "Cosa significa provare qualcosa che non si può nominare?",
                                            "Il linguaggio che usi nel tuo monologo interiore cambia il modo in cui sperimenti te stesso?"
                                  ]
                        },
                        {
                                  "text": "Il rapporto tra libertà e responsabilità nella propria vita",
                                  "level": "advanced",
                                  "hints": [
                                            "Dove ti senti più libero e cosa hai pagato per quella libertà?",
                                            "La libertà è sempre acquistata a spese di qualcun altro?",
                                            "Sperimenti le tue responsabilità come vincoli o come ciò che dà significato alla tua libertà?",
                                            "Una persona può essere genuinamente libera senza le condizioni materiali per esercitare tale libertà?",
                                            "Cosa sacrificheresti per essere più libero — e cosa rivela la tua risposta?"
                                  ]
                        },
                        {
                                  "text": "Cosa fa davvero la nostalgia quando ci viene a trovare",
                                  "level": "advanced",
                                  "hints": [
                                            "La nostalgia è dolore, conforto, distorsione o tutte e tre le cose simultaneamente?",
                                            "Ti fidi dei sentimenti nostalgici o li tratti con sospetto?",
                                            "Ciò di cui hai nostalgia è un passato reale o una versione modificata?",
                                            "Cosa impedisce la nostalgia e cosa rende possibile?",
                                            "Una società può essere nostalgica allo stesso modo di un individuo — e con gli stessi pericoli?"
                                  ]
                        },
                        {
                                  "text": "Se comprendere qualcosa lo sminuisca sempre",
                                  "level": "advanced",
                                  "hints": [
                                            "Pensa a qualcosa di bello o misterioso: comprenderlo lo rende meno tale?",
                                            "C'è valore nel non sapere, o è solo romanticismo?",
                                            "La spiegazione scientifica e lo stupore estetico possono coesistere, o l'una colonizza l'altro?",
                                            "C'è qualcosa che eviti deliberatamente di capire per paura di perderne il potere su di te?",
                                            "Cosa rivela questa domanda sui limiti del razionalismo?"
                                  ]
                        },
                        {
                                  "text": "La differenza tra i valori dichiarati e i valori rivelati",
                                  "level": "advanced",
                                  "hints": [
                                            "Cosa dicono che apprezzi di più le tue scelte reali, non le tue convinzioni dichiarate?",
                                            "C'è un divario doloroso tra le due?",
                                            "Il divario è prova di ipocrisia o della genuina difficoltà di vivere secondo i propri principi?",
                                            "Puoi colmare il divario, o persiste sempre una certa distanza tra ideale e reale?",
                                            "Cosa dovresti sacrificare per allineare maggiormente la tua vita a ciò che dici di credere?"
                                  ]
                        },
                        {
                                  "text": "Se l'onestà radicale sia una virtù o una forma di autocompiacimento",
                                  "level": "advanced",
                                  "hints": [
                                            "L'impulso di 'dire le cose come stanno' riguarda il benessere dell'altra persona o il proprio sollievo?",
                                            "La gentilezza è a volte la scelta più coraggiosa?",
                                            "Dov'è il confine tra onestà e crudeltà?",
                                            "La richiesta di totale onestà nelle relazioni riflette intimità o controllo?",
                                            "Riesci a pensare a un momento in cui l'onestà radicale ha fatto più male che bene?"
                                  ]
                        },
                        {
                                  "text": "Se la grande arte debba sfidare o consolare",
                                  "level": "advanced",
                                  "hints": [
                                            "A cosa attingi effettivamente quando soffri: alla difficoltà o al conforto?",
                                            "Esiste un'arte che riesca a fare entrambe le cose simultaneamente?",
                                            "L'arte consolatoria è meno seria dell'arte di sfida, o è una distinzione snobistica?",
                                            "Quale pensi sia l'obbligo primario dell'arte?",
                                            "C'è un'arte che ti ha cambiato in un modo in cui il conforto non avrebbe mai potuto fare?"
                                  ]
                        },
                        {
                                  "text": "La richiesta di equilibrio e se dia una falsa legittimità",
                                  "level": "advanced",
                                  "hints": [
                                            "'Presentare entrambe le parti' è sempre giusto, o può distorcere la realtà?",
                                            "C'è differenza tra equilibrio e falsa equivalenza?",
                                            "Chi decide quali posizioni meritano una piattaforma?",
                                            "L'equilibrio giornalistico può coesistere con gli standard epistemici?",
                                            "Qual è il costo di dare spazio a una posizione in nome della correttezza?"
                                  ]
                        },
                        {
                                  "text": "Se il progresso morale sia reale o solo una moda morale",
                                  "level": "advanced",
                                  "hints": [
                                            "La nostra fiducia etica di oggi è un segno di progresso genuino o lo stesso provincialismo in abiti nuovi?",
                                            "Cosa significherebbe per il progresso morale essere reale?",
                                            "Riesci a pensare a qualcosa in cui crediamo attualmente che le generazioni future guarderanno con orrore?",
                                            "La relatività della moda morale mina l'idea che qualcosa sia realmente sbagliato?",
                                            "L'umiltà morale è compatibile con la convinzione morale?"
                                  ]
                        },
                        {
                                  "text": "Le parti di te stesso che trovi più difficili da articolare",
                                  "level": "advanced",
                                  "hints": [
                                            "C'è qualcosa che senti ma per cui non riesci a trovare un linguaggio?",
                                            "La difficoltà riguarda il linguaggio o la cosa in sé?",
                                            "Pensi che qualche esperienza interiore sia genuinamente privata — inaccessibile persino a te stesso?",
                                            "Cosa significherebbe comprendere appieno la propria interiorità?",
                                            "L'ineffabile deve essere articolato per essere reale?"
                                  ]
                        },
                        {
                                  "text": "Le implicazioni politiche dell'appagamento",
                                  "level": "advanced",
                                  "hints": [
                                            "Essere genuinamente appagati in un mondo ingiusto è un fallimento morale?",
                                            "La coltivazione della pace personale è compatibile con una coscienza politica?",
                                            "Il capitalismo beneficia di una popolazione appagata?",
                                            "Esiste una versione dell'appagamento che non sia quietismo politico?",
                                            "Come navighi personalmente tra la tensione della pace interiore e l'impegno esteriore?"
                                  ]
                        },
                        {
                                  "text": "Memoria, identità e ciò che rimane quando entrambe mutano",
                                  "level": "advanced",
                                  "hints": [
                                            "Se i tuoi ricordi fossero sistematicamente alterati, saresti ancora tu?",
                                            "In cosa consiste effettivamente la continuità del sé?",
                                            "La persona che ricordi di essere è la stessa persona che parla ora?",
                                            "Cosa succede all'identità nell'esperienza di una perdita o trasformazione radicale?",
                                            "La questione dell'identità personale ha importanza per come ci trattiamo a vicenda — legalmente, eticamente?"
                                  ]
                        },
                        {
                                  "text": "Se valga sempre la pena vivere una vita esaminata",
                                  "level": "advanced",
                                  "hints": [
                                            "Socrate diceva che la vita non esaminata non vale la pena di essere vissuta: sei d'accordo?",
                                            "C'è un costo nell'esame: una sorta di paralisi o perdita di innocenza?",
                                            "L'esame può diventare la sua stessa forma di evitamento?",
                                            "Esistono persone che vivono profondamente e bene senza molto auto-esame?",
                                            "Cosa pensi che il tuo grado di auto-esame ti sia costato e ti abbia dato?"
                                  ]
                        },
                        {
                                  "text": "La questione di cosa si deve agli estranei",
                                  "level": "advanced",
                                  "hints": [
                                            "Hai obblighi verso persone che non incontrerai mai?",
                                            "Fino a che punto si estendono i tuoi obblighi morali: al tuo quartiere, alla tua nazione, al mondo?",
                                            "La distanza fisica o culturale diminuisce l'obbligo o è una razionalizzazione?",
                                            "Qual è la differenza tra carità e giustizia?",
                                            "Come vivi effettivamente in relazione a questa domanda?"
                                  ]
                        },
                        {
                                  "text": "Le storie che le civiltà raccontano su se stesse",
                                  "level": "advanced",
                                  "hints": [
                                            "Ogni società ha un mito fondativo: qual è il tuo e quanto è accurato?",
                                            "Cosa sceglie di dimenticare una nazione tanto quanto ciò che sceglie di ricordare?",
                                            "L'identità nazionale è una finzione utile o pericolosa?",
                                            "Può una società avere un resoconto più onesto di se stessa senza perdere coesione?",
                                            "Che storia racconteresti della tua civiltà se dovessi essere totalmente onesto?"
                                  ]
                        },
                        {
                                  "text": "Se un testo possa mai essere pienamente tradotto",
                                  "level": "advanced",
                                  "hints": [
                                            "Hai mai sperimentato qualcosa in un'altra lingua che ha resistito alla traduzione?",
                                            "L'intraducibilità di certe parole è prova che il linguaggio plasma il pensiero?",
                                            "Cosa perdiamo e cosa guadagniamo nella traduzione?",
                                            "Un'eccellente traduzione è una forma di creazione o una forma di perdita?",
                                            "Cosa ci dice la traduzione sui limiti della comprensione tra le culture?"
                                  ]
                        },
                        {
                                  "text": "L'esperienza di considerare vere contemporaneamente cose contraddittorie",
                                  "level": "advanced",
                                  "hints": [
                                            "Puoi amare qualcuno e risentirti con lui allo stesso tempo senza che l'una cosa escluda l'altra?",
                                            "La capacità di sostenere la contraddizione è un segno di maturità o di confusione?",
                                            "Ci sono posizioni politiche o morali che sostieni che siano in genuina tensione?",
                                            "La richiesta di coerenza nelle nostre convinzioni riflette razionalismo o rigidità?",
                                            "Cos'è qualcosa in cui credi che contraddice qualcos'altro in cui credi?"
                                  ]
                        },
                        {
                                  "text": "Cosa significa che un giorno non esisterai più",
                                  "level": "advanced",
                                  "hints": [
                                            "Pensi alla tua mortalità regolarmente, occasionalmente o quasi mai?",
                                            "La consapevolezza della morte ha plasmato il tuo modo di vivere o ciò che apprezzi?",
                                            "La paura della morte è razionale o è una confusione su ciò che viene perso?",
                                            "Trovi conforto in qualche modo particolare di pensare alla mortalità?",
                                            "Cosa rende possibile la mortalità che l'immortalità potrebbe non permettere?"
                                  ]
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
                        },
                        {
                                  "text": "I fine settimana sono troppo brevi.",
                                  "level": "elementary",
                                  "hints": [
                                            "Cosa fai nel fine settimana?",
                                            "Come ti senti la domenica sera?",
                                            "Cosa faresti con un fine settimana di tre giorni?",
                                            "Lavori o studi nei fine settimana?",
                                            "Qual è il fine settimana perfetto per te?"
                                  ]
                        },
                        {
                                  "text": "È maleducato essere in ritardo.",
                                  "level": "elementary",
                                  "hints": [
                                            "Di solito sei puntuale?",
                                            "Quanto aspetti un amico?",
                                            "Va bene arrivare con 10 minuti di ritardo?",
                                            "La puntualità è importante nella tua cultura?",
                                            "Cosa fai quando qualcuno è molto in ritardo?"
                                  ]
                        },
                        {
                                  "text": "Le persone sono più gentili nelle piccole città.",
                                  "level": "elementary",
                                  "hints": [
                                            "Dove vivi: in un paese o in una città?",
                                            "I tuoi vicini sono amichevoli?",
                                            "Le persone parlano con gli sconosciuti dove vivi?",
                                            "Hai mai vissuto in un tipo di posto diverso?",
                                            "Cosa rende un posto amichevole?"
                                  ]
                        },
                        {
                                  "text": "Avere un animale domestico ti rende più felice.",
                                  "level": "elementary",
                                  "hints": [
                                            "Hai un animale domestico?",
                                            "Qual è il miglior animale domestico per una persona impegnata?",
                                            "Gli animali domestici sono costosi?",
                                            "Un animale domestico può essere un amico?",
                                            "Cosa devi fare per prenderti cura di un animale domestico?"
                                  ]
                        },
                        {
                                  "text": "Si può dire molto su qualcuno dalle sue scarpe.",
                                  "level": "elementary",
                                  "hints": [
                                            "Guardi le scarpe delle persone?",
                                            "Cosa dicono le tue scarpe di te?",
                                            "La moda è importante per te?",
                                            "Puoi giudicare una persona dal suo aspetto?",
                                            "Cos'altro ti dice del carattere di una persona?"
                                  ]
                        },
                        {
                                  "text": "Va bene mangiare da soli in un ristorante.",
                                  "level": "elementary",
                                  "hints": [
                                            "Hai mai mangiato da solo in un ristorante?",
                                            "Lo trovi comodo?",
                                            "Il cibo è migliore con altre persone?",
                                            "Vedi molte persone mangiare da sole?",
                                            "Cosa fai quando mangi da solo?"
                                  ]
                        },
                        {
                                  "text": "Imparare una lingua è più facile quando si è giovani.",
                                  "level": "elementary",
                                  "hints": [
                                            "Quanti anni avevi quando hai iniziato a imparare questa lingua?",
                                            "Pensi che l'età sia importante per l'apprendimento delle lingue?",
                                            "Qual è la parte più difficile dell'apprendimento di una lingua?",
                                            "Conosci qualcuno che ha imparato una lingua da adulto?",
                                            "Cosa ti aiuta di più quando studi?"
                                  ]
                        },
                        {
                                  "text": "I trasporti pubblici sono meglio che avere un'auto.",
                                  "level": "elementary",
                                  "hints": [
                                            "Come ti sposti nella tua città?",
                                            "I trasporti pubblici sono buoni dove vivi?",
                                            "Quali sono i problemi di avere un'auto?",
                                            "È costoso viaggiare con i trasporti pubblici?",
                                            "Cosa cambieresti dei trasporti nella tua città?"
                                  ]
                        },
                        {
                                  "text": "È difficile annoiarsi quando si ha un telefono.",
                                  "level": "elementary",
                                  "hints": [
                                            "Quante ore al giorno usi il telefono?",
                                            "Per cosa lo usi di più?",
                                            "Ti annoiavi prima degli smartphone?",
                                            "La noia a volte fa bene?",
                                            "Potresti lasciare il telefono a casa per un giorno?"
                                  ]
                        },
                        {
                                  "text": "Cucinare a casa è sempre meglio che mangiare fuori.",
                                  "level": "elementary",
                                  "hints": [
                                            "Quanto spesso cucini a casa?",
                                            "Cosa è più facile: cucinare o andare al ristorante?",
                                            "Mangiare fuori è costoso dove vivi?",
                                            "Qual è il tuo ristorante preferito?",
                                            "Qual è il tuo miglior pasto cucinato in casa?"
                                  ]
                        },
                        {
                                  "text": "Tutti dovrebbero provare a vivere all'estero per un anno.",
                                  "level": "elementary",
                                  "hints": [
                                            "Hai vissuto in un altro paese?",
                                            "Cosa ci sarebbe di difficile nel vivere all'estero?",
                                            "Cosa ci sarebbe di eccitante?",
                                            "Quale paese sceglieresti?",
                                            "Vivere all'estero cambia una persona?"
                                  ]
                        },
                        {
                                  "text": "I supereroi sono più interessanti dei veri eroi.",
                                  "level": "elementary",
                                  "hints": [
                                            "Chi è il tuo supereroe preferito?",
                                            "Ti viene in mente un eroe della vita reale?",
                                            "Cosa rende qualcuno un eroe?",
                                            "Perché le persone amano i supereroi?",
                                            "I veri eroi sono più importanti?"
                                  ]
                        },
                        {
                                  "text": "È importante rifare il letto ogni mattina.",
                                  "level": "elementary",
                                  "hints": [
                                            "Rifai il letto ogni giorno?",
                                            "Una stanza ordinata ti fa sentire meglio?",
                                            "È importante o non importante?",
                                            "Qual è la tua routine mattutina?",
                                            "Quali piccole abitudini hai?"
                                  ]
                        },
                        {
                                  "text": "Fare shopping è un hobby.",
                                  "level": "elementary",
                                  "hints": [
                                            "Ti piace fare shopping?",
                                            "Fai acquisti online o nei negozi?",
                                            "Quanto tempo passi a fare shopping?",
                                            "Fare shopping è rilassante?",
                                            "Cosa compri più spesso?"
                                  ]
                        },
                        {
                                  "text": "Viaggiare da soli è meglio che viaggiare con gli amici.",
                                  "level": "elementary",
                                  "hints": [
                                            "Hai viaggiato da solo?",
                                            "Cosa c'è di bello nel viaggiare da soli?",
                                            "Cosa c'è di bello nel viaggiare con gli altri?",
                                            "Ti senti solo quando viaggi da solo?",
                                            "Qual è il miglior viaggio che hai fatto?"
                                  ]
                        },
                        {
                                  "text": "Possiamo vivere senza internet per una settimana?",
                                  "level": "intermediate",
                                  "hints": [
                                            "Quanto spesso usi internet?",
                                            "Qual è la cosa più importante che fai online?",
                                            "Potresti stare offline per 24 ore?",
                                            "Cosa faresti invece con il tuo tempo?",
                                            "Internet è una necessità oggi?"
                                  ]
                        },
                        {
                                  "text": "Tutti dovrebbero imparare una seconda lingua?",
                                  "level": "intermediate",
                                  "hints": [
                                            "Pensi che sia importante essere bilingue?",
                                            "Qual è la parte più difficile dell'imparare una lingua?",
                                            "La tecnologia può sostituire l'apprendimento delle lingue?",
                                            "In che modo conoscere un'altra lingua cambia la tua prospettiva?",
                                            "Dovrebbe essere obbligatorio nelle scuole?"
                                  ]
                        },
                        {
                                  "text": "Essere figli unici è meglio che avere fratelli.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Sei figlio unico o hai fratelli o sorelle?",
                                            "Quali sono i vantaggi di avere fratelli?",
                                            "Quali sono i vantaggi di essere soli?",
                                            "I fratelli litigano sempre?",
                                            "In che modo la struttura della tua famiglia influenza la tua personalità?"
                                  ]
                        },
                        {
                                  "text": "Dire una bugia bianca a fin di bene è a volte la cosa più gentile da fare.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Riesci a pensare a una situazione in cui una bugia è gentile?",
                                            "L'onestà è sempre la politica migliore?",
                                            "Hai mai detto una bugia bianca?",
                                            "Come ti senti quando qualcuno mente per proteggerti?",
                                            "C'è differenza tra una bugia e non dire tutta la verità?"
                                  ]
                        },
                        {
                                  "text": "I social media fanno sentire le persone peggio con se stesse.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Come ti senti dopo aver scorso i social media?",
                                            "Ti paragoni alle persone online?",
                                            "Pensi che i social media mostrino la vita reale?",
                                            "Ti sei mai preso una pausa dai social media?",
                                            "Come sarebbe la vita senza di essi?"
                                  ]
                        },
                        {
                                  "text": "Non è necessario viaggiare per capire il mondo.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Si può imparare il mondo da libri e film?",
                                            "Cosa insegna il viaggio che nient'altro può fare?",
                                            "Il viaggio è accessibile a tutti?",
                                            "Hai imparato qualcosa di importante senza lasciare il tuo paese?",
                                            "Qual è la cosa più importante che il viaggio ti ha insegnato?"
                                  ]
                        },
                        {
                                  "text": "Le persone a cui non piacciono gli animali sono un po' sospette.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Ti fidi delle persone a cui non piacciono gli animali?",
                                            "Piacere gli animali dice qualcosa sul carattere di una persona?",
                                            "Bisogna amare gli animali per essere una brava persona?",
                                            "Cosa pensi quando incontri qualcuno che ha paura degli animali?",
                                            "È giusto dirlo?"
                                  ]
                        },
                        {
                                  "text": "Lavorare da casa rende le persone più pigre.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Lavori o studi da casa?",
                                            "Sei più o meno produttivo a casa?",
                                            "Quali sono le maggiori distrazioni a casa?",
                                            "Ti manca la struttura di un ufficio o di una classe?",
                                            "Pensi che il lavoro a distanza sia il futuro?"
                                  ]
                        },
                        {
                                  "text": "Le prime impressioni sono quasi sempre sbagliate.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Giudichi le persone velocemente?",
                                            "La tua prima impressione di qualcuno è mai stata completamente sbagliata?",
                                            "Cosa noti per primo in una persona?",
                                            "È giusto giudicare qualcuno da un primo incontro?",
                                            "Puoi cambiare la prima impressione che qualcuno ha di te?"
                                  ]
                        },
                        {
                                  "text": "I film romantici danno alle persone aspettative irrealistiche.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Guardi film romantici?",
                                            "Pensi che influenzino il modo in cui le persone pensano alle relazioni?",
                                            "Il vero amore è come nei film?",
                                            "Cosa c'è di irrealistico nei film romantici?",
                                            "Le storie d'amore nella tua cultura sono diverse?"
                                  ]
                        },
                        {
                                  "text": "Essere divertenti è più utile che essere intelligenti.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Preferiresti essere divertente o intelligente?",
                                            "Riesci a pensare a una situazione in cui l'umorismo ha aiutato più dell'intelligenza?",
                                            "Le persone divertenti sono più popolari?",
                                            "L'intelligenza e l'umorismo possono coesistere?",
                                            "Che tipo di senso dell'umorismo hai?"
                                  ]
                        },
                        {
                                  "text": "Il silenzio a tavola non è imbarazzante — è tranquillo.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Parli molto durante i pasti?",
                                            "Il silenzio è scomodo for te?",
                                            "Mangi con il telefono?",
                                            "Pensi che i pasti debbano essere sociali?",
                                            "Di cosa parli di solito a cena?"
                                  ]
                        },
                        {
                                  "text": "È più facile chiedere scusa che chiedere il permesso.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Chiedi il permesso o agisci prima?",
                                            "Riesci a pensare a un momento in cui ha funzionato bene?",
                                            "È un modo responsabile di comportarsi?",
                                            "Alcune persone sono troppo caute?",
                                            "Cosa dice questo sulla personalità di qualcuno?"
                                  ]
                        },
                        {
                                  "text": "Le persone leggono troppo le notizie e questo le rende ansiose.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Quanto spesso controlli le notizie?",
                                            "Le notizie influenzano il tuo umore?",
                                            "È importante rimanere informati?",
                                            "Come scegli quali notizie seguire?",
                                            "Ti sei mai preso una pausa dalle notizie?"
                                  ]
                        },
                        {
                                  "text": "Non puoi mai conoscere veramente qualcuno finché non viaggi con lui.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Hai viaggiato con un amico o un partner?",
                                            "Cosa hai scoperto su di loro?",
                                            "Quali situazioni rivelano il vero carattere di qualcuno?",
                                            "Pensi di conoscere bene i tuoi amici?",
                                            "Cos'altro ti mostra chi è veramente qualcuno?"
                                  ]
                        },
                        {
                                  "text": "La cultura della palestra è andata troppo oltre.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Vai in palestra?",
                                            "Quanto è importante il fitness per te?",
                                            "Pensi che le persone siano ossessionate dal proprio corpo?",
                                            "C'è pressione per apparire in un certo modo?",
                                            "Qual è un atteggiamento sano verso l'esercizio?"
                                  ]
                        },
                        {
                                  "text": "Un po' di gelosia in una relazione è salutare.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Pensi che la gelosia sia sempre negativa?",
                                            "Ti sei mai sentito geloso?",
                                            "Qual è la differenza tra gelosia e insicurezza?",
                                            "A che punto la gelosia diventa un problema?",
                                            "Cosa dice veramente la gelosia su una persona?"
                                  ]
                        },
                        {
                                  "text": "I social media stanno distruggendo le nostre abilità sociali?",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Come è cambiato il tuo stile di comunicazione negli ultimi 10 anni?",
                                            "Trovi più difficile parlare con gli sconosciuti ora?",
                                            "L'interazione online è preziosa quanto quella faccia a faccia?",
                                            "Quali abilità sociali sono più colpite dal tempo trascorso davanti allo schermo?",
                                            "Potresti stare un mese senza social media?"
                                  ]
                        },
                        {
                                  "text": "I trasporti pubblici dovrebbero essere gratuiti?",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Chi pagherebbe per i trasporti pubblici gratuiti?",
                                            "Ridurrebbe davvero l'uso dell'auto?",
                                            "Il trasporto gratuito è un diritto o un lusso?",
                                            "Come cambierebbe la qualità del servizio?",
                                            "Com'è la situazione nella tua città?"
                                  ]
                        },
                        {
                                  "text": "La nostalgia è per lo più solo una bugia che raccontiamo a noi stessi.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Di cosa sei più nostalgico?",
                                            "Pensi che il passato fosse davvero migliore?",
                                            "La nostalgia è confortante o ti frena?",
                                            "La nostalgia può essere pericolosa, personalmente o politicamente?",
                                            "Cosa significa che modifichiamo i nostri ricordi?"
                                  ]
                        },
                        {
                                  "text": "La maggior parte delle persone non vuole davvero un feedback onesto — vuole rassicurazione.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Quando chiedi un feedback, cosa vuoi davvero?",
                                            "Hai mai ricevuto un feedback difficile da sentire ma prezioso?",
                                            "È gentile dare a qualcuno un feedback onesto?",
                                            "Riesci a pensare a un contesto in cui la rassicurazione è effettivamente la cosa giusta?",
                                            "Qual è la differenza tra gentilezza e disonestà?"
                                  ]
                        },
                        {
                                  "text": "È possibile essere dipendenti dall'essere occupati.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Riempi il tuo programma deliberatamente?",
                                            "Essere occupati ti fa sentire virtuoso?",
                                            "Cosa succede quando non hai niente da fare?",
                                            "L'essere occupati è uno status symbol?",
                                            "Quando il riposo ha smesso di sembrare accettabile?"
                                  ]
                        },
                        {
                                  "text": "La fama sembra una punizione, non una ricompensa.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Vorresti essere famoso?",
                                            "Cosa perderesti se fossi famoso?",
                                            "Pensi che la maggior parte delle persone famose sia felice?",
                                            "La fama è la stessa cosa del successo?",
                                            "Che tipo di riconoscimento vorresti davvero?"
                                  ]
                        },
                        {
                                  "text": "Il sistema scolastico schiaccia la creatività più di quanto la incoraggi.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Pensi che la tua istruzione abbia incoraggiato la tua creatività?",
                                            "Quale materia o momento a scuola hai trovato più creativo?",
                                            "È possibile insegnare la creatività?",
                                            "Come sarebbe una scuola se la creatività fosse la priorità?",
                                            "Sei più o meno creativo di quando eri bambino?"
                                  ]
                        },
                        {
                                  "text": "Non esiste un comportamento veramente altruista.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Riesci a pensare a un atto genuinamente altruista?",
                                            "Fare qualcosa di buono ti fa sentire bene — e questo lo rende egoista?",
                                            "Si tratta di una visione cinica o realistica?",
                                            "La motivazione dietro un'azione conta se il risultato è positivo?",
                                            "Credere a questo cambia il tuo modo di comportarti?"
                                  ]
                        },
                        {
                                  "text": "La maggior parte degli adulti sta solo improvvisando.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Ti senti come se sapessi cosa stai facendo?",
                                            "Quando ti aspettavi di sentirti un adulto?",
                                            "Tutti hanno l'impressione di fingere?",
                                            "Questo è rassicurante o terrificante?",
                                            "Chi è qualcuno che sembra aver capito tutto — pensi che sia davvero così?"
                                  ]
                        },
                        {
                                  "text": "Le persone più interessanti sono sempre un po' difficili.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Riesci a pensare a qualcuno che sia allo stesso tempo affascinante e difficile?",
                                            "La difficoltà è un segno di profondità o solo... difficoltà?",
                                            "Preferiresti avere un amico facile e noioso o uno stimolante e interessante?",
                                            "Cosa rende qualcuno genuinamente interessante per te?",
                                            "C'è qualcosa di attraente nelle persone che non rendono la vita facile?"
                                  ]
                        },
                        {
                                  "text": "Perdoniamo le persone che amiamo per cose che non perdoneremmo mai agli estranei.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "È giusto o è un doppio standard?",
                                            "Riesci a pensare a un esempio della tua vita?",
                                            "Cosa dice questo sulla natura dell'amore?",
                                            "Dovremmo sottoporre le persone che amiamo a standard più alti o più bassi?",
                                            "C'è qualcosa che non perdoneresti mai, indipendentemente dalla relazione?"
                                  ]
                        },
                        {
                                  "text": "Le zone di comfort sono sopravvalutate — il disagio è dove avviene effettivamente la crescita.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Riesci a pensare a un momento in cui il disagio ha portato alla crescita?",
                                            "È sempre necessario essere a disagio per svilupparsi?",
                                            "C'è differenza tra disagio produttivo e pura sofferenza?",
                                            "Cerchi attivamente il disagio?",
                                            "Cos'è qualcosa che si trova appena fuori dalla tua zona di comfort in questo momento?"
                                  ]
                        },
                        {
                                  "text": "La rabbia è un'emozione sottovalutata — a volte permette di ottenere risultati.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Pensi di esprimere bene la rabbia?",
                                            "Riesci a pensare a un momento in cui la rabbia è stata produttiva?",
                                            "C'è differenza tra rabbia sana e rabbia distruttiva?",
                                            "Alcune persone sono troppo veloci a reprimere la propria rabbia?",
                                            "Cosa fai quando sei arrabbiato?"
                                  ]
                        },
                        {
                                  "text": "Gli animali domestici hanno sostituito la comunità per molte persone.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Pensi che la solitudine stia aumentando?",
                                            "Quale ruolo gioca un animale domestico nella vita emotiva di qualcuno?",
                                            "È triste o è solo un diverso tipo di connessione?",
                                            "Cosa ha sostituito la comunità tradizionale nella vita moderna?",
                                            "Ti senti parte di una comunità?"
                                  ]
                        },
                        {
                                  "text": "Viaggiare da soli è l'unico modo per scoprire veramente se stessi.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Hai mai viaggiato da solo?",
                                            "Puoi scoprire te stesso senza viaggiare?",
                                            "Cosa ti costringe a fare il viaggio in solitaria?",
                                            "Qual è la cosa più importante che hai imparato su di te attraverso un'esperienza?",
                                            "La scoperta di sé è un viaggio o una destinazione?"
                                  ]
                        },
                        {
                                  "text": "Un momento in cui hai dovuto ricominciare da capo non è mai completamente sprecato.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Hai dovuto ricominciare qualcosa dall'inizio?",
                                            "Cosa hai portato avanti dal primo tentativo?",
                                            "Ricominciare è un fallimento o una scelta?",
                                            "Qual è la cosa più difficile nel ricominciare?",
                                            "Pensi che gli insuccessi siano necessari?"
                                  ]
                        },
                        {
                                  "text": "L'ossessione per la produttività è solo capitalismo travestito da miglioramento personale.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Tieni traccia del tuo tempo o usi app per la produttività?",
                                            "Essere produttivi ti fa sentire bene?",
                                            "Da dove pensi che venga la pressione per essere produttivi?",
                                            "Il riposo è genuinamente parte di una vita produttiva o solo uno strumento di recupero?",
                                            "Riesci a pensare a qualcosa di prezioso che sia completamente improduttivo?"
                                  ]
                        },
                        {
                                  "text": "Ingegneria genetica: progresso o pericolo?",
                                  "level": "advanced",
                                  "hints": [
                                            "Quali sono i potenziali benefici per la medicina?",
                                            "Potrebbe portare a disuguaglianze sociali?",
                                            "È etico 'progettare' gli esseri umani?",
                                            "Chi dovrebbe regolare questa tecnologia?",
                                            "Rischiamo cambiamenti permanenti al patrimonio genetico?"
                                  ]
                        },
                        {
                                  "text": "Il reddito di base universale è l'unica soluzione all'automazione diffusa.",
                                  "level": "advanced",
                                  "hints": [
                                            "Come verrebbe finanziato l'UBI?",
                                            "Sconvolgerebbe la voglia di lavorare delle persone?",
                                            "Potrebbe ridurre la povertà e la disuguaglianza?",
                                            "Quali sono le alternative all'UBI?",
                                            "L'automazione è davvero una minaccia per tutti i lavori?"
                                  ]
                        },
                        {
                                  "text": "La felicità è una scelta: le circostanze sono solo scuse.",
                                  "level": "advanced",
                                  "hints": [
                                            "Pensi che la felicità sia sotto il controllo di tutti?",
                                            "È una visione privilegiata?",
                                            "Puoi scegliere come rispondere alle cattive circostanze?",
                                            "Conosci persone che sono felici nonostante vite difficili?",
                                            "La ricerca della felicità stessa è parte del problema?"
                                  ]
                        },
                        {
                                  "text": "Le persone che dicono di odiare i drammi di solito ne sono la fonte.",
                                  "level": "advanced",
                                  "hints": [
                                            "Conosci qualcuno così?",
                                            "Perché le persone che creano conflitti non si riconoscono in essi?",
                                            "Il dramma è sempre negativo?",
                                            "Qual è la differenza tra conflitto e dramma?",
                                            "La consapevolezza di sé è rara?"
                                  ]
                        },
                        {
                                  "text": "La noia è un segno di mancanza di immaginazione, non di stimoli.",
                                  "level": "advanced",
                                  "hints": [
                                            "Quando ti sei sentito sinceramente annoiato l'ultima volta?",
                                            "Pensi che abbiamo perso la capacità di annoiarci?",
                                            "Cosa succede nella tua mente quando ti annoi?",
                                            "La noia è scomoda perché temiamo ciò che potremmo pensare?",
                                            "Cosa ti ha mai portato a creare o scoprire la noia?"
                                  ]
                        },
                        {
                                  "text": "L'empatia senza confini è solo compiacenza con buone PR.",
                                  "level": "advanced",
                                  "hints": [
                                            "Ti consideri una persona empatica?",
                                            "L'empatia può essere recitata invece di essere provata?",
                                            "È possibile empatizzare troppo?",
                                            "Qual è la differenza tra empatia e perdersi nell'esperienza di qualcun altro?",
                                            "Hai mai dovuto proteggerti dal provare troppo?"
                                  ]
                        },
                        {
                                  "text": "Le opinioni più pericolose sono quelle che sembrano completamente ragionevoli.",
                                  "level": "advanced",
                                  "hints": [
                                            "Puoi pensare a un esempio di un'idea pericolosa che suona ragionevole?",
                                            "Come valuti un argomento che sembra giusto ma potrebbe non esserlo?",
                                            "È più difficile sfidare un'opinione sbagliata educata e ben argomentata o una palesemente estrema?",
                                            "Qual è il tuo test personale per capire se un'idea è degna di fiducia?",
                                            "Un'idea apparentemente ragionevole ti ha mai portato dove non ti aspettavi?"
                                  ]
                        },
                        {
                                  "text": "L'autenticità è diventata la performance più accuratamente curata di tutte.",
                                  "level": "advanced",
                                  "hints": [
                                            "Cosa significa per te essere autentici?",
                                            "Ti presenti diversamente online e offline?",
                                            "L'autenticità totale è possibile?",
                                            "Si può essere autentici e strategici allo stesso tempo?",
                                            "Quando ti senti più te stesso?"
                                  ]
                        },
                        {
                                  "text": "Il perdono è in definitiva qualcosa che fai per te stesso, non per l'altra persona.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hai mai perdonato qualcuno che non lo meritava, per il tuo bene?",
                                            "Qual è la differenza tra perdonare e dimenticare?",
                                            "Il perdono è sempre possibile?",
                                            "Perdonare qualcuno significa accettare quello che ha fatto?",
                                            "C'è qualcosa che trovi difficile perdonare?"
                                  ]
                        },
                        {
                                  "text": "Le istituzioni finiscono sempre per proteggere se stesse più delle persone che servono.",
                                  "level": "advanced",
                                  "hints": [
                                            "Puoi pensare a un'istituzione che ha deluso le persone che doveva servire?",
                                            "È inevitabile o le istituzioni possono essere riformate?",
                                            "Le istituzioni attirano persone che vogliono proteggerle?",
                                            "Come sarebbe un'istituzione genuinamente responsabile?",
                                            "È ingenuo aspettarsi che le istituzioni si autocorreggano?"
                                  ]
                        },
                        {
                                  "text": "Il desiderio di certezza è la radice della maggior parte delle crudeltà umane.",
                                  "level": "advanced",
                                  "hints": [
                                            "Pensi che l'incertezza sia difficile da tollerare?",
                                            "Puoi pensare a un caso in cui il bisogno di certezza ha portato a danni?",
                                            "Il dubbio è un punto di forza o di debolezza?",
                                            "Le persone con forti convinzioni rendono il mondo migliore o peggiore?",
                                            "Come gestisci il tuo bisogno di certezza?"
                                  ]
                        },
                        {
                                  "text": "I valori della maggior parte delle persone tengono solo quando non costa nulla averli.",
                                  "level": "advanced",
                                  "hints": [
                                            "I tuoi valori sono mai stati messi alla prova da un costo reale?",
                                            "Riesci a pensare a un momento in cui hai agito contro i tuoi valori dichiarati?",
                                            "È giusto giudicare le persone che falliscono i loro valori sotto pressione?",
                                            "Il divario tra valori e comportamento è un segno di ipocrisia o solo di umanità?",
                                            "Qual è un valore che pensi non comprometteresti?"
                                  ]
                        },
                        {
                                  "text": "Sapere quando smettere di parlare è più raro e prezioso che sapere cosa dire.",
                                  "level": "advanced",
                                  "hints": [
                                            "Pensi di ascoltare bene?",
                                            "Riesci a pensare a una situazione in cui il silenzio era la risposta giusta?",
                                            "Essere un buon oratore è sopravvalutato?",
                                            "Cosa noti nelle persone che ascoltano più di quanto parlino?",
                                            "Stare in silenzio è mai stata la cosa più potente che potessi fare?"
                                  ]
                        },
                        {
                                  "text": "Siamo più definiti da ciò che rifiutiamo di fare che da ciò che scegliamo di fare.",
                                  "level": "advanced",
                                  "hints": [
                                            "Cos'è qualcosa che non faresti, indipendentemente dalla ricompensa?",
                                            "Dire di no a qualcosa ti definisce?",
                                            "I tuoi confini riflettono i tuoi valori?",
                                            "Ciò che evitiamo è rivelatore quanto ciò che perseguiamo?",
                                            "Un rifiuto ti è mai costato qualcosa di significativo?"
                                  ]
                        },
                        {
                                  "text": "L'ossessione per la produttività è solo capitalismo travestito da auto-miglioramento.",
                                  "level": "advanced",
                                  "hints": [
                                            "Da dove pensi che venga la pressione per ottimizzare il tuo tempo?",
                                            "Il riposo è genuinamente parte di una vita produttiva o solo uno strumento di recupero?",
                                            "Ti giudichi in base a quanto riesci a fare?",
                                            "Riesci a pensare a qualcosa di profondamente prezioso che sia completamente improduttivo?",
                                            "Esiste una versione dell'ambizione che non riguardi il risultato finale?"
                                  ]
                        },
                        {
                                  "text": "La cultura della cancellazione è diventata una forma di giustizia sommaria digitale.",
                                  "level": "advanced",
                                  "hints": [
                                            "Puoi pensare a un caso in cui l'indignazione pubblica era giustificata?",
                                            "C'è differenza tra responsabilità e punizione?",
                                            "Chi decide cosa è imperdonabile?",
                                            "La cancellazione funziona: cambia davvero il comportamento?",
                                            "C'è qualcosa di irrimediabilmente problematico in essa o è solo imperfetta?"
                                  ]
                        },
                        {
                                  "text": "Le persone che sostengono di non avere rimpianti o non hanno vissuto abbastanza o non hanno riflettuto abbastanza.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hai rimpianti?",
                                            "Il 'nessun rimpianto' è una filosofia sana o un meccanismo di difesa?",
                                            "Cosa significherebbe vivere senza rimpianti?",
                                            "Il rimpianto può essere utile?",
                                            "C'è qualcosa che torneresti indietro a cambiare se potessi?"
                                  ]
                        },
                        {
                                  "text": "Il sé non è qualcosa che scopriamo — è qualcosa che inventiamo continuamente.",
                                  "level": "advanced",
                                  "hints": [
                                            "Questa idea ti sembra liberatoria o destabilizzante?",
                                            "Cosa significherebbero le tue scelte se l'identità fosse costruita?",
                                            "C'è qualcosa che senti come un 'te' fisso ed essenziale?",
                                            "Il sé che presenti agli altri modella il sé che diventi?",
                                            "Cosa succede all'identità in caso di perdita radicale?"
                                  ]
                        },
                        {
                                  "text": "La compassione che richiede una storia semplice non è vera compassione — è sentimentalismo.",
                                  "level": "advanced",
                                  "hints": [
                                            "Differenza tra compassione genuina e reazione emotiva?",
                                            "Un caso in cui una storia semplificata ha distorto la realtà?",
                                            "Il sentimentalismo ci fa sentire attivi quando non lo siamo?",
                                            "La semplificazione è necessaria per l'empatia?",
                                            "Costo del ridurre la sofferenza a un racconto digeribile?"
                                  ]
                        },
                        {
                                  "text": "Ogni ideologia, portata alla sua conclusione logica, diventa una forma di violenza.",
                                  "level": "advanced",
                                  "hints": [
                                            "Esiste un'ideologia che sfugge a questa logica?",
                                            "Motivo per rifiutare l'ideologia o portarla con leggerezza?",
                                            "Differenza tra posizione di principio e ideologia?",
                                            "Il pragmatismo evita questa trappola o la nasconde?",
                                            "Tutte le posizioni politiche sono ugualmente pericolose?"
                                  ]
                        },
                        {
                                  "text": "Il linguaggio non descrive la realtà — la costruisce.",
                                  "level": "advanced",
                                  "hints": [
                                            "Imparare un'altra lingua ti ha dato accesso a nuovi pensieri?",
                                            "Senti cose che nessuna lingua può nominare?",
                                            "La lingua in cui pensi influenza le tue emozioni?",
                                            "È possibile un concetto senza una parola?",
                                            "Un'idea può essere pienamente tradotta?"
                                  ]
                        },
                        {
                                  "text": "La cosa più sovversiva che una persona possa fare nel mondo moderno è essere sinceramente soddisfatta.",
                                  "level": "advanced",
                                  "hints": [
                                            "La contentezza è politica?",
                                            "L'economia richiede consumatori insoddisfatti?",
                                            "La contentezza genuina è possibile?",
                                            "Differenza tra contentezza e rassegnazione?",
                                            "Essere soddisfatti significa smettere di curarsi dell'ingiustizia?"
                                  ]
                        },
                        {
                                  "text": "La richiesta di equilibrio nel discorso pubblico spesso dà falsa legittimità a posizioni che non la meritano.",
                                  "level": "advanced",
                                  "hints": [
                                            "'Presentare entrambi i lati' è sempre giusto?",
                                            "Chi decide quali posizioni meritano una tribuna?",
                                            "Differenza tra equilibrio e falsa equivalenza?",
                                            "La neutralità giornalistica può coesistere con la verità?",
                                            "Costo del dare spazio in nome dell'equità?"
                                  ]
                        },
                        {
                                  "text": "L'onestà radicale, praticata senza saggezza, è solo crudeltà con buone intenzioni.",
                                  "level": "advanced",
                                  "hints": [
                                            "L'impulso di 'dire le cose come stanno' riguarda l'altro o il tuo sollievo?",
                                            "Momento in cui l'onestà radicale ha fatto danni?",
                                            "La gentilezza è a volte la scelta più coraggiosa?",
                                            "Confine tra onestà e crudeltà?",
                                            "La richiesta di onestà riflette intimità o controllo?"
                                  ]
                        },
                        {
                                  "text": "Il libero arbitrio è una finzione indispensabile piuttosto che una realtà significativa.",
                                  "level": "advanced",
                                  "hints": [
                                            "Importa che sia reale se dobbiamo agire come se lo fosse?",
                                            "Responsabilità morale senza libero arbitrio?",
                                            "Le neuroscienze risolvono la questione?",
                                            "La fede nel libero arbitrio è deterministica?",
                                            "Cosa dice il tuo intuito?"
                                  ]
                        },
                        {
                                  "text": "Internet non ci ha resi più informati — ci ha resi più sicuri dei nostri errori.",
                                  "level": "advanced",
                                  "hints": [
                                            "Credenza plasmata dagli algoritmi?",
                                            "Problema di Internet o della natura umana?",
                                            "Pratiche di protezione?",
                                            "L'esperienza ha ancora senso?",
                                            "Fiducia nella tua capacità di valutare le info?"
                                  ]
                        },
                        {
                                  "text": "L'arte che conforta ha meno valore dell'arte che disturba.",
                                  "level": "advanced",
                                  "hints": [
                                            "Arte che ha fatto entrambi contemporaneamente?",
                                            "Gerarchia dei valori o snobismo?",
                                            "A cosa attingi nel dolore — difficoltà o consolazione?",
                                            "L'arte disturbante cambia il comportamento?",
                                            "Scopo dell'arte: sfida, riflesso o trascendenza?"
                                  ]
                        },
                        {
                                  "text": "Il progresso morale è reale, ma l'idea che la storia si muova in una direzione è un mito.",
                                  "level": "advanced",
                                  "hints": [
                                            "Esempio di progresso morale autentico?",
                                            "Qualcosa in cui siamo regressi?",
                                            "Il progresso è un mito culturale?",
                                            "La moda morale viene scambiata per progresso?",
                                            "Prove che siamo migliori dei nostri antenati?"
                                  ]
                        },
                        {
                                  "text": "La ricerca della certezza è alla radice della maggior parte delle crudeltà umane.",
                                  "level": "advanced",
                                  "hints": [
                                            "Esempio in cui il bisogno di certezza ha causato danni?",
                                            "Il dubbio è una virtù morale?",
                                            "Le convinzioni incrollabili migliorano il mondo?",
                                            "Certezza non pericolosa?",
                                            "Avere fedi forti senza rigidità?"
                                  ]
                        },
                        {
                                  "text": "La memoria non è una registrazione di ciò che è accaduto — è una storia che continuiamo a riscrivere.",
                                  "level": "advanced",
                                  "hints": [
                                            "Ricordo contraddetto da un testimone?",
                                            "Modifichiamo i ricordi per la nostra immagine?",
                                            "Cosa significa per l'identità?",
                                            "Un ricordo riscritto può essere più vero dell'evento?",
                                            "Affidabilità del tuo ricordo più vivido?"
                                  ]
                        },
                        {
                                  "text": "Non c'è consumo etico sotto il tardo capitalismo — ed è un motivo per agire, non per arrendersi.",
                                  "level": "advanced",
                                  "hints": [
                                            "Le scelte individuali contano?",
                                            "La responsabilità personale è una mossa politica?",
                                            "Cambiamento sistemico vs azione individuale?",
                                            "Vivere eticamente in un sistema non etico?",
                                            "La consapevolezza cambia il tuo comportamento?"
                                  ]
                        },
                        {
                                  "text": "La vita esaminata vale la pena di essere vissuta — ma esaminarla troppo da vicino può renderla invivibile.",
                                  "level": "advanced",
                                  "hints": [
                                            "Quanto autoriflessione è troppa?",
                                            "L'introspezione come evitamento?",
                                            "Costo dell'esame continuo?",
                                            "Vivere bene senza auto-esame?",
                                            "Costo e guadagno della tua riflessione?"
                                  ]
                        },
                        {
                                  "text": "L'etica della colonizzazione di altri pianeti.",
                                  "level": "advanced",
                                  "hints": [
                                            "Diritto su altri mondi senza risolvere i nostri?",
                                            "Esportare i sistemi umani?",
                                            "Obblighi verso vita extraterrestre?",
                                            "Il 'Piano B' come distrazione?",
                                            "Proprietà delle risorse planetarie?"
                                  ]
                        },
                        {
                                  "text": "Il libero arbitrio esiste davvero o è un'illusione?",
                                  "level": "advanced",
                                  "hints": [
                                            "Se le azioni sono determinate, siamo responsabili?",
                                            "Sensazione di scelta come prova?",
                                            "Un computer può predire le tue decisioni?",
                                            "Differenza tra 'libertà da' e 'libertà per'?",
                                            "L'anima cambia l'equazione?"
                                  ]
                        }
              ],
              "battle": [
                        {
                                  "topic": "Uno stipendio alto vs un breve tragitto giornaliero: cosa conta di più in un lavoro?",
                                  "sideA": "Stipendio alto",
                                  "sideB": "Breve tragitto",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Aumentare la sicurezza finanziaria",
                                            "Permettersi prodotti di qualità superiore"
                                  ],
                                  "ideasB": [
                                            "Ridurre lo stress del viaggio quotidiano",
                                            "Più tempo per la vita personale"
                                  ]
                        },
                        {
                                  "topic": "Cambiare spesso lavoro vs restare nella stessa azienda: cosa è meglio per la tua carriera?",
                                  "sideA": "Cambiare lavoro",
                                  "sideB": "Restare",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Ottenere diverse esperienze lavorative",
                                            "Negoziare uno stipendio migliore"
                                  ],
                                  "ideasB": [
                                            "Costruire fiducia professionale a lungo termine",
                                            "Opportunità di promozione interna"
                                  ]
                        },
                        {
                                  "topic": "Lavorare straordinari vs uscire in orario ogni giorno: qual è l'abitudine migliore?",
                                  "sideA": "Straordinari",
                                  "sideB": "In orario",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Completare progetti urgenti più velocemente",
                                            "Dimostrare un forte impegno"
                                  ],
                                  "ideasB": [
                                            "Prevenire il burnout professionale",
                                            "Mantenere un sano equilibrio vita-lavoro"
                                  ]
                        },
                        {
                                  "topic": "Un capo severo vs un capo rilassato: con chi è meglio lavorare?",
                                  "sideA": "Capo severo",
                                  "sideB": "Capo rilassato",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Aspettative e regole chiare",
                                            "Standard professionali più elevati"
                                  ],
                                  "ideasB": [
                                            "Incoraggia il pensiero creativo",
                                            "Livelli inferiori di pressione sul posto di lavoro"
                                  ]
                        },
                        {
                                  "topic": "Lavorare in una grande azienda vs una piccola azienda: cosa è meglio?",
                                  "sideA": "Grande azienda",
                                  "sideB": "Piccola azienda",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Percorsi di carriera strutturati",
                                            "Migliori benefit per i dipendenti"
                                  ],
                                  "ideasB": [
                                            "Atmosfera amichevole e familiare",
                                            "Responsabilità più varie"
                                  ]
                        },
                        {
                                  "topic": "Ottenere una promozione vs avere più tempo libero: cosa sceglieresti?",
                                  "sideA": "Promozione",
                                  "sideB": "Tempo libero",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Crescita professionale e status",
                                            "Maggiore responsabilità finanziaria"
                                  ],
                                  "ideasB": [
                                            "Concentrarsi sulle attività familiari",
                                            "Sviluppare hobby personali"
                                  ]
                        },
                        {
                                  "topic": "Comprare casa vs affittare a vita: qual è la decisione finanziaria più intelligente?",
                                  "sideA": "Comprare",
                                  "sideB": "Affittare",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Investimento stabile a lungo termine",
                                            "Libertà di ristrutturare l'immobile"
                                  ],
                                  "ideasB": [
                                            "Maggiore flessibilità di movimento",
                                            "Nessuna responsabilità per le riparazioni"
                                  ]
                        },
                        {
                                  "topic": "Vivere in centro città vs vivere in periferia: cosa è meglio?",
                                  "sideA": "Centro città",
                                  "sideB": "Periferia",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Negozi raggiungibili a piedi",
                                            "Accesso a una vivace vita notturna"
                                  ],
                                  "ideasB": [
                                            "Ambiente più tranquillo e sicuro",
                                            "Più spazio per le famiglie"
                                  ]
                        },
                        {
                                  "topic": "Spendere soldi per esperienze vs per oggetti: cosa ti rende più felice?",
                                  "sideA": "Esperienze",
                                  "sideB": "Oggetti",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Creare ricordi duraturi",
                                            "Opportunità di crescita personale"
                                  ],
                                  "ideasB": [
                                            "Uso pratico quotidiano",
                                            "Valore fisico duraturo"
                                  ]
                        },
                        {
                                  "topic": "Cucinare ogni giorno vs preparare i pasti una volta a settimana: cosa è più pratico?",
                                  "sideA": "Cucinare ogni giorno",
                                  "sideB": "Meal prepping",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Usare ingredienti freschi ogni giorno",
                                            "Maggiore varietà nella dieta"
                                  ],
                                  "ideasB": [
                                            "Risparmiare tempo significativo",
                                            "Migliore organizzazione della cucina"
                                  ]
                        },
                        {
                                  "topic": "Avere una persona per le pulizie vs fare le pulizie da soli: qual è la scelta migliore?",
                                  "sideA": "Pulizie pro",
                                  "sideB": "Da soli",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Risparmiare tempo ed energia",
                                            "Qualità della pulizia professionale"
                                  ],
                                  "ideasB": [
                                            "Risparmiare denaro familiare",
                                            "Mantenere il controllo totale"
                                  ]
                        },
                        {
                                  "topic": "Vivere con un partner vs vivere da soli: cosa è meglio per gli adulti?",
                                  "sideA": "Con partner",
                                  "sideB": "Da soli",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Dividere i costi domestici",
                                            "Supporto emotivo costante"
                                  ],
                                  "ideasB": [
                                            "Totale indipendenza personale",
                                            "Pace e tranquillità"
                                  ]
                        },
                        {
                                  "topic": "Avere figli presto vs avere figli più tardi nella vita: cosa è meglio?",
                                  "sideA": "Presto",
                                  "sideB": "Più tardi",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Più energia per l'educazione",
                                            "Crescere insieme ai figli"
                                  ],
                                  "ideasB": [
                                            "Migliore stabilità finanziaria",
                                            "Più esperienza di vita da condividere"
                                  ]
                        },
                        {
                                  "topic": "Legami familiari stretti vs indipendenza dalla famiglia: cosa è più importante da adulti?",
                                  "sideA": "Legami stretti",
                                  "sideB": "Indipendenza",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Forte supporto emotivo",
                                            "Mantenere le tradizioni familiari"
                                  ],
                                  "ideasB": [
                                            "Libertà personale",
                                            "Prendere decisioni indipendenti"
                                  ]
                        },
                        {
                                  "topic": "Incontrare nuove persone vs mantenere le vecchie amicizie: cosa ha più valore?",
                                  "sideA": "Nuove persone",
                                  "sideB": "Vecchi amici",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Imparare nuove prospettive",
                                            "Espandere la rete professionale"
                                  ],
                                  "ideasB": [
                                            "Storia personale condivisa",
                                            "Livello di fiducia più elevato"
                                  ]
                        },
                        {
                                  "topic": "Socializzare dopo il lavoro vs tornare direttamente a casa: cosa è meglio per le relazioni lavorative?",
                                  "sideA": "Socializzare",
                                  "sideB": "Tornare a casa",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Migliorare la collaborazione del team",
                                            "Comunicazione informale rilassata"
                                  ],
                                  "ideasB": [
                                            "Recuperare energia mentale",
                                            "Tempo di qualità con la famiglia"
                                  ]
                        },
                        {
                                  "topic": "Andare in palestra vs fare esercizio all'aperto: cosa è meglio per gli adulti?",
                                  "sideA": "Palestra",
                                  "sideB": "All'aperto",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Accesso ad attrezzature moderne",
                                            "Lavorare con trainer professionisti"
                                  ],
                                  "ideasB": [
                                            "Godersi l'aria fresca",
                                            "Nessuna quota associativa mensile"
                                  ]
                        },
                        {
                                  "topic": "Dieta ferrea vs mangiare tutto con moderazione: cosa è più sano?",
                                  "sideA": "Dieta ferrea",
                                  "sideB": "Moderazione",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Ottenere risultati più veloci",
                                            "Sviluppare una forte disciplina"
                                  ],
                                  "ideasB": [
                                            "Equilibrio sostenibile a lungo termine",
                                            "Godersi diversi tipi di cibo"
                                  ]
                        },
                        {
                                  "topic": "Vedere il medico subito vs aspettare per vedere se si migliora: cosa è più saggio?",
                                  "sideA": "Subito",
                                  "sideB": "Aspettare",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Ricevere cure veloci",
                                            "Prevenire problemi seri"
                                  ],
                                  "ideasB": [
                                            "Permettere il recupero naturale",
                                            "Evitare medicine non necessarie"
                                  ]
                        },
                        {
                                  "topic": "Dormire otto ore vs dormire sei ore ma fare esercizio: cosa è meglio per l'energia?",
                                  "sideA": "8 ore",
                                  "sideB": "6 ore + sport",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Recupero fisico completo",
                                            "Migliore umore quotidiano"
                                  ],
                                  "ideasB": [
                                            "Maggiore forma fisica",
                                            "Mantenere il corpo attivo"
                                  ]
                        },
                        {
                                  "topic": "Ridurre lo stress attraverso lo sport vs attraverso il relax: cosa funziona meglio?",
                                  "sideA": "Sport",
                                  "sideB": "Relax",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Rilascio dello stress fisico",
                                            "Livelli di energia più elevati"
                                  ],
                                  "ideasB": [
                                            "Pace mentale",
                                            "Calmare la mente"
                                  ]
                        },
                        {
                                  "topic": "Smartphone vs conversazione faccia a faccia: cosa usiamo di più, ed è un problema?",
                                  "sideA": "Smartphone",
                                  "sideB": "Faccia a faccia",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Accesso globale istantaneo",
                                            "Rimanere costantemente connessi"
                                  ],
                                  "ideasB": [
                                            "Esprimere emozioni reali",
                                            "Migliore concentrazione personale"
                                  ]
                        },
                        {
                                  "topic": "Banking online vs andare in banca: cosa è meglio?",
                                  "sideA": "Online",
                                  "sideB": "Andare in banca",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Molto conveniente",
                                            "Disponibile 24/7"
                                  ],
                                  "ideasB": [
                                            "Consulenza esperta personale",
                                            "Sicurezza fisica"
                                  ]
                        },
                        {
                                  "topic": "Lavorare con la carta vs lavorare digitalmente: cosa è più efficiente?",
                                  "sideA": "Carta",
                                  "sideB": "Digitale",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Migliore concentrazione mentale",
                                            "Ridurre l'affaticamento degli occhi"
                                  ],
                                  "ideasB": [
                                            "Archiviazione digitale efficiente",
                                            "Ricerca rapida delle informazioni"
                                  ]
                        },
                        {
                                  "topic": "Social media per il networking vs incontrare persone di persona: cosa è più utile professionalmente?",
                                  "sideA": "Social media",
                                  "sideB": "Di persona",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Raggiungere un pubblico globale",
                                            "Contatto professionale rapido"
                                  ],
                                  "ideasB": [
                                            "Costruire una fiducia più forte",
                                            "Avere un impatto personale"
                                  ]
                        },
                        {
                                  "topic": "Viaggio organizzato vs viaggio indipendente: cosa è meglio per gli adulti?",
                                  "sideA": "Organizzato",
                                  "sideB": "Indipendente",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Ridurre lo stress della pianificazione",
                                            "Standard di sicurezza garantiti"
                                  ],
                                  "ideasB": [
                                            "Avventura autentica",
                                            "Esperienze locali uniche"
                                  ]
                        },
                        {
                                  "topic": "Soggiorno in città vs vacanza al mare: qual è il modo migliore per rilassarsi?",
                                  "sideA": "Città",
                                  "sideB": "Mare",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Interessanti visite culturali",
                                            "Provare il cibo locale"
                                  ],
                                  "ideasB": [
                                            "Rilassante brezza marina",
                                            "Completo relax fisico"
                                  ]
                        },
                        {
                                  "topic": "Una vacanza lunga all'anno vs diversi brevi soggiorni: cosa è meglio?",
                                  "sideA": "Una lunga",
                                  "sideB": "Diverse brevi",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Profondo riposo mentale",
                                            "Viaggiare in luoghi lontani"
                                  ],
                                  "ideasB": [
                                            "Pause regolari dal lavoro",
                                            "Visitare più destinazioni"
                                  ]
                        },
                        {
                                  "topic": "Viaggiare in coppia vs viaggiare da soli: cosa è più piacevole?",
                                  "sideA": "In coppia",
                                  "sideB": "Da soli",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Condividere ricordi speciali",
                                            "Minori costi condivisi"
                                  ],
                                  "ideasB": [
                                            "Scelta personale completa",
                                            "Incontrare più persone locali"
                                  ]
                        },
                        {
                                  "topic": "Raccontare ogni piccolo problema al partner vs tenere le cose per sé: cosa è più sano?",
                                  "sideA": "Raccontare tutto",
                                  "sideB": "Tenere per sé",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Piena onestà emotiva",
                                            "Ricevere supporto reciproco"
                                  ],
                                  "ideasB": [
                                            "Evitare drammi inutili",
                                            "Pace mentale interna"
                                  ]
                        },
                        {
                                  "topic": "Controllare il telefono appena svegli vs aspettare dopo colazione: quale è un'abitudine migliore?",
                                  "sideA": "Appena svegli",
                                  "sideB": "Dopo colazione",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Controllare le notizie urgenti",
                                            "Pianificare la giornata presto"
                                  ],
                                  "ideasB": [
                                            "Inizio tranquillo della giornata",
                                            "Praticare l'alimentazione consapevole"
                                  ]
                        },
                        {
                                  "topic": "Conoscere il nome dei vicini vs non conoscerli: qual è l'esperienza adulta più normale oggi?",
                                  "sideA": "Conoscerli",
                                  "sideB": "Non conoscerli",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Forte senso di comunità",
                                            "Aiuto reciproco e sicurezza"
                                  ],
                                  "ideasB": [
                                            "Mantenere la totale privacy",
                                            "Evitare i pettegolezzi locali"
                                  ]
                        },
                        {
                                  "topic": "Fare la spesa con una lista vs senza lista: quale tipo di persona vive meglio?",
                                  "sideA": "Con lista",
                                  "sideB": "Senza lista",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Stile di vita organizzato",
                                            "Risparmiare denaro mensile"
                                  ],
                                  "ideasB": [
                                            "Scelte spontanee",
                                            "Idee creative in cucina"
                                  ]
                        },
                        {
                                  "topic": "Dire al capo che sei malato vs andare al lavoro malato: quale è la scelta più coraggiosa?",
                                  "sideA": "Dirlo",
                                  "sideB": "Andare malato",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Proteggere i colleghi",
                                            "Assicurare un recupero più veloce"
                                  ],
                                  "ideasB": [
                                            "Mostrare impegno lavorativo",
                                            "Finire scadenze importanti"
                                  ]
                        },
                        {
                                  "topic": "Lavorare a tempo pieno vs lavorare a tempo parziale: cosa è meglio?",
                                  "sideA": "Tempo pieno",
                                  "sideB": "Tempo parziale",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Crescita professionale costante",
                                            "Migliore stabilità finanziaria"
                                  ],
                                  "ideasB": [
                                            "Migliore equilibrio di vita",
                                            "Più tempo per lo studio"
                                  ]
                        },
                        {
                                  "topic": "Lavorare in ufficio vs lavorare da casa: cosa è meglio?",
                                  "sideA": "Ufficio",
                                  "sideB": "Casa",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Contatto sociale importante",
                                            "Spazio di lavoro professionale"
                                  ],
                                  "ideasB": [
                                            "Nessun tempo di pendolarismo",
                                            "Orari di lavoro flessibili"
                                  ]
                        },
                        {
                                  "topic": "Un lavoro che ami vs un lavoro che paga bene: cosa è più importante?",
                                  "sideA": "Lavoro amato",
                                  "sideB": "Paga bene",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Passione professionale quotidiana",
                                            "Minori livelli di stress"
                                  ],
                                  "ideasB": [
                                            "Maggiore libertà finanziaria",
                                            "Qualità della vita superiore"
                                  ]
                        },
                        {
                                  "topic": "Lavorare con altre persone vs lavorare da soli: cosa è meglio?",
                                  "sideA": "Con altri",
                                  "sideB": "Da soli",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Ricevere supporto dal team",
                                            "Scambiare molteplici idee"
                                  ],
                                  "ideasB": [
                                            "Concentrazione mentale silenziosa",
                                            "Stile di lavoro indipendente"
                                  ]
                        },
                        {
                                  "topic": "Un tragitto breve vs un tragitto lungo: cosa è più accettabile?",
                                  "sideA": "Breve",
                                  "sideB": "Lungo",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Più tempo libero quotidiano",
                                            "Meno fatica nel viaggio"
                                  ],
                                  "ideasB": [
                                            "Alloggi suburbani più economici",
                                            "Tempo per i podcast"
                                  ]
                        },
                        {
                                  "topic": "Vivere da soli vs vivere con un partner: cosa è meglio?",
                                  "sideA": "Da soli",
                                  "sideB": "Partner",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Spazio personale privato",
                                            "Indipendenza totale"
                                  ],
                                  "ideasB": [
                                            "Vita quotidiana condivisa",
                                            "Supporto durante i problemi"
                                  ]
                        },
                        {
                                  "topic": "Grande città vs piccola città: qual è il posto migliore dove vivere da adulti?",
                                  "sideA": "Grande città",
                                  "sideB": "Piccola città",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Mercati del lavoro dinamici",
                                            "Intrattenimento infinito"
                                  ],
                                  "ideasB": [
                                            "Minori costi della vita",
                                            "Aria pulita e fresca"
                                  ]
                        },
                        {
                                  "topic": "Cucinare a casa vs mangiare fuori: cosa è meglio per la vita quotidiana?",
                                  "sideA": "A casa",
                                  "sideB": "Fuori",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Pasti molto più sani",
                                            "Ridurre i costi domestici"
                                  ],
                                  "ideasB": [
                                            "Nessuna pulizia della cucina",
                                            "Provare cibo professionale"
                                  ]
                        },
                        {
                                  "topic": "Avere figli vs non avere figli: quale vita è migliore?",
                                  "sideA": "Figli",
                                  "sideB": "Niente figli",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Creare un'eredità familiare",
                                            "Sperimentare amore e gioia"
                                  ],
                                  "ideasB": [
                                            "Totale libertà di viaggiare",
                                            "Intensa concentrazione sulla carriera"
                                  ]
                        },
                        {
                                  "topic": "Affittare un appartamento vs comprare una casa: cosa è meglio per i giovani adulti?",
                                  "sideA": "Affittare",
                                  "sideB": "Comprare",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Maggiore mobilità sociale",
                                            "Meno preoccupazioni finanziarie"
                                  ],
                                  "ideasB": [
                                            "Costruire il capitale immobiliare",
                                            "Spazio per un giardino"
                                  ]
                        },
                        {
                                  "topic": "Esercizio ogni giorno vs riposo: cosa è meglio per la tua salute?",
                                  "sideA": "Esercizio",
                                  "sideB": "Riposo",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Maggiore forma fisica",
                                            "Aumentare i livelli di energia"
                                  ],
                                  "ideasB": [
                                            "Essenziale recupero muscolare",
                                            "Supporto alla salute mentale"
                                  ]
                        },
                        {
                                  "topic": "Andare dal medico vs aspettare: cosa è meglio quando ti senti male?",
                                  "sideA": "Medico",
                                  "sideB": "Aspettare",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Ricevere consigli professionali",
                                            "Veloce recupero medico"
                                  ],
                                  "ideasB": [
                                            "Evitare cliniche affollate",
                                            "Supportare la guarigione naturale"
                                  ]
                        },
                        {
                                  "topic": "Dormire otto ore vs dormire meno: cosa è più realistico per gli adulti?",
                                  "sideA": "8 ore",
                                  "sideB": "Meno",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Massima concentrazione mentale",
                                            "Migliore umore quotidiano"
                                  ],
                                  "ideasB": [
                                            "Affrontare la realtà vita-lavoro",
                                            "Tempo per gli hobby serali"
                                  ]
                        },
                        {
                                  "topic": "Andare al lavoro a piedi vs prendere l'auto: cosa è meglio per la tua salute?",
                                  "sideA": "A piedi",
                                  "sideB": "Auto",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Movimento fisico attivo",
                                            "Nuovo inizio di giornata"
                                  ],
                                  "ideasB": [
                                            "Protezione dalle intemperie",
                                            "Risparmiare energia fisica"
                                  ]
                        },
                        {
                                  "topic": "Acquisti online vs acquisti in un negozio: cosa è meglio?",
                                  "sideA": "Online",
                                  "sideB": "Negozio",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Comodità dello shopping",
                                            "Trovare prezzi migliori"
                                  ],
                                  "ideasB": [
                                            "Provare i vestiti",
                                            "Supportare le attività locali"
                                  ]
                        },
                        {
                                  "topic": "Risparmiare per il futuro vs godersi i soldi ora: cosa è più saggio?",
                                  "sideA": "Risparmiare",
                                  "sideB": "Godersi ora",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Sicurezza finanziaria futura",
                                            "Investimento a lungo termine"
                                  ],
                                  "ideasB": [
                                            "Aumentare la felicità mentale",
                                            "Vivere appieno la vita"
                                  ]
                        },
                        {
                                  "topic": "Cose costose vs cose economiche: cosa ha il miglior valore?",
                                  "sideA": "Costose",
                                  "sideB": "Economiche",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Maggiore qualità del prodotto",
                                            "Maggiore durata"
                                  ],
                                  "ideasB": [
                                            "Basso rischio finanziario",
                                            "Risparmiare più denaro"
                                  ]
                        },
                        {
                                  "topic": "Comprare nuovo vs comprare di seconda mano: cosa è meglio?",
                                  "sideA": "Nuovo",
                                  "sideB": "Seconda mano",
                                  "level": "elementary",
                                  "ideasA": [
                                            "In condizioni perfette",
                                            "Garanzie sul prodotto"
                                  ],
                                  "ideasB": [
                                            "Scelta eco-compatibile",
                                            "Prezzi molto bassi"
                                  ]
                        },
                        {
                                  "topic": "Guardare la TV a casa vs uscire: qual è la serata migliore?",
                                  "sideA": "TV",
                                  "sideB": "Uscire",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Completo relax",
                                            "Costo finanziario zero"
                                  ],
                                  "ideasB": [
                                            "Contatto sociale",
                                            "Atmosfera vivace"
                                  ]
                        },
                        {
                                  "topic": "Vacanze in famiglia vs vacanze con amici: cosa è meglio?",
                                  "sideA": "Famiglia",
                                  "sideB": "Amici",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Profondo legame emotivo",
                                            "Aiuto finanziario extra"
                                  ],
                                  "ideasB": [
                                            "Condividere hobby simili",
                                            "Livelli di energia dinamici"
                                  ]
                        },
                        {
                                  "topic": "Rimanere nel proprio paese vs viaggiare all'estero: qual è la vacanza migliore?",
                                  "sideA": "Proprio paese",
                                  "sideB": "Estero",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Facilità di viaggio",
                                            "Supportare il turismo locale"
                                  ],
                                  "ideasB": [
                                            "Imparare culture straniere",
                                            "Praticare nuove lingue"
                                  ]
                        },
                        {
                                  "topic": "Sport vs lettura: qual è il miglior hobby per gli adulti?",
                                  "sideA": "Sport",
                                  "sideB": "Lettura",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Migliorare la salute fisica",
                                            "Costruire spirito di squadra"
                                  ],
                                  "ideasB": [
                                            "Stimolare la crescita mentale",
                                            "Profondo relax mentale"
                                  ]
                        },
                        {
                                  "topic": "Vedere spesso gli amici vs avere tempo da soli: cosa è più importante?",
                                  "sideA": "Amici",
                                  "sideB": "Da soli",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Supporto sociale vitale",
                                            "Risate condivise"
                                  ],
                                  "ideasB": [
                                            "Spazio per l'autoriflessione",
                                            "Totale pace mentale"
                                  ]
                        },
                        {
                                  "topic": "Rispondere alle email immediatamente vs lasciarle per dopo: cosa è più professionale?",
                                  "sideA": "Immediatamente",
                                  "sideB": "Dopo",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Alta efficienza lavorativa",
                                            "Aumentare l'affidabilità"
                                  ],
                                  "ideasB": [
                                            "Preparare risposte ponderate",
                                            "Mantenere una concentrazione profonda"
                                  ]
                        },
                        {
                                  "topic": "Lavare i piatti immediatamente vs lasciarli fino a domani: cosa è meglio?",
                                  "sideA": "Immediatamente",
                                  "sideB": "Domani",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Mantenere una cucina pulita",
                                            "Inizio di giornata sereno"
                                  ],
                                  "ideasB": [
                                            "Godersi il riposo serale",
                                            "Passare del tempo con la famiglia"
                                  ]
                        },
                        {
                                  "topic": "Essere sempre in anticipo vs sempre cinque minuti in ritardo: cosa è peggio al lavoro?",
                                  "sideA": "Anticipo",
                                  "sideB": "Ritardo",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Tempo di attesa sprecato",
                                            "Gap di produttività"
                                  ],
                                  "ideasB": [
                                            "Sembra poco professionale",
                                            "Perdere l'inizio delle riunioni"
                                  ]
                        },
                        {
                                  "topic": "Avere una scrivania molto organizzata vs una scrivania disordinata: quale persona è più produttiva?",
                                  "sideA": "Organizzata",
                                  "sideB": "Disordinata",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Trovare documenti velocemente",
                                            "Stato mentale chiaro"
                                  ],
                                  "ideasB": [
                                            "Incoraggia il caos creativo",
                                            "Accesso rapido agli strumenti"
                                  ]
                        },
                        {
                                  "topic": "Parlare di lavoro a cena vs niente chiacchiere di lavoro a cena: quale regola è migliore?",
                                  "sideA": "Parlare di lavoro",
                                  "sideB": "Niente lavoro",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Condividere problemi quotidiani",
                                            "Legame professionale"
                                  ],
                                  "ideasB": [
                                            "Disconnettersi completamente",
                                            "Tempo di relax di qualità"
                                  ]
                        },
                        {
                                  "topic": "Vivere in famiglia vs Da soli: cosa è meglio?",
                                  "sideA": "In famiglia",
                                  "sideB": "Da soli",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Compagnia costante",
                                            "Sistema di supporto domestico"
                                  ],
                                  "ideasB": [
                                            "Totale indipendenza",
                                            "Assoluta privacy"
                                  ]
                        },
                        {
                                  "topic": "Avere un fratello vs una sorella: cosa è meglio?",
                                  "sideA": "Fratello",
                                  "sideB": "Sorella",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Giocare a sport di squadra",
                                            "Senso di protezione"
                                  ],
                                  "ideasB": [
                                            "Fare discorsi profondi",
                                            "Condividere segreti"
                                  ]
                        },
                        {
                                  "topic": "Famiglia grande vs piccola: quale è più bella?",
                                  "sideA": "Grande",
                                  "sideB": "Piccola",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Casa vivace e affollata",
                                            "Molto divertimento sociale"
                                  ],
                                  "ideasB": [
                                            "Vita quotidiana tranquilla",
                                            "Legami emotivi più stretti"
                                  ]
                        },
                        {
                                  "topic": "Il più grande vs Il più piccolo: cosa è meglio?",
                                  "sideA": "Grande",
                                  "sideB": "Piccolo",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Sviluppare abilità di leadership",
                                            "Imparare la responsabilità"
                                  ],
                                  "ideasB": [
                                            "Ricevere attenzioni extra",
                                            "Regole più rilassate"
                                  ]
                        },
                        {
                                  "topic": "Scuola di mattina vs pomeriggio: cosa è meglio?",
                                  "sideA": "Mattina",
                                  "sideB": "Pomeriggio",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Tempo libero nel pomeriggio",
                                            "Mantenere una routine"
                                  ],
                                  "ideasB": [
                                            "Poter dormire tardi",
                                            "Inizio giornata tranquillo"
                                  ]
                        },
                        {
                                  "topic": "Lettura vs Matematica: quale è più divertente?",
                                  "sideA": "Lettura",
                                  "sideB": "Matematica",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Storie coinvolgenti",
                                            "Espandere il vocabolario"
                                  ],
                                  "ideasB": [
                                            "Risoluzione di problemi complessi",
                                            "Pensiero logico"
                                  ]
                        },
                        {
                                  "topic": "Scuola vs Casa: cosa è meglio?",
                                  "sideA": "Scuola",
                                  "sideB": "Casa",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Contatto sociale diretto",
                                            "Assistenza dell'insegnante"
                                  ],
                                  "ideasB": [
                                            "Setup confortevole",
                                            "Orari di apprendimento flessibili"
                                  ]
                        },
                        {
                                  "topic": "Compiti vs Niente compiti: cosa aiuta di più?",
                                  "sideA": "Compiti",
                                  "sideB": "Niente",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Rinforzare le lezioni quotidiane",
                                            "Costruire autodisciplina"
                                  ],
                                  "ideasB": [
                                            "Più tempo libero",
                                            "Periodo di riposo mentale"
                                  ]
                        },
                        {
                                  "topic": "Da soli vs In coppia: cosa è meglio?",
                                  "sideA": "Da soli",
                                  "sideB": "Coppia",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Profonda concentrazione individuale",
                                            "Studio indipendente"
                                  ],
                                  "ideasB": [
                                            "Condividere la conoscenza",
                                            "Divertimento collaborativo"
                                  ]
                        },
                        {
                                  "topic": "Carta vs Computer: cosa è meglio?",
                                  "sideA": "Carta",
                                  "sideB": "Computer",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Sensazione tattile della scrittura",
                                            "Migliorare la memoria"
                                  ],
                                  "ideasB": [
                                            "Velocità di digitazione",
                                            "Strumenti di ricerca digitale"
                                  ]
                        },
                        {
                                  "topic": "Colazione vs Cena: quale pasto è più importante?",
                                  "sideA": "Colazione",
                                  "sideB": "Cena",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Spinta di energia mattutina",
                                            "Costruire abitudini sane"
                                  ],
                                  "ideasB": [
                                            "Tempo di riunione familiare",
                                            "Pasto principale della giornata"
                                  ]
                        },
                        {
                                  "topic": "Cibo caldo vs freddo: cosa è meglio?",
                                  "sideA": "Caldo",
                                  "sideB": "Freddo",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Confortante in inverno",
                                            "Gusto cotto tradizionale"
                                  ],
                                  "ideasB": [
                                            "Fresco per l'estate",
                                            "Varietà di insalate"
                                  ]
                        },
                        {
                                  "topic": "Casa vs Ristorante: cosa è meglio?",
                                  "sideA": "Casa",
                                  "sideB": "Ristorante",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Controllare tutti gli ingredienti",
                                            "Minori costi del cibo"
                                  ],
                                  "ideasB": [
                                            "Chef professionisti",
                                            "Zero pulizia"
                                  ]
                        },
                        {
                                  "topic": "Dolce vs Salato: cosa è meglio?",
                                  "sideA": "Dolce",
                                  "sideB": "Salato",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Rilascio istantaneo di energia",
                                            "Deliziosi dolcetti"
                                  ],
                                  "ideasB": [
                                            "Alto valore nutrizionale",
                                            "Sentirsi sazi più a lungo"
                                  ]
                        },
                        {
                                  "topic": "Cucinare vs Comprare: cosa è più bello?",
                                  "sideA": "Cucinare",
                                  "sideB": "Comprare",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Processo creativo",
                                            "Scelte di ingredienti sani"
                                  ],
                                  "ideasB": [
                                            "Totale comodità",
                                            "Risparmiare tempo"
                                  ]
                        },
                        {
                                  "topic": "Svegliarsi presto vs tardi: cosa è meglio?",
                                  "sideA": "Presto",
                                  "sideB": "Tardi",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Ore più produttive",
                                            "Godersi un'alba tranquilla"
                                  ],
                                  "ideasB": [
                                            "Riposo fisico completo",
                                            "Alta energia notturna"
                                  ]
                        },
                        {
                                  "topic": "Mattina vs Sera: quale parte del giorno è più bella?",
                                  "sideA": "Mattina",
                                  "sideB": "Sera",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Atmosfera fresca",
                                            "Nuovo inizio quotidiano"
                                  ],
                                  "ideasB": [
                                            "Tempo sociale",
                                            "Relax completo"
                                  ]
                        },
                        {
                                  "topic": "Giorni feriali vs Fine settimana: cosa è meglio?",
                                  "sideA": "Feriali",
                                  "sideB": "Fine settimana",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Tempo di lavoro produttivo",
                                            "Struttura regolare"
                                  ],
                                  "ideasB": [
                                            "Totale libertà personale",
                                            "Tempo per gli hobby"
                                  ]
                        },
                        {
                                  "topic": "Estate vs Inverno: quale stagione è migliore?",
                                  "sideA": "Estate",
                                  "sideB": "Inverno",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Spiagge assolate",
                                            "Vita all'aperto"
                                  ],
                                  "ideasB": [
                                            "Attività sulla neve",
                                            "Atmosfera accogliente"
                                  ]
                        },
                        {
                                  "topic": "Andare a letto presto vs tardi: cosa è più salutare?",
                                  "sideA": "Presto",
                                  "sideB": "Tardi",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Ritmo naturale",
                                            "Umore migliorato"
                                  ],
                                  "ideasB": [
                                            "Creatività serale",
                                            "Tempo per i film"
                                  ]
                        },
                        {
                                  "topic": "Casa vs Appartamento: cosa è meglio?",
                                  "sideA": "Casa",
                                  "sideB": "Appartamento",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Area giardino privata",
                                            "Più spazio abitativo"
                                  ],
                                  "ideasB": [
                                            "Pulizia facile",
                                            "Posizione centrale"
                                  ]
                        },
                        {
                                  "topic": "Città vs Campagna: quale è un posto migliore dove vivere?",
                                  "sideA": "Città",
                                  "sideB": "Campagna",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Vita culturale vivace",
                                            "Ampi mercati del lavoro"
                                  ],
                                  "ideasB": [
                                            "Aria fresca e pulita",
                                            "Natura silenziosa"
                                  ]
                        },
                        {
                                  "topic": "Camera vs Soggiorno: cosa è meglio?",
                                  "sideA": "Camera",
                                  "sideB": "Soggiorno",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Privacy totale",
                                            "Rifugio per il sonno"
                                  ],
                                  "ideasB": [
                                            "Spazio familiare",
                                            "TV a grande schermo"
                                  ]
                        },
                        {
                                  "topic": "Giochi al chiuso vs all'aperto: quali sono più divertenti?",
                                  "sideA": "Chiuso",
                                  "sideB": "Aperto",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Divertimento con i giochi da tavolo",
                                            "Nessun problema meteo"
                                  ],
                                  "ideasB": [
                                            "Movimento attivo",
                                            "Benefici della luce solare"
                                  ]
                        },
                        {
                                  "topic": "TV vs Libro: cosa è meglio?",
                                  "sideA": "TV",
                                  "sideB": "Libro",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Ricche storie visive",
                                            "Facile relax"
                                  ],
                                  "ideasB": [
                                            "Profonda immaginazione",
                                            "Crescita del vocabolario"
                                  ]
                        },
                        {
                                  "topic": "Sport vs Videogioco: quale è più divertente?",
                                  "sideA": "Sport",
                                  "sideB": "Videogioco",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Forma fisica",
                                            "Esperienza di squadra sociale"
                                  ],
                                  "ideasB": [
                                            "Abilità strategiche",
                                            "Mondi digitali"
                                  ]
                        },
                        {
                                  "topic": "Disegno vs Canto: quale hobby è migliore?",
                                  "sideA": "Disegno",
                                  "sideB": "Canto",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Creatività visiva",
                                            "Tempo personale tranquillo"
                                  ],
                                  "ideasB": [
                                            "Rilascio emotivo",
                                            "Espressione musicale"
                                  ]
                        },
                        {
                                  "topic": "Giocare da soli vs con amici: quale è più divertente?",
                                  "sideA": "Soli",
                                  "sideB": "Amici",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Profonda concentrazione",
                                            "Piena indipendenza"
                                  ],
                                  "ideasB": [
                                            "Risate condivise",
                                            "Gioco collaborativo"
                                  ]
                        },
                        {
                                  "topic": "Nuoto vs Corsa: cosa è meglio?",
                                  "sideA": "Nuoto",
                                  "sideB": "Corsa",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Acqua rinfrescante",
                                            "Protegge le articolazioni"
                                  ],
                                  "ideasB": [
                                            "Facile da iniziare",
                                            "Viste all'aperto"
                                  ]
                        },
                        {
                                  "topic": "Musica vs Sport: quale è un hobby migliore?",
                                  "sideA": "Musica",
                                  "sideB": "Sport",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Pace emotiva",
                                            "Crescita culturale"
                                  ],
                                  "ideasB": [
                                            "Forma fisica",
                                            "Successo di squadra"
                                  ]
                        },
                        {
                                  "topic": "Animali da fattoria vs selvatici: quali sono più interessanti?",
                                  "sideA": "Fattoria",
                                  "sideB": "Selvatici",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Forniscono prodotti utili",
                                            "Animali domestici amichevoli"
                                  ],
                                  "ideasB": [
                                            "Biomi esotici",
                                            "Mistero naturale"
                                  ]
                        },
                        {
                                  "topic": "Pioggia vs Sole: cosa è meglio?",
                                  "sideA": "Pioggia",
                                  "sideB": "Sole",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Essenziale per le piante",
                                            "Atmosfera accogliente al chiuso"
                                  ],
                                  "ideasB": [
                                            "Tempo perfetto per la spiaggia",
                                            "Vitamina D"
                                  ]
                        },
                        {
                                  "topic": "Mare vs Montagna: quale è meglio per una vacanza?",
                                  "sideA": "Mare",
                                  "sideB": "Montagna",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Divertimento nel nuoto",
                                            "Onde rilassanti"
                                  ],
                                  "ideasB": [
                                            "Aria fresca e pulita",
                                            "Splendide viste sulle montagne"
                                  ]
                        },
                        {
                                  "topic": "Fiori vs Alberi: quali sono più belli?",
                                  "sideA": "Fiori",
                                  "sideB": "Alberi",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Colori vivaci",
                                            "Profumi dolci"
                                  ],
                                  "ideasB": [
                                            "Altezza maestosa",
                                            "Forniscono ossigeno"
                                  ]
                        },
                        {
                                  "topic": "Auto vs Autobus: cosa è meglio?",
                                  "sideA": "Auto",
                                  "sideB": "Autobus",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Viaggio privato",
                                            "Transito porta a porta"
                                  ],
                                  "ideasB": [
                                            "Costi inferiori",
                                            "Rispettoso dell'ambiente"
                                  ]
                        },
                        {
                                  "topic": "Camminare vs Bici: con cosa è meglio spostarsi?",
                                  "sideA": "Camminare",
                                  "sideB": "Bici",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Viaggio più semplice",
                                            "Grandi benefici per la salute"
                                  ],
                                  "ideasB": [
                                            "Velocità più elevata",
                                            "Raggio di viaggio più lungo"
                                  ]
                        },
                        {
                                  "topic": "Vacanze brevi vs lunghe: cosa è meglio?",
                                  "sideA": "Brevi",
                                  "sideB": "Lunghe",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Frequenti pause dal lavoro",
                                            "Budget inferiore"
                                  ],
                                  "ideasB": [
                                            "Reset mentale completo",
                                            "Immersione culturale"
                                  ]
                        },
                        {
                                  "topic": "Viaggiare soli vs in famiglia: quale è più divertente?",
                                  "sideA": "Soli",
                                  "sideB": "Famiglia",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Crescita personale",
                                            "Libertà totale"
                                  ],
                                  "ideasB": [
                                            "Gioia condivisa",
                                            "Supporto finanziario"
                                  ]
                        },
                        {
                                  "topic": "Acquisti online vs Acquisti di persona",
                                  "sideA": "Online",
                                  "sideB": "Di persona",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Comodità dello shopping",
                                            "Prezzi inferiori"
                                  ],
                                  "ideasB": [
                                            "Provare gli articoli",
                                            "Gratificazione istantanea"
                                  ]
                        },
                        {
                                  "topic": "Libri cartacei vs E-book",
                                  "sideA": "Carta",
                                  "sideB": "E-book",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Sensazione tradizionale",
                                            "Altamente collezionabile"
                                  ],
                                  "ideasB": [
                                            "Estrema portabilità",
                                            "Risparmio di spazio"
                                  ]
                        },
                        {
                                  "topic": "Studiare la mattina o studiare la sera: quando è meglio?",
                                  "sideA": "Mattina",
                                  "sideB": "Sera",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Stato cerebrale fresco",
                                            "Zero distrazioni quotidiane"
                                  ],
                                  "ideasB": [
                                            "Ambiente notturno tranquillo",
                                            "Ripassare il materiale quotidiano"
                                  ]
                        },
                        {
                                  "topic": "Insegnanti severi o insegnanti amichevoli: chi aiuta di più gli studenti?",
                                  "sideA": "Severi",
                                  "sideB": "Amichevoli",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Alta disciplina in classe",
                                            "Standard chiari"
                                  ],
                                  "ideasB": [
                                            "Motivazione degli studenti",
                                            "Porre domande aperte"
                                  ]
                        },
                        {
                                  "topic": "Imparare con un libro di testo o imparare con i video: cosa è più efficace?",
                                  "sideA": "Libro",
                                  "sideB": "Video",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Lezioni strutturate",
                                            "Esperienza di apprendimento tattile"
                                  ],
                                  "ideasB": [
                                            "Moderne basi visive",
                                            "Contenuto dinamico"
                                  ]
                        },
                        {
                                  "topic": "Lezioni brevi o lezioni lunghe: quali aiutano a imparare meglio?",
                                  "sideA": "Brevi",
                                  "sideB": "Lunghe",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Mantenere una migliore concentrazione",
                                            "Meno fatica mentale"
                                  ],
                                  "ideasB": [
                                            "Immersione profonda nel tema",
                                            "Tempo di studio dettagliato"
                                  ]
                        },
                        {
                                  "topic": "Progetti di gruppo o compiti individuali: cosa è meglio?",
                                  "sideA": "Gruppo",
                                  "sideB": "Individuale",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Migliorare la collaborazione",
                                            "Scambiare idee diverse"
                                  ],
                                  "ideasB": [
                                            "Sviluppare l'autosufficienza",
                                            "Focus di studio personale"
                                  ]
                        },
                        {
                                  "topic": "Uniforme scolastica o vestiti casual a scuola: cosa è meglio?",
                                  "sideA": "Uniforme",
                                  "sideB": "Casual",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Promuovere l'uguaglianza degli studenti",
                                            "Semplicità mattutina"
                                  ],
                                  "ideasB": [
                                            "Auto-espressione personale",
                                            "Comfort quotidiano"
                                  ]
                        },
                        {
                                  "topic": "Pasti cucinati in casa o fast food: cosa è meglio?",
                                  "sideA": "In casa",
                                  "sideB": "Fast food",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Scelte molto più sane",
                                            "Controllare ricette specifiche"
                                  ],
                                  "ideasB": [
                                            "Servizio istantaneo",
                                            "Grande comodità"
                                  ]
                        },
                        {
                                  "topic": "Tre pasti abbondanti o molti piccoli spuntini: cosa è più sano?",
                                  "sideA": "Grandi pasti",
                                  "sideB": "Spuntini",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Ritmo quotidiano coerente",
                                            "Soddisfazione dello stomaco pieno"
                                  ],
                                  "ideasB": [
                                            "Mantenere l'energia stabile",
                                            "Supportare il metabolismo"
                                  ]
                        },
                        {
                                  "topic": "Cibo vegetariano o carne: quale dieta è migliore?",
                                  "sideA": "Vegetariano",
                                  "sideB": "Carne",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Stile di vita eco-compatibile",
                                            "Digestione più leggera"
                                  ],
                                  "ideasB": [
                                            "Alti livelli proteici",
                                            "Gusto tradizionale"
                                  ]
                        },
                        {
                                  "topic": "Bere tè o bere caffè: cosa è meglio?",
                                  "sideA": "Tè",
                                  "sideB": "Caffè",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Effetto mentale calmante",
                                            "Erbe naturali sane"
                                  ],
                                  "ideasB": [
                                            "Spinta di energia istantanea",
                                            "Cultura sociale globale"
                                  ]
                        },
                        {
                                  "topic": "Mangiare da soli o mangiare con altri: cosa è meglio?",
                                  "sideA": "Da soli",
                                  "sideB": "Con altri",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Tempo personale tranquillo",
                                            "Praticare l'alimentazione consapevole"
                                  ],
                                  "ideasB": [
                                            "Legame sociale ed emotivo",
                                            "Condividere la gioia del cibo"
                                  ]
                        },
                        {
                                  "topic": "Praticare uno sport di squadra o uno sport individuale: cosa è meglio?",
                                  "sideA": "Sport di squadra",
                                  "sideB": "Sport individuale",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Cooperazione di gruppo",
                                            "Rete di supporto sociale"
                                  ],
                                  "ideasB": [
                                            "Obiettivi di performance personali",
                                            "Autosufficienza"
                                  ]
                        },
                        {
                                  "topic": "Passare il tempo libero al chiuso o all'aperto: cosa è meglio?",
                                  "sideA": "Al chiuso",
                                  "sideB": "All'aperto",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Comfort accogliente al chiuso",
                                            "Hobby digitali"
                                  ],
                                  "ideasB": [
                                            "Salute nella natura",
                                            "Movimento fisico attivo"
                                  ]
                        },
                        {
                                  "topic": "Cinema o teatro: quale è la migliore serata fuori?",
                                  "sideA": "Cinema",
                                  "sideB": "Teatro",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Grande schermo immersivo",
                                            "Moderni effetti sonori"
                                  ],
                                  "ideasB": [
                                            "Esperienza di recitazione dal vivo",
                                            "Tradizione culturale"
                                  ]
                        },
                        {
                                  "topic": "Ascoltare musica o suonare uno strumento: cosa è più piacevole?",
                                  "sideA": "Ascoltare",
                                  "sideB": "Suonare",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Gioia quotidiana senza sforzo",
                                            "Vasta varietà musicale"
                                  ],
                                  "ideasB": [
                                            "Intenso sviluppo delle abilità",
                                            "Rilascio emotivo creativo"
                                  ]
                        },
                        {
                                  "topic": "Videogiochi o giochi da tavolo: quali sono più divertenti?",
                                  "sideA": "Videogiochi",
                                  "sideB": "Giochi da tavolo",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Mondi immersivi profondi",
                                            "Connettersi con amici online"
                                  ],
                                  "ideasB": [
                                            "Divertimento faccia a faccia",
                                            "Pezzi di gioco tattili"
                                  ]
                        },
                        {
                                  "topic": "Fare shopping o restare a casa: quale è il modo migliore per trascorrere il fine settimana?",
                                  "sideA": "Shopping",
                                  "sideB": "Restare a casa",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Attività sociale nel weekend",
                                            "Scoprire nuovi articoli"
                                  ],
                                  "ideasB": [
                                            "Pieno relax mentale",
                                            "Recupero dell'energia fisica"
                                  ]
                        },
                        {
                                  "topic": "Cellulare o computer: quale è più utile nella vita quotidiana?",
                                  "sideA": "Cellulare",
                                  "sideB": "Computer",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Portabilità totale",
                                            "Avvisi mobili istantanei"
                                  ],
                                  "ideasB": [
                                            "Schermo di visualizzazione più grande",
                                            "Potenti strumenti di lavoro"
                                  ]
                        },
                        {
                                  "topic": "Inviare un messaggio o fare una telefonata: cosa è meglio?",
                                  "sideA": "Messaggio",
                                  "sideB": "Chiamata",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Comunicazione asincrona",
                                            "Più facile modificare il testo"
                                  ],
                                  "ideasB": [
                                            "Sentire l'emozione vocale",
                                            "Ottenere risultati diretti"
                                  ]
                        },
                        {
                                  "topic": "E-book o libro cartaceo: cosa è meglio leggere?",
                                  "sideA": "E-book",
                                  "sideB": "Libro cartaceo",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Risparmiare spazio significativo",
                                            "Dizionario integrato"
                                  ],
                                  "ideasB": [
                                            "Classica sensazione tattile",
                                            "Nessuna batteria necessaria"
                                  ]
                        },
                        {
                                  "topic": "Scattare foto con il telefono o con una fotocamera: cosa dà risultati migliori?",
                                  "sideA": "Telefono",
                                  "sideB": "Fotocamera",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Massima comodità",
                                            "Condivisione sociale diretta"
                                  ],
                                  "ideasB": [
                                            "Alta qualità ottica",
                                            "Controllo manuale professionale"
                                  ]
                        },
                        {
                                  "topic": "Vacanze al mare o vacanze in montagna: cosa è meglio?",
                                  "sideA": "Mare",
                                  "sideB": "Montagna",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Atmosfera costiera soleggiata",
                                            "Nuotare in acqua calda"
                                  ],
                                  "ideasB": [
                                            "Migliorare la salute con l'escursionismo",
                                            "Splendide viste panoramiche"
                                  ]
                        },
                        {
                                  "topic": "Viaggiare in treno o viaggiare in aereo: cosa è meglio?",
                                  "sideA": "Treno",
                                  "sideB": "Aereo",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Percorsi di viaggio panoramici",
                                            "Opzione eco-compatibile"
                                  ],
                                  "ideasB": [
                                            "Massima velocità di viaggio",
                                            "Viaggi a lunga distanza"
                                  ]
                        },
                        {
                                  "topic": "Visitare una città famosa o visitare un piccolo villaggio: cosa è più interessante?",
                                  "sideA": "Città",
                                  "sideB": "Villaggio",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Monumenti storici",
                                            "Vita culturale dinamica"
                                  ],
                                  "ideasB": [
                                            "Tradizioni locali",
                                            "Tranquillo fascino del villaggio"
                                  ]
                        },
                        {
                                  "topic": "Soggiornare in un hotel o presso una famiglia locale: cosa è meglio?",
                                  "sideA": "Hotel",
                                  "sideB": "Famiglia locale",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Privacy personale",
                                            "Servizio standardizzato"
                                  ],
                                  "ideasB": [
                                            "Profondo scambio culturale",
                                            "Migliore pratica della lingua"
                                  ]
                        },
                        {
                                  "topic": "Viaggiare all'estero o esplorare il proprio paese: cosa vale di più la pena?",
                                  "sideA": "Estero",
                                  "sideB": "Proprio paese",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Orizzonti globali",
                                            "Nuove lingue"
                                  ],
                                  "ideasB": [
                                            "Trovare gemme nascoste",
                                            "Pianificazione del viaggio più facile"
                                  ]
                        },
                        {
                                  "topic": "Avere molti amici o avere pochi amici stretti: cosa è meglio?",
                                  "sideA": "Molti amici",
                                  "sideB": "Amici stretti",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Ampia rete sociale",
                                            "Vari hobby di gruppo"
                                  ],
                                  "ideasB": [
                                            "Profonda lealtà",
                                            "Forte legame di fiducia"
                                  ]
                        },
                        {
                                  "topic": "Incontrare gli amici di persona o chattare online: cosa è più soddisfacente?",
                                  "sideA": "Di persona",
                                  "sideB": "Online",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Energia personale diretta",
                                            "Condividere cibo reale"
                                  ],
                                  "ideasB": [
                                            "Alta efficienza temporale",
                                            "Rimanere facilmente connessi"
                                  ]
                        },
                        {
                                  "topic": "Vivere con i genitori o in un appartamento per studenti: cosa è meglio per i giovani?",
                                  "sideA": "Genitori",
                                  "sideB": "Appartamento studenti",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Assistenza finanziaria",
                                            "Pasti cucinati in casa"
                                  ],
                                  "ideasB": [
                                            "Vita sociale vivace",
                                            "Costruire l'autosufficienza"
                                  ]
                        },
                        {
                                  "topic": "Festeggiare il compleanno a casa o uscire: cosa è più carino?",
                                  "sideA": "Casa",
                                  "sideB": "Uscire",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Tocco caldo personale",
                                            "Atmosfera domestica accogliente"
                                  ],
                                  "ideasB": [
                                            "Nessuna pulizia domestica",
                                            "Provare cibo professionale"
                                  ]
                        },
                        {
                                  "topic": "Risparmiare denaro o spendere denaro: cosa è più saggio?",
                                  "sideA": "Risparmiare",
                                  "sideB": "Spendere",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Pace mentale futura",
                                            "Pianificare grandi acquisti"
                                  ],
                                  "ideasB": [
                                            "Ricevere gioia istantanea",
                                            "Supportare la salute economica"
                                  ]
                        },
                        {
                                  "topic": "Lavorare part-time mentre si studia o concentrarsi solo sulla scuola: cosa è meglio?",
                                  "sideA": "Part-time",
                                  "sideB": "Solo scuola",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Indipendenza finanziaria",
                                            "Prima esperienza lavorativa"
                                  ],
                                  "ideasB": [
                                            "Eccellenza accademica",
                                            "Minore stress quotidiano"
                                  ]
                        },
                        {
                                  "topic": "Guadagnare molti soldi o avere tempo libero: cosa conta di più?",
                                  "sideA": "Soldi",
                                  "sideB": "Tempo libero",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Alta qualità della vita",
                                            "Risparmi costanti per la pensione"
                                  ],
                                  "ideasB": [
                                            "Proteggere la salute mentale",
                                            "Famiglia e hobby"
                                  ]
                        },
                        {
                                  "topic": "Vivere con i nonni vs non vivere con loro: cosa è più piacevole?",
                                  "sideA": "Con i nonni",
                                  "sideB": "Senza i nonni",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Condividere la saggezza generazionale",
                                            "Aiuto extra per i bambini"
                                  ],
                                  "ideasB": [
                                            "Maggiore privacy domestica",
                                            "Ambiente domestico tranquillo"
                                  ]
                        },
                        {
                                  "topic": "Cucina della mamma vs cucina del papà: quale è migliore?",
                                  "sideA": "Mamma",
                                  "sideB": "Papà",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Gusto tradizionale di famiglia",
                                            "Sapori confortanti"
                                  ],
                                  "ideasB": [
                                            "Nuove ricette innovative",
                                            "Speciali dolcetti del weekend"
                                  ]
                        },
                        {
                                  "topic": "Matematica vs arte: quale materia è più divertente?",
                                  "sideA": "Matematica",
                                  "sideB": "Arte",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Risoluzione di problemi complessi",
                                            "Focus sulla logica"
                                  ],
                                  "ideasB": [
                                            "Auto-espressione creativa",
                                            "Rilascio emotivo"
                                  ]
                        },
                        {
                                  "topic": "Scrivere su carta vs scrivere su un tablet: cosa è meglio?",
                                  "sideA": "Carta",
                                  "sideB": "Tablet",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Memoria fisica della scrittura",
                                            "Meglio per la salute degli occhi"
                                  ],
                                  "ideasB": [
                                            "Comodità di archiviazione",
                                            "Utile auto-correzione"
                                  ]
                        },
                        {
                                  "topic": "Pizza vs pasta: cosa è più buono?",
                                  "sideA": "Pizza",
                                  "sideB": "Pasta",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Divertente da condividere",
                                            "Enorme varietà di condimenti"
                                  ],
                                  "ideasB": [
                                            "Formati di pasta versatili",
                                            "Ricchi sughi deliziosi"
                                  ]
                        },
                        {
                                  "topic": "Gelato vs torta: quale è il dessert migliore?",
                                  "sideA": "Gelato",
                                  "sideB": "Torta",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Rinfrescante in estate",
                                            "Molti gusti intensi"
                                  ],
                                  "ideasB": [
                                            "Caldo comfort del dessert",
                                            "Sentimento di celebrazione"
                                  ]
                        },
                        {
                                  "topic": "Giorni brevi vs giorni lunghi: cosa è meglio?",
                                  "sideA": "Giorni brevi",
                                  "sideB": "Giorni lunghi",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Accoglienti notti serali",
                                            "Focus sulla vita al chiuso"
                                  ],
                                  "ideasB": [
                                            "Ricevere Vitamina D",
                                            "Più tempo all'aperto"
                                  ]
                        },
                        {
                                  "topic": "Giorno al parco vs giorno in spiaggia: cosa è meglio?",
                                  "sideA": "Parco",
                                  "sideB": "Spiaggia",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Godersi la natura locale",
                                            "Posti perfetti per il picnic"
                                  ],
                                  "ideasB": [
                                            "Rilassante brezza marina",
                                            "Intense attività con le onde"
                                  ]
                        },
                        {
                                  "topic": "Aereo vs treno: cosa è più divertente?",
                                  "sideA": "Aereo",
                                  "sideB": "Treno",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Volare sopra le nuvole",
                                            "Transito molto veloce"
                                  ],
                                  "ideasB": [
                                            "Godersi il paesaggio in movimento",
                                            "Spazio per camminare"
                                  ]
                        },
                        {
                                  "topic": "Doccia al mattino vs doccia alla sera: cosa è meglio?",
                                  "sideA": "Mattino",
                                  "sideB": "Sera",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Spinta di energia mentale",
                                            "Inizio quotidiano fresco"
                                  ],
                                  "ideasB": [
                                            "Relax completo",
                                            "Mantenere le lenzuola pulite"
                                  ]
                        },
                        {
                                  "topic": "Gatti che buttano giù le cose vs cani che masticano le scarpe: quale animale è più fastidioso?",
                                  "sideA": "Gatti",
                                  "sideB": "Cani",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Disordine di vetri rotti",
                                            "Monelleria giocosa"
                                  ],
                                  "ideasB": [
                                            "Danni alla proprietà",
                                            "Costose riparazioni di scarpe"
                                  ]
                        },
                        {
                                  "topic": "Mangiare la pizza con la forchetta vs con le mani: cosa è corretto?",
                                  "sideA": "Forchetta",
                                  "sideB": "Mani",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Etichetta formale a tavola",
                                            "Tenere le dita pulite"
                                  ],
                                  "ideasB": [
                                            "Divertimento diretto con il cibo",
                                            "Stile di alimentazione autentico"
                                  ]
                        },
                        {
                                  "topic": "Dormire con le calze vs senza calze: cosa è meglio?",
                                  "sideA": "Con le calze",
                                  "sideB": "Senza",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Migliorare la circolazione",
                                            "Tenere i piedi caldi"
                                  ],
                                  "ideasB": [
                                            "Raffreddamento naturale del corpo",
                                            "Sensazione naturale della pelle"
                                  ]
                        },
                        {
                                  "topic": "Castello di sabbia vs pupazzo di neve: cosa è più divertente da costruire?",
                                  "sideA": "Castello di sabbia",
                                  "sideB": "Pupazzo di neve",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Divertimento estivo in spiaggia",
                                            "Focus sul lavoro di dettaglio"
                                  ],
                                  "ideasB": [
                                            "Magia stagionale invernale",
                                            "Divertimento sociale collaborativo"
                                  ]
                        },
                        {
                                  "topic": "Molti esami vs pochissimi esami: cosa è più giusto?",
                                  "sideA": "Molti esami",
                                  "sideB": "Pochissimi esami",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Audit completo delle competenze",
                                            "Coerenza accademica"
                                  ],
                                  "ideasB": [
                                            "Intenso focus sui progetti",
                                            "Ridurre lo stress degli studenti"
                                  ]
                        },
                        {
                                  "topic": "Iniziare la scuola a 7 anni vs iniziare a 5 anni: cosa è meglio per i bambini?",
                                  "sideA": "A 7 anni",
                                  "sideB": "A 5 anni",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Focus sul gioco",
                                            "Tenere conto della maturità"
                                  ],
                                  "ideasB": [
                                            "Alfabetizzazione quotidiana precoce",
                                            "Inizio strutturato della vita"
                                  ]
                        },
                        {
                                  "topic": "Mangiare lentamente vs mangiare velocemente: cosa è meglio per te?",
                                  "sideA": "Lentamente",
                                  "sideB": "Velocemente",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Digestione molto migliore",
                                            "Chiari segnali di sazietà"
                                  ],
                                  "ideasB": [
                                            "Risparmiare tempo quotidiano",
                                            "Abitudini efficienti"
                                  ]
                        },
                        {
                                  "topic": "Cucinare a casa vs ordinare online: cosa è meglio?",
                                  "sideA": "Cucinare a casa",
                                  "sideB": "Ordinare online",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Controllo della qualità degli ingredienti",
                                            "Sviluppo delle abilità"
                                  ],
                                  "ideasB": [
                                            "Estrema facilità quotidiana",
                                            "Zero sforzo fisico"
                                  ]
                        },
                        {
                                  "topic": "Cucinare vs fare dolci: cosa è più divertente come hobby?",
                                  "sideA": "Cucinare",
                                  "sideB": "Pasticceria",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Utilità quotidiana essenziale",
                                            "Talento culinario creativo"
                                  ],
                                  "ideasB": [
                                            "Precisione scientifica",
                                            "Dolci ricompense"
                                  ]
                        },
                        {
                                  "topic": "Andare in palestra vs allenarsi all'aperto: cosa è meglio?",
                                  "sideA": "Palestra",
                                  "sideB": "All'aperto",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Attrezzatura standardizzata",
                                            "Clima controllato"
                                  ],
                                  "ideasB": [
                                            "Respirare aria fresca",
                                            "Terreno variabile"
                                  ]
                        },
                        {
                                  "topic": "Foto sul telefono vs foto stampate: cosa è meglio?",
                                  "sideA": "Sul telefono",
                                  "sideB": "Stampate",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Volume di archiviazione infinito",
                                            "Montaggio digitale rapido"
                                  ],
                                  "ideasB": [
                                            "Storia tattile",
                                            "Valore decorativo fisico"
                                  ]
                        },
                        {
                                  "topic": "Smart TV vs schermo del computer: cosa è meglio per guardare film?",
                                  "sideA": "Smart TV",
                                  "sideB": "Computer",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Grande vista immersiva",
                                            "Migliore qualità audio"
                                  ],
                                  "ideasB": [
                                            "Privacy personale",
                                            "Visione ravvicinata"
                                  ]
                        },
                        {
                                  "topic": "Paese caldo vs paese freddo: quale è la migliore destinazione per le vacanze?",
                                  "sideA": "Paese caldo",
                                  "sideB": "Paese freddo",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Relax in spiaggia",
                                            "Vibrazioni estive da gelato"
                                  ],
                                  "ideasB": [
                                            "Benefici per la salute dello sci",
                                            "Vedere l'aurora boreale"
                                  ]
                        },
                        {
                                  "topic": "Fare regali vs ricevere regali: cosa è meglio?",
                                  "sideA": "Fare regali",
                                  "sideB": "Ricevere regali",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Gioia personale altruistica",
                                            "Impatto sociale positivo"
                                  ],
                                  "ideasB": [
                                            "Sorpresa eccitante",
                                            "Sentirsi veramente apprezzati"
                                  ]
                        },
                        {
                                  "topic": "Lavorare al chiuso vs lavorare all'aperto: cosa è meglio?",
                                  "sideA": "Al chiuso",
                                  "sideB": "All'aperto",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Clima controllato",
                                            "Spazio di lavoro ergonomico"
                                  ],
                                  "ideasB": [
                                            "Migliorare la salute fisica",
                                            "Godersi panorami mutevoli"
                                  ]
                        },
                        {
                                  "topic": "Ananas sulla pizza vs niente ananas: cosa è corretto?",
                                  "sideA": "Ananas",
                                  "sideB": "Niente ananas",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Mix dolce-salato",
                                            "Vibrazioni di sapore tropicale"
                                  ],
                                  "ideasB": [
                                            "Seguire le regole tradizionali",
                                            "Evitare scontri di sapore"
                                  ]
                        },
                        {
                                  "topic": "Mettere prima il latte vs mettere prima il tè: cosa è meglio?",
                                  "sideA": "Prima il latte",
                                  "sideB": "Prima il tè",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Protegge le proteine del latte",
                                            "Temperatura iniziale più fresca"
                                  ],
                                  "ideasB": [
                                            "Migliore processo di infusione",
                                            "Gusto pieno e intenso"
                                  ]
                        },
                        {
                                  "topic": "Lunedì vs Venerdì: quale giorno è effettivamente peggiore?",
                                  "sideA": "Lunedì",
                                  "sideB": "Venerdì",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Inizio della settimana lavorativa",
                                            "Livelli di energia più bassi"
                                  ],
                                  "ideasB": [
                                            "Lunga attesa per il weekend",
                                            "Fatica di fine lavoro"
                                  ]
                        },
                        {
                                  "topic": "Svegliarsi cinque minuti prima della sveglia vs dormire fino alla sveglia: cosa è più fastidioso?",
                                  "sideA": "Prima della sveglia",
                                  "sideB": "Fino alla sveglia",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Riposo interrotto",
                                            "Terra di nessuno"
                                  ],
                                  "ideasB": [
                                            "Effetto shock",
                                            "Nessun tempo di preparazione"
                                  ]
                        },
                        {
                                  "topic": "Gatti vs cani: quale animale è segretamente il capo della casa?",
                                  "sideA": "Gatti",
                                  "sideB": "Cani",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Strategia mentale",
                                            "Tranquillo controllo domestico"
                                  ],
                                  "ideasB": [
                                            "Energia fisica",
                                            "Lealtà palese"
                                  ]
                        },
                        {
                                  "topic": "Avere troppo caldo vs avere troppo freddo: cosa è peggio?",
                                  "sideA": "Troppo caldo",
                                  "sideB": "Troppo freddo",
                                  "level": "elementary",
                                  "ideasA": [
                                            "Sudorazione e fatica",
                                            "Non riuscire a dormire bene"
                                  ],
                                  "ideasB": [
                                            "Dolore da brividi",
                                            "Abbigliamento invernale restrittivo"
                                  ]
                        },
                        {
                                  "topic": "Lavoro da remoto vs lavoro in ufficio: cosa è meglio per produttività e benessere?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Sicurezza del lavoro vs crescita professionale: cosa dovrebbero dare priorità gli adulti?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Avviare un'attività in proprio vs lavorare per un datore di lavoro: qual è la scelta migliore a 30 anni?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Ambizione vs equilibrio vita-lavoro: si possono davvero avere entrambi?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Networking vs sviluppo delle competenze: cosa fa avanzare di più la tua carriera?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Feedback onesto da un manager vs essere lasciati a lavorare indipendentemente: cosa motiva di più gli adulti?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Cambiare carriera a 40 anni vs restare nel proprio campo: qual è la decisione più saggia?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Estinguere anticipatamente il mutuo vs investire quei soldi: cosa è più intelligente?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Possedere una casa vs affittare permanentemente: cosa si adatta meglio alla vita adulta moderna?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Risparmiare presto per la pensione vs godersi i soldi a trent'anni: cosa è più saggio?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Vivere al di sotto delle proprie possibilità vs spendere per godersi la vita ora: quale approccio è più sano?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Due redditi in una famiglia vs un partner che resta a casa: cosa funziona meglio per le famiglie?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Avere figli vs scegliere di non averne: cosa rende la vita adulta più appagante?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Genitorialità severa vs genitorialità permissiva: cosa produce adulti più felici?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Relazione a lungo termine vs restare single: cosa è meglio per la crescita personale?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Mantenere vita lavorativa e privata separate vs integrarle: cosa è più sano?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Trasferirsi all'estero come coppia vs restare vicini alla famiglia: qual è la scelta giusta?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Dare priorità alla salute fisica vs salute mentale: su cosa dovrebbero concentrarsi prima gli adulti?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Sanità privata vs affidarsi al sistema pubblico: qual è la migliore strategia per un adulto?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Controlli medici regolari vs andarci solo quando si è malati: qual è l'approccio più intelligente?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Ridurre l'alcol vs ridurre lo stress: cosa ha un impatto maggiore sulla salute degli adulti?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Libertà individuale vs responsabilità comunitaria: cosa dovrebbe guidare le decisioni degli adulti?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Ottimismo sul futuro vs realismo: qual è l'atteggiamento più utile per gli adulti?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Cambiare il mondo vs costruirsi una vita personale stabile: quale è l'ambizione più onesta?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Dedicare il proprio tempo al volontariato vs donare denaro: cosa fa più bene?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Seguire i valori della propria generazione vs metterli in discussione: cosa è più ammirevole?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Sapere quanto guadagnano i colleghi vs non saperlo: cosa è meglio per l'armonia in ufficio?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Rispondere ai messaggi immediatamente vs prendersi il proprio tempo: cosa è più rispettoso nella vita adulta?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Ammettere di non avere idea di cosa sia un fondo pensione vs fingere di saperlo: quale è l'esperienza adulta più comune?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Annullare i piani all'ultimo minuto vs uscire quando non si ha voglia: quale è la peggiore abitudine adulta?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Parlare apertamente di soldi con gli amici vs mantenere la privacy: qual è l'approccio più maturo?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Lavoro da casa vs Lavoro in ufficio",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Auto elettriche vs Auto a benzina",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Apprendimento online o apprendimento in aula: cosa è più efficace?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Memorizzare fatti o imparare come trovare informazioni: quale abilità è più importante?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Istruzione universitaria o formazione professionale: quale è il percorso migliore?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Esami o valutazione continua: quale è il modo più giusto per valutare gli studenti?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Imparare una lingua straniera a scuola o vivere all'estero: cosa è più efficace?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Scuole maschili o femminili o scuole miste: quali sono migliori per gli studenti?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Social media o comunicazione faccia a faccia: cosa è meglio per restare in contatto?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Servizi di streaming o TV tradizionale: cosa è meglio?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Lavorare da casa o lavorare in ufficio: cosa è più produttivo?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Leggere le notizie online o leggere un giornale: cosa è più affidabile?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Passare il tempo sui social media o passare il tempo nella natura: cosa è meglio per la tua salute mentale?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Usare i trasporti pubblici o guidare l'auto: cosa è meglio per la società?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Comprare vestiti usati o comprare vestiti nuovi: quale è l'abitudine migliore?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Vivere in città o vivere in campagna: cosa si adatta meglio ai giovani?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Vegetarianismo o mangiare carne: cosa è meglio per il pianeta?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Cambiamenti nello stile di vita individuale o azione del governo: cosa fa di più per l'ambiente?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Un lavoro stabile o una carriera creativa: quale è la scelta di vita migliore?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Aprire la propria attività o lavorare per un'azienda: cosa è meglio?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Salario alto o soddisfazione sul lavoro: cosa conta di più al lavoro?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Lavorare molte ore o avere un equilibrio vita-lavoro: cosa porta a un maggiore successo?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Scegliere una carriera in base alla passione o in base alle prospettive di lavoro: cosa è più saggio?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Vivere come individuo o mettere al primo posto la comunità: cosa è più importante?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Valori tradizionali o valori moderni: quali sono più importanti da conservare?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Fare volontariato o donare soldi in beneficenza: cosa aiuta di più?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Fama o fare la differenza in silenzio: quale è l'obiettivo migliore nella vita?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Seguire le regole o pensare con la propria testa: cosa conta di più?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Salute fisica o salute mentale: quale dovrebbe essere la priorità?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Prevenzione o cura: quale è l'approccio migliore alla sanità?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Sport competitivo o esercizio fisico per divertimento: cosa è meglio per te?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Sanità privata o sanità pubblica: quale sistema è più equo?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Cinema o letteratura: quale è una forma d'arte più potente?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Arte moderna o arte classica: cosa è più prezioso?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Preservare i vecchi edifici o costruirne di nuovi: cosa conta di più?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Cultura locale o globalizzazione: cosa arricchisce di più le comunità?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Imparare dai propri errori vs imparare dai propri successi: cosa insegna di più?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Tablet in classe vs quaderni tradizionali: cosa aiuta di più gli studenti?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Essere sempre rintracciabili vs avere tempo libero digitale: cosa è meglio?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Riutilizzare le cose vs riciclare: cosa è più efficace?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Una sola carriera per tutta la vita vs cambiare spesso carriera: cosa è meglio?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Dormire vs fare esercizio: cosa ha un impatto maggiore sulla tua salute?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Musica pop vs musica classica: quale ha un impatto culturale maggiore?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Sapere come finisce qualcosa vs essere sorpresi: cosa è meglio?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Rispondere immediatamente ai messaggi vs prendersi il proprio tempo: cosa è più rispettoso?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Binge-watching vs guardare un episodio a settimana: quale è il modo giusto?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Posto finestrino vs posto corridoio: quale è oggettivamente migliore?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Saltare la palestra una volta vs andare e fare una brutta sessione: cosa è peggio?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "Parlare con se stessi vs parlare con il proprio animale: cosa è più ragionevole?",
                                  "sideA": "Option A",
                                  "sideB": "Option B",
                                  "level": "intermediate"
                        },
                        {
                                  "topic": "La settimana lavorativa di quattro giorni vs la settimana di cinque giorni: quale modello avvantaggia maggiormente lavoratori e datori di lavoro?",
                                  "sideA": "Settimana di 4 giorni",
                                  "sideB": "Settimana di 5 giorni",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Migliora il benessere dei dipendenti e riduce il burnout, portando a una maggiore produttività durante le ore lavorative.",
                                            "Permette un migliore equilibrio tra vita professionale e privata, il che può migliorare significativamente i tassi di fidelizzazione del personale."
                                  ],
                                  "ideasB": [
                                            "Potrebbe portare a un aumento dello stress se la stessa quantità di lavoro deve essere compressa in meno giorni.",
                                            "Potrebbe causare sfide operative per le aziende che devono essere disponibili per i clienti cinque o sette giorni alla settimana."
                                  ]
                        },
                        {
                                  "topic": "Reddito di base universale vs welfare mirato: quale è la rete di sicurezza più efficace per gli adulti che lavorano?",
                                  "sideA": "UBI",
                                  "sideB": "Welfare mirato",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Elimina la 'trappola della povertà' in cui gli individui perdono i sussidi non appena iniziano a guadagnare un reddito modesto.",
                                            "Riduce i costi amministrativi e gli ostacoli burocratici associati alla verifica dei mezzi."
                                  ],
                                  "ideasB": [
                                            "I sistemi mirati garantiscono che le limitate risorse pubbliche siano dirette verso coloro che ne hanno più bisogno.",
                                            "Un pagamento universale potrebbe essere proibitivamente costoso e potrebbe potenzialmente scoraggiare alcuni dal cercare lavoro."
                                  ]
                        },
                        {
                                  "topic": "La gig economy vs l'impiego a tempo indeterminato: quale modello serve meglio i lavoratori nel lungo periodo?",
                                  "sideA": "Gig economy",
                                  "sideB": "Tempo indeterminato",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Offre una flessibilità senza pari, permettendo agli individui di scegliere quando e dove lavorare.",
                                            "Offre l'opportunità di diversificare le proprie competenze lavorando su una varietà di progetti diversi contemporaneamente."
                                  ],
                                  "ideasB": [
                                            "I ruoli permanenti offrono vantaggi essenziali come ferie pagate, assicurazione sanitaria e contributi pensionistici.",
                                            "Fornisce un reddito stabile e prevedibile, fondamentale per la pianificazione finanziaria e la sicurezza a lungo termine."
                                  ]
                        },
                        {
                                  "topic": "Meritocrazia vs vantaggio strutturale: cosa spiega più accuratamente il successo professionale?",
                                  "sideA": "Meritocrazia",
                                  "sideB": "Vantaggio strutturale",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Il duro lavoro e il talento sono i principali motori del progresso in un mercato equo e competitivo.",
                                            "Concentrarsi sul merito incoraggia gli individui a migliorare costantemente le proprie competenze e a dare il meglio di sé."
                                  ],
                                  "ideasB": [
                                            "Fattori come il background socio-economico e il networking spesso giocano un ruolo decisivo nell'aprire le porte.",
                                            "Le disuguaglianze sistemiche possono impedire anche alle persone più talentuose di raggiungere il loro pieno potenziale."
                                  ]
                        },
                        {
                                  "topic": "Trasparenza retributiva vs privacy salariale: cosa crea un luogo di lavoro più equo?",
                                  "sideA": "Trasparenza",
                                  "sideB": "Privacy",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Aiuta a identificare e colmare i divari retributivi di genere e razziali rendendo visibili le discrepanze.",
                                            "Favorisce una cultura della fiducia e garantisce che la remunerazione si basi su criteri oggettivi piuttosto che sulle capacità di negoziazione."
                                  ],
                                  "ideasB": [
                                            "Rivelare gli stipendi può portare a risentimento e attriti tra colleghi, danneggiando potenzialmente il morale del team.",
                                            "Rispettare la privacy consente maggiore flessibilità nel premiare le prestazioni eccezionali senza causare controversie pubbliche."
                                  ]
                        },
                        {
                                  "topic": "Automazione vs lavoro umano: quale è la maggiore minaccia a lungo termine per l'occupazione adulta?",
                                  "sideA": "Automazione",
                                  "sideB": "Lavoro umano",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "L'IA e la robotica possono eseguire compiti ripetitivi in modo più efficiente e conveniente rispetto agli umani.",
                                            "I progressi tecnologici minacciano sempre più ruoli complessi che in precedenza si pensava fossero sicuri."
                                  ],
                                  "ideasB": [
                                            "I lavoratori umani possiedono qualità uniche come empatia, creatività e pensiero critico che le macchine non possono replicare.",
                                            "Le nuove tecnologie spesso creano settori e categorie lavorative completamente nuovi che richiedono la supervisione umana."
                                  ]
                        },
                        {
                                  "topic": "Lavoro a distanza vs presenza in ufficio: cosa è meglio per la progressione di carriera e la cultura del team?",
                                  "sideA": "Lavoro a distanza",
                                  "sideB": "Presenza in ufficio",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Eliminare il pendolarismo fa risparmiare tempo ed energia, permettendo ai dipendenti di essere più concentrati e produttivi.",
                                            "L'accesso a un pool di talenti globale permette alle aziende di assumere le persone migliori indipendentemente dalla loro posizione geografica."
                                  ],
                                  "ideasB": [
                                            "Le interazioni spontanee faccia a faccia portano spesso a una risoluzione dei problemi e a un'innovazione più creative.",
                                            "Essere fisicamente presenti rende più facile costruire un rapporto con i mentori e rimanere visibili al senior management."
                                  ]
                        },
                        {
                                  "topic": "Congedo parentale paritario per uomini e donne vs congedo di maternità più lungo: quale politica è più equa?",
                                  "sideA": "Congedo paritario",
                                  "sideB": "Maternità più lunga",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Incoraggia una divisione più equa delle responsabilità di cura dei figli fin dall'inizio.",
                                            "Riduce la 'penalità della maternità' garantendo che entrambi i genitori si assentino dal lavoro."
                                  ],
                                  "ideasB": [
                                            "Riconosce la realtà fisica del parto e l'importanza del recupero materno e dell'allattamento al seno.",
                                            "Il supporto mirato per le madri potrebbe essere più appropriato culturalmente e praticamente per molte famiglie."
                                  ]
                        },
                        {
                                  "topic": "Scegliere di non avere figli vs pressione sociale per avere una famiglia: cosa merita più rispetto?",
                                  "sideA": "Senza figli",
                                  "sideB": "Pressione familiare",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Gli individui dovrebbero avere l'autonomia di decidere come condurre la propria vita senza subire giudizi.",
                                            "Rinunciare alla genitorialità può essere una scelta responsabile date le preoccupazioni ambientali e i vincoli finanziari."
                                  ],
                                  "ideasB": [
                                            "Le unità familiari sono fondamentali per la stabilità e la continuazione della società e dei suoi valori culturali.",
                                            "Il desiderio di crescere una famiglia è un istinto umano profondamente radicato che dovrebbe essere sostenuto e celebrato."
                                  ]
                        },
                        {
                                  "topic": "Il matrimonio come istituzione vs la convivenza senza matrimonio: cosa è più rilevante oggi?",
                                  "sideA": "Matrimonio",
                                  "sideB": "Convivenza",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Fornisce un quadro legale e finanziario chiaro che protegge entrambi i partner e i loro figli.",
                                            "Rappresenta un impegno pubblico che può rafforzare il legame tra i partner e fornire stabilità sociale."
                                  ],
                                  "ideasB": [
                                            "Le relazioni moderne dovrebbero basarsi sulla fiducia reciproca e sull'impegno piuttosto che su un contratto legale.",
                                            "La convivenza offre maggiore flessibilità ed evita il processo costoso e complicato di un potenziale divorzio."
                                  ]
                        },
                        {
                                  "topic": "Famiglie a doppio reddito vs un partner che resta a casa: quale modello è migliore per bambini e adulti?",
                                  "sideA": "Doppio reddito",
                                  "sideB": "Partner a casa",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Fornisce maggiore sicurezza finanziaria e permette a entrambi i partner di perseguire le proprie ambizioni professionali.",
                                            "Dà un esempio positivo ai figli dimostrando l'uguaglianza di genere sia nel lavoro che nella vita domestica."
                                  ],
                                  "ideasB": [
                                            "Avere un genitore a casa garantisce un supporto emotivo e una supervisione costanti durante gli anni formativi del bambino.",
                                            "Riduce lo stress di bilanciare due carriere impegnative con la complessità della gestione domestica."
                                  ]
                        },
                        {
                                  "topic": "Il divario retributivo di genere come problema strutturale vs una questione di scelte individuali: quale spiegazione ha più peso?",
                                  "sideA": "Problema strutturale",
                                  "sideB": "Scelte individuali",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "I pregiudizi inconsci e le barriere sistemiche spesso impediscono alle donne di salire a ruoli di leadership ben retribuiti.",
                                            "La società tende a sottovalutare le professioni tradizionalmente dominate dalle donne, come la cura e l'istruzione."
                                  ],
                                  "ideasB": [
                                            "Le differenze di guadagno possono spesso essere attribuite a decisioni personali riguardanti l'orario di lavoro e le interruzioni di carriera.",
                                            "Le donne possono scegliere percorsi di carriera più flessibili o meno rischiosi che offrono naturalmente compensi diversi."
                                  ]
                        },
                        {
                                  "topic": "La proprietà della casa come obiettivo vs un mercato degli affitti professionale: quale modello abitativo si adatta meglio agli adulti moderni?",
                                  "sideA": "Proprietà",
                                  "sideB": "Affitto professionale",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Fornisce sicurezza finanziaria a lungo termine e un bene che può essere tramandato alle generazioni future.",
                                            "Permette agli individui di avere il controllo completo sul proprio ambiente di vita e di apportare miglioramenti permanenti."
                                  ],
                                  "ideasB": [
                                            "Un settore degli affitti professionale offre maggiore mobilità per coloro che devono spostarsi per lavoro o stile di vita.",
                                            "L'affitto elimina l'onere dei costi di manutenzione e i rischi finanziari associati alle fluttuazioni del mercato immobiliare."
                                  ]
                        },
                        {
                                  "topic": "La gentrificazione come miglioramento vs la gentrificazione come spostamento: quale inquadramento è più onesto?",
                                  "sideA": "Miglioramento",
                                  "sideB": "Spostamento",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Gli investimenti possono rivitalizzare aree trascurate, portando a infrastrutture migliori e strade più sicure.",
                                            "L'aumento del valore delle proprietà può stimolare l'economia locale e creare nuove opportunità commerciali per i residenti."
                                  ],
                                  "ideasB": [
                                            "L'aumento degli affitti spesso costringe i residenti di lunga data e le piccole imprese ad abbandonare le proprie comunità.",
                                            "La gentrificazione può cancellare la storia culturale e il tessuto sociale di un quartiere, rendendolo inaccessibile."
                                  ]
                        },
                        {
                                  "topic": "Densità urbana vs espansione suburbana: quale è il modello migliore per città vivibili?",
                                  "sideA": "Densità urbana",
                                  "sideB": "Espansione suburbana",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Le città compatte sono più sostenibili in quanto riducono la necessità di auto e supportano trasporti pubblici efficienti.",
                                            "Una maggiore densità favorisce comunità più vivaci con facile accesso a cultura, commercio e servizi essenziali."
                                  ],
                                  "ideasB": [
                                            "La vita suburbana offre più spazio, privacy e un ambiente più tranquillo per le famiglie per crescere i figli.",
                                            "Una densità inferiore può ridurre l'effetto 'isola di calore urbana' e fornire maggiore accesso agli spazi verdi."
                                  ]
                        },
                        {
                                  "topic": "Vivere vicino alla famiglia vs allontanarsi per opportunità: quale scelta produce un migliore benessere a lungo termine?",
                                  "sideA": "Vivere vicino",
                                  "sideB": "Allontanarsi",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "La vicinanza alla famiglia fornisce una rete di sicurezza emotiva cruciale e supporto pratico, specialmente per i genitori.",
                                            "Mantenere forti radici locali contribuisce a un senso di appartenenza e identità comunitaria."
                                  ],
                                  "ideasB": [
                                            "Il trasferimento può aprire prospettive di carriera significativamente migliori e un maggiore potenziale di guadagno.",
                                            "Vivere in modo indipendente in un nuovo ambiente favorisce la crescita personale, la resilienza e una prospettiva di vita più ampia."
                                  ]
                        },
                        {
                                  "topic": "Una popolazione che invecchia come crisi vs come risorsa: quale inquadramento è più produttivo?",
                                  "sideA": "Crisi",
                                  "sideB": "Risorsa",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "L'aumento dell'indice di dipendenza esercita un'immensa pressione sui sistemi sanitari e sui fondi pensione.",
                                            "Una forza lavoro in calo potrebbe portare alla stagnazione economica e a una mancanza di innovazione a lungo termine."
                                  ],
                                  "ideasB": [
                                            "Gli adulti più anziani possiedono un patrimonio di esperienza, saggezza e conoscenza istituzionale inestimabile per la società.",
                                            "La 'silver economy' crea nuovi mercati e opportunità di volontariato e tutoraggio intergenerazionale."
                                  ]
                        },
                        {
                                  "topic": "Responsabilità personale per la salute vs fattori sistemici: cosa ha più peso nello spiegare i risultati sanitari?",
                                  "sideA": "Responsabilità personale",
                                  "sideB": "Fattori sistemici",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Le scelte individuali riguardanti dieta, esercizio fisico e fumo sono le cause più dirette di molte malattie croniche.",
                                            "Dare alle persone il potere di farsi carico della propria salute può portare a risultati migliori e costi pubblici inferiori."
                                  ],
                                  "ideasB": [
                                            "Lo status socio-economico e l'accesso a cibo nutriente e conveniente sono spesso al di fuori del controllo diretto di un individuo.",
                                            "Fattori ambientali come l'inquinamento e le condizioni di lavoro hanno un impatto profondo sulla salute di una popolazione."
                                  ]
                        },
                        {
                                  "topic": "Giornate per la salute mentale come legittimo diritto sul posto di lavoro vs fonte di abusi: dove dovrebbero tracciare il limite i datori di lavoro?",
                                  "sideA": "Diritto legittimo",
                                  "sideB": "Fonte di abusi",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Riconoscere la salute mentale come altrettanto importante della salute fisica riduce lo stigma e previene il burnout a lungo termine.",
                                            "Supportare il benessere dei dipendenti porta a un morale più alto e a una migliore produttività a lungo termine."
                                  ],
                                  "ideasB": [
                                            "Senza linee guida chiare, alcuni dipendenti potrebbero usare i giorni di salute mentale per evitare scadenze o prendere ferie extra.",
                                            "Un'elevata frequenza di assenze non programmate può interrompere i flussi di lavoro e gravare ingiustamente sugli altri membri del team."
                                  ]
                        },
                        {
                                  "topic": "Medicina preventiva vs medicina curativa: quale dovrebbe ricevere più finanziamenti pubblici?",
                                  "sideA": "Preventiva",
                                  "sideB": "Curativa",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Investire in vaccini e iniziative per uno stile di vita sano può prevenire le malattie prima ancora che si manifestino.",
                                            "La prevenzione è molto più conveniente del trattamento di malattie avanzate, facendo risparmiare miliardi al sistema sanitario."
                                  ],
                                  "ideasB": [
                                            "L'etica sociale richiede di fornire la migliore assistenza possibile a coloro che attualmente soffrono di malattie.",
                                            "La medicina curativa è essenziale per gestire le emergenze e le condizioni croniche che non possono essere prevenute."
                                  ]
                        },
                        {
                                  "topic": "Medicina anti-invecchiamento vs invecchiare con grazia: quale atteggiamento è più coerente?",
                                  "sideA": "Anti-age",
                                  "sideB": "Invecchiare con grazia",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "I progressi scientifici dovrebbero essere usati per estendere la durata della vita umana e migliorare la qualità della vita negli anni successivi.",
                                            "Combattere i processi biologici dell'invecchiamento potrebbe alleviare l'enorme peso delle malattie legate all'età."
                                  ],
                                  "ideasB": [
                                            "L'invecchiamento è una parte naturale dell'esperienza umana che dovrebbe essere accettata e abbracciata con dignità.",
                                            "L'ossessione per la giovinezza può portare a procedure mediche non necessarie e alla mancata valorizzazione della saggezza dell'età."
                                  ]
                        },
                        {
                                  "topic": "Tecnologia di sorveglianza per la sicurezza pubblica vs diritto alla privacy: dove dovrebbe risiedere l'equilibrio?",
                                  "sideA": "Sicurezza pubblica",
                                  "sideB": "Privacy",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "L'uso diffuso di telecamere a circuito chiuso e del riconoscimento facciale può fungere da potente deterrente per criminalità e terrorismo.",
                                            "Il monitoraggio dei dati è essenziale per identificare le minacce e rispondere rapidamente alle emergenze in tempo reale."
                                  ],
                                  "ideasB": [
                                            "La sorveglianza di massa può portare a un 'effetto raggelante' in cui le persone hanno paura di esprimersi o protestare.",
                                            "Proteggere i dati personali è un diritto umano fondamentale che impedisce l'abuso di potere da parte di governi o aziende."
                                  ]
                        },
                        {
                                  "topic": "I social media come strumento di impegno civile vs come motore di polarizzazione: quale effetto domina?",
                                  "sideA": "Impegno civile",
                                  "sideB": "Polarizzazione",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Le piattaforme consentono la rapida diffusione delle informazioni e l'organizzazione di movimenti dal basso.",
                                            "Fornisce una voce ai gruppi emarginati che sono spesso trascurati dai media tradizionali."
                                  ],
                                  "ideasB": [
                                            "Gli algoritmi tendono a creare camere dell'eco che rafforzano i pregiudizi esistenti e l'ostilità verso le opinioni opposte.",
                                            "La diffusione di disinformazione e 'fake news' può minare i processi democratici e la coesione sociale."
                                  ]
                        },
                        {
                                  "topic": "L'IA nel reclutamento vs giudizio umano: cosa produce decisioni di assunzione più eque?",
                                  "sideA": "IA",
                                  "sideB": "Giudizio umano",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "L'IA può essere programmata per ignorare le informazioni demografiche, riducendo potenzialmente i pregiudizi e le discriminazioni umane.",
                                            "Gli algoritmi possono analizzare efficacemente vaste quantità di dati per trovare i candidati più qualificati per un ruolo."
                                  ],
                                  "ideasB": [
                                            "Gli algoritmi possono inavvertitamente apprendere e replicare i pregiudizi esistenti presenti nei dati storici su cui sono addestrati.",
                                            "I reclutatori umani possono valutare le 'soft skills', l'adattamento culturale e il potenziale in modi che il software non può attualmente eguagliare."
                                  ]
                        },
                        {
                                  "topic": "Il diritto all'oblio online vs il diritto all'informazione del pubblico: cosa dovrebbe avere la precedenza?",
                                  "sideA": "Diritto all'oblio",
                                  "sideB": "Diritto info",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Gli individui dovrebbero poter superare gli errori passati senza essere perseguitati per sempre online.",
                                            "La privacy personale dovrebbe includere il diritto di rimuovere informazioni obsolete o irrilevanti dai risultati di ricerca."
                                  ],
                                  "ideasB": [
                                            "Il pubblico ha un interesse legittimo ad accedere a documenti storici accurati, specialmente riguardanti figure pubbliche.",
                                            "Censurare i risultati di ricerca potrebbe portare a una visione distorta della verità e minare la libertà di stampa."
                                  ]
                        },
                        {
                                  "topic": "Voto obbligatorio vs voto volontario: cosa produce democrazie più sane?",
                                  "sideA": "Obbligatorio",
                                  "sideB": "Volontario",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Garantisce che il governo abbia un mandato chiaro da parte dell'intera popolazione, non solo di quella politicamente più attiva.",
                                            "Incoraggia i cittadini a rimanere informati sulle questioni politiche e a prendere seriamente le proprie responsabilità civiche."
                                  ],
                                  "ideasB": [
                                            "Il diritto di voto dovrebbe includere anche il diritto di scegliere di non partecipare se non ci si sente rappresentati.",
                                            "I sistemi volontari garantiscono che chi vota sia realmente impegnato e motivato dalle proprie convinzioni."
                                  ]
                        },
                        {
                                  "topic": "Impegno politico attraverso la protesta vs attraverso i canali istituzionali: cosa è più efficace per gli adulti di oggi?",
                                  "sideA": "Protesta",
                                  "sideB": "Istituzionale",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Le proteste possono portare questioni urgenti all'attenzione dell'opinione pubblica e forzare un'azione politica immediata.",
                                            "L'azione diretta fornisce alle persone un modo per esprimere la propria frustrazione quando i sistemi tradizionali sembrano non rispondere."
                                  ],
                                  "ideasB": [
                                            "Lavorare all'interno dei canali stabiliti porta a cambiamenti più sostenibili e legali.",
                                            "L'impegno istituzionale consente un dibattito sfumato e la complessa negoziazione necessaria per approvare una legislazione efficace."
                                  ]
                        },
                        {
                                  "topic": "Identità nazionale vs identità europea o globale: cosa è più significativo per gli adulti nel 2026?",
                                  "sideA": "Identità nazionale",
                                  "sideB": "Identità globale",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "La storia, la lingua e la cultura nazionali condivise forniscono un forte senso di appartenenza e solidarietà sociale.",
                                            "Le istituzioni nazionali forti sono spesso le più efficaci nel proteggere i diritti e il benessere dei propri cittadini."
                                  ],
                                  "ideasB": [
                                            "Le sfide globali richiedono un'identità unificata e una cooperazione internazionale.",
                                            "In un mondo interconnesso, molte persone si sentono più allineate con i valori universali che con i ristretti interessi nazionali."
                                  ]
                        },
                        {
                                  "topic": "Aumento delle tasse per finanziare i servizi pubblici vs tagli alla spesa: quale è la scelta politica più difendibile?",
                                  "sideA": "Aumento tasse",
                                  "sideB": "Tagli alla spesa",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Tasse più alte permettono la fornitura di istruzione e sanità di alta qualità a beneficio di tutti.",
                                            "L'investimento pubblico è necessario per mantenere le infrastrutture e sostenere i membri più vulnerabili della società."
                                  ],
                                  "ideasB": [
                                            "Abbassare le tasse può stimolare la crescita economica lasciando più soldi nelle mani di individui e imprese.",
                                            "I tagli alla spesa costringono i governi a essere più efficienti ed eliminare programmi dispendiosi o non necessari."
                                  ]
                        },
                        {
                                  "topic": "Ammettere di non avere idea di come funzioni la propria pensione vs fingere con sicurezza di saperlo: quale è l'esperienza adulta più universale?",
                                  "sideA": "Ammettere ignoranza",
                                  "sideB": "Fingere",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "I sistemi finanziari sono così complessi che ammettere confusione è la posizione più onesta per la maggior parte delle persone.",
                                            "L'onestà sulla propria alfabetizzazione finanziaria può portare a risultati migliori se incoraggia a cercare consulenza professionale."
                                  ],
                                  "ideasB": [
                                            "La pressione per apparire competenti porta spesso gli adulti a fingere conoscenza in materia finanziaria.",
                                            "Fingere di capire argomenti complessi è una comune strategia di sopravvivenza sociale in molti contesti professionali."
                                  ]
                        },
                        {
                                  "topic": "Essere la persona che pianifica sempre gli eventi sociali vs essere sempre quella che si limita a presentarsi: quale ruolo è più estenuante?",
                                  "sideA": "L'organizzatore",
                                  "sideB": "L'ospite",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Organizzare eventi richiede tempo ed energia mentale, oltre allo stress di gestire le aspettative di tutti.",
                                            "Chi pianifica sente spesso il peso della responsabilità per il successo di un evento e il divertimento dei partecipanti."
                                  ],
                                  "ideasB": [
                                            "Essere sempre un ospite può portare a una sensazione di mancanza di controllo e allo sforzo di adattarsi costantemente ai piani altrui.",
                                            "Socializzare può essere mentalmente faticoso anche per chi non ha la responsabilità aggiuntiva dell'organizzazione."
                                  ]
                        },
                        {
                                  "topic": "Avere una forte opinione sulle abitudini culinarie dei colleghi vs non importarsene affatto: quale persona è più tollerabile?",
                                  "sideA": "Opinione forte",
                                  "sideB": "Indifferenza",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Mantenere standard elevati di pulizia e rispetto negli spazi condivisi è essenziale per un ambiente di lavoro produttivo.",
                                            "Chi si preoccupa delle abitudini condivise spesso tutela la salute e il comfort dell'intero team."
                                  ],
                                  "ideasB": [
                                            "Un atteggiamento rilassato previene conflitti non necessari e favorisce un luogo di lavoro più tollerante e meno stressante.",
                                            "Concentrarsi sul lavoro piuttosto che sulle banali abitudini domestiche rende il collega più professionale."
                                  ]
                        },
                        {
                                  "topic": "Partecipare a ogni evento sociale facoltativo di lavoro vs non partecipare mai a nessuno: quale strategia è migliore per la carriera e la salute mentale?",
                                  "sideA": "Tutti",
                                  "sideB": "Nessuno",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Socializzare con i colleghi fuori dall'orario di lavoro può costruire relazioni forti e aprire opportunità di networking.",
                                            "Mostrare impegno verso la vita sociale del team può rendere un individuo più socievole e integrato."
                                  ],
                                  "ideasB": [
                                            "Stabilire confini chiari tra lavoro e vita privata è essenziale per mantenere la salute mentale a lungo termine.",
                                            "La salute mentale è meglio preservata trascorrendo tempo di qualità con famiglia e amici piuttosto che sentirsi obbligati a eventi di lavoro."
                                  ]
                        },
                        {
                                  "topic": "Adulti che sono ancora confusi dalla loro dichiarazione dei redditi vs adulti che si divertono a farla: quale gruppo è più affidabile?",
                                  "sideA": "Confusi",
                                  "sideB": "Divertiti",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Le persone confuse sono spesso più oneste riguardo alle frustrazioni del navigare nei sistemi burocratici.",
                                            "Ammettere difficoltà con compiti complessi è un segno di autenticità piuttosto che cercare di proiettare un'immagine perfetta."
                                  ],
                                  "ideasB": [
                                            "Provare piacere in compiti meticolosi suggerisce un alto livello di competenza, attenzione ai dettagli e affidabilità.",
                                            "Chi ama l'organizzazione e la conformità è probabilmente responsabile e affidabile anche in altre aree della vita."
                                  ]
                        },
                        {
                                  "topic": "Lamentarsi del costo della vita con gli amici vs fingere che tutto vada bene: quale è la risposta adulta più onesta?",
                                  "sideA": "Lamentarsi",
                                  "sideB": "Fingere tutto bene",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Condividere le difficoltà finanziarie crea un senso di solidarietà e permette agli amici di sostenersi a vicenda.",
                                            "Discutere apertamente delle sfide economiche è un riflesso più accurato della realtà attuale per molte persone."
                                  ],
                                  "ideasB": [
                                            "Mantenere una prospettiva positiva può essere un modo per gestire lo stress e non far dominare le preoccupazioni finanziarie.",
                                            "Alcuni preferiscono mantenere privata la propria situazione finanziaria per mantenere la dignità ed evitare di gravare sugli altri."
                                  ]
                        },
                        {
                                  "topic": "Social media vs interazioni faccia a faccia: cosa è meglio per costruire relazioni?",
                                  "sideA": "Social media",
                                  "sideB": "Faccia a faccia",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Permette una comunicazione costante e la possibilità di mantenere collegamenti a grandi distanze.",
                                            "Fornisce una piattaforma per trovare e connettersi con comunità di persone che condividono interessi di nicchia."
                                  ],
                                  "ideasB": [
                                            "La presenza fisica e gli indizi non verbali sono essenziali per costruire una fiducia profonda e un'intimità emotiva.",
                                            "Le interazioni di persona hanno meno probabilità di essere interpretate male e favoriscono connessioni più significative."
                                  ]
                        },
                        {
                                  "topic": "Vita urbana vs vita rurale: quale offre una migliore qualità della vita?",
                                  "sideA": "Urbana",
                                  "sideB": "Rurale",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Le città offrono una ricchezza di opportunità culturali, educative e professionali non disponibili nelle aree rurali.",
                                            "Il trasporto pubblico e i servizi concentrati rendono la vita urbana più comoda e diversificata."
                                  ],
                                  "ideasB": [
                                            "Le aree rurali offrono un ambiente tranquillo con meno inquinamento, più spazio e un legame più forte con la natura.",
                                            "Un ritmo di vita più lento e comunità più piccole possono portare a meno stress e legami sociali più significativi."
                                  ]
                        },
                        {
                                  "topic": "Apprendimento online vs aula tradizionale: quale è il futuro dell'istruzione?",
                                  "sideA": "Online",
                                  "sideB": "Aula",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Fornisce flessibilità agli studenti per imparare al proprio ritmo e bilanciare l'istruzione con altri impegni.",
                                            "Gli strumenti tecnologici possono offrire esperienze di apprendimento personalizzate e accesso a risorse globali."
                                  ],
                                  "ideasB": [
                                            "L'interazione faccia a faccia con insegnanti e compagni è cruciale per sviluppare abilità sociali e capacità collaborative.",
                                            "Un'aula fisica fornisce un ambiente strutturato che può favorire la concentrazione e la disciplina."
                                  ]
                        },
                        {
                                  "topic": "Energia rinnovabile vs energia nucleare: quale è la soluzione migliore per il clima?",
                                  "sideA": "Rinnovabile",
                                  "sideB": "Nucleare",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "L'energia solare ed eolica sono sempre più convenienti e non producono scorie radioattive.",
                                            "Investire nelle rinnovabili incoraggia la produzione di energia decentralizzata e promuove l'innovazione tecnologica."
                                  ],
                                  "ideasB": [
                                            "L'energia nucleare fornisce un 'carico di base' costante e affidabile non dipendente dalle condizioni meteorologiche.",
                                            "La moderna tecnologia nucleare genera enormi quantità di elettricità con emissioni di carbonio estremamente basse."
                                  ]
                        },
                        {
                                  "topic": "Fast fashion vs abbigliamento sostenibile: possiamo permetterci di essere etici?",
                                  "sideA": "Fast fashion",
                                  "sideB": "Sostenibile",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Fornisce abbigliamento accessibile per chi ha un reddito basso, rendendo la moda più democratica.",
                                            "L'industria della fast fashion crea milioni di posti di lavoro nei paesi in via di sviluppo e contribuisce al commercio globale."
                                  ],
                                  "ideasB": [
                                            "L'abbigliamento sostenibile è di qualità superiore e dura più a lungo, il che è più economico ed ecologico a lungo termine.",
                                            "Sostenere marchi etici aiuta a combattere lo sfruttamento dei lavoratori e i massicci danni ambientali causati dall'industria."
                                  ]
                        },
                        {
                                  "topic": "Specializzarsi presto vs un'istruzione generale ampia: cosa prepara meglio gli studenti alla vita?",
                                  "sideA": "Specializzazione",
                                  "sideB": "Istruzione ampia",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Sviluppare una profonda competenza in un campo specifico può portare a un percorso di carriera più mirato.",
                                            "La specializzazione precoce permette di padroneggiare abilità complesse molto apprezzate nel mercato del lavoro moderno."
                                  ],
                                  "ideasB": [
                                            "Un'istruzione ampia favorisce il pensiero critico tra diverse discipline e prepara a un futuro imprevedibile.",
                                            "Imparare una varietà di materie aiuta a scoprire le proprie passioni e a diventare cittadini più completi."
                                  ]
                        },
                        {
                                  "topic": "Capacità di pensiero critico vs conoscenza della materia: a cosa dovrebbero dare priorità le scuole?",
                                  "sideA": "Pensiero critico",
                                  "sideB": "Conoscenza della materia",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Insegnare ad analizzare, valutare e sintetizzare le informazioni è più importante che memorizzare fatti.",
                                            "Il pensiero critico è un'abilità trasferibile essenziale per la risoluzione dei problemi in qualsiasi contesto."
                                  ],
                                  "ideasB": [
                                            "Una solida base di conoscenze specifiche è necessaria prima di poter iniziare a pensare criticamente a un argomento.",
                                            "La conoscenza approfondita fornisce il contesto e le prove richieste per un'analisi significativa e accurata."
                                  ]
                        },
                        {
                                  "topic": "Tasse universitarie vs università gratuita: quale modello è più equo?",
                                  "sideA": "Tasse universitarie",
                                  "sideB": "Università gratuita",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Le tasse possono garantire che le università siano ben finanziate e incentivare gli studenti a studiare seriamente.",
                                            "Un sistema di tasse assicura che chi beneficia maggiormente di una laurea contribuisca al costo della propria istruzione."
                                  ],
                                  "ideasB": [
                                            "L'istruzione superiore dovrebbe essere un diritto fondamentale accessibile a tutti, indipendentemente dal reddito.",
                                            "L'università gratuita impedisce agli studenti di laurearsi con debiti enormi e incoraggia la mobilità sociale."
                                  ]
                        },
                        {
                                  "topic": "Test standardizzati vs valutazione del portfolio: cosa riflette più accuratamente le capacità?",
                                  "sideA": "Test standardizzati",
                                  "sideB": "Valutazione portfolio",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Fornisce un modo oggettivo e coerente per confrontare le prestazioni degli studenti tra diverse scuole.",
                                            "I test a tempo preparano gli studenti agli ambienti ad alta pressione che potrebbero affrontare nelle loro carriere."
                                  ],
                                  "ideasB": [
                                            "I portfolio mostrano i progressi e i risultati in un lungo periodo, fornendo una visione più completa delle abilità.",
                                            "Una varietà di campioni di lavoro permette di valutare creatività, persistenza e applicazione pratica."
                                  ]
                        },
                        {
                                  "topic": "Intelligenza accademica vs intelligenza emotiva: cosa conta di più per il successo?",
                                  "sideA": "Intelligenza accademica",
                                  "sideB": "Intelligenza emotiva",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "L'elevata capacità cognitiva e l'esperienza tecnica sono spesso i requisiti primari per professioni impegnative.",
                                            "Il successo accademico è un indicatore di disciplina, potere analitico e capacità di padroneggiare informazioni complesse."
                                  ],
                                  "ideasB": [
                                            "La capacità di gestire le emozioni e costruire relazioni è fondamentale per la leadership e il lavoro di squadra.",
                                            "L'intelligenza emotiva aiuta a navigare nelle complessità sociali e ad adattarsi alle sfide del mondo moderno."
                                  ]
                        },
                        {
                                  "topic": "Insegnare la creatività vs insegnare la disciplina: quale dovrebbe essere il focus dell'istruzione moderna?",
                                  "sideA": "Creatività",
                                  "sideB": "Disciplina",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Incentivare la creatività è essenziale per l'innovazione e per trovare soluzioni nuove a problemi complessi.",
                                            "L'istruzione dovrebbe incoraggiare gli studenti a pensare fuori dagli schemi e a sviluppare i propri talenti unici."
                                  ],
                                  "ideasB": [
                                            "Sviluppare la disciplina e una forte etica del lavoro è fondamentale per raggiungere obiettivi a lungo termine.",
                                            "Un ambiente strutturato aiuta gli studenti a costruire la persistenza e la concentrazione necessarie per abilità difficili."
                                  ]
                        },
                        {
                                  "topic": "Regolamentazione dei social media vs libertà di espressione: a cosa dovrebbe essere data la priorità?",
                                  "sideA": "Regolamentazione",
                                  "sideB": "Libertà di espressione",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "La supervisione del governo è necessaria per prevenire la diffusione di disinformazione dannosa e discorsi d'odio.",
                                            "La regolamentazione può ritenere i giganti tecnologici responsabili dell'impatto dei loro algoritmi sul discorso pubblico."
                                  ],
                                  "ideasB": [
                                            "Il diritto di esprimersi senza censura è un pilastro della democrazia e deve essere protetto ad ogni costo.",
                                            "Un'eccessiva regolamentazione potrebbe portare alla soppressione delle voci dissenzienti e dare ai governi troppo potere."
                                  ]
                        },
                        {
                                  "topic": "Curatela algoritmica vs selezione editoriale: quale è il modo più affidabile di fornire notizie?",
                                  "sideA": "Algoritmi",
                                  "sideB": "Selezione editoriale",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Gli algoritmi possono fornire una gamma più ampia di prospettive basate sui dati degli utenti piuttosto che sui pregiudizi di un editore.",
                                            "I sistemi automatizzati possono elaborare le informazioni molto più velocemente degli umani, fornendo aggiornamenti in tempo reale."
                                  ],
                                  "ideasB": [
                                            "Gli editori umani forniscono contesto essenziale, supervisione etica e un impegno per l'accuratezza giornalistica.",
                                            "I giornalisti professionisti possono indagare su storie complesse in modi che gli algoritmi non possono attualmente eguagliare."
                                  ]
                        },
                        {
                                  "topic": "Crescita economica vs protezione ambientale: possono coesistere o una deve cedere il passo?",
                                  "sideA": "Crescita economica",
                                  "sideB": "Protezione ambientale",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "La continua crescita economica è necessaria per finanziare la ricerca e lo sviluppo di tecnologie verdi.",
                                            "La crescente prosperità permette alle società di investire di più nella conservazione e nella transizione ecologica."
                                  ],
                                  "ideasB": [
                                            "Una crescita infinita su un pianeta finito è impossibile; dobbiamo dare priorità alla salute del pianeta rispetto al PIL.",
                                            "Proteggere la biodiversità e il clima è un prerequisito per qualsiasi stabilità economica o benessere umano a lungo termine."
                                  ]
                        },
                        {
                                  "topic": "Tasse sul carbonio vs sussidi verdi: quale è la politica climatica più efficace?",
                                  "sideA": "Tasse sul carbonio",
                                  "sideB": "Sussidi verdi",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Dare un prezzo al carbonio fornisce un chiaro incentivo di mercato per ridurre le emissioni.",
                                            "Le entrate fiscali possono essere usate per finanziare servizi pubblici o restituite ai cittadini per compensare i costi energetici."
                                  ],
                                  "ideasB": [
                                            "Incentivi finanziari per energie rinnovabili e veicoli elettrici possono accelerare la transizione ecologica.",
                                            "I sussidi aiutano ad abbassare il costo iniziale delle tecnologie verdi, rendendole più accessibili al grande pubblico."
                                  ]
                        },
                        {
                                  "topic": "Decrescita vs crescita sostenibile: quale è la risposta giusta alla crisi climatica?",
                                  "sideA": "Decrescita",
                                  "sideB": "Crescita sostenibile",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Dobbiamo ridurre intenzionalmente produzione e consumo nelle nazioni ricche per restare entro i limiti planetari.",
                                            "Un focus sul benessere e sulla comunità piuttosto che sulla ricchezza materiale può portare a una società più sostenibile."
                                  ],
                                  "ideasB": [
                                            "Possiamo disaccoppiare la crescita dall'impatto ambientale attraverso innovazione, efficienza ed energia rinnovabile.",
                                            "La crescita sostenibile fornisce le risorse per sollevare le persone dalla povertà proteggendo l'ambiente."
                                  ]
                        },
                        {
                                  "topic": "Responsabilità individuale vs responsabilità aziendale: chi è più colpevole per i danni ambientali?",
                                  "sideA": "Responsabilità individuale",
                                  "sideB": "Responsabilità aziendale",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "I cambiamenti collettivi nei comportamenti individuali possono avere un impatto massiccio sull'ambiente.",
                                            "I consumatori hanno il potere di guidare il cambiamento scegliendo prodotti sostenibili e pretendendo di più dalle aziende."
                                  ],
                                  "ideasB": [
                                            "Un piccolo numero di grandi aziende è responsabile della stragrande maggioranza delle emissioni globali.",
                                            "Il cambiamento sistemico deve essere guidato da chi ha più potere piuttosto che porre l'onere sugli individui."
                                  ]
                        },
                        {
                                  "topic": "Democrazia diretta vs democrazia rappresentativa: quale è più efficace?",
                                  "sideA": "Democrazia diretta",
                                  "sideB": "Democrazia rappresentativa",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Permettere ai cittadini di votare direttamente su leggi e politiche assicura che il governo rifletta la volontà del popolo.",
                                            "La partecipazione diretta favorisce una cittadinanza più impegnata che si assume la responsabilità della propria società."
                                  ],
                                  "ideasB": [
                                            "I rappresentanti eletti hanno il tempo e l'esperienza per studiare questioni complesse e prendere decisioni informate.",
                                            "I sistemi rappresentativi proteggono dalla 'tirannia della maggioranza' e garantiscono il rispetto dei diritti delle minoranze."
                                  ]
                        },
                        {
                                  "topic": "Forte governo centrale vs autonomia regionale: cosa serve meglio i cittadini?",
                                  "sideA": "Governo centrale",
                                  "sideB": "Autonomia regionale",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Un'autorità centrale forte può garantire standard coerenti e uguali diritti per tutti i cittadini in una nazione.",
                                            "I governi nazionali sono meglio attrezzati per gestire sfide su larga scala come la sicurezza nazionale."
                                  ],
                                  "ideasB": [
                                            "I governi regionali sono più vicini alle persone e possono comprendere meglio i bisogni locali e le differenze culturali.",
                                            "L'autonomia permette di sperimentare diverse politiche che possono poi essere adottate da altre regioni se hanno successo."
                                  ]
                        },
                        {
                                  "topic": "Meritocrazia vs azioni positive: quale è la base più equa per l'opportunità?",
                                  "sideA": "Meritocrazia",
                                  "sideB": "Azioni positive",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Premiare gli individui esclusivamente in base al talento e all'impegno è il modo più equo di allocare le opportunità.",
                                            "Un sistema basato sul merito assicura che le persone più capaci ricoprano ruoli chiave."
                                  ],
                                  "ideasB": [
                                            "Misure proattive sono necessarie per livellare il campo di gioco e affrontare le disuguaglianze storiche e sistemiche.",
                                            "La diversità nel luogo di lavoro e nell'istruzione arricchisce la società e garantisce la rappresentanza di diverse prospettive."
                                  ]
                        },
                        {
                                  "topic": "Frontiere aperte vs immigrazione controllata: cosa serve meglio sia le comunità ospitanti che quelle migranti?",
                                  "sideA": "Frontiere aperte",
                                  "sideB": "Immigrazione controllata",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Permettere alle persone di muoversi liberamente può stimolare la crescita economica e affrontare la carenza di manodopera.",
                                            "Il diritto di muoversi è una libertà umana fondamentale che permette di sfuggire alla povertà e cercare una vita migliore."
                                  ],
                                  "ideasB": [
                                            "I sistemi controllati permettono ai governi di gestire i servizi pubblici e garantire l'integrazione dei nuovi arrivati.",
                                            "Regolare l'immigrazione può aiutare a proteggere i salari e le condizioni di lavoro della forza lavoro esistente."
                                  ]
                        },
                        {
                                  "topic": "Utilitarismo vs etica deontologica: quale offre un quadro morale migliore?",
                                  "sideA": "Utilitarismo",
                                  "sideB": "Deontologia",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Concentrarsi sul massimo bene per il massimo numero di persone fornisce un modo pratico per prendere decisioni morali.",
                                            "Le conseguenze di un'azione sono ciò che conta veramente quando se ne valuta il valore etico."
                                  ],
                                  "ideasB": [
                                            "Certe azioni sono intrinsecamente giuste o sbagliate, indipendentemente dalle conseguenze; dobbiamo seguire regole universali.",
                                            "Rispettare i diritti e i doveri individuali è l'unico modo per garantire la vera giustizia e la dignità umana."
                                  ]
                        },
                        {
                                  "topic": "Libertà di parola vs protezione dal danno: dove dovrebbe essere tracciato il limite?",
                                  "sideA": "Libertà di parola",
                                  "sideB": "Protezione dal danno",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Il libero scambio di idee, anche controverse, è essenziale per il progresso e la ricerca della verità.",
                                            "La parola dovrebbe essere limitata solo nei casi più estremi, come l'incitamento diretto alla violenza."
                                  ],
                                  "ideasB": [
                                            "La società ha il dovere di proteggere i gruppi vulnerabili dai discorsi d'odio che possono portare a danni nel mondo reale.",
                                            "Il diritto alla libera espressione non include il diritto di diffondere disinformazione che mette in pericolo la salute pubblica."
                                  ]
                        },
                        {
                                  "topic": "Relativismo culturale vs diritti umani universali: quale è la posizione più forte?",
                                  "sideA": "Relativismo culturale",
                                  "sideB": "Diritti universali",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Dobbiamo rispettare i diversi valori e tradizioni delle altre culture piuttosto che imporre le nostre convinzioni.",
                                            "La moralità è spesso un prodotto della cultura e non c'è un modo oggettivo per dire che un sistema è migliore di un altro."
                                  ],
                                  "ideasB": [
                                            "I diritti umani fondamentali dovrebbero essere protetti ovunque indipendentemente dalla cultura.",
                                            "Standard universali sono necessari per prevenire l'oppressione di individui e gruppi sotto il pretesto della tradizione."
                                  ]
                        },
                        {
                                  "topic": "Punizione vs riabilitazione: quale dovrebbe essere l'obiettivo del sistema giudiziario?",
                                  "sideA": "Punizione",
                                  "sideB": "Riabilitazione",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "La giustizia retributiva assicura che i trasgressori affrontino le conseguenze e fornisce chiusura alle vittime.",
                                            "Punizioni severe possono fungere da deterrente, impedendo ad altri di commettere crimini simili."
                                  ],
                                  "ideasB": [
                                            "L'obiettivo primario dovrebbe essere aiutare i trasgressori a reintegrarsi e affrontare le cause alla base del loro comportamento.",
                                            "La riabilitazione è più efficace nel ridurre i tassi di recidiva e nel costruire una società più sicura a lungo termine."
                                  ]
                        },
                        {
                                  "topic": "Sapere troppo vs sapere troppo poco: quale condizione è più pericolosa per l'adulto moderno?",
                                  "sideA": "Sapere troppo",
                                  "sideB": "Sapere troppo poco",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "L'eccesso di analisi può portare alla paralisi decisionale, dove l'abbondanza di informazioni impedisce un'azione tempestiva.",
                                            "La consapevolezza costante delle crisi globali e dei rischi complessi può aumentare significativamente l'ansia e diminuire il benessere generale."
                                  ],
                                  "ideasB": [
                                            "L'ignoranza di informazioni critiche può portare a scelte di vita sbagliate e vulnerabilità allo sfruttamento o alla disinformazione.",
                                            "La mancanza di conoscenza impedisce agli individui di partecipare efficacemente ai processi democratici e al discorso sociale."
                                  ]
                        },
                        {
                                  "topic": "Essere in anticipo ovunque vs essere sempre leggermente in ritardo: quale è il peggior crimine sociale?",
                                  "sideA": "Essere in anticipo",
                                  "sideB": "Essere in ritardo",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Arrivare troppo presto può gravare ingiustamente sull'ospite, costringendolo a affrettare i preparativi.",
                                            "Può segnalare una mancanza di consapevolezza sociale o un'eccessiva foga che mette gli altri a disagio o sotto pressione."
                                  ],
                                  "ideasB": [
                                            "Il ritardo costante dimostra una fondamentale mancanza di rispetto per il tempo altrui e per i programmi professionali.",
                                            "Può danneggiare la reputazione di affidabilità e interrompere il flusso di riunioni o incontri sociali."
                                  ]
                        },
                        {
                                  "topic": "Piegare il bucato immediatamente vs vivere con una montagna di panni: quale scelta di vita è più difendibile?",
                                  "sideA": "Piegare subito",
                                  "sideB": "Montagna di panni",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Mantenere l'ordine nell'ambiente domestico riduce il disordine mentale e contribuisce a uno stile di vita più disciplinato.",
                                            "I vestiti piegati si conservano meglio, facendo risparmiare tempo per la stiratura e denaro per sostituzioni premature."
                                  ],
                                  "ideasB": [
                                            "Dare priorità ad attività più significative rispetto a banali compiti domestici può portare a una vita più appagante e meno rigida.",
                                            "Un approccio rilassato risparmia tempo ed energia immediati, che possono essere reindirizzati verso il lavoro, la famiglia o il relax."
                                  ]
                        },
                        {
                                  "topic": "L'invenzione della sveglia vs l'invenzione del tasto 'snooze': quale ha fatto più danni all'umanità?",
                                  "sideA": "Sveglia",
                                  "sideB": "Tasto snooze",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "La sveglia ha interrotto i naturali ritmi circadiani dell'uomo, portando a privazione cronica del sonno e stress.",
                                            "Ha formalizzato un approccio rigido e industriale al tempo che privilegia la produttività rispetto al benessere biologico."
                                  ],
                                  "ideasB": [
                                            "Il tasto snooze incoraggia la 'frammentazione del sonno', che può lasciare gli individui più intontiti e meno vigili.",
                                            "Favorisce un'abitudine alla procrastinazione e al rinvio delle responsabilità che può influire negativamente sulle prestazioni professionali."
                                  ]
                        },
                        {
                                  "topic": "Fantasmi vs alieni: quale sarebbe una scoperta più dirompente per la società moderna?",
                                  "sideA": "Fantasmi",
                                  "sideB": "Alieni",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "La prova di un'aldilà ribalterebbe fondamentalmente tutti i quadri religiosi, filosofici e scientifici esistenti.",
                                            "Solleverebbe profonde questioni etiche e legali riguardanti i diritti e l'influenza dei defunti sui vivi."
                                  ],
                                  "ideasB": [
                                            "Il contatto con la vita extraterrestre costringerebbe l'umanità a riconsiderare il suo posto nell'universo e il suo status unico.",
                                            "Potrebbe comportare rischi significativi per la sicurezza o sfide tecnologiche che la società è attualmente impreparata a gestire."
                                  ]
                        },
                        {
                                  "topic": "Cereali prima del latte vs latte prima dei cereali: è una questione di preferenza o di fatto oggettivo?",
                                  "sideA": "Cereali prima",
                                  "sideB": "Latte prima",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Aggiungere prima i cereali permette un miglior controllo delle porzioni e garantisce il rapporto ottimale tra croccantezza e liquido.",
                                            "È l'approccio più logico e sistematico, impedendo al latte di schizzare e creare disordine."
                                  ],
                                  "ideasB": [
                                            "Aggiungere prima il latte permette di riscaldare il liquido con precisione prima di aggiungere i cereali, mantenendo la temperatura desiderata.",
                                            "Assicura che i cereali rimangano più croccanti più a lungo, poiché non vengono immediatamente immersi nel latte."
                                  ]
                        },
                        {
                                  "topic": "Whistleblowing vs lealtà istituzionale: quale è la scelta più etica?",
                                  "sideA": "Whistleblowing",
                                  "sideB": "Lealtà",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Esporre gli illeciti è un dovere fondamentale verso il pubblico che ha la precedenza sugli interessi organizzativi privati.",
                                            "Il whistleblowing promuove la trasparenza e ritiene le istituzioni potenti responsabili delle loro azioni e violazioni etiche."
                                  ],
                                  "ideasB": [
                                            "La lealtà alla propria istituzione è essenziale per mantenere la stabilità e l'efficacia di organizzazioni complesse.",
                                            "Le questioni interne dovrebbero essere risolte attraverso i canali stabiliti per prevenire danni reputazionali non necessari e disordini sociali."
                                  ]
                        },
                        {
                                  "topic": "Ottimismo vs realismo: quale è la visione del mondo più produttiva per la carriera?",
                                  "sideA": "Ottimismo",
                                  "sideB": "Realismo",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Una prospettiva positiva favorisce la resilienza e incoraggia gli individui a correre i rischi necessari per l'innovazione e la crescita.",
                                            "L'ottimismo è contagioso e può migliorare significativamente il morale del team e le capacità collettive di risoluzione dei problemi."
                                  ],
                                  "ideasB": [
                                            "Una valutazione realistica delle sfide impedisce lo spreco di risorse su obiettivi irragніungibili o progetti eccessivamente ambiziosi.",
                                            "Il realismo consente una pianificazione delle emergenze e una gestione del rischio più efficaci in ambienti professionali volatili."
                                  ]
                        },
                        {
                                  "topic": "Imprenditorialità vs lavoro dipendente: cosa contribuisce di più alla società?",
                                  "sideA": "Imprenditorialità",
                                  "sideB": "Lavoro dipendente",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Gli imprenditori guidano l'innovazione e creano nuovi posti di lavoro e industrie che alimentano il progresso economico.",
                                            "La volontà di correre rischi personali porta allo sviluppo di soluzioni originali per problemi sociali complessi."
                                  ],
                                  "ideasB": [
                                            "Gli sforzi collettivi di milioni di dipendenti forniscono la stabilità e l'esperienza essenziali che mantengono la società in funzione.",
                                            "L'occupazione fornisce una base imponibile costante e supporta l'infrastruttura stabilita dell'economia globale."
                                  ]
                        },
                        {
                                  "topic": "Nazionalismo vs globalismo: quale è il quadro più coerente per il XXI secolo?",
                                  "sideA": "Nazionalismo",
                                  "sideB": "Globalismo",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Concentrarsi sullo Stato-nazione garantisce che i governi rimangano responsabili verso i propri cittadini e le loro esigenze specifiche.",
                                            "L'identità nazionale fornisce un forte senso di appartenenza e coesione sociale necessario per una società stabile."
                                  ],
                                  "ideasB": [
                                            "Le sfide globali come il cambiamento climatico e le pandemie richiedono un approccio internazionale unificato che trascenda i confini.",
                                            "Un'economia globale interconnessa promuove la pace e la prosperità rendendo le nazioni interdipendenti e collaborative."
                                  ]
                        },
                        {
                                  "topic": "Istruzione domiciliare vs scuola tradizionale: cosa produce individui più equilibrati?",
                                  "sideA": "Istruzione domiciliare",
                                  "sideB": "Scuola tradizionale",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "L'istruzione personalizzata consente ai bambini di seguire i propri interessi e imparare a un ritmo adatto alle loro esigenze individuali.",
                                            "L'istruzione domiciliare può proteggere i bambini da influenze sociali negative come il bullismo e l'eccessiva pressione dei pari."
                                  ],
                                  "ideasB": [
                                            "Le scuole tradizionali forniscono un ambiente sociale diversificato in cui i bambini imparano a interagire con persone di diversa estrazione.",
                                            "L'ambiente strutturato di una scuola favorisce abilità di vita essenziali come la disciplina, il lavoro di squadra e la sana competizione."
                                  ]
                        },
                        {
                                  "topic": "Sistemi di votazione vs feedback descrittivo: cosa motiva gli studenti in modo più efficace?",
                                  "sideA": "Voti",
                                  "sideB": "Feedback descrittivo",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "I voti forniscono una metrica chiara e oggettiva che consente agli studenti di monitorare i propri progressi e confrontare le prestazioni.",
                                            "La natura competitiva della valutazione può incentivare gli studenti a impegnarsi di più e a lottare per l'eccellenza accademica."
                                  ],
                                  "ideasB": [
                                            "Un feedback dettagliato fornisce indicazioni specifiche su come migliorare, favorendo una mentalità di crescita piuttosto che la focalizzazione sul voto.",
                                            "Rimuovere la pressione dei voti può ridurre l'ansia e incoraggiare un amore più genuino per l'apprendimento e l'esplorazione."
                                  ]
                        },
                        {
                                  "topic": "Intelligenza artificiale vs giudizio umano: cosa dovrebbe guidare le decisioni chiave nel business?",
                                  "sideA": "Intelligenza artificiale",
                                  "sideB": "Giudizio umano",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "L'IA può elaborare vaste quantità di dati senza pregiudizi emotivi, portando a un processo decisionale più oggettivo ed efficiente.",
                                            "Gli algoritmi possono identificare schemi e tendenze complessi che sono spesso invisibili anche agli esperti umani più esperti."
                                  ],
                                  "ideasB": [
                                            "I leader umani possono considerare sfumature etiche, contesto sociale e implicazioni a lungo termine che le macchine non possono ancora cogliere.",
                                            "Il giudizio implica empatia e intuito, che sono cruciali per navigare in situazioni interpersonali e politiche complesse."
                                  ]
                        },
                        {
                                  "topic": "Ottimismo tecnologico vs scetticismo tecnologico: quale è la posizione predefinita più razionale oggi?",
                                  "sideA": "Ottimismo tech",
                                  "sideB": "Scetticismo tech",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "La tecnologia ha storicamente risolto le nostre sfide più grandi e continua a migliorare l'aspettativa di vita e la connettività globale.",
                                            "Mantenere una posizione positiva incoraggia l'investimento e l'innovazione necessari per risolvere le crisi attuali come il cambiamento climatico."
                                  ],
                                  "ideasB": [
                                            "Un approccio scettico è necessario per identificare e mitigare le conseguenze impreviste del rapido progresso tecnologico.",
                                            "Mettere in discussione le motivazioni dei giganti tecnologici aiuta a proteggere la privacy individuale e previene l'erosione dei valori democratici."
                                  ]
                        },
                        {
                                  "topic": "Identità digitale vs identità nel mondo reale: cosa ci definisce di più oggi?",
                                  "sideA": "Identità digitale",
                                  "sideB": "Identità reale",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "La nostra presenza online è spesso il primo punto di contatto per datori di lavoro e coetanei, plasmandone la percezione.",
                                            "Le impronte digitali forniscono una registrazione più completa e permanente dei nostri interessi, azioni e connessioni sociali."
                                  ],
                                  "ideasB": [
                                            "Le interazioni nel mondo reale comportano un livello di profondità e autenticità che non può essere replicato in un ambiente digitale.",
                                            "Le nostre esperienze fisiche e le relazioni immediate rimangono i motori più significativi dei nostri valori e della crescita personale."
                                  ]
                        },
                        {
                                  "topic": "Eco-ansia vs ottimismo climatico: quale è la risposta più costruttiva alla crisi?",
                                  "sideA": "Eco-ansia",
                                  "sideB": "Ottimismo climatico",
                                  "level": "upper_intermediate",
                                  "ideasA": [
                                            "Un sano senso di urgenza e preoccupazione può motivare gli individui a compiere i radicali cambiamenti di stile di vita necessari per la sopravvivenza.",
                                            "Riconoscere la gravità della situazione previene il compiacimento e mantiene la pressione su governi e aziende."
                                  ],
                                  "ideasB": [
                                            "L'ottimismo previene la disperazione e la paralisi, permettendo alle persone di concentrarsi sulle soluzioni e partecipare ad azioni positive.",
                                            "Credere che il cambiamento sia possibile è un prerequisito per lo sforzo sostenuto richiesto per costruire un futuro sostenibile."
                                  ]
                        },
                        {
                                  "topic": "Gerarchie organizzative piatte vs strutture di gestione verticale: cosa serve meglio agli adulti che lavorano al loro interno?",
                                  "sideA": "Gerarchia piatta",
                                  "sideB": "Struttura verticale",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Il culto della produttività vs la difesa dell'ozio: cosa riflette meglio ciò di cui gli esseri umani hanno realmente bisogno dal lavoro?",
                                  "sideA": "Produttività",
                                  "sideB": "Ozio",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "La leadership come abilità apprendibile vs la leadership come qualità innata: quale resoconto è più difendibile empiricamente?",
                                  "sideA": "Abilità acquisita",
                                  "sideB": "Qualità innata",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Hustle culture vs slow living: chi sta vincendo e chi dovrebbe vincere?",
                                  "sideA": "Hustle culture",
                                  "sideB": "Slow living",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Responsabilità sociale d'impresa come impegno genuino vs come gestione della reputazione: quale inquadramento è più onesto?",
                                  "sideA": "Impegno genuino",
                                  "sideB": "Gestione reputazione",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "L'identità adulta come fissa vs perennemente in costruzione: quale resoconto riflette meglio l'esperienza vissuta?",
                                  "sideA": "Identità fissa",
                                  "sideB": "In costruzione",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "L'addomesticamento del femminismo da parte della cultura del consumo vs il femminismo che rimodella genuinamente la vita adulta: cosa è più vero?",
                                  "sideA": "Femm. di consumo",
                                  "sideB": "Rimodellamento reale",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Crisi di mezza età come patologia vs crisi di mezza età come legittima rivalutazione: quale inquadramento è più utile?",
                                  "sideA": "Patologia",
                                  "sideB": "Rivalutazione",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "La pressione per essere straordinari vs la dignità di una vita ordinaria: quale è l'ideale più umano da sostenere?",
                                  "sideA": "Straordinario",
                                  "sideB": "Dignità ordinaria",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "L'obbligo di prendersi cura dei genitori anziani vs la responsabilità dello Stato: su chi dovrebbe ricadere l'onere?",
                                  "sideA": "Obbligo familiare",
                                  "sideB": "Resp. dello Stato",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Onestà radicale nelle relazioni vs silenzio strategico: quale è l'approccio più etico all'intimità?",
                                  "sideA": "Onestà radicale",
                                  "sideB": "Silenzio strategico",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Scegliere la propria cerchia sociale deliberatamente vs lasciare che le relazioni si formino organicamente: cosa produce amicizie adulte più autentiche?",
                                  "sideA": "Scelta deliberata",
                                  "sideB": "Formazione organica",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "La famiglia nucleare come unità sociale ottimale vs come disposizione storicamente contingente: quale visione è più difendibile?",
                                  "sideA": "Unità ottimale",
                                  "sideB": "Arrang. storico",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Governance tecnocratica vs populismo democratico: cosa rappresenta il maggior rischio a lungo termine per i cittadini adulti?",
                                  "sideA": "Tecnocrazia",
                                  "sideB": "Populismo",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Giustizia intergenerazionale vs benessere attuale: cosa dovrebbe avere la priorità nelle politiche pubbliche?",
                                  "sideA": "Giustizia intergen.",
                                  "sideB": "Benessere attuale",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "L'obbligo di voto vs il diritto di astenersi: quale è la posizione civica più difendibile?",
                                  "sideA": "Obbligo di voto",
                                  "sideB": "Diritto astensione",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Il patriottismo come virtù civica vs il patriottismo come fallimento cognitivo: quale resoconto è più persuasivo?",
                                  "sideA": "Virtù civica",
                                  "sideB": "Fallimento cognitivo",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Assolutismo della libertà di parola vs parola regolamentata: cosa produce risultati migliori per le società democratiche adulte?",
                                  "sideA": "Assolutismo",
                                  "sideB": "Parola regolata",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Una carriera significativa vs un lavoro che finanzia una vita privata significativa: quale è la più onesta ambizione adulta?",
                                  "sideA": "Carriera signif.",
                                  "sideB": "Finanziare vita priv.",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Religione vs filosofia secolare: cosa affronta più efficacemente i bisogni esistenziali degli adulti moderni?",
                                  "sideA": "Religione",
                                  "sideB": "Filosofia secolare",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "La vita esaminata vs la vita assorbita: quale vale di più la pena di essere vissuta e chi può deciderlo?",
                                  "sideA": "Vita esaminata",
                                  "sideB": "Vita assorbita",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Eredità (legacy) vs presenza: per cosa è più coerente lottare per un adulto?",
                                  "sideA": "Eredità",
                                  "sideB": "Presenza",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "L'adulto che ha «finalmente capito» vs l'adulto che ha accettato che non capirà mai: chi è più consapevole di sé?",
                                  "sideA": "Ha capito",
                                  "sideB": "Accettata ignoranza",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Dire tutto al proprio terapeuta vs dire tutto al proprio parrucchiere: quale relazione professionale è più efficace terapeuticamente?",
                                  "sideA": "Terapeuta",
                                  "sideB": "Parrucchiere",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "L'ansia della domenica di un adulto con un'agenda piena vs l'ansia della domenica di un adulto con un'agenda vuota: cosa è più esistenzialmente preoccupante?",
                                  "sideA": "Agenda piena",
                                  "sideB": "Agenda vuota",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Eccessiva riflessione su ogni decisione importante della vita vs prenderle impulsivamente: quale strategia ha il miglior curriculum empirico?",
                                  "sideA": "Riflessione",
                                  "sideB": "Impulsività",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Adulti che leggono libri di auto-aiuto vs adulti che si rifiutano di farlo: quale gruppo è più difficile da frequentare a una cena?",
                                  "sideA": "Lettori auto-aiuto",
                                  "sideB": "Si rifiutano",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Creatività dell'IA vs arte umana: le macchine possono davvero creare arte?",
                                  "sideA": "Creatività IA",
                                  "sideB": "Arte umana",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Esplorazione spaziale vs esplorazione degli abissi: dove dovremmo concentrare le nostre risorse?",
                                  "sideA": "Spazio",
                                  "sideB": "Abissi",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Privacy digitale vs sicurezza nazionale: la sorveglianza totale è mai giustificata?",
                                  "sideA": "Privacy",
                                  "sideB": "Sicurezza",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Alimenti geneticamente modificati vs agricoltura biologica: come dovremmo nutrire il mondo?",
                                  "sideA": "OGM",
                                  "sideB": "Biologico",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "Reddito di base universale vs programmi di garanzia del lavoro: qual è la migliore rete di sicurezza sociale?",
                                  "sideA": "Reddito universale",
                                  "sideB": "Garanzia lavoro",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Idea per A 1",
                                            "Idea per A 2"
                                  ],
                                  "ideasB": [
                                            "Idea per B 1",
                                            "Idea per B 2"
                                  ]
                        },
                        {
                                  "topic": "L'etica del lavoro protestante come conquista di civiltà vs come fonte originaria della miseria adulta: quale eredità domina oggi?",
                                  "sideA": "Conquista di civiltà",
                                  "sideB": "Fonte di miseria",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Ha catalizzato uno sviluppo socioeconomico senza precedenti istituzionalizzando la diligenza come virtù cardinale.",
                                            "La spinta interiorizzata verso l'operosità fornisce un quadro coerente per lo scopo individuale e la stabilità sociale."
                                  ],
                                  "ideasB": [
                                            "Ha radicato un ciclo implacabile di produttività performativa che precipita un burnout diffuso e un'ennui esistenziale.",
                                            "Ancorare la dignità umana esclusivamente al rendimento economico facilita l'erosione sistemica del tempo libero e della vita contemplativa."
                                  ]
                        },
                        {
                                  "topic": "La mercificazione della passione vs la liberazione di trasformare il lavoro in significato: \"fai ciò che ami\" è un consiglio o una trappola?",
                                  "sideA": "Consiglio",
                                  "sideB": "Trappola",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Allineare le aspirazioni professionali agli interessi intrinseci favorisce uno stato di 'flow' e una profonda realizzazione psicologica.",
                                            "La ricerca di un lavoro significativo trascende la mera sussistenza, consentendo un'esistenza più integrata e autentica."
                                  ],
                                  "ideasB": [
                                            "Trasformare un hobby in una carriera assoggetta i propri santuari più cari alla logica spietata della valutazione di mercato.",
                                            "La narrativa della 'passione' funge spesso da cortina fumogena per condizioni di lavoro precarie e auto-sfruttamento."
                                  ]
                        },
                        {
                                  "topic": "La carriera come identità vs la carriera come mezzo: qual è il rapporto più coerente per un adulto moderno con il proprio lavoro?",
                                  "sideA": "Identità",
                                  "sideB": "Mezzo",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'eccellenza professionale fornisce una metrica tangibile per l'autorealizzazione e il contributo sociale in un mondo secolare.",
                                            "Un'identità radicata nella maestria e nella vocazione offre resilienza e un senso di continuità lungo tutto l'arco della vita."
                                  ],
                                  "ideasB": [
                                            "Mantenere una chiara demarcazione tra il sé e il ruolo previene il collasso identitario durante i periodi di disoccupazione o pensionamento.",
                                            "Considerare il lavoro come una pura utilità strumentale preserva la larghezza di banda cognitiva ed emotiva necessaria per le dimensioni non di mercato della vita."
                                  ]
                        },
                        {
                                  "topic": "Il virtuoso stakanovista vs l'ozioso strategico: chi è stato celebrato in modo più disonesto nella cultura occidentale?",
                                  "sideA": "Stakanovista",
                                  "sideB": "Ozioso",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La glorificazione della 'hustle culture' oscura i rendimenti decrescenti dell'esaurimento e l'incuria sistemica della riproduzione sociale.",
                                            "Le narrazioni eroiche del sovraccarico di lavoro servono spesso a normalizzare richieste organizzative sfruttatrici sotto la veste del merito individuale."
                                  ],
                                  "ideasB": [
                                            "La romanticizzazione della 'classe agiata' o dello 'fannullone strategico' occulta spesso il privilegio economico sottostante che rende vitale l'ozio.",
                                            "Celebrare la non-produttività come atto radicale può essere una disonesta estetizzazione della passività di fronte a urgenti sfide collettive."
                                  ]
                        },
                        {
                                  "topic": "L'ambizione adulta come ammirevole vs l'ambizione adulta come incapacità di accettare la finitezza: quale lettura è psicologicamente più onesta?",
                                  "sideA": "Ammirevole",
                                  "sideB": "Incapacità di accettare la finitezza",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'ambizione rappresenta il coraggioso rifiuto di ristagnare, guidando l'espansione delle capacità umane e dei confini creativi.",
                                            "La tensione verso l'eccellenza è un'espressione vitale della volontà umana di lasciare un'impronta duratura e significativa nel mondo."
                                  ],
                                  "ideasB": [
                                            "Lo sforzo incessante funziona spesso come un meccanismo di difesa nevrotico contro la terrificante realtà della nostra inevitabile insignificanza e mortalità.",
                                            "Una vita di costante 'divenire' preclude la possibilità di 'essere', portando a un perpetuo stato di insoddisfazione orientata al futuro."
                                  ]
                        },
                        {
                                  "topic": "L'amore romantico come principio organizzatore della vita adulta vs come mito storicamente contingente e commercialmente sostenuto: quale posizione è più difendibile?",
                                  "sideA": "Principio organizzatore",
                                  "sideB": "Mito commerciale",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La partnership intima offre un locus unico di significato, fornendo un santuario emotivo e una narrazione condivisa in una società atomizzata.",
                                            "La profonda vulnerabilità dell'amore funge da potente catalizzatore per la crescita morale e la trascendenza dell'io."
                                  ],
                                  "ideasB": [
                                            "Il culto contemporaneo del romanticismo pone un onere insostenibile su una singola relazione per soddisfare tutti i bisogni psicologici e sociali.",
                                            "Il romanticismo è stato cooptato dal capitalismo dei consumi per vendere uno stile di vita idealizzato che privilegia la gratificazione individuale rispetto ai legami comunitari."
                                  ]
                        },
                        {
                                  "topic": "Trasparenza radicale nelle relazioni vs necessità di un sé privato: intimità e individuazione possono coesistere?",
                                  "sideA": "Trasparenza",
                                  "sideB": "Sé privato",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La vulnerabilità assoluta è l'unico percorso verso una genuina intimità, smantellando le barriere difensive che precludono una vera connessione.",
                                            "La rimozione dei segreti favorisce una cultura di fiducia radicale e preclude la lenta decomposizione dei risentimenti inespressi."
                                  ],
                                  "ideasB": [
                                            "Un grado di opacità interna è essenziale per mantenere un'identità separata e prevenire l'impigliamento emotivo che soffoca il desiderio.",
                                            "Il mandato della 'totale trasparenza' può essere una forma sottile di sorveglianza che erode la sacralità del mondo interiore dell'individuo."
                                  ]
                        },
                        {
                                  "topic": "L'etica della cura come correttivo femminista vs come riassegnazione degli stessi oneri: il concetto ha mantenuto le promesse?",
                                  "sideA": "Correttivo femminista",
                                  "sideB": "Riassegnazione oneri",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Sfida il dominante focus patriarcale sui diritti astratti dando priorità alla relazionalità e al fatto fondamentale della dipendenza umana.",
                                            "Mettere al centro il lavoro di cura eleva attività tradizionalmente relegate alla sfera privata al loro legittimo status di pilastro della civiltà."
                                  ],
                                  "ideasB": [
                                            "Senza una radicale ridistribuzione strutturale, la retorica della 'cura' serve spesso a romanticizzare e perpetuare le disuguaglianze lavorative di genere.",
                                            "Concentrarsi sulla cura come virtù intrinseca può inavvertitamente essenzializzare tratti che sono stati socializzati nei gruppi emarginati a beneficio dei potenti."
                                  ]
                        },
                        {
                                  "topic": "Scegliere di non avere figli come resistenza all'ideologia pronatalista vs come decisione interamente personale senza dimensione politica: possono essere separate nettamente?",
                                  "sideA": "Resistenza",
                                  "sideB": "Decisione personale",
                                  "level": "advanced",
                                  "ideasA": [
                                            "In una società che tratta la riproduzione come un dovere morale predefinito, la scelta di non avere figli è un atto intrinsecamente sovversivo di autonomia.",
                                            "Rifiutare di partecipare alla riproduzione generazionale del lavoro e del capitale costituisce una legittima critica alle strutture socioeconomiche contemporanee."
                                  ],
                                  "ideasB": [
                                            "Politicizzare le scelte riproduttive può essere un'invasiva ingerenza che ignora i complessi e spesso idiosincratici fattori personali in gioco.",
                                            "Molti individui giungono a questa decisione attraverso un processo di autoriflessione privata che ha poco a che fare con quadri ideologici più ampi."
                                  ]
                        },
                        {
                                  "topic": "La consapevolezza della mortalità come precondizione per una vita adulta significativa vs come suo ostacolo primario: qual è la posizione più vivibile?",
                                  "sideA": "Precondizione",
                                  "sideB": "Ostacolo",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La finitezza del tempo conferisce gravità e urgenza alle nostre scelte, impedendo la deriva in uno stato di perpetua procrastinazione.",
                                            "Riconoscere la morte favorisce un profondo apprezzamento per l'effimera bellezza del presente e incoraggia la prioritizzazione di ciò che conta davvero."
                                  ],
                                  "ideasB": [
                                            "L'ombra onnipresente della non-esistenza può indurre un nichilismo paralizzante che rende ogni sforzo umano apparentemente futile.",
                                            "Una preoccupazione per la mortalità può escludere la gioiosa spontaneità e l'investimento a lungo termine richiesti per una vita fiorente."
                                  ]
                        },
                        {
                                  "topic": "L'invecchiamento come declino vs l'invecchiamento come accumulo: quale narrazione è più onesta e quale più utile?",
                                  "sideA": "Declino",
                                  "sideB": "Accumulo",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'erosione fisiologica e cognitiva associata all'invecchiamento è una dura realtà biologica che richiede un confronto coraggioso piuttosto che l'uso di eufemismi.",
                                            "Accettare il declino consente un adeguamento realistico delle aspettative e la coltivazione della grazia di fronte all'inevitabile perdita."
                                  ],
                                  "ideasB": [
                                            "L'invecchiamento fornisce una profondità di prospettiva senza pari, regolazione emotiva e una sintesi di esperienza che costituisce la vera saggezza.",
                                            "La narrazione dell'accumulo valorizza gli anziani come vitali depositari della memoria culturale e consiglieri delle generazioni successive."
                                  ]
                        },
                        {
                                  "topic": "La medicalizzazione dell'invecchiamento come progresso vs come rifiuto di accettare la condizione umana: dove tracciare il confine?",
                                  "sideA": "Progresso",
                                  "sideB": "Rifiuto",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Gli interventi tecnologici che estendono la 'durata della salute' alleviano immense sofferenze umane e consentono periodi più lunghi di contributo sociale.",
                                            "Considerare l'invecchiamento come un problema biologico da risolvere è l'estensione logica della ricerca scientifica volta a padroneggiare la natura a beneficio dell'uomo."
                                  ],
                                  "ideasB": [
                                            "Patologizzare una fase naturale della vita riflette una profonda fobia culturale della vulnerabilità e un tentativo presuntuoso di eludere i nostri limiti intrinseci.",
                                            "La ricerca dell'immortalità attraverso la medicina può portare a una società stagnante priva della vitalità rigenerativa fornita dal susseguirsi delle generazioni."
                                  ]
                        },
                        {
                                  "topic": "La memoria come sostanza dell'identità adulta vs la memoria come narratore altamente inaffidabile: quali sono le implicazioni per la costruzione di un sé?",
                                  "sideA": "Sostanza",
                                  "sideB": "Narratore inaffidabile",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La continuità del sé dipende da una narrazione autobiografica coerente che colleghi le nostre azioni passate ai nostri valori presenti.",
                                            "I ricordi condivisi formano la base delle nostre relazioni più significative e forniscono un senso di appartenenza stabile."
                                  ],
                                  "ideasB": [
                                            "La natura malleabile della memoria suggerisce che la nostra 'identità' sia una ricostruzione perpetua, spesso autoreferenziale, piuttosto che un registro oggettivo.",
                                            "Riconoscere la fallibilità della nostra storia personale permette un rapporto più flessibile e indulgente con la persona che eravamo."
                                  ]
                        },
                        {
                                  "topic": "La complicità del cittadino adulto in sistemi ingiusti attraverso il consumo ordinario vs l'irrilevanza strutturale della purezza morale individuale: qual è l'inquadramento più onesto?",
                                  "sideA": "Complicità",
                                  "sideB": "Irrilevanza strutturale",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Le scelte individuali si aggregano in segnali di mercato; rifiutare di riconoscere questo legame causale è una forma di abdicazione etica.",
                                            "Il quadro del 'consumatore etico' restituisce agenzia all'individuo, insistendo sul fatto che nessuna azione è troppo piccola per avere un peso morale."
                                  ],
                                  "ideasB": [
                                            "Fissarsi sulle scelte di stile di vita personale spesso distrae dai cambiamenti istituzionali e normativi su larga scala richiesti per affrontare l'ingiustizia sistemica.",
                                            "In un'economia globalizzata, la totale purezza morale è un'impossibilità logistica che serve solo a indurre sensi di colpa debilitanti piuttosto che azioni efficaci."
                                  ]
                        },
                        {
                                  "topic": "Il disincanto politico come risposta razionale alle prove disponibili vs come forma di privilegio: quale lettura è empiricamente più difendibile?",
                                  "sideA": "Risposta razionale",
                                  "sideB": "Privilegio",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Il ritiro dal processo politico può essere un lucido riconoscimento della cattura sistemica delle istituzioni da parte di interessi radicati.",
                                            "Il persistente fallimento dei sistemi politici nell'affrontare minacce esistenziali rende lo scetticismo la posizione intellettuale più basata sulle prove."
                                  ],
                                  "ideasB": [
                                            "La capacità di 'chiamarsi fuori' dalla politica è un lusso concesso solo a coloro i cui diritti e bisogni primari non sono attualmente sotto minaccia diretta.",
                                            "Il cinismo funge spesso da sofisticata scusa per l'apatia, abdicando alla responsabilità di proteggere i più vulnerabili ai cambiamenti politici."
                                  ]
                        },
                        {
                                  "topic": "La giustizia intergenerazionale come sfida morale centrale del nostro tempo vs come concetto che oscura sistematicamente le disuguaglianze sociali e razziali del presente: quale critica è più forte?",
                                  "sideA": "Sfida morale",
                                  "sideB": "Oscuramento disuguaglianze",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La scala senza precedenti del degrado ambientale crea un obbligo non reciproco verso gli esseri futuri che non possono rappresentarsi da soli.",
                                            "Il mancato resoconto delle conseguenze a lungo termine del consumo attuale costituisce un furto sistemico ai danni dei non nati."
                                  ],
                                  "ideasB": [
                                            "La retorica sulle 'generazioni future' è spesso usata per rimandare azioni redistributive urgenti che gioverebbero agli emarginati di oggi.",
                                            "Un focus astratto sulla giustizia cronologica può trascurare il fatto che il 'futuro' sarà ereditato da gruppi che partono già da posizioni di potere enormemente diverse."
                                  ]
                        },
                        {
                                  "topic": "La democrazia liberale come il sistema meno peggiore vs come un sistema che ha strutturalmente esaurito la sua capacità riformatrice: quale verdetto supportano le prove?",
                                  "sideA": "Sistema meno peggiore",
                                  "sideB": "Capacità esaurita",
                                  "level": "advanced",
                                  "ideasA": [
                                            "I meccanismi di successione pacifica e il dissenso istituzionalizzato rimangono i salvaguardi più efficaci contro la tirannia.",
                                            "L'adattabilità storica dei sistemi liberali suggerisce che essi possiedano un'impareggiabile capacità di autocorrezione a lungo termine."
                                  ],
                                  "ideasB": [
                                            "La paralisi delle istituzioni democratiche di fronte alla crescente disuguaglianza e al collasso climatico suggerisce un fallimento sistemico terminale.",
                                            "La democrazia contemporanea è stata svuotata dalla governance tecnocratica e dall'influenza schiacciante del capitale concentrato."
                                  ]
                        },
                        {
                                  "topic": "La capacità di autoinganno come difetto cognitivo vs come meccanismo adattativo: quale resoconto serve meglio l'adulto che vuole vivere bene?",
                                  "sideA": "Difetto cognitivo",
                                  "sideB": "Meccanismo adattativo",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Un impegno verso la verità radicale è essenziale per prendere decisioni informate e costruire relazioni autentiche basate sulla realtà.",
                                            "L'autoinganno sistematico preclude la possibilità di una genuina conoscenza di sé e la risoluzione dei conflitti psicologici sottostanti."
                                  ],
                                  "ideasB": [
                                            "Un grado di 'illusione positiva' è spesso necessario per mantenere la motivazione e la resilienza richieste per affrontare le avversità intrinseche della vita.",
                                            "La mente umana si è evoluta per dare priorità alla coesione sociale e alla sopravvivenza rispetto all'elaborazione fredda e oggettiva delle informazioni."
                                  ]
                        },
                        {
                                  "topic": "L'esperienza come autorità epistemica vs l'esperienza come forma di potere istituzionale che merita scrutinio: quando il sano scetticismo diventa codardia epistemica?",
                                  "sideA": "Autorità epistemica",
                                  "sideB": "Potere istituzionale",
                                  "level": "advanced",
                                  "ideasA": [
                                            "In un mondo sempre più complesso, il rispetto della conoscenza specializzata è un necessario dispositivo di risparmio cognitivo e un prerequisito per una politica efficace.",
                                            "I rigorosi standard di revisione paritaria ed empirici delle comunità di esperti forniscono la più affidabile approssimazione della verità oggettiva disponibile."
                                  ],
                                  "ideasB": [
                                            "La classe degli 'esperti' riflette spesso i pregiudizi e gli interessi delle istituzioni che finanziano e legittimano le loro credenziali.",
                                            "Democratizzare la conoscenza richiede di sfidare il monopolio delle élite accreditate su ciò che conta come prova valida o realtà vissuta."
                                  ]
                        },
                        {
                                  "topic": "La narrazione come modo primario in cui gli adulti danno senso alle loro vite vs la narrazione come modo primario in cui gli adulti si ingannano: quale funzione domina?",
                                  "sideA": "Dare senso",
                                  "sideB": "Ingannarsi",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Lo storytelling ci permette di sintetizzare esperienze disparate in un insieme significativo, favorendo la coerenza psicologica e l'agenzia.",
                                            "La cultura umana è fondamentalmente narrativa; senza di essa, abiteremmo un mondo di eventi casuali privi di scopo."
                                  ],
                                  "ideasB": [
                                            "Il desiderio di una 'trama ordinata' ci porta spesso a ignorare i dati che contraddicono l'immagine di noi stessi preferita o i nostri impegni ideologici.",
                                            "Le strutture narrative impongono una falsa teleologia alla vita, mascherando il ruolo della pura contingenza e della casualità caotica nelle nostre storie personali."
                                  ]
                        },
                        {
                                  "topic": "L'onestà come virtù incondizionata vs l'onestà come virtù contestuale: esiste un resoconto coerente della sincerità che sopravviva al contatto con le reali relazioni adulte?",
                                  "sideA": "Virtù incondizionata",
                                  "sideB": "Virtù contestuale",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'inganno, per quanto ben intenzionato, erode la realtà intersoggettiva richiesta per una genuina connessione umana e per la fiducia.",
                                            "L'impegno verso la verità riflette un rispetto fondamentale per l'autonomia altrui, permettendo loro di rispondere al mondo così com'è realmente."
                                  ],
                                  "ideasB": [
                                            "L'applicazione rigida della 'brutale onestà' può essere una forma di crudeltà che privilegia la propria purezza morale rispetto al benessere altrui.",
                                            "Pragmatici 'lubrificanti sociali' e la condivisione selettiva delle informazioni sono essenziali per navigare le complessità della vita comunitaria e il tatto professionale."
                                  ]
                        },
                        {
                                  "topic": "L'adulto che ha \"finalmente capito tutto\" vs l'adulto che ha accettato che non lo farà mai: chi rappresenta un rapporto più sofisticato con la realtà?",
                                  "sideA": "Capito tutto",
                                  "sideB": "Accettato l'ignoto",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Il raggiungimento di un insieme stabile di valori e di una chiara comprensione del proprio posto nel mondo è il segno distintivo della maturità psicologica.",
                                            "La sintesi dell'esperienza in saggezza azionabile permette un impegno più efficace e deciso con le sfide della vita."
                                  ],
                                  "ideasB": [
                                            "La saggezza consiste nel riconoscimento socratico della vastità della nostra ignoranza e della radicale contingenza delle nostre prospettive.",
                                            "Un'apertura alla revisione perpetua e alla 'mente del principiante' previene la calcificazione intellettuale che spesso accompagna l'invecchiamento."
                                  ]
                        },
                        {
                                  "topic": "Dire tutto al proprio terapeuta vs dire tutto al proprio parrucchiere: quale relazione professionale è empiricamente più trasformativa e perché la risposta ci mette a disagio?",
                                  "sideA": "Terapeuta",
                                  "sideB": "Parrucchiere",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'ambiente clinico fornisce un contesto strutturato e guidato dalla teoria, progettato specificamente per la decostruzione di schemi psichici profondi.",
                                            "La neutralità professionale del terapeuta e la formazione nell'inconscio permettono intuizioni impossibili in una conversazione casuale."
                                  ],
                                  "ideasB": [
                                            "La natura tattile e a basso rischio del salone facilita spesso una vulnerabilità spontanea e autentica che gli interventi clinici possono soffocare.",
                                            "Il parrucchiere rappresenta una forma di cura comunitaria e quotidiana che è più integrata nel tessuto della vita rispetto all'artificialità dell'ora di colloquio."
                                  ]
                        },
                        {
                                  "topic": "Il linguaggio come costitutivo del pensiero vs il linguaggio come meramente espressivo: il linguaggio modella o riflette la realtà?",
                                  "sideA": "Costitutivo",
                                  "sideB": "Espressivo",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Le strutture lessicali e grammaticali della nostra lingua madre forniscono le categorie stesse attraverso le quali percepiamo e concettualizziamo il mondo.",
                                            "La relatività linguistica suggerisce che i concetti per i quali mancano le parole rimangano effettivamente impensabili o significativamente più difficili da cogliere."
                                  ],
                                  "ideasB": [
                                            "Il linguaggio è uno strumento a valle per comunicare processi cognitivi pre-linguistici ed esperienze sensoriali universali alla specie.",
                                            "La capacità di inventare nuova terminologia per descrivere fenomeni precedentemente non mappati prova che il pensiero precede la sua articolazione linguistica."
                                  ]
                        },
                        {
                                  "topic": "Precisione vs ambiguità: quale proprietà del linguaggio è più preziosa nel discorso pubblico?",
                                  "sideA": "Precisione",
                                  "sideB": "Ambiguità",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La rigorosa chiarezza terminologica è l'unica difesa contro l'offuscamento intenzionale e il 'politichese' usato per manipolare l'opinione pubblica.",
                                            "La precisione tecnica permette il dibattito basato sulle prove e le formulazioni politiche specifiche richieste per risolvere complessi problemi sociali."
                                  ],
                                  "ideasB": [
                                            "L'ambiguità produttiva permette la formazione di ampie coalizioni e la 'vaghezza strategica' necessaria per il compromesso diplomatico.",
                                            "Un linguaggio sfumato e polisemico è più adatto a catturare le contraddizioni e le complessità intrinseche della realtà sociale umana."
                                  ]
                        },
                        {
                                  "topic": "Retorica vs logica: cosa è in definitiva più persuasivo e cosa dovrebbe esserlo?",
                                  "sideA": "Retorica",
                                  "sideB": "Logica",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Gli esseri umani sono fondamentalmente creature narrative ed emotive; anche l'argomento più solido fallisce se non risuona con i valori del pubblico.",
                                            "L'eloquenza e il framing possono colmare il divario tra verità astratta e azione collettiva, mobilitando le persone in modi che i freddi sillogismi non possono fare."
                                  ],
                                  "ideasB": [
                                            "La logica fornisce l'unico standard oggettivo e universale di validità, proteggendo il discorso dal potere manipolatorio della demagogia carismatica.",
                                            "Una società che privilegia lo stile sulla sostanza è strutturalmente vulnerabile alla disinformazione e all'erosione degli standard epistemici."
                                  ]
                        },
                        {
                                  "topic": "Significato letterale vs significato interpretativo: chi possiede il significato di un testo?",
                                  "sideA": "Letterale",
                                  "sideB": "Interpretativo",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'intento dell'autore e il contesto storico-grammaticale della creazione di un'opera forniscono l'unica ancora stabile per la comunicazione.",
                                            "Il soggettivismo radicale nell'interpretazione rende inutile l'atto dello scrivere, poiché il testo diventa solo uno specchio per i pregiudizi esistenti del lettore."
                                  ],
                                  "ideasB": [
                                            "La 'morte dell'autore' libera il testo di generare nuovi significati attraverso l'incontro con diversi contesti culturali e temporali.",
                                            "Il significato è un processo co-creativo; un'opera vive davvero solo quando viene filtrata attraverso l'esperienza vissuta unica del destinatario."
                                  ]
                        },
                        {
                                  "topic": "Consenso scientifico vs umiltà epistemica: quando è giustificato il rispetto per la competenza?",
                                  "sideA": "Consenso",
                                  "sideB": "Umiltà",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Il peso collettivo delle prove sottoposte a revisione paritaria è la guida più affidabile per le politiche pubbliche, specialmente riguardo a rischi esistenziali.",
                                            "Il dissenso fine a se stesso, senza rigorose controprove, è spesso un esercizio di vanità che mette a repentaglio la sicurezza pubblica."
                                  ],
                                  "ideasB": [
                                            "La storia è costellata di 'consensi scientifici' che sono stati successivamente ribaltati; mantenere un grado di scetticismo è essenziale per il progresso intellettuale.",
                                            "Il rispetto dell'autorità può diventare una forma di 'scientismo' che ignora le dimensioni etiche, sociali e filosofiche di questioni complesse."
                                  ]
                        },
                        {
                                  "topic": "Competenza vs esperienza vissuta: cosa ha più peso probatorio nel dibattito pubblico?",
                                  "sideA": "Competenza",
                                  "sideB": "Esperienza vissuta",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La formazione specializzata e l'analisi basata sui dati forniscono una visione panoramica di questioni sistemiche che gli aneddoti personali non possono catturare.",
                                            "La competenza oggettiva è necessaria per separare le tendenze generalizzabili dall'intensità emotiva di eventi individuali e idiosincratici."
                                  ],
                                  "ideasB": [
                                            "Coloro che sono direttamente colpiti da una politica possiedono una comprensione granulare e qualitativa dei suoi effetti che i modelli astratti spesso mancano.",
                                            "Privilegiare le credenziali accademiche sulla testimonianza di gruppi emarginati può rafforzare gli squilibri di potere esistenti e mettere a tacere verità vitali."
                                  ]
                        },
                        {
                                  "topic": "Il dubbio come virtù intellettuale vs il dubbio come paralisi: quando lo scetticismo diventa irresponsabile?",
                                  "sideA": "Virtù",
                                  "sideB": "Paralisi",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Una persistente volontà di mettere in discussione i propri presupposti è l'unico baluardo contro i pericoli del dogmatismo ideologico.",
                                            "L'integrità intellettuale richiede la sospensione del giudizio finché non siano state raccolte prove sufficienti, indipendentemente dalla pressione sociale."
                                  ],
                                  "ideasB": [
                                            "Il dubbio fabbricato è una tattica comune usata per bloccare azioni urgenti su questioni dove le prove sono già schiaccianti.",
                                            "Il rifiuto di impegnarsi in qualsiasi posizione può essere una forma di codardia epistemica che abdica alla responsabilità di agire in un mondo di incertezza."
                                  ]
                        },
                        {
                                  "topic": "Narrazione vs dati: cosa muove le persone verso la verità in modo più affidabile?",
                                  "sideA": "Narrativa",
                                  "sideB": "Dati",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Le statistiche astratte sono spesso psicologicamente inerti; abbiamo bisogno della 'storia umana' per fornire la salienza morale necessaria per una comprensione genuina.",
                                            "Le parabole e le storie contestualizzano i fatti crudi, dando loro un significato che ne permette l'integrazione nella nostra visione del mondo."
                                  ],
                                  "ideasB": [
                                            "Le narrazioni sono suscettibili al 'pregiudizio di conferma' e all''euristica della disponibilità', portandoci a sovrageneralizzare da storie avvincenti ma non rappresentative.",
                                            "I dati quantitativi forniscono l'unica mappa accurata della realtà, proteggendoci dal potere manipolatorio di aneddoti emotivamente carichi."
                                  ]
                        },
                        {
                                  "topic": "Legittimità attraverso il consenso vs legittimità attraverso il risultato: cosa giustifica veramente l'autorità politica?",
                                  "sideA": "Consenso",
                                  "sideB": "Risultato",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'autorità politica è moralmente difendibile solo quando deriva dalla volontà esplicita e continua dei governati.",
                                            "L'equità procedurale del processo democratico è la fonte primaria del diritto di uno stato di esigere obbedienza."
                                  ],
                                  "ideasB": [
                                            "La giustificazione primaria di un governo è la sua capacità di fornire sicurezza, prosperità e l'erogazione efficiente dei servizi essenziali.",
                                            "La legittimità procedurale è vuota se il sistema fallisce costantemente nel produrre le condizioni materiali necessarie per una società fiorente."
                                  ]
                        },
                        {
                                  "topic": "Lo stato come garante della libertà vs lo stato come sua minaccia primaria: qual è la visione storicamente più difendibile?",
                                  "sideA": "Garante",
                                  "sideB": "Minaccia",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Senza il 'monopolio dell'uso legittimo della forza' per far rispettare i contratti e proteggere i diritti, la vita sarebbe uno stato di predazione privata caotica.",
                                            "Lo stato moderno è l'unica entità capace di proteggere l'individuo dal potere schiacciante delle corporazioni e di altri attori non statali."
                                  ],
                                  "ideasB": [
                                            "La storia dimostra che la capacità dello stato di sorveglianza, mobilitazione di massa e violenza lo rende il predatore più pericoloso di tutti.",
                                            "L'espansione della burocrazia statale porta inevitabilmente alla 'gabbia d'acciaio' del controllo tecnocratico, erodendo l'agenzia individuale e l'autonomia locale."
                                  ]
                        },
                        {
                                  "topic": "Politica basata sui diritti vs politica basata sulle responsabilità: cosa rende una cultura pubblica più coerente?",
                                  "sideA": "Diritti",
                                  "sideB": "Responsabilità",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Concentrarsi sui diritti individuali inalienabili fornisce un robusto scudo contro la 'tirannia della maggioranza' e l'eccesso di potere statale.",
                                            "Un quadro incentrato sui diritti dà potere ai gruppi emarginati per esigere parità di trattamento e protezione ai sensi della legge."
                                  ],
                                  "ideasB": [
                                            "Un focus esclusivo sui diritti favorisce una cultura atomizzata e litigiosa che ignora i doveri reciproci che dobbiamo alla nostra comunità.",
                                            "Una società coerente richiede un riconoscimento condiviso degli oneri collettivi e degli obblighi morali necessari per sostenere il bene comune."
                                  ]
                        },
                        {
                                  "topic": "L'ideale di neutralità vs l'inevitabilità di una governance carica di valori: lo stato liberale può essere veramente neutrale?",
                                  "sideA": "Neutralità",
                                  "sideB": "Carica di valori",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Lo stato deve rimanere strettamente agnostico rispetto alla 'vita buona' per garantire che tutti i cittadini possano perseguire le proprie diverse concezioni di fioritura.",
                                            "La neutralità procedurale è l'unico modo per mantenere la pace sociale in una società pluralistica con quadri morali e religiosi in competizione."
                                  ],
                                  "ideasB": [
                                            "Ogni legge e politica incarna implicitamente un insieme specifico di priorità morali e visioni di ciò che costituisce una società desiderabile.",
                                            "La pretesa di 'neutralità' è spesso una maschera retorica per i valori della cultura dominante, presentandoli come universali e fuori discussione."
                                  ]
                        },
                        {
                                  "topic": "Intenzione vs ricezione: quale lettura di un'opera è autorevole?",
                                  "sideA": "Intenzione",
                                  "sideB": "Ricezione",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Un'opera d'arte è un atto comunicativo; ignorare gli obiettivi specifici del creatore porta a un profondo fallimento di comprensione e distorsione storica.",
                                            "Recuperare l'intento dell'autore fornisce un confine necessario contro l'approccio 'tutto è permesso' dell'interpretazione critica."
                                  ],
                                  "ideasB": [
                                            "Una volta che un'opera entra nella sfera pubblica, diventa indipendente dal suo creatore, accumulando nuovi significati basati sulla risposta del pubblico.",
                                            "La lettura 'autorevole' di un testo è spesso usata come strumento di gatekeeping culturale per sopprimere interpretazioni sovversive o eterodosse."
                                  ]
                        },
                        {
                                  "topic": "Valore estetico vs valore morale: un'opera bella può anche essere malvagia?",
                                  "sideA": "Estetico",
                                  "sideB": "Morale",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'arte dovrebbe essere giudicata dalle sue qualità formali interne e dal suo potere espressivo, indipendentemente dal carattere morale del suo creatore o del soggetto.",
                                            "Confondere l'estetica con l'etica porta a una cultura didattica e moralizzante che soffoca l'esplorazione creativa e la complessità."
                                  ],
                                  "ideasB": [
                                            "Il potere della bellezza può essere usato per glamourizzare ideologie dannose, rendendo la responsabilità morale dell'artista inseparabile dalle sue scelte estetiche.",
                                            "La vera 'grandezza artistica' è incompatibile con una visione del mondo che svaluta fondamentalmente la dignità umana o celebra la sofferenza."
                                  ]
                        },
                        {
                                  "topic": "L'avanguardia vs accessibilità: l'arte dovrebbe sfidare o includere?",
                                  "sideA": "Avanguardia",
                                  "sideB": "Accessibilità",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La funzione primaria dell'arte è di interrompere la percezione abituale ed espandere i confini del possibile, anche se ciò si traduce in un'alienazione iniziale.",
                                            "La 'difficoltà' dell'avanguardia è una resistenza necessaria contro i prodotti superficiali e stereotipati dell'industria culturale commerciale."
                                  ],
                                  "ideasB": [
                                            "L'arte che richiede un'istruzione d'élite per essere decifrata è una forma di distinzione di classe che rafforza l'esclusione sociale.",
                                            "Le opere d'arte più profonde sono quelle che raggiungono una risonanza universale, parlando a esperienze umane condivise oltre i confini culturali."
                                  ]
                        },
                        {
                                  "topic": "Arte istituzionalizzata vs arte irregolare (outsider art): cosa ha più peso culturale autentico?",
                                  "sideA": "Istituzionalizzata",
                                  "sideB": "Irregolare",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Le istituzioni forniscono la cura, la conservazione e il contesto accademico necessari che permettono all'arte di essere intesa come parte di una tradizione storica.",
                                            "I rigorosi standard dei principali musei e accademie assicurano la conservazione dei più alti traguardi della creatività umana."
                                  ],
                                  "ideasB": [
                                            "L'arte prodotta fuori dal sistema del 'mondo dell'arte' possiede un'intensità cruda e non mediata che viene spesso sterilizzata dal riconoscimento istituzionale.",
                                            "La prospettiva 'outsider' è essenziale per sfidare le convenzioni stantie e le gerarchie insulari dell'establishment culturale."
                                  ]
                        },
                        {
                                  "topic": "Il principio di precauzione vs il principio di proazione: quale dovrebbe governare le tecnologie emergenti?",
                                  "sideA": "Precauzionale",
                                  "sideB": "Proattivo",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Quando si affrontano rischi potenzialmente esistenziali o irreversibili, l'onere della prova deve spettare a chi propone l'innovazione per dimostrarne la sicurezza.",
                                            "Un approccio cauto previene il 'cieco slancio tecnologico' che ha portato a precedenti catastrofi ecologiche e sociali."
                                  ],
                                  "ideasB": [
                                            "L'iper-precauzione può soffocare le innovazioni necessarie per risolvere le crisi attuali, scegliendo la certezza della sofferenza presente rispetto a rischi futuri ipotetici.",
                                            "Il progresso umano richiede un approccio di 'gestione attiva' che dia priorità alla sperimentazione, all'iterazione e al coraggioso abbraccio dell'ignoto."
                                  ]
                        },
                        {
                                  "topic": "Il progresso scientifico come intrinsecamente buono vs il progresso come eticamente neutro: chi ha la responsabilità dell'uso della conoscenza?",
                                  "sideA": "Intrinsecamente buono",
                                  "sideB": "Eticamente neutro",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'espansione della conoscenza umana è un bene fondamentale che porta inevitabilmente alla riduzione della sofferenza e all'espansione della libertà.",
                                            "Anche le scoperte 'pericolose' sono preferibili a uno stato di ignoranza forzata, che cede solo potere a coloro disposti a perseguire la conoscenza in segreto."
                                  ],
                                  "ideasB": [
                                            "Gli strumenti scientifici sono moralmente a 'doppio uso'; il loro valore dipende interamente dai quadri politici ed etici in cui vengono impiegati.",
                                            "Gli scienziati devono accettare una 'responsabilità estesa' per gli impatti sociali e ambientali prevedibili della loro ricerca."
                                  ]
                        },
                        {
                                  "topic": "Mitigazione del rischio esistenziale vs riduzione della sofferenza presente: dove dovrebbero risiedere le priorità morali dell'umanità?",
                                  "sideA": "Rischio esistenziale",
                                  "sideB": "Sofferenza attuale",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Il peso morale di trilioni di potenziali vite future supera i bisogni immediati della generazione attuale; dobbiamo garantire la sopravvivenza a lungo termine della specie.",
                                            "Concentrarsi sul presente è una forma di 'parrocchialismo temporale' che rischia la cessazione permanente dell'esperimento umano."
                                  ],
                                  "ideasB": [
                                            "Il nostro obbligo morale primario è verso gli individui concreti che soffrono oggi, non verso esseri ipotetici in un futuro speculativo.",
                                            "Il modo più efficace per garantire un futuro stabile è risolvere le disuguaglianze sistemiche e le crisi ecologiche che si stanno attualmente manifestando."
                                  ]
                        },
                        {
                                  "topic": "Coscienza umana vs intelligenza artificiale generale: una macchina potrebbe mai essere un paziente morale?",
                                  "sideA": "Coscienza",
                                  "sideB": "IA Generale",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Lo status morale richiede la capacità di 'senzienza'—l'esperienza soggettiva e qualitativa del dolore e del piacere—che è unicamente biologica.",
                                            "Un'IA generale, per quanto sofisticata, è in definitiva un insieme di algoritmi privi della 'vita interiore' che giustifica la preoccupazione morale."
                                  ],
                                  "ideasB": [
                                            "Se una macchina esibisce marcatori comportamentali di intelligenza e sofferenza indistinguibili da quelli umani, negarle lo status morale è una forma di 'sciovinismo del carbonio'.",
                                            "Dovremmo adottare un approccio 'precauzionale' all'etica delle macchine, concedendo diritti a sistemi sufficientemente complessi per evitare il rischio di sofferenza sintetica di massa."
                                  ]
                        },
                        {
                                  "topic": "Il progresso come reale vs il progresso come illusione: la storia si sta muovendo verso qualcosa?",
                                  "sideA": "Reale",
                                  "sideB": "Illusione",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La chiara tendenza al rialzo dell'aspettativa di vita, dell'alfabetizzazione e della riduzione globale della povertà estrema costituisce un progresso oggettivo innegabile.",
                                            "L'espansione del 'cerchio morale' per includere gruppi precedentemente emarginati suggerisce una lenta ma reale maturazione di civiltà."
                                  ],
                                  "ideasB": [
                                            "L'avanzamento tecnologico spesso cambia solo la scala dei nostri problemi invece di risolverli, portando a nuove forme di alienazione e capacità distruttiva.",
                                            "Il 'mito del progresso' è una teleologia secolarizzata che ci rende ciechi alla natura ciclica della storia e alla costante minaccia di regressione."
                                  ]
                        },
                        {
                                  "topic": "Ordine liberale occidentale vs mondo multipolare: quale base è più stabile per le relazioni internazionali?",
                                  "sideA": "Ordine liberale",
                                  "sideB": "Multipolarità",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Un sistema basato sui diritti umani universali e sul diritto internazionale fornisce il quadro più affidabile per la pace e la cooperazione globale.",
                                            "La leadership di una coalizione liberale dominante previene i 'dilemmi di sicurezza' e i conflitti tra grandi potenze tipici dei sistemi multipolari."
                                  ],
                                  "ideasB": [
                                            "Un mondo multipolare riflette più accuratamente la diversità dei valori e degli interessi globali, prevenendo il percepito imperialismo di una singola 'egemonia'.",
                                            "La stabilità si ottiene meglio attraverso un realistico 'equilibrio di potere' e il rispetto reciproco per la sovranità culturale e politica."
                                  ]
                        },
                        {
                                  "topic": "Memoria vs oblio: cosa è più essenziale per una sana identità collettiva?",
                                  "sideA": "Memoria",
                                  "sideB": "Oblio",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Il rifiuto di dimenticare le ingiustizie passate è l'unico modo per garantire la responsabilità e prevenire la ripetizione di atrocità storiche.",
                                            "Una robusta memoria collettiva fornisce la narrazione condivisa e la continuità culturale necessarie per la coesione sociale e l'identità."
                                  ],
                                  "ideasB": [
                                            "Un grado di 'oblio strategico' è spesso richiesto per superare antiche rimostranze comunitarie e raggiungere la riconciliazione civile.",
                                            "La ruminazione ossessiva sulla gloria o sul trauma passati può intrappolare una società nel passato, impedendo l'adattamento innovativo richiesto per il futuro."
                                  ]
                        },
                        {
                                  "topic": "La tragedia dei beni comuni vs la possibilità di cooperazione: cosa ci dice la storia sulla natura umana?",
                                  "sideA": "Tragedia",
                                  "sideB": "Cooperazione",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Senza regolamentazione coercitiva o proprietà privata, gli individui daranno inevitabilmente priorità ai propri interessi a breve termine, portando all'esaurimento delle risorse condivise.",
                                            "Il persistente fallimento nell'affrontare le sfide ambientali globali conferma la difficoltà intrinseca di coordinare l'azione su larga scala."
                                  ],
                                  "ideasB": [
                                            "La storia è piena di esempi di comunità che gestiscono con successo i 'beni comuni' attraverso sistemi complessi di norme sociali e monitoraggio reciproco.",
                                            "Gli esseri umani sono 'cooperatori obbligati'; i nostri più grandi traguardi sono il risultato della nostra capacità unica di collaborazione flessibile su larga scala."
                                  ]
                        },
                        {
                                  "topic": "Silenzio vs parola: quale possiede un maggior potere comunicativo nei momenti di crisi?",
                                  "sideA": "Silenzio",
                                  "sideB": "Parola",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Il silenzio strategico può fungere da profonda forma di contenimento, prevenendo l'escalation della volatilità e preservando la dignità dell'indicibile.",
                                            "Il rifiuto di partecipare alla 'cacofonia del momento' permette lo spazio necessario per la riflessione e l'eventuale emergere di verità più ponderate."
                                  ],
                                  "ideasB": [
                                            "La parola articolata è essenziale per fornire chiarezza, dirigere l'azione collettiva e contrastare la diffusione di disinformazione destabilizzante.",
                                            "L'atto coraggioso di prendere la parola fornisce un'ancora morale per gli altri, trasformando il disagio privato in una narrazione pubblica e gestibile."
                                  ]
                        },
                        {
                                  "topic": "La traduzione come fedeltà vs la traduzione come atto creativo: qual è l'approccio più onesto?",
                                  "sideA": "Fedeltà",
                                  "sideB": "Atto creativo",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'obbligo morale primario del traduttore è verso l'intento originale dell'autore e la specifica 'estraneità' culturale e linguistica del testo sorgente.",
                                            "Tentare di 'migliorare' o addomesticare eccessivamente un'opera ne erode l'integrità storica e nega al lettore un genuino incontro con l''Altro'."
                                  ],
                                  "ideasB": [
                                            "Un approccio letteralista spesso si traduce in un testo morto; la vera fedeltà richiede la ricreazione creativa dell'impatto emotivo ed estetico dell'opera nella lingua d'arrivo.",
                                            "La traduzione è un atto di metamorfosi; il traduttore deve essere un artista a pieno titolo per garantire la continua vitalità dell'opera in un nuovo contesto."
                                  ]
                        },
                        {
                                  "topic": "Conoscenza istituzionale vs conoscenza distribuita: quale è più robusta contro l'errore?",
                                  "sideA": "Conoscenza istituzionale",
                                  "sideB": "Conoscenza distribuita",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Le istituzioni formali forniscono la struttura necessaria, la memoria d'archivio e il rigore della revisione paritaria per filtrare errori idiosincratici o effimeri.",
                                            "La continuità dei protocolli stabiliti e delle gerarchie specializzate garantisce che la conoscenza rimanga stabile e trasferibile attraverso le generazioni."
                                  ],
                                  "ideasB": [
                                            "La 'saggezza della folla' e le reti decentralizzate sono meno suscettibili ai pregiudizi cognitivi e alla cattura sistemica che affliggono le istituzioni insulari.",
                                            "I sistemi distribuiti facilitano la rapida correzione degli errori attraverso l'elaborazione parallela e le diverse prospettive di attori indipendenti."
                                  ]
                        },
                        {
                                  "topic": "La mappa vs il territorio: quando il nostro modello di realtà diventa una prigione?",
                                  "sideA": "La Mappa (Modelli)",
                                  "sideB": "Il Territorio (Realtà)",
                                  "level": "advanced",
                                  "ideasA": [
                                            "I modelli astratti sono strumenti cognitivi indispensabili che ci permettono di navigare in una realtà sensoriale altrimenti schiacciante e caotica.",
                                            "La costruzione di modelli è il segno distintivo dell'intelligenza umana, consentendo la previsione e la manipolazione dell'ambiente a vantaggio collettivo."
                                  ],
                                  "ideasB": [
                                            "Scambiare il modello per la realtà porta a una 'cattura concettuale' in cui ignoriamo le prove che non si adattano ai nostri quadri teorici preesistenti.",
                                            "La ricchezza dell'esperienza vissuta viene inevitabilmente appiattita dall'astrazione; dobbiamo rimanere perennemente consapevoli della 'perdita di segnale' insita in ogni rappresentazione."
                                  ]
                        },
                        {
                                  "topic": "Rivoluzione vs riforma: quale è il motore più efficace per un cambiamento duraturo?",
                                  "sideA": "Rivoluzione",
                                  "sideB": "Riforma",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'ingiustizia sistemica spesso richiede una rottura radicale per smantellare strutture di potere trincerate che sono strutturalmente incapaci di autocorrezione.",
                                            "Un momento rivoluzionario riconfigura l''orizzonte del possibile', permettendo la nascita di immaginari sociali e politici interamente nuovi."
                                  ],
                                  "ideasB": [
                                            "La riforma incrementale è più sostenibile e meno incline alla voragine di violenza catastrofica che segue gli sconvolgimenti improvvisi.",
                                            "Il cambiamento duraturo si costruisce attraverso il lavoro paziente di costruzione delle istituzioni e il graduale spostamento delle norme culturali."
                                  ]
                        },
                        {
                                  "topic": "Giustizia come procedura vs giustizia come esito: a cosa dovremmo mirare?",
                                  "sideA": "Procedura",
                                  "sideB": "Esito",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'equità dipende dalla stretta adesione a regole imparziali; un sistema che privilegia risultati specifici rischia di diventare uno strumento di potere arbitrario.",
                                            "La giustizia procedurale garantisce la legittimità a lungo termine delle istituzioni fornendo un quadro prevedibile."
                                  ],
                                  "ideasB": [
                                            "Un processo è vacuo se produce costantemente risultati palesemente ingiusti o che perpetuano la disuguaglianza sistemica.",
                                            "La vera giustizia richiede la rettifica proattiva dei torti storici e il raggiungimento di un'equità sostanziale."
                                  ]
                        },
                        {
                                  "topic": "Forma vs contenuto: qual è la vera misura del successo artistico?",
                                  "sideA": "Forma",
                                  "sideB": "Contenuto",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La maestria artistica è definita dalla manipolazione innovativa del mezzo; il contenuto è solo l'occasione per l'esercizio della brillantezza formale.",
                                            "Il potere estetico di un'opera risiede nel suo 'come' piuttosto che nel suo 'cosa'."
                                  ],
                                  "ideasB": [
                                            "L'arte è fondamentalmente un atto comunicativo; la sperimentazione formale è vuoto virtuosismo se non serve ad approfondire la comprensione umana.",
                                            "Il 'peso' di un'opera deriva dalla sua sostanza morale, sociale o filosofica."
                                  ]
                        },
                        {
                                  "topic": "La morte dell'autore vs la continua rilevanza dell'autore: Barthes ha vinto?",
                                  "sideA": "Morte dell'Autore",
                                  "sideB": "Rilevanza dell'Autore",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'interpretazione appartiene al lettore; la biografia dell'autore e le intenzioni dichiarate sono irrilevanti per i significati multidimensionali generati dal testo.",
                                            "Recidere l'opera dal suo creatore impedisce all''autore-dio' di imporre un unico significato autorevole."
                                  ],
                                  "ideasB": [
                                            "L'arte è un atto di testimonianza; comprendere lo specifico contesto storico e personale del creatore è essenziale per una lettura etica.",
                                            "La 'voce autoriale' fornisce una prospettiva unica che costituisce la fonte primaria di valore dell'opera."
                                  ]
                        },
                        {
                                  "topic": "Etica del potenziamento vs sacralità dei limiti naturali: gli esseri umani dovrebbero essere liberi di aumentare le proprie capacità?",
                                  "sideA": "Potenziamento",
                                  "sideB": "Limiti naturali",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La condizione umana è sempre stata definita dalla trascendenza tecnologica dei vincoli biologici; il potenziamento è la continuazione logica.",
                                            "Potenziare i tratti cognitivi o fisici è un'espressione proattiva della libertà morfologica."
                                  ],
                                  "ideasB": [
                                            "Abbandonare i limiti naturali rischia di creare un divario di classe biologico permanente.",
                                            "Esiste un'intrinseca 'saggezza del corpo' e dell'evoluzione; un'interferenza presuntuosa può portare a conseguenze irreversibili."
                                  ]
                        },
                        {
                                  "topic": "Lungotermismo vs etica focalizzata sul presente: cosa dovrebbe guidare le nostre decisioni più conseguenti?",
                                  "sideA": "Lungotermismo",
                                  "sideB": "Presente",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Le persone future hanno lo stesso valore morale di quelle in vita oggi; dobbiamo dare priorità alla mitigazione dei rischi esistenziali.",
                                            "Adottare una 'visione a lungo termine' previene il parrocchialismo temporale."
                                  ],
                                  "ideasB": [
                                            "Fissarsi su scenari futuri speculativi può essere una scusa per ignorare la sofferenza acuta che i viventi affrontano attualmente.",
                                            "Il futuro è fondamentalmente imprevedibile; la nostra responsabilità primaria è creare un presente giusto."
                                  ]
                        },
                        {
                                  "topic": "Diritti degli animali vs eccezionalismo umano: su quali basi si può giustificare uno status morale differente?",
                                  "sideA": "Diritti animali",
                                  "sideB": "Eccezionalismo umano",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La capacità di sentire e l'esperienza del dolore dovrebbero essere gli unici criteri rilevanti per la considerazione morale.",
                                            "Mantenere la gerarchia uomo-animale è una forma arbitraria di 'specismo'."
                                  ],
                                  "ideasB": [
                                            "Gli esseri umani possiedono capacità uniche di agenzia morale e autoriflessione che fondano uno status morale distinto.",
                                            "Il contratto sociale e i nostri obblighi etici sono fondamentalmente reciproci."
                                  ]
                        },
                        {
                                  "topic": "La tragedia come modalità dominante della storia vs la commedia: cosa descrive più accuratamente la vicenda umana?",
                                  "sideA": "Tragedia",
                                  "sideB": "Commedia",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La storia è definita dall'inevitabile hybris delle civiltà e dal ricorrente fallimento dei nostri ideali più nobili.",
                                            "La lente tragica cattura la gravità della finitezza umana in un mondo indifferente."
                                  ],
                                  "ideasB": [
                                            "La vicenda umana è fatta di assurda resilienza, adattamento inaspettato e persistente trionfo del 'piccolo' sulla 'grande' narrazione.",
                                            "Vedere la storia come commedia permette una prospettiva più indulgente sulle nostre comuni follie."
                                  ]
                        },
                        {
                                  "topic": "Declino delle civiltà come inevitabile vs contingente: siamo condannati dalla struttura o dalle scelte?",
                                  "sideA": "Inevitabile",
                                  "sideB": "Contingente",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Le civiltà sono entità organiche soggette alle stesse leggi di entropia e calcificazione istituzionale di qualsiasi sistema complesso.",
                                            "La 'legge ferrea dell'oligarchia' rende l'eventuale collasso delle società su larga scala una certezza strutturale."
                                  ],
                                  "ideasB": [
                                            "Il declino è il risultato di specifici fallimenti politici; possediamo la capacità riflessiva di imparare dalla storia.",
                                            "Il fatalismo è una profezia che si autoavvera; la fede nella nostra agenzia è il prerequisito per il cambiamento."
                                  ]
                        },
                        {
                                  "topic": "Il metodo socratico vs dire semplicemente la risposta: l'ignoranza produttiva è gentilezza o crudeltà?",
                                  "sideA": "Metodo socratico",
                                  "sideB": "Risposta diretta",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Il vero apprendimento richiede la deconstructione attiva dei propri presupposti; l'aporia è il travaglio della nascita della saggezza.",
                                            "L'indagine guidata favorisce le capacità di pensiero critico necessarie per navigare in un mondo di verità in competizione."
                                  ],
                                  "ideasB": [
                                            "Trattenere informazioni note può essere una forma di gatekeeping che spreca tempo in un'era di sfide urgenti.",
                                            "L'istruzione diretta è un atto di generosità epistemica, fornendo le basi su cui altri possono costruire."
                                  ]
                        },
                        {
                                  "topic": "La Nave di Teseo vs il tuo io bambino: a che punto la sostituzione graduale rende un'altra persona, e ha importanza?",
                                  "sideA": "Continuità del Sé",
                                  "sideB": "Discontinuità radicale",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'identità si trova nella continuità del pattern: il flusso di ricordi, valori e impegni relazionali.",
                                            "Il sé è un progetto narrativo; finché la storia può essere raccontata in modo coerente, la persona rimane la stessa."
                                  ],
                                  "ideasB": [
                                            "I radicali cambiamenti fisiologici tra l'infanzia e l'età adulta suggeriscono che siamo una successione di esseri diversi.",
                                            "Accettare la 'morte' dei nostri io precedenti permette un impegno più autentico con la persona che stiamo diventando."
                                  ]
                        },
                        {
                                  "topic": "Saggezza infinita vs appagamento infinito: se costretti a scegliere, cosa costituirebbe la vita migliore?",
                                  "sideA": "Saggezza infinita",
                                  "sideB": "Appagamento infinito",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La ricerca della verità è la più alta vocazione umana; una vita di beatitudine ignorante è un'esistenza diminuita.",
                                            "La saggezza permette un impegno profondo con la realtà, che è intrinsecamente più prezioso di una serenità fabbricata."
                                  ],
                                  "ideasB": [
                                            "L'obiettivo finale di ogni sforzo è la cessazione della sofferenza; l'appagamento offre una risoluzione finale.",
                                            "Una vita di pace è l'unica scelta razionale; la saggezza che porta solo miseria è un fardello autodistruttivo."
                                  ]
                        },
                        {
                                  "topic": "La parola \"moist\" vs il concetto di \"moist\": l'avversione fonoestetica è un fenomeno linguistico o culturale?",
                                  "sideA": "Linguistico",
                                  "sideB": "Culturale",
                                  "level": "advanced",
                                  "ideasA": [
                                            "L'articolazione fisica della parola: la combinazione della 'm' e del dittongo 'oi': scatena un disagio sensoriale.",
                                            "Certi fonemi possiedono una 'consistenza' naturale che può essere universalmente respingente."
                                  ],
                                  "ideasB": [
                                            "L'avversione è costruita socialmente, guidata dall'associazione con i fluidi corporei e da una 'meme-ificazione' del disgusto.",
                                            "Il linguaggio è un sistema arbitrario; nessun suono è 'disgustoso' senza il bagaglio del tabù culturale."
                                  ]
                        },
                        {
                                  "topic": "Avere ragione ed essere ignorati vs avere torto ed essere celebrati: qual è la descrizione più accurata?",
                                  "sideA": "Ragione e ignorati",
                                  "sideB": "Torto e celebrati",
                                  "level": "advanced",
                                  "ideasA": [
                                            "La verità è spesso scomoda, portando alla marginalizzazione di coloro che rifiutano di lusingare il consenso.",
                                            "La storia è piena di 'profeti in patria' le cui intuizioni sono state riconosciute solo dopo la loro distruzione."
                                  ],
                                  "ideasB": [
                                            "La coesione sociale e la 'menzogna piacevole' sono più vitali per la sopravvivenza rispetto ai fatti oggettivi.",
                                            "La consegna carismatica di una falsità porta spesso più utilità sociale rispetto alla goffa articolazione di una realtà."
                                  ]
                        },
                        {
                                  "topic": "Hot takes vs no takes: in un'era di saturazione epistemica, il silenzio è l'atto intellettuale più radicale?",
                                  "sideA": "Hot Takes",
                                  "sideB": "No Takes",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Lo scambio di opinioni provocatorie è una forma vitale di gioco intellettuale in una piazza pubblica iper-connessa.",
                                            "L'attrito di prospettive in competizione è l'unico modo per innescare una genuina intuizione collettiva."
                                  ],
                                  "ideasB": [
                                            "La domanda costante di 'reazione' erode la capacità di pensiero profondo; il rifiuto di un'opinione è sovranità cognitiva.",
                                            "Il silenzio strategico contrasta l''economia dell'attenzione' e previene la diluizione del discorso."
                                  ]
                        },
                        {
                                  "topic": "Procrastinazione come patologia vs procrastinazione come filosofia: l'azione ritardata è mai saggezza?",
                                  "sideA": "Patologia",
                                  "sideB": "Filosofia",
                                  "level": "advanced",
                                  "ideasA": [
                                            "Il ritardo cronico è un fallimento dell'autoregolazione che causa immenso stress e riduce il contributo sociale.",
                                            "Il procrastinatore è intrappolato in un ciclo di evitamento che impedisce la padronanza necessaria per una vita fiorente."
                                  ],
                                  "ideasB": [
                                            "Ritardare l'azione permette l''incubazione' subconscia delle idee e assicura di impegnarsi solo in ciò che conta.",
                                            "La procrastinazione può essere un rifiuto radicale di sottomettersi all''urgenza' artificiale del mercato."
                                  ]
                        }
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
