import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import { searchMovies } from '../services/apiMovies';

const NavSearch = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const loadOptions = async (inputValue) => {
    if (!inputValue) return [];
    const results = await searchMovies(inputValue);
    return results.map((movie) => ({
      value: movie.id,
      label: movie.title,
      year: movie.release_date
        ? new Date(movie.release_date).getFullYear()
        : 'N/A',
      poster: movie.poster_path,
    }));
  };

  const formatOptionLabel = ({ label, year, poster }) => (
    <div className="flex items-center gap-3 overflow-hidden">
      {poster && (
        <img
          src={`https://image.tmdb.org/t/p/w92${poster}`}
          alt=""
          className="w-8 h-12 object-cover rounded flex-shrink-0"
        />
      )}
      <div className="min-w-0">
        <div className="text-sm font-medium truncate">{label}</div>
        <div className="text-xs text-gray-400">{year}</div>
      </div>
    </div>
  );

  const formatSingleValue = ({ label, poster }) => (
    <div className="truncate flex items-center">
      {poster && (
        <img
          src={`https://image.tmdb.org/t/p/w92${poster}`}
          alt=""
          className="inline-block w-6 h-9 object-cover rounded mr-2"
        />
      )}
      <span>{label}</span>
    </div>
  );

  const handleChange = (option) => {
    setSelectedOption(option);
    if (option) {
      navigate(`/movie/${option.value}`);
    }
  };

  return (
    <div className="w-full max-w-xl flex-1 mx-2 sm:mx-4">
      <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        value={selectedOption}
        onChange={handleChange}
        placeholder="Search movies..."
        formatOptionLabel={formatOptionLabel}
        formatSingleValue={formatSingleValue}
        noOptionsMessage={() => 'No movies found'}
        isClearable
        styles={{
          control: (base, { isFocused }) => ({
            ...base,
            backgroundColor: '#1a1a2e',
            borderColor: isFocused ? '#e50914' : '#2a2a3a',
            minHeight: '50px',
            borderRadius: '12rem',
            boxShadow: isFocused ? '0 0 0 1px #e50914' : 'none',
            '&:hover': { borderColor: '#e50914' },
            overflow: 'hidden',
          }),
          singleValue: (base) => ({
            ...base,
            color: 'white',
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
          }),
          input: (base) => ({
            ...base,
            color: 'white',
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: '#1a1a2e',
            border: '1px solid #2a2a3a',
            borderRadius: '0.5rem',
            marginTop: '0.25rem',
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
          clearIndicator: (base) => ({
            ...base,
            color: '#e50914',
            '&:hover': { color: '#b81d24' },
          }),
          indicatorSeparator: () => ({ display: 'none' }),
        }}
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default NavSearch;
