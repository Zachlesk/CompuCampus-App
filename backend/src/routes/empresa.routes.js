import express from "express";
import { validationResult } from "express-validator";
import { getEmpresas, postEmpresa } from "../../controllers/empresa.js";
import { empresaValidation } from "../storage/empresa.js";


const app=express();

app.post("/api/empresa", empresaValidation, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }, postEmpresa);
  
app.get("/api/empresa",getEmpresas);


export default app;

