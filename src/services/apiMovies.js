const TMDB_URL = 'https://api.themoviedb.org/3/';
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovieOptions = async (inputValue) => {
  if (!inputValue) return [];

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(inputValue)}&include_adult=false&language=en-US`
    );

    if (!res.ok) throw new Error('Failed to fetch movies');

    const data = await res.json();

    return data.results.slice(0, 10).map((movie) => ({
      label: `${movie.title} (${movie.release_date?.split('-')[0] || 'N/A'})`,
      value: movie.id,
    }));
  } catch (error) {
    console.error('Error fetching movie options:', error);
    return [];
  }
};
