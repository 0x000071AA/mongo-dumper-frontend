import React from 'react';
// import { Alert, Col, Form, Row } from 'react-bootstrap';
import {
  Alert, Form,
  Button, FormGroup, FormControl,
  ControlLabel
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { errorBar, successBar } from '../_utils/Error';

const Register = (props) => {
  const { error, isPending } = props;
  if (isPending) {
    return <FontAwesome name="spinner" spin />;
  }

  return (
    <div className="Register">
      <form onSubmit={props.handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
          <ControlLabel>username</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            placeholder="Enter username"
            value={props.username}
            onChange={props.handleChange}
          />
        </FormGroup>
        <Button
          block
          bsSize="large"
          type="submit"
        >
        Register
        </Button>
      </form>
      {successBar(props, 'User registered')}
      {errorBar(error)}
    </div>);
};

Register.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  user: PropTypes.shape({}).isRequired
};

export default Register;
