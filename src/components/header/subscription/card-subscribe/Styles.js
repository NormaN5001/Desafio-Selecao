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
`
export const Spots = styled.div`
  position: absolute;
  top: 20px;
  left: 22px;
  width: 70px;
  display: flex;
  justify-content: space-between;
`
export const Dot = styled.div`
  background-color: #00145D;
  width: 19px;
  height: 19px;
  border-radius: 50%;
`
export const LineBlue = styled.div`
  position: absolute;
  top: 60px;
  left: 22px;
  background-color: #00145D;
  border-radius: 20px;
  height: 7px;
  width: 85%;
`
export const TitleCard = styled.h2`
  position: absolute;
  top: 85px;
  left: 22px;
  color: #00145D;
  font-size: 2.3vw;
  font-family: 'Montserrat', sans-serif;
`
export const SubTitle = styled.h3`
  position: absolute;
  top: 160px;
  left: 22px;
  font-size: 1.8vw;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: #272727;
  @media(max-width: 1200px){
    top: 130px;
  }
  span{
    font-weight: 500;
  }
`