import React, { useState } from 'react';
//external
import styled from 'styled-components';
// Media Queries
import { mediaQueries } from "../../mediaQueries/MediaQueries"

  const Container = styled.div`
    width: 90%;
    height: calc(100vh - 120px - 10%);
    padding: 0 5%;
    ${mediaQueries('phone')`
      padding: 0;
      margin: 0 auto;
      height: calc(100vh - 120px);
    `};
  `;

  const CustomCarroussel = styled.div`
    overflow: hidden;
    display: flex;
    height: 100%;
    button {
      position: absolute;
      outline: none;
      z-index: 1003;
      border: none;
      padding: 10px;
      background: rgba(0, 0, 0, 0);
      img {
        height: 60px;
      }
    }
    .prev {
      left: 2%;
      top: 50%;
      ${mediaQueries('tab')`
        top: 45%;
      `};
    }
    .next {
      right: 2%;
      top: 50%;
      ${mediaQueries('tab')`
        top: 45%;
      `};
      img {
        transform: rotate(180deg);
      }
    }
    .goback {
      right: 0%;
      transition: right 300ms ;
    }
    .gonext {
      right: 200%;
      transition: right 300ms ;
    }
  `;

  const TransitionContainer = styled.div`
    display: grid;
    grid-template-columns: 100% 100% 100%;
    position: relative;
    right: 100%;
  `;

const Carroussel = ({items}) => {

  const [page, setPage] = useState(0);

  const goBack = () => {
    const slider = document.getElementById('slider');
    slider.classList.add('goback')
    const newPage = page - 1 < 0 ? items.length - 1 : page - 1;
    setTimeout(function() {
      setPage(newPage);
      slider.classList.remove('goback');
    }, 400)
  }

  const goNext = () => {
    const slider = document.getElementById('slider');
    slider.classList.add('gonext')
    const newPage = page + 1 > items.length - 1 ? 0 : page + 1;
    setTimeout(function() {
      setPage(newPage);
      slider.classList.remove('gonext');
    }, 400)
  }

  return (
    <CustomCarroussel>
      <button onClick={goBack} className='prev' ><img src={process.env.PUBLIC_URL + '/arrow.png'} alt='arrow'/></button>
      <div>
        <TransitionContainer id='slider'>
          <Container>
              {items[page - 1 < 0 ? items.length - 1 : page - 1]}
          </Container>
          <Container>
              {items[page]}
          </Container>
          <Container>
              {items[page + 1 > items.length - 1 ? 0 : page + 1]}
          </Container>
        </TransitionContainer>
      </div>
      <button onClick={goNext} className='next' ><img src={process.env.PUBLIC_URL + '/arrow.png'} alt='arrow'/></button>
    </CustomCarroussel>
  );
};

export default Carroussel;
