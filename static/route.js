var libFs = require("fs");
var libPath = require('path');
var libMine = require('mime')

var app = function(req, rsp) {
  /**
   * 读取全局变脸 STATIC_ROOT 作为媒体文件的根目录, 如果该变量
   * 没有设置，那么默认使用文件的当前路径作为根
   */
  // TODO: 这段代码其实不必要每次请求媒体文件都执行
  if (global.hasOwnProperty('STATIC_ROOT')){
    var static_root = global.STATIC_ROOT;
  }
  else {
    var static_root = __dirname;
  }

  var filename = req['_middleware_route_path_'];
  var filepath = libPath.join(static_root, filename);
  console.log("Filepath: " + filepath);
  libFs.readFile(filepath, function(err, data){
    if (err) {
      console.log("Error" + err);
      rsp.writeHead(500, {});
      rsp.end();
    }
    else {
      var mime = libMine.lookup(filepath);
      rsp.writeHead(200, {'Content-Type': mime});
      rsp.write(data, "binary");
      rsp.end();
    }
  });
}

module.exports = app;
