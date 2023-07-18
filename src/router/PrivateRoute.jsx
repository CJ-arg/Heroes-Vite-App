import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate } from 'react-router'

export const PrivateRoute = ({ children }) => {

  const { logged } = useContext(AuthContext);

  return (logged) ? children : <Navigate to="/login" />
}
