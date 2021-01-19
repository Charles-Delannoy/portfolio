import React, { Fragment } from 'react';
// My components
import MainTitle from '../styled/MainTitle';
import Wrapper from '../styled/Wrapper';
import FormationItems from './FormationItems';
// Media Queries
import { mediaQueries } from "../mediaQueries/MediaQueries"
// External librairies
import styled from 'styled-components';

// const Content = styled.div`
//   height: calc(100vh - 200px - 5%);
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-template-rows: repeat(2, 1fr);
//   grid-gap: 5%;
//   padding: 0 5%;
// `;

const Content = styled.div`
  height: calc(100vh - 200px - 5%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 5%;
`;

const Card = styled.div`
  background-position-y: 20%;
  width: 100%;
  height: 22%;
  background-size: cover;
  position: relative;
  transition: all ease-in-out .6s;
  &:hover {
    transform: scale(1.1);
    transition: all ease-in-out .6s;
    .frame {
      margin: 0 2%;
      width: 15%;
      transition: all ease-in-out .6s;
    }
    .hover-content {
      width: 80%;
      margin-left: 20%;
      background-color: rgba(0, 0, 0, 0.7);
      opacity: 1;
      ${mediaQueries('phone')`
        width: 100%;
        margin-left: 0%;
      `};
      transition: all ease-in-out .6s;
      .description {
        width: 100%;
        left: 0%;
        transition: all ease-in-out .6s;
      }
    }
  }
`;

const Filter = styled.div`
  position: relative;
  text-align: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

const HoverFilter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  align-self: center;
  opacity: 0;

  height: 100%;
  position: absolute;
  z-index: 1001;
  transition: all ease-in-out .6s;
  .description {
    height: 100%;
    display: flex;
    align-items: center;
    h2 {
      font-size: 20px;
      font-weight: 400;
      margin: 0 2%;
      border-top: 1px solid #fff;
      line-height: 20px;
      padding-top: 10px;
      ${mediaQueries('phone')`
        font-size: 15px;
        padding-top: 0;
      `};
    }
    strong {
      font-weight: 400;
    }
    .descr-p {
      margin-right: 1%;
      width: 20%;
      height: 80%;
      background-color: rgba(250, 250, 250, 0.4);
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        font-size: 15px;
        font-weight: 100;
        margin: 0;
        padding: 10px 0;
      }
      ${mediaQueries('phone')`
        display: none;
      `};
    }
    .education {
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-bottom: 5px;
      ${mediaQueries('phone')`
        height: 60%;
      `};
      p {
        font-size: 20px;
        padding: 0;
        padding-bottom: 5px;
        margin: 0;
        ${mediaQueries('phone')`
          font-size: 10px;
          padding: 0;
        `};
      }
    }
    font-family: 'Montserrat';
    position: absolute;
    left: 100%;
    color: #fff;
    transition: all ease-in-out .6s;
    text-align: center;
    width: 80%;
  }

`;

const Cadre = styled.div`
  background-color: rgba(250, 250, 250, 0.4);
  height: 70%;
  width: calc(96% - 8px);
  border: 4px solid #fff;
  margin: 0 calc(2% - 4px);
  padding: 5px;
  transition: margin ease-in-out .10s;
  transition: width ease-in-out .6s;
`;

const Logo = styled.img`
  height: 100%;
  object-fit: contain;
`;

const Formations = ({ language, onLanguageClick }) => {

  const rendereFormations = FormationItems.map((item) => {

    const translateDiplomes = language === 'fr' ? item.diplomes : item.diplomes_en;
    const date = language === 'fr' ? item.date : item.date_en;
    const description = language === 'fr' ? item.description : item.description_en;

    const diplomes = translateDiplomes.map((diplome) => {
      return (
        <p key={item.id + diplome}><strong>{diplome}</strong></p>
      );
    })

    return (
      <Card key={item.id} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${item.img})`}}>
        <HoverFilter className='hover-content'>
          <div className='description'>
            <div style={{flexGrow: '1', height: '100%'}}>
              <div className='education'>{diplomes}</div>
              <h2>{date}</h2>
            </div>
            <div className='descr-p'>
              <p>{description}</p>
            </div>
          </div>
        </HoverFilter>
        <Filter>
          <Cadre className='frame'>
            <Logo src={process.env.PUBLIC_URL + `/${item.logo}`} alt={item.label}/>
          </Cadre>
        </Filter>
      </Card>
    );
  })

  const title = language ==='fr' ? 'Mes Formations' : 'Education'

  return (
    <Wrapper style={{backgroundColor: '#f8f8f8'}}>
      <MainTitle>{title}</MainTitle>
      <Content>
        {rendereFormations}
      </Content>
    </Wrapper>
  );
};

export default Formations;
