import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../auth/pages/Login'
import HeroesRoutes from '../heroes/routes/HeroesRoutes'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/*' element={<HeroesRoutes />} />
      </Routes>
    </>
  )
}

export default AppRouter