import cnx from '../src/connection/connection.js'

export async function postEmpresa(req,res){

const { id_empresa, nombre_empresa,area_empresa, descripcion_empresa} = req.body;
  console.log(req.body);
  const empresaData = {
    id_empresa,
    nombre_empresa,
    area_empresa,
    descripcion_empresa
  };
  cnx.query(/*sql */ `INSERT INTO empresa SET ?`,[empresaData], (err,data,fil)=>{
    if (err) {
        console.error("Error al ejecutar la consulta de inserción: ", err);
        res.status(500).send("Error al ejecutar la consulta de inserción");
        return;
    }

console.log("post empresa");
res.send(JSON.stringify(data));
console.log(data);
})

}

export async function getEmpresas(req,res){
cnx.query(/*sql */ `SELECT * FROM empresa`, (err,data,fil)=>{
    if (err) {
      console.error("Error al obtener empresas: " + err.message);
      return res.status(500).json({ mensaje: "Error al obtener campers" });
    }
    console.log("empresas obtenidos con éxito");
    res.status(200).json(data);
  });
;

}