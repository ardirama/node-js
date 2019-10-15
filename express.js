'use strict';
var express = require('express');
var server  = express();
var logger  = require('morgan');


server.use(logger('dev'));

server.use(express.static(__dirname+'/public'));
server.listen(8000, function(){
	console.log('server is running on port 8000');
});
