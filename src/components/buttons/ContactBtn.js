import React from 'react';
// Media Queries
import { mediaQueries } from "../mediaQueries/MediaQueries"
// External librairies
import styled from 'styled-components';

  const Button = styled.button`
    font-family: 'Montserrat';
    font-size: 40px;
    font-weight: 300;
    color: #646a77;
    background-color: #fff;
    border: thin solid #c5c2c2;
    border-right: none;
    padding: 25px 20px 25px 10px;
    display: flex;
    align-items: center;
    width: 325px;
    align-self: flex-end;
    position: -webkit-sticky;
    position: fixed;
    top: 75vh;
    right: ${props => `-${props.rightpos}px`};
    z-index: 1005;
    outline: none;
    img {
      transform: scaleX(1);
      height: 40px;
      margin: 0px 35px 0px 20px;
    }
    p {
      margin: 0;
      font-weight: 100;
      font-size: 30px;
    }
    &:hover {
      color: #6EB4D1;

    }
    ${mediaQueries('phone')`
      display: none;
    `};
  `;


const ContactBtn = ({ language, rightPos }) => {



  const text = language === 'fr' ? 'Contactez moi' : 'Contact me';

  return (
    <Button onClick={() => document.getElementById('contactdiv').classList.add('contact-show')} rightpos={rightPos}><img src={process.env.PUBLIC_URL + '/arrow.png'} alt='arrow'/> <p>{text}</p></Button>
  );
};

export default ContactBtn;
