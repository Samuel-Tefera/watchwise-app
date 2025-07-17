import React from 'react';
import MovieSelector from '../UI/MovieSelector';
import { fetchMovieOptions } from '../services/apiMovies';

export default function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://image.tmdb.org/t/p/original/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg')",
        backgroundColor: '#0f0f1a',
        backgroundBlendMode: 'soft-light',
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#0f0f1a', opacity: 0.2 }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-primary text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 -translate-y-24">
          Find Your Next Favorite Movie
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl -translate-y-24">
          Tell us 3 films you love — we’ll handle the rest. WatchWise recommends
          hidden gems and must-sees just for you.
        </p>
        <MovieSelector fetchFunction={fetchMovieOptions} />
      </div>
    </div>
  );
}
