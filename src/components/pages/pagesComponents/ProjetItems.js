const ProjetItems = [
  {
    id: 1,
    label: 'Millesime Manager',
    link: 'http://www.millesime-manager.com/',
    github: 'https://github.com/Charles-Delannoy/Millesime-manager',
    description: ["Projet de fin de batch pour la formation Le Wagon.",
                  "Millesime Manager est une application (PWA: Progressive Web App) de gestion de cave à vin. L'atout de cette application est l'indication de la date d'apogée permettant de boire son vin au bon moment pour en apprécier tous ses arômes."],
    description_en: ["End of batch project for Le Wagon training.",
                     "Millesime Manager is a Progressive Web App (PWA) for wine cellar management. This application is based on the indication of the peak date allowing you to drink your wine at the right time to appreciate all its aromas."],
    tools: ['rails.png', 'JS.png', 'postgre.png', 'html.png', 'css.png'],
    back: 'MM-back.png',
    screen: 'MM-screen3.png',
    desktop: 'MM-desktop.png'
  },
  {
    id: 2,
    label: 'Arma',
    link: 'https://www.arma.legal/',
    github: 'Private',
    description: ["Site Web pour un cabinet d'avocat.",
                  "Le site est composé d'une API permettant de récupérer et de modifier les données du site. Une interface d'administration permet aux clients de gérer le contenu du site en toute autonomie. Le site web récupère ces contenus pour les servir aux visiteurs."],
    description_en: ["Website for a law firm.",
                     "The site is composed of an API allowing to retrieve and modify the data of the website. An administration interface allows customers to manage the content of the website independently. The website retrieves these contents to serve them to the visitors."],
    tools: ['rails.png', 'react.png', 'postgre.png', 'html.png', 'css.png'],
    back: 'Arma-back.png',
    screen: 'arma-screen.png',
    desktop: 'AA-Desktop.png'
  },
  {
    id: 3,
    label: 'Portfolio',
    link: 'https://www.mustdev.fr/',
    github: 'https://github.com/Charles-Delannoy/portfolio',
    description: ['Présentation de mon parcours et de mes projets de developpement.',
                  "C'est le site sur lequel vous vous trouvez ! Il reprend un résumé de mon parcours, mes principaux projets en tant que développeur, mes formations et les outils que j'utilise. Bonne visite !"],
    description_en: ['Presentation of my background and my development projects.',
                     "This is the website you are on! It summarizes my background, my main projects as a developer, my trainings and the tools I am using. Enjoy your visit!"],
    tools: ['react.png', 'html.png', 'css.png'],
    back: 'PF-back.png',
    screen: 'PF-screen.png',
    desktop: 'PF-desktop.png'
  },
  {
    id: 3,
    label: 'TWI',
    link: 'ongoing',
    github: 'https://github.com/Charles-Delannoy/TeamWorkInteract',
    description: ["EN COURS : Outil d'évaluation de la dynamique d'équipes projets.",
                  "Site web permettant de gérer des groupes projets, d'y inviter des participants et de leur soumettre des questionnaires personalisés afin d'évaluer leur cohésion et de proposer des actions correctives."],
    description_en: ['IN PROGRESS: Evaluation tool for the dynamic of project teams',
                     "Website allowing to manage project groups, invite participants and submit personalized surveys in order to evaluate their cohesion and suggest corrective actions."],
    tools: ['rails.png', 'JS.png', 'postgre.png', 'html.png', 'css.png'],
    back: null,
    screen: 'TWI-screen.png',
    desktop: 'TWI-desktop.png'
  }
];

export default ProjetItems;
