import React from 'react'
import * as S from './Styles'

import TopHeader from './navegation/Navegation'
import SubscriptionHeader from './subscription/Subscription'

export default function Header(){

  return(
    <>
      <S.HeaderSection>
        <TopHeader/>
        <SubscriptionHeader/>
      </S.HeaderSection>
    </>
  )
}