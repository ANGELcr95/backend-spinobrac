import { config  as dotenv } from "dotenv"

dotenv()

export const config =  {   
    host:process.env.HOST,
    user: process.env.USERS,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}