import path from 'path';
import http from 'http';
import express from 'express';

import React from 'react';
import {renderToString} from 'react-dom/server';

import {ServerRouter, createServerRenderContext} from 'react-router';

import Layout from './components/Layout';
import Html from './components/Html';

export default function (params) {
  const app = express();
  const server = new http.Server(app);
  const chunks = params.chunks();

  app.use(express.static(path.join(__dirname, 'build/client')));
  app.use((req, res) => {
    const context = createServerRenderContext();
    const result = context.getResult();
    const component = (
      <ServerRouter
        location={req.url}
        context={context}>
        {({location}) => <Layout location={location}/>}
      </ServerRouter>
    );
    const content = renderToString(
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
