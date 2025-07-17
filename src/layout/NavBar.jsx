import React from 'react';

export default function NavBar() {
  return (
    <nav className="bg-dark border-b border-stone-800 fixed top-0 w-full flex items-center justify-between py-4 px-24 z-50">
      <div className="text-primary font-semibold text-3xl">🎬 WatchWise</div>
      <ul className="flex gap-5 items-center justify-between font-semibold text-primary text-xl uppercase">
        <li>
          <a className="hover:text-primary-hover" href="#">
            Trending Movies
          </a>
        </li>
        <li>
          <a className="hover:text-primary-hover" href="#">
            WatchList
          </a>
        </li>
      </ul>
    </nav>
  );
}
