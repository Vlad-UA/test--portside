// Utils
import callApi from '../utils/call-api';

// Actions
import { redirect } from './services';

// Constants
import * as getUserInfoConstants from '../constants/userInfo';
import { URL } from '../constants/url';

export function getUserInfo(userId) {
  return (dispatch, getState) => {
    const { isFetching } = getState().services;

    if (isFetching.getUserInfo) {
      return Promise.resolve();
    }

    dispatch({
      type: getUserInfoConstants.GET_USER_INFO_REQUEST,
    });

    return callApi(`${URL}/${userId}`)
      .then((json) => {
        dispatch({
          type: getUserInfoConstants.GET_USER_INFO_SUCCESS,
          payload: json,
        });

        dispatch(redirect(`/user/${userId}`));

        return json;
      })
      .catch(reason => dispatch({
        type: getUserInfoConstants.GET_USER_INFO_FAILURE,
        payload: reason,
      }));
  };
}
