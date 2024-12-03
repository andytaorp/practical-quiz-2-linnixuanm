import React, { useState } from "react"; 
 
export default function AddMovieForm({ onAddMovie }) { 
  const [title, setTitle] = useState(""); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
     
    if (!title.trim()) return; 
 
    const newMovie = { 
      id: Date.now(), 
      name: title, 
      completed: false, 
    }; 
 
    onAddMovie(newMovie); 
    setTitle(""); 
  }; 
 
  return ( 
    <form onSubmit={handleSubmit}> 
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