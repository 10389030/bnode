var libURL = require('url');

var middleware_handler = function(route_settting) {
  var _setting = route_settting;
  var _middleware_var = '_middleware_route_path_';
  
  return function(req, rsp) {
    // 用于支持层级的URL管理
    if (req.hasOwnProperty(_middleware_var)) {
      var pathname = req[_middleware_var];
    }
    else {
      var pathname = libURL.parse(req.url).pathname;
    }
    console.log("Request For: " + pathname);

    for (index in _setting) {
      var rule = _setting[index];
      var reg_result = pathname.match(rule[0]);
      console.log("Testing rule: " + rule[0]);
      if (reg_result) {
        if (reg_result.index == 0) {
          console.log("Match rule: " + rule[0]);
          
          // 更新下一级的url
          req[_middleware_var] = pathname.replace(reg_result[0], '');
          console.log(_middleware_var + '=' + req[_middleware_var]);
          return rule[1](req, rsp);
        }
        else {
          console.log("Configure Error, Please add `^` at the begin of URL pattern");
        }
      } 
    }
    console.log("Match rule: None");
    rsp.writeHead(404, {});
    rsp.end();
  }
}

module.exports = middleware_handler
