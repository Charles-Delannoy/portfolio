import React, { Fragment } from 'react';
import GlobalNavbar from '../navbars/GlobalNavbar';
import Home from './Home';
import Apropos from './Apropos';
import Projet from './Projet';
import ContactBtn from '../buttons/ContactBtn';

let pos = window.scrollY;
document.onscroll = function(){

};

const App = ({ language, onLanguageClick }) => {
  return (
    <div id='global-div'>
      <GlobalNavbar language={language} onLanguageClick={onLanguageClick}/>
      <Home language={language} onLanguageClick={onLanguageClick}/>
      <Apropos language={language} onLanguageClick={onLanguageClick}/>
      <Projet />
    </div>
  );
};

export default App;
