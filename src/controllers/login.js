import { connect } from "../database"
import handleHttpError from "../utils/hanldeError";
import { comparePass } from "../utils/handleBcrypt";

export const userLogin = async(req, res)=> {
    console.log(req.body);
    
    try {
        const { dni, password } = req.body
        
        const connection = await connect()
        const [dataWorker] = await connection.query('SELECT * FROM workers WHERE document_number = ?',[
            dni
        ])

        connection.end()
        
        if (dataWorker.length > 0) {
            console.log(dataWorker[0]);
            const checkPassWord = await comparePass(password, dataWorker[0].password)
            
            if (checkPassWord) {
                dataWorker[0].password = null
                res.json(dataWorker[0])
                return
            }
            res.sendStatus(203)
            return
        }
        res.sendStatus(203)
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
}
