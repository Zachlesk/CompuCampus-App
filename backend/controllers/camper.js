import cnx from '../src/connection/connection.js'
export async function postCamper(req,res){
    const {id_camper,nombre_camper,cv, id_ruta, id_grupo}=req.body
    const datos={id_camper,nombre_camper,cv, id_ruta, id_grupo};
        cnx.query(/*sql */ `INSERT INTO campers SET ?`,[datos], (err,data,fil)=>{
            if (err) {
                console.error("Error al ejecutar la consulta de inserción: ", err);
                res.status(500).send("Error al ejecutar la consulta de inserción");
                return;
            }
    
        console.log("post camper");
        res.send(JSON.stringify(data));
        console.log(data);
        })
    
    }

export async function getCampers(req,res){
    const query = "SELECT * FROM campers;";
    cnx.query(query, (err, result) => {
        if (err) {
            console.error("Error al obtener campers: " + err.message);
            return res.status(500).json({ mensaje: "Error al obtener campers" });
        }
    console.log("Campers obtenidos con éxito");
    res.status(200).json(result);
  });
}

export async function getCampersId(req,res){

    const id = req.params.id;

    const query = `
      SELECT campers.*, grupo.*, ruta.*
      FROM campers
      JOIN grupo ON campers.id_grupo = grupo.id_grupo
      JOIN ruta ON campers.id_ruta = ruta.id_ruta
      WHERE campers.id_camper = ?;
    `;
      //const results = await queryDB(query, [id]);
      cnx.query(query, [id],(err, result) => {

        if (err) {
            console.error("Error al obtener campers: " + err.message);
            return res.status(500).json({ mensaje: "Error al obtener campers" });
      }
      res.status(200).json(result[0])})
}

export async function putCampers(req,res){
  const id = req.params.id;
  console.log(id);
  const { nombre_camper, cv, id_ruta, id_grupo } = req.body;

  const camperData = {
    nombre_camper,
    cv,
    id_ruta,
    id_grupo,
  };

  const updateCamperQuery = "UPDATE campers SET ? WHERE id_camper = ?";
  db.query(updateCamperQuery, [camperData, id], (err, result) => {
    if (err) {
      console.error("Error al actualizar camper: " + err.message);
      return res.status(500).json({ mensaje: "Error al actualizar camper" });
    }
    console.log("Camper actualizado con éxito");
    res.status(200).json({ mensaje: "Camper actualizado con éxito" });
  });
}

export async function deleteCamper(req,res){
  const id = req.params.id;

  const deleteCamperQuery = "DELETE FROM campers WHERE id_camper = ?";
  db.query(deleteCamperQuery, id, (err, result) => {
    if (err) {
      console.error("Error al eliminar camper: " + err.message);
      return res.status(500).json({ mensaje: "Error al eliminar camper" });
    }
    console.log("Camper eliminado con éxito");
    res.status(200).json({ mensaje: "Camper eliminado con éxito" });
  });
}