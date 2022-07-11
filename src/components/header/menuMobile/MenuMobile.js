import React from 'react'
import * as S from './Styles'

export default function MenuMobile(){


  const goToAbout = ()=>{
    window.scrollTo({
      top: 1000,
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
      <S.MenuMobile>
          <S.UListMobile>
            <S.Items onClick={()=>{goToAbout()}}>Sobre</S.Items>
            <S.Items onClick={()=>{goToFormation()}}>Formação</S.Items>
            <S.Items onClick={()=>{goToTeam()}}>Equipe</S.Items>
            <S.Items onClick={()=>{goToEvents()}}>Eventos</S.Items>
            <S.Items onClick={()=>{goToContacts()}}>Contatos</S.Items>
          </S.UListMobile>
      </S.MenuMobile>
    </>
  )
}