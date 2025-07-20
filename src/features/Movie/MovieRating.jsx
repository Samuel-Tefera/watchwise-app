import React from 'react';
import { FaStar } from 'react-icons/fa';
import { roundToOneDecimal } from '../../utils/utils';

const MovieRating = ({ rating }) => {
  const movieRating = roundToOneDecimal(rating);

  return (
    <div className="text-yellow-400 text-sm flex items-center mb-4 text-yellow">
      <FaStar className="mr-1 text-xs" />
      {movieRating}/10
    </div>
  );
};

export default MovieRating;
