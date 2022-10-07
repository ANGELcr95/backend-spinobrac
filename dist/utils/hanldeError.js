"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var handleHttpError = function handleHttpError(res) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Ups... algo salio mal';
  var code = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 403;
  res.status(code).json({
    status: 404,
    message: message
  });
};

var _default = handleHttpError;
exports["default"] = _default;