import React, { useState } from "react"; 
 
export default function AddMovieForm({ onAddMovie }) { 
  const [title, setTitle] = useState(""); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    if (title.trim() === "") { 
      return; // Prevent adding empty or whitespace-only movie titles 
    } 
    onAddMovie(title); 
    setTitle(""); // Reset the input field after adding a movie 
  }; 
 
  return ( // Ensure this is inside the function body 
    <form onSubmit={handleSubmit}> 
      <div> 
        <label htmlFor="title">Movie Title</label> 
        <input 
          type="text" 
          id="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Enter movie title" 
        /> 
      </div> 
      <button type="submit">Add Movie</button> 
    </form> 
  ); 
}