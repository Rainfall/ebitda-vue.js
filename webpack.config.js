var path = require('path');

module.exports = {
  entry: './scripts-temp/script.js',
  output: {
    path: path.resolve(__dirname, './scripts'),
    filename: 'script.js'
  }
}