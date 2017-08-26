const path = require('path');

const resolve = relativePath => path.resolve(__dirname, '..', relativePath);

module.exports = {
  build: {
    main: resolve('./dist'),
    test: resolve('./dist.test'),
  },
  cache: resolve('./node_modules/.cache'),
  html: resolve('./public/index.html'),
  modules: resolve('./node_modules'),
  postcssConfig: resolve('./config/postcss.config'),
  src: resolve('./src'),
  test: resolve('./src/test.ts'),
  tsconfig: resolve('./tsconfig.json'),
};
