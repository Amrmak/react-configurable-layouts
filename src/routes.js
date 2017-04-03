import React from 'react';
import { Router, Route } from 'react-router';

import Admin from './components/Admin';
import LayoutContainer from './components/LayoutContainer';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={LayoutContainer} />
    <Route path="/admin" component={Admin} />
  </Router>
);

export default Routes;