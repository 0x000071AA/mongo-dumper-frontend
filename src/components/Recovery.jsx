import React from 'react';
import { ListGroup, ControlLabel, ListGroupItem,
  Form, FormControl, Button, FormGroup, Checkbox,
  Dropdown, MenuItem
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { successBar, errorBar } from '../_utils/Error';

const Recovery = (props) => {
  const { error, isPending } = props;
  // if (isPending) {
  //   return <FontAwesome name="spinner" spin />;
  // }
  return (
    <div>
      <ListGroup>
        <ControlLabel>Recovery Logs</ControlLabel>
        {props.recoveryLogs.map(obj => (
          <ListGroupItem>
            {JSON.stringify(obj)}
          </ListGroupItem>
        ))}
      </ListGroup>
      <Form onSubmit={props.handleSubmit}>
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
        <ControlLabel>Recovery Command</ControlLabel>
        <br />
        <Dropdown id="commands">
          <Dropdown.Toggle>{props.recovery_command}</Dropdown.Toggle>
          <Dropdown.Menu>
            {props.commands.map(obj => (
              <MenuItem onSelect={props.handleSelect}>{obj.descriptor}</MenuItem>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <br />
        <ControlLabel>Local Archives</ControlLabel>
        <br />
        <Dropdown id="archives">
          <Dropdown.Toggle>{props.archive}</Dropdown.Toggle>
          <Dropdown.Menu>
            {props.backups.map(item => (
              <MenuItem onSelect={props.handleSelect}>{item}</MenuItem>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Checkbox
          checked={props.showFtp === 'true'}
          value={props.showFtp === 'true' ? 'false' : 'true'}
          name="showFtp"
          onChange={props.handleChange}
        >
          configure ftp server
        </Checkbox>
        {props.showFtp === 'true' ? (<FormGroup bsSize="large">
          <ControlLabel>Ftp Archive</ControlLabel>
          <FormControl
            type="text"
            placeholder="Ftp archive"
            value={''}
            name=""
            onChange={props.handleChange}
          />

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
        <Button type="submit">start</Button>
        {successBar(props, 'Recovery successful')}
        {errorBar(error)}
      </Form>
    </div>
  );
};

Recovery.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  recoveryLogs: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Recovery;
