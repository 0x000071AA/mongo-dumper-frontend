import React from 'react';
import { ListGroup, ListGroupItem, FormGroup, FormControl, ControlLabel, Button, ButtonGroup,
  Form, Glyphicon, Dropdown, MenuItem, Modal
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { errorBar, successBar } from '../_utils/Error';

const Command = (props) => {
  const { error, isPending } = props;
  if (isPending) {
    return <FontAwesome name="spinner" spin />;
  }
  return (
    <div>
      <ListGroup>
        <ControlLabel>Commands</ControlLabel>
        {props.commands.map(obj => (
          <ListGroupItem>
            {obj.descriptor}
          </ListGroupItem>
        ))}
      </ListGroup>

      <Form onSubmit={props.handleSubmit}>
        <ControlLabel>descriptor</ControlLabel>
        <FormControl
          autoFocus
          type="text"
          placeholder="Enter descriptor"
          value={props.descriptor}
          name="descriptor"
          onChange={props.handleChange}
        />
        <ControlLabel>Command</ControlLabel>
        <br />
        <Dropdown id="commands">
          <Dropdown.Toggle>{props.command}</Dropdown.Toggle>
          <Dropdown.Menu>
            {['mongodump', 'mongorestore', 'delete'].map((item, i) => (
              <MenuItem onSelect={props.handleSelect}>{item}</MenuItem>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <br />
        <ControlLabel>parameters</ControlLabel>
        <FormGroup bsSize="large">
          <FormControl
            autoFocus
            type="text"
            placeholder="Enter database"
            value={props.cmdParameters.db}
            name="cmdParameters.db"
            onChange={props.handleChange}
          />
          <FormControl
            autoFocus
            type="text"
            placeholder="Enter archive name"
            value={props.cmdParameters.archive}
            name="cmdParameters.archive"
            onChange={props.handleChange}
          />
          <FormControl
            autoFocus
            type="text"
            placeholder="Enter username"
            value={props.cmdParameters.username}
            name="cmdParameters.username"
            onChange={props.handleChange}
          />
          <FormControl
            autoFocus
            type="password"
            placeholder="Enter password"
            value={props.cmdParameters.password}
            name="cmdParameters.password"
            onChange={props.handleChange}
          />
          <FormControl
            autoFocus
            type="text"
            placeholder="Enter host"
            name="cmdParameters.host"
            value={props.cmdParameters.host}
            onChange={props.handleChange}
          />
          <FormControl
            autoFocus
            type="text"
            placeholder="Enter port"
            name="cmdParameters.port"
            value={props.cmdParameters.port}
            onChange={props.handleChange}
          />
          <FormControl
            autoFocus
            type="text"
            placeholder="Enter authenticationDatabase"
            name="cmdParameters.authenticationDatabase"
            value={props.cmdParameters.authenticationDatabase}
            onChange={props.handleChange}
          />
        </FormGroup>

        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>One fine body...</Modal.Body>

          <Modal.Footer>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>

        <ButtonGroup bsSize="small">
          <Button type="submit"><Glyphicon glyph="glyphicon glyphicon-plus" /></Button>
          <Button onClick={props.handleShow}><Glyphicon glyph="glyphicon glyphicon-pencil" /></Button>
          <Button onClick={props.handleClick}><Glyphicon glyph="glyphicon glyphicon-trash" /></Button>
        </ButtonGroup>
        {errorBar(error)}
      </Form>
    </div>
  );
};

Command.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleShow: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default Command;
