import express from "express";
import dotenv from 'dotenv';
import morgan from 'morgan';

import notificacionRoutes from './src/routes/notificacion.routes.js'
import ofertaRoutes from './src/routes/oferta.routes.js'
import campersRoutes from './src/routes/campers.routes.js'
import gruposRoutes from './src/routes/grupo.routes.js'
import empresaRoutes from './src/routes/empresa.routes.js'
console.clear();
dotenv.config();

const app = express();
const PORT = process.env.PORT 

app.use(express.json());
app.use(morgan('dev'));

app.use("/", notificacionRoutes);
app.use("/", ofertaRoutes);
app.use("/", campersRoutes);
app.use("/", gruposRoutes);
app.use("/",empresaRoutes);

const main = () => {
    app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}`)
    });
  };

  
main();