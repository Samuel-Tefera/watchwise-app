import React from 'react';
import MoviePoster from './MoviePoster';
import MovieOverlay from './MovieOverlay';

const MovieCard = ({ movie }) => {
  return (
    <div className="relative rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_10px_25px_rgba(229,9,20,0.3)] hover:z-20 aspect-[2/3]">
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        alt={movie.title}
      />
      <MovieOverlay
        title={movie.title}
        rating={movie.rating}
        onPlay={movie.onPlay}
        onAdd={movie.onAdd}
      />
    </div>
  );
};

export default MovieCard;
