// Core
import { combineReducers } from 'redux';

// Constants
import * as getUsers from '../constants/getUsers';

const initialState = {
  isFetching: {
    getUsers: false,
  },

  errors: {
    auth: null,
    chat: null,
  },

  isConnected: false,
};

export const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case getUsers.GET_USERS_REQUEST:
      return { ...state, getUsers: true };

    case getUsers.GET_USERS_SUCCESS:
    case getUsers.GET_USERS_FAILURE:
      return { ...state, getUsers: false };

    default:
      return state;
  }
};

export const errors = (state = initialState.errors, action) => {
  switch (action.type) {
    // case authenticationConstants.SIGNUP_FAILURE:
    // case authenticationConstants.LOGIN_FAILURE:
    // case authenticationConstants.LOGOUT_FAILURE:
    //   return {
    //     ...state,
    //     auth: action.payload,
    //   };
    // case authenticationConstants.SIGNUP_SUCCESS:
    // case authenticationConstants.LOGIN_SUCCESS:
    // case authenticationConstants.LOGOUT_SUCCESS:
    //   return {
    //     ...state,
    //     auth: null,
    //   };
    default:
      return state;
  }
};

export default combineReducers({
  isFetching,
  errors,
});
