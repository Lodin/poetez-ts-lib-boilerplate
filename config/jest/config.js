const path = require('path');

const resolve = way => path.resolve(process.cwd(), way);
const config = way => resolve(`config/jest/${way}`);

module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!src/**/*.d.ts',
  ],
  globals: {
    'ts-jest': {
      tsConfigFile: resolve('tsconfig.test.json'),
    },
  },
  mapCoverage: true,
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
  moduleFileExtensions: [
    'web.ts',
    'ts',
    'web.js',
    'js',
    'json',
    'node',
  ],
  rootDir: process.cwd(),
  setupFiles: [
    config('polyfills.js'),
  ],
  testMatch: [
    resolve('src/**/__tests__/**/*.ts'),
    resolve('src/**/?(*.)(spec|test).ts'),
  ],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.ts$': config('typescriptTransform.js'),
    '^(?!.*\\.(js|css|json)$)': config('fileTransform.js'),
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|ts)$',
  ],
};
