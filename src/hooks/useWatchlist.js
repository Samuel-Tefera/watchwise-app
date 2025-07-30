import { useEffect, useState } from 'react';

export function useWatchlist() {
  const [watchlist, setWatchlist] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('watchlist');
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  function addToWatchlist(id) {
    setWatchlist((prev) => {
      if (!prev.includes(id)) {
        return [...prev, id];
      }
      return prev;
    });
  }

  function removeFromWatchlist(id) {
    setWatchlist((prev) => prev.filter((item) => item !== id));
  }

  return { watchlist, addToWatchlist, removeFromWatchlist };
}
