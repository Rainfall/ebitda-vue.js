var path = require('path');

module.exports = {
  entry: './src/scripts-temp/script.js',
  output: {
    path: path.resolve(__dirname, './src/scripts'),
    filename: 'script.min.js'
  }
}