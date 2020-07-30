import { FETCH_SEARCH_SUCCESS, FETCH_SEARCH_FAILURE } from './searchTypes'

const initialState = {
  result: [],
  error: '',
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_SUCCESS:
      return {
        result: action.payload,
        error: '',
      }
    case FETCH_SEARCH_FAILURE:
      return {
        result: [],
        error: action.payload,
      }
    default:
      return state
  }
}

export default searchReducer
