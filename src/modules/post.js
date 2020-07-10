/**
 * TV 와 MOVIE 의 id값으로 상세정보를 가져오는 모듈
 */

import { createAction, handleActions } from 'redux-actions';
import createRequestThunk from '../lib/util/createRequestThunk';
import * as api from '../lib/api/tmdb_api';

const GET_TVPOST = 'post/GET_TVPOST';
const GET_TVPOST_SUCCESS = 'post/GET_TVPOST_SUCCESS';

const GET_MOVIEPOST = 'post/GET_MOVIEPOST';
const GET_MOVIEPOST_SUCCESS = 'post/GET_MOVIEPOST_SUCCESS';

/* 데이터를 비우는 뒷정리 함수 설정 */
const CLEAR_POST = 'post/CLEAR_POST';
export const clearPost = createAction(CLEAR_POST);

export const getTvPost = createRequestThunk(GET_TVPOST, api.getTvPost);
export const getMoviePost = createRequestThunk(GET_MOVIEPOST, api.getMoviePost);

const initialState = {
  tvpost: {
    type: 'tv',
    movies: null,
  },
  moviepost: {
    type: 'movie',
    movies: null,
  },
};

const post = handleActions(
  {
    [GET_TVPOST_SUCCESS]: (state, action) => ({
      ...state,
      tvpost: {
        ...state.tvpost,
        movies: action.payload,
      },
    }),
    [GET_MOVIEPOST_SUCCESS]: (state, action) => ({
      ...state,
      moviepost: {
        ...state.moviepost,
        movies: action.payload,
      },
    }),
    [CLEAR_POST]: (state, action) => ({
      ...state,
      tvpost: {
        ...state.tvpost,
        movies: null,
      },
      moviepost: {
        ...state.moviepost,
        movies: null,
      },
    }),
  },
  initialState,
);

export default post;
