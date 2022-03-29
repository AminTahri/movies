
import { useState } from 'react';
import './App.css';
import About from './components/About';
import MovieList from './components/MovieList';
import NavBareeeee from './components/NavBareeeee';
import NewMovies from './components/NewMovies';
import Search from './components/Search';
import Contact from './Contact';
import { moviesData } from './data';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import More from './components/More';


function App() {
  const [movies, setMovies] = useState(moviesData);
  const [text, setText] = useState("");
  const [rating, setRating] = useState("")
  const handleChange=(x)=>{
    setText(x)
  }
  const handleRating=(y)=>{
    setRating()
  }
  const handleDelete=(id)=>{
    setMovies(movies.filter(movie=>movie.id!==id))
  }
  const handleAdd=(newMovie)=>{
    setMovies([...movies,newMovie])
  }
  // console.log(movies)
  return (
    <div className="App">
      <Router>
        <NavBareeeee/>
      <h1 className='aa'> Movie List</h1>
      <Search text={text}rating={rating} handleChange={handleChange} handleRating={handleRating}/>
        <NewMovies handleAdd={handleAdd}/>
      <Routes>

       <Route path="/" element={ <MovieList data= {movies.filter(el=>el.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))}  deleteMovie={handleDelete}/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/More/:id" element={<More data={movies} />}/>
      </Routes>
      </Router>
    </div>
  );
}


export default App;
