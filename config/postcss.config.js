const env = process.env.NODE_ENV;

module.exports = () => [
  require('postcss-import')({
    resolve: id => (id.charAt(0) === '~' ? id.slice(1) : id),
  }),
  require('postcss-cssnext')(),
  require('postcss-color-function')(),
  require('postcss-flexbugs-fixes'),
  ...(
    env === 'production' ? [
      require('autoprefixer')({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009',
      }),
      require('cssnano')(),
    ] : []
  ),
];
