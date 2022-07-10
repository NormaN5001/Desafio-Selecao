import React, {useState} from 'react'
import * as S from './Styles'

import Logo from '../../../images/all/logo-vnw-small.png'

export default function Top(){

  const goToTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

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
  const goToEvents = ()=>{
    window.scrollTo({
      top: 4600,
      behavior: "smooth"
    })
  }
  const goToContacts = ()=>{
    window.scrollTo({
      top: 5300,
      behavior: "smooth"
    })
  }



  return(
    <>
      <S.TopSection>
        <img onClick={()=>{goToTop()}} src={Logo} alt="Logo do Vai na Web."/>
        <nav>
          <S.UList>
            <S.Items onClick={()=>{goToAbout()}}>Sobre</S.Items>
            <S.Items onClick={()=>{goToFormation()}}>Formação</S.Items>
            <S.Items onClick={()=>{goToTeam()}}>Equipe</S.Items>
            <S.Items onClick={()=>{goToEvents()}}>Eventos</S.Items>
            <S.Items onClick={()=>{goToContacts()}}>Contatos</S.Items>
          </S.UList>

          <S.UListMobile>
            <S.Items onClick={()=>{goToAbout()}}>Sobre</S.Items>
            <S.Items onClick={()=>{goToFormation()}}>Formação</S.Items>
            <S.Items onClick={()=>{goToTeam()}}>Equipe</S.Items>
            <S.Items onClick={()=>{goToEvents()}}>Eventos</S.Items>
            <S.Items onClick={()=>{goToContacts()}}>Contatos</S.Items>
          </S.UListMobile>
      </nav>
      </S.TopSection>
    </>
  )
}