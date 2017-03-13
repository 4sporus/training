var fs = require("fs");
var data ="Second stream";

var writerStream = fs.createWriteStream('output.txt');
data += 'sadhflkj';
writerStream.write(data,'UTF8');

writerStream.end();

writerStream.on('finish',function(){
data += 'sadhflkj';
console.log("write completed"+data);
});


writerStream.on('error',function(err){
console.log(err.stack);
});

console.log("program ended");