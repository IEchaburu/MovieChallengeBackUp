require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;

// ESTA FUNCION OBTIENE LAS PELICULAS MAS POPULARES DE LA API

const getPopularMovies = async () => {
    const apiMovies = [];
    let index = 1;

    //CON EL WHILE SE HACEN PETICIONES A LA CANTIDAD DE PAGINAS INDICADAS PARA ASI
    //PODER LA CANTIDAD DE PELICULAS DESEADAS, EN ESTE CASO: 100
    while (index < 6) {
        
        //LE PIDE LAS PELICULAS A LA API
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${index}&api_key=${API_KEY}`);
        
        //RECORRE EL RESULTADO Y AGRUPA LAS PELICULAS EN EL ARRAY apiMovies
        if (data.results) {
            data.results.forEach(element => {
                const movie = {
                    id: element.id,
                    name: element.title,
                    image: element.poster_path,
                    genreIds: element.genre_ids,
                    release: element.release_date,
                    rating: element.vote_average
                };
                apiMovies.push(movie);
            });
        };
        index++;
        
    }


    return apiMovies;
};

module.exports = getPopularMovies;