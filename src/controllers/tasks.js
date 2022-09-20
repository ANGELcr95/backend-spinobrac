import { connect } from "../database"
import handleHttpError from "../utils/hanldeError";

export const getTasks = async (req, res)=> {

    // Desestructuración de arreglos en JavaScript
    // Con ECMAScript 6 (ES6), tenemos una nueva sintaxis 
    // para extraer múltiples propiedades de un arreglo y
    // asignarlas a variables de una sola vez. Es útil para
    // ayudar a mantener tu código limpio y conciso. Esta
    // nueva sintaxis es llamada sintaxis de  desestructuración.
    let connection
    try {
        connection = await connect()
        const [data] = await connection.query('SELECT * FROM tasks')
        res.json(data)
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
     finally {
        connection?.close()
    }
}
export const getTask = async(req, res)=> {
    let connection
    try {
         connection = await connect()
        const [dataTask] = await connection.query('SELECT * FROM tasks WHERE id=?',
        {
          replacements: [`${req.params.id}`],
          type: connection.QueryTypes.SELECT,
        },
      );
        console.log(dataTask);
        
        if (dataTask.length > 0) {
            res.json(dataTask[0])
            return
        }
        handleHttpError(res, 'No encontrado', 203)
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    } 
    finally {
        connection?.close()
    }
}
export const getTaskCount = async (req, res)=> {

    try {
        const connection = await connect()
        const [dataLength] = await connection.query('SELECT COUNT(*) FROM tasks')
        res.json(dataLength[0]["COUNT(*)"])
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
}
export const saveTask = async (req, res)=> {
    let connection
    
    try {
        connection = await connect()
        const result = await connection.query(`INSERT INTO tasks(title, description, date, file, document_number) VALUES (
            '${req.body.title}', '${req.body.description}', '${req.body.date}', '${req.body.file}', '${req.body.document_number}'
            )`,{type:connection.QueryTypes.INSERT}
            )
    
        res.json({
            id:result[0].insertId,
            ...req.body
        })
        
    } catch (error) {
        console.log(error)
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    } 
    finally {
        connection?.close()
    }
    
}
export const deleteTask = async (req, res)=> {
    let connection
    try {
        connection = await connect()
        await connection.query(
            `DELETE FROM tasks WHERE id=${req.params.id}`,
            {type:connection.QueryTypes.DELETE}
        )
        res.sendStatus(204)
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    } 
    finally {
        connection.close()
    }
}
export const updateTask = async (req, res)=> {
    let connection
    try {
        connection = await connect()
        await connection.query(
            `UPDATE tasks SET ${req.body} WHERE id = ${req.params.id}`
            );
        res.sendStatus(204)
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
    finally {
        connection.close()
    }
}