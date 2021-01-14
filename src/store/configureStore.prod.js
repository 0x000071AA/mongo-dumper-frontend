import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import api from '../_utils/api';
import rootReducer from '../reducers/index';

const configureStore = (history) => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, api, routerMiddleware(history))
  );
  store.subscribe(() => {
    const token = store.getState().auth.token;
    localStorage.setItem('AUTH_TOKEN', token);
  });
  return store;
};

export default configureStore;
