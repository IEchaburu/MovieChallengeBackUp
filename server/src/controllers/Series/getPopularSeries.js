require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;

// ESTA FUNCION OBTIENE LAS SERIES MAS POPULARES DE LA API

const getPopularSeries = async () => {
    const apiSeries = [];
    let index = 1


    //CON EL WHILE SE HACEN PETICIONES A LA CANTIDAD DE PAGINAS INDICADAS PARA ASI
    //PODER JUNTAR LA CANTIDAD DE SERIES DESEADAS, EN ESTE CASO: 100    
    while (index < 6) {
        
        //LE PIDE LAS SERIES A LA API
        const { data } = await axios.get(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${index}&api_key=${API_KEY}`);
    
        //RECORRE EL RESULTADO Y AGRUPA LAS SERIES EN EL ARRAY apiSeries
        if (data.results) {
            data.results.forEach(element => {
                const serie = {
                    id: element.id,
                    name: element.name,
                    image: element.poster_path,
                    genreIds: element.genre_ids,
                    release: element.first_air_date,
                    rating: element.vote_average
                };
                apiSeries.push(serie);
            });
        };
        index++;
    }

    return apiSeries;
};

module.exports = getPopularSeries;