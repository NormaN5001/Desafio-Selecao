import React, {useState} from 'react'
import * as S from './Styles'

import Logo from '../../../images/all/logo-vnw-small.png'
import MenuMobile from '../menuMobile/MenuMobile'
import IconClose from '../../../images/all/icon-mobile-close.png'
import IconOpen from '../../../images/all/icon-mobile-open.png'

export default function Navegation(){

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

  const [menu, setMenu] = useState(false)

  const SetMenuMobile = () =>{
    setMenu(!menu)
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
      </nav>
      </S.TopSection>
      <S.ContentMobile>
        {menu && <MenuMobile/>}
        {menu ? <img onClick={()=>{SetMenuMobile()}} src={IconOpen} alt="Icone para abrir o menu"/> : <img onClick={()=>{SetMenuMobile()}} src={IconClose} alt="Icone para fechar o menu"/>}
        
      </S.ContentMobile>
    </>
  )
}