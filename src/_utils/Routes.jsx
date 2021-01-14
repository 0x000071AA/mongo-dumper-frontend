import React from 'react';
import { Route, Switch } from 'react-router';
// import Error from './Error';
import LoginContainer from '../containers/LoginContainer';
import HomeContainer from '../containers/HomeContainer';
import RegisterContainer from '../containers/RegisterContainer';
import UserContainer from '../containers/UserContainer';
import ScheduleContainer from '../containers/ScheduleContainer';
import RecoveryContainer from '../containers/RecoveryContainer';
import CommandContainer from '../containers/CommandContainer';
import BackupContainer from '../containers/BackupContainer';
import Logout from '../components/Logout';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/register" component={RegisterContainer} />
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/users" component={UserContainer} />
      <Route exact path="/schedules" component={ScheduleContainer} />
      <Route exact path="/commands" component={CommandContainer} />
      <Route exact path="/recoveries" component={RecoveryContainer} />
      <Route exact path="/backups" component={BackupContainer} />
      <Route exact path="/logout" component={Logout} />
    </Switch>
  </div>
);

export default Routes;
