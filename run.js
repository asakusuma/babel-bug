var fs = require('fs');
var babel = require('babel-core');
var example = fs.readFileSync('./example.js', 'utf8');
babel.transform(example, {
  modules: 'ignore'
});