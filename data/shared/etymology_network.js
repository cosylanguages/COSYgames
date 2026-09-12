(function() {
    const etymologyNetworkData = [
      {
        root: "*dēmos + *kratos",
        rootLanguage: "Greek",
        meaning: "People + Power / Rule",
        reflexes: [
          { lang: "en", word: "Democracy", note: "Government by the people." },
          { lang: "fr", word: "Démocratie", note: "Système politique où le peuple exerce la souveraineté." },
          { lang: "de", word: "Demokratie", note: "Herrschaft des Volkes." },
          { lang: "es", word: "Democracia", note: "Sistema de gobierno donde el pueblo elige." },
          { lang: "it", word: "Democrazia", note: "Forma di governo in cui il potere spetta al popolo." },
          { lang: "pt", word: "Democracia", note: "Governo exercido pelo povo." },
          { lang: "ru", word: "Демократия", note: "Народовластие, политический режим." },
          { lang: "el", word: "Δημοκρατία", note: "Πολίτευμα όπου η εξουσία ανήκει στον λαό." },
          { lang: "br", word: "Demokratelezh", note: "Stumm gouarnerezh gant ar bobl." }
        ],
        detail: "Ancient Greek dēmos (people) and kratos (power) combined in 5th-century BCE Athens, later borrowed into Latin and spreading across European languages during the Enlightenment."
      },
      {
        root: "*philosophia",
        rootLanguage: "Greek",
        meaning: "Love of Wisdom",
        reflexes: [
          { lang: "en", word: "Philosophy", note: "Study of fundamental nature of knowledge and reality." },
          { lang: "fr", word: "Philosophie", note: "Ensemble des conceptions intellectuelles." },
          { lang: "de", word: "Philosophie", note: "Streben nach Erkenntnis des Lebens." },
          { lang: "es", word: "Filosofía", note: "Conjunto de reflexiones sobre la esencia." },
          { lang: "it", word: "Filosofia", note: "Attività di ricerca e riflessione teorica." },
          { lang: "pt", word: "Filosofia", note: "Estudo de questões fundamentais da existência." },
          { lang: "ru", word: "Философия", note: "Форма познания мира, вырабатывающая систему знаний." },
          { lang: "el", word: "Φιλοσοφία", note: "Αγάπη για τη σοφία και τη γνώση." },
          { lang: "hy", word: "Փիլիսոփայություն", note: "Իմաստասիրություն, գիտություն մտածողության մասին:" }
        ],
        detail: "From Greek philos (loving) and sophia (wisdom), coined by Pythagoras and popularized by Plato and Aristotle before becoming a global academic term."
      },
      {
        root: "*bureau + *kratos",
        rootLanguage: "French",
        meaning: "Writing Desk + Rule",
        reflexes: [
          { lang: "fr", word: "Bureaucratie", note: "Pouvoir des bureaux et des administrations." },
          { lang: "en", word: "Bureaucracy", note: "System of administration with non-elected officials." },
          { lang: "de", word: "Bürokratie", note: "Verwaltung durch Behörden und Beamte." },
          { lang: "ru", word: "Бюрократия", note: "Система управления силами чиновничеств." },
          { lang: "it", word: "Burocrazia", note: "Insieme di funzionari ed enti pubblici." },
          { lang: "pt", word: "Burocracia", note: "Organização administrativa." },
          { lang: "es", word: "Burocracia", note: "Administración con normas estrictas." }
        ],
        detail: "Coined by French economist Vincent de Gournay in the 18th century by blending French 'bureau' (desk/office) with Greek '-cratia' (rule)."
      },
      {
        root: "*čāy",
        rootLanguage: "Chinese",
        meaning: "Tea Leaves / Brewed Drink",
        reflexes: [
          { lang: "ru", word: "Чай", note: "Горячий напиток из листьев чая." },
          { lang: "ba", word: "Сәй", note: "Эссе эсемелек, сәй япраҡтары." },
          { lang: "tt", word: "Чәй", note: "Иртәнге һәм кичке җылы эчемлек." },
          { lang: "ka", word: "ჩაი", note: "ცხელი სასმელი." },
          { lang: "hy", word: "Թեյ / Չայ", note: "Տաք ըմպելիք:" },
          { lang: "el", word: "Τσάι", note: "Ρόφημα από φύλλα τσαγιού." },
          { lang: "pt", word: "Chá", note: "Bebida preparada por infusão." }
        ],
        detail: "Spread overland along the Silk Road from Sinitic *chá (茶), entering Russian, Turkic, Caucasian, and Portuguese maritime routes directly from Macao."
      },
      {
        root: "*qahwah",
        rootLanguage: "Arabic",
        meaning: "Coffee / Stimulating Brew",
        reflexes: [
          { lang: "fr", word: "Café", note: "Boisson chaude stimulante." },
          { lang: "de", word: "Kaffee", note: "Heißgetränk aus gemahlenen Bohnen." },
          { lang: "it", word: "Caffè", note: "Bevanda ottenuta dalla macinazione dei chicchi." },
          { lang: "es", word: "Café", note: "Bebida preparada con granos tostados." },
          { lang: "en", word: "Coffee", note: "Brewed beverage from roasted coffee beans." },
          { lang: "ru", word: "Кофе", note: "Ароматный напиток из обжаренных зёрен." },
          { lang: "ka", word: "ყავა", note: "ცხელი სასმელი." },
          { lang: "ba", word: "Ҡаһуә", note: "Иҫертмәй торған эсемелек." },
          { lang: "tt", word: "Кофе", note: "Тәмле эчемлек." }
        ],
        detail: "Originating in Yemen, Arabic qahwah entered Turkish (kahve), Venetian Italian (caffè), and spread to rest of Europe and Asia."
      },
      {
        root: "*bāzār",
        rootLanguage: "Persian",
        meaning: "Marketplace / Trade Square",
        reflexes: [
          { lang: "ka", word: "ბაზარი", note: "სავაჭრო მოედანი ან მაღაზიების ერთობლიობა." },
          { lang: "hy", word: "Բազար", note: "Շուկա, առևտրի տեղ:" },
          { lang: "ba", word: "Баҙар", note: "Төрлө тауарҙар һатыла торған урын." },
          { lang: "tt", word: "Базар", note: "Сәүдә урыны, базар мәйданы." },
          { lang: "ru", word: "Базар", note: "Торговая площадь или рынок." },
          { lang: "en", word: "Bazaar", note: "Middle Eastern or South Asian market." },
          { lang: "fr", word: "Bazar", note: "Lieu de vente de marchandises diverses." },
          { lang: "it", word: "Bazaar", note: "Mercato orientale." }
        ],
        detail: "Middle Persian bāzār (market) traveled through silk trade networks into Armenian, Georgian, Turkic languages, and Russian before reaching Western Europe."
      },
      {
        root: "*šakar",
        rootLanguage: "Sanskrit",
        meaning: "Gravel / Sweet Granules",
        reflexes: [
          { lang: "en", word: "Sugar", note: "Sweet crystalline substance." },
          { lang: "fr", word: "Sucre", note: "Substance douce cristallisée." },
          { lang: "de", word: "Zucker", note: "Süßungsmittel aus Rüben oder Rohr." },
          { lang: "es", word: "Azúcar", note: "Sustancia dulce obtenida de la caña." },
          { lang: "it", word: "Zucchero", note: "Sostanza dolce per alimenti." },
          { lang: "ru", word: "Сахар", note: "Сладкое кристаллическое вещество." },
          { lang: "ka", word: "შაქარი", note: "ტკბილი ნივთიერება." },
          { lang: "hy", word: "Շաքար", note: "Քաղցր նյութ:" },
          { lang: "ba", word: "Шәкәр", note: "Тәмләткес, аҡ кристалл матдә." },
          { lang: "tt", word: "Шәкәр", note: "Тәмле кәбестә һәм чәйгә салына торган матдә." }
        ],
        detail: "Sanskrit śarkarā became Persian shakkar, Arabic al-sukkar, Moorish Spanish azúcar, Italian zucchero, and spread across Europe and Eurasia."
      },
      {
        root: "*banc",
        rootLanguage: "Germanic",
        meaning: "Bench / Money Counter",
        reflexes: [
          { lang: "it", word: "Banca", note: "Istituto di credito commerciale." },
          { lang: "fr", word: "Banque", note: "Établissement financier." },
          { lang: "en", word: "Bank", note: "Financial institution for deposits and loans." },
          { lang: "es", word: "Banco", note: "Entidad financiera o asiento." },
          { lang: "de", word: "Bank", note: "Geldinstitut oder Sitzgelegenheit." },
          { lang: "ru", word: "Банк", note: "Финансово-кредитная организация." },
          { lang: "pt", word: "Banco", note: "Instituição financeira." },
          { lang: "el", word: "Τράπεζα (Calque) / Μπάνκα", note: "Χρηματοπιστωτικό ίδρυμα." }
        ],
        detail: "Lombardic Germanic *bank (bench) entered Renaissance Italian as 'banco' (money-changer's bench), spreading to French banque, English bank, and global finance."
      },
      {
        root: "*vokzal",
        rootLanguage: "English",
        meaning: "Vauxhall Gardens (Public Park & Station)",
        reflexes: [
          { lang: "ru", word: "Вокзал", note: "Здание железнодорожной станции." },
          { lang: "ba", word: "Вокзал", note: "Поездтар туҡтай торған ҙур станция." },
          { lang: "tt", word: "Вокзал", note: "Поезд һәм автобус станциясе." },
          { lang: "hy", word: "Վոկզալ", note: "Կայարան:" },
          { lang: "ka", word: "ვოკზალი", note: "რკინიგზის სადგური." }
        ],
        detail: "Russian diplomats visiting Victorian London in the 19th century inspected Vauxhall Gardens train stop; the name was borrowed as the generic word for main railway stations."
      },
      {
        root: "*tekhne + *logia",
        rootLanguage: "Greek",
        meaning: "Art / Skill + Study of",
        reflexes: [
          { lang: "en", word: "Technology", note: "Application of scientific knowledge." },
          { lang: "fr", word: "Technologie", note: "Étude des techniques et outils." },
          { lang: "de", word: "Technologie", note: "Wissenschaft von der Technik." },
          { lang: "es", word: "Tecnología", note: "Conjunto de conocimientos técnicos." },
          { lang: "it", word: "Tecnologia", note: "Applicazione pratica della scienza." },
          { lang: "pt", word: "Tecnologia", note: "Conjunto de técnicas e métodos." },
          { lang: "ru", word: "Технология", note: "Совокупность методов обработки." },
          { lang: "el", word: "Τεχνολογία", note: "Εφαρμογή της επιστημονικής γνώσης." }
        ],
        detail: "Greek technologia (systematic treatment of an art) was revived in 17th-century Europe to describe practical arts and industrial machinery."
      },
      {
        root: "*kāġaz",
        rootLanguage: "Persian",
        meaning: "Paper / Writing Sheet",
        reflexes: [
          { lang: "ka", word: "ქაღალდი", note: "საწერი და გასახვევი მასალა." },
          { lang: "hy", word: "Թուղթ (Calque) / Ղաղազ", note: "Գրելու նյութ:" },
          { lang: "ba", word: "Ҡағыҙ", note: "Яҙыу өсөн аҡ би бит." },
          { lang: "tt", word: "Кагаз", note: "Язу өчен яссы битләр." },
          { lang: "ru", word: "Бумага (related substrate) / Когаз", note: "Письменный материал." }
        ],
        detail: "Persian kāġaz passed into Arabic, Turkic, and Caucasian languages following paper-making techniques transmitted across Central Asia."
      },
      {
        root: "*musika",
        rootLanguage: "Greek",
        meaning: "Art of the Muses",
        reflexes: [
          { lang: "en", word: "Music", note: "Vocal or instrumental sounds." },
          { lang: "fr", word: "Musique", note: "Art d'combiner des sons." },
          { lang: "de", word: "Musik", note: "Tonkunst." },
          { lang: "es", word: "Música", note: "Arte de organizar los sonidos." },
          { lang: "it", word: "Musica", note: "Arte dei suoni." },
          { lang: "pt", word: "Música", note: "Arte de combinar os sons harmonicamente." },
          { lang: "ru", word: "Музыка", note: "Вид искусства, объединяющий звуки." },
          { lang: "el", word: "Μουσική", note: "Η τέχνη των ήχων." },
          { lang: "br", word: "Sonerezh / Muzik", note: "Arzoù ar sonioù." }
        ],
        detail: "Greek mousikē téchnē (art of the Muses) passed into Latin musica and subsequently spread throughout European and global languages."
      },
      {
        root: "*telegrafos",
        rootLanguage: "Greek / French",
        meaning: "Faraway + Writer",
        reflexes: [
          { lang: "fr", word: "Télégraphe", note: "Appareil de transmission à distance." },
          { lang: "en", word: "Telegraph", note: "Long-distance communication system." },
          { lang: "de", word: "Telegraf", note: "Gerät zur Nachrichtenübermittlung." },
          { lang: "ru", word: "Телеграф", note: "Система передачи сообщений по проводам." },
          { lang: "es", word: "Telégrafo", note: "Dispositivo de telecomunicación." },
          { lang: "it", word: "Telegrafo", note: "Sistema di comunicazione a distanza." },
          { lang: "ba", word: "Телеграф", note: "Элемтə ҡайтартҡыс сымлы система." },
          { lang: "tt", word: "Телеграф", note: "Хәбәр җибәрү җайланмасы." }
        ],
        detail: "Coined in France in 1792 by Claude Chappe using Greek tēle (far) and graphein (to write) for the optical semaphore line."
      },
      {
        root: "*atlantis / *atlas",
        rootLanguage: "Greek",
        meaning: "Titan supporting the Heavens / Map collection",
        reflexes: [
          { lang: "en", word: "Atlas", note: "Book of maps or charts." },
          { lang: "fr", word: "Atlas", note: "Recueil de cartes géographiques." },
          { lang: "de", word: "Atlas", note: "Kartenwerk." },
          { lang: "es", word: "Atlas", note: "Colección de mapas." },
          { lang: "it", word: "Atlante", note: "Raccolta di carte geografiche." },
          { lang: "ru", word: "Атлас", note: "Сборник географических карт." },
          { lang: "el", word: "Άτλας", note: "Βιβλίο χαρτών." },
          { lang: "pt", word: "Atlas", note: "Livro de mapas." }
        ],
        detail: "Named after the Greek Titan Atlas, portrayed holding the celestial sphere; Mercator used his image on 16th-century map books."
      },
      {
        root: "*computare",
        rootLanguage: "Latin",
        meaning: "To Calculate / Reckon Together",
        reflexes: [
          { lang: "en", word: "Computer", note: "Electronic machine for processing data." },
          { lang: "es", word: "Computadora", note: "Máquina electrónica de procesamiento." },
          { lang: "pt", word: "Computador", note: "Dispositivo eletrônico para processar dados." },
          { lang: "it", word: "Computer", note: "Elaboratore elettronico." },
          { lang: "ru", word: "Компьютер", note: "Вычислительная машина." },
          { lang: "ka", word: "კომპიუტერი", note: "ელექტრონული გამომთვლელი მანქანა." },
          { lang: "ba", word: "Компьютер", note: "Электрон иҫәпләү машинаһы." },
          { lang: "tt", word: "Компьютер", note: "Электрон исәпләү машинасы." }
        ],
        detail: "Latin com- (together) + putare (to reckon) led to English computer, which became the international term for electronic computing devices."
      },
      {
        root: "*politia",
        rootLanguage: "Greek",
        meaning: "Civil Administration / Citizenship",
        reflexes: [
          { lang: "en", word: "Police", note: "Civil force for maintaining public order." },
          { lang: "fr", word: "Police", note: "Corps chargé de maintenir l'ordre public." },
          { lang: "de", word: "Polizei", note: "Behörde zur Aufrechterhaltung der Sicherheit." },
          { lang: "es", word: "Policía", note: "Cuerpo de seguridad del Estado." },
          { lang: "it", word: "Polizia", note: "Forza pubblica per l'ordine." },
          { lang: "ru", word: "Полиция", note: "Система государственных органов правопорядка." },
          { lang: "pt", word: "Polícia", note: "Corporação encarregada da segurança." }
        ],
        detail: "Greek politeia (state administration) passed through Latin politia into Middle French and spread as the term for law enforcement."
      },
      {
        root: "*schola",
        rootLanguage: "Greek",
        meaning: "Leisure / Learned Conversation",
        reflexes: [
          { lang: "en", word: "School", note: "Institution for educating learners." },
          { lang: "de", word: "Schule", note: "Bildungseinrichtung." },
          { lang: "fr", word: "École", note: "Établissement d'enseignement." },
          { lang: "es", word: "Escuela", note: "Centro de enseñanza." },
          { lang: "it", word: "Scuola", note: "Istituto per l'istruzione." },
          { lang: "ru", word: "Школа", note: "Учебное заведение." },
          { lang: "br", word: "Skol", note: "Tachenn kelenn hag deskiñ." },
          { lang: "el", word: "Σχολείο", note: "Ίδρυμα εκπαίδευσης." }
        ],
        detail: "Greek scholē originally meant 'leisure spent in intellectual discussion', which Latin adopted as schola for formal learning centers."
      },
      {
        root: "*hakīm",
        rootLanguage: "Arabic",
        meaning: "Wise Person / Physician",
        reflexes: [
          { lang: "ka", word: "ექიმი", note: "სამედიცინო მუშაკი, მკურნალი." },
          { lang: "hy", word: "Հեքիմ", note: "Բժիշկ, ժողովրդական բուժող:" },
          { lang: "ba", word: "Ҳәким", note: "Һаулыҡ һаҡлаусы, табип." },
          { lang: "tt", word: "Хәким", note: "Укымышлы кеше, табиб." }
        ],
        detail: "Arabic ḥakīm (wise man, healer) spread throughout Islamic medical literature into Caucasus and Central Asian vernaculars as the primary word for doctor."
      },
      {
        root: "*māšīn",
        rootLanguage: "Latin / Greek",
        meaning: "Device / Ingenious Contrivance",
        reflexes: [
          { lang: "fr", word: "Machine", note: "Dispositif mécanique." },
          { lang: "en", word: "Machine", note: "Apparatus using mechanical power." },
          { lang: "de", word: "Maschine", note: "Mechanisches Gerät." },
          { lang: "ru", word: "Машина", note: "Механическое устройство или автомобиль." },
          { lang: "es", word: "Máquina", note: "Conjunto de piezas para dirigir energía." },
          { lang: "it", word: "Macchina", note: "Dispositivo meccanico." },
          { lang: "ba", word: "Машина", note: "Автомобиль йəки механистик ҡайтартҡыс." },
          { lang: "tt", word: "Машина", note: "Механик җайланма яки автомобиль." }
        ],
        detail: "Greek mēchanē (device) became Latin machina, French machine, and spread worldwide through the Industrial Revolution."
      },
      {
        root: "*doktor",
        rootLanguage: "Latin",
        meaning: "Teacher / Learned Person",
        reflexes: [
          { lang: "en", word: "Doctor", note: "Qualified medical practitioner or scholar." },
          { lang: "de", word: "Doktor", note: "Arzt oder akademischer Grad." },
          { lang: "fr", word: "Docteur", note: "Médecin ou titulaire d'un doctorat." },
          { lang: "es", word: "Doctor", note: "Médico o título académico." },
          { lang: "it", word: "Dottore", note: "Chi ha conseguito una laurea." },
          { lang: "ru", word: "Доктор", note: "Врач или обладатель учёной степени." },
          { lang: "pt", word: "Doutor", note: "Pessoa com doutoramento ou médico." },
          { lang: "br", word: "Doktor", note: "Medisinour pe den desket." }
        ],
        detail: "Latin docere (to teach) gave rise to doctor (teacher), which in the late Middle Ages became applied specifically to medical faculty and healers."
      },
      {
        root: "*būlo-",
        rootLanguage: "Turkic",
        meaning: "Steppe Warrior / Hero",
        reflexes: [
          { lang: "ba", word: "Батыр", note: "Ҡаһарман, батыр яугир." },
          { lang: "tt", word: "Батыр", note: "Көчле, батыр кеше." },
          { lang: "ru", word: "Богатырь", note: "Былинный защитник земли." },
          { lang: "ka", word: "ბაღათური", note: "მამაცი მეომარი." },
          { lang: "hy", word: "Բաղաթուր", note: "Քաջ մարտիկ:" }
        ],
        detail: "Old Turkic bagatur (hero/brave warrior) was borrowed into East Slavic as bogatyr and Caucasian languages as a high title for heroic knights."
      },
      {
        root: "*stadion",
        rootLanguage: "Greek",
        meaning: "Fixed Distance / Running Track",
        reflexes: [
          { lang: "en", word: "Stadium", note: "Sports arena with tier seating." },
          { lang: "fr", word: "Stade", note: "Terrain de sport aménagé." },
          { lang: "de", word: "Stadion", note: "Sportstätte mit Zuschauerrängen." },
          { lang: "es", word: "Estadio", note: "Recinto deportivo." },
          { lang: "it", word: "Stadio", note: "Impianto sportivo." },
          { lang: "ru", word: "Стадион", note: "Спортивное сооружение." },
          { lang: "el", word: "Στάδιο", note: "Αγωνιστικός χώρος." },
          { lang: "pt", word: "Estádio", note: "Praça de esportes." }
        ],
        detail: "Greek stadion was a unit of length (approx. 600 feet) and the track built for athletic races, reviving globally with the modern Olympic movement."
      },
      {
        root: "*kamar",
        rootLanguage: "Persian",
        meaning: "Vault / Arch / Room",
        reflexes: [
          { lang: "ka", word: "თაღი / კამარა", note: "არქიტექტურული თაღოვანი ჭერი." },
          { lang: "ba", word: "Ҡамара", note: "Өй бүлмәһе, баҙ." },
          { lang: "tt", word: "Камара", note: "Арка, гөмбәзле бүлмә." },
          { lang: "hy", word: "Կամար", note: "Արխիտեկտուրային կամար:" },
          { lang: "ru", word: "Камора / Камера (via Latin stream)", note: "Небольшое помещение." }
        ],
        detail: "Persian kamar (vaulted arch) influenced Caucasian and Turkic architecture terms for arched ceilings and storage chambers."
      },
      {
        root: "*geōmētria",
        rootLanguage: "Greek",
        meaning: "Earth Measurement",
        reflexes: [
          { lang: "en", word: "Geometry", note: "Branch of mathematics concerning space and shapes." },
          { lang: "fr", word: "Géométrie", note: "Branche des mathématiques." },
          { lang: "de", word: "Geometrie", note: "Raumlehre." },
          { lang: "es", word: "Geometría", note: "Estudio de las propiedades de las figuras." },
          { lang: "it", word: "Geometria", note: "Scienza che studia lo spazio e le figure." },
          { lang: "ru", word: "Геометрия", note: "Раздел математики о пространственных формах." },
          { lang: "el", word: "Γεωμετρία", note: "Μελέτη των σχημάτων και των ιδιοτήτων του χώρου." }
        ],
        detail: "Greek gē (earth) + metria (measurement) was used by Euclid and Archimedes and became standard scientific nomenclature across the globe."
      },
      {
        root: "*tūr",
        rootLanguage: "French / Latin",
        meaning: "Turn / Circuit / Tower",
        reflexes: [
          { lang: "fr", word: "Tour", note: "Circuit ou édifice élevé." },
          { lang: "en", word: "Tour / Tower", note: "Journey around places or tall building." },
          { lang: "de", word: "Tour", note: "Reise oder Rundfahrt." },
          { lang: "es", word: "Torre / Tour", note: "Edificio alto o viaje turístico." },
          { lang: "it", word: "Torre / Tour", note: "Costruzione elevata o viaggio." },
          { lang: "ru", word: "Тур / Башня", note: "Поездка, путешествие по маршруту." },
          { lang: "pt", word: "Torre / Tour", note: "Edificação alta ou circuito." },
          { lang: "br", word: "Tour", note: "Tachenn uhel, kloc'hdi." }
        ],
        detail: "Latin tornus (lathe/turn) gave Old French tour (circuit/movement), which spawned modern tourism and travel terms globally."
      }
    ];

    if (typeof window !== 'undefined') {
        window.etymologyNetworkData = etymologyNetworkData;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = etymologyNetworkData;
    }
})();
