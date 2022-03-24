
import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import NewMovies from './components/NewMovies';
import Search from './components/Search';
import { moviesData } from './data';


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
      <h1 className='aa'> Movie List</h1>
      <Search text={text}rating={rating} handleChange={handleChange} handleRating={handleRating}/>
        <MovieList data= {movies.filter(el=>el.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))}  deleteMovie={handleDelete}/>
        <NewMovies handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
