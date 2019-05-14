import history from '../utils/history';
import * as redirectConst from '../constants/redirect';

// eslint-disable-next-line
export function redirect(to) {
  return (dispatch) => {
    history.push(`${process.env.PUBLIC_URL}${to}`);

    dispatch({
      type: redirectConst.REDIRECT,
      payload: { to },
    });
  };
}
