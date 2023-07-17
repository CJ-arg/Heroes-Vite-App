import { Navbar } from '../../ui'

const HeroesRoutes = () => {
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

export default HeroesRoutes