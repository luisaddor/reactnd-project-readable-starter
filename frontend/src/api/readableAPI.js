
const api = "http://localhost:3001";


// Generate a unique token for storing your bookshelf data on the backend server.
let token = 'token'

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// export const getCategorie = (categorieId) =>
//   fetch(`${api}/books/${categorieId}`, { headers })
//     .then(res => res.json())
//     .then(data => data.categorie)

// export const getPostsCategorie = () =>
//     fetch(`${api}/categories/posts`, { headers })
//       .then(res => res.json())
//       .then(data => data.categories)

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getPostsFromCategorie = (categorieId) =>
  fetch(`${api}/categories/${categorieId}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.posts)

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

// export const update = (book, shelf) =>
//   fetch(`${api}/books/${book.id}`, {
//     method: 'PUT',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ shelf })
//   }).then(res => res.json())

// export const search = (query) =>
//   fetch(`${api}/search`, {
//     method: 'POST',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ query })
//   }).then(res => res.json())
//     .then(data => data.books)
