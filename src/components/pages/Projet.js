import React, { Fragment } from 'react';
// My components
import MainTitle from '../styled/MainTitle';
import Wrapper from '../styled/Wrapper';
import ProjetItems from './pagesComponents/ProjetItems';
import Carroussel from './pagesComponents/Carroussel';
// External librairies
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'


const Container = styled.div`
  width: 90%;
  height: calc(100vh - 120px - 10%);
  padding: 0 5%;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
`;

const Images = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  img {
    object-fit: contain;
  }
  .desk-img {
    max-width: 70%;
    height: 100%;
  }
  .sm-img {
    max-width: 30%;
    height: 100%;
  }
`;
const Infos = styled.div`
  height: 100%;
  width: 60%;
  position: relative;
  z-index: 1000;
  font-family: 'Montserrat';
  h1 {
    color: #efefef;
    font-size: 4.2vw;
    line-height: 80px;
    letter-spacing: 0.5vw;
    position: absolute;
    z-index: 1000;
    top: 0;
  }
  .infos-description {
    position: absolute;
    z-index: 1001;
    h2 {
      padding: 10px;
      padding-bottom: 0;
      margin-bottom: 0;
      line-height: 70px;
      text-shadow: -1px 0 #f8f8f8, 0 1px #f8f8f8, 1px 0 #f8f8f8, 0 -1px #f8f8f8;
      font-family: 'Montserrat';
      font-weight: 400;
    }
  }
`;

const InfosWrapper = styled.div`
  height 30%;
  width: 100%;
  display: flex;
`;

const Buttons = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0 6%;
  a, .disable-git {
    padding: 15px;
    font-size: 20px;
    margin: 10px;
    text-decoration: none;
  }
  .site-btn {
    color: #646a77;
    border: thin solid #646a77;
    &:hover {
      color: #adb1b9;
      border: thin solid #adb1b9;
    }
  }
  .git-btn {
    color: #58a6ff;
    border: thin solid #58a6ff;
    &:hover {
      color: #a8c3e2;
      border: thin solid #a8c3e2;
    }
  }
  .disable-git {
    color: #adb1b9;
    border: thin solid #adb1b9;
  }
`;

const Logos = styled.div`
margin-top: 25px;
  img {
    height: 25px;
    padding-right: 10px;
  }
`;

const Projet = ({ language, onLanguageClick }) => {

  const title = language ==='fr' ? 'Mes Projets' : 'My Projects'

  const section = ProjetItems.map((item) => {

    const descriptionLanguage = language === 'fr' ? item.description : item.description_en;

    const visit = language === 'fr' ? "Accèder au site" : "Access Website";
    const repo = language === 'fr' ? "Accèder au repo" : "Access Repository";
    const privateRepo = language === 'fr' ? "Ce repo est privé" : "This repository is private";

    const description = descriptionLanguage.map((paragraph) => {
      return (<p key={item.id + paragraph}>{paragraph}</p>);
    });

    const logos = item.tools.map((item) => {
      return (<img src={process.env.PUBLIC_URL + `/${item}`} alt={item}/>)
    })

    const Github = item.github === 'Private' ?
      <div className='disable-git'><FontAwesomeIcon icon={faGithub} /> {privateRepo}</div> :
      <a className='git-btn' href={item.github} target='_blank'><FontAwesomeIcon icon={faGithub} /> {repo}</a>;

    return (
      <Section key={item.id} back={`url(${process.env.PUBLIC_URL}/${item.back})`} screen={`url(${process.env.PUBLIC_URL}/${item.screen})`}>
        <Images>
          <img className='desk-img' src={process.env.PUBLIC_URL + `/${item.desktop}`} alt='desktop view'/>
          <img className='sm-img' src={process.env.PUBLIC_URL + `/${item.screen}`} alt='smartphone view'/>
        </Images>
        <InfosWrapper>
          <Infos>
            <h1>{item.label}</h1>
            <div className='infos-description'>
              <h2>{item.label}</h2>
              {description}
              <Logos>{logos}</Logos>
            </div>
          </Infos>
          <Buttons>
            <a className='site-btn' href={item.link} target='_blank'><FontAwesomeIcon icon={faLink} /> {visit}</a>
            {Github}
          </Buttons>
        </InfosWrapper>
      </Section>
    );
  })

  return (
    <Wrapper style={{backgroundColor: '#fff'}}>
      <MainTitle>{title}</MainTitle>
      <Carroussel items={section} />
    </Wrapper>
  );
};

export default Projet;
