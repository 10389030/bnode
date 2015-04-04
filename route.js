var libURL = require('url');
var libRoute = require('./utils/middleware_route')
var libIndex = require("./bnode/route");
var libEcho = require("./echo/route");
var libStatic = require("./static/route");

route_map = [
  [/^\/$/, libIndex],
  [/^\/echo$/, libEcho],
  [/^\/static/, libStatic],
];

module.exports = libRoute(route_map);



