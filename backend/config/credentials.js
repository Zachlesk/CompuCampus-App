import dotenv from "dotenv"
dotenv.config();

export const CONFIG = {
  "hostname": process.env.VITE_HOSTNAME,
  "frontend_port": process.env.VITE_FRONTEND_PORT,
  "port": process.env.VITE_BACKEND_PORT,

 
};