import React from 'react';

const MovieGrid = ({ children }) => {
  return (
    <div className="py-8 px-16 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6">
      {children}
    </div>
  );
};

export default MovieGrid;
