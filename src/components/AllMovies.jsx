import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { getMovies, deleteMovie } from '../services/api'
import { Link } from 'react-router-dom'

const AllMovies = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getAllMovies()
  }, [])

  const deleteMovieData = async (id) => {
    await deleteMovie(id)
    getAllMovies()
  }

  const getAllMovies = async () => {
    let response = await getMovies()

    setMovies(response.data)
  }
  return (
    <Container>
      <input
        type="text"
        placeholder="Digite o nome de um filme..."
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
      <Link to={'/add'}>
        <button className="addFilme">Adicionar filme</button>
      </Link>
      <ul>
        {movies
          .filter((movie) => {
            if (search === '') {
              return movie
            } else if (
              movie.nome.toLowerCase().includes(search.toLowerCase())
            ) {
              return movie
            }
          })
          .map((movie) => {
            return (
              <li key={movie.id}>
                <span>{movie.nome}</span>
                <span className="details">{movie.descricao}</span>
                <span className="details">{movie.data_lancamento}</span>
                <span className="details">⭐️ {movie.avaliacao}</span>
                <div>
                  <Link to={`/edit/${movie.id}`}>
                    <button>
                      <AiFillEdit />
                    </button>
                  </Link>
                  <button onClick={() => deleteMovieData(movie.id)}>
                    <AiFillDelete />
                  </button>
                </div>
              </li>
            )
          })}
      </ul>
    </Container>
  )
}

export default AllMovies

const Container = styled.div`
  height: 100%;
  position: absolute;
  max-width: 97%;
  margin-left: 1rem;
  input {
    font-size: 1.2rem;
    padding: 0 1rem;
    text-align: left;
    margin-bottom: 1.5rem;
    height: 2.4rem;
    width: 45%;
    border-radius: 1rem;
    border-style: none;
  }
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }

  button:hover {
    border-color: #646cff;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: ${(p) =>
      `repeat(auto-fit, minmax(${p.minWidth || '150px'}, 1fr))`};
    column-gap: 3rem;
    row-gap: 4rem;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: auto;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    gap: 2rem;
  }
  span {
    font-weight: bold;
    font-size: 110%;
    text-align: center;
    padding: 0.2rem;
  }

  .details {
    font-size: 90%;
  }

  .addFilme {
    margin-bottom: 2rem;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }

  button {
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0;
    input {
      width: 80%;
      font-size: 95%;
    }
  }
`
