import React from 'react';

const MovieTitle = ({ title }) => {
  return (
    <h3 className="text-white text-base font-semibold mb-2 truncate">
      {title}
    </h3>
  );
};

export default MovieTitle;
