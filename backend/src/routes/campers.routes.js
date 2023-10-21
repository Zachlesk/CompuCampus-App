import dotenv from "dotenv";
import express from "express";

import cnx from "../connection/connection.js";
import { camperValidation } from "../storage/camper.js";

const db = cnx;

dotenv.config();

const app = express();

app.get("/api/campers", async (req, res) => {
  const query = "SELECT * FROM campers;";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error al obtener campers: " + err.message);
      return res.status(500).json({ mensaje: "Error al obtener campers" });
    }
    console.log("Campers obtenidos con éxito");
    res.status(200).json(result);
  });
});

app.get("/api/campers/:id", async (req, res) => {
  const id = req.params.id;

  const query = `
    SELECT campers.*, grupo.*, ruta.*
    FROM campers
    JOIN grupo ON campers.id_grupo = grupo.id_grupo
    JOIN ruta ON campers.id_ruta = ruta.id_ruta
    WHERE campers.id_camper = ?;
  `;

  try {
    const results = await queryDB(query, [id]);

    if (results.length === 0) {
      return res.status(404).json({ mensaje: "Camper no encontrado" });
    }

    res.status(200).json(results[0]); // Devuelve la primera fila (ya que solo se espera un resultado)
  } catch (err) {
    console.error("Error en la consulta: " + err.message);
    res.status(500).json({ mensaje: "Error en la consulta" });
  }
});

app.post("/api/campers", camperValidation,async (req, res) => {
  const { nombre_camper, cv, id_ruta, id_grupo } = req.body;
  console.log(req.body);
  const camperData = {
    nombre_camper,
    cv,
    id_ruta,
    id_grupo,
  };
  const insertCamperQuery = "INSERT INTO campers SET ?";
  db.query(insertCamperQuery, camperData, (err, result) => {
    if (err) {
      console.error("Error al insertar camper: " + err.message);
      return res.status(500).json({ mensaje: "Error al insertar camper" });
    }
    console.log("Camper insertado con éxito");
    res.status(200).json({ mensaje: "Camper insertado con éxito" });
  });
});

app.patch("/api/campers/:id",async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const { nombre_camper, cv, id_ruta, id_grupo } = req.body;

  const camperData = {
    nombre_camper,
    cv,
    id_ruta,
    id_grupo,
  };

  const updateCamperQuery = "UPDATE campers SET ? WHERE id_camper = ?";
  db.query(updateCamperQuery, [camperData, id], (err, result) => {
    if (err) {
      console.error("Error al actualizar camper: " + err.message);
      return res.status(500).json({ mensaje: "Error al actualizar camper" });
    }
    console.log("Camper actualizado con éxito");
    res.status(200).json({ mensaje: "Camper actualizado con éxito" });
  });
});

app.delete("/api/campers/:id", async (req, res) => {
  const id = req.params.id;

  const deleteCamperQuery = "DELETE FROM campers WHERE id_camper = ?";
  db.query(deleteCamperQuery, id, (err, result) => {
    if (err) {
      console.error("Error al eliminar camper: " + err.message);
      return res.status(500).json({ mensaje: "Error al eliminar camper" });
    }
    console.log("Camper eliminado con éxito");
    res.status(200).json({ mensaje: "Camper eliminado con éxito" });
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
}

export default app;
