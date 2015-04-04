var net = require('net');

var connect_opt = {
  host: '127.0.0.1',
  port: 8080,
}

var req_cnt = 1000;

var req_num = function(num) {
  var client = net.createConnection(connect_opt, function(){
    //console.log('Connected: %j', client.address());
    client.write(num.toString() + '\n');
    client.end();
  });

  client.on('data', function(data){
    //console.log('Recv: %j', data.toString());
  });

  client.on('error', function(error){
    console.log("Error: %j, num=%j", error, num); 
  });
}

for (var i = 0; i < req_cnt; ++i) {
  req_num(i);
}
