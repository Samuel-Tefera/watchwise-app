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
import Pagination from '../../UI/Pagination';

export default function MoviesList() {
  const location = useLocation();

  const [movies, setMovies] = useState(null);
  const [totalNumPages, setTotalNumPages] = useState(1);

  const selectedFilms = location.state?.films ? location.state.films : [];

  const [searchParams] = useSearchParams();

  const category = useMemo(
    () => searchParams.get('category') || 'trending',
    [searchParams]
  );

  const pageNum = useMemo(() => +searchParams.get('page') || 1, [searchParams]);

  useEffect(() => {
    async function fetchMovies() {
      if (selectedFilms.length !== 0) {
        const movies = await fetchRecommendedMovies(selectedFilms);
        setMovies(movies);
      } else {
        setMovies(null);
        const movies = await fetchTrendingMovies({
          type: category,
          page: pageNum,
        });
        setTotalNumPages(movies.totalPages);
        setMovies(movies.results);
      }
    }
    fetchMovies();
  }, [selectedFilms.length, category, pageNum]);

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
      {!selectedFilms.length && (
        <Pagination currentPage={pageNum} totalPages={totalNumPages} />
      )}
    </div>
  );
}
