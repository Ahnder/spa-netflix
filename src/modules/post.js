/**
 * TV 와 MOVIE 의 id값으로 상세정보를 가져오는 모듈
 */

import { createAction, handleActions } from 'redux-actions';
import createRequestThunk from '../lib/util/createRequestThunk';
import * as api from '../lib/api/tmdb_api';

const GET_TVPOST = 'post/GET_TVPOST';
const GET_TVPOST_SUCCESS = 'post/GET_TVPOST_SUCCESS';

/* 데이터를 비우는 뒷정리 함수 설정 */
const CLEAR_POST = 'post/CLEAR_POST';
export const clearPost = createAction(CLEAR_POST);

export const getTvPost = createRequestThunk(GET_TVPOST, api.getTvPost);

const initialState = {
  tvpost: {
    type: 'tv',
    movies: {},
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
    [CLEAR_POST]: (state, action) => ({
      ...state,
      tvpost: {
        ...state.tvpost,
        movies: {},
      },
    }),
  },
  initialState,
);

export default post;
