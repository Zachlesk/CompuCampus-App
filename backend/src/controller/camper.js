

export async function postCamper(){
    const {id_camper,nombre_camper,cv, id_ruta, id_grupo}=req.body
    const datos={id_camper,nombre_camper,cv, id_ruta, id_grupo};
        con.query(/*sql */ `INSERT INTO tipo_documento SET ?`,[datos], (err,data,fil)=>{
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