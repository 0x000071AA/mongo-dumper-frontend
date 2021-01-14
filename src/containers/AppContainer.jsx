import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { getUserPermissions } from '../actions/auth';

import App from '../App';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
    const token = localStorage.getItem('AUTH_TOKEN');
    if (!token || token === '') {
      this.props.history.push('/login');
      return null;
    }
    this.props.getUserPermissions(token);
  }
  _generateProp() {
    return {
      ...this.props,
      ...this.state,
      componentWillMount: this.componentWillMount
    };
  }
  render() {
    const props = this._generateProp();
    console.log(props);
    return (<App {...props} />);
  }
}

AppContainer.propTypes = {
  getUserPermissions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  getUserPermissions: getUserPermissions
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer));

