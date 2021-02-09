import React, { useState } from 'react';
// Media Queries
import { mediaQueries } from "../mediaQueries/MediaQueries"
// External librairies
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faTimes } from '@fortawesome/free-solid-svg-icons'

  const Button = styled.button`
    display: none;
    ${mediaQueries('phone')`
      min-width: 30px;
      display: block;
      position: fixed;
      z-index: 1006;
      top: 0;
      left: 0;
      border: none;
      background: rgba(0,0,0,0);
      font-size: 7vw;
      margin: 2vw;
      padding: 0;
      border-radius: 5px;
      color: #6EB4D1;
      &:focus {
        outline: none;
      }
    `};
  `;


const PhoneContactBtn = ({ language, rightPos, color }) => {

  const [icon, setIcon] = useState(faIdCard)

  const clickBtn = () => {
    document.getElementById('phone-contactdiv').classList.toggle('phone-contact-show');
    icon === faTimes ? setIcon(faIdCard) : setIcon(faTimes);
  }

  return (
    <Button onClick={clickBtn} ><FontAwesomeIcon className='icon' icon={icon} /></Button>
  );
};

export default PhoneContactBtn;
