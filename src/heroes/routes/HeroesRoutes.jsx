import { Navigate, Route, Routes } from 'react-router'
import { Navbar } from '../../ui'
import MarvelPage from '../pages/MarvelPage'
import DcPage from '../pages/DcPage'
import React from 'react'


const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='marvel' element={<MarvelPage />} />
        <Route path='dc' element={<DcPage />} />
        <Route path='/' element={<Navigate to='/marvel' />} />
      </Routes>
    </>
  )
}

export default HeroesRoutes