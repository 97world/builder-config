'use strict';

const config = require('./webpack.dev');
const pathConfig = require('./path');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

const proxy = null;

module.exports = {
  disableHostCheck:
    !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
  compress: true,
  // clientLogLevel: 'none',
  contentBase: pathConfig.appPublic,
  watchContentBase: true,
  hot: true,
  publicPath: '/',
  quiet: true,
  https: protocol === 'https',
  host: host,
  overlay: false,
  historyApiFallback: {
    disableDotRule: true,
  },
  public: '0.0.0.0',
};
