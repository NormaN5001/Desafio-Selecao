import React from 'react'
import * as S from './Styles'
import Search from './search/Search'

export default function Team(){

  return(
      <S.TeamSection>
        <S.TitleBox>Equipe</S.TitleBox>
        <Search/>
      </S.TeamSection>
  )
}