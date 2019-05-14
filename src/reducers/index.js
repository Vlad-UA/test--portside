// Core
import { combineReducers } from 'redux';

// Reducers
import users from './users';
import userData from './userData';
import services from './servicesReducer';

export default combineReducers({
  users,
  userData,
  services,
});
