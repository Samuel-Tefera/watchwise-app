import React from 'react';
import MovieTitle from './MovieTitle';
import MovieRating from './MovieRating';
import MovieActions from './MovieActions';

const MovieOverlay = ({ movieId, title, rating, onPlay, onAdd }) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/0 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
      <MovieTitle title={title} />
      <MovieRating rating={rating} />
      <MovieActions onPlay={onPlay} onAdd={onAdd} movieId={movieId} />
    </div>
  );
};

export default MovieOverlay;
