import React from 'react';
import { FaMinus, FaPlay, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MovieActions = ({ onAdd, onRemove, movieId }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center w-full">
      <button
        onClick={() => navigate(`/movie/${movieId}`)}
        className="bg-primary text-text-primary rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 ease-in-out hover:scale-110"
      >
        <FaPlay />
      </button>
      <button
        onClick={() => {
          if (onAdd) onAdd(movieId);
          if (onRemove) onRemove(movieId);
        }}
        className="bg-white/20 text-text-primary rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 ease-in-out hover:bg-primary"
      >
        {onRemove ? <FaMinus /> : <FaPlus />}
      </button>
    </div>
  );
};

export default MovieActions;
