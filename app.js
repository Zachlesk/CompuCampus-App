import express from 'express';
import router from './routes/postTablas.js'
import dotenv from 'dotenv';
dotenv.config();
const appExpress = express();

appExpress.use(express.json());
appExpress.use("/app", router);




const config=JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}`);
});