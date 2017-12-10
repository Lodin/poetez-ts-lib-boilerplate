const {BUILD_TYPE} = process.env;

const browsers = [
  'last 2 Chrome versions',
  'last 2 Firefox versions',
  'last 2 Safari versions',
];

module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: BUILD_TYPE === 'cjs' ? [
          ...browsers,
          'IE 11',
        ] : browsers,
      },
      loose: true,
      modules: false,
    }],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', {
      polyfill: false,
    }],
    '@babel/plugin-external-helpers',
    ['@babel/plugin-proposal-class-properties', {loose: true}],
  ],
};
