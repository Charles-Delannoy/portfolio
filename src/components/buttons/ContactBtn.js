import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Button = styled.button`
  font-family: 'Montserrat';
  font-size: 40px;
  font-weight: 300;
  color: #fff;
  background-color: #b7bdcc;
  border: none;
  padding-right: 20px;
  border-radius: 10px 0px 0px 10px;
  display: flex;
  align-items: center;
  align-self: flex-end;
  img {
    transform: scaleX(-1);
    height: 40px;
    margin: 0px 20px;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;

const ContactBtn = () => {
  return (
    <Button><img src={process.env.PUBLIC_URL + '/bullet.svg'} alt='arrow'/> <p>Contactez moi</p></Button>
  );
};

export default ContactBtn;
