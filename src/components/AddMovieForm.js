import React, { useState } from "react";

export default function AddMovieForm({ handleAddMovie }) {
    const [title, setTitle] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if (!title.trim()) return;
  
      const newMovie = {
          title,
          watched: false,
        };
  
      handleAddMovie(newMovie);

      setTitle("");
      }
    
  
      return (
      <form className="add-form" onSubmit={handleSubmit}>
        <label htmlFor="title"></label>

  
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
  
        <button type="submit">Add Movie</button>
      </form>
    );
  }