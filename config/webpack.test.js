const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
  devtool: 'eval',
  output: {
    path: paths.build.test,
    pathinfo: true,
    filename: 'build.js',
  },
  entry: [
    paths.test,
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: paths.src,
        loader: require.resolve('ts-loader'),
      },
      {
        test: /\.(js|ts|tsx)$/,
        loader: 'sourcemap-istanbul-instrumenter-loader',
        enforce: 'post',
        exclude: [
          /\.spec\.(ts|tsx)$/,
          /node_modules/,
        ],
        options: {'force-sourcemap': true},
      },
      {
        test: /\.html/,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
      {
        test: /\.css/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importModules: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: require(paths.postcssConfig),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.html,
    }),
    new CaseSensitivePathsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
