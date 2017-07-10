const url = require('url');
const qs = require('querystring');

// console.log(url.parse('https://maps.googleapis.com/maps/api/geocode/json?address=0000'));
// // url.resolve('https://www.w3schools.com/asp/coll_querystring.asp');
// console.log(url.resolve('https://maps.googleapis.com/maps/api/geocode/json?address=', `${process.argv[2]}`));
// console.log(qs.parse('https://maps.googleapis.com/maps/api/geocode/json?address=0000'));
var inUrl = prompt();
var uo = url.parse(inUrl);
// console.log(uo);
// console.log(string);

// var qry = uo.query;
// var ne = qs.parse(qry);
// console.log(ne);

// console.log(JSON.stringify(ne));


var qry = qs.parse(uo.query);

var furl = url.resolve(inUrl, qry.file);
console.log(furl);
