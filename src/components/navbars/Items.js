const dynaNavbar = document.querySelector('.dynamic-navbar');

const about = (position) => {
  window.scrollTo({ top: window.innerHeight + 1, behavior: 'smooth' });
  setTimeout(function(){ dynaNavbar.classList.remove("show-navbar") }, 500);
}

const project = () => {
  window.scrollTo({ top: 2* window.innerHeight + 1, behavior: 'smooth' });
  dynaNavbar.classList.remove("show-navbar");
}

const Items = [
  {
    id: 'about',
    label: 'À propos',
    label_en: 'About',
    position: 1
  },
  {
    id: 'project',
    label: 'Mes projets',
    label_en: 'My projects',
    position: 2
  },
  {
    id: 'education',
    label: 'Mes formations',
    label_en: 'Education',
    position: 3
  },
  {
    id: 'tools',
    label: 'Mes outils',
    label_en: 'My tools',
    position: 4
  },
];

export default Items;
