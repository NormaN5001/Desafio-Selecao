import React from 'react'
import * as S from './Styles'

export default function CardSubscribe(){

  return(
      <S.Card>
        <S.Spots>
          <S.Dot></S.Dot>
          <S.Dot></S.Dot>
          <S.Dot></S.Dot>
        </S.Spots>
        <S.LineBlue></S.LineBlue>
        <S.TitleCard>Inscreva-se no Vai na Web!</S.TitleCard>
        <S.SubTitle><span>Inscrições</span> 02 a 21 de Agosto</S.SubTitle>
      </S.Card>
  )
}