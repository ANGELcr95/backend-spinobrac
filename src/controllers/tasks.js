import { connect } from "../database"
import handleHttpError from "../utils/hanldeError";

export const getTasks = async (req, res)=> {

    // Desestructuración de arreglos en JavaScript
    // Con ECMAScript 6 (ES6), tenemos una nueva sintaxis 
    // para extraer múltiples propiedades de un arreglo y
    // asignarlas a variables de una sola vez. Es útil para
    // ayudar a mantener tu código limpio y conciso. Esta
    // nueva sintaxis es llamada sintaxis de  desestructuración.

    try {
        const connection = await connect()
        const [data] = await connection.query('SELECT * FROM tasks')
        connection.end()
        res.json(data)
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
}
export const getTask = async(req, res)=> {

    try {
        const connection = await connect()
        const [dataTask] = await connection.query('SELECT * FROM tasks WHERE id = ?',[
            req.params.id
        ])
        connection.end()
        if (dataTask.length > 0) {
            res.json(dataTask[0])
        } else {
            handleHttpError(res, 'No encontrado', 203)
        }
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
}
export const getTaskCount = async (req, res)=> {

    try {
        const connection = await connect()
        const [dataLength] = await connection.query('SELECT COUNT(*) FROM tasks')
        connection.end()
        res.json(dataLength[0]["COUNT(*)"])
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
}
export const saveTask = async (req, res)=> {
    try {
        const connection = await connect()
        const result = await connection.query('INSERT INTO tasks(title, description, date, file, document_number, administrativo, document_admin, type_risk) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [
            req.body.title,
            req.body.description,
            req.body.date,
            req.body.file,
            req.body.document_number,
            req.body.administrativo,
            req.body.document_admin,
            req.body.type_risk
        ]) // aqui ya me retorna es otra cosa
        connection.end()
        res.json({
            id:result[0].insertId,
            ...req.body
        })
        
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
    
}
export const deleteTask = async (req, res)=> {

    try {
        const connection = await connect()
        const result = await connection.query('DELETE FROM tasks WHERE id = ?',[
            req.params.id
        ])
        connection.end()
        res.sendStatus(204)
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
}
export const updateTask = async (req, res)=> {
    let put = {
        description:req.body.description,
        type_risk:req.body.type_risk
    }
    try {
        const connection = await connect()
        const result = await connection.query('UPDATE tasks SET ? WHERE id = ?',[
            put,
            req.params.id
        ])
        connection.end()
        res.sendStatus(204)
    } catch (error) {
        console.log(error);
        
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
}