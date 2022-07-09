import styled from 'styled-components';

export const EventsSection = styled.section`
  margin-top: 130px;
`
export const TitleBox = styled.h4`
  font-family: 'Montserrat', sans-serif;
  color: #0F2260;
  font-size: 2.5rem;
  font-weight: bold;
`
export const Content = styled.section`
  height: 80vh;
  display: flex;
  align-items: center;
  img{
    position: absolute;
    left: 5vw;
    width: 70%;
  }
`
export const Texts = styled.div`
  position: absolute;
  right: 10vw;
  width: 17vw;
  h5{
    font-family: 'Montserrat', sans-serif;
    color: #0F2260;
    font-size: 1.7rem;
  }
  p{
    font-family: 'Montserrat', sans-serif;
    color: #000000;
    font-size: 1.1rem;
    font-weight: 500;
  }
`