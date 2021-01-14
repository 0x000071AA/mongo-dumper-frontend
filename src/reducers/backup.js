import * as types from '../actions/backup';

export const getBackups = (state = { isPending: false, error: {}, backupFiles: [] }, action) => {
  switch (action.type) {
    case types.BACKUPS_REQUEST_SHOW:
      return { ...state, isPending: true, error: {} };
    case types.BACKUPS_SUCCESS_SHOW: {
      const elm = action.response.entities.backups.res;
      return { ...state, isPending: false, success: true, backupFiles: elm.data.slice() };
    }
    case types.BACKUPS_FAILURE_SHOW:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};

export const getBackupJobs = (state = { isPending: false, error: {}, backupJobs: [] }, action) => {
  switch (action.type) {
    case types.BACKUP_JOBS_REQUEST_SHOW:
      return { ...state, isPending: true, error: {} };
    case types.BACKUP_JOBS_SUCCESS_SHOW: {
      const elm = action.response.entities.backups.res;
      return { ...state, isPending: false, success: true, backupJobs: elm.data.slice() };
    }
    case types.BACKUP_JOBS_FAILURE_SHOW:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};

export const getBackupsDb = (state = { isPending: false, error: {}, backupsDb: [] }, action) => {
  switch (action.type) {
    case types.BACKUPS_DB_REQUEST_SHOW:
      return { ...state, isPending: true, error: {} };
    case types.BACKUPS_DB_SUCCESS_SHOW: {
      const elm = action.response.entities.backups.res;
      return { ...state, isPending: false, success: true, backupsDb: elm.data.slice() };
    }
    case types.BACKUPS_DB_FAILURE_SHOW:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};

export const getBackupLogs = (state = { isPending: false, error: {}, backupLogs: [] }, action) => {
  switch (action.type) {
    case types.BACKUP_LOGS_REQUEST_SHOW:
      return { ...state, isPending: true, error: {} };
    case types.BACKUP_LOGS_SUCCESS_SHOW: {
      const elm = action.response.entities.backups.res;
      return { ...state, isPending: false, success: true, backupLogs: elm.data.slice() };
    }
    case types.BACKUP_LOGS_FAILURE_SHOW:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};

export const getBackupsLogsDb = (state = { isPending: false, error: {}, backupLogsDb: [] }, action) => {
  switch (action.type) {
    case types.BACKUP_LOGS_DB_REQUEST_SHOW:
      return { ...state, isPending: true, error: {} };
    case types.BACKUP_LOGS_DB_SUCCESS_SHOW: {
      const elm = action.response.entities.backups.res;
      return { ...state, isPending: false, success: true, backupLogsDb: elm.data.slice() };
    }
    case types.BACKUP_LOGS_DB_FAILURE_SHOW:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};

export const deleteBackupJob = (state = { isPending: false, error: {}, backupJob: {} }, action) => {
  switch (action.type) {
    case types.BACKUP_REQUEST_DELETE:
      return { ...state, isPending: true, error: {} };
    case types.BACKUP_SUCCESS_DELETE: {
      const elm = action.response.entities.backups.res;
      const backup = elm.data[0];
      return { ...state, isPending: false, success: true, message: elm.message, backupJob: { ...backup } };
    }
    case types.BACKUP_FAILURE_DELETE:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};

export const getBackupsDbOnFtp = (state = { isPending: false, error: {}, backupsDbOnFtp: [] }, action) => {
  switch (action.type) {
    case types.BACKUPS_DB_FTP_REQUEST_SHOW:
      return { ...state, isPending: true, error: {} };
    case types.BACKUPS_DB_FTP_SUCCESS_SHOW: {
      const elm = action.response.entities.backups.res;
      return { ...state, isPending: false, success: true, backupsDbOnFtp: elm.data.slice() };
    }
    case types.BACKUPS_DB_FTP_FAILURE_SHOW:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};

export const createBackupsJob = (state = { isPending: false, error: {}, backupJob: {} }, action) => {
  switch (action.type) {
    case types.BACKUP_REQUEST_CREATE:
      return { ...state, isPending: true, error: {} };
    case types.BACKUP_SUCCESS_CREATE: {
      const elm = action.response.entities.backups.res;
      const backup = elm.data[0];
      return { ...state, isPending: false, success: true, message: elm.message, backupJob: { ...backup } };
    }
    case types.BACKUP_FAILURE_CREATE:
      return { ...state, isPending: false, success: false, error: { hasError: true, error: action.error } };
    default:
      return state;
  }
};
