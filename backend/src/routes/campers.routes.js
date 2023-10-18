import dotenv from "dotenv";
import express from "express";

import cnx from "../connection/connection.js";

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

  const query = "SELECT * FROM campers WHERE id_camper = ?;";
  db.query(query, id, (err, result) => {
    if (err) {
      console.error("Error al obtener camper: " + err.message);
      return res.status(500).json({ mensaje: "Error al obtener camper" });
    }
    console.log("Camper obtenido con éxito");
    res.status(200).json(result);
  });
});

app.post("/api/campers", async (req, res) => {
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

app.patch("/api/campers/:id", async (req, res) => {
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

export default app;
