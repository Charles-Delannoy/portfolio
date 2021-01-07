import React from 'react';
import styled from 'styled-components';

const NavUl = styled.ul`
  margin: 0 5px;
  list-style: none;
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
  font-size: 24px;
  font-weight: 300;
  ul {
    li {
      padding: 0 10px;
      &:first-child {
        border-right: thin solid black;
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
    }
  }
  img {
    margin-left: 5vw;
    height: 150px;
    border: 1px solid #fff;
    border-radius: 50%;
  }
`;

const HomeNavbar = () => {
  console.log(window.location.origin);
  return (
    <div>
      <HeadNav>
        <NavUl>
          <li>FR</li>
          <li>EN</li>
        </NavUl>
      </HeadNav>
      <HomeNav>
        <img src={process.env.PUBLIC_URL + '/light-logo.png'} alt='logo'/>
        <NavUl>
          <li>À propos</li>
          <li>Mes projets</li>
          <li>Mes formations</li>
          <li>Mes outils</li>
        </NavUl>
      </HomeNav>
    </div>
  );
};

export default HomeNavbar;
