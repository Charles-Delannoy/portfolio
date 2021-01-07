import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
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
  font-size: 24px;
  font-weight: 300;
  .activ-language {
    color: #6EB4D1;
  }
  ul {
    li {
      padding: 0 10px;
      &:first-child {
        border-right: thin solid black;
      }
      a {
        text-decoration: none;
        color: #5E6472;
        &:hover {
          color: #6EB4D1;
        }
      }
    }
  }
`;

const Language = ({ language, onLanguageClick }) => {

  const pathArray = window.location.pathname.split('/');
  pathArray[1] = 'fr';
  const frPath = pathArray.join('/');
  pathArray[1] = 'en';
  const enPath = pathArray.join('/');

  return (
    <HeadNav>
      <NavUl>
        <li>
          <a onClick={onLanguageClick}  className={language === 'fr' ? 'activ-language' : ''} >FR</a>
        </li>
        <li>
          <a onClick={onLanguageClick}  className={language === 'en' ? 'activ-language' : ''} >EN</a>
        </li>
      </NavUl>
    </HeadNav>
  );
}

export default Language;
