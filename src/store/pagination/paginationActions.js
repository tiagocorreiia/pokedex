import { NEXT_PAGE, PREV_PAGE } from './paginationTypes'

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  }
}

export const prevPage = () => {
  return {
    type: PREV_PAGE,
  }
}
