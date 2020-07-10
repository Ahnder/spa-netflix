import { combineReducers } from 'redux';
import mainlist from './mainlist';
import loading from './loading';
import post from './post';
import genres from './genres';

const rootReducer = combineReducers({
  mainlist,
  loading,
  post,
  genres,
});

export default rootReducer;
