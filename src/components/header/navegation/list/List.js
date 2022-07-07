import React from 'react'
import * as S from './Styles'


export default function List(){

  return(
    <nav>
      <S.UList>
        <S.Items>Sobre</S.Items>
        <S.Items>Formação</S.Items>
        <S.Items>Equipe</S.Items>
        <S.Items>Eventos</S.Items>
        <S.Items>Contatos</S.Items>
      </S.UList>
    </nav>
  )
}