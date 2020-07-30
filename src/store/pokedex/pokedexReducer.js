import {
  FETCH_POKEDEX_REQUEST,
  FETCH_POKEDEX_FAILURE,
  FETCH_POKEDEX_SUCCESS,
  FETCH_POKEDEX_CLEAR,
} from './pokedexTypes'

const initialState = {
  loading: false,
  error: '',
  data: [],
}

const pokedexReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEDEX_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_POKEDEX_FAILURE:
      return {
        loading: false,
        error: action.payload,
        data: [],
      }
    case FETCH_POKEDEX_SUCCESS:
      return {
        loading: false,
        error: '',
        data:
          JSON.stringify(state.data).indexOf(JSON.stringify(action.payload)) ===
          -1
            ? state.data.concat(action.payload)
            : state.data,
      }
    case FETCH_POKEDEX_CLEAR:
      return {
        data: [],
      }
    default:
      return state
  }
}

export default pokedexReducer
