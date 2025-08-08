import React from 'react';

const MovieGrid = ({ children }) => {
  return (
    <div className="py-8 px-6 md:px-16 sm:px-8 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6">
      {children}
    </div>
  );
};

export default MovieGrid;
