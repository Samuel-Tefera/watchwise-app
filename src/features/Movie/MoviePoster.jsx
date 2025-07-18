import React from 'react';

const MoviePoster = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="w-full h-full object-cover block" />
  );
};

export default MoviePoster;
