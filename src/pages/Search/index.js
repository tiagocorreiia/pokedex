import React from 'react'
import Header from '../../components/Header'
import Card from '../../components/Card'

function Search() {
  const getObject = localStorage.getItem('pokemon')
  const pokemon = JSON.parse(getObject)

  return (
    <div className='container'>
      <Header />
      <h2>Resultado da busca</h2>
      <div className='flex-container'>
        <Card pokemon={pokemon} offset={pokemon.id} />
      </div>
    </div>
  )
}

export default Search
