
import { config } from "./config";
import mysql from "mysql2/promise"
import { Sequelize } from "sequelize";

// Con .query(), la sustitución de parámetros se maneja en el cliente, incluidos los objetos que let data = req.bodyse encuentran en los ejemplos anteriores.

// Con .execute()la declaración preparada, los parámetros se envían desde el cliente como una cadena serializada y los maneja el servidor. Dado que let data = req.bodyes un objeto, eso no va a funcionar.

export const connect = async () =>  {

  // max: 5,
  // min: 0,
  // acquire: 30000,
  // idle: 10000

const sequelize = new Sequelize(
    config.database,
    config.user,
    config.password,
  {
    host: config.host,
    dialect: 'mysql'
  }
);
    
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
 return sequelize
}

