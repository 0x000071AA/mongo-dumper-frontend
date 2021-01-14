import {
  USER_TOKEN_SET,
  SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE,
} from '../actions/auth';

export default function (state = { isPending: false, error: {}, authUser: {}, token: '' }, action) {
  switch (action.type) {
    case USER_TOKEN_SET: {
      return { ...state, token: action.token };
    }
    case SIGNIN_REQUEST: {
      return { ...state, isPending: true, error: {} };
    }
    case SIGNIN_SUCCESS: {
      const elm = action.response.entities.auth_user.res;
      const auth_user = elm.data[0];
      return { ...state, isPending: false, success: true, message: elm.message, error: {}, ...auth_user };
    }
    case SIGNIN_FAILURE: {
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    }
    default:
      return state;
  }
}
