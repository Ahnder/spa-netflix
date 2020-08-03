import { createAction, handleActions } from 'redux-actions';
import createRequestThunk from '../lib/util/createRequestThunk';
import * as api from '../lib/api/tmdb_api';

const GET_VIDEO = 'vidoes/GET_VIDEO';
const GET_VIDEO_SUCCESS = 'vidoes/GET_VIDEO_SUCCESS';

const CLEAR_VIDEO = 'vidoes/CLEAR_VIDEO';

export const getTvVideo = createRequestThunk(GET_VIDEO, api.getTvVideo);
export const getMovieVideo = createRequestThunk(GET_VIDEO, api.getMovieVideo);

export const clearVideo = createAction(CLEAR_VIDEO);

const initialState = {
  videos: null,
  videokey: null,
};

const videos = handleActions(
  {
    [GET_VIDEO_SUCCESS]: (state, action) => ({
      ...state,
      videos: action.payload.results,
      videokey: action.payload.results[0].key,
    }),
    [CLEAR_VIDEO]: (state) => ({
      ...state,
      videos: null,
      videokey: null,
    }),
  },
  initialState,
);

export default videos;
