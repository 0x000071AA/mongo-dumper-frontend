import React from 'react';
import {
  Form, ButtonGroup, Glyphicon,
  Button, FormGroup, FormControl,
  ControlLabel, ListGroupItem, Checkbox, ListGroup,
  Dropdown, MenuItem, Modal,
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { errorBar, successBar } from '../_utils/Error';


const Schedule = (props) => {
  const { error, isPending } = props;
  // if (isPending) {
  //   return <FontAwesome name="spinner" spin />;
  // }
  return (
    <div>
      <ListGroup>
        <ControlLabel>Schedules</ControlLabel>
        {props.schedules.map(obj => (
          <ListGroupItem>
            {obj.descriptor}
          </ListGroupItem>
        ))}
      </ListGroup>

      <Form onSubmit={props.handleSubmit}>
        <FormGroup bsSize="large">
          <ControlLabel>descriptor</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            placeholder="Enter descriptor"
            value={props.descriptor}
            name="descriptor"
            onChange={props.handleChange}
          />
          <ControlLabel>Label</ControlLabel>
          <FormControl
            type="text"
            placeholder="Enter label"
            value={props.label}
            name="label"
            onChange={props.handleChange}
          />
          <ControlLabel>Command</ControlLabel>
          <br />
          <Dropdown id="commands">
            <Dropdown.Toggle>{props.command_id}</Dropdown.Toggle>
            <Dropdown.Menu>
              {props.commands.map(item => (
                <MenuItem onSelect={props.handleSelect}>{item.descriptor}</MenuItem>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <br />
          <ControlLabel>Action</ControlLabel>
          <br />
          <Dropdown id="actions">
            <Dropdown.Toggle>{props.options.action}</Dropdown.Toggle>
            <Dropdown.Menu>
              {['backup', 'recovery'].map(item => (
                <MenuItem id={item} onSelect={props.handleActionSelect}>{item}</MenuItem>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </FormGroup>
        <FormGroup bsSize="large">
          <ControlLabel>Options</ControlLabel>
          <FormControl
            type="text"
            placeholder="cron pattern"
            value={props.options.cronTime}
            name="options.cronTime"
            onChange={props.handleChange}
          />
          <Dropdown id="timeZone">
            <Dropdown.Toggle>{props.timeZone}</Dropdown.Toggle>
            <Dropdown.Menu>
              {[props.timeZone].map(item => (
                <MenuItem onSelect={props.handleTimezoneSelect}>{item}</MenuItem>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </FormGroup>
        <Checkbox
          checked={props.useFtp === 'true'}
          value={props.useFtp === 'true' ? 'false' : 'true'}
          name="useFtp"
          onChange={props.handleChange}
        >
          configure ftp server
        </Checkbox>
        {props.useFtp === 'true' ? (<FormGroup bsSize="large">
          <ControlLabel>Ftp Server</ControlLabel>
          <FormControl
            type="text"
            placeholder="Enter host"
            value={props.ftp.host}
            name="ftp.host"
            onChange={props.handleChange}
          />
          <FormControl
            type="text"
            placeholder="Enter port"
            value={props.ftp.port}
            name="ftp.port"
            onChange={props.handleChange}
          />
          <FormControl
            type="text"
            placeholder="Enter ftp user"
            value={props.ftp.user}
            name="ftp.user"
            onChange={props.handleChange}
          />
          <FormControl
            type="password"
            placeholder="Enter password"
            value={props.ftp.password}
            name="ftp.password"
            onChange={props.handleChange}
          />
          <FormControl
            type="text"
            placeholder="Enter base path for dumps"
            value={props.ftp.basePath}
            name="ftp.basePath"
            onChange={props.handleChange}
          />
        </FormGroup>) : null}
      </Form>

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
    </div>);
};
Schedule.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleShow: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleActionSelect: PropTypes.func.isRequired,
  handleTimezoneSelect: PropTypes.func.isRequired,
};

export default Schedule;
