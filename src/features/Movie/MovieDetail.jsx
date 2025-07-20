import React, { useEffect, useState } from 'react';

import MovieHeader from './MovieHeader';
import MovieInfoSection from './MovieInfoSection';
import TrailerPopup from './TrailerPopup';
import Spinner from '../../UI/Spinner';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/apiMovies';

const MovieDetail = () => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [movieData, setMovieData] = useState(null);

  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    async function fetchMovieDetail() {
      const movieDetail = await fetchMovieDetails(movieId);
      setMovieData(movieDetail);
    }
    fetchMovieDetail();
  }, [movieId]);

  if (!movieData) return <Spinner />;

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
          filter: 'brightness(0.3) blur(4px)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <MovieHeader
          movie={movieData}
          onPlayTrailer={() => setShowTrailer(true)}
        />

        <MovieInfoSection movie={movieData} />
      </div>

      {showTrailer && (
        <TrailerPopup
          movieId={movieData.id}
          onClose={() => setShowTrailer(false)}
          trailerKey={movieData.trailerKey}
        />
      )}
    </div>
  );
};

export default MovieDetail;
