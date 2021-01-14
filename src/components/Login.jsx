import React from 'react';
import {
  Form, ControlLabel,
  Button, FormGroup, FormControl,
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { errorBar, successBar } from '../_utils/Error';

const Login = (props) => {
  const { error, isPending } = props;
  if (isPending) {
    return <FontAwesome name="spinner" spin />;
  }

  return (
    <div className="Login">
      <Form onSubmit={props.handleSubmit}>
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
          Login
        </Button>
        <Button
          block
          bsSize="large"
          onClick={props.handleClick}
        >
          Register
        </Button>
      </Form>
      {successBar(props)}
      {errorBar(error)}
    </div>
  );
};

Login.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  // users: PropTypes.shape({
  //   isPending: PropTypes.bool
  // }).isRequired
};

export default Login;
