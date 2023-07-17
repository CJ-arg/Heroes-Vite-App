import React from 'react'
import HeroeList from '../components/HeroeList'

const DcPage = () => {
  return (
    <>
      <h1> DC Comics</h1>
      <hr />
      <ul>
        <HeroeList publisher={{ publisher: "DC Comics" }} />
      </ul>
    </>
  )
}

export default DcPage