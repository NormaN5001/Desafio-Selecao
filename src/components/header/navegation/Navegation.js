import React from 'react'
import * as S from './Styles'

import Logo from '../../../images/all/logo-vnw-small.png'
import List from './list/List'
export default function Navegation(){

  return(
    <>
      <S.NavegationSection>
        <img src={Logo} alt="Logo do Vai na Web."/>
        <List/>
      </S.NavegationSection>
    </>
  )
}