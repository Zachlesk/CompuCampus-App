import nodemailer from 'nodemailer';
import { CONFIG } from "../../config/credentials.js";


export const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: `${CONFIG.user_email}`,
    pass: `${CONFIG.user_password}`,
  },
   
})


