import React, { Fragment } from 'react';
// My components
import MainTitle from '../styled/MainTitle';
import Wrapper from '../styled/Wrapper';
import FormationItems from './FormationItems';
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
  width: 100%;
  height: 22%;
  background-size: cover;
  position: relative;
  transition: all ease-in-out .5s;
  &:hover {
    transform: scale(1.1);
    transition: all ease-in-out .5s;
    .frame {
      margin: 0 2%;
      width: 15%;
      transition: all ease-in-out .5s;
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
  background-color: rgba(250, 250, 250, 0.4);
`;

const HoverFilter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  align-self: center;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1003;
  transition: all ease-in-out .5s;
  .description {
    font-family: 'Montserrat';
    position: absolute;
    left: 100%;
    color: #fff;
    transition: all ease-in-out .5s;
    text-align: center;
    width: 80%;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1;
    transition: all ease-in-out .5s;
    .description {
      left: 20%;
      transition: all ease-in-out .5s;
    }
  }
`;

const Cadre = styled.div`
  height: 70%;
  width: calc(96% - 8px);
  border: 4px solid #fff;
  margin: 0 calc(2% - 4px);
  padding: 5px;
  transition: margin ease-in-out .10s;
  transition: width ease-in-out .5s;
`;

const Logo = styled.img`
  height: 100%;
  object-fit: contain;
`;

const Formations = ({ language, onLanguageClick }) => {

  console.log(FormationItems);

  const rendereFormations = FormationItems.map((item) => {

    const diplomes = item.diplomes.map((diplome) => {
      return (
        <p><strong>{diplome}</strong></p>
      );
    })

    return (
      <Card style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${item.img})`}}>
        <HoverFilter>
          <div className='description'>
            <h2>{item.date}</h2>
            {diplomes}
            <p>{item.description}</p>
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
