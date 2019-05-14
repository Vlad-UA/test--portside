// Core
import { combineReducers } from 'redux';

// Reducers
import users from './users';
import userInfo from './userInfo';
import services from './services';

export default combineReducers({
  users,
  userInfo,
  services,
});
