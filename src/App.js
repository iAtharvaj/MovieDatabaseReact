import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dummyapi.online/api/movies')
      .then(response => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movie data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Movie Database</h1>
      {loading ? <p>Loading...</p> : (
        <div className="movie-list">
          {movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
