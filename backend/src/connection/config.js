import dotenv from 'dotenv';
dotenv.config();

export default {
    host : process.env.HOST,
    database : process.env.DATABASE,
    user : 'sputnik',
    password : process.env.PASSWORD
}
