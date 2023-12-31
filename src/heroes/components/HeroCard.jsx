import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

  const heroImageUrl = `/assets/heroes/${id}.jpg`
  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img src={heroImageUrl} alt={superhero} className='card-img animate__animated animate__pulse' />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{superhero}</h5>
              <p>{alter_ego}</p>
              {(characters !== alter_ego) && <p>{characters}</p>}
            </div>
            <p className='card-text'> <small className='text-muted'>{first_appearance}</small> </p>
            <div className='animate__animated animate__backInUp'> <Link to={`/hero/${id}`}> More info...</Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCard