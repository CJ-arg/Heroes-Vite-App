import React from 'react'
import HeroeList from '../components/HeroeList'

const MarvelPage = () => {
  return (
    <>
      <h1> Marvel Comics</h1>
      <hr />
      <ul>
        <HeroeList publisher={{ publisher: "Marvel Comics" }} />
      </ul>
    </>
  )
}

export default MarvelPage