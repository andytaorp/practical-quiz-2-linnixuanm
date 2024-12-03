import React, { useState } from "react"; 
import AddMovieForm from "./AddMovieForm"; 
import Movie from "./Movie"; 
 
function App() { 
  const [movies, setMovies] = useState([]); 
 
  const handleAddMovie = (newMovie) => { 
    setMovies((prevMovies) => [...prevMovies, newMovie]); 
  }; 
 
  const handleToggleWatched = (id) => { 
    setMovies((prevMovies) => 
      prevMovies.map((movie) => 
        movie.id === id ? { ...movie, completed: !movie.completed } : movie 
      ) 
    ); 
  }; 
 
  const handleDeleteMovie = (id) => { 
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id)); 
  }; 
 
  return ( 
    <div> 
      <h1>Favorite Movies</h1> 
      <AddMovieForm onAddMovie={handleAddMovie} /> 
      <ul> 
        {movies.map((movie) => ( 
          <Movie 
            key={movie.id} 
            movie={movie} 
            onToggleMovie={handleToggleWatched} 
            onDeleteMovie={handleDeleteMovie} 
          /> 
        ))} 
      </ul> 
    </div> 
  ); 
} 
 
export default App;