// Core
import { combineReducers } from 'redux';

// Constants
import * as getUsers from '../constants/getUsers';
import * as userInfo from '../constants/userInfo';

const initialState = {
  isFetching: {
    getUsers: false,
    getUserInfo: false,
  },
};

export const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case getUsers.GET_USERS_REQUEST:
      return { ...state, getUsers: true };
    case userInfo.GET_USER_INFO_REQUEST:
      return { ...state, getUserInfo: true };

    case getUsers.GET_USERS_SUCCESS:
    case getUsers.GET_USERS_FAILURE:
      return { ...state, getUsers: false };
    case userInfo.GET_USER_INFO_SUCCESS:
    case userInfo.GET_USER_INFO_FAILURE:
      return { ...state, getUserInfo: false };

    default:
      return state;
  }
};

export default combineReducers({
  isFetching,
});
