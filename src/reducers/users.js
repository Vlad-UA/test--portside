// Constants
import * as getUsersConstants from '../constants/getUsers';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case getUsersConstants.GET_USERS_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
};
