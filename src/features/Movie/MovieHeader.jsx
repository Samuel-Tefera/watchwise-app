import React from 'react';
import { roundToOneDecimal } from '../../utils/utils';

const MovieHeader = ({ movie, onPlayTrailer, onAdd }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
      <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full rounded-xl shadow-2xl border-4 border-white/10"
        />
      </div>

      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="text-yellow bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center">
            ★ {roundToOneDecimal(movie.vote_average)}
          </span>
          <span>{movie.release_date.split('-')[0]}</span>
          <span>{movie.runtime} min</span>
          {movie.adult && (
            <span className="bg-red-500 px-3 py-1 rounded-full text-xs">
              18+
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {movie.genres.map((genre) => (
            <span
              key={genre.id}
              className="bg-white/10 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition"
            >
              {genre.name}
            </span>
          ))}
        </div>

        {movie.tagline && (
          <p className="italic text-xl text-white/80 mb-6">"{movie.tagline}"</p>
        )}

        <p className="text-lg text-white/90 mb-8 leading-relaxed">
          {movie.overview}
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={onPlayTrailer}
            className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-all hover:scale-105"
          >
            Play Trailer
          </button>
          <button
            onClick={onAdd}
            className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-all hover:scale-105"
          >
            + Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieHeader;
