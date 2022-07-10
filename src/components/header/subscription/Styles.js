import styled from 'styled-components';

export const Contents = styled.section`
  margin: 10vh 0 0 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media(max-width: 1600px){
    margin: 5vh 0 0 10vw;
  }
  @media(max-width: 1290px){
    margin: 3vh 0 0 10vw;
  }
`
export const TitleBox = styled.h1`
  color: #FFAC2D;
  font-size: 3.3rem;
  font-family: 'Montserrat', sans-serif;
  width: 80%;
  span{
    font-size: 3.3rem;
    color: #FF611E;
    font-weight: 300;
    @media(max-width: 1290px){
    font-size: 2.3rem;
    }
  }
  @media(max-width: 1290px){
    font-size: 2rem;
  }
`
export const TextLink = styled.h3`
  margin-top: 10px;
  color: #FED5B2;
  font-size: 1.7rem;
  font-family: 'Montserrat', sans-serif;
  span{
    font-weight: 400;
  }
`