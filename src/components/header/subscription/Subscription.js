import React from 'react'
import * as S from './Styles'
import Card from './card-subscribe/Card'

export default function Subscription(){

  return(
        <S.Contents>
          <S.TitleBox><span>/ /</span> Quer construir uma carreira de sucesso como Desenvolvedor(a) Front-end?</S.TitleBox>
          <Card/>
          <S.TextLink>Link para o formulário: <span>bit.ly/CarreiraVaiNaWeb</span></S.TextLink>
        </S.Contents>
  )
}