// Utils
import history from '../utils/history';

export function redirect(to) {
  return () => {
    history.push(`${process.env.PUBLIC_URL}${to}`);
  };
}
