import React from 'react';
import {
  ListGroup, ControlLabel, ListGroupItem, ButtonGroup,
  Button, Glyphicon, FormControl, FormGroup, Dropdown, MenuItem, Modal, Form
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { successBar, errorBar } from '../_utils/Error';

const Backups = (props) => {
  const { error, isPending } = props;
  if (isPending) {
    return <FontAwesome name="spinner" spin />;
  }
  return (
    <div>
      <ListGroup>
        <ControlLabel>Backup Archives</ControlLabel>
        {/*{console.log(props.backupFiles)}*/}
        {props.backupFiles.map(obj => (
          <ListGroupItem>
            {JSON.stringify(obj)}
          </ListGroupItem>
        ))}
      </ListGroup>
      <ListGroup>
        <ControlLabel>Backup Jobs</ControlLabel>
        {props.backupJobs.map(obj => (
          <ListGroupItem>
            {JSON.stringify(obj)}
          </ListGroupItem>
        ))}
      </ListGroup>
      <FormGroup>
        <ControlLabel>Descriptor</ControlLabel>
        <FormControl
          autoFocus
          type="text"
          placeholder="Enter descriptor"
          value={props.descriptor}
          name="descriptor"
          onChange={props.handleChange}
        />
        <ControlLabel>Database</ControlLabel>
        <br />
        <Dropdown id="databases">
          <Dropdown.Toggle>{props.database}</Dropdown.Toggle>
          <Dropdown.Menu>
            {props.databases.map(item => (
              <MenuItem onSelect={props.handleSelect}>{item.name}</MenuItem>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <br />
        <ControlLabel>Scheduler</ControlLabel>
        <br />
        <Dropdown id="schedules">
          <Dropdown.Toggle>{props.scheduler}</Dropdown.Toggle>
          <Dropdown.Menu>
            {props.schedulers.map(item => (
              <MenuItem onSelect={props.handleSelect}>{item}</MenuItem>
            ))}
          </Dropdown.Menu>
        </Dropdown>
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
      <ListGroup>
        <ControlLabel>Backup Logs</ControlLabel>
        {props.backupLogs.map(obj => (
          <ListGroupItem>
            {JSON.stringify(obj)}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

Backups.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  // handleSubmit: PropTypes.func.isRequired,
  handleShow: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default Backups;
