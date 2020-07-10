import { createAction, handleActions } from 'redux-actions';

const INSERT_MYLIST = 'mylist/INSERT_MYLIST';
const REMOVE_MYLIST = 'mylist/REMOVE_MYLIST';

export const insertMyList = createAction(INSERT_MYLIST, (movie) => movie);
export const removeMyList = createAction(REMOVE_MYLIST, (id) => id);

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
      mylist: state.mylist.filter((movie) => movie.id !== action.payload),
    }),
  },
  initialState,
);

export default mylist;
