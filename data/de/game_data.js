(function() {
    const data = {
      fluency: [
        { text: 'Deine Morgenroutine ☕', level: 'starter' },
        { text: 'Eine Kindheitserinnerung 🧸', level: 'starter' },
        { text: 'Deine Lieblingsjahreszeit und warum 🍂', level: 'starter' },
        { text: 'Dein Lieblingstier 🐶', level: 'starter' },
        { text: 'Ein idealer Regentag 🌧️', level: 'starter' },
        { text: 'Eine Fähigkeit, die du gerne hättest 🎸', level: 'elementary' },
        { text: 'Das beste Essen, das du je gegessen hast 🍜', level: 'elementary' },
        { text: 'Ein Ort, den du besuchen möchtest 🗺️', level: 'elementary' },
        { text: 'Eine lustige Geschichte aus deinem Leben 🚴', level: 'elementary' },
        { text: 'Dein Lieblingsfest oder deine Lieblings-Tradition 🎄', level: 'elementary' },
        { text: 'Dein perfektes Urlaubsziel 🌴', level: 'intermediate' },
        { text: 'Die interessanteste Person, die du kennst 🙋', level: 'intermediate' },
        { text: 'Beschreibe dein perfektes Wochenende ☀️', level: 'intermediate' },
        { text: 'Das letzte Mal, als du etwas Neues ausprobiert hast 🎯', level: 'intermediate' },
        { text: 'Ein neues Hobby, das du gerne anfangen würdest 🎨', level: 'intermediate' },
        { text: 'Wie Technologie deinen Alltag verändert 📱', level: 'intermediate' },
        { text: 'Was würdest du mit 1 Million Euro tun? 💰', level: 'upper_intermediate' },
        { text: 'Ein Buch oder Film, der deine Sicht verändert hat 📚', level: 'upper_intermediate' },
        { text: 'Wenn du überall auf der Welt leben könntest… 🌍', level: 'upper_intermediate' },
        { text: 'Etwas, worauf du stolz bist 🏆', level: 'upper_intermediate' },
        { text: 'Eine unerwartete Lektion des Lebens 💡', level: 'upper_intermediate' },
        { text: 'Was bedeutet Glück für dich? 😊', level: 'advanced' },
        { text: 'Der Einfluss der Kultur auf unsere Entscheidungen 🏛️', level: 'advanced' },
        { text: 'Die Balance zwischen Ehrgeiz und Zufriedenheit ⚖️', level: 'advanced' }
      ],
      opinions: [
        { text: 'Soziale Medien schaden mehr als sie nützen.', level: 'intermediate' },
        { text: 'Jeder sollte mindestens zwei Sprachen lernen.', level: 'intermediate' },
        { text: 'Homeoffice ist besser als Arbeit im Büro.', level: 'intermediate' },
        { text: 'Geld kann kein Glück kaufen.', level: 'intermediate' },
        { text: 'Technologie macht uns weniger sozial.', level: 'intermediate' },
        { text: 'Die 4-Tage-Woche steigert Produktivität und Wohlbefinden.', level: 'upper_intermediate' },
        { text: 'Der öffentliche Nahverkehr sollte für alle kostenlos sein.', level: 'upper_intermediate' },
        { text: 'Ein bedingungsloses Grundeinkommen ist für zukünftige Wirtschaftssysteme notwendig.', level: 'upper_intermediate' },
        { text: 'Generative KI kann menschliche künstlerische Kreativität niemals ersetzen.', level: 'advanced' },
        { text: 'Vollständige Privatsphäre ist im digitalen Zeitalter unmöglich.', level: 'advanced' }
      ],
      battle: [
        ['Berge 🏔️', 'Strand 🏖️'],
        ['Kaffee ☕', 'Tee 🍵'],
        ['Frühaufsteher 🌅', 'Nachteule 🦉'],
        ['Stadtleben 🏙️', 'Landleben 🌾'],
        ['Lesen 📚', 'Filme schauen 🎬'],
        ['Sommer ☀️', 'Winter ❄️'],
        ['Katzen 🐱', 'Hunde 🐶'],
        ['Homeoffice 🏠', 'Büroarbeit 🏢'],
        ['Süß 🍰', 'Herzhaft 🧀'],
        ['Alleine reisen ✈️', 'Mit Freunden reisen 👥'],
        ['Gedruckte Bücher 📖', 'E-Reader 📱'],
        ['Zuhause kochen 🍳', 'Essen bestellen 🍕']
      ],
      critic: [
        { title: 'Sehr lecker, aber zu teuer 🍝', type: 'Restaurant', review: 'Das Essen war fantastisch und die Zutaten frisch, aber die Portionen waren klein und die Rechnung war eine Überraschung.', question: 'Würdest du trotz des hohen Preises wiederkommen?' },
        { title: 'Spannender Plot, schwaches Ende 🎬', type: 'Film', review: 'Die ersten zwei Drittel des Films waren fesselnd, aber die Auflösung war überstürzt und unlogisch.', question: 'Wie wichtig ist das Ende eines Films für deine Gesamtwertung?' },
        { title: 'Tolle Grafik, aber viele Bugs 🎮', type: 'Videospiel', review: 'Das Spiel sieht wunderschön aus, stürzt jedoch häufig ab und hat viele technische Fehler.', question: 'Können Grafik und Atmosphäre technische Mängel ausgleichen?' }
      ],
      action: {
        starter: ['Katze', 'Hund', 'Haus', 'Auto', 'Buch', 'Wasser', 'Sonne', 'Mond', 'Baum', 'Telefon', 'Tür', 'Stuhl', 'Bett', 'Brot', 'Fisch'],
        elementary: ['Küche', 'Garten', 'Zug', 'Arzt', 'Lehrer', 'Musik', 'Geburtstag', 'Schwimmen', 'Urlaub', 'Geschäft', 'Bahnhof', 'Krankenhaus'],
        intermediate: ['Museum', 'Interview', 'Architekt', 'Journalist', 'Parlament', 'Orchester', 'Marathon', 'Ausstellung', 'Labor', 'Teleskop'],
        upper_intermediate: ['Philanthropie', 'Botschafter', 'Hypothese', 'Unternehmer', 'Archäologie', 'Biodiversität', 'Infrastruktur'],
        advanced: ['Paradigma', 'Gegenüberstellung', 'Anachronismus', 'Glaubwürdigkeit', 'Resilienz', 'Nuance', 'Scharfsinn'],
        proficiency: ['Allgegenwart', 'Flüchtigkeit', 'Scharfsinn', 'Gleichmut', 'Mithilfe', 'Unbeschreiblichkeit']
      },
      identity: [
        { person: 'Ein Feuerwehrmann', clue: 'Er trägt einen Helm und löscht Feuer mit Wasser.', level: 'elementary' },
        { person: 'Ein Koch', clue: 'Er arbeitet in einer Küche und bereitet leckere Speisen zu.', level: 'elementary' },
        { person: 'Ein Bibliothekar', clue: 'Er leitet eine Bibliothek und hilft Menschen, Bücher zu finden.', level: 'elementary' },
        { person: 'Ein Tierarzt', clue: 'Er kümmert sich um kranke oder verletzte Tiere.', level: 'elementary' },
        { person: 'Ein Astronaut', clue: 'Er reist in den Weltraum jenseits der Erde.', level: 'intermediate' },
        { person: 'Ein Detektiv', clue: 'Er ermittelt in Rätseln und sucht nach Hinweisen.', level: 'intermediate' },
        { person: 'Ein Journalist', clue: 'Er informiert die Öffentlichkeit und schreibt Zeitungsartikel.', level: 'intermediate' },
        { person: 'Ein Fotograf', clue: 'Er hält Erinnerungen mit einer Kamera fest.', level: 'intermediate' },
        { person: 'Ein Architekt', clue: 'Er entwirft Häuser und Gebäude vor deren Bau.', level: 'upper_intermediate' },
        { person: 'Ein Chirurg', clue: 'Er führt medizinische Operationen im Krankenhaus durch.', level: 'upper_intermediate' },
        { person: 'Ein Softwareentwickler', clue: 'Er schreibt Code für Web- und Softwareanwendungen.', level: 'upper_intermediate' },
        { person: 'Ein Diplomat', clue: 'Er vertritt sein Land in offiziellen internationalen Beziehungen.', level: 'advanced' },
        { person: 'Ein Meeresbiologe', clue: 'Er erforscht die Pflanzen- und Tierwelt der Ozeane.', level: 'advanced' },
        { person: 'Ein Astrophysiker', clue: 'Er erforscht die physikalischen Eigenschaften von Sternen.', level: 'advanced' }
      ],
      wordlinker: [
        { words: ['Apfel', 'Orange', 'Banane', 'Karotte'], odd: 'Karotte', link: 'Früchte', oddReason: 'Karotte ist ein Gemüse' },
        { words: ['Paris', 'Rom', 'Tokio', 'Amazonas'], odd: 'Amazonas', link: 'Hauptstädte', oddReason: 'Amazonas ist ein Fluss' },
        { words: ['Klavier', 'Gitarre', 'Geige', 'Trompete'], odd: 'none', link: 'Musikinstrumente', oddReason: 'Alle sind Musikinstrumente' },
        { words: ['Arzt', 'Pfleger', 'Chirurg', 'Pilot'], odd: 'Pilot', link: 'Gesundheitsberufe', oddReason: 'Der Pilot fliegt Flugzeuge, nicht im Krankenhaus' }
      ],
      etymology: [
        {
          word: "Kindergarten",
          level: "medium",
          options: ["Deutsch","Griechisch","Latein","Tschechisch"],
          answer: "Deutsch",
          detail: "1837 von Friedrich Fröbel geprägt für frühkindliche Bildung.",
          path: "Deutsch → Kindergarten"
        },
        {
          word: "Roboter",
          level: "medium",
          options: ["Tschechisch","Deutsch","Griechisch","Latein"],
          answer: "Tschechisch",
          detail: "Eingeführt von Karel Čapek in seinem Theaterstück R.U.R. im Jahr 1920.",
          path: "Tschechisch (robota) → Roboter"
        },
        {
          word: "Zeitgeist",
          level: "medium",
          options: ["Deutsch","Griechisch","Latein","Tschechisch"],
          answer: "Deutsch",
          detail: "Von Herder und Goethe populär gemacht zur Beschreibung der intellektuellen Strömung einer Epoche.",
          path: "Deutsch → Zeitgeist"
        },
        {
          word: "Ketchup",
          level: "medium",
          options: ["Chinesisch","Deutsch","Griechisch","Latein"],
          answer: "Chinesisch",
          detail: "Von britischen Händlern aus Asien mitgebracht und später mit Tomaten abgewandelt.",
          path: "Chinesisch (ke-tsiap) → Ketchup"
        },
        {
          word: "Panik",
          level: "medium",
          options: ["Griechisch","Deutsch","Latein","Tschechisch"],
          answer: "Griechisch",
          detail: "Bezieht sich auf den altgriechischen Gott Pan, der plötzliche Furcht in Wäldern auslöste.",
          path: "Griechisch (Pan) → Panik"
        }
      ],
      storychain: [
        { prompt: 'An einem regnerischen Dienstag fand Max einen alten Schlüssel in seiner Tasche…', level: 'starter' },
        { prompt: 'Der Zug hielt an einer Station, die auf keiner Karte verzeichnet war…', level: 'elementary' },
        { prompt: 'Ein mysteriöser Brief lag morgens auf dem Küchentisch ohne Absender…', level: 'intermediate' },
        { prompt: 'Als der Strom in der gesamten Stadt ausfiel, bemerkte Sophie ein seltsames Leuchten…', level: 'upper_intermediate' },
        { prompt: 'Auf dem Dachboden des alten Hauses entdeckte Anton ein Tagebuch aus dem Jahr 1888…', level: 'advanced' }
      ]
    };

    window.gameData = window.gameData || {};
    window.gameData['de'] = data;
})();