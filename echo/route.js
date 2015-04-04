var helloApp = function(req, rsp)
{
  rsp.writeHead(200, {'Content-Type': 'text/html'});
  rsp.write("<html>HELLO Node</html>");
  rsp.end("");
}

module.exports = helloApp;


