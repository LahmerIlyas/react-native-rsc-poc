import './runtime';
import express from 'express';
import { bundlerConfig } from './runtime/bundler.config';
import { setOmdbApiHttpClientConfiguration } from '@rsc/api-client-omdb/server';

const app = express();
import React from 'react';
const { renderToPipeableStream } = require("react-server-dom-webpack/server");


setOmdbApiHttpClientConfiguration({
  baseUrl: 'https://www.omdbapi.com/',
  apiKey: 'b8c4e425'
})

app.get("/react", (req, res) => {
  const { pipe } = renderToPipeableStream(
    React.createElement(require('./pages/Home').default),
    bundlerConfig
  );
  pipe(res);
});

app.use(express.static('./public'));

app.listen(process.env.PORT || 3000);
