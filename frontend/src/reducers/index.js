import { LIST_CATEGORIES } from '../actions'


const initialState = {
  categories: [],
}

function categories (state = initialState, action) {
  switch(action.type) {
    case LIST_CATEGORIES:
      const { categories } = action

      return {
        ...state,
        categories: categories
      }
    default: return state
  }
}

export default categories;