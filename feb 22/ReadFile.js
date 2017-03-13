var fs =require('fs');
fs.readFile('TestFile.txt',function(err,data){
	
	if(err) throw err;
	console.log("reading rile:"+data);
	
})