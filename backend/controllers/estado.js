import cnx from '../src/connection/connection.js'

export async function postEstado(req,res){

const { id_estado, nombre_estado } = req.body;
  console.log(req.body);
  const estadoData = {
    id_estado,
    nombre_estado
  };
  cnx.query(/*sql */ `INSERT INTO estado SET ?`,[estadoData], (err,data,fil)=>{
    if (err) {
        console.error("Error al ejecutar la consulta de inserción: ", err);
        res.status(500).send("Error al ejecutar la consulta de inserción");
        return;
    }

console.log("post estado");
res.send(JSON.stringify(data));
console.log(data);
})

}

export async function getEstados(req,res){
cnx.query(/*sql */ `SELECT * FROM estado`, (err,data,fil)=>{
    if (err) {
      console.error("Error al obtener estados: " + err.message);
      return res.status(500).json({ mensaje: "Error al obtener campers" });
    }
    console.log("estados obtenidos con éxito");
    res.status(200).json(data);
  });
;

}