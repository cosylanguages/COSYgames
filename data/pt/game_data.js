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
                                  "text": "O que você faria com 1 milhão de euros? 💰",
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
                        },
                        {
                                  "text": "Umas férias de que você se lembra",
                                  "level": "elementary",
                                  "hints": [
                                            "Para onde você foi?",
                                            "Com quem você foi?",
                                            "O que você fez lá?",
                                            "Como estava o tempo?",
                                            "Qual foi o melhor momento?"
                                  ]
                        },
                        {
                                  "text": "Seu restaurante ou café favorito",
                                  "level": "elementary",
                                  "hints": [
                                            "Onde fica?",
                                            "Que comida eles servem?",
                                            "Por que você gosta?",
                                            "Com quem você vai?",
                                            "Quando foi a última vez que você foi?"
                                  ]
                        },
                        {
                                  "text": "Como você vai para o trabalho ou escola",
                                  "level": "elementary",
                                  "hints": [
                                            "Como você viaja — ônibus, carro, bicicleta?",
                                            "Quanto tempo leva?",
                                            "Você gosta do trajeto?",
                                            "É caro?",
                                            "O que você faz no caminho?"
                                  ]
                        },
                        {
                                  "text": "O que você faz para relaxar",
                                  "level": "elementary",
                                  "hints": [
                                            "O que ajuda você a relaxar?",
                                            "Você prefere estar sozinho ou com pessoas?",
                                            "Com que frequência você relaxa de verdade?",
                                            "Você tem um lugar favorito para relaxar?",
                                            "É fácil relaxar ou você acha difícil?"
                                  ]
                        },
                        {
                                  "text": "Um filme que você assistiu recentemente",
                                  "level": "elementary",
                                  "hints": [
                                            "Como se chamava o filme?",
                                            "Sobre o que era?",
                                            "Você gostou?",
                                            "Quem estava no elenco?",
                                            "Você o recomendaria?"
                                  ]
                        },
                        {
                                  "text": "Seu fim de semana ideal",
                                  "level": "elementary",
                                  "hints": [
                                            "O que você faria na sexta-feira à noite?",
                                            "Você sairia ou ficaria em casa?",
                                            "Você viajaria para algum lugar?",
                                            "Com quem você passaria o tempo?",
                                            "O que você comeria?"
                                  ]
                        },
                        {
                                  "text": "Uma pessoa que você admira",
                                  "level": "elementary",
                                  "hints": [
                                            "Quem é essa pessoa?",
                                            "O que ela faz?",
                                            "Por que você a admira?",
                                            "Você já a conheceu?",
                                            "O que você pode aprender com ela?"
                                  ]
                        },
                        {
                                  "text": "O destino das suas férias dos sonhos",
                                  "level": "elementary",
                                  "hints": [
                                            "Para onde você iria?",
                                            "Por que este lugar?",
                                            "Com quem você iria?",
                                            "O que você faria lá?",
                                            "Quanto tempo você ficaria?"
                                  ]
                        },
                        {
                                  "text": "Sua relação com seu telefone",
                                  "level": "elementary",
                                  "hints": [
                                            "Quantas horas por dia você usa seu telefone?",
                                            "Para que você o usa mais?",
                                            "Você conseguiria viver sem ele por uma semana?",
                                            "Ele ajuda você ou distrai?",
                                            "Você o checa logo de manhã?"
                                  ]
                        },
                        {
                                  "text": "Algo engraçado que aconteceu com você",
                                  "level": "elementary",
                                  "hints": [
                                            "Quando isso aconteceu?",
                                            "Onde você estava?",
                                            "Com quem você estava?",
                                            "O que exatamente aconteceu?",
                                            "Você ainda ri disso agora?"
                                  ]
                        },
                        {
                                  "text": "Seus hobbies",
                                  "level": "elementary",
                                  "hints": [
                                            "O que você faz no seu tempo livre?",
                                            "Quando você começou este hobby?",
                                            "Você o faz sozinho ou com outros?",
                                            "É caro?",
                                            "O que você ama nele?"
                                  ]
                        },
                        {
                                  "text": "O tempo onde você mora",
                                  "level": "elementary",
                                  "hints": [
                                            "Como é o tempo geralmente?",
                                            "Qual é o seu tipo de tempo favorito?",
                                            "O tempo afeta seu humor?",
                                            "Qual é o pior tempo de que você se lembra?",
                                            "O que você faz em dias de chuva?"
                                  ]
                        },
                        {
                                  "text": "Um aniversário de que você se lembra",
                                  "level": "elementary",
                                  "hints": [
                                            "De quem era o aniversário?",
                                            "Onde foi a celebração?",
                                            "O que vocês fizeram?",
                                            "Houve alguma surpresa?",
                                            "O que o tornou especial?"
                                  ]
                        },
                        {
                                  "text": "Coisas que você ama onde mora",
                                  "level": "elementary",
                                  "hints": [
                                            "Qual é a sua coisa favorita na sua cidade?",
                                            "É um bom lugar para famílias?",
                                            "O que há para fazer lá?",
                                            "O que você mudaria?",
                                            "Você a recomendaria a um amigo?"
                                  ]
                        },
                        {
                                  "text": "Um domingo típico",
                                  "level": "elementary",
                                  "hints": [
                                            "A que horas você acorda no domingo?",
                                            "Você tem uma rotina?",
                                            "Você cozinha uma refeição grande?",
                                            "Você descansa ou fica ocupado?",
                                            "O domingo é seu dia favorito?"
                                  ]
                        },
                        {
                                  "text": "Comida do seu país",
                                  "level": "elementary",
                                  "hints": [
                                            "Qual é um prato tradicional?",
                                            "Você o cozinha em casa?",
                                            "Quando as pessoas o comem?",
                                            "É difícil de fazer?",
                                            "Você o recomendaria a um estrangeiro?"
                                  ]
                        },
                        {
                                  "text": "Algo que você comprou recentemente",
                                  "level": "elementary",
                                  "hints": [
                                            "O que você comprou?",
                                            "Onde você comprou?",
                                            "Foi caro?",
                                            "Você precisava ou apenas queria?",
                                            "Você está feliz com a compra?"
                                  ]
                        },
                        {
                                  "text": "Seu aplicativo favorito",
                                  "level": "elementary",
                                  "hints": [
                                            "Qual aplicativo você mais usa?",
                                            "Para que você o usa?",
                                            "Quando começou a usá-lo?",
                                            "Você o recomendaria?",
                                            "Conseguiria viver sem ele?"
                                  ]
                        },
                        {
                                  "text": "Uma lembrança de infância",
                                  "level": "elementary",
                                  "hints": [
                                            "Quantos anos você tinha?",
                                            "Onde você estava?",
                                            "Com quem você estava?",
                                            "O que aconteceu?",
                                            "Por que você se lembra disso?"
                                  ]
                        },
                        {
                                  "text": "O que você comeu ontem",
                                  "level": "elementary",
                                  "hints": [
                                            "O que você comeu no café da manhã?",
                                            "O que você comeu no almoço?",
                                            "Você cozinhou ou comeu fora?",
                                            "Foi um dia típico de alimentação?",
                                            "Qual foi a melhor coisa que você comeu?"
                                  ]
                        },
                        {
                                  "text": "Um lugar que você sente como seu lar",
                                  "level": "intermediate",
                                  "hints": [
                                            "É uma cidade, uma casa, um país?",
                                            "Quando você sentiu isso pela primeira vez?",
                                            "O que faz com que pareça um lar?",
                                            "O lar é um lugar ou um sentimento?",
                                            "Você acha que pode ter mais de um lar?"
                                  ]
                        },
                        {
                                  "text": "Algo sobre o qual você mudou de ideia",
                                  "level": "intermediate",
                                  "hints": [
                                            "O que você costumava pensar?",
                                            "O que mudou?",
                                            "Quando aconteceu?",
                                            "Foi uma mudança gradual ou repentina?",
                                            "Como você se sente sobre isso agora?"
                                  ]
                        },
                        {
                                  "text": "O que faz de alguém um bom amigo",
                                  "level": "intermediate",
                                  "hints": [
                                            "Quais qualidades importam mais em uma amizade?",
                                            "Seus amigos mais próximos são parecidos com você ou diferentes?",
                                            "As amizades podem mudar à medida que você envelhece?",
                                            "O que é algo que você não toleraria em um amigo?",
                                            "É fácil fazer amigos de verdade como adulto?"
                                  ]
                        },
                        {
                                  "text": "Algo que você gostaria de ter aprendido antes",
                                  "level": "intermediate",
                                  "hints": [
                                            "O que é?",
                                            "Por que você não aprendeu antes?",
                                            "Como sua vida seria diferente?",
                                            "É tarde demais para aprender agora?",
                                            "Você ensinaria isso a alguém mais jovem?"
                                  ]
                        },
                        {
                                  "text": "Uma habilidade que você está tentando melhorar",
                                  "level": "intermediate",
                                  "hints": [
                                            "Qual é a habilidade?",
                                            "Por que você decidiu trabalhar nela?",
                                            "Como você pratica?",
                                            "Qual é a parte mais difícil?",
                                            "Quanto progresso você fez?"
                                  ]
                        },
                        {
                                  "text": "O que você sente falta de ser criança",
                                  "level": "intermediate",
                                  "hints": [
                                            "Do que você genuinamente sente falta?",
                                            "Você acha que a infância era mais fácil?",
                                            "Com o que as crianças se preocupavam que os adultos não?",
                                            "O que os adultos faziam que você não entendia na época, mas entende agora?",
                                            "Você voltaria se pudesse?"
                                  ]
                        },
                        {
                                  "text": "Seu dia de trabalho ideal",
                                  "level": "intermediate",
                                  "hints": [
                                            "A que horas você começaria e terminaria?",
                                            "Onde você trabalharia?",
                                            "Com quem você trabalharia?",
                                            "O que você estaria fazendo?",
                                            "Quão diferente é do seu dia de trabalho real?"
                                  ]
                        },
                        {
                                  "text": "Como sua vida mudou nos últimos anos",
                                  "level": "intermediate",
                                  "hints": [
                                            "Qual é a maior mudança?",
                                            "Foi escolha sua?",
                                            "Foi para melhor?",
                                            "O que permaneceu igual?",
                                            "O que você acha que mudará a seguir?"
                                  ]
                        },
                        {
                                  "text": "O que faz você se sentir mais vivo",
                                  "level": "intermediate",
                                  "hints": [
                                            "Existe um momento ou atividade que sempre te dá energia?",
                                            "Envolve outras pessoas ou a solidão?",
                                            "Com que frequência você se sente assim?",
                                            "Isso mudou com o tempo?",
                                            "O que te impede de fazer isso com mais frequência?"
                                  ]
                        },
                        {
                                  "text": "Sua maior distração",
                                  "level": "intermediate",
                                  "hints": [
                                            "O que atrai sua atenção mais facilmente?",
                                            "Isso lhe custa tempo ou energia?",
                                            "Você tentou mudar isso?",
                                            "É totalmente ruim ou há algo de bom nisso?",
                                            "O que você faria com o tempo se removesse essa distração?"
                                  ]
                        },
                        {
                                  "text": "Um livro, filme ou série que marcou você",
                                  "level": "intermediate",
                                  "hints": [
                                            "Como se chamava?",
                                            "Sobre o que era?",
                                            "Por que marcou você?",
                                            "Mudou sua forma de pensar sobre algo?",
                                            "Você recomendaria e para quem?"
                                  ]
                        },
                        {
                                  "text": "O que o lar significa para você",
                                  "level": "intermediate",
                                  "hints": [
                                            "O lar é uma pessoa, um lugar ou um sentimento?",
                                            "Onde você se sente mais em casa?",
                                            "Sua ideia de lar mudou à medida que envelheceu?",
                                            "Você pode se sentir em casa em um lugar novo?",
                                            "O lar é um lugar para onde você volta ou algo que você carrega consigo?"
                                  ]
                        },
                        {
                                  "text": "Algo que você faz de forma diferente da maioria das pessoas",
                                  "level": "intermediate",
                                  "hints": [
                                            "O que é?",
                                            "Quando você começou a fazer dessa forma?",
                                            "As pessoas já questionaram você sobre isso?",
                                            "Isso torna sua vida melhor?",
                                            "Você acha que todos deveriam fazer do seu jeito?"
                                  ]
                        },
                        {
                                  "text": "Um hábito do qual você se orgulha",
                                  "level": "intermediate",
                                  "hints": [
                                            "Qual é o hábito?",
                                            "Há quanto tempo você o tem?",
                                            "Como você o construiu?",
                                            "Que diferença isso faz?",
                                            "Alguém inspirou você?"
                                  ]
                        },
                        {
                                  "text": "Uma viagem que surpreendeu você",
                                  "level": "intermediate",
                                  "hints": [
                                            "Para onde você estava indo?",
                                            "O que surpreendeu você?",
                                            "Foi o lugar, as pessoas ou o que aconteceu?",
                                            "Isso mudou seus planos?",
                                            "Você voltaria?"
                                  ]
                        },
                        {
                                  "text": "Sua relação com as redes sociais",
                                  "level": "intermediate",
                                  "hints": [
                                            "Quais plataformas você usa?",
                                            "Quanto tempo você passa nelas?",
                                            "Isso afeta seu humor?",
                                            "Você já fez uma pausa?",
                                            "Como seria sua vida sem elas?"
                                  ]
                        },
                        {
                                  "text": "Como é o sucesso para você",
                                  "level": "intermediate",
                                  "hints": [
                                            "Como você define o sucesso?",
                                            "É dinheiro, felicidade, relacionamentos?",
                                            "Sua definição mudou com o tempo?",
                                            "Você se considera bem-sucedido?",
                                            "A opinião das outras pessoas sobre o seu sucesso importa para você?"
                                  ]
                        },
                        {
                                  "text": "Sua relação com a comida",
                                  "level": "intermediate",
                                  "hints": [
                                            "Você cozinha com frequência?",
                                            "A comida é apenas combustível ou algo mais?",
                                            "Você come com outras pessoas ou sozinho?",
                                            "Existe uma comida que está fortemente ligada a uma memória?",
                                            "Sua relação com a comida mudou?"
                                  ]
                        },
                        {
                                  "text": "Algo que sempre faz você rir",
                                  "level": "intermediate",
                                  "hints": [
                                            "O que é?",
                                            "Por que você acha que isso faz você rir?",
                                            "Você consegue rir de coisas difíceis?",
                                            "Você e seus amigos riem das mesmas coisas?",
                                            "Seu senso de humor é diferente em idiomas diferentes?"
                                  ]
                        },
                        {
                                  "text": "Um conselho que você daria ao seu eu mais jovem",
                                  "level": "intermediate",
                                  "hints": [
                                            "Qual seria a idade do seu eu mais jovem?",
                                            "Qual seria o conselho?",
                                            "Por que você não sabia disso na época?",
                                            "Você acha que teria ouvido?",
                                            "Quem lhe deu o melhor conselho da sua vida?"
                                  ]
                        },
                        {
                                  "text": "O futuro do mundo daqui a 50 anos",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Que mudanças tecnológicas você espera?",
                                            "Como estará o meio ambiente?",
                                            "As estruturas sociais serão diferentes?",
                                            "Há algo que o preocupe?",
                                            "O que o torna otimista em relação ao futuro?"
                                  ]
                        },
                        {
                                  "text": "O impacto das alterações climáticas nas comunidades locais",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Como mudou a sua área local?",
                                            "Que riscos específicos as pessoas enfrentam?",
                                            "Quem é mais vulnerável?",
                                            "Estão a ser tomadas medidas suficientes?",
                                            "O que podem os indivíduos fazer para marcar a diferença?"
                                  ]
                        },
                        {
                                  "text": "Uma crença que você tem e que a maioria das pessoas ao seu redor não partilha",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Qual é essa crença?",
                                            "Quando é que a formou?",
                                            "Já alguma vez foi questionado sobre ela?",
                                            "Isso afeta os seus relacionamentos?",
                                            "Já mudou alguma vez devido a uma conversa?"
                                  ]
                        },
                        {
                                  "text": "O que você faria se não tivesse medo",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Qual é a coisa que o medo o impede de fazer?",
                                            "É um medo racional ou irracional?",
                                            "O medo já o impediu de algo e depois arrependeu-se?",
                                            "Como seria a sua vida do outro lado desse medo?",
                                            "O que diria a alguém que enfrenta o mesmo medo?"
                                  ]
                        },
                        {
                                  "text": "A melhor e a pior coisa sobre o lugar onde cresceu",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "O que mais o moldou nesse lugar?",
                                            "Pelo que se sente grato?",
                                            "O que gostaria que tivesse sido diferente?",
                                            "Como é que isso formou os seus valores?",
                                            "Criaria filhos lá?"
                                  ]
                        },
                        {
                                  "text": "Como você lida com o stress",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Quais são as suas estratégias principais?",
                                            "Acha que lida bem com o stress?",
                                            "O que o deixa mais stressado?",
                                            "A sua relação com o stress mudou?",
                                            "Que conselho daria a alguém que luta com o stress?"
                                  ]
                        },
                        {
                                  "text": "Algo que você costumava julgar e agora compreende",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "O que era?",
                                            "O que pensava antes?",
                                            "O que mudou a sua perspetiva?",
                                            "Sente-se envergonhado com a sua antiga visão?",
                                            "Isso tornou-o menos crítico em geral?"
                                  ]
                        },
                        {
                                  "text": "O que a amizade significa para si enquanto adulto",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "A amizade adulta é diferente da amizade de infância?",
                                            "Quantos amigos próximos tem?",
                                            "Como mantém as amizades à distância?",
                                            "Já 'ultrapassou' alguma amizade?",
                                            "O que faz uma amizade durar?"
                                  ]
                        },
                        {
                                  "text": "Uma vez em que errou completamente em algo",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "O que aconteceu?",
                                            "Quanto tempo demorou a perceber?",
                                            "Qual foi o custo de estar errado?",
                                            "Como lidou com isso?",
                                            "O que aprendeu?"
                                  ]
                        },
                        {
                                  "text": "A sua relação complicada com as redes sociais",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Ama-as, odeia-as ou ambos?",
                                            "O que obtém delas que não consegue noutro lugar?",
                                            "Já se sentiu pior depois de as usar?",
                                            "Acha que elas mudam a forma como se apresenta?",
                                            "Se pudesse redesenhar as redes sociais, o que mudaria?"
                                  ]
                        },
                        {
                                  "text": "A coisa mais superestimada da vida moderna",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "O que é?",
                                            "Porque é que as pessoas a valorizam tanto?",
                                            "Quando percebeu que não achava que valesse a pena?",
                                            "A sua opinião gera reações nos outros?",
                                            "Pelo que a substituiria?"
                                  ]
                        },
                        {
                                  "text": "Um momento que mudou a forma como se vê a si próprio",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "O que aconteceu?",
                                            "Estava à espera que isso o afetasse?",
                                            "Mudou-o imediatamente ou gradualmente?",
                                            "A versão de si após este momento é melhor?",
                                            "Partilharia isto com alguém próximo?"
                                  ]
                        },
                        {
                                  "text": "Algo de que se orgulha silenciosamente",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "O que é?",
                                            "Porquê silenciosamente — porque não em voz alta?",
                                            "Quanto tempo demorou?",
                                            "As pessoas próximas sabem disso?",
                                            "O que é que isso diz sobre os seus valores?"
                                  ]
                        },
                        {
                                  "text": "A sua teoria pessoal sobre porque é que as pessoas são como são",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "É a natureza, a educação ou outra coisa?",
                                            "Acha que as pessoas podem mudar fundamentalmente?",
                                            "Alguma pessoa já o surpreendeu completamente?",
                                            "Acha que compreende bem as pessoas?",
                                            "Qual é o maior erro que as pessoas cometem umas com as outras?"
                                  ]
                        },
                        {
                                  "text": "O que pensa sobre a ambição",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "É uma pessoa ambiciosa?",
                                            "A ambição é sempre algo bom?",
                                            "A ambição pode prejudicar a sua vida pessoal?",
                                            "Admira pessoas altamente ambiciosas?",
                                            "Quanto é suficiente?"
                                  ]
                        },
                        {
                                  "text": "A versão de si próprio de há cinco anos",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "O que estava a fazer?",
                                            "Com o que se preocupava?",
                                            "Como pensava que a sua vida seria agora?",
                                            "Qual foi a coisa mais importante que ainda não sabia?",
                                            "Dar-se-ia bem com o seu eu do passado?"
                                  ]
                        },
                        {
                                  "text": "Como toma decisões difíceis",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Segue a cabeça ou o instinto?",
                                            "Toma decisões rápida ou lentamente?",
                                            "Pede conselhos ou decide sozinho?",
                                            "Qual foi a decisão mais difícil que já tomou?",
                                            "Costuma sentir-se em paz com as suas decisões depois?"
                                  ]
                        },
                        {
                                  "text": "A nostalgia e o que ela lhe faz",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "De que sente nostalgia?",
                                            "A nostalgia é reconfortante ou dolorosa?",
                                            "Acha que o passado era realmente melhor ou apenas diferente?",
                                            "A nostalgia alguma vez o impede de seguir em frente?",
                                            "Qual é o cheiro, som ou sabor que desperta uma memória?"
                                  ]
                        },
                        {
                                  "text": "Fama — castigo ou recompensa?",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Gostaria de ser famoso?",
                                            "Que tipo de fama teria?",
                                            "O que perderia?",
                                            "Acha que a maioria das pessoas famosas é feliz?",
                                            "Qual é a diferença entre fama e respeito?"
                                  ]
                        },
                        {
                                  "text": "O que o entedia e o que o fascina",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Sobre que tópico ou atividade poderia falar durante horas?",
                                            "O que é que não suporta de forma alguma?",
                                            "O que o fascina diz algo sobre si como pessoa?",
                                            "Algo que antes o entediava tornou-se interessante?",
                                            "O que é que acha fascinante e que surpreende as pessoas?"
                                  ]
                        },
                        {
                                  "text": "Uma vez em que teve de começar de novo",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "O que aconteceu antes do recomeço?",
                                            "Foi uma escolha ou a vida forçou-o?",
                                            "Qual foi a parte mais difícil de começar de novo?",
                                            "O que guardou de antes?",
                                            "Está contente por ter acontecido?"
                                  ]
                        },
                        {
                                  "text": "O que as pessoas entendem mal sobre si",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Qual é o equívoco mais comum?",
                                            "De onde vem?",
                                            "Incomoda-o?",
                                            "Tenta corrigi-lo ou deixa passar?",
                                            "Há alguma verdade nisso, afinal?"
                                  ]
                        },
                        {
                                  "text": "Se o lugar onde você cresceu fez de você quem você é",
                                  "level": "advanced",
                                  "hints": [
                                            "Quais coisas específicas daquele lugar moldaram você?",
                                            "São as pessoas, a cultura, a paisagem, a língua?",
                                            "Você poderia ter se tornado a mesma pessoa em outro lugar?",
                                            "Você se sente definido pelas suas origens ou você resiste a isso?",
                                            "Como você seria se tivesse crescido em um lugar completamente diferente?"
                                  ]
                        },
                        {
                                  "text": "A lacuna entre quem você é e quem você apresenta ao mundo",
                                  "level": "advanced",
                                  "hints": [
                                            "Existe uma lacuna significativa entre o seu eu público e o privado?",
                                            "Essa lacuna é saudável ou custa algo a você?",
                                            "Em quais contextos você é mais plenamente você mesmo?",
                                            "As pessoas que te conhecem bem veem uma pessoa diferente dos colegas ou estranhos?",
                                            "A performance da identidade é inevitável ou é algo a ser resistido?"
                                  ]
                        },
                        {
                                  "text": "Se as pessoas mudam fundamentalmente ou apenas se revelam lentamente",
                                  "level": "advanced",
                                  "hints": [
                                            "Você consegue pensar em alguém que mudou genuinamente — ou você apenas não o conhecia bem o suficiente antes?",
                                            "O que é preciso para uma pessoa mudar de verdade?",
                                            "Você acha que mudou ou permaneceu essencialmente o mesmo?",
                                            "O que diz sobre os relacionamentos se as pessoas não mudarem de verdade?",
                                            "A crença de que as pessoas podem mudar é necessária para o amor e a amizade?"
                                  ]
                        },
                        {
                                  "text": "O que você aprendeu com o fracasso que não poderia ter aprendido com o sucesso",
                                  "level": "advanced",
                                  "hints": [
                                            "Qual é um fracasso específico que te ensinou algo insubstituível?",
                                            "O fracasso é realmente um professor melhor ou isso é apenas algo que as pessoas dizem para se sentirem melhor?",
                                            "Você acha que lida bem com o fracasso?",
                                            "Qual é a forma de fracasso mais dolorosa para você pessoalmente?",
                                            "Existe tal coisa como um fracasso que não te ensina nada?"
                                  ]
                        },
                        {
                                  "text": "Sua relação com a certeza e a dúvida",
                                  "level": "advanced",
                                  "hints": [
                                            "Você é alguém que precisa de certeza ou consegue viver confortavelmente com a ambiguidade?",
                                            "Em quais áreas da sua vida você se sente certo e em quais áreas você duvida?",
                                            "Um período de dúvida profunda já se revelou valioso?",
                                            "Você confia em pessoas que parecem completamente certas sobre tudo?",
                                            "Qual é a diferença entre o ceticismo saudável e a dúvida paralisante?"
                                  ]
                        },
                        {
                                  "text": "As coisas que você carrega da sua infância sem perceber",
                                  "level": "advanced",
                                  "hints": [
                                            "Existem padrões no seu comportamento que você consegue rastrear até experiências precoces?",
                                            "Quando você notou pela primeira vez algo da infância ainda operando em você?",
                                            "É possível compreender plenamente as influências invisíveis sobre quem você é?",
                                            "Quais desses padrões servem a você e quais não?",
                                            "Quanta responsabilidade temos de examinar nossas tendências herdadas?"
                                  ]
                        },
                        {
                                  "text": "O que você protegeria mesmo que isso lhe custasse algo",
                                  "level": "advanced",
                                  "hints": [
                                            "O que é algo que você não comprometeria, não importa o quê?",
                                            "Isso já foi testado?",
                                            "É um valor, um relacionamento ou outra coisa?",
                                            "Você acha que todo mundo tem algo assim ou é raro?",
                                            "Saber isso sobre você mesmo lhe diz no que você realmente acredita?"
                                  ]
                        },
                        {
                                  "text": "O que você acha que as pessoas entendem errado sobre a felicidade",
                                  "level": "advanced",
                                  "hints": [
                                            "Qual é o erro mais comum que as pessoas cometem na busca pela felicidade?",
                                            "A felicidade é algo que você encontra ou algo que você constrói?",
                                            "Você se acha feliz? Você ao menos sabe?",
                                            "Existe uma tensão entre felicidade e significado?",
                                            "Sua ideia de felicidade mudou significativamente?"
                                  ]
                        },
                        {
                                  "text": "O papel da sorte na sua vida",
                                  "level": "advanced",
                                  "hints": [
                                            "Quanto de onde você está agora é sorte versus esforço?",
                                            "É desconfortável reconhecer que a sorte desempenhou um papel?",
                                            "A sorte já trabalhou contra você?",
                                            "Você acha que as pessoas superestimam o controle que têm?",
                                            "Qual é a implicação ética da sorte — ela afeta o que devemos uns aos outros?"
                                  ]
                        },
                        {
                                  "text": "Se ambição e contentamento podem coexistir",
                                  "level": "advanced",
                                  "hints": [
                                            "Você acha que pode querer mais e estar em paz simultaneamente?",
                                            "Você já teve que escolher entre os dois?",
                                            "Você admira pessoas que estão contentes ou isso parece desistência?",
                                            "A ambição é uma forma de insatisfação por definição?",
                                            "Como seria na sua vida ter ambos?"
                                  ]
                        },
                        {
                                  "text": "O que você deve às pessoas que moldaram você",
                                  "level": "advanced",
                                  "hints": [
                                            "Você sente uma sensação de dívida com as pessoas que te formaram?",
                                            "Essa dívida é emocional, prática ou ambas?",
                                            "E se elas te moldaram de maneiras que foram prejudiciais?",
                                            "Como você honra a influência de alguém sem ser prisioneiro dela?",
                                            "Você consegue separar a gratidão da obrigação?"
                                  ]
                        },
                        {
                                  "text": "A coisa mais útil que já lhe disseram",
                                  "level": "advanced",
                                  "hints": [
                                            "O que foi e quem disse?",
                                            "Você entendeu imediatamente o valor disso ou apenas mais tarde?",
                                            "Você passa isso adiante?",
                                            "A sabedoria útil é sempre simples ou a complexidade também pode ser útil?",
                                            "O que é algo que você gostaria que alguém tivesse te dito e ninguém disse?"
                                  ]
                        },
                        {
                                  "text": "Algo sobre a vida moderna que genuinamente o preocupa",
                                  "level": "advanced",
                                  "hints": [
                                            "O que é — tecnologia, política, tendências sociais, o meio ambiente?",
                                            "Essa preocupação é nova ou vem crescendo?",
                                            "Você acha que outros a compartilham ou se sente sozinho nela?",
                                            "Preocupar-se com isso muda a maneira como você vive?",
                                            "Você tem alguma esperança de que vá melhorar?"
                                  ]
                        },
                        {
                                  "text": "A diferença entre estar sozinho e ser solitário",
                                  "level": "advanced",
                                  "hints": [
                                            "Você é alguém que gosta de solidão?",
                                            "Você já experimentou solidão no meio de uma multidão?",
                                            "Você acha que a vida moderna torna a solidão mais ou menos comum?",
                                            "Você pode ser solitário em um relacionamento?",
                                            "Qual é a cura para a solidão — mais conexão, ou algo mais profundo?"
                                  ]
                        },
                        {
                                  "text": "O que significa viver bem — e se você está perto",
                                  "level": "advanced",
                                  "hints": [
                                            "Como você define uma vida bem vivida?",
                                            "Para a vida de quem você olha e pensa: isso está perto?",
                                            "Você está em um caminho em direção a isso ou se afastando disso?",
                                            "Você pensa nisso com frequência ou a vida diária te distrai?",
                                            "Viver bem é algo que você planeja ou algo que acontece por acidente?"
                                  ]
                        },
                        {
                                  "text": "Se você confia na sua própria memória",
                                  "level": "advanced",
                                  "hints": [
                                            "Uma memória já se revelou errada?",
                                            "Você acha que editamos nossas memórias para adequá-las a uma narrativa sobre nós mesmos?",
                                            "Qual é a memória mais vívida que você tem e quão confiável você acha que ela é?",
                                            "Importa se uma memória é precisa se ela parece verdadeira?",
                                            "O que a memória diz sobre identidade — se suas memórias mudassem, você seria uma pessoa diferente?"
                                  ]
                        },
                        {
                                  "text": "As instituições e se elas nos servem",
                                  "level": "advanced",
                                  "hints": [
                                            "Pense em uma instituição — saúde, educação, governo — e avalie-a honestamente.",
                                            "Em que ponto uma instituição deixa de cumprir seu propósito?",
                                            "Você já se sentiu abandonado por uma instituição em que confiava?",
                                            "A reforma é possível ou as instituições precisam ser substituídas inteiramente?",
                                            "Como seria uma versão funcional da instituição escolhida?"
                                  ]
                        },
                        {
                                  "text": "As histórias que você conta sobre si mesmo",
                                  "level": "advanced",
                                  "hints": [
                                            "Qual é a história central que você conta sobre sua própria vida?",
                                            "Quanto disso é preciso e quanto é construção?",
                                            "A história mudou ao longo do tempo?",
                                            "O que acontece com o nosso senso de eu quando a história é questionada?",
                                            "Quem é você se você tirar a história?"
                                  ]
                        },
                        {
                                  "text": "O que comunidade significa em um mundo fragmentado",
                                  "level": "advanced",
                                  "hints": [
                                            "Você se sente parte de uma comunidade?",
                                            "Comunidade online é comunidade de verdade?",
                                            "O que foi perdido e o que foi ganho na maneira como as comunidades se formam hoje?",
                                            "O que a comunidade exige de seus membros?",
                                            "Você pode criar comunidade deliberadamente ou ela precisa crescer organicamente?"
                                  ]
                        },
                        {
                                  "text": "Como você sabe quando confiar em alguém",
                                  "level": "advanced",
                                  "hints": [
                                            "Quais sinais você procura?",
                                            "Seu instinto já esteve completamente errado?",
                                            "Você acha que é confiante demais, não confia o suficiente ou é bem calibrado?",
                                            "A confiança é dada ou conquistada — e essa distinção importa?",
                                            "O que quebra a confiança irrevogavelmente para você?"
                                  ]
                        },
                        {
                                  "text": "Complexidade da consciência humana",
                                  "level": "advanced",
                                  "hints": [
                                            "O que define a consciência: percepção, autorreflexão ou algo mais?",
                                            "A consciência é um subproduto de processos biológicos ou algo fundamental?",
                                            "Poderá a inteligência artificial alguma vez alcançar uma consciência genuína?",
                                            "Como o 'problema difícil' da consciência desafia as visões materialistas?",
                                            "Qual é a relação entre a consciência e o cérebro físico?"
                                  ]
                        },
                        {
                                  "text": "Se o eu é algo que descobrimos ou construímos",
                                  "level": "advanced",
                                  "hints": [
                                            "Existe um 'tu' fixo à espera de ser descoberto, ou és continuamente criado por escolhas e pelo contexto?",
                                            "O que acontece à identidade quando o contexto muda radicalmente — doença, migração, perda?",
                                            "A narrativa que tens sobre ti mesmo é uma descoberta ou uma invenção?",
                                            "A questão importa para a forma como vives, ou é puramente filosófica?",
                                            "Se o eu é construído, pelo que somos responsáveis ao construí-lo?"
                                  ]
                        },
                        {
                                  "text": "A ética do que escolhemos esquecer",
                                  "level": "advanced",
                                  "hints": [
                                            "Temos uma relação moral com o nosso próprio esquecimento?",
                                            "Será a memória seletiva uma forma de desonestidade connosco próprios?",
                                            "Poderá o perdão exigir o esquecimento, ou será isso um erro de categoria?",
                                            "O que revela sobre si mesma uma sociedade que escolhe coletivamente esquecer?",
                                            "Existe algo como a amnésia ética — para indivíduos ou nações?"
                                  ]
                        },
                        {
                                  "text": "Se a linguagem molda o que podemos pensar ou apenas o que podemos dizer",
                                  "level": "advanced",
                                  "hints": [
                                            "Aprender outra língua deu-te acesso a pensamentos que não conseguias formular totalmente na tua língua materna?",
                                            "A hipótese de Sapir-Whorf é uma metáfora poética ou uma pretensão epistemológica genuína?",
                                            "Existem experiências que resistem a toda a linguagem?",
                                            "O que significa sentir algo que não podes nomear?",
                                            "A língua que usas no teu monólogo interior muda a forma como te experiencias?"
                                  ]
                        },
                        {
                                  "text": "A relação entre liberdade e responsabilidade na tua própria vida",
                                  "level": "advanced",
                                  "hints": [
                                            "Onde te sentes mais livre e o que pagaste por essa liberdade?",
                                            "A liberdade é sempre comprada à custa de outra pessoa?",
                                            "Experiencias as tuas responsabilidades como limitações ou como aquilo que dá sentido à tua liberdade?",
                                            "Pode uma pessoa ser genuinamente livre sem as condições materiais para exercer essa liberdade?",
                                            "Do que desistirias para ser mais livre — e o que revela a tua resposta?"
                                  ]
                        },
                        {
                                  "text": "O que a nostalgia faz realmente quando te visita",
                                  "level": "advanced",
                                  "hints": [
                                            "A nostalgia é luto, conforto, distorção, ou as três coisas simultaneamente?",
                                            "Confias em sentimentos nostálgicos ou tratas-os com suspeita?",
                                            "Aquilo de que tens nostalgia é um passado real ou uma versão editada?",
                                            "O que a nostalgia impede e o que torna possível?",
                                            "Pode uma sociedade ser nostálgica da mesma forma que um indivíduo — e com os mesmos perigos?"
                                  ]
                        },
                        {
                                  "text": "Se compreender algo sempre o diminui",
                                  "level": "advanced",
                                  "hints": [
                                            "Pensa em algo belo ou misterioso — compreendê-lo torna-o menos belo?",
                                            "Existe valor em não saber, ou é apenas romantismo?",
                                            "Podem a explicação científica e o espanto estético coexistir, ou uma coloniza a outra?",
                                            "Existe algo que evitas deliberadamente compreender por medo de perder o seu poder sobre ti?",
                                            "O que revela esta pergunta sobre os limites do racionalismo?"
                                  ]
                        },
                        {
                                  "text": "A diferença entre os teus valores declarados e os teus valores revelados",
                                  "level": "advanced",
                                  "hints": [
                                            "O que dizem as tuas escolhas reais — não as tuas crenças declaradas — sobre o que valorizas mais?",
                                            "Existe um hiato doloroso entre os dois?",
                                            "Será o hiato evidência de hipocrisia ou da dificuldade genuína de viver segundo os próprios princípios?",
                                            "Podes fechar o hiato, ou persiste sempre alguma distância entre o ideal e o real?",
                                            "O que terias de abandonar para alinhar mais a tua vida com aquilo em que dizes acreditar?"
                                  ]
                        },
                        {
                                  "text": "Se a honestidade radical é uma virtude ou uma forma de autocomplacência",
                                  "level": "advanced",
                                  "hints": [
                                            "O impulso de 'dizer as coisas como elas são' prende-se com o bem-estar da outra pessoa ou com o teu próprio alívio?",
                                            "Será a amabilidade, por vezes, a escolha mais corajosa?",
                                            "Onde está a linha entre a honestidade e a crueldade?",
                                            "A exigência de honestidade total nas relações reflete intimidade ou controlo?",
                                            "Consegues pensar num momento em que a honestidade radical fez mais mal do que bem?"
                                  ]
                        },
                        {
                                  "text": "Se a grande arte deve desafiar ou consolar",
                                  "level": "advanced",
                                  "hints": [
                                            "Ao que recorres realmente quando sentes dor — à dificuldade ou ao consolo?",
                                            "Existe arte que consiga fazer ambas as coisas simultaneamente?",
                                            "A arte de consolo é menos séria do que a arte que desafia, ou é uma distinção snobe?",
                                            "Qual acreditas ser a obrigação primordial da arte?",
                                            "Existe alguma arte que te tenha mudado de uma forma que o consolo nunca poderia ter feito?"
                                  ]
                        },
                        {
                                  "text": "A exigência de equilíbrio e se ela confere uma falsa legitimidade",
                                  "level": "advanced",
                                  "hints": [
                                            "'Apresentar ambos os lados' é sempre justo, ou pode distorcer a realidade?",
                                            "Existe diferença entre equilíbrio e falsa equivalência?",
                                            "Quem decide que posições merecem uma plataforma?",
                                            "Pode o equilíbrio jornalístico coexistir com padrões epistémicos?",
                                            "Qual é o custo de dar plataforma a uma posição em nome da equidade?"
                                  ]
                        },
                        {
                                  "text": "Se o progresso moral é real ou apenas uma moda moral",
                                  "level": "advanced",
                                  "hints": [
                                            "A nossa confiança ética de hoje é um sinal de progresso genuíno ou o mesmo provincialismo com roupas novas?",
                                            "O que significaria para o progresso moral ser real?",
                                            "Consegues pensar em algo em que acreditamos atualmente e que as gerações futuras olharão com horror?",
                                            "A relatividade da moda moral mina a ideia de que algo é realmente errado?",
                                            "É a humildade moral compatível com a convicção moral?"
                                  ]
                        },
                        {
                                  "text": "As partes de ti mesmo que consideras mais difíceis de articular",
                                  "level": "advanced",
                                  "hints": [
                                            "Existe algo que sentes mas para o qual não consegues encontrar linguagem?",
                                            "A dificuldade reside na linguagem ou na própria coisa?",
                                            "Acreditas que alguma experiência interior é genuinamente privada — inacessível até para ti mesmo?",
                                            "O que significaria compreender plenamente a própria interioridade?",
                                            "Precisa o inefável de ser articulado para ser real?"
                                  ]
                        },
                        {
                                  "text": "As implicações políticas do contentamento",
                                  "level": "advanced",
                                  "hints": [
                                            "Estar genuinamente contente num mundo injusto é uma falha moral?",
                                            "A cultivação da paz pessoal é compatível com uma consciência política?",
                                            "O capitalismo beneficia de uma população contente?",
                                            "Existe uma versão do contentamento que não seja quietismo político?",
                                            "Como navegas pessoalmente na tensão entre a paz interior e o compromisso exterior?"
                                  ]
                        },
                        {
                                  "text": "Memória, identidade e o que resta quando ambas mudam",
                                  "level": "advanced",
                                  "hints": [
                                            "Se as tuas memórias fossem sistematicamente alteradas, ainda serias tu?",
                                            "Em que consiste realmente a continuidade do eu?",
                                            "A pessoa que recordas ser é a mesma que fala agora?",
                                            "O que acontece à identidade na experiência de uma perda ou transformação radical?",
                                            "Importa a questão da identidade pessoal para a forma como nos tratamos uns aos outros — legal e eticamente?"
                                  ]
                        },
                        {
                                  "text": "Se a vida examinada sempre vale a pena ser vivida",
                                  "level": "advanced",
                                  "hints": [
                                            "Sócrates disse que a vida não examinada não vale a pena ser vivida — concordas?",
                                            "Existe um custo no exame — uma espécie de paralisia ou perda de inocência?",
                                            "Pode o exame tornar-se na sua própria forma de evitamento?",
                                            "Existem pessoas que vivem profundamente e bem sem muito autoexame?",
                                            "O que pensas que o teu próprio grau de autoexame te custou e te deu?"
                                  ]
                        },
                        {
                                  "text": "A questão do que deves a estranhos",
                                  "level": "advanced",
                                  "hints": [
                                            "Tens obrigações para com pessoas que nunca conhecerás?",
                                            "Até onde se estendem as tuas obrigações morais — ao teu bairro, à tua nação, ao mundo?",
                                            "A distância física ou cultural diminui a obrigação ou é uma racionalização?",
                                            "Qual é a diferença entre caridade e justiça?",
                                            "Como vives realmente em relação a esta pergunta?"
                                  ]
                        },
                        {
                                  "text": "As histórias que as civilizações contam sobre si mesmas",
                                  "level": "advanced",
                                  "hints": [
                                            "Cada sociedade tem um mito fundador — qual é o teu e quão preciso é?",
                                            "O que é que uma nação escolhe esquecer tanto quanto aquilo que escolhe recordar?",
                                            "A identidade nacional é uma ficção útil ou perigosa?",
                                            "Pode uma sociedade ter um relato mais honesto de si mesma sem perder a coesão?",
                                            "Que história contarias sobre a tua própria civilização se tivesses de ser totalmente honesto?"
                                  ]
                        },
                        {
                                  "text": "Se qualquer texto pode ser totalmente traduzido",
                                  "level": "advanced",
                                  "hints": [
                                            "Viveste algo noutra língua que resistiu à tradução?",
                                            "A intraduzibilidade de certas palavras é evidência de que a linguagem molda o pensamento?",
                                            "O que perdemos e o que ganhamos na tradução?",
                                            "Uma excelente tradução é uma forma de criação ou uma forma de perda?",
                                            "O que nos diz a tradução sobre os limites da compreensão entre culturas?"
                                  ]
                        },
                        {
                                  "text": "A experiência de considerar coisas contraditórias como verdadeiras simultaneamente",
                                  "level": "advanced",
                                  "hints": [
                                            "Podes amar alguém e ressentir-te ao mesmo tempo sem que um anule o outro?",
                                            "A capacidade de sustentar a contradição é um sinal de maturidade ou de confusão?",
                                            "Existem posições políticas ou morais que defendes que estão em tensão genuína?",
                                            "A exigência de consistência nas nossas crenças reflete racionalismo ou rigidez?",
                                            "O que é algo em que acreditas que contradiz outra coisa em que também acreditas?"
                                  ]
                        },
                        {
                                  "text": "O que significa que um dia não existirás",
                                  "level": "advanced",
                                  "hints": [
                                            "Pensas na tua própria mortalidade regularmente, ocasionalmente ou quase nunca?",
                                            "A consciência da morte moldou a forma como vives ou o que valorizas?",
                                            "O medo da morte é racional, ou é uma confusão sobre o que está a ser perdido?",
                                            "Encontras conforto em alguma forma particular de pensar sobre a mortalidade?",
                                            "O que torna possível a mortalidade que a imortalidade poderia não permitir?"
                                  ]
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
                        },
                        {
                                  "text": "Os fins de semana são demasiado curtos.",
                                  "level": "elementary",
                                  "hints": [
                                            "O que faz aos fins de semana?",
                                            "Como se sente no domingo à noite?",
                                            "O que faria com um fim de semana de três dias?",
                                            "Trabalha ou estuda aos fins de semana?",
                                            "Qual é o fim de semana perfeito para si?"
                                  ]
                        },
                        {
                                  "text": "É falta de educação chegar atrasado.",
                                  "level": "elementary",
                                  "hints": [
                                            "Costuma ser pontual?",
                                            "Quanto tempo espera por um amigo?",
                                            "Não há problema em chegar 10 minutos atrasado?",
                                            "A pontualidade é importante na sua cultura?",
                                            "O que faz quando alguém se atrasa muito?"
                                  ]
                        },
                        {
                                  "text": "As pessoas são mais simpáticas nas cidades pequenas.",
                                  "level": "elementary",
                                  "hints": [
                                            "Onde mora — vila ou cidade?",
                                            "Os seus vizinhos são amigáveis?",
                                            "As pessoas falam com estranhos onde mora?",
                                            "Já viveu num tipo de lugar diferente?",
                                            "O que torna um lugar amigável?"
                                  ]
                        },
                        {
                                  "text": "Ter um animal de estimação torna-o mais feliz.",
                                  "level": "elementary",
                                  "hints": [
                                            "Tem um animal de estimação?",
                                            "Qual é o melhor animal de estimação para uma pessoa ocupada?",
                                            "Os animais de estimação são caros?",
                                            "Um animal de estimação pode ser um amigo?",
                                            "O que precisa de fazer para cuidar bem de um animal de estimação?"
                                  ]
                        },
                        {
                                  "text": "Pode-se dizer muito sobre alguém pelos seus sapatos.",
                                  "level": "elementary",
                                  "hints": [
                                            "Repara nos sapatos das pessoas?",
                                            "O que é que os seus sapatos dizem sobre si?",
                                            "A moda é importante para si?",
                                            "Pode julgar uma pessoa pela sua aparência?",
                                            "O que mais lhe diz algo sobre o carácter de uma pessoa?"
                                  ]
                        },
                        {
                                  "text": "Não há problema em comer sozinho num restaurante.",
                                  "level": "elementary",
                                  "hints": [
                                            "Já comeu sozinho num restaurante?",
                                            "Acha confortável?",
                                            "A comida é melhor com outras pessoas?",
                                            "Vê muitas pessoas a comer sozinhas?",
                                            "O que faz quando come sozinho?"
                                  ]
                        },
                        {
                                  "text": "Aprender uma língua é mais fácil quando se é jovem.",
                                  "level": "elementary",
                                  "hints": [
                                            "Que idade tinha quando começou a aprender esta língua?",
                                            "Acha que a idade é importante para a aprendizagem de línguas?",
                                            "Qual é a parte mais difícil de aprender uma língua?",
                                            "Conhece alguém que tenha aprendido uma língua em adulto?",
                                            "O que o ajuda mais quando estuda?"
                                  ]
                        },
                        {
                                  "text": "O transporte público é melhor do que ter um carro.",
                                  "level": "elementary",
                                  "hints": [
                                            "Como se desloca na sua cidade?",
                                            "O transporte público é bom onde mora?",
                                            "Quais são os problemas de ter um carro?",
                                            "É caro viajar em transporte público?",
                                            "O que mudaria no transporte na sua cidade?"
                                  ]
                        },
                        {
                                  "text": "É difícil ficar entediado quando se tem um telemóvel.",
                                  "level": "elementary",
                                  "hints": [
                                            "Quantas horas por dia usa o telemóvel?",
                                            "Para que o usa mais?",
                                            "Ficava entediado antes dos smartphones?",
                                            "O tédio às vezes é bom?",
                                            "Poderia deixar o telemóvel em casa por um dia?"
                                  ]
                        },
                        {
                                  "text": "Cozinhar em casa é sempre melhor do que comer fora.",
                                  "level": "elementary",
                                  "hints": [
                                            "Com que frequência cozinha em casa?",
                                            "O que é mais fácil — cozinhar ou ir a um restaurante?",
                                            "Comer fora é caro onde mora?",
                                            "Qual é o seu restaurante favorito?",
                                            "Qual é a sua melhor refeição caseira?"
                                  ]
                        },
                        {
                                  "text": "Todos deveriam tentar viver no estrangeiro durante um ano.",
                                  "level": "elementary",
                                  "hints": [
                                            "Já viveu noutro país?",
                                            "O que seria difícil em viver no estrangeiro?",
                                            "O que seria emocionante?",
                                            "Que país escolheria?",
                                            "Viver no estrangeiro muda uma pessoa?"
                                  ]
                        },
                        {
                                  "text": "Os super-heróis são mais interessantes do que os heróis reais.",
                                  "level": "elementary",
                                  "hints": [
                                            "Quem é o seu super-herói favorito?",
                                            "Consegue pensar num herói da vida real?",
                                            "O que faz de alguém um herói?",
                                            "Porque é que as pessoas adoram super-heróis?",
                                            "Os heróis reais são mais importantes?"
                                  ]
                        },
                        {
                                  "text": "É importante fazer a cama todas as manhãs.",
                                  "level": "elementary",
                                  "hints": [
                                            "Faz a cama todos os dias?",
                                            "Um quarto arrumado fá-lo sentir-se melhor?",
                                            "Isto é importante ou não?",
                                            "Qual é a sua rotina matinal?",
                                            "Que pequenos hábitos tem?"
                                  ]
                        },
                        {
                                  "text": "Fazer compras é um passatempo.",
                                  "level": "elementary",
                                  "hints": [
                                            "Gosta de fazer compras?",
                                            "Faz compras online ou em lojas?",
                                            "Quanto tempo passa a fazer compras?",
                                            "Fazer compras é relaxante?",
                                            "O que compra com mais frequência?"
                                  ]
                        },
                        {
                                  "text": "Viajar sozinho é melhor do que viajar com amigos.",
                                  "level": "elementary",
                                  "hints": [
                                            "Já viajou sozinho?",
                                            "O que há de bom em viajar sozinho?",
                                            "O que há de bom em viajar com outros?",
                                            "Sente-se sozinho quando viaja sozinho?",
                                            "Qual foi a melhor viagem que fez?"
                                  ]
                        },
                        {
                                  "text": "Ser filho único é melhor do que ter irmãos.",
                                  "level": "intermediate",
                                  "hints": [
                                            "É filho único ou tem irmãos ou irmãs?",
                                            "Quais são as vantagens de ter irmãos?",
                                            "Quais são as vantagens de estar sozinho?",
                                            "Os irmãos discutem sempre?",
                                            "Como é que a estrutura da sua família afeta a sua personalidade?"
                                  ]
                        },
                        {
                                  "text": "Dizer uma mentira piedosa é, por vezes, a coisa mais gentil a fazer.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Consegue pensar numa situação em que uma mentira seja gentil?",
                                            "A honestidade é sempre a melhor política?",
                                            "Já contou alguma mentira piedosa?",
                                            "Como se sente quando alguém mente para o proteger?",
                                            "Existe diferença entre uma mentira e não contar a verdade toda?"
                                  ]
                        },
                        {
                                  "text": "As redes sociais fazem as pessoas sentirem-se pior consigo mesmas.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Como se sente depois de navegar nas redes sociais?",
                                            "Compara-se com as pessoas online?",
                                            "Acha que as redes sociais mostram a vida real?",
                                            "Já fez alguma pausa das redes sociais?",
                                            "Como seria a vida sem elas?"
                                  ]
                        },
                        {
                                  "text": "Não é preciso viajar para entender o mundo.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Pode-se aprender sobre o mundo através de livros e filmes?",
                                            "O que é que viajar ensina que nada mais ensina?",
                                            "Viajar está ao alcance de todos?",
                                            "Aprendeu algo importante sem sair do seu país?",
                                            "Qual é a coisa mais importante que viajar lhe ensinou?"
                                  ]
                        },
                        {
                                  "text": "Pessoas que não gostam de animais são um pouco suspeitas.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Confia em pessoas que não gostam de animais?",
                                            "Gostar de animais diz algo sobre o caráter de uma pessoa?",
                                            "É preciso amar os animais para ser uma boa pessoa?",
                                            "O que pensa quando conhece alguém que tem medo de animais?",
                                            "É justo dizer isto?"
                                  ]
                        },
                        {
                                  "text": "Trabalhar a partir de casa torna as pessoas mais preguiçosas.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Trabalha ou estuda a partir de casa?",
                                            "É mais ou menos produtivo em casa?",
                                            "Quais são as maiores distrações em casa?",
                                            "Sente falta da estrutura de um escritório ou de uma sala de aula?",
                                            "Acha que o trabalho remoto é o futuro?"
                                  ]
                        },
                        {
                                  "text": "As primeiras impressões estão quase sempre erradas.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Julga as pessoas rapidamente?",
                                            "A sua primeira impressão de alguém já esteve completamente errada?",
                                            "O que nota primeiro numa pessoa?",
                                            "É justo julgar alguém por um primeiro encontro?",
                                            "Pode mudar a primeira impressão que alguém tem de si?"
                                  ]
                        },
                        {
                                  "text": "Filmes românticos dão às pessoas expectativas irrealistas.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Vê filmes românticos?",
                                            "Acha que eles afetam a forma como as pessoas pensam sobre relacionamentos?",
                                            "O amor verdadeiro é como nos filmes?",
                                            "O que é irrealista nos filmes românticos?",
                                            "As histórias de amor na sua cultura são diferentes?"
                                  ]
                        },
                        {
                                  "text": "Ser engraçado é mais útil do que ser inteligente.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Preferia ser engraçado ou inteligente?",
                                            "Consegue pensar numa situação em que o humor ajudou mais do que a inteligência?",
                                            "Pessoas engraçadas são mais populares?",
                                            "A inteligência e o humor podem coexistir?",
                                            "Que tipo de sentido de humor tem?"
                                  ]
                        },
                        {
                                  "text": "O silêncio à mesa não é constrangedor — é pacífico.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Fala muito durante as refeições?",
                                            "O silêncio é desconfortável para si?",
                                            "Come com o telemóvel?",
                                            "Acha que as refeições devem ser sociais?",
                                            "Do que costuma falar ao jantar?"
                                  ]
                        },
                        {
                                  "text": "É mais fácil pedir desculpa do que pedir permissão.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Pede permissão ou age primeiro?",
                                            "Consegue pensar numa altura em que isto funcionou bem?",
                                            "Esta é uma forma responsável de se comportar?",
                                            "Algumas pessoas são demasiado cautelosas?",
                                            "O que é que isto diz sobre a personalidade de alguém?"
                                  ]
                        },
                        {
                                  "text": "As pessoas leem demasiado as notícias e isso deixa-as ansiosas.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Com que frequência vê as notícias?",
                                            "As notícias afetam o seu humor?",
                                            "É importante manter-se informado?",
                                            "Como escolhe as notícias que segue?",
                                            "Já fez alguma pausa das notícias?"
                                  ]
                        },
                        {
                                  "text": "Nunca se conhece realmente alguém até viajar com essa pessoa.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Já viajou com um amigo ou parceiro?",
                                            "O que descobriu sobre eles?",
                                            "Que situações revelam o verdadeiro caráter de alguém?",
                                            "Acha que conhece bem os seus amigos?",
                                            "O que mais lhe mostra quem alguém realmente é?"
                                  ]
                        },
                        {
                                  "text": "A cultura do ginásio foi longe demais.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Vai ao ginásio?",
                                            "Qual a importância do fitness para si?",
                                            "Acha que as pessoas estão obcecadas com os seus corpos?",
                                            "Existe pressão para ter uma determinada aparência?",
                                            "O que é uma atitude saudável em relação ao exercício?"
                                  ]
                        },
                        {
                                  "text": "Um pouco de ciúme num relacionamento é saudável.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Acha que o ciúme é sempre negativo?",
                                            "Já sentiu ciúmes?",
                                            "Qual é a diferença entre ciúme e insegurança?",
                                            "Em que ponto o ciúme se torna um problema?",
                                            "O que é que o ciúme realmente diz sobre uma pessoa?"
                                  ]
                        },
                        {
                                  "text": "As redes sociais estão a destruir as nossas competências sociais?",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Como mudou o seu estilo de comunicação nos últimos 10 anos?",
                                            "Acha mais difícil falar com estranhos agora?",
                                            "A interação online é tão valiosa como a face a face?",
                                            "Quais competências sociais são mais afetadas pelo tempo de ecrã?",
                                            "Conseguiria passar um mês sem redes sociais?"
                                  ]
                        },
                        {
                                  "text": "O transporte público deveria ser gratuito?",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Quem pagaria pelo transporte público gratuito?",
                                            "Isso reduziria realmente o uso de carros?",
                                            "O transporte gratuito é um direito ou um luxo?",
                                            "Como mudaria a qualidade do serviço?",
                                            "Como é a situação na sua cidade?"
                                  ]
                        },
                        {
                                  "text": "A nostalgia é, na maior parte das vezes, apenas uma mentira que contamos a nós mesmos.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "De que sente mais nostalgia?",
                                            "Acha que o passado era realmente melhor?",
                                            "A nostalgia é reconfortante ou impede-o de avançar?",
                                            "A nostalgia pode ser perigosa — pessoal ou politicamente?",
                                            "O que significa o facto de editarmos as nossas memórias?"
                                  ]
                        },
                        {
                                  "text": "A maioria das pessoas não quer realmente um feedback honesto — querem reafirmação.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Quando pede feedback, o que quer realmente?",
                                            "Já recebeu algum feedback difícil de ouvir, mas valioso?",
                                            "É gentil dar a alguém um feedback honesto?",
                                            "Consegue pensar num contexto onde a reafirmação é realmente a coisa certa?",
                                            "Qual é a diferença entre gentileza e desonestidade?"
                                  ]
                        },
                        {
                                  "text": "É possível ser viciado em estar ocupado.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Preenche a sua agenda deliberadamente?",
                                            "Estar ocupado parece-lhe virtuoso?",
                                            "O que acontece quando não tem nada para fazer?",
                                            "O excesso de ocupação é um símbolo de status?",
                                            "Quando é que o descanso deixou de parecer aceitável?"
                                  ]
                        },
                        {
                                  "text": "A fama parece um castigo, não uma recompensa.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Gostaria de ser famoso?",
                                            "O que perderia se fosse famoso?",
                                            "Acha que a maioria das pessoas famosas é feliz?",
                                            "Fama é o mesmo que sucesso?",
                                            "Que tipo de reconhecimento gostaria realmente de ter?"
                                  ]
                        },
                        {
                                  "text": "O sistema escolar esmaga a criatividade mais do que a encoraja.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Acha que a sua educação encorajou a sua criatividade?",
                                            "Que disciplina ou momento na escola achou mais criativo?",
                                            "É possível ensinar criatividade?",
                                            "Como seria uma escola se a criatividade fosse a prioridade?",
                                            "É mais ou menos criativo do que era quando criança?"
                                  ]
                        },
                        {
                                  "text": "Não existe tal coisa como um comportamento verdadeiramente altruísta.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Consegue pensar num ato genuinamente altruísta?",
                                            "Fazer algo bom fá-lo sentir-se bem — e isso torna-o egoísta?",
                                            "Esta é uma visão cínica ou realista?",
                                            "A motivação por trás de uma ação importa se o resultado for positivo?",
                                            "Acreditar nisto muda a forma como se comporta?"
                                  ]
                        },
                        {
                                  "text": "A maioria dos adultos está apenas a improvisar.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Sente que sabe o que está a fazer?",
                                            "Quando é que esperava sentir-se como um adulto?",
                                            "Toda a gente sente que está a fingir?",
                                            "Isto é tranquilizador ou aterrador?",
                                            "Quem é alguém que parece ter tudo sob controlo — acha que realmente tem?"
                                  ]
                        },
                        {
                                  "text": "As pessoas mais interessantes são sempre um pouco difíceis.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Consegue pensar em alguém que seja simultaneamente fascinante e difícil?",
                                            "A dificuldade é um sinal de profundidade ou apenas... dificuldade?",
                                            "Preferia ter um amigo fácil e aborrecido ou um desafiante e interessante?",
                                            "O que torna alguém genuinamente interessante para si?",
                                            "Há algo de atraente em pessoas que não facilitam a vida?"
                                  ]
                        },
                        {
                                  "text": "Perdoamos às pessoas que amamos coisas que nunca perdoaríamos a estranhos.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Isto é justo ou é um duplo padrão?",
                                            "Consegue pensar num exemplo da sua própria vida?",
                                            "O que é que isto diz sobre a natureza do amor?",
                                            "Devemos exigir padrões mais altos ou mais baixos das pessoas que amamos?",
                                            "Há algo que nunca perdoaria, independentemente do relacionamento?"
                                  ]
                        },
                        {
                                  "text": "As zonas de conforto são sobrevalorizadas — o desconforto é onde o crescimento realmente acontece.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Consegue pensar numa altura em que o desconforto levou ao crescimento?",
                                            "É sempre necessário estar desconfortável para se desenvolver?",
                                            "Há uma diferença entre desconforto produtivo e apenas sofrimento?",
                                            "Procura ativamente o desconforto?",
                                            "O que é algo que está fora da sua zona de conforto neste momento?"
                                  ]
                        },
                        {
                                  "text": "A raiva é uma emoção subestimada — às vezes faz com que as coisas aconteçam.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Acha que expressa bem a raiva?",
                                            "Consegue pensar numa altura em que a raiva foi produtiva?",
                                            "Há uma diferença entre raiva saudável e raiva destrutiva?",
                                            "Algumas pessoas são demasiado rápidas a suprimir a sua raiva?",
                                            "O que faz quando está zangado?"
                                  ]
                        },
                        {
                                  "text": "Os animais de estimação substituíram a comunidade para muita gente.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Acha que a solidão está a aumentar?",
                                            "Que papel desempenha um animal de estimação na vida emocional de alguém?",
                                            "Isto é triste, ou apenas um tipo diferente de ligação?",
                                            "O que substituiu a comunidade tradicional na vida moderna?",
                                            "Sente-se parte de uma comunidade?"
                                  ]
                        },
                        {
                                  "text": "Viajar sozinho é a única forma de se descobrir verdadeiramente.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Já viajou sozinho?",
                                            "Consegue descobrir-se sem viajar?",
                                            "O que é que viajar sozinho o obriga a fazer?",
                                            "O que foi o máximo que aprendeu sobre si mesmo através de uma experiência?",
                                            "A autodescoberta é uma jornada ou um destino?"
                                  ]
                        },
                        {
                                  "text": "Um momento em que teve de recomeçar nunca é totalmente desperdiçado.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Já teve de recomeçar algo do zero?",
                                            "O que trouxe da primeira tentativa?",
                                            "Recomeçar é um fracasso ou uma escolha?",
                                            "O que é o mais difícil em começar de novo?",
                                            "Acha que os contratempos são necessários?"
                                  ]
                        },
                        {
                                  "text": "A obsessão pela produtividade é apenas o capitalismo disfarçado de autoajuda.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Monitoriza o seu tempo ou usa aplicações de produtividade?",
                                            "Sentir-se produtivo fá-lo sentir-se bem?",
                                            "De onde acha que vem a pressão para ser produtivo?",
                                            "O descanso faz genuinamente parte de uma vida produtiva ou é apenas uma ferramenta de recuperação?",
                                            "Consegue pensar em algo valioso que seja completamente improdutivo?"
                                  ]
                        },
                        {
                                  "text": "Engenharia genética: progresso ou perigo?",
                                  "level": "advanced",
                                  "hints": [
                                            "Quais são os benefícios potenciais para a medicina?",
                                            "Poderia levar à desigualdade social?",
                                            "É ético 'projetar' seres humanos?",
                                            "Quem deve regular esta tecnologia?",
                                            "Arriscamos mudanças permanentes no patrimônio genético?"
                                  ]
                        },
                        {
                                  "text": "O rendimento básico universal é a única solução para a automação generalizada.",
                                  "level": "advanced",
                                  "hints": [
                                            "Como seria financiado o RBU?",
                                            "Isso desencorajaria as pessoas de trabalhar?",
                                            "Poderia reduzir a pobreza e a desigualdade?",
                                            "Quais são as alternativas ao RBU?",
                                            "A automação é realmente uma ameaça para todos os empregos?"
                                  ]
                        },
                        {
                                  "text": "A felicidade é uma escolha — as circunstâncias são apenas desculpas.",
                                  "level": "advanced",
                                  "hints": [
                                            "Você acha que a felicidade está sob o controle de todos?",
                                            "Esta é uma visão privilegiada?",
                                            "Você pode escolher como responder a más circunstâncias?",
                                            "Você conhece pessoas que são felizes apesar de vidas difíceis?",
                                            "A busca pela felicidade em si é parte do problema?"
                                  ]
                        },
                        {
                                  "text": "As pessoas que dizem odiar dramas são geralmente a fonte deles.",
                                  "level": "advanced",
                                  "hints": [
                                            "Você conhece alguém assim?",
                                            "Por que as pessoas que criam conflitos não se reconhecem neles?",
                                            "O drama é sempre mau?",
                                            "Qual é a diferença entre conflito e drama?",
                                            "A autoconsciência é rara?"
                                  ]
                        },
                        {
                                  "text": "O tédio é um sinal de falta de imaginação, não de falta de estimulação.",
                                  "level": "advanced",
                                  "hints": [
                                            "Quando foi a última vez que você se sentiu genuinamente entediado?",
                                            "Você acha que perdemos a capacidade de ficar entediados?",
                                            "O que acontece na sua mente quando você está entediado?",
                                            "O tédio é desconfortável porque tememos o que podemos pensar?",
                                            "O que o tédio já levou você a criar ou descobrir?"
                                  ]
                        },
                        {
                                  "text": "Empatia sem limites é apenas condescendência com boas relações públicas.",
                                  "level": "advanced",
                                  "hints": [
                                            "Você se considera uma pessoa empática?",
                                            "A empatia pode ser interpretada em vez de sentida?",
                                            "É possível ter empatia em excesso?",
                                            "Qual é a diferença entre empatia e perder-se na experiência de outra pessoa?",
                                            "Você já teve que se proteger de sentir demais?"
                                  ]
                        },
                        {
                                  "text": "As opiniões mais perigosas são aquelas que parecem completamente razoáveis.",
                                  "level": "advanced",
                                  "hints": [
                                            "Consegue pensar num exemplo de uma ideia perigosa que pareça razoável?",
                                            "Como você avalia um argumento que parece correto, mas pode não ser?",
                                            "É mais difícil desafiar uma opinião errada educada e bem fundamentada ou uma obviamente extrema?",
                                            "Qual é o seu teste pessoal para saber se uma ideia é digna de confiança?",
                                            "Uma ideia aparentemente razoável já o levou a algum lugar que não esperava?"
                                  ]
                        },
                        {
                                  "text": "A autenticidade tornou-se a performance mais cuidadosamente curada de todas.",
                                  "level": "advanced",
                                  "hints": [
                                            "O que significa ser autêntico para você?",
                                            "Você se apresenta de forma diferente online e offline?",
                                            "A autenticidade total é sequer possível?",
                                            "Pode-se ser autêntico e estratégico ao mesmo tempo?",
                                            "Quando você se sente mais você mesmo?"
                                  ]
                        },
                        {
                                  "text": "O perdão é, em última análise, algo que você faz por si mesmo, não pela outra pessoa.",
                                  "level": "advanced",
                                  "hints": [
                                            "Você já perdoou alguém que não merecia, para o seu próprio bem?",
                                            "Qual é a diferença entre perdoar e esquecer?",
                                            "O perdão é sempre possível?",
                                            "Perdoar alguém significa que você aceita o que a pessoa fez?",
                                            "Há algo que você acha difícil perdoar?"
                                  ]
                        },
                        {
                                  "text": "As instituições acabam sempre por proteger-se mais a si mesmas do que às pessoas que servem.",
                                  "level": "advanced",
                                  "hints": [
                                            "Consegue pensar numa instituição que falhou com as pessoas que deveria servir?",
                                            "Isso é inevitável ou as instituições podem ser reformadas?",
                                            "As instituições atraem pessoas que querem protegê-las?",
                                            "Como seria uma instituição genuinamente responsável?",
                                            "É ingênuo esperar que as instituições se autocorrijam?"
                                  ]
                        },
                        {
                                  "text": "O desejo de certeza é a raiz da maior parte da crueldade humana.",
                                  "level": "advanced",
                                  "hints": [
                                            "Você acha que a incerteza é difícil de tolerar?",
                                            "Consegue pensar num caso em que a necessidade de certeza levou a danos?",
                                            "A dúvida é uma força ou uma fraqueza?",
                                            "Pessoas com convicções fortes tornam o mundo melhor ou pior?",
                                            "Como você gere a sua própria necessidade de certeza?"
                                  ]
                        },
                        {
                                  "text": "Os valores da maioria das pessoas só se mantêm quando não custa nada tê-los.",
                                  "level": "advanced",
                                  "hints": [
                                            "Seus valores já foram testados por um custo real?",
                                            "Consegue pensar num momento em que agiu contra os seus valores declarados?",
                                            "É justo julgar as pessoas por falharem os seus valores sob pressão?",
                                            "A lacuna entre valores e comportamento é um sinal de hipocrisia ou apenas de humanidade?",
                                            "Qual é um valor que você acha que não comprometeria?"
                                  ]
                        },
                        {
                                  "text": "Saber quando parar de falar é mais raro e valioso do que saber o que dizer.",
                                  "level": "advanced",
                                  "hints": [
                                            "Você acha que ouve bem?",
                                            "Consegue pensar numa situação em que o silênio foi a resposta certa?",
                                            "Ser um bom orador é superestimado?",
                                            "O que você nota em pessoas que ouvem mais do que falam?",
                                            "Ficar quieto já foi a coisa mais poderosa que você pôde fazer?"
                                  ]
                        },
                        {
                                  "text": "Somos mais definidos pelo que nos recusamos a fazer do que pelo que escolhemos fazer.",
                                  "level": "advanced",
                                  "hints": [
                                            "O que é algo que você não faria, independentemente da recompensa?",
                                            "Dizer não a algo define você?",
                                            "Seus limites refletem seus valores?",
                                            "O que evitamos é tão revelador quanto o que buscamos?",
                                            "Uma recusa já lhe custou algo significativo?"
                                  ]
                        },
                        {
                                  "text": "A obsessão pela produtividade é apenas capitalismo disfarçado de autoajuda.",
                                  "level": "advanced",
                                  "hints": [
                                            "De onde você acha que vem a pressão para otimizar seu tempo?",
                                            "O descanso é genuinamente parte de uma vida produtiva ou apenas uma ferramenta de recuperação?",
                                            "Você se julga pelo quanto consegue fazer?",
                                            "Consegue pensar em algo profundamente valioso que seja completamente improdutivo?",
                                            "Existe uma versão de ambição que não seja sobre resultados?"
                                  ]
                        },
                        {
                                  "text": "A cultura do cancelamento tornou-se uma forma de justiça digital de multidão.",
                                  "level": "advanced",
                                  "hints": [
                                            "Consegue pensar num caso em que o clamor público foi justificado?",
                                            "Existe diferença entre responsabilidade e punição?",
                                            "Quem decide o que é imperdoável?",
                                            "O cancelamento funciona — ele realmente muda o comportamento?",
                                            "Há algo irremediavelmente problemático nisso ou é apenas imperfeito?"
                                  ]
                        },
                        {
                                  "text": "Pessoas que afirmam não ter arrependimentos ou não viveram o suficiente ou não refletiram o suficiente.",
                                  "level": "advanced",
                                  "hints": [
                                            "Você tem arrependimentos?",
                                            "O 'sem arrependimentos' é uma filosofia saudável ou um mecanismo de defesa?",
                                            "O que significaria viver sem arrependimento?",
                                            "O arrependimento pode ser útil?",
                                            "H�� algo que você voltaria atrás e mudaria se pudesse?"
                                  ]
                        },
                        {
                                  "text": "O eu não é algo que descobrimos — é algo que inventamos continuamente.",
                                  "level": "advanced",
                                  "hints": [
                                            "Esta ideia parece-lhe libertadora ou desestabilizadora?",
                                            "O que significariam as suas escolhas se a identidade fosse construída?",
                                            "Existe algo que sinta como um 'eu' fixo e essencial?",
                                            "O eu que apresenta aos outros molda o eu em que se torna?",
                                            "O que acontece à identidade numa experiência de perda radical?"
                                  ]
                        },
                        {
                                  "text": "A compaixão que exige que uma história seja contada de forma simples não é compaixão real — é sentimentalismo.",
                                  "level": "advanced",
                                  "hints": [
                                            "Diferença entre compaixão genuína e reação emocional?",
                                            "Caso onde uma história simplificada distorceu a realidade?",
                                            "O sentimentalismo faz-nos sentir ativos quando não o somos?",
                                            "A simplificação é necessária para a empatia?",
                                            "Custo de reduzir o sofrimento a uma narrativa digerível?"
                                  ]
                        },
                        {
                                  "text": "Toda a ideologia, levada à sua conclusão lógica, torna-se uma forma de violência.",
                                  "level": "advanced",
                                  "hints": [
                                            "Existe uma ideologia que escape a esta lógica?",
                                            "Razão para rejeitar a ideologia ou levá-la com leveza?",
                                            "Diferença entre posição de princípios e ideologia?",
                                            "O pragmatismo evita esta armadilha ou esconde-a?",
                                            "Todas as posições políticas são igualmente perigosas?"
                                  ]
                        },
                        {
                                  "text": "A linguagem não descreve a realidade — ela constrói-a.",
                                  "level": "advanced",
                                  "hints": [
                                            "Aprender outra língua deu-lhe acesso a novos pensamentos?",
                                            "Sente coisas que nenhuma língua consegue nomear?",
                                            "A língua em que pensa afeta as suas emoções?",
                                            "É possível um conceito sem uma palavra?",
                                            "Pode uma ideia ser plenamente traduzida?"
                                  ]
                        },
                        {
                                  "text": "A coisa mais subversiva que uma pessoa pode fazer no mundo moderno é estar sinceramente satisfeita.",
                                  "level": "advanced",
                                  "hints": [
                                            "O contentamento é político?",
                                            "A economia exige consumidores insatisfeitos?",
                                            "O contentamento genuíno é possível?",
                                            "Diferença entre contentamento e resignação?",
                                            "Estar satisfeito significa deixar de se preocupar com a injustiça?"
                                  ]
                        },
                        {
                                  "text": "A exigência de equilíbrio no discurso público dá frequentemente falsa legitimidade a posições que não a merecem.",
                                  "level": "advanced",
                                  "hints": [
                                            "'Apresentar os dois lados' é sempre justo?",
                                            "Quem decide que posições merecem uma tribuna?",
                                            "Diferença entre equilíbrio e falsa equivalência?",
                                            "A neutralidade jornalística pode coexistir com a verdade?",
                                            "Custo de dar palco em nome da equidade?"
                                  ]
                        },
                        {
                                  "text": "A honestidade radical, praticada sem sabedoria, é apenas crueldade com boas intenções.",
                                  "level": "advanced",
                                  "hints": [
                                            "O impulso de 'dizer as coisas como são' é pelo outro ou pelo seu alívio?",
                                            "Momento em que a honestidade radical causou dano?",
                                            "A gentileza é por vezes a escolha mais corajosa?",
                                            "Linha entre honestidade e cruelade?",
                                            "A exigência de honestidade reflete intimidade ou controlo?"
                                  ]
                        },
                        {
                                  "text": "O livre-arbítrio é uma ficção indispensável e não uma realidade significativa.",
                                  "level": "advanced",
                                  "hints": [
                                            "Importa se é real se temos de agir como se fosse?",
                                            "Responsabilidade moral sem livre-arbítrio?",
                                            "As neurociências resolvem a questão?",
                                            "A crença no livre-arbítrio é determinista?",
                                            "O que diz a sua intuição?"
                                  ]
                        },
                        {
                                  "text": "A internet não nos tornou mais informados — tornou-nos mais seguros dos nossos erros.",
                                  "level": "advanced",
                                  "hints": [
                                            "Crença moldada por algoritmos?",
                                            "Problema da internet ou da natureza humana?",
                                            "Práticas de proteção?",
                                            "A experiência ainda faz sentido?",
                                            "Confiança na sua capacidade de avaliar a info?"
                                  ]
                        },
                        {
                                  "text": "A arte que conforta é menos valiosa do que a arte que perturba.",
                                  "level": "advanced",
                                  "hints": [
                                            "Arte que fez ambos simultaneamente?",
                                            "Hierarquia de valores ou esnobismo?",
                                            "A que recorre na dor — dificuldade ou consolação?",
                                            "A arte perturbadora muda o comportamento?",
                                            "Propósito da arte: desafio, reflexo ou transcendência?"
                                  ]
                        },
                        {
                                  "text": "O progresso moral é real, mas a ideia de que a história se move numa direção é um mito.",
                                  "level": "advanced",
                                  "hints": [
                                            "Exemplo de progresso moral autêntico?",
                                            "Algo em que tenhamos regredido?",
                                            "O progresso é um mito cultural?",
                                            "A moda moral é confundida com progresso?",
                                            "Prova de que somos melhores que os nossos antepassados?"
                                  ]
                        },
                        {
                                  "text": "A busca da certeza é a raiz da maioria das crueldades humanas.",
                                  "level": "advanced",
                                  "hints": [
                                            "Exemplo onde a necessidade de certeza causou dano?",
                                            "A dúvida é uma virtude moral?",
                                            "As convicções inabaláveis melhoram o mundo?",
                                            "Certeza não perigosa?",
                                            "Ter crenças fortes sem rigidez?"
                                  ]
                        },
                        {
                                  "text": "A memória não é um registo do que aconteceu — é uma história que continuamos a reescrever.",
                                  "level": "advanced",
                                  "hints": [
                                            "Recordação contradita por uma testemunha?",
                                            "Editamos as memórias pela nossa imagem?",
                                            "Consequência para a identidade?",
                                            "Recordação reescrita mais real que o evento?",
                                            "Fiabilidade da sua memória mais vívida?"
                                  ]
                        },
                        {
                                  "text": "Não há consumo ético sob o capitalismo tardio — e isso é uma razão para agir, não para desistir.",
                                  "level": "advanced",
                                  "hints": [
                                            "As escolhas individuais contam?",
                                            "A responsabilidade pessoal é uma manobra política?",
                                            "Mudança sistémica vs. ação individual?",
                                            "Viver eticamente num sistema não ético?",
                                            "A consciência muda o seu comportamento?"
                                  ]
                        },
                        {
                                  "text": "A vida examinada vale a pena — mas examiná-la demasiado de perto pode torná-la invivível.",
                                  "level": "advanced",
                                  "hints": [
                                            "Quanta autorreflexão é excessiva?",
                                            "A introspeção como evitação?",
                                            "Custo do exame contínuo?",
                                            "Viver bem sem autoexame?",
                                            "Custo e ganho da sua reflexão?"
                                  ]
                        },
                        {
                                  "text": "A ética da colonização de outros planetas.",
                                  "level": "advanced",
                                  "hints": [
                                            "Direito sobre outros mundos sem resolver os nossos?",
                                            "Exportar os sistemas humanos?",
                                            "Obrigações para com vida extraterrestre?",
                                            "Perigo do 'Plano B'?",
                                            "Propriedade dos recursos planetários?"
                                  ]
                        },
                        {
                                  "text": "O livre-arbítrio existe realmente ou é uma ilusão?",
                                  "level": "advanced",
                                  "hints": [
                                            "Responsabilidade em atos determinados?",
                                            "Sensação de escolha como prova?",
                                            "Um computador a prever as suas decisões?",
                                            "Diferença entre 'liberdade de' e 'liberdade para'?",
                                            "A alma muda a equação?"
                                  ]
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
                                  "Comboio",
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
                                  "word": "Saudade",
                                  "level": "easy",
                                  "options": [
                                            "Latim",
                                            "Grego",
                                            "Árabe",
                                            "Francês"
                                  ],
                                  "answer": "Latim",
                                  "detail": "Evoluiu no português a partir do latim solitudo para expressar o sentimento profundo de nostalgia e presença da ausência.",
                                  "path": "Latim (solitudo) → Português Saudade"
                        },
                        {
                                  "word": "Obrigado",
                                  "level": "easy",
                                  "options": [
                                            "Latim",
                                            "Grego",
                                            "Árabe",
                                            "Espanhol"
                                  ],
                                  "answer": "Latim",
                                  "detail": "Do latim obligatus (atado por dever), expressando a ideia moral de ficar ligado em gratidão a quem ajudou.",
                                  "path": "Latim (obligatus) → Português Obrigado"
                        },
                        {
                                  "word": "Galáxia",
                                  "level": "easy",
                                  "options": [
                                            "Grego",
                                            "Latim",
                                            "Árabe",
                                            "Francês"
                                  ],
                                  "answer": "Grego",
                                  "detail": "Deriva do mito grego sobre as gotas de leite derramadas pela deusa Hera no céu.",
                                  "path": "Grego (gala) → Português Galáxia"
                        },
                        {
                                  "word": "Candidato",
                                  "level": "easy",
                                  "options": [
                                            "Latim",
                                            "Grego",
                                            "Árabe",
                                            "Francês"
                                  ],
                                  "answer": "Latim",
                                  "detail": "Na Roma Antiga, os postulantes a cargos vestiam uma toga perfeitamente branca (candidus).",
                                  "path": "Latim (candidus) → Português Candidato"
                        },
                        {
                                  "word": "Nostalgia",
                                  "level": "easy",
                                  "options": [
                                            "Grego",
                                            "Latim",
                                            "Árabe",
                                            "Francês"
                                  ],
                                  "answer": "Grego",
                                  "detail": "Criado no século XVII unindo as raízes gregas nostos (regresso a casa) e algos (dor).",
                                  "path": "Grego (nostos + algos) → Português Nostalgia"
                        },
                        {
                                  "word": "Cafuné",
                                  "level": "easy",
                                  "options": [
                                            "Quimbundo",
                                            "Tupi",
                                            "Latim",
                                            "Árabe"
                                  ],
                                  "answer": "Quimbundo",
                                  "detail": "Do quimbundo kifune (esfregar a cabeça), gesto de carinho de passar os dedos pelos cabelos.",
                                  "path": "Quimbundo (kifune) → Português Cafuné"
                        },
                        {
                                  "word": "Samba",
                                  "level": "easy",
                                  "options": [
                                            "Quimbundo",
                                            "Tupi",
                                            "Espanhol",
                                            "Árabe"
                                  ],
                                  "answer": "Quimbundo",
                                  "detail": "Origem nas línguas bantu da África Central, ligado a semba (umbigada na dança ritual).",
                                  "path": "Quimbundo (semba) → Português Samba"
                        },
                        {
                                  "word": "Moleque",
                                  "level": "easy",
                                  "options": [
                                            "Quimbundo",
                                            "Tupi",
                                            "Latim",
                                            "Árabe"
                                  ],
                                  "answer": "Quimbundo",
                                  "detail": "Do quimbundo mu'leke (garoto ou menino jovem), integrado ao vocabulário coloquial.",
                                  "path": "Quimbundo (mu'leke) → Português Moleque"
                        },
                        {
                                  "word": "Caçula",
                                  "level": "medium",
                                  "options": [
                                            "Quimbundo",
                                            "Tupi",
                                            "Latim",
                                            "Francês"
                                  ],
                                  "answer": "Quimbundo",
                                  "detail": "Do quimbundo kazule (o filho mais novo ou último nascido na família).",
                                  "path": "Quimbundo (kazule) → Português Caçula"
                        },
                        {
                                  "word": "Dengo",
                                  "level": "medium",
                                  "options": [
                                            "Quimbundo",
                                            "Tupi",
                                            "Latim",
                                            "Espanhol"
                                  ],
                                  "answer": "Quimbundo",
                                  "detail": "Do quimbundo ndengu (doçura ou pedido de mimo no convívio familiar).",
                                  "path": "Quimbundo (ndengu) → Português Dengo"
                        },
                        {
                                  "word": "Abacaxi",
                                  "level": "easy",
                                  "options": [
                                            "Tupi-Guarani",
                                            "Quimbundo",
                                            "Latim",
                                            "Árabe"
                                  ],
                                  "answer": "Tupi-Guarani",
                                  "detail": "Do tupi ibaguati (fruta cheirosa e saborosa), nome nativo dado ao ananás nas terras tropicais.",
                                  "path": "Tupi-Guarani (ibaguati) → Português Abacaxi"
                        },
                        {
                                  "word": "Pipoca",
                                  "level": "easy",
                                  "options": [
                                            "Tupi-Guarani",
                                            "Quimbundo",
                                            "Latim",
                                            "Espanhol"
                                  ],
                                  "answer": "Tupi-Guarani",
                                  "detail": "Do tupi pira-poka (pele arrebentada), descrevendo o grão de milho ao estourar no calor.",
                                  "path": "Tupi-Guarani (pira-poka) → Português Pipoca"
                        },
                        {
                                  "word": "Tatu",
                                  "level": "easy",
                                  "options": [
                                            "Tupi-Guarani",
                                            "Quimbundo",
                                            "Latim",
                                            "Holandês"
                                  ],
                                  "answer": "Tupi-Guarani",
                                  "detail": "Do tupi ta-tu (casca cascuda), mamífero blindado nativo da fauna sul-americana.",
                                  "path": "Tupi-Guarani (ta-tu) → Português Tatu"
                        },
                        {
                                  "word": "Mandioca",
                                  "level": "medium",
                                  "options": [
                                            "Tupi-Guarani",
                                            "Quimbundo",
                                            "Latim",
                                            "Espanhol"
                                  ],
                                  "answer": "Tupi-Guarani",
                                  "detail": "Da lenda tupi de Mani-oka (casa de Mani), raiz tuberosa fundamental na alimentação indígena.",
                                  "path": "Tupi-Guarani (Mani-oka) → Português Mandioca"
                        },
                        {
                                  "word": "Piranha",
                                  "level": "medium",
                                  "options": [
                                            "Tupi-Guarani",
                                            "Quimbundo",
                                            "Latim",
                                            "Espanhol"
                                  ],
                                  "answer": "Tupi-Guarani",
                                  "detail": "Do tupi pira-anha (peixe dente ou tesoura), peixe carnívoro das bacias hidrográficas amazónicas.",
                                  "path": "Tupi-Guarani (pira-anha) → Português Piranha"
                        },
                        {
                                  "word": "Azeite",
                                  "level": "easy",
                                  "options": [
                                            "Árabe",
                                            "Latim",
                                            "Grego",
                                            "Hebreu"
                                  ],
                                  "answer": "Árabe",
                                  "detail": "Do árabe hispânico az-zayt (óleo de azeitona), herdado do período de Al-Andalus na Península Ibérica.",
                                  "path": "Árabe (az-zayt) → Português Azeite"
                        },
                        {
                                  "word": "Açúcar",
                                  "level": "easy",
                                  "options": [
                                            "Árabe",
                                            "Sânscrito",
                                            "Latim",
                                            "Persa"
                                  ],
                                  "answer": "Árabe",
                                  "detail": "Transmitido do árabe as-sukkar via comércio ibérico, originário da palavra sândcrita śarkarā.",
                                  "path": "Sânscrito (śarkarā) → Árabe (as-sukkar) → Português Açúcar"
                        },
                        {
                                  "word": "Oxalá",
                                  "level": "easy",
                                  "options": [
                                            "Árabe",
                                            "Latim",
                                            "Quimbundo",
                                            "Espanhol"
                                  ],
                                  "answer": "Árabe",
                                  "detail": "Da expressão árabe law shā' Allāh (se Deus quiser), expressando desejo fervoroso.",
                                  "path": "Árabe (law shā' Allāh) → Português Oxalá"
                        },
                        {
                                  "word": "Algarismo",
                                  "level": "medium",
                                  "options": [
                                            "Árabe",
                                            "Latim",
                                            "Grego",
                                            "Sânscrito"
                                  ],
                                  "answer": "Árabe",
                                  "detail": "Homenagem ao matemático persa-árabe Al-Khwarizmi, introdutor dos numerais arábicos na Europa.",
                                  "path": "Árabe (Al-Khwarizmi) → Português Algarismo"
                        },
                        {
                                  "word": "Almoxarife",
                                  "level": "hard",
                                  "options": [
                                            "Árabe",
                                            "Latim",
                                            "Holandês",
                                            "Francês"
                                  ],
                                  "answer": "Árabe",
                                  "detail": "Do árabe al-mushrif (o inspetor ou tesoureiro), antigo funcionário encarregado dos suprimentos.",
                                  "path": "Árabe (al-mushrif) → Português Almoxarife"
                        },
                        {
                                  "word": "Iate",
                                  "level": "medium",
                                  "options": [
                                            "Holandês",
                                            "Inglês",
                                            "Alemão",
                                            "Latim"
                                  ],
                                  "answer": "Holandês",
                                  "detail": "Do holandês jacht (caça/perseguição), embarcação rápida introduzida nos mares europeus.",
                                  "path": "Holandês (jacht) → Inglês → Português Iate"
                        },
                        {
                                  "word": "Futebol",
                                  "level": "easy",
                                  "options": [
                                            "Inglês",
                                            "Francês",
                                            "Alemão",
                                            "Espanhol"
                                  ],
                                  "answer": "Inglês",
                                  "detail": "Adaptação fonética direta do inglês football (pés e bola) introduzido no século XIX.",
                                  "path": "Inglês (football) → Português Futebol"
                        },
                        {
                                  "word": "Cheque",
                                  "level": "medium",
                                  "options": [
                                            "Inglês",
                                            "Árabe",
                                            "Francês",
                                            "Latim"
                                  ],
                                  "answer": "Inglês",
                                  "detail": "Do inglês check (verificar ou conferir), derivado da ordem de pagamento bancária.",
                                  "path": "Inglês (check) → Português Cheque"
                        },
                        {
                                  "word": "Líder",
                                  "level": "medium",
                                  "options": [
                                            "Inglês",
                                            "Alemão",
                                            "Francês",
                                            "Latim"
                                  ],
                                  "answer": "Inglês",
                                  "detail": "Do inglês leader (aquele que guia), incorporado na linguagem política e de gestão.",
                                  "path": "Inglês (leader) → Português Líder"
                        },
                        {
                                  "word": "Filosofia",
                                  "level": "easy",
                                  "options": [
                                            "Grego",
                                            "Latim",
                                            "Árabe",
                                            "Francês"
                                  ],
                                  "answer": "Grego",
                                  "detail": "Formado pelas raízes gregas philos (amor) e sophia (sabedoria).",
                                  "path": "Grego (philos + sophia) → Português Filosofia"
                        },
                        {
                                  "word": "Biblioteca",
                                  "level": "easy",
                                  "options": [
                                            "Grego",
                                            "Latim",
                                            "Francês",
                                            "Alemão"
                                  ],
                                  "answer": "Grego",
                                  "detail": "Do grego biblion (livro) e theke (caixa ou repositório).",
                                  "path": "Grego (biblion + theke) → Português Biblioteca"
                        },
                        {
                                  "word": "Restaurante",
                                  "level": "medium",
                                  "options": [
                                            "Francês",
                                            "Latim",
                                            "Espanhol",
                                            "Inglês"
                                  ],
                                  "answer": "Francês",
                                  "detail": "Do francês restaurant, alusivo ao caldo nutritivo servido nos estabelecimentos de Paris no século XVIII.",
                                  "path": "Francês (restaurant) → Português Restaurante"
                        },
                        {
                                  "word": "Balcão",
                                  "level": "hard",
                                  "options": [
                                            "Lombardo/Germanico",
                                            "Latim",
                                            "Francês",
                                            "Árabe"
                                  ],
                                  "answer": "Lombardo/Germanico",
                                  "detail": "Da raiz germanica balcho (viga de madeira) através do italiano medieval balcone.",
                                  "path": "Germanico (balcho) → Italiano → Português Balcão"
                        },
                        {
                                  "word": "Guerra",
                                  "level": "hard",
                                  "options": [
                                            "Germanico",
                                            "Latim",
                                            "Árabe",
                                            "Celta"
                                  ],
                                  "answer": "Germanico",
                                  "detail": "Substituiu o latim bellum durante as invasões visigóticas a partir da raiz werra (conflito).",
                                  "path": "Germanico (werra) → Português Guerra"
                        },
                        {
                                  "word": "Jardim",
                                  "level": "hard",
                                  "options": [
                                            "Francês",
                                            "Germanico",
                                            "Latim",
                                            "Árabe"
                                  ],
                                  "answer": "Francês",
                                  "detail": "Do francês antigo jardin, derivado da raiz franca gardo (terreno cercado).",
                                  "path": "Franco (gardo) → Francês (jardin) → Português Jardim"
                        }
              ],
              "storychain": [
                        {
                                  "prompt": "Numa terça-feira chuvosa, o Marcos encontrou uma chave antiga no bolso…",
                                  "level": "starter"
                        },
                        {
                                  "prompt": "O comboio parou numa estação que não figurava em nenhum mapa…",
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
    window.gameData['pt'] = data;
})();
