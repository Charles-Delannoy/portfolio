import styled from 'styled-components';
import { mediaQueries } from "../mediaQueries/MediaQueries";

const MainTitle = styled.h1`
  padding: 0 20px;
  text-shadow: -1px 0 #f8f8f8, 0 1px #f8f8f8, 1px 0 #f8f8f8, 0 -1px #f8f8f8;
  height: 200px;
  line-height: 200px;
  margin: 0 auto;
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 55px;
  text-align: center;
  background-image: linear-gradient(120deg,#dce4e8 0%,#dce4e8 0%);
  background-repeat: no-repeat;
  background-size: 90% 5px;
  background-position-x: 100%;
  background-position-y: 60%;
  ${mediaQueries('phone')`
    height: 100px;
    line-height: 100px;
    font-size: 35px;
    background-position-x: 100%;
    background-position-y: 63%;
  `};
`;

export default MainTitle;
