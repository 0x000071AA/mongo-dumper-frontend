/**
 *
 * */
import { schema } from 'normalizr';
import { push } from 'react-router-redux';
import { CALL_API } from '../_utils/api';
// import { getUser } from '../actions/user';

export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

export const USER_TOKEN_SET = 'USER_TOKEN_SET';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userSchema = new schema.Entity('auth_user');


const _fetchUserAuth = token => ({
  [CALL_API]: {
    types: [SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE],
    endpoint: `/v1/auth?token=${token}`,
    json: true,
    options: {
      method: 'GET',
      headers: new Headers(),
    },
    schema: userSchema
  }
});

export const getUserPermissions = token => (dispatch, getState) => {
  dispatch(_fetchUserAuth(token)).then((el) => {
    if (el.type !== SIGNIN_SUCCESS) {
      dispatch(push('/login'));
      return;
    }
    const verified_token = getState().auth.token;
    dispatch({
      type: USER_TOKEN_SET,
      token: verified_token
    });
  });
};

