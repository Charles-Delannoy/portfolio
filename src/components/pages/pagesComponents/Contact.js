import React from 'react';
// External librairies
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { fab, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactDiv = styled.div`
  box-shadow: 0px 0px 30px -19px rgba(0,0,0,0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  position: -webkit-sticky;
  position: fixed;
  border: thin solid #c5c2c2;
  background-color: #f8f8f8;
  z-index: 1010;
  top: 64vh;
  right: -100%;
  padding: 25px;
  transition: all ease-in-out .8s;
  .visit-card {
    margin: 10px 0;
    display: flex;
    h2 {
      font-weight: 300;
      margin: 0;
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
  h2 {
    font-weight: 100;
    display: flex;
    align-items: center;
    font-size: 25px;
    margin-top: 0;
  }
  .icon {
    font-size: 35px;
    margin-right: 20px;
  }
  button {
    background-color: rgba(0,0,0,0);
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

const Contact = ({ language }) => {

  const linkedin = language ==='fr' ? 'Mon profil' : 'My profile';
  const phone = language === 'fr' ? '06 84 58 79 60' : '+33 684 58 79 60';

  return (
    <ContactDiv id='contactdiv'>
      <button onClick={() => {document.getElementById('contactdiv').classList.remove('contact-show')}}><img src={process.env.PUBLIC_URL + '/fleche-contact.svg'} alt='arrow' /></button>
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
    </ContactDiv>
  );
};

export default Contact;
