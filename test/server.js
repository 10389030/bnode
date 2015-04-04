var net = require('net');

var req_num = 0;

var server = net.createServer(function(sock){
  console.log("Client Connected: %j:%j", sock.remoteAddress, sock.remotePort);
  req_num += 1;

  sock.on('data', function(data){
    console.log('DATA: recieve %j', data.toString());
    sock.write(data);
  });

  sock.on('end', function(){
    console.log('Connection Close.');
  });

  sock.on('error', function(error){
    console.log(error);
  }); 

  sock.on('timeout', function(){
    console.log('Timeout');
  });
});

server.listen(8080, function(){
  console.log("Server Bind on: %j", server.address());
});
