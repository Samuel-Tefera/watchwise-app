import React from 'react';
import MovieSelector from '../UI/MovieSelector';
import { fetchMovieOptions } from '../services/apiMovies';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  function selectedMovies(films) {
    navigate('/discover', { state: { films } });
  }

  const NAV_HEIGHT_REM = 4.35;

  return (
    <div
      className="relative w-full"
      style={{
        height: `calc(100vh - ${NAV_HEIGHT_REM}rem)`,
        backgroundImage:
          "url('https://image.tmdb.org/t/p/original/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#0f0f1a',
        backgroundBlendMode: 'soft-light',
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-primary text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
          Find Your Next Favorite Movie
        </h1>
        <p className="text-base sm:text-lg md:text-2xl max-w-2xl mb-6">
          Tell us 3 films you love — we’ll handle the rest. WatchWise recommends
          hidden gems and must-sees just for you.
        </p>
        <div className="w-full max-w-md sm:max-w-lg">
          <MovieSelector
            onSelectionDone={selectedMovies}
            fetchFunction={fetchMovieOptions}
          />
        </div>
      </div>
    </div>
  );
}
