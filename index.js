// const lovish = require("./seconde.js") ///common js module.

// console.log("hello world",lovish)

const os = require('os');
console.log(os.freemem())
console.log(os.hostname())
console.log(os.homedir());
console.log(os.loadavg())
console.log(os.platform())
console.log(os.release())
console.log(os.networkInterfaces())

console.log(os.type())
console.log(os.totalmem())
console.log(os.uptime())



const path = require('path');

const baseName = path.basename('C:\\temp\\myfile.html');
const dirName = path.dirname('C:\\temp\\myfile.html');
console.log(baseName)
console.log(dirName)

































// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(5000);