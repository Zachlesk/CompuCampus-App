import dotenv from "dotenv"
dotenv.config();

export const CONFIG = {
  "hostname": process.env.VITE_HOSTNAME,
  "frontend_port": process.env.VITE_FRONTEND_PORT,
  "port": process.env.VITE_BACKEND_PORT,

  "database": process.env.DATABASE,
  "user": process.env.USER,
  "password": process.env.PASSWORD,
  "corp_email": process.env.CORP_EMAIL,
  "user_email" : process.env.USER_EMAIL,
  "user_password" : process.env.USER_PASSWORD
};