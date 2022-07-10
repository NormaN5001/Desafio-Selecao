import React, {useEffect} from 'react'
import { createGlobalStyle } from "styled-components"
import styled from 'styled-components';

import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

const GlobalStyle = createGlobalStyle`
   *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`
const Container = styled.section`
`

export default function App(){

useEffect(()=>{
    document.title = "Desafio de Seleção"
  }, [])

  return(
    <Container>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
      
    </Container>
    
  )
}