import express  from "express";
import taskRoutes from "./routes/tasks" // coloco un nombre para usar las 
import cors from "cors"
import morgan from "morgan"
import path from "path";
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { options } from "./swaggerOptions";

const specs = swaggerJSDoc(options)

const app = express();

app.use(cors()); // para que que otros server  se conecten otro es el https pero para desarrollo
app.use(morgan("dev")); //ver peticiones que van llegando
app.use(express.json()); // para que express entienda los post de json
app.use(taskRoutes) // aca uso la rutas en la aplicación

// app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

app.use('/static', express.static(path.join(__dirname, '../public')))
console.log(path.join(__dirname, '../public'));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

export default app;