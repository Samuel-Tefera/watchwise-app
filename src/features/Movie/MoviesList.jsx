import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { useWatchlist } from '../../hooks/useWatchlist';
import {
  fetchRecommendedMovies,
  fetchTrendingMovies,
} from '../../services/apiMovies';
import Spinner from '../../UI/Spinner';
import MovieCard from './MovieCard';
import MovieFilter from './MovieFilter';
import MovieGrid from './MovieGrid';

export default function MoviesList() {
  const location = useLocation();

  const [movies, setMovies] = useState(null);

  const selectedFilms = location.state?.films ? location.state.films : [];

  const [searchParams] = useSearchParams();

  const category = useMemo(
    () => searchParams.get('category') || 'trending',
    [searchParams]
  );

  useEffect(() => {
    async function fetchMovies() {
      if (selectedFilms.length !== 0) {
        const movies = await fetchRecommendedMovies(selectedFilms);
        setMovies(movies);
      } else {
        setMovies(null);
        const movies = await fetchTrendingMovies({
          type: category,
        });
        setMovies(movies);
      }
    }
    fetchMovies();
  }, [selectedFilms.length, category]);

  const { addToWatchlist, removeFromWatchlist, watchlist } = useWatchlist();

  function onAdd(id) {
    addToWatchlist(id);
  }

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
    <div>
      {!selectedFilms.length && <MovieFilter />}
      <MovieGrid>
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            watchlist={watchlist}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </MovieGrid>
    </div>
  );
}
