import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Schedule from '../components/Schedule';
import { getCommands } from '../actions/command';
import * as actions from '../actions/schedule';

class ScheduleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      descriptor: '',
      label: '',
      command_id: '',
      useFtp: false,
      options: {
        action: '',
        cronTime: ''
      },
      timeZone: 'Europe/Berlin',
      ftp: {
        host: '', user: '', password: '', port: 21, basePath: '/'
      }
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleActionSelect = this.handleActionSelect.bind(this);
    this.handleTimezoneSelect = this.handleTimezoneSelect.bind(this);
  }
  componentDidMount() {
    if (this.props.schedules.length === 0) {
      this.props.getSchedules();
    }
    if (this.props.commands.length === 0) {
      this.props.getCommands();
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
    const body = {
      descriptor: this.state.descriptor,
      label: this.state.label,
      command_id: this.state.command_id,
      options: this.state.options,
      use_ftp: this.state.useFtp,
      ftp: {
        host: this.state.ftp.host,
        user: this.state.ftp.user,
        password: this.state.ftp.password,
        port: this.state.ftp.port,
        basePath: this.state.ftp.basePath
      }
    };
    body.options.timeZone = this.state.timeZone;
    this.props.createSchedule(body);
  }
  handleActionSelect(key, e) {
    this.setState({ options: { action: e.target.innerText } });
  }
  handleTimezoneSelect(key, e) {
    this.setState({ timeZone: e.target.innerText });
  }
  handleSelect(key, e) {
    this.setState({ command_id: e.target.innerText });
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
  handleClick(e) {
    e.preventDefault();
    this.props.deleteSchedule(this.state.descriptor);
  }
  _generateProp() {
    return {
      ...this.props,
      ...this.state,
      handleShow: this.handleShow,
      handleClose: this.handleClose,
      componentDidMount: this.componentDidMount,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
      handleClick: this.handleClick,
      handleSelect: this.handleSelect,
      handleTimezoneSelect: this.handleTimezoneSelect,
      handleActionSelect: this.handleActionSelect
    };
  }
  render() {
    const props = this._generateProp();
    return (<Schedule {...props} />);
  }
}

const mapDispatchToProps = {
  createSchedule: actions.createSchedule,
  updateSchedule: actions.updateSchedule,
  deleteSchedule: actions.deleteSchedule,
  getSchedules: actions.getSchedules,
  getSchedule: actions.getSchedule,
  getSchedulesByLabel: actions.getSchedulesByLabel,
  getCommands: getCommands
};
const mapStateToProps = state => ({
  schedules: state.getSchedules.schedules,
  commands: state.getCommands.commands
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer));
