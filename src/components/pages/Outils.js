import React, { Fragment } from 'react';
// My components
import MainTitle from '../styled/MainTitle';
import Wrapper from '../styled/Wrapper';
import ToolsItems from './pagesComponents/ToolsItems';
// External librairies
import styled from 'styled-components';

const Content = styled.div`
  height: calc(100vh - 200px);
  padding: 0 5%;
`;

const Section = styled.div`
  height: 15%;
  margin-bottom: 25px;
  position: relative;
  border: thin solid #dce4e8;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    position: absolute;
    top: -20%;
    display: inline-block;
    h2 {
      font-family: 'Montserrat';
      font-size: 28px;
      font-weight: 400;
      background: #fff;
      text-align: center;
      padding: 0 20px;
      margin: 0 auto;
    }
  }
  .logos {
    position: relative;
    height: 50%;
    img {
      height: 100%;
      padding: 0 10px
    }
    .logo-description {
      display: none;
      text-align: center;
      color: #fff;
      background: #000;
      border-radius: 5px;
      width: 150%;
      margin: 0 quto;
      line-height: 30px;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      top:-65%;
      left: -25%;
      p {
        margin: 0;
      }
      img {
        height: 10px;
        width: 20px;
        position: absolute;
        bottom:-8px;
        left: calc(50% - 20px);
      }
    }
    &:hover {
      .logo-description {
      display: flex;
    }
    }
  }
`;

const Outils = ({ language, onLanguageClick }) => {

  const title = language ==='fr' ? 'Mes Outils' : 'My Tools'

  const sections = ToolsItems.map((section) => {

    const logos = section.logos.map((item) => {
      return (
        <div className='logos'>
          <img src={process.env.PUBLIC_URL + `/${item.logo}`} alt={item.label}/>
          <div className='logo-description'>
            <p>{item.label}</p>
            <img src={process.env.PUBLIC_URL + `/bottom-arrow.png`} alt={item.label}/>
          </div>
        </div>
      );
    })

    const title = language === 'fr' ? section.label : section.label_en;

    return (
      <Section>
        <div className='title'><h2>{title}</h2></div>
        {logos}
      </Section>
    );
  });

  return (
    <Wrapper style={{backgroundColor: '#fff'}}>
      <MainTitle>{title}</MainTitle>
      <Content>
        {sections}
      </Content>
    </Wrapper>
  );
};

export default Outils;
