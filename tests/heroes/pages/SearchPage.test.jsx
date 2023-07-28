import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from "../../../src/heroes/pages/SearchPage"


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Test on SearchPage.test.jsx', () => {
  test('should show default values', () => {

    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>

    )
    expect(container).toMatchSnapshot();
    screen.debug()
  })
  test('should show lantern and input value in queryString', () => {

    render(
      <MemoryRouter initialEntries={['/search?q=lantern']}>
        <SearchPage />
      </MemoryRouter>
    );
    // screen.debug()
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('lantern');
    const img = screen.getByRole('img');
    expect(img.src).toContain('/assets/heroes/dc-green.jpg');
    const alert = screen.getByLabelText('alert-danger');
    expect(alert.style.display).toBe('none');
  })
  test('should show erron if doesent find hero', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage />
      </MemoryRouter>
    );
    const alert = screen.getByLabelText('alert-danger');
    expect(alert.style.display).toBe('');
  })

  test('should call navigate to new screen', () => {
    const inputValue = 'lantern';

    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { name: 'searchText', value: inputValue } })
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`)

  });
})