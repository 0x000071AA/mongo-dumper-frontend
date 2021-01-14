import React from 'react';
import { ListGroup, ListGroupItem, FormGroup, FormControl, ControlLabel, Button, ButtonGroup,
  Form, Glyphicon } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { successBar, errorBar } from '../_utils/Error';

const User = (props) => {
  const { error, isPending } = props;
  // if (isPending) {
  //   return <FontAwesome name="spinner" spin />;
  // }
  return (
    <div>
      <ListGroup>
        <ControlLabel>Users</ControlLabel>
        {props.users.map(obj => (
          <ListGroupItem>
            {obj.username}
          </ListGroupItem>
        ))}
      </ListGroup>

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
        <ButtonGroup bsSize="small">
          <Button type="submit"><Glyphicon glyph="glyphicon glyphicon-plus" /></Button>
          {/*<Button onClick={}><Glyphicon glyph="glyphicon glyphicon-pencil" /></Button>*/}
          <Button onClick={props.handleClick}><Glyphicon glyph="glyphicon glyphicon-trash" /></Button>
          {/*{successBar(props, 'test')}*/}
        </ButtonGroup>

        {errorBar(error)}
      </Form>
    </div>
  );
};

User.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired
};

export default User;
