(function() {
    const data = {
      fluency: [
        { text: 'Tu rutina de la mañana ☕', level: 'starter' },
        { text: 'Un recuerdo de la infancia 🧸', level: 'starter' },
        { text: 'Tu estación favorita y por qué 🍂', level: 'starter' },
        { text: 'Tu mascota o animal favorito 🐶', level: 'starter' },
        { text: 'Un día de lluvia ideal 🌧️', level: 'starter' },
        { text: 'Una habilidad que desearías tener 🎸', level: 'elementary' },
        { text: 'La mejor comida que has probado 🍜', level: 'elementary' },
        { text: 'Un lugar que quieres visitar 🗺️', level: 'elementary' },
        { text: 'Una historia divertida de tu vida 🚴', level: 'elementary' },
        { text: 'Tu tradición o fiesta favorita 🎄', level: 'elementary' },
        { text: 'Tu destino de vacaciones ideal 🌴', level: 'intermediate' },
        { text: 'La persona más interesante que conoces 🙋', level: 'intermediate' },
        { text: 'Describe tu fin de semana perfecto ☀️', level: 'intermediate' },
        { text: 'La última vez que intentaste algo nuevo 🎯', level: 'intermediate' },
        { text: 'Un nuevo pasatiempo que te gustaría empezar 🎨', level: 'intermediate' },
        { text: 'Cómo la tecnología cambia tu vida diaria 📱', level: 'intermediate' },
        { text: '¿Qué harías con 1 millón de euros? 💰', level: 'upper_intermediate' },
        { text: 'Un libro o película que cambió tu perspectiva 📚', level: 'upper_intermediate' },
        { text: 'Si pudieras vivir en cualquier lugar del mundo… 🌍', level: 'upper_intermediate' },
        { text: 'Algo de lo que estás orgulloso 🏆', level: 'upper_intermediate' },
        { text: 'Una lección de vida inesperada 💡', level: 'upper_intermediate' },
        { text: '¿Qué significa la felicidad para ti? 😊', level: 'advanced' },
        { text: 'La influencia de la cultura en nuestras elecciones 🏛️', level: 'advanced' },
        { text: 'El equilibrio entre la ambición y la tranquilidad ⚖️', level: 'advanced' }
      ],
      opinions: [
        { text: 'Las redes sociales hacen más daño que bien.', level: 'intermediate' },
        { text: 'Todos deberían aprender al menos dos idiomas.', level: 'intermediate' },
        { text: 'El trabajo desde casa es mejor que el trabajo en la oficina.', level: 'intermediate' },
        { text: 'El dinero no compra la felicidad.', level: 'intermediate' },
        { text: 'La tecnología nos hace menos sociables.', level: 'intermediate' },
        { text: 'Nunca es tarde para aprender algo nuevo.', level: 'intermediate' },
        { text: 'Viajar es la mejor forma de educación.', level: 'intermediate' },
        { text: 'Los animales no deberían estar en zoológicos.', level: 'intermediate' },
        { text: 'La semana laboral de 4 días aumenta la productividad.', level: 'upper_intermediate' },
        { text: 'El transporte público debería ser gratuito para todos.', level: 'upper_intermediate' },
        { text: 'La renta básica universal es necesaria para las economías futuras.', level: 'upper_intermediate' },
        { text: 'La IA generativa nunca podrá reemplazar la creatividad artística humana.', level: 'advanced' },
        { text: 'La privacidad total es imposible en la era digital actual.', level: 'advanced' }
      ],
      battle: [
        ['Montañas 🏔️', 'Playa 🏖️'],
        ['Café ☕', 'Té 🍵'],
        ['Madrugador 🌅', 'Noctámbulo 🦉'],
        ['Vida en la ciudad 🏙️', 'Vida en el campo 🌾'],
        ['Lectura 📚', 'Ver películas 🎬'],
        ['Verano ☀️', 'Invierno ❄️'],
        ['Gatos 🐱', 'Perros 🐶'],
        ['Trabajo desde casa 🏠', 'Trabajo en oficina 🏢'],
        ['Dulce 🍰', 'Salado 🧀'],
        ['Viajar solo ✈️', 'Viajar con amigos 👥'],
        ['Libros impresos 📖', 'Lectores electrónicos 📱'],
        ['Cocinar en casa 🍳', 'Pedir a domicilio 🍕'],
        ['Transporte público 🚌', 'Coche propio 🚗']
      ],
      critic: [
        { title: 'Delicioso pero demasiado caro 🍝', type: 'Restaurante', review: 'La comida era fantástica y los ingredientes muy frescos, pero las raciones eran pequeñas y la cuenta fue una sorpresa.', question: '¿Volverías a pesar del elevado precio?' },
        { title: 'Trama cautivadora, final débil 🎬', type: 'Película', review: 'Las dos primeras terceras partes de la película mantenían el suspenso, pero la resolución fue apresurada e ilógica.', question: '¿Qué tan importante es el final de una película para tu valoración general?' },
        { title: 'Gráficos impresionantes, pero muchos errores 🎮', type: 'Videojuego', review: 'Visualmente es una obra de arte, pero se congela a menudo y tiene muchos fallos técnicos.', question: '¿Pueden los gráficos y la atmósfera compensar los fallos técnicos?' }
      ],
      action: {
        starter: ['Gato', 'Perro', 'Casa', 'Coche', 'Libro', 'Agua', 'Sol', 'Luna', 'Árbol', 'Teléfono', 'Puerta', 'Silla', 'Cama', 'Pan', 'Pez'],
        elementary: ['Cocina', 'Jardín', 'Tren', 'Médico', 'Profesor', 'Música', 'Cumpleaños', 'Natación', 'Vacaciones', 'Tienda', 'Estación', 'Hospital'],
        intermediate: ['Museo', 'Entrevista', 'Arquitecto', 'Periodista', 'Parlamento', 'Orquesta', 'Maratón', 'Exposición', 'Laboratorio', 'Telescopio'],
        upper_intermediate: ['Filantropía', 'Embajador', 'Hipótesis', 'Emprendedor', 'Arqueología', 'Biodiversidad', 'Infraestructura'],
        advanced: ['Paradigma', 'Yuxtaposición', 'Anacronismo', 'Verosimilitud', 'Magnánimo', 'Resiliencia', 'Matiz', 'Perspicacia'],
        proficiency: ['Ubicuidad', 'Efímero', 'Pugnaz', 'Perspicaz', 'Sicofanta', 'Ecuanimidad', 'Vicisitud', 'Inefable']
      },
      identity: [
        { person: 'Un bombero', clue: 'Lleva casco y apaga incendios con agua.', level: 'elementary' },
        { person: 'Un chef', clue: 'Trabaja en una cocina y prepara deliciosos platos.', level: 'elementary' },
        { person: 'Un bibliotecario', clue: 'Gestiona una biblioteca y ayuda a la gente a encontrar libros.', level: 'elementary' },
        { person: 'Un veterinario', clue: 'Cuida a animales enfermos o heridos.', level: 'elementary' },
        { person: 'Un astronauta', clue: 'Viaja al espacio más allá de la Tierra.', level: 'intermediate' },
        { person: 'Un detective', clue: 'Investiga misterios y busca pistas.', level: 'intermediate' },
        { person: 'Un periodista', clue: 'Informa sobre noticias y escribe artículos de prensa.', level: 'intermediate' },
        { person: 'Un fotógrafo', clue: 'Captura recuerdos e imágenes con una cámara.', level: 'intermediate' },
        { person: 'Un arquitecto', clue: 'Diseña casas y edificios antes de su construcción.', level: 'upper_intermediate' },
        { person: 'Un cirujano', clue: 'Realiza operaciones médicas en el hospital.', level: 'upper_intermediate' },
        { person: 'Un ingeniero de software', clue: 'Escribe código para crear aplicaciones informáticas.', level: 'upper_intermediate' },
        { person: 'Un diplomático', clue: 'Representa a su país en relaciones internacionales oficiales.', level: 'advanced' },
        { person: 'Un biólogo marino', clue: 'Estudia la fauna y flora del océano.', level: 'advanced' },
        { person: 'Un astrofísico', clue: 'Estudia las propiedades físicas de estrellas y galaxias.', level: 'advanced' }
      ],
      wordlinker: [
        { words: ['Manzana', 'Naranja', 'Plátano', 'Zanahoria'], odd: 'Zanahoria', link: 'Frutas', oddReason: 'La zanahoria es una verdura' },
        { words: ['Madrid', 'Roma', 'Tokio', 'Amazonas'], odd: 'Amazonas', link: 'Capitales', oddReason: 'El Amazonas es un río' },
        { words: ['Piano', 'Guitarra', 'Violín', 'Trompeta'], odd: 'none', link: 'Instrumentos musicales', oddReason: 'Todos son instrumentos' },
        { words: ['Médico', 'Enfermero', 'Cirujano', 'Piloto'], odd: 'Piloto', link: 'Profesiones sanitarias', oddReason: 'El piloto pilota aviones, no en un hospital' }
      ],
      etymology: [],
      storychain: []
    };

    window.gameData = window.gameData || {};
    window.gameData['es'] = data;
})();