import { LIST_CATEGORIES, LIST_POSTS } from '../actions'


const initialState = {
  categories: [],
  posts: []
}

function getData (state = initialState, action) {
  switch(action.type) {
    case LIST_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    case LIST_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    default: return state
  }
}

export default getData;