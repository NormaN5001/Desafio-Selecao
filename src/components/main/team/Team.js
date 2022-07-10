import React from 'react'
import * as S from './Styles'
import SearchTeam from './search/SearchTeam'
import TitleBox from '../styles-texts/TitleBox'

export default function Team(){

  return(
      <S.TeamSection>
        <TitleBox>Equipe</TitleBox>
        <SearchTeam/>
      </S.TeamSection>
  )
}