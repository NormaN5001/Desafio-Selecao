import React from 'react'
import * as S from './Styles'

import Logo from '../../../images/all/logo-vnw-small.png'

export default function Top(){

  return(
    <>
      <S.TopSection>
        <img src={Logo} alt="Logo do Vai na Web."/>
        <nav>
          <S.UList>
            <S.Items>Sobre</S.Items>
            <S.Items>Formação</S.Items>
            <S.Items>Equipe</S.Items>
            <S.Items>Eventos</S.Items>
            <S.Items>Contatos</S.Items>
          </S.UList>
      </nav>
      </S.TopSection>
    </>
  )
}