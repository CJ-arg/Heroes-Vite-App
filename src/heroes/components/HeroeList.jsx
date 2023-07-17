import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'

const HeroeList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher)

  return (
    <ul>
      {heroes.map(hero => { return (<li key={hero.id}> {hero.superhero} </li>) })}

    </ul>
  )
}

export default HeroeList