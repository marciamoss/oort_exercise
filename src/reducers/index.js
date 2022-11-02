import { combineReducers } from 'redux';
import authReducer from './authReducer';
import getEC2Reducer from './getEC2Reducer';
import sortReducer from './sortReducer';

export default combineReducers({
  auth: authReducer,
  sort: sortReducer,
  getEC2: getEC2Reducer
});
