import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMovies, editMovie } from '../services/api'
import styled from 'styled-components'

const initialValue = {
  nome: '',
  descricao: '',
  data_lancamento: '',
  avaliacao: '',
}

const EditMovie = () => {
  const [movie, setMovie] = useState(initialValue)
  const { nome, descricao, data_lancamento, avaliacao } = movie
  const { id } = useParams()
  let navigate = useNavigate()
  useEffect(() => {
    loadMovieDetails()
  }, [])

  const loadMovieDetails = async () => {
    const response = await getMovies(id)
    setMovie(response.data)
  }

  const editMovieDetails = async () => {
    const response = await editMovie(id, movie)
    navigate('/')
  }
  const onValueChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setMovie({ ...movie, [name]: value })
  }

  return (
    <Container>
      <div>
        <h1>Editar filme</h1>

        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          onChange={(e) => onValueChange(e)}
          name="nome"
          defaultValue={nome}
          id="nome"
        />

        <label htmlFor="descricao">Descrição</label>
        <textarea
          onChange={(e) => onValueChange(e)}
          name="descricao"
          id="descricao"
          defaultValue={descricao}
          cols="30"
          rows="10"
        ></textarea>

        <label htmlFor="data_lancamento">Data de lançamento</label>
        <input
          type="date"
          onChange={(e) => onValueChange(e)}
          name="data_lancamento"
          defaultValue={data_lancamento}
          id="data_lancamento"
        />

        <label htmlFor="avaliacao">Avaliação</label>
        <input
          type="number"
          onChange={(e) => onValueChange(e)}
          name="avaliacao"
          defaultValue={avaliacao}
          id="avaliacao"
          maxLength={1}
          min={1}
          max={5}
          required
        />

        <button color="primary" onClick={() => editMovieDetails()}>
          Atualizar
        </button>
      </div>
    </Container>
  )
}

export default EditMovie

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-left: 22rem;
  margin-top: 5rem;
  div {
    display: flex;
    flex-direction: column;
  }
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.2em 1em;
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
  h1 {
    font-size: 2.4rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    margin-left: 0.5rem;
  }
  div {
    width: 18rem;
  }
`
