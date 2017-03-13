var buf = new Buffer('Buffer to JSON');
var json = buf.toJSON(buf);
console.log(json);
