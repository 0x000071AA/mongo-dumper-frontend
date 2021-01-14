import {
  DATABASES_REQUEST_GET,
  DATABASES_SUCCESS_GET,
  DATABASES_FAILURE_GET,
} from '../actions/database';

export default function (state = { isPending: false, error: {}, dbs: [] }, action) {
  switch (action.type) {
    case DATABASES_REQUEST_GET: {
      return { ...state, isPending: true, error: {} };
    }
    case DATABASES_SUCCESS_GET: {
      const elm = action.response.entities.databases.res;
      return { ...state, isPending: false, dbs: elm.data.slice() };
    }
    case DATABASES_FAILURE_GET: {
      return { ...state, isPending: false, error: { hasError: true, error: action.error } };
    }
    default:
      return state;
  }
}
