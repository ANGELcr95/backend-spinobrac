import { connect } from "../database"

export const getTasks = async (req, res)=> {
    const connection = await connect()

    // Desestructuración de arreglos en JavaScript
    // Con ECMAScript 6 (ES6), tenemos una nueva sintaxis 
    // para extraer múltiples propiedades de un arreglo y
    // asignarlas a variables de una sola vez. Es útil para
    // ayudar a mantener tu código limpio y conciso. Esta
    // nueva sintaxis es llamada sintaxis de  desestructuración.
    const [data] = await connection.query('SELECT * FROM tasks')
    res.json(data)
}
export const getTask = async(req, res)=> {
    const connection = await connect()
    const [dataTask] = await connection.query('SELECT * FROM tasks WHERE id = ?',[
        req.params.id
    ])
    res.json(dataTask[0])
}
export const getTaskCount = async (req, res)=> {
    const connection = await connect()
    const [dataLength] = await connection.query('SELECT COUNT(*) FROM tasks')
    res.json(dataLength[0]["COUNT(*)"])
}
export const saveTask = async (req, res)=> {
    const connection = await connect()

    console.log(req.body);
    
    
    const result = await connection.query('INSERT INTO tasks(title, description, date, file, document_number) VALUES (?, ?, ?, ?, ?)', [
        req.body.title,
        req.body.description,
        req.body.date,
        req.body.file,
        req.body.document_number
    ]) // aqui ya me retorna es otra cosa
    
    res.json({
        id:result[0].insertId,
        ...req.body
    })
}
export const deleteTask = async (req, res)=> {
    const connection = await connect()
    const result = await connection.query('DELETE FROM tasks WHERE id = ?',[
        req.params.id
    ])
    res.sendStatus(204)
}
export const updateTask = async (req, res)=> {
    const connection = await connect()
    const result = await connection.query('UPDATE tasks SET ? WHERE id = ?',[
        req.body,
        req.params.id
    ])
    res.sendStatus(204)
}