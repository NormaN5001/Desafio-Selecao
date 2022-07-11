import React from 'react'
import * as S from './Styles'
import NotebookImg from '../../../images/all/notebook.png'
import TitleBox from '../styles-texts/TitleBox'

export default function Events(){

  return(
      <S.EventsSection id="events">
        <TitleBox>Eventos</TitleBox>
        <S.Content>
          <img src={NotebookImg} alt="Imagem de um notebook"/>
          <S.Texts>
            <h5>Tech Girls</h5>
            <p>Com o objetivo de promover network entre mulheres de tecnologia, conectar talentos femininos com oportunidades no mercado da tecnologia, oferecer experiências de troca através de eventos com mulheres que já têm experiência no mercado da tecnologia, acelerar os talentos com ajuda para custeio de luz e internet para facilitar o processo de estudo, promover mentoria para as participantes do grupo.</p>
          </S.Texts>
        </S.Content>
      </S.EventsSection>
  )
}