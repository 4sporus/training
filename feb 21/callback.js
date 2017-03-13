var fs = require('fs')
var myNumber =5 
function addone(){

fs.readFile('number.txt',function doneReading(err,fileContents){
myNumber = parseInt(fileContents)
myNumber++;	
})
}
addone()
console.log(myNumber)
addone()