import React, {useState, useEffect} from 'react';
import { mediaQueries } from "../mediaQueries/MediaQueries"
import Items from './Items';
import Language from './Language';
import styled from 'styled-components';

const NavUl = styled.ul`
  margin: 0 5px;
  list-style: none;
  z-index: 1000;
  li {
    display:inline;
  }
`;

const HeadNav = styled.div`
  height: 50px;
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 22px;
  font-weight: 300;
  .activ-language {
    color: #6EB4D1;
  }
  ul {
    li {
      padding: 0 10px;
      font-family: 'Montserrat';
      font-weight: 100;
      &:first-child {
        border-right: thin solid black;
      }
      a {
        cursor: pointer;
        text-decoration: none;
        color: #5E6472;
        &:hover {
          color: #6EB4D1;
        }
      }
    }
  }
`;

const HomeNav = styled.div`
  height: 100px;
  width: 100vw;
  border-top: thin solid #c5c2c2;
  border-bottom: thin solid #c5c2c2;
  position: relative;
  font-size: 30px;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  ul {
    margin-right: 6vw;
    li {
      padding: 0 2vw;
      font-family: 'Montserrat';
      font-weight: 100;
      a {
        color: #5E6472;
        text-decoration: none;
        cursor: pointer;
        &:hover {
          color: #6EB4D1;
        }
      }
    }
    ${mediaQueries('phone')`
      display: none;
    `};
  }
  img {
    margin-left: 5vw;
    height: 150px;
    border: 1px solid #fff;
    border-radius: 50%;
    transition: all 25s ease-out;
    &:hover {
      transform: rotate(3600deg);
      transition: all 50s ease-out;
    }
    ${mediaQueries('tab')`
      margin-left: 0;
    `};
  }

  ${mediaQueries('tab')`
    font-size: 18px;
    justify-content: center;
  `};
`;

const HomeNavbar = ({ language, onLanguageClick }) => {




  const goTo = (position) => {
    window.scrollTo({ top: position + 1, behavior: 'smooth' });
  }

  const renderMenus = Items.map((item, index) => {
    const label = language === 'fr' ? item.label : item.label_en;
    return (<li key={index}><a onClick={() => goTo(item.position)}>{label}</a></li>)
  });

  return (
    <div>
      <HeadNav>
        <NavUl>
          <Language language={language} onLanguageClick={onLanguageClick}/>
        </NavUl>
      </HeadNav>
      <HomeNav>
        <img src={process.env.PUBLIC_URL + '/light-logo.png'} alt='logo'/>
        <NavUl>
          {renderMenus}
        </NavUl>
      </HomeNav>
    </div>
  );
};

export default HomeNavbar;
