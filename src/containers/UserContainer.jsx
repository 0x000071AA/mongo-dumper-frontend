import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
// import { push } from 'react-router-redux';
import * as actions from '../actions/user';
import User from '../components/User';

class UserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsers();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createUser(this.state.username);
  }
  handleChange(e) {
    this.setState({ username: e.target.value });
  }
  handleClick(e) {
    e.preventDefault();
    this.props.deleteUser(this.state.username);
  }

  _generateProp() {
    return {
      ...this.props,
      ...this.state,
      componentDidMount: this.componentDidMount,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
      handleClick: this.handleClick
    };
  }
  render() {
    const props = this._generateProp();
    return (<User {...props} />);
  }
}

const mapDispatchToProps = {
  getUser: actions.getUser,
  getUsers: actions.getUsers,
  createUser: actions.createUser,
  deleteUser: actions.deleteUser
};
const mapStateToProps = (state) => {
  console.log('state', state);
  return ({
    users: state.Users.getUsers.users,
    userCreated: state.Users.createUser.user,
    userDeleted: state.Users.deleteUser.user,
    isPending: state.Users.getUsers.isPending,
    success: state.Users.getUsers.success,
    error: state.Users.getUsers.error,
    // msgCreated: state.Users.getUsers.message
  });
};

UserContainer.propTypes = {
  createUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserContainer));
