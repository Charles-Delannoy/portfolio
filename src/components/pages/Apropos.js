import React, { Fragment } from 'react';
// My components
// External librairies
import styled from 'styled-components';

const MainTitle = styled.h1`
  padding-top: 50px;
  width: 300px;
  height: 150px;
  line-height: 150px;
  margin: 0 auto;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 55px;
  text-align: center;
  background-image: linear-gradient(120deg,#f3ece8 0%,#f3ece8 0%);
  background-repeat: no-repeat;
  background-size: 250px 20px;
  background-position-x: 100%;
  background-position-y: 72%;
`;

const Wrapper = styled.div`
  padding-top: 50px;
  height: calc(100vh - 200px);
  position: relative;
  display: flex;
`;

const ProfilePic = styled.img`
  height: calc(80vh - 120px);
  width: 400px;
  object-fit: cover;
  border-radius: 150px;
  position: absolute;
  left: 5vw;
`;

const FilterDiv = styled.div`
  height: calc(80vh - 120px);
  width: 400px;
  border-radius: 150px;
  position: absolute;
  left: 5vw;
  background-color: rgba(249, 232, 225, 0.4);
  z-index: 999;
`;

const PrevDiv = styled.div`
  height: calc(80vh - 170px);
  border-bottom: 50px solid #f3ece8;
  width: 18vw;
`;

const NextDiv = styled.div`
  height: calc(80vh - 170px);
  border-top: 50px solid #f3ece8;
  width: 77vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin-left: 280px;
    padding-top: 50px;
    font-size: 30px;
    font-family: 'Montserrat';
    font-weight: 300;
    line-height: 45px;
  }
  strong {
    font-weight: 600;
  }
`;

const Apropos = ({ language, onLanguageClick }) => {

  const text = language === 'fr' ?
    <p>
      Issus d'une formation d'<strong>ingénieur généraliste</strong>, je suis devenu <strong>consultant en Organisation et Management</strong> en 2015. <br/>
      Tout d'abord dans le secteur de la <strong>production énergétique</strong> je me suis par la suite dirigé vers <strong>l'automobile</strong> notamment dans le <strong>Marketing Digital</strong>.
      <br/>
      <br/>
      Après 5 ans j'ai décidé de revenir à mes premiers amours et de reprendre le <strong>développement web</strong> en autodidacte et avec la formation <strong>Le Wagon</strong>.
    </p> :
    <p>
      Trained as a <strong>general engineer</strong>, I became an <strong>Organization and Management consultant</strong> in 2015. <br/>
      At first I worked for the <strong>electricity production sector</strong>, then I moved to the <strong>automotive industry</strong> particularly in <strong>Digital Marketing</strong>.
      <br/>
      <br/>
      After 5 years I decided to return to my first love by going back to <strong>web development</strong> as self-taught and with the training <strong>Le Wagon</strong>.
    </p>

  return (
    <div style={{textAlign: 'center'}}>
      <MainTitle>À Propos</MainTitle>
      <Wrapper>
        <PrevDiv />
        <FilterDiv />
        <ProfilePic src={process.env.PUBLIC_URL + '/profile.jpeg'} alt='profile'/>
        <NextDiv>
          {text}
        </NextDiv>
      </Wrapper>
    </div>
  );
};

export default Apropos;
