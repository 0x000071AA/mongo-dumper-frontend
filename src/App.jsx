import React from 'react';
import { NavLink } from 'react-router-dom';
import { Router } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Col, Glyphicon, Grid } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import Routes from './_utils/Routes';
import Navigation from './_configs/service.config';

import './App.css';

const App = ({ history }) => (
  <Router history={history}>
    <div className="App-main">
      <Navbar>
        <Nav bsStyle="pills" navbar pullLeft>
          <LinkContainer
            to="/"
            className="normal"
            activeClassName="active"
            exact
          >
            <NavItem>Home</NavItem>
          </LinkContainer>
        </Nav>
        <Nav bsStyle="pills" navbar pullRight>
          <NavDropdown title={<Glyphicon glyph="glyphicon glyphicon-user" />} id="user-dropdown">
            <MenuItem divider />
            <NavItem href="/logout"><Glyphicon glyph="glyphicon glyphicon-log-out" />{' '}Logout</NavItem>
          </NavDropdown>
        </Nav>
      </Navbar>
      <Grid fluid>
        <Col md={2} sm={3} className="portlet-sidebar">
          <ul className="portlet-nav">
            {Navigation.navigation_elements.map(obj => (
              <li key={obj.display_name}>
                <NavLink to={obj.path} activeClassName="active">
                  {obj.display_name}
                </NavLink>
              </li>
            ))}
          </ul>
        </Col>
        <Col xs={4} md={8}>
          <div className="content">
            <Routes />
          </div>
        </Col>
      </Grid>
    </div>
  </Router>
);

App.propTypes = {
  history: PropTypes.shape({}).isRequired
};

export default App;

