import React, { Fragment } from 'react';
// My components
import MainTitle from '../styled/MainTitle';
import Wrapper from '../styled/Wrapper';
// External librairies
import styled from 'styled-components';


const Outils = ({ language, onLanguageClick }) => {

  const title = language ==='fr' ? 'Mes Outils' : 'My Tools'

  return (
    <Wrapper style={{backgroundColor: '#fff'}}>
      <MainTitle>{title}</MainTitle>
    </Wrapper>
  );
};

export default Outils;
