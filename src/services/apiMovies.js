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

// To get offical trailer key
export async function getOfficialTrailerKey(movieId) {
  const url = `${TMDB_URL}movie/${movieId}/videos?api_key=${TMDB_API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`TMDB response error: ${response.status}`);

    const data = await response.json();
    const trailer = data.results.find(
      (video) =>
        video.type === 'Trailer' &&
        video.site === 'YouTube' &&
        video.official === true
    );

    return trailer ? trailer.key : null;
  } catch (error) {
    console.error('Error fetching trailer key:', error.message);
    return null;
  }
}

// Get watchlist movies
export async function fetchWatchlistMovies(ids) {
  if (!Array.isArray(ids) || ids.length === 0) return [];

  try {
    const fetches = ids.map((id) =>
      fetch(
        `${TMDB_URL}movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`
      ).then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch movie with ID ${id}`);
        return res.json();
      })
    );

    const movies = await Promise.all(fetches);
    return movies;
  } catch (error) {
    console.error('Error fetching movies by IDs:', error);
    return [];
  }
}

// To fetch trending movies
export async function fetchTrendingMovies(type = 'trending') {
  let url;
  if (type === 'trending') {
    url = `${TMDB_URL}trending/movie/week?api_key=${TMDB_API_KEY}`;
  } else if (type === 'top_rated') {
    url = `${TMDB_URL}movie/top_rated?api_key=${TMDB_URL}&language=en-US&page=1`;
  } else {
    throw new Error('Invalid type. Use "trending" or "top_rated".');
  }

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch suggested movies');
    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching suggested movies:', error);
    return [];
  }
}
