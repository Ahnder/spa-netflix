import { combineReducers } from 'redux';
import mainlist from './mainlist';
import post from './post';
import mylist from './mylist';
import videos from './videos';

const rootReducer = combineReducers({
  mainlist,
  post,
  mylist,
  videos,
});

export default rootReducer;
