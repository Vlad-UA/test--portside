// Utils
import callApi from '../utils/call-api';

// Constants
import * as getUsersConstants from '../constants/getUsers';
import { URL } from '../constants/url';

export function getUsers() {
  return (dispatch, getState) => {
    const { isFetching } = getState().services;

    if (isFetching.getUsers) {
      return Promise.resolve();
    }

    dispatch({
      type: getUsersConstants.GET_USERS_REQUEST,
    });

    return callApi(URL)
      .then(json => dispatch({
        type: getUsersConstants.GET_USERS_SUCCESS,
        payload: json,
      }))
      .catch(reason => dispatch({
        type: getUsersConstants.GET_USERS_FAILURE,
        payload: reason,
      }));
  };
}
