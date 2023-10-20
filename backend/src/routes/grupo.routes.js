import express from "express";
import { getGrupos, postGrupo } from "../../controllers/grupo.js";

const app=express();

app.post("/api/grupo",postGrupo);
app.get("/api/grupo",getGrupos);


export default app;

