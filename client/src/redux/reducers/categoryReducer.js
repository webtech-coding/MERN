import { CATEGORY_GET_ALL } from '../actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case CATEGORY_GET_ALL:
      return { ...state, categories: action.payload }
    default:
      return { ...state }
  }
}
