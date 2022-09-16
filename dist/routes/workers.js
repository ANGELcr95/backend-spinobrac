"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _workers = require("../controllers/workers");

var _multer = require("../multer");

var _multer2 = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var upload = (0, _multer2["default"])({
  storage: _multer.storage
});
var router = (0, _express.Router)(); // un obejeto de express con el  que puedo definir rutas
// ----------------------------------------------------------------

/**
 * @swagger
 * /workers:
 *   get:
 *     summary: Retrieve a lis of workers.
 *     tags: [Workers]
 */

router.get('/', _workers.getWorkers);
/**
 * @swagger
 * /workers/{dni}:
 *   get:
 *     summary: Retrieve workers by dni.
 *     tags: [Tasks]
 */

router.get('/:dni', _workers.getWorker); // el parametro es llamado id

/**
 * @swagger
 * /workers:
 *   post:
 *     summary: Save a worker.
 *     tags: [Tasks]
 */

router.post('/', _workers.saveWorker);
/**
 * @swagger
 * /tasks/{dni}:
 *   delete:
 *     summary: Delete task by dni.
 *     tags: [Tasks]
 */

router["delete"]('/:dni', _workers.deleteWorker);
/**
 * @swagger
 * /tasks/{dni}:
 *   put:
 *     summary: Update data by dni.
 *     tags: [Tasks]
 */

router.put('/:dni', upload.single('file'), _workers.updateWorker);
var _default = router;
exports["default"] = _default;