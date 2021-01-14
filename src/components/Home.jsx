import React from 'react';
import { Alert, DropdownButton, MenuItem, Table, Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Home = (props) => {
  const { databases: { error } } = props;
  // if (error && error.hasError) {
  //   return (
  //     <Alert bsStyle="danger">
  //       <strong>Error</strong>
  //     </Alert>
  //   );
  // }
  return (
    <div>
      {/* <DropdownButton */}
      {/* title={props.dbSelected ? props.dbSelected : 'databases'} */}
      {/* id="dropdown-dbs" */}
      {/* onSelect={props.onSelect} */}
      {/* > */}
      {/* {props.databases.map((item, i) => ( */}
      {/* <MenuItem eventKey={i}>{item.name}</MenuItem> */}
      {/* ))} */}
      {/* </DropdownButton> */}

      {/* <span onSelect={props.onSelect}> */}
      {console.log(props)}
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">Databases</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Table responsive>
            <thead>
              <tr>
                {props.dbInfo.map(el => (<th>{el}</th>))}
              </tr>
            </thead>
            <tbody>
              {props.databases.map(el => (<tr>{props.dbInfo.map(k => (<td>{ el[k] }</td>))}</tr>))}
            </tbody>
          </Table>
        </Panel.Body>
      </Panel>
      {/* </span> */}
    </div>
  );
};

Home.propTypes = {
  // onSelect: PropTypes.func.isRequired,
  databases: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Home;

