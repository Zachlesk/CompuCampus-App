import express from "express";
import { estadoValidation } from "../storage/estado.js";
import { getEstados, postEstado } from "../../controllers/estado.js";


const app=express();

app.post("/api/estado",estadoValidation,postEstado);
app.get("/api/estado",getEstados);


export default app;

