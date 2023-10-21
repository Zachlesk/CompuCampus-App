import dotenv from 'dotenv';
import express from 'express';
import { getRutas, postRuta } from '../../controllers/ruta.js';
import {rutaValidator }from '../storage/ruta.js'

dotenv.config();

const app = express();

app.get("/api/rutas",getRutas);

app.post('/api/rutas',rutaValidator,postRuta);


export default app;