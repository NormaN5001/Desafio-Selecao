import styled from 'styled-components';

export const UList = styled.ul`
  display: flex;
  list-style: none;
`
export const Items = styled.li`
  font-size: 25px;
  padding: 0 30px 3px 30px;
  transition: 0.3s;
  border: solid 2px transparent;
  border-radius: 20px;
  &:hover{
    border: solid #FFAC2D 2px;
    cursor: pointer;
  }
`