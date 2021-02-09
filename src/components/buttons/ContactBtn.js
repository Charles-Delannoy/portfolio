import React from 'react';
// Media Queries
import { mediaQueries } from "../mediaQueries/MediaQueries"
// External librairies
import styled from 'styled-components';

  const Button = styled.button`
    font-family: 'Montserrat';
    color: #fff;
    background-color: ${props => `${props.color}`};
    border-radius: 3px 0 0 3px;
    border: none;
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
    transition: background-color ease 300ms;
    img {
      transform: scaleX(1);
      height: 40px;
      margin: 0px 35px 0px 20px;
    }
    p {
      margin: 0;
      font-weight: 300;
      font-size: 30px;
    }
    &:hover {
      background-color: #438dab;
      transition: background-color ease 300ms;
    }
    ${mediaQueries('phone')`
      display: none;
    `};
  `;


const ContactBtn = ({ language, rightPos, color }) => {



  const text = language === 'fr' ? 'Contactez moi' : 'Contact me';

  return (
    <Button onClick={() => document.getElementById('contactdiv').classList.add('contact-show')} rightpos={rightPos} color={color} ><img src={process.env.PUBLIC_URL + '/white-arrow.png'} alt='arrow'/> <p>{text}</p></Button>
  );
};

export default ContactBtn;
