/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { getDatabases } from '../actions/database';
import Home from '../components/Home';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbInfo: ['name', 'sizeOnDisk', 'empty']
    };
    // this.onSelect = this.onSelect.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    const token = localStorage.getItem('AUTH_TOKEN');
    if (!token || token === '') {
      this.props.history.push('/login');
      return null;
    }

    if (this.props.databases.length === 0) {
      this.props.getDatabases();
    }
  }
  // onSelect(evtKey, e) {
  //   const selected = e.target.innerText;
  //   const tmp = this.props.databases.find(o => o.name === e.target.innerText);
  //   this.setState({ dbInfo: tmp, dbSelected: selected });
  // }

  _generateProp() {
    return {
      ...this.props,
      ...this.state,
      componentDidMount: this.componentDidMount,
      // onSelect: this.onSelect
    };
  }
  render() {
    const props = this._generateProp();
    return (<Home {...props} />);
  }
}

const mapStateToProps = state => ({ databases: state.database.dbs });

export default withRouter(connect(mapStateToProps, { getDatabases: getDatabases })(HomeContainer));
