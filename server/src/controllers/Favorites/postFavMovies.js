const pg = require("pg")
const { PG_REMOTE_USER, PG_REMOTE_HOST, PG_REMOTE_DATABASE, PG_REMOTE_PASSWORD, PG_REMOTE_PORT } = process.env

const postFavMovie = async (userid, movieid) => {
    
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
    
  
    const postMovie = await db.query("INSERT INTO moviesbyusers (userid, movieid) VALUES ($1, $2) RETURNING *",[userid, movieid]);

    console.log(postMovie.rows, "log");

    return "Movie created successfully"

};

module.exports = postFavMovie;
