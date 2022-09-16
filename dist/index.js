"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// corro el servidor con express
var PORT = process.env.PORT || 3000;

_app["default"].listen(PORT);

console.log('server i port 3000');