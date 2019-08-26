import { combineReducers } from 'redux';
import addReducer from './reducers/add';
import removeReducer from './reducers/remove';

export default combineReducers({
  addReducer,
  removeReducer
});
