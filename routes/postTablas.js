import express, { Router } from 'express';
import { postCamper } from "../controller/camper.js";

const router = Router();

router.use(express.json());

router.post("/camper/add", postCamper);

export default router;
