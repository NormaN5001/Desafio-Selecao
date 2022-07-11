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
            <S.Items><a href="#about">Sobre</a></S.Items>
            <S.Items><a href="#formation">Formação</a></S.Items>
            <S.Items><a href="#team">Equipe</a></S.Items>
            <S.Items><a href="#events">Eventos</a></S.Items>
            <S.Items><a href="#footer">Contatos</a></S.Items>
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