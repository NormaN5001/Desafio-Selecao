import React from 'react'
import * as S from './Styles'
import Card from './card-subscribe/Card'

export default function Subscription(){

  return(
      <S.SubscriptionSection>
        <S.Contents>
          <S.TitleBox><span>/ /</span> Quer construir uma carreira de sucesso como Desenvolvedor(a) Front-end?</S.TitleBox>
          <Card/>
        </S.Contents>
      </S.SubscriptionSection>
  )
}