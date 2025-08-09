import React, { useState } from 'react';
import { FaFilm, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NavSearch from './NavSearch';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-dark border-b border-stone-800 fixed top-0 w-full flex items-center justify-between py-4 px-4 sm:px-12 md:px-24 z-50">
      <Link
        to="/"
        className="text-primary font-semibold text-2xl md:text-3xl flex items-center gap-2 sm:gap-3"
      >
        <FaFilm /> <span className="hidden sm:inline-block">WatchWise</span>
      </Link>

      <NavSearch />

      <ul className="hidden md:flex gap-5 items-center font-semibold text-primary text-lg xl:text-xl uppercase">
        <li>
          <Link
            to="/discover"
            className="hover:text-primary-hover transition-colors"
          >
            Trending Movies
          </Link>
        </li>
        <li>
          <Link
            to="/watchlist"
            className="hover:text-primary-hover transition-colors"
          >
            WatchList
          </Link>
        </li>
      </ul>

      <button
        className="md:hidden text-primary text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark border-t border-stone-800 py-4 px-6">
          <ul className="flex flex-col gap-4 font-semibold text-primary text-lg uppercase">
            <li>
              <Link
                to="/discover"
                className="hover:text-primary-hover transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Trending Movies
              </Link>
            </li>
            <li>
              <Link
                to="/watchlist"
                className="hover:text-primary-hover transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                WatchList
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
