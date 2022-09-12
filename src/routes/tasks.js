import { Router } from 'express';
import { deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask } from '../controllers/tasks'
import { deleteWorker, getWorker, getWorkers, saveWorker, updateWorker } from '../controllers/workers';

const router = Router() // un obejeto de express con el  que puedo definir rutas

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Retrieve a lis of task.
 *     tags: [Tasks]
 */

router.get('/tasks', getTasks)

/**
 * @swagger
 * /tasks/count:
 *   get:
 *     summary: Retrieve number of task.
 *     tags: [Tasks]
 */

router.get('/tasks/count', getTaskCount)

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Retrieve task by id.
 *     tags: [Tasks]
 */

router.get('/tasks/:id', getTask ) // el parametro es llamado id

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Save a task.
 *     tags: [Tasks]
 */

router.post('/tasks', saveTask)

/**
 * @swagger
 * /tasks:
 *   delete:
 *     summary: Delete task by id.
 *     tags: [Tasks]
 */

router.delete('/tasks/:id', deleteTask)

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update data by id.
 *     tags: [Tasks]
 */

router.put('/tasks/:id', updateTask)

// ----------------------------------------------------------------

/**
 * @swagger
 * /workers:
 *   get:
 *     summary: Retrieve a lis of workers.
 *     tags: [Workers]
 */

 router.get('/workers', getWorkers)

 /**
  * @swagger
  * /workers/{dni}:
  *   get:
  *     summary: Retrieve workers by dni.
  *     tags: [Tasks]
  */
 
 router.get('/workers/:dni', getWorker ) // el parametro es llamado id
 
 /**
  * @swagger
  * /workers:
  *   post:
  *     summary: Save a worker.
  *     tags: [Tasks]
  */
 
 router.post('/workers', saveWorker)
 
 /**
  * @swagger
  * /tasks/{dni}:
  *   delete:
  *     summary: Delete task by dni.
  *     tags: [Tasks]
  */
 
 router.delete('/workers/:dni', deleteWorker)
 
 /**
  * @swagger
  * /tasks/{dni}:
  *   put:
  *     summary: Update data by dni.
  *     tags: [Tasks]
  */
 
 router.put('/workers/:dni', updateWorker)
 


export default router;
