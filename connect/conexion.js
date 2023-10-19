import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

export async function con(req, res) {
  try {
    let con = undefined;
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    const pool = mysql.createPool(myConfig);
    con = await pool.getConnection();
    res.send(con);
  } catch (error) {
    console.error('Error creating connection:', error);
    res.send('Error creating connection');
  }
}
