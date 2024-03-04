const { Router } = require("express");
const getFavoriteMovies = require("../handlers/Favorites/getFavMovies");
const getFavoriteSeries = require("../handlers/Favorites/getFavSeries");
const postFavoriteMovie = require("../handlers/Favorites/postFavMovie");
const postFavoriteSerie = require("../handlers/Favorites/postFavSerie");
const deleteFavoriteMovie = require("../handlers/Favorites/deleteFavMovie");
const deleteFavoriteSerie = require("../handlers/Favorites/deleteFavSerie");

const favorite_router = Router();

favorite_router.get('/favorite_movies/:id', getFavoriteMovies);
favorite_router.get('/favorite_series/:id', getFavoriteSeries);
favorite_router.post('/post_movie', postFavoriteMovie);
favorite_router.post('/post_serie', postFavoriteSerie);
favorite_router.post('/delete_movie', deleteFavoriteMovie);
favorite_router.post('/delete_serie', deleteFavoriteSerie);


module.exports = favorite_router;