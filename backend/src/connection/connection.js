import mysql from "mysql2";

import config from "./config.js";

const connection = { 
  host : config.host, 
  database : config.database, 
  user: config.user, 
  password: config.password 
}; 

 const cnx = mysql.createPool(connection); 
  
 export default cnx;