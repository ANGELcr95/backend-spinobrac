"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _activities = require("../controllers/activities");

var router = (0, _express.Router)(); // un obejeto de express con el  que puedo definir rutas

/**
 * @swagger
 * /Activities:
 *   get:
 *     summary: Retrieve a lis of task.
 *     tags: [Activities]
 */

router.get('/', _activities.getActivities);
/**
 * @swagger
 * /Activities/count:
 *   get:
 *     summary: Retrieve number of activity.
 *     tags: [Activities]
 */

router.get('/count', _activities.getActivityCount);
/**
 * @swagger
 * /Activities/{id}:
 *   get:
 *     summary: Retrieve activity by id.
 *     tags: [Activities]
 */

router.get('/:id', _activities.getActivity); // el parametro es llamado id

/**
 * @swagger
 * /Activities:
 *   post:
 *     summary: Save a activity.
 *     tags: [Activities]
 */

router.post('/', _activities.saveActivity);
/**
 * @swagger
 * /Activities:
 *   delete:
 *     summary: Delete activity by id.
 *     tags: [Activities]
 */

router["delete"]('/:id', _activities.deleteActivity);
/**
 * @swagger
 * /Activities/{id}:
 *   put:
 *     summary: Update data by id.
 *     tags: [Activities]
 */

router.put('/:id', _activities.updateActivity);
var _default = router;
exports["default"] = _default;