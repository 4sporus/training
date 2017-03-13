var fs= require('fs');
var readerStream = fs.createReadStream('inp.txt');
var writerStream = fs.createWriteStream('output.txt');
readerStream.pipe(writerStream);
console.log('program ended');