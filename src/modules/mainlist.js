import { handleActions } from 'redux-actions';
/* import tmdb api */
import * as api from '../lib/api/tmdb_api';
import createRequestThunk from '../lib/util/createRequestThunk';

/**
 * GET_NETFLIX : 넷플릭스 오리지널 시리즈 데이터를 가져온다.
 * GET_TVTRENDING : 일주일동안 인기있는 TV 시리즈 데이터를 가져온다.
 * GET_GENRES : 장르별 영화 데이터를 가져온다.
 */

const GET_NETFLIX = 'mainlist/GET_NETFLIX';
const GET_NETFLIX_SUCCESS = 'mainlist/GET_NETFLIX_SUCCESS';

const GET_TVTRENDING = 'mainlist/GET_TVTRENDING';
const GET_TVTRENDING_SUCCESS = 'mainlist/GET_TVTRENDING_SUCCESS';

const GET_GENRES = 'genres/GET_GENRES';
const GET_GENRES_SUCCESS = 'genres/GET_GENRES_SUCCESS';

// thunk 함수 생성

export const getNetflix = createRequestThunk(
  GET_NETFLIX,
  api.getNetflixoriginal,
);
export const getTvTrending = createRequestThunk(
  GET_TVTRENDING,
  api.getTvTrending,
);
export const getGenres = createRequestThunk(GET_GENRES, api.getGenres);

// 초기 상태를 선언
// 요청의 로딩 중 상태는 loading 이라는 객체에서 관리
const initialState = {
  netflix: null,
  tvtrend: null,
  genres: null,
};

const mainlist = handleActions(
  {
    [GET_NETFLIX_SUCCESS]: (state, { payload: netflixData }) => ({
      ...state,
      netflix: netflixData.results, // results 는 tmdb 데이터 변수
    }),
    [GET_TVTRENDING_SUCCESS]: (state, { payload: tvtrendData }) => ({
      ...state,
      tvtrend: tvtrendData.results,
    }),
    [GET_GENRES_SUCCESS]: (state, { payload: genresData }) => ({
      ...state,
      genres: genresData.results,
    }),
  },
  initialState,
);

export default mainlist;
