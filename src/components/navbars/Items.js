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
    label: 'À propos',
    label_en: 'About',
    position: (window.innerHeight)
  },
  {
    label: 'Mes projets',
    label_en: 'My projects',
    position: (2 * window.innerHeight)
  },
  {
    label: 'Mes formations',
    label_en: 'Education'
  },
  {
    label: 'Mes outils',
    label_en: 'My tools'
  },
];

export default Items;
