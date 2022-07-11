import styled from 'styled-components';

export const Person = styled.div`
  margin: 20px 0 0 20px;
  position: relative;
  width: 19.8vw;
  height: 20vw;
  img{
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
  @media(max-width: 2560px){
    width: 20vw;
    height: 20.1vw;
  }
  @media(max-width: 2000px){
    width: 19.6vw;
    height: 19.8vw;
  }
  @media(max-width: 1600px){
    width: 19.15vw;
    height: 19.35vw;
  }
  @media(max-width: 1200px){
    width: 30vw;
    height: 30.2vw;
  }
  @media(max-width: 1000px){
    width: 29vw;
    height: 29.3vw;
  }
  @media(max-width: 768px){
    width: 45%;
    height: 39vw;
  }
  @media(max-width: 500px){
    width: 90%;
    height: 83vw;
  }
`
export const Texts = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(transparent, #0F2260);
`
export const Name = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: #FFFFFF;
  @media(max-width: 1200px){
    font-size: 1.5rem;
  }
  @media(max-width: 768px){
    font-size: 1.3rem;
  }
`
export const Office = styled.p`
  margin: 8px 0 12px 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: #FFFFFF;
  @media(max-width: 1200px){
    font-size: 1.3rem;
  }
  @media(max-width: 768px){
    font-size: 1rem;
  }
`
