import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FullPage from './pages/FullPage';

const App = () => {

  const [language, setLanguage] = useState('fr');

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
