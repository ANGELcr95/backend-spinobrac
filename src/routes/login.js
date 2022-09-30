import { Router } from 'express';
import { userLogin } from '../controllers/login';

const router = Router() // un obejeto de express con el  que puedo definir rutas

// ----------------------------------------------------------------
 
 router.post('/user', userLogin ) // el parametro es llamado id
 
 /**
  * @swagger
  * /workers:
  *   post:
  *     summary: Save a worker.
  *     tags: [Tasks]
  */

export default router;
