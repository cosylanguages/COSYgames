(function() {
    const falseFriendsData = [
      {
        wordA: { lang: "ru", word: "Магазин (magazin)", meaning: "store/shop" },
        wordB: { lang: "fr", word: "Magasin", meaning: "shop / warehouse" },
        relation: "cognate-but-diverged",
        detail: "Both derive from Arabic makhāzin (storehouses). In French, it evolved to mean 'store/shop', which Russian borrowed directly."
      },
      {
        wordA: { lang: "de", word: "Handy", meaning: "mobile phone" },
        wordB: { lang: "en", word: "Handy", meaning: "useful / convenient" },
        relation: "coincidental-look-alike",
        detail: "German 'Handy' is a pseudo-anglicism for a mobile phone, while English 'handy' means convenient or dextrous. They are false friends."
      },
      {
        wordA: { lang: "it", word: "Camera", meaning: "room / chamber" },
        wordB: { lang: "en", word: "Camera", meaning: "optical device for photography" },
        relation: "cognate-but-diverged",
        detail: "Both come from Latin camera (vaulted room). English 'camera' is short for 'camera obscura' (dark room), while Italian kept 'room'."
      },
      {
        wordA: { lang: "pt", word: "Pretender", meaning: "to intend / plan" },
        wordB: { lang: "en", word: "Pretend", meaning: "to feign / fake" },
        relation: "cognate-but-diverged",
        detail: "From Latin praetendere (to hold out/claim). Portuguese retains 'to intend/aspire', whereas English shifted to 'to feign'."
      },
      {
        wordA: { lang: "es", word: "Embarazada", meaning: "pregnant" },
        wordB: { lang: "en", word: "Embarrassed", meaning: "ashamed / self-conscious" },
        relation: "cognate-but-diverged",
        detail: "Spanish 'embarazada' comes from Portuguese embaraçar (to hinder/encumber), in Spanish shifted to pregnant; English 'embarrassed' evolved to feeling awkward."
      },
      {
        wordA: { lang: "fr", word: "Actuellement", meaning: "currently / at present" },
        wordB: { lang: "en", word: "Actually", meaning: "in fact / really" },
        relation: "cognate-but-diverged",
        detail: "From Late Latin actualis. French kept the temporal meaning 'right now', while English developed the factual/truth-confirming sense."
      },
      {
        wordA: { lang: "de", word: "Gift", meaning: "poison" },
        wordB: { lang: "en", word: "Gift", meaning: "present / donation" },
        relation: "cognate-but-diverged",
        detail: "Proto-Germanic *giftiz (giving). English kept 'present', while High German narrowed it euphemistically to 'poison/potion'."
      },
      {
        wordA: { lang: "es", word: "Éxito", meaning: "success" },
        wordB: { lang: "en", word: "Exit", meaning: "way out" },
        relation: "cognate-but-diverged",
        detail: "Both from Latin exitus (outgoing/outcome). Spanish 'éxito' focused on 'successful outcome', while English kept 'departure/way out'."
      },
      {
        wordA: { lang: "ru", word: "Фамилия (familiya)", meaning: "surname / last name" },
        wordB: { lang: "en", word: "Family", meaning: "household / relatives" },
        relation: "cognate-but-diverged",
        detail: "From Latin familia (household). Russian borrowed it via German for 'family/surname', but used it specifically for 'family name'."
      },
      {
        wordA: { lang: "it", word: "Fattoria", meaning: "farm" },
        wordB: { lang: "en", word: "Factory", meaning: "manufacturing plant" },
        relation: "cognate-but-diverged",
        detail: "Both from Latin factorium. Italian 'fattoria' is an agricultural farm, whereas English 'factory' became an industrial plant."
      },
      {
        wordA: { lang: "es", word: "Constipado", meaning: "having a cold / congested" },
        wordB: { lang: "en", word: "Constipated", meaning: "bowel obstruction" },
        relation: "cognate-but-diverged",
        detail: "From Latin constipare (to crowd together). Spanish 'constipado' refers to nasal cold congestion, English to digestive blockage."
      },
      {
        wordA: { lang: "fr", word: "Demander", meaning: "to ask / request" },
        wordB: { lang: "en", word: "Demand", meaning: "to order / insist" },
        relation: "cognate-but-diverged",
        detail: "From Latin demandare (to entrust/request). French 'demander' is simply 'to ask', while English 'demand' is much more forceful."
      },
      {
        wordA: { lang: "de", word: "Also", meaning: "so / therefore" },
        wordB: { lang: "en", word: "Also", meaning: "in addition / too" },
        relation: "cognate-but-diverged",
        detail: "Old High German al sō (just so). German 'also' functions as 'so/therefore', while English 'also' means 'in addition'."
      },
      {
        wordA: { lang: "ru", word: "Актуальный (aktualny)", meaning: "topical / relevant" },
        wordB: { lang: "en", word: "Actual", meaning: "real / existing in fact" },
        relation: "cognate-but-diverged",
        detail: "From Late Latin actualis. Russian 'актуальный' means 'relevant/current', whereas English 'actual' means 'real/factual'."
      },
      {
        wordA: { lang: "pt", word: "Livraria", meaning: "bookstore" },
        wordB: { lang: "en", word: "Library", meaning: "lending library" },
        relation: "cognate-but-diverged",
        detail: "From Latin libraria. Portuguese 'livraria' is a shop selling books; a lending library in Portuguese is 'biblioteca'."
      },
      {
        wordA: { lang: "el", word: "Εμπάθεια (empathia)", meaning: "malevolence / prejudice" },
        wordB: { lang: "en", word: "Empathy", meaning: "understanding another's feelings" },
        relation: "cognate-but-diverged",
        detail: "In Ancient Greek, em-pathia meant 'passion/malice'. English adopted it in the 20th century to translate German 'Einfühlung' (feeling-into)."
      },
      {
        wordA: { lang: "ka", word: "ჭიქα (ch'ika)", meaning: "glass / cup" },
        wordB: { lang: "hy", word: "Ճիչ (chich)", meaning: "scream / cry" },
        relation: "coincidental-look-alike",
        detail: "Georgian 'ch'ika' (glass) and Armenian 'chich' (scream) sound similar but have zero etymological relationship."
      },
      {
        wordA: { lang: "tt", word: "Дуҫ (Dost)", meaning: "friend" },
        wordB: { lang: "de", word: "Dose", meaning: "can / tin" },
        relation: "coincidental-look-alike",
        detail: "Tatar 'dost/dus' is a Persian loanword meaning 'friend', while German 'Dose' (can) has an unrelated Low German origin."
      },
      {
        wordA: { lang: "br", word: "Karr", meaning: "cart / car" },
        wordB: { lang: "de", word: "Karren", meaning: "cart / barrow" },
        relation: "cognate-but-diverged",
        detail: "Breton 'karr' is a Celtic root (*karros) that entered Latin (carrus), giving English 'car', French 'char', and German 'Karren'."
      },
      {
        wordA: { lang: "ba", word: "Аш (Ash)", meaning: "food / soup" },
        wordB: { lang: "en", word: "Ash", meaning: "burnt residue / tree" },
        relation: "coincidental-look-alike",
        detail: "Bashkir 'ash' (food) comes from Turkic *āš, whereas English 'ash' comes from Proto-Germanic *askaz (tree/ash)."
      }
    ];

    if (typeof window !== 'undefined') {
        window.falseFriendsData = falseFriendsData;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = falseFriendsData;
    }
})();
