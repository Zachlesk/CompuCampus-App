import express from "express";
import { getEstadoSolicitud, postEstadoSolicitud } from "../../controllers/estadoSolicitud.js";
import { estadoSolicitudVal } from "../storage/estadoSolicitud.js";

const app=express();

app.post("/api/estadosolicitud",estadoSolicitudVal,postEstadoSolicitud);
app.get("/api/estadosolicitud",getEstadoSolicitud);


export default app;

