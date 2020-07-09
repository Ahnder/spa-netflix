import { combineReducers } from 'redux';
import mainlist from './mainlist';
import loading from './loading';
import post from './post';

const rootReducer = combineReducers({
  mainlist,
  loading,
  post,
});

export default rootReducer;
