// Constants
import * as getUserInfoConstants from '../constants/userInfo';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case getUserInfoConstants.GET_USER_INFO_SUCCESS:
      return { ...action.payload };
    case getUserInfoConstants.GET_USER_INFO_REQUEST:
      return { ...initialState };
    default:
      return state;
  }
};
