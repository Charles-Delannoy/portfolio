import React from 'react';
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
    color: #6EB4D1;
  }
`;

const HomeNav = styled.div`
  height: 120px;
  width: 100vw;
  position: fixed;
  left: 0;
  right: 0;
  top: -120px;
  transition: top 0.3s;
  transition-delay: 0.2s;
  background-color: #fff;
  border-bottom: thin solid #c5c2c2;
  font-weight: 300;
  display: flex;
  justify-content: center;;
  align-items: center;
  z-index: 1000;
  ul {
    li {
      font-size: 30px;
      padding: 0 2vw;
      font-family: 'Montserrat';
      font-weight: 100;
      ${mediaQueries('tab')`
        font-size: 18px;
      `};
    }
  }
  img {
    margin-left: 5vw;
    height: 100px;
    border: 1px solid #fff;
    border-radius: 50%;
    position: absolute;
    left: -40px;
  }
`;

const LanguageDiv = styled.div`
  position: absolute;
  right: -6vw;
  top: 10px;
  .activ-language {
    color: #6EB4D1;
  }
  ul {
    margin-right: 6vw;
    li {
      font-size: 22px;
      padding: 0 10px;
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

const Wrapper = styled.div`
  .show-navbar {
    top: 0px;
  }
  ${mediaQueries('phone')`
    display: none;
  `};
`;

const GlobalNavbar = ({ language, onLanguageClick }) => {

  const renderMenus = Items.map((item, index) => {
    const label = language === 'fr' ? item.label : item.label_en;
    return (<li key={index}>{label}</li>)
  });

  const dynaNavbar = document.querySelector('.dynamic-navbar');
  let lastScrollValue = document.documentElement.scrollTop;
  console.log(dynaNavbar);
  document.addEventListener('scroll',() => {
      const dynaNavbar = document.querySelector('.dynamic-navbar');
      let top  = document.documentElement.scrollTop;;
      if(lastScrollValue < top && dynaNavbar) {
        dynaNavbar.classList.remove("show-navbar");

      } else if (top < window.innerHeight && dynaNavbar) {
        dynaNavbar.classList.remove("show-navbar");

      } else if (dynaNavbar) {
        dynaNavbar.classList.add("show-navbar");
      }
      lastScrollValue = top;
  });

  return (
    <Wrapper>
      <HomeNav className='dynamic-navbar'>
        <img src={process.env.PUBLIC_URL + '/light-logo.png'} alt='logo'/>
        <NavUl>
          {renderMenus}
        </NavUl>
        <LanguageDiv>
          <NavUl>
            <Language language={language} onLanguageClick={onLanguageClick}/>
          </NavUl>
        </LanguageDiv>
      </HomeNav>
    </Wrapper>
  );
};

export default GlobalNavbar;
