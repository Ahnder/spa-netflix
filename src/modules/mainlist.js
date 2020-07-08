import { handleActions } from 'redux-actions';
/* import tmdb api */
import * as api from '../lib/api/tmdb_api';
import createRequestThunk from '../lib/util/createRequestThunk';

/**
 * GET_NETFLIX : 넷플릭스 오리지널 시리즈 데이터를 가져온다.
 * GET_TVTRENDING : 일주일동안 인기있는 TV 시리즈 데이터를 가져온다.
 */

const GET_NETFLIX = 'mainlist/GET_NETFLIX';
const GET_NETFLIX_SUCCESS = 'mainlist/GET_NETFLIX_SUCCESS';
const GET_NETFLIX_FAILURE = 'mainlist/GET_NETFLIX_FAILURE';

const GET_TVTRENDING = 'mainlist/GET_TVTRENDING';
const GET_TVTRENDING_SUCCESS = 'mainlist/GET_TVTRENDING_SUCCESS';
const GET_TVTRENDING_FAILURE = 'mainlist/GET_TVTRENDING_FAILURE';

// thunk 함수 생성

export const getNetflix = createRequestThunk(
  GET_NETFLIX,
  api.getNetflixoriginal,
);
export const getTvTrending = createRequestThunk(
  GET_TVTRENDING,
  api.getTvTrending,
);

// 초기 상태를 선언
// 요청의 로딩 중 상태는 loading 이라는 객체에서 관리
const initialState = {
  loading: {
    GET_NETFLIX: false,
    GET_TVTRENDING: false,
  },
  netflix: null,
  tvtrend: null,
};

const mainlist = handleActions(
  {
    [GET_NETFLIX]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_NETFLIX: true, // 요청시작 : 로딩 true
      },
    }),
    [GET_NETFLIX_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_NETFLIX: false,
      },
      netflix: action.payload.results, // results 는 tmdb 데이터 변수
    }),
    [GET_NETFLIX_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_NETFLIX: false,
      },
    }),
    [GET_TVTRENDING]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_TVTRENDING: true,
      },
    }),
    [GET_TVTRENDING_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_TVTRENDING: false,
      },
      tvtrend: action.payload.results,
    }),
    [GET_TVTRENDING_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_TVTRENDING: false,
      },
    }),
  },
  initialState,
);

export default mainlist;
