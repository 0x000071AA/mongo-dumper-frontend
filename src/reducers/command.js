import * as types from '../actions/command';

export const getCommandsByType = (state = { isPending: false, error: {}, commands: [] }, action) => {
  switch (action.type) {
    case types.COMMANDS_BY_TYPE_REQUEST:
      return { ...state, isPending: true, error: {} };
    case types.COMMANDS_BY_TYPE_SUCCESS: {
      const elm = action.response.entities.commands.res;
      return { ...state, isPending: false, success: true, commands: elm.data.slice() };
    }
    case types.COMMANDS_BY_TYPE_FAILURE:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};
export const getCommand = (state = { isPending: false, error: {}, command: {} }, action) => {
  switch (action.type) {
    case types.COMMAND_REQUEST_SHOW:
      return { ...state, isPending: true, error: {} };
    case types.COMMAND_SUCCESS_SHOW: {
      const elm = action.response.entities.commands.res;
      const cmd = elm.data[0];
      return { ...state, isPending: false, success: true, command: { ...cmd } };
    }
    case types.COMMAND_FAILURE_SHOW:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};
export const getCommands = (state = { isPending: false, error: {}, commands: [] }, action) => {
  switch (action.type) {
    case types.COMMANDS_REQUEST_SHOW:
      return { ...state, isPending: true, error: {} };
    case types.COMMANDS_SUCCESS_SHOW: {
      const elm = action.response.entities.commands.res;
      return { ...state, isPending: false, success: true, commands: elm.data.slice() };
    }
    case types.COMMANDS_FAILURE_SHOW:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};
export const createCommand = (state = { isPending: false, error: {}, command: {} }, action) => {
  switch (action.type) {
    case types.COMMAND_REQUEST_CREATE:
      return { ...state, isPending: true, error: {} };
    case types.COMMAND_SUCCESS_CREATE: {
      const elm = action.response.entities.commands.res;
      const cmd = elm.data[0];
      return { ...state, isPending: false, success: true, message: elm.message, command: { ...cmd } };
    }
    case types.COMMAND_FAILURE_CREATE:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};
export const updateCommand = (state = { isPending: false, error: {}, command: {} }, action) => {
  switch (action.type) {
    case types.COMMAND_REQUEST_UPDATE:
      return { ...state, isPending: true, error: {} };
    case types.COMMAND_SUCCESS_UPDATE: {
      const elm = action.response.entities.commands.res;
      const cmd = elm.data[0];
      return { ...state, isPending: false, success: true, message: elm.message, command: { ...cmd } };
    }
    case types.COMMAND_FAILURE_UPDATE:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};
export const deleteCommand = (state = { isPending: false, error: {}, command: {} }, action) => {
  switch (action.type) {
    case types.COMMAND_REQUEST_DELETE:
      return { ...state, isPending: true, error: {} };
    case types.COMMAND_SUCCESS_DELETE: {
      const elm = action.response.entities.commands.res;
      const cmd = elm.data[0];
      return { ...state, isPending: false, success: true, message: elm.message, command: { ...cmd } };
    }
    case types.COMMAND_FAILURE_DELETE:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};