import React from 'react'
import * as S from './Styles'

import TopHeader from './top/Top'
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