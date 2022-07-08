import React from 'react'
import * as S from './Styles'
import About from './about/About'
import Formation from './formation/Formation'

export default function Main(){

  return(
      <S.MainSection>
        <About/>
        <Formation/>
      </S.MainSection>
  )
}