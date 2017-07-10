const net = require('net');
var strftime = require('strftime') // not required in browsers
var samay = (strftime('%Y-%M-%d %H:%M')) // => April 28, 2011 18:21:08

 //ye likhna hai "YYYY-MM-DD hh:mm"

 // date.getFullYear()
 //     date.getMonth()     // starts at 0
 //     date.getDate()      // returns the day of month
 //     date.getHours()
 //     date.getMinutes()

// var nn = (`${samay.getFullYear()}-${samay.getMonth()}-${samay.getDate()} ${samay.getHours()}:0${samay.getMinutes()}`).toString();


var sahi = (i) => {
  return (i < 10 ? '0' : '') + i;
}

var now = () => {
  var samay = new Date()
  return samay.getFullYear() + '-' +
    sahi(samay.getMonth() + 1) + '-' +
    sahi(samay.getDate()) + ' ' +
    sahi(samay.getHours()) + ':' +
    sahi(samay.getMinutes())
}

var server = net.createServer(function (socket){
  //socket handling logic
  socket.write(now() + '\n');
  socket.end();
});

server.listen(3000);
