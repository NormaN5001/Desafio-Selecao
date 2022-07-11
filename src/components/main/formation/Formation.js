import React from 'react'
import * as S from './Styles'
import CodeImg from '../../../images/all/code-img.png'
import ComputerLogo from '../../../images/all/computer-logo.png'
import TitleBox from '../styles-texts/TitleBox'
import SubTitleFormation from '../styles-texts/SubTitleFormation'
import NormalText from '../styles-texts/NormalText'

export default function Formation(){

  return(
      <S.FormationSection id="formation">
        <S.FormationLeft>
          <TitleBox>Formação</TitleBox>
          <S.FrontEnd>
            <S.LogoPc src={ComputerLogo} alt="Logo de um computador"/>
            <S.Texts>
              <SubTitleFormation>Front-End</SubTitleFormation>
              <NormalText>Quem trabalha com Front End é responsável por desenvolver por meio do código uma interface gráfica e, normalmente, com as tecnologias base da Web: HTML, CSS e JavaScript.</NormalText>
            </S.Texts>
          </S.FrontEnd>

          <S.BackEnd>
            <S.LogoPc src={ComputerLogo} alt="Logo de um computador"/>
            <S.Texts>
              <SubTitleFormation>Back-End</SubTitleFormation>
              <NormalText>O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio, validações e garantias num ambiente restrito ao usuário final (ou seja, onde ele não consegue acessar ou manipular algo).</NormalText>
            </S.Texts>
          </S.BackEnd>
        </S.FormationLeft>
        <S.CodeImg src={CodeImg} alt="Imagem de um código"/>
      </S.FormationSection>
  )
}