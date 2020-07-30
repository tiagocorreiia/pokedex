import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  fetchPokedex,
  fetchPokedexClear,
} from '../../store/pokedex/pokedexActions'

import './styles.scss'

function Title({ pokedex }) {
  const dispatch = useDispatch()
  const offsetPage = 0

  function resetOffset() {
    dispatch(fetchPokedexClear([]))
    dispatch(fetchPokedex(offsetPage))
  }

  return (
    <div className='title'>
      <div className='flex-container'>
        <h2> {pokedex.name}</h2>
        <Link to='/'>
          <button onClick={() => resetOffset()}>Voltar</button>
        </Link>
      </div>
    </div>
  )
}

export default Title
