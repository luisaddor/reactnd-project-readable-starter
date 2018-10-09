const api = "http://localhost:3001";

let token = 'token';

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())