/**
 *
 * */
import { schema } from 'normalizr';
import { CALL_API } from '../_utils/api';

export const COMMAND_REQUEST_CREATE = 'COMMAND_REQUEST_CREATE';
export const COMMAND_SUCCESS_CREATE = 'COMMAND_SUCCESS_CREATE';
export const COMMAND_FAILURE_CREATE = 'COMMAND_FAILURE_CREATE';

export const COMMAND_REQUEST_UPDATE = 'COMMAND_REQUEST_UPDATE';
export const COMMAND_SUCCESS_UPDATE = 'COMMAND_SUCCESS_UPDATE';
export const COMMAND_FAILURE_UPDATE = 'COMMAND_FAILURE_UPDATE';

export const COMMAND_REQUEST_DELETE = 'COMMAND_REQUEST_DELETE';
export const COMMAND_SUCCESS_DELETE = 'COMMAND_SUCCESS_DELETE';
export const COMMAND_FAILURE_DELETE = 'COMMAND_FAILURE_DELETE';

export const COMMAND_REQUEST_SHOW = 'COMMAND_REQUEST_SHOW';
export const COMMAND_SUCCESS_SHOW = 'COMMAND_SUCCESS_SHOW';
export const COMMAND_FAILURE_SHOW = 'COMMAND_FAILURE_SHOW';

export const COMMANDS_REQUEST_SHOW = 'COMMANDS_REQUEST_SHOW';
export const COMMANDS_SUCCESS_SHOW = 'COMMANDS_SUCCESS_SHOW';
export const COMMANDS_FAILURE_SHOW = 'COMMANDS_FAILURE_SHOW';

export const COMMANDS_BY_TYPE_REQUEST = 'COMMANDS_BY_TYPE_REQUEST';
export const COMMANDS_BY_TYPE_SUCCESS = 'COMMANDS_BY_TYPE_SUCCESS';
export const COMMANDS_BY_TYPE_FAILURE = 'COMMANDS_BY_TYPE_FAILURE';

const responseSchema = new schema.Entity('commands', {}, {
  idAttribute: () => 'res',
});

const _createCommand = body => ({
  [CALL_API]: {
    types: [COMMAND_REQUEST_CREATE, COMMAND_SUCCESS_CREATE, COMMAND_FAILURE_CREATE],
    endpoint: '/v1/commands',
    json: true,
    options: {
      method: 'POST',
      headers: new Headers(),
      body
    },
    schema: responseSchema
  }
});

const _updateCommand = body => ({
  [CALL_API]: {
    types: [COMMAND_REQUEST_UPDATE, COMMAND_SUCCESS_UPDATE, COMMAND_FAILURE_UPDATE],
    endpoint: '/v1/commands',
    json: true,
    options: {
      method: 'PUT',
      headers: new Headers(),
      body
    },
    schema: responseSchema
  }
});

const _deleteCommand = command_descriptor => ({
  [CALL_API]: {
    types: [COMMAND_REQUEST_DELETE, COMMAND_SUCCESS_DELETE, COMMAND_FAILURE_DELETE],
    endpoint: `/v1/commands?command_descriptor=${command_descriptor}`,
    json: true,
    options: {
      method: 'DELETE',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

const _fetchCommands = () => ({
  [CALL_API]: {
    types: [COMMANDS_REQUEST_SHOW, COMMANDS_SUCCESS_SHOW, COMMANDS_FAILURE_SHOW],
    endpoint: '/v1/commands',
    json: true,
    options: {
      method: 'GET',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

const _fetchCommand = command_descriptor => ({
  [CALL_API]: {
    types: [COMMAND_REQUEST_SHOW, COMMAND_SUCCESS_SHOW, COMMAND_FAILURE_SHOW],
    endpoint: `/v1/commands?command_descriptor=${command_descriptor}`,
    json: true,
    options: {
      method: 'GET',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

const _fetchCommandsByType = type => ({
  [CALL_API]: {
    types: [COMMANDS_BY_TYPE_REQUEST, COMMANDS_BY_TYPE_SUCCESS, COMMANDS_BY_TYPE_FAILURE],
    endpoint: `/v1/commands/${type}`,
    json: true,
    options: {
      method: 'GET',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

export const getCommandsByType = type => (dispatch, getState) => dispatch(_fetchCommandsByType(type));
export const getCommand = id => (dispatch, getState) => dispatch(_fetchCommand(id));
export const getCommands = () => (dispatch, getState) => dispatch(_fetchCommands());

export const createCommand = cmd => (dispatch, getState) => dispatch(_createCommand(cmd));
export const updateCommand = cmd => (dispatch, getState) => dispatch(_updateCommand(cmd));
export const deleteCommand = id => (dispatch, getState) => dispatch(_deleteCommand(id));
