import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokedex } from '../../store/pokedex/pokedexActions'
import Card from '../Card'
import Header from '../Header'
import LoadMore from '../LoadMore'

function Pokedex() {
  const pokedex = useSelector((state) => state.pokedex.data)
  const offsetPage = useSelector((state) => state.page.currentPage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokedex(offsetPage))
  }, [dispatch, offsetPage])

  return (
    <div>
      <div className='container'>
        <Header />
        <div className='flex-container'>
          {pokedex.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        <LoadMore />
      </div>
    </div>
  )
}

export default Pokedex
