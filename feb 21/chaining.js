var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream("inp.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("input.txt.gz"));
console.log("file compressed");