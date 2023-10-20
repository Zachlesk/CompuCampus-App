import {config} from "dotenv";

config();

export default {
  host: process.env.VITE_HOSTNAME,
    database : process.env.DATABASE,
    user : process.env.USER,
    password : process.env.PASSWORD
}
