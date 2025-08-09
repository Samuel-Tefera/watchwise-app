import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

export default function MovieSelector({ onSelectionDone, fetchFunction }) {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleChange = (selected) => {
    const limited = selected ? selected.slice(0, 3) : [];
    setSelectedMovies(limited);
  };

  // Custom multi-value to show only poster image with an X button
  const MultiValuePoster = (props) => {
    const { data, removeProps } = props;
    return (
      <div className="relative w-12 h-16 mr-2 p-[2px] bg-black bg-opacity-30 rounded">
        {data.poster ? (
          <img
            src={`https://image.tmdb.org/t/p/w92${data.poster}`}
            alt={data.label}
            className="w-full h-full object-cover rounded"
          />
        ) : (
          <div className="w-full h-full bg-gray-700 rounded"></div>
        )}
        <button
          type="button"
          {...removeProps}
          className="absolute -top-1 -right-1 bg-black bg-opacity-70 rounded-full text-white text-xs w-4 h-4 flex items-center justify-center hover:bg-red-600"
        >
          ×
        </button>
      </div>
    );
  };

  return (
    <div className="w-full max-w-lg mx-auto min-h-[120px] px-2">
      <AsyncSelect
        isMulti
        cacheOptions
        loadOptions={fetchFunction}
        defaultOptions
        onChange={handleChange}
        value={selectedMovies}
        placeholder="Type a movie you love..."
        noOptionsMessage={() => 'No movies found'}
        isDisabled={selectedMovies.length === 3} // Prevent more selection
        components={{
          MultiValue: MultiValuePoster,
        }}
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(8px)',
            borderRadius: '9999px',
            padding: '4px 8px',
            border: 'none',
            minHeight: '56px',
            cursor: selectedMovies.length < 3 ? 'text' : 'default', // cursor change
          }),
          input: (base) => ({
            ...base,
            color: 'white',
            fontSize: '1rem',
          }),
          placeholder: (base) => ({
            ...base,
            color: 'rgba(255,255,255,0.7)',
            fontSize: '1rem',
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: '#1a1a2e',
            border: '1px solid #2a2a3a',
            borderRadius: '0.75rem',
            marginTop: '0.5rem',
          }),
          option: (base, { isFocused, isSelected }) => ({
            ...base,
            backgroundColor: isSelected
              ? '#e50914'
              : isFocused
                ? '#2a2a3a'
                : '#1a1a2e',
            color: 'white',
          }),
          indicatorSeparator: () => ({ display: 'none' }),
        }}
      />
      {selectedMovies.length === 3 && (
        <button
          onClick={() => onSelectionDone(selectedMovies)}
          className="mt-6 mx-auto block bg-gradient-to-r from-[#e50914] to-[#b81d24] text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Next &rarr;
        </button>
      )}
    </div>
  );
}
