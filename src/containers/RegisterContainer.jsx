import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
// import { push } from 'react-router-redux';
import { createUser } from '../actions/user';
import Register from '../components/Register';

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (e) {
    e.preventDefault();
    this.props.createUser(this.state.username);
  }
  handleChange(e) {
    this.setState({ username: e.target.value });
  }
  _generateProp() {
    return {
      ...this.props,
      ...this.state,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit
    };
  }
  render() {
    const props = this._generateProp();
    return (<Register {...props} />);
  }
}

const mapStateToProps = state => ({
  user: state.Users.createUser.user,
  error: state.Users.createUser.error,
  success: state.Users.createUser.success || false,
  isPending: state.Users.createUser.isPending
});

const mapDispatchToProps = {
  createUser: createUser
};

RegisterContainer.propTypes = {
  createUser: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterContainer));
