import { combineReducers } from 'redux';
import mainlist from './mainlist';
import loading from './loading';

const rootReducer = combineReducers({
  mainlist,
  loading,
});

export default rootReducer;
