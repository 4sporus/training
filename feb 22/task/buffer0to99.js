buf = new Buffer(100);
for(var i= 0 ; i< 98 ; i++){
	
	buf[i] = parseInt(i);
}

console.log("buffer"+buf.toString('utf8') );



var buffer2 = buf.slice(40,60);
console.log("buffer2 content: " + buffer2.toString());


var buffer3 = new Buffer(100);
buffer2.copy(buffer3);
console.log("buffer2 content: " + buffer3.toString());