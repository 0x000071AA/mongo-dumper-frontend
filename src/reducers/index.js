/**
 * Combine all reducers
 * */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';

import Users from './user';

import {
  createSchedule, getSchedulesByLabel,
  getSchedule, getSchedules, deleteSchedule,
  updateSchedule
} from './schedule';
import {
  createCommand, updateCommand,
  getCommandsByType, getCommand,
  getCommands, deleteCommand
} from './command';
import {
  createBackupsJob, deleteBackupJob,
  getBackupsLogsDb, getBackupsDbOnFtp,
  getBackupsDb, getBackups, getBackupLogs,
  getBackupJobs
} from './backup';
import { createRecovery, getRecoveryLogs, getRecoveryLogsDB } from './recovery';
import database from './database';
import { USER_LOGOUT } from '../actions/auth';

const appReducer = combineReducers({
  auth,
  database,
  Users,
  createSchedule,
  getSchedulesByLabel,
  getSchedule,
  getSchedules,
  deleteSchedule,
  updateSchedule,
  createBackupsJob,
  deleteBackupJob,
  getBackupsLogsDb,
  getBackupsDbOnFtp,
  getBackupsDb,
  getBackups,
  getBackupLogs,
  getBackupJobs,
  createRecovery,
  getRecoveryLogs,
  getRecoveryLogsDB,
  createCommand,
  updateCommand,
  getCommandsByType,
  getCommand,
  getCommands,
  deleteCommand,
  routing: routerReducer
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    // const { router } = state;
    // state = { router };
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
