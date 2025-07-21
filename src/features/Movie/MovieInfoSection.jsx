import React from 'react';

const MovieInfoSection = ({ movie }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-white/10">
        Movie Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Status</h3>
            <p>{movie.status}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Original Language</h3>
            <p>{movie.original_language.toUpperCase()}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Budget</h3>
            <p>${movie.budget.toLocaleString()}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Revenue</h3>
            <p>${movie.revenue.toLocaleString()}</p>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Production Companies</h3>
            <ul className="space-y-2">
              {movie.production_companies.map((company) => (
                <li key={company.id}>{company.name}</li>
              ))}
            </ul>
          </div>

          {movie.belongs_to_collection && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Collection</h3>
              <div className="flex items-center gap-4">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.belongs_to_collection.poster_path}`}
                  alt={movie.belongs_to_collection.name}
                  className="w-16 rounded"
                />
                <span>{movie.belongs_to_collection.name}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieInfoSection;
