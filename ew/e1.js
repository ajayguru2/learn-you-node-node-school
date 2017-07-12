var express = require('express');
var fs = require('fs');
var tr2 = require('through2');

var app = express();

app.get('/', function(req, res){
 // res.send(ajay.html);
 app.use(express.static('ajay.html'));
});

app.listen(3000);
