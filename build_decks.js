const fs = require('fs');
const path = require('path');

const DECKS_DIR = path.join(__dirname, 'this_or_that', 'decks');
const EN_DIR = path.join(DECKS_DIR, 'en');

if (!fs.existsSync(EN_DIR)) {
  fs.mkdirSync(EN_DIR, { recursive: true });
}

// Avatars & Gradients
const AVATARS = {
  male: ['🧔', '👨', '👨‍💼', '👨‍🍳', '👨‍🎨', '👨‍🔬', '👨‍💻', '👨‍🌾', '👨‍🎤', '👨‍🏫', '👨‍🚒', '👨‍✈️', '👨‍🚀', '👨‍⚖️', '🕺', '🧘‍♂️', '🏃‍♂️', '🚴‍♂️', '🧗‍♂️', '🏌️‍♂️'],
  female: ['👩', '👩‍🦰', '👩‍🦱', '👩‍🦳', '👩‍💼', '👩‍🍳', '👩‍🎨', '👩‍🔬', '👩‍💻', '👩‍🌾', '👩‍🎤', '👩‍🏫', '👩‍🚒', '👩‍✈️', '👩‍🚀', '💃', '🧘‍♀️', '🏃‍♀️', '🚴‍♀️', '🧗‍♀️'],
  props: ['🏠', '🏡', '🏙️', '🏢', '🏰', '⛵', '🏖️', '🏔️', '☕', '🍕', '🥐', '🍜', '🌮', '🎸', '📷', '🎧', '🎭', '🍿', '🌌', '🌱']
};

const GRADIENTS = [
  "linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)",
  "linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)",
  "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
  "linear-gradient(135deg, #059669 0%, #34d399 100%)",
  "linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%)",
  "linear-gradient(135deg, #16a34a 0%, #4ade80 100%)",
  "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
  "linear-gradient(135deg, #eab308 0%, #84cc16 100%)",
  "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
  "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)",
  "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
  "linear-gradient(135deg, #0d9488 0%, #2dd4bf 100%)",
  "linear-gradient(135deg, #1e293b 0%, #475569 100%)",
  "linear-gradient(135deg, #78350f 0%, #b45309 100%)",
  "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
];

const SONGS = [
  "🎵 'Shake It Off' by Taylor Swift", "🎵 'Happy' by Pharrell Williams", "🎵 'Sweet Caroline' by Neil Diamond",
  "🎵 'Fix You' by Coldplay", "🎵 'Home' by Edward Sharpe", "🎵 'Wildflowers' by Tom Petty",
  "🎵 'Count on Me' by Bruno Mars", "🎵 'You\\'ve Got a Friend' by Carole King", "🎵 'Bicycle Race' by Queen",
  "🎵 'Sunflower' by Post Malone", "🎵 'Sukiyaki' by Kyu Sakamoto", "🎵 'Volare' by Domenico Modugno",
  "🎵 'Island in the Sun' by Weezer", "🎵 'Postcards' by James Blunt", "🎵 'Can\\'t Stop the Feeling!' by Justin Timberlake",
  "🎵 'Three Little Birds' by Bob Marley", "🎵 'Here Comes the Sun' by The Beatles", "🎵 'Blinding Lights' by The Weeknd",
  "🎵 'Levitating' by Dua Lipa", "🎵 'Smooth Operator' by Sade", "🎵 'Colors' by Halsey",
  "🎵 'Coffee & TV' by Blur", "🎵 'Midnight City' by M83", "🎵 'Our House' by Madness",
  "🎵 'Unstoppable' by Sia", "🎵 'Best Day of My Life' by American Authors", "🎵 'Banana Pancakes' by Jack Johnson",
  "🎵 'Photograph' by Ed Sheeran", "🎵 'Cielito Lindo' by Mariachi Vargas", "🎵 '7 Years' by Lukas Graham",
  "🎵 'La Vie en Rose' by Édith Piaf", "🎵 'Oye Como Va' by Santana", "🎵 'I\\'m Gonna Be (500 Miles)' by The Proclaimers",
  "🎵 'Fast Car' by Tracy Chapman", "🎵 'Dreams' by Fleetwood Mac", "🎵 'Don\\'t Stop Believin\\'\' by Journey",
  "🎵 'Unwritten' by Natasha Bedingfield", "🎵 'Higher Love' by Kygo & Whitney Houston", "🎵 'Dog Days Are Over' by Florence + The Machine",
  "🎵 'Take Me Home, Country Roads' by John Denver", "🎵 'Digital Love' by Daft Punk", "🎵 'Blowin\\' in the Wind' by Bob Dylan",
  "🎵 'Riverside' by Agnes Obel", "🎵 'Lean on Me' by Bill Withers", "🎵 'Eye of the Tiger' by Survivor",
  "🎵 'A Sky Full of Stars' by Coldplay", "🎵 'Last Last' by Burna Boy", "🎵 'Jai Ho' by A.R. Rahman",
  "🎵 'Desert Rose' by Sting", "🎵 'Society' by Eddie Vedder", "🎵 'Ho Hey' by The Lumineers",
  "🎵 'Heroes' by David Bowie", "🎵 'Skinny Love' by Bon Iver", "🎵 'Big Yellow Taxi' by Joni Mitchell",
  "🎵 'Wonderwall' by Oasis", "🎵 'Viva La Vida' by Coldplay", "🎵 'Vogue' by Madonna",
  "🎵 'Feeling Good' by Nina Simone", "🎵 'Computer World' by Kraftwerk", "🎵 'Symphony No. 5' by Beethoven",
  "🎵 'Skyfall' by Adele", "🎵 'Mercy Mercy Me' by Marvin Gaye", "🎵 'Kodachrome' by Paul Simon",
  "🎵 'The Four Seasons' by Vivaldi", "🎵 'Girl from Ipanema' by Stan Getz", "🎵 'Autumn Leaves' by Cannonball Adderley",
  "🎵 'Sailing' by Christopher Cross", "🎵 'Eleni' by Capercaillie", "🎵 'Experience' by Ludovico Einaudi"
];

