import React from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const successBar = (props, msg) => {
  const { success } = props;
  if (!success) {
    return null;
  }
  return (
    <Alert bsStyle="success">
      {msg}
    </Alert>
  );
};

export const errorBar = (err) => {
  if (err === undefined || !err.hasError) {
    return null;
  }
  return (
    <Alert bsStyle="danger">
      <strong>Error</strong> {err.error}
    </Alert>
  );
};


successBar.propTypes = {
  success: PropTypes.bool.isRequired,
};

// export default Error;
