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
    a {
      color: #5E6472;
      text-decoration: none;
      &:hover {
        color: #6EB4D1;
        cursor: pointer;
      }
    }
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
  z-index: 1001;
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
  }
  .logo-link {
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
  z-index: 1001;
  background-color: #fff;
  .show-navbar {
    top: 0px;
  }
  ${mediaQueries('phone')`
    display: none;
  `};
`;

const GlobalNavbar = ({ language, onLanguageClick, fullPageScroll, stopFullPageListener, setPos }) => {

  const sectionHeight = document.body.clientHeight / 5;

  const renderMenus = Items.map((item, index) => {
    const label = language === 'fr' ? item.label : item.label_en;
    return (<li key={index + item.id}><a id={item.id} onClick={() => goTo(item.position * sectionHeight, item.position)}>{label}</a></li>);
  });

  let lastScrollValue = document.documentElement.scrollTop;

  const goTo = (position, newPos) => {
    document.getElementById('contactdiv').classList.remove('contact-show');
    stopFullPageListener(position);
    setPos(newPos);
  }

  const logoClick = () => {
    goTo(0);
  }

  document.addEventListener('mousemove', (e) => {
    const dynaNavbar = document.querySelector('.dynamic-navbar');
    let top  = window.innerHeight;
    if (lastScrollValue >= top && e.clientY <= 150) {
      dynaNavbar.classList.add("show-navbar");
    } else {
      dynaNavbar.classList.remove("show-navbar");
    }
  });

  document.addEventListener('scroll',() => {
      const dynaNavbar = document.querySelector('.dynamic-navbar');
      let top  = document.documentElement.scrollTop;
      if (top < window.innerHeight && dynaNavbar) {
        dynaNavbar.classList.remove("show-navbar");
      }
  });

  return (
    <Wrapper>
      <HomeNav className='dynamic-navbar'>
        <a className='logo-link' onClick={() => goTo(0, 0)}><img src={process.env.PUBLIC_URL + '/light-logo.png'} alt='logo'/></a>
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
