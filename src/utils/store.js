// Core
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// Reducers
import rootReducer from '../reducers';

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunkMiddleware));
}
