const { Router } = require("express");
const getFavoriteMovies = require("../handlers/Favorites/getFavMovies");
const getFavoriteSeries = require("../handlers/Favorites/getFavSeries");

const favorite_router = Router();

favorite_router.get('/favorite_movies/:id', getFavoriteMovies);
favorite_router.get('/favorite_series/:id', getFavoriteSeries);


module.exports = favorite_router;