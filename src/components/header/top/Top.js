import React from 'react'
import * as S from './Styles'

import Logo from '../../../images/all/logo-vnw-small.png'

export default function Top(){

  const goToAbout = ()=>{
    window.scrollTo({
      top: 1100,
      behavior: "smooth"
    })
  }
  const goToFormation = ()=>{
    window.scrollTo({
      top: 1900,
      behavior: "smooth"
    })
  }
  const goToTeam = ()=>{
    window.scrollTo({
      top: 2850,
      behavior: "smooth"
    })
  }



  return(
    <>
      <S.TopSection>
        <img src={Logo} alt="Logo do Vai na Web."/>
        <nav>
          <S.UList>
            <S.Items onClick={()=>{goToAbout()}}>Sobre</S.Items>
            <S.Items onClick={()=>{goToFormation()}}>Formação</S.Items>
            <S.Items onClick={()=>{goToTeam()}}>Equipe</S.Items>
            <S.Items>Eventos</S.Items>
            <S.Items>Contatos</S.Items>
          </S.UList>
      </nav>
      </S.TopSection>
    </>
  )
}