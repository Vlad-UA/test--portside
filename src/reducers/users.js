// Constants
import * as getUsersConstants from '../constants/getUsers';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case getUsersConstants.GET_USERS_SUCCESS:
      return [...action.payload];
    case getUsersConstants.GET_USERS_REQUEST:
      return [...initialState];
    default:
      return state;
  }
};
