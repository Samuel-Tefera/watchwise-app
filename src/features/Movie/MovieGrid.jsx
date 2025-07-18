import React from 'react';

const MovieGrid = ({ children }) => {
  return (
    <div className="bg-[#0f0f1a] p-8 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6">
      {children}
    </div>
  );
};

export default MovieGrid;
