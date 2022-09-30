import bcrypt from 'bcryptjs'

export const encrypt = async (textPlain) =>   {
    const hash = await bcrypt.hash(textPlain,10)
    return hash

}

export const comparePass =  async (passWordPlain, hashPassword) => {
    return await bcrypt.compare(passWordPlain, hashPassword)
}
