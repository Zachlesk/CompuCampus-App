import dotenv from 'dotenv';
import express from 'express';

import cnx from '../connection/connection.js';

const db = cnx;

dotenv.config();

const app = express();

app.post("/api/publicar", async (req, res)=> {
    const { empresaKey, id_empresa, id_ruta, titulo_oferta, descripcion_oferta, jornada_oferta, sueldo_oferta } = req.body;

    if (!empresaKey || !id_empresa || !id_ruta || !titulo_oferta || !descripcion_oferta || !jornada_oferta || !sueldo_oferta) {
      return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }
  
    const clavePredefinida = "HVY619"

    if (empresaKey !== clavePredefinida) {
      return res.status(401).json({ mensaje: 'Clave de empresa no válida' });
    }
  
    const ofertaData = {
      id_empresa,
      id_ruta,
      titulo_oferta,
      descripcion_oferta,
      jornada_oferta,
      sueldo_oferta,
    };
  
    const insertOfertaQuery = 'INSERT INTO oferta SET ?';
    db.query(insertOfertaQuery, ofertaData, (err, result) => {
      if (err) {
        console.error('Error al insertar oferta: ' + err.message);
        return res.status(500).json({ mensaje: 'Error al publicar la oferta' });
      }
      console.log('Oferta publicada con éxito');
      res.status(200).json({ mensaje: 'Oferta publicada con éxito' });
    });
  });

app.post('/api/seleccionar', (req, res) => {
    const { id_camper, id_oferta } = req.body;
  
    const countQuery = 'SELECT COUNT(*) as seleccion_count FROM estadoSolicitud WHERE id_camper = ?';

    db.query(countQuery, [id_camper], (err, results) => {
      if (err) {
        console.error('Error al contar selecciones: ' + err.message);
        return res.status(500).json({ mensaje: 'Error al seleccionar la oferta' });
      }
  
      const seleccionCount = results[0].seleccion_count;
  
      if (seleccionCount >= 3) {
        return res.status(400).json({ mensaje: 'Ya ha alcanzado el límite de selecciones' });
      }

      const insertQuery = 'INSERT INTO estadoSolicitud (id_camper, id_oferta, id_estado, observacion) VALUES (?, ?, ?, ?)';
      const values = [id_camper, id_oferta, 1, 'Selección realizada'];
  
      db.query(insertQuery, values, (err, result) => {
        if (err) {
          console.error('Error al insertar selección: ' + err.message);
          return res.status(500).json({ mensaje: 'Error al seleccionar la oferta' });
        }
        console.log('Oferta seleccionada con éxito');
        res.status(200).json({ mensaje: 'Oferta seleccionada con éxito' });
      });
    });
  });


export default app;