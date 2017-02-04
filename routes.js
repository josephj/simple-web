import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Layout from './components/Layout';
import Home from './components/Home';
import Welcome from './components/Welcome';
import NotFound from './components/NotFound';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Welcome}/>
    <Route path="home" component={Home}/>
    <Route path="*" component={NotFound} status={404}/>
  </Route>
);
