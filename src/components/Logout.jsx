import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { USER_LOGOUT } from '../actions/auth';

const Logout = (props) => {
  localStorage.removeItem('AUTH_TOKEN');
  // localStorage.removeItem('TOKEN');
  props.logout();
  props.history.push('/login');
  return null;
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({
    type: USER_LOGOUT
  })
});

export default withRouter(connect(null, mapDispatchToProps)(Logout));
