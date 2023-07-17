import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import HeroCard from './HeroCard'

const HeroeList = (publisher) => {
  const heroes = getHeroesByPublisher(publisher)

  return (
    <div className='row rows-cols-1 row-cols-md-2 g-3' >
      {heroes.map(hero => (<HeroCard key={hero.id} {...hero} />))}

    </div>
  )
}

export default HeroeList