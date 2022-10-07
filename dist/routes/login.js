"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _login = require("../controllers/login");

var router = (0, _express.Router)(); // un obejeto de express con el  que puedo definir rutas
// ----------------------------------------------------------------

router.post('/user', _login.userLogin); // el parametro es llamado id

/**
 * @swagger
 * /workers:
 *   post:
 *     summary: Save a worker.
 *     tags: [Tasks]
 */

var _default = router;
exports["default"] = _default;