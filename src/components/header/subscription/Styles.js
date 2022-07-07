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
  margin: 20vh 10vw 0 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const TitleBox = styled.h1`
  color: #FFAC2D;
  font-size: 3.2vw;
  width: 80%;
  span{
    letter-spacing: -10px;
    font-size: 3.2vw;
    color: #FF611E;
    font-weight: 100;
    @media(max-width: 1500px){
      letter-spacing: -7px;
    }
  }
  @media(max-width: 1500px){
    font-size: 3vw;
  }
`
export const TextLink = styled.h3`
  margin-top: 10px;
  color: #FED5B2;
  font-size: 1.4vw;
  span{
    font-weight: 400;
  }
`