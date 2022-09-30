import { Router } from 'express';
import { deleteActivity, getActivity, getActivityCount, getActivities, saveActivity, updateActivity } from '../controllers/activities'

const router = Router() // un obejeto de express con el  que puedo definir rutas

/**
 * @swagger
 * /Activities:
 *   get:
 *     summary: Retrieve a lis of task.
 *     tags: [Activities]
 */
 
router.get('/', getActivities)

/**
 * @swagger
 * /Activities/count:
 *   get:
 *     summary: Retrieve number of activity.
 *     tags: [Activities]
 */

router.get('/count', getActivityCount)

/**
 * @swagger
 * /Activities/{id}:
 *   get:
 *     summary: Retrieve activity by id.
 *     tags: [Activities]
 */

router.get('/:id', getActivity ) // el parametro es llamado id

/**
 * @swagger
 * /Activities:
 *   post:
 *     summary: Save a activity.
 *     tags: [Activities]
 */

router.post('/', saveActivity)

/**
 * @swagger
 * /Activities:
 *   delete:
 *     summary: Delete activity by id.
 *     tags: [Activities]
 */

router.delete('/:id', deleteActivity)

/**
 * @swagger
 * /Activities/{id}:
 *   put:
 *     summary: Update data by id.
 *     tags: [Activities]
 */

router.put('/:id', updateActivity)



export default router;
