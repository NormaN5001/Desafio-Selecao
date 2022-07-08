import React from 'react'
import * as S from './Styles'
import ComputerLogo from './computer-logo/ComputerLogo'
import CodeImg from '../../../images/all/code-img.png'

export default function Formation(){

  return(
      <S.FormationSection>
        <S.FormationLeft>
          <S.TitleBox>Formação</S.TitleBox>
          <S.FrontEnd>
            <ComputerLogo/>
            <S.Texts>
              <h5>Front-End</h5>
              <p>Quem trabalha com Front End é responsável por desenvolver por meio do código uma interface gráfica e, normalmente, com as tecnologias base da Web: HTML, CSS e JavaScript.</p>
            </S.Texts>
          </S.FrontEnd>

          <S.BackEnd>
            <ComputerLogo/>
            <S.Texts>
              <h5>BackEnd-End</h5>
              <p>O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio, validações e garantias num ambiente restrito ao usuário final (ou seja, onde ele não consegue acessar ou manipular algo).</p>
            </S.Texts>
          </S.BackEnd>
        </S.FormationLeft>
        <img src={CodeImg} alt="Imagem de um código"/>
      </S.FormationSection>
  )
}