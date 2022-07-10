import styled from 'styled-components';

export const AboutSection = styled.section`
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const Logo = styled.img`
  width: 30%;
  @media(max-width: 1200px){
    width: 35%;
  }
`
export const AboutText = styled.section`
  padding-right: 5vw;
  width: 58%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TextAbout = styled.div`
  margin-top: 36px;
 p{
  margin-top: 35px;
  color: #000000;
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  @media(max-width: 1200px){
    margin-top: 25px;
  }
 }
 @media(max-width: 1200px){
    margin-top: 10px;
  }
`
