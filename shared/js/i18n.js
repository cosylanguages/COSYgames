(function() {
  'use strict';

  const translations = {
    en: {
      ecosystem_strip: 'COSY ECOSYSTEM:',
      nav_speaking: 'Speaking & Fluency 🗣️',
      nav_mystery: 'Mystery & Guesses 🔍',
      nav_vocab: 'Vocab & Puzzles 🧩',
      back_to_games: '← Back to Games',
      tagline: 'Free · No account needed · Solo or with friends',
      hero_title: '20 Language Games That Actually Teach',
      filter_label: 'Filter:',
      filter_players: 'Players:',
      filter_skill: 'Skill:',
      filter_any: 'Any',
      filter_all: 'All Games',
      filter_solo: 'Solo',
      filter_friends: 'With Friends',
      filter_speaking: 'Speaking',
      filter_vocab: 'Vocabulary',
      filter_mystery: 'Mystery',
      filter_puzzles: 'Puzzles',
      section_speaking: 'Speaking & Fluency',
      section_mystery: 'Mystery & Guesses',
      section_vocab: 'Vocab & Puzzles',
      tag_solo_group: 'Solo or Group',
      tag_solo: 'Solo',
      tag_group: 'Group',
      tag_friends: 'Friends',
      btn_play: '► Play',
      desc_fluency_flow: 'Spin for a random topic and speak for 1–5 minutes without stopping. Flow, not perfection.',
      desc_battle_wits: "Two topics, two sides. Build your arguments and debate in the language you're learning.",
      desc_opinion_arena: 'Agree or disagree with a statement, then defend your view. Real opinions, real language.',
      desc_critics_corner: 'A famous quote appears. What does it mean to you? Deep discussion for advanced levels.',
      desc_story_chain: 'Add one sentence at a time to build a collaborative story with prompts and connectors.',
      desc_story_weaver: 'Weave target words into a coherent narrative. Turn vocabulary study into creative writing.',
      desc_100_questions: 'Pick a deck and answer deep, funny, or philosophical questions. Perfect for speaking practice.',
      desc_hot_seat: 'One player faces away from the board while team members explain target words without saying them.',
      desc_storytelling: 'Interactive narrative prompts and visual cues for storytelling practice.',
      desc_identity_mystery: 'Deduce the hidden identity through strategic 20 questions and clues.',
      desc_object_quest: 'Describe, locate, and guess secret objects using descriptive target vocabulary.',
      desc_action_hero: 'Act out or explain dynamic action verbs and scenarios against the clock.',
      desc_this_or_that: 'Choose between two intriguing options and justify your choice.',
      desc_word_linker: 'Connect related vocabulary words to build semantic chains.',
      desc_scene_match: 'Explore interactive visual rooms and match vocabulary items to scene objects.',
      desc_etymology_explorer: 'Uncover word origins, roots, and language family connections.',
      desc_emoji_odyssey: 'Decode phrases and idioms represented purely through emoji sequences.',
      desc_what_gender: 'Master noun genders with speed rounds and grammar memory triggers.',
      desc_cosy_crossword: 'Solve language puzzles with tailored vocabulary clues and crosswords.',
      desc_last_letter: 'Chain vocabulary words by matching the last letter of each word to the next.',
      desc_lucky_numbers: 'Practice numbers, counting, and math expressively in your target language.',
      keep_learning: 'Keep learning:',
      keep_learning_reference: 'Grammar & verb reference',
      keep_learning_drills: 'Quick practice drills',
      keep_learning_dictionary: 'Vocabulary dictionary',
      ui_practice_language: 'Practice language',
      ui_level: 'Level',
      ui_start_game: 'Start game',
      ui_play_again: 'Play again',
      ui_level_a1: 'Starter (A1)',
      ui_level_a2: 'Primary (A2)',
      ui_level_b1: 'Intermediate (B1)',
      ui_level_b2: 'Upper (B2)',
      ui_level_c1: 'Advanced (C1)',
      ui_level_c2: 'Proficiency (C2)',
      ui_limited_level: 'Limited content at this level in this language: nearby levels are shown too.',
      hs_prompt_plural: 'What is the plural of {word}?',
      hs_prompt_define: 'Define the word {word}.',
      hs_prompt_sentence: 'Use {word} in a sentence.',
      hl_reason_belongs: 'It belongs to: {theme}',
      sw_english_only: 'Story Weaver currently works in English only: its grammar rules, themes and connectors are not available in other languages yet.'
    },
    fr: {
      ecosystem_strip: 'ÉCOSYSTÈME COSY :',
      nav_speaking: 'Expression & Fluidité 🗣️',
      nav_mystery: 'Mystère & Devinettes 🔍',
      nav_vocab: 'Vocabulaire & Casse-têtes 🧩',
      back_to_games: '← Retour aux jeux',
      tagline: 'Gratuit · Sans compte · Solo ou entre amis',
      hero_title: '20 jeux linguistiques vraiment efficaces',
      filter_label: 'Filtrer :',
      filter_players: 'Joueurs :',
      filter_skill: 'Compétence :',
      filter_any: 'Tous',
      filter_all: 'Tous les jeux',
      filter_solo: 'Solo',
      filter_friends: 'Entre amis',
      filter_speaking: 'Expression',
      filter_vocab: 'Vocabulaire',
      filter_mystery: 'Mystère',
      filter_puzzles: 'Casse-têtes',
      section_speaking: 'Expression & Fluidité',
      section_mystery: 'Mystère & Devinettes',
      section_vocab: 'Vocabulaire & Casse-têtes',
      tag_solo_group: 'Solo ou groupe',
      tag_solo: 'Solo',
      tag_group: 'Groupe',
      tag_friends: 'Amis',
      btn_play: '► Jouer',
      desc_fluency_flow: 'Tournez pour un sujet et parlez 1 à 5 min sans vous arrêter. Fluidité avant tout !',
      desc_battle_wits: "Deux sujets, deux camps. Construisez vos arguments et débattez dans la langue d'apprentissage.",
      desc_opinion_arena: "D'accord ou pas d'accord ? Défendez votre point de vue. Vraies opinions, vraie langue.",
      desc_critics_corner: 'Une citation célèbre apparaît. Qu\'en pensez-vous ? Discussion approfondie pour niveaux avancés.',
      desc_story_chain: 'Ajoutez une phrase à la fois pour créer une histoire collective avec des amorces.',
      desc_story_weaver: 'Tissez des mots cibles dans un récit cohérent. Transformez le vocabulaire en écriture créative.',
      desc_100_questions: 'Choisissez un jeu de cartes et répondez à des questions drôles ou profondes.',
      desc_hot_seat: 'Un joueur tourne le dos à l\'écran tandis que son équipe fait deviner des mots.',
      desc_storytelling: 'Sujets de narration interactifs et indices visuels pour s\'entraîner à raconter des histoires.',
      desc_identity_mystery: 'Déduisez l\'identité cachée grâce à 20 questions stratégiques et des indices.',
      desc_object_quest: 'Décrivez, localisez et devinez des objets secrets avec du vocabulaire descriptif.',
      desc_action_hero: 'Mimez ou expliquez des verbes d\'action dynamiques contre la montre.',
      desc_this_or_that: 'Choisissez entre deux options intrigantes et justifiez votre choix.',
      desc_word_linker: 'Reliez des mots de vocabulaire pour former des chaînes sémantiques.',
      desc_scene_match: 'Explorez des pièces interactives et associez le vocabulaire aux objets.',
      desc_etymology_explorer: 'Découvrez l\'origine des mots, leurs racines et leurs familles linguistiques.',
      desc_emoji_odyssey: 'Décodez des expressions représentées par des suites d\'émoticônes.',
      desc_what_gender: 'Maîtrisez le genre des noms avec des tours rapides et des astuces mnémotechniques.',
      desc_cosy_crossword: 'Résolvez des mots croisés adaptés avec des indices de vocabulaire.',
      desc_last_letter: 'Enchaînez les mots en reliant la dernière lettre au mot suivant.',
      desc_lucky_numbers: 'Pratiquez les nombres, le calcul et les mathématiques dans votre langue cible.',
      keep_learning: 'Pour aller plus loin :',
      keep_learning_reference: 'Grammaire et verbes',
      keep_learning_drills: 'Exercices rapides',
      keep_learning_dictionary: 'Dictionnaire de vocabulaire',
      ui_practice_language: 'Langue à pratiquer',
      ui_level: 'Niveau',
      ui_start_game: 'Commencer',
      ui_play_again: 'Rejouer',
      ui_level_a1: 'Débutant (A1)',
      ui_level_a2: 'Élémentaire (A2)',
      ui_level_b1: 'Intermédiaire (B1)',
      ui_level_b2: 'Intermédiaire supérieur (B2)',
      ui_level_c1: 'Avancé (C1)',
      ui_level_c2: 'Maîtrise (C2)',
      ui_limited_level: 'Contenu limité à ce niveau dans cette langue : des niveaux proches sont aussi proposés.',
      hs_prompt_plural: 'Quel est le pluriel de {word} ?',
      hs_prompt_define: 'Définissez le mot {word}.',
      hs_prompt_sentence: 'Utilisez {word} dans une phrase.',
      hl_reason_belongs: 'Il appartient à : {theme}',
      sw_english_only: 'Story Weaver fonctionne pour l’instant en anglais uniquement : ses règles de grammaire, thèmes et connecteurs ne sont pas encore disponibles dans d’autres langues.'
    },
    es: {
      ecosystem_strip: 'ECOSISTEMA COSY:',
      nav_speaking: 'Habla y Fluidez 🗣️',
      nav_mystery: 'Misterio y Adivinanzas 🔍',
      nav_vocab: 'Vocabulario y Puzles 🧩',
      back_to_games: '← Volver a los juegos',
      tagline: 'Gratis · Sin cuenta · Solo o con amigos',
      hero_title: '20 juegos de idiomas que realmente enseñan',
      filter_label: 'Filtrar:',
      filter_players: 'Jugadores:',
      filter_skill: 'Habilidad:',
      filter_any: 'Todos',
      filter_all: 'Todos los juegos',
      filter_solo: 'Solo',
      filter_friends: 'Con amigos',
      filter_speaking: 'Habla',
      filter_vocab: 'Vocabulario',
      filter_mystery: 'Misterio',
      filter_puzzles: 'Puzles',
      section_speaking: 'Habla y Fluidez',
      section_mystery: 'Misterio y Adivinanzas',
      section_vocab: 'Vocabulario y Puzles',
      tag_solo_group: 'Solo o grupo',
      tag_solo: 'Solo',
      tag_group: 'Grupo',
      tag_friends: 'Amigos',
      btn_play: '► Jugar',
      desc_fluency_flow: '¡Gira para obtener un tema y habla de 1 a 5 min sin parar. Fluidez, no perfección!',
      desc_battle_wits: 'Dos temas, dos lados. Construye tus argumentos y debate en el idioma que aprendes.',
      desc_opinion_arena: '¿De acuerdo o en desacuerdo? Defiende tu postura. Opiniones reales, idioma real.',
      desc_critics_corner: 'Aparece una cita famosa. ¿Qué significa para ti? Discusión profunda para niveles avanzados.',
      desc_story_chain: 'Añade una frase a la vez para crear una historia colaborativa con conectores.',
      desc_story_weaver: 'Teje palabras clave en una narrativa coherente. Transforma el vocabulario en escritura creativa.',
      desc_100_questions: 'Elige una baraja y responde preguntas divertidas o profundas. Ideal para practicar habla.',
      desc_hot_seat: 'Un jugador se sienta de espaldas a la pantalla mientras su equipo explica las palabras clave.',
      desc_storytelling: 'Indicadores narrativos interactivos e imágenes para practicar la narración.',
      desc_identity_mystery: 'Deduce la identidad oculta mediante 20 preguntas estratégicas y pistas.',
      desc_object_quest: 'Describe, localiza y adivina objetos secretos usando vocabulario descriptivo.',
      desc_action_hero: 'Representa o explica verbos de acción dinámicos contra el reloj.',
      desc_this_or_that: 'Elige entre dos opciones intrigantes y justifica tu elección.',
      desc_word_linker: 'Conecta palabras relacionadas para construir cadenas semánticas.',
      desc_scene_match: 'Explora habitaciones interactivas y relaciona vocabulario con objetos.',
      desc_etymology_explorer: 'Descubre el origen de las palabras, sus raíces y familias de idiomas.',
      desc_emoji_odyssey: 'Decodifica frases y modismos representados mediante emoticonos.',
      desc_what_gender: 'Domina el género de los sustantivos con rondas rápidas y trucos.',
      desc_cosy_crossword: 'Resuelve crucigramas adaptados con pistas de vocabulario.',
      desc_last_letter: 'Encadena palabras uniendo la última letra con la siguiente.',
      desc_lucky_numbers: 'Practica números, conteo y matemáticas en tu idioma objetivo.',
      keep_learning: 'Sigue aprendiendo:',
      keep_learning_reference: 'Gramática y verbos',
      keep_learning_drills: 'Ejercicios rápidos',
      keep_learning_dictionary: 'Diccionario de vocabulario',
      ui_practice_language: 'Idioma a practicar',
      ui_level: 'Nivel',
      ui_start_game: 'Empezar',
      ui_play_again: 'Jugar de nuevo',
      ui_level_a1: 'Principiante (A1)',
      ui_level_a2: 'Elemental (A2)',
      ui_level_b1: 'Intermedio (B1)',
      ui_level_b2: 'Intermedio alto (B2)',
      ui_level_c1: 'Avanzado (C1)',
      ui_level_c2: 'Maestría (C2)',
      ui_limited_level: 'Contenido limitado en este nivel y idioma: también se muestran niveles cercanos.',
      hs_prompt_plural: '¿Cuál es el plural de {word}?',
      hs_prompt_define: 'Define la palabra {word}.',
      hs_prompt_sentence: 'Usa {word} en una oración.',
      hl_reason_belongs: 'Pertenece a: {theme}',
      sw_english_only: 'Story Weaver funciona por ahora solo en inglés: sus reglas gramaticales, temas y conectores aún no están disponibles en otros idiomas.'
    },
    de: {
      ecosystem_strip: 'COSY-ÖKOSYSTEM:',
      nav_speaking: 'Sprechen & Flüssigkeit 🗣️',
      nav_mystery: 'Rätsel & Vermutungen 🔍',
      nav_vocab: 'Wortschatz & Rätsel 🧩',
      back_to_games: '← Zurück zu den Spielen',
      tagline: 'Kostenlos · Kein Konto erforderlich · Solo oder mit Freunden',
      hero_title: '20 Sprachspiele, die wirklich lehren',
      filter_label: 'Filtern:',
      filter_players: 'Spieler:',
      filter_skill: 'Fokus:',
      filter_any: 'Alle',
      filter_all: 'Alle Spiele',
      filter_solo: 'Einzel',
      filter_friends: 'Mit Freunden',
      filter_speaking: 'Sprechen',
      filter_vocab: 'Wortschatz',
      filter_mystery: 'Rätsel',
      filter_puzzles: 'Puzzles',
      section_speaking: 'Sprechen & Flüssigkeit',
      section_mystery: 'Rätsel & Vermutungen',
      section_vocab: 'Wortschatz & Rätsel',
      tag_solo_group: 'Einzel oder Gruppe',
      tag_solo: 'Einzel',
      tag_group: 'Gruppe',
      tag_friends: 'Freunde',
      btn_play: '► Spielen',
      desc_fluency_flow: 'Drehen Sie für ein Thema und sprechen Sie 1–5 Minuten ohne Unterbrechung.',
      desc_battle_wits: 'Zwei Themen, zwei Seiten. Bauen Sie Ihre Argumente auf und debattieren Sie.',
      desc_opinion_arena: 'Stimmen Sie zu oder nicht? Verteidigen Sie Ihre Meinung mit echten Ausdrücken.',
      desc_critics_corner: 'Ein berühmtes Zitat erscheint. Was bedeutet es für Sie? Diskussion für Fortgeschrittene.',
      desc_story_chain: 'Fügen Sie Satz für Satz hinzu, um gemeinsam eine Geschichte zu erstellen.',
      desc_story_weaver: 'Verweben Sie Zielwörter in eine kohärente Geschichte. Kreatives Schreiben!',
      desc_100_questions: 'Wählen Sie ein Deck und beantworten Sie Fragen. Perfekt zum Sprechen üben.',
      desc_hot_seat: 'Ein Spieler schaut weg, während das Team Zielwörter erklärt, ohne sie zu nennen.',
      desc_storytelling: 'Interaktive Aufforderungen und visuelle Hinweise zum Geschichtenerzählen.',
      desc_identity_mystery: 'Erraten Sie die verborgene Identität durch 20 strategische Fragen.',
      desc_object_quest: 'Beschreiben, lokalisieren und erraten Sie geheime Objekte.',
      desc_action_hero: 'Stellen Sie dynamische Aktionsverben gegen die Uhr dar.',
      desc_this_or_that: 'Wählen Sie zwischen zwei Optionen und begründen Sie Ihre Wahl.',
      desc_word_linker: 'Verbinden Sie verwandte Wörter zu semantischen Ketten.',
      desc_scene_match: 'Erkunden Sie Räume und ordnen Sie Wörter den Objekten zu.',
      desc_etymology_explorer: 'Entdecken Sie Wortursprünge, Wurzeln und Sprachfamilien.',
      desc_emoji_odyssey: 'Entschlüsseln Sie Redewendungen, die durch Emojis dargestellt werden.',
      desc_what_gender: 'Meistern Sie das Wortgeschlecht mit Schnelligkeitsrunden.',
      desc_cosy_crossword: 'Lösen Sie Kreuzworträtsel mit maßgeschneiderten Hinweisen.',
      desc_last_letter: 'Verketten Sie Wörter, indem Sie den letzten Buchstaben verbinden.',
      desc_lucky_numbers: 'Üben Sie Zahlen, Zählen und Mathematik in Ihrer Zielsprache.',
      keep_learning: 'Weiterlernen:',
      keep_learning_reference: 'Grammatik & Verben',
      keep_learning_drills: 'Schnelle Übungen',
      keep_learning_dictionary: 'Wörterbuch',
      ui_practice_language: 'Übungssprache',
      ui_level: 'Stufe',
      ui_start_game: 'Spiel starten',
      ui_play_again: 'Nochmal spielen',
      ui_level_a1: 'Anfänger (A1)',
      ui_level_a2: 'Grundlagen (A2)',
      ui_level_b1: 'Mittelstufe (B1)',
      ui_level_b2: 'Obere Mittelstufe (B2)',
      ui_level_c1: 'Fortgeschritten (C1)',
      ui_level_c2: 'Experte (C2)',
      ui_limited_level: 'Begrenzte Inhalte auf dieser Stufe in dieser Sprache: auch benachbarte Stufen werden gezeigt.',
      hs_prompt_plural: 'Wie lautet der Plural von {word}?',
      hs_prompt_define: 'Definiere das Wort {word}.',
      hs_prompt_sentence: 'Verwende {word} in einem Satz.',
      hl_reason_belongs: 'Es gehört zu: {theme}',
      sw_english_only: 'Story Weaver funktioniert derzeit nur auf Englisch: Grammatikregeln, Themen und Konnektoren sind in anderen Sprachen noch nicht verfügbar.'
    },
    ru: {
      ecosystem_strip: 'ЭКОСИСТЕМА COSY:',
      nav_speaking: 'Говорение и беглость 🗣️',
      nav_mystery: 'Загадки и догадки 🔍',
      nav_vocab: 'Словарь и головоломки 🧩',
      back_to_games: '← Назад к играм',
      tagline: 'Бесплатно · Без аккаунта · Соло или с друзьями',
      hero_title: '20 языковых игр, которые действительно учат',
      filter_label: 'Фильтр:',
      filter_players: 'Игроки:',
      filter_skill: 'Навык:',
      filter_any: 'Все',
      filter_all: 'Все игры',
      filter_solo: 'Соло',
      filter_friends: 'С друзьями',
      filter_speaking: 'Говорение',
      filter_vocab: 'Словарь',
      filter_mystery: 'Загадки',
      filter_puzzles: 'Головоломки',
      section_speaking: 'Говорение и беглость',
      section_mystery: 'Загадки и догадки',
      section_vocab: 'Словарь и головоломки',
      tag_solo_group: 'Соло или группа',
      tag_solo: 'Соло',
      tag_group: 'Группа',
      tag_friends: 'Друзья',
      btn_play: '► Играть',
      desc_fluency_flow: 'Вращайте тему и говорите 1–5 минут без остановки. Главное — беглость!',
      desc_battle_wits: 'Две темы, две стороны. Стройте аргументы и дебатируйте на изучаемом языке.',
      desc_opinion_arena: 'Согласны или нет? Защищайте свою позицию. Реальные мнения, живой язык.',
      desc_critics_corner: 'Появляется известная цитата. Что она значит для вас? Глубокие дискуссии.',
      desc_story_chain: 'Добавляйте по одному предложению, чтобы создать совместную историю.',
      desc_story_weaver: 'Вплетайте целевые слова в связный рассказ. Превратите словарь в творчество.',
      desc_100_questions: 'Выберите колоду и отвечайте на интересные и смешные вопросы.',
      desc_hot_seat: 'Один игрок сидит спиной к экрану, а команда объясняет ему слова.',
      desc_storytelling: 'Интерактивные сюжетные подсказки и картинки для практики рассказов.',
      desc_identity_mystery: 'Отгадайте скрытую личность с помощью 20 вопросов и подсказок.',
      desc_object_quest: 'Описывайте, находите и отгадывайте секретные предметы.',
      desc_action_hero: 'Изображайте или объясняйте глаголы действия на время.',
      desc_this_or_that: 'Выбирайте между двумя вариантами и обосновывайте свой выбор.',
      desc_word_linker: 'Соединяйте связанные слова в смысловые цепочки.',
      desc_scene_match: 'Исследуйте интерактивные комнаты и сопоставляйте слова с предметами.',
      desc_etymology_explorer: 'Исследуйте происхождение слов, корни и языковые семьи.',
      desc_emoji_odyssey: 'Расшифровывайте фразы и идиомы по цепочкам эмодзи.',
      desc_what_gender: 'Запоминайте род существительных с помощью быстрых раундов.',
      desc_cosy_crossword: 'Решайте кроссворды с подсказками словарного запаса.',
      desc_last_letter: 'Составляйте цепочки слов по последней букве.',
      desc_lucky_numbers: 'Практикуйте числа, счёт и математику на изучаемом языке.',
      keep_learning: 'Продолжайте учиться:',
      keep_learning_reference: 'Грамматика и глаголы',
      keep_learning_drills: 'Быстрые упражнения',
      keep_learning_dictionary: 'Словарь',
      ui_practice_language: 'Язык для практики',
      ui_level: 'Уровень',
      ui_start_game: 'Начать игру',
      ui_play_again: 'Играть снова',
      ui_level_a1: 'Начальный (A1)',
      ui_level_a2: 'Элементарный (A2)',
      ui_level_b1: 'Средний (B1)',
      ui_level_b2: 'Выше среднего (B2)',
      ui_level_c1: 'Продвинутый (C1)',
      ui_level_c2: 'Свободное владение (C2)',
      ui_limited_level: 'На этом уровне на этом языке материалов мало: показаны также близкие уровни.',
      hs_prompt_plural: 'Какое множественное число у слова {word}?',
      hs_prompt_define: 'Дайте определение слова {word}.',
      hs_prompt_sentence: 'Составьте предложение со словом {word}.',
      hl_reason_belongs: 'Относится к: {theme}',
      sw_english_only: 'Story Weaver пока работает только на английском: грамматические правила, темы и связки ещё недоступны на других языках.'
    },
    it: {
      ecosystem_strip: 'SISTEMA COSY:',
      nav_speaking: 'Parlato e Fluidità 🗣️',
      nav_mystery: 'Mistero e Indovinelli 🔍',
      nav_vocab: 'Vocabolario e Rompicapi 🧩',
      back_to_games: '← Torna ai giochi',
      tagline: 'Gratuito · Senza account · Da solo o con amici',
      hero_title: '20 giochi linguistici che insegnano davvero',
      filter_label: 'Filtra:',
      filter_players: 'Giocatori:',
      filter_skill: 'Abilità:',
      filter_any: 'Tutti',
      filter_all: 'Tutti i giochi',
      filter_solo: 'Solo',
      filter_friends: 'Con amici',
      filter_speaking: 'Parlato',
      filter_vocab: 'Vocabolario',
      filter_mystery: 'Mistero',
      filter_puzzles: 'Rompicapi',
      section_speaking: 'Parlato e Fluidità',
      section_mystery: 'Mistero e Indovinelli',
      section_vocab: 'Vocabolario e Rompicapi',
      tag_solo_group: 'Solo o gruppo',
      tag_solo: 'Solo',
      tag_group: 'Gruppo',
      tag_friends: 'Amici',
      btn_play: '► Gioca',
      desc_fluency_flow: 'Gira per un argomento e parla per 1-5 minuti senza fermarti.',
      desc_battle_wits: 'Due argomenti, due parti. Costruisci i tuoi argomenti e dibatti.',
      desc_opinion_arena: "D'accordo o in disaccordo? Difendi la tua opinione. Lingua reale.",
      desc_critics_corner: 'Appare una citazione famosa. Che cosa significa per te?',
      desc_story_chain: 'Aggiungi una frase alla volta per costruire una storia collaborativa.',
      desc_story_weaver: 'Intreccia le parole chiave in una narrazione coerente.',
      desc_100_questions: 'Scegli un mazzo e rispondi a domande divertenti o profonde.',
      desc_hot_seat: 'Un giocatore dà le spalle allo schermo mentre la squadra spiega le parole.',
      desc_storytelling: 'Spunti narrativi interattivi e immagini per esercitarsi a raccontare.',
      desc_identity_mystery: 'Indovina l\'identità nascosta attraverso 20 domande strategiche.',
      desc_object_quest: 'Descrivi, individua e indovina oggetti segreti usando il vocabolario.',
      desc_action_hero: 'Mima o spiega verbi d\'azione dinamici contro il tempo.',
      desc_this_or_that: 'Scegli tra due opzioni intriganti e giustifica la tua scelta.',
      desc_word_linker: 'Collega parole correlate per costruire catene semantiche.',
      desc_scene_match: 'Esplora stanze interattive e associa le parole agli oggetti.',
      desc_etymology_explorer: 'Scopri l\'origine delle parole, le radici e le famiglie linguistiche.',
      desc_emoji_odyssey: 'Decodifica frasi e modi di dire rappresentati da emoji.',
      desc_what_gender: 'Padroneggia il genere dei sostantivi con round veloci.',
      desc_cosy_crossword: 'Risolvi cruciverba personalizzati con indizi di vocabolario.',
      desc_last_letter: 'Concatena le parole collegando l\'ultima lettera alla prima.',
      desc_lucky_numbers: 'Esercitati con numeri, conteggio e matematica nella lingua di studio.',
      keep_learning: 'Continua a imparare:',
      keep_learning_reference: 'Grammatica e verbi',
      keep_learning_drills: 'Esercizi rapidi',
      keep_learning_dictionary: 'Dizionario del vocabolario',
      ui_practice_language: 'Lingua da praticare',
      ui_level: 'Livello',
      ui_start_game: 'Inizia',
      ui_play_again: 'Gioca ancora',
      ui_level_a1: 'Principiante (A1)',
      ui_level_a2: 'Elementare (A2)',
      ui_level_b1: 'Intermedio (B1)',
      ui_level_b2: 'Intermedio superiore (B2)',
      ui_level_c1: 'Avanzato (C1)',
      ui_level_c2: 'Padronanza (C2)',
      ui_limited_level: 'Contenuti limitati a questo livello in questa lingua: vengono mostrati anche livelli vicini.',
      hs_prompt_plural: 'Qual è il plurale di {word}?',
      hs_prompt_define: 'Definisci la parola {word}.',
      hs_prompt_sentence: 'Usa {word} in una frase.',
      hl_reason_belongs: 'Appartiene a: {theme}',
      sw_english_only: 'Story Weaver funziona per ora solo in inglese: regole grammaticali, temi e connettori non sono ancora disponibili in altre lingue.'
    },
    el: {
      ecosystem_strip: 'ΟΙΚΟΣΥΣΤΗΜΑ COSY:',
      nav_speaking: 'Ομιλία & Ροή 🗣️',
      nav_mystery: 'Μυστήριο & Εικασίες 🔍',
      nav_vocab: 'Λεξιλόγιο & Γρίφοι 🧩',
      back_to_games: '← Πίσω στα παιχνίδια',
      tagline: 'Δωρεάν · Χωρίς λογαριασμό · Σόλο ή με φίλους',
      hero_title: '20 παιχνίδια γλωσσών που διδάσκουν πραγματικά',
      filter_label: 'Φίλτρο:',
      filter_players: 'Παίκτες:',
      filter_skill: 'Δεξιότητα:',
      filter_any: 'Όλα',
      filter_all: 'Όλα τα παιχνίδια',
      filter_solo: 'Σόλο',
      filter_friends: 'Με φίλους',
      filter_speaking: 'Ομιλία',
      filter_vocab: 'Λεξιλόγιο',
      filter_mystery: 'Μυστήριο',
      filter_puzzles: 'Γρίφοι',
      section_speaking: 'Ομιλία & Ροή',
      section_mystery: 'Μυστήριο & Εικασίες',
      section_vocab: 'Λεξιλόγιο & Γρίφοι',
      tag_solo_group: 'Σόλο ή ομάδα',
      tag_solo: 'Σόλο',
      tag_group: 'Ομάδα',
      tag_friends: 'Φίλοι',
      btn_play: '► Παίξτε',
      desc_fluency_flow: 'Γυρίστε για ένα θέμα και μιλήστε για 1–5 λεπτά χωρίς να σταματήσετε.',
      desc_battle_wits: 'Δύο θέματα, δύο πλευρές. Χτίστε τα επιχειρήματά σας και συζητήστε.',
      desc_opinion_arena: 'Συμφωνείτε ή διαφωνείτε; Υπερασπιστείτε την άποψή σας.',
      desc_critics_corner: 'Εμφανίζεται ένα διάσημο παράθεμα. Τι σημαίνει για εσάς;',
      desc_story_chain: 'Προσθέστε μία πρόταση κάθε φορά για να δημιουργήσετε μια ιστορία.',
      desc_story_weaver: 'Υφάνετε λέξεις-στόχους σε μια συνοχή αφήγηση.',
      desc_100_questions: 'Επιλέξτε μια τράπουλα και απαντήστε σε ερωτήσεις.',
      desc_hot_seat: 'Ένας παίκτης κάθεται με την πλάτη στην οθόνη ενώ η ομάδα εξηγεί.',
      desc_storytelling: 'Διαδραστικές υποδείξεις αφήγησης και οπτικά ερεθίσματα.',
      desc_identity_mystery: 'Ανακαλύψτε τη κρυφή ταυτότητα μέσω 20 στρατηγικών ερωτήσεων.',
      desc_object_quest: 'Περιγράψτε, εντοπίστε και μαντέψτε μυστικά αντικείμενα.',
      desc_action_hero: 'Παίξτε ή εξηγήστε δυναμικά ρήματα δράσης με το χρόνο.',
      desc_this_or_that: 'Επιλέξτε ανάμεσα σε δύο επιλογές και δικαιολογήστε την.',
      desc_word_linker: 'Συνδέστε σχετικές λέξεις για να δημιουργήσετε αλυσίδες.',
      desc_scene_match: 'Εξερευνήστε αλληλεπιδραστικά δωμάτια και ταιριάξτε λέξεις.',
      desc_etymology_explorer: 'Ανακαλύψτε τις ρίζες των λέξεων και τις γλωσσικές οικογένειες.',
      desc_emoji_odyssey: 'Αποκωδικοποιήστε φράσεις και ιδιωματισμούς μέσω emoji.',
      desc_what_gender: 'Μάθετε το γένος των ουσιαστικών με γρήγορους γύρους.',
      desc_cosy_crossword: 'Λύστε σταυρόλεξα με προσαρμοσμένα στοιχεία.',
      desc_last_letter: 'Συνδέστε λέξεις με το τελευταίο γράμμα.',
      desc_lucky_numbers: 'Εξασκηθείτε στους αριθμούς και τη μέτρηση.',
      keep_learning: 'Συνεχίστε να μαθαίνετε:',
      keep_learning_reference: 'Γραμματική και ρήματα',
      keep_learning_drills: 'Γρήγορες ασκήσεις',
      keep_learning_dictionary: 'Λεξικό λεξιλογίου',
      ui_practice_language: 'Γλώσσα εξάσκησης',
      ui_level: 'Επίπεδο',
      ui_start_game: 'Έναρξη παιχνιδιού',
      ui_play_again: 'Παίξε ξανά',
      ui_level_a1: 'Αρχάριο (A1)',
      ui_level_a2: 'Βασικό (A2)',
      ui_level_b1: 'Μεσαίο (B1)',
      ui_level_b2: 'Ανώτερο μεσαίο (B2)',
      ui_level_c1: 'Προχωρημένο (C1)',
      ui_level_c2: 'Άριστο (C2)',
      ui_limited_level: 'Περιορισμένο περιεχόμενο σε αυτό το επίπεδο σε αυτή τη γλώσσα: εμφανίζονται και κοντινά επίπεδα.',
      hs_prompt_plural: 'Ποιος είναι ο πληθυντικός του {word};',
      hs_prompt_define: 'Ορίστε τη λέξη {word}.',
      hs_prompt_sentence: 'Χρησιμοποιήστε τη λέξη {word} σε μια πρόταση.',
      hl_reason_belongs: 'Ανήκει σε: {theme}',
      sw_english_only: 'Το Story Weaver λειτουργεί προς το παρόν μόνο στα αγγλικά: οι γραμματικοί κανόνες, τα θέματα και οι σύνδεσμοι δεν είναι ακόμη διαθέσιμα σε άλλες γλώσσες.'
    }
  };

  window.applyI18n = function(lang) {
    if (!lang) lang = 'en';
    const langCode = lang.toLowerCase().slice(0, 2);
    const dict = translations[langCode] || translations.en;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          if (el.hasAttribute('placeholder')) {
            el.setAttribute('placeholder', dict[key]);
          } else {
            el.value = dict[key];
          }
        } else {
          el.textContent = dict[key];
        }
      }
    });
  };

  window.getI18nText = function(key, lang) {
    let langCode = 'en';
    try {
      langCode = (lang || (typeof localStorage !== 'undefined' && localStorage.getItem('cosy_ui_lang')) || 'en').toLowerCase().slice(0, 2);
    } catch(e) {}
    const dict = translations[langCode] || translations.en;
    return dict[key] || (translations.en[key] || key);
  };
  window.t = window.getI18nText;

  window.hasI18n = function(key, lang) {
    let langCode = 'en';
    try {
      langCode = (lang || (typeof localStorage !== 'undefined' && localStorage.getItem('cosy_ui_lang')) || 'en').toLowerCase().slice(0, 2);
    } catch(e) {}
    const dict = translations[langCode] || translations.en;
    return Boolean(dict && dict[key] !== undefined);
  };

  window.tOr = function(key, fallback, lang) {
    return window.hasI18n(key, lang) ? window.getI18nText(key, lang) : fallback;
  };

  window.cosyLevelOptions = function(labels, selectedLabel) {
    if (!Array.isArray(labels)) return '';
    return labels.map(l => {
      const match = l.match(/\(([A-C][1-2])\)/i);
      const isSel = selectedLabel !== undefined && selectedLabel !== null && (
        l === selectedLabel ||
        (match && (match[1].toLowerCase() === String(selectedLabel).toLowerCase() || match[0] === selectedLabel))
      );
      const selAttr = isSel ? ' selected' : '';
      if (match) {
        const cefrKey = 'ui_level_' + match[1].toLowerCase();
        return `<option value="${l}" data-i18n="${cefrKey}"${selAttr}>${l}</option>`;
      }
      return `<option value="${l}"${selAttr}>${l}</option>`;
    }).join('');
  };

  const langLabelMap = {
    en: 'English 🇬🇧',
    fr: 'Français 🇫🇷',
    es: 'Español 🇪🇸',
    de: 'Deutsch 🇩🇪',
    it: 'Italiano 🇮🇹',
    ru: 'Русский 🇷🇺',
    el: 'Ελληνικά 🇬🇷'
  };

  window.cosyLanguageLabels = function(codes) {
    if (!Array.isArray(codes)) return [];
    return codes.map(code => langLabelMap[code] || code);
  };

  function startObserver() {
    let rafId = null;
    function scheduleApply() {
      if (rafId) return;
      const rAF = typeof requestAnimationFrame === 'function' ? requestAnimationFrame : (cb => setTimeout(cb, 16));
      rafId = rAF(() => {
        rafId = null;
        let uiLang = 'en';
        try {
          uiLang = localStorage.getItem('cosy_ui_lang') || 'en';
        } catch(e) {}
        window.applyI18n(uiLang);
      });
    }

    const observer = new MutationObserver((mutations) => {
      let shouldTranslate = false;
      for (const m of mutations) {
        if (!m.addedNodes) continue;
        for (const node of m.addedNodes) {
          if (node.nodeType === 1) {
            if (node.hasAttribute('data-i18n') || node.querySelector('[data-i18n]')) {
              shouldTranslate = true;
              break;
            }
          }
        }
        if (shouldTranslate) break;
      }
      if (shouldTranslate) scheduleApply();
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  function initObserver() {
    if (typeof MutationObserver !== 'undefined' && typeof document !== 'undefined' && document.body) {
      startObserver();
    }
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initObserver);
    } else {
      initObserver();
    }
  }
})();
