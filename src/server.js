import express from 'express';
import favicon from 'serve-favicon';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Root from './client/Root';
import Html from './client/Html';
import logger from './logger';
import { ServerStyleSheet } from 'styled-components';
import path from 'path';


const port = process.env.PORT || 3000;
const server = express();

server.use(logger);
server.use(favicon(path.join('src', 'client', 'favicon.ico')));
server.use('/static', express.static(path.join('dist', 'static')));

server.get('/', (req, res) => {
  const sheet = new ServerStyleSheet();

  const url = 'www.spacemango.io'
  const body = renderToString(sheet.collectStyles(<Root />));
  const styles = sheet.getStyleTags();
  const title = 'Spacemango Inc.';
  const description = 'The site for www.spacemango.io.';

  res.send(
    Html({
      url,
      body,
      styles,
      title,
      description
    })
  );
});

server.listen(port, () => {
  console.info(`Serving Spacemango.io at PORT '${port}'.`);
});