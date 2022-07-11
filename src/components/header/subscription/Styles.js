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
      font-weight: bold;
    }
    @media(max-width: 600px){
      font-size: 2rem;
    }
  }
  @media(max-width: 1290px){
    font-size: 2rem;
  }
  @media(max-width: 600px){
    font-size: 1.7rem;
  }
`
export const TextLink = styled.h3`
  margin-top: 10px;
  color: #FED5B2;
  font-size: 1.3rem;
  font-family: 'Montserrat', sans-serif;
  span{
    font-weight: 400;
  }
  @media(max-width: 768px){
    font-size: 1rem;
  }
  @media(max-width: 500px){
    width: 70%;   
  }
`