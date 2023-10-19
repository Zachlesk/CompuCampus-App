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
    SELECT estadoSolicitud.*, campers.*, estado.*, oferta.*, empresa.nombre_empresa AS nombre_empresa, ruta.nombre_ruta AS nombre_ruta
    FROM estadoSolicitud
    JOIN campers ON estadoSolicitud.id_camper = campers.id_camper
    JOIN estado ON estadoSolicitud.id_estado = estado.id_estado
    JOIN oferta ON estadoSolicitud.id_oferta = oferta.id_oferta
    JOIN empresa ON oferta.id_empresa = empresa.id_empresa
    JOIN ruta ON oferta.id_ruta = ruta.id_ruta
    WHERE estadoSolicitud.id_camper = ?;
  `;
  try {
    const results = await queryDB(query, [idcamper]);
    if (results.length === 0) {
      return res.status(404).json({ mensaje: "Camper no encontrado" });
    }

    // Reformatear los resultados para agrupar por estado de solicitud
    const groupedResults = {};
    results.forEach((result) => {
      const idEstSolicitud = result.id_est_solicitud;
      if (!groupedResults[idEstSolicitud]) {
        groupedResults[idEstSolicitud] = {
          estadoSolicitud: {
            id_est_solicitud: result.id_est_solicitud,
            id_camper: result.id_camper,
            id_oferta: result.id_oferta,
            id_estado: result.id_estado,
            observacion: result.observacion,
          },
          camper: {
            id_camper: result.id_camper,
            nombre_camper: result.nombre_camper,
            cv: result.cv,
            id_ruta: result.id_ruta,
            id_grupo: result.id_grupo,
          },
          estado: {
            id_estado: result.id_estado,
            nombre_estado: result.nombre_estado,
          },
          oferta: {
            id_oferta: result.id_oferta,
            id_empresa: result.id_empresa,
            id_ruta: result.id_ruta,
            titulo_oferta: result.titulo_oferta,
            descripcion_oferta: result.descripcion_oferta,
            jornada_oferta: result.jornada_oferta,
            sueldo_oferta: result.sueldo_oferta,
          },
          empresa: {
            nombre_empresa: result.nombre_empresa,
          },
          ruta: {
            nombre_ruta: result.nombre_ruta,
          },
        };
      }
    });

    res.status(200).json(Object.values(groupedResults));
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