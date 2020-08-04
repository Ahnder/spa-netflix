import { createAction, handleActions } from 'redux-actions';
import createRequestThunk from '../lib/util/createRequestThunk';
import * as api from '../lib/api/tmdb_api';

const GET_VIDEOKEY = 'vidoes/GET_VIDEOKEY';
const GET_VIDEOKEY_SUCCESS = 'vidoes/GET_VIDEOKEY_SUCCESS';

const CLEAR_VIDEOKEY = 'vidoes/CLEAR_VIDEOKEY';

export const getTvVideoKey = createRequestThunk(GET_VIDEOKEY, api.getTvVideo);
export const getMovieVideoKey = createRequestThunk(
  GET_VIDEOKEY,
  api.getMovieVideo,
);

export const clearVideoKey = createAction(CLEAR_VIDEOKEY);

const initialState = {
  videokey: null,
};

const videos = handleActions(
  {
    [GET_VIDEOKEY_SUCCESS]: (state, action) => ({
      ...state,
      videokey: action.payload.results[0].key,
    }),
    [CLEAR_VIDEOKEY]: (state, action) => ({
      ...state,
      videokey: null,
    }),
  },
  initialState,
);

export default videos;
