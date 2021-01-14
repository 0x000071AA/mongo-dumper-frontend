import { combineReducers } from 'redux';
import * as types from '../actions/user';

const getUser = (state = { isPending: false, error: {}, user: {} }, action) => {
  switch (action.type) {
    case types.USER_REQUEST: {
      return { ...state, isPending: true, error: {} };
    }
    case types.USER_SUCCESS: {
      const elm = action.response.entities.users.res;
      const user = elm.data[0];
      return { ...state, isPending: false, success: true, message: elm.message, error: {}, user: { ...user } };
    }
    case types.USER_FAILURE: {
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    }
    default:
      return state;
  }
};

const getUsers = (state = { isPending: false, error: {}, users: [] }, action) => {
  switch (action.type) {
    case types.USERS_REQUEST: {
      return { ...state, isPending: true, error: {} };
    }
    case types.USERS_SUCCESS: {
      const elm = action.response.entities.users.res;
      return { ...state, isPending: false, success: true, message: elm.message, error: {}, users: elm.data.slice() };
    }
    case types.USERS_FAILURE: {
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    }
    default:
      return state;
  }
};

const createUser = (state = { isPending: false, error: {}, user: {} }, action) => {
  switch (action.type) {
    case types.USER_REQUEST_CREATE: {
      return { ...state, isPending: true, error: {} };
    }
    case types.USER_SUCCESS_CREATE: {
      const elm = action.response.entities.users.res;
      const user = elm.data[0];
      return { ...state, isPending: false, success: true, message: elm.message, error: {}, user: { ...user } };
    }
    case types.USER_FAILURE_CREATE: {
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    }
    default:
      return state;
  }
};

const deleteUser = (state = { isPending: false, error: {}, user: {} }, action) => {
  switch (action.type) {
    case types.USER_REQUEST_DELETE: {
      return { ...state, isPending: true, error: {} };
    }
    case types.USER_SUCCESS_DELETE: {
      const elm = action.response.entities.users.res;
      const user = elm.data[0];
      return { ...state, isPending: false, message: elm.message, error: {}, success: true, user: { ...user } };
    }
    case types.USER_FAILURE_DELETE: {
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    }
    default:
      return state;
  }
};

export default combineReducers({
  getUser,
  deleteUser,
  createUser,
  getUsers
});
