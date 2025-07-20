import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import MovieGrid from './MovieGrid';
import MovieCard from './MovieCard';
import { fetchRecommendedMovies } from '../../services/apiMovies';
import Spinner from '../../UI/Spinner';

export default function MoviesList() {
  const location = useLocation();

  const [movies, setMovies] = useState(null);

  const selectedFilms = location.state?.films || [];

  useEffect(() => {
    async function fetchMovies() {
      const movies = await fetchRecommendedMovies(selectedFilms);
      setMovies(movies);
    }
    fetchMovies();
  }, [selectedFilms]);

  if (!movies)
    return (
      <div>
        <Spinner />
      </div>
    );

  return (
    <MovieGrid>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </MovieGrid>
  );
}
