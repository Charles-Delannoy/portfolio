import React, { Fragment } from 'react';
// My components
import ContactBtn from '../buttons/ContactBtn';
import HomeNavbar from '../navbars/HomeNavbar';
// External librairies
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: calc(100vh - 150px);
  max-height: calc(100vh - 150px);
  position: relative;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  display: flex;
  .text {
    font-size: 40px;
    line-height: 65px;
    padding-left: 40px;
    font-family: 'Montserrat';
    align-self: center;
    strong {
      font-weight: 600;
    }
  }
`;

const ImgContent = styled.div`
  height: calc(100vh - 150px);
  background-image: url(${process.env.PUBLIC_URL}/devimg.jpg);
  background-size: cover;
  background-position-y: 70%;
  min-width: 45vw;
`;

const FlexDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Home = () => {
  return (
    <Fragment>
      <HomeNavbar />
      <Wrapper>
        <ContentWrapper>
          <ImgContent/>
          <FlexDescription>
            <p className='text'>
              Bonjour,<br/>
              Je suis <strong>Charles DELANNOY, Développeur full-stack </strong>
              et ancien consultant en Organisation et Management ce qui me permet d'avoir
              une <strong>approche orientée produit</strong>.
            </p>
            <ContactBtn />
          </FlexDescription>
        </ContentWrapper>
      </Wrapper>
    </Fragment>
  );
};

export default Home;
