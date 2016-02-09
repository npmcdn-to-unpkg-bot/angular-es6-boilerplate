import webpack          from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config           from '../config';
import webpackConfig    from './webpack';

const paths = config.get('utils_paths');

const server = new WebpackDevServer(webpack(webpackConfig), {
  contentBase : paths.project(config.get('dir_src')),
  hot    : false,
  quiet  : false,
  noInfo : false,
  lazy   : false,
  stats  : {
    colors : true
  },
  historyApiFallback : true
});

server.listen(8080);
