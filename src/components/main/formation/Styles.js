import styled from 'styled-components';

export const FormationSection = styled.section`
  margin-top: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    width: 50%;
    @media(max-width: 1024px){
      width: 45%;
    }
  }
`
export const FormationLeft = styled.div`
`
export const FrontEnd = styled.div`
  display: flex;
  margin-top: 30px;
  img{
    width: 120px;
    height: 120px;
    @media(max-width: 1200px){
      width: 90px;
      height: 90px;
    }
  }
`
export const Texts = styled.div`
  margin-left: 50px;
  @media(max-width: 1200px){
  margin-left: 20px; 
  }
`
export const BackEnd = styled.div`
  display: flex;
  margin-top: 50px;
  img{
    width: 120px;
    height: 120px;
    @media(max-width: 1200px){
      width: 90px;
      height: 90px;
    }
  }
`