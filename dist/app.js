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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// coloco un nombre para usar las 
var specs = (0, _swaggerJsdoc["default"])(_swaggerOptions.options);
var app = (0, _express["default"])();
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
var _default = app;
exports["default"] = _default;