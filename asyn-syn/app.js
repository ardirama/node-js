var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	fs.readFile('blocking.txt', function(err,data){
		if (err) {
			res.write(err);
		}
		res.write(data);
		res.end();
	});

}).listen(8080);


console.log("Server is running");