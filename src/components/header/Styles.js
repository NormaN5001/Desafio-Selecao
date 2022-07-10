import styled from 'styled-components';
import Background from '../../images/all/background.png'

export const HeaderSection = styled.section`
  z-index: -1;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  width: 100%;
  height: 1080px;
  @media(max-width: 1700px){
    height: 750px;
  }
  @media(max-width: 1290px){
    height: 600px;
  }
`