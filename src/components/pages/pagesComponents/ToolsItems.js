
const tools = {
  ruby: {
    label: 'Ruby',
    logo: 'ruby.png'
  },
  js: {
    label: 'Javascript',
    logo: 'JS.png'
  },
  html: {
    label: 'HTML5',
    logo: 'html.png'
  },
  css: {
    label: 'CSS3',
    logo: 'css.png'
  },
  rails: {
    label: 'Ruby on Rails',
    logo: 'rails.png'
  },
  react: {
    label: 'REACT (JS)',
    logo: 'react.png'
  },
  bootsrap: {
    label: 'Boostrap',
    logo: 'bootstrap.png'
  },
  semantic: {
    label: 'Semantic UI',
    logo: 'semantic.png'
  },
  postgre: {
    label: 'PostgreSQL',
    logo: 'postgre.png'
  },
  mysql: {
    label: 'MySQL',
    logo: 'mysql.png'
  },
  heroku: {
    label: 'Heroku',
    logo: 'heroku.png'
  },
  ovh: {
    label: 'OVH',
    logo: 'ovh.png'
  },
  namecheap: {
    label: 'NameCheap',
    logo: 'namecheap.png'
  },
  figma: {
    label: 'Figma',
    logo: 'figma.png'
  },
  fontawesome: {
    label: 'Font Awesome',
    logo: 'fontawesome.png'
  },
  unsplash: {
    label: 'Unsplash',
    logo: 'unsplash.png'
  },
  gfonts: {
    label: 'Google Fonts',
    logo: 'gfonts.png'
  }
}

const ToolsItems = [
  {
    id: 1,
    label: 'Languages',
    label_en: 'Languages',
    logos: [tools['ruby'], tools['js'], tools['html'], tools['css']]
  },
  {
    id: 2,
    label: 'Frameworks / Librairies front',
    label_en: 'Frameworks / Front librairies',
    logos: [tools['rails'], tools['react'], tools['bootsrap'], tools['semantic']]
  },
  {
    id: 2,
    label: 'Bases de données',
    label_en: 'Database',
    logos: [tools['postgre'], tools['mysql']]
  },
  {
    id: 2,
    label: 'Hebergement / Noms de domaine',
    label_en: 'Hosting / Domain Names',
    logos: [tools['heroku'], tools['ovh'], tools['namecheap']]
  },
  {
    id: 2,
    label: 'Divers',
    label_en: 'Miscellaneous',
    logos: [tools['figma'], tools['fontawesome'], tools['unsplash'], tools['gfonts']]
  }
];

export default ToolsItems;
