// Constants
import * as getUserInfoConstants from '../constants/userInfo';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case getUserInfoConstants.GET_USER_INFO_SUCCESS:

      console.log('action.payload', action.payload);
      return { ...action.payload };
    default:
      return state;
  }
};
