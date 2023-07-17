import React from 'react'
import { useParams } from 'react-router'
import { getHeroById } from '../helpers/getHeroById'

const Hero = () => {
  const { id } = useParams()
  const hero = getHeroById(id)
  console.log(hero);
  return (
    <h1>Hero {id}</h1>
  )
}

export default Hero