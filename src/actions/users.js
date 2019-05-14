// Utils
import callApi from '../utils/call-api';

// Actions
import { redirect } from './servicesActions';

// Constants
import * as getUsersConstants from '../constants/getUsers';
import * as getUserInfoConstants from '../constants/userInfo';
import url from '../constants/url';

export function getUsers() {
  return (dispatch, getState) => {
    const { isFetching } = getState().services;

    if (isFetching.getUsers) {
      return Promise.resolve();
    }

    dispatch({
      type: getUsersConstants.GET_USERS_REQUEST,
    });

    return callApi(url)
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

export function getUserInfo(userId) {
  return (dispatch, getState) => {
    const { isFetching } = getState().services;

    if (isFetching.getUserInfo) {
      return Promise.resolve();
    }

    dispatch({
      type: getUserInfoConstants.GET_USER_INFO_REQUEST,
    });

    return callApi(`${url}/${userId}`)
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
