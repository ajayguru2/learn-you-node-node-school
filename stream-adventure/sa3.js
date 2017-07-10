//easy as f$%k !!

//concept:

// data input from user
//     ===>
// [ stdin stream]
//      ||
//      || pipe
//      ||
//   [std out stream] ===> data to the console

(process.stdin).pipe(process.stdout);
// ^input stream       ^output stream
