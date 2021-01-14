import * as types from '../actions/schedule';

export const getSchedules = (state = { isPending: false, error: {}, schedules: [] }, action) => {
  switch (action.type) {
    case types.SCHEDULES_REQUEST_GET:
      return { ...state, isPending: true, error: {} };
    case types.SCHEDULES_SUCCESS_GET: {
      const elm = action.response.entities.schedules.res;
      return { ...state, isPending: false, success: true, message: elm.message, schedules: elm.data.slice() };
    }
    case types.SCHEDULES_FAILURE_GET:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};
export const getSchedule = (state = { isPending: false, error: {}, schedule: {} }, action) => {
  switch (action.type) {
    case types.SCHEDULE_REQUEST_GET:
      return { ...state, isPending: true, error: {} };
    case types.SCHEDULE_SUCCESS_GET: {
      const elm = action.response.entities.schedules.res;
      const schedule = elm.data[0];
      return { ...state, isPending: false, success: true, message: elm.message, schedule: { ...schedule } };
    }
    case types.SCHEDULE_FAILURE_GET:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};
export const getSchedulesByLabel = (state = { isPending: false, error: {}, schedules: [] }, action) => {
  switch (action.type) {
    case types.SCHEDULES_BY_LABEL_REQUEST_GET:
      return { ...state, isPending: true, error: {} };
    case types.SCHEDULES_BY_LABEL_SUCCESS_GET: {
      const elm = action.response.entities.schedules.res;
      return { ...state, isPending: false, success: true, message: elm.message, schedules: elm.data.slice() };
    }
    case types.SCHEDULES_BY_LABEL_FAILURE_GET:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};
export const createSchedule = (state = { isPending: false, error: {}, schedule: {} }, action) => {
  switch (action.type) {
    case types.SCHEDULE_REQUEST_CREATE:
      return { ...state, isPending: true, error: {} };
    case types.SCHEDULE_SUCCESS_CREATE: {
      const elm = action.response.entities.schedules.res;
      const schedule = elm.data[0];
      return { ...state, isPending: false, success: true, message: elm.message, schedule: { ...schedule } };
    }
    case types.SCHEDULE_FAILURE_CREATE:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};
export const updateSchedule = (state = { isPending: false, error: {}, schedule: {} }, action) => {
  switch (action.type) {
    case types.SCHEDULE_REQUEST_UPDATE:
      return { ...state, isPending: true, error: {} };
    case types.SCHEDULE_SUCCESS_UPDATE: {
      const elm = action.response.entities.schedules.res;
      const schedule = elm.data[0];
      return { ...state, isPending: false, success: true, message: elm.message, schedule: { ...schedule } };
    }
    case types.SCHEDULE_FAILURE_UPDATE:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};
export const deleteSchedule = (state = { isPending: false, error: {}, schedule: {} }, action) => {
  switch (action.type) {
    case types.SCHEDULE_REQUEST_DELETE:
      return { ...state, isPending: true, error: {} };
    case types.SCHEDULE_SUCCESS_DELETE: {
      const elm = action.response.entities.schedules.res;
      const schedule = elm.data[0];
      return { ...state, isPending: false, success: true, message: elm.message, schedule: { ...schedule } };
    }
    case types.SCHEDULE_FAILURE_DELETE:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};
