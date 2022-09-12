
import { config } from "./config";
import mysql from "mysql2/promise"

// Con .query(), la sustitución de parámetros se maneja en el cliente, incluidos los objetos que let data = req.bodyse encuentran en los ejemplos anteriores.

// Con .execute()la declaración preparada, los parámetros se envían desde el cliente como una cadena serializada y los maneja el servidor. Dado que let data = req.bodyes un objeto, eso no va a funcionar.

export const connect = async () =>  {
    return await mysql.createConnection(config)
}
