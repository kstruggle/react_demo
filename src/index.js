import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter as Router,Route,Switch} from 'react-router-dom';

import Home from './containers/Home/index';
import Lesson from './containers/Lesson/index';
import Profile from './containers/Profile/index';
import App from './containers/App';
import  './common/index.less';


ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path={'/'} component={Home}></Route>
        <Route path={'/lesson'} component={Lesson}></Route>
        <Route path={'/profile'} component={Profile}></Route>
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);
