const handleHttpError = (res, message = 'Ups... algo salio mal', code = 403) => {
    res.status(code).json({ status: 404, message:message})
}

export default handleHttpError;