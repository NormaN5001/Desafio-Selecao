import styled from 'styled-components';
import SearchImg from '../../../../images/all/search.png'

export const SectionInput = styled.section`
  margin-top: 50px;
  height: 109px;
  background-color: #0F2260;
  display: flex;
  align-items: center;

  input{
    outline: none;
    margin-left: 7%;
    border: solid #FFFFFF 1px;
    background-color: #0F2260;
    border-radius: 4px;
    width: 300px;
    height: 37px;
    color: #BCE0FD;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    padding-left: 5px;
    ::placeholder {
    color: #BCE0FD;
    font-style: italic;
    }

    background-image: url(${SearchImg});
    background-repeat: no-repeat;
    background-position: right;
    @media(max-width: 500px){
      width: 88%;
      height: 60px;
      background-size: 50px;
    }
  }
  button{
    width: 37px;
    height: 37px;
  }
`
export const TeamSection = styled.section`
  margin-left: -20px;
  display: flex;
  flex-wrap: wrap;
  @media(max-width: 1200px){
    margin-left: 0;
  }
`