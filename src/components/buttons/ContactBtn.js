import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Montserrat';
  font-size: 40px;
  font-weight: 300;
  color: black;
  background-color: #fff;
  border: thin solid black;
  border-right: none;
  padding: 25px 20px 25px 10px;
  display: flex;
  align-items: center;
  width: 325px;
  align-self: flex-end;
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

const ContactBtn = () => {
  return (
    <Button><img src={process.env.PUBLIC_URL + '/arrow.png'} alt='arrow'/> <p>Contactez moi</p></Button>
  );
};

export default ContactBtn;
