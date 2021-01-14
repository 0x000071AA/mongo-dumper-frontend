/**
 *
 * Libary for api calls
 *
 * */
import { normalize } from 'normalizr';

export const CALL_API = 'Call API';
const API_ROOT = 'http://localhost:3001/dataguard';

const callApi = (endpoint, o_schema, options) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  return fetch(fullUrl, options)
    .then((response) => {
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json().then((json) => {
          if (!response.ok) {
            return Promise.reject({ status: response.status, ...json });
          }
          return Object.assign({}, normalize(json, o_schema));
        });
      }
      return response.text().then(text => text);
    });
};

export default store => next => (action) => {
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const { endpoint } = callAPI;
  let { options } = callAPI;
  const { schema, types, json } = callAPI;

  // const currentState = store.getState();

  if (typeof endpoint !== 'string') {
    throw new Error('Endpoint should be specified as string');
  }
  if (!schema) {
    throw new Error('Specify schema');
  }
  if (!Array.isArray(types) && !types.every(type => typeof type === 'string')) {
    throw new Error(`Expected action types to be an array of strings, got: ${types}`);
  }

  if (!options) {
    options = {
      method: 'GET',
      headers: new Headers()
    };
  }

  if (json) {
    options.headers.append('Content-Type', 'application/json');
  }
  if (options.body) {
    options.body = (options.body) ? JSON.stringify(options.body) : '';
  }
  const token = localStorage.getItem('AUTH_TOKEN');
  if (token) {
    options.headers.set('x-access-token', token);
  }

  const makeAction = (data) => {
    const newAction = Object.assign({}, action, data);
    delete newAction[CALL_API];
    return newAction;
  };

  const [requestType, successType, failureType] = types;
  next(makeAction({ type: requestType }));

  return callApi(endpoint, schema, options).then(
    response => next(makeAction({
      response,
      type: successType
    })),
    error => next(makeAction({
      error: error.message || 'Something went wrong',
      status: error.status || 500,
      type: failureType
    }))
  );
};
