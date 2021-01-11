import React, { Fragment } from 'react';

const Language = ({ language, onLanguageClick }) => {

  const pathArray = window.location.pathname.split('/');
  pathArray[1] = 'fr';
  // const frPath = pathArray.join('/');
  pathArray[1] = 'en';
  // const enPath = pathArray.join('/');

  return (
    <Fragment>
        <li>
          <a onClick={onLanguageClick} className={language === 'fr' ? 'activ-language' : ''} >FR</a>
        </li>
        <li>
          <a onClick={onLanguageClick} className={language === 'en' ? 'activ-language' : ''} >EN</a>
        </li>
    </Fragment>
  );
}

export default Language;
