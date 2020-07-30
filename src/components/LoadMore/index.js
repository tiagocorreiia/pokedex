import React from 'react'
import './styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { nextPage, prevPage } from '../../store/pagination/paginationActions'
import { fetchPokedexClear } from '../../store/pokedex/pokedexActions'

function LoadMore() {
  const currentPage = useSelector((state) => state.page.currentPage) <= 0
  const dispatch = useDispatch()

  function currentPageNext() {
    dispatch(fetchPokedexClear())
    dispatch(nextPage())
  }

  function currentPagePrev() {
    dispatch(fetchPokedexClear())
    dispatch(prevPage())
  }

  return (
    <div className='load-more'>
      <button disabled={currentPage} onClick={() => currentPagePrev()}>
        Prev Page
      </button>
      <button onClick={() => currentPageNext()}>Next Page</button>
    </div>
  )
}

export default LoadMore
