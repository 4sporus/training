var http = require('http');
var server = http.createServer(function (req,res){
	
	if(req.url == '/ss'){
		res.writeHead(200,{'Content-Type': 'application/json'});
		res.write(JSON.stringify({message : "Hello world   dsafsd"}));
		res.end();
	}else{
		
		res.end('Invalid request');
	}
	
	
});
server.listen(8080);
console.log('node .js web server at port 8080 isaaa running')