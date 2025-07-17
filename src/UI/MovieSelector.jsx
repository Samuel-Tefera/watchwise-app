import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

export default function MovieSelector({ onSelectionDone, fetchFunction }) {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleChange = (selected) => {
    const limited = selected ? selected.slice(0, 3) : [];
    setSelectedMovies(limited);
    if (limited.length === 3) onSelectionDone(limited);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AsyncSelect
        isMulti
        cacheOptions
        loadOptions={fetchFunction}
        defaultOptions
        onChange={handleChange}
        value={selectedMovies}
        placeholder="Type a movie you love..."
        noOptionsMessage={() => 'No movies found'}
        className="react-select-container"
        classNamePrefix="react-select"
        classNames={{
          control: () =>
            '!bg-[rgba(255,255,255,0.1)] !backdrop-blur-sm !rounded-full !px-5 !py-3 !border-0 !shadow-none !min-h-[56px] hover:!bg-[rgba(255,255,255,0.2)] !transition-all',
          input: () => '!text-white !text-lg',
          placeholder: () => '!text-[rgba(255,255,255,0.7)] !text-lg',
          menu: () =>
            '!bg-[#1a1a2e] !border !border-[#2a2a3a] !rounded-xl !mt-2 !shadow-lg',
          option: ({ isFocused, isSelected }) =>
            `${isFocused ? '!bg-[#2a2a3a]' : ''} ${isSelected ? '!bg-[#e50914]' : ''} !text-white`,
          multiValue: () => '!bg-[rgba(229,9,20,0.2)] !rounded-full',
          multiValueLabel: () => '!text-white !px-3 !py-1',
          multiValueRemove: () =>
            '!text-white hover:!bg-[#e50914] !rounded-r-full',
          indicatorsContainer: () => '!pr-2',
          indicatorSeparator: () => '!hidden',
          dropdownIndicator: () =>
            '!text-[rgba(255,255,255,0.7)] hover:!text-white',
          clearIndicator: () =>
            '!text-[rgba(255,255,255,0.7)] hover:!text-white',
        }}
      />
      <p className="text-[rgba(255,255,255,0.7)] mt-3 text-center">
        {selectedMovies.length}/3 selected
      </p>
    </div>
  );
}
