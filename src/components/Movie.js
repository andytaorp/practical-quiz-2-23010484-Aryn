import React from "react";


export default function Movie({ movie, handleToggleWatched, handleDeleteMovie }) {
    return (
      <li>
        <span style={{ textDecoration: movie.watched ? "line-through" : "none" }} >
        <input
          type="checkbox"
          checked={movie.watched}
          onChange={() => handleToggleWatched(movie.id)}
        />
        {movie.description} ({movie.title})
        </span>
        <button
  onClick={() => {
    if (window.confirm('Are you sure you want to delete said movie(s)?')) {
        handleDeleteMovie(movie.id);
    }
  }}
  type = 'submit' >
    Delete
    </button>
        
      </li>
    );
  }
