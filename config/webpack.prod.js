const webpack = require('webpack');
const config = require('./webpack.common');
const paths = require('./paths');

module.exports = Object.assign({}, config, {
  output: Object.assign({}, config.output, {
    filename: 'poetez-ts-lib.min.js',
    path: paths.build,
  }),
  plugins: [
    ...config.plugins,
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
        screw_ie8: false,
      },
      mangle: {
        screw_ie8: false,
      },
      output: {
        screw_ie8: false,
      },
    }),
  ],
});
