import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

import { getOfficialTrailerKey } from '../../services/apiMovies';
import Spinner from '../../UI/Spinner';

const TrailerPopup = ({ onClose }) => {
  const [trailerKey, setTrailerKey] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    async function getTrailerKey() {
      try {
        setIsLoading(true);
        const key = await getOfficialTrailerKey(movieId);
        setTrailerKey(key);
      } catch (err) {
        setError('Failed to load trailer');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    if (movieId) {
      getTrailerKey();
    }
  }, [movieId]);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl h-2/3">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-text-primary hover:text-primary transition-colors text-4xl z-10"
          aria-label="Close trailer"
        >
          <FaTimes />
        </button>

        {isLoading ? (
          <Spinner />
        ) : error ? (
          <div className="w-full h-full flex items-center justify-center text-text-primary text-xl">
            {error}
          </div>
        ) : trailerKey ? (
          <div className="w-full h-full bg-black rounded-xl overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              title="Movie Trailer"
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-xl">
            No trailer available
          </div>
        )}
      </div>
    </div>
  );
};

export default TrailerPopup;
