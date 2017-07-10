//In this challenge we somehow need to convert the buffer stream chunks in the form of lines
//ie each line is a chunk
// this can be done using split module
const spli = require('split');
const tr2 = require('through2');


// the following commented code does'nt work for some reason I don't know

// var formatterStream = tr2(function(buff, _,next) {
//   var line = buff.toString();
//
//  // console.log(`this is the immediate converted buffer as a string: ${line}`);
//   if (linecount%2 === 0) {
//     line.toUpperCase();
//     // console.log('this is even line', line);
//     // console.log(`this is the linecount: ${linecount}`);
//     linecount++;
//     // console.log(`this is the updated linecount: ${linecount}`);
//   }
//   else if (linecount%2 === 1) {
//     line.toLowerCase();
//     // console.log('this is odd line', line);
//     // console.log(`this is the linecount: ${linecount}`);
//     linecount++;
//     // console.log(`this is the updated linecount: ${linecount}`);
//   }
//   this.push(`${line}\n`);
//   next();
// });

var lineCount = 3;

var formatterStream = tr2(function (buf, _, next) {
    var line = buf.toString();
    this.push(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount ++;
    next();
});

process.stdin.pipe(spli()).pipe(formatterStream).pipe(process.stdout);
