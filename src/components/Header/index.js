import React from 'react'
import logo from '../../assets/logo.png'
import search from '../../assets/search-icon.png'
import './styles.scss'
import { useDispatch } from 'react-redux'
import { fetchSearch } from '../../store/search/searchActions'
import { Link } from 'react-router-dom'

function Header({ hiddenSearch }) {
  const dispatch = useDispatch()

  function handleSearch(e) {
    const searchTerm = e.target.value
    dispatch(fetchSearch(searchTerm))
  }

  return (
    <header>
      <div className='flex-container'>
        <img src={logo} alt='' />
        {hiddenSearch ? (
          ''
        ) : (
          <div className='search'>
            <div>
              <input
                type='text'
                placeholder='Busque por nome ou número'
                onChange={(e) => handleSearch(e)}
              />
              <Link to='/result'>
                <button>
                  <img src={search} alt='' />
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
