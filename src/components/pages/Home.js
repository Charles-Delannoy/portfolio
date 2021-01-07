import React, { useState, useEffect, Fragment } from 'react';
// My components
import ContactBtn from '../buttons/ContactBtn';
import HomeNavbar from '../navbars/HomeNavbar';
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
    color: #5E6472;
    font-size: 40px;
    line-height: 65px;
    font-weight: 100;
    padding: 0 40px;
    font-family: 'Montserrat';
    align-self: center;
    text-align: center;
    margin: 120px 30px 30px 30px;
    strong {
      font-weight: 400;
    }
  }
`;

const ImgContent = styled.div`
  height: calc(100vh - 150px);
  background-image: url(${process.env.PUBLIC_URL}/devimg.jpg);
  background-size: cover;
  background-position-y: 70%;
  width: 45vw;
`;

const FlexDescription = styled.div`
  width: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
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
  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
}

const Home = ({ language, onLanguageClick }) => {

  const [fullHeight, setFullHeight] = useState(1000);
  const [leftPos, setLeftPos] = useState(0);

  useEffect(() => {
    const newHeight = document.getElementById('global-div').clientHeight;
    setFullHeight(newHeight);
  }, [])

  document.onscroll = function(){
    let left = window.scrollY + 3;
    if (left <= 270) {
      setLeftPos(left);
    } else {
      setLeftPos(270);
    }
  };

  const text = language === 'fr' ? 'Développeur full-stack' : 'Full-stack developper';

  return (
    <Fragment>
      <div style={{position: 'absolute', height: fullHeight, width: '100%', left: `${leftPos}px`}}>
        <ContactBtn language={language}/>
      </div>
      <HomeNavbar language={language} onLanguageClick={onLanguageClick}/>
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
