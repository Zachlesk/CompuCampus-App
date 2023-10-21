import cnx from '../src/connection/connection.js'

export async function postRuta(req,res){

const { id_ruta, nombre_ruta } = req.body;
  console.log(req.body);
  const rutaData = {
    id_ruta,
    nombre_ruta
  };
  cnx.query(/*sql */ `INSERT INTO ruta SET ?`,[rutaData], (err,data,fil)=>{
    if (err) {
        console.error("Error al ejecutar la consulta de inserción: ", err);
        res.status(500).send("Error al ejecutar la consulta de inserción");
        return;
    }

console.log("post ruta");
res.send(JSON.stringify(data));
console.log(data);
})

}

export async function getRutas(req,res){
cnx.query(/*sql */ `SELECT * FROM ruta`, (err,data,fil)=>{
    if (err) {
      console.error("Error al obtener rutas: " + err.message);
      return res.status(500).json({ mensaje: "Error al obtener campers" });
    }
    console.log("rutas obtenidos con éxito");
    res.status(200).json(data);
  });
;

}