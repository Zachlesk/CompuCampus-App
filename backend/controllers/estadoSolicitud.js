import cnx from '../src/connection/connection.js'

export async function postEstadoSolicitud(req,res){

const { id_est_solicitud,id_camper,id_oferta,id_estado,observacion } = req.body;
  console.log(req.body);
  const estadoData = {
    id_est_solicitud,
    id_camper,
    id_oferta,
    id_estado,
    observacion
  };
  cnx.query(/*sql */ `INSERT INTO estadoSolicitud SET ?`,[estadoData], (err,data,fil)=>{
    if (err) {
        console.error("Error al ejecutar la consulta de inserción: ", err);
        res.status(500).send("Error al ejecutar la consulta de inserción");
        return;
    }

console.log("post estado Solicitud");
res.send(JSON.stringify(data));
console.log(data);
})

}

export async function getEstadoSolicitud(req,res){
cnx.query(/*sql */ `SELECT * FROM estadoSolicitud`, (err,data,fil)=>{
    if (err) {
      console.error("Error al obtener estadoSolicitud: " + err.message);
      return res.status(500).json({ mensaje: "Error al obtener campers" });
    }
    console.log("estado Solicitud obtenidos con éxito");
    res.status(200).json(data);
  });
;

}