import { NEXT_PAGE, PREV_PAGE } from './paginationTypes'

const initialState = {
  currentPage: 0,
}

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 10,
      }
    case PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 10,
      }
    default:
      return state
  }
}

export default paginationReducer
