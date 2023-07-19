import { MemoryRouter } from "react-router";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { render, screen } from "@testing-library/react";

describe('Test on PriveteRoute', () => {
  test('should show children if auth', () => {

    Storage.prototype.setItem = jest.fn();
    const contextValue = {
      logged: true,
      user: {
        id: 'abc',
        name: 'Juan Carlos'
      }
    }
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoute>
            <h1>Private Route</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Private Route')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman');
  })

})