import * as types from '../actions/recovery';

export const getRecoveryLogs = (state = { isPending: false, error: {}, recoveryLogs: [] }, action) => {
  switch (action.type) {
    case types.RECOVERY_LOGS_REQUEST_SHOW:
      return { ...state, isPending: true, error: {} };
    case types.RECOVERY_LOGS_SUCCESS_SHOW: {
      const elm = action.response.entities.recoveries.res;
      return { ...state, isPending: false, success: true, recoveryLogs: elm.data.slice() };
    }
    case types.RECOVERY_LOGS_FAILURE_SHOW:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};
export const getRecoveryLogsDB = (state = { isPending: false, error: {}, recoveryLogsDB: [] }, action) => {
  switch (action.type) {
    case types.RECOVERY_LOGS_DB_REQUEST_GET:
      return { ...state, isPending: true, error: {} };
    case types.RECOVERY_LOGS_DB_SUCCESS_GET: {
      const elm = action.response.entities.recoveries.res;
      return { ...state, isPending: false, success: true, recoveryLogsDB: elm.data.slice() };
    }
    case types.RECOVERY_LOGS_DB_FAILURE_GET:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};
export const createRecovery = (state = { isPending: false, error: {}, recovery: {} }, action) => {
  switch (action.type) {
    case types.RECOVERY_REQUEST_CREATE:
      return { ...state, isPending: true, error: {} };
    case types.RECOVERY_SUCCESS_CREATE: {
      const elm = action.response.entities.recoveries.res;
      const recov = elm.data[0];
      return { ...state, isPending: false, success: true, message: elm.message, recovery: { ...recov } };
    }
    case types.RECOVERY_FAILURE_CREATE:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};
