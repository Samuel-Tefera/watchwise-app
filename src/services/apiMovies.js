const TMDB_URL = 'https://api.themoviedb.org/3/';
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// To suggest movies
export async function fetchMovieOptions(inputValue) {
  if (!inputValue) return [];

  try {
    const res = await fetch(
      `${TMDB_URL}search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(inputValue)}&include_adult=false&language=en-US`
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
}

// To fetch recommended movies
export async function fetchRecommendedMovies(selectedMovies) {
  const allRecommendations = [];

  for (const movie of selectedMovies) {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.value}/recommendations?api_key=${TMDB_API_KEY}`
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch recommendations for ${movie.label}`);
      }

      const data = await res.json();

      const topRecommendations = data.results.slice(0, 10); // Limit per movie
      allRecommendations.push(...topRecommendations); // Flatten into one array
    } catch (error) {
      console.error(error.message);
    }
  }

  return allRecommendations;
}

// To fetch movie detail
export async function fetchMovieDetails(movieId) {
  try {
    const response = await fetch(
      `${TMDB_URL}movie/${movieId}?api_key=${TMDB_API_KEY}`
    );

    if (!response.ok) {
      console.error(
        'Error fetching movie:',
        response.status,
        response.statusText
      );
      return null;
    }

    const data = await response.json();

    if (data.success === false) {
      console.warn('Movie not found:', data.status_message);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Network or parsing error:', error);
    return null;
  }
}
