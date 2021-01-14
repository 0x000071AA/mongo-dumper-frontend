import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
// import { push } from 'react-router-redux';
import * as actions from '../actions/backup';
import { getDatabases } from '../actions/database';
import { getSchedules, getSchedule } from '../actions/schedule';
import Backups from '../components/Backups';

class BackupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      descriptor: '',
      scheduler: '',
      database: ''
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    if (this.props.backupFiles.length === 0) {
      // console.log(this.props.getBackups());
      this.props.getBackups();
    }
    if (this.props.backupJobs.length === 0) {
      this.props.getBackupJobs();
    }
    if (this.props.backupLogs.length === 0) {
      this.props.getBackupLogs();
    }
  }

  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBackupsJob({
      descriptor: this.state.descriptor,
      scheduler: this.state.scheduler,
      database: this.state.database
    });
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  //
  handleSelect(key, e) {
    this.setState({ command: e.target.innerText });
  }
  handleClick(e) {
    e.preventDefault();
    this.props.deleteBackupJob(this.state.descriptor);
  }
  _generateProp() {
    return {
      ...this.props,
      ...this.state,
      handleShow: this.handleShow,
      handleClose: this.handleClose,
      componentDidMount: this.componentDidMount,
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange,
      handleClick: this.handleClick,
      handleSelect: this.handleSelect
    };
  }
  render() {
    const props = this._generateProp();
    return (<Backups {...props} />);
  }
}

const mapDispatchToProps = {
  getBackupJobs: actions.getBackupJobs,
  getBackupLogs: actions.getBackupLogs,
  getBackups: actions.getBackups,
  getBackupsDb: actions.getBackupsDb,
  getBackupsDbOnFtp: actions.getBackupsDbOnFtp,
  getBackupsLogsDb: actions.getBackupsLogsDb,
  createBackupsJob: actions.createBackupsJob,
  deleteBackupJob: actions.deleteBackupJob,
  getDatabases: getDatabases,
  getSchedule: getSchedule,
  getSchedules: getSchedules
};

const mapStateToProps = state => ({
  backupJobs: state.getBackupJobs.backupJobs,
  backupLogs: state.getBackupLogs.backupLogs,
  backupFiles: state.getBackups.backupFiles,
  deletedJob: state.deleteBackupJob.backupJob,
  createdJob: state.createBackupsJob.backupJob,
  schedulers: state.getSchedules.schedules,
  databases: state.database.dbs
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BackupContainer));
