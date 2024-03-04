const pg = require("pg")
const { PG_REMOTE_USER, PG_REMOTE_HOST, PG_REMOTE_DATABASE, PG_REMOTE_PASSWORD, PG_REMOTE_PORT } = process.env

const deleteFavMovie = async (userid, movieid) => {
    
    //EN CASO DE FALTAR INFORMACION NO SE PROCEDE A CREAR EL LA PELICULA
    if (!userid || !movieid) throw new Error ("There is data missing");

  
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
    
  
    const deleteMovie = await db.query("DELETE FROM moviesbyusers WHERE userid=$1 AND movieid=$2",[userid, movieid]);

    console.log(deleteMovie.rows, "log");

    return "Movie removed successfully"

};

module.exports = deleteFavMovie;
