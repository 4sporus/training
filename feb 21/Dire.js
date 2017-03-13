

var fs = require('fs');

    fs.readdir('D:\porus\feb 21', 'utf8', function (err, data) {
           
		   if (err) throw err;
			   
            fs.writeFile ('./directory.txt', data, function(err) {
                if (err) throw err;
                console.log('Write complete....');
            });
        });