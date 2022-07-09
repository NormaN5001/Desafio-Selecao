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
    font-size: 1.2vw;
    padding-left: 5px;
    ::placeholder {
    color: #BCE0FD;
    font-style: italic;
    }

    background-image: url(${SearchImg});
    background-repeat: no-repeat;
    background-position: right;
  }
  button{
    width: 37px;
    height: 37px;
  }
`
export const TeamSection = styled.section`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`
export const Person = styled.div`
  margin: 10px 10px 0 0;
  position: relative;
  width: 18vw;
  height: 36vh;
  img{
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
`
export const Texts = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(transparent, #0F2260);
`
export const Name = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2vw;
  font-weight: bold;
  color: #FFFFFF;
`
export const Function = styled.p`
  margin: 8px 0 12px 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8vw;
  font-weight: 400;
  color: #FFFFFF;
`