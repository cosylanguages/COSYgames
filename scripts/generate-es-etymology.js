const fs = require('fs');
const path = require('path');

const esEntries = [
  // Arabic Layer (Al-Andalus)
  {
    word: "Alcalde",
    level: "easy",
    options: ["Árabe", "Latín", "Visigodo", "Francés"],
    answer: "Árabe",
    detail: "Proviene del árabe al-qāḍī que significa el juez, refiriéndose a la autoridad judicial o municipal en la península ibérica.",
    path: "Árabe (al-qāḍī) → Español Alcalde"
  },
  {
    word: "Aceite",
    level: "easy",
    options: ["Árabe", "Latín", "Griego", "Hebreo"],
    answer: "Árabe",
    detail: "Deriva del árabe hispánico az-zayt (jugo de aceituna), derivado de la raíz semítica para el olivo.",
    path: "Árabe (az-zayt) → Español Aceite"
  },
  {
    word: "Ojalá",
    level: "easy",
    options: ["Árabe", "Latín", "Visigodo", "Hebreo"],
    answer: "Árabe",
    detail: "Proviene de la expresión árabe law shāʾ Allāh que significa si Dios quiere, expresando un vivo deseo.",
    path: "Árabe (law shāʾ Allāh) → Español Ojalá"
  },
  {
    word: "Almohada",
    level: "easy",
    options: ["Árabe", "Latín", "Euskera", "Francés"],
    answer: "Árabe",
    detail: "Procede del árabe hispánico al-mukhadda (el cojín), derivado de la raíz semítica para mejilla.",
    path: "Árabe (al-mukhadda) → Español Almohada"
  },
  {
    word: "Azúcar",
    level: "easy",
    options: ["Árabe", "Sánscrito", "Latín", "Persa"],
    answer: "Árabe",
    detail: "Viajó desde el sánscrito śarkarā a través del persa y el árabe as-sukkar antes de incorporarse al castellano.",
    path: "Sánscrito (śarkarā) → Persa → Árabe (as-sukkar) → Español Azúcar"
  },
  {
    word: "Almacén",
    level: "medium",
    options: ["Árabe", "Latín", "Francés", "Alemán"],
    answer: "Árabe",
    detail: "Procede del árabe al-makhzan que designaba el depósito o almacén de provisiones.",
    path: "Árabe (al-makhzan) → Español Almacén"
  },
  {
    word: "Alfombra",
    level: "medium",
    options: ["Árabe", "Latín", "Persa", "Turco"],
    answer: "Árabe",
    detail: "Deriva del árabe al-ḥumra (la roja), originalmente refiriéndose a esteras de esparto tejidas en tonos rojos.",
    path: "Árabe (al-ḥumra) → Español Alfombra"
  },
  {
    word: "Aldea",
    level: "medium",
    options: ["Árabe", "Latín", "Gótico", "Celta"],
    answer: "Árabe",
    detail: "Proviene del árabe hispánico al-ḍayʿa, que designaba una pequeña granja o caserío rural.",
    path: "Árabe (al-ḍayʿa) → Español Aldea"
  },
  {
    word: "Alquiler",
    level: "medium",
    options: ["Árabe", "Latín", "Francés", "Visigodo"],
    answer: "Árabe",
    detail: "Deriva del árabe al-kirāʾ que significa el arrendamiento o pago por uso de una propiedad.",
    path: "Árabe (al-kirāʾ) → Español Alquiler"
  },
  {
    word: "Tarifa",
    level: "hard",
    options: ["Árabe", "Latín", "Francés", "Griego"],
    answer: "Árabe",
    detail: "Proviene del árabe taʿrīf (notificación), asociado con el puerto andalusí de Tarifa donde se cobraban aranceles marítimos.",
    path: "Árabe (taʿrīf) → Español Tarifa"
  },
  {
    word: "Ajedrez",
    level: "hard",
    options: ["Árabe", "Sánscrito", "Persa", "Griego"],
    answer: "Árabe",
    detail: "Evolucionó del juego indio chaturanga a través del persa shatranj y el árabe al-shatranj.",
    path: "Sánscrito (chaturanga) → Persa → Árabe (al-shatranj) → Español Ajedrez"
  },
  {
    word: "Albaricoque",
    level: "hard",
    options: ["Árabe", "Latín", "Griego", "Persa"],
    answer: "Árabe",
    detail: "Pasó del latín praecoquum al griego bizantino, al árabe al-barqūq y finalmente al castellano medieval.",
    path: "Latín (praecoquum) → Griego → Árabe (al-barqūq) → Español Albaricoque"
  },

  // Indigenous American Layer (Nahuatl / Taino / Quechua)
  {
    word: "Chocolate",
    level: "easy",
    options: ["Náhuatl", "Maya", "Quechua", "Taíno"],
    answer: "Náhuatl",
    detail: "Proviene del término náhuatl xocolātl, bebida ceremonial preparada con cacao amargo.",
    path: "Náhuatl (xocolātl) → Español Chocolate"
  },
  {
    word: "Tomate",
    level: "easy",
    options: ["Náhuatl", "Maya", "Taíno", "Guaraní"],
    answer: "Náhuatl",
    detail: "Incorporado del náhuatl tomatl (fruto hinchado), introducido a Europa tras la llegada a América.",
    path: "Náhuatl (tomatl) → Español Tomate"
  },
  {
    word: "Canoa",
    level: "easy",
    options: ["Taíno", "Náhuatl", "Maya", "Quechua"],
    answer: "Taíno",
    detail: "Fue uno de los primeros americanismos registrados por Cristóbal Colón en 1492, tomado de los indígenas taínos.",
    path: "Taíno (kanowa) → Español Canoa"
  },
  {
    word: "Huracán",
    level: "easy",
    options: ["Taíno", "Caribe", "Náhuatl", "Maya"],
    answer: "Taíno",
    detail: "Proviene de la lengua taína y caribe para nombrar la divinidad y la tormenta de los vientos tropicales.",
    path: "Taíno/Caribe (juracán) → Español Huracán"
  },
  {
    word: "Aguacate",
    level: "easy",
    options: ["Náhuatl", "Maya", "Taíno", "Quechua"],
    answer: "Náhuatl",
    detail: "Deriva del náhuatl āhuacatl, nombre dado al fruto mesoamericano por su forma característica.",
    path: "Náhuatl (āhuacatl) → Español Aguacate"
  },
  {
    word: "Cacahuete",
    level: "medium",
    options: ["Náhuatl", "Taíno", "Quechua", "Guaraní"],
    answer: "Náhuatl",
    detail: "Traducción adaptada del náhuatl tlālcacahuatl (cacao de tierra) en el imperio azteca.",
    path: "Náhuatl (tlālcacahuatl) → Español Cacahuete"
  },
  {
    word: "Maíz",
    level: "medium",
    options: ["Taíno", "Náhuatl", "Maya", "Quechua"],
    answer: "Taíno",
    detail: "Tomado directamente del idioma taíno mahís (sustento de vida), cereal base de las Antillas.",
    path: "Taíno (mahís) → Español Maíz"
  },
  {
    word: "Barbacoa",
    level: "medium",
    options: ["Taíno", "Maya", "Náhuatl", "Arawak"],
    answer: "Taíno",
    detail: "Término taíno que describía el armazón de madera elevado para ahumar y asar carne sobre brasas.",
    path: "Taíno (barbacoa) → Español Barbacoa"
  },
  {
    word: "Hamaca",
    level: "medium",
    options: ["Taíno", "Caribe", "Náhuatl", "Quechua"],
    answer: "Taíno",
    detail: "Registrado en las Antillas por marineros españoles para la red suspendida utilizada para dormir.",
    path: "Taíno (hamaca) → Español Hamaca"
  },
  {
    word: "Coyote",
    level: "hard",
    options: ["Náhuatl", "Maya", "Navajo", "Sioux"],
    answer: "Náhuatl",
    detail: "Proviene del vocablo náhuatl coyōtl para el cánido nativo de América del Norte y Central.",
    path: "Náhuatl (coyōtl) → Español Coyote"
  },
  {
    word: "Cancha",
    level: "hard",
    options: ["Quechua", "Aymara", "Náhuatl", "Taíno"],
    answer: "Quechua",
    detail: "Del quechua kancha (terreno cercado o recinto), hoy usado ampliamente para recintos deportivos.",
    path: "Quechua (kancha) → Español Cancha"
  },
  {
    word: "Tiburón",
    level: "hard",
    options: ["Taíno", "Maya", "Caribe", "Tupí"],
    answer: "Taíno",
    detail: "Origen caribeño o tupí adoptado por los primeros navegantes españoles en aguas tropicales.",
    path: "Taíno/Tupí (tiburón) → Español Tiburón"
  },

  // Classical Latin & Greek Layer
  {
    word: "Candidato",
    level: "easy",
    options: ["Latín", "Griego", "Francés", "Alemán"],
    answer: "Latín",
    detail: "En la Roma antigua, los aspirantes a cargos públicos vestían una toga blanca pulcra (candida).",
    path: "Latín (candidus) → Español Candidato"
  },
  {
    word: "Nostalgia",
    level: "easy",
    options: ["Griego", "Latín", "Alemán", "Francés"],
    answer: "Griego",
    detail: "Acuñado a partir de las raíces griegas nostos (regreso) y algos (dolor o añoranza).",
    path: "Griego (nostos + algos) → Español Nostalgia"
  },
  {
    word: "Galaxia",
    level: "easy",
    options: ["Griego", "Latín", "Árabe", "Hebreo"],
    answer: "Griego",
    detail: "Basado en el mito griego sobre el camino lácteo formado por gotas de leche divina.",
    path: "Griego (gala) → Español Galaxia"
  },
  {
    word: "Filosofía",
    level: "easy",
    options: ["Griego", "Latín", "Árabe", "Hebreo"],
    answer: "Griego",
    detail: "Compuesto por las raíces griegas philos (amor o afición) y sophia (sabiduría).",
    path: "Griego (philos + sophia) → Español Filosofía"
  },
  {
    word: "Biblioteca",
    level: "easy",
    options: ["Griego", "Latín", "Francés", "Alemán"],
    answer: "Griego",
    detail: "Proviene del griego biblion (libro) y theke (caja o depósito).",
    path: "Griego (biblion + theke) → Español Biblioteca"
  },
  {
    word: "Teléfono",
    level: "easy",
    options: ["Griego", "Latín", "Inglés", "Francés"],
    answer: "Griego",
    detail: "Neologismo científico formado con las palabras griegas tele (lejos) y phone (sonido o voz).",
    path: "Griego (tele + phone) → Español Teléfono"
  },

  // European & Modern Borrowings (French, Italian, English, Germanic)
  {
    word: "Restaurante",
    level: "medium",
    options: ["Francés", "Latín", "Italiano", "Inglés"],
    answer: "Francés",
    detail: "Del francés restaurant, referente al caldo reparador servido en las casas de comidas parisinas del siglo XVIII.",
    path: "Francés (restaurant) → Español Restaurante"
  },
  {
    word: "Garaje",
    level: "medium",
    options: ["Francés", "Alemán", "Inglés", "Italiano"],
    answer: "Francés",
    detail: "Deriva del verbo francés garer (guardar o proteger bajo techado).",
    path: "Francés (garage) → Español Garaje"
  },
  {
    word: "Balcón",
    level: "medium",
    options: ["Italiano", "Lombardo", "Francés", "Latín"],
    answer: "Italiano",
    detail: "Préstamo renacentista del italiano balcone, de origen germánico lombardo balcho (viga).",
    path: "Lombardo (balcho) → Italiano (balcone) → Español Balcón"
  },
  {
    word: "Cabalgar",
    level: "medium",
    options: ["Latín", "Francés", "Italiano", "Gótico"],
    answer: "Latín",
    detail: "Del latín tardío caballicare, derivado del sustantivo caballus (caballo de trabajo).",
    path: "Latín (caballus) → Español Cabalgar"
  },
  {
    word: "Fútbol",
    level: "easy",
    options: ["Inglés", "Alemán", "Francés", "Holandés"],
    answer: "Inglés",
    detail: "Adaptación fonética directa del término inglés football (pie y balón).",
    path: "Inglés (football) → Español Fútbol"
  },
  {
    word: "Bikini",
    level: "medium",
    options: ["Francés", "Inglés", "Polinesio", "Italiano"],
    answer: "Francés",
    detail: "Diseñado en París en 1946 por Louis Réard, bautizado por el atolón Bikini de los ensayos nucleares.",
    path: "Atolón Bikini → Francés (bikini) → Español Bikini"
  },
  {
    word: "Líder",
    level: "medium",
    options: ["Inglés", "Alemán", "Francés", "Holandés"],
    answer: "Inglés",
    detail: "Adaptación hispanizada del sustantivo inglés leader acuñado a finales del siglo XIX.",
    path: "Inglés (leader) → Español Líder"
  },
  {
    word: "Bife",
    level: "hard",
    options: ["Inglés", "Francés", "Alemán", "Holandés"],
    answer: "Inglés",
    detail: "Deriva del término inglés beefsteak introducido en la gastronomía del Río de la Plata.",
    path: "Inglés (beefsteak) → Español Bife"
  },
  {
    word: "Guerra",
    level: "hard",
    options: ["Germánico", "Latín", "Árabe", "Celta"],
    answer: "Germánico",
    detail: "Reemplazó al latín bellum durante la época visigoda a partir de la raíz germánica werra (discordia).",
    path: "Gótico/Germánico (werra) → Español Guerra"
  },
  {
    word: "Jardín",
    level: "hard",
    options: ["Francés", "Franco", "Latín", "Árabe"],
    answer: "Francés",
    detail: "Tomado del francés antiguo jardin, derivado del franco germánico gardo (cercado).",
    path: "Franco (gardo) → Francés (jardin) → Español Jardín"
  }
];

const filePath = path.join(__dirname, '..', 'data', 'es', 'game_data.js');
let content = fs.readFileSync(filePath, 'utf8');

const window = {};
eval(content);
const data = window.gameData['es'];
data.etymology = esEntries;

const formattedContent = `(function() {
    const data = ${JSON.stringify(data, null, 6)};

    window.gameData = window.gameData || {};
    window.gameData['es'] = data;
})();`;

fs.writeFileSync(filePath, formattedContent, 'utf8');
console.log(`Successfully formatted data/es/game_data.js with ${esEntries.length} etymology entries!`);
