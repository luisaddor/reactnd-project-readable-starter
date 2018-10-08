import * as ReadableAPI from '../api/readableAPI'

export const LIST_CATEGORIES = 'LIST_CATEGORIES'

export const listCategories = (dispatch) => {
  ReadableAPI.getAllCategories().then(categories => {
    dispatch({
      type: LIST_CATEGORIES,
      categories
    });
  })
}