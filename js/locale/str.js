/* str.js
  Provides a function to get a localized version of a specific String, and all hardcoded information.
  -str.get(type,id) - get a String from the [type] property, at index [id]. Uses the user's language setting by default. Example:
  str.get("label",1) will return "Body" if the user's language is English, or "Châssis" if the user's language is French
  
  Current languages:
  ["English (NA)","English (EU)","French (NA)","French (EU)","German"]
*/

var str = {
  get:function(type,id){
    return str[type][id][settings.locale];
  },

  buildHeader: [["Build #1","Build #1","Ensemble #1","Ensemble #1","Kombination #1"],
                ["Build #2","Build #2","Ensemble #2","Ensemble #2","Kombination #2"]],

  partSelectHeader: [["Build #1 Part Select","Build #1 Part Select","Pièces d'ensemble #1","Pièces d'ensemble #1","Teile Auswahl für Kombination #1"],
                     ["Build #2 Part Select","Build #2 Part Select","Pièces d'ensemble #2","Pièces d'ensemble #2","Teile Auswahl für Kombination #1"]],

  label: [["Character","Character","Personnage","Personnage","Charakter"],
          ["Body","Body","Châssis","Châssis","Fahrwerk"],
          ["Tires","Tyres","Roues","Roues","Reifen"],
          ["Glider","Glider","Parachute","Parachute","Gleitschirm"]],

  stat: [["Speed","Speed","Vitesse","Vitesse","Tempo"],
         ["Speed (Air)","Speed (Air)","Vitesse (Air)","Vitesse (Air)","Tempo (Luft)"],
         ["Acceleration","Acceleration","Accélération","Accélération","Beschleunigung"],
         ["Speed (Water)","Speed (Water)","Vitesse (Eau)","Vitesse (Eau)","Tempo (Wasser)"],
         ["Weight","Weight","Poids","Poids","Gewicht"],
         ["Speed (Grav)","Speed (Grav)","Vitesse (AG)","Vitesse (AG)","Tempo (Erde)"],
         ["Handling","Handling","Maniabilité","Maniabilité","Handling"],
         ["Handling (Air)","Handling (Air)","Maniabilité (Air)","Maniabilité (Air)","Tempo (Luft)"],
         ["Traction","Grip","Adhérence","Adhérence","Haftung"],
         ["Handling (Water)","Handling (Water)","Maniabilité (Eau)","Maniabilité (Eau)","Tempo (Wasser)"],
         ["Miniturbo","Miniturbo","Miniturbo","Miniturbo","Miniturbo"],
         ["Handling (Grav)","Handling (Grav)","Maniabilité (AG)","Maniabilité (AG)","Tempo (Erde)"]],

  optionsHeaders: [["Part Selection","Part Selection","Sélection de pièces","Sélection de pièces","Teile Auswahl"],
                   ["Sort By","Sort By","Trier par","Trier par","Sortieren nach"],
                   ["Display Mode","Display Mode","Mode d'affichage","Mode d'affichage","Anzeigemodus"]],
  partOptions: [["All Parts","All Parts","Toutes les pièces","Toutes les pièces","Alle Teile"],
                ["Unique Groups","Unique Groups","Groupes uniques","Groupes uniques","Eindeutige Gruppen"]],
  sortOptions: [["Default","Default","Défaut","Défaut","Standard"],
                ["Name","Name","Prénom","Prénom","Name"]],
  sortOrder: [["Ascending Order","Ascending Order","Ordre croissant","Ordre croissant","Aufsteigend"],
              ["Descending Order","Descending Order","Ordre décroissant","Ordre décroissant","Absteigend"]],
  displayMode: [["Individual Stats","Individual Stats","Individuellement","Individuellement","Einzelstatistik"],
                ["Search (Simple)","Search (Simple)","Rechercher (simple)","Rechercher (simple)","Suche (einfach)"],
                ["Search (Custom)","Search (Custom)","Rechercher (personnalisée)","Rechercher (personnalisée)","Suche (personalisiert)"]],

  chara: [["Mario","Mario","Mario","Mario","Mario"],
          ["Luigi","Luigi","Luigi","Luigi","Luigi"],
          ["Peach","Peach","Peach","Peach","Peach"],
          ["Daisy","Daisy","Daisy","Daisy","Daisy"],
          ["Rosalina","Rosalina","Rosalina","Rosalina","Rosalina"],
          ["Tanooki Mario","Tanooki Mario","Mario tanooki","Mario tanooki","Tanooki Mario"],
          ["Cat Peach","Cat Peach","Peach chat","Peach chat","Katzen-Peach"],
          ["Yoshi","Yoshi","Yoshi","Yoshi","Yoshi"],
          ["Toad","Toad","Toad","Toad","Toad"],
          ["Koopa","Koopa","Koopa","Koopa","Koopa"],
          ["Shy Guy","Shy Guy","Maskache","Maskass","Shy Guy"],
          ["Lakitu","Lakitu","Lakitou","Lakitu","Lakitu"],
          ["Toadette","Toadette","Toadette","Toadette","Toadette"],
          ["King Boo","King Boo","Roi Boo","Roi Boo","König Buu Huu"],
          ["Baby Mario","Baby Mario","Bébé Mario","Bébé Mario","Baby Mario"],
          ["Baby Luigi","Baby Luigi","Bébé Luigi","Bébé Luigi","Baby Luigi"],
          ["Baby Peach","Baby Peach","Bébé Peach","Bébé Peach","Baby Peach"],
          ["Baby Daisy","Baby Daisy","Bébé Daisy","Bébé Daisy","Baby Daisy"],
          ["Baby Rosalina","Baby Rosalina","Bébé Rosalina","Bébé Rosalina","Baby Rosalina"],
          ["Metal Mario","Metal Mario","Mario de métal","Mario de métal","Metall-Mario"],
          ["Pink Gold Peach","Pink Gold Peach","Peach d'or rose","Peach d'or rose","Rosagold-Peach"],
          ["Wario","Wario","Wario","Wario","Wario"],
          ["Waluigi","Waluigi","Waluigi","Waluigi","Waluigi"],
          ["Donkey Kong","Donkey Kong","Donkey Kong","Donkey Kong","Donkey Kong"],
          ["Bowser","Bowser","Bowser","Bowser","Bowser"],
          ["Dry Bones","Dry Bones","Skelex","Skelerex","Knochentrocken"],
          ["Bowser Jr.","Bowser Jr.","Bowser Jr.","Bowser Jr.","Bowser Jr."],
          ["Dry Bowser","Dry Bowser","Bowser Skelet","Bowser Skelet","Knochenbowser"],
          ["Lemmy","Lemmy","Lemmy","Lemmy","Lemmy"],
          ["Larry","Larry","Larry","Larry","Larry"],
          ["Wendy","Wendy","Wendy","Wendy","Wendy"],
          ["Ludwig","Ludwig","Ludwig","Ludwig","Ludwig"],
          ["Iggy","Iggy","Iggy","Iggy","Iggy"],
          ["Roy","Roy","Roy","Roy","Roy"],
          ["Morton","Morton","Morton","Morton","Morton"],
          ["Inkling Girl","Inkling Girl","Fille inkling","Fille inkling","Inkling-Mädchen"],
          ["Inkling Boy","Inkling Boy","Garçon inkling","Garçon inkling","Inkling-Junde"],
          ["Link","Link","Link","Link","Link"],
          ["Villager (M)","Villager (M)","Habitant","Villageois","Bewohner"],
          ["Villager (F)","Villager (F)","Habitante","Villageoise","Bewohnerin"],
          ["Isabelle","Isabelle","Marie","Marie","Melinda"],
          ["Mii (Light)","Mii (Light)","Mii (léger)","Mii (léger)","Mii (leicht)"],
          ["Mii (Medium)","Mii (Medium)","Mii (moyen)","Mii (moyen)","Mii (mittel)"],
          ["Mii (Heavy)","Mii (Heavy)","Mii (lourd)","Mii (lourd)","Mii (schwer)"]],

  kart: [["Standard Kart","Standard Kart","Kart standard","Kart standard","Standard-Kart"],
         ["Pipe Frame","Pipe Frame","Rétro","Rétro","Go-Kart"],
         ["Mach 8","Mach 8","Mach 8","Proto 8","Turboflitzer"],
         ["Steel Driver","Steel Driver","Nauticomobile","Nautomobile","U-Kart"],
         ["Cat Cruiser","Cat Cruiser","Chabriolet","Chabriolet","Katzen-Cabrio"],
         ["Circuit Special","Circuit Special","Rapido","Mach-célère","Rennwagen"],
         ["Tri-Speeder","Tri-Speeder","Tubul R3","Tubul R3","Dreirad-Bolide"],
         ["Badwagon","Badwagon","Stéréo-bolide","Beat-bolide","Cool-Cabrio"],
         ["Prancer","Prancer","Deux-chevaux","Cavalkart","Kirmes-Droschke"],
         ["Biddybuggy","Buggybud","Paracoccinelly(?)","Paracoccinelly","Pünktchen-Kart"], //Check: [2]
         ["Landship","Landship","Batea roulant","Caravéloce","PS-Galeere"],
         ["Sneeker","Bounder","Espakart","Sneakart","Sauseschuh"],
         ["Sports Coupe","Sports Coupé","Coupé sport","Propulsar","Sportcoupé"],
         ["Gold Standard","Gold Kart","Or","Or","Gold-Kart"],
         ["GLA","GLA","GLA","GLA","GLA"],
         ["W 25 Silver Arrow","W 25 Silver Arrow","W25 Flèche d'argent","W25 Flèche d'argent","W 25 Silberpfeil"],
         ["300 SL Roadster","300 SL Roadster","300 SL Roadster","300 SL Roadster","300 SL Roadster"],
         ["Blue Falcon","Blue Falcon","Blue Falcon","Blue Falcon","Blue Falcon"],
         ["Tanooki Kart","Tanooki Kart","Buggy tanuki","Buggy tanuki","Tanuki-Buggy"], //Check: [2]
         ["B Dasher","B Dasher","Intrépide","Intrépide","Bolide"],
         ["Streetle","Streetle","Autorhino","Autorhino","Fichtenbock"],
         ["P-Wing","P-Wing","Magikart","Magikart","Flügel-Raser"],
         ["Koopa Clown","Koopa Clown","Clown Koopa","Clown Koopa","Clown-Kutsche"], //Check: [3]
         ["Standard Bike","Standard Bike","Moto standard","Moto standard","Standard-Bike"], //Check: [3]
         ["Comet","Comet","Turboto","Météore","Turbo-Bike"],
         ["Sport Bike","Sport Bike","Sport GP","Sport GP","Renn-Bike"], //Check: [2]
         ["The Duke","The Duke","Cybertrombe","Cybertrombe","Hyper-Bike"], //Check: [2]
         ["Flame Rider","Flame Rider","Flamboyante","Flamboyante","Flammen-Bike"],
         ["Varmint","Varmint","Mécabécane","Mécabécane","Cross-Bike"], //Check: [2]
         ["Mr. Scooty","Mr Scooty","Scootinette","Scootinette","Roller"],
         ["Jet Bike","Jet Bike","Épervier","Épervier","Jet-Bike"], //Check: [2]
         ["Yoshi Bike","Yoshi Bike","Yoshimoto","Yoshimoto","Yoshi-Bike"], //Check: [3]
         ["Master Cycle","Master Cycle","Destrier de légende","Destrier de légende","Eponator"], //Check [3]
         ["City Tripper","City Tripper","Scooter AC","Scooter AC","Fashion-Scooter"],
         ["Standard ATV","Standard Quad","VTT standard","Quad standard","Standard-Quad"],
         ["Wild Wiggler","Wild Wiggler","VTT Wiggler","Quad Wiggler","Wilder Wiggler"],
         ["Teddy Buggy","Teddy Buggy","VTT nounourse","Quad nounours","Bärchen-Bolide"],
         ["Bone Rattler","Bone Rattler","Malécycle","Malécycle","Knochenmühle"], //Check [2]
         ["Inkstriker","Inkstriker","Missile tornade","Missile tornade","Splat-Quad"], //Check [2]
         ["Splat Buggy","Splat Buggy","Kartoon","Kartoon","Tintferno-Quad"]], //Check [3]

  tire: [["Standard","Normal","Standard","Standard","Standard"],
         ["Monster","Monster","Mastodonte","Mastodonte","Riesig"],
         ["Roller","Roller","Roller","Roller","Klein"],
         ["Slim","Slim","Classique","Classique","Retro"],
         ["Slick","Slick","Lisse","Lisse","Slick"],
         ["Metal","Metal","Métal","Métal","Metall"],
         ["Button","Button","Bouton","Bouton","Knopf"],
         ["Off-Road","Off-Road","Hors-piste","Hors-piste","Rallye"],
         ["Sponge","Sponge","Éponge","Éponge","Schwamm"],
         ["Wood","Wooden","Bois","Bois","Holz"],
         ["Cushion","Cushion","Coussin","Coussin","Kissen"],
         ["Blue Standard","Normal Blue","Standard bleu","Standard bleu","Standard (blau)"],
         ["Hot Monster","Funky Monster","Masto-flamme","Masto-flamme","Riesig (orange)"],
         ["Azure Roller","Azure Roller","Roller Azure","Roller Azure","Klein (türkis)"],
         ["Crimson Slim","Crimson Slim","Classique rouge","Classique rouge","Retro (rot)"],
         ["Cyber Slick","Cyber Slick","Cyber lisse","Cyber lisse","Slick (violett)"],
         ["Retro Off-Road","Retro Off-Road","Hors-piste rétro","Hors-piste rétro","Rallye (weiß)"],
         ["Gold Tires","Gold Wheels","Or","Or","Goldräder"],
         ["GLA Tires","GLA Wheels","Roues GLA","Roues GLA","GLA"],
         ["Triforce Tires","Triforce Tyres","Roues Triforce","Roues Triforce","Triforce-Reifen"],
         ["Leaf Tires","Leaf Tyres","Roues Feuilles","Roues Feuilles","Blatt-Reifen"]],

  glider: [["Super Glider","Super Glider","Cerf-volant","Aile standard","Standard"],
           ["Cloud Glider","Cloud Glider","Ailes nuages","Ailes nuages","Wolkenballons"],
           ["Wario Wing","Wario Wing","Aile Wario","Aile Wario","Wario-Gleiter"],
           ["Waddle Wing","Waddle Wing","Dendinaile","Dendinaile","Feisthörnchen"],
           ["Peach Parasol","Peach Parasol","Ombrelle Peach","Ombrelle Peach","Sonnenschirm"],
           ["Parachute","Parachute","Parachute","Parachute","Fallschirm"],
           ["Parafoil","Parafoil","Parapente","Parapente","Gleitschirm"],
           ["Flower Glider","Flower Glider","Aile fleurie","Aile fleurie","Blumengleiter"],
           ["Bowser Kite","Bowser Kite","Bowser-volant","Bowser-volant","Bowser-Gleiter"],
           ["Plane Glider","Plane Glider","Planeur","Planeur","Segelflieger"],
           ["MKTV Parafoil","MKTV Parafoil","Parapente MKTV","Parapente MKTV","MKTV-Gleiter"],
           ["Gold Glider","Gold Glider","Or","Or","Goldgleiter"],
           ["Hylian Kite","Hylian Kite","Voile Hylienne","Voile Hylienne","Hyrule-Gleiter"],
           ["Paper Glider","Paper Glider","Avion en papier","Avion en papier","Papierflieger"]],

  group: [["Light","Light","Léger","Léger","Leicht"],
          ["Medium","Medium","Moyen","Moyen","Mittel"],
          ["Heavy","Heavy","Lourd","Lourd","Schwer"],
          ["Body Group","Body Group","Châssis","Châssis","Fahrwerk-Gruppe"],
          ["Tire Group","Tyre Group","Roues","Roues","Reifen-Gruppe"],
          ["Glider Group","Glider Group","Parachutes","Parachutes","Gleitschirm-Gruppe"]],

  init: function(){
    //Copy repeat strings to new arrays
    var statOrder = [0,2,4,6,8,10,1,3,5,7,9,11];
    for(var i=0;i<statOrder.length;i++)
      str.sortOptions[i+2] = str.stat[statOrder[i]];
  }
};
