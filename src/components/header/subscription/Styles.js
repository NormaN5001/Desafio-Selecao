import styled from 'styled-components';
import Background from '../../../images/all/background.png'

export const SubscriptionSection = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100vh;
`
export const Contents = styled.section`
  border: solid white 2px;
  margin: 250px 10vw 0 10vw;
  height: 600px;
  @media(max-width: 1600px){
    margin: 160px 0 0 50px;
  }
`
export const TitleBox = styled.h1`
  border: solid red;
  color: #FFAC2D;
  font-size: 65px;
  width: 90%;
  span{
    letter-spacing: -10px;
    font-size: 65px;
    color: #FF611E;
    font-weight: 100;
  }
  @media(max-width: 1500px){
    font-size: 55px;
    width: 100%;
  }
`