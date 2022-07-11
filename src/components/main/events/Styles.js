import styled from 'styled-components';

export const EventsSection = styled.section`
  margin-top: 130px;
  @media(max-width: 1000px){
    text-align: center;
  }
`
export const Content = styled.section`
  height: 80vh;
  display: flex;
  align-items: center;
  @media(max-width: 1000px){
     height: 40vh;
  }
  img{
    position: absolute;
    left: 5vw;
    width: 70%;
    @media(max-width: 1200px){
      height: 65vh;
    }
    @media(max-width: 1200px){
      left: 0;
      width: 65%;
    }
    @media(max-width: 1000px){
      display: none;
    }
  }
`
export const Texts = styled.div`
  position: absolute;
  right: 10vw;
  width: 17vw;
  @media(max-width: 1000px){
    position: relative;
  }
  h5{
    font-family: 'Montserrat', sans-serif;
    color: #0F2260;
    font-size: 1.7rem;
    @media(max-width: 1440px){
      font-size: 1.4rem;
    }
    @media(max-width: 1000px){
      font-size: 1.7rem;
    }
  }

  p{
    font-family: 'Montserrat', sans-serif;
    color: #000000;
    font-size: 1.1rem;
    font-weight: 500;
    @media(max-width: 1440px){
      margin-top: 30px;
      font-size: 0.8rem;
    }
    @media(max-width: 1000px){
      font-size: 1rem;
    }
  }
  @media(max-width: 1440px){
    width: 23vw;
    right: 5vw;
  }
  @media(max-width: 1200px){
    right: 10vw;
  }
  @media(max-width: 1000px){
    width: 100%;
    right: 0;
  }
`