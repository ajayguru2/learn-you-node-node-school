const uniq = require('uniq');

var s = prompt('string daalo');
var es = s.split(',');
uniq(es);
console.log(es);
