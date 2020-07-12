import { combineReducers } from 'redux';
import mainlist from './mainlist';
import post from './post';
import genres from './genres';
import mylist from './mylist';

const rootReducer = combineReducers({
  mainlist,
  post,
  genres,
  mylist,
});

export default rootReducer;
