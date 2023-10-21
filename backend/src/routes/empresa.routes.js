import express from "express";
import { validationResult } from "express-validator";
import { getEmpresas, postEmpresa } from "../../controllers/empresa.js";
import { empresaValidation } from "../storage/empresa.js";


const app=express();

app.post("/api/empresa", empresaValidation, postEmpresa);
  
app.get("/api/empresa",getEmpresas);


export default app;

