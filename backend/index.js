import express from "express";
import dotenv from 'dotenv';
import morgan from 'morgan';

import notificacionRoutes from './src/routes/notificacion.routes.js'
import ofertaRoutes from './src/routes/oferta.routes.js'
import campersRoutes from './src/routes/campers.routes.js'
import estadoSolicitudRoutes from './src/routes/estado.solicitud.routes.js'
import { CONFIG } from "./config/credentials.js";



console.clear();
dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use("/", notificacionRoutes);
app.use("/", ofertaRoutes);
app.use("/", campersRoutes);
app.use("/", estadoSolicitudRoutes);


const main = () => {
    app.listen(CONFIG, ()=> {
        console.log(`Server is running http://${CONFIG.hostname}:${CONFIG.port}`);
    });
  };

  
main();