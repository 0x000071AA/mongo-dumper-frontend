import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
// import { createLogger } from 'redux-logger';
import api from '../_utils/api';
import rootReducer from '../reducers/index';

const configureStore = (history) => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, api, routerMiddleware(history))
  );
  store.subscribe(() => {
    localStorage.setItem('AUTH_TOKEN', store.getState().auth.token);
  });
  return store;
};

export default configureStore;
