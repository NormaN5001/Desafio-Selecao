import React, { useState, useEffect } from 'react'
import * as S from './StylesSearchTeam'
import InfosTeam from './InfosTeam'
import CardTeam from '../cardTeam/CardTeam'

export default function SearchTeam(){

  const [team, setTeam] = useState(InfosTeam)
  const [teamFilter, setTeamFilter] = useState([])

  useEffect(()=>{
    setTeamFilter(team)
  }, [])
 
  return(
      <>
        <S.SectionInput>
          <input type="text" placeholder="Pesquisar..." onChange={(event)=>{
            
            if(event.target.value !== "" || null){
              const NamesFilter = team.filter(item => {
              if(item.name.toLowerCase().includes(event.target.value.toLowerCase())){
                return true;
              }
            })
            setTeamFilter(NamesFilter)
          }else{
            setTeamFilter(team)
          }
          }}/>

        </S.SectionInput>
        <S.TeamSection>
          {teamFilter.map(item => (
            <CardTeam photo={item.photo} name={item.name} office={item.office}/>
          ))}
        </S.TeamSection>
      </>
  )
}