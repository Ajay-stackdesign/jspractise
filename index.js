const lovish = require("./seconde.js") ///common js module.

console.log("hello world",lovish)

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(5000);