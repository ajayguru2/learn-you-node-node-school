//converting the stdin to upper case
//module used : through2

const tr2 = require('through2');

// creating our custom formatter stream
//this stream will take the data (buffer object) from
//piped stdin then will format as defined
// Convert data from `process.stdin` to upper-case data on `process.stdout`
// using the `through2` module.
//
// To get the `through2` module you'll need to do:
//
//     npm install through2
//
// A transform stream takes input data and applies an operation to the data to
// produce the output data.
//
// Create a through stream with a `write` and `end` function:
//
//     var through = require('through2');
//     var stream = through(write, end);
//
// The `write` function is called for every buffer of available input:
//
//     function write (buffer, encoding, next) {
//         // ...
//     }
//
// and the `end` function is called when there is no more data:
//
//     function end () {
//         // ...
//     }
//
// Inside the write function, call `this.push()` to produce output data and call
// `next()` when you're ready to receive the next chunk:
//
//     function write (buffer, encoding, next) {
//         this.push('I got some data: ' + buffer + '\n');
//         next();
//     }
//
// and call `done()` to finish the output:
//
//     function end (done) {
//         done();
//     }
//
// `write` and `end` are both optional.

var formatterStream = tr2(function(buff, _, next) {
  this.push(buff.toString().toUpperCase());
  next();
});

//piping the streams together
(process.stdin).pipe(formatterStream).pipe(process.stdout);
