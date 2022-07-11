import React from 'react'
import * as S from './Styles'
import Logo from '../../../images/all/logo-vnw-big.png'
import TitleBox from '../styles-texts/TitleBox'

export default function About(){

  return(
      <S.AboutSection id="about">
        <S.Logo src={Logo} alt="Logo do Vai na Web."/>
        <S.AboutText>
          <TitleBox>Sobre o Vai na Web</TitleBox>
          <S.TextAbout>
            <p>Fundado em 2017, no Complexo do Alemão, o Vai na Web vem impactando e transformando a vida de jovens das classes C, D e E do Rio de Janeiro e de outros 18 estados do Brasil.</p>
            <p>Muito mais do que compartilhar conhecimento de programação front-end, o programa oferece aulas de inglês e desenvolvimento de habilidades humanas e socioemocionais, que preparam os futuros desenvolvedores para o mundo do trabalho e oferecem um espaço em que é possível descobrir a riqueza de áreas que a tecnologia tem.</p>
            <p>Com o objetivo de acentuar a potência mundial que é a juventude, o Vai na Web tem se tornado cada vez mais um lugar de transformação. Através da cultura do afeto, a equipe do programa entende que “educar não é impor informação, é trocar” e sua maior riqueza, segundo a coordenadora executiva, Cris dos Prazeres, “é respeitar a geração da juventude que está nesse processo de compartilhar”.</p>
          </S.TextAbout>
        </S.AboutText>
      </S.AboutSection>
  )
}