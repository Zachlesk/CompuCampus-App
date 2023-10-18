import express from "express";
import dotenv from 'dotenv';

import notificacionRoutes from './src/routes/notificacion.routes.js'

console.clear();
dotenv.config();

const app = express();
const PORT = process.env.PORT 

app.use(express.json());

app.use("/", notificacionRoutes);


const main = () => {
    app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}`)
    });
  };

  
main();