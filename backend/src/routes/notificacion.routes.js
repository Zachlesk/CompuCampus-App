import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

import transporter from '../helpers/mailer.js';

app.post("/api/notificaciones/:email", async (req, res)=> {
    const { email } = req.params
    const result = transporter.sendMail({
        from: `Compucampus ${process.env.EMAIL}`,
        to: email,
        subject: "Notificación de finalización de oferta de trabajo postulante",
        text: "Se le informa al postulante que la oferta a la que se postuló ha sido cerrada. Consulta en CompuCampus si haz sido seleccionado para trabajar con nosotros.",
        html: `
        <h1> ¡Oferta de trabajo para programador camper ha sido cerrada! 🧑‍🚀 </h1>
        <p> Estimado camper candidato, </p>
        <p> Le agradecemos por su interés en nuestra oferta de trabajo. Se le informa al postulante que la oferta a la que se postuló ha sido cerrada. Consulta en CompuCampus si haz sido seleccionado para trabajar con nosotros. </p>
        <p> Siéntase libre de postularse en más oportunidades para los campers con nosotros. </p>
        <p align="center"> <img src="https://pps.whatsapp.net/v/t61.24694-24/389963331_3129953783966442_6363333156607115571_n.jpg?ccb=11-4&oh=01_AdR1hb6w0sMQq6tibG3zwOSwErUmC5huUfSbKFvX6GkbKQ&oe=653C339D&_nc_sid=000000&_nc_cat=104" width=200 alt="Logo de la Empresa">
        <h4> Atentamente: Compucampus. 🚀 </h4> </p>
      `,
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