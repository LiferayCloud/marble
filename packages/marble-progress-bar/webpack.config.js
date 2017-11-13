const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'progressBar.js': './src/ProgressBar.js',
    'progressBar.css': './src/progressBar.scss'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            compact: false,
            presets: ['babel-preset-es2015'],
            plugins: ['babel-plugin-transform-node-env-inline']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }),
      }
    ]
  },
  output: {
    library: 'metal',
    libraryTarget: 'this',
    filename: './build/globals/[name]'
  },
  plugins: [
    new ExtractTextPlugin('./build/globals/progressBar.css'),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};
