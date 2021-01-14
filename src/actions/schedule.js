/**
 *
 * */
import { schema } from 'normalizr';
import { CALL_API } from '../_utils/api';

export const SCHEDULES_REQUEST_GET = 'SCHEDULES_REQUEST_GET';
export const SCHEDULES_SUCCESS_GET = 'SCHEDULES_SUCCESS_GET';
export const SCHEDULES_FAILURE_GET = 'SCHEDULES_FAILURE_GET';

export const SCHEDULES_BY_LABEL_REQUEST_GET = 'SCHEDULES_BY_LABEL_REQUEST_GET';
export const SCHEDULES_BY_LABEL_SUCCESS_GET = 'SCHEDULES_BY_LABEL_SUCCESS_GET';
export const SCHEDULES_BY_LABEL_FAILURE_GET = 'SCHEDULES_BY_LABEL_FAILURE_GET';

export const SCHEDULE_REQUEST_GET = 'SCHEDULE_REQUEST_GET';
export const SCHEDULE_SUCCESS_GET = 'SCHEDULE_SUCCESS_GET';
export const SCHEDULE_FAILURE_GET = 'SCHEDULE_FAILURE_GET';

export const SCHEDULE_REQUEST_CREATE = 'SCHEDULE_REQUEST_CREATE';
export const SCHEDULE_SUCCESS_CREATE = 'SCHEDULE_SUCCESS_CREATE';
export const SCHEDULE_FAILURE_CREATE = 'SCHEDULE_FAILURE_CREATE';

export const SCHEDULE_REQUEST_UPDATE = 'SCHEDULE_REQUEST_UPDATE';
export const SCHEDULE_SUCCESS_UPDATE = 'SCHEDULE_SUCCESS_UPDATE';
export const SCHEDULE_FAILURE_UPDATE = 'SCHEDULE_FAILURE_UPDATE';

export const SCHEDULE_REQUEST_DELETE = 'SCHEDULE_REQUEST_DELETE';
export const SCHEDULE_SUCCESS_DELETE = 'SCHEDULE_SUCCESS_DELETE';
export const SCHEDULE_FAILURE_DELETE = 'SCHEDULE_FAILURE_DELETE';

const responseSchema = new schema.Entity('schedules', {}, {
  idAttribute: () => 'res',
});

const _fetchSchedules = () => ({
  [CALL_API]: {
    types: [SCHEDULES_REQUEST_GET, SCHEDULES_SUCCESS_GET, SCHEDULES_FAILURE_GET],
    endpoint: '/v1/schedules',
    json: true,
    options: {
      method: 'GET',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

const _fetchSchedulesByLabel = label => ({
  [CALL_API]: {
    types: [SCHEDULES_BY_LABEL_REQUEST_GET, SCHEDULES_BY_LABEL_SUCCESS_GET, SCHEDULES_BY_LABEL_FAILURE_GET],
    endpoint: `/v1/schedules/${label}`,
    json: true,
    options: {
      method: 'GET',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

const _fetchSchedule = schedule_descriptor => ({
  [CALL_API]: {
    types: [SCHEDULE_REQUEST_GET, SCHEDULE_SUCCESS_GET, SCHEDULE_FAILURE_GET],
    endpoint: `/v1/schedules?schedule_descriptor=${schedule_descriptor}`,
    json: true,
    options: {
      method: 'GET',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

const _createSchedule = body => ({
  [CALL_API]: {
    types: [SCHEDULE_REQUEST_CREATE, SCHEDULE_SUCCESS_CREATE, SCHEDULE_FAILURE_CREATE],
    endpoint: '/v1/schedules',
    json: true,
    options: {
      method: 'POST',
      headers: new Headers(),
      body
    },
    schema: responseSchema
  }
});

const _updateSchedule = body => ({
  [CALL_API]: {
    types: [SCHEDULE_REQUEST_UPDATE, SCHEDULE_SUCCESS_UPDATE, SCHEDULE_FAILURE_UPDATE],
    endpoint: '/v1/schedules',
    json: true,
    options: {
      method: 'PUT',
      headers: new Headers(),
      body
    },
    schema: responseSchema
  }
});

const _deleteSchedule = schedule_descriptor => ({
  [CALL_API]: {
    types: [SCHEDULE_REQUEST_DELETE, SCHEDULE_SUCCESS_DELETE, SCHEDULE_FAILURE_DELETE],
    endpoint: `/v1/schedules?schedule_descriptor=${schedule_descriptor}`,
    json: true,
    options: {
      method: 'DELETE',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

export const getSchedules = () => (dispatch, getState) => dispatch(_fetchSchedules());
export const getSchedule = id => (dispatch, getState) => dispatch(_fetchSchedule(id));
export const getSchedulesByLabel = label => (dispatch, getState) => dispatch(_fetchSchedulesByLabel(label));

export const createSchedule = body => (dispatch, getState) => dispatch(_createSchedule(body));
export const updateSchedule = body => (dispatch, getState) => dispatch(_updateSchedule(body));
export const deleteSchedule = id => (dispatch, getState) => dispatch(_deleteSchedule(id));
