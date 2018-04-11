'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.dev');
const webpackDevServerConfig = require('../config/webpack.dev.server');
const pathConfig = require('../config/path');
const envConfig = require('../config/env');

const compiler = webpack(webpackConfig);

const devServer = new WebpackDevServer(compiler, webpackDevServerConfig);

const port = 3799;
const host = '0.0.0.0';

devServer.listen(port, host, err => {
  if (err) {
    console.log(err);
  }
  console.log('Starting the development server...\n');
});