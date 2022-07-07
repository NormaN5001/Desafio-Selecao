import styled from 'styled-components';

export const TopSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  img{
    height: 3vw;
    position: fixed;
    left: 5vw;
  }
`
export const UList = styled.ul`
  display: flex;
  list-style: none;
`
export const Items = styled.li`
  color: #FFFFFF;
  font-size: 1.4vw;
  padding: 0 30px 3px 30px;
  transition: 0.3s;
  border: solid 2px transparent;
  border-radius: 20px;
  &:hover{
    border: solid #FFAC2D 2px;
    cursor: pointer;
  }
  @media(max-width: 1200px){
    font-size: 1.8vw;
  }
`