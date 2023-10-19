import mysql from 'mysql2';

let con= undefined;

let myConfig=JSON.parse(process.env.MY_CONNECT);
con = mysql.createPool(myConfig);

export default con;