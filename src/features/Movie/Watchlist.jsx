import React, { useEffect, useState } from 'react';
import { fetchWatchlistMovies } from '../../services/apiMovies';
import { useWatchlist } from '../../hooks/useWatchlist';
import MovieGrid from './MovieGrid';
import MovieCard from './MovieCard';
import Spinner from '../../UI/Spinner';

export default function Watchlist() {
  const [movies, setMovies] = useState(null);

  const { watchlist, removeFromWatchlist } = useWatchlist();

  useEffect(() => {
    async function fetchMovies() {
      const movies = await fetchWatchlistMovies(watchlist);
      setMovies(movies);
    }
    fetchMovies();
  }, [watchlist]);

  function onRemove(id) {
    removeFromWatchlist(id);
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
        <MovieCard
          key={index}
          movie={movie}
          onRemove={onRemove}
          watchlist={watchlist}
        />
      ))}
    </MovieGrid>
  );
}
