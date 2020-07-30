import api from '../../services/api'

import {
  FETCH_POKEDEX_REQUEST,
  FETCH_POKEDEX_FAILURE,
  FETCH_POKEDEX_SUCCESS,
  FETCH_POKEDEX_CLEAR,
} from './pokedexTypes'

export const fetchPokedex = (offsetPage) => {
  return (dispatch) => {
    dispatch(fetchPokedexRequest)
    api
      .get(`pokemon?limit=10&offset=${offsetPage}`)
      .then((res) => {
        const pokedex = res.data
        pokedex.results.forEach((url) => {
          fetch(url.url)
            .then((res) => res.json())
            .then((data) => {
              dispatch(fetchPokedexSuccess(data))
            })
        })
      })
      .catch((error) => {
        dispatch(fetchPokedexFailure(error.message))
      })
  }
}

export const fetchPokedexRequest = () => {
  return {
    type: FETCH_POKEDEX_REQUEST,
  }
}

export const fetchPokedexFailure = (error) => {
  return {
    type: FETCH_POKEDEX_FAILURE,
    payload: error,
  }
}

export const fetchPokedexSuccess = (data) => {
  return {
    type: FETCH_POKEDEX_SUCCESS,
    payload: data,
  }
}

export const fetchPokedexClear = (data) => {
  return {
    type: FETCH_POKEDEX_CLEAR,
    payload: data,
  }
}
