import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import * as actions from '../actions/command';
import Command from '../components/Command';

class CommandContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      descriptor: '',
      command: '',
      cmdParameters: {
        db: '', archive: '', username: '', password: '', host: '', port: '', authenticationDatabase: ''
      }
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
    const cmd_data = {
      descriptor: this.state.descriptor,
      command: this.state.command,
      parameters: {
        db: this.state.cmdParameters.db,
        archive: this.state.cmdParameters.archive,
        username: this.state.cmdParameters.username,
        password: this.state.cmdParameters.password,
        host: this.state.cmdParameters.host,
        port: this.state.cmdParameters.port,
        authenticationDatabase: this.state.cmdParameters.authenticationDatabase
      }
    };
    // console.log(cmd_data);
    this.props.createCommand(cmd_data);
  }
  handleSelect(key, e) {
    this.setState({ command: e.target.innerText });
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
    // delete command -> using descriptor
    e.preventDefault();
    console.log(e);
    this.props.deleteCommand(this.state.descriptor);
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
      handleSelect: this.handleSelect
    };
  }
  render() {
    const props = this._generateProp();
    return (<Command {...props} />);
  }
}

const mapDispatchToProps = {
  getCommands: actions.getCommands,
  getCommand: actions.getCommand,
  getCommandsByType: actions.getCommandsByType,
  createCommand: actions.createCommand,
  updateCommand: actions.updateCommand,
  deleteCommand: actions.deleteCommand
};

const mapStateToProps = state => {
  // console.log(state);
  return ({
    commands: state.getCommands.commands
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommandContainer));
