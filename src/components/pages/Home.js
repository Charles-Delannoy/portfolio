import React, { useState, useEffect, Fragment } from 'react';
// Media Queries
import { mediaQueries } from "../mediaQueries/MediaQueries"
// My components
import ContactBtn from '../buttons/ContactBtn';
import HomeNavbar from '../navbars/HomeNavbar';
import Contact from './pagesComponents/Contact';
// External librairies
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  min-height: calc(100vh - 150px);
  max-height: calc(100vh - 150px);
  position: relative;
`;

const ContentWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 150px);
  display: flex;
  .text {
    font-size: 40px;
    line-height: 65px;
    font-weight: 100;
    padding: 0 40px;
    font-family: 'Montserrat';
    align-self: center;
    text-align: center;
    margin: 120px 30px 30px 30px;
    color: #89c1da;
    ${mediaQueries('phone')`
      margin-top: auto;
      font-size: 30px;
      line-height: 45px;
      padding: 0;
      margin: 10vh 0px 16vh 0px;
    `};
    strong {
      font-weight: 400;
      background-image: linear-gradient(120deg,#edf2f4 0%,#edf2f4 0%);
      background-repeat: no-repeat;
      background-size: 100% 35%;
      background-position-x: 100%;
      background-position-y: 83%;
      padding: 10px;
      color: #5E6472;
    }
  }
  ${mediaQueries('phone')`
    flex-direction: column;
  `};
`;

const ImgContent = styled.div`
  height: calc(100vh - 150px);
  background-image: url(${process.env.PUBLIC_URL}/devimg.jpg);
  background-size: cover;
  background-position-y: 70%;
  width: 45vw;

  ${mediaQueries('tab')`
    background-position-x: 40%;
  `};
  ${mediaQueries('phone')`
    width: 100vw;
    background-position-y: 90%;
  `};
`;

const FlexDescription = styled.div`
  width: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  ${mediaQueries('phone')`
    width: 100vw;
  `};
`;

const BottomArrow = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  img {
    transform: rotate(-90deg);
    width: 15px;
    cursor: pointer;
  }
`;

const scrollDown = () => {
  window.scrollTo({ top: window.innerHeight + 1, behavior: 'smooth' });
}

const Home = ({ language, onLanguageClick, fullPageScroll, stopFullPageListener }) => {

  const [fullHeight, setFullHeight] = useState(1000);
  const [rightPos, setRightPos] = useState(0);

  useEffect(() => {
    const newHeight = document.body.clientHeight;
    setFullHeight(newHeight);
  }, [])

  document.onscroll = function(){
    let right = (window.scrollY + 3);
    if (right <= 270) {
      setRightPos(right);
    } else {
      setRightPos(270);
    }
  };

  const text = language === 'fr' ? 'Développeur full-stack' : 'Full-stack developper';

  return (
    <Fragment>
      <Contact language={language}/>
      <ContactBtn language={language} rightPos={rightPos}/>
      <HomeNavbar language={language} onLanguageClick={onLanguageClick} fullPageScroll={fullPageScroll} stopFullPageListener={stopFullPageListener}/>
      <Wrapper>
        <ContentWrapper>
          <ImgContent/>
          <FlexDescription>
            <p className='text'>
              <strong>Charles DELANNOY</strong> <br/>{text}
            </p>

            <BottomArrow>
              <img src={process.env.PUBLIC_URL + '/arrow.png'} alt='arrow' onClick={scrollDown}/>
            </BottomArrow>
          </FlexDescription>
        </ContentWrapper>
      </Wrapper>
    </Fragment>
  );
};

export default Home;
