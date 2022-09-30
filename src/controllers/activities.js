import { connect } from "../database"
import handleHttpError from "../utils/hanldeError";

export const getActivities = async (req, res)=> {

    // Desestructuración de arreglos en JavaScript
    // Con ECMAScript 6 (ES6), tenemos una nueva sintaxis 
    // para extraer múltiples propiedades de un arreglo y
    // asignarlas a variables de una sola vez. Es útil para
    // ayudar a mantener tu código limpio y conciso. Esta
    // nueva sintaxis es llamada sintaxis de  desestructuración.

    try {
        const connection = await connect()
        const [data] = await connection.query('SELECT * FROM activities')
        connection.end()
        res.json(data)
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
}
export const getActivity = async(req, res)=> {

    try {
        const connection = await connect()
        const [dataTask] = await connection.query('SELECT * FROM activities WHERE id = ?',[
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
export const getActivityCount = async (req, res)=> {

    try {
        const connection = await connect()
        const [dataLength] = await connection.query('SELECT COUNT(*) FROM activities')
        connection.end()
        res.json(dataLength[0]["COUNT(*)"])
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
}
export const saveActivity = async (req, res)=> {

    try {
        const { body } = req
        const connection = await connect()
        const result = await connection.query('INSERT INTO activities(operativo, description, date, file_operativo, document_oper, administrativo, file_admin, document_admin, done) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            body.operativo,
            body.description,
            body.date,
            body.file_operativo,
            body.document_oper,
            body.administrativo,
            body.file_admin,
            body.document_admin,
            body.done
        ]) // aqui ya me retorna es otra cosa
        connection.end()
        res.json({
            id:result[0].insertId,
            ...body
        })
        
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
    
}
export const deleteActivity = async (req, res)=> {

    try {
        const connection = await connect()
        const result = await connection.query('DELETE FROM activities WHERE id = ?',[
            req.params.id
        ])
        connection.end()
        res.sendStatus(204)
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
}
export const updateActivity = async (req, res)=> {
    let put = {
        done:req.body.done
    }
    console.log(put);
    
    try {
        const connection = await connect()
        const result = await connection.query('UPDATE activities SET ? WHERE id = ?',[
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