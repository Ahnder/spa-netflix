import { createAction, handleActions } from 'redux-actions';

const INSERT_MYLIST = 'mylist/INSERT_MYLIST';
const REMOVE_MYLIST = 'mylist/REMOVE_MYLIST';
const INSERT_MYLIST_TV = 'mylist/INSERT_MYLIST_TV';
const INSERT_MYLIST_MOVIE = 'mylist/INSERT_MYLIST_MOVIE';

export const insertMyList = createAction(INSERT_MYLIST, (movie) => movie);
export const removeMyList = createAction(REMOVE_MYLIST, (id) => id);
export const insertMyListTv = createAction(INSERT_MYLIST_TV, (tv) => tv);
export const insertMyListMovie = createAction(
  INSERT_MYLIST_MOVIE,
  (movie) => movie,
);

const initialState = {
  mylist: JSON.parse(sessionStorage.getItem('sessionMylist')) || [],
};

const mylist = handleActions(
  {
    [INSERT_MYLIST]: (state, action) => ({
      ...state,
      mylist: state.mylist.concat(action.payload),
    }),
    [REMOVE_MYLIST]: (state, action) => ({
      ...state,
      mylist: state.mylist.filter((movie) => movie.data.id !== action.payload),
    }),
    [INSERT_MYLIST_TV]: (state, action) => ({
      ...state,
      mylist: state.mylist.concat({
        type: 'tv',
        data: action.payload,
      }),
    }),
    [INSERT_MYLIST_MOVIE]: (state, action) => ({
      ...state,
      mylist: state.mylist.concat({
        type: 'movie',
        data: action.payload,
      }),
    }),
  },
  initialState,
);

export default mylist;
