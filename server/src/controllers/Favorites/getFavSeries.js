require('dotenv').config();
const axios = require('axios');
const bcrypt = require("bcrypt");
const pg = require("pg");
const serieById = require("../../controllers/Series/getSeriesById");
const { PG_REMOTE_USER, PG_REMOTE_HOST, PG_REMOTE_DATABASE, PG_REMOTE_PASSWORD, PG_REMOTE_PORT } = process.env

const getFavSeries = async (id) => {
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

    const findSeries = await db.query("SELECT * FROM seriesbyusers WHERE userid = $1", [id]);
    if (findSeries.rowCount == 0) throw new Error ("There are no favorite series!");
    
    let favSeries = [];
    
    for (const favorite of findSeries.rows) {
        let sID = favorite.serieid;
        const data = await serieById(sID);
        //console.log(data, "la data")
        const serie = {
            id: data.id,
            name: data.name,
            image: data.image        
        };

        favSeries.push(serie);
        console.log(favSeries, "las favoritas");
    };

    console.log(favSeries, "las favoritas");

    return favSeries;
    

};

module.exports = getFavSeries;