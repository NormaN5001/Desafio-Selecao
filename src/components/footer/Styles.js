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
`
export const Networks = styled.div`
  padding-left: 10vw;
  display: flex;
  p{
    color: #FFFFFF;
    font-size: 1.2rem;
    font-weight: bold;
    width: 15vw;
  }
`
export const Images = styled.div`
  margin-left: 80px;
  img{
    margin-left: 40px;
    width: 74px;
    height: 74px;
  }
`