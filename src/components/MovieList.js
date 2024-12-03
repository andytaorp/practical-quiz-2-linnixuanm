import React from "react";
import Movie from "./Movie";

export default function MovieList({ movies, handleToggleWatched, handleDeleteMovie }) {
  return (
    <ul>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          handleToggleWatched={handleToggleWatched}
          handleDeleteMovie={handleDeleteMovie}
        />
      ))}
    </ul>
  );
}
  