import axios from 'axios';

const MY_API_KEY = '7b2585c3179825537cb88b4d13b35e1c';

/**
 * NetflixOriginal
 * API 주소
 * https://api.themoviedb.org/3/discover/tv?api_key=7b2585c3179825537cb88b4d13b35e1c&with_networks=213&language=en-US
 */
export const getNetflixoriginal = () =>
  axios.get(
    `https://api.themoviedb.org/3/discover/tv?api_key=${MY_API_KEY}&with_networks=213&language=en-US`,
  );

/**
 * Trending
 * API 주소
 * https://api.themoviedb.org/3/trending/all/week?api_key=7b2585c3179825537cb88b4d13b35e1c&language=en-US
 */
export const getTvTrending = () =>
  axios.get(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${MY_API_KEY}&language=en-US`,
  );

export const getMovieTrending = () =>
  axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${MY_API_KEY}&language=en-US`,
  );

/**
 * TVPOST
 * API 주소
 * https://api.themoviedb.org/3/tv/${id}?api_key=7b2585c3179825537cb88b4d13b35e1c&language=en-US
 */
export const getTvPost = (id) =>
  axios.get(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${MY_API_KEY}&language=en-US`,
  );

/**
 * MOVIEPOST
 * API 주소
 * https://api.themoviedb.org/3/movie/${id}?api_key=7b2585c3179825537cb88b4d13b35e1c&language=en-US
 */
export const getMoviePost = (id) =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${MY_API_KEY}&language=en-US`,
  );

/**
 * GenreMovies
 * API 주소
 * https://api.themoviedb.org/3/discover/movie?api_key=7b2585c3179825537cb88b4d13b35e1c&with_genres=${id}
 */
export const getGenres = (id) =>
  axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${MY_API_KEY}&with_genres=${id}&language=en-US`,
  );
