import { handleActions } from 'redux-actions';
import * as api from '../lib/api/tmdb_api';
import createRequestThunk from '../lib/util/createRequestThunk';

const GET_GENRES = 'genres/GET_GENRES';
const GET_GENRES_SUCCESS = 'genres/GET_GENRES_SUCCESS';

export const getGenres = createRequestThunk(GET_GENRES, api.getGenres);

const initialState = {
  genres: {
    type: 'movie',
    movies: null,
  },
};

const genres = handleActions(
  {
    [GET_GENRES_SUCCESS]: (state, { payload: genresData }) => ({
      ...state,
      genres: {
        movies: genresData.results,
      },
    }),
  },
  initialState,
);

export default genres;
