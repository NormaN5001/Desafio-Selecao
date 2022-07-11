import styled from 'styled-components';

export const MenuMobile = styled.nav`
  display: none;
  @media(max-width: 1000px){
    display: block;  
  }
`
export const UListMobile = styled.ul`
  z-index: 1;
  position: relative;
  display: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  list-style: none;
  border-left: #000 solid 2px;
  border-bottom: #000 solid 2px;
  background-image: linear-gradient(to bottom right, #00145D 40%, #FF611E 200%);
  width: 250px;
  height: 300px;
`
export const Items = styled.li`
  color: #FFFFFF;
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  line-height: 50px;
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 0;
  &:hover{
    background-color: #00145D;
    border: none;
  }
  a{
    text-decoration: none;
    color: #FFF;
  }
`