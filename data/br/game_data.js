(function() {
    const data = {
      fluency: [
        { text: 'Sua rotina matinal ☕', level: 'starter' },
        { text: 'Uma memória de infância 🧸', level: 'starter' },
        { text: 'Sua estação favorita e por quê 🍂', level: 'starter' },
        { text: 'Seu animal de estimação favorito 🐶', level: 'starter' },
        { text: 'Um dia chuvoso ideal 🌧️', level: 'starter' },
        { text: 'Uma habilidade que você gostaria de ter 🎸', level: 'elementary' },
        { text: 'A melhor refeição que você já comeu 🍜', level: 'elementary' },
        { text: 'Um lugar que você quer visitar 🗺️', level: 'elementary' },
        { text: 'Uma história engraçada da sua vida 🚴', level: 'elementary' },
        { text: 'Sua festa ou tradição favorita 🎄', level: 'elementary' },
        { text: 'Seu destino de férias ideal 🌴', level: 'intermediate' },
        { text: 'A pessoa mais interessante que você conhece 🙋', level: 'intermediate' },
        { text: 'Descreva seu fim de semana perfeito ☀️', level: 'intermediate' },
        { text: 'A última vez que você tentou algo novo 🎯', level: 'intermediate' },
        { text: 'Um novo hobby que você gostaria de começar 🎨', level: 'intermediate' },
        { text: 'Como a tecnologia muda a sua vida diária 📱', level: 'intermediate' },
        { text: 'O que você faria com 1 milhão de reais? 💰', level: 'upper_intermediate' },
        { text: 'Um livro ou filme que mudou sua visão 📚', level: 'upper_intermediate' },
        { text: 'Se você pudesse viver em qualquer lugar do mundo… 🌍', level: 'upper_intermediate' },
        { text: 'Algo de que você se orgulha 🏆', level: 'upper_intermediate' },
        { text: 'Uma lição de vida inesperada 💡', level: 'upper_intermediate' },
        { text: 'O que significa felicidade para você? 😊', level: 'advanced' },
        { text: 'A influência da cultura nas nossas escolhas 🏛️', level: 'advanced' },
        { text: 'O equilíbrio entre ambição e serenidade ⚖️', level: 'advanced' }
      ],
      opinions: [
        { text: 'As redes sociais fazem mais mal do que bem.', level: 'intermediate' },
        { text: 'Todos deveriam aprender pelo menos dois idiomas.', level: 'intermediate' },
        { text: 'Trabalhar em casa é melhor do que no escritório.', level: 'intermediate' },
        { text: 'Dinheiro não compra felicidade.', level: 'intermediate' },
        { text: 'A semana de trabalho de 4 dias aumenta a produtividade.', level: 'upper_intermediate' },
        { text: 'O transporte público deveria ser gratuito para todos.', level: 'upper_intermediate' },
        { text: 'A renda básica universal é necessária para as economias do futuro.', level: 'upper_intermediate' },
        { text: 'A IA generativa nunca poderá substituir a verdadeira criatividade artística humana.', level: 'advanced' },
        { text: 'A privacidade total é impossível na era digital atual.', level: 'advanced' }
      ],
      battle: [
        ['Montanhas 🏔️', 'Praia 🏖️'],
        ['Café ☕', 'Chá 🍵'],
        ['Madrugador 🌅', 'Noturno 🦉'],
        ['Vida na cidade 🏙️', 'Vida no campo 🌾'],
        ['Ler 📚', 'Assistir filmes 🎬'],
        ['Verão ☀️', 'Inverno ❄️'],
        ['Gatos 🐱', 'Cães 🐶'],
        ['Trabalho em casa 🏠', 'Trabalho no escritório 🏢'],
        ['Doce 🍰', 'Salgado 🧀'],
        ['Viajar sozinho ✈️', 'Viajar com amigos 👥']
      ],
      critic: [
        { title: 'Delicioso, mas muito caro 🍝', type: 'Restaurante', review: 'A comida estava incrível e os ingredientes frescos, mas as porções eram pequenas e a conta foi uma surpresa.', question: 'Você voltaria apesar do preço elevado?' },
        { title: 'Enredo envolvente, final fraco 🎬', type: 'Filme', review: 'Os dois primeiros terços do filme foram cheios de suspense, mas o desfecho foi apressado e ilógico.', question: 'O quanto o final afeta a sua avaliação geral?' },
        { title: 'Gráficos incríveis, mas com falhas 🎮', type: 'Jogo', review: 'O jogo é visualmente espetacular, mas trava com frequência e tem falhas técnicas.', question: 'A atmosfera e os gráficos podem compensar os problemas técnicos?' }
      ],
      action: {
        starter: ['Gato', 'Cão', 'Casa', 'Carro', 'Livro', 'Água', 'Sol', 'Lua', 'Árvore', 'Telefone', 'Porta', 'Cadeira', 'Cama', 'Pão', 'Peixe'],
        elementary: ['Cozinha', 'Jardim', 'Trem', 'Médico', 'Professor', 'Música', 'Aniversário', 'Natação', 'Férias', 'Loja', 'Estação', 'Hospital'],
        intermediate: ['Museu', 'Entrevista', 'Arquiteto', 'Jornalista', 'Parlamento', 'Orquestra', 'Maratona', 'Exposição', 'Laboratório', 'Telescópio'],
        upper_intermediate: ['Filantropia', 'Embaixador', 'Hipótese', 'Empreendedor', 'Arqueologia', 'Biodiversidade', 'Infraestrutura'],
        advanced: ['Paradigma', 'Juxtaposição', 'Anacronismo', 'Verossimilhança', 'Resiliência', 'Matiz', 'Perspicácia'],
        proficiency: ['Ubiquidade', 'Efêmero', 'Perspicaz', 'Equanimidade', 'Vicisitude', 'Inefável']
      },
      identity: [
        { person: 'Um bombeiro', clue: 'Usa capacete e apaga fogos com água.', level: 'elementary' },
        { person: 'Um chef', clue: 'Trabalha numa cozinha e prepara pratos deliciosos.', level: 'elementary' },
        { person: 'Um bibliotecário', clue: 'Gere uma biblioteca e ajuda as pessoas a encontrar livros.', level: 'elementary' },
        { person: 'Um veterinário', clue: 'Cuida de animais doentes ou feridos.', level: 'elementary' },
        { person: 'Um astronauta', clue: 'Viaja no espaço além da Terra.', level: 'intermediate' },
        { person: 'Um detetive', clue: 'Investiga mistérios e procura pistas.', level: 'intermediate' },
        { person: 'Um jornalista', clue: 'Informa o público e escreve artigos de notícias.', level: 'intermediate' },
        { person: 'Um fotógrafo', clue: 'Capta memórias e imagens com uma câmara.', level: 'intermediate' },
        { person: 'Um arquiteto', clue: 'Projeta casas e edifícios antes da sua construção.', level: 'upper_intermediate' },
        { person: 'Um cirurgião', clue: 'Realiza operações médicas no hospital.', level: 'upper_intermediate' },
        { person: 'Um engenheiro de software', clue: 'Escreve código para criar aplicações de software.', level: 'upper_intermediate' },
        { person: 'Um diplomata', clue: 'Representa o seu país em relações internacionais oficiais.', level: 'advanced' },
        { person: 'Um biólogo marinho', clue: 'Estuda a fauna e flora dos oceanos.', level: 'advanced' },
        { person: 'Um astrofísico', clue: 'Estuda as propriedades físicas das estrelas e galáxias.', level: 'advanced' }
      ],
      wordlinker: [
        { words: ['Maçã', 'Laranja', 'Banana', 'Cenoura'], odd: 'Cenoura', link: 'Frutas', oddReason: 'Cenoura é um vegetal' },
        { words: ['Lisboa', 'Roma', 'Tóquio', 'Amazonas'], odd: 'Amazonas', link: 'Capitais', oddReason: 'O Amazonas é um rio' },
        { words: ['Piano', 'Guitarra', 'Violino', 'Trompete'], odd: 'none', link: 'Instrumentos musicais', oddReason: 'Todos são instrumentos' },
        { words: ['Médico', 'Enfermeiro', 'Cirurgião', 'Piloto'], odd: 'Piloto', link: 'Profissões de saúde', oddReason: 'O piloto pilota aviões, não no hospital' }
      ],
      etymology: [
        {
          word: "Saudade",
          level: "medium",
          options: ["Latim","Grego","Árabe","Francês"],
          answer: "Latim",
          detail: "Evoluiu no português para expressar o sentimento profundo de nostalgia e presença da ausência.",
          path: "Latim (solitudo) → Saudade"
        },
        {
          word: "Obrigado",
          level: "medium",
          options: ["Latim","Grego","Árabe","Francês"],
          answer: "Latim",
          detail: "Expressa a ideia moral de ficar ligado em gratidão a quem ajudou.",
          path: "Latim (obligatus) → Obrigado"
        },
        {
          word: "Galáxia",
          level: "medium",
          options: ["Grego","Latim","Árabe","Francês"],
          answer: "Grego",
          detail: "Deriva do mito grego sobre as gotas de leite derramadas no céu.",
          path: "Grego (gala) → Galáxia"
        },
        {
          word: "Candidato",
          level: "medium",
          options: ["Latim","Grego","Árabe","Francês"],
          answer: "Latim",
          detail: "Na Roma Antiga, os postulantes a cargos vestiam uma toga perfeitamente branca.",
          path: "Latim (candidus) → Candidato"
        },
        {
          word: "Nostalgia",
          level: "medium",
          options: ["Grego","Latim","Árabe","Francês"],
          answer: "Grego",
          detail: "Criado no século XVII para descrever as saudades profundas dos soldados da sua terra natal.",
          path: "Grego (nostos + algos) → Nostalgia"
        }
      ],
      storychain: [
        { prompt: 'Numa terça-feira chuvosa, o Marcos encontrou uma chave antiga no bolso…', level: 'starter' },
        { prompt: 'O trem parou numa estação que não figurava em nenhum mapa…', level: 'elementary' },
        { prompt: 'Uma carta misteriosa estava na mesa da cozinha sem remetente…', level: 'intermediate' },
        { prompt: 'Quando a luz faltou em toda a cidade, a Sofia notou um brilho invulgar…', level: 'upper_intermediate' },
        { prompt: 'No sótão da casa antiga, o António descobriu um diário datado de 1888…', level: 'advanced' }
      ]
    };

    window.gameData = window.gameData || {};
    window.gameData['br'] = data;
})();