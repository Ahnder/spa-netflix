import { combineReducers } from 'redux';
import mainlist from './mainlist';
import post from './post';
import mylist from './mylist';

const rootReducer = combineReducers({
  mainlist,
  post,
  mylist,
});

export default rootReducer;
