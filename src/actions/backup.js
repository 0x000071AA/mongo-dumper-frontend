/**
 *
 * */
import { schema } from 'normalizr';
import { CALL_API } from '../_utils/api';

export const BACKUP_REQUEST_CREATE = 'BACKUP_REQUEST_CREATE';
export const BACKUP_SUCCESS_CREATE = 'BACKUP_SUCCESS_CREATE';
export const BACKUP_FAILURE_CREATE = 'BACKUP_FAILURE_CREATE';

export const BACKUP_REQUEST_DELETE = 'BACKUP_REQUEST_DELETE';
export const BACKUP_SUCCESS_DELETE = 'BACKUP_SUCCESS_DELETE';
export const BACKUP_FAILURE_DELETE = 'BACKUP_FAILURE_DELETE';

export const BACKUP_JOBS_REQUEST_SHOW = 'BACKUP_JOBS_REQUEST_SHOW';
export const BACKUP_JOBS_SUCCESS_SHOW = 'BACKUP_JOBS_SUCCESS_SHOW';
export const BACKUP_JOBS_FAILURE_SHOW = 'BACKUP_JOBS_FAILURE_SHOW';

export const BACKUPS_DB_REQUEST_SHOW = 'BACKUPS_DB_REQUEST_SHOW';
export const BACKUPS_DB_SUCCESS_SHOW = 'BACKUPS_DB_SUCCESS_SHOW';
export const BACKUPS_DB_FAILURE_SHOW = 'BACKUPS_DB_FAILURE_SHOW';

export const BACKUPS_REQUEST_SHOW = 'BACKUPS_REQUEST_SHOW';
export const BACKUPS_SUCCESS_SHOW = 'BACKUPS_SUCCESS_SHOW';
export const BACKUPS_FAILURE_SHOW = 'BACKUPS_FAILURE_SHOW';

export const BACKUPS_DB_FTP_REQUEST_SHOW = 'BACKUPS_DB_FTP_REQUEST_SHOW';
export const BACKUPS_DB_FTP_SUCCESS_SHOW = 'BACKUPS_DB_FTP_SUCCESS_SHOW';
export const BACKUPS_DB_FTP_FAILURE_SHOW = 'BACKUPS_DB_FTP_FAILURE_SHOW';

export const BACKUP_LOGS_REQUEST_SHOW = 'BACKUP_LOGS_REQUEST_SHOW';
export const BACKUP_LOGS_SUCCESS_SHOW = 'BACKUP_LOGS_SUCCESS_SHOW';
export const BACKUP_LOGS_FAILURE_SHOW = 'BACKUP_LOGS_FAILURE_SHOW';

export const BACKUP_LOGS_DB_REQUEST_SHOW = 'BACKUP_LOGS_DB_REQUEST_SHOW';
export const BACKUP_LOGS_DB_SUCCESS_SHOW = 'BACKUP_LOGS_DB_SUCCESS_SHOW';
export const BACKUP_LOGS_DB_FAILURE_SHOW = 'BACKUP_LOGS_DB_FAILURE_SHOW';

const responseSchema = new schema.Entity('backups', {}, {
  idAttribute: () => 'res',
});

const _fetchBackups = () => ({
  [CALL_API]: {
    types: [BACKUPS_REQUEST_SHOW, BACKUPS_SUCCESS_SHOW, BACKUPS_FAILURE_SHOW],
    endpoint: '/v1/backups',
    json: true,
    options: {
      method: 'GET',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

const _fetchBackupJobs = (backup_jobs = true) => ({
  [CALL_API]: {
    types: [BACKUP_JOBS_REQUEST_SHOW, BACKUP_JOBS_SUCCESS_SHOW, BACKUP_JOBS_FAILURE_SHOW],
    endpoint: `/v1/backups?backup_jobs=${backup_jobs}`,
    json: true,
    options: {
      method: 'GET',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

const _fetchBackupsDb = db => ({
  [CALL_API]: {
    types: [BACKUPS_DB_REQUEST_SHOW, BACKUPS_DB_SUCCESS_SHOW, BACKUPS_DB_FAILURE_SHOW],
    endpoint: `/v1/backups/${db}`,
    json: true,
    options: {
      method: 'GET',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

const _fetchBackupsDbOnFtp = (db, ftp_base_path, ftp_server = {}) => ({
  [CALL_API]: {
    types: [BACKUPS_DB_FTP_REQUEST_SHOW, BACKUPS_DB_FTP_SUCCESS_SHOW, BACKUPS_DB_FTP_FAILURE_SHOW],
    endpoint: `/v1/backups/${db}/ftps?ftp_data=${ftp_server}&&ftp_base_path=${ftp_base_path}`,
    json: true,
    options: {
      method: 'GET',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

const _fetchBackupLogs = () => ({
  [CALL_API]: {
    types: [BACKUP_LOGS_REQUEST_SHOW, BACKUP_LOGS_SUCCESS_SHOW, BACKUP_LOGS_FAILURE_SHOW],
    endpoint: '/v1/backups/logs',
    json: true,
    options: {
      method: 'GET',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

const _fetchBackupsLogsDb = db_descriptor => ({
  [CALL_API]: {
    types: [BACKUP_LOGS_DB_REQUEST_SHOW, BACKUP_LOGS_DB_SUCCESS_SHOW, BACKUP_LOGS_DB_FAILURE_SHOW],
    endpoint: `/v1/backups/logs?db_descriptor=${db_descriptor}`,
    json: true,
    options: {
      method: 'GET',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

const _createBackupJob = body => ({
  [CALL_API]: {
    types: [BACKUP_REQUEST_CREATE, BACKUP_SUCCESS_CREATE, BACKUP_FAILURE_CREATE],
    endpoint: '/v1/backups',
    json: true,
    options: {
      method: 'POST',
      headers: new Headers(),
      body
    },
    schema: responseSchema
  }
});

const _deleteBackupJob = job_descriptor => ({
  [CALL_API]: {
    types: [BACKUP_REQUEST_DELETE, BACKUP_SUCCESS_DELETE, BACKUP_FAILURE_DELETE],
    endpoint: `/v1/backups?job_descriptor=${job_descriptor}`,
    json: true,
    options: {
      method: 'DELETE',
      headers: new Headers(),
    },
    schema: responseSchema
  }
});

export const getBackups = () => (dispatch, getState) => dispatch(_fetchBackups());
export const getBackupJobs = () => (dispatch, getState) => dispatch(_fetchBackupJobs());
export const getBackupsDb = db => (dispatch, getState) => dispatch(_fetchBackupsDb(db));
export const getBackupLogs = () => (dispatch, getState) => dispatch(_fetchBackupLogs());
export const getBackupsLogsDb = db => (dispatch, getState) => dispatch(_fetchBackupsLogsDb(db));

export const deleteBackupJob = jobId => (dispatch, getState) => dispatch(_deleteBackupJob(jobId));

export const getBackupsDbOnFtp = (db, ftpBasePath, ftpServer) =>
  (dispatch, getState) => dispatch(_fetchBackupsDbOnFtp(db, ftpBasePath, ftpServer));

export const createBackupsJob = body => (dispatch, getState) => dispatch(_createBackupJob(body));
