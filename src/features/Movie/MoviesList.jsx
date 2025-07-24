import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import MovieGrid from './MovieGrid';
import MovieCard from './MovieCard';
import {
  fetchRecommendedMovies,
  fetchTrendingMovies,
} from '../../services/apiMovies';
import Spinner from '../../UI/Spinner';
import { useWatchlist } from '../../hooks/useWatchlist';

export default function MoviesList() {
  const location = useLocation();

  const [movies, setMovies] = useState(null);

  const selectedFilms = location.state?.films ? location.state.films : [];

  useEffect(() => {
    async function fetchMovies() {
      if (selectedFilms.length !== 0) {
        const movies = await fetchRecommendedMovies(selectedFilms);
        setMovies(movies);
      } else {
        const movies = await fetchTrendingMovies();
        setMovies(movies);
      }
    }
    fetchMovies();
  }, [selectedFilms]);

  const { addToWatchlist } = useWatchlist();

  function onAdd(id) {
    addToWatchlist(id);
  }

  if (!movies)
    return (
      <div>
        <Spinner />
      </div>
    );

  return (
    <MovieGrid>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} onAdd={onAdd} />
      ))}
    </MovieGrid>
  );
}
