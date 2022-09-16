"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controllers/tasks");

var router = (0, _express.Router)(); // un obejeto de express con el  que puedo definir rutas

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Retrieve a lis of task.
 *     tags: [Tasks]
 */

router.get('/', _tasks.getTasks);
/**
 * @swagger
 * /tasks/count:
 *   get:
 *     summary: Retrieve number of task.
 *     tags: [Tasks]
 */

router.get('/count', _tasks.getTaskCount);
/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Retrieve task by id.
 *     tags: [Tasks]
 */

router.get('/:id', _tasks.getTask); // el parametro es llamado id

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Save a task.
 *     tags: [Tasks]
 */

router.post('/', _tasks.saveTask);
/**
 * @swagger
 * /tasks:
 *   delete:
 *     summary: Delete task by id.
 *     tags: [Tasks]
 */

router["delete"]('/:id', _tasks.deleteTask);
/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update data by id.
 *     tags: [Tasks]
 */

router.put('/:id', _tasks.updateTask);
var _default = router;
exports["default"] = _default;