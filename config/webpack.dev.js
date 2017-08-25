const config = require('./webpack.common');
const paths = require('./paths');

module.exports = Object.assign({}, config, {
  output: Object.assign({}, config.output, {
    filename: 'poetez-ts-lib.js',
    path: paths.build,
  }),
});
