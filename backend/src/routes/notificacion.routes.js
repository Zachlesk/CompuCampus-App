import express from 'express';
import { CONFIG } from '../../config/credentials.js';
import { transporter } from '../helpers/mailer.js';

const app = express();


app.post("/api/notificaciones", async (req, res) => {
  const options = {
    from: `${CONFIG.corp_email}`,
    to: "angelgg2020@outlook.com",
    subject: "Haz sido postulado correctamente",
    text: "Se le informa al postulante estas dentro del proceso de seleccion. Consulta en CompuCampus si haz sido seleccionado para trabajar con nosotros.",
    html: `
        <h1> ¡Felicitaciones! 🧑‍🚀 </h1>
        <p> Estimado camper candidato, </p>
        <p> Se le informa al postulante estas dentro del proceso de selección.  </p>
        <p> Siéntase libre de postularse en más oportunidades para los campers con nosotros. </p>
        <p align="center"> <img src="https://pps.whatsapp.net/v/t61.24694-24/389963331_3129953783966442_6363333156607115571_n.jpg?ccb=11-4&oh=01_AdR1hb6w0sMQq6tibG3zwOSwErUmC5huUfSbKFvX6GkbKQ&oe=653C339D&_nc_sid=000000&_nc_cat=104" width=200 alt="Logo de la Empresa">
        <h4> Atentamente: Compucampus. 🚀 </h4> </p>
            `,
  }
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log("Error: " + err);
      res.status(500).json({
        success: false,
        error: err.message
      })
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({
        success: true,
        message: "Succesfully sent email"
      })
    }
  })
})

export default app;