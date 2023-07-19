import { render, screen } from "@testing-library/react"
import { PublicRoute } from "../../src/router/PublicRoute"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { MemoryRouter, Route, Routes } from "react-router"
import React from "react"

describe('Test on PublicRote', () => {
  test('should show children if not Auth', () => {
    const contextValue = {
      logged: false
    }
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Public Route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    // screen.debug()
    expect(screen.getByText('Public Route')).toBeTruthy()
  })
  test('should navigate if auth', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Juan',
        id: 'abc'
      }
    }
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='/login' element={
              <PublicRoute>
                <h1>Ruta pública</h1>
              </PublicRoute>
            } />
            <Route path='/marvel' element={<h1>Marvel PAGE</h1>} />
          </Routes>
        </MemoryRouter>

      </AuthContext.Provider>
    );
    screen.debug()
    expect(screen.getByText('Marvel PAGE')).toBeTruthy();
  })
})