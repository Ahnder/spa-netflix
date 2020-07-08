import { createAction, handleActions } from 'redux-actions';
/* import tmdb api */
import * as api from '../lib/api/tmdb_api';

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

export const getNetflix = () => async (dispatch) => {
  dispatch({ type: GET_NETFLIX }); // 요청 시작
  try {
    const response = await api.getNetflixoriginal();
    dispatch({
      type: GET_NETFLIX_SUCCESS,
      payload: response.data,
    }); // 요청 성공
  } catch (e) {
    dispatch({
      type: GET_NETFLIX_FAILURE,
      payload: e,
      error: true,
    }); // 요청 실패
    throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 하기 위한 조치
  }
};
export const getTvTrending = () => async (dispatch) => {
  dispatch({ type: GET_TVTRENDING }); // 요청 시작
  try {
    const response = await api.getTvTrending();
    dispatch({
      type: GET_TVTRENDING_SUCCESS,
      payload: response.data,
    }); // 요청 성공
  } catch (e) {
    dispatch({
      type: GET_TVTRENDING_FAILURE,
      payload: e,
      error: true,
    }); // 요청 실패
    throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 하기 위한 조치
  }
};

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
