
const tools = {
  // LANGUAGES
  ruby: {
    id: 'tool-1',
    label: 'Ruby',
    logo: 'ruby.png'
  },
  js: {
    id: 'tool-2',
    label: 'Javascript',
    logo: 'JS.png'
  },
  html: {
    id: 'tool-3',
    label: 'HTML5',
    logo: 'html.png'
  },
  css: {
    id: 'tool-4',
    label: 'CSS3',
    logo: 'css.png'
  },
  // FRAMEWORKS
  rails: {
    id: 'tool-5',
    label: 'Ruby on Rails',
    logo: 'rails.png'
  },
  react: {
    id: 'tool-6',
    label: 'REACT (JS)',
    logo: 'react.png'
  },
  bootsrap: {
    id: 'tool-7',
    label: 'Boostrap',
    logo: 'bootstrap.png'
  },
  semantic: {
    id: 'tool-8',
    label: 'Semantic UI',
    logo: 'semantic.png'
  },
  // BDD
  postgre: {
    id: 'tool-9',
    label: 'PostgreSQL',
    logo: 'postgre.png'
  },
  mysql: {
    id: 'tool-10',
    label: 'MySQL',
    logo: 'mysql.png'
  },
  // HOSTING
  heroku: {
    id: 'tool-11',
    label: 'Heroku',
    logo: 'heroku.png'
  },
  ovh: {
    id: 'tool-12',
    label: 'OVH',
    logo: 'ovh.png'
  },
  namecheap: {
    id: 'tool-13',
    label: 'NameCheap',
    logo: 'namecheap.png'
  },
  // OTHERS
  figma: {
    id: 'tool-14',
    label: 'Figma',
    logo: 'figma.png'
  },
  fontawesome: {
    id: 'tool-15',
    label: 'Font Awesome',
    logo: 'fontawesome.png'
  },
  unsplash: {
    id: 'tool-16',
    label: 'Unsplash',
    logo: 'unsplash.png'
  },
  gfonts: {
    id: 'tool-17',
    label: 'Google Fonts',
    logo: 'gfonts.png'
  },
  stimulus: {
    id: 'tool-18',
    label: 'Stimulus',
    logo: 'stimulus.png'
  },
  redis: {
    id: 'tool-19',
    label: 'Redis',
    logo: 'redis.png'
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
    logos: [tools['rails'], tools['stimulus'], tools['react'], tools['bootsrap'], tools['semantic']]
  },
  {
    id: 3,
    label: 'Bases de données',
    label_en: 'Database',
    logos: [tools['postgre'], tools['mysql'], tools['redis']]
  },
  {
    id: 4,
    label: 'Hebergement / Noms de domaine',
    label_en: 'Hosting / Domain Names',
    logos: [tools['heroku'], tools['ovh'], tools['namecheap']]
  },
  {
    id: 5,
    label: 'Divers',
    label_en: 'Miscellaneous',
    logos: [tools['figma'], tools['fontawesome'], tools['unsplash'], tools['gfonts']]
  }
];

export default ToolsItems;
