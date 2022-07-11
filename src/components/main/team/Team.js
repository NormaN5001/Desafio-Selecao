import React from 'react'
import * as S from './Styles'
import styled from 'styled-components'
import SearchTeam from './search/SearchTeam'
import TitleBox from '../styles-texts/TitleBox'

export default function Team(){

  const TitleTeam = styled(TitleBox)`
    @media(max-width: 1000px){
      text-align: center;
    }
  `

  return(
      <S.TeamSection id="team">
        <TitleTeam>Equipe</TitleTeam>
        <SearchTeam/>
      </S.TeamSection>
  )
}