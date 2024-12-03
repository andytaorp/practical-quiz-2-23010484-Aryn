import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

const initialMovies = [
  { id: 1, title: "Movie 1", watched: false },
  { id: 2, title: "Movie 2", watched: false },
];


function App() {
    const [movies, setMovies] = useState(initialMovies);
  
    const handleAddMovie = (newMovie) => {
      setMovies((prevMovies) => [...prevMovies, newMovie]);
    };
  
    const handleToggleWatched = (id) => {
      setMovies((prevMovies) =>
        prevMovies.map((movie) =>
          movie.id === id ? { ...movie, watched: !movie.watched } : movie
        )
      );
    };
  
    const handleDeleteMovie = (id) => {
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    };
  
    return (
      <div className="app">
        <h1>Favourite Movies</h1>
        <AddMovieForm handleAddMovie={handleAddMovie} />
        <MovieList
          movies={movies}
          handleToggleWatched={handleToggleWatched}
          handleDeleteMovie={handleDeleteMovie}
        />
      </div>
    );
  }
  
  export default App;
