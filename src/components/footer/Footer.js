import React from 'react'
import * as S from './Styles'

import FacebookImg from '../../images/all/facebook.png'
import InstaImg from '../../images/all/insta.png'
import LinkedinImg from '../../images/all/linkedin.png'
import MediumImg from '../../images/all/medium.png'
import YoutubeImg from '../../images/all/youtube.png'

export default function Footer(){

  return(
      <S.FooterSection>
        <S.TitleBox>Contato</S.TitleBox>
        <S.Networks>
          <p>Siga nossas redes sociais e fique conectado com todas as novidades.</p>
          <S.Images>
            <img src={FacebookImg} alt="Logo Facebook"/>
            <img src={InstaImg} alt="Logo Instagram"/>
            <img src={LinkedinImg} alt="Logo Linkedin"/>
            <img src={MediumImg} alt="Logo Medium"/>
            <img src={YoutubeImg} alt="Logo Youtube"/>
          </S.Images>
        </S.Networks>
      </S.FooterSection>
  )
}