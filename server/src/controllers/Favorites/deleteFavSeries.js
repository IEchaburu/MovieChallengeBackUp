const pg = require("pg")
const { PG_REMOTE_USER, PG_REMOTE_HOST, PG_REMOTE_DATABASE, PG_REMOTE_PASSWORD, PG_REMOTE_PORT } = process.env

const deleteFavSerie = async (userid, serieid) => {
    
    //EN CASO DE FALTAR INFORMACION NO SE PROCEDE A CREAR EL LA PELICULA
    if (!userid || !serieid) throw new Error ("There is data missing");

  
    //CONEXION  A BASE DE DATOS REMOTA
    const db = new pg.Client({
        user: PG_REMOTE_USER,
        host: PG_REMOTE_HOST,
        database: PG_REMOTE_DATABASE,
        password: PG_REMOTE_PASSWORD,
        port: PG_REMOTE_PORT,
        ssl: {
        rejectUnauthorized: false
        }
    });

    db.connect();
    
  
    const deleteSerie = await db.query("DELETE FROM seriesbyusers WHERE userid=$1 AND serieid=$2",[userid, serieid]);

    console.log(deleteSerie.rows, "log");

    return "Serie removed successfully"

};

module.exports = deleteFavSerie;
