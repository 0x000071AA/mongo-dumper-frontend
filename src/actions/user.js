/**
 *
 * */
import { schema } from 'normalizr';
import { push } from 'react-router-redux';
import { CALL_API } from '../_utils/api';
import { USER_TOKEN_SET } from './auth';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAILURE = 'USERS_FAILURE';

export const USER_REQUEST_CREATE = 'USER_REQUEST_CREATE';
export const USER_SUCCESS_CREATE = 'USER_SUCCESS_CREATE';
export const USER_FAILURE_CREATE = 'USER_FAILURE_CREATE';

export const USER_REQUEST_DELETE = 'USER_REQUEST_DELETE';
export const USER_SUCCESS_DELETE = 'USER_SUCCESS_DELETE';
export const USER_FAILURE_DELETE = 'USER_FAILURE_DELETE';

export const userSchema = new schema.Entity('users');
export const userListSchema = new schema.Array(userSchema);

const responseSchema = new schema.Entity('users', {}, {
  idAttribute: () => 'res',
});

const _fetchUsers = () => ({
  [CALL_API]: {
    types: [USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE],
    endpoint: '/v1/users',
    json: true,
    options: {
      method: 'GET',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});
const _fetchUser = (user_id, types = [USER_REQUEST, USER_SUCCESS, USER_FAILURE]) => ({
  [CALL_API]: {
    types,
    endpoint: `/v1/users?user_id=${user_id}`,
    json: true,
    options: {
      method: 'GET',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

const _createUser = body => ({
  [CALL_API]: {
    types: [USER_REQUEST_CREATE, USER_SUCCESS_CREATE, USER_FAILURE_CREATE],
    endpoint: '/v1/users',
    json: true,
    options: {
      method: 'POST',
      headers: new Headers(),
      body
    },
    schema: responseSchema
  }
});

const _deleteUser = user_id => ({
  [CALL_API]: {
    types: [USER_REQUEST_DELETE, USER_SUCCESS_DELETE, USER_FAILURE_DELETE],
    endpoint: `/v1/users?user_id=${user_id}`,
    json: true,
    options: {
      method: 'DELETE',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

export const getUsers = () => (dispatch, getState) => dispatch(_fetchUsers());
export const showUser = id => dispatch => dispatch(_fetchUser(id));
export const getUser = (_id, types) => (dispatch, getState) => {
  dispatch(_fetchUser(_id, types)).then((res) => {
    if (res.type !== USER_SUCCESS) {
      dispatch(push('/login'));
      return null;
    }
    const user = getState().Users.getUser.user;
    dispatch({
      type: USER_TOKEN_SET,
      token: user.token.token
    });
    dispatch(push('/'));
  });
};
export const deleteUser = _id => (dispatch, getState) => dispatch(_deleteUser(_id));

export const createUser = username => (dispatch, getState) => {
  const bodyUser = {
    username: username
  };
  dispatch(_createUser(bodyUser));
};
