// Core
import React from 'react';
import {
  Router, Route, Switch, Redirect,
} from 'react-router-dom';

// Container
import Users from '../containers/Users';
import UserInfo from '../containers/UserInfo';

// Utils
import history from '../utils/history';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/users" component={Users} />
      <Route exact path="/user/:userId" component={UserInfo} />
      <Redirect to="/users" />
    </Switch>
  </Router>
);

export default App;
