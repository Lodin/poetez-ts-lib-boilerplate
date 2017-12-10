const path = require('path');

const resolve = relativePath => path.resolve(__dirname, '..', relativePath);

module.exports = {
  build: {
    cjs: resolve('./dist/cjs'),
    es: resolve('./dist/es'),
  },
  cache: resolve('./node_modules/.cache'),
  index: resolve('./src/index.ts'),
  modules: resolve('./node_modules'),
  src: resolve('./src'),
  tsconfig: resolve('./tsconfig.json'),
};
