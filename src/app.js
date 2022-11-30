import express  from "express";
import routes from "./routes" // coloco un nombre para usar las 
import cors from "cors"
import morgan from "morgan"
import path from "path";
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { options } from "./swaggerOptions";
import { Server as SocketServer} from 'socket.io'
import http from 'http'

const specs = swaggerJSDoc(options)

const app = express();
const server = http.createServer(app)
const io = new SocketServer(server)



// Middlewares
app.use(cors()); // para que que otros server  se conecten otro es el https pero para desarrollo
app.use(morgan("dev")); //ver peticiones que van llegando
app.use(express.json()); // para que express entienda los post de json
app.use(routes) // aca uso la rutas en la aplicación

// app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

app.use('/static', express.static(path.join(__dirname, '../public')))
app.get('/', function(req, res){
    res.send("Well-App")
})
console.log(path.join(__dirname, '../public'));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("socketUsers", () => {
    let id = `${socket.id}-${new Date().toLocaleString()}`
    socket.broadcast.emit("socketUsers", id);
  });
  socket.on("socketReport", () => {
    let id = `${socket.id}-${new Date().toLocaleString()}`
    socket.broadcast.emit("socketReport", id);
  });
  socket.on("socketActivity", (data) => {
    socket.broadcast.emit("socketActivity", data);
  });
  socket.on("socketRenderActivity", (data) => {
    socket.broadcast.emit("socketRenderActivity", data);
  });
});

export default server;