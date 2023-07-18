import React from 'react'
import HeroCard from '../components/HeroCard'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router'
import queryString from 'query-string'

const Search = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)

  const { searchText, onInputChange } = useForm({
    searchText: ''
  })

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  }
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder='Search A Hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange} />
            <button className='btn btn-outline-danger mt-1'> Search </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          <div className='alert alert-primary'> Search a Hero</div>
          <div className='alert alert-danger'> No results for that input <b>{q}</b> </div>
          {/* <HeroCard /> */}
        </div>
      </div>

    </>

  )
}

export default Search