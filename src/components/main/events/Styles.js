import styled from 'styled-components';

export const EventsSection = styled.section`
  margin-top: 130px;
  border: solid;
`
export const TitleBox = styled.h4`
  font-family: 'Montserrat', sans-serif;
  color: #0F2260;
  font-size: 2.5vw;
  font-weight: bold;
`
export const Content = styled.section`
  border: red solid;
  position: absolute;
  left: 5vw;
  display: flex;
  align-items: center;
  img{
    width: 70%;
  }
`
export const Texts = styled.div`
  h5{
    font-family: 'Montserrat', sans-serif;
    color: #0F2260;
    font-size: 1.5vw;
  }
  p{
    margin-top: 30px;
    font-family: 'Montserrat', sans-serif;
    color: #000000;
    font-size: 1vw;
    font-weight: 500;
    width: 350px;
  }
`