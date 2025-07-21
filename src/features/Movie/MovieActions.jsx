import React from 'react';
import { FaPlay, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MovieActions = ({ onAdd, movieId }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center w-full">
      <button
        onClick={() => navigate(`/movie/${movieId}`)}
        className="bg-[#e50914] text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 ease-in-out hover:scale-110"
      >
        <FaPlay />
      </button>
      <button
        onClick={() => {
          onAdd(movieId);
        }}
        className="bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 ease-in-out hover:bg-[#e50914]"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default MovieActions;
