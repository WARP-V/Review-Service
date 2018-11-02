/* eslint-disable */ 

const path = require('path');

const clientDirectory = path.join(__dirname, '/client');
const publicDirectory = path.join(__dirname, '/public');

module.exports = {
  entry: `${clientDirectory}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: publicDirectory
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : clientDirectory,
        loader : 'babel-loader',      
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }, 
      {
        test: /\.css$/,
        include : clientDirectory,
        loader: 'style-loader'
      }, 
      {
        test: /\.css$/,
        include : clientDirectory,
        loader: 'css-loader',
      }
    ]
  }
};