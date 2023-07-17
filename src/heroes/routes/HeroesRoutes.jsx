import { Navigate, Route, Routes } from 'react-router'
import { Navbar } from '../../ui/components'
import MarvelPage from '../pages/MarvelPage'
import DcPage from '../pages/DcPage'
import React from 'react'
import Search from '../pages/search'
import Hero from '../pages/Hero'


const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DcPage />} />
          <Route path='search' element={<Search />} />
          <Route path='hero' element={<Hero />} />
          <Route path='/' element={<Navigate to='/marvel' />} />
        </Routes>

      </div>
    </>
  )
}

export default HeroesRoutes