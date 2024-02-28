//Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

//Create server
http.createServer(function(req, res){
	//Get the URL
	var url_parts = url.parse(req.url);
	var file = url_parts.pathname;
	
	//Remove the leading slash
	file = file.substring(1, file.length);
	
	//Read the file
	fs.readFile(file, function(err, data){
		if(err){
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.end('File not found');
		}
		else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			res.end();
		}
	});
}).listen(8080);
console.log('Server is running on port 8080');
//Path: %20comments.js
//Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

//Create server
http.createServer(function(req, res){
	//Get the URL
	var url_parts = url.parse(req.url);
	var file = url_parts.pathname;
	
	//Remove the leading slash
	file = file.substring(1, file.length);
	
	//Read the file
	fs.readFile(file, function(err, data){
		if(err){
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.end('File not found');
		}
		else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			res.end();
		}
	});
}).listen(8080);
console.log('Server is running on port 8080');
//Path: %20comments.js
//Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

//Create server
http.createServer(function(req, res){
	//Get the URL
	var url_parts = url.parse(req.url);
	var file = url_parts.pathname;
	
	//Remove the leading slash
	file = file.substring(1, file.length);
	
	//Read the file
	fs.readFile(file, function(err, data){
		if(err){
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.end('File not found');
		}
		else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			res.end();
		}
	});
}).listen(8080);
console.log('Server is running on port 8080');