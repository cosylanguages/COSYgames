(function() {
    const data = {
      "fluency": [
            {
                  "text": "Sua rotina matinal ☕",
                  "level": "starter"
            },
            {
                  "text": "Uma memória de infância 🧸",
                  "level": "starter"
            },
            {
                  "text": "Sua estação favorita e por quê 🍂",
                  "level": "starter"
            },
            {
                  "text": "Seu animal de estimação favorito 🐶",
                  "level": "starter"
            },
            {
                  "text": "Um dia chuvoso ideal 🌧️",
                  "level": "starter"
            },
            {
                  "text": "Uma habilidade que você gostaria de ter 🎸",
                  "level": "elementary"
            },
            {
                  "text": "A melhor refeição que você já comeu 🍜",
                  "level": "elementary"
            },
            {
                  "text": "Um lugar que você quer visitar 🗺️",
                  "level": "elementary"
            },
            {
                  "text": "Uma história engraçada da sua vida 🚴",
                  "level": "elementary"
            },
            {
                  "text": "Sua festa ou tradição favorita 🎄",
                  "level": "elementary"
            },
            {
                  "text": "Seu destino de férias ideal 🌴",
                  "level": "intermediate"
            },
            {
                  "text": "A pessoa mais interessante que você conhece 🙋",
                  "level": "intermediate"
            },
            {
                  "text": "Descreva seu fim de semana perfeito ☀️",
                  "level": "intermediate"
            },
            {
                  "text": "A última vez que você tentou algo novo 🎯",
                  "level": "intermediate"
            },
            {
                  "text": "Um novo hobby que você gostaria de começar 🎨",
                  "level": "intermediate"
            },
            {
                  "text": "Como a tecnologia muda a sua vida diária 📱",
                  "level": "intermediate"
            },
            {
                  "text": "O que você faria com 1 milhão de reais? 💰",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Um livro ou filme que mudou sua visão 📚",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Se você pudesse viver em qualquer lugar do mundo… 🌍",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Algo de que você se orgulha 🏆",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Uma lição de vida inesperada 💡",
                  "level": "upper_intermediate"
            },
            {
                  "text": "O que significa felicidade para você? 😊",
                  "level": "advanced"
            },
            {
                  "text": "A influência da cultura nas nossas escolhas 🏛️",
                  "level": "advanced"
            },
            {
                  "text": "O equilíbrio entre ambição e serenidade ⚖️",
                  "level": "advanced"
            }
      ],
      "opinions": [
            {
                  "text": "As redes sociais fazem mais mal do que bem.",
                  "level": "intermediate"
            },
            {
                  "text": "Todos deveriam aprender pelo menos dois idiomas.",
                  "level": "intermediate"
            },
            {
                  "text": "Trabalhar em casa é melhor do que no escritório.",
                  "level": "intermediate"
            },
            {
                  "text": "Dinheiro não compra felicidade.",
                  "level": "intermediate"
            },
            {
                  "text": "A semana de trabalho de 4 dias aumenta a produtividade.",
                  "level": "upper_intermediate"
            },
            {
                  "text": "O transporte público deveria ser gratuito para todos.",
                  "level": "upper_intermediate"
            },
            {
                  "text": "A renda básica universal é necessária para as economias do futuro.",
                  "level": "upper_intermediate"
            },
            {
                  "text": "A IA generativa nunca poderá substituir a verdadeira criatividade artística humana.",
                  "level": "advanced"
            },
            {
                  "text": "A privacidade total é impossível na era digital atual.",
                  "level": "advanced"
            }
      ],
      "battle": [
            [
                  "Montanhas 🏔️",
                  "Praia 🏖️"
            ],
            [
                  "Café ☕",
                  "Chá 🍵"
            ],
            [
                  "Madrugador 🌅",
                  "Noturno 🦉"
            ],
            [
                  "Vida na cidade 🏙️",
                  "Vida no campo 🌾"
            ],
            [
                  "Ler 📚",
                  "Assistir filmes 🎬"
            ],
            [
                  "Verão ☀️",
                  "Inverno ❄️"
            ],
            [
                  "Gatos 🐱",
                  "Cães 🐶"
            ],
            [
                  "Trabalho em casa 🏠",
                  "Trabalho no escritório 🏢"
            ],
            [
                  "Doce 🍰",
                  "Salgado 🧀"
            ],
            [
                  "Viajar sozinho ✈️",
                  "Viajar com amigos 👥"
            ]
      ],
      "critic": [
            {
                  "title": "Delicioso, mas muito caro 🍝",
                  "type": "Restaurante",
                  "review": "A comida estava incrível e os ingredientes frescos, mas as porções eram pequenas e a conta foi uma surpresa.",
                  "question": "Você voltaria apesar do preço elevado?"
            },
            {
                  "title": "Enredo envolvente, final fraco 🎬",
                  "type": "Filme",
                  "review": "Os dois primeiros terços do filme foram cheios de suspense, mas o desfecho foi apressado e ilógico.",
                  "question": "O quanto o final afeta a sua avaliação geral?"
            },
            {
                  "title": "Gráficos incríveis, mas com falhas 🎮",
                  "type": "Jogo",
                  "review": "O jogo é visualmente espetacular, mas trava com frequência e tem falhas técnicas.",
                  "question": "A atmosfera e os gráficos podem compensar os problemas técnicos?"
            }
      ],
      "action": {
            "starter": [
                  "Gato",
                  "Cão",
                  "Casa",
                  "Carro",
                  "Livro",
                  "Água",
                  "Sol",
                  "Lua",
                  "Árvore",
                  "Telefone",
                  "Porta",
                  "Cadeira",
                  "Cama",
                  "Pão",
                  "Peixe"
            ],
            "elementary": [
                  "Cozinha",
                  "Jardim",
                  "Trem",
                  "Médico",
                  "Professor",
                  "Música",
                  "Aniversário",
                  "Natação",
                  "Férias",
                  "Loja",
                  "Estação",
                  "Hospital"
            ],
            "intermediate": [
                  "Museu",
                  "Entrevista",
                  "Arquiteto",
                  "Jornalista",
                  "Parlamento",
                  "Orquestra",
                  "Maratona",
                  "Exposição",
                  "Laboratório",
                  "Telescópio"
            ],
            "upper_intermediate": [
                  "Filantropia",
                  "Embaixador",
                  "Hipótese",
                  "Empreendedor",
                  "Arqueologia",
                  "Biodiversidade",
                  "Infraestrutura"
            ],
            "advanced": [
                  "Paradigma",
                  "Juxtaposição",
                  "Anacronismo",
                  "Verossimilhança",
                  "Resiliência",
                  "Matiz",
                  "Perspicácia"
            ],
            "proficiency": [
                  "Ubiquidade",
                  "Efêmero",
                  "Perspicaz",
                  "Equanimidade",
                  "Vicisitude",
                  "Inefável"
            ]
      },
      "identity": [
            {
                  "person": "Um bombeiro",
                  "clue": "Usa capacete e apaga fogos com água.",
                  "level": "elementary"
            },
            {
                  "person": "Um chef",
                  "clue": "Trabalha numa cozinha e prepara pratos deliciosos.",
                  "level": "elementary"
            },
            {
                  "person": "Um bibliotecário",
                  "clue": "Gere uma biblioteca e ajuda as pessoas a encontrar livros.",
                  "level": "elementary"
            },
            {
                  "person": "Um veterinário",
                  "clue": "Cuida de animais doentes ou feridos.",
                  "level": "elementary"
            },
            {
                  "person": "Um astronauta",
                  "clue": "Viaja no espaço além da Terra.",
                  "level": "intermediate"
            },
            {
                  "person": "Um detetive",
                  "clue": "Investiga mistérios e procura pistas.",
                  "level": "intermediate"
            },
            {
                  "person": "Um jornalista",
                  "clue": "Informa o público e escreve artigos de notícias.",
                  "level": "intermediate"
            },
            {
                  "person": "Um fotógrafo",
                  "clue": "Capta memórias e imagens com uma câmara.",
                  "level": "intermediate"
            },
            {
                  "person": "Um arquiteto",
                  "clue": "Projeta casas e edifícios antes da sua construção.",
                  "level": "upper_intermediate"
            },
            {
                  "person": "Um cirurgião",
                  "clue": "Realiza operações médicas no hospital.",
                  "level": "upper_intermediate"
            },
            {
                  "person": "Um engenheiro de software",
                  "clue": "Escreve código para criar aplicações de software.",
                  "level": "upper_intermediate"
            },
            {
                  "person": "Um diplomata",
                  "clue": "Representa o seu país em relações internacionais oficiais.",
                  "level": "advanced"
            },
            {
                  "person": "Um biólogo marinho",
                  "clue": "Estuda a fauna e flora dos oceanos.",
                  "level": "advanced"
            },
            {
                  "person": "Um astrofísico",
                  "clue": "Estuda as propriedades físicas das estrelas e galáxias.",
                  "level": "advanced"
            }
      ],
      "wordlinker": [
            {
                  "words": [
                        "Maçã",
                        "Laranja",
                        "Banana",
                        "Cenoura"
                  ],
                  "odd": "Cenoura",
                  "link": "Frutas",
                  "oddReason": "Cenoura é um vegetal"
            },
            {
                  "words": [
                        "Lisboa",
                        "Roma",
                        "Tóquio",
                        "Amazonas"
                  ],
                  "odd": "Amazonas",
                  "link": "Capitais",
                  "oddReason": "O Amazonas é um rio"
            },
            {
                  "words": [
                        "Piano",
                        "Guitarra",
                        "Violino",
                        "Trompete"
                  ],
                  "odd": "none",
                  "link": "Instrumentos musicais",
                  "oddReason": "Todos são instrumentos"
            },
            {
                  "words": [
                        "Médico",
                        "Enfermeiro",
                        "Cirurgião",
                        "Piloto"
                  ],
                  "odd": "Piloto",
                  "link": "Profissões de saúde",
                  "oddReason": "O piloto pilota aviões, não no hospital"
            }
      ],
      "etymology": [
            {
                  "word": "Avel",
                  "level": "easy",
                  "options": [
                        "Keltiek / Celtic",
                        "Galleg",
                        "Latin",
                        "Saozneg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Kevatal d'ar kembraeg awel, o tont eus ar gwrizienn keltiek hag indezeuropeek evit an avel.",
                  "path": "Keltiek (aglo) → Brezhoneg Avel"
            },
            {
                  "word": "Kador",
                  "level": "easy",
                  "options": [
                        "Latin",
                        "Keltiek / Celtic",
                        "Galleg",
                        "Saozneg"
                  ],
                  "answer": "Latin",
                  "detail": "Amprestet eus al latin cathedra, deuet eus ar gresianeg kathedra (kador-oskoaz).",
                  "path": "Latin (cathedra) → Brezhoneg Kador"
            },
            {
                  "word": "Menez",
                  "level": "easy",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Galleg",
                        "Gouezeleg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Kevatal d'ar kembraeg mynydd hag ar kerneveureg mynydh, o tont eus ar predeneg monidos.",
                  "path": "Keltiek (monidos) → Brezhoneg Menez"
            },
            {
                  "word": "Ti",
                  "level": "easy",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Galleg",
                        "Saozneg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Kevatal d'ar kembraeg ty ha gouezeleg tigh, eus ar c'heltieg teg- o dalvezout ti pe gloz.",
                  "path": "Keltiek (tegos) → Brezhoneg Ti"
            },
            {
                  "word": "Mor",
                  "level": "easy",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Galleg",
                        "Gouezeleg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Kevatal d'ar kembraeg mor, kerneweureg mor, ha gouezeleg muir, eus ar c'heltieg koshañ mori.",
                  "path": "Keltiek (mori) → Brezhoneg Mor"
            },
            {
                  "word": "Eost",
                  "level": "easy",
                  "options": [
                        "Latin",
                        "Keltiek / Celtic",
                        "Galleg",
                        "Saozneg"
                  ],
                  "answer": "Latin",
                  "detail": "Deuet eus anv an impalaer roman Augustus, evit envel miz an eost ha trevadoù an hañv.",
                  "path": "Latin (Augustus) → Brezhoneg Eost"
            },
            {
                  "word": "Kastell",
                  "level": "easy",
                  "options": [
                        "Latin",
                        "Keltiek / Celtic",
                        "Galleg",
                        "Saozneg"
                  ],
                  "answer": "Latin",
                  "detail": "Amprestet e-pad mare ar Romaned eus al latin castellum (kreñvlec'h).",
                  "path": "Latin (castellum) → Brezhoneg Kastell"
            },
            {
                  "word": "Plou-",
                  "level": "easy",
                  "options": [
                        "Latin",
                        "Keltiek / Celtic",
                        "Galleg",
                        "Saozneg"
                  ],
                  "answer": "Latin",
                  "detail": "Prefiks el lec'hanvadurezh vreizhat o tont eus al latin plebem (pobl pe parrez).",
                  "path": "Latin (plebem) → Brezhoneg Plou-"
            },
            {
                  "word": "Korn",
                  "level": "easy",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Galleg",
                        "Gouezeleg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Kevatal d'ar kembraeg corn hag al latin cornu, kenwriziennek er kerentiad indezeuropeek.",
                  "path": "Keltiek (karno) → Brezhoneg Korn"
            },
            {
                  "word": "Bara",
                  "level": "easy",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Galleg",
                        "Saozneg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Kevatal d'ar kembraeg bara hag ar c'herneweureg bara, ger keltiek evit boad ar pemdez.",
                  "path": "Keltiek (borage) → Brezhoneg Bara"
            },
            {
                  "word": "Gwin",
                  "level": "medium",
                  "options": [
                        "Latin",
                        "Keltiek / Celtic",
                        "Galleg",
                        "Saozneg"
                  ],
                  "answer": "Latin",
                  "detail": "Amprestet e-pad Mare ar Romaned eus al latin vinum (gwin/evaj).",
                  "path": "Latin (vinum) → Brezhoneg Gwin"
            },
            {
                  "word": "Marc'h",
                  "level": "medium",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Galleg",
                        "Gouezeleg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Ger keltiek koshañ evit ar marc'h, kavet ivez e gouezeleg marc hag e galloueg marc-.",
                  "path": "Keltiek (markos) → Brezhoneg Marc'h"
            },
            {
                  "word": "Nedeleg",
                  "level": "medium",
                  "options": [
                        "Latin",
                        "Keltiek / Celtic",
                        "Galleg",
                        "Saozneg"
                  ],
                  "answer": "Latin",
                  "detail": "Deuet eus al latin Natalicia (deiz ginivelezh), kevatal d'ar c'hembraeg Nadolig.",
                  "path": "Latin (Natalicia) → Brezhoneg Nedeleg"
            },
            {
                  "word": "Gouel",
                  "level": "medium",
                  "options": [
                        "Latin",
                        "Keltiek / Celtic",
                        "Galleg",
                        "Saozneg"
                  ],
                  "answer": "Latin",
                  "detail": "Amprestet eus al latin vigilia (deiz beyliat pe gouel relijiel).",
                  "path": "Latin (vigilia) → Brezhoneg Gouel"
            },
            {
                  "word": "Penn",
                  "level": "medium",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Galleg",
                        "Gouezeleg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Ger keltiek gallaouek-predenek evit ar penn pe ar c'hrec'h, kavet er c'hembraeg pen.",
                  "path": "Keltiek (penno) → Brezhoneg Penn"
            },
            {
                  "word": "Lenn",
                  "level": "medium",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Galleg",
                        "Gouezeleg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Eus ar ger geltiek lindo (dour/lenn), kevatal d'ar c'hembraeg llyn ha d'ar gouezeleg linn.",
                  "path": "Keltiek (lindo) → Brezhoneg Lenn"
            },
            {
                  "word": "Koukoug",
                  "level": "medium",
                  "options": [
                        "Onomatopeik / Onomatopoeic",
                        "Latin",
                        "Galleg",
                        "Saozneg"
                  ],
                  "answer": "Onomatopeik / Onomatopoeic",
                  "detail": "Ger onomatopeek o treveziñ kan an evn koukoug, kavet ivez er c'hembraeg cwcw.",
                  "path": "Son an evn → Brezhoneg Koukoug"
            },
            {
                  "word": "Egliz",
                  "level": "medium",
                  "options": [
                        "Latin",
                        "Gresianeg",
                        "Keltiek / Celtic",
                        "Galleg"
                  ],
                  "answer": "Latin",
                  "detail": "Deuet eus al latin ecclesia, e-unan amprestet eus ar gresianeg ekklēsia (bodadenn).",
                  "path": "Gresianeg (ekklēsia) → Latin (ecclesia) → Brezhoneg Egliz"
            },
            {
                  "word": "Karr",
                  "level": "medium",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Galleg",
                        "Saozneg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Ger keltiek koshañ amprestet goude gant al latin carrus evit ar c'herri-stramm.",
                  "path": "Keltiek (karros) → Brezhoneg Karr"
            },
            {
                  "word": "Lestr",
                  "level": "medium",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Galleg",
                        "Gouezeleg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Kevatal d'ar c'hembraeg llestr, o tarkozañ ur lestr pe un bagigoù mor.",
                  "path": "Keltiek (lestr) → Brezhoneg Lestr"
            },
            {
                  "word": "Kozh",
                  "level": "hard",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Galleg",
                        "Gouezeleg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Eus ar galleg-predeneg kotto- (kozh), kavet er c'hembraeg cothead ha gallaoueg.",
                  "path": "Keltiek (kotto) → Brezhoneg Kozh"
            },
            {
                  "word": "Glas",
                  "level": "hard",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Galleg",
                        "Gouezeleg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Rannliv geltiek evit ar glaz hag ar gwer, kavet er c'hembraeg glas ha gouezeleg glas.",
                  "path": "Keltiek (glasto) → Brezhoneg Glas"
            },
            {
                  "word": "Aviel",
                  "level": "hard",
                  "options": [
                        "Gresianeg",
                        "Latin",
                        "Keltiek / Celtic",
                        "Galleg"
                  ],
                  "answer": "Gresianeg",
                  "detail": "Amprestet eus ar gresianeg euangelion (keloù mat), kavet er c'hembraeg efengyl.",
                  "path": "Gresianeg (euangelion) → Brezhoneg Aviel"
            },
            {
                  "word": "Yezhadur",
                  "level": "hard",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Gresianeg",
                        "Galleg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Neologisme brezhonek : yezh (yezh) + radikal -adur evit ar studi yezhadurel.",
                  "path": "Brezhoneg (yezh + adur) → Yezhadur"
            },
            {
                  "word": "Morlaer",
                  "level": "hard",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Galleg",
                        "Saozneg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Ger kevrennek brezhonek : mor (mor) + laer (laeront), o dalvezout morlaer.",
                  "path": "Brezhoneg (mor + laer) → Morlaer"
            },
            {
                  "word": "Ker",
                  "level": "hard",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Galleg",
                        "Gouezeleg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Eus ar predeneg kaer (lec'h kreñvaet/kêr), kement hag ur gêr pe ur vilajenn er stumm a-hed.",
                  "path": "Keltiek (kaer) → Brezhoneg Ker"
            },
            {
                  "word": "Tad",
                  "level": "hard",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Galleg",
                        "Gouezeleg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Kevatal d'ar c'hembraeg tad ha d'ar c'herneweureg tas, ger kentañ an indezeuropeeg.",
                  "path": "Keltiek (tatos) → Brezhoneg Tad"
            },
            {
                  "word": "Mamm",
                  "level": "hard",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Galleg",
                        "Gouezeleg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Ger babig indezeuropeek evit ar vamm, kavet e kembraeg mamm hag e gresianeg ma.",
                  "path": "Keltiek (mamma) → Brezhoneg Mamm"
            },
            {
                  "word": "Ster",
                  "level": "hard",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Galleg",
                        "Gouezeleg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Ger keltiek henvreizhonek evit ur stêr pe un dourredenn.",
                  "path": "Keltiek (stera) → Brezhoneg Ster"
            },
            {
                  "word": "Douar",
                  "level": "hard",
                  "options": [
                        "Keltiek / Celtic",
                        "Latin",
                        "Galleg",
                        "Gouezeleg"
                  ],
                  "answer": "Keltiek / Celtic",
                  "detail": "Kevatal d'ar c'hembraeg daear ha c'herneweureg doar, ger keltiek evit an douar.",
                  "path": "Keltiek (dowro) → Brezhoneg Douar"
            }
      ],
      "storychain": [
            {
                  "prompt": "Numa terça-feira chuvosa, o Marcos encontrou uma chave antiga no bolso…",
                  "level": "starter"
            },
            {
                  "prompt": "O trem parou numa estação que não figurava em nenhum mapa…",
                  "level": "elementary"
            },
            {
                  "prompt": "Uma carta misteriosa estava na mesa da cozinha sem remetente…",
                  "level": "intermediate"
            },
            {
                  "prompt": "Quando a luz faltou em toda a cidade, a Sofia notou um brilho invulgar…",
                  "level": "upper_intermediate"
            },
            {
                  "prompt": "No sótão da casa antiga, o António descobriu um diário datado de 1888…",
                  "level": "advanced"
            }
      ]
};

    window.gameData = window.gameData || {};
    window.gameData['br'] = data;
})();