import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { FaChevronDown } from 'react-icons/fa';

const MovieFilter = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [showCategoryFilter, setShowCategoryFilter] = useState(false);

  const categories = [
    { name: 'Trending', value: 'trending' },
    { name: 'Top Rated', value: 'top_rated' },
    { name: 'Popular', value: 'popular' },
    { name: 'Now Playing', value: 'now_playing' },
    { name: 'Upcoming', value: 'upcoming' },
  ];

  const [selectedCategory, setSelectedCategory] = useState(() => {
    const urlCategory = searchParams.get('category');
    return (
      categories.find((c) => c.value === urlCategory) || {
        name: 'Trending',
        value: 'trending',
      }
    );
  });

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowCategoryFilter(false);
    navigate(`?category=${category.value}`);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-end">
      <div className="relative">
        <button
          onClick={() => {
            setShowCategoryFilter(!showCategoryFilter);
            setShowTypeFilter(false);
          }}
          className="flex items-center justify-between bg-dark-card hover:bg-gray-800 text-white px-4 py-2 rounded-lg w-full sm:w-48 transition-colors"
        >
          <span>{selectedCategory.name}</span>
          <FaChevronDown
            className={`transition-transform ${showCategoryFilter ? 'rotate-180' : ''}`}
          />
        </button>
        {showCategoryFilter && (
          <div className="absolute z-10 mt-2 w-full sm:w-48 bg-dark-card rounded-lg shadow-lg border bg-card border-gray-700">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => handleCategorySelect(category)}
                className={`w-full text-left px-4 py-2 hover:bg-gray-800 text-white transition-colors ${
                  selectedCategory.value === category.value
                    ? 'bg-primary/20'
                    : ''
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieFilter;
