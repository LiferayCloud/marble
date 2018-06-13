const webpack = require('webpack');

module.exports = {
  entry: './src/Checkbox.js',
  module: {
    rules: [{
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
    }]
  },
  output: {
    library: 'metal',
    libraryTarget: 'this',
    filename: './build/globals/marble-checkbox.js'
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};
