"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// corro el servidor con express
_app["default"].listen(3000);

console.log('server i port 3000');