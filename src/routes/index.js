import { Router } from 'express';
import tasks from "./tasks"
import activities from "./activities"
import workers from "./workers"
import login from "./login"
// import * as fs from 'fs';


const router = Router()
// const PATH_ROUTES = __dirname;

// const removeExtension = (filename) => {
//     return filename.split(".").shift();
// }
// fs.readdirSync(PATH_ROUTES).filter((file) => {
//     const name = removeExtension(file)
//     if(name != "index"){
//         console.log('rutas--------, name', name, file);
//         router.use(`/${name}`, import(`./${file}`));
//     }
// })

router.use('/tasks', tasks);
router.use('/workers', workers);
router.use('/activities', activities);
router.use('/login', login);
// router.use('/workers', import(`./workers`));

export default router;