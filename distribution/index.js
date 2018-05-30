'use strict';

var http = require('http');
var url = require('url');
var port = 3001;
var server = http.createServer(function (req, res) {
  // res.write(`This is response from server listen on port: ${port} \n`);
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  var ipAdrress = req.socket.remoteAddress;
  res.write('<h1>Your IP address is: ' + ipAdrress + ' </h1>');
  res.write('<h1>Your request URL is: ' + req.url + ' </h1>');
  res.write('<h1>Detail query is: ' + JSON.stringify(url.parse(req.url, true).query) + ' </h1>');
  res.end();
}).listen(port);
console.log('Server is running at port: ' + port);
console.log("luu manh");