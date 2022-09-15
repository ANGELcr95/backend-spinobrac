import { connect } from "../database"

export const getWorkers = async (req, res)=> {
    const connection = await connect()

    // Desestructuración de arreglos en JavaScript
    // Con ECMAScript 6 (ES6), tenemos una nueva sintaxis 
    // para extraer múltiples propiedades de un arreglo y
    // asignarlas a variables de una sola vez. Es útil para
    // ayudar a mantener tu código limpio y conciso. Esta
    // nueva sintaxis es llamada sintaxis de  desestructuración.
    const [data] = await connection.query('SELECT * FROM workers')
    res.json(data)
}
export const getWorker = async(req, res)=> {
    const connection = await connect()
    const [dataTask] = await connection.query('SELECT * FROM workers WHERE document_number = ?',[
        req.params.dni
    ])

    if (dataTask.length > 0) {
        res.json(dataTask[0])
        return
    }
    res.sendStatus(203)

}
export const saveWorker = async (req, res)=> {
    const connection = await connect()
    
    const result = await connection.query('INSERT INTO workers(document_number, name) VALUES (?, ?)', [
        req.body.dni,
        req.body.name
    ]) // aqui ya me retorna es otra cosa
    
    res.json({
        dni:result[0].insertId,
        ...req.body
    })
}
export const deleteWorker = async (req, res)=> {
    const connection = await connect()
    const result = await connection.query('DELETE FROM workers WHERE document_number = ?',[
        req.params.dni
    ])
    res.sendStatus(204)
}
export const updateWorker = async (req, res)=> {
    const {body, file} = req
    const connection = await connect()
    
    let put = {
        name:body.name,
        date_born:body.date_born ? body.date_born: null,
        eps:body.eps ? body.eps: null,
        file: file ? `${body.api}/static/img/${file.filename}`: null
    }
    
    const result = await connection.query('UPDATE workers SET ? WHERE document_number = ?',[
        put,
        req.params.dni
    ])
    res.sendStatus(204)
}