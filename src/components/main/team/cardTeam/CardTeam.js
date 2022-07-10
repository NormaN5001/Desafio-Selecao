import React from 'react'
import * as S from './Styles'

const CardTeam = ({photo, name, office}) =>{

  return(
      <S.Person>
        <img src={photo} alt="Foto de um integrante da VNW"/>
        <S.Texts>
          <S.Name>{name}</S.Name>
          <S.Office>{office}</S.Office>
        </S.Texts>
      </S.Person>
  )
}
export default CardTeam