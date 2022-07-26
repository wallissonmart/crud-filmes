import axios from 'axios'

const moviesUrl = 'http://localhost:3002/movies'

export const getMovies = async (id) => {
  id = id || ''
  try {
    return await axios.get(`${moviesUrl}/${id}`)
  } catch (error) {
    console.log('Errro ao chamar API:', error)
  }
}

export const addMovie = async (movie) => {
  return await axios.post(`${moviesUrl}`, movie).then((response) => {
    console.log(response)
  })
}

export const deleteMovie = async (id) => {
  return await axios.delete(`${moviesUrl}/${id}`)
}

export const editMovie = async (id, movie) => {
  return await axios.put(`${moviesUrl}/${id}`, movie)
}
