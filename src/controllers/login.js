import { connect } from "../database"
import handleHttpError from "../utils/hanldeError";
import { comparePass } from "../utils/handleBcrypt";
import { responseCodes } from "../utils/responseCodes";

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
                const response = {
                    responseCode:  responseCodes.COD_RESPONSE_SUCCESS,
                    responseMessage: {
                        message: 'Usuario exito',
                        data: dataWorker[0]
                    }
                }
                return response
            }
        }
        throw new Error('Error usuario login')
 
    } catch (error) {
        const response = {
            responseCode:  responseCodes.COD_RESPONSE_ERROR_LOGIN,
            responseMessage: {
                message: error.message,
                data: null
            }
        }
        handleHttpError(response, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
}
