var fs = require("fs");
var data ="sdgfhgsjkdhfshfh sghdfkjbask";

var readStream = fs.createReadStream('inp.txt');
readStream.setEncoding('UTF8');

readStream.on('data',function(chunk){
data +=chunk;
});

readStream.on('end',function(){
console.log(data);
});

readStream.on('error',function(err){
console.log(err.stack);
});

console.log("program ended");