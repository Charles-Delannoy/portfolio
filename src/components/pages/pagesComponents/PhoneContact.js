import React from 'react';
// Media Queries
import { mediaQueries } from "../../mediaQueries/MediaQueries"
// External librairies
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { fab, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled.div`
    display: none;
    width: 100vw;
    height: 100vh;
    .visit-card {
    margin: 10px 0;
    display: flex;
    margin-bottom: 10%;
    h2 {
      font-weight: 300;
      margin: 0;
      font-size: 30px;
      color: #fff;
    }
    img {
      height: 64px;
      margin-right: 10px;
      border-radius: 3px;
    }
  }
  a {
    text-decoration: none;
  }
  }
  .icon {
    font-size: 35px;
    margin-right: 20px;
  }
  h2 {
    font-weight: 100;
    display: flex;
    align-items: center;
    font-size: 25px;
    margin-top: 0;
    letter-spacing: 0.1vw;
    color: #fff;
    svg {
      height: 30px;
      color: #6eb4d1;
    }
  button {

    border: none;
    height: 50px;
    width: 80px;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    outline: none;
    img {
      height: 20px;
      width: 40px;
    }
  }
  `;

const PhoneContact = ({ language, rightPos, color }) => {

  const linkedin = language ==='fr' ? 'Mon profil' : 'My profile';
  const phone = language === 'fr' ? '06 84 58 79 60' : '+33 684 58 79 60';

  return (
    <Wrapper id='phone-contactdiv'>
      <div className='visit-card'>
        <img src={process.env.PUBLIC_URL + '/profile.jpeg'} alt="profile-pic"/>
        <h2>Charles Delannoy</h2>
      </div>
      <a href='tel:+33684587960'>
        <h2><FontAwesomeIcon className='icon' icon={faPhoneSquareAlt} /> {phone}</h2>
      </a>
      <a href='mailto:charles.delannoy@hei.fr'>
        <h2><FontAwesomeIcon className='icon' icon={faEnvelopeSquare} /> charles.delannoy@hei.fr</h2>
      </a>
      <a href='https://www.linkedin.com/in/charles-delannoy-20b16972/' target='_blank'>
        <h2><FontAwesomeIcon className='icon' icon={faLinkedin} /> {linkedin}</h2>
      </a>
    </Wrapper>
  );
};

export default PhoneContact;
