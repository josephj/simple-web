import path from 'path';
import http from 'http';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import App from './components/App';
import Html from './components/Html';

module.exports = function (params) {
  const app = express();
  const server = new http.Server(app);
  const chunks = params.chunks();
  const component = (<App/>);

  app.use(express.static(path.join(__dirname, 'build/client')));
  app.use((req, res) => {
     const content = ReactDOM.renderToString(
       <Html
         assets={chunks}
         component={component}/>
     );

     res.send(`<!DOCTYPE html>${content}`);
  });

  server.listen(4000, function () {
    console.log('app listening on port 4000!');
  });
};
