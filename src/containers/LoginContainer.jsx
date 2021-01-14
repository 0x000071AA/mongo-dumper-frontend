import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { getUser } from '../actions/user';
import Login from '../components/Login';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.history.push('/register');
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.getUser(this.state.username);
  }
  handleChange(e) {
    this.setState({ username: e.target.value });
  }
  validateForm() {
    return this.state.username.length > 0;
  }
  _generateProp() {
    return {
      ...this.props,
      ...this.state,
      handleClick: this.handleClick,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit
    };
  }
  render() {
    const props = this._generateProp();
    return (<Login {...props} />);
  }
}

const mapStateToProps = state => ({
  user: state.Users.getUser.user,
  username: state.Users.getUser.user.username,
  error: state.Users.getUser.error,
  isPending: state.Users.getUser.isPending
});

LoginContainer.propTypes = {
  getUser: PropTypes.func.isRequired,
  // user: PropTypes.shape({}).isRequired
};


export default withRouter(connect(mapStateToProps, { getUser: getUser })(LoginContainer));
