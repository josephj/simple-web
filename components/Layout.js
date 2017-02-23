import React from 'react';
import {Route, Match} from 'react-router';
import Welcome from './Welcome';
import Home from './Home';

const Layout = (props) => {
  return (
      <div>
        <h1>Universal Webpack Boilerplate</h1>
        <Match exactly={true} pattern="/" component={Welcome}/>
        <Match exactly={true} pattern="/home" component={Home}/>
      </div>
  )
};

export default Layout;

