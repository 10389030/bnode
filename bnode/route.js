var app = function(req, rsp) {
  rsp.writeHead(200, {'Content-Type': 'text/plain'});
  rsp.write('HELLO Bone');
  rsp.end()
}

module.exports = app
