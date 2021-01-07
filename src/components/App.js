import React, { Fragment } from 'react';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import ContactBtn from './buttons/ContactBtn';

const App = () => {
  return (
    <div id='global-div'>
      <Home />
      <Apropos />
    </div>
  );
};

export default App;
