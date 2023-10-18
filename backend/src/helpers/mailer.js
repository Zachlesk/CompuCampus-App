import {config} from "dotenv";

config();

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,  
        pass: process.env.EMAIL_PASSWORD
    }
})


export default transporter