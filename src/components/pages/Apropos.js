import React, { Fragment } from 'react';
// Media Queries
import { mediaQueries } from "../mediaQueries/MediaQueries"
// My components
import MainTitle from '../styled/MainTitle';
import Wrapper from '../styled/Wrapper';
// External librairies
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  height: calc(100vh - 200px);
  p {
    align-self: center;
    font-family: 'Montserrat';
    font-size: 1.8vw;
    line-height: 4.7vh;
    margin-bottom: 150px;
    margin-right: 10vw;
    font-weight: 200;
    border-left: thin solid #dce4e8;
    padding-left: 30px;
    ${mediaQueries('tab')`
      align-self: center;
      margin: 0 7vw;
      padding-left: 0;
      align-self: center;
      border: none;
      font-size: 3vw;
    `};
    ${mediaQueries('phone')`
      font-size: 4.8vw;
      line-height: 6.7vw;
      margin: 0;
      color: black;
    `};
  }
  strong {
    font-weight: 100;
    background-image: linear-gradient(120deg,#e1f0f6 0%,#e1f0f6 0%);
    background-repeat: no-repeat;
    background-size: 100% 35%;
    background-position-x: 100%;
    background-position-y: 83%;
    padding: 10px;
    color: #14637b;
    ${mediaQueries('phone')`
      background-size: 100% 20%;
      background-position-y: 68%;
    `};
  }
  ${mediaQueries('tab')`
    flex-direction: column-reverse;
  `};
  ${mediaQueries('phone')`
    height: calc(100vh - 100px);
  `};
`;

const ProfilePic = styled.img`
  width: 40%;
  align-self: flex-end;
  ${mediaQueries('tab')`
    align-self: flex-start;
    height: 30%;
    width: auto;
  `};
  ${mediaQueries('phone')`
    position: relative;
    bottom: 1px;
  `};
`;

const TextWrapper = styled.div`
  display: flex;
  ${mediaQueries('tab')`
    height: 100%;
    border-bottom: thin solid #dce4e8;
    border-top: thin solid #dce4e8;
    margin: 0 7vw;
    margin-bottom: 40px;
  `};
  ${mediaQueries('phone')`
    margin-bottom: 0;
  `};
`;

const Apropos = ({ language, onLanguageClick }) => {

  const Title = language === 'fr' ? 'À Propos' : 'About';

  const text = language === 'fr' ?
    <p>
      Issu d'une formation d'<strong>ingénieur généraliste</strong>, je suis devenu <strong>consultant en Organisation et Management</strong> en 2015. <br/>
      Tout d'abord dans le secteur de la <strong>production énergétique</strong> je me suis par la suite dirigé vers <strong>l'automobile</strong> notamment dans le <strong>Marketing Digital</strong>.
      <br/>
      <br/>
      Après 5 ans j'ai décidé de revenir à mes premiers amours et de reprendre le <strong>développement web</strong> en autodidacte puis avec la formation <strong>Le Wagon</strong>.
    </p> :
    <p>
      Trained as a <strong>general engineer</strong>, I became an <strong>Organization and Management consultant</strong> in 2015. <br/>
      At first I worked for the <strong>electricity production sector</strong>, then I moved to the <strong>automotive industry</strong> particularly in <strong>Digital Marketing</strong>.
      <br/>
      <br/>
      After 5 years I decided to return to my first love by going back to <strong>web development</strong> as self-taught and then with <strong>Le Wagon</strong> bootcamp.
    </p>

  return (
    <Wrapper style={{backgroundColor: '#f8f8f8'}}>
      <MainTitle>{Title}</MainTitle>
      <Content>
        <ProfilePic src={process.env.PUBLIC_URL + '/profile.png'} alt='logo'/>
        <TextWrapper>
          {text}
        </TextWrapper>
      </Content>
    </Wrapper>
  );
};

export default Apropos;
