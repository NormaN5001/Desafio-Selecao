import styled from 'styled-components';

export const FormationSection = styled.section`
  margin-top: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CodeImg = styled.img`
  width: 50%;
    @media(max-width: 1000px){
      display: none;
    }
`
export const FormationLeft = styled.div`
  width: 100%;
  @media(max-width: 1000px){
    text-align: center;
  }
`
export const FrontEnd = styled.div`
  display: flex;
  margin-top: 30px;
  @media(max-width: 1000px){
    margin-top: 70px;
    justify-content: center;
  }
`
export const Texts = styled.div`
  margin-left: 50px;
  @media(max-width: 1200px){
    margin-left: 20px; 
  }
  @media(max-width: 1000px){
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0; 
    text-align: center;
  }
`
export const BackEnd = styled.div`
  display: flex;
  margin-top: 50px;
  @media(max-width: 1000px){
    justify-content: center;
  }
`
export const LogoPc = styled.img`
  width: 120px;
  height: 120px;
  @media(max-width: 1200px){
    width: 90px;
    height: 90px;
  }
  @media(max-width: 1000px){
    display: none;
  }
`