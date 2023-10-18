import {config} from "dotenv";

config();

export default {
    host : process.env.HOSTNAME,
    database : process.env.DATABASE,
    user : process.env.USERR,
    password : process.env.PASSWORD
}
