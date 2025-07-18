import React from 'react';
import { FaStar } from 'react-icons/fa';

const MovieRating = ({ rating }) => {
  return (
    <div className="text-yellow-400 text-sm flex items-center mb-4">
      <FaStar className="mr-1 text-xs" />
      {rating}/10
    </div>
  );
};

export default MovieRating;
