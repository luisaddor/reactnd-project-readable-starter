import { getAllCategories, getAll } from '../api/readableAPI';

export const LIST_CATEGORIES = 'LIST_CATEGORIES';
export const LIST_POSTS = 'LIST_POSTS'

export const listCategories = (dispatch) => {
  getAllCategories().then(categories => {
    dispatch({
      type: LIST_CATEGORIES,
      categories
    });
  })
}

export const listPosts = (dispatch) => {
  getAll().then(posts => {
    dispatch({
      type: LIST_POSTS,
      posts
    });
  })
}