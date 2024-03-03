require('dotenv').config();
const axios = require('axios');
const bcrypt = require("bcrypt");
const pg = require("pg");
const movieById = require("../../controllers/Movies/getMoviesByID");
const { PG_REMOTE_USER, PG_REMOTE_HOST, PG_REMOTE_DATABASE, PG_REMOTE_PASSWORD, PG_REMOTE_PORT } = process.env

const getFavMovies = async (id) => {
    //EN CASO DE FALTAR INFORMACION NO SE PROCEDE A BUSCAR LAS FAVORITAS
    if (!id) throw new Error ("There is data missing");

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

    const findMovies = await db.query("SELECT * FROM moviesbyusers WHERE userid = $1", [id]);
    if (findMovies.rowCount == 0) throw new Error ("There are no favorite movies!");
    
    //console.log(findMovies.rows[0],"fav movies");
    let favMovies = [];
    
    for (const favorite of findMovies.rows) {
        let mID = favorite.movieid;
        const data = await movieById(mID);
        //console.log(data, "la data")
        const movie = {
            id: data.id,
            name: data.name,
            image: data.image        
        };
        //console.log(movie, "la movie");

        favMovies.push(movie);
        console.log(favMovies, "las favoritas");
    };

    console.log(favMovies, "las favoritas");

    return favMovies
    

};

module.exports = getFavMovies;