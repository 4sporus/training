var fs = require('fs')
var myNumber =undefined 
function addone(callback){

fs.readFile('number.txt',function doneReading(err,fileContents){
myNumber = parseInt(fileContents)
myNumber++;	
callback()
})
}
function logMyNumber(){
	console.log(myNumber)
}

addone(logMyNumber)

