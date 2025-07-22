import React, { useEffect, useState } from 'react';
import { fetchWatchlistMovies } from '../../services/apiMovies';
import { useWatchlist } from '../../hooks/useWatchlist';
import { FaPlay, FaStar, FaTrash } from 'react-icons/fa';
import MovieGrid from './MovieGrid';
import MovieCard from './MovieCard';
import Spinner from '../../UI/Spinner';

export default function Watchlist() {
  const [movies, setMovies] = useState(null);

  console.log(movies);

  const { watchlist } = useWatchlist();
  console.log(watchlist);

  useEffect(() => {
    async function fetchMovies() {
      const movies = await fetchWatchlistMovies(watchlist);
      setMovies(movies);
    }
    fetchMovies();
  }, [watchlist]);

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
