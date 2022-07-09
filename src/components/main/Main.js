import React from 'react'
import * as S from './Styles'
import About from './about/About'
import Formation from './formation/Formation'
import Team from './team/Team'
import Events from './events/Events'

export default function Main(){

  return(
      <S.MainSection>
        <About/>
        <Formation/>
        <Team/>
        <Events/>
      </S.MainSection>
  )
}