const FILMS = [
  "🎬 'Paddington 2' (Paul King)", "🎬 'Finding Nemo' (Pixar)", "🎬 'Chef' (Jon Favreau)",
  "🎬 'Patch Adams' (Tom Shadyac)", "🎬 '500 Days of Summer' (Marc Webb)", "🎬 'The Secret Garden' (Marc Munden)",
  "🎬 'Inside Out' (Pixar)", "🎬 'Paddington' (Paul King)", "🎬 'E.T. the Extra-Terrestrial' (Steven Spielberg)",
  "🎬 'A Bug\\'s Life' (Pixar)", "🎬 'Spirited Away' (Hayao Miyazaki)", "🎬 'La Dolce Vita' (Federico Fellini)",
  "🎬 'Moana' (Clements & Musker)", "🎬 'Roman Holiday' (William Wyler)", "🎬 'Toy Story' (John Lasseter)",
  "🎬 'School of Rock' (Richard Linklater)", "🎬 'Amélie' (Jean-Pierre Jeunet)", "🎬 'Night at the Museum' (Shawn Levy)",
  "🎬 'La La Land' (Damien Chazelle)", "🎬 'The Devil Wears Prada' (David Frankel)", "🎬 'Inception' (Christopher Nolan)",
  "🎬 'Father of the Bride' (Charles Shyer)", "🎬 'The Social Network' (David Fincher)", "🎬 'Ferris Bueller\\'s Day Off' (John Hughes)",
  "🎬 'Julie & Julia' (Nora Ephron)", "🎬 'The Secret Life of Walter Mitty' (Ben Stiller)", "🎬 'Coco' (Pixar)",
  "🎬 'Another Round' (Thomas Vinterberg)", "🎬 'Chocolat' (Lasse Hallström)", "🎬 'Into the Wild' (Sean Penn)",
  "🎬 'Before Sunrise' (Richard Linklater)", "🎬 'Lord of the Rings' (Peter Jackson)", "🎬 'Eat Pray Love' (Ryan Murphy)",
  "🎬 'The Pursuit of Happyness' (Gabriele Muccino)", "🎬 'Frida' (Julie Taymor)", "🎬 'The Matrix' (The Wachowskis)",
  "🎬 'Spotlight' (Tom McCarthy)", "🎬 'The Grand Budapest Hotel' (Wes Anderson)", "🎬 'Mary Poppins Returns' (Rob Marshall)",
  "🎬 'Good Will Hunting' (Gus Van Sant)", "🎬 'Wonder' (Stephen Chbosky)", "🎬 'Free Solo' (Jimmy Chin)",
  "🎬 'Interstellar' (Christopher Nolan)", "🎬 'The Wedding Party' (Kemi Adetiba)", "🎬 '3 Idiots' (Rajkumar Hirani)",
  "🎬 'The Hundred-Foot Journey' (Lasse Hallström)", "🎬 'Forks Over Knives' (Lee Fulkerson)", "🎬 'Everest' (Baltasar Kormákur)",
  "🎬 'Cinema Paradiso' (Giuseppe Tornatore)", "🎬 'Knives Out' (Rian Johnson)", "🎬 'Minimalism' (Matt D'Avella)",
  "🎬 'Lost in Translation' (Sofia Coppola)", "🎬 'Ex Machina' (Alex Garland)", "🎬 'Metropolis' (Fritz Lang)",
  "🎬 'Casino Royale' (Martin Campbell)", "🎬 'Captain Fantastic' (Matt Ross)", "🎬 'Iron Lady' (Phyllida Lloyd)",
  "🎬 'Bridge of Spies' (Steven Spielberg)", "🎬 'Blow-Up' (Michelangelo Antonioni)", "🎬 'The Red Violin' (François Girard)",
  "🎬 'City of God' (Fernando Meirelles)", "🎬 'Burnt' (John Wells)", "🎬 'The Lunchbox' (Ritesh Batra)",
  "🎬 'Master and Commander' (Peter Weir)", "🎬 'The English Patient' (Anthony Minghella)", "🎬 'TÁR' (Todd Field)",
  "🎬 'Blade Runner 2049' (Denis Villeneuve)", "🎬 'Limitless' (Neil Burger)", "🎬 'Paterson' (Jim Jarmusch)"
];

console.log("Assets ready!");
