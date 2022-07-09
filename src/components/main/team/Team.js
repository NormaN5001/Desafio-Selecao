import React from 'react'
import * as S from './Styles'
import SearchTeam from './search/SearchTeam'

export default function Team(){

  return(
      <S.TeamSection>
        <S.TitleBox>Equipe</S.TitleBox>
        <SearchTeam/>
      </S.TeamSection>
  )
}