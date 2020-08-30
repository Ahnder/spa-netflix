import { handleActions } from 'redux-actions';
/* import tmdb api */
import * as api from '../lib/api/tmdb_api';
import createRequestThunk from '../lib/util/createRequestThunk';

/**
 * GET_NETFLIX : 넷플릭스 오리지널 시리즈 데이터를 가져온다.
 * GET_ALLTRENDING : 일주일동안 인기있는 콘텐츠 데이터를 가져온다.
 * GET_GENRES : 장르별 영화 데이터를 가져온다.
 */

const GET_NETFLIX = 'mainlist/GET_NETFLIX';
const GET_NETFLIX_SUCCESS = 'mainlist/GET_NETFLIX_SUCCESS';

const GET_ALLTRENDING = 'mainlist/GET_ALLTRENDING';
const GET_ALLTRENDING_SUCCESS = 'mainlist/GET_ALLTRENDING_SUCCESS';

const GET_TVPOPULAR = 'mainlist/GET_TVPOPULAR';
const GET_TVPOPULAR_SUCCESS = 'mainlist/GET_TVPOPULAR_SUCCESS';

const GET_MOVIEPOPULAR = 'mainlist/GET_MOVIEPOPULAR';
const GET_MOVIEPOPULAR_SUCCESS = 'mainlist/GET_MOVIEPOPULAR_SUCCESS';

const GET_TVSIMILAR = 'post/GET_TVSIMILAR';
const GET_TVSIMILAR_SUCCESS = 'post/GET_TVSIMILAR_SUCCESS';

const GET_MOVIESIMILAR = 'post/GET_MOVIESIMILAR';
const GET_MOVIESIMILAR_SUCCESS = 'post/GET_MOVIESIMILAR_SUCCESS';

const GET_GENRES = 'genres/GET_GENRES';
const GET_GENRES_SUCCESS = 'genres/GET_GENRES_SUCCESS';

// thunk 함수 생성

export const getNetflix = createRequestThunk(
  GET_NETFLIX,
  api.getNetflixoriginal,
);
export const getAllTrending = createRequestThunk(
  GET_ALLTRENDING,
  api.getAllTrending,
);
export const getTvPopular = createRequestThunk(GET_TVPOPULAR, api.getTvPopular);
export const getMoviePopular = createRequestThunk(
  GET_MOVIEPOPULAR,
  api.getMoviePopular,
);
export const getTvSimilar = createRequestThunk(GET_TVSIMILAR, api.getTvSimilar);
export const getMovieSimilar = createRequestThunk(
  GET_MOVIESIMILAR,
  api.getMovieSimilar,
);
export const getGenres = createRequestThunk(GET_GENRES, api.getGenres);

// 초기 상태를 선언
// 요청의 로딩 중 상태는 loading 이라는 객체에서 관리
const initialState = {
  netflix: null,
  alltrend: null,
  tvpopular: null,
  moviepopular: null,
  similarcontents: null,
  genres: null,
};

const mainlist = handleActions(
  {
    [GET_NETFLIX_SUCCESS]: (state, { payload: netflixData }) => ({
      ...state,
      netflix: netflixData.results, // results 는 tmdb 데이터 변수
    }),
    [GET_ALLTRENDING_SUCCESS]: (state, { payload: alltrendData }) => ({
      ...state,
      alltrend: alltrendData.results,
    }),
    [GET_TVPOPULAR_SUCCESS]: (state, { payload: tvpopularData }) => ({
      ...state,
      tvpopular: tvpopularData.results,
    }),
    [GET_MOVIEPOPULAR_SUCCESS]: (state, { payload: moviepopularData }) => ({
      ...state,
      moviepopular: moviepopularData.results,
    }),
    [GET_TVSIMILAR_SUCCESS]: (state, { payload: tvsimilarData }) => ({
      ...state,
      similarcontents: tvsimilarData.results,
    }),
    [GET_MOVIESIMILAR_SUCCESS]: (state, { payload: moviesimilarData }) => ({
      ...state,
      similarcontents: moviesimilarData.results,
    }),
    [GET_GENRES_SUCCESS]: (state, { payload: genresData }) => ({
      ...state,
      genres: genresData.results,
    }),
  },
  initialState,
);

export default mainlist;
