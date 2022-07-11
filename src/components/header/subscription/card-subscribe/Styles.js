import styled from 'styled-components';

export const Card = styled.section`
  margin-top: 50px;
  width: 45%;
  height: 230px;
  background-color: #FFFFFF;
  border-radius: 20px;
  position: relative;
  @media(min-width: 1900px){
    height: 280px;
  }
  @media(max-width: 1500px){
    height: 200px;
  }
  @media(max-width: 1200px){
    height: 180px;
    width: 55%;
  }
  @media(max-width: 768px){
    height: 140px;
    width: 70%;
  }
  @media(max-width: 600px){
    margin-top: 20px;    
  }
`
export const Spots = styled.div`
  position: absolute;
  top: 20px;
  left: 22px;
  width: 70px;
  display: flex;
  justify-content: space-between;
  @media(max-width: 768px){
    left: 15px;
    width: 40px;
  }
`
export const Dot = styled.div`
  background-color: #00145D;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  @media(max-width: 768px){
    width: 10px;
    height: 10px;
  }
`
export const LineBlue = styled.div`
  position: absolute;
  top: 60px;
  left: 22px;
  background-color: #00145D;
  border-radius: 20px;
  height: 7px;
  width: 85%;
  @media(max-width: 768px){
    top: 40px;
    left: 15px;
    height: 6px;
  }
`
export const TitleCard = styled.h2`
  position: absolute;
  top: 85px;
  left: 22px;
  color: #00145D;
  font-size: 2.3rem;
  font-family: 'Montserrat', sans-serif;
  @media(max-width: 1400px){
    font-size: 1.8rem;
  }
  @media(max-width: 1000px){
    font-size: 1.5rem;
  }
  @media(max-width: 768px){
    top: 60px;
    left: 15px;
    font-size: 1.2rem;
  }
  @media(max-width: 460px){
    font-size: 1rem;
  }
`
export const SubTitle = styled.h3`
  position: absolute;
  top: 160px;
  left: 22px;
  font-size: 1.8rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: #272727;
  @media(max-width: 1400px){
    font-size: 1.4rem;
  }
  @media(max-width: 1200px){
    top: 130px;
  }
  @media(max-width: 1000px){
    font-size: 1rem;
  }
  span{
    font-weight: 500;
  }
  @media(max-width: 768px){
    top: 90px;
    left: 15px;
    font-size: 1rem;
  }
  @media(max-width: 460px){
    font-size: 0.8rem;
    top: 100px;
  }
`