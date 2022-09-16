import { Router } from 'express';
import { deleteWorker, getWorker, getWorkers, saveWorker, updateWorker } from '../controllers/workers';
import {  storage } from '../multer';
import multer from "multer";

const upload = multer({ storage })

const router = Router() // un obejeto de express con el  que puedo definir rutas

// ----------------------------------------------------------------

/**
 * @swagger
 * /workers:
 *   get:
 *     summary: Retrieve a lis of workers.
 *     tags: [Workers]
 */

 router.get('/', getWorkers)

 /**
  * @swagger
  * /workers/{dni}:
  *   get:
  *     summary: Retrieve workers by dni.
  *     tags: [Tasks]
  */
 
 router.get('/:dni', getWorker ) // el parametro es llamado id
 
 /**
  * @swagger
  * /workers:
  *   post:
  *     summary: Save a worker.
  *     tags: [Tasks]
  */
 
 router.post('/', saveWorker)
 
 /**
  * @swagger
  * /tasks/{dni}:
  *   delete:
  *     summary: Delete task by dni.
  *     tags: [Tasks]
  */
 
 router.delete('/:dni', deleteWorker)
 
 /**
  * @swagger
  * /tasks/{dni}:
  *   put:
  *     summary: Update data by dni.
  *     tags: [Tasks]
  */
 
 router.put('/:dni',upload.single('file') ,updateWorker)
 


export default router;
