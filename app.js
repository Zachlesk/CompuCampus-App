import express from 'express';
import app from './routes/postTablas.js'
import dotenv from 'dotenv';
dotenv.config();
const appExpress = express();

appExpress.use(express.json());
appExpress.use("/app", app);




const config=JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}`);
});