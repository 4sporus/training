var buffer1 = new Buffer("Hello!");
var buffer2 = new Buffer('how are you');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer 3 concat:->"+buffer3.toString());
console.log("buffer 3 concat:->"+buffer3);