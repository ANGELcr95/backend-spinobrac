"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swaggerOptions = require("./swaggerOptions");

var _socket = require("socket.io");

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// coloco un nombre para usar las 
var specs = (0, _swaggerJsdoc["default"])(_swaggerOptions.options);
var app = (0, _express["default"])();

var server = _http["default"].createServer(app);

var io = new _socket.Server(server); // Middlewares

app.use((0, _cors["default"])()); // para que que otros server  se conecten otro es el https pero para desarrollo

app.use((0, _morgan["default"])("dev")); //ver peticiones que van llegando

app.use(_express["default"].json()); // para que express entienda los post de json

app.use(_routes["default"]); // aca uso la rutas en la aplicación
// app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

app.use('/static', _express["default"]["static"](_path["default"].join(__dirname, '../public')));
app.get('/', function (req, res) {
  res.send("Well");
});
console.log(_path["default"].join(__dirname, '../public'));
app.use('/docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));
io.on("connection", function (socket) {
  console.log("\u26A1: ".concat(socket.id, " user just connected!"));
  socket.on("socketUsers", function () {
    var id = "".concat(socket.id, "-").concat(new Date().toLocaleString());
    socket.broadcast.emit("socketUsers", id);
  });
  socket.on("socketReport", function () {
    var id = "".concat(socket.id, "-").concat(new Date().toLocaleString());
    socket.broadcast.emit("socketReport", id);
  });
  socket.on("socketActivity", function (data) {
    socket.broadcast.emit("socketActivity", data);
  });
  socket.on("socketRenderActivity", function (data) {
    socket.broadcast.emit("socketRenderActivity", data);
  });
});
var _default = server;
exports["default"] = _default;