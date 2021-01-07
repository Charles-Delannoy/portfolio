import React, { Fragment } from 'react';
import Home from './Home';
import Apropos from './Apropos';
import ContactBtn from '../buttons/ContactBtn';

const App = ({ language, onLanguageClick }) => {
  return (
    <div id='global-div'>
      <Home language={language} onLanguageClick={onLanguageClick}/>
      <Apropos language={language}/>
    </div>
  );
};

export default App;
