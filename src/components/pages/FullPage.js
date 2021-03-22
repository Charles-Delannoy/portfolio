import React, { useState, useEffect } from 'react';
import GlobalNavbar from '../navbars/GlobalNavbar';
import Home from './Home';
import Apropos from './Apropos';
import Projet from './Projet';
import Formations from './Formations';
import Outils from './Outils';
import styled from 'styled-components';

const Wrapper = styled.div`
  -webkit-overflow-scrolling: touch;
`;

const FullPage = ({ language, onLanguageClick }) => {

  const [top, setTop] = useState(0);
  // const [position, setPosition] = useState(window.scrollY)
  const [sectionHeight, setSectionHeight] = useState(0);
  const [pos, setPos] = useState(0);

  const btnIds = ['top-logo', 'about', 'project', 'education', 'tools']

  const scrollListen = (e) => {
    if (sectionHeight === 0) {
      setSectionHeight(document.body.clientHeight / 5);
    };
    // const heightArray = [0, sectionHeight, 2*sectionHeight, 3*sectionHeight, 4*sectionHeight];
    let scrollValue = top;
    let way = 0;
    if (window.scrollY > scrollValue) {
      way = 1
      const newPos = pos + 1;
      setPos(newPos);
      // console.log(newPos);
      scrollValue = newPos * sectionHeight;
      document.getElementById('contactdiv').classList.remove('contact-show')
    } else {
      way = -1
      const newPos = pos - 1;
      setPos(newPos);
      // console.log(newPos);
      scrollValue = newPos * sectionHeight;
      document.getElementById('contactdiv').classList.remove('contact-show')
    }

    scrollValue = scrollValue < 0 ? 0 : scrollValue;

    if (scrollValue >= 0 && scrollValue <= document.body.clientHeight) {
      const btnIndex = pos + way;
      stopFullPageListener(scrollValue, btnIndex);
    }
  }

  const stopFullPageListener = (scrollValue, btnIndex = null) => {
    document.removeEventListener('scroll', scrollListen);
    if (btnIndex != null && btnIndex >= 0 && btnIndex <= 4) {
      document.getElementById(btnIds[btnIndex]).click();
    } else {
      window.scrollTo({ top: scrollValue, behavior: 'smooth' });
    }
    setTimeout(() => setTop(scrollValue), 1000);
  }

  const fullPageScroll = () => {
    document.addEventListener("scroll", scrollListen);
  };

  useEffect(() => {
    fullPageScroll();
  }, [])

  useEffect(() => {
    fullPageScroll();
  }, [top, sectionHeight])


  return (
    <Wrapper>
      <GlobalNavbar language={language} onLanguageClick={onLanguageClick} fullPageScroll={fullPageScroll} stopFullPageListener={stopFullPageListener} setPos={setPos} />
      <Home language={language} onLanguageClick={onLanguageClick} fullPageScroll={fullPageScroll} stopFullPageListener={stopFullPageListener} setPos={setPos} />
      <Apropos language={language} onLanguageClick={onLanguageClick}/>
      <Projet language={language}/>
      <Formations language={language}/>
      <Outils language={language}/>
    </Wrapper>
  );
};

export default FullPage;
