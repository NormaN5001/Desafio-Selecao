import React from 'react'
import * as S from './Styles'

export default function MenuMobile(){

  return(
    <>
      <S.MenuMobile>
          <S.UListMobile>
            <S.Items><a href="#about">Sobre</a></S.Items>
            <S.Items><a href="#formation">Formação</a></S.Items>
            <S.Items><a href="#team">Equipe</a></S.Items>
            <S.Items><a href="#events">Eventos</a></S.Items>
            <S.Items><a href="#footer">Contatos</a></S.Items>
          </S.UListMobile>
      </S.MenuMobile>
    </>
  )
}