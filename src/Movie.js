// src/Movie.js
import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
    </div>
  );
};

export default Movie;
