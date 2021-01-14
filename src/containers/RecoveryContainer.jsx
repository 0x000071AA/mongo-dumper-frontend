import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Recovery from '../components/Recovery';
import { getDatabases } from '../actions/database';
import { getCommandsByType } from '../actions/command';
import { getBackups, getBackupsDbOnFtp } from '../actions/backup';
import * as actions from '../actions/recovery';


class RecoveryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFtp: false,
      database: '',
      recovery_command: '',
      archive: '',
      // ftp: { host: '', user: '', password: '', port: 21, basePath: '/' }
      ftp: {}
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    if (this.props.recoveryLogs.length === 0) {
      this.props.getRecoveryLogs();
    }
    if (this.props.databases.length === 0) {
      this.props.getDatabases();
    }
    if (this.props.commands.length === 0) {
      this.props.getCommandsByType('mongorestore');
    }
    if (this.props.backups.length === 0) {
      this.props.getBackups();
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const body = {
      database: this.state.database,
      recovery_command: this.state.recovery_command,
      archive: this.state.archive,
      ftp: this.state.ftp
    };
    this.props.createRecovery(body);
  }
  handleChange(e) {
    const { name, value } = e.target;
    if (name.indexOf('.') > -1) {
      const [id, attr] = name.split('.');
      this.setState({ [id]: { ...this.state[id], [attr]: value } });
      return null;
    }
    this.setState({ [name]: value });
  }
  //
  handleSelect(key, e) {
    this.setState({ command: e.target.innerText });
  }
  // handleClick(e) {
  //   e.preventDefault();
  //
  // }
  _generateProp() {
    return {
      ...this.props,
      ...this.state,
      componentDidMount: this.componentDidMount,
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange,
      handleClick: this.handleClick,
      handleSelect: this.handleSelect
    };
  }
  render() {
    const props = this._generateProp();
    return (<Recovery {...props} />);
  }
}

const mapDispatchToProps = {
  getRecoveryLogs: actions.getRecoveryLogs,
  getRecoveryLogsDB: actions.getRecoveryLogsDB,
  createRecovery: actions.createRecovery,
  getDatabases: getDatabases,
  getCommandsByType: getCommandsByType,
  getBackups: getBackups,
  getBackupsDbOnFtp: getBackupsDbOnFtp
};

const mapStateToProps = state => ({
  recoveryLogs: state.getRecoveryLogs.recoveryLogs,
  recoveryLogsDB: state.getRecoveryLogsDB.recoveryLogsDB,
  recovery: state.createRecovery.recovery,
  databases: state.database.dbs,
  commands: state.getCommandsByType.commands,
  backups: state.getBackups.backupFiles,
  backupsFtp: state.getBackupsDbOnFtp
  // isPending: state.getUsers.isPending,
  // success: state.getUsers.success,
  // error: state.getUsers.error
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecoveryContainer));
