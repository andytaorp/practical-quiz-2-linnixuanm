import React from "react";

/**
 * TODO: implement the Movie component
 * A single movie item in the movie list, with a checkbox to mark it
 * watched, a text span for the title, and a delete button.
 */
export default function Movie({movie, handleToggleWatched, handleDeleteMovie}) {
    return (
        <li>
            <input type = "checkbox"
                checked = {movie.completed}
                onChange = {() => handleToggleWatched(movie.id)}
            />
            <span style = {{textDecoration: movie.completed ? "line-through" : "none"}}>
                {movie.title}
            </span>
            <button onClick = {() => handleDeleteMovie(movie.id)}>Delete</button>
        </li>
    )
}
