import { Bird } from "./bird/models/bird";


export const BIRDS: Bird[] = [

    {
        id: 1,
        name: "Toucan",
        description: "Le toucan est un oiseau tropical connu pour son bec coloré et imposant, qui peut atteindre jusqu'à un tiers de la longueur totale de son corps. Ces oiseaux sont souvent associés aux forêts tropicales d'Amérique centrale et d'Amérique du Sud. Ils se distinguent également par leurs couleurs vives et leur plumage élégant, ce qui en fait des créatures emblématiques de la biodiversité des régions où ils résident.",
        created: new Date(),
        picture: "toucan.jpg",
        locations: ["Amérique du Sud"]
    },

    {
        id: 2,
        name: "Aigle",
        description: "L'aigle est un rapace majestueux et puissant, symbolisant souvent la force et la liberté. Avec leur envergure impressionnante et leurs serres acérées, les aigles sont des prédateurs habiles, chassant principalement des proies telles que les poissons, les mammifères et les oiseaux. Leur habitat varie selon les espèces, allant des montagnes aux plaines ouvertes en passant par les forêts denses. En raison de leur statut de prédateurs dominants, les aigles sont souvent considérés comme des symboles de pouvoir et de courage dans de nombreuses cultures à travers le monde.",
        created: new Date(),
        picture: "aigle.jpg",
        locations: ["Europe", "Asie", "Amérique du Nord"]
    },

    {
        id: 3,
        name: "Colibri",
        description: "Le colibri est un petit oiseau joyeux et coloré, souvent associé à la beauté et à la légèreté. Avec leurs battements d'ailes rapides et leurs plumes éclatantes, les colibris sont des acrobates aériens qui se nourrissent principalement du nectar des fleurs. Leur petite taille et leur agilité leur permettent de voler dans toutes les directions et même de rester en suspension en l'air. Les colibris sont souvent admirés pour leur énergie infatigable et leur capacité à apporter de la joie dans les jardins et les paysages où ils résident.",
        created: new Date(),
        picture: "colibri.jpg",
        locations: ["Europe", "Asie", "Amérique du Nord"]
    },
    {
        id: 4,
        name: "Perroquet",
        description: "Le perroquet est un oiseau exotique et coloré, connu pour sa capacité à imiter les sons et les paroles humaines. Avec leur plumage vif et leur intelligence remarquable, les perroquets sont des compagnons populaires dans de nombreux foyers à travers le monde. Leur capacité à apprendre et à répéter des mots et des phrases en fait des animaux de compagnie fascinants et divertissants. En plus de leur personnalité enjouée, les perroquets sont également des créatures sociales qui apprécient l'interaction avec les humains et d'autres membres de leur espèce.",
        created: new Date(),
        picture: "perroquet.jpg",
        locations: ["Europe", "Asie", "Amérique du Nord"]
    },
    {
        id: 5,
        name: "Paon",
        description: "Le paon est un oiseau majestueux et gracieux, célèbre pour sa splendeur et sa beauté extravagante. Les mâles sont particulièrement remarquables pour leur plumage coloré et leurs magnifiques plumes caudales, qu'ils déploient dans des éventails éblouissants lors de leurs parades nuptiales. Les paons sont souvent associés à la royauté, à la grâce et à la magnificence dans de nombreuses cultures à travers le monde. En plus de leur apparence spectaculaire, ils émettent également des appels distinctifs qui résonnent dans les paysages où ils résident, ajoutant une touche de mystère et d'élégance à leur présence.",
        created: new Date(),
        picture: "paon.jpg",
        locations: ["Asie"]
    },
    {
        id: 6,
        name: "Martin Pêcheur d'Europe",
        description: "Le martin-pêcheur d'Europe est un petit oiseau aquatique, reconnaissable à ses couleurs vives et à son plumage brillant de bleus et de verts. Il est souvent associé aux cours d'eau, aux lacs et aux marais où il chasse ses proies aquatiques, telles que les poissons et les insectes, en plongeant rapidement depuis des perchoirs surplombant l'eau. Le martin-pêcheur est non seulement un symbole de beauté naturelle, mais aussi un indicateur de la santé des écosystèmes aquatiques où il réside. Sa présence est souvent synonyme de habitats d'eau douce bien préservés.",
        created: new Date(),
        picture: "martin-pecheur-europe.jpg",
        locations: ["Europe"]
    },
    {
        id: 7,
        name: "Merle noir",
        description: "Le merle noir est un oiseau chanteur répandu, souvent associé aux parcs, jardins et forêts. Les mâles ont un plumage noir avec un bec jaune vif, tandis que les femelles ont un plumage brun plus terne. Ils sont appréciés pour leur chant mélodieux qui résonne à travers les paysages où ils résident",
        created: new Date(),
        picture: "merle-noir.jpg",
        locations: ["Europe", "Asie", "Amérique du Nord"]
    },
    {
        id: 8,
        name: "Mésange bleue",
        description: "Reconnaissable à son plumage bleu et jaune vif, la mésange bleue est un petit oiseau commun dans de nombreux jardins européens. Elle est connue pour sa vivacité et son agilité lorsqu'elle se déplace dans les branches à la recherche de nourriture, principalement des insectes, des graines et des baies.",
        created: new Date(),
        picture: "mesange-bleue.jpg",
        locations: ["Europe", "Amérique du Nord"]
    },
    {
        id: 9,
        name: "Cygne",
        description: "Le cygne est un oiseau majestueux et gracieux, connu pour sa beauté et son élégance. Avec son long cou incurvé et son plumage blanc immaculé, le cygne incarne souvent la grâce et la pureté dans de nombreuses cultures à travers le monde. Il est souvent associé aux lacs, aux rivières et aux étangs, où il nage gracieusement et émet des appels mélodieux. Le cygne est également un symbole de romance et d'amour, en particulier dans la mythologie et la littérature.",
        created: new Date(),
        picture: "cygne.jpg",
        locations: ["Europe", "Océanie"]
    },
    {
        id: 10,
        name: "Canard",
        description: "Le canard est un oiseau aquatique commun, reconnaissable à son bec large et plat et à ses pattes palmées. Avec sa diversité de plumage, allant du brun terne au vert iridescent, le canard est un habitant courant des étangs, des lacs et des marais à travers le monde. Ces oiseaux sont connus pour leur capacité à nager, plonger et barboter dans l'eau à la recherche de nourriture, principalement des plantes aquatiques, des insectes et des petits poissons. Les canards sont également des migrateurs habiles, voyageant sur de longues distances chaque année pour se reproduire et hiverner dans des habitats adaptés.",
        created: new Date(),
        picture: "canard.jpg",
        locations: ["Europe", "Océanie", "Amérique du Nord", "Amérique du Sud"]
    },
    {
        id: 11,
        name: "Héron",
        description: "Le héron est un oiseau gracieux et élancé, souvent trouvé près des plans d'eau tels que les rivières, les étangs et les marécages. Reconnaissable à son long cou, à ses pattes fines et à son bec pointu, le héron est un pêcheur habile qui se nourrit principalement de poissons, de grenouilles et de crustacés. Il est souvent observé debout immobile dans l'eau peu profonde, attendant patiemment que sa proie se présente, avant de l'attraper avec un mouvement rapide de son bec. Le héron est également connu pour son envol majestueux et silencieux, ajoutant une touche de grâce à son habitat aquatique",
        created: new Date(),
        picture: "heron.jpg",
        locations: ["Europe", "Asie", "Afrique"]
    },
    {
        id: 12,
        name: "Flamant rose",
        description: "Le flamant rose est un oiseau aquatique emblématique, reconnaissable à son plumage rose vif et à son long cou sinueux. Avec ses pattes fines et ses grands pieds palmés, le flamant rose est souvent trouvé dans les zones humides peu profondes telles que les lagunes, les marais salants et les mangroves. Ces oiseaux se nourrissent principalement de petits crustacés et d'organismes aquatiques, qu'ils filtrent à travers leur bec courbé en forme de filtre. Le flamant rose est également connu pour ses grands rassemblements spectaculaires, où des milliers d'oiseaux se rassemblent pour se nourrir et se reproduire, créant une image saisissante de la nature sauvage.",
        created: new Date(),
        picture: "flamant-rose.jpg",
        locations: ["Amérique Centrale", "Amérique du Sud"]
    }
];