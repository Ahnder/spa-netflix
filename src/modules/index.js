import { combineReducers } from 'redux';
import mainlist from './mainlist';
import loading from './loading';
import post from './post';
import genres from './genres';
import mylist from './mylist';

const rootReducer = combineReducers({
  mainlist,
  loading,
  post,
  genres,
  mylist,
});

export default rootReducer;
