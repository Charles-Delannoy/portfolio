import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Montserrat';
  font-size: 40px;
  font-weight: 300;
  color: #5E6472;
  background-color: #fff;
  border: thin solid #5E6472;
  border-right: none;
  padding: 25px 20px 25px 10px;
  display: flex;
  align-items: center;
  width: 325px;
  align-self: flex-end;
  position: -webkit-sticky;
  position: sticky;
  top: 75vh;
  left: 100vw;
  z-index: 1001;
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
`;


const ContactBtn = ({ language }) => {

  const text = language === 'fr' ? 'Contactez moi' : 'Contact me';

  return (
    <Button><img src={process.env.PUBLIC_URL + '/arrow.png'} alt='arrow'/> <p>{text}</p></Button>
  );
};

export default ContactBtn;
