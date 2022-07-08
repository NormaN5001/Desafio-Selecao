import React, { useState, useEffect } from 'react'
import * as S from './Styles'

import Photo1 from '../../../../images/team/photo2.jpg'
import Photo2 from '../../../../images/team/photo6.jpg'
import Photo3 from '../../../../images/team/photo10.jpg'
import Photo4 from '../../../../images/team/photo4.jpg'
import Photo5 from '../../../../images/team/photo12.jpg'
import Photo6 from '../../../../images/team/photo1.jpg'
import Photo7 from '../../../../images/team/photo5.jpg'
import Photo8 from '../../../../images/team/photo9.jpg'
import Photo9 from '../../../../images/team/photo13.jpg'
import Photo10 from '../../../../images/team/photo14.jpg'
import Photo11 from '../../../../images/team/photo3.jpg'
import Photo12 from '../../../../images/team/photo7.jpg'
import Photo13 from '../../../../images/team/photo11.jpg'
import Photo14 from '../../../../images/team/photo15.jpg'
import Photo15 from '../../../../images/team/photo8.jpg'


export default function Search(){

  const [team, setTeam] = useState([])


  useEffect(()=>{
    setTeam([
      {
        name: "Dimitri Duque",
        function: "#voluntários",
        photo: `${Photo1}`
      },
      {
        name: "Hugo Sabino",
        function: "#voluntários",
        photo: `${Photo2}`
      },
      {
        name: "Karla De Melo",
        function: "#voluntários",
        photo: `${Photo3}`
      },
      {
        name: "Paula Misan",
        function: "#voluntários",
        photo: `${Photo4}`
      },
      {
        name: "Thais Brait",
        function: "#voluntários",
        photo: `${Photo5}`
      },
      {
        name: "Aline Fróes",
        function: "#CEO",
        photo: `${Photo6}`
      },
      {
        name: "Aline Nogueira",
        function: "#Agente Sociemocional",
        photo: `${Photo7}`
      },
      {
        name: "Andrea Marinho",
        function: "#Psicóloga",
        photo: `${Photo8}`
      },
      {
        name: "Cris Dos Prazeres",
        function: "#Coordenadora Executiva",
        photo: `${Photo9}`
      },
      {
        name: "Karynne Moreira",
        function: "#Facilitadora Técnica",
        photo: `${Photo10}`
      },
      {
        name: "Luzia Merlim",
        function: "#Agente Sociemocional",
        photo: `${Photo11}`
      },
      {
        name: "Mariana Correia",
        function: "#Coordenadora Administrativa",
        photo: `${Photo12}`
      },
      {
        name: "Mariana Tiago",
        function: "#Agente de Estratégia",
        photo: `${Photo13}`
      },
      {
        name: "Marlon Yuri",
        function: "#Instrutor Técnico",
        photo: `${Photo14}`
      },
      {
        name: "Priscila Tufani",
        function: "#Agente de Estratégia",
        photo: `${Photo15}`
      },
    ])
  }, [])

  

  return(
      <>
        <S.SectionInput>
          <input type="text" placeholder="Pesquisar..." onChange={(event)=>{
            const NamesFilter = team.filter(item => {
              if(item.name.toLowerCase().includes(event.target.value.toLowerCase())){
                return true;
              }
            })
            setTeam(NamesFilter)
          }}/>

        </S.SectionInput>
        <S.TeamSection>
          {team.map(item => (

              <S.Person>
                <img src={item.photo} alt="Foto de um integrante da VNW"/>
                <S.Texts>
                  <S.Name>{item.name}</S.Name>
                  <S.Function>{item.function}</S.Function>
                </S.Texts>
              </S.Person>

            ))}
          </S.TeamSection>
      </>
  )
}