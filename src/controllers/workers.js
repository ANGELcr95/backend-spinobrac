import { connect } from "../database"
import { helperImg } from "../multer"
import * as fs from 'fs';
import handleHttpError from "../utils/hanldeError";
import { encrypt } from "../utils/handleBcrypt";


export const getWorkers = async (req, res)=> {
    // Desestructuración de arreglos en JavaScript
    // Con ECMAScript 6 (ES6), tenemos una nueva sintaxis 
    // para extraer múltiples propiedades de un arreglo y
    // asignarlas a variables de una sola vez. Es útil para
    // ayudar a mantener tu código limpio y conciso. Esta
    // nueva sintaxis es llamada sintaxis de  desestructuración.

    try {
        const connection = await connect()
        const [data] = await connection.query('SELECT * FROM workers')
        connection.end()
        res.json(data)
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
}
export const getWorker = async(req, res)=> {

    try {
        const connection = await connect()
        const [dataWorker] = await connection.query('SELECT * FROM workers WHERE document_number = ?',[
            req.params.dni
        ])

        connection.end()
        if (dataWorker.length > 0) {
            res.json(dataWorker[0])
            return
        }
        res.sendStatus(203)
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
}
export const saveWorker = async (req, res)=> {
    
    try {
        const connection = await connect()
        const result = await connection.query('INSERT INTO workers(document_number, name) VALUES (?, ?)', [
            req.body.dni,
            req.body.name
        ]) // aqui ya me retorna es otra cosa
        res.json({
            dni:result[0].insertId,
            ...req.body
        })
        connection.end()

    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
}
export const deleteWorker = async (req, res)=> {

    try {
        const connection = await connect()
        const result = await connection.query('DELETE FROM workers WHERE document_number = ?',[
            req.params.dni
        ])
        connection.end()
        res.sendStatus(204)
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
}
export const updateWorker = async (req, res)=> {
    
    try {
        const {body, file} = req
        
        if (file) {
            helperImg(file.path,  `resize-${file.filename}`, 300)
            .then(()=>{
                fs.unlink(`./public/img/${file.filename}`, (err => {
                    if (err) console.log(err);
                }));
            })
        }
    
        const connection = await connect()
        
        let put = {
            name:body.name,
            date_born:body.date_born ? body.date_born: null,
            eps:body.eps ? body.eps: null,
            file: file ? `${body.api}/static/img/resize-${file.filename}`: null,
            role: body.role
        }
        console.log(body);
        
        if (body.role == 'Administrativo' || body.role == 'Root') {
            if (body.password) {
                put.password = await encrypt(body.password)
            }
        } else {
            put.password = null
        }
        
        const result = await connection.query('UPDATE workers SET ? WHERE document_number = ?',[
            put,
            req.params.dni
        ])
        connection.end()
        res.sendStatus(204)
    
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
}