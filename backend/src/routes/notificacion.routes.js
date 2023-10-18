import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

import transporter from '../helpers/mailer.js';

app.post("/api/notificaciones/:email/message", async (req, res)=> {
    const { email } = req.params
    const result = transporter.sendMail({
        from: `Compucampus ${process.env.EMAIL}`,
        to: email,
        subject: "Notificación de finalización de oferta de trabajo postulante",
        body: "Se le informa al postulante que la oferta a la que se postuló ha sido cerrada. Consulta en CompuCampus si haz sido seleccionado para trabajar con nosotros."
    })
    console.log({result})
    res.status(200).json(
        {
            ok: true,
            message: "¡Mensaje enviado con éxito!"
        }
    )
})

export default app;