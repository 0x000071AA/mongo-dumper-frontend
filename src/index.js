/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.css';
import createHistory from 'history/createBrowserHistory';
import App from './App';
import registerServiceWorker from './_utils/registerServiceWorker';
import configureStore from './store/configureStore';

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);
registerServiceWorker();
