import styled from 'styled-components';

export const TopSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  img{
    z-index: 1;
    cursor: pointer;
    height: 60px;
    position: fixed;
    left: 5vw;
    @media(max-width: 1200px){
      left: 10px;
      height: 45px;
    }
  }
`
export const UList = styled.ul`
  display: flex;
  list-style: none;
  @media(max-width: 1000px){
    display: none;  
  }
`
export const Items = styled.li`
  color: #FFFFFF;
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
  padding: 0 30px 3px 30px;
  transition: 0.3s;
  border: solid 2px transparent;
  border-radius: 20px;
  &:hover{
    border: solid #FFAC2D 2px;
    cursor: pointer;
  }
  @media(max-width: 1200px){
    font-size: 1.3rem;
    padding: 0 15px 3px 15px;
  }
  a{
    text-decoration: none;
    color: #FFF;
  }
`
export const ContentMobile = styled.div`
img{
  z-index: 1;
  cursor: pointer;
  width: 30px;
  position: absolute;
  top: 15px;
  right: 15px;
  display: none;
  @media(max-width: 1000px){
    display: block;  
  }
}
`