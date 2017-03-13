var http = require('http');
var server = http.createServer(function (req,res){
	
	if(req.url == '/'){
		res.writeHead(200,{'Content-Type': 'text/html'});
		res.write('<html><body><p>This is home page </p></body></html>');
		res.end();
	}
	else if(req.url == "/student" ){
		res.writeHead(200,{'Content-Type': 'text/html'});
		res.write('<html><body><p>This is student page </p></body></html>');
		res.end();
		
	}
	
});
server.listen(8080);
console.log('node .js web server at port 8080 is running')