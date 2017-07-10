const http = require('http');
const t2 = require('through2');


var fstream = t2(function(buff, _, next) {
  this.push(buff.toString().toUpperCase());
  next();
});

var server = http.createServer(function(req, res) {
  req.pipe(fstream).pipe(res);
});

server.listen(Number(process.argv[2]));
