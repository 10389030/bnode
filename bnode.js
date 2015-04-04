var libHttp = require('http');
var libConf = require('./configure')
var libApp  = require('./route')

var httpServer = libHttp.createServer(libApp);
httpServer.listen(global.SERVER_PORT);
console.log(SERVER_PORT);
console.log(__filename);
