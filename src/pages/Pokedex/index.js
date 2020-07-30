import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPokedex } from '../../store/pokedex/pokedexActions'
import Details from '../../components/Details'
import Header from '../../components/Header'

function Pokedex(id) {
  const pokedexData = useSelector((state) => state.pokedex.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokedex())
  }, [dispatch])

  const pokedexID = id.location.state.id
  const pokedexFilter = pokedexData.filter((x) => x.id === pokedexID)

  return (
    <div className='container'>
      <Header />
      {pokedexFilter.map((pokedex) => (
        <Details key={pokedex.id} pokedex={pokedex} />
      ))}
    </div>
  )
}

export default Pokedex
