import React from 'react';
import { FaFilm, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="bg-dark min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-primary">
        404
      </h1>

      <h2 className="text-xl md:text-2xl text-text-primary font-bold mb-4">
        Movie Not Found
      </h2>
      <p className="text- max-w-md mb-8 text-text-secondary">
        {`The page or movie you're looking for doesn't exist. Maybe it was removed
        or you mistyped the URL.`}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-full transition-all flex items-center justify-center gap-2"
        >
          <FaFilm /> Go Home
        </Link>
      </div>
    </div>
  );
}
