import React, { useState, useEffect, Fragment } from 'react';
import GlobalNavbar from '../navbars/GlobalNavbar';
import Home from './Home';
import Apropos from './Apropos';
import Projet from './Projet';
import styled from 'styled-components';

const Wrapper = styled.div`
  -webkit-overflow-scrolling: touch;
`;

const FullPage = ({ language, onLanguageClick }) => {

  const [top, setTop] = useState(0);
  const [position, setPosition] = useState(window.scrollY)

  const scrollListen = (e) => {
    const sectionHeight = document.body.clientHeight / 3;
    let scrollValue = top;
    console.log(window.scrollY, scrollValue)
    if (window.scrollY > scrollValue) {
      scrollValue = top + sectionHeight;
      console.log(scrollValue);
    } else {
      scrollValue = top - sectionHeight;
      console.log(scrollValue);
    }

    if (scrollValue >= 0 && scrollValue <= document.body.clientHeight) {
      stopFullPageListener(scrollValue)
    }
  }

  const stopFullPageListener = (scrollValue) => {
    document.removeEventListener('scroll', scrollListen);
    window.scrollTo({ top: scrollValue, behavior: 'smooth' });
    setTimeout(() => setTop(scrollValue), 1000);
  }

  const fullPageScroll = (top) => {
    document.addEventListener("scroll", scrollListen);
  };

  useEffect(() => {
    fullPageScroll(top);
  }, [])

  useEffect(() => {
    fullPageScroll(top);
  }, [top])


  return (
    <Wrapper>
      <GlobalNavbar language={language} onLanguageClick={onLanguageClick} fullPageScroll={fullPageScroll} stopFullPageListener={stopFullPageListener}/>
      <Home language={language} onLanguageClick={onLanguageClick} fullPageScroll={fullPageScroll} stopFullPageListener={stopFullPageListener}/>
      <Apropos language={language} onLanguageClick={onLanguageClick}/>
      <Projet />
    </Wrapper>
  );
};

export default FullPage;
