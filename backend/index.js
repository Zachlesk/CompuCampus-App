import express from "express";
import dotenv from 'dotenv';
import morgan from 'morgan';

import notificacionRoutes from './src/routes/notificacion.routes.js'
import ofertaRoutes from './src/routes/oferta.routes.js'
import campersRoutes from './src/routes/campers.routes.js'

console.clear();
dotenv.config();

const app = express();
const PORT = process.env.PORT 

app.use(express.json());
app.use(morgan('dev'));

app.use("/", notificacionRoutes);
app.use("/", ofertaRoutes);
app.use("/", campersRoutes);


const main = () => {
    app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}`)
    });
  };

  
main();