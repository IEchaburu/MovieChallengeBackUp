const pg = require("pg")
const { PG_REMOTE_USER, PG_REMOTE_HOST, PG_REMOTE_DATABASE, PG_REMOTE_PASSWORD, PG_REMOTE_PORT } = process.env

const postFavSerie = async (userid, serieid) => {
    
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
    
  
    const postSerie = await db.query("INSERT INTO seriesbyusers (userid, serieid) VALUES ($1, $2) RETURNING *",[userid, serieid]);

    console.log(postSerie.rows, "log");

    return "Serie created successfully"

};

module.exports = postFavSerie;
