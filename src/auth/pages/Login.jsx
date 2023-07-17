import React from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const navigate = useNavigate()

  const onLogin = () => {
    navigate('/dc', {
      replace: true,
    })
  }
  return (

    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button className='btn btn-info btn-sm'
        onClick={onLogin}>
        Login
      </button>
    </div>
  )
}

export default Login