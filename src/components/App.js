import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FullPage from './pages/FullPage';

const App = () => {

  const [language, setLanguage] = useState('fr');

  // useEffect(() => {
  //   if (`${window.location.origin}/` === window.location.href ) {
  //     window.location.href = `${window.location.href}fr`;
  //   } else if (!(window.location.href.split('/')[3] === 'fr' || window.location.href.split('/')[3] === 'en')) {
  //     const pathArray = window.location.href.split('/');
  //     pathArray[3] = 'fr';
  //     pathArray.length = 4;
  //     window.location.href = pathArray.join('/');
  //   } else if (window.location.href.split('/').length > 4) {
  //     const pathArray = window.location.href.split('/');
  //     pathArray.length = 4;
  //     window.location.href = pathArray.join('/');
  //   }

  //   setLanguage(window.location.href.split('/')[3])
  // }, [])

  const onLanguageClick = (e) => {
      // e.preventDefault();
      document.querySelector('.activ-language').classList.remove('activ-language');
      const newLanguage = e.target.innerText.toLowerCase();
      setLanguage(newLanguage);
      e.target.classList.add('activ-language');
    }

  return (
    <Router>
      <FullPage language={language} onLanguageClick={onLanguageClick}/>
    </Router>
  );
};

export default App;
