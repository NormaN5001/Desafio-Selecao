import React from 'react'
import { createGlobalStyle } from "styled-components"
import styled from 'styled-components';

import Navegation from './components/header/navegation/Navegation'

const GlobalStyle = createGlobalStyle`
   *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`
const Container = styled.section`
  margin: 0 5vw 0 5vw;
  @media(max-width: 1024px){
    margin: 0 30px 0 30px;
  }
  @media(max-width: 500px){
    margin: 0;
  }
`

export default function App(){

  return(
    <Container>
      <GlobalStyle/>
      <Navegation/>
    </Container>
    
  )
}