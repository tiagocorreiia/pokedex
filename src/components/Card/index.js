import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'
import { useDispatch } from 'react-redux'
import { fetchPokedex } from '../../store/pokedex/pokedexActions'

function Card({ pokemon, offset }) {
  const dispatch = useDispatch()
  const offsetPage = offset - 1
  const imageURL = 'https://pokeres.bastionbot.org/images/pokemon/'

  function handleOffset() {
    dispatch(fetchPokedex(offsetPage))
  }

  return (
    <div className='card'>
      <figure>
        <img src={`${imageURL}${pokemon.id}.png`} alt='' />
      </figure>
      <div className='info'>
        <span>Nº {pokemon.id} </span>
        <h2> {pokemon.name} </h2>
        <ul>
          {pokemon.types.map((itemType) => (
            <li key={itemType.type.url} className={itemType.type.name}>
              <p> {itemType.type.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <Link
        to={{ pathname: `/pokedex/${pokemon.id}`, state: { id: pokemon.id } }}
      >
        <button className='details' onClick={() => handleOffset()}>
          Ver Detalhes
        </button>
      </Link>
    </div>
  )
}

export default Card
