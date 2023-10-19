import mysql from 'mysql2';
import { con } from '../connect/conexion.js';

export async function postCamper(req, res) {
  const { id_camper, nombre_camper, cv, id_ruta, id_grupo } = req.body;
  const datos = { id_camper, nombre_camper, cv, id_ruta, id_grupo };

  try {
    const connection = await con();
    connection.query(/*sql */ `INSERT INTO campers SET ?`, [datos], (err, data, fil) => {
      if (err) {
        console.error("Error al ejecutar la consulta de inserción: ", err);
        res.status(500).send("Error al ejecutar la consulta de inserción");
        return;
      }

      console.log("post camper");
      res.send(JSON.stringify(data));
      console.log(data);
    });
  } catch (error) {
    console.error("Error al obtener la conexión: ", error);
    res.status(500).send("Error al obtener la conexión");
  }
}
