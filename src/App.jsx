import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddMovie from './helpers/AddMovie'
import AllMovies from './components/AllMovies'
import NavBar from './components/NavBar'
import EditMovie from './helpers/EditMovie'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllMovies />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/edit/:id" element={<EditMovie />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
