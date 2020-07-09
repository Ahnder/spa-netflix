/**
 * TV 와 MOVIE 의 id값으로 상세정보를 가져오는 모듈
 */

import { handleActions } from 'redux-actions';
import createRequestThunk from '../lib/util/createRequestThunk';
import * as api from '../lib/api/tmdb_api';

const GET_TVPOST = 'post/GET_TVPOST';
const GET_TVPOST_SUCCESS = 'post/GET_TVPOST_SUCCESS';

export const getTvPost = createRequestThunk(GET_TVPOST, api.getTvPost);

const initialState = {
  tvpost: null,
};

const post = handleActions(
  {
    [GET_TVPOST_SUCCESS]: (state, action) => ({
      ...state,
      tvpost: action.payload,
    }),
  },
  initialState,
);

export default post;
