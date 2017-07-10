const fs = require('fs');
fs.createReadStream(`${process.argv[2]}`).pipe(process.stdout);

// note : you have to pass the file name as string using ES6 template string on line 2
