import api from '../../services/api'
import { FETCH_SEARCH_FAILURE, FETCH_SEARCH_SUCCESS } from './searchTypes'

export const fetchSearch = (searchTerm) => {
  return (dispatch) => {
    api
      .get(`pokemon/${searchTerm}`)
      .then((res) => {
        const pokedex = res.data
        dispatch(fetchSearchSuccess(pokedex))
        localStorage.setItem('pokemon', JSON.stringify(pokedex))
      })
      .catch((error) => {
        dispatch(fetchSearchFailure(error.message))
      })
  }
}

export const fetchSearchSuccess = (result) => {
  return {
    type: FETCH_SEARCH_SUCCESS,
    payload: result,
  }
}

export const fetchSearchFailure = (error) => {
  return {
    type: FETCH_SEARCH_FAILURE,
    payload: error,
  }
}
