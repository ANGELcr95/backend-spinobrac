import { Router } from 'express';
import { deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask } from '../controllers/tasks'

const router = Router() // un obejeto de express con el  que puedo definir rutas

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Retrieve a lis of task.
 *     tags: [Tasks]
 */

router.get('/', getTasks)

/**
 * @swagger
 * /tasks/count:
 *   get:
 *     summary: Retrieve number of task.
 *     tags: [Tasks]
 */

router.get('/count', getTaskCount)

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Retrieve task by id.
 *     tags: [Tasks]
 */

router.get('/:id', getTask ) // el parametro es llamado id

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Save a task.
 *     tags: [Tasks]
 */

router.post('/', saveTask)

/**
 * @swagger
 * /tasks:
 *   delete:
 *     summary: Delete task by id.
 *     tags: [Tasks]
 */

router.delete('/:id', deleteTask)

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update data by id.
 *     tags: [Tasks]
 */

router.put('/:id', updateTask)



export default router;
