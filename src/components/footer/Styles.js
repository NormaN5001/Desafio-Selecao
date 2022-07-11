import styled from 'styled-components';
import BackgroundFooter from '../../images/all/background-footer.png'

export const FooterSection = styled.section`
  margin-top: 261px;
  width: 100%;
  height: 532px;
  background-image: url(${BackgroundFooter});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`
export const TitleBox = styled.h4`
  color: #FFFFFF;
  font-size: 3rem;
  padding: 100px 0 120px 10vw;
  @media(max-width: 1000px){
    padding: 100px 0 100px 50px;
    font-size: 2.3rem;
  }
  @media(max-width: 425px){
    padding: 50px 0 50px 20px;
  }
`
export const Networks = styled.div`
  padding-left: 10vw;
  display: flex;
  p{
    color: #FFFFFF;
    font-size: 1.2rem;
    font-weight: bold;
    width: 240px;
    @media(max-width: 1000px){
      font-size: 1rem;
    }
  }
  @media(max-width: 1000px){
    padding-left: 50px;
  }
  @media(max-width: 425px){
    padding-left:20px;
  }
`
export const Images = styled.div`
  margin-left: 80px;
  img{
    margin-left: 40px;
    width: 74px;
    height: 74px;
    @media(max-width: 1000px){
      margin: 10px 0 0 20px;
      width: 60px;
      height: 60px;
    }
  }
  @media(max-width: 1000px){
    margin-left: 2vw;
  }
`