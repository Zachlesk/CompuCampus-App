import dotenv from "dotenv";
import express from "express";
import { camperValidation } from "../storage/camper.js";
import { deleteCamper, getCampers, getCampersId, postCamper, putCampers } from "../../controllers/camper.js";


dotenv.config();

const app = express();

app.get("/api/campers",getCampers);

app.get("/api/campers/:id",getCampersId)

app.post("/api/campers", camperValidation,postCamper);

app.put("/api/campers/:id",putCampers);

app.delete("/api/campers/:id", deleteCamper);


export default app;
