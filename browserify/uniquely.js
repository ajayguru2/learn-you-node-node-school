const uniq = require('uniq');

var un = function (string) {
  return(uniq(string));
}

module.exports.un = un;
