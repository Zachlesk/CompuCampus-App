import nodemailer from 'nodemailer';
import { CONFIG } from "../../config/credentials.js";


export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
        user: CONFIG.user_email,  
        pass: CONFIG.user_password
    }
})


