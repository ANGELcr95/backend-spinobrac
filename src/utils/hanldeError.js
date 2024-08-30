const handleHttpError = (res, response ={}, code = 403) => {
    res.status(code).json({ ...response})
}

export default handleHttpError;