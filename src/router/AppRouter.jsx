import { Navigate, Route, Routes } from 'react-router'
import MarvelPage from '../heroes/pages/MarvelPage'
import DcPage from '../heroes/pages/DcPage'
import Login from '../auth/pages/Login'
import { Navbar } from '../ui'

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='marvel' element={<MarvelPage />} />
        <Route path='dc' element={<DcPage />} />
        <Route path='login' element={<Login />} />
        <Route path='/' element={<Navigate to='/marvel' />} />
      </Routes>
    </>
  )
}

export default AppRouter