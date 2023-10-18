import dotenv from "dotenv";
import express from "express";

import cnx from "../connection/connection.js";

const db = cnx;

dotenv.config();

const app = express();

app.get("/api/estadoSolicitud/camper/:idcamper", async (req, res) => {
  const idcamper = req.params.idcamper;
  console.log(idcamper);
  const query = `
    SELECT estadoSolicitud.*, campers.*
    FROM estadoSolicitud
    JOIN campers ON estadoSolicitud.id_camper =  campers.id_camper
    WHERE estadoSolicitud.id_camper = ?;
  `;
  try {
    const results = await queryDB(query, [idcamper]);
    if (results.length === 0) {
      return res.status(404).json({ mensaje: "Camper no encontrado" });
    }
    res.status(200).json(results);
  } catch (err) {
    console.error("Error en la consulta: " + err.message);
    res.status(500).json({ mensaje: "Error en la consulta" });
  }

});

app.get("/api/estadoSolicitud/", async (req, res) => {
  const query = "SELECT * FROM estadoSolicitud;";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error al obtener estadoSolicitud: " + err.message);
      return res.status(500).json({ mensaje: "Error al obtener estadoSolicitud" });
    }
    console.log("estadoSolicitud obtenidos con éxito");
    res.status(200).json(result);
  });
});


// Querys más avanzadas

function queryDB(sql, params) {
  return new Promise((resolve, reject) => {
    db.query(sql, params, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export default app;