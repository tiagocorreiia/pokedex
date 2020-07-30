import { combineReducers } from 'redux'
import pokedexReducer from './pokedex/pokedexReducer'
import paginationReducer from './pagination/paginationReducer'
import searchReducer from './search/searchReducer'

const rootReducer = combineReducers({
  pokedex: pokedexReducer,
  page: paginationReducer,
  search: searchReducer,
})

export default rootReducer
