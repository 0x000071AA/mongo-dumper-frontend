/**
 *
 * */
import { schema } from 'normalizr';
import { CALL_API } from '../_utils/api';

export const DATABASES_REQUEST_GET = 'DATABASES_REQUEST_GET';
export const DATABASES_SUCCESS_GET = 'DATABASES_SUCCESS_GET';
export const DATABASES_FAILURE_GET = 'DATABASES_FAILURE_GET';

export const databaseSchema = new schema.Entity('databases');
export const databaseListSchema = new schema.Array(databaseSchema);

const responseSchema = new schema.Entity('databases', {}, {
  idAttribute: () => 'res',
});

const _fetchDatabases = () => ({
  [CALL_API]: {
    types: [DATABASES_REQUEST_GET, DATABASES_SUCCESS_GET, DATABASES_FAILURE_GET],
    endpoint: '/v1/databases',
    json: true,
    options: {
      method: 'GET',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

export const getDatabases = () => (dispatch, getState) => dispatch(_fetchDatabases());
