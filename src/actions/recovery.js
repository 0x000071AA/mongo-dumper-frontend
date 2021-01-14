/**
 *
 * */
import { schema } from 'normalizr';
import { CALL_API } from '../_utils/api';

export const RECOVERY_REQUEST_CREATE = 'RECOVERY_REQUEST_CREATE';
export const RECOVERY_SUCCESS_CREATE = 'RECOVERY_SUCCESS_CREATE';
export const RECOVERY_FAILURE_CREATE = 'RECOVERY_FAILURE_CREATE';

export const RECOVERY_LOGS_REQUEST_SHOW = 'RECOVERY_LOGS_REQUEST_SHOW';
export const RECOVERY_LOGS_SUCCESS_SHOW = 'RECOVERY_LOGS_SUCCESS_SHOW';
export const RECOVERY_LOGS_FAILURE_SHOW = 'RECOVERY_LOGS_FAILURE_SHOW';

export const RECOVERY_LOGS_DB_REQUEST_GET = 'RECOVERY_LOGS_DB_REQUEST_GET';
export const RECOVERY_LOGS_DB_SUCCESS_GET = 'RECOVERY_LOGS_DB_SUCCESS_GET';
export const RECOVERY_LOGS_DB_FAILURE_GET = 'RECOVERY_LOGS_DB_FAILURE_GET';

const responseSchema = new schema.Entity('recoveries', {}, {
  idAttribute: () => 'res',
});

const _createRecovery = body => ({
  [CALL_API]: {
    types: [RECOVERY_REQUEST_CREATE, RECOVERY_SUCCESS_CREATE, RECOVERY_FAILURE_CREATE],
    endpoint: '/v1/recoveries',
    json: true,
    options: {
      method: 'POST',
      headers: new Headers(),
      body
    },
    schema: responseSchema
  }
});

const _fetchRecoveryLogs = () => ({
  [CALL_API]: {
    types: [RECOVERY_LOGS_REQUEST_SHOW, RECOVERY_LOGS_SUCCESS_SHOW, RECOVERY_LOGS_FAILURE_SHOW],
    endpoint: '/v1/recoveries/logs',
    json: true,
    options: {
      method: 'GET',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

const _fetchRecoveryLogsDB = db_descriptor => ({
  [CALL_API]: {
    types: [RECOVERY_LOGS_DB_REQUEST_GET, RECOVERY_LOGS_DB_SUCCESS_GET, RECOVERY_LOGS_DB_FAILURE_GET],
    endpoint: `/v1/recoveries/logs?db_descriptor=${db_descriptor}`,
    json: true,
    options: {
      method: 'GET',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

export const getRecoveryLogs = () => (dispatch, getState) => dispatch(_fetchRecoveryLogs());
export const getRecoveryLogsDB = db => (dispatch, getState) => dispatch(_fetchRecoveryLogsDB(db));

export const createRecovery = recovery => (dispatch, getState) => dispatch(_createRecovery(recovery));